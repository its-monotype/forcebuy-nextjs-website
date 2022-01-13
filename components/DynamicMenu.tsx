import React from 'react'
import { useScrollSections } from 'react-scroll-section'

export const DynamicMenu = () => {
  const sections = useScrollSections()

  return (
    <ul>
      {sections.map(({ id, onClick, selected }) => (
        <li key={id} onClick={onClick}>
          {id.toUpperCase()}
          selected: {selected}
        </li>
      ))}
    </ul>
  )
}
