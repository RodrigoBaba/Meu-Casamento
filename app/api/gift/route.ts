import { enviarParaGoogleSheets } from '@/src/services/googleSheets'

export async function POST(request: Request) {

  try {

    console.log('1 - Entrou na rota')
    const body = await request.json()
    console.log('2 - Body recebido:')
    console.log(body)

    const data =
      await enviarParaGoogleSheets({
        tipo: 'checkout',
        ...body
      })
    
    console.log('3 - Resposta Google Sheets:')
    console.log(data)

    return Response.json({
      success: true,
      data
    })

  } catch (error) {
    console.log('4 - ERRO:')
    console.log(error)
    return Response.json(
      {
        success: false,
        error: 'Erro ao finalizar compra'
      },
      {
        status: 500
      }
    )
  }
}