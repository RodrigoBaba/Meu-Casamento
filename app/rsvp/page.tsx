// import Link from 'next/link'

// export default function RSVP() {
//   return (
//     <main className="min-h-screen flex items-center justify-center bg-white p-6">

//       <div className="w-full max-w-md">

//         <Link
//           href="/"
//           className="inline-block mb-6 text-rose-500 hover:text-rose-600 transition"
//         >
//           ← Voltar
//         </Link>

//         <div className="bg-white shadow-lg rounded-3xl p-8">

//           <h1 className="text-3xl font-bold mb-6 text-center">
//             Confirmar Presença
//           </h1>

//           <form className="flex flex-col gap-4">

//             <input
//               type="text"
//               placeholder="Seu nome"
//               className="border p-3 rounded-xl"
//             />

//             <input
//               type="number"
//               placeholder="Quantidade de acompanhantes"
//               className="border p-3 rounded-xl"
//             />

//             <button className="bg-rose-500 hover:bg-rose-600 transition text-white p-3 rounded-xl">
//               Confirmar
//             </button>

//           </form>

//         </div>
//       </div>
//     </main>
//   )
// }

import Link from 'next/link'
import RSVPForm from '@/components/RSVPForm'

export default function RSVPPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6  bg-rose-50 text-zinc-800" >

      <div className="w-full max-w-md">

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