'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
  ShoppingCart,
  X
} from 'lucide-react'

import {
  useCart
} from '@/src/components/GiftComponents/CartContext'

export default function Cart() {

  const [isOpen, setIsOpen] = useState(false)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)

    check() // roda na primeira vez
    window.addEventListener('resize', check)

    return () => window.removeEventListener('resize', check)
  }, [])

  const {
    cart,
    total,
    nomeComprador,
    setNomeComprador,
  } = useCart()

  return (

    <>

      {/* BOTÃO FLUTUANTE */}

      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed
          bottom-6
          right-6

          z-[90]

          bg-rose-500
          hover:bg-rose-600

          text-white

          w-16
          h-16

          rounded-full
          shadow-2xl

          flex
          items-center
          justify-center

          transition
        "
      >

        <ShoppingCart size={28} />

        {
          cart.length > 0 && (

            <div
              className="
                absolute
                -top-2
                -right-2

                bg-white
                text-rose-500

                w-7
                h-7

                rounded-full

                flex
                items-center
                justify-center

                text-sm
                font-bold
              "
            >

              {
                cart.reduce(
                  (acc, item) =>
                    acc + item.quantidade,
                  0
                )
              }

            </div>
          )
        }

      </button>

      {/* OVERLAY ESCURO */}

      {
        isOpen && (

          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 9998
            }}
          />

        )
      }


      {/* MODAL CARRINHO */}

      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: isMobile ? '100vw' : '420px',
          height: '100vh',
          background: '#fff',
          zIndex: 9999,

          display: 'flex',
          flexDirection: 'column',

          boxShadow: '-10px 0 30px rgba(0,0,0,0.15)',

          transform: isOpen
            ? 'translateX(0)'
            : 'translateX(100%)',

          transition: 'transform .3s ease-in-out'
        }}
      >

        {/* HEADER */}

        <div
          className="
      flex
      items-center
      justify-between

      p-6

      border-b
      shrink-0
    "
        >

          <h2 className="text-2xl font-bold">
            Seu Carrinho
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="
        p-2
        rounded-full
        hover:bg-zinc-100
        transition
      "
          >

            <X size={28} />

          </button>

        </div>

        {/* ITENS */}

        <div
          className="
      flex-1
      overflow-y-auto

      p-6

      flex
      flex-col
      gap-4
    "
        >

          {
            cart.length === 0 && (

              <p className="text-zinc-500">
                Seu carrinho está vazio
              </p>
            )
          }

          {
            cart.map((item) => (

              <div
                key={item.id}
                className="
            flex
            gap-4

            border
            border-zinc-200

            rounded-2xl

            p-3
          "
              >

                <img
                  src={item.imagem}
                  className="
              w-20
              h-20
              object-cover
              rounded-xl
            "
                />

                <div className="flex-1">

                  <p className="font-bold">
                    {item.nome}
                  </p>

                  <p className="text-zinc-500 text-sm">
                    Quantidade:
                    {' '}
                    {item.quantidade}
                  </p>

                  <p className="text-rose-500 font-bold mt-2">
                    R$
                    {' '}
                    {item.valor * item.quantidade}
                  </p>

                </div>

              </div>
            ))
          }

        </div>

        {/* FOOTER */}

        <div
          className="
      border-t
      p-6
      bg-white
      shrink-0
    "
        >

          <div className="mb-6">

            <label
              className="
          block
          mb-2
          font-semibold
        "
            >
              Nome de quem fará o PIX
            </label>

            <input
              type="text"
              placeholder="Digite seu nome"

              value={nomeComprador}

              onChange={(e) =>
                setNomeComprador(
                  e.target.value
                )
              }

              className="
          w-full
          border
          border-zinc-300

          p-4
          rounded-2xl

          focus:outline-none
          focus:border-rose-400
        "
            />

          </div>

          <div
            className="
        flex
        justify-between
        items-center

        mb-6
      "
          >

            <span className="text-lg">
              Total
            </span>

            <span
              className="
          text-3xl
          font-bold
          text-rose-500
        "
            >
              R$ {total}
            </span>

          </div>

          <Link
            href={
              nomeComprador
                ? '/checkout'
                : '#'
            }

            onClick={(e) => {

              if (!nomeComprador) {
                e.preventDefault()
              }
            }}

            className={`
        block
        text-center

        py-4
        rounded-full

        font-bold
        transition

        ${nomeComprador

                ? `
              bg-rose-500
              hover:bg-rose-600
              text-white
            `

                : `
              bg-zinc-300
              text-zinc-500
              pointer-events-none
            `
              }
      `}
          >

            Finalizar Compra

          </Link>

        </div>

      </div>

    </>
  )
}