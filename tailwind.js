module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:tailwindcss/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
      'tailwindcss',
      '@typescript-eslint',
    ],
    rules: {
      'semi': ['error', 'always'], // Enforce semicolons
      'quotes': ['error', 'single'], // Use single quotes
      'tailwindcss/classnames-order': 'warn', // Enforce alphabetical order of Tailwind CSS classes
      'tailwindcss/no-custom-classname': 'off', // Allow custom class names along with Tailwind
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // Allow unused variables starting with "_"
    },
  };