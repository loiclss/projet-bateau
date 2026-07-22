'use client'

import { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle, Phone } from 'lucide-react'

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const whatsappUrl = "https://wa.me/33695275422?text=Bonjour%2C%20je%20souhaite%20des%20renseignements%20pour%20louer%20un%20bateau%20dans%20le%20Golfe."

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Phone Callout Pill */}
      <a
        href="tel:+33695275422"
        className="group flex items-center gap-2.5 rounded-full bg-[#1B3A4B]/95 border-2 border-[var(--color-cuivre)] px-4 py-2.5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-[var(--color-cuivre)] text-white"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-cuivre)] text-white group-hover:bg-white group-hover:text-[var(--color-cuivre)] transition-colors">
          <Phone className="h-3.5 w-3.5 animate-pulse" />
        </span>
        <div className="text-left leading-none pr-1">
          <span className="block text-[0.6rem] uppercase tracking-wider text-[var(--color-ocre)] group-hover:text-white font-bold">Appel Direct</span>
          <span className="block text-xs font-extrabold font-heading text-white">06 95 27 54 22</span>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter par WhatsApp"
        className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:brightness-105 active:scale-95"
      >
        <MessageCircle className="h-6 w-6 fill-white stroke-[#25D366]" />

        {/* Tooltip Label */}
        <span className="absolute right-15 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-[#1B3A4B]/95 px-3 py-1.5 text-xs font-semibold text-white shadow-xl border border-[var(--color-ecume)]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp Direct
        </span>
      </a>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Remonter en haut"
          className="flex items-center justify-center h-10 w-10 rounded-full bg-[#142C39]/90 border border-[var(--color-ecume)]/20 text-[var(--color-ecume)] shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-[var(--color-cuivre)] hover:border-[var(--color-cuivre)] hover:text-white hover:scale-110 active:scale-95"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
