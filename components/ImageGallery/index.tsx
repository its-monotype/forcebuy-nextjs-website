import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel-js'
import Image from 'next/image'
import clsx from 'clsx'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export const ImageGallery = () => {
  const [active, setActive] = React.useState<number>(0)

  const { carouselFragment, thumbsFragment, slideToItem, useListenToCustomEvent } =
    useSpringCarousel({
      withThumbs: true,
      withLoop: true,
      thumbsSlideAxis: 'y',
      enableThumbsWrapperScroll: false,
      initialActiveItem: active,
      items: [...Array(5)].map((item, index) => ({
        id: `CarouselItem-${index}`,
        renderItem: <div className="w-full bg-gray-200">Билли джин номер {index}</div>,
        renderThumb: (
          <div
            className={clsx(
              'bg-gray-200 w-28 h-20 rounded-md border-2 cursor-pointer',
              index !== 0 && 'mt-1.5',
              active === index ? 'border-blue-500' : 'border-transparent',
            )}
            onClick={() => slideToItem(`CarouselItem-${index}`)}>
            Билли джин номер {index}
          </div>
        ),
      })),
    })

  useListenToCustomEvent((data) => {
    if (data.eventName === 'onSlideStartChange') {
      // Once we've narrowed the type of event
      // you can safetely access to the props
      // related to the current event.
      console.log(data.nextItem)
      setActive(data.nextItem)
    }
  })

  return (
    <div className="flex flex-row items-start space-x-1.5">
      <ScrollArea.Root type="auto">
        <ScrollArea.Viewport className="overflow-hidden h-[550px] w-full">
          {thumbsFragment}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="-left-3 flex select-none w-1.5 h-full z-10 bg-gray-300 rounded-full overflow-hidden">
          <ScrollArea.Thumb className="before:rounded-full flex-1 before:bg-gray-400 reltaive before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <div className="w-full rounded-lg overflow-hidden h-[550px]">{carouselFragment}</div>
    </div>
  )
}
