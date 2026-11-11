import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Services from '@/components/services'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios de consultoría ambiental en Perú: instrumentos de gestión ambiental, planes y estudios ambientales, agua y saneamiento, residuos sólidos, monitoreo ambiental y seguridad y salud ocupacional.',
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Servicios | Geitec Solutions',
    description:
      'Auditorías, estudios, monitoreo y más servicios ambientales en Huaral, Perú.',
    url: 'https://geitec-solutions.pe/servicios',
  },
}

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <section className="relative h-80 overflow-hidden">
        <Image src="/images/169114850_119168476911620_5724385918861867237_n.jpg" alt="Nuestros servicios" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">Selecciona un servicio para conocer más detalles, fotos y cómo podemos ayudarte.</p>
        </div>
      </section>
      <Services />
      <Footer />
    </main>
  )
}
