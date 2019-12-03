module.exports = {
    root: true,
    env: {
        browser: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'max-len': ['error', 120],
        'no-underscore-dangle': 'off',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'object-curly-newline': ['error', { ObjectPattern: { multiline: true } }],
        'prefer-const': ['error', { destructuring: 'all' }],
        'no-nested-ternary': 'off',

        // Typescript plugin replacements
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',

        // False positives that are checked by TS
        'no-redeclare': 'off',
        'no-param-reassign': 'off',
        'import/no-unresolved': 'off',
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
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
    ],
};
