/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EraCollapseRecord {
  civId: string;
  civName: string;
  endYearLabel: string;
  collapseType: string;
  causeAnalysis: string;
}

export interface EraFoundingRecord {
  civId: string;
  civName: string;
  startYearLabel: string;
  foundingNote: string;
}

export interface HistoricalEraDetail {
  id: string;
  label: string;
  shortLabel: string;
  subtitle: string;
  startBCE: number;
  endBCE: number;
  durationLabel: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgGlow: string;
  tagline: string;
  macroOverview: string;
  keyParadigmShifts: string[];
  activeCivilizationIds: string[];
  diedOutRecords: EraCollapseRecord[];
  aroseRecords: EraFoundingRecord[];
}

export const HISTORICAL_ERAS_DETAIL: HistoricalEraDetail[] = [
  {
    id: 'bronze-early',
    label: 'Early Bronze Age',
    shortLabel: 'Early Bronze',
    subtitle: 'Dawn of Metallurgical Urbanism & Written Statehood',
    startBCE: -4500,
    endBCE: -2000,
    durationLabel: '2,500 Years (c. 4500 – 2000 BCE)',
    color: '#d97706',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/50',
    bgGlow: 'bg-amber-950/30',
    tagline: 'The agricultural surplus transitions into monumental city-states and clay record keeping.',
    macroOverview:
      'The foundational epoch of human civilization. River basins in the Fertile Crescent, Nile Valley, and Indus floodplains witnessed the birth of the earliest autonomous city-states, bronze metallurgy (alloying copper with arsenic/tin), centralized temple accounting, the potter\'s wheel, and phonetic writing systems.',
    keyParadigmShifts: [
      'Invention of Cuneiform script and hieroglyphic monumental writing',
      'Canal hydraulic engineering and basin flood agriculture',
      'Standardized bronze metallurgy and kiln-fired masonry',
      'The sexagesimal (base-60) numerical system and 360-degree circle'
    ],
    activeCivilizationIds: ['sumer', 'ancient_egypt', 'indus_valley'],
    diedOutRecords: [
      {
        civId: 'sumer',
        civName: 'Sumerian City-States (Initial Independence)',
        endYearLabel: 'c. 2000 – 1900 BCE',
        collapseType: 'Ecological Soil Salinization & Akkadian Conquest',
        causeAnalysis:
          'Centuries of intensive irrigation without subsurface drainage raised water tables, drawing mineral salts to the surface. Plunging barley yields crippled the temple economies, allowing conquest by the Akkadians and Amorite migrations.'
      }
    ],
    aroseRecords: [
      {
        civId: 'sumer',
        civName: 'Sumerian Civilization',
        startYearLabel: 'c. 4500 BCE',
        foundingNote: 'Eridu and Uruk founded along the marshes of the lower Tigris and Euphrates rivers.'
      },
      {
        civId: 'ancient_egypt',
        civName: 'Ancient Egypt (Unified Dynasties)',
        startYearLabel: 'c. 3100 BCE',
        foundingNote: 'Unification of Upper and Lower Egypt under Narmer; founding of the capital at Memphis.'
      },
      {
        civId: 'indus_valley',
        civName: 'Indus Valley (Harappan) Civilization',
        startYearLabel: 'c. 3300 BCE',
        foundingNote: 'Early Harappan agro-pastoral settlements rapidly coalesce into grid-planned urban metropolises.'
      }
    ]
  },
  {
    id: 'bronze-late',
    label: 'Late Bronze Age',
    shortLabel: 'Late Bronze',
    subtitle: 'Palatial Diplomacy, Chariot Warfare & The Cataclysmic 1200 BCE Collapse',
    startBCE: -2000,
    endBCE: -1200,
    durationLabel: '800 Years (c. 2000 – 1200 BCE)',
    color: '#eab308',
    textColor: 'text-yellow-400',
    borderColor: 'border-yellow-500/50',
    bgGlow: 'bg-yellow-950/30',
    tagline: 'An interconnected hyper-globalized Mediterranean and Near Eastern world ended by sudden systemic collapse.',
    macroOverview:
      'Characterized by high diplomatic connectivity between Great Powers (Egypt\'s New Kingdom, Hittites, Mitanni, Mycenaean Greeks, Babylonia), rapid chariot combat, state-sponsored trade expeditions, and the Amarna letters. The era concluded with the violent, synchronized "Late Bronze Age Collapse" (c. 1200 BCE).',
    keyParadigmShifts: [
      'Spoked wheel light composite chariot warfare',
      'The international Amarna diplomatic correspondence on clay cuneiform',
      'Vast maritime redistribution routes exchanging Cypriot copper and Cornish/Afghan tin',
      'Glassmaking, lapis lazuli royal trade, and New Kingdom imperial expansion'
    ],
    activeCivilizationIds: ['ancient_egypt', 'indus_valley', 'sumer'],
    diedOutRecords: [
      {
        civId: 'indus_valley',
        civName: 'Indus Valley (Harappan) Civilization',
        endYearLabel: 'c. 1300 BCE',
        collapseType: 'Hydro-Climatic Drying & Urban Desiccation',
        causeAnalysis:
          'Monsoon shifts weakened seasonal rainfall, causing the Ghaggar-Hakra river system to dry up. Metropolitan water supplies failed, prompting the complete abandonment of Mohenjo-daro and Harappa for rural eastward migration.'
      },
      {
        civId: 'sumer',
        civName: 'Sumerian Sovereign Identity',
        endYearLabel: 'c. 1900 BCE',
        collapseType: 'Full Cultural Assimilation',
        causeAnalysis:
          'Sumerian ceased to be spoken as a living vernacular, absorbed into Amorite Babylonia and Assyria while preserved solely as a sacred and literary liturgical tongue.'
      }
    ],
    aroseRecords: [
      {
        civId: 'ancient_egypt',
        civName: 'Egyptian New Kingdom Florescence',
        startYearLabel: 'c. 1550 BCE',
        foundingNote: 'Ahmose I expels the Hyksos and establishes the New Kingdom imperial borders reaching the Euphrates.'
      }
    ]
  },
  {
    id: 'classical',
    label: 'Classical Antiquity',
    shortLabel: 'Classical Era',
    subtitle: 'The Axial Age: Philosophy, Jurisprudence & Continental Hegemony',
    startBCE: -1200,
    endBCE: 500,
    durationLabel: '1,700 Years (c. 1200 BCE – 500 CE)',
    color: '#10b981',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/50',
    bgGlow: 'bg-emerald-950/30',
    tagline: 'Iron smelting, democratic assemblies, imperial roadways, and foundational philosophical canons.',
    macroOverview:
      'The crucible of philosophical and scientific inquiry across Eurasia. Iron tools democratized agriculture and warfare. The Mediterranean and Asian spheres developed monumental legal codes (Roman civil law, Han legalism), professional standing armies, coined silver currencies, and the transcontinental overland Silk Road.',
    keyParadigmShifts: [
      'Iron smelting replaces rare bronze as standard tool and weapon metallurgy',
      'Athenian direct democracy and Roman republican constitutional jurisprudence',
      'Standardized Han civil service examinations and paper-making (Cai Lun)',
      'The Silk Road transcontinental commercial nexus linking Chang\'an to Rome',
      'Volcanic pozzolana concrete and monumental hydraulic aqueduct engineering'
    ],
    activeCivilizationIds: [
      'classical_greece',
      'classical_rome',
      'han_dynasty',
      'aksumite_empire',
      'ancient_egypt',
      'maya'
    ],
    diedOutRecords: [
      {
        civId: 'ancient_egypt',
        civName: 'Ancient Egyptian Pharaonic Sovereignty',
        endYearLabel: '30 BCE',
        collapseType: 'Roman Imperial Annexation',
        causeAnalysis:
          'The defeat of Cleopatra VII and Mark Antony at the Battle of Actium led to the suicide of Cleopatra and the annexation of Egypt as Octavian\'s personal imperial breadbasket estate.'
      },
      {
        civId: 'classical_greece',
        civName: 'Classical Greek Sovereign Poleis',
        endYearLabel: '146 BCE',
        collapseType: 'Roman Republic Hegemony',
        causeAnalysis:
          'Internecine warfare between poleis (Peloponnesian War) exhausted Greek manpower, paving the way for Macedonian hegemony under Philip II and total Roman absorption at the Sack of Corinth.'
      },
      {
        civId: 'han_dynasty',
        civName: 'Han Dynasty China',
        endYearLabel: '220 CE',
        collapseType: 'Agrarian Rebellion & Regional Warlordism',
        causeAnalysis:
          'Court eunuch corruption, disastrous Yellow River flooding, and the Yellow Turban Rebellion empowered regional military commanders (Cao Cao, Liu Bei) to partition the empire into the Three Kingdoms.'
      },
      {
        civId: 'classical_rome',
        civName: 'Western Roman Empire',
        endYearLabel: '476 CE',
        collapseType: 'Fiscal Exhaustion, Pandemic & Germanic Migration',
        causeAnalysis:
          'Depopulation from Antonine and Cyprian plagues, currency debasement (hyper-inflation), reliance on Foederati mercenaries, and pressure from the Huns culminated in Odoacer deposing Romulus Augustulus.'
      }
    ],
    aroseRecords: [
      {
        civId: 'classical_greece',
        civName: 'Classical Greece (Archaic & Classical Poleis)',
        startYearLabel: 'c. 800 BCE',
        foundingNote: 'Rise of self-governing city-states, the Homeric epics, and adoption of the Phoenician phonetic alphabet.'
      },
      {
        civId: 'classical_rome',
        civName: 'Roman Republic',
        startYearLabel: '509 BCE',
        foundingNote: 'Expulsion of the Tarquin monarchs and the founding of the Roman senatorial republic.'
      },
      {
        civId: 'han_dynasty',
        civName: 'Han Dynasty',
        startYearLabel: '206 BCE',
        foundingNote: 'Liu Bang defeats Xiang Yu following the collapse of the Qin Dynasty, establishing Chang\'an as the imperial capital.'
      },
      {
        civId: 'aksumite_empire',
        civName: 'Aksumite Empire',
        startYearLabel: 'c. 100 CE',
        foundingNote: 'Highland Ethiopian trade state coalesces around the port of Adulis on the Red Sea.'
      },
      {
        civId: 'maya',
        civName: 'Maya Pre-Classic Urbanism',
        startYearLabel: 'c. 250 BCE',
        foundingNote: 'Monumental limestone pyramid construction and early hieroglyphic calendrical inscriptions in the Petén basin.'
      }
    ]
  },
  {
    id: 'medieval',
    label: 'Middle Ages & Golden Ages',
    shortLabel: 'Middle Ages',
    subtitle: 'Steppe Blitzkrieg, Oceanic Wayfinding, Trans-Saharan Gold & Rainforest Bronze',
    startBCE: 500,
    endBCE: 1500,
    durationLabel: '1,000 Years (c. 500 – 1500 CE)',
    color: '#3b82f6',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/50',
    bgGlow: 'bg-blue-950/30',
    tagline: 'Global connectivity across the Silk Roads, Sahara, and oceans alongside magnificent cultural golden ages.',
    macroOverview:
      'A vast era of oceanic navigation, trans-desert caravan routes, and nomadic steppe integration. Norse clinker longships reached North America; Mali became the world\'s gold heartland; the Mongol Empire unified Eurasia under Pax Mongolica; and Benin cast masterworks in lost-wax brass.',
    keyParadigmShifts: [
      'Clinker naval architecture enabling transatlantic oceanic crossing',
      'The Yam postal horse relay network establishing synchronized Eurasian communication',
      'Trans-Saharan camel caravan routes exchanging Sahelian gold for Mediterranean rock salt',
      'Movable type printing, magnetic navigation compass, and gunpowder in Song China',
      'Zero notation in Maya and Indian mathematics'
    ],
    activeCivilizationIds: [
      'aksumite_empire',
      'maya',
      'norse_vikings',
      'mongol_empire',
      'mali_empire',
      'kingdom_of_benin',
      'ottoman_empire',
      'incan_empire'
    ],
    diedOutRecords: [
      {
        civId: 'aksumite_empire',
        civName: 'Aksumite Empire',
        endYearLabel: 'c. 940 CE',
        collapseType: 'Red Sea Trade Isolation & Environmental Shift',
        causeAnalysis:
          'Expansion of the Umayyad and Abbasid Caliphates cut Aksum off from maritime Indian Ocean trade, while deforestation and highland erosion reduced agricultural capacity.'
      },
      {
        civId: 'maya',
        civName: 'Classic Maya Lowland Metropolises',
        endYearLabel: 'c. 900 CE',
        collapseType: 'Centennial Megadrought & Overpopulation',
        causeAnalysis:
          'Severe multi-decade droughts combined with rampant deforestation broke the aguada reservoir systems, triggering systemic warfare and abandonment of Tikal, Calakmul, and Copán.'
      },
      {
        civId: 'norse_vikings',
        civName: 'Norse / Viking Age Expeditions',
        endYearLabel: '1066 CE',
        collapseType: 'Christian Monarchical Consolidation',
        causeAnalysis:
          'The defeat of Harald Hardrada at the Battle of Stamford Bridge, coupled with the conversion of Scandinavian kings to Roman Catholicism, transformed raiders into settled feudal monarchies.'
      },
      {
        civId: 'mongol_empire',
        civName: 'Unified Mongol Empire',
        endYearLabel: '1368 CE',
        collapseType: 'Dynastic Partition & Plague Depopulation',
        causeAnalysis:
          'Succession disputes fragmented the empire into the Golden Horde, Ilkhanate, Chagatai, and Yuan dynasty. In 1368, Zhu Yuanzhang captured Khanbaliq, expelling the Mongols back to the steppes and founding the Ming Dynasty.'
      }
    ],
    aroseRecords: [
      {
        civId: 'norse_vikings',
        civName: 'Norse Viking Age',
        startYearLabel: '793 CE',
        foundingNote: 'Raid on Lindisfarne monastery marks the expansion of Scandinavian clinker ships across European coasts.'
      },
      {
        civId: 'kingdom_of_benin',
        civName: 'Kingdom of Benin (Ogiso/Oba Dynasties)',
        startYearLabel: 'c. 1180 CE',
        foundingNote: 'Prince Oranmiyan founds the second dynasty; capital at Edo fortified with earthwork moats.'
      },
      {
        civId: 'mongol_empire',
        civName: 'Mongol Empire',
        startYearLabel: '1206 CE',
        foundingNote: 'Temüjin proclaimed Genghis Khan at the Kurultai on the Onon River, uniting the nomadic tribes.'
      },
      {
        civId: 'mali_empire',
        civName: 'Mali Empire',
        startYearLabel: '1235 CE',
        foundingNote: 'Sundiata Keita defeats Sumanguru at the Battle of Kirina, establishing the Kouroukan Fouga charter.'
      },
      {
        civId: 'ottoman_empire',
        civName: 'Ottoman Empire',
        startYearLabel: '1299 CE',
        foundingNote: 'Osman I declares independence in northwestern Anatolia, beginning the imperial march toward Byzantium.'
      },
      {
        civId: 'incan_empire',
        civName: 'Incan Empire (Tawantinsuyu)',
        startYearLabel: '1438 CE',
        foundingNote: 'Pachacuti repels the Chanca invasion, establishes Cusco as the imperial navel, and begins Andean expansion.'
      }
    ]
  },
  {
    id: 'early-modern',
    label: 'Early Modern Horizon',
    shortLabel: 'Early Modern',
    subtitle: 'Printing Press, Gunpowder Empires & The First Global Transoceanic Web',
    startBCE: 1500,
    endBCE: 1760,
    durationLabel: '260 Years (c. 1500 – 1760 CE)',
    color: '#a855f7',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/50',
    bgGlow: 'bg-purple-950/30',
    tagline: 'The Columbian Exchange, Ottoman imperial artillery, and the birth of joint-stock mercantilism.',
    macroOverview:
      'The era where previously separated planetary biospheres and civilizations collided. Marked by European oceanic circumnavigation, the movable-type printing press, Ottoman siege cannon mastery, the catastrophic biological impact of Old World pathogens in the Americas, and the formation of global chartered trading empires.',
    keyParadigmShifts: [
      'Gutenberg movable type printing and explosion of vernacular literacy',
      'The Columbian Exchange: global redistribution of maize, potatoes, horses, and silver',
      'Gunpowder artillery, bastion fortresses, and professional naval broadsides',
      'Joint-stock chartered corporations (East India Company, Bank of England paper credit)',
      'The Scientific Revolution: empirical observation and Cartesian mechanics'
    ],
    activeCivilizationIds: [
      'incan_empire',
      'mali_empire',
      'kingdom_of_benin',
      'ottoman_empire',
      'british_empire'
    ],
    diedOutRecords: [
      {
        civId: 'incan_empire',
        civName: 'Incan Empire (Tawantinsuyu)',
        endYearLabel: '1572 CE',
        collapseType: 'Epidemic Decimation & Conquistador Conquest',
        causeAnalysis:
          'Smallpox preceding Pizarro decimated up to 80% of the population and killed Emperor Huayna Capac, causing a fratricidal civil war between Atahualpa and Huáscar. Following the capture of Atahualpa, Spanish steel, cavalry, and native allies dismantled the empire, culminating in the execution of Túpac Amaru in 1572 CE.'
      },
      {
        civId: 'mali_empire',
        civName: 'Mali Empire',
        endYearLabel: 'c. 1600 CE',
        collapseType: 'Moroccan Incursions & Succession Partition',
        causeAnalysis:
          'The Moroccan invasion of 1591 crippled the trans-Saharan trade corridors, while rival royal princes fractured the empire into small Mandinka chiefdoms.'
      }
    ],
    aroseRecords: [
      {
        civId: 'british_empire',
        civName: 'British Empire (Mercantile Foundations)',
        startYearLabel: 'c. 1600 CE',
        foundingNote: 'Chartering of the Governor and Company of Merchants of London Trading into the East Indies (EIC).'
      }
    ]
  },
  {
    id: 'modern-digital',
    label: 'Industrial & Digital Epoch',
    shortLabel: 'Industrial & Digital',
    subtitle: 'Fossil Thermodynamic Power, Global Telecommunications & Silicon Computation',
    startBCE: 1760,
    endBCE: 2026,
    durationLabel: '266 Years (1760 CE – Present)',
    color: '#06b6d4',
    textColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/50',
    bgGlow: 'bg-cyan-950/30',
    tagline: 'The exponential acceleration from coal steam power to microchips and planetary satellite networks.',
    macroOverview:
      'Humanity transitioned from biological muscle and draft animal energy into fossil fuel thermodynamics. Began with steam and coal mechanization in Britain, progressed through electric power grids, automotive assembly lines, and antibiotics, and culminated in semiconductor microprocessors, artificial intelligence, and instantaneous planetary communication.',
    keyParadigmShifts: [
      'The steam engine (Watt) and automated textile loom mechanization',
      'Electrification, telecommunications telegraphy, and the internal combustion engine',
      'Haber-Bosch synthetic nitrogen fixation enabling planetary population growth',
      'Silicon semiconductors, integrated circuits, and the global internet',
      'Spaceflight, satellite earth observation, and artificial intelligence'
    ],
    activeCivilizationIds: [
      'british_empire',
      'kingdom_of_benin',
      'ottoman_empire',
      'modern_industrial_digital'
    ],
    diedOutRecords: [
      {
        civId: 'kingdom_of_benin',
        civName: 'Kingdom of Benin',
        endYearLabel: '1897 CE',
        collapseType: 'British Colonial Punitive Expedition',
        causeAnalysis:
          'Following trade friction in the palm oil sector, the British Empire deployed an imperial naval expedition that captured Edo, burned the royal palace, exiled Oba Ovonramwen, and looted the historic Benin Bronzes.'
      },
      {
        civId: 'ottoman_empire',
        civName: 'Ottoman Empire',
        endYearLabel: '1922 CE',
        collapseType: 'Post-WWI Partition & Republican Abolition',
        causeAnalysis:
          'Military exhaustion in World War I, the Arab Revolt, and Allied partition treaties dismantled the empire. Mustafa Kemal Atatürk led the War of Independence, abolishing the Sultanate in 1922 to establish the secular Republic of Turkey.'
      },
      {
        civId: 'british_empire',
        civName: 'British Empire (Imperial Realm)',
        endYearLabel: '1947 – 1997 CE',
        collapseType: 'Systemic Post-WWII Decolonization',
        causeAnalysis:
          'Financial exhaustion from World War II, Indian Independence in 1947, African liberation movements, and the 1997 handover of Hong Kong transformed the maritime empire into the voluntary Commonwealth of Nations.'
      }
    ],
    aroseRecords: [
      {
        civId: 'modern_industrial_digital',
        civName: 'Modern Industrial & Digital Civilization',
        startYearLabel: '1760 CE',
        foundingNote: 'Commercial deployment of coal-fired steam engines in the English Midlands and the Scottish lowlands.'
      }
    ]
  }
];
