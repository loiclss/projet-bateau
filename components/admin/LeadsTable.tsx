'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { logoutAction } from '@/app/actions/auth'
import { updateLeadStatusAction } from '@/app/actions/leads'
import { Lead } from '@/lib/constants/leads-fallback'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { LogOut, Calendar, Phone, Mail, FileText, CheckCircle, Clock, AlertTriangle, ArrowUpDown } from 'lucide-react'

interface LeadsTableProps {
  initialLeads: Lead[]
}

export default function LeadsTable({ initialLeads }: LeadsTableProps) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads)
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const router = useRouter()

  const handleLogout = async () => {
    await logoutAction()
    router.push('/admin/login')
    router.refresh()
  }

  const handleStatusChange = async (leadId: string, newStatus: 'new' | 'contacted' | 'closed') => {
    setUpdatingId(leadId)
    const result = await updateLeadStatusAction(leadId, newStatus)
    setUpdatingId(null)

    if (result.success) {
      // Mettre à jour l'état local pour une réactivité instantanée
      setLeads((prevLeads) =>
        prevLeads.map((lead) =>
          lead.id === leadId ? { ...lead, status: newStatus } : lead
        )
      )
    } else {
      alert(result.message)
    }
  }

  // Filtrer les leads selon le statut sélectionné
  const filteredLeads = filterStatus === 'all'
    ? leads
    : leads.filter((lead) => lead.status === filterStatus)

  // Calculs statistiques
  const totalLeads = leads.length
  const newLeads = leads.filter((l) => l.status === 'new').length
  const contactedLeads = leads.filter((l) => l.status === 'contacted').length
  const closedLeads = leads.filter((l) => l.status === 'closed').length

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  const formatDateTime = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="space-y-8">
      {/* Barre d'entete du Dashboard */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white">Dashboard Admin</h1>
          <p className="text-sm text-slate-400">
            Gérer les demandes de location et contacter les prospects du Golfe
          </p>
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          className="border-white/[0.06] hover:bg-red-500/10 hover:text-red-400 text-slate-300 flex items-center space-x-2"
        >
          <LogOut className="h-4 w-4" />
          <span>Déconnexion</span>
        </Button>
      </div>

      {/* Cartes KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Leads */}
        <div className="bg-[#111d33] border border-white/[0.06] p-6 rounded-2xl flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Demandes</span>
            <h3 className="text-3xl font-black text-white mt-1">{totalLeads}</h3>
          </div>
          <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
            <ArrowUpDown className="h-6 w-6" />
          </div>
        </div>

        {/* Nouveaux */}
        <div className="bg-[#111d33] border border-white/[0.06] p-6 rounded-2xl flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Nouveaux Leads</span>
            <h3 className="text-3xl font-black text-sky-400 mt-1">{newLeads}</h3>
          </div>
          <div className="h-12 w-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
            <Clock className="h-6 w-6" />
          </div>
        </div>

        {/* Contactés */}
        <div className="bg-[#111d33] border border-white/[0.06] p-6 rounded-2xl flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">En cours</span>
            <h3 className="text-3xl font-black text-blue-500 mt-1">{contactedLeads}</h3>
          </div>
          <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
            <Phone className="h-6 w-6" />
          </div>
        </div>

        {/* Clos */}
        <div className="bg-[#111d33] border border-white/[0.06] p-6 rounded-2xl flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Traités / Clos</span>
            <h3 className="text-3xl font-black text-emerald-500 mt-1">{closedLeads}</h3>
          </div>
          <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
            <CheckCircle className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Filtres de la table */}
      <div className="flex justify-between items-center bg-[#111d33]/60 p-4 rounded-xl border border-white/[0.06]">
        <span className="text-sm font-semibold text-slate-400">Filtrer les leads</span>
        <div className="w-48">
          <Select value={filterStatus} onValueChange={(val) => setFilterStatus(val || 'all')}>
            <SelectTrigger className="bg-[#0a1628] border-white/[0.06] text-white">
              <SelectValue placeholder="Tous les statuts" />
            </SelectTrigger>
            <SelectContent className="bg-[#0a1628] border-white/[0.06] text-white">
              <SelectItem value="all">Tous ({totalLeads})</SelectItem>
              <SelectItem value="new">Nouveaux ({newLeads})</SelectItem>
              <SelectItem value="contacted">En cours ({contactedLeads})</SelectItem>
              <SelectItem value="closed">Traités ({closedLeads})</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table principale */}
      <div className="bg-[#111d33]/60 border border-white/[0.06] rounded-2xl overflow-hidden shadow-xl">
        {filteredLeads.length > 0 ? (
          <Table>
            <TableHeader className="bg-[#0a1628]/60 border-b border-white/[0.06]">
              <TableRow>
                <TableHead className="text-slate-300">Date</TableHead>
                <TableHead className="text-slate-300">Client</TableHead>
                <TableHead className="text-slate-300">Bateau & Port</TableHead>
                <TableHead className="text-slate-300">Dates demandées</TableHead>
                <TableHead className="text-slate-300">Message</TableHead>
                <TableHead className="text-slate-300 w-44">Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.map((lead) => (
                <TableRow
                  key={lead.id}
                  className="border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors"
                >
                  {/* Date de creation */}
                  <TableCell className="text-xs text-slate-400 font-medium">
                    {formatDateTime(lead.created_at)}
                  </TableCell>

                  {/* Coordonnées Client */}
                  <TableCell className="space-y-1">
                    <div className="font-bold text-white text-sm">{lead.client_name}</div>
                    <div className="flex flex-col space-y-0.5 text-xs text-slate-400">
                      <a href={`mailto:${lead.client_email}`} className="flex items-center space-x-1 hover:text-sky-400 transition-colors">
                        <Mail className="h-3.5 w-3.5" />
                        <span>{lead.client_email}</span>
                      </a>
                      <a href={`tel:${lead.client_phone}`} className="flex items-center space-x-1 hover:text-sky-400 transition-colors">
                        <Phone className="h-3.5 w-3.5" />
                        <span>{lead.client_phone}</span>
                      </a>
                    </div>
                  </TableCell>

                  {/* Bateau & Port */}
                  <TableCell>
                    <div className="font-semibold text-white text-sm">
                      {lead.boats ? lead.boats.name : 'Bateau inconnu'}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      Départ : {lead.boats ? lead.boats.port : 'Non spécifié'}
                    </div>
                  </TableCell>

                  {/* Dates demandées */}
                  <TableCell>
                    <div className="flex items-center space-x-1 text-slate-300 text-xs font-semibold bg-[#0a1628] px-2 py-1 rounded border border-white/[0.06] w-fit">
                      <Calendar className="h-3.5 w-3.5 text-sky-400" />
                      <span>
                        {formatDate(lead.requested_dates.start_date)} - {formatDate(lead.requested_dates.end_date)}
                      </span>
                    </div>
                  </TableCell>

                  {/* Message */}
                  <TableCell className="max-w-xs">
                    {lead.message ? (
                      <div className="text-xs text-slate-300 leading-normal line-clamp-2 hover:line-clamp-none transition-all cursor-help flex items-start space-x-1">
                        <FileText className="h-4 w-4 shrink-0 text-slate-500 mt-0.5" />
                        <span>{lead.message}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-500 italic">Aucun message</span>
                    )}
                  </TableCell>

                  {/* Changement de statut */}
                  <TableCell>
                    <Select
                      disabled={updatingId === lead.id}
                      value={lead.status}
                      onValueChange={(val) => {
                        if (val === 'new' || val === 'contacted' || val === 'closed') {
                          handleStatusChange(lead.id, val)
                        }
                      }}
                    >
                      <SelectTrigger
                        className={`border-none h-8 text-xs font-bold rounded-lg shadow-sm focus:ring-0 ${
                          lead.status === 'new'
                            ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                            : lead.status === 'contacted'
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        }`}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a1628] border-white/[0.06] text-white">
                        <SelectItem value="new" className="text-sky-400 font-semibold focus:text-sky-400">
                          Nouveau
                        </SelectItem>
                        <SelectItem value="contacted" className="text-blue-400 font-semibold focus:text-blue-400">
                          En cours
                        </SelectItem>
                        <SelectItem value="closed" className="text-emerald-400 font-semibold focus:text-emerald-400">
                          Traité / Clos
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-16 text-slate-400">
            <AlertTriangle className="h-12 w-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white">Aucune demande</h3>
            <p className="text-sm">Il n'y a pas de lead enregistré avec ce statut pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}
export type { Lead }
