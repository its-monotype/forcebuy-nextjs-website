import clsx from 'clsx'
import { Star } from 'phosphor-react'
import React from 'react'

interface RatingProps {
  rating: number
  readOnly?: boolean
  precision?: 'half' | 'full'
  className?: string
}

export const Rating: React.FC<RatingProps> = (props) => {
  const { precision = 'full', readOnly = false, className } = props
  const [rating, setRating] = React.useState<number | null>(props.rating || null)
  const [tempRating, setTempRating] = React.useState<number | null>(null)
  const [hover, setHover] = React.useState<boolean>(false)

  const handleMouseover = (newRating: number) => {
    if (readOnly) {
      return
    }
    setHover(true)
    setTempRating(rating)
    setRating(newRating / 2 + 0.5)
  }

  const handleMouseout = () => {
    if (readOnly) {
      return
    }
    setHover(false)
    setRating(tempRating)
  }

  const rate = () => {
    if (readOnly) {
      return
    }
    setRating(precision === 'full' && rating ? Math.ceil(rating) : rating)
    setTempRating(precision === 'full' && rating ? Math.ceil(rating) : rating)
  }

  const renderStars = () => {
    let stars = []
    for (let i = 0; i < 10; i++) {
      let classes = 'text-gray-200'
      if (
        (rating && hover && precision === 'full' && Math.ceil(rating) * 2 > i) ||
        (rating && hover && precision === 'half' && rating * 2 > i) ||
        (rating && !hover && rating * 2 > i)
      ) {
        classes = 'text-yellow-400'
      }
      stars.push(
        <div
          style={{
            display: 'inline-block',
            width: '12px',
            overflow: 'hidden',
            direction: i % 2 === 0 ? 'ltr' : 'rtl',
            cursor: readOnly ? 'default' : 'pointer',
          }}
          key={i}
          onMouseOver={() => handleMouseover(i)}
          onClick={() => rate()}
          onMouseOut={() => handleMouseout()}>
          <Star size={24} weight="fill" className={clsx(classes, 'p-0.5')} />
        </div>,
      )
    }
    return stars
  }

  return <div className={clsx('flex flex-row', className)}>{renderStars()}</div>
}
