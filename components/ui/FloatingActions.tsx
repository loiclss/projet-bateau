'use client'

import { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter par WhatsApp"
        className="group relative flex items-center justify-center h-13 w-13 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:brightness-105 active:scale-95"
      >
        <MessageCircle className="h-7 w-7 fill-white stroke-[#25D366]" />

        {/* Tooltip Label */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-[#1B3A4B]/95 px-3 py-1.5 text-xs font-medium text-white shadow-xl border border-[var(--color-ecume)]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Discuter sur WhatsApp
        </span>
      </a>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Remonter en haut"
          className="flex items-center justify-center h-11 w-11 rounded-full bg-[#142C39]/90 border border-[var(--color-ecume)]/20 text-[var(--color-ecume)] shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-[var(--color-cuivre)] hover:border-[var(--color-cuivre)] hover:text-white hover:scale-110 active:scale-95"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
