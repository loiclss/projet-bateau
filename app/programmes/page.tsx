import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/ui/FloatingActions'
import { Anchor, Compass, Sun, Fish, MapPin, ArrowRight, ShieldAlert, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: "Programmes de Navigation dans le Golfe du Morbihan | Morbihan Nautic",
  description: "Découvrez nos itinéraires de navigation conseillés dans le Golfe du Morbihan : traversée vers Houat, tour des îles, courant de la Jument et spots de pêche.",
}

export default function ProgrammesPage() {
  const itineraries = [
    {
      id: "houat-hoedic",
      title: "Escapade aux Îles : Houat & Hoëdic",
      subtitle: "Au départ du Crouesty ou de Port-Navalo",
      tag: "Journée complète · Plaisance & Plages",
      image: "/dest-port-navalo.jfif",
      icon: Sun,
      recommendedBoat: "Semi-rigide 7m (150-200 cv) ou Vedette",
      description: "Quittez la baie du Golfe par le goulet de Port-Navalo pour mettre le cap au large vers l'île de Houat. Naviguez le long de la grande plage de Treac'h er Goured, jetez l'ancre dans une eau turquoise digne des Caraïbes et déjeunez au bord de l'eau.",
      highlights: [
        "Passage spectaculaire du goulet de Port-Navalo",
        "Mouillage d'exception à Treac'h er Goured (Houat)",
        "Escale sur l'île voisine de Hoëdic pour les navigateurs aguerris"
      ],
      tip: "Surveillez le sens du courant au goulet de Port-Navalo lors de votre sortie et de votre retour."
    },
    {
      id: "tour-du-golfe",
      title: "Le Tour des 42 Îles & Escale à l'Île-aux-Moines",
      subtitle: "Au départ d'Arradon, Vannes ou Port-Blanc",
      tag: "Demi-journée ou Journée · Famille & Détente",
      image: "/dest-vannes.jfif",
      icon: Compass,
      recommendedBoat: "Voilier 30 pieds ou Bateau hors-bord 6m",
      description: "Une journée magique au cœur du labyrinthe morbihannais. Naviguez au calme entre l'Île-aux-Moines et l'Île d'Arz. Faites escale au port du Lézard pour déguster des huîtres locales puis observez les mégalithes immergés d'Er Lannic.",
      highlights: [
        "Escale au Port du Lézard (Île-aux-Moines)",
        "Observation des enceintes mégalithiques d'Er Lannic",
        "Navigation abritée du vent dominant par les îles"
      ],
      tip: "Le débarquement au ponton passager d'Arradon ou de l'Île-aux-Moines est très accessible en semi-rigide."
    },
    {
      id: "peche-jument",
      title: "Session Pêche Sportive & Courants Vifs",
      subtitle: "Au départ de Larmor-Baden ou Port-Blanc",
      tag: "Matinée (dès 7h) · Pêche au Bar & Daurade",
      image: "/hero-bg.jpeg",
      icon: Fish,
      recommendedBoat: "Open moteur 150cv avec sondeur & porte-cannes",
      description: "Les forts courants de la Jument (jusqu'à 9 nœuds) brassent une eau riche en nutriments qui attire les plus beaux bars de Bretagne Sud. Partez à l'aube avec un matériel adapté pour pêcher aux leurres près des roches de la Pointe de Lochrist.",
      highlights: [
        "Sensations fortes dans le 2ème courant le plus fort d'Europe",
        "Prospection des fosses du chenal principal au sondeur",
        "Rencontre avec la faune marine au lever du soleil"
      ],
      tip: "Le courant de la Jument exige un moteur fiable et une attention constante à la barre."
    }
  ]

  return (
    <div className="min-h-screen bg-[var(--color-vasiere)] text-[var(--color-ecume)] font-sans antialiased">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#142C39] border-b border-[var(--color-ecume)]/10">
        <div className="mx-auto max-w-6xl px-5 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cuivre)]/15 border border-[var(--color-cuivre)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-ocre)] mb-4">
              <Compass className="h-3.5 w-3.5" /> Guide Nautique Local
            </span>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-white leading-tight">
              Programmes de navigation <br />
              <span className="text-[var(--color-ocre)]">sur mesure dans le Golfe</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#D0D4D2] leading-relaxed">
              Le Golfe du Morbihan ne se navigue pas au hasard : marnages, courants et îles enchantées rythment vos escales. Découvrez nos plans de nav conseillés par nos loueurs professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 space-y-20">
          {itineraries.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                id={item.id}
                className="scroll-mt-32 rounded-3xl bg-[#142C39] border border-[var(--color-ecume)]/10 p-6 sm:p-10 shadow-2xl space-y-8"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-ocre)] uppercase tracking-wider bg-[var(--color-vasiere)] px-3 py-1 rounded-full border border-[var(--color-cuivre)]/20">
                      <Icon className="h-3.5 w-3.5" /> {item.tag}
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                      {item.title}
                    </h2>
                    <p className="text-xs font-medium text-[var(--color-granit)] flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[var(--color-ocre)]" /> {item.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-[#D0D4D2] leading-relaxed pt-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--color-ecume)]/15">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Highlights & Tips */}
                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-[var(--color-ecume)]/10">
                  <div>
                    <h4 className="font-semibold text-sm text-white mb-3 flex items-center gap-2">
                      <Anchor className="h-4 w-4 text-[var(--color-ocre)]" /> Les temps forts du circuit
                    </h4>
                    <ul className="space-y-2 text-xs text-[#D0D4D2]">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[var(--color-ocre)] font-bold">✓</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#1B3A4B]/60 p-4 rounded-xl border border-[var(--color-ecume)]/10 space-y-2">
                    <h4 className="font-semibold text-xs text-[var(--color-ocre)] uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldAlert className="h-3.5 w-3.5" /> Conseil du marin local
                    </h4>
                    <p className="text-xs text-[#D0D4D2] leading-relaxed">
                      {item.tip}
                    </p>
                    <p className="text-[0.7rem] text-[var(--color-granit)] pt-1">
                      <strong className="text-white">Bateau conseillé :</strong> {item.recommendedBoat}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Link
                    href="/#fleet"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cuivre)] px-6 py-2.5 text-xs font-semibold text-white transition-all hover:brightness-110"
                  >
                    Trouver un bateau pour ce circuit <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#142C39] py-16 border-t border-[var(--color-ecume)]/10 text-center">
        <div className="mx-auto max-w-4xl px-5 space-y-4">
          <Waves className="h-10 w-10 text-[var(--color-ocre)] mx-auto" />
          <h3 className="font-heading text-2xl font-bold text-white">Prêt à Larguer les Amarres ?</h3>
          <p className="text-sm text-[#D0D4D2] max-w-xl mx-auto">
            Nos loueurs partenaires locaux vous briefent personnellement avant chaque départ avec les cartes marines et les horaires de marée à jour.
          </p>
          <div className="pt-4">
            <Link
              href="/#fleet"
              className="inline-block rounded-full bg-[var(--color-cuivre)] px-8 py-3 text-sm font-semibold text-white shadow-xl hover:brightness-110 transition-all"
            >
              Voir tous nos bateaux disponibles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  )
}
