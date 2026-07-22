'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Award, Users, Target, Heart } from 'lucide-react'

export default function NosotrosPage() {
  const valores = [
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Comprometidos con la calidad en cada proyecto que realizamos'
    },
    {
      icon: Users,
      title: 'Profesionalismo',
      description: 'Equipo certificado y con amplia experiencia en el sector'
    },
    {
      icon: Heart,
      title: 'Responsabilidad',
      description: 'Cuidado del ambiente y bienestar de nuestros clientes'
    },
    {
      icon: Award,
      title: 'Innovación',
      description: 'Utilizamos las mejores prácticas y tecnología disponible'
    }
  ]

  const team = [
    {
      nombre: 'Ing. Carlos Mendoza',
      puesto: 'Director General',
      especialidad: 'Seguridad Ocupacional'
    },
    {
      nombre: 'Dra. María García',
      puesto: 'Gerente Ambiental',
      especialidad: 'Gestión Ambiental'
    },
    {
      nombre: 'Ing. Roberto Flores',
      puesto: 'Especialista en SSO',
      especialidad: 'Salud y Seguridad'
    },
    {
      nombre: 'Lic. Patricia Torres',
      puesto: 'Coordinadora de Proyectos',
      especialidad: 'Coordinación General'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/images/166398694_117288763766258_4893358634710453469_n.jpg"
          alt="Sobre Nosotros"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center mb-4">Quiénes Somos</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl">15 años de experiencia en consultoría ambiental y seguridad ocupacional</p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Nuestra Historia</h2>
            <p className="text-gray-700 text-lg mb-4">
              Geitec Solutions nace en 2009 con la misión de proporcionar soluciones integrales en consultoría ambiental y seguridad ocupacional a empresas en Perú.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Con más de 15 años de experiencia, hemos trabajado con más de 200 empresas, desde pequeños negocios hasta grandes corporaciones, ayudándolas a cumplir con normativas ambientales y de seguridad.
            </p>
            <p className="text-gray-700 text-lg">
              Nuestro equipo está conformado por profesionales certificados internacionalmente, comprometidos con la excelencia y la innovación en cada proyecto.
            </p>
          </div>
          <div className="bg-emerald-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Por qué elegirnos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <span>Más de 15 años de experiencia comprobada</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <span>Equipo de profesionales certificados</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <span>Asesoramiento personalizado</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <span>Tecnología y metodología actual</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <span>Compromiso con la sostenibilidad</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {valores.map((valor, idx) => {
              const Icon = valor.icon
              return (
                <div key={idx} className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{valor.title}</h3>
                  <p className="text-gray-600">{valor.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-white/90">Años de experiencia</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="text-white/90">Empresas atendidas</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-white/90">Profesionales</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-white/90">Satisfacción cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 bg-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {member.nombre.charAt(0)}
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">{member.nombre}</h3>
              <p className="text-emerald-600 font-semibold text-sm mb-2">{member.puesto}</p>
              <p className="text-gray-600 text-sm">{member.especialidad}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
