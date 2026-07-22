import Image from 'next/image'

export default function Destinations() {
  const ports = [
    {
      name: "Vannes",
      description: "Départ mythique depuis le fond du Golfe. Une sortie magique par le chenal qui vous plonge immédiatement dans l'ambiance.",
      imageUrl: "https://images.unsplash.com/photo-1621213327668-cb03f29bb572?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Arradon & Port-Blanc",
      description: "Des points de départ stratégiques au centre du Golfe. Idéal pour atteindre rapidement l'Île-aux-Moines et l'Île d'Arz.",
      imageUrl: "https://images.unsplash.com/photo-1549419131-7e3e4a2e5d9f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Le Crouesty",
      description: "Le plus grand port de plaisance de Bretagne. Un accès direct à la baie de Quiberon et aux îles de Houat et Hoëdic pour le hauturier.",
      imageUrl: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=800&q=80",
    }
  ]

  return (
    <section className="bg-[var(--color-vasiere)] py-24 border-t border-[var(--color-ecume)]/5">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 md:w-2/3">
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-ocre)]">
            Accès à la mer
          </p>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-ecume)] md:text-4xl">
            Nos ports de départ
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-[#D0D4D2]">
            Nous centralisons les flottes des loueurs professionnels répartis sur les points stratégiques du Morbihan. Choisissez votre port de départ selon votre programme de navigation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {ports.map((port, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl bg-[#2a342f] border border-[var(--color-ecume)]/10">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--color-ecume)]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={port.imageUrl}
                  alt={`Port de ${port.name}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-xl font-semibold text-[var(--color-ecume)]">
                  {port.name}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-[#D0D4D2]">
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
