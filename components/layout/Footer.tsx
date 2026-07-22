import Link from 'next/link'
import { Anchor, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  const ports = [
    'Vannes', 'Arradon', 'Le Crouesty',
    'Port-Blanc', 'Larmor-Baden', 'Port-Navalo',
  ]

  return (
    <footer className="border-t border-white/[0.04] bg-[#070e1a] pt-16 pb-8 text-slate-400">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Anchor className="h-5 w-5 text-sky-400" strokeWidth={2.5} />
              <span className="font-heading text-base font-semibold text-white tracking-wide">
                morbihan<span className="font-light text-sky-400">nautic</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Vivez une expérience nautique inoubliable dans le Golfe du Morbihan. Nous vous connectons aux meilleurs loueurs professionnels de la côte.
            </p>
          </div>

          {/* Ports */}
          <div>
            <h4 className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-300">
              Ports de départ
            </h4>
            <ul className="space-y-2 text-sm">
              {ports.map((p) => (
                <li key={p}>
                  <Link href="#fleet" className="transition-colors hover:text-sky-400">
                    Location bateau {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Types */}
          <div>
            <h4 className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-300">
              Types de bateaux
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#fleet" className="transition-colors hover:text-sky-400">Voiliers de croisière</Link></li>
              <li><Link href="#fleet" className="transition-colors hover:text-sky-400">Bateaux à moteur</Link></li>
              <li><Link href="#fleet" className="transition-colors hover:text-sky-400">Semi-rigides</Link></li>
              <li><Link href="#fleet" className="transition-colors hover:text-sky-400">Catamarans</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-300">
              Contactez-nous
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400/60" />
                Golfe du Morbihan, Bretagne
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-sky-400/60" />
                <a href="tel:+33297000000" className="hover:text-white transition-colors font-medium">02 97 00 00 00</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-sky-400/60" />
                <a href="mailto:contact@morbihan-nautic.com" className="hover:text-white transition-colors">contact@morbihan-nautic.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-6 text-xs text-slate-600 sm:flex-row">
          <p>© {year} Morbihan Nautic. Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-slate-400">Mentions légales</Link>
            <Link href="/" className="hover:text-slate-400">Confidentialité</Link>
            <Link href="/admin" className="hover:text-slate-400 text-slate-600/50">Espace loueur</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
