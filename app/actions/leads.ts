'use server'

import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

// Schéma de validation pour la création d'un lead
const leadSchema = z.object({
  boatId: z.string().uuid({ message: "Bateau invalide." }),
  clientName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  clientEmail: z.string().email({ message: "Adresse email invalide." }),
  clientPhone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, {
    message: "Numéro de téléphone français invalide (ex: 06 12 34 56 78).",
  }),
  startDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Date de début invalide.",
  }),
  endDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Date de fin invalide.",
  }),
  message: z.string().optional(),
}).refine((data) => {
  const start = new Date(data.startDate)
  const end = new Date(data.endDate)
  return end >= start
}, {
  message: "La date de fin doit être postérieure ou égale à la date de début.",
  path: ["endDate"],
})

export async function createLeadAction(prevState: any, formData: FormData) {
  try {
    const rawData = {
      boatId: formData.get('boatId'),
      clientName: formData.get('clientName'),
      clientEmail: formData.get('clientEmail'),
      clientPhone: formData.get('clientPhone'),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
      message: formData.get('message') || '',
    }

    // Validation Zod
    const validatedData = leadSchema.safeParse(rawData)

    if (!validatedData.success) {
      // Retourner les erreurs formatées
      const errors = validatedData.error.flatten().fieldErrors
      return {
        success: false,
        errors,
        message: "Veuillez corriger les erreurs dans le formulaire."
      }
    }

    const { boatId, clientName, clientEmail, clientPhone, startDate, endDate, message } = validatedData.data

    // Initialisation du client Supabase Server
    const supabase = await createClient()

    // Insertion du lead dans la base de données
    const { error } = await supabase.from('leads').insert({
      boat_id: boatId,
      client_name: clientName,
      client_email: clientEmail,
      client_phone: clientPhone,
      requested_dates: { start_date: startDate, end_date: endDate },
      message: message || null,
      status: 'new',
    })

    if (error) {
      console.error("Erreur insertion Supabase:", error)
      return {
        success: false,
        message: "Une erreur est survenue lors de l'enregistrement de votre demande."
      }
    }

    return {
      success: true,
      message: "Votre demande de réservation a été envoyée avec succès !"
    }
  } catch (error) {
    console.error("Erreur serveur action:", error)
    return {
      success: false,
      message: "Une erreur interne du serveur est survenue."
    }
  }
}

// Action pour mettre à jour le statut d'un lead (Admin)
export async function updateLeadStatusAction(leadId: string, status: 'new' | 'contacted' | 'closed') {
  try {
    const supabase = await createClient()

    const { error } = await supabase
      .from('leads')
      .update({ status })
      .eq('id', leadId)

    if (error) {
      console.error("Erreur mise à jour statut:", error)
      return { success: false, message: "Impossible de modifier le statut." }
    }

    return { success: true, message: "Statut mis à jour avec succès." }
  } catch (error) {
    console.error("Erreur update status action:", error)
    return { success: false, message: "Erreur serveur." }
  }
}
