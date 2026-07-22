'use client'

import { useState } from 'react'
import { MapPin, Ship, Users, Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SearchBarProps {
  onSearch: (filters: { port: string; type: string; capacity: string }) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [port, setPort] = useState('all')
  const [type, setType] = useState('all')
  const [capacity, setCapacity] = useState('all')

  const handleSearch = () => {
    onSearch({ port, type, capacity })
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl bg-[#142C39]/90 backdrop-blur-2xl ring-1 ring-white/[0.1] p-5 shadow-2xl shadow-black/40">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {/* Port */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-slate-400">
            <MapPin className="h-3 w-3 text-sky-400" />
            Port
          </label>
          <Select value={port} onValueChange={(v) => setPort(v || 'all')}>
            <SelectTrigger className="h-10 border-white/[0.1] bg-[#142C39] text-sm text-[var(--color-ecume)] focus:ring-[var(--color-ocre)]/40">
              <SelectValue placeholder="Tous les ports" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les ports</SelectItem>
              <SelectItem value="Vannes">Vannes</SelectItem>
              <SelectItem value="Arradon">Arradon</SelectItem>
              <SelectItem value="Le Crouesty">Le Crouesty</SelectItem>
              <SelectItem value="Port-Blanc">Port-Blanc</SelectItem>
              <SelectItem value="Larmor-Baden">Larmor-Baden</SelectItem>
              <SelectItem value="Port-Navalo">Port-Navalo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Type */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-slate-300">
            <Ship className="h-3 w-3 text-[var(--color-ocre)]" />
            Type
          </label>
          <Select value={type} onValueChange={(v) => setType(v || 'all')}>
            <SelectTrigger className="h-10 border-white/[0.1] bg-[#142C39] text-sm text-[var(--color-ecume)] focus:ring-[var(--color-ocre)]/40">
              <SelectValue placeholder="Tous les types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="voilier">Voilier</SelectItem>
              <SelectItem value="moteur">Moteur</SelectItem>
              <SelectItem value="semi-rigide">Semi-rigide</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Capacité */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-slate-300">
            <Users className="h-3 w-3 text-[var(--color-ocre)]" />
            Passagers
          </label>
          <Select value={capacity} onValueChange={(v) => setCapacity(v || 'all')}>
            <SelectTrigger className="h-10 border-white/[0.1] bg-[#142C39] text-sm text-[var(--color-ecume)] focus:ring-[var(--color-ocre)]/40">
              <SelectValue placeholder="Tous les passagers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Peu importe</SelectItem>
              <SelectItem value="2">2+ pers.</SelectItem>
              <SelectItem value="6">6+ pers.</SelectItem>
              <SelectItem value="8">8+ pers.</SelectItem>
              <SelectItem value="10">10+ pers.</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-cuivre)] py-3 text-[0.85rem] font-semibold text-white shadow-lg shadow-[var(--color-cuivre)]/20 transition-all hover:brightness-110 hover:shadow-[var(--color-cuivre)]/30 sm:w-auto sm:ml-auto sm:px-8"
      >
        <Search className="h-4 w-4" />
        Rechercher
      </button>
    </div>
  )
}
