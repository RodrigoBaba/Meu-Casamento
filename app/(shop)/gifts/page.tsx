'use client'

import { useState } from 'react'

import { gifts } from '@/src/data/gifts'

import GiftCard from '@/src/components/GiftComponents/GiftCard'
import Cart from '@/src/components/GiftComponents/Cart'

const categories = [
  'Todos',
  'Cozinha',
  'Banheiro',
  'Lua de Mel',
]

export default function GiftsPage() {

  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredGifts =
    selectedCategory === 'Todos'
      ? gifts
      : gifts.filter(
          (gift) =>
            gift.categoria === selectedCategory
        )

  return (

    <>

      {/* CONTEÚDO DA PÁGINA */}

      <main className="min-h-screen bg-rose-50 p-8">

        <h1 className="text-5xl font-bold text-center mb-10">
          Lista de Presentes
        </h1>

        <div className="flex gap-4 justify-center flex-wrap mb-12">

          {
            categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6
                  py-3
                  rounded-full
                  transition

                  ${
                    selectedCategory === category
                      ? 'bg-rose-500 text-white'
                      : 'bg-white text-zinc-700'
                  }
                `}
              >
                {category}
              </button>
            ))
          }

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {
            filteredGifts.map((gift) => (

              <GiftCard
                key={gift.id}
                gift={gift}
              />

            ))
          }

        </div>

      </main>

      {/* FORA DO MAIN */}

      <Cart />

    </>

  )
}