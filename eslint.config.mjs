import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    globalIgnores(['node_modules/', 'dist/', 'eslint.config.mjs']),
    {
        files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.js', '**/*.mjs', '**/*.cjs'],
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 2024,
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.mjs', 'tools/*.mjs', '.github/scripts/*.js'],
                },
            },
        },
        rules: {},
    },
    {
        files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
        rules: {
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
        },
    },
    {
        files: ['.github/scripts/*.js', 'tools/*.mjs'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    eslintConfigPrettier,
]);
