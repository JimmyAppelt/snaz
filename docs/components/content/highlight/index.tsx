import { ReactNode } from 'react'

interface HighlightProps {
  children: ReactNode
}

export const Highlight = ({ children }: HighlightProps) => {
  return (
    <span className="bg-blue-100 dark:bg-blue-900/30 font-semibold dark:text-blue-200 px-1.5 py-0.5 rounded-md">
      {children}
    </span>
  )
}
