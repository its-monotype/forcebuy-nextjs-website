import React from 'react'
import * as HoverCard from '@radix-ui/react-hover-card'
import { NotificationItem } from './NotificationItem'
import { Bell, EnvelopeOpen, Info } from 'phosphor-react'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'

export const HeaderItem = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handOpenChange = (open: boolean) => setIsOpen(open)

  return (
    <HoverCard.Root openDelay={50} closeDelay={300} onOpenChange={handOpenChange}>
      <HoverCard.Trigger>
        <button
          className={clsx(
            isOpen && 'text-gray-700',
            'relative hidden lg:inline-block transition-colors duration-150 ease-out',
          )}>
          <Bell className="w-8 h-8 " />
          <div className="absolute top-0.5 right-0.5 transform translate-x-1/2 -translate-y-1/2 font-bold bg-blue-500">
            1
          </div>
        </button>
      </HoverCard.Trigger>
      <Transition show={isOpen} className="absolute">
        <Transition.Child
          as={HoverCard.Content}
          sideOffset={12}
          className="p-5 text-sm font-normal leading-4 break-words bg-white border rounded-md shadow-sm border-gray-200 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
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
          {/* <Button
                  variant="ghost"
                  color="secondary"
                  size="lg"
                  className="inline-flex w-full mt-1"
                  type="button">
                  Показать все
                </Button> */}
        </Transition.Child>
      </Transition>
    </HoverCard.Root>
  )
}
