'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/components/contact'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/contacto-hero.png"
          alt="Contacto"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center mb-4">Contáctanos</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl">Estamos aquí para responder tus preguntas</p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Teléfono</h3>
            <p className="text-gray-700 mb-4">Llamadas y mensajes</p>
            <a href="tel:+51930996442" className="text-emerald-600 font-bold hover:text-emerald-700">
              +51 930 996 442
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
            <p className="text-gray-700 mb-4">Escritos y consultas</p>
            <a href="mailto:info@geitec-solutions.com" className="text-emerald-600 font-bold hover:text-emerald-700">
              info@geitec-solutions.com
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ubicación</h3>
            <p className="text-gray-700 mb-4">Huaral, Perú</p>
            <p className="text-emerald-600 font-bold">
              Lima - Perú
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-lg p-8 mb-16">
          <div className="flex items-start gap-4">
            <Clock size={24} className="text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Horario de Atención</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-2"><strong>Lunes a Viernes:</strong></p>
                  <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2"><strong>Sábado:</strong></p>
                  <p className="text-gray-600">9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Envíanos tu Mensaje</h2>
          <Contact />
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-emerald-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">¿Prefieres contactar por WhatsApp?</h2>
          <p className="text-white/90 mb-6">Conecta directamente con nuestro equipo</p>
          <a
            href="https://wa.me/51930996442?text=Hola%20Geitec%20Solutions,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Abrir WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
