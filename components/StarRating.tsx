import clsx from 'clsx'
import { Star, StarHalf } from 'phosphor-react'
import React from 'react'

interface StarRatingProps {
  value: number
}

export const StarRating: React.FC<StarRatingProps> = ({ value }) => {
  return (
    <div className="flex flex-row">
      {[...Array(Math.round(value))].map((star, index) => {
        index += 1
        return (
          <div key={index} className="inline-flex relative text-left">
            <span className="relative w-6 h-6">
              <span
                className={clsx(
                  'overflow-hidden absolute flex',
                  Math.ceil(value) === index && value % 1 !== 0 ? 'w-1/2' : 'w-full',
                )}>
                <Star
                  weight="fill"
                  className={clsx(
                    'w-6 h-6 p-0.5 select-none inline-block flex-shrink-0 text-yellow-400',
                  )}
                />
              </span>
            </span>
          </div>
        )
      })}
    </div>
  )
}
