import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Award, Heart, Leaf, Target } from 'lucide-react'

const values = [
  { icon: Target, title: 'Rigor técnico', description: 'Análisis claros para tomar decisiones ambientales informadas.' },
  { icon: Leaf, title: 'Responsabilidad ambiental', description: 'Soluciones enfocadas en la prevención y el cuidado del entorno.' },
  { icon: Heart, title: 'Compromiso', description: 'Acompañamiento cercano durante cada etapa del servicio.' },
  { icon: Award, title: 'Experiencia', description: 'Profesionales calificados para empresas y proyectos en Perú.' },
]

const companyDetails = [
  ['RUC', '20607439681'],
  ['Razón social', 'GEITEC SOLUTIONS S.A.C.'],
  ['Nombre comercial', 'Gestión y Tecnología Ambiental'],
  ['Tipo de empresa', 'Sociedad Anónima Cerrada'],
  ['Condición', 'Activo'],
  ['Inicio de actividades', '05 de marzo de 2021'],
  ['Actividad comercial', 'Investigación de ciencias naturales'],
]

const staff = [
  {
    role: 'Gerente General',
    name: 'Ing. Elvis Ever Huerta Núñez',
    title: 'Especialista Ambiental',
    credential: 'CIP: 261462',
    description: null,
    image: '/staff/elvis-huerta.png',
    featured: true,
  },
  {
    role: 'Profesional del staff',
    name: 'Fernando Allende León Esparza',
    title: 'Especialista en Compostaje y Valorización de Residuos Orgánicos',
    credential: null,
    description:
      'Especialista con más de 17 años de experiencia en el manejo, tratamiento y valorización de residuos orgánicos mediante compostaje, producción de bioinsumos (bioles y biocompost) y optimización de suelos.',
    image: '/staff/fernando-leon.png',
    featured: false,
  },
  {
    role: 'Profesional del staff',
    name: 'Tito Hayron Gonzales Ortega',
    title: 'Especialista SST',
    credential: 'CIP N.º 392375',
    description:
      'Auditor Interno en Sistemas Integrados de Gestión ISO 9001, ISO 14001 e ISO 45001, con cerca de 7 años de experiencia en proyectos de construcción, industria, electricidad, logística y retail.',
    image: '/staff/tito-gonzales.png',
    featured: false,
  },
  {
    role: 'Profesional del staff',
    name: 'Biól. Carla Johanna Cepeda Agurto',
    title: 'Especialista en Gestión Ambiental',
    credential: 'CBP: 13200',
    description:
      'Bióloga con más de 12 años de experiencia en gestión ambiental, evaluación de contaminantes y cumplimiento normativo. Especialista en elaboración y evaluación de instrumentos de gestión ambiental (DIA, IGAC), monitoreo ambiental e inocuidad alimentaria. Cuenta con trayectoria en sector agroindustrial y atención ante entidades como OEFA, ANA y SEDAPAL.',
    image: '/staff/carla-cepeda.jpg',
    featured: false,
  },
  {
    role: 'Profesional del staff',
    name: 'Ing. Yennifeer Yuliana Arévalo Villafuerte',
    title: 'Especialista de Proyectos',
    credential: 'CIP: 238411',
    description:
      'Ingeniera ambiental colegiada, con maestría en Ecología y Gestión Ambiental y doctorado en Ciencias Ambientales concluido. Docente universitaria e investigadora con experiencia en monitoreo ambiental de múltiples matrices (agua, suelo, aire, ruido), evaluación de impacto ambiental, elaboración de instrumentos de gestión ambiental y capacitación en gestión ambiental, calidad y seguridad ocupacional.',
    image: '/staff/yennifeer-arevalo.png',
    featured: false,
  },
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <section className="relative h-96 overflow-hidden">
        <Image src="/images/166398694_117288763766258_4893358634710453469_n.jpg" alt="Consultoría ambiental" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Quiénes Somos</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl">Gestión y Tecnología Ambiental</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] uppercase text-emerald-700 mb-3">Información de la empresa</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Datos generales</h2>
            <dl className="divide-y divide-slate-200 border-y border-slate-200">
              {companyDetails.map(([label, value]) => <div key={label} className="py-4 grid grid-cols-[minmax(9rem,.75fr)_1.25fr] gap-4"><dt className="font-semibold text-slate-900">{label}</dt><dd className="text-slate-600">{value}</dd></div>)}
            </dl>
          </div>
          <div className="bg-emerald-700 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Por qué elegirnos</h3>
            <ul className="space-y-4 text-emerald-50">
              <li className="flex gap-3"><span className="font-bold">✓</span> Instrumentos de gestión ambiental</li>
              <li className="flex gap-3"><span className="font-bold">✓</span> Planes y estudios ambientales</li>
              <li className="flex gap-3"><span className="font-bold">✓</span> Monitoreo, agua y saneamiento</li>
              <li className="flex gap-3"><span className="font-bold">✓</span> Acompañamiento técnico personalizado</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-emerald-700 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <article className="rounded-2xl bg-white/10 border border-white/20 p-8 text-white"><p className="text-sm font-bold tracking-[0.16em] uppercase text-emerald-100 mb-3">Misión</p><h2 className="text-3xl font-bold mb-4">Cuidar el ambiente con soluciones sostenibles</h2><p className="text-emerald-50 leading-relaxed">Contribuimos al cuidado del medio ambiente para que las actividades productivas y la naturaleza mantengan un equilibrio que beneficie a las futuras generaciones.</p></article>
          <article className="rounded-2xl bg-white/10 border border-white/20 p-8 text-white"><p className="text-sm font-bold tracking-[0.16em] uppercase text-emerald-100 mb-3">Visión</p><h2 className="text-3xl font-bold mb-4">Ser un referente ambiental</h2><p className="text-emerald-50 leading-relaxed">Buscamos ser una empresa ambiental líder, reconocida por la calidad de sus servicios, la confianza de sus clientes y su aporte positivo a la sociedad.</p></article>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-gray-100"><div className="max-w-6xl mx-auto px-4"><h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Nuestros valores</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{values.map((value) => { const Icon = value.icon; return <div key={value.title} className="text-center"><div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"><Icon size={32} className="text-emerald-600" /></div><h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3><p className="text-gray-600">{value.description}</p></div> })}</div></div></section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-bold tracking-[0.16em] uppercase text-emerald-700 mb-3">Nuestro staff</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Profesionales que nos respaldan</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {staff.map((member) => (
              <article
                key={member.name}
                className={`rounded-2xl border p-6 md:p-8 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start ${
                  member.featured
                    ? 'border-emerald-100 bg-gradient-to-br from-emerald-50 to-white'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {member.image ? (
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-full overflow-hidden border-2 border-emerald-500 shadow-md bg-slate-50 p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain object-top"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-3xl border-2 border-emerald-500 shadow-md">
                    {member.name.replace(/^Ing\.\s*|^Biól\.\s*/i, '').split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                )}
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-sm font-bold tracking-[0.16em] uppercase text-emerald-700 mb-2">{member.role}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-lg text-emerald-700 font-semibold">{member.title}</p>
                  {member.credential && <p className="text-slate-600 mt-1 text-sm">{member.credential}</p>}
                  {member.description && (
                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">{member.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
