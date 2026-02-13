import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { JSX } from 'react'

import homeExample from '../public/assets/docs/home-example.png'

export const metadata: Metadata = {
  description:
    'Build fast, customizable, and content-rich websites with Flatsome and Flatsome Blocks. Powered by WordPress & WooCommerce.',
}

export default function IndexPage(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden pt-16 md:pt-24 w-full max-w-4xl mx-auto">
      {/* Hero Section */}
      <h1 className="w-3xl text-4xl md:text-5xl lg:text-7xl font-semibold px-4 tracking-tight max-w-4xl text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-100 dark:to-gray-400">
        Snaz
      </h1>
      <h2 className="text-lg md:text-2xl pt-4 md:pt-6 px-4 tracking-tight max-w-4xl text-center text-gray-600 dark:text-neutral-300">
        Stream tool documentation and download.
      </h2>

      <div className="flex flex-col items-center my-8 md:my-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-base md:text-lg px-4">
          <Link href="/docs" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-3 rounded-lg shadow-lg shadow-blue-900/20 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer">
              Snaz Docs
            </button>
          </Link>
          <Link
            href="https://github.com/JimmyAppelt/snaz/releases"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-900 dark:text-white font-medium px-5 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 transform hover:-translate-y-0.5 transition-all duration-200 hover:border-gray-400 dark:hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-neutral-400 focus:ring-opacity-50 cursor-pointer">
              Download Snaz
            </button>
          </Link>
        </div>
      </div>

      <Image src={homeExample} alt="Snaz" width={699} height={799} />

      <div className="mt-10"></div>
    </div>
  )
}
