declare module '*.svg?svgr' {
  import type { FC, SVGProps, SVGElement } from 'react'
  const ReactComponent: FC<SVGProps<SVGElement>>

  export default ReactComponent
}

declare module '*.mdx' {
  import type { MDXComponents } from 'nextra/mdx-components'
  import type { FC } from 'react'
  const ReactComponent: FC<{
    components?: MDXComponents
  }>
  export default ReactComponent
}
