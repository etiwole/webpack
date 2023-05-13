module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint-config-airbnb',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
    },
};
