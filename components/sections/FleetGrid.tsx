'use client'

import { useState } from 'react'
import BoatCard, { Boat } from './BoatCard'
import SearchBar from './SearchBar'
import LeadFormModal from './LeadFormModal'
import { Ship } from 'lucide-react'

interface FleetGridProps {
  boats: Boat[]
  filters: { port: string; type: string; capacity: string }
  onSearch: (filters: { port: string; type: string; capacity: string }) => void
}

export default function FleetGrid({ boats, filters, onSearch }: FleetGridProps) {
  const [selectedBoat, setSelectedBoat] = useState<Boat | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredBoats = boats.filter((boat) => {
    if (filters.port !== 'all' && boat.port !== filters.port) return false
    if (filters.type !== 'all' && boat.type !== filters.type) return false
    if (filters.capacity !== 'all') {
      if (boat.capacity < parseInt(filters.capacity, 10)) return false
    }
    return true
  })

  return (
    <section
      id="fleet"
      className="relative scroll-mt-20 border-t border-white/[0.04] bg-[#0a1628] py-24"
    >
      {/* Subtle glow separator */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-sky-400">
            Notre sélection
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
            Des bateaux d'exception pour naviguer dans le Golfe
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-400">
            Chaque embarcation est entretenue par des professionnels agréés du
            littoral morbihannais et livrée prête à naviguer.
          </p>
        </div>

        {/* Barre de recherche intégrée */}
        <div id="reserve" className="mb-12 scroll-mt-24">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Grid or empty */}
        {filteredBoats.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBoats.map((boat, i) => (
              <BoatCard
                key={boat.id}
                boat={boat}
                onRent={(b) => {
                  setSelectedBoat(b)
                  setIsModalOpen(true)
                }}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-sm flex-col items-center rounded-2xl border border-white/[0.06] bg-[#111d33] py-16 text-center">
            <Ship className="mb-4 h-10 w-10 text-sky-400/40" />
            <h3 className="font-heading text-lg font-semibold text-white">
              Aucun résultat
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Essayez d'élargir vos critères de recherche.
            </p>
          </div>
        )}
      </div>

      <LeadFormModal
        boat={selectedBoat}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedBoat(null)
        }}
      />
    </section>
  )
}
export type { Boat }
