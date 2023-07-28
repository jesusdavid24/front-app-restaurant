module.exports = {
  env: {
    es2021: true,
  },
  extends: 'airbnb',
  'react/jsx-runtime': 'plugin:react/jsx-runtime',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/function-component-definition': [
      'error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-unresolved': 'off',
    'arrow-body-style': ['error', 'always'],
  },
};
