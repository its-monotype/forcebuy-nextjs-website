import { useId } from '@reach/auto-id'
import clsx from 'clsx'
import * as React from 'react'
import { DefaultProps } from '../../utils/types'

interface UseFormControlProps {
  /** If `true`, this prop is passed to its children. */
  required?: boolean
  /** If `true`, this prop is passed to its children. */
  disabled?: boolean
  /** If `true`, this prop is passed to its children. */
  invalid?: boolean
  /** If `true`, this prop is passed to its children. */
  readOnly?: boolean
  /** The `id` to use for the form control. */
  id?: string
  [key: string]: any
}

interface UseFormControlData extends UseFormControlProps {
  labelId?: string
  errorId?: string
  helpTextId?: string
}

interface IFormControlProps extends DefaultProps, UseFormControlProps {
  children?: React.ReactNode
}

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement>, IFormControlProps {}

interface FormControlContext extends UseFormControlProps {}

export const useFormControl = (props: UseFormControlProps): UseFormControlData => {
  const context = useFormControlContext()
  if (!context) {
    return props
  }
  const keys = Object.keys(context)
  return keys.reduce<Record<string, string>>((acc, prop) => {
    /** Giving precedence to `props` over `context` */
    acc[prop] = props[prop]

    if (context) {
      if (props[prop] == null) {
        acc[prop] = context[prop]
      }
    }

    return acc
  }, {})
}

const FormControlContext = React.createContext<FormControlContext | undefined>(undefined)

const useFormControlContext = () => React.useContext(FormControlContext)

export const CustomFormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (props, ref) => {
    const {
      children,
      className,
      required,
      disabled,
      invalid,
      readOnly,
      id: idProp,
      ...rest
    } = props
    const classes = clsx('relative w-full', className)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = idProp || `field-${useId()}`

    const labelId = `${id}-label`
    const errorId = `${id}-error`
    const helpTextId = `${id}-helptext`

    const context = {
      required,
      disabled,
      invalid,
      readOnly,
      id,
      labelId,
      errorId,
      helpTextId,
    }

    return (
      <FormControlContext.Provider value={context}>
        <div role="group" ref={ref} className={classes} {...rest}>
          {children}
        </div>
      </FormControlContext.Provider>
    )
  },
)

CustomFormControl.displayName = 'FormGroup'
