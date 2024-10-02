module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    parser: '@typescript-eslint/parser', // Use TypeScript parser for both JS and TS files
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@typescript-eslint/recommended', // TypeScript support
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'react-hooks',
      'jsx-a11y',
      '@typescript-eslint', // TypeScript plugin
    ],
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'], // Rules for TypeScript files
        rules: {
          '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // Allow unused variables that start with "_"
        },
      },
      {
        files: ['*.js', '*.jsx'], // Rules for JavaScript files
        rules: {
          'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // Same rule for JavaScript
        },
      },
    ],
    rules: {
      'semi': ['error', 'always'], // Enforce semicolons
      'quotes': ['error', 'single'], // Use single quotes
      'react/prop-types': 'off', // Disable prop-types since we're using TypeScript
      'react/react-in-jsx-scope': 'off', // No need to import React with JSX transform
      'jsx-a11y/anchor-is-valid': 'off', // Allow <a> tags without href (useful for React Router)
    },
  };