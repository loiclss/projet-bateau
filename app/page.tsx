import { createClient } from '@/lib/supabase/server'
import { FALLBACK_BOATS } from '@/lib/constants/boats-fallback'
import HomeClient from '@/components/sections/HomeClient'
import { Boat } from '@/components/sections/FleetGrid'

export const revalidate = 0 // Permettre le rafraîchissement à chaque requête

export default async function Home() {
  let boats: Boat[] = []

  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('boats')
      .select('*')
      .order('base_price', { ascending: true })

    if (error || !data || data.length === 0) {
      console.warn("Supabase returned empty or error, using fallback. Error:", error)
      boats = FALLBACK_BOATS
    } else {
      // Formater les données de la base de données
      boats = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        type: item.type,
        capacity: item.capacity,
        base_price: Number(item.base_price),
        port: item.port,
        image_url: item.image_url,
        features: typeof item.features === 'string' ? JSON.parse(item.features) : item.features || {},
      }))
    }
  } catch (err) {
    console.warn("Failed to connect to Supabase, falling back to mock data:", err)
    boats = FALLBACK_BOATS
  }

  return <HomeClient boats={boats} />
}
