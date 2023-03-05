module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-one-expression-per-line': [2, { allow: 'literal' }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
