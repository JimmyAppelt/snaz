import eslint from '@eslint/js'
import gitignore from 'eslint-config-flat-gitignore'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const base = [
  { ...gitignore({ strict: false }), name: 'gitignore' },
  { ...eslint.configs.recommended, name: 'eslint/recommended' },
  ...tseslint.configs.recommended,
  {
    name: 'uxthemes-docs/base',
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
      'import/internal-regex': '^(@\\/|@uxthemes-docs\\/|@components\\/[^/]+$)',
    },
  },
]

export default base
