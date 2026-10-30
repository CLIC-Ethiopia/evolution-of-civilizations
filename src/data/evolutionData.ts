/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type InnovationDomain =
  | 'technology'
  | 'philosophy_law'
  | 'agronomy_energy'
  | 'science_script'
  | 'trade_statecraft';

export interface TransmissionEdge {
  id: string;
  earlierCivId: string;
  earlierCivName: string;
  successorCivId: string;
  successorCivName: string;
  breakthrough: string;
  howUtilizedAndAdapted: string;
  transmissionVector: string;
  domain: InnovationDomain;
  historicalPeriod: string;
  significance: 'foundational' | 'catalytic' | 'incremental';
}

export interface ConvergentEvolutionCase {
  id: string;
  title: string;
  domain: InnovationDomain;
  description: string;
  independentCultures: {
    civId: string;
    civName: string;
    era: string;
    manifestation: string;
  }[];
  underlyingInsight: string;
}

export interface InnovationGenealogyStep {
  stepNumber: number;
  yearLabel: string;
  civId: string;
  civName: string;
  breakthroughTitle: string;
  bottleneckBroken: string;
  mechanism: string;
  transmissionToNext: string;
}

export interface InnovationGenealogy {
  id: string;
  title: string;
  subtitle: string;
  domain: InnovationDomain;
  summary: string;
  epochSpan: string;
  steps: InnovationGenealogyStep[];
  evolutionaryVerdict: string;
}

export interface TransmissionVectorDossier {
  id: string;
  title: string;
  subtitle: string;
  category: 'Translation' | 'Trade Corridors' | 'Military Collision' | 'Postal Networks' | 'Diaspora';
  historicalPeriod: string;
  keyActors: string[];
  keyGeography: string;
  mechanismSummary: string;
  primaryTransmissions: string[];
  systemicImpact: string;
  historicalCaseStudy: string;
}

export interface CollapseAdaptationStudy {
  id: string;
  title: string;
  era: string;
  focalCivilization: string;
  crisisCatalyst: string;
  systemicFailureMechanic: string;
  humanAdaptationVector: string;
  preservedKnowledgeSeed: string;
  evolutionaryRebirth: string;
  tainterComplexityAnalysis: string;
}

export interface CliodynamicPrinciple {
  id: string;
  theorist: string;
  conceptName: string;
  coreLaw: string;
  mechanism: string;
  historicalValidation: string;
  modernRelevance: string;
}

