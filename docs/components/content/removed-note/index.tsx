import { Link } from 'nextra-theme-docs'
import { ReactNode } from 'react'

interface RemovedNoteProps {
  children?: ReactNode
}

export function RemovedNote({ children }: RemovedNoteProps) {
  return (
    <div className="nextra-callout mt-6 flex rounded-lg border border-orange-200 bg-orange-100 p-4 dark:border-orange-300/40 dark:bg-orange-900/20">
      <div className="text-orange-900 dark:text-orange-200">
        <p className="flex items-center flex-wrap mt-2 gap-3">
          This functionality is removed in 1.12.7.0!
          <Link className="text-sm" href="/docs/faq/#v11270-vs-v11260">
            1.12.7.0 vs 1.12.6.0 →
          </Link>
        </p>

        <p className="text-xs mt-2">
          You can still use the feature by installing 1.12.6.0 (as long as you don't experience
          issues).
        </p>
        {children}
      </div>
    </div>
  )
}
