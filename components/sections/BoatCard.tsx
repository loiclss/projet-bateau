'use client'

import { motion } from 'framer-motion'
import { Users, Ruler, Zap } from 'lucide-react'

export interface Boat {
  id: string
  name: string
  type: string
  capacity: number
  base_price: number
  port: string
  image_url: string
  features: {
    length?: string
    cabins?: number
    berths?: number
    engine?: string
    year?: number
    equipment?: string[]
  }
}

interface BoatCardProps {
  boat: Boat
  onRent: (boat: Boat) => void
  index: number
}

const TYPE_LABELS: Record<string, string> = {
  voilier: 'Voilier',
  moteur: 'Moteur',
  'semi-rigide': 'Semi-rigide',
}

export default function BoatCard({ boat, onRent, index }: BoatCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.07, 0.28) }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#111d33] ring-1 ring-white/[0.06] transition-all duration-300 hover:ring-sky-500/20 hover:shadow-2xl hover:shadow-sky-500/[0.04]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={boat.image_url}
          alt={boat.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111d33] via-transparent to-transparent" />

        {/* Type badge */}
        <span className="absolute left-4 top-4 rounded-full bg-[#0a1628]/70 backdrop-blur-md px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-sky-300 ring-1 ring-sky-400/20">
          {TYPE_LABELS[boat.type] || boat.type}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-5 p-5">
        <div>
          {/* Port label */}
          <p className="mb-1 text-[0.7rem] font-medium uppercase tracking-widest text-sky-400/70">
            {boat.port}
          </p>
          <h3 className="font-heading text-lg font-semibold leading-snug text-white group-hover:text-sky-300 transition-colors duration-200">
            {boat.name}
          </h3>

          {/* Specs row */}
          <div className="mt-3 flex items-center gap-4 text-[0.78rem] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-sky-400/60" />
              {boat.capacity} pers.
            </span>
            {boat.features.length && (
              <span className="flex items-center gap-1.5">
                <Ruler className="h-3.5 w-3.5 text-sky-400/60" />
                {boat.features.length}
              </span>
            )}
            {boat.features.engine && (
              <span className="flex items-center gap-1.5 truncate">
                <Zap className="h-3.5 w-3.5 text-sky-400/60" />
                <span className="truncate">{boat.features.engine}</span>
              </span>
            )}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-end justify-between border-t border-white/[0.06] pt-4">
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-wider text-slate-500">
              À partir de
            </p>
            <p className="font-heading text-2xl font-bold text-white">
              {Math.round(boat.base_price)}<span className="text-sm font-normal text-slate-400">€<span className="text-slate-500">/j</span></span>
            </p>
          </div>
          <button
            onClick={() => onRent(boat)}
            className="rounded-lg bg-sky-500/10 px-4 py-2.5 text-[0.8rem] font-semibold text-sky-400 ring-1 ring-sky-500/20 transition-all duration-200 hover:bg-sky-500 hover:text-white hover:shadow-lg hover:shadow-sky-500/20"
          >
            Disponibilités →
          </button>
        </div>
      </div>
    </motion.article>
  )
}
