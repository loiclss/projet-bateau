import { Sunset, Fish, Sailboat } from 'lucide-react'

export default function Activities() {
  const activities = [
    {
      icon: <Sailboat className="h-8 w-8 text-sky-400" />,
      title: "Navigation & Glisse",
      description: "Louez un semi-rigide sportif pour une session de wakeboard ou de bouée tractée entre amis. Le Golfe offre des zones dégagées parfaites pour les sports nautiques."
    },
    {
      icon: <Fish className="h-8 w-8 text-sky-400" />,
      title: "Pêche en Mer",
      description: "Partez au petit matin sur l'un de nos bateaux à moteur adaptés à la pêche. Les courants du Golfe sont réputés pour le bar et la daurade."
    },
    {
      icon: <Sunset className="h-8 w-8 text-sky-400" />,
      title: "Apéro & Coucher de Soleil",
      description: "Louez un voilier ou un bateau confortable pour une soirée inoubliable. Mouillez l'ancre, sortez l'apéritif et admirez le soleil se coucher sur l'eau."
    }
  ]

  return (
    <section className="bg-[#111d33] py-24 border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-sky-400">
            Idées d'aventures
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Que faire en bateau ?
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0a1628] ring-1 ring-white/[0.06] shadow-lg shadow-black/20">
                {activity.icon}
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-white">
                {activity.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
