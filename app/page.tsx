'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import Carousel from '@/components/carousel'
import About from '@/components/about'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8 text-balance">
          Conoce nuestro trabajo
        </h2>
        <Carousel />
      </div>
      <About />
      <Footer />
    </main>
  )
}
