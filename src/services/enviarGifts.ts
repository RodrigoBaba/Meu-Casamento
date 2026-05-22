export async function finalizarCompra(dados: {
  nome: string
  itens: string
  quantidades: string
  valorTotal: number
}) {
  console.log('1 - Entrei:')

  const response = await fetch(
    '/api/gift',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(dados)
    }
  )

  const data = await response.json()

  return data.success
}