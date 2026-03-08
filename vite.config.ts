import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

const outDir = './dist/shared-utils';

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';

    return {
        cacheDir: './.vite',
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
    };
});
