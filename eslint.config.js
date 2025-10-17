import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import love from 'eslint-config-love';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist']),
    {
        ...love,
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            tseslint.configs.strict,
            tseslint.configs.stylistic,
            reactRefresh.configs.vite
        ],
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            'react': react,
            'react-hooks': reactHooks
        },
        rules: {
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            camelcase: 'off',
            curly: ['warn', 'multi-or-nest'],
            indent: [
                'warn',
                4,
                { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }
            ],
            semi: ['error', 'always'],
            'dot-notation': 'off',
            'import/no-absolute-path': 'off',
            'jsx-quotes': ['error', 'prefer-double'],
            'key-spacing': [
                'warn',
                { mode: 'minimum' }
            ],
            'keyword-spacing': 'off',
            'multiline-ternary': 'off',
            'no-multi-spaces': 'off',
            'no-multiple-empty-lines': [
                'error',
                { max: 3, maxEOF: 0, maxBOF: 0 }
            ],
            'no-tabs': [
                'error',
                { allowIndentationTabs: true }
            ],
            'no-trailing-spaces': [
                'warn',
                { skipBlankLines: true }
            ],
            'no-unused-vars': [
                'warn',
                { argsIgnorePattern: '_', caughtErrors: 'none' }
            ],
            'operator-linebreak': [
                'error',
                'after',
                { overrides: { '&&': 'ignore', '?': 'ignore', ':': 'ignore' } }
            ],
            'space-before-function-paren': ['error', 'never'],
            'template-curly-spacing': ['error', 'always'],
            'react/button-has-type': 'error',
            'react/destructuring-assignment': ['error', 'always'],
            'react/display-name': 'off',
            'react/function-component-definition': [
                2,
                { namedComponents: 'arrow-function' }
            ],
            'react/jsx-boolean-value': ['error', 'never'],
            'react/jsx-closing-bracket-location': 'error',
            'react/jsx-closing-tag-location': 'error',
            'react/jsx-curly-brace-presence': ['error', 'never'],
            'react/jsx-curly-newline': [
                'warn',
                { multiline: 'consistent', singleline: 'consistent' }
            ],
            'react/jsx-handler-names': 'error',
            'react/jsx-max-props-per-line': [
                'warn',
                { maximum: 1 }
            ],
            'react/jsx-newline': [
                1,
                { prevent: false }
            ],
            'react/jsx-no-useless-fragment': [
                'error',
                { allowExpressions: true }
            ],
            'react/jsx-pascal-case': 'error',
            'react/jsx-tag-spacing': [
                'error',
                { beforeSelfClosing: 'always' }
            ],
            'react/no-access-state-in-setstate': 'error',
            'react/no-array-index-key': 'error',
            'react/no-arrow-function-lifecycle': 'error',
            'react/no-children-prop': 'off',
            'react/no-multi-comp': 'error',
            'react/no-typos': 'error',
            'react/no-unused-prop-types': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react/self-closing-comp': [
                'error',
                { component: true, html: true }
            ],
            'react/sort-prop-types': [
                'error',
                { requiredFirst: true }
            ],
            'react/style-prop-object': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ],
            '@typescript-eslint/no-empty-object-type': [
                'error',
                { allowInterfaces: 'with-single-extends' }
            ],
            '@typescript-eslint/no-empty-function': [
                'error',
                { allow: ['arrowFunctions'] }
            ],
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true
                }
            ]
        }
    }
]);
