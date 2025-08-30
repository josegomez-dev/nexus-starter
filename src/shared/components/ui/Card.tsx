import React from 'react'
import { clsx } from 'clsx'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  interactive?: boolean
  loading?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    variant = 'default',
    size = 'md',
    interactive = false,
    loading = false,
    children,
    ...props
  }, ref) => {
    const baseClasses = clsx(
      'rounded-lg transition-all duration-200',
      {
        // Variants
        'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700': variant === 'default',
        'bg-transparent border-2 border-gray-300 dark:border-gray-600': variant === 'outlined',
        'bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700': variant === 'elevated',
        'bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/50': variant === 'glass',

        // Sizes
        'p-4': size === 'sm',
        'p-6': size === 'md',
        'p-8': size === 'lg',

        // Interactive states
        'cursor-pointer hover:scale-[1.02] hover:shadow-lg': interactive && !loading,
        'cursor-not-allowed opacity-60': loading,
      },
      className
    )

    return (
      <div
        ref={ref}
        className={baseClasses}
        {...props}
      >
        {loading && (
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        )}

        {!loading && children}
      </div>
    )
  }
)

Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
)

CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={clsx('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
)

CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={clsx('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
)

CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx('p-6 pt-0', className)}
      {...props}
    />
  )
)

CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
)

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