// -------------------------------------------------------------
// 1. TRANSMISSION EDGES (Earlier -> Successor Lineages)
// -------------------------------------------------------------
export const TRANSMISSION_EDGES: TransmissionEdge[] = [
  {
    id: 'edge-sumer-greece',
    earlierCivId: 'sumer',
    earlierCivName: 'Sumer & Mesopotamia',
    successorCivId: 'classical_greece',
    successorCivName: 'Classical Greece',
    breakthrough: 'Base-60 Sexagesimal Mathematics, Astrometry & Arch Vaulting',
    howUtilizedAndAdapted: 'Greeks secularized Babylonian celestial omen archives into geometric planetary orbits (Hipparchus, Ptolemy) and formalized 360° trigonometric circles.',
    transmissionVector: 'Levantine Phoenician maritime trade & Ionian Anatolian frontier contact',
    domain: 'science_script',
    historicalPeriod: 'c. 1200 – 600 BCE',
    significance: 'foundational'
  },
  {
    id: 'edge-sumer-islamic',
    earlierCivId: 'sumer',
    earlierCivName: 'Sumer & Mesopotamia',
    successorCivId: 'islamic_golden_age',
    successorCivName: 'Islamic Golden Age',
    breakthrough: 'Alluvial Qanat/Canal Hydraulics, Legal Codes & Brick Vaulting',
    howUtilizedAndAdapted: 'Abbasid engineers revived ancient Tigris-Euphrates irrigation networks in Baghdad (Sawad alluvial plain) and integrated Mesopotamian cadastral tax surveys.',
    transmissionVector: 'Territorial continuity and indigenous Sasanian/Babylonian agrarian guilds',
    domain: 'agronomy_energy',
    historicalPeriod: 'c. 750 – 1000 CE',
    significance: 'foundational'
  },
  {
    id: 'edge-egypt-greece',
    earlierCivId: 'ancient_egypt',
    earlierCivName: 'Ancient Egypt',
    successorCivId: 'classical_greece',
    successorCivName: 'Classical Greece',
    breakthrough: 'Papyrus Writing Substrate, Monumental Stone Ashlar Masonry & Geometry',
    howUtilizedAndAdapted: 'Thales and Pythagoras studied in Naukratis and Memphis, transforming Egyptian rope-stretcher flood-boundary surveying into deductive Euclidean proofs.',
    transmissionVector: 'Naukratis Greek trading colony in the Nile Delta and Mediterranean trade',
    domain: 'philosophy_law',
    historicalPeriod: 'c. 650 – 400 BCE',
    significance: 'foundational'
  },
  {
    id: 'edge-egypt-rome',
    earlierCivId: 'ancient_egypt',
    earlierCivName: 'Ancient Egypt',
    successorCivId: 'classical_rome',
    successorCivName: 'Classical Rome',
    breakthrough: 'Solar 365.25-Day Calendar, Imperial Granary Distribution & Marble Veneering',
    howUtilizedAndAdapted: 'Julius Caesar consulted Alexandrian astronomer Sosigenes to eliminate the lunar calendar drift, creating the Julian Solar Calendar that regulated the Western world for 1,600 years.',
    transmissionVector: 'Roman conquest of Ptolemaic Egypt (30 BCE) and imperial scholar integration',
    domain: 'science_script',
    historicalPeriod: '46 BCE – 30 CE',
    significance: 'foundational'
  },
  {
    id: 'edge-greece-rome',
    earlierCivId: 'classical_greece',
    earlierCivName: 'Classical Greece',
    successorCivId: 'classical_rome',
    successorCivName: 'Classical Rome',
    breakthrough: 'Stoic Philosophy, Rhetoric, Columnar Orders & Republican Citizenship',
    howUtilizedAndAdapted: 'Romans synthesized Greek philosophical dialectic into practical jurisprudence (ius gentium), civic rhetoric (Cicero), and architectural orders for imperial civic basilicas.',
    transmissionVector: 'Graecia capta conquest, Magna Graecia (Southern Italy) cultural diffusion',
    domain: 'philosophy_law',
    historicalPeriod: 'c. 250 BCE – 100 CE',
    significance: 'foundational'
  },
  {
    id: 'edge-greece-islamic',
    earlierCivId: 'classical_greece',
    earlierCivName: 'Classical Greece',
    successorCivId: 'islamic_golden_age',
    successorCivName: 'Islamic Golden Age',
    breakthrough: 'Aristotelian Logic, Galenic Medicine & Ptolemaic Astronomy',
    howUtilizedAndAdapted: 'Abbasid scholars translated the complete Greek corpus into Arabic, critically reconciling Aristotelian causality with theism, correcting Galen’s anatomical errors, and improving Ptolemy’s planetary models (Ibn al-Haytham, Ibn Sina).',
    transmissionVector: 'Baghdad House of Wisdom (Bayt al-Hikma) state-funded translation movement',
    domain: 'science_script',
    historicalPeriod: 'c. 786 – 1050 CE',
    significance: 'catalytic'
  },
  {
    id: 'edge-han-islamic',
    earlierCivId: 'han_dynasty',
    earlierCivName: 'Han Dynasty & Imperial China',
    successorCivId: 'islamic_golden_age',
    successorCivName: 'Islamic Golden Age',
    breakthrough: 'Macerated Rag Papermaking & Silk Road Commercial Network',
    howUtilizedAndAdapted: 'Islamic artisans substituted Chinese mulberry bark with hemp and linen rags, watermill-pulverized fiber into thin, durable rag paper, establishing mass scriptoriums in Samarkand and Baghdad.',
    transmissionVector: 'Battle of Talas (751 CE): Chinese artisans captured by Abbasid forces',
    domain: 'technology',
    historicalPeriod: '751 – 850 CE',
    significance: 'catalytic'
  },
  {
    id: 'edge-islamic-europe',
    earlierCivId: 'islamic_golden_age',
    earlierCivName: 'Islamic Golden Age',
    successorCivId: 'british_empire',
    successorCivName: 'British Empire & Western Europe',
    breakthrough: 'Algebra, Astrolabes, Optics (Empirical Method) & Double-Entry Accounting',
    howUtilizedAndAdapted: 'European scholars in Toledo translated Arabic texts into Latin. Al-Khwarizmi’s arithmetic replaced Roman numerals with Indo-Arabic digits; Ibn al-Haytham’s optics stimulated Bacon and Galileo’s empirical scientific revolution.',
    transmissionVector: 'Toledo Translation College, Norman Sicily, and Crusader Mediterranean trade',
    domain: 'science_script',
    historicalPeriod: 'c. 1100 – 1500 CE',
    significance: 'foundational'
  },
  {
    id: 'edge-mongol-ottoman',
    earlierCivId: 'mongol_empire',
    earlierCivName: 'Mongol Empire',
    successorCivId: 'ottoman_empire',
    successorCivName: 'Ottoman Empire',
    breakthrough: 'Gunpowder Artillery Siege Integration, Postal Relay (Yam) & Steppe Cavalry',
    howUtilizedAndAdapted: 'Ottomans synthesized nomadic mobility with Byzantine siege defenses and Balkan metallurgy, creating the world’s first permanent gunpowder standing corps (the Janissaries and Royal Cannon Foundry).',
    transmissionVector: 'Ilkhanate Mongol rule over Anatolia and Eurasian arms dissemination',
    domain: 'trade_statecraft',
    historicalPeriod: 'c. 1300 – 1453 CE',
    significance: 'catalytic'
  },
  {
    id: 'edge-norse-britain',
    earlierCivId: 'norse_vikings',
    earlierCivName: 'Norse / Viking Age',
    successorCivId: 'british_empire',
    successorCivName: 'British Empire',
    breakthrough: 'Oceanic Clinker-Hull Ship Architecture, Common Assembly Jurisprudence & Global Cabotage',
    howUtilizedAndAdapted: 'Danelaw settlements embedded popular assembly trial structures ("Thing" assemblies) into English Common Law, and clinker-lap naval construction gave rise to English deep-sea ocean navigation.',
    transmissionVector: 'Danelaw territorial colonization, Anglo-Scandinavian integration',
    domain: 'philosophy_law',
    historicalPeriod: 'c. 865 – 1066 CE',
    significance: 'foundational'
  },
  {
    id: 'edge-ottoman-britain',
    earlierCivId: 'ottoman_empire',
    earlierCivName: 'Ottoman Empire',
    successorCivId: 'british_empire',
    successorCivName: 'British Empire',
    breakthrough: 'Eastern Overland Spice Monopoly (The Great Oceanic Diversion)',
    howUtilizedAndAdapted: 'Ottoman customs tolls on the Levant trade route forced North-Western European kingdoms to innovate open-ocean caravel navigation, leading to global circum-African and Atlantic maritime expansion.',
    transmissionVector: 'Commercial embargoes and high Levant customs tariffs driving exploration',
    domain: 'trade_statecraft',
    historicalPeriod: '1453 – 1600 CE',
    significance: 'catalytic'
  },
  {
    id: 'edge-mali-benin',
    earlierCivId: 'mali_empire',
    earlierCivName: 'Mali Empire',
    successorCivId: 'kingdom_of_benin',
    successorCivName: 'Kingdom of Benin',
    breakthrough: 'Cire-Perdue (Lost-Wax) Bronze Casting & Trans-Regional Metal Trade',
    howUtilizedAndAdapted: 'Edo artisans under Oba Oguola refined lost-wax smelting to an apex of aesthetic relief plaques, utilizing copper and brass ingots traded down the Niger river corridor.',
    transmissionVector: 'Ife-Edo metalworking master-apprentice guilds and Niger River commerce',
    domain: 'technology',
    historicalPeriod: 'c. 1280 – 1500 CE',
    significance: 'foundational'
  },
  {
    id: 'edge-incan-modern',
    earlierCivId: 'incan_empire',
    earlierCivName: 'Incan Empire',
    successorCivId: 'modern_industrial_digital',
    successorCivName: 'Modern Global Age',
    breakthrough: 'Freeze-Drying (Chuño), Micro-Climatic Agronomy & Terraced Water Retention',
    howUtilizedAndAdapted: 'Modern freeze-drying technology used in food preservation, pharmaceuticals, and space exploration directly replicates the Andean freeze-thaw sub-zero sublimation process pioneered by the Inca.',
    transmissionVector: 'Botanical and ethnographic transmission following the Spanish Columbian Exchange',
    domain: 'agronomy_energy',
    historicalPeriod: '1532 CE – 20th Century',
    significance: 'incremental'
  },
  {
    id: 'edge-maya-modern',
    earlierCivId: 'maya_civilization',
    earlierCivName: 'Maya Civilization',
    successorCivId: 'modern_industrial_digital',
    successorCivName: 'Modern Global Age',
    breakthrough: 'Independent Mathematical Zero & Long-Count Orbital Chronometry',
    howUtilizedAndAdapted: 'Proved to modern historians and epistemologists that foundational abstractions (zero as a positional place value and operator) can arise through pure intellectual convergence without cross-oceanic contact.',
    transmissionVector: 'Epigraphic decipherment (Knorozov, Proskouriakoff) and Mesoamerican archaeology',
    domain: 'science_script',
    historicalPeriod: '1950 – Present',
    significance: 'foundational'
  },
  {
    id: 'edge-britain-modern',
    earlierCivId: 'british_empire',
    earlierCivName: 'British Empire',
    successorCivId: 'modern_industrial_digital',
    successorCivName: 'Modern Global Age',
    breakthrough: 'Steam-Powered Mechanization, Joint-Stock Corporate Capital & Global Telegraph Cables',
    howUtilizedAndAdapted: 'The global telegraph lines laid along British oceanic coaling routes formed the direct physical and legal topology of the modern trans-Atlantic fiber-optic internet.',
    transmissionVector: 'Industrial export, colonial infrastructure and global market integration',
    domain: 'technology',
    historicalPeriod: '1840 – 1990 CE',
    significance: 'foundational'
  }
];

