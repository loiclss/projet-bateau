'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Anchor, Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--color-vasiere)]/90 backdrop-blur-lg border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <Anchor
            className="h-6 w-6 text-[var(--color-ocre)] transition-transform duration-300 group-hover:-rotate-12"
            strokeWidth={2.5}
          />
          <span className="font-heading text-[1.1rem] font-semibold tracking-wide text-[var(--color-ecume)]">
            morbihan<span className="font-light text-[var(--color-ocre)]">nautic</span>
          </span>
        </Link>

        {/* Desktop nav — 4 onglets */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-[0.82rem] font-medium text-slate-300 transition-colors hover:text-white"
          >
            Accueil
          </Link>
          <button
            onClick={() => scrollTo('fleet')}
            className="text-[0.82rem] font-medium text-slate-300 transition-colors hover:text-white"
          >
            Nos bateaux
          </button>
          <Link
            href="/programmes"
            className="text-[0.82rem] font-medium text-slate-300 transition-colors hover:text-white"
          >
            Programmes & Circuit
          </Link>
          <Link
            href="/blog"
            className="text-[0.82rem] font-medium text-slate-300 transition-colors hover:text-white"
          >
            Blog
          </Link>
          <button
            onClick={() => scrollTo('reserve')}
            className="rounded-full bg-[var(--color-cuivre)] px-5 py-2 text-[0.82rem] font-semibold text-white shadow-lg shadow-[var(--color-cuivre)]/20 transition-all hover:brightness-110"
          >
            Réserver
          </button>
        </nav>

        {/* Numéro de téléphone — desktop très visible */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+33695275422"
            className="flex items-center gap-2.5 rounded-full bg-[var(--color-cuivre)]/20 border border-[var(--color-cuivre)]/40 px-4.5 py-2 text-[0.88rem] font-bold text-[var(--color-ocre)] shadow-lg transition-all hover:bg-[var(--color-cuivre)] hover:text-white hover:scale-105 active:scale-95"
          >
            <Phone className="h-4 w-4 animate-pulse text-[var(--color-ocre)] group-hover:text-white" />
            <span>06 95 27 54 22</span>
          </a>
        </div>

        {/* Mobile controls (Appel direct + Menu toggle) */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+33695275422"
            aria-label="Appeler directement"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-cuivre)] text-white shadow-md shadow-[var(--color-cuivre)]/30 active:scale-95"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-[var(--color-ecume)] p-1"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/[0.08] bg-[#142C39]/95 backdrop-blur-2xl px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {/* Bannière Téléphone Highlight Mobile */}
            <a
              href="tel:+33695275422"
              className="flex items-center justify-center gap-2.5 rounded-xl bg-[var(--color-cuivre)]/20 border border-[var(--color-cuivre)]/40 py-3 text-center text-[0.95rem] font-bold text-[var(--color-ocre)] shadow-md"
            >
              <Phone className="h-4 w-4 animate-pulse" />
              Ligne directe : 06 95 27 54 22
            </a>

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-left text-[0.95rem] font-medium text-slate-200 transition-colors hover:bg-white/5"
            >
              Accueil
            </Link>
            <button
              onClick={() => scrollTo('fleet')}
              className="rounded-lg px-3 py-2.5 text-left text-[0.95rem] font-medium text-slate-200 transition-colors hover:bg-white/5"
            >
              Nos bateaux
            </button>
            <Link
              href="/programmes"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-left text-[0.95rem] font-medium text-slate-200 transition-colors hover:bg-white/5"
            >
              Programmes de navigation
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-left text-[0.95rem] font-medium text-slate-200 transition-colors hover:bg-white/5"
            >
              Blog & Guides Nautiques
            </Link>
            <button
              onClick={() => scrollTo('reserve')}
              className="mt-2 rounded-full bg-[var(--color-cuivre)] px-5 py-3 text-center text-[0.95rem] font-semibold text-[var(--color-ecume)] shadow-lg shadow-[var(--color-cuivre)]/20 hover:brightness-110 transition-all"
            >
              Réserver un bateau
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
