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

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <Image 
                src="/imagenes_emp/logo.png" 
                alt="Geitec Solutions Logo" 
                width={40} 
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg">Geitec Solutions</h1>
              <p className="text-emerald-400 text-xs">Consultoría & Capacitación</p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link 
              href="/" 
              className={`transition ${
                isActive('/') 
                  ? 'text-emerald-400 border-b-2 border-emerald-400' 
                  : 'hover:text-emerald-400'
              }`}
            >
              Inicio
            </Link>
            <Link 
              href="/servicios"
              className={`transition ${
                isActive('/servicios') 
                  ? 'text-emerald-400 border-b-2 border-emerald-400' 
                  : 'hover:text-emerald-400'
              }`}
            >
              Servicios
            </Link>
            <Link 
              href="/nosotros"
              className={`transition ${
                isActive('/nosotros') 
                  ? 'text-emerald-400 border-b-2 border-emerald-400' 
                  : 'hover:text-emerald-400'
              }`}
            >
              Nosotros
            </Link>
            <Link 
              href="/contacto"
              className={`transition ${
                isActive('/contacto') 
                  ? 'text-emerald-400 border-b-2 border-emerald-400' 
                  : 'hover:text-emerald-400'
              }`}
            >
              Contacto
            </Link>
          </nav>

          <div className="hidden lg:flex gap-4 text-sm">
            <a href="tel:+51930996442" className="flex items-center gap-1 hover:text-emerald-400 transition">
              <Phone size={16} />
              <span>+51 930 996 442</span>
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-slate-700 pt-4">
            <Link href="/" className="hover:text-emerald-400 transition py-2">Inicio</Link>
            <Link href="/servicios" className="hover:text-emerald-400 transition py-2">Servicios</Link>
            <Link href="/nosotros" className="hover:text-emerald-400 transition py-2">Nosotros</Link>
            <Link href="/contacto" className="hover:text-emerald-400 transition py-2">Contacto</Link>
            <a href="tel:+51930996442" className="flex items-center gap-1 hover:text-emerald-400 transition py-2">
              <Phone size={16} />
              <span>+51 930 996 442</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
