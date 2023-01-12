module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'no-prototype-builtins': 0,
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-debugger': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent-props': [2, 'first'],
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'multiline' }],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts'] }],
  },
};
