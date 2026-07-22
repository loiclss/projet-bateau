import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    {
      name: "Fabien R.",
      location: "Vannes",
      port: "Départ de Port-Blanc",
      boat: "Jeanneau Cap Camarat 6.5 CC",
      rating: 5,
      comment: "On a loué le Cap Camarat pour aller pique-niquer à Houat en famille. Le loueur nous a parfaitement briefés sur le chenal de sortie et le passage du goulet. Bateau très propre et moteur impeccable.",
      date: "Août 2025",
      verified: true
    },
    {
      name: "Guillaume & Marie T.",
      location: "Nantes",
      port: "Départ d'Arradon",
      boat: "Zodiac Tempest 700 (200 cv)",
      rating: 5,
      comment: "Journée en mer au top ! Prise en main rapide et très claire à quai à Arradon. Les gilets enfants étaient déjà prêts. On a fait le tour des îles et une escale géniale sur l'Île-aux-Moines.",
      date: "Juillet 2025",
      verified: true
    },
    {
      name: "Alexandre B.",
      location: "Rennes",
      port: "Départ de Larmor-Baden",
      boat: "B2 Marine Cap-Ferret Open",
      rating: 5,
      comment: "Sortie pêche au bar au lever du jour vers la pointe de Lochrist. Bateau bien équipé avec sondeur et moteur 150cv super économe. Accueil pro et conseils météo bien appréciés.",
      date: "Juin 2025",
      verified: true
    },
    {
      name: "Valérie & Thomas P.",
      location: "Paris",
      port: "Départ du Crouesty",
      boat: "Voilier Sun Odyssey 349",
      rating: 5,
      comment: "Location de 3 jours pour faire la baie de Quiberon et le Golfe. Devis clair reçu dans la journée, navire en parfait état. Des conseils avisés pour franchir la Jument sans stress.",
      date: "Septembre 2025",
      verified: true
    }
  ]

  return (
    <section className="bg-[var(--color-vasiere)] py-24 border-t border-[var(--color-ecume)]/10 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-ocre)]">
                Avis Clients Authentiques
              </span>
              <span className="flex items-center gap-1 text-[0.7rem] font-bold bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <ShieldCheck className="h-3.5 w-3.5" /> Réservations vérifiées
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-[var(--color-ecume)] md:text-4xl">
              Retours d'expérience sur l'eau
            </h2>
          </div>

          {/* Badge Note Globale */}
          <div className="flex items-center gap-4 bg-[#142C39] px-5 py-3.5 rounded-2xl border border-[var(--color-ecume)]/10 shadow-lg">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--color-ecume)]">4.9 / 5 · Excellent</p>
              <p className="text-[0.7rem] text-[var(--color-granit)]">Basé sur 140+ sorties en mer</p>
            </div>
          </div>
        </div>

        {/* Grille d'avis */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#142C39] p-6 border border-[var(--color-ecume)]/10 flex flex-col justify-between transition-all hover:border-[var(--color-cuivre)]/40 shadow-xl"
            >
              <div>
                {/* En-tête de carte : Étoiles & Badge Vérifié */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, r) => (
                      <Star key={r} className="h-4 w-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-[0.65rem] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="h-3 w-3" /> Vérifié
                    </span>
                  )}
                </div>

                {/* Commentaire réaliste */}
                <p className="text-[0.875rem] leading-relaxed text-[#D0D4D2] mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Auteur & Bateau */}
              <div className="border-t border-[var(--color-ecume)]/10 pt-4 mt-auto">
                <div className="flex items-center justify-between">
                  <p className="font-heading font-bold text-sm text-[var(--color-ecume)]">
                    {review.name}
                  </p>
                  <span className="text-[0.65rem] text-[var(--color-granit)]">{review.location}</span>
                </div>
                <p className="text-xs text-[var(--color-ocre)] font-medium mt-0.5">
                  {review.port}
                </p>
                <p className="text-[0.7rem] text-[var(--color-granit)] mt-1 truncate">
                  {review.boat} · <span className="opacity-75">{review.date}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
