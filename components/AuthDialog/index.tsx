import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion, transform } from 'framer-motion'
import { CaretRight, GoogleLogo } from 'phosphor-react'
import { Button } from '../Button'
import { PasswordLogin } from './forms/PasswordLogin'
import { Magic } from './forms/Magic'
import { Register } from './forms/Register'
import { Divider } from '../Divider'
import clsx from 'clsx'

export const AuthDialog: React.FC<Dialog.DialogProps> = ({ open, defaultOpen, onOpenChange }) => {
  const [formType, setFormType] = React.useState<'passwordLogin' | 'magic' | 'register'>(
    'passwordLogin',
  )

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      <AnimatePresence>
        {open && (
          <>
            <Dialog.Overlay forceMount asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  animate: { duration: 0.2 },
                  exit: { duration: 0.15 },
                }}
                className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40"
              />
            </Dialog.Overlay>
            <Dialog.Content forceMount asChild>
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
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg overflow-hidden w-full max-w-md -mt-10 outline-none">
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title className="text-black leading-8 font-bold text-xl">
                    {formType === 'register' ? 'Регистрация' : 'Вход'}
                  </Dialog.Title>
                  {formType === 'register' ? (
                    <Button
                      type="button"
                      variant="link"
                      color="primary"
                      className="underline"
                      onClick={() => setFormType('passwordLogin')}>
                      Есть аккаунт? Вход
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="link"
                      color="primary"
                      className="underline"
                      onClick={() => setFormType('register')}>
                      Нету аккаунта? Регистрация
                    </Button>
                  )}
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
                <div className="mt-4">
                  <button
                    type="button"
                    className={clsx(
                      'bg-white border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 hover:border-gray-300',
                      'w-full flex items-center justify-center h-12 outline-none py-2 px-4 relative select-none',
                    )}>
                    <span className="flex mr-3 leading-8 items-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0)">
                          <path
                            d="M16.0008 8.17753C16.0008 7.51976 15.9463 7.03976 15.8285 6.54199H8.16406V9.51085H12.6629C12.5722 10.2486 12.0824 11.3598 10.994 12.1064L10.9787 12.2058L13.4021 14.0456L13.5699 14.062C15.1119 12.6664 16.0008 10.6131 16.0008 8.17753Z"
                            fill="#4285F4"></path>
                          <path
                            d="M8.1636 15.9999C10.3676 15.9999 12.218 15.2887 13.5695 14.0621L10.9935 12.1065C10.3042 12.5776 9.37899 12.9065 8.1636 12.9065C6.00489 12.9065 4.17272 11.5109 3.5196 9.58203L3.42386 9.59L0.904047 11.5011L0.871094 11.5909C2.21348 14.2042 4.97084 15.9999 8.1636 15.9999Z"
                            fill="#34A853"></path>
                          <path
                            d="M3.52021 9.5824C3.34788 9.08463 3.24815 8.55126 3.24815 8.00017C3.24815 7.44903 3.34788 6.91572 3.51115 6.41795L3.50658 6.31193L0.95518 4.37012L0.871703 4.40903C0.31844 5.49349 0.000976562 6.71129 0.000976562 8.00017C0.000976562 9.28906 0.31844 10.5068 0.871703 11.5913L3.52021 9.5824Z"
                            fill="#FBBC05"></path>
                          <path
                            d="M8.16364 3.09331C9.6965 3.09331 10.7305 3.7422 11.3201 4.28446L13.6239 2.08C12.209 0.791114 10.3677 0 8.16364 0C4.97087 0 2.21349 1.79554 0.871094 4.40885L3.51054 6.41777C4.17274 4.48888 6.00492 3.09331 8.16364 3.09331Z"
                            fill="#EB4335"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="font-normal flex-1 text-left text-sm leading-8">
                      Войти через Google
                    </span>
                    <CaretRight className="h-4 w-4 flex leading-8 mr-3 items-center" />
                  </button>
                </div>
              </motion.div>
            </Dialog.Content>
          </>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
