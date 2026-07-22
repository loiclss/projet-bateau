'use client'

import { useState } from 'react'
import { Calendar, Users, Mail, Phone, User, MessageSquare, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { createLeadAction } from '@/app/actions/leads'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

interface Boat {
  id: string; name: string; type: string; capacity: number; base_price: number; port: string; image_url: string
}

interface LeadFormModalProps {
  boat: Boat | null; isOpen: boolean; onClose: () => void
}

export default function LeadFormModal({ boat, isOpen, onClose }: LeadFormModalProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [guests, setGuests] = useState('2')
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState('')

  if (!boat) return null

  const today = new Date().toISOString().split('T')[0]

  const validateStep1 = () => {
    const e: Record<string, string> = {}
    if (!startDate) e.startDate = 'Requis'
    if (!endDate) e.endDate = 'Requis'
    if (startDate && endDate && new Date(endDate) < new Date(startDate)) e.endDate = 'Date invalide'
    const n = parseInt(guests, 10)
    if (isNaN(n) || n <= 0) e.guests = 'Invalide'
    else if (n > boat.capacity) e.guests = `Max ${boat.capacity}`
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e: Record<string, string> = {}
    if (!clientName.trim()) e.clientName = 'Requis'
    if (!clientEmail.trim() || !/\S+@\S+\.\S+/.test(clientEmail)) e.clientEmail = 'Email invalide'
    if (!clientPhone.trim() || !/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(clientPhone.trim())) e.clientPhone = 'Tél. invalide'
    if (Object.keys(e).length > 0) { setErrors(e); return }

    setLoading(true); setSubmitError('')
    const fd = new FormData()
    fd.append('boatId', boat.id); fd.append('clientName', clientName)
    fd.append('clientEmail', clientEmail); fd.append('clientPhone', clientPhone)
    fd.append('startDate', startDate); fd.append('endDate', endDate)
    fd.append('message', message)

    const result = await createLeadAction(null, fd)
    setLoading(false)
    if (result.success) { setSuccess(true); setTimeout(() => { reset(); onClose() }, 3000) }
    else { setSubmitError(result.message || "Erreur.") }
  }

  const reset = () => {
    setStep(1); setSuccess(false); setStartDate(''); setEndDate(''); setGuests('2')
    setClientName(''); setClientEmail(''); setClientPhone(''); setMessage('')
    setErrors({}); setSubmitError('')
  }

  const inputCls = "h-10 bg-[#0a1628] border-white/[0.06] text-white placeholder:text-slate-500 focus-visible:ring-sky-500/40"

  return (
    <Sheet open={isOpen} onOpenChange={(o) => { if (!o) { reset(); onClose() } }}>
      <SheetContent className="w-full sm:max-w-md border-l border-white/[0.06] bg-[#111d33] text-slate-100 flex flex-col overflow-y-auto">
        <div>
          <SheetHeader className="pb-5 border-b border-white/[0.06]">
            <SheetTitle className="font-heading text-xl font-bold text-white">Vérifier les disponibilités</SheetTitle>
            <SheetDescription className="text-slate-400">
              <span className="text-sky-400 font-medium">{boat.name}</span> · {boat.port}
            </SheetDescription>
          </SheetHeader>

          {success ? (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
              <CheckCircle2 className="h-14 w-14 text-emerald-400" />
              <h3 className="font-heading text-xl font-bold text-white">Demande envoyée</h3>
              <p className="text-sm text-slate-400 max-w-xs">Le loueur à {boat.port} vous recontactera sous 24 h.</p>
            </div>
          ) : (
            <div className="py-6">
              {/* Steps */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className={`flex items-center gap-1.5 text-xs font-semibold ${step === 1 ? 'text-sky-400' : 'text-emerald-400'}`}>
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] font-bold ${step === 1 ? 'bg-sky-500 text-white' : 'bg-emerald-500 text-white'}`}>1</span>
                  Séjour
                </div>
                <div className="h-px w-6 bg-white/10" />
                <div className={`flex items-center gap-1.5 text-xs font-semibold ${step === 2 ? 'text-sky-400' : 'text-slate-500'}`}>
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] font-bold ${step === 2 ? 'bg-sky-500 text-white' : 'bg-[#0a1628] text-slate-500 ring-1 ring-white/10'}`}>2</span>
                  Contact
                </div>
              </div>

              {submitError && (
                <div className="mb-5 flex items-start gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-400 ring-1 ring-red-500/20">
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" /><span>{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.div key="s1" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label className="text-slate-300 text-xs flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-sky-400" />Début</Label>
                        <Input type="date" min={today} value={startDate} onChange={e => setStartDate(e.target.value)} className={inputCls} />
                        {errors.startDate && <p className="text-xs text-red-400">{errors.startDate}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-slate-300 text-xs flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-sky-400" />Fin</Label>
                        <Input type="date" min={startDate || today} value={endDate} onChange={e => setEndDate(e.target.value)} className={inputCls} />
                        {errors.endDate && <p className="text-xs text-red-400">{errors.endDate}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-slate-300 text-xs flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-sky-400" />Passagers (max {boat.capacity})</Label>
                        <Input type="number" min="1" max={boat.capacity} value={guests} onChange={e => setGuests(e.target.value)} className={inputCls} />
                        {errors.guests && <p className="text-xs text-red-400">{errors.guests}</p>}
                      </div>
                      <button type="button" onClick={() => { if (validateStep1()) setStep(2) }}
                        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400">
                        Continuer <ArrowRight className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="s2" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label className="text-slate-300 text-xs flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-sky-400" />Nom complet</Label>
                        <Input placeholder="Jean Dupont" value={clientName} onChange={e => setClientName(e.target.value)} className={inputCls} />
                        {errors.clientName && <p className="text-xs text-red-400">{errors.clientName}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-slate-300 text-xs flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-sky-400" />Email</Label>
                        <Input type="email" placeholder="jean@exemple.fr" value={clientEmail} onChange={e => setClientEmail(e.target.value)} className={inputCls} />
                        {errors.clientEmail && <p className="text-xs text-red-400">{errors.clientEmail}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-slate-300 text-xs flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-sky-400" />Téléphone</Label>
                        <Input type="tel" placeholder="06 12 34 56 78" value={clientPhone} onChange={e => setClientPhone(e.target.value)} className={inputCls} />
                        {errors.clientPhone && <p className="text-xs text-red-400">{errors.clientPhone}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-slate-300 text-xs flex items-center gap-1.5"><MessageSquare className="h-3.5 w-3.5 text-sky-400" />Message (optionnel)</Label>
                        <textarea rows={3} placeholder="Besoin d'un skipper, pêche…" value={message} onChange={e => setMessage(e.target.value)}
                          className="w-full rounded-md bg-[#0a1628] border border-white/[0.06] p-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" />
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <button type="button" onClick={() => setStep(1)}
                          className="flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.08] py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5">
                          <ArrowLeft className="h-4 w-4" /> Retour
                        </button>
                        <button type="submit" disabled={loading}
                          className="rounded-xl bg-sky-500 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 disabled:opacity-50">
                          {loading ? 'Envoi…' : 'Envoyer'}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          )}
        </div>

        {!success && (
          <div className="mt-auto border-t border-white/[0.06] pt-4 px-1">
            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500 mb-1">Tarif indicatif</p>
            <p className="text-lg font-bold text-white">{Math.round(boat.base_price)} € <span className="text-sm font-normal text-slate-400">/ jour</span></p>
            <p className="mt-1 text-[0.65rem] text-slate-500 leading-relaxed">Le loueur partenaire établira un devis personnalisé.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
