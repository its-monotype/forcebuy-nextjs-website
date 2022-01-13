import React, { ReactChildren } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

export const Dialog: React.FC<DialogPrimitive.DialogProps> = ({
  children,
  open,
  defaultOpen,
  onOpenChange,
}) => {
  return (
    <DialogPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <DialogPrimitive.Overlay className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40" />
      {children}
    </DialogPrimitive.Root>
  )
}

export const DialogContent = React.forwardRef<HTMLDivElement, DialogPrimitive.DialogContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Content {...props} ref={forwardedRef}>
      {children}
    </DialogPrimitive.Content>
  ),
)

DialogContent.displayName = 'DialogContent'

export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close
