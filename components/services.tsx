import Link from 'next/link'
import { Leaf, AlertTriangle, Droplets, Users, CheckCircle, Zap, ArrowRight } from 'lucide-react'
import { services } from '@/lib/services'

const icons = [Leaf, AlertTriangle, Droplets, Users, CheckCircle, Zap]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Soluciones integrales en seguridad ocupacional y consultoría ambiental</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <Link key={service.slug} href={`/servicios/${service.slug}`} className="group bg-slate-50 rounded-xl p-8 hover:shadow-lg transition border border-transparent hover:border-emerald-200">
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4"><Icon className="text-emerald-600" size={28} /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.shortDescription}</p>
                <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">Ver más <ArrowRight size={16} /></span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
