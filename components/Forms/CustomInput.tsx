import clsx from 'clsx'
import * as React from 'react'
import { DefaultProps } from '../../utils/types'
import { useFormControl } from './CustomFormControl'

export interface IInputProps<T = HTMLInputElement> extends DefaultProps {
  /* Makes input disabled */
  disabled?: React.InputHTMLAttributes<T>['disabled']
  /* Makes input invalid */
  invalid?: boolean
  /* Makes input required */
  required?: React.InputHTMLAttributes<T>['required']
  /* Makes input readOnly */
  readOnly?: React.InputHTMLAttributes<T>['readOnly']
  /* Set the input color */
  color?: string
  /* Size of the input */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Controls input appearance */
  variant?: 'outline' | 'solid'
  /**
   * The element or component to use in place of `input`
   */
  as?: React.ElementType
  /** */
  type?: string
  /**
   * A11y: A label that describes the input
   */
  'aria-label'?: string
  /**
   * A11y: The id of the element that describes the input
   */
  'aria-describedby'?: string
}

export type OmittedTypes =
  | 'size'
  | 'disabled'
  | 'required'
  | 'checked'
  | 'defaultChecked'
  | 'readOnly'

export type InputHTMLAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedTypes>

export type InputProps<T = HTMLElement> = IInputProps & InputHTMLAttributes & React.RefAttributes<T>

export const CustomInput = React.forwardRef<HTMLElement, InputProps>((props, ref) => {
  const {
    size = 'md',
    variant = 'outline',
    color = 'primary',
    as: Comp = 'input',
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    className,
    type = 'text',
    id,
    ...rest
  } = props

  const { readOnly, disabled, invalid, required, ...formControl } = useFormControl(props)

  const variantClasses = {
    outline: 'bg-white border border-gray-200',
    solid: 'bg-gray-200 border border-transparent',
  }

  const sizes = {
    xs: 'h-12 rounded-md px-3 leading-6',
    sm: 'h-12 rounded-md px-3 leading-6',
    md: 'h-12 rounded-md px-3 leading-6',
    lg: 'h-12 rounded-md px-3 leading-6',
    xl: 'h-12 rounded-md px-3 leading-6',
  }

  const classes = clsx(
    'text-black relative inline-flex w-full min-w-0 items-center',
    sizes[size],
    variantClasses[variant],
    invalid && 'ring-1 ring-red-500 ring-opacity-100 border-red-500',
    disabled && 'form-field-disabled',
    className,
  )

  return (
    <Comp
      ref={ref}
      readOnly={readOnly}
      aria-readonly={readOnly}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-invalid={invalid}
      required={required}
      aria-required={required}
      aria-describedby={ariaDescribedby}
      data-color={color ? color : undefined}
      className={classes}
      type={type}
      id={id || formControl.id}
      {...rest}
    />
  )
})
CustomInput.displayName = 'Input'
