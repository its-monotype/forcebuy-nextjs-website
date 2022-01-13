import React from 'react'
import { ThumbsWrapper } from './ThumbsWrapper'
import { CaretLeft, CaretRight } from 'phosphor-react'
import Link from 'next/link'
import { useSpringCarousel } from 'react-spring-carousel-js'
import clsx from 'clsx'

export const Carousel = () => {
  const [banners, setBanners] = React.useState([
    {
      id: 0,
      type: 'game',
      title: 'Forza Horizon 5 Premium',
      img: './banner.jpg',
      price: 2999,
      oldPrice: 3999,
    },
    {
      id: 1,
      type: 'offer',
      title: 'Выгодное предложение. Скидка при покупки от 2-х игр',
      img: 'https://cdn1.ozone.ru/s3/sellerassets/wc1450_q80/28144f55-30d4-11ec-a36c-628ae967a13e.jpeg',
    },
  ])
  const [activeBanner, setActiveBanner] = React.useState<number>(0)

  const {
    carouselFragment,
    thumbsFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
    slideToItem,
  } = useSpringCarousel({
    withLoop: true,
    withThumbs: true,
    initialActiveItem: activeBanner,
    items: banners.map((item, index) => ({
      id: index.toString(),
      renderItem: (
        <Link href="/">
          <a
            className="bg-gray-800 text-white h-48 sm:h-64 md:h-72 xl:h-80 2xl:h-96 w-full flex items-start md:items-end"
            style={{
              backgroundImage: `url(${item?.img})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              touchAction: 'none',
            }}>
            {item?.type === 'game' && (
              <>
                <div className="m-3 flex flex-col justify-start md:hidden">
                  <div className="flex items-center mt-1">
                    <div className="font-medium text-xl">
                      {item?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}р
                    </div>
                    <div className="ml-2.5 line-through mt-0.5 opacity-60">
                      {item?.oldPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}р
                    </div>
                    <div className="ml-1.5 text-blue-600 mt-0.5">-55%</div>
                  </div>
                  <div className="text-white w-44 leading-5 mt-1.5">{item?.title}</div>
                </div>
                <div className="bg-white rounded-tr-md hidden md:block w-72">
                  <div className="text-black font-semibold text-lg text-center py-5">
                    {item?.title}
                  </div>
                  <div className="flex border-t border-gray-200">
                    <div className="text-lg line-through text-gray-500 bg-white flex flex-grow text-center items-center justify-center py-3">
                      {item?.oldPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}р
                    </div>
                    <div className="text-lg text-white bg-blue-600 flex flex-grow text-center items-center justify-center py-3">
                      {item?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}р
                    </div>
                  </div>
                </div>
              </>
            )}
          </a>
        </Link>
      ),
      renderThumb: (
        <b
          onClick={() => slideToItem(index.toString())}
          className={clsx(
            'block cursor-pointer rounded-full shadow-sm bg-white bg-opacity-60 transition-all duration-300',
            activeBanner === index ? 'opacity-100' : 'opacity-40',
          )}
          style={{
            width: 10,
            height: 10,
            margin: 5,
          }}
        />
      ),
    })),
  })

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     slideToNextItem()
  //   }, 5000)

  //   return () => {
  //     window.clearInterval(interval)
  //   }
  // }, [slideToNextItem])

  useListenToCustomEvent((data) => {
    if (data.eventName === 'onSlideStartChange') {
      // Once we've narrowed the type of event
      // you can safetely access to the props
      // related to the current event.
      console.log(data.nextItem)
      setActiveBanner(data.nextItem)
    }
  })

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-50 mt-6 select-none">
      {carouselFragment}
      {banners.length > 1 && (
        <>
          <div className="absolute left-0 right-0 top-1/2 z-1 hidden lg:block">
            <button
              className="h-16 mx-2 flex justify-center items-center absolute left-0 transform -translate-y-1/2"
              type="button"
              onClick={slideToPrevItem}>
              <CaretLeft className="h-8 w-8 text-white" />
            </button>
            <button
              className="h-16 mx-2 flex justify-center items-center absolute right-0 transform -translate-y-1/2"
              type="button"
              onClick={slideToNextItem}>
              <CaretRight className="h-8 w-8 text-white" />
            </button>
          </div>
          <ThumbsWrapper>{thumbsFragment}</ThumbsWrapper>
        </>
      )}
    </div>
  )
}
