import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

interface SwitchProps {
  isOn: boolean
  onCheckedChange: (value: boolean) => void
}

export const Switch: React.FC<SwitchProps> = ({ isOn, onCheckedChange }) => {
  return (
    <SwitchPrimitive.Root
      className={clsx(
        'w-10 h-6 bg-blue-200 flex rounded-full p-0.5',
        isOn ? 'justify-end' : 'justify-start',
      )}
      id="verified"
      onCheckedChange={onCheckedChange}>
      <SwitchPrimitive.Thumb asChild>
        <motion.div className="w-5 h-5 bg-blue-600 rounded-full" layout transition={spring} />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}
