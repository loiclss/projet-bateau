import Image from 'next/image'

export default function Destinations() {
  const ports = [
    {
      name: "Vannes",
      description: "Départ mythique depuis le fond du Golfe. Sortie par le chenal menant directement aux îles.",
      imageUrl: "/dest-vannes.jfif",
      badge: "Fond du Golfe"
    },
    {
      name: "Arradon",
      description: "Point d'ancrage idéal au centre du Golfe. Accès rapide à l'Île-aux-Moines et l'Île d'Arz.",
      imageUrl: "/hero-bg.jpeg",
      badge: "Cœur du Golfe"
    },
    {
      name: "Le Crouesty",
      description: "Grand port de plaisance d'Arzon. Accès immédiat à la baie de Quiberon, Houat et Hoëdic.",
      imageUrl: "/dest-trinite.jfif",
      badge: "Accès Baie & Îles"
    },
    {
      name: "Port-Navalo",
      description: "À l'embouchure du Golfe. Idéal pour combiner navigation dans le Golfe et sortie hauturière.",
      imageUrl: "/dest-port-navalo.jfif",
      badge: "Embouchure Océan"
    },
    {
      name: "Port-Blanc (Baden)",
      description: "L'embarcadère naturel en face de l'Île-aux-Moines. Embarquez sans perdre de temps sur l'eau.",
      imageUrl: "/dest-vannes.jfif",
      badge: "Escale Îles"
    },
    {
      name: "Larmor-Baden",
      description: "Port pittoresque niché face aux courants. Le point de départ parfait vers Gavrinis et Berder.",
      imageUrl: "/dest-port-navalo.jfif",
      badge: "Passage Gavrinis"
    }
  ]

  return (
    <section className="bg-[#142C39] py-24 border-t border-[var(--color-ecume)]/10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-ocre)]">
              Territoire de Navigation
            </p>
            <h2 className="font-heading text-3xl font-bold text-[var(--color-ecume)] md:text-4xl">
              Nos 6 ports de départ stratégiques
            </h2>
          </div>
          <p className="text-sm text-[#D0D4D2] max-w-md">
            Chaque port offre un accès direct à un bassin de navigation spécifique. Choisissez le départ le plus adapté à votre programme.
          </p>
        </div>

        {/* Layout Panoramique Horizontale / Grille Équilibrée */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ports.map((port, i) => (
            <div
              key={i}
              className="group relative h-[260px] overflow-hidden rounded-2xl border border-[var(--color-ecume)]/15 shadow-xl transition-all hover:border-[var(--color-ocre)]/50"
            >
              {/* Background Image avec gradient sombre */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={port.imageUrl}
                alt={`Location de bateau au départ de ${port.name}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A4B] via-[#1B3A4B]/60 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                <div>
                  <span className="inline-block rounded-full bg-[var(--color-cuivre)]/20 border border-[var(--color-cuivre)]/30 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--color-ocre)] backdrop-blur-md">
                    {port.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-ocre)] transition-colors">
                    {port.name}
                  </h3>
                  <p className="text-xs text-[#D0D4D2] leading-relaxed line-clamp-2">
                    {port.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
