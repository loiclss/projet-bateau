import { Compass, Clock, Anchor } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Compass,
      number: "01",
      title: "Sélectionnez votre bateau",
      description: "Parcourez notre flotte sélectionnée selon votre port de départ, la taille de votre équipage et votre projet de navigation (voile, moteur, semi-rigide)."
    },
    {
      icon: Clock,
      number: "02",
      title: "Devis & conseils sous 24h",
      description: "Envoyez votre demande en 1 clic. Un loueur professionnel agréé étudie vos dates, confirme la disponibilité et vous prépare un devis détaillé."
    },
    {
      icon: Anchor,
      number: "03",
      title: "Embarquez en toute sérénité",
      description: "Le jour J, bénéficiez d'un accueil personnalisé sur le pont, d'une prise en main complète et d'un briefing dédié sur les marées et courants."
    }
  ]

  return (
    <section className="bg-[#142C39] py-20 border-t border-[var(--color-ecume)]/10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-ocre)]">
            Simple & Transparent
          </p>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-ecume)] md:text-4xl">
            Comment organiser votre sortie ?
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-[#D0D4D2]">
            Du choix du navire jusqu'au largage des amarres, nous simplifions la mise en relation avec les armateurs locaux.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="relative rounded-2xl bg-[#1B3A4B] p-8 border border-[var(--color-ecume)]/10 transition-all hover:border-[var(--color-ocre)]/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-cuivre)]/10 border border-[var(--color-cuivre)]/20 text-[var(--color-ocre)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-heading text-3xl font-extrabold text-[var(--color-ecume)]/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--color-ecume)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-[#D0D4D2]">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
