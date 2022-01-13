import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { CaretDown, Check } from 'phosphor-react'
import { Button } from './Button'

interface Item {
  id: number
  value: string
  text: string
  checked: boolean
}

interface MultipleSelectProps {
  checkboxes: Array<Item>
  title: string

  onCheckedChange: (id: number, checked: boolean) => void
}

const svgVariants = {
  open: { rotate: -180 },
  closed: {
    rotate: 0,
  },
}

export const MultipleSelect: React.FC<MultipleSelectProps> = ({
  checkboxes,
  onCheckedChange,
  title,
}) => {
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <>
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger
          className={clsx(
            'cursor pointer font-medium relative outline-none hover:bg-gray-200 bg-white rounded-md h-8 text-left select-none sm:text-sm',
            open && 'bg-gray-200',
          )}>
          <div className="flex items-center justify-beetween space-x-8 px-3">
            <div>
              {title}
              <span className="text-blue-600 mx-2">
                {checkboxes.filter((el) => el.checked === true).length > 0
                  ? checkboxes.filter((el) => el.checked === true).length
                  : null}
              </span>
            </div>
            <motion.div animate={open ? 'open' : 'closed'} variants={svgVariants}>
              <CaretDown className="h-4 w-4" />
            </motion.div>
          </div>
        </DropdownMenu.Trigger>
        <AnimatePresence>
          {open && (
            <>
              <DropdownMenu.Content forceMount asChild align="start" sideOffset={6}>
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
                  {checkboxes.map((item) => (
                    <DropdownMenu.CheckboxItem
                      key={item.id}
                      checked={item.checked}
                      onCheckedChange={(checked) => onCheckedChange(item.id, checked)}
                      onSelect={(e) => e.preventDefault()}
                      className={clsx(
                        'flex items-center text-gray-900 sm:text-sm cursor-pointer select-none relative h-8 pl-3 pr-12 outline-none rounded-md hover:bg-gray-200',
                        item.checked ? 'font-medium' : 'font-normal',
                      )}>
                      <DropdownMenu.ItemIndicator>
                        <Check className="h-5 w-5 mr-3 text-blue-600" />
                      </DropdownMenu.ItemIndicator>
                      {item.text}
                    </DropdownMenu.CheckboxItem>
                  ))}
                </motion.div>
              </DropdownMenu.Content>
            </>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    </>
  )
}
