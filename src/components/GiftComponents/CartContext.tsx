'use client'

import {createContext, useContext, useState, ReactNode} from 'react'

export type CartItem = {
  id: number
  nome: string
  valor: number
  imagem: string
  quantidade: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantidade'>) => void
  removeFromCart: (id: number) => void
  total: number
  nomeComprador: string
  setNomeComprador: React.Dispatch<React.SetStateAction<string>>
}

const CartContext = createContext<CartContextType>(
  {} as CartContextType
)

export function CartProvider({
  children,
}: {
  children: ReactNode
}) {

  const [cart, setCart] = useState<CartItem[]>([])
  const [nomeComprador, setNomeComprador] =  useState('')

  function addToCart(item: Omit<CartItem, 'quantidade'>) {

    setCart((prev) => {

      const existing = prev.find(
        (i) => i.id === item.id
      )

      if (existing) {

        return prev.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantidade: i.quantidade + 1,
              }
            : i
        )
      }

      return [
        ...prev,
        {
          ...item,
          quantidade: 1,
        },
      ]
    })
  }

  function removeFromCart(id: number) {

    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantidade: item.quantidade - 1,
              }
            : item
        )
        .filter((item) => item.quantidade > 0)
    )
  }

  const total = cart.reduce(
    (acc, item) =>
      acc + item.valor * item.quantidade,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        total,
        nomeComprador,
        setNomeComprador,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}