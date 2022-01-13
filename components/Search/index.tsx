import { Transition } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { Dropdown } from './Dropdown'

export const Search = () => {
  const [isInputFocused, setIsInputFocused] = React.useState<boolean>(false)
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>
  // State for our modal
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setIsInputFocused(false))

  return (
    <div className="flex-auto flex">
      <div className="hidden lg:flex mr-0 xl:mr-48 2xl:mr-96 group leading-6 font-medium items-center hover:text-gray-600 transition-colors duration-200 w-full py-2">
        <div className="relative w-full" ref={ref}>
          <MagnifyingGlass
            size={24}
            className="z-20 h-12 absolute ml-4 mr-4 text-gray-400 group-hover:text-gray-500 transition-colors duration-200 pointer-events-none"
          />

          <input
            onFocus={() => setIsInputFocused(true)}
            type="text"
            placeholder="Поиск среди игр"
            className="inline-flex relative w-full items-center rounded-md border border-gray-300 z-10 pl-12 shadow-none font-medium text-base h-12 text-black"
          />
          <AnimatePresence>
            {isInputFocused && (
              <Transition appear show={isInputFocused} as={'div'}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    animate: { duration: 0.2 },
                    exit: { duration: 0.15 },
                  }}
                  onClick={() => setIsInputFocused(false)}
                  className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40"
                />
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    animate: { duration: 0.2 },
                    exit: { duration: 0.15 },
                  }}>
                  <Dropdown />
                </motion.div>
              </Transition>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
// Hook
function useOnClickOutside(ref: any, handler: any) {
  React.useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler],
  )
}
