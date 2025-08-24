import config from '@snaz/prettier-config'
import prettierPlugin from 'eslint-plugin-prettier'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const prettier = [
  {
    name: 'uxthemes-docs/prettier',
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['warn', config],
    },
  },
]

export default prettier
