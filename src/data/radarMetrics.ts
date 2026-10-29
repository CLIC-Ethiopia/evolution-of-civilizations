/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RadarAxis, RadarScores } from '../types/civilization';

export const RADAR_AXES: RadarAxis[] = [
  {
    key: 'agro_resilience',
    label: 'Agrarian & Ecological Resilience',
    shortLabel: 'Agro Ecology',
    description: 'Mastery of water management, terracing, crop variety, and buffer against famine cycles.'
  },
  {
    key: 'urban_hydraulics',
    label: 'Urban & Hydraulic Engineering',
    shortLabel: 'Urban Engineering',
    description: 'City planning, municipal drainage, monumental masonry, aqueducts, and seismic resilience.'
  },
  {
    key: 'governance_law',
    label: 'Institutional Codification & Law',
    shortLabel: 'Legal Statecraft',
    description: 'Constitutional codification, written legal codes, meritocratic bureaucracy, and judicial equity.'
  },
  {
    key: 'notation_density',
    label: 'Information Storage & Notation Density',
    shortLabel: 'Information Media',
    description: 'Sophistication of scripts, mathematical zero/fractions, libraries, paper, and digital servers.'
  },
  {
    key: 'trade_velocity',
    label: 'Inter-Regional Trade Velocity',
    shortLabel: 'Trade Velocity',
    description: 'Geographic span of maritime/overland trade arteries, merchant guilds, and currency adoption.'
  },
  {
    key: 'technology_mastery',
    label: 'Metallurgy & Applied Sciences',
    shortLabel: 'Science & Tools',
    description: 'Bronze/iron/lost-wax metallurgy, optics, mechanics, concrete, astronomy, and computation.'
  }
];

export const CIVILIZATION_RADAR_SCORES: Record<string, RadarScores> = {
  sumer: {
    agro_resilience: 68,
    urban_hydraulics: 84,
    governance_law: 88,
    notation_density: 92,
    trade_velocity: 78,
    technology_mastery: 82
  },
  ancient_egypt: {
    agro_resilience: 86,
    urban_hydraulics: 90,
    governance_law: 84,
    notation_density: 88,
    trade_velocity: 80,
    technology_mastery: 86
  },
  indus_valley: {
    agro_resilience: 82,
    urban_hydraulics: 96,
    governance_law: 82,
    notation_density: 74,
    trade_velocity: 86,
    technology_mastery: 80
  },
  han_dynasty: {
    agro_resilience: 88,
    urban_hydraulics: 88,
    governance_law: 94,
    notation_density: 96,
    trade_velocity: 90,
    technology_mastery: 92
  },
  classical_rome: {
    agro_resilience: 82,
    urban_hydraulics: 96,
    governance_law: 96,
    notation_density: 90,
    trade_velocity: 94,
    technology_mastery: 92
  },
  aksumite_empire: {
    agro_resilience: 80,
    urban_hydraulics: 84,
    governance_law: 82,
    notation_density: 84,
    trade_velocity: 92,
    technology_mastery: 86
  },
  maya: {
    agro_resilience: 76,
    urban_hydraulics: 86,
    governance_law: 80,
    notation_density: 96,
    trade_velocity: 74,
    technology_mastery: 88
  },
  islamic_golden_age: {
    agro_resilience: 86,
    urban_hydraulics: 88,
    governance_law: 90,
    notation_density: 98,
    trade_velocity: 98,
    technology_mastery: 96
  },
  mali_empire: {
    agro_resilience: 82,
    urban_hydraulics: 80,
    governance_law: 90,
    notation_density: 90,
    trade_velocity: 96,
    technology_mastery: 84
  },
  incan_empire: {
    agro_resilience: 98,
    urban_hydraulics: 94,
    governance_law: 92,
    notation_density: 84,
    trade_velocity: 78,
    technology_mastery: 88
  },
  kingdom_of_benin: {
    agro_resilience: 80,
    urban_hydraulics: 90,
    governance_law: 88,
    notation_density: 76,
    trade_velocity: 84,
    technology_mastery: 96
  },
  modern_industrial_digital: {
    agro_resilience: 72,
    urban_hydraulics: 96,
    governance_law: 88,
    notation_density: 100,
    trade_velocity: 100,
    technology_mastery: 100
  },
  classical_greece: {
    agro_resilience: 78,
    urban_hydraulics: 88,
    governance_law: 94,
    notation_density: 96,
    trade_velocity: 92,
    technology_mastery: 90
  },
  norse_vikings: {
    agro_resilience: 74,
    urban_hydraulics: 76,
    governance_law: 84,
    notation_density: 78,
    trade_velocity: 96,
    technology_mastery: 86
  },
  mongol_empire: {
    agro_resilience: 70,
    urban_hydraulics: 78,
    governance_law: 92,
    notation_density: 86,
    trade_velocity: 100,
    technology_mastery: 94
  },
  ottoman_empire: {
    agro_resilience: 88,
    urban_hydraulics: 94,
    governance_law: 94,
    notation_density: 92,
    trade_velocity: 96,
    technology_mastery: 94
  },
  british_empire: {
    agro_resilience: 84,
    urban_hydraulics: 96,
    governance_law: 96,
    notation_density: 98,
    trade_velocity: 100,
    technology_mastery: 98
  }
};
