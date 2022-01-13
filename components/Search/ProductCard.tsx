import React from 'react'
import Image from 'next/image'

export const ProductCard = () => {
  return (
    <div className="flex items-center bg-white hover:bg-gray-50 pr-0 xl:pr-4 rounded-md cursor-pointer">
      <Image
        className="flex rounded-md"
        width={80}
        height={100}
        layout="fixed"
        src="/productImage.png"
        alt="card img"
      />
      <div className="ml-4 flex flex-col justify-start">
        <div className="flex items-center">
          <div className="mr-3 text-lg font-semibold">188p</div>
          <div className="mr-2 text-sm text-gray-500">2300p</div>
          <div className="text-sm text-blue-600">-55%</div>
        </div>
        <div className="mt-1 text-sm text-gray-700 w-44">
          Grand Theft Auto V: Premium Online Edition
        </div>
      </div>
    </div>
  )
}
