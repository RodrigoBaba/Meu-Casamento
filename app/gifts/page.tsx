const gifts = [
  {
    id: 1,
    nome: 'Air Fryer',
    valor: 300,
    vendido: false,
  },
  {
    id: 2,
    nome: 'Jogo de Panelas',
    valor: 250,
    vendido: true,
  },
]

export default function Gifts() {
  return (
    <main className="min-h-screen bg-rose-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Lista de Presentes
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {gifts.map((gift) => (
          <div
            key={gift.id}
            className="bg-white rounded-3xl shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {gift.nome}
            </h2>

            <p className="text-zinc-600 mb-4">
              R$ {gift.valor}
            </p>

            {gift.vendido ? (
              <span className="text-red-500 font-semibold">
                Presente já comprado
              </span>
            ) : (
              <button className="bg-rose-500 hover:bg-rose-600 transition text-white px-5 py-2 rounded-full">
                Adicionar ao carrinho
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}