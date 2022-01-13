import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeartStraight } from 'phosphor-react'
import clsx from 'clsx'

export const ProductCard = () => {
  const [activeImage, setActiveImage] = React.useState<number>(0)

  const game = {
    id: 0,
    title: 'Forza Horizon 5 Premium',
    price: 2999,
    oldPrice: 3999,
    images: ['fh5.jpg', 'fh5-21.jpg', 'fh5-22.jpg'],
    label: 'Новинка',
  }

  return (
    <div className="relative w-full h-full flex flex-col group select-none">
      <Link href="/">
        <a className="w-full" style={{ minHeight: 300, flex: '0 0 auto' }}>
          <div
            className="flex relative rounded-lg overflow-hidden"
            style={{
              height: 300,
              minHeight: 300,
              transform: 'translateZ(0)',
            }}>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={require(`../public/${game.images[activeImage]}`)}
                layout="fill"
                objectFit="cover"
                alt="Forza Horizon 5"
              />
            </div>
            {/* <div>
              <div className="bottom-0 flex left-0 absolute right-0 top-0 z-1">
                {game.images.map((image, index) => (
                  <div
                    key={`btn-${image}-${index}`}
                    onMouseEnter={() => setActiveImage(index)}
                    onMouseLeave={() => setActiveImage(0)}
                    className="flex-auto h-full"></div>
                ))}

                <div className="items-center bottom-4 flex h-0.5 justify-center left-0 absolute w-full space-x-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-out pointer-events-none">
                  {game.images.map((image, index) => (
                    <span
                      key={`indicator-${image}-${index}`}
                      className={clsx(
                        activeImage === index ? 'opacity-100' : 'opacity-40',
                        'flex-auto h-full shadow-sm bg-white bg-opacity-60 transition-all duration-300',
                      )}></span>
                  ))}
                </div>
              </div>
            </div> */}
            <section className="bottom-0 -left-1 pointer-events-none absolute -right-2 top-0 z-2">
              <div className="top-2 left-2.5 flex items-center justify-between absolute w-full">
                <div
                  className="text-white h-7 px-3 text-sm leading-5 inline-flex items-center rounded-md justify-center overflow-hidden"
                  style={{ backgroundColor: '#7D36AA' }}>
                  {game.label}
                </div>
              </div>
            </section>
          </div>
          <div className="flex flex-col mt-3.5 px-1.5">
            <div className="flex">
              <div className="text-xl font-semibold">
                {game.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}р
              </div>
              <div className="flex items-center ml-5 space-x-5">
                <div className="text-gray-500 line-through text-sm">
                  {game.oldPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}р
                </div>
                <div className="text-blue-600 text-sm font-medium">-55%</div>
              </div>
            </div>
            <div className="mt-2.5">{game.title}</div>
          </div>
        </a>
      </Link>
      <div className="absolute top-0 right-0 flex items-center justify-center z-2 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-out">
        <div className="flex items-center justify-center">
          <button className="relative p-2.5">
            <HeartStraight className="w-7 h-7 text-white hover:text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  )
}
