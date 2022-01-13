import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import clsx from 'clsx'

interface TooltipProps {
  content: string
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: () => void
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}) => {
  return (
    <TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        side="bottom"
        align="center"
        {...props}
        className={clsx(
          'px-3 py-1.5 text-sm leading-4 font-normal shadow-sm rounded-md pointer-events-none break-words text-center',
          'border bg-gray-700 border-gray-600 text-white select-none',
        )}>
        {content}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  )
}
