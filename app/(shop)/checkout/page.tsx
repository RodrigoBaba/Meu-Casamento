'use client'

import { useState } from 'react'
import { useCart } from '@/src/components/GiftComponents/CartContext'
import { useRouter } from 'next/navigation'
import { finalizarCompra } from '@/src/services/enviarGifts'

export default function CheckoutPage() {

  const {
    cart,
    total,
    nomeComprador,
  } = useCart()

  const [copiado, setCopiado] = useState(false)
  const router = useRouter()

  async function copiarPix() {

    await navigator.clipboard.writeText(
      'seu-pix@email.com'
    )

    setCopiado(true)
  }

  async function handleFinalizar() {
    console.log('Handle:')
    
    const itens = cart
      .map(item => item.nome)
      .join(' / ')

    const quantidades = cart
      .map(item => item.quantidade)
      .join(' / ')

    const sucesso =
      await finalizarCompra({
        nome: nomeComprador,
        itens,
        quantidades,
        valorTotal: total
      })

    if (sucesso) {
      alert('Compra enviada!')
      router.push('/')
    }
  }

  return (

    <main className="min-h-screen bg-rose-50 p-8">

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold mb-8">
          Finalizar Compra
        </h1>

        {/* NOME FIXO */}

        <div className="mb-8">

          <label className="block mb-2 font-semibold">
            Comprador
          </label>

          <div className="
            w-full
            border
            bg-zinc-100
            p-4
            rounded-2xl
            text-zinc-700
            font-medium
          ">
            {nomeComprador}
          </div>

        </div>

        {/* ITENS */}

        <div className="mb-8">

          {
            cart.map((item) => (

              <div
                key={item.id}
                className="flex justify-between mb-3"
              >

                <p>
                  {item.nome}
                  ({item.quantidade}x)
                </p>

                <p>
                  R$
                  {item.valor * item.quantidade}
                </p>

              </div>
            ))
          }

        </div>

        {/* TOTAL */}

        <div className="border-t pt-6">

          <p className="text-2xl font-bold mb-6">
            Total: R$ {total}
          </p>

          {/* PIX */}

          <div className="bg-rose-100 rounded-2xl p-6 mb-6">

            <p className="font-bold mb-2 text-center">
              Chave PIX
            </p>

            <button
              onClick={() => {
                copiarPix()
                handleFinalizar()
              }}
              className="
                w-full
                bg-rose-500
                hover:bg-rose-600
                transition
                text-white
                py-3
                rounded-full
              "
            >

              {
                copiado
                  ? 'PIX copiado!'
                  : 'Copiar chave PIX'
              }

            </button>

          </div>

          {/* FINALIZAR */}

          {/* <button
            onClick={handleFinalizar}
            className="
              w-full
              bg-zinc-900
              hover:bg-zinc-800
              transition
              text-white
              py-4
              rounded-full
            "
          >
            Já fiz o PIX
          </button> */}

        </div>

      </div>

    </main>
  )
}