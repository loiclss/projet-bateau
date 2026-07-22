import { ShieldCheck, Anchor, Map, Clock } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-sky-400" />,
      title: 'Loueurs 100% Professionnels',
      description:
        'Nous travaillons exclusivement avec des professionnels agréés. Sécurité maximale et entretien rigoureux garantis.',
    },
    {
      icon: <Anchor className="h-6 w-6 text-sky-400" />,
      title: 'Flotte Récente & Équipée',
      description:
        'Des bateaux de dernière génération, parfaitement équipés pour votre confort et votre sécurité en mer.',
    },
    {
      icon: <Map className="h-6 w-6 text-sky-400" />,
      title: 'Expertise Locale',
      description:
        'Nos partenaires vous conseillent sur les meilleurs mouillages et itinéraires secrets du Golfe.',
    },
    {
      icon: <Clock className="h-6 w-6 text-sky-400" />,
      title: 'Devis Rapide & Flexible',
      description:
        'Recevez une proposition sous 24h. Conditions d\'annulation souples selon la météo.',
    },
  ]

  return (
    <section className="bg-[#0a1628] py-24 border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Pourquoi choisir <span className="text-sky-400">Morbihan Nautic</span> ?
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            L'assurance d'une navigation sereine avec les meilleurs experts locaux.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#111d33] p-8 border border-white/[0.06] transition-all hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/10"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-500/20">
                {feature.icon}
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
