'use client'

import { useState } from 'react'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Features from './Features'
import Destinations from './Destinations'
import AboutFounder from './AboutFounder'
import Testimonials from './Testimonials'
import FleetGrid, { Boat } from './FleetGrid'
import Activities from './Activities'
import FinalCTA from './FinalCTA'
import FloatingActions from '@/components/ui/FloatingActions'

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
      <HowItWorks />
      <Features />
      <Destinations />
      <AboutFounder />
      <Testimonials />
      <FleetGrid boats={boats} filters={filters} onSearch={setFilters} />
      <Activities />
      <FinalCTA />
      <FloatingActions />
    </>
  )
}
