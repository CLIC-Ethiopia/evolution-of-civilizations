/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CharacteristicKey =
  | 'stable_food_supply'
  | 'advanced_cities'
  | 'specialized_workers'
  | 'complex_institutions'
  | 'social_classes'
  | 'record_keeping_writing'
  | 'art_architecture'
  | 'advanced_technology'
  | 'long_distance_trade'
  | 'artistic_material_culture'
  | 'socio_political_statecraft'
  | 'resource_extraction_limits';

export type CharacteristicsRecord = Record<CharacteristicKey, string>;

export interface CollapseTransformation {
  type: string;
  detailed_analysis: string;
}

export interface Civilization {
  id: string;
  name: string;
  era: string;
  region: string;
  characteristics: CharacteristicsRecord;
  achievements: string[];
  collapse_or_transformation: CollapseTransformation;
  
  // Curatorial enriched fields
  startBCE: number; // e.g. -4500, positive for CE e.g. 1760
  endBCE: number;
  periodLabel: string;
  continent: 'Middle East' | 'Africa' | 'Asia' | 'Europe' | 'Americas' | 'Global';
  primaryImage: string;
  fallbackImage: string;
  imageCaption: string;
  imageCredit: string;
  curatorialQuote: string;
  tagline: string;
  keyInnovation: string;
  gallery?: ArchivalGalleryItem[];
}

export type ImageCategory = 'Architecture' | 'Artifact' | 'Artwork' | 'Metropolis' | 'Technology';

export interface ArchivalGalleryItem {
  id: string;
  title: string;
  category: ImageCategory;
  period: string;
  primarySrc: string;
  fallbackSrc: string;
  caption: string;
  credit: string;
}

export interface CharacteristicMeta {
  key: CharacteristicKey;
  label: string;
  shortLabel: string;
  category: 'Infrastructure & Survival' | 'Social & Governance' | 'Knowledge & Expression' | 'Macro Economics & Limits';
  iconName: string;
  guidingQuestion: string;
  thematicSignificance: string;
}

// Milestone phases for zoomed-in civilization timeline
export type MilestonePhase = 'genesis' | 'golden_age' | 'collapse';

export interface CivilizationMilestone {
  id: string;
  yearLabel: string;
  yearBCE: number;
  phase: MilestonePhase;
  phaseLabel: string;
  title: string;
  description: string;
  keyMechanic: string;
  culturalIconName: string;
}

export interface CivilizationLifeCycle {
  civilizationId: string;
  genesisSummary: string;
  peakSummary: string;
  collapseSummary: string;
  milestones: CivilizationMilestone[];
}

// Radar Chart Axes
export interface RadarAxis {
  key: string;
  label: string;
  shortLabel: string;
  description: string;
}

export type RadarScores = Record<string, number>; // axisKey -> 0-100 score

// Geographic Trade Partner
export interface TradePartnerConnection {
  partnerCivId?: string;
  partnerName: string;
  targetCoords: [number, number]; // [lat, lng]
  commodities: string;
  routeType: 'maritime' | 'overland';
}

// Geographic Cradle & Territorial Reach
export interface GeographicCradle {
  civilizationId: string;
  lat: number;
  lng: number;
  coordinates: { x: number; y: number }; // Fallback percentage 0-100
  riverSystem: string;
  geographicBiome: string;
  coreCapital: string;
  strategicAdvantage: string;
  territoryAreaKm2: string;
  modernCountries: string[];
  territorialPolygon: [number, number][]; // Array of [lat, lng] boundary vertices
  tradeConnections: TradePartnerConnection[];
}

// Cultural Lineage
export interface LineageLink {
  id: string;
  sourceCivId: string;
  targetCivId: string;
  transmittedVector: string;
  description: string;
  historicalPeriod: string;
}

// Museum Artifact Specimen
export interface ArtifactSpecimen {
  id: string;
  civilizationId: string;
  name: string;
  accessionNumber: string;
  era: string;
  medium: string;
  imageUrl: string;
  fallbackUrl: string;
  description: string;
  historicalSignificance: string;
}

export type ViewMode =
  | 'landing'
  | 'archive'
  | 'timeline'
  | 'evolution'
  | 'compare'
  | 'macro_matrix'
  | 'map'
  | 'lineage'
  | 'artifacts'
  | 'dossier';
