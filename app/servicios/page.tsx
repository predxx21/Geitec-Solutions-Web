'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Services from '@/components/services'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function ServiciosPage() {
  const serviciosDetallados = [
    {
      id: 1,
      title: 'Consultoría Ambiental',
      description: 'Evaluación integral de impacto ambiental, gestión de residuos y cumplimiento normativo.',
      details: [
        'Diagnósticos ambientales',
        'Planes de manejo ambiental',
        'Asesoría ISO 14001',
        'Auditorías ambientales'
      ]
    },
    {
      id: 2,
      title: 'Capacitación en Seguridad Ocupacional',
      description: 'Programas de entrenamiento personalizados para prevención de accidentes laborales.',
      details: [
        'Seguridad en alturas',
        'Espacio confinado',
        'Manejo de materiales peligrosos',
        'Primeros auxilios'
      ]
    },
    {
      id: 3,
      title: 'Tratamiento de Grasas',
      description: 'Soluciones ecológicas para tratamiento y disposición de grasas industriales.',
      details: [
        'Instalación de trampas de grasa',
        'Mantenimiento preventivo',
        'Disposición final',
        'Asesoramiento técnico'
      ]
    },
    {
      id: 4,
      title: 'Asesoría Ocupacional',
      description: 'Asesoramiento en salud y seguridad ocupacional según estándares internacionales.',
      details: [
        'Evaluaciones ergonómicas',
        'Estudios de riesgos',
        'Planes de prevención',
        'Asesoramiento ISO 45001'
      ]
    },
    {
      id: 5,
      title: 'Auditorías Internas',
      description: 'Auditorías de cumplimiento normativo y sistemas de gestión.',
      details: [
        'Auditorías de sistemas',
        'Inspecciones de seguridad',
        'Verificación de cumplimiento',
        'Generación de reportes'
      ]
    },
    {
      id: 6,
      title: 'Respuesta a Emergencias',
      description: 'Preparación y respuesta ante situaciones de emergencia en empresa.',
      details: [
        'Planes de contingencia',
        'Simulacros',
        'Entrenamiento de brigadas',
        'Equipos de respuesta'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/servicios-hero.png"
          alt="Nuestros Servicios"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl">Soluciones completas en seguridad ocupacional y gestión ambiental</p>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {serviciosDetallados.map((servicio) => (
            <div key={servicio.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{servicio.title}</h3>
                  <p className="text-gray-600">{servicio.description}</p>
                </div>
              </div>
              
              <div className="pl-16 space-y-2">
                {servicio.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas nuestros servicios?</h2>
          <p className="text-white/90 mb-8 text-lg">Contáctanos hoy y obtén una consulta personalizada</p>
          <a
            href="https://wa.me/51930996442?text=Hola%20Geitec%20Solutions,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
