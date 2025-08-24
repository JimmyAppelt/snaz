import remarkFrontmatter from 'remark-frontmatter'
import remarkMdx from 'remark-mdx'

const config = {
  plugins: [remarkMdx, remarkFrontmatter],
}

export default config
