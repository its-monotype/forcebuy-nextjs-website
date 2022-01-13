import React from 'react'

export const Divider: React.FC = ({ children }) => {
  return (
    <div
      className="flex items-center whitespace-nowrap w-full
            before:border-b before:border-gray-200 before:t-1/2 before:inline-block before:w-1/2 before:relative
            after:border-b after:border-gray-200 before:t-1/2 after:inline-block after:w-1/2 after:relative select-none"
      role="seperator">
      <span className="inline-block px-4 text-gray-500 text-sm font-medium">{children}</span>
    </div>
  )
}
