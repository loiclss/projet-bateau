'use client'

import { Phone, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] sm:min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[var(--color-vasiere)] pt-24 pb-16">
      {/* Image d'arrière-plan (Le fameux Tempest semi-rigide de l'utilisateur) */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* L'utilisateur placera sa photo hero-bateau.jpg dans le dossier public/ */}
        <img
          src="/hero-bateau.jpg"
          alt="Location bateau semi-rigide Golfe du Morbihan"
          className="h-full w-full object-cover opacity-80"
          onError={(e) => {
            // Fallback si l'image n'est pas encore uploadée
            e.currentTarget.src = "/hero-bg.jpeg"
          }}
        />
      </div>

      {/* Overlay gradient pour la lisibilité sur fond marine */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(27,58,75,0.5) 0%, rgba(27,58,75,0.95) 100%)',
        }}
      />

      {/* Contenu de conviction (sans animations SaaS excessives) */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center my-auto">
        <div className="space-y-4 sm:space-y-6">
          {/* Accroche contextuelle authentique */}
          <span className="inline-block text-[0.7rem] sm:text-[0.75rem] font-medium tracking-[0.15em] sm:tracking-[0.2em] text-[var(--color-ecume)] uppercase bg-[#1B3A4B]/80 border border-[var(--color-ecume)]/15 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full backdrop-blur-md">
            Golfe du Morbihan · Bretagne Sud
          </span>

          {/* Titre principal — ancré dans le lieu */}
          <h1 className="font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-[var(--color-ecume)] sm:text-5xl md:text-6xl lg:text-7xl">
            Naviguez au cœur
            <br />
            <span className="text-[var(--color-ocre)]">
              du Morbihan
            </span>
          </h1>

          {/* Sous-titre persuasif et local */}
          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-[#D0D4D2] md:text-lg">
            Louez le bateau idéal pour dompter les courants de la Jument, explorer le labyrinthe des 42 îles et trouver le mouillage parfait. Nos experts locaux vous conseillent avant d'embarquer.
          </p>

          {/* Double CTA */}
          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center sm:gap-4 sm:pt-4">
            <button
              onClick={scrollToFleet}
              className="w-full sm:w-auto rounded-full bg-[var(--color-cuivre)] px-8 py-3.5 text-[0.9rem] sm:text-[0.95rem] font-semibold text-[var(--color-ecume)] shadow-xl shadow-[var(--color-cuivre)]/20 transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Découvrir la flotte
            </button>
            <a
              href="tel:+33695275422"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full border border-[var(--color-granit)] bg-[#1B3A4B]/60 backdrop-blur-sm px-7 py-3.5 text-[0.9rem] sm:text-[0.95rem] font-medium text-[var(--color-ecume)] transition-all hover:bg-[var(--color-granit)]/30 hover:border-[var(--color-ecume)]/50"
            >
              <Phone className="h-4 w-4 text-[var(--color-ocre)]" />
              06 95 27 54 22
            </a>
          </div>

          {/* Proof points très spécifiques nautisme local */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 pt-6 sm:pt-8 text-[0.7rem] sm:text-[0.75rem] font-medium text-[var(--color-ecume)]/80 uppercase tracking-wide">
            <span className="flex items-center gap-1.5"><span className="text-[var(--color-ocre)]">✦</span> Briefing marnage & courants</span>
            <span className="flex items-center gap-1.5"><span className="text-[var(--color-ocre)]">✦</span> 42 îles à explorer</span>
            <span className="flex items-center gap-1.5"><span className="text-[var(--color-ocre)]">✦</span> Loueurs 100% locaux</span>
            <span className="flex items-center gap-1.5"><span className="text-[var(--color-ocre)]">✦</span> Départ sur 6 ports</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator (simplifié) */}
      <button
        onClick={scrollToFleet}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-granit)] hover:text-[var(--color-ecume)] transition-colors"
        aria-label="Voir les bateaux"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  )
}
