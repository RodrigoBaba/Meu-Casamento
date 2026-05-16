export async function enviarRSVP(dados: {
  nome: string
  acompanhantes: string
}) {

  const response = await fetch(
    '/api/rsvp',
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