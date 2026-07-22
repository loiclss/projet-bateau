'use client'

import { useState } from 'react'
import Hero from './Hero'
import Features from './Features'
import Destinations from './Destinations'
import FleetGrid, { Boat } from './FleetGrid'
import Activities from './Activities'

interface HomeClientProps {
  boats: Boat[]
}

export default function HomeClient({ boats }: HomeClientProps) {
  const [filters, setFilters] = useState({
    port: 'all',
    type: 'all',
    capacity: 'all',
  })

  return (
    <>
      <Hero />
      <Features />
      <Destinations />
      <FleetGrid boats={boats} filters={filters} onSearch={setFilters} />
      <Activities />
    </>
  )
}
