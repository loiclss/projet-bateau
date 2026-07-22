import { Compass, ShieldAlert, Anchor } from 'lucide-react'

export default function Features() {
  return (
    <section className="relative bg-[var(--color-vasiere)] py-28 overflow-hidden border-t border-[var(--color-ecume)]/10">
      {/* Background Image Immersif avec Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpeg"
          alt="Naviguer dans les courants du Golfe du Morbihan"
          className="h-full w-full object-cover opacity-60 filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A4B]/90 via-[#1B3A4B]/70 to-[#1B3A4B]/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Hero Callout */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cuivre)]/15 border border-[var(--color-cuivre)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-ocre)]">
              <ShieldAlert className="h-4 w-4" /> Spécificité Nautique Locale
            </div>

            <h2 className="font-heading text-3xl font-extrabold text-[var(--color-ecume)] md:text-5xl leading-tight">
              Le courant de la Jument peut atteindre <span className="text-[var(--color-ocre)]">9 nœuds</span>.
            </h2>

            <p className="text-base text-[#D0D4D2] leading-relaxed md:text-lg">
              Le Morbihan ne se navigue pas comme la haute mer. Entre la chaussée des 42 îles, les marées et les passages resserrés, l'accompagnement de loueurs professionnels locaux fait toute la différence pour une sortie sans stress.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-6 text-sm text-[var(--color-ecume)] border-t border-[var(--color-ecume)]/10">
              <div className="flex items-start gap-3">
                <Compass className="h-5 w-5 text-[var(--color-ocre)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Briefing Marnage & Météo</h4>
                  <p className="text-xs text-[var(--color-granit)] leading-relaxed">Calcul des heures de passage clés avant chaque départ du port.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Anchor className="h-5 w-5 text-[var(--color-ocre)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Mouillages Privilégiés</h4>
                  <p className="text-xs text-[var(--color-granit)] leading-relaxed">Conseils secrets sur les criques abritées du vent dominant.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Highlight Card */}
          <div className="lg:col-span-5 bg-[#142C39]/90 border border-[var(--color-ecume)]/15 rounded-3xl p-8 backdrop-blur-xl shadow-2xl space-y-6">
            <h3 className="font-heading text-xl font-bold text-white flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[var(--color-ocre)] animate-pulse" />
              Loueurs 100% Répertoriés & Agréés
            </h3>
            
            <p className="text-sm leading-relaxed text-[#D0D4D2]">
              Tous les bateaux proposés sur notre plateforme appartiennent à des armateurs établis sur les ports du Morbihan. Les navires sont inspectés et révisés avant chaque saison.
            </p>

            <ul className="space-y-3 text-xs text-[var(--color-ecume)]">
              <li className="flex items-center gap-2.5">
                <span className="text-[var(--color-ocre)] font-bold">✓</span> Entretien moteur et gréement contrôlé
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[var(--color-ocre)] font-bold">✓</span> Équipements de sécurité hauturiers à jour
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[var(--color-ocre)] font-bold">✓</span> Assistance et conseils 7j/7 en saison
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