// -------------------------------------------------------------
// 2. CONVERGENT EVOLUTION CASES (Parallel Innovation in Isolation)
// -------------------------------------------------------------
export const CONVERGENT_CASES: ConvergentEvolutionCase[] = [
  {
    id: 'conv-zero',
    title: 'Independent Invention of Mathematical Zero',
    domain: 'science_script',
    description: 'Zero was invented independently by cultures thousands of miles and centuries apart with absolutely zero contact, demonstrating the universal necessity of nothingness in high-order arithmetic.',
    independentCultures: [
      {
        civId: 'maya_civilization',
        civName: 'Classic Maya',
        era: 'c. 36 BCE (Tres Zapotes / Maya Preclassic)',
        manifestation: 'Shell glyph representing zero as an absolute count, positional placeholder, and completion of astronomical cycles in base-20 vigesimal.'
      },
      {
        civId: 'sumer',
        civName: 'Babylonia / Mesopotamia',
        era: 'c. 300 BCE (Seleucid period)',
        manifestation: 'Two angled cuneiform wedges used as an empty space placeholder in base-60 sexagesimal place value.'
      },
      {
        civId: 'islamic_golden_age',
        civName: 'Ancient India / Gupta (transmitted via Islam)',
        era: 'c. 458 – 628 CE (Brahmagupta)',
        manifestation: 'Shunya (dot/circle) formulated not just as a blank placeholder, but as a full algebraic number subject to arithmetic laws (addition, subtraction, multiplication).'
      }
    ],
    underlyingInsight: 'When economic complexity and astronomical calendars require scaling beyond finger-counting, societies hit an algorithmic wall unless they invent a symbol for the void.'
  },
  {
    id: 'conv-pyramids',
    title: 'The Monumental Stepped Pyramid & Ziggurat',
    domain: 'technology',
    description: 'Civilizations across Africa, the Middle East, Asia, and the Americas all erected enormous pyramidal step temples. Rather than prehistoric contact, this is a universal triumph of structural physics.',
    independentCultures: [
      {
        civId: 'ancient_egypt',
        civName: 'Old Kingdom Egypt',
        era: 'c. 2670 BCE (Djoser Step Pyramid)',
        manifestation: 'Limestone mastaba stacking by Imhotep, evolving into true smooth-sided casing at Giza as an eternal solar stairway for the pharaoh.'
      },
      {
        civId: 'sumer',
        civName: 'Sumer (Ur & Uruk)',
        era: 'c. 2100 BCE (Ur-Nammu)',
        manifestation: 'Mudbrick baked ziggurats terraced upward to lift the city’s high priest closer to the celestial heavens above humid river mists.'
      },
      {
        civId: 'maya_civilization',
        civName: 'Classic Maya (Tikal, Palenque)',
        era: 'c. 200 – 800 CE',
        manifestation: 'Steep limestone stepped pyramids crowned with triadic sanctuaries, engineered to project acoustics across massive ceremonial plazas.'
      }
    ],
    underlyingInsight: 'Before tension steel and reinforced concrete, gravity limits how high humans can build with compression stone or clay. Tapering mass inward in a triangular silhouette is the only way to surpass 50 meters.'
  },
  {
    id: 'conv-agriculture',
    title: 'Independent Origins of Farming & Agrarian Domestication',
    domain: 'agronomy_energy',
    description: 'Homo sapiens transitioned from foraging to sedentary crop domestication in at least 7 distinct bioregions with distinct staple botanicals.',
    independentCultures: [
      {
        civId: 'sumer',
        civName: 'Fertile Crescent',
        era: 'c. 9500 BCE',
        manifestation: 'Einkorn wheat, emmer, two-row barley, sheep and goats domesticated along alluvial river ecotones.'
      },
      {
        civId: 'han_dynasty',
        civName: 'Yellow & Yangtze Valleys',
        era: 'c. 8000 BCE',
        manifestation: 'Foxtail millet in the arid north loess; wet paddy rice and pigs in the warm southern wetlands.'
      },
      {
        civId: 'maya_civilization',
        civName: 'Mesoamerican Highlands',
        era: 'c. 4500 BCE',
        manifestation: 'Teosinte wild grass selectively bred over generations into giant multi-kernel Maize (corn), complemented by beans and squash (The Three Sisters).'
      },
      {
        civId: 'incan_empire',
        civName: 'Andean Highlands',
        era: 'c. 3500 BCE',
        manifestation: 'Frost-resistant potato tubers (over 3,000 varieties), quinoa, and llama pack pastoralism at 4,000m altitudes.'
      }
    ],
    underlyingInsight: 'The stabilization of post-glacial Holocene climate enabled human populations to achieve demographic density that hunter-gatherer mobility could no longer sustain.'
  }
];

