'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Hola, me gustaría solicitar información sobre los servicios de Geitec Solutions.\n\nNombre: ${formData.name}\nEmpresa: ${formData.company}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\n\nMensaje: ${formData.message}`
    const whatsappUrl = `https://wa.me/51930996442?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Contáctanos</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-50 rounded-lg p-8 text-center">
            <Phone className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Teléfono</h3>
            <a href="tel:+51930996442" className="text-emerald-600 hover:text-emerald-700">
              +51 930 996 442
            </a>
          </div>
          <div className="bg-slate-50 rounded-lg p-8 text-center">
            <Mail className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Email</h3>
            <a href="mailto:geitec.sac@gmail.com" className="text-emerald-600 hover:text-emerald-700">
              geitec.sac@gmail.com
            </a>
          </div>
          <div className="bg-slate-50 rounded-lg p-8 text-center">
            <MapPin className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Ubicación</h3>
            <p className="text-slate-600">
              Huaral, Perú
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-50 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 text-slate-900 placeholder-slate-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 text-slate-900 placeholder-slate-500"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Tu teléfono"
                value={formData.phone}
                onChange={handleChange}
                className="px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 text-slate-900 placeholder-slate-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Tu empresa"
                value={formData.company}
                onChange={handleChange}
                className="px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 text-slate-900 placeholder-slate-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Cuéntanos sobre tu consulta..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 text-slate-900 placeholder-slate-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition"
            >
              Enviar Consulta por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
