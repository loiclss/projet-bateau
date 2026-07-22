'use client'

import { motion } from 'framer-motion'
import { Phone, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[#0a1628]">
      {/* Vidéo d'arrière-plan */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-70"
        poster="https://images.unsplash.com/photo-1500514966906-fe245eea9344?auto=format&fit=crop&w=1920&q=60"
      >
        {/* Placeholder video of a boat (can be replaced by user's own video) */}
        <source src="https://player.vimeo.com/external/498877074.sd.mp4?s=d4f4d2f09d6f1a4e57fcb5b8d0c75a40a5a3a41c&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </video>

      {/* Overlay gradient pour la lisibilité */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,22,40,0.5) 0%, rgba(10,22,40,0.8) 100%)',
        }}
      />

      {/* Contenu de conviction */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Accroche contextuelle */}
          <span className="inline-block text-[0.7rem] font-bold tracking-[0.25em] text-sky-400 uppercase bg-sky-400/10 border border-sky-400/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Golfe du Morbihan · Bretagne Sud
          </span>

          {/* Titre principal — émotionnel, pas fonctionnel */}
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            Prenez le large dans
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-500">
              l'un des plus beaux
            </span>
            <br />
            golfes du monde
          </h1>

          {/* Sous-titre persuasif */}
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Imaginez une journée de navigation entre les îles, le vent dans les voiles, le soleil sur l'eau turquoise. 
            Nos loueurs professionnels préparent tout — il ne vous reste qu'à embarquer.
          </p>

          {/* Double CTA */}
          <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-center">
            <button
              onClick={scrollToFleet}
              className="rounded-full bg-sky-500 px-8 py-3.5 text-[0.9rem] font-semibold text-white shadow-xl shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-sky-400/30 hover:scale-[1.02]"
            >
              Découvrir nos bateaux
            </button>
            <a
              href="tel:+33297000000"
              className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm px-7 py-3.5 text-[0.9rem] font-medium text-white transition-all hover:bg-white/[0.08] hover:border-white/20"
            >
              <Phone className="h-4 w-4 text-sky-400" />
              Appelez-nous
            </a>
          </div>

          {/* Proof points */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-6 text-[0.75rem] font-medium text-slate-400">
            <span>✓ Devis sous 24 h</span>
            <span>✓ Loueurs agréés</span>
            <span>✓ 6 ports de départ</span>
            <span>✓ Annulation flexible</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToFleet}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-sky-400 transition-colors"
        aria-label="Voir les bateaux"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.2em] font-medium">Découvrir</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.button>
    </section>
  )
}
