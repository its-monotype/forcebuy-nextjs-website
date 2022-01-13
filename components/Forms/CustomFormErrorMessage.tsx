import clsx from 'clsx'
import * as React from 'react'
import { DefaultProps } from '../../utils/types'
import { useFormControl } from './CustomFormControl'

interface IFormErrorMessageProps extends DefaultProps {
  children?: React.ReactNode
}

export interface FormErrorMessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IFormErrorMessageProps {}

export const CustomFormErrorMessage = React.forwardRef<HTMLParagraphElement, FormErrorMessageProps>(
  (props, ref) => {
    const { className, id, ...rest } = props
    const classes = clsx('mt-1.5 flex items-center text-sm leading-none text-red-500', className)
    const formControl = useFormControl({})

    return <div ref={ref} className={classes} id={id || formControl.errorId} {...rest} />
  },
)

CustomFormErrorMessage.displayName = 'FormErrorMessage'
