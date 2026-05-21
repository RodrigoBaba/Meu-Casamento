import Link from 'next/link'
import GalleryCarousel from '@/components/GalleryCarousel'
import styles from './home.module.css'

export default function Home() {

  const weddingDate = new Date('2027-08-21T16:00:00')
  const today = new Date()

  const diff = weddingDate.getTime() - today.getTime()

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  return (
    <main className="min-h-screen  text-zinc-800">

      {/* MONOGRAMA */}
      <section className="flex justify-center pt-5">

        <img
          src="../images/Monograma.png"
          alt="Monograma"
          width={150}
          height={150}
          className="rounded-full object-cover border border-rose-500"
        />

      </section>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-14">

        {/* CONTAGEM */}
        <div className={styles.countdownCard}>
          <div className={styles.countdownContent}>

            <h2 className={styles.countdownNumber}>
              {days}
            </h2>

            <p className={styles.countdownText}>
              dias para o grande dia
            </p>

          </div>
        </div>

        <p className="uppercase tracking-[0.3em] text-sm text-rose-500 mb-4">
          Nosso Casamento
        </p>

        <div>
          <h1 className="text-5xl md:text-7xl font-bold">
            Rodrigo
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold">
            &
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Isabella
          </h1>
        </div>

        <p className="max-w-xl text-lg text-zinc-600 mb-10">
          Estamos muito felizes em compartilhar esse momento especial com você.
        </p>



        {/* BOTÕES */}
        <div className="flex gap-4 flex-wrap justify-center">

          <Link
            href="/rsvp"
            className="bg-rose-500 hover:bg-rose-600 transition text-white px-6 py-3 rounded-full"
          >
            Confirmar Presença
          </Link>

          <Link
            href="/gifts"
            className="border border-rose-500 text-rose-500 hover:bg-rose-100 transition px-6 py-3 rounded-full"
          >
            Lista de Presentes
          </Link>

        </div>
      </section>

      {/* GALERIA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          Nossa História
        </h2>

        <GalleryCarousel />

      </section>

      {/* CRONOGRAMA */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Cronograma
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border-l-4 border-rose-500 pl-6">
              <p className="text-sm text-zinc-500">
                16:00
              </p>

              <h3 className="text-2xl font-semibold">
                Cerimônia
              </h3>

              <p className="text-zinc-600">
                Igreja Exemplo
              </p>
            </div>

            <div className="border-l-4 border-rose-500 pl-6">
              <p className="text-sm text-zinc-500">
                18:00
              </p>

              <h3 className="text-2xl font-semibold">
                Recepção
              </h3>

              <p className="text-zinc-600">
                Espaço de Eventos Exemplo
              </p>
            </div>

            <div className="border-l-4 border-rose-500 pl-6">
              <p className="text-sm text-zinc-500">
                23:00
              </p>

              <h3 className="text-2xl font-semibold">
                Encerramento
              </h3>

              <p className="text-zinc-600">
                Última música 😄
              </p>
            </div>

            <div className="border-l-4 border-rose-500 pl-6">
              <p className="text-sm text-zinc-500">
                16:00
              </p>

              <h3 className="text-2xl font-semibold">
                Cerimônia
              </h3>

              <p className="text-zinc-600">
                Igreja Exemplo
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* LOCAL */}
      <section className="py-10 px-6 bg-rose-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-4">
            Local do Evento
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* INFORMAÇÕES */}
            <div className='text-center'>

              <h4 className="text-2xl font-semibold mb-6">
                Espaço Delícia Buffet
              </h4>

              <p className="text-zinc-600 mb-4">
                Alameda dos Jequitibás, 750 - Mairiporã, SP, 07600-000
              </p>

              <a
                href="https://www.google.com/maps/place/Espa%C3%A7o+Del%C3%ADcia+Buffet/@-23.3807198,-46.6231293,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef6f5f1e765ed:0x23f6f5d75afb353a!8m2!3d-23.3807198!4d-46.6231293!16s%2Fg%2F11b69y_lyz?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="inline-block bg-rose-500 hover:bg-rose-600 transition text-white px-6 py-3 rounded-full"
              >
                Como chegar
              </a>

            </div>

            {/* MAPA */}
            <div className="rounded-3xl overflow-hidden shadow-xl h-[400px]">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.2072168953255!2d-46.623129299999995!3d-23.380719799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef6f5f1e765ed%3A0x23f6f5d75afb353a!2sEspa%C3%A7o%20Del%C3%ADcia%20Buffet!5e0!3m2!1spt-BR!2sbr!4v1778891529574!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-5 text-center text-zinc-500 text-sm">
        Rodrigo & Isabella • 2027
      </footer>

    </main>
  )
}