-- Schéma de base de données pour la plateforme de location de bateaux - Golfe du Morbihan

-- Activer l'extension pour générer des UUIDs si ce n'est pas déjà fait
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table des bateaux
CREATE TABLE IF NOT EXISTS boats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('voilier', 'moteur', 'semi-rigide')),
  capacity INT NOT NULL CHECK (capacity > 0),
  base_price NUMERIC(10, 2) NOT NULL CHECK (base_price >= 0),
  port VARCHAR(100) NOT NULL,
  image_url TEXT NOT NULL,
  features JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table des partenaires (loueurs professionnels locaux)
CREATE TABLE IF NOT EXISTS partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  port_location VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table des leads (demandes de location)
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  boat_id UUID REFERENCES boats(id) ON DELETE SET NULL,
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50) NOT NULL,
  requested_dates JSONB NOT NULL, -- ex: { "start_date": "2026-08-01", "end_date": "2026-08-03" }
  message TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour accélérer les requêtes fréquentes
CREATE INDEX IF NOT EXISTS idx_boats_port ON boats(port);
CREATE INDEX IF NOT EXISTS idx_boats_type ON boats(type);
CREATE INDEX IF NOT EXISTS idx_leads_boat_id ON leads(boat_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