// -------------------------------------------------------------
// 3. INNOVATION GENEALOGIES (Millennial Evolutionary Threads)
// -------------------------------------------------------------
export const INNOVATION_GENEALOGIES: InnovationGenealogy[] = [
  {
    id: 'gen-script',
    title: 'The Genealogy of Script & Information Substrates',
    subtitle: 'From Clay Tokens to Phonetic Alphabets to Movable Type and Digital Unicode',
    domain: 'science_script',
    epochSpan: '3500 BCE – Present (5,500+ Years)',
    summary: 'How humanity externalized memory: shifting from cumbersome aristocratic logograms to egalitarian phonetic alphabets that democratized collective learning.',
    steps: [
      {
        stepNumber: 1,
        yearLabel: 'c. 3500 BCE',
        civId: 'sumer',
        civName: 'Sumer (Uruk)',
        breakthroughTitle: 'Clay Tokens & Proto-Cuneiform',
        bottleneckBroken: 'Human brain memory capacity could no longer track agricultural surpluses and temple grain distribution.',
        mechanism: 'Reeds pressed into wet river silt to form pictographic tallies and bullae envelope seals.',
        transmissionToNext: 'Transmitted to Akkadian, Babylonian, and Elamite administrations across Mesopotamia.'
      },
      {
        stepNumber: 2,
        yearLabel: 'c. 1850 BCE',
        civId: 'ancient_egypt',
        civName: 'Sinai Peninsula (Proto-Sinaitic)',
        breakthroughTitle: 'The Phonetic Acrophonic Leap',
        bottleneckBroken: 'Hieroglyphs required 800+ memorized symbols, restricting literacy to high palace elites.',
        mechanism: 'Canaanite turquoise miners borrowed Egyptian hieroglyphs but used them purely for sounds (e.g. "Aleph" = ox head symbol for the "A" consonant sound).',
        transmissionToNext: 'Carried along Levantine trade coasts to the merchant cities of Tyre, Byblos, and Sidon.'
      },
      {
        stepNumber: 3,
        yearLabel: 'c. 1050 BCE',
        civId: 'classical_greece',
        civName: 'Phoenicia $\\rightarrow$ Archaic Greece',
        breakthroughTitle: 'The True Alphabet (Vowels Added)',
        bottleneckBroken: 'Semitic consonantal abjads could not accurately capture Indo-European inflections, philosophy, and poetry.',
        mechanism: 'Greeks took the 22 Phoenician consonants and repurposed unused Semitic guttural sounds into dedicated vowels (Alpha, Epsilon, Iota, Omicron, Upsilon).',
        transmissionToNext: 'Transmitted via Etruscan Italy to the Latin Republic of Rome.'
      },
      {
        stepNumber: 4,
        yearLabel: 'c. 500 BCE – 100 CE',
        civId: 'classical_rome',
        civName: 'Classical Rome',
        breakthroughTitle: 'Monumental Latin Capitals & The Parchment Codex',
        bottleneckBroken: 'Papyrus rolls were fragile, un-indexed, and difficult to flip through during legal trials or administrative searches.',
        mechanism: 'Bound animal skins (vellum codex) with standardized serif typography created the modern page-turning book architecture.',
        transmissionToNext: 'Preserved in monastic scriptoriums following Rome’s political fall.'
      },
      {
        stepNumber: 5,
        yearLabel: 'c. 751 – 1000 CE',
        civId: 'islamic_golden_age',
        civName: 'Abbasid Caliphate',
        breakthroughTitle: 'Linen Rag Paper & Mass Urban Book Markets',
        bottleneckBroken: 'Vellum parchment was exorbitantly expensive (requiring hundreds of sheep skins per single Bible or Quran).',
        mechanism: 'Watermill-pulverized cotton and flax rag paper dropped the cost of book production by 90%, creating urban library cultures with 400,000+ volumes in Baghdad and Cordoba.',
        transmissionToNext: 'Transmitted across Muslim Spain into Western Europe via paper mills in Xativa and Fabriano.'
      },
      {
        stepNumber: 6,
        yearLabel: '1440 – 1455 CE',
        civId: 'british_empire',
        civName: 'Renaissance Europe (Mainz / London)',
        breakthroughTitle: 'Movable Lead-Antimony Type & Printing Press',
        bottleneckBroken: 'Manual manuscript copying introduced transcription errors and took a year per book.',
        mechanism: 'Johannes Gutenberg combined durable punch-cut metal alloy type, oil-based ink, and an adapted wooden screw wine press.',
        transmissionToNext: 'Ignited the Protestant Reformation, Scientific Revolution, and modern newspaper press.'
      },
      {
        stepNumber: 7,
        yearLabel: '1948 – Present',
        civId: 'modern_industrial_digital',
        civName: 'Modern Digital Civilization',
        breakthroughTitle: 'ASCII, Unicode & Global Distributed Hypertext',
        bottleneckBroken: 'Physical ink on paper was bounded by transport physics and localized storage.',
        mechanism: 'Claude Shannon’s information theory and universal UTF-8 bit encoding mapped every historical human script into electrical charges and fiber-optic light pulses.',
        transmissionToNext: 'AI neural networks and interplanetary satellite transmission.'
      }
    ],
    evolutionaryVerdict: 'Knowledge transmission accelerated from 1 book per year per scribe to billions of queries per second across the planetary mesh.'
  },
  {
    id: 'gen-zero',
    title: 'The Genealogy of Zero, Calculation & Algorithmic Reason',
    subtitle: 'From Babylonian Placeholders to Indian Shunya, Islamic Algebra, and Turing Machines',
    domain: 'science_script',
    epochSpan: '2000 BCE – Present (4,000+ Years)',
    summary: 'The conceptual evolution of Nothingness into an operator that unlocked algebra, infinitesimal calculus, and computational software.',
    steps: [
      {
        stepNumber: 1,
        yearLabel: 'c. 1800 BCE',
        civId: 'sumer',
        civName: 'Babylonia',
        breakthroughTitle: 'Positional Place-Value in Sexagesimal',
        bottleneckBroken: 'Egyptian and Roman additive tallies (e.g. III, MCMLXXX) were terrible for complex division and multiplication.',
        mechanism: 'Values depended on their column position. A blank space was left between numbers to distinguish 60 from 3600.',
        transmissionToNext: 'Influenced Indian and Hellenistic astronomers who charted planetary cycles.'
      },
      {
        stepNumber: 2,
        yearLabel: 'c. 628 CE',
        civId: 'islamic_golden_age',
        civName: 'Classical India (Brahmagupta) $\\rightarrow$ Baghdad',
        breakthroughTitle: 'Zero as an Algebraic Number (Shunya)',
        bottleneckBroken: 'Zero was previously only considered an absence or empty gap, never a number that could be added or multiplied.',
        mechanism: 'Brahmagupta’s *Brahmasphutasiddhanta* established: "When zero is added to a number or subtracted, the number remains unchanged. A number multiplied by zero is zero."',
        transmissionToNext: 'Translated into Arabic at Baghdad under Caliph al-Mansur.'
      },
      {
        stepNumber: 3,
        yearLabel: 'c. 820 CE',
        civId: 'islamic_golden_age',
        civName: 'Abbasid Baghdad (Al-Khwarizmi)',
        breakthroughTitle: 'Al-Jabr (Algebra) & The Decimal Algorithm',
        bottleneckBroken: 'Geometric proofs were required for every calculation, making practical inheritance and cadastral land law difficult.',
        mechanism: 'Muhammad ibn Musa al-Khwarizmi published *The Compendious Book on Calculation by Completion and Balancing* (*al-Jabr*), introducing symbolic operations and systematic algorithms (his Latinized name: *Algoritmi*).',
        transmissionToNext: 'Carried to Italy by merchant Leonardo Fibonacci via his 1202 book *Liber Abaci*.'
      },
      {
        stepNumber: 4,
        yearLabel: '1202 – 1687 CE',
        civId: 'british_empire',
        civName: 'European Scientific Awakening',
        breakthroughTitle: 'Indo-Arabic Commercial Math & Newton-Leibniz Calculus',
        bottleneckBroken: 'Static algebra could not model acceleration, planetary gravity, or rates of continuous change.',
        mechanism: 'Isaac Newton and Gottfried Wilhelm Leibniz developed infinitesimal calculus by operating at the limit as intervals approach zero ($dx \\to 0$).',
        transmissionToNext: 'Directly applied to celestial mechanics, thermodynamics, and steam engine ballistics.'
      },
      {
        stepNumber: 5,
        yearLabel: '1936 – Present',
        civId: 'modern_industrial_digital',
        civName: 'Alan Turing & Von Neumann',
        breakthroughTitle: 'The Universal Turing Machine & Binary Boolean Logic',
        bottleneckBroken: 'Mechanical calculating gears were constrained to single hardwired equations.',
        mechanism: 'Boolean logic reduced all mathematical operations to physical binary switches of 0 and 1, creating programmable stored-memory computing.',
        transmissionToNext: 'Quantum computing and neural language models.'
      }
    ],
    evolutionaryVerdict: 'Treating zero as a mathematical object was the single intellectual leap that allowed abstract calculation to transcend physical counting pebbles.'
  },
  {
    id: 'gen-metallurgy',
    title: 'The Metallurgy Ladder: From Native Copper to Blast Steel',
    subtitle: 'The Material Substrate of Warfare, Agriculture, and Civilizational Energy Capture',
    domain: 'technology',
    epochSpan: '4500 BCE – Present (6,500+ Years)',
    summary: 'The chemical mastery of furnace heat: how unlocking higher smelting temperatures dictated the rise and fall of imperial armies and skyscraper cities.',
    steps: [
      {
        stepNumber: 1,
        yearLabel: 'c. 4500 BCE',
        civId: 'sumer',
        civName: 'Chalcolithic Anatolia & Sumer',
        breakthroughTitle: 'Cold-Hammered & Smelted Native Copper',
        bottleneckBroken: 'Flint and obsidian tools shattered easily and could not be reforged or recycled.',
        mechanism: 'Malachite ore heated in wood campfires yielded malleable metallic copper that could be cast in open sand molds.',
        transmissionToNext: 'Disseminated across the Fertile Crescent and Nile Valley.'
      },
      {
        stepNumber: 2,
        yearLabel: 'c. 3300 BCE',
        civId: 'sumer',
        civName: 'Sumer & Early Dynastic Near East',
        breakthroughTitle: 'Bronze Alloying (Copper + 10% Tin)',
        bottleneckBroken: 'Pure copper is too soft to hold an edge against armor or till heavy alluvial soil.',
        mechanism: 'Adding tin dropped the melting point while drastically increasing tensile hardness, birthing bronze axes, armor, and plowshares.',
        transmissionToNext: 'Created the first intercontinental trade networks because tin was scarce (sourced from Afghanistan and Cornwall).'
      },
      {
        stepNumber: 3,
        yearLabel: 'c. 1200 BCE',
        civId: 'classical_greece',
        civName: 'Anatolia (Hittites) $\\rightarrow$ Mediterranean Basin',
        breakthroughTitle: 'Bloomery Smelted Iron (The Bronze Collapse Transition)',
        bottleneckBroken: 'When the Bronze Age collapsed, the international tin trade ceased. Societies without tin could not arm troops.',
        mechanism: 'Iron ore was ubiquitous in every riverbed. Bloomery furnaces with bellows hammered spongy iron blooms into ductile tools, democratizing weapons for ordinary peasant infantry.',
        transmissionToNext: 'Adopted rapidly by Greeks, Assyrians, and Romans.'
      },
      {
        stepNumber: 4,
        yearLabel: 'c. 300 BCE – 1200 CE',
        civId: 'islamic_golden_age',
        civName: 'India & Damascus / Toledo',
        breakthroughTitle: 'Crucible Wootz Steel & Pattern Welding',
        bottleneckBroken: 'Wrought iron was soft and brittle; early cast iron was too carbon-rich and shattered under shock.',
        mechanism: 'Iron sealed in airtight clay crucibles with wood charcoal at 1,300°C absorbed precisely 1.5% carbon, producing carbon nanotube structures (Damascus blades).',
        transmissionToNext: 'Encountered by European Crusaders and trade merchants.'
      },
      {
        stepNumber: 5,
        yearLabel: '1856 CE',
        civId: 'british_empire',
        civName: 'Henry Bessemer (Victorian Britain)',
        breakthroughTitle: 'The Bessemer Blast Converter',
        bottleneckBroken: 'Steel took days to craft in small crucibles, making it a luxury commodity for swords and watches.',
        mechanism: 'Blowing atmospheric air through molten pig iron burned out impurities in 20 minutes, reducing steel cost by 85% and producing thousands of tons per day.',
        transmissionToNext: 'Enabled transcontinental railroad networks, steamships, and skyscraper architecture.'
      },
      {
        stepNumber: 6,
        yearLabel: '1970 – Present',
        civId: 'modern_industrial_digital',
        civName: 'Modern Metallurgy & Silicon Lithography',
        breakthroughTitle: 'Titanium-Nickel Superalloys & Ultra-Pure Silicon',
        bottleneckBroken: 'Steel loses tensile strength at jet turbine temperatures and cannot conduct micro-electronic logic gates.',
        mechanism: 'Directionally solidified monocrystal turbine blades and 99.9999999% pure silicon monocrystals sliced for nanoscale lithography.',
        transmissionToNext: 'Aerospace space shuttles and artificial intelligence silicon.'
      }
    ],
    evolutionaryVerdict: 'Each transition in metallurgy required a 200°C increase in controlled furnace temperatures, linking material science directly to energy capture.'
  },
  {
    id: 'gen-law',
    title: 'The Genealogy of Codified Law & The Social Contract',
    subtitle: 'From Hammurabi’s Stela to Athenian Assemblies, Roman Civil Law, and Human Rights',
    domain: 'philosophy_law',
    epochSpan: '2100 BCE – Present (4,100+ Years)',
    summary: 'The replacement of tribal blood feuds and despotic monarchical whim with public, codified, predictable statutory rights.',
    steps: [
      {
        stepNumber: 1,
        yearLabel: 'c. 2100 – 1750 BCE',
        civId: 'sumer',
        civName: 'Sumer (Ur-Nammu) & Babylon (Hammurabi)',
        breakthroughTitle: 'Public Stelae & The Lex Talionis',
        bottleneckBroken: 'Justice was arbitrary and varied by the personal mood of local warlords.',
        mechanism: 'Laws carved onto 7-foot black diorite stelae erected in public city plazas, establishing the principle that justice must be publicized and unchanging.',
        transmissionToNext: 'Influenced Biblical Mosaic law and Near Eastern imperial codes.'
      },
      {
        stepNumber: 2,
        yearLabel: 'c. 594 – 508 BCE',
        civId: 'classical_greece',
        civName: 'Athenian Democracy (Solon & Cleisthenes)',
        breakthroughTitle: 'Isonomia (Equality Before the Law) & Jury Courts',
        bottleneckBroken: 'Hereditary aristocrats used debt bondage (hectemoroi) to enslave citizens.',
        mechanism: 'Solon abolished debt slavery; Cleisthenes reorganized Athens into ten geographical demes, instituting democratic lottery juries (*dikasteria*) and assembly voting.',
        transmissionToNext: 'Directly studied and adapted by the early Roman Republic.'
      },
      {
        stepNumber: 3,
        yearLabel: 'c. 450 BCE – 534 CE',
        civId: 'classical_rome',
        civName: 'Roman Republic & Justinian Byzantine Empire',
        breakthroughTitle: 'The Twelve Tables & Corpus Juris Civilis',
        bottleneckBroken: 'Unwritten customs allowed patricians to interpret rules in their own favor.',
        mechanism: 'Emperor Justinian commissioned Tribonian to codify 1,000 years of Roman jurisprudence into the *Digest*, *Institutes*, and *Code*, establishing legal contracts, property easements, and the presumption of innocence (*innocent until proven guilty*).',
        transmissionToNext: 'Rediscovered in Bologna in 1088 CE, forming the foundation of the Napoleonic Code and Western civil law.'
      },
      {
        stepNumber: 4,
        yearLabel: '1215 – 1689 CE',
        civId: 'british_empire',
        civName: 'England (Magna Carta & Bill of Rights)',
        breakthroughTitle: 'Habeas Corpus & Parliamentary Sovereignty Over the Crown',
        bottleneckBroken: 'Absolute monarchs claimed the "Divine Right of Kings" to imprison subjects without trial and tax without consent.',
        mechanism: 'Clause 39 of Magna Carta: "No free man shall be seized or imprisoned... except by the lawful judgment of his equals." The 1689 Bill of Rights subordinated the monarch to Parliament.',
        transmissionToNext: 'Transmitted to the American and French Revolutions.'
      },
      {
        stepNumber: 5,
        yearLabel: '1948 – Present',
        civId: 'modern_industrial_digital',
        civName: 'United Nations Assembly',
        breakthroughTitle: 'Universal Declaration of Human Rights & International Treaties',
        bottleneckBroken: 'National sovereignty previously meant states could slaughter or disenfranchise their own citizens with legal impunity.',
        mechanism: 'Established inherent, non-negotiable rights applicable to every human on Earth regardless of national citizenship.',
        transmissionToNext: 'International Court of Justice, European Court of Human Rights.'
      }
    ],
    evolutionaryVerdict: 'Legal evolution shifted power from the ruler’s sword to written text, and from sovereign prerogative to universal citizen rights.'
  }
];

