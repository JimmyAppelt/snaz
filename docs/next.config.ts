import nextra from 'nextra'

const isProd = process.env.NODE_ENV === 'production'

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  search: {
    codeblocks: false,
  },
})

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/snaz' : '',
  assetPrefix: isProd ? '/snaz' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@/components/annotations', '@/components/icons'],
  },
  webpack(config) {
    // rule.exclude doesn't work starting from Next.js 15
    const { test: _test, ...imageLoaderOptions } = config.module.rules.find(
      // @ts-expect-error -- fixme
      (rule) => rule.test?.test?.('.svg'),
    )
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /svgr/,
          use: ['@svgr/webpack'],
        },
        imageLoaderOptions,
      ],
    })
    return config
  },
  turbopack: {
    rules: {
      './app/components/annotations/**/*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
      './app/components/icons/**/*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
})
