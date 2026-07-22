import { Award, Target, Users, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Award, label: 'Años de Experiencia', value: '15+' },
  { icon: Users, label: 'Empresas Asesoradas', value: '200+' },
  { icon: Target, label: 'Profesionales Certificados', value: '50+' },
  { icon: TrendingUp, label: 'Tasa de Satisfacción', value: '98%' }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Sobre Geitec Solutions</h2>
            <p className="text-lg text-slate-600 mb-4">
              Desde nuestra fundación, nos hemos dedicado a ayudar empresas peruanas a mejorar sus estándares de seguridad ocupacional y gestión ambiental.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Nuestro equipo de expertos cuenta con certificaciones internacionales y amplia experiencia en diversos sectores industriales, desde manufactura hasta servicios.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                Consultores con certificación ISO
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                Soluciones personalizadas para cada empresa
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                Acompañamiento integral en implementación
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <Icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
