import React from 'react'
import type { NextPage } from 'next'
import { Carousel } from '../components/Carousel'
import { ProductCard } from '../components/ProductCard'
import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'
import Link from 'next/link'
import { Button } from '../components/Button'
import { DotsThree } from 'phosphor-react'
import { Select } from '../components/Select'
import { MultipleSelect } from '../components/MultipleSelect'
import { Catalog } from '../components/Catalog'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { GenreCard } from '../components/GenreCard'

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = React.useState<string>('tab1')

  const handleValueChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <>
      <Carousel />
      <div className="mt-14">
        <div className="text-xl font-semibold mb-6">Популярное</div>
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-16 md:gap-4 xl:gap-20 2xl:grid-cols-5 2xl:gap-16">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="mt-14">
        <div className="text-xl font-semibold mb-6">Как это работает</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 p-16 bg-gray-100 bg-opacity-80 rounded-lg">
          <div>
            <div className=" text-gray-400 font-extralight text-3xl">01</div>
            <div className="font-semibold mt-5 text-xl">Выберите игру</div>
            <div className="mt-4 w-4/5 text-gray-500">
              После покупки игра добавиться в вашу библиотеку.
            </div>
          </div>
          <div>
            <div className=" text-gray-400 font-extralight text-3xl">02</div>
            <div className="font-semibold mt-5 text-xl">Скачайте приложение</div>
            <div className="mt-4 w-4/5 text-gray-500">
              После загрузки авторизируйтесь <br /> и выберите нужную игру из библиотеки.
            </div>
          </div>
          <div>
            <div className=" text-gray-400 font-extralight text-3xl">03</div>
            <div className="font-semibold mt-5 text-xl">Запускайте и играйте!</div>
            <div className="mt-4 w-4/5 text-gray-500">
              Дождитесь автоматической активации <br /> и играйте без органичений и переплат.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <Tabs.Root onValueChange={handleValueChange} defaultValue={activeTab}>
          <ScrollArea.Root className="w-full overflow-hidden mb-5">
            <ScrollArea.Viewport className="w-full h-full mb-1.5">
              <Tabs.List className="inline-flex w-full md:w-auto bg-gray-100 p-1 space-x-2 rounded-lg">
                <Tabs.Trigger
                  value="tab1"
                  className={clsx(
                    'whitespace-nowrap cursor-pointer px-8 flex flex-auto justify-center items-center font-medium text-center h-10 leading-6 rounded-md focus:outline-none transition select-none',
                    activeTab === 'tab1'
                      ? 'bg-white text-black'
                      : 'text-gray-600 bg-transparent hover:bg-gray-200',
                  )}>
                  Новинки
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="tab2"
                  className={clsx(
                    'whitespace-nowrap cursor-pointer px-8 flex flex-auto justify-center items-center text-center h-10 leading-6 font-medium rounded-md focus:outline-none transition select-none',
                    activeTab === 'tab2'
                      ? 'bg-white text-black'
                      : 'text-gray-600 bg-transparent hover:bg-gray-200',
                  )}>
                  Лидеры продаж
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="tab3"
                  className={clsx(
                    'whitespace-nowrap cursor-pointer px-8 flex flex-auto justify-center items-center text-center h-10 leading-6 font-medium rounded-md focus:outline-none transition select-none',
                    activeTab === 'tab3'
                      ? 'bg-white text-black'
                      : 'text-gray-600 bg-transparent hover:bg-gray-200',
                  )}>
                  Последние поступления
                </Tabs.Trigger>
              </Tabs.List>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              orientation="horizontal"
              className="flex select-none flex-col h-0.5 rounded-full"
              style={{ touchAction: 'none' }}>
              <ScrollArea.Thumb className="flex-1 before:bg-gray-200 reltaive before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-blue-300" />
          </ScrollArea.Root>
          <Tabs.Content value="tab1">
            <div className="grid grid-cols-2 grid-rows-2 grid-flow-col rounded-md overflow-hidden h-[500px] md:h-[560px]">
              <Link href="/">
                <a
                  className="w-full col-span-2 md:row-span-2 bg-gray-900/40 py-4 px-5 flex flex-col justify-end"
                  style={{
                    flex: '0 0 auto',
                    backgroundImage: 'url(./fh5.jpg)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}>
                  <div className="flex flex-col md:flex-row justify-between items-start space-y-3 md:space-y-0 md:items-center">
                    <div className="text-white w-40 lg:w-32 2xl:w-40">Forza Horizon 5</div>
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-200/80 font-light line-through">3 999p</div>
                      <div className="bg-gray-900/60 py-1 px-3 rounded-md font-medium text-white backdrop-blur">
                        2 999p
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a
                  className="w-full bg-gray-900/50 py-4 px-5 flex flex-col justify-end"
                  style={{
                    flex: '0 0 auto',
                    backgroundImage: 'url(./soft.jpeg)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}>
                  <div className="flex flex-col md:flex-row justify-between items-start space-y-3 md:space-y-0 md:items-center">
                    <div className="text-white w-40 lg:w-32 2xl:w-40">Sea of Thieves</div>
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-200/80 font-light line-through">3 999p</div>
                      <div className="bg-gray-900/60 py-1 px-3 rounded-md font-medium text-white backdrop-blur">
                        2 999p
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a
                  className="w-full bg-gray-900/60 py-4 px-5 flex flex-col justify-end"
                  style={{
                    flex: '0 0 auto',
                    backgroundImage: 'url(./fh5-22.jpg)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}>
                  <div className="flex flex-col md:flex-row justify-between items-start space-y-3 md:space-y-0 md:items-center">
                    <div className="text-white w-40 lg:w-32 2xl:w-40">Forza Horizon 4</div>
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-200/80 font-light line-through">3 999p</div>
                      <div className="bg-gray-900/60 py-1 px-3 rounded-md font-medium text-white backdrop-blur">
                        2 999p
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a
                  className="w-full bg-gray-900/70 py-4 px-5 flex-col justify-end hidden lg:flex"
                  style={{
                    flex: '0 0 auto',
                    backgroundImage: 'url(./ln2.jpg)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}>
                  <div className="flex flex-col md:flex-row justify-between items-start space-y-3 md:space-y-0 md:items-center">
                    <div className="text-white w-40 lg:w-32 2xl:w-40">Little Nightmares 2</div>
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-200/80 font-light line-through">3 999p</div>
                      <div className="bg-gray-900/60 py-1 px-3 rounded-md font-medium text-white backdrop-blur">
                        2 999p
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a
                  className="w-full bg-gray-900/80 py-4 px-5 flex-col justify-end hidden lg:flex"
                  style={{
                    flex: '0 0 auto',
                    backgroundImage: 'url(./r4.jpg)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}>
                  <div className="flex flex-col md:flex-row justify-between items-start space-y-3 md:space-y-0 md:items-center">
                    <div className="text-white w-40 lg:w-32 2xl:w-40">Ride 4</div>
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-200/80 font-light line-through">3 999p</div>
                      <div className="bg-gray-900/60 py-1 px-3 rounded-md font-medium text-white backdrop-blur">
                        2 999p
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a
                  className="w-full bg-gray-900/90 py-4 px-5 flex-col justify-end hidden xl:flex"
                  style={{
                    flex: '0 0 auto',
                    backgroundImage: 'url(./h3.jpg)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}>
                  <div className="flex flex-col md:flex-row justify-between items-start space-y-3 md:space-y-0 md:items-center">
                    <div className="text-white w-40 lg:w-32 2xl:w-40">Hitman 3</div>
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-200/80 font-light line-through">3 999p</div>
                      <div className="bg-gray-900/60 py-1 px-3 rounded-md font-medium text-white backdrop-blur">
                        2 999p
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a
                  className="w-full bg-gray-900 py-4 px-5 flex-col justify-end hidden xl:flex"
                  style={{
                    flex: '0 0 auto',
                    backgroundImage: 'url(./re4.jpg)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}>
                  <div className="flex flex-col md:flex-row justify-between items-start space-y-3 md:space-y-0 md:items-center">
                    <div className="text-white w-40 lg:w-32 2xl:w-40">Resident Evil Village</div>
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-200/80 font-light line-through">599p</div>
                      <div className="bg-gray-900/60 py-1 px-3 rounded-md font-medium text-white backdrop-blur">
                        399p
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab2">tab2 content</Tabs.Content>
          <Tabs.Content value="tab3">tab3 content</Tabs.Content>
        </Tabs.Root>
      </div>
      {/* <div className="mt-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-8">
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
      </div> */}
      <Catalog />
    </>
  )
}

export default Home
