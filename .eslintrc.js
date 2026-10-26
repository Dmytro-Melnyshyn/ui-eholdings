module.exports = {
  root: true,
  extends: ['@folio/eslint-config-stripes'],
  overrides: [
    {
      files: ['**/*.test.js'],
      rules: {
        'no-unused-expressions': 'off',
        'react/prop-types': 'off'
      }
    }
  ],
  rules: {
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^_'
    }]
  }
};
