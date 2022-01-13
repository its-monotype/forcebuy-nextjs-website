import React from 'react'
import Link from 'next/link'
import { ProductCard } from './ProductCard'

export const Dropdown = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full mt-1.5 bg-white text-black rounded-md p-5 text-sm font-normal leading-4">
        <div className="flex space-x-4 xl:space-x-8">
          <div className="flex flex-col">
            <div className="text-lg font-semibold leading-6 mb-1">Рекомендации</div>
            <div className="mt-4">
              <div className="mb-3">
                <ProductCard />
              </div>
              <div className="mb-3">
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-semibold leading-6 mb-1">Популярные запросы</div>
            <div className="flex flex-col mt-5 space-y-3 text-sm">
              <Link href="/">
                <a className="hover:underline">Grand Theft Auto V: Premium</a>
              </Link>
              <Link href="/">
                <a className="hover:underline">Sea of Thieves</a>
              </Link>
              <Link href="/">
                <a className="hover:underline">Dead By Daylight</a>
              </Link>
              <Link href="/">
                <a className="hover:underline">Biomutant</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
