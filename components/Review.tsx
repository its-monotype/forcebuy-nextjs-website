import { CheckCircle } from 'phosphor-react'
import React from 'react'
import { Rating } from './Rating'

export const Review = () => {
  return (
    <div className="py-5">
      <div className="flex space-x-3">
        <div className="text-lg font-medium">Luisa</div>
        <Rating readOnly rating={5} />
      </div>
      <div className="flex space-x-3.5 text-sm items-center mt-1">
        <div className="flex items-center">
          <CheckCircle className="h-6 w-6 text-gray-500" />
          <div className="ml-1 text-gray-600 font-medium">Подтвержденная покупка</div>
        </div>
        <div className="text-gray-500">1 час назад</div>
      </div>
      <p className="mt-3 text-gray-800 leading-8">
        Всем рекомендую пройти, особенно покупая на этой площадке. Игра крута, графон приятный,
        прокачка топ. Всем рекомендую пройти, особенно покупая на этой площадке. Игра крута, графон
        приятный, прокачка топ.
      </p>
    </div>
  )
}
