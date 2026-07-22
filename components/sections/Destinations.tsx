import Image from 'next/image'

export default function Destinations() {
  const ports = [
    {
      name: "Vannes",
      description: "Départ mythique depuis le fond du Golfe. Une sortie magique par le chenal qui vous plonge immédiatement dans l'ambiance.",
      imageUrl: "/dest-vannes.jfif",
    },
    {
      name: "Arradon",
      description: "Point de départ stratégique au cœur du Golfe. Accès direct et rapide à l'Île-aux-Moines et l'Île d'Arz.",
      imageUrl: "/dest-port-navalo.jfif",
    },
    {
      name: "Le Crouesty",
      description: "Le grand port de plaisance d'Arzon. Accès immédiat à la baie de Quiberon et aux îles de Houat et Hoëdic.",
      imageUrl: "/dest-trinite.jfif",
    },
    {
      name: "Port-Blanc (Baden)",
      description: "L'embarcadère naturel en face de l'Île-aux-Moines. Idéal pour embarquer sans perdre une minute sur l'eau.",
      imageUrl: "/dest-vannes.jfif",
    },
    {
      name: "Larmor-Baden",
      description: "Un port pittoresque niché face aux courants. Le point de départ parfait vers Gavrinis et Berder.",
      imageUrl: "/dest-port-navalo.jfif",
    },
    {
      name: "Port-Navalo",
      description: "À l'embouchure du Golfe. Parfait pour combiner sortie dans le Golfe et grande navigation vers l'océan.",
      imageUrl: "/dest-trinite.jfif",
    }
  ]

  return (
    <section className="bg-[var(--color-vasiere)] py-24 border-t border-[var(--color-ecume)]/10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 md:w-2/3">
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-ocre)]">
            Accès à la mer
          </p>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-ecume)] md:text-4xl">
            Nos 6 ports de départ dans le Morbihan
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-[#D0D4D2]">
            Nous centralisons les flottes des loueurs professionnels agréés répartis sur les points stratégiques du Golfe et de la baie. Choisissez votre port de départ selon votre programme de navigation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ports.map((port, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl bg-[#142C39] border border-[var(--color-ecume)]/10 transition-all hover:border-[var(--color-ocre)]/30">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--color-ecume)]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={port.imageUrl}
                  alt={`Location bateau au départ du port de ${port.name}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-xl font-semibold text-[var(--color-ecume)]">
                  {port.name}
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-[#D0D4D2]">
                  {port.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
