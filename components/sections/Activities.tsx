import { Sunset, Fish, Sailboat } from 'lucide-react'

export default function Activities() {
  const activities = [
    {
      icon: <Sailboat className="h-8 w-8 text-[var(--color-cuivre)]" />,
      title: "Navigation & Glisse",
      description: "Louez un semi-rigide sportif pour une session de wakeboard ou de bouée tractée entre amis. Le Golfe offre des zones dégagées parfaites pour les sports nautiques."
    },
    {
      icon: <Fish className="h-8 w-8 text-[var(--color-cuivre)]" />,
      title: "Pêche en Mer",
      description: "Partez au petit matin sur l'un de nos bateaux à moteur adaptés à la pêche. Les courants du Golfe sont réputés pour le bar et la daurade."
    },
    {
      icon: <Sunset className="h-8 w-8 text-[var(--color-cuivre)]" />,
      title: "Apéro & Coucher de Soleil",
      description: "Louez un voilier ou un bateau confortable pour une soirée inoubliable. Mouillez l'ancre, sortez l'apéritif et admirez le soleil se coucher sur l'eau."
    }
  ]

  return (
    <section className="bg-[#26302b] py-24 border-t border-[var(--color-ecume)]/5">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-ocre)]">
            Idées d'aventures
          </p>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-ecume)] md:text-4xl">
            Que faire en bateau ?
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-vasiere)] ring-1 ring-[var(--color-ecume)]/10 shadow-lg shadow-black/20">
                {activity.icon}
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-[var(--color-ecume)]">
                {activity.title}
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-[#D0D4D2] max-w-sm">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
