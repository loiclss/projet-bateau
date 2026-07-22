import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { FALLBACK_LEADS } from '@/lib/constants/leads-fallback'
import LeadsTable from '@/components/admin/LeadsTable'
import { Lead } from '@/components/admin/LeadsTable'

export const revalidate = 0
export const runtime = 'edge'

export default async function AdminPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  if (session?.value !== 'true') redirect('/admin/login')

  let leads: Lead[] = []
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('leads')
      .select('*, boats(name, port)')
      .order('created_at', { ascending: false })
    if (error || !data || data.length === 0) { leads = FALLBACK_LEADS }
    else { leads = data as Lead[] }
  } catch { leads = FALLBACK_LEADS }

  return (
    <div className="min-h-screen bg-[#0a1628] text-slate-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <LeadsTable initialLeads={leads} />
      </div>
    </div>
  )
}
