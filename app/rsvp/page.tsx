import Link from 'next/link'
import RSVPForm from '@/components/RSVPForm'

export default function RSVPPage() {
  return (
    <main className="min-h-screen min-w-screen flex items-center justify-center p-6  bg-rose-50 text-zinc-800" >

      <div className="w-full max-w-md w-800 h-800">

        <Link
          href="/"
          className="inline-block mb-6 text-rose-500 hover:text-rose-600 transition"
        >
          ← Voltar
        </Link>

        <div className="bg-white shadow-lg rounded-3xl p-8">

          <h1 className="text-3xl font-bold mb-6 text-center">
            Confirmar Presença
          </h1>

          <RSVPForm />

        </div>
      </div>
    </main>
  )
}