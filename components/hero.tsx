import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Expertos en Seguridad Ocupacional</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Protegemos tu ambiente de trabajo
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Somos líderes en consultoría ambiental y capacitación en seguridad ocupacional. Nuestros especialistas ayudan a empresas en Perú a cumplir normativas y crear espacios de trabajo seguros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition">
              Solicitar Consulta
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-slate-300 hover:border-emerald-600 text-slate-900 px-8 py-3 rounded-lg font-semibold transition">
              Conocer más
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/hero-main.png"
            alt="Equipo de Geitec Solutions - Consultoría en Seguridad Ocupacional"
            width={500}
            height={400}
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
