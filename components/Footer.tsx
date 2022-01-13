import { DiscordLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-24">
      <div className="container mx-auto py-8 flex justify-between px-3">
        <div className="flex justify-between">
          <div className="flex items-center">© 2014-2021 Forcebuy</div>
          <div className="flex items-center ml-16 ">Правовая информация</div>
        </div>
        <div className="col-end-7 flex items-center justify-end space-x-6 text-gray-800">
          <button type="button" className="relative">
            <InstagramLogo className="h-8 w-8" />
          </button>
          <button type="button" className="relative">
            <TwitterLogo className="h-8 w-8" />
          </button>
          <button type="button" className="relative">
            <DiscordLogo className="h-8 w-8" />
          </button>
        </div>
      </div>
    </footer>
  )
}
