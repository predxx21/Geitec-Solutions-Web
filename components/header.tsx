'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

          <div className="hidden lg:flex flex-col items-end gap-1 text-sm">
            <a href="https://wa.me/51930996442" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-100 transition" aria-label="Escribir al WhatsApp +51 930 996 442">
              <span className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center"><Phone size={12} fill="currentColor" className="text-white" /></span><span>+51 930 996 442</span>
            </a>
            <a href="https://wa.me/51980970529" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-100 transition" aria-label="Escribir al WhatsApp +51 980 970 529">
              <span className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center"><Phone size={12} fill="currentColor" className="text-white" /></span><span>+51 980 970 529</span>
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Abrir menú">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-white/20 pt-4">
            <Link href="/" className="hover:text-emerald-100 transition py-2">Inicio</Link>
            <Link href="/servicios" className="hover:text-emerald-100 transition py-2">Servicios</Link>
            <Link href="/nosotros" className="hover:text-emerald-100 transition py-2">Nosotros</Link>
            <Link href="/contacto" className="hover:text-emerald-100 transition py-2">Contacto</Link>
            <a href="https://wa.me/51930996442" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-100 transition py-2"><span className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center"><Phone size={12} fill="currentColor" className="text-white" /></span><span>WhatsApp: +51 930 996 442</span></a>
            <a href="https://wa.me/51980970529" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-100 transition py-2"><span className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center"><Phone size={12} fill="currentColor" className="text-white" /></span><span>WhatsApp: +51 980 970 529</span></a>
          </nav>
        )}
      </div>
    </header>
  )
}
