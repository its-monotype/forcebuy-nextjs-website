import clsx from 'clsx'
import * as React from 'react'
import { DefaultProps } from '../../utils/types'
import { CustomInput, InputProps } from './CustomInput'
import { CustomInputLeftElement, CustomInputRightElement } from './CustomInputElement'

function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  ) as React.ReactElement[]
}

interface IInputGroupProps extends DefaultProps {
  /* Size of all wrapped input */
  size?: InputProps['size']
  /* React node */
  children?: React.ReactNode
}

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement>, IInputGroupProps {}

interface InputSizesProps {
  xl: string
  lg: string
  md: string
  sm: string
  [key: string]: string
}

interface plSizesProps {
  12: string
  10: string
  8: string
  7: string
  [key: string]: string
}

interface prSizesProps {
  12: string
  10: string
  8: string
  7: string
  [key: string]: string
}

const inputSizes: InputSizesProps = {
  xl: '12',
  lg: '10',
  md: '8',
  sm: '7',
  xs: '6',
}

const plSizes: plSizesProps = {
  12: 'pl-12',
  10: 'pl-10',
  8: 'pl-8',
  7: 'pl-7',
  6: 'pl-6',
}

const prSizes: prSizesProps = {
  12: 'pr-12',
  10: 'pr-10',
  8: 'pr-8',
  7: 'pr-7',
  6: 'pr-6',
}

export const CustomInputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>((props, ref) => {
  const { children, className, size = 'md', ...rest } = props
  const height = inputSizes[size]
  let pl: string | undefined
  let pr: string | undefined

  let rl: string | undefined
  let rr: string | undefined

  const validChildren = getValidChildren(children)

  validChildren.forEach((child) => {
    if (child.type === CustomInputLeftElement) {
      pl = plSizes[height]
    }
    if (child.type === CustomInputRightElement) {
      pr = prSizes[height]
    }
  })

  return (
    <div ref={ref} role="group" className={clsx('relative flex', className)} {...rest}>
      {validChildren.map((child) => {
        if (child.type === CustomInput) {
          return React.cloneElement(child, {
            size,
            className: clsx(pl, pr, rl, rr, child.props.className),
          })
        }
        return React.cloneElement(child, { size })
      })}
    </div>
  )
})

CustomInputGroup.displayName = 'InputGroup'
