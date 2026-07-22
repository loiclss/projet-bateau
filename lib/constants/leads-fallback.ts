import { FALLBACK_BOATS } from './boats-fallback'

export interface Lead {
  id: string
  boat_id: string
  client_name: string
  client_email: string
  client_phone: string
  requested_dates: {
    start_date: string
    end_date: string
  }
  message: string | null
  status: 'new' | 'contacted' | 'closed'
  created_at: string
  boats?: {
    name: string
    port: string
  } | null
}

export const FALLBACK_LEADS: Lead[] = [
  {
    id: 'l1a2b3c4-d5e6-7f8a-9b0c-1d2e3f4a5b6c',
    boat_id: FALLBACK_BOATS[0].id, // Hermine des Îles
    client_name: 'Stéphane Le Gall',
    client_email: 'stephane.legall@gmail.com',
    client_phone: '06 12 84 93 02',
    requested_dates: {
      start_date: '2026-08-10',
      end_date: '2026-08-15'
    },
    message: 'Bonjour, nous souhaitons louer le voilier pour faire le tour de Houat et Hoëdic. Nous sommes tous équipiers confirmés.',
    status: 'new',
    created_at: '2026-07-10T09:15:00.000Z',
    boats: {
      name: FALLBACK_BOATS[0].name,
      port: FALLBACK_BOATS[0].port
    }
  },
  {
    id: 'l2b3c4d5-e6f7-8a9b-0c1d-2e3f4a5b6c7d',
    boat_id: FALLBACK_BOATS[1].id, // Morbihan Express
    client_name: 'Sophie Dubois',
    client_email: 's.dubois@yahoo.fr',
    client_phone: '07 89 43 21 00',
    requested_dates: {
      start_date: '2026-07-25',
      end_date: '2026-07-26'
    },
    message: 'Recherche de sensations fortes pour un anniversaire. Besoin d\'un mat de ski nautique.',
    status: 'contacted',
    created_at: '2026-07-09T14:30:00.000Z',
    boats: {
      name: FALLBACK_BOATS[1].name,
      port: FALLBACK_BOATS[1].port
    }
  },
  {
    id: 'l3c4d5e6-f7a8-9b0c-1d2e-3f4a5b6c7d8e',
    boat_id: FALLBACK_BOATS[3].id, // Crouesty Rider
    client_name: 'Marc Lefevre',
    client_email: 'm.lefevre@outlook.com',
    client_phone: '06 43 21 98 76',
    requested_dates: {
      start_date: '2026-08-01',
      end_date: '2026-08-08'
    },
    message: 'Nous serions intéressés par une sortie côtière en famille.',
    status: 'closed',
    created_at: '2026-07-08T11:05:00.000Z',
    boats: {
      name: FALLBACK_BOATS[3].name,
      port: FALLBACK_BOATS[3].port
    }
  },
  {
    id: 'l4d5e6f7-a8b9-0c1d-2e3f-4a5b6c7d8e9f',
    boat_id: FALLBACK_BOATS[2].id, // Gwenenn Blue
    client_name: 'Hélène Thomas',
    client_email: 'helene.thomas@wanadoo.fr',
    client_phone: '02 97 45 67 89',
    requested_dates: {
      start_date: '2026-08-20',
      end_date: '2026-08-22'
    },
    message: 'Est-il possible d\'avoir un skipper professionnel ? Nous débutons en voile.',
    status: 'new',
    created_at: '2026-07-10T11:45:00.000Z',
    boats: {
      name: FALLBACK_BOATS[2].name,
      port: FALLBACK_BOATS[2].port
    }
  }
]
