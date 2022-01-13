import React from 'react'
import { HeadlessAuthDialog } from './HeadlessAuthDialog'
import { DownloadSimple, HeartStraight, List, MagnifyingGlass, User } from 'phosphor-react'
import { HeaderItem } from './HeaderItem'
import { Search } from './Search'
import { NavbarItem } from './NavbarItem'
import { Dialog, DialogTrigger, DialogContent } from './Dialog'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { Tooltip } from './Tooltip'
import * as Portal from '@radix-ui/react-portal'
import { AuthDialogContent } from './AuthDialogContent'
import { AuthDialog } from './AuthDialog'
import Headroom from 'react-headroom'

export const Header = () => {
  const [showAuthDialog, setShowAuthDialog] = React.useState(false)
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const hanldeOpen = () => setShowAuthDialog(true)
  const handleClose = () => setShowAuthDialog(false)

  const handleDialogOpen = () => setDialogOpen(true)
  const onDialogOpenChange = (open: boolean) => setDialogOpen(open)

  return (
    <>
      <header className="sticky z-10 top-0 w-full max-w-8xl mx-auto bg-white flex-none flex container items-center px-3">
        <div className="flex-none flex items-center lg:w-60 xl:w-68 py-3">
          <a className="overflow-hidden w-10 md:w-auto">
            <span className="sr-only">Forcebuy home page</span>
            <svg
              width="173"
              height="45"
              viewBox="0 0 174 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.0569 44.5716L21.0283 29.8777L9.14258 25.4695L29.9426 3.42871L26.9711 18.1226L38.8569 22.5308L18.0569 44.5716Z"
                stroke="#005BFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M57.929 18.6364H54.4027V17.1662C54.4027 15.7173 54.9993 14.929 56.5547 14.929C57.2152 14.929 57.6839 15.0781 57.9822 15.174L58.728 12.5959C58.2805 12.4254 57.3537 12.1591 56.0646 12.1591C53.4759 12.1591 51.2067 13.6719 51.2067 16.7401V18.6364H48.6818V21.1932H51.2067V35H54.4027V21.1932H57.929V18.6364ZM67.4638 35.3303C72.0767 35.3303 75.0916 31.9531 75.0916 26.8928C75.0916 21.8004 72.0767 18.4233 67.4638 18.4233C62.8509 18.4233 59.8359 21.8004 59.8359 26.8928C59.8359 31.9531 62.8509 35.3303 67.4638 35.3303ZM67.4744 32.6562C64.4595 32.6562 63.0533 30.0249 63.0533 26.8821C63.0533 23.75 64.4595 21.0866 67.4744 21.0866C70.468 21.0866 71.8743 23.75 71.8743 26.8821C71.8743 30.0249 70.468 32.6562 67.4744 32.6562ZM78.6472 35H81.8326V25.0071C81.8326 22.8658 83.4838 21.321 85.7424 21.321C86.4029 21.321 87.1486 21.4382 87.4043 21.5128V18.4659C87.0847 18.4233 86.4561 18.3913 86.0513 18.3913C84.1337 18.3913 82.4931 19.478 81.8965 21.2358H81.726V18.6364H78.6472V35ZM96.4677 35.3303C100.335 35.3303 102.838 33.0078 103.19 29.8224H100.09C99.685 31.5909 98.3107 32.6349 96.489 32.6349C93.7937 32.6349 92.0572 30.3871 92.0572 26.8182C92.0572 23.3132 93.8256 21.108 96.489 21.108C98.5131 21.108 99.7489 22.3864 100.09 23.9205H103.19C102.849 20.6179 100.154 18.4233 96.4357 18.4233C91.8228 18.4233 88.8398 21.8963 88.8398 26.8928C88.8398 31.8253 91.7163 35.3303 96.4677 35.3303ZM113.649 35.3303C117.218 35.3303 119.743 33.5724 120.467 30.9091L117.452 30.3658C116.877 31.9105 115.492 32.6989 113.681 32.6989C110.954 32.6989 109.121 30.9304 109.036 27.777H120.67V26.6477C120.67 20.7351 117.133 18.4233 113.425 18.4233C108.866 18.4233 105.861 21.8963 105.861 26.9247C105.861 32.0064 108.823 35.3303 113.649 35.3303ZM109.047 25.3906C109.175 23.0682 110.858 21.0547 113.447 21.0547C115.918 21.0547 117.537 22.8871 117.548 25.3906H109.047ZM124.46 35H127.57V32.4538H127.837C128.412 33.4979 129.584 35.3196 132.567 35.3196C136.53 35.3196 139.406 32.1449 139.406 26.8501C139.406 21.5447 136.487 18.4233 132.535 18.4233C129.499 18.4233 128.401 20.277 127.837 21.2891H127.645V13.1818H124.46V35ZM127.581 26.8182C127.581 23.3984 129.072 21.1293 131.853 21.1293C134.74 21.1293 136.189 23.5689 136.189 26.8182C136.189 30.0994 134.697 32.603 131.853 32.603C129.115 32.603 127.581 30.2592 127.581 26.8182ZM153.349 28.2138C153.36 30.9943 151.293 32.3153 149.503 32.3153C147.532 32.3153 146.169 30.8878 146.169 28.6612V18.6364H142.983V29.0447C142.983 33.1037 145.21 35.2131 148.352 35.2131C150.813 35.2131 152.486 33.9134 153.242 32.1662H153.413V35H156.545V18.6364H153.349V28.2138ZM162.838 41.1364C165.47 41.1364 167.132 39.7621 168.08 37.1839L174.845 18.6683L171.404 18.6364L167.26 31.3352H167.089L162.945 18.6364H159.536L165.523 35.2131L165.129 36.2997C164.319 38.473 163.179 38.6541 161.432 38.1747L160.665 40.7848C161.049 40.9553 161.88 41.1364 162.838 41.1364Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <Search />

        <div className="h-12 flex lg:hidden items-center justify-end mr-0.5 space-x-4">
          <button className="relative">
            <MagnifyingGlass className="lg:hidden w-8 h-8 hover:text-gray-700 transition-colors duration-150 ease-out" />
          </button>
          <button className="relative">
            <List className="lg:hidden w-10 h-10 hover:text-gray-700 transition-colors duration-150 ease-out" />
          </button>
        </div>
        <div className="ml-20 h-12 p-2 rounded-md flex-shrink-1 hidden lg:flex items-center justify-end space-x-6 bg-white">
          {/* <HeaderItem /> */}
          <Tooltip content="Скачать приложение">
            <button>
              <AccessibleIcon.Root label="download">
                <DownloadSimple className="w-8 h-8 hover:text-gray-700 transition-colors duration-150 ease-out" />
              </AccessibleIcon.Root>
            </button>
          </Tooltip>

          <Tooltip content="Список желаний">
            <button>
              <AccessibleIcon.Root label="wishlist">
                <HeartStraight className="w-8 h-8 hover:text-gray-700 transition-colors duration-150 ease-out" />
              </AccessibleIcon.Root>
            </button>
          </Tooltip>

          <Tooltip content="Войти">
            <button onClick={handleDialogOpen}>
              <AccessibleIcon.Root label="login">
                <User className="w-8 h-8 hover:text-gray-700 transition-colors duration-150 ease-out" />
              </AccessibleIcon.Root>
            </button>
          </Tooltip>

          {/* <NavbarItem tooltip="Войти" Icon={User} label="login" onClick={hanldeOpen} /> */}
        </div>
      </header>

      <HeadlessAuthDialog onClose={handleClose} show={showAuthDialog} />
      <AuthDialog open={dialogOpen} onOpenChange={onDialogOpenChange} />
    </>
  )
}
