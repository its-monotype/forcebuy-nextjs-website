import { CaretRight, DotsThree, X } from 'phosphor-react'
import React from 'react'
import { Button } from './Button'
import { MultipleSelect } from './MultipleSelect'
import { ProductCard } from './ProductCard'
import { Select } from './Select'
import { Tooltip } from './Tooltip'

export const Catalog = () => {
  const [genres, setGenres] = React.useState([
    {
      id: 0,
      text: 'Гонки',
      value: 'racing',
      checked: false,
    },
    {
      id: 1,
      text: 'Инди',
      value: 'indie',
      checked: false,
    },
    {
      id: 2,
      text: 'Казуальные',
      value: 'casual',
      checked: false,
    },
  ])
  const [sortBy, setSortBy] = React.useState<string>('popularity')
  const [price, setPrice] = React.useState<string>('all')

  const onCheckedChange = (id: number, checked: boolean) => {
    setGenres(genres.map((el) => (el.id === id ? Object.assign({}, el, { checked }) : el)))
  }

  const onSortBySelectChange = (value: string) => {
    setSortBy(value)
  }

  const onPriceSelectChange = (value: string) => {
    setPrice(value)
  }

  const resetFilters = () => {
    setGenres(
      genres.map((el) => {
        return {
          ...el,
          checked: false,
        }
      }),
    )
    setSortBy('popularity')
    setPrice('all')
  }

  return (
    <div className="mt-14 relative">
      <div className="text-xl font-semibold mb-3">
        Каталог игр <span className="text-sm font-medium text-gray-600 ml-1">1127</span>
      </div>

      <div className="my-4 flex items-center space-x-6">
        <Select
          value={sortBy}
          items={[
            { text: 'По популярности', value: 'popularity' },
            { text: 'Сначала дешевые', value: 'priceDesc' },
            { text: 'Сначала дорогие', value: 'priceAsc' },
          ]}
          onSelectChange={onSortBySelectChange}
        />
        <MultipleSelect title="Жанры" checkboxes={genres} onCheckedChange={onCheckedChange} />

        <Select
          value={price}
          items={[
            { text: 'Все цены', value: 'all' },
            { text: 'До 100 рублей', value: 'upto100' },
            { text: 'До 200 рублей', value: 'upto200' },
          ]}
          onSelectChange={onPriceSelectChange}
        />
        {(genres.filter((el) => el.checked === true).length > 0 ||
          sortBy !== 'popularity' ||
          price !== 'all') && (
          <Tooltip content="Очистить фильтры">
            <X size={25} className="cursor-pointer" onClick={resetFilters} />
          </Tooltip>
        )}
      </div>

      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-16">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
  )
}
