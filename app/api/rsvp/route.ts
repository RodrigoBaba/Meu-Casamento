export async function POST(request: Request) {

  try {

    const body = await request.json()

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzs9bMsymQP_mX_lJdI9vAe_7KFdxqr7SrFq5ot2tPxzqzbZiCVks_GPbiPy95lG585Fg/exec',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(body)
      }
    )

    const text = await response.text()

    return Response.json({
      success: true,
      data: text
    })

  } catch (error) {

    return Response.json(
      {
        success: false,
        error: 'Erro ao enviar RSVP'
      },
      {
        status: 500
      }
    )
  }
}