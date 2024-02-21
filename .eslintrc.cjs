module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'quotes': ['warn', 'single'],
    'jsx-quotes': [ 'warn', 'prefer-single' ],
    'no-console': 'warn',
    'max-len': [ 'error', { 'code': 120 } ],
    'prefer-const': 'error',
    'indent': [ 'warn', 4, { 'SwitchCase': 1 } ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'semi': [ 'warn', 'always' ]
  },
}