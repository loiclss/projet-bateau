import { Compass, Map, Ship } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Compass className="h-7 w-7 text-[var(--color-ocre)]" />,
      title: 'Anticiper les Courants',
      description:
        'Le courant de la Jument peut atteindre 9 nœuds. Nos loueurs vous briefent sur les horaires de marées et les zones à courant fort pour passer en toute sécurité.',
    },
    {
      icon: <Map className="h-7 w-7 text-[var(--color-ocre)]" />,
      title: 'Naviguer entre les 42 îles',
      description:
        'D\'Arz à l\'Île-aux-Moines, en passant par Ilur, le Golfe est un labyrinthe. Profitez de conseils d\'experts pour trouver les mouillages les mieux abrités du vent.',
    },
    {
      icon: <Ship className="h-7 w-7 text-[var(--color-ocre)]" />,
      title: 'Des professionnels du cru',
      description:
        'Nos partenaires connaissent chaque haut-fond, chaque vasière et chaque parc à huîtres. Des bateaux entretenus avec rigueur et des briefings de départ intraitables sur la sécurité.',
    },
  ]

  return (
    <section className="bg-[var(--color-vasiere)] py-24 border-t border-[var(--color-ecume)]/5">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-[var(--color-ecume)] md:text-4xl">
            L'expertise du <span className="text-[var(--color-ocre)]">terrain</span>
          </h2>
          <p className="mt-4 text-[#D0D4D2] max-w-2xl mx-auto">
            Le Morbihan ne se navigue pas comme la haute mer. La connaissance du marnage et des courants fait toute la différence.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-[#2a342f] p-8 border border-[var(--color-ecume)]/10 transition-all hover:border-[var(--color-cuivre)]/50 hover:bg-[#323d37]"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-ocre)]/10 ring-1 ring-[var(--color-ocre)]/20 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="mb-4 font-heading text-xl font-semibold text-[var(--color-ecume)]">
                {feature.title}
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-[#D0D4D2]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
