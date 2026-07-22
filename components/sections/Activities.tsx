import { Sailboat, Fish, Sunset } from 'lucide-react'

export default function Activities() {
  const activities = [
    {
      title: "Navigation, Glisse & Sensations",
      description: "Embarquez sur un semi-rigide sportif motorisé pour une journée active. Bouée tractée, ski nautique ou simplement un saut d'île en île à vive allure dans la baie de Quiberon.",
      image: "/dest-port-navalo.jfif",
      tag: "Sport & Vitesse",
      icon: Sailboat
    },
    {
      title: "Pêche en Mer au Petit Matin",
      description: "Partez au lever du soleil sur un bateau à moteur parfaitement équipé (sondeur, porte-cannes). Les courants vifs du Golfe regorgent de bars, daurades et lieux.",
      image: "/dest-vannes.jfif",
      tag: "Pêche Sportive",
      icon: Fish
    },
    {
      title: "Coucher de Soleil & Escale Gourmande",
      description: "Louez un voilier ou une vedette confortable. Jetez l'ancre près de l'Île d'Arz au crépuscule, sortez l'apéritif local et profitez d'une soirée paisible au fil de l'eau.",
      image: "/hero-bg.jpeg",
      tag: "Détente & Évasion",
      icon: Sunset
    }
  ]

  return (
    <section className="bg-[var(--color-vasiere)] py-24 border-t border-[var(--color-ecume)]/10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-ocre)]">
            Inspirations Nautiques
          </p>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-ecume)] md:text-4xl">
            Des programmes de navigation sur mesure
          </h2>
        </div>

        <div className="space-y-16">
          {activities.map((act, i) => {
            const Icon = act.icon
            const isEven = i % 2 === 0
            return (
              <div
                key={i}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Photo Grand Format */}
                <div className="relative aspect-[16/9] lg:w-1/2 overflow-hidden rounded-3xl border border-[var(--color-ecume)]/15 shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={act.image}
                    alt={act.title}
                    className="h-full w-full object-cover filter brightness-90 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#1B3A4B]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[var(--color-ecume)]/15 text-xs font-semibold text-[var(--color-ocre)] uppercase tracking-wider flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5" />
                    {act.tag}
                  </div>
                </div>

                {/* Texte Descriptif */}
                <div className="lg:w-1/2 space-y-4 lg:px-6">
                  <h3 className="font-heading text-2xl font-bold text-[var(--color-ecume)] md:text-3xl">
                    {act.title}
                  </h3>
                  <p className="text-base text-[#D0D4D2] leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/programmes"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cuivre)] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[var(--color-cuivre)]/20 transition-all hover:brightness-110 hover:scale-105 active:scale-98"
          >
            Découvrir tous les itinéraires & conseils de navigation →
          </a>
        </div>
      </div>
    </section>
  )
}