// -------------------------------------------------------------
// 4. TRANSMISSION VECTORS (The 5 Historical Conduits)
// -------------------------------------------------------------
export const TRANSMISSION_VECTORS: TransmissionVectorDossier[] = [
  {
    id: 'vec-translation',
    title: 'The Great Translation Movements',
    subtitle: 'Institutional State-Funded Scriptorium Pipelines',
    category: 'Translation',
    historicalPeriod: '750 – 1300 CE',
    keyActors: ['Hunayn ibn Ishaq', 'Al-Kindi', 'Gerard of Cremona', 'Archbishop Raymond of Toledo'],
    keyGeography: 'Baghdad (Iraq), Toledo (Spain), Palermo (Sicily)',
    mechanismSummary: 'Caliphs, kings, and archbishops financed multi-lingual teams (Christians, Muslims, and Jews working side by side) to locate, translate, and cross-reference foundational scientific, philosophical, and medical codices.',
    primaryTransmissions: [
      'Aristotelian logic and metaphysics translated Greek -> Syriac -> Arabic -> Latin',
      'Euclid’s Elements and Ptolemy’s Almagest preserved, corrected, and transferred to Europe',
      'Indo-Arabic numerals, zero, and decimal calculations introduced to the West'
    ],
    systemicImpact: 'Prevented the permanent loss of classical human knowledge when the Western Roman Empire collapsed; served as the intellectual rocket fuel for the European Renaissance.',
    historicalCaseStudy: 'Caliph al-Ma’mun paid translators the weight of each translated book in pure gold. In Toledo in the 12th century, Gerard of Cremona translated over 80 major scientific works from Arabic into Latin, single-handedly restocking European university curricula.'
  },
  {
    id: 'vec-trade-routes',
    title: 'Continental Oases & Maritime Monsoon Corridors',
    subtitle: 'The Silk Road and Indian Ocean Dhow Highway',
    category: 'Trade Corridors',
    historicalPeriod: '200 BCE – 1500 CE',
    keyActors: ['Sogdian merchants', 'Arab dhow navigators', 'Venetian & Genoese maritime consuls'],
    keyGeography: 'Dunhuang, Samarkand, Malacca, Hormuz, Alexandria',
    mechanismSummary: 'High-value luxury trade (silk, spices, porcelain, glass) financed merchant relays. Along with commodities, ideas, technologies, religions (Buddhism, Islam), and botanical seeds traveled inexorably.',
    primaryTransmissions: [
      'Chinese sericulture, cast iron, and paper transferred to Central Asia and the Mediterranean',
      'Indian Ocean seasonal monsoon navigation knowledge and lateen triangular sail rigging',
      'Buddhism transmitting from Northern India along the Tarim Basin into China and Japan'
    ],
    systemicImpact: 'Transformed isolated civilizations into a semi-synchronized Afro-Eurasian world-system with shared economic rhythms and epidemic vulnerability.',
    historicalCaseStudy: 'Sogdian merchant letters discovered in Dunhuang watchtowers reveal commercial banking credit, bill of exchange letters, and multilingual caravan guilds operating across 5,000 kilometers of desert terrain.'
  },
  {
    id: 'vec-military-collision',
    title: 'Frontier Collision & Artisan Interrogation',
    subtitle: 'Decisive Battles That Broke Technological Monopolies',
    category: 'Military Collision',
    historicalPeriod: '751 – 1453 CE',
    keyActors: ['Gao Xianzhi (Tang General)', 'Ziyad ibn Salih (Abbasid Commander)', 'Mehmed II (Ottoman Sultan)', 'Urban the Hungarian (Cannon Founder)'],
    keyGeography: 'Talas River (Kazakhstan / Kyrgyzstan border), Constantinople Walls',
    mechanismSummary: 'When imperial frontiers violently clashed, the capture of specialized master craftsmen instantly broke long-guarded national state secrets and diffused advanced technologies across hostile borders.',
    primaryTransmissions: [
      'Battle of Talas (751 CE): Chinese master papermakers captured, establishing Samarkand paper mills',
      'Fall of Constantinople (1453 CE): Super-sized gunpowder bombards designed by Hungarian engineer Urban breached the ancient Theodosian walls',
      'Crusader Sieges: Distillation techniques, sugar cane cultivation, and windmill engineering transmitted to Europe'
    ],
    systemicImpact: 'Warfare acted as a violent vector of technological diffusion, punishing societies that maintained insular monopolies and rewarding rapid military synthesizers.',
    historicalCaseStudy: 'The Abbasid victory at the Talas River in 751 CE did not expand Arab territory deep into China, but the capture of Chinese papermaking artisans immediately broke Egypt’s papyrus monopoly and transformed Islamic administrative record-keeping.'
  },
  {
    id: 'vec-postal-networks',
    title: 'Imperial Postal Highways & Hegemonic Transit',
    subtitle: 'The Yam, Cursus Publicus, and Chapar Khaneh',
    category: 'Postal Networks',
    historicalPeriod: '500 BCE – 1350 CE',
    keyActors: ['Darius the Great', 'Augustus Caesar', 'Genghis Khan & Ögedei Khan'],
    keyGeography: 'Royal Road of Persia, Roman paved highways, Steppe Yam relay post stations',
    mechanismSummary: 'Empires built dedicated post stations every 25–40 kilometers with fresh relay horses and official couriers. The Pax Mongolica and Pax Romana reduced travel risks, allowing individuals to traverse thousands of miles in safety.',
    primaryTransmissions: [
      'Mongolian Paiza passports granting diplomatic immunity to ambassadors, merchants, and scientists across Eurasia',
      'Marco Polo and Ibn Battuta traveling 70,000+ miles across single unified legal and cultural envelopes',
      'Roman administrative codification and standardized currency circulation across 3 continents'
    ],
    systemicImpact: 'Drastically compressed travel time across continental landmasses, allowing cross-pollination of administrative practices and scientific discoveries.',
    historicalCaseStudy: 'The Mongol Yam network maintained 1,400 relay stations and 50,000 horses across Eurasia. A royal decree or courier carrying intelligence could travel from Beijing to the Danube River in under 20 days.'
  },
  {
    id: 'vec-diaspora',
    title: 'Catastrophic Diaspora & Refugee Scholar Resettlement',
    subtitle: 'When Capital Collapses Scatter Intelligentsia Seeds',
    category: 'Diaspora',
    historicalPeriod: '1453 – 1945 CE',
    keyActors: ['Cardinal Bessarion', 'Gemistus Pletho', 'Sephardic Jewish Exiles', 'Albert Einstein & Manhattan Project refugees'],
    keyGeography: 'Constantinople $\\to$ Florence & Venice; Al-Andalus $\\to$ Ottoman Salonica & Amsterdam',
    mechanismSummary: 'When ancient capitals collapsed or minorities faced expulsion, scholars fled with their most valuable portable wealth: private libraries, rare manuscripts, and specialized guild craft techniques.',
    primaryTransmissions: [
      'Byzantine scholars carrying Plato’s complete Greek dialogues and Hellenistic texts into Florence, sparking the Medici Platonic Academy',
      'Sephardic Jewish cartographers and physicians from Spain establishing modern printing and navigation in the Ottoman Empire and Netherlands',
      'European physicists fleeing 1930s fascism to the US, catalyzing the atomic and computer age'
    ],
    systemicImpact: 'Societal intolerance or collapse in the core inadvertently enriches peripheral regions with centuries of accumulated intellectual capital.',
    historicalCaseStudy: 'Following the 1453 Ottoman conquest of Constantinople, Cardinal Bessarion donated his collection of over 700 rare Greek manuscripts to Venice, establishing the foundational core of the world-famous Biblioteca Marciana.'
  }
];

