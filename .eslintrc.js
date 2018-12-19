// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'react'
  ],
  rules: {
    'indent': ['error', 2],
    // allow async-await
    'generator-star-spacing': 'off',
    'react/jsx-uses-vars': 1,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
