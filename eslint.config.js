import tseslint from 'typescript-eslint'

export default tseslint.config({
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-refresh',
    'react-hooks',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-uses-react': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/no-unescaped-entities': ['off'],
  },
})
