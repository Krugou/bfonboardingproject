module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals',
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  ignorePatterns: ['**/build/**', '**/node_modules/**'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // Add your custom rules here
  },
};
