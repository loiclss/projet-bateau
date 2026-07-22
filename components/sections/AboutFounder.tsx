import { Anchor, ShieldCheck, HeartHandshake } from 'lucide-react'

export default function AboutFounder() {
  return (
    <section className="bg-[#142C39] py-24 border-t border-[var(--color-ecume)]/10 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Image & Visuel Fondateur */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--color-ecume)]/15 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-bg.jpeg"
                alt="Passionné de voile dans le Golfe du Morbihan"
                className="h-full w-full object-cover filter brightness-105 contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A4B] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#1B3A4B]/90 backdrop-blur-md rounded-2xl border border-[var(--color-ecume)]/15">
                <p className="font-heading font-bold text-base text-white">Loïc</p>
                <p className="text-xs text-[var(--color-ocre)] font-medium">Fondateur de Morbihan Nautic</p>
                <p className="text-[0.7rem] text-[var(--color-granit)] mt-1">Navigateur & Enfant du pays</p>
              </div>
            </div>
          </div>

          {/* Contenu Histoire & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cuivre)]/15 border border-[var(--color-cuivre)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-ocre)]">
              <Anchor className="h-3.5 w-3.5" /> Notre Histoire
            </div>

            <h2 className="font-heading text-3xl font-extrabold text-[var(--color-ecume)] md:text-4xl leading-tight">
              Pourquoi nous avons créé <span className="text-[var(--color-ocre)]">Morbihan Nautic</span> ?
            </h2>

            <p className="text-base text-[#D0D4D2] leading-relaxed">
              Enfant du Morbihan et passionné de voile depuis mon plus jeune âge, j'ai parcouru le Golfe sous toutes ses marées. J'ai constaté à quel point il était devenu difficile pour les plaisanciers de louer un bateau en toute confiance, sans passer par d'impersonnelles plateformes de masse.
            </p>

            <p className="text-base text-[#D0D4D2] leading-relaxed">
              Mon objectif en créant Morbihan Nautic était limpide : **mettre en valeur les vrais loueurs professionnels locaux** de nos 6 ports emblématiques, tout en apportant aux capitaines d'un jour des conseils authentiques sur le marnage, les courants et les secrets du Golfe.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--color-ecume)]/10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-[var(--color-ocre)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">100% Loueurs Agréés</h4>
                  <p className="text-xs text-[var(--color-granit)] leading-relaxed">Des navires rigoureusement entretenus par des armateurs locaux répertoriés.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="h-5 w-5 text-[var(--color-ocre)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">Conseils du Cru</h4>
                  <p className="text-xs text-[var(--color-granit)] leading-relaxed">Un accompagnement humain pour anticiper les passages délicats comme la Jument.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
