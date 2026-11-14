'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const whatsappNumbers = [
  { label: '+51 930 996 442', href: 'https://wa.me/51930996442' },
  { label: '+51 980 970 529', href: 'https://wa.me/51980970529' },
  { label: '+51 948 077 982', href: 'https://wa.me/51948077982' },
]

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100078695204065'

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [whatsappOpen, setWhatsappOpen] = useState(false)
  const [mobileWhatsappOpen, setMobileWhatsappOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  const navClass = (href: string) => `transition ${isActive(href) ? 'text-emerald-100 border-b-2 border-emerald-200' : 'hover:text-emerald-100'}`

  return (
    <header className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 text-white sticky top-0 z-50 shadow-lg shadow-emerald-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-85 transition" aria-label="Ir al inicio">
            <div className="w-52 h-24 sm:w-60 flex items-center justify-center overflow-hidden">
              <Image src="/logo-transparent.png" alt="Logo de Geitec Solutions" width={240} height={100} className="object-contain" />
            </div>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="/" className={navClass('/')}>Inicio</Link>
            <Link href="/servicios" className={navClass('/servicios')}>Servicios</Link>
            <Link href="/nosotros" className={navClass('/nosotros')}>Nosotros</Link>
            <Link href="/contacto" className={navClass('/contacto')}>Contacto</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {whatsappOpen && (
              <button
                type="button"
                className="fixed inset-0 cursor-default"
                aria-label="Cerrar menú de WhatsApp"
                onClick={() => setWhatsappOpen(false)}
              />
            )}

            <div className="relative">
              <button
                type="button"
                onClick={() => setWhatsappOpen(!whatsappOpen)}
                aria-label="Escribir por WhatsApp"
                aria-expanded={whatsappOpen}
                title="WhatsApp"
                className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1ebe57] flex items-center justify-center shadow-md hover:scale-105 transition"
              >
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </button>

              {whatsappOpen && (
                <div className="absolute right-0 top-full mt-3 w-60 bg-white text-slate-800 rounded-2xl shadow-2xl overflow-hidden z-[60]">
                  <p className="px-4 pt-4 pb-1 text-xs font-bold uppercase tracking-wider text-slate-400">Elige un número</p>
                  <ul>
                    {whatsappNumbers.map((number) => (
                      <li key={number.href}>
                        <a
                          href={number.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setWhatsappOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition"
                        >
                          <span className="w-7 h-7 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                          </span>
                          <span className="text-sm font-semibold">{number.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="px-4 py-3 text-[11px] text-slate-400 border-t border-slate-100">Te responderemos lo antes posible</p>
                </div>
              )}
            </div>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar nuestra página de Facebook de Geitec Solutions"
              title="Facebook"
              className="h-12 pl-3 pr-4 rounded-full bg-[#1877F2] hover:bg-[#166fe0] flex items-center gap-2 shadow-md hover:scale-105 transition"
            >
              <FacebookIcon className="w-6 h-6 text-white" />
              <span className="text-sm font-semibold text-white whitespace-nowrap">Geitec - Solutions</span>
            </a>
          </div>

          <button className="md:hidden" onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setMobileWhatsappOpen(false) }} aria-label="Abrir menú">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-white/20 pt-4">
            <Link href="/" className="hover:text-emerald-100 transition py-2">Inicio</Link>
            <Link href="/servicios" className="hover:text-emerald-100 transition py-2">Servicios</Link>
            <Link href="/nosotros" className="hover:text-emerald-100 transition py-2">Nosotros</Link>
            <Link href="/contacto" className="hover:text-emerald-100 transition py-2">Contacto</Link>
            <button
              type="button"
              onClick={() => setMobileWhatsappOpen(!mobileWhatsappOpen)}
              aria-expanded={mobileWhatsappOpen}
              className="flex items-center gap-2 hover:text-emerald-100 transition py-2 text-left"
            >
              <span className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center shrink-0"><WhatsAppIcon className="w-4 h-4 text-white" /></span>
              <span>WhatsApp</span>
            </button>
            {mobileWhatsappOpen && (
              <div className="flex flex-col gap-1 border-l-2 border-emerald-400/50 ml-3 pl-3">
                {whatsappNumbers.map((number) => (
                  <a key={number.href} href={number.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-100 transition py-1.5 text-sm">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>{number.label}</span>
                  </a>
                ))}
              </div>
            )}
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Visitar nuestra página de Facebook de Geitec Solutions" className="flex items-center gap-2 hover:text-emerald-100 transition py-2">
              <span className="w-7 h-7 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0"><FacebookIcon className="w-4 h-4 text-white" /></span>
              <span>Geitec - Solutions</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
