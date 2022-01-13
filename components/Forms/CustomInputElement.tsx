import clsx from 'clsx'
import * as React from 'react'
import { DefaultProps } from '../../utils/types'
import { InputProps } from './CustomInput'
type Placement = 'left' | 'right'

interface IInputElementProps extends DefaultProps {
  /* Placement of the input element */
  placement?: Placement
  /* Size of the input element */
  size?: InputProps['size']
  /* React node */
  children?: React.ReactNode
  /* */
  disabledPointerEvents?: boolean
}

const inputSizes = {
  xl: 'p-3',
  lg: 'p-3',
  md: 'p-3',
  sm: 'p-3',
  xs: 'p-3',
}

export interface InputElementProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IInputElementProps {}

const CustomInputElement = React.forwardRef<HTMLDivElement, InputElementProps>(
  (
    { size, children, placement = 'left', disabledPointerEvents = false, className, ...props },
    ref,
  ) => {
    const sizeClass = inputSizes[size!]
    const placementProp = { [placement]: '0' }

    return (
      <div
        ref={ref}
        className={clsx(
          'absolute w-full h-full flex items-center justify-center',
          disabledPointerEvents && 'pointer-events-none',
          className,
        )}
        style={placementProp}
        {...props}>
        {children}
      </div>
    )
  },
)

CustomInputElement.displayName = 'InputElement'

export const CustomInputLeftElement = React.forwardRef<HTMLDivElement, InputElementProps>(
  (props, ref) => <CustomInputElement ref={ref} placement="left" {...props} />,
)

CustomInputLeftElement.displayName = 'InputLeftElement'

export const CustomInputRightElement = React.forwardRef<HTMLDivElement, InputElementProps>(
  (props, ref) => <CustomInputElement ref={ref} placement="right" {...props} />,
)

CustomInputRightElement.displayName = 'InputRightElement'
