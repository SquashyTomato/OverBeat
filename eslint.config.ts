import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
    globalIgnores(['dist']),
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            prettier,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
                project: ['./tsconfig.json'],
            },
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
]);
