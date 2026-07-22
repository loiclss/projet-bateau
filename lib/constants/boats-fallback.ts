import { Boat } from '@/components/sections/FleetGrid'

export const FALLBACK_BOATS: Boat[] = [
  {
    id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
    name: 'Hermine des Îles',
    type: 'voilier',
    capacity: 8,
    base_price: 350.00,
    port: 'Arradon',
    image_url: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=800&q=80',
    features: {
      length: '12.5m',
      cabins: 3,
      berths: 6,
      engine: '40ch',
      year: 2021,
      equipment: ['GPS Traceur', 'Pilote automatique', 'Taud de soleil', 'Annexe avec moteur', 'Douchette de pont', 'Guindeau électrique']
    }
  },
  {
    id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    name: 'Morbihan Express',
    type: 'semi-rigide',
    capacity: 12,
    base_price: 280.00,
    port: 'Vannes',
    image_url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    features: {
      length: '7.8m',
      cabins: 0,
      berths: 0,
      engine: '250ch Yamaha',
      year: 2022,
      equipment: ['Mat de ski', 'GPS/Sondeur', 'Taud de soleil', 'Echelle de bain', 'Prise USB', 'Bain de soleil avant']
    }
  },
  {
    id: 'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
    name: 'Gwenenn Blue',
    type: 'voilier',
    capacity: 6,
    base_price: 240.00,
    port: 'Larmor-Baden',
    image_url: 'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=800&q=80',
    features: {
      length: '10.2m',
      cabins: 2,
      berths: 4,
      engine: '29ch',
      year: 2018,
      equipment: ['Grand-voile sur enrouleur', 'Génois', 'Spinnaker', 'Echelle de bain', 'Cuisine équipée', 'Chauffage']
    }
  },
  {
    id: 'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
    name: 'Crouesty Rider',
    type: 'moteur',
    capacity: 8,
    base_price: 320.00,
    port: 'Le Crouesty',
    image_url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80',
    features: {
      length: '8.5m',
      cabins: 1,
      berths: 2,
      engine: '300ch Mercury',
      year: 2023,
      equipment: ['Cabine double', 'Frigo', 'GPS/Sondeur tactile', 'Propulseur d\'étrave', 'Taud de camping', 'Bain de soleil arrière']
    }
  },
  {
    id: 'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
    name: 'Golfe Cruiser 7.5',
    type: 'moteur',
    capacity: 7,
    base_price: 260.00,
    port: 'Port-Blanc',
    image_url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
    features: {
      length: '7.4m',
      cabins: 1,
      berths: 2,
      engine: '225ch Suzuki',
      year: 2020,
      equipment: ['Guindeau électrique', 'Douchette de cockpit', 'Radio Bluetooth', 'Table de cockpit', 'Bain de soleil', 'WC chimique']
    }
  },
  {
    id: 'f6a7b8c9-d0e1-2f3a-4b5c-6d7e8f9a0b1c',
    name: 'Symphonie Marine',
    type: 'voilier',
    capacity: 10,
    base_price: 490.00,
    port: 'La Trinité-sur-Mer',
    image_url: 'https://images.unsplash.com/photo-1505080856163-267d741d7e9f?auto=format&fit=crop&w=800&q=80',
    features: {
      length: '14.3m',
      cabins: 4,
      berths: 8,
      engine: '57ch Yanmar',
      year: 2022,
      equipment: ['Propulseur d\'étrave', 'Four & Réchaud', 'Plateforme de bain basculante', 'GPS grand écran', 'Winches électriques']
    }
  },
  {
    id: 'a2b3c4d5-e6f7-8a9b-0c1d-2e3f4a5b6c7d',
    name: 'Arradon Swift',
    type: 'semi-rigide',
    capacity: 10,
    base_price: 220.00,
    port: 'Arradon',
    image_url: 'https://images.unsplash.com/photo-1614093661276-8cc074e5021e?auto=format&fit=crop&w=800&q=80',
    features: {
      length: '6.8m',
      cabins: 0,
      berths: 0,
      engine: '175ch Evinrude',
      year: 2019,
      equipment: ['Echelle de bain', 'Roll-bar alu', 'GPS Sondeur', 'Taquets d\'amarrage', 'Glacière passive', 'Support de cannes']
    }
  },
  {
    id: 'b3c4d5e6-f7a8-9b0c-1d2e-3f4a5b6c7d8e',
    name: 'Locmariaquer Sun',
    type: 'moteur',
    capacity: 6,
    base_price: 190.00,
    port: 'Locmariaquer',
    image_url: 'https://images.unsplash.com/photo-1605281317010-fe5fed93f402?auto=format&fit=crop&w=800&q=80',
    features: {
      length: '6.2m',
      cabins: 0,
      berths: 0,
      engine: '115ch Honda',
      year: 2017,
      equipment: ['Taud de soleil', 'Echelle de bain', 'Sondeur de pêche', 'Table amovible', 'Mat de ski', 'Prise 12V']
    }
  },
  {
    id: 'c4d5e6f7-a8b9-0c1d-2e3f-4a5b6c7d8e9f',
    name: 'Zodiac Milieu',
    type: 'semi-rigide',
    capacity: 8,
    base_price: 180.00,
    port: 'Port-Navalo',
    image_url: 'https://images.unsplash.com/photo-1520262454473-a1a82276a574?auto=format&fit=crop&w=800&q=80',
    features: {
      length: '5.8m',
      cabins: 0,
      berths: 0,
      engine: '100ch Yamaha',
      year: 2021,
      equipment: ['Echelle de bain', 'Console de pilotage', 'Réservoir intégré', 'Equipement de sécurité', 'Feux de navigation']
    }
  },
  {
    id: 'd5e6f7a8-b9c0-1d2e-3f4a-5b6c7d8e9f0a',
    name: 'Grand Archipel Cat',
    type: 'voilier',
    capacity: 12,
    base_price: 680.00,
    port: 'Vannes',
    image_url: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80',
    features: {
      length: '13.9m',
      cabins: 4,
      berths: 8,
      engine: '2x45ch',
      year: 2023,
      equipment: ['Catamaran spacieux', 'Dessalinisateur', 'Panneaux solaires', 'Trampoline avant', 'Cuisine extérieure', 'Climatisation salon']
    }
  }
]
