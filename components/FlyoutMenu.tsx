import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@vechaiui/icon'
import { Badge, cx, Icon } from '@vechaiui/react'
import { Bell, EnvelopeOpen, Info } from 'phosphor-react'
import { NotificationItem } from './NotificationItem'

export default function FlyoutMenu() {
  let timeout: any // NodeJS.Timeout
  const timeoutDuration = 400

  const buttonRef = useRef<HTMLButtonElement>(null) // useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    buttonRef?.current?.click() // eslint-disable-line
  }

  // Open the menu after a delay of timeoutDuration
  const onHover = (open: boolean, action: string) => {
    if ((!open && action === 'onMouseEnter') || (open && action === 'onMouseLeave')) {
      clearTimeout(timeout)
      timeout = setTimeout(() => toggleMenu(), timeoutDuration)
    }
  }

  const handleClickOutside = (event: any) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation()
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
  return (
    <Popover className="relative">
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, 'onMouseEnter')}
          onMouseLeave={() => onHover(open, 'onMouseLeave')}>
          <Popover.Button
            ref={buttonRef}
            className={cx(
              open && 'text-gray-700',
              'outline-none inline-block transition-colors duration-150 ease-out',
            )}>
            <Icon as={Bell} label="notifications" className="w-8 h-8 " />
            <Badge
              className="absolute top-0.5 right-0.5 transform translate-x-1/2 -translate-y-1/2 font-bold"
              color="primary"
              variant="solid">
              1
            </Badge>
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover.Panel
              style={{ marginTop: 12 }}
              className="absolute z-10 p-5 transform -translate-x-1/2 left-1/2 text-sm font-normal leading-4 break-words bg-white border rounded-md shadow-sm border-gray-200 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100">
              <div className="text-lg font-bold leading-6 mb-1">Уведомления</div>
              <div className="flex flex-col space-y-2">
                <NotificationItem
                  title="А почта точно ваша?"
                  body="Пожалуйста, подтвердите адрес вашей электронной почты в письме, которое мы отправили при
          регистрации"
                  icon={EnvelopeOpen}
                />
                <NotificationItem
                  title="Проходи, задерживайся"
                  body="Короче, ты уже зарегистрировался, так что в благородство я играть не буду: покупай у нас игры — и мы в расчёте"
                  icon={Info}
                />
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  )
}
