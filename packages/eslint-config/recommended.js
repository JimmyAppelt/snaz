import base from './base.js'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const recommended = [
  ...base,
  {
    name: 'uxthemes-docs/recommended',
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-undef': 'off', // Let TypeScript handle this.
      'no-unused-vars': 'off',
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: { caseInsensitive: true, order: 'asc' },
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
          pathGroups: [
            { pattern: '@uxthemes-docs/**', group: 'internal', position: 'after' },
            { pattern: '@/**', group: 'internal', position: 'after' },
          ],
        },
      ],
    },
  },
]

export default recommended
