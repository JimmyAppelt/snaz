import base from './base.js'
import prettier from './prettier.js'
import react from './react.js'
import recommended from './recommended.js'

export { default as globals } from 'globals'
export { config } from 'typescript-eslint'

export const configs = {
  base,
  prettier,
  react,
  recommended,
}
