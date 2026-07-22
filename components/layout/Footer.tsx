import Link from 'next/link'
import { Anchor, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  const ports = [
    'Vannes', 'Arradon', 'Le Crouesty',
    'Port-Blanc', 'Larmor-Baden', 'Port-Navalo',
  ]

  return (
    <footer className="border-t border-white/[0.04] bg-[#222A25] pt-16 pb-8 text-[var(--color-granit)]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Anchor className="h-5 w-5 text-[var(--color-ocre)]" strokeWidth={2.5} />
              <span className="font-heading text-base font-semibold text-[var(--color-ecume)] tracking-wide">
                morbihan<span className="font-light text-[var(--color-ocre)]">nautic</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-granit)]">
              Vivez une expérience nautique inoubliable dans le Golfe du Morbihan. Nous vous connectons aux meilleurs loueurs locaux.
            </p>
          </div>

          {/* Ports */}
          <div>
            <h4 className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-ecume)]">
              Ports de départ
            </h4>
            <ul className="space-y-2 text-sm">
              {ports.map((p) => (
                <li key={p}>
                  <Link href="#fleet" className="transition-colors hover:text-[var(--color-cuivre)]">
                    Location bateau {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Types */}
          <div>
            <h4 className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-ecume)]">
              Types de bateaux
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#fleet" className="transition-colors hover:text-[var(--color-cuivre)]">Voiliers de croisière</Link></li>
              <li><Link href="#fleet" className="transition-colors hover:text-[var(--color-cuivre)]">Bateaux à moteur</Link></li>
              <li><Link href="#fleet" className="transition-colors hover:text-[var(--color-cuivre)]">Semi-rigides</Link></li>
              <li><Link href="#fleet" className="transition-colors hover:text-[var(--color-cuivre)]">Catamarans</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-ecume)]">
              Contactez-nous
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-ocre)]" />
                Golfe du Morbihan, Bretagne
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[var(--color-ocre)]" />
                <a href="tel:+33695275422" className="hover:text-[var(--color-ecume)] transition-colors font-medium text-[var(--color-ecume)]">06 95 27 54 22</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[var(--color-ocre)]" />
                <a href="mailto:contact@morbihan-nautic.com" className="hover:text-[var(--color-ecume)] transition-colors">contact@morbihan-nautic.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-6 text-xs text-[var(--color-granit)] sm:flex-row">
          <p>© {year} Morbihan Nautic. Tous droits réservés.</p>
          <div className="flex gap-5 items-center">
            <Link href="/" className="hover:text-[var(--color-ecume)]">Mentions légales</Link>
            <Link href="/" className="hover:text-[var(--color-ecume)]">Confidentialité</Link>
            <Link href="/admin" className="hover:text-[var(--color-cuivre)] text-[var(--color-granit)] ml-4">Accès Partenaire (Sécurisé)</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