// -------------------------------------------------------------
// 5. COLLAPSE & ADAPTATION RESILIENCE CASE STUDIES
// -------------------------------------------------------------
export const COLLAPSE_CASE_STUDIES: CollapseAdaptationStudy[] = [
  {
    id: 'col-bronze-age',
    title: 'The Late Bronze Age Catastrophe (c. 1177 BCE)',
    era: 'c. 1200 – 1150 BCE',
    focalCivilization: 'Mycenaean Greece, Hittite Empire, New Kingdom Egypt',
    crisisCatalyst: 'Megadroughts in the Mediterranean, mega-earthquake storms, Sea Peoples marauding raids, and total severance of the long-distance Afghanistan tin trade route.',
    systemicFailureMechanic: 'Hyper-specialized, fragile palace redistributive economies collapsed. When palace storehouses burned, the elite scribes who alone understood Linear B vanished, triggering widespread illiteracy.',
    humanAdaptationVector: 'Populations dispersed into decentralized rural agrarian hamlets. Abandoned expensive tin-bronze in favor of cheap, local bog-iron smelting. Swapped complex palace scripts for simple 22-letter phonetic alphabets used by everyday merchants.',
    preservedKnowledgeSeed: 'Vernacular pottery, basic metallurgy, oral epic traditions (which later crystallized as Homer’s Iliad & Odyssey), and Mediterranean agricultural know-how survived intact in the villages.',
    evolutionaryRebirth: 'The collapse cleared away archaic, stagnant bronze aristocracy and paved the way for the Classical Iron Age, citizen-soldier hoplite phalanxes, and the democratic Greek polis.',
    tainterComplexityAnalysis: 'Bronze Age palaces reached severe diminishing returns on complexity: enormous administrative overhead to secure tiny quantities of tin and copper across thousands of miles. The system collapsed to a lower, more resilient baseline of decentralized local iron.'
  },
  {
    id: 'col-western-rome',
    title: 'The Fall of the Western Roman Empire (476 CE)',
    era: '376 – 476 CE',
    focalCivilization: 'Western Roman Empire $\\rightarrow$ Early Medieval Europe',
    crisisCatalyst: 'Elite overproduction, hyper-inflation, agrarian soil exhaustion in Italy, frontier barbarian migrations driven by the Huns, and loss of the North African grain basket to the Vandals.',
    systemicFailureMechanic: 'The imperial tax-and-army cycle disintegrated. Rome could no longer collect taxes in gold to pay professional legions, forcing reliance on barbarian federates who ultimately deposed the Western emperor.',
    humanAdaptationVector: 'Massive de-urbanization: Rome’s population collapsed from 1,000,000 to under 30,000. People adapted by entering into voluntary feudal serfdom with local warlords for physical protection in exchange for agricultural labor.',
    preservedKnowledgeSeed: 'Christian monastic scriptoriums (Benedictine and Celtic Irish monks) painstakingly copied and preserved Latin theological and philosophical texts. Catholic parish networks became the only surviving continental administrative skeleton.',
    evolutionaryRebirth: 'Decentralized European manorialism sparked local energy innovation: the heavy wheeled moldboard plow, three-field crop rotation, and watermills replaced Roman slave labor with mechanical waterpower.',
    tainterComplexityAnalysis: 'Rome had exhausted its expansionary marginal returns: conquered lands no longer yielded sufficient gold to pay for border defenses. Collapse was a rational simplification of an unsustainable imperial overhead.'
  },
  {
    id: 'col-classic-maya',
    title: 'The Classic Maya Terminal Transition (800 – 1000 CE)',
    era: '800 – 1000 CE',
    focalCivilization: 'Classic Lowland Maya (Tikal, Calakmul, Copán)',
    crisisCatalyst: 'A severe century-long megadrought recorded in lake sediment cores, compounded by severe deforestation for limestone plaster and endemic royal captive-taking warfare.',
    systemicFailureMechanic: 'The divine kingship model (K’uhul Ajaw) promised that royal bloodletting rituals guaranteed rain from the gods. When decades of drought persisted, the ideological legitimacy of royal dynastic pyramids imploded completely.',
    humanAdaptationVector: 'The population did not go extinct: they abandoned the dense, vulnerable inland forest capitals and migrated north to coastal river systems and cenotes in the Yucatán Peninsula (Chichen Itza, Mayapan) and Guatemalan highlands.',
    preservedKnowledgeSeed: 'Traditional milpa agroforestry, the 260-day calendar, horizontal artisanal weaving, and indigenous language dialects survived intact among millions of modern Maya descendants.',
    evolutionaryRebirth: 'Postclassic Maya civilization replaced divine monarchies with collective councils of merchant elites (Multepal governance) and vibrant maritime canoe trade networks circumnavigating the Yucatán.',
    tainterComplexityAnalysis: 'Monumental royal monument construction yielded zero marginal returns in resolving ecological drought, driving society to re-organize into flexible coastal trading coalitions.'
  },
  {
    id: 'col-black-death',
    title: 'The Mongol Pax Shock & The Black Death (1346 – 1353 CE)',
    era: '1250 – 1400 CE',
    focalCivilization: 'Eurasian Continent (China, Islamic World, Western Europe)',
    crisisCatalyst: 'The creation of uninterrupted trans-Eurasian trade under the Pax Mongolica allowed Yersinia pestis (bubonic plague) to ride merchant caravans and ship rats from the Central Asian steppe into Black Sea ports and across Europe.',
    systemicFailureMechanic: 'Demographic annihilation of 35% to 60% of urban and rural populations within five years. The sheer death toll broke medieval feudal economic obligations.',
    humanAdaptationVector: 'The sudden scarcity of peasant labor granted surviving workers immense bargaining power. Peasants demanded cash wages and abandoned serfdom, causing the collapse of feudal labor bondage in Western Europe.',
    preservedKnowledgeSeed: 'Urban guild apprentice structures adapted by inventing labor-saving machinery: mechanization of textile weaving, animal-powered blast furnaces, and movable type printing (invented specifically to replace dead scribes).',
    evolutionaryRebirth: 'Higher real wages for surviving workers created the world’s first mass consumer market in Europe, incentivized labor-saving engineering, and drove maritime nations to explore the oceans.',
    tainterComplexityAnalysis: 'A sudden biological shock pruned the population, but the remaining capital stock and knowledge survived, resulting in higher capital-per-worker and unprecedented per-capita economic dynamism.'
  }
];

