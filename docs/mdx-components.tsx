import { Image } from 'nextra/components'
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'

const { ...docsComponents } = getDocsMDXComponents()

export function useMDXComponents(components = {}) {
  return {
    ...docsComponents,
    // Disable default zoom and add custom styles
    // https://nextra.site/docs/guide/image#disable-image-zoom
    // @ts-expect-error -- FIXME
    img: (props) => <Image {...props} className="rounded-xl border drop-shadow-sm" />,
    ...components,
  }
}
