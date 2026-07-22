-- Données de test (seed) pour la plateforme de location de bateaux

-- Vider les tables existantes (si nécessaire, dans le bon ordre des contraintes)
TRUNCATE TABLE leads CASCADE;
TRUNCATE TABLE boats CASCADE;
TRUNCATE TABLE partners CASCADE;

-- Insertion des bateaux
INSERT INTO boats (id, name, type, capacity, base_price, port, image_url, features) VALUES
(
  'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
  'Hermine des Îles',
  'voilier',
  8,
  350.00,
  'Arradon',
  'https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=800&q=80',
  '{"length": "12.5m", "cabins": 3, "berths": 6, "engine": "40ch", "year": 2021, "equipment": ["GPS Traceur", "Pilote automatique", "Taud de soleil", "Annexe avec moteur", "Douchette de pont", "Guindeau électrique"]}'::jsonb
),
(
  'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
  'Morbihan Express',
  'semi-rigide',
  12,
  280.00,
  'Vannes',
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  '{"length": "7.8m", "cabins": 0, "berths": 0, "engine": "250ch Yamaha", "year": 2022, "equipment": ["Mat de ski", "GPS/Sondeur", "Taud de soleil", "Echelle de bain", "Prise USB", "Bain de soleil avant"]}'::jsonb
),
(
  'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
  'Gwenenn Blue',
  'voilier',
  6,
  240.00,
  'Larmor-Baden',
  'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=800&q=80',
  '{"length": "10.2m", "cabins": 2, "berths": 4, "engine": "29ch", "year": 2018, "equipment": ["Grand-voile sur enrouleur", "Génois", "Spinnaker", "Echelle de bain", "Cuisine équipée", "Chauffage"]}'::jsonb
),
(
  'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
  'Crouesty Rider',
  'moteur',
  8,
  320.00,
  'Le Crouesty',
  'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80',
  '{"length": "8.5m", "cabins": 1, "berths": 2, "engine": "300ch Mercury", "year": 2023, "equipment": ["Cabine double", "Frigo", "GPS/Sondeur tactile", "Propulseur d''étrave", "Taud de camping", "Bain de soleil arrière"]}'::jsonb
),
(
  'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
  'Golfe Cruiser 7.5',
  'moteur',
  7,
  260.00,
  'Port-Blanc',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
  '{"length": "7.4m", "cabins": 1, "berths": 2, "engine": "225ch Suzuki", "year": 2020, "equipment": ["Guindeau électrique", "Douchette de cockpit", "Radio Bluetooth", "Table de cockpit", "Bain de soleil", "WC chimique"]}'::jsonb
),
(
  'f6a7b8c9-d0e1-2f3a-4b5c-6d7e8f9a0b1c',
  'Symphonie Marine',
  'voilier',
  10,
  490.00,
  'La Trinité-sur-Mer',
  'https://images.unsplash.com/photo-1505080856163-267d741d7e9f?auto=format&fit=crop&w=800&q=80',
  '{"length": "14.3m", "cabins": 4, "berths": 8, "engine": "57ch Yanmar", "year": 2022, "equipment": ["Propulseur d''étrave", "Four & Réchaud", "Plateforme de bain basculante", "GPS grand écran", "Winches électriques"]}'::jsonb
),
(
  'a2b3c4d5-e6f7-8a9b-0c1d-2e3f4a5b6c7d',
  'Arradon Swift',
  'semi-rigide',
  10,
  220.00,
  'Arradon',
  'https://images.unsplash.com/photo-1614093661276-8cc074e5021e?auto=format&fit=crop&w=800&q=80',
  '{"length": "6.8m", "cabins": 0, "berths": 0, "engine": "175ch Evinrude", "year": 2019, "equipment": ["Echelle de bain", "Roll-bar alu", "GPS Sondeur", "Taquets d''amarrage", "Glacière passive", "Support de cannes"]}'::jsonb
),
(
  'b3c4d5e6-f7a8-9b0c-1d2e-3f4a5b6c7d8e',
  'Locmariaquer Sun',
  'moteur',
  6,
  190.00,
  'Locmariaquer',
  'https://images.unsplash.com/photo-1605281317010-fe5fed93f402?auto=format&fit=crop&w=800&q=80',
  '{"length": "6.2m", "cabins": 0, "berths": 0, "engine": "115ch Honda", "year": 2017, "equipment": ["Taud de soleil", "Echelle de bain", "Sondeur de pêche", "Table amovible", "Mat de ski", "Prise 12V"]}'::jsonb
),
(
  'c4d5e6f7-a8b9-0c1d-2e3f-4a5b6c7d8e9f',
  'Zodiac Milieu',
  'semi-rigide',
  8,
  180.00,
  'Port-Navalo',
  'https://images.unsplash.com/photo-1520262454473-a1a82276a574?auto=format&fit=crop&w=800&q=80',
  '{"length": "5.8m", "cabins": 0, "berths": 0, "engine": "100ch Yamaha", "year": 2021, "equipment": ["Echelle de bain", "Console de pilotage", "Réservoir intégré", "Equipement de sécurité", "Feux de navigation"]}'::jsonb
),
(
  'd5e6f7a8-b9c0-1d2e-3f4a-5b6c7d8e9f0a',
  'Grand Archipel Cat',
  'voilier',
  12,
  680.00,
  'Vannes',
  'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80',
  '{"length": "13.9m", "cabins": 4, "berths": 8, "engine": "2x45ch", "year": 2023, "equipment": ["Catamaran spacieux", "Dessalinisateur", "Panneaux solaires", "Trampoline avant", "Cuisine extérieure", "Climatisation salon"]}'::jsonb
);

-- Insertion des partenaires (loueurs locaux professionnels)
INSERT INTO partners (company_name, contact_email, port_location) VALUES
('Morbihan Charter Pro', 'contact@morbihan-charter.fr', 'Vannes'),
('Arradon Nautic Services', 'location@arradon-nautic.com', 'Arradon'),
('Crouesty Yachting', 'info@crouesty-yachting.com', 'Le Crouesty'),
('Baden Voile Service', 'resa@baden-voile.fr', 'Port-Blanc');
