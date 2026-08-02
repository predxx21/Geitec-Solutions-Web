import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-emerald-700 font-bold tracking-[0.18em] uppercase text-sm mb-3">Geitec Solutions</p>
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4"><span className="text-sm font-semibold">Consultoría Ambiental</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Soluciones ambientales para tu proyecto</h1>
          <p className="text-lg text-slate-600 mb-8">Acompañamos a empresas y proyectos con auditorías ambientales, planes de manejo y diagnósticos ambientales para una gestión responsable y ordenada.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition">Solicitar Consulta <ArrowRight size={20} /></button>
            <button className="border-2 border-slate-300 hover:border-emerald-600 text-slate-900 px-8 py-3 rounded-lg font-semibold transition">Conocer más</button>
          </div>
        </div>
        <div className="relative">
          <Image src="/images/166204777_117288797099588_2009752007225196872_n.jpg" alt="Equipo de Geitec Solutions" width={500} height={400} className="rounded-2xl shadow-xl w-full h-auto object-cover" priority />
        </div>
      </div>
    </section>
  )
}
