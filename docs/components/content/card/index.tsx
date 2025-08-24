import { clsx } from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

export * from './module-cards'

interface CardProps {
  title?: string
  description?: ReactNode
  children?: ReactNode
  className?: string
  variant?: 'default' | 'feature' | 'warning'
  icon?: ReactNode
  href?: string
}

export const Card = ({
  title,
  description,
  children,
  className,
  variant = 'default',
  icon,
  href,
}: CardProps) => {
  const baseClasses = 'rounded-lg border p-6 transition-all duration-200'

  const variantClasses = {
    default:
      'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-900/20',
    feature:
      'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
  }

  const cardContent = (
    <>
      {(title || icon) && (
        <div className="flex items-center gap-2 mb-3">
          {icon && <div className="flex-shrink-0 text-gray-600 dark:text-gray-400">{icon}</div>}
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          )}
        </div>
      )}

      {description && (
        <div className="text-gray-600 dark:text-gray-300 mb-4 last:mb-0 text-sm">{description}</div>
      )}

      {children && <div className="text-gray-800 dark:text-gray-200">{children}</div>}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={clsx(baseClasses, variantClasses[variant], 'block cursor-pointer', className)}
      >
        {cardContent}
      </Link>
    )
  }

  return <div className={clsx(baseClasses, variantClasses[variant], className)}>{cardContent}</div>
}
