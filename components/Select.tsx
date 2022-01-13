import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { CaretDown, CaretUp } from 'phosphor-react'

interface Item {
  value: string
  text: string
}

interface SelectProps {
  items: Array<Item>
  value: string
  align?: 'start' | 'center' | 'end'
  onSelectChange?: (value: string) => void
}

const svgVariants = {
  open: { rotate: -180 },
  closed: {
    rotate: 0,
  },
}

export const Select: React.FC<SelectProps> = (props) => {
  const { items, value, onSelectChange, align = 'start' } = props
  const [open, setOpen] = React.useState<boolean>(false)

  const handleSelect = (value: string) => {
    if (!onSelectChange) return
    onSelectChange(value)
  }

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger
        className={clsx(
          'cursor pointer font-medium relative outline-none hover:bg-gray-200 bg-white rounded-md h-8 text-left select-none sm:text-sm',
          open && 'bg-gray-200',
        )}>
        <div className="flex items-center justify-beetween space-x-8 px-3">
          <div>{items.find((item) => item.value === value)?.text}</div>
          <motion.div animate={open ? 'open' : 'closed'} variants={svgVariants}>
            <CaretDown className="h-4 w-4" />
          </motion.div>
        </div>
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {open && (
          <>
            <DropdownMenu.Content forceMount asChild align={align} sideOffset={6}>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  animate: { duration: 0.2 },
                  exit: { duration: 0.15 },
                }}
                className="relative bg-white rounded-md w-full p-1.5 shadow-lg">
                {items.map((item, index) => (
                  <DropdownMenu.Item
                    key={index}
                    onSelect={() => handleSelect(item.value)}
                    className={clsx(
                      'text-gray-900 sm:text-sm cursor-pointer select-none relative h-8 flex items-center pl-3 pr-12 outline-none rounded-md hover:bg-gray-200 ',
                      item.value === value ? 'font-medium' : 'font-normal',
                    )}>
                    {item.text}
                  </DropdownMenu.Item>
                ))}
              </motion.div>
            </DropdownMenu.Content>
          </>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  )
}
