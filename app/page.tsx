'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Carousel from '@/components/carousel'
import Services from '@/components/services'
import About from '@/components/about'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8 text-balance">
          Conoce Nuestro Equipo y Trabajo
        </h2>
        <Carousel />
      </div>
      <Services />
      <div className="text-center py-8">
        <Link href="/servicios" className="inline-block bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-700 transition">
          Ver Todos los Servicios
        </Link>
      </div>
      <About />
      <Footer />
    </main>
  )
}
