import { NextPage } from 'next'
import { CaretRight, HeartStraight } from 'phosphor-react'
import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { Review } from '../components/Review'
import { ImageGallery } from '../components/ImageGallery'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import clsx from 'clsx'
import { Rating } from '../components/Rating'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Tabs from '@radix-ui/react-tabs'
import { Link, Element, Events, scrollSpy } from 'react-scroll'
import { Sticky, StickyContainer } from 'react-sticky'
import { Button } from '../components/Button'
import { Select } from '../components/Select'
import { motion } from 'framer-motion'
import { Switch } from '../components/Switch'

const Product: NextPage = () => {
  const [sortBy, setSortBy] = React.useState<string>('date')
  const [type, setType] = React.useState<string>('all')
  const [activeEdition, setActiveEdition] = React.useState('standard')
  const [activeTab, setActiveTab] = React.useState<string>('tab1')
  const [isOn, setIsOn] = React.useState(false)

  const handleValueChange = (value: string) => {
    setActiveTab(value)
  }

  const onSortBySelectChange = (value: string) => {
    setSortBy(value)
  }

  const onTypeSelectChange = (value: string) => {
    setType(value)
  }

  return (
    <>
      <div className="mt-14 mb-14">
        <div className="grid grid-cols-2 gap-20">
          <ImageGallery />
          <div className="flex flex-col justify-center">
            <div className="text-3xl font-medium">Forza Horizon 5</div>
            <div className="flex mt-4 items-center">
              <Rating readOnly rating={3.5} />
              <div className="text-gray-800 ml-1.5">
                3.5 <span>(23 отзыва)</span>
              </div>
            </div>
            <div className="text-lg mt-6 w-2/3 leading-8">
              Forza Horizon 5 - это гоночная видеоигра, действие которой происходит в открытом мире
              в Мексике.
            </div>
            <div className="flex mt-5 items-center justify-start space-x-3">
              <div
                className="text-black h-7 px-3 text-sm leading-5 inline-flex items-center rounded-md justify-center overflow-hidden"
                style={{ backgroundColor: '#F9F9E7' }}>
                Новинки
              </div>
              <div
                className="text-black h-7 px-3 text-sm leading-5 font-medium inline-flex items-center rounded-md justify-center overflow-hidden"
                style={{ backgroundColor: '#DBE7FF' }}>
                Доступен онлайн
              </div>
            </div>

            <div className="flex items-center mt-10">
              <div className="text-2xl font-medium">1 199р</div>
              <div className="flex items-center ml-5 space-x-5">
                <div className="text-gray-500 line-through text-lg">2 299р</div>
                <div className="text-blue-600 text-lg">-55%</div>
              </div>
            </div>

            <ToggleGroup.Root
              type="single"
              defaultValue={activeEdition}
              onValueChange={(value) => setActiveEdition(value)}
              aria-label="Text alignment"
              className="inline-flex self-start mt-6">
              <ToggleGroup.Item
                value="standard"
                aria-label="Standard Edition"
                className={clsx(
                  'flex flex-col cursor-pointer w-40 px-6 py-2 select-none rounded-l-lg',
                  activeEdition === 'standard' ? 'bg-blue-200' : 'bg-gray-100 text-gray-700',
                )}
                disabled={activeEdition === 'standard' ? true : false}>
                <div className="text-lg font-medium">Standard</div>
                <div>1 199р</div>
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="deluxe"
                aria-label="Deluxe Edition"
                className={clsx(
                  'flex flex-col cursor-pointer w-40 px-6 py-2 select-none',
                  activeEdition === 'deluxe' ? 'bg-blue-200' : 'bg-gray-100 text-gray-700',
                )}
                disabled={activeEdition === 'deluxe' ? true : false}>
                <div className="text-lg font-medium">Deluxe</div>
                <div>2 299р</div>
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="premium"
                aria-label="Premium Edition"
                className={clsx(
                  'flex flex-col cursor-pointer w-40 px-6 py-2 select-none rounded-r-lg',
                  activeEdition === 'premium' ? 'bg-blue-200' : 'bg-gray-100 text-gray-700',
                )}
                disabled={activeEdition === 'premium' ? true : false}>
                <div className="text-lg font-medium">Premium</div>
                <div>3 299р</div>
              </ToggleGroup.Item>
            </ToggleGroup.Root>

            <div className="flex items-center mt-12">
              <button className="px-28 h-[60px] flex items-center justify-center bg-blue-600 text-center text-white text-xl font-semibold rounded-lg">
                Купить
              </button>
              <button className="ml-2 bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center text-center">
                <HeartStraight className="text-gray-700 h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <StickyContainer>
        <Sticky topOffset={-69}>
          {({ style, isSticky }) => (
            <div
              style={style}
              className={clsx('py-2 bg-white z-1', isSticky ? 'mt-[69px]' : 'mt-0')}>
              <Tabs.Root defaultValue={activeTab}>
                <ScrollArea.Root className="w-full overflow-hidden">
                  <ScrollArea.Viewport className="w-full h-full">
                    <Tabs.List className="inline-flex w-full md:w-auto bg-gray-100 p-1 space-x-2 rounded-lg">
                      <Tabs.Trigger value="tab1" asChild>
                        <Link
                          activeClass="active"
                          to="tab1"
                          spy={true}
                          smooth={true}
                          offset={-133}
                          duration={500}
                          onSetActive={handleValueChange}
                          className={clsx(
                            'whitespace-nowrap cursor-pointer px-8 flex flex-auto justify-center items-center font-medium text-center h-10 leading-6 rounded-md focus:outline-none transition select-none',
                            (activeTab === 'tab1' && isSticky) || !isSticky
                              ? 'bg-white text-black'
                              : 'text-gray-700 bg-transparent hover:bg-gray-200',
                          )}>
                          Детали об игре
                        </Link>
                      </Tabs.Trigger>
                      <Tabs.Trigger value="tab2" asChild>
                        <Link
                          activeClass="active"
                          to="tab2"
                          spy={true}
                          smooth={true}
                          offset={-133}
                          duration={500}
                          onSetActive={handleValueChange}
                          className={clsx(
                            'whitespace-nowrap cursor-pointer px-8 flex flex-auto justify-center items-center font-medium text-center h-10 leading-6 rounded-md focus:outline-none transition select-none',
                            activeTab === 'tab2' && isSticky
                              ? 'bg-white text-black'
                              : 'text-gray-700 bg-transparent hover:bg-gray-200',
                          )}>
                          Описание
                        </Link>
                      </Tabs.Trigger>
                      <Tabs.Trigger value="tab3" asChild>
                        <Link
                          activeClass="active"
                          to="tab3"
                          spy={true}
                          smooth={true}
                          offset={-133}
                          duration={500}
                          onSetActive={handleValueChange}
                          className={clsx(
                            'whitespace-nowrap cursor-pointer px-8 flex flex-auto justify-center items-center font-medium text-center h-10 leading-6 rounded-md focus:outline-none transition select-none',
                            activeTab === 'tab3' && isSticky
                              ? 'bg-white text-black'
                              : 'text-gray-700 bg-transparent hover:bg-gray-200',
                          )}>
                          Системные требования
                        </Link>
                      </Tabs.Trigger>
                      <Tabs.Trigger value="tab4" asChild>
                        <Link
                          activeClass="active"
                          to="tab4"
                          spy={true}
                          smooth={true}
                          offset={-133}
                          duration={500}
                          onSetActive={handleValueChange}
                          className={clsx(
                            'whitespace-nowrap cursor-pointer px-8 flex flex-auto justify-center items-center font-medium text-center h-10 leading-6 rounded-md focus:outline-none transition select-none',
                            activeTab === 'tab4' && isSticky
                              ? 'bg-white text-black'
                              : 'text-gray-700 bg-transparent hover:bg-gray-200',
                          )}>
                          Отзывы и вопросы
                        </Link>
                      </Tabs.Trigger>
                    </Tabs.List>
                  </ScrollArea.Viewport>
                  <ScrollArea.Scrollbar
                    orientation="horizontal"
                    className="flex select-none flex-col h-0.5 rounded-full"
                    style={{ touchAction: 'none' }}>
                    <ScrollArea.Thumb className="flex-1 before:bg-gray-200 reltaive before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full" />
                  </ScrollArea.Scrollbar>
                  <ScrollArea.Corner className="bg-blue-200" />
                </ScrollArea.Root>
              </Tabs.Root>
            </div>
          )}
        </Sticky>
        <Element name="tab1" className="mt-7">
          <div className="text-xl py-5 border-b border-gray-200 font-semibold mb-6">
            Детали об игре
          </div>
          <div className="px-96 mt-10">
            <div className="flex justify-between">
              <div className="text-lg text-gray-800 text-left">Жанр</div>
              <div className="text-lg text-right">Шутер, Экшн</div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="text-lg text-gray-800 text-left">Разработчик</div>
              <div className="text-lg text-right">Rev0, Armesto</div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="text-lg text-gray-800 text-left">Клиент</div>
              <div className="text-lg text-right">Steam</div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="text-lg text-gray-800 text-left">Рекомендуемая Windows</div>
              <div className="text-lg text-right">Windows 10 21H1</div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="text-lg text-gray-800 text-left">Дата выхода</div>
              <div className="text-lg text-right">10 ноября 2021</div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="text-lg text-gray-800 text-left">Теги</div>
              <div className="text-lg text-right">Action, RPG, Open World</div>
            </div>
          </div>
        </Element>
        <Element name="tab2" className="mt-14">
          <div className="text-xl py-5 border-b border-gray-200 font-semibold mb-6">Описание</div>
          <div className="px-96 mt-10">
            <p className="text-lg text-gray-800 leading-8">
              Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки
              по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в
              истории. <br />
              <br /> Бесконечный калейдоскоп приключений Horizon <br /> Вас ждут увлекательные
              поездки по невероятно красивому и самобытному миру Мексики за рулём величайших
              автомобилей в истории. <br /> <br /> Мир, полный красок <br /> Перед вами откроется
              мир красоты и контрастов. Вы посетите пустыни, густые джунгли, исторические города,
              затерянные руины, чистейшие пляжи, глубокие ущелья и высокий, покрытый снегом вулкан.{' '}
              <br />
              <br /> Мир, полный приключений <br /> Вас ожидает масштабная кампания с сотнями
              испытаний на любой вкус. Познакомьтесь с новыми персонажами и пройдите их сюжетные
              линии до конца. <br />
              <br /> Мир, полный перемен <br /> Вы столкнётесь с удивительными природными явлениями
              Мексики: пыльными бурями и тропическими ливнями. Вместе со сменой времён года каждую
              неделю преображается и мир игры. Всякий раз вас будут ждать новые состязания,
              испытания, коллекционные предметы, награды и ещё не исследованные регионы. В мире
              Forza Horizon каждое время года хорошо по-своему! <br />
              <br /> Мир, полный друзей <br /> Участвуйте в состязаниях Horizon Arcade вместе с
              другими игроками. Проходите невероятные, захватывающие дух испытания и получайте
              удовольствие от общения без меню, лобби и экранов загрузки. Ищите новых друзей в турне
              Horizon и заездах Horizon Open, дарите подарки участникам сообщества. <br />
              <br /> Мир, полный вдохновения <br /> Творите и самовыражайтесь с помощью нового
              мощного редактора EventLab. Создавайте собственные гонки, испытания, трюки и даже
              полноценные игровые режимы. Вы сможете по-новому настроить внешний вид своей машины:
              поднять или опустить крышу кабриолета, покрасить тормозные колодки и придумать многое
              другое. А затем ничто не помешает вам поделиться своим творением с сообществом
              благодаря новой функции отправки подарков. <br />
              <br /> Начните свой путь в Horizon!
            </p>
          </div>
        </Element>
        <Element name="tab3" className="mt-14">
          <div className="text-xl py-5 border-b border-gray-200 font-semibold mb-6">
            Системные требования
          </div>
          <div className="mt-10 flex justify-between">
            <div className="w-full mx-24">
              <div className="text-lg font-semibold mb-6">Минимальные</div>
              <div className="flex justify-between">
                <div className="text-lg text-gray-800 text-left">ОС</div>
                <div className="text-lg text-right">Windows 10 version 15063.0 or higher</div>
              </div>
              <div className="flex justify-between mt-6">
                <div className="text-lg text-gray-800 text-left">Процессор</div>
                <div className="text-lg text-right">Intel i3-4170 / Intel i5 750</div>
              </div>
              <div className="flex justify-between mt-6">
                <div className="text-lg text-gray-800 text-left">Оперативная память</div>
                <div className="text-lg text-right">8 GB</div>
              </div>
              <div className="flex justify-between mt-6">
                <div className="text-lg text-gray-800 text-left">Видеокарта</div>
                <div className="text-lg text-right">NVidia GTX 760 / AMD RX 460</div>
              </div>
              <div className="flex justify-between mt-6">
                <div className="text-lg text-gray-800 text-left">Место на диске</div>
                <div className="text-lg text-right">80 GB</div>
              </div>
            </div>
            <div className="w-full mx-24">
              <div className="text-lg font-semibold mb-6">Рекомендуемые</div>
              <div className="flex justify-between">
                <div className="text-lg text-gray-800 text-left">ОС</div>
                <div className="text-lg text-right">Windows 10 version 15063.0 or higher</div>
              </div>
              <div className="flex justify-between mt-6">
                <div className="text-lg text-gray-800 text-left">Процессор</div>
                <div className="text-lg text-right">Intel i3-4170 / Intel i5 750</div>
              </div>
              <div className="flex justify-between mt-6">
                <div className="text-lg text-gray-800 text-left">Оперативная память</div>
                <div className="text-lg text-right">8 GB</div>
              </div>
              <div className="flex justify-between mt-6">
                <div className="text-lg text-gray-800 text-left">Видеокарта</div>
                <div className="text-lg text-right">NVidia GTX 760 / AMD RX 460</div>
              </div>
              <div className="flex justify-between mt-6">
                <div className="text-lg text-gray-800 text-left">Место на диске</div>
                <div className="text-lg text-right">80 GB</div>
              </div>
            </div>
          </div>
        </Element>
        <Element name="tab4" className="mt-14">
          <div className="text-xl py-5 border-b border-gray-200 font-semibold mb-6">
            Отзывы и вопросы
          </div>
          <div className="mt-10 flex justify-between">
            <div className="bg-gray-100 p-8 rounded-lg h-full">
              <div className="flex items-center">
                <div className="text-4xl font-medium">3.5</div>
                <Rating readOnly rating={3.5} className="ml-3" />
              </div>
              <div className="mt-3">основан на 23 отзывах</div>
              <div className="mt-3">
                <span className="font-semibold">96%</span> порекомендовали бы другу
              </div>
              <div className="mt-8 font-semibold text-xl">Оставьте свой отзыв</div>
              <div className="mt-3 w-80">
                Поделитесь ссвоими впечатлениями <br /> об этой игре.
              </div>
              <Button variant="solid" color="primary" size="lg" className="inline-flex w-full mt-5">
                Оставить отзыв
              </Button>
              <Button
                variant="solid"
                color="secondary"
                size="lg"
                className="inline-flex w-full mt-3">
                Задать вопрос
              </Button>
            </div>
            <div className="ml-20 w-full">
              <div className="my-4 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <label
                      htmlFor="verified"
                      className="pr-3 leading-none select-none text-sm font-medium">
                      Только подтвержденные покупки
                    </label>
                    <Switch isOn={isOn} onCheckedChange={setIsOn} />
                  </div>
                  <Select
                    value={type}
                    items={[
                      { text: 'Отзывы и вопросы', value: 'all' },
                      { text: 'Только отзывы', value: 'reviews' },
                      { text: 'Только вопросы', value: 'questions' },
                    ]}
                    onSelectChange={onTypeSelectChange}
                  />
                  <Select
                    value={sortBy}
                    items={[
                      { text: 'По дате', value: 'date' },
                      { text: 'По популярности', value: 'popularity' },
                    ]}
                    onSelectChange={onSortBySelectChange}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <Review />
                <Review />
                <Review />
              </div>

              <Button
                className="mt-6"
                size="xl"
                variant="link"
                color="primary"
                rightIcon={<CaretRight className="text-[rgb(74, 110, 224)] h-4 w-4 ml-2" />}>
                Показать еще
              </Button>
            </div>
          </div>
        </Element>
      </StickyContainer>
      <div className="mt-14">
        <div className="text-xl py-5 border-b border-gray-200 font-semibold mb-6">Похожие игры</div>
        <div className="mt-10 grid grid-cols-5 gap-16">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  )
}

export default Product
