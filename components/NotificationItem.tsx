import { XIcon, Icon } from '@vechaiui/react'
import { EnvelopeOpen } from 'phosphor-react'
import React from 'react'

interface NotificationItemProps {
  title: string
  body: string
  icon: React.ElementType<any>
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ title, body, icon }) => {
  return (
    <div className="mx-auto my-2 p-2 flex">
      <div>
        <div className="pb-2 flex justify-between items-center">
          <div className="flex items-center space-x-1.5">
            <Icon as={icon} label="notification icon" className="w-5 h-5" />
            <span className="text-sm font-medium">{title}</span>
          </div>
          <XIcon label="close" className="fill-current text-gray-600 h-4 w-4" />
        </div>
        <div className="text-sm text-gray-600 tracking-tight w-96">{body}</div>
      </div>
    </div>
  )
}
