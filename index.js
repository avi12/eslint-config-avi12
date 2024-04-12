export default [
  {
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
      'object-curly-spacing': ['warn', 'always'],
      'quote-props': ['warn', 'as-needed'],
      'comma-dangle': ['warn', 'never'],
      curly: ['warn', 'all'],
      'object-property-newline': ['warn'],
      'array-element-newline': ['warn', 'consistent'],
      'import/order': [
        'warn',
        { groups: ['external', 'internal'], alphabetize: { order: 'asc' } },
      ],
      'object-property-newline': [
        'warn',
        {
          allowMultiplePropertiesPerLine: true,
        },
      ],
    },
  },
];
