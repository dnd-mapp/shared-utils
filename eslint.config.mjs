import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores(['node_modules/', 'dist/']),
    {
        files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.js', '**/*.mjs', '**/*.cjs'],
        extends: [eslint.configs.recommended, tseslint.configs.recommended, tseslint.configs.stylistic],
        rules: {},
    },
    {
        files: ['.github/scripts/**/*', 'tools/**/*'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ['src/**/*'],
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 2024,
            parserOptions: {
                ecmaFeatures: {
                    impliedStrict: true,
                },
            },
        },
        rules: {},
    },
    eslintConfigPrettier,
]);
