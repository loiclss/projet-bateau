import { Star, ShieldCheck, Quote } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    {
      name: "Marc P.",
      port: "Départ d'Arradon",
      boat: "Hermine des Îles (Voilier)",
      rating: 5,
      comment: "Superbe navigation de 3 jours autour des îles du Golfe. Le briefing de prise en main au départ d'Arradon était d'une précision exemplaire sur les marées.",
      date: "Juin 2026"
    },
    {
      name: "Sophie & Julien L.",
      port: "Départ du Crouesty",
      boat: "Morbihan Express (Semi-rigide)",
      rating: 5,
      comment: "Bateau impeccable pour une traversée rapide vers Houat. Équipement de sécurité complet et accueil très professionnel par l'armateur local.",
      date: "Juillet 2026"
    },
    {
      name: "Thomas D.",
      port: "Départ de Vannes",
      boat: "Crouesty Rider (Bateau à moteur)",
      rating: 5,
      comment: "Devis reçu en moins de 4h, réponses claires et navire conforme en tous points. La sortie par le chenal de Vannes au petit matin est inoubliable.",
      date: "Mai 2026"
    },
    {
      name: "Benoît K.",
      port: "Départ de Port-Blanc",
      boat: "Gwenenn Blue (Voilier)",
      rating: 5,
      comment: "Des conseils précieux pour franchir le courant de la Jument sans stress. Nous relouerons sans hésiter l'été prochain.",
      date: "Juin 2026"
    }
  ]

  return (
    <section className="bg-[var(--color-vasiere)] py-24 border-t border-[var(--color-ecume)]/10 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-ocre)]">
                Retours d'expérience
              </span>
              <span className="flex items-center gap-1 text-[0.75rem] font-bold bg-[var(--color-cuivre)]/10 text-[var(--color-ocre)] px-2.5 py-0.5 rounded-full border border-[var(--color-cuivre)]/20">
                <ShieldCheck className="h-3.5 w-3.5" /> Loueurs agréés
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-[var(--color-ecume)] md:text-4xl">
              Ce que disent les marins
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-[#142C39] px-5 py-3 rounded-2xl border border-[var(--color-ecume)]/10">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--color-ecume)]">4.9 / 5 sur 120+ avis</p>
              <p className="text-xs text-[var(--color-granit)]">Avis contrôlés de plaisanciers</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#142C39] p-6 border border-[var(--color-ecume)]/10 flex flex-col justify-between transition-all hover:border-[var(--color-ocre)]/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, r) => (
                      <Star key={r} className="h-4 w-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-[var(--color-granit)]/40" />
                </div>
                <p className="text-[0.875rem] leading-relaxed text-[#D0D4D2] mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="border-t border-[var(--color-ecume)]/5 pt-4">
                <p className="font-heading font-semibold text-sm text-[var(--color-ecume)]">
                  {review.name}
                </p>
                <p className="text-xs text-[var(--color-ocre)] font-medium">
                  {review.port}
                </p>
                <p className="text-[0.7rem] text-[var(--color-granit)] mt-1">
                  {review.boat} · {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
