import clsx from 'clsx'
import * as React from 'react'
import { DefaultProps } from '../utils/types'

interface IButtonProps extends DefaultProps {
  /* Shows loading spinner */
  loading?: boolean
  /* Makes button disabled */
  disabled?: boolean
  /* Makes button active */
  active?: boolean
  /* The label to show in the button when loading is true */
  loadingText?: string
  /* Set the original html type of button */
  type?: 'button' | 'reset' | 'submit'
  /* Adds icon before button label */
  leftIcon?: React.ReactElement
  /* Adds icon after button label */
  rightIcon?: React.ReactElement
  /* Set the button color */
  color?: string
  /* Size of the button */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Controls button appearance */
  variant?: 'link' | 'solid' | 'outline' | 'light' | 'ghost'
  /* React node */
  children?: React.ReactNode
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IButtonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    disabled: _disabled,
    loading,
    active,
    loadingText,
    type,
    leftIcon,
    rightIcon,
    children,
    className,
    color = 'secondary',
    variant = 'outline',
    size = 'md',
    ...rest
  } = props

  const disabled = _disabled || loading
  const variantClasses = {
    outline: clsx(
      'border',
      color === 'primary' && 'border-blue-600 bg-transparent hover:bg-blue-600',
      color === 'secondary' &&
        'border-gray-200 bg-transparent hover:bg-gray-100 focus:ring-1 focus:ring-black focus:border-black',
    ),
    solid: clsx(
      'font-semibold',
      color === 'primary' && 'bg-blue-600 hover:bg-blue-700 text-white',
      color === 'secondary' && 'border border-gray-300 bg-gray-100 hover:bg-gray-200',
    ),
    ghost: 'btn-ghost',
    light: 'btn-light',
    link: clsx(
      'text-center h-auto px-0',
      color === 'primary' && 'text-[#4A6EE0]',
      color === 'secondary' && 'text-gray-600',
    ),
  }

  const sizes = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: clsx('px-5 rounded-md text-sm min-w-8'),
    lg: 'px-8 rounded-md min-w-10 h-12',
    xl: 'px-8 rounded-lg text-lg min-w-12 h-12',
  }

  const classes = clsx(
    'outline-none relative m-0 inline-flex flex-shrink-0 items-center justify-center align-middle transition select-none cursor-pointer appearance-none whitespace-nowrap',
    variantClasses[variant],
    sizes[size],
    disabled && 'btn-disabled',
  )

  return (
    <button
      ref={ref}
      disabled={disabled}
      aria-disabled={disabled}
      type={type}
      data-active={active ? 'true' : undefined}
      data-color={color ? color : undefined}
      className={clsx(classes, className)}
      {...rest}>
      {leftIcon && !loading ? leftIcon : null}
      {loading && (
        <svg
          className={clsx(
            loadingText ? 'relative' : 'absolute',
            loadingText ? `mr-2` : 'mr-0',
            'animate-spin -ml-1 h-4 w-4 text-white',
          )}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {loading ? loadingText || <span className="opacity-0">{children}</span> : children}
      {rightIcon && !loading ? rightIcon : null}
    </button>
  )
})

Button.displayName = 'Button'
