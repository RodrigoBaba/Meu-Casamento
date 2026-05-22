const GOOGLE_SCRIPT_URL =  'https://script.google.com/macros/s/AKfycbzs9bMsymQP_mX_lJdI9vAe_7KFdxqr7SrFq5ot2tPxzqzbZiCVks_GPbiPy95lG585Fg/exec'

export async function enviarParaGoogleSheets(
  body: unknown
) {

  const response = await fetch(
    GOOGLE_SCRIPT_URL,
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(body)
    }
  )

  if (!response.ok) {
    throw new Error(
      'Erro ao enviar para Google Sheets'
    )
  }

  return response.text()
}