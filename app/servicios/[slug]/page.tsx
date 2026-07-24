import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { getService, services } from '@/lib/services'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServicioDetallePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const whatsappMessage = encodeURIComponent(`Hola Geitec Solutions, me interesa conocer más sobre ${service.title}.`)

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <section className="relative h-[26rem] overflow-hidden">
        <Image src={service.image} alt={service.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-5 w-fit"><ArrowLeft size={18} /> Volver a servicios</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">{service.title}</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-start">
          <div>
            <p className="text-xl leading-relaxed text-slate-700 mb-8">{service.description}</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">¿Qué incluye?</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.details.map((detail) => <li key={detail} className="flex gap-3 text-slate-700"><CheckCircle2 className="text-emerald-600 shrink-0" size={22} />{detail}</li>)}
            </ul>
          </div>
          <aside className="bg-emerald-700 text-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-3">Solicita información</h2>
            <p className="text-emerald-50 mb-6">Cuéntanos lo que necesitas y te responderemos por WhatsApp.</p>
            <a href={`https://wa.me/51930996442?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-5 py-3 rounded-lg hover:bg-emerald-50 transition"><MessageCircle size={20} /> Escribir por WhatsApp</a>
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Nuestro trabajo</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {service.gallery.map((image, index) => <div key={image} className="relative h-64 rounded-xl overflow-hidden shadow-sm"><Image src={image} alt={`${service.title} - foto ${index + 1}`} fill className="object-cover" /></div>)}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
