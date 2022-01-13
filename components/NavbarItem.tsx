import React from 'react'
import { Tooltip } from './Tooltip'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'

interface NavbarItemProps {
  tooltip: string
  Icon: React.ElementType<any>
  label: string
  onClick?: () => void
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ tooltip, Icon, label, onClick }) => {
  return (
    <Tooltip content={tooltip}>
      <button className="relative" onClick={onClick}>
        <AccessibleIcon.Root label={label}>
          <Icon className="w-8 h-8 hover:text-gray-700 transition-colors duration-150 ease-out" />
        </AccessibleIcon.Root>
      </button>
    </Tooltip>
  )
}
