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
          ? 'bg-[#0a1628]/90 backdrop-blur-lg border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <Anchor
            className="h-6 w-6 text-sky-400 transition-transform duration-300 group-hover:-rotate-12"
            strokeWidth={2.5}
          />
          <span className="font-heading text-[1.1rem] font-semibold tracking-wide text-white">
            morbihan<span className="font-light text-sky-400">nautic</span>
          </span>
        </Link>

        {/* Desktop nav — 3 onglets */}
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
          <button
            onClick={() => scrollTo('reserve')}
            className="rounded-full bg-sky-500 px-5 py-2 text-[0.82rem] font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/30"
          >
            Réserver
          </button>
        </nav>

        {/* Numéro de téléphone — desktop */}
        <a
          href="tel:+33297000000"
          className="hidden items-center gap-2 text-[0.82rem] font-medium text-slate-300 transition-colors hover:text-white md:flex"
        >
          <Phone className="h-4 w-4 text-sky-400" />
          <span>02 97 00 00 00</span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-300 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/[0.06] bg-[#0a1628]/95 backdrop-blur-xl px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-3">
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
            <a
              href="tel:+33297000000"
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-slate-300 transition-colors hover:bg-white/5"
            >
              <Phone className="h-4 w-4 text-sky-400" />
              02 97 00 00 00
            </a>
            <button
              onClick={() => scrollTo('reserve')}
              className="mt-2 rounded-full bg-sky-500 px-5 py-3 text-center text-[0.95rem] font-semibold text-white shadow-lg shadow-sky-500/20"
            >
              Réserver un bateau
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
