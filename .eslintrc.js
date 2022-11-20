module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'next/core-web-vitals',
    'prettier',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    '@typescript-eslint/no-use-before-define': [
      'error',
      { 'functions': false, 'variables': false },
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'prettier/prettier': ['error', { endOfLine: 'lf', tabWidth: 2 }],
  },
  overrides: [
    {
      'files': ['*.cy.js', '*.cy.ts'],
      'rules': {
        'jest/valid-expect': 'off',
        'jest/expect-expect': 'off',
        'jest/no-focused-tests': 'off',
        'jest/valid-expect-in-promise': 'off',
      },
    },
  ],
};
