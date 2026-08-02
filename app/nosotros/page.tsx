import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Award, Heart, Leaf, Target } from 'lucide-react'

const values = [
  { icon: Target, title: 'Rigor técnico', description: 'Análisis claros para tomar decisiones ambientales informadas.' },
  { icon: Leaf, title: 'Responsabilidad ambiental', description: 'Soluciones enfocadas en la prevención y el cuidado del entorno.' },
  { icon: Heart, title: 'Compromiso', description: 'Acompañamiento cercano durante cada etapa del servicio.' },
  { icon: Award, title: 'Experiencia', description: 'Más de 15 años trabajando con empresas y proyectos en Perú.' },
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
          <p className="text-xl text-white/90 text-center max-w-2xl">15 años de experiencia en consultoría ambiental</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Nuestra historia</h2>
            <p className="text-gray-700 text-lg mb-4">Geitec Solutions nace en 2009 para proporcionar soluciones integrales de consultoría ambiental a empresas y proyectos en Perú.</p>
            <p className="text-gray-700 text-lg mb-4">Hemos acompañado a más de 200 empresas, ayudándolas a organizar su gestión ambiental y atender sus compromisos de manera responsable.</p>
            <p className="text-gray-700 text-lg">Nuestro trabajo se basa en el análisis técnico, el cumplimiento y soluciones ajustadas a cada necesidad.</p>
          </div>
          <div className="bg-emerald-700 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Por qué elegirnos</h3>
            <ul className="space-y-4 text-emerald-50">
              <li className="flex gap-3"><span className="font-bold">✓</span> Más de 15 años de experiencia comprobada</li>
              <li className="flex gap-3"><span className="font-bold">✓</span> Auditorías y diagnósticos ambientales</li>
              <li className="flex gap-3"><span className="font-bold">✓</span> Planes de manejo ambiental a medida</li>
              <li className="flex gap-3"><span className="font-bold">✓</span> Acompañamiento técnico personalizado</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-emerald-700 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <article className="rounded-2xl bg-white/10 border border-white/20 p-8 text-white">
            <p className="text-sm font-bold tracking-[0.16em] uppercase text-emerald-100 mb-3">Misión</p>
            <h2 className="text-3xl font-bold mb-4">Cuidar el ambiente con soluciones sostenibles</h2>
            <p className="text-emerald-50 leading-relaxed">Contribuimos al cuidado del medio ambiente para que las actividades productivas y la naturaleza mantengan un equilibrio que beneficie a las futuras generaciones.</p>
          </article>
          <article className="rounded-2xl bg-white/10 border border-white/20 p-8 text-white">
            <p className="text-sm font-bold tracking-[0.16em] uppercase text-emerald-100 mb-3">Visión</p>
            <h2 className="text-3xl font-bold mb-4">Ser un referente ambiental</h2>
            <p className="text-emerald-50 leading-relaxed">Buscamos ser una empresa ambiental líder, reconocida por la calidad de sus servicios, la confianza de sus clientes y su aporte positivo a la sociedad.</p>
          </article>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Nuestros valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return <div key={value.title} className="text-center"><div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"><Icon size={32} className="text-emerald-600" /></div><h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3><p className="text-gray-600">{value.description}</p></div>
            })}
          </div>
        </div>
      </section>

      <section className="bg-emerald-700 py-14">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 gap-8 text-center text-white">
          <div><div className="text-5xl font-bold mb-2">15+</div><p className="text-white/90">Años de experiencia</p></div>
          <div><div className="text-5xl font-bold mb-2">200+</div><p className="text-white/90">Empresas atendidas</p></div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-bold tracking-[0.16em] uppercase text-emerald-700 mb-3">Nuestro staff</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Profesionales que nos respaldan</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <article className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
              <p className="text-sm font-bold tracking-[0.16em] uppercase text-emerald-700 mb-3">Gerente General</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ing. Elvis Ever Huerta Núñez</h3>
              <p className="text-lg text-emerald-700 font-semibold">Especialista Ambiental</p>
              <p className="text-slate-600 mt-2">CIP: 261462</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold tracking-[0.16em] uppercase text-emerald-700 mb-3">Profesional del staff</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Tito Hayron Gonzales Ortega</h3>
              <p className="text-lg text-emerald-700 font-semibold">Ingeniero Ambiental · CIP N.º 392375</p>
              <p className="text-slate-600 mt-4 leading-relaxed">Auditor Interno en Sistemas Integrados de Gestión ISO 9001, ISO 14001 e ISO 45001, con cerca de 7 años de experiencia en proyectos de construcción, industria, electricidad, logística y retail.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">Experiencia multisectorial</span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">Auditoría SIG</span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">PHVA y SGSST</span>
              </div>
              <p className="text-slate-600 mt-5 leading-relaxed">Cuenta con experiencia en implementación de IPERC, PETS y programas de SST; gestión de contratistas, auditorías internas, investigación de accidentes y supervisión de operaciones críticas.</p>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
