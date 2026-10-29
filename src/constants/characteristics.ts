/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CharacteristicMeta, CharacteristicKey } from '../types/civilization';

export const CHARACTERISTICS_META: CharacteristicMeta[] = [
  {
    key: 'stable_food_supply',
    label: 'Stable Food Supply & Agro-Ecology',
    shortLabel: 'Food Supply',
    category: 'Infrastructure & Survival',
    iconName: 'Sprout',
    guidingQuestion: 'How did the society engineer surplus calories and adapt to local water cycles?',
    thematicSignificance: 'The foundational precondition for all urban density: irrigation, domestication, terracing, and grain storage that freed humanity from nomadic subsistence.'
  },
  {
    key: 'advanced_cities',
    label: 'Advanced Cities & Urban Fabric',
    shortLabel: 'Urban Centers',
    category: 'Infrastructure & Survival',
    iconName: 'Landmark',
    guidingQuestion: 'What physical spatial forms, sanitary grids, and civic citadels housed the populace?',
    thematicSignificance: 'The physical concentration of human energy: defensive walls, public plazas, standardized brickwork, and municipal waterworks defining civic identity.'
  },
  {
    key: 'specialized_workers',
    label: 'Specialized Labor & Guild Systems',
    shortLabel: 'Specialized Labor',
    category: 'Infrastructure & Survival',
    iconName: 'Hammer',
    guidingQuestion: 'What granular division of labor emerged beyond basic farming?',
    thematicSignificance: 'The transition from self-sufficient foragers to specialized artisans, metallurgists, scribes, navigators, and architects.'
  },
  {
    key: 'complex_institutions',
    label: 'Complex Institutions & Governance',
    shortLabel: 'Institutions',
    category: 'Social & Governance',
    iconName: 'Crown',
    guidingQuestion: 'How were state authority, sacred priesthoods, and bureaucratic ministries organized?',
    thematicSignificance: 'The transition from kinship bands to divine kingships, legal senates, imperial civil service exams, and supranational entities.'
  },
  {
    key: 'social_classes',
    label: 'Social Stratification & Hierarchy',
    shortLabel: 'Social Hierarchy',
    category: 'Social & Governance',
    iconName: 'Layers',
    guidingQuestion: 'How was wealth, legal privilege, and power distributed across classes?',
    thematicSignificance: 'The structural sorting of people into dynasties, priests, warriors, free commoners, merchant guilds, and unfree laborers.'
  },
  {
    key: 'record_keeping_writing',
    label: 'Record Keeping & Writing Systems',
    shortLabel: 'Writing & Records',
    category: 'Knowledge & Expression',
    iconName: 'Scroll',
    guidingQuestion: 'Through what physical media and symbolic notation was institutional memory encoded?',
    thematicSignificance: 'From clay tokens and cuneiform to papyrus hieroglyphs, knotted khipu strings, and binary silicon servers that defy mortal memory limits.'
  },
  {
    key: 'art_architecture',
    label: 'Monumental Art & Architecture',
    shortLabel: 'Architecture',
    category: 'Knowledge & Expression',
    iconName: 'Columns3',
    guidingQuestion: 'What monumental public works, pyramids, domes, and sacred monuments expressed cultural power?',
    thematicSignificance: 'The tangible physical manifestation of imperial theology: ziggurats, hydraulic concrete vaults, corbelled temples, and steel skyscrapers.'
  },
  {
    key: 'advanced_technology',
    label: 'Advanced Technology & Applied Sciences',
    shortLabel: 'Technology',
    category: 'Knowledge & Expression',
    iconName: 'Cpu',
    guidingQuestion: 'What scientific breakthroughs, metallurgy, mechanical tools, or mathematics accelerated their progress?',
    thematicSignificance: 'Potters wheels, bronze alloys, base-60 and base-20 mathematics, paper, compasses, aqueducts, and microprocessors.'
  },
  {
    key: 'long_distance_trade',
    label: 'Long-Distance Trade Networks',
    shortLabel: 'Trade Networks',
    category: 'Macro Economics & Limits',
    iconName: 'Globe',
    guidingQuestion: 'How did the civilization bridge geographies to exchange surpluses for strategic luxury and raw goods?',
    thematicSignificance: 'The arteries of inter-regional contact: maritime Persian Gulf dhows, the trans-Eurasian Silk Road, Trans-Saharan camel caravans, and global container fleets.'
  },
  {
    key: 'artistic_material_culture',
    label: 'Artistic Material Culture & Regalia',
    shortLabel: 'Material Culture',
    category: 'Knowledge & Expression',
    iconName: 'Sparkles',
    guidingQuestion: 'What aesthetic mediums, lost-wax bronzes, funerary treasures, or textiles symbolized prestige?',
    thematicSignificance: 'The aesthetic soul of a civilization: lapis lazuli inlays, Benin lost-wax bronzes, gold funerary masks, Andean vicuña tapestries, and illuminated manuscripts.'
  },
  {
    key: 'socio_political_statecraft',
    label: 'Legal Statecraft & Administrative Power',
    shortLabel: 'Statecraft & Law',
    category: 'Social & Governance',
    iconName: 'Scale',
    guidingQuestion: 'What codified legal doctrines, citizenship policies, or taxation mechanisms held disparate peoples together?',
    thematicSignificance: 'The software of empire: Hammurabi and Ur-Nammu codes, Roman jurisprudence, Kouroukan Fuga constitutionalism, and salt-and-iron state monopolies.'
  },
  {
    key: 'resource_extraction_limits',
    label: 'Ecological Limits & Resource Pressures',
    shortLabel: 'Ecological Limits',
    category: 'Macro Economics & Limits',
    iconName: 'Flame',
    guidingQuestion: 'What environmental boundaries, soil depletion, deforestation, or climate vulnerabilities constrained growth?',
    thematicSignificance: 'The relentless ecological footprint: irrigation salinization, rainforest deforestation for lime plaster, mine pollution, and modern planetary carbon boundaries.'
  }
];

export const CHARACTERISTICS_MAP: Record<CharacteristicKey, CharacteristicMeta> =
  CHARACTERISTICS_META.reduce((acc, curr) => {
    acc[curr.key] = curr;
    return acc;
  }, {} as Record<CharacteristicKey, CharacteristicMeta>);
