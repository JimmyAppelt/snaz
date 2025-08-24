import eslintPluginNext from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const react = [
  {
    name: 'uxthemes-docs/react',
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': eslintPluginNext,
    },
    rules: {
      'react/display-name': 'off',
      'react/no-children-prop': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: '^(useRefEffect|useSelect|useBlockDroppableRef)$',
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
    },
  },
]

export default react