// -------------------------------------------------------------
// 6. CLIDYNAMICS & COMPLEX SYSTEMS MODELS
// -------------------------------------------------------------
export const CLIDYNAMIC_PRINCIPLES: CliodynamicPrinciple[] = [
  {
    id: 'principle-tainter',
    theorist: 'Dr. Joseph Tainter (1988)',
    conceptName: 'The Law of Diminishing Marginal Returns on Complexity',
    coreLaw: 'Human societies invest in complexity (specialized bureaucracies, larger armies, higher taxes) to solve emerging problems. Initially, complexity yields massive returns, but eventually reaches a tipping point where each additional bureaucratic layer costs more energy than the problem it solves.',
    mechanism: 'When unexpected shocks (crop failure, invasion, epidemic) hit a society operating at negative marginal returns, the society has no fiscal buffer left and collapses into a simpler, decentralized configuration.',
    historicalValidation: 'The Late Western Roman Empire had to triple its army and civil bureaucracy in the 4th century, taxing its farmers into destitution just to maintain the same borders Augustus defended with a tiny legion.',
    modernRelevance: 'Modern institutional gridlock, ballooning healthcare administrative costs, and energy transition bottlenecks reflect the classic Tainter curve.'
  },
  {
    id: 'principle-turchin',
    theorist: 'Prof. Peter Turchin (2003)',
    conceptName: 'Asabiyyah & Structural-Demographic Cycles',
    coreLaw: 'Civilizations rise on hostile frontier zones where external existential threats forge intense collective solidarity (Asabiyyah). Once successful, the empire expands and prospers, but wealth eventually produces "Elite Overproduction" and extreme inequality, causing internal state collapse roughly every 200–300 years.',
    mechanism: '1. Integrative Phase (Solidarity + Peace) -> 2. Peak Stagflation (Labor glut + Elite growth) -> 3. Disintegrative Phase (Elite infighting + Fiscal insolvency) -> 4. Civil War / Reorganization.',
    historicalValidation: 'The rise of the Roman Republic on the turbulent Italian frontier; its disintegration during the Late Republic civil wars between competing aristocratic factions (Marius, Sulla, Caesar).',
    modernRelevance: 'Elite overproduction: more candidates competing for political and economic leadership spots than institutions can accommodate, fueling radical polarization.'
  },
  {
    id: 'principle-cultural-epigenetics',
    theorist: 'Complex Systems & Cultural Evolution',
    conceptName: 'Resilient Information Substrates & Cultural Refugia',
    coreLaw: 'When the formal superstructure of an empire dies, knowledge does not disappear if it is encoded in distributed, decentralized substrates: agrarian folk traditions, vernacular craft guilds, and distributed monastic refugia.',
    mechanism: 'Centralized state archives burn down with palaces; distributed rural practices (crop rotation, blacksmithing, oral epics, local trade) survive and seed the next wave of civilizational synthesis.',
    historicalValidation: 'The survival of Greek and Roman literary codices in remote Celtic monasteries on the edge of Ireland and Scotland while continental imperial cities decayed.',
    modernRelevance: 'Decentralized open-source repositories and mesh networks mirror historical cultural refugia against single points of systemic failure.'
  }
];
