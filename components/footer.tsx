import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Geitec Solutions</h3>
            <p className="text-sm">
              Consultoría especializada en seguridad ocupacional y gestión ambiental en Perú.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-emerald-400">Servicios</a></li>
              <li><a href="#about" className="hover:text-emerald-400">Nosotros</a></li>
              <li><a href="#contact" className="hover:text-emerald-400">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <div className="space-y-2 text-sm">
              <a href="tel:+51930996442" className="flex items-center gap-2 hover:text-emerald-400">
                <Phone size={16} />
                +51 930 996 442
              </a>
              <a href="mailto:geitec.sac@gmail.com" className="flex items-center gap-2 hover:text-emerald-400">
                <Mail size={16} />
                geitec.sac@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2024 Geitec Solutions. Todos los derechos reservados.
            </p>
            <a 
              href="https://www.facebook.com/profile.php?id=100078695204065"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition text-sm"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
