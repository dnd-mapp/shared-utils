/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

const outDir = './dist/shared-utils';
const isCI = Boolean(process.env['CI']);

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
        plugins: [dtsPlugin({ rollupTypes: true, tsconfigPath: './tsconfig.json' })],
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
