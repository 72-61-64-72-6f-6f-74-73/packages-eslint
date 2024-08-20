/** @type {import("eslint").Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'turbo'
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
    },
    ignorePatterns: ["node_modules/", "dist/"],
};
