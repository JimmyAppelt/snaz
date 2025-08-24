import type { Metadata } from 'next'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import type { ReactNode } from 'react'

import { Logo } from '@/components/media'
import 'nextra-theme-docs/style.css'
import './global.css'

export const metadata: Metadata = {
  description: 'Documentation for Snaz',
  keywords: [
    'Snaz',
    'Documentation',
    'OBS',
    'Stream',
    'Twitch',
    'Countdown',
    'Timer',
    'Streaming',
    'Overlay',
  ],
  title: {
    default: 'Snaz Docs',
    template: '%s | Snaz Docs',
  },
}

const banner = (
  <Banner storageKey="flatsome-4-release" dismissible={false}>
    <a href="https://nextra.site" target="_blank" rel="noopener">
      🎉 Snaz x.x is released. Read more →
    </a>
  </Banner>
)
const navbar = <Navbar logo={<Logo />} projectLink="https://github.com/JimmyAppelt/snaz" />
const footer = (
  <Footer>
    <p className="mt-6 text-xs">© {new Date().getFullYear()} The Snaz Project.</p>
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#141d29' }} />
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/JimmyAppelt/snaz/tree/master/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          // footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
