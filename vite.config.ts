/// <reference types="vitest/config" />
import { readFile, writeFile } from 'fs/promises';
import { defineConfig, Plugin } from 'vite';
import dtsPlugin from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const outDir = './dist/shared-utils';
const isCI = Boolean(process.env['CI']);

function generatePackageJson(outDir: string): Plugin {
    return {
        name: 'generate-package-json',
        async closeBundle() {
            const raw = await readFile('./package.json', 'utf-8');
            const { scripts, packageManager, devEngines, publishConfig, devDependencies, ...rest } = JSON.parse(raw);

            const distPkg = {
                ...rest,
                exports: { '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' } },
                main: './index.cjs',
                module: './index.js',
                types: './index.d.ts',
            };

            await writeFile(`${outDir}/package.json`, JSON.stringify(distPkg, null, 2) + '\n');
        },
    };
}

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';

    return {
        root: __dirname,
        build: {
            emptyOutDir: true,
            lib: {
                entry: './src/index.ts',
                fileName: 'index',
                formats: ['es', 'cjs'],
            },
            minify: isProduction,
            outDir: outDir,
            sourcemap: !isProduction,
        },
        plugins: [
            generatePackageJson(outDir),
            dtsPlugin({ rollupTypes: true, tsconfigPath: './tsconfig.json' }),
            viteStaticCopy({
                targets: [
                    { src: 'src/README.md', dest: '.', rename: { stripBase: true } },
                    { src: 'LICENSE', dest: '.' },
                ],
            }),
        ],
        test: {
            clearMocks: true,
            coverage: {
                enabled: true,
                exclude: ['*/index.ts'],
                include: ['src/**/*.ts'],
                provider: 'v8',
                reportOnFailure: true,
                reporter: [['html', { subdir: '.' }], 'text-summary'],
                reportsDirectory: 'coverage/shared-utils',
                thresholds: {
                    branches: 80,
                    functions: 80,
                    lines: 80,
                    statements: 80,
                },
            },
            environment: 'node',
            globals: true,
            include: ['src/**/*.spec.ts'],
            name: 'shared-utils',
            open: false,
            passWithNoTests: true,
            reporters: [
                'dot',
                ['html', { outputFile: 'reports/shared-utils/index.html' }],
                ...(isCI ? ['github-actions'] : []),
            ],
            sequence: {
                shuffle: true,
            },
            typecheck: {
                tsconfig: './tsconfig.spec.json',
            },
            uiBase: '/shared-utils/',
        },
    };
});
