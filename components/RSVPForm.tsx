'use client'

import { useState } from 'react'
import { enviarRSVP } from '@/services/googleSheets'
import { useRouter } from 'next/navigation'
import LoadingMonogram from '@/components/LoadingMonogram'
import LoadingOverlay from '@/components/LoadingOverlay'

export default function RSVPForm() {

    const [nome, setNome] = useState('')
    const [acompanhantes, setAcompanhantes] = useState('')
    const [nomesAcompanhantes, setNomesAcompanhantes] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        try {
            setLoading(true)

            const sucesso = await enviarRSVP({
                nome,
                acompanhantes,
                nomesAcompanhantes:
                    nomesAcompanhantes.join(' / ')
            })

            if (sucesso) {
                alert('Presença confirmada!')
                setNome('')
                setAcompanhantes('')
                setNomesAcompanhantes([])

                router.push('/')
            }
        } catch (error) {
            alert('Erro ao confirmar presença')
        } finally {
            setLoading(false)
        }
    }

    return (

        <>
            {
                loading ? (

                    <div className="
                    fixed
                    inset-0
                    z-50
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-6
                    bg-black/40
                    backdrop-blur-sm
                ">

                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="
                            w-72
                            rounded-3xl
                            shadow-2xl
                        "
                        >
                            <source
                                src="/videos/loading.mp4"
                                type="video/mp4"
                            />
                        </video>

                        <p className="
                        text-black
                        text-xl
                        tracking-[0.2em]
                        uppercase
                        animate-pulse
                    ">
                            Enviando...
                        </p>

                    </div>

                ) : (

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
                            required
                        />

                        <input
                            type="number"
                            placeholder="Quantidade de acompanhantes"
                            value={acompanhantes}
                            onChange={(e) => {

                                const quantidade = Number(e.target.value)

                                setAcompanhantes(e.target.value)

                                setNomesAcompanhantes(
                                    Array(quantidade).fill('')
                                )
                            }}
                            className="border p-3 rounded-xl"
                            required
                        />

                        {
                            nomesAcompanhantes.map((nomeAcompanhante, index) => (

                                <input
                                    key={index}
                                    type="text"
                                    placeholder={`Nome do acompanhante ${index + 1}`}
                                    value={nomeAcompanhante}
                                    onChange={(e) => {

                                        const novosNomes = [...nomesAcompanhantes]

                                        novosNomes[index] = e.target.value

                                        setNomesAcompanhantes(novosNomes)
                                    }}
                                    className="border p-3 rounded-xl"
                                    required
                                />

                            ))
                        }

                        <button className="
                        bg-rose-500
                        hover:bg-rose-600
                        transition
                        text-white
                        p-3
                        rounded-xl
                    ">
                            Confirmar
                        </button>

                    </form>

                )
            }
        </>

    )
}