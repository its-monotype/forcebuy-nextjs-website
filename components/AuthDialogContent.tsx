import { Button, Icon } from '@vechaiui/react'
import { GoogleLogo } from 'phosphor-react'
import React from 'react'

export const AuthDialogContent = () => {
  return (
    <>
      <h3 className="font-medium text-gray-900 mb-3">Вход</h3>
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
    </>
  )
}
