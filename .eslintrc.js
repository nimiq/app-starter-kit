const airbnb = require('eslint-config-airbnb-base/rules/style');
// Do not restrict usage of for...of
const noRestrictedSyntax = airbnb.rules['no-restricted-syntax'].slice(1).filter((r) => r.selector !== 'ForOfStatement');
const memberDelimiterStyleOverrides = {
    overrides: { typeLiteral: { multiline: { delimiter: 'comma' }, singleline: { delimiter: 'comma' } } },
};
module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    root: true,
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'class-methods-use-this': 'off',
        'function-paren-newline': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'max-len': ['error', 120],
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-continue': 'off',
        'no-confusing-arrow': 'off',
        'no-floating-decimal': 'off',
        'no-return-assign': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'import/prefer-default-export': 'off',
        'implicit-arrow-linebreak': 'off',
        'object-curly-newline': ['error', { ObjectPattern: { multiline: true } }],
        'prefer-const': ['error', { destructuring: 'all' }],
        'no-nested-ternary': 'off',
        'no-restricted-syntax': ['error', ...noRestrictedSyntax],

        '@typescript-eslint/member-delimiter-style': ['error', memberDelimiterStyleOverrides],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-namespace': 'off',

        // False positives that are checked by TS
        'no-redeclare': 'off',
        'import/no-unresolved': 'off',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
        {
            files: ['*.config.js', '.eslintrc.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
};
