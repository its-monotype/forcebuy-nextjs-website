import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Button, Icon } from '@vechaiui/react'
import { GoogleLogo } from 'phosphor-react'

import { PasswordLogin } from './forms/PasswordLogin'
import { Magic } from './forms/Magic'
import { Register } from './forms/Register'

interface HeadlessAuthDialogProps {
  onClose: () => void
  show: boolean
}

export const HeadlessAuthDialog: React.FC<HeadlessAuthDialogProps> = ({ onClose, show }) => {
  const [formType, setFormType] = React.useState<'passwordLogin' | 'magic' | 'register'>(
    'passwordLogin',
  )

  return (
    <Transition appear show={show} as={React.Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-blackAlpha-600" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <div className="inline-block w-full max-w-md p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <>
                <Dialog.Title as="h3" className="font-medium text-gray-900 mb-3">
                  {formType === 'register' ? 'Регистрация' : 'Вход'}
                </Dialog.Title>
                <div className="mb-5">
                  <Button
                    variant="solid"
                    color="secondary"
                    size="lg"
                    className="inline-flex w-full"
                    type="button"
                    leftIcon={<Icon as={GoogleLogo} label="GoogleLogo" className="w-6 h-6 mr-2" />}>
                    Вход через Google
                  </Button>
                </div>
                <div
                  className="flex items-center whitespace-nowrap w-full
            before:border-b before:border-gray-300 before:t-1/2 before:inline-block before:w-1/2 before:relative
            after:border-b after:border-gray-300 before:t-1/2 after:inline-block after:w-1/2 after:relative"
                  role="seperator">
                  <span className="inline-block px-4 text-gray-500">или</span>
                </div>
                {formType === 'passwordLogin' && (
                  <PasswordLogin
                    onOpenMagic={() => setFormType('magic')}
                    onOpenRegister={() => setFormType('register')}
                  />
                )}
                {formType === 'magic' && (
                  <Magic onOpenPasswordLogin={() => setFormType('passwordLogin')} />
                )}
                {formType === 'register' && (
                  <Register onOpenPasswordLogin={() => setFormType('passwordLogin')} />
                )}
              </>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
