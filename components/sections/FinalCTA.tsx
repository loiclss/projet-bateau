import { Phone, Anchor, ShieldCheck } from 'lucide-react'

export default function FinalCTA() {
  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-gradient-to-b from-[#142C39] to-[#1B3A4B] py-20 border-t border-[var(--color-ecume)]/10 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 text-center relative z-10">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-cuivre)]/10 border border-[var(--color-cuivre)]/20 text-[var(--color-ocre)]">
          <Anchor className="h-7 w-7" />
        </div>

        <h2 className="font-heading text-3xl font-extrabold text-[var(--color-ecume)] md:text-5xl max-w-3xl mx-auto leading-tight">
          Prêt à embarquer dans le Golfe du Morbihan ?
        </h2>

        <p className="mt-4 text-base text-[#D0D4D2] max-w-2xl mx-auto leading-relaxed md:text-lg">
          Demandez votre devis gratuit en 2 minutes. Réponse garantie sous 24h par un loueur professionnel agréé local.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToFleet}
            className="w-full sm:w-auto rounded-full bg-[var(--color-cuivre)] px-9 py-4 text-base font-semibold text-[var(--color-ecume)] shadow-xl shadow-[var(--color-cuivre)]/20 transition-all hover:brightness-110 hover:scale-[1.02]"
          >
            Choisir mon bateau
          </button>

          <a
            href="tel:+33695275422"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full border border-[var(--color-granit)] bg-[#1B3A4B]/80 px-8 py-4 text-base font-medium text-[var(--color-ecume)] transition-all hover:bg-[var(--color-granit)]/30 hover:border-[var(--color-ecume)]/50"
          >
            <Phone className="h-5 w-5 text-[var(--color-ocre)]" />
            06 95 27 54 22
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-granit)] font-medium">
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[var(--color-ocre)]" /> Sans engagement</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[var(--color-ocre)]" /> Devis sous 24h</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[var(--color-ocre)]" /> Briefing météo & courants inclus</span>
        </div>
      </div>
    </section>
  )
}
