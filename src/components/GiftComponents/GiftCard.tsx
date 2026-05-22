'use client'

import { useCart } from '@/src/components/GiftComponents/CartContext'

export default function GiftCard({
    gift,
}: any) {
    const {
        addToCart,
        removeFromCart,
        cart,
    } = useCart()

    const cartItem = cart.find(
        (item) => item.id === gift.id
    )

    return (

        <div className="bg-white rounded-3xl shadow-md overflow-hidden">

            <img
                src={gift.imagem}
                alt={gift.nome}
                className="w-full h-56 object-cover"
            />

            <div className="p-6">

                <h2 className="text-2xl font-semibold mb-2">
                    {gift.nome}
                </h2>

                <p className="text-zinc-600 mb-4">
                    R$ {gift.valor}
                </p>

                {
                    gift.vendido ? (
                        <span className="text-red-500 font-semibold">
                            Presente já comprado
                        </span>
                    ) : (

                        <div className="flex items-center justify-between">

                            <button
                                onClick={() => addToCart(gift)}
                                className="bg-rose-500 hover:bg-rose-600 transition text-white px-5 py-2 rounded-full"
                            >
                                Adicionar
                            </button>

                            {
                                cartItem && (

                                    <div className="flex items-center gap-3">

                                        <button
                                            onClick={() => removeFromCart(gift.id)}
                                            className="w-8 h-8 rounded-full bg-zinc-200"
                                        >
                                            -
                                        </button>

                                        <span>
                                            {cartItem.quantidade}
                                        </span>

                                        <button
                                            onClick={() => addToCart(gift)}
                                            className="w-8 h-8 rounded-full bg-zinc-200"
                                        >
                                            +
                                        </button>

                                    </div>
                                )
                            }

                        </div>
                    )
                }

            </div>

        </div>
    )
}