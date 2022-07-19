module.exports = {
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    'prefer-const': 'warn',
    'no-async-promise-executor': 'off',
    semi: 'warn',
    quotes: [
      'warn',
      'double',
      {
        allowTemplateLiterals: true,
      },
    ],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],
    'object-curly-spacing': ['warn', 'always'],
    'quote-props': ['warn', 'as-needed'],
    'comma-dangle': ['warn', 'never'],
    curly: ['warn', 'all'],
    'object-property-newline': ['warn'],
    'max-len': [
      'warn',
      {
        code: 120,
      },
    ],
    'array-bracket-newline': ['warn', 'never'],
    'array-element-newline': [
      'warn',
      {
        multiline: true,
      },
    ],
    'import/order': 'warn',
    'object-property-newline': [
      'warn',
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
    {
      files: ['*.json'],
      rules: {
        'quote-props': ['warn', 'always'],
        semi: ['warn', 'never'],
      },
    },
  ],
};
