module.exports = {
    env: {
      node: true,
      es2021: true,
    },
    parser: '@typescript-eslint/parser', // Use TypeScript parser for both JS and TS files
    extends: [
      'eslint:recommended',
      'plugin:node/recommended',
      'plugin:@typescript-eslint/recommended', // TypeScript support
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'node',
      '@typescript-eslint', // TypeScript plugin
    ],
    overrides: [
      {
        files: ['*.ts', '*.tsx'], // Rules for TypeScript files
        rules: {
          '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // Allow unused variables that start with "_"
        },
      },
      {
        files: ['*.js'], // Rules for JavaScript files
        rules: {
          'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // Same rule for JavaScript
        },
      },
    ],
    rules: {
      'semi': ['error', 'always'], // Enforce semicolons
      'quotes': ['error', 'single'], // Use single quotes
      'no-console': 'off', // Allow console.log for Node.js
      'node/no-unsupported-features/es-syntax': 'off', // Allow import/export in Node.js
    },
  };