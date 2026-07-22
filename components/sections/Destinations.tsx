import Image from 'next/image'

export default function Destinations() {
  const destinations = [
    {
      name: "L'Île aux Moines",
      description: "La « Perle du Golfe », célèbre pour ses ruelles fleuries de camélias et de mimosas, et son ambiance paisible. Une escale incontournable pour un déjeuner au port.",
      imageUrl: "https://images.unsplash.com/photo-1549419131-7e3e4a2e5d9f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "L'Île d'Arz",
      description: "L'île des capitaines au charme sauvage et préservé. Parfaite pour une escale nature, une balade à vélo ou un pique-nique sur ses plages tranquilles.",
      imageUrl: "https://images.unsplash.com/photo-1533507851949-a292d3b20755?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Le Tumulus de Gavrinis",
      description: "Naviguez vers ce joyau mégalithique. Un mouillage impressionnant face aux courants et l'occasion de découvrir un patrimoine vieux de 6000 ans.",
      imageUrl: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=800&q=80",
    }
  ]

  return (
    <section className="bg-[#0a1628] py-24 border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 md:w-2/3">
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-sky-400">
            Escales de rêve
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Les joyaux cachés du Golfe
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-400">
            Avec ses 42 îles, le Golfe du Morbihan offre un terrain de jeu exceptionnel. Voici quelques mouillages et escales que nos partenaires recommandent.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((dest, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl bg-[#111d33] border border-white/[0.06]">
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Utilisation de balise img standard car on n'a pas configuré les domaines Unsplash pour Next/Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dest.imageUrl}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-xl font-semibold text-white">
                  {dest.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
