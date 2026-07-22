'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginAction } from '@/app/actions/auth'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Anchor, Lock, AlertCircle } from 'lucide-react'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError('')
    const result = await loginAction(password)
    setLoading(false)
    if (result.success) { router.push('/admin'); router.refresh() }
    else setError(result.message || 'Erreur.')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a1628] px-4 relative overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-sky-500/[0.06] blur-[80px]" />

      <div className="relative z-10 w-full max-w-sm space-y-6 rounded-2xl bg-[#111d33]/80 backdrop-blur-xl ring-1 ring-white/[0.08] p-8 shadow-2xl">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/10 ring-1 ring-sky-500/20">
            <Anchor className="h-5 w-5 text-sky-400" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-white">Espace Loueur</h2>
          <p className="mt-1.5 text-sm text-slate-400">Connectez-vous pour gérer vos leads</p>
        </div>

        {error && (
          <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-400 ring-1 ring-red-500/20">
            <AlertCircle className="h-4 w-4 shrink-0" /><span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label className="text-slate-300 text-xs flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-sky-400" />Mot de passe</Label>
            <Input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}
              className="h-10 bg-[#0a1628] border-white/[0.06] text-white focus-visible:ring-sky-500/40" required />
          </div>
          <button type="submit" disabled={loading}
            className="w-full rounded-xl bg-sky-500 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 disabled:opacity-50">
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>

        <p className="text-center text-[0.65rem] text-slate-500">
          Par défaut : <code className="rounded bg-[#0a1628] px-1.5 py-0.5 text-sky-400/70">morbihan2026</code>
        </p>
      </div>
    </div>
  )
}
