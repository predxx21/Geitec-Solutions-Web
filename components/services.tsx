import { Leaf, AlertTriangle, Droplets, Users, CheckCircle, Zap } from 'lucide-react'

const services = [
  {
    icon: Leaf,
    title: 'Consultoría Ambiental',
    description: 'Diagnósticos y gestión ambiental empresarial, auditorías ambientales y planes de mitigación.'
  },
  {
    icon: AlertTriangle,
    title: 'Capacitación en Seguridad',
    description: 'Programas de entrenamiento en seguridad ocupacional adaptados a tu industria.'
  },
  {
    icon: Droplets,
    title: 'Tratamiento de Grasas',
    description: 'Mantenimiento y saneamiento industrial de sistemas de tratamiento de aguas residuales.'
  },
  {
    icon: Users,
    title: 'Asesoría Ocupacional',
    description: 'Implementación de políticas y procedimientos de seguridad y salud en el trabajo.'
  },
  {
    icon: CheckCircle,
    title: 'Auditorías Internas',
    description: 'Evaluación integral de cumplimiento normativo y estándares internacionales.'
  },
  {
    icon: Zap,
    title: 'Respuesta a Emergencias',
    description: 'Planes de contingencia y capacitación para situaciones de emergencia.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluciones integrales en seguridad ocupacional y consultoría ambiental
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition">
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
