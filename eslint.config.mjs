import path from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';

// eslint plugins
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});


export default defineConfig([
    sonarjs.configs.recommended,
    unicorn.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,tsx}'],

        extends: fixupConfigRules(compat.extends(
            'next/core-web-vitals',
            'next/typescript',
        )),

        languageOptions: {
            globals: {
                ...globals.node,
            },
            ecmaVersion: 2024,
            sourceType: 'module',
        },

        settings: {
        },

        rules: {
            'max-len': ['warn', { code: 120 }],
            'new-cap': ['error', { capIsNew: false }],
            'object-curly-spacing': ['error', 'always'],
            'require-jsdoc': 'off',

            'unicorn/catch-error-name': ['error', { name: 'e' }],
            'unicorn/expiring-todo-comments': 'off',
            'unicorn/filename-case': ['error', { cases: { camelCase: true } }],
            'unicorn/no-empty-file': 'off',
            'unicorn/no-negated-condition': 'off',
            'unicorn/no-null': 'off',
            'unicorn/prevent-abbreviations': 'warn',
        },
    },
]);