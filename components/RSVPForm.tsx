'use client'

import { useState } from 'react'
import { enviarRSVP } from '@/services/googleSheets'
import { useRouter } from 'next/navigation'

export default function RSVPForm() {

    const [nome, setNome] = useState('')
    const [acompanhantes, setAcompanhantes] = useState('')
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const sucesso = await enviarRSVP({
            nome,
            acompanhantes
        })

        if (sucesso) {
            alert('Presença confirmada!')
            setNome('')
            setAcompanhantes('')
            router.push('/')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
        >

            <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="border p-3 rounded-xl"
            />

            <input
                type="number"
                placeholder="Quantidade de acompanhantes"
                value={acompanhantes}
                onChange={(e) => setAcompanhantes(e.target.value)}
                className="border p-3 rounded-xl"
            />

            <button className="bg-rose-500 hover:bg-rose-600 transition text-white p-3 rounded-xl">
                Confirmar
            </button>

        </form>
    )
}