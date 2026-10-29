/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CivilizationLifeCycle } from '../types/civilization';

export const CIVILIZATION_LIFECYCLES: Record<string, CivilizationLifeCycle> = {
  sumer: {
    civilizationId: 'sumer',
    genesisSummary:
      'Pioneering settlers in the fertile alluvium of southern Mesopotamia engineered canal networks along the Tigris and Euphrates, turning arid silt basins into high-yield cereal farms and the first walled city-states.',
    peakSummary:
      'The Uruk and Early Dynastic periods witnessed the invention of cuneiform script, monumental step ziggurats, sexagesimal mathematics (base-60), and the world’s earliest codified laws under Ur-Nammu.',
    collapseSummary:
      'Centuries of continuous flood basin irrigation without drainage drew underground mineral salts to the surface, triggering fatal soil salinization. Depopulated and agriculturally exhausted, the cities fell to Akkadian, Elamite, and Amorite conquests.',
    milestones: [
      {
        id: 'sumer-1',
        yearLabel: 'c. 4500 BCE',
        yearBCE: -4500,
        phase: 'genesis',
        phaseLabel: 'Ubaid Settlement',
        title: 'Canal Irrigation in Lower Euphrates',
        description: 'First permanent farming villages establish communal irrigation channels in the marshlands of southern Mesopotamia.',
        keyMechanic: 'Gravity-fed silt canal sluices',
        culturalIconName: 'Sprout'
      },
      {
        id: 'sumer-2',
        yearLabel: 'c. 3400 BCE',
        yearBCE: -3400,
        phase: 'genesis',
        phaseLabel: 'Uruk Urban Revolution',
        title: 'The Emergence of the Megacity',
        description: 'Uruk expands to over 40,000 residents, introducing monumental limestone temples and clay accounting tokens.',
        keyMechanic: 'Centralized temple bureaucracy',
        culturalIconName: 'Landmark'
      },
      {
        id: 'sumer-3',
        yearLabel: 'c. 3200 BCE',
        yearBCE: -3200,
        phase: 'golden_age',
        phaseLabel: 'Pivotal Innovation',
        title: 'Invention of Cuneiform Script',
        description: 'Scribes impress reed styluses into wet river clay, progressing from pictographs to phonetic logosyllabic writing.',
        keyMechanic: 'Clay tablet archival preservation',
        culturalIconName: 'Scroll'
      },
      {
        id: 'sumer-4',
        yearLabel: 'c. 2100 BCE',
        yearBCE: -2100,
        phase: 'golden_age',
        phaseLabel: 'Neo-Sumerian Renaissance',
        title: 'Code of Ur-Nammu & Great Ziggurat of Ur',
        description: 'King Ur-Nammu erects the monumental three-tiered Ziggurat and issues the earliest surviving codified legal statute.',
        keyMechanic: 'Standardized civic jurisprudence',
        culturalIconName: 'Scale'
      },
      {
        id: 'sumer-5',
        yearLabel: 'c. 1900 BCE',
        yearBCE: -1900,
        phase: 'collapse',
        phaseLabel: 'Ecological Collapse',
        title: 'Severe Soil Salinization & Amorite Conquest',
        description: 'Wheat yields drop precipitously as salt crusts the soil; the geopolitical center shifts north to Babylon and Assyria.',
        keyMechanic: 'Mineral salt crusting & agricultural failure',
        culturalIconName: 'Flame'
      }
    ]
  },
  ancient_egypt: {
    civilizationId: 'ancient_egypt',
    genesisSummary:
      'Following climatic desiccation of the Sahara, agriculturalists congregated along the predictable inundation zones of the Nile. King Menes (Narmer) unified Upper and Lower Egypt into a divine pharaonic kingdom.',
    peakSummary:
      'The Old, Middle, and New Kingdoms brought architectural marvels like the Pyramids of Giza, Karnak, and Luxor; a 365-day solar calendar; sophisticated surgery; and a trans-regional empire under Thutmose III and Ramesses II.',
    collapseSummary:
      'Successive Intermediate fragmentation, Nile drought cycles, and foreign invasions by Assyrians, Persians, and Macedonians culminated in Roman annexation upon the death of Cleopatra VII in 30 BCE.',
    milestones: [
      {
        id: 'egypt-1',
        yearLabel: 'c. 3100 BCE',
        yearBCE: -3100,
        phase: 'genesis',
        phaseLabel: 'Dynastic Unification',
        title: 'Narmer Unifies Upper and Lower Egypt',
        description: 'The first pharaonic state is forged, establishing Memphis as the royal capital and hieroglyphic monumental script.',
        keyMechanic: 'Divine pharaonic rule & Nile basin taxation',
        culturalIconName: 'Crown'
      },
      {
        id: 'egypt-2',
        yearLabel: 'c. 2560 BCE',
        yearBCE: -2560,
        phase: 'golden_age',
        phaseLabel: 'Old Kingdom Pyramid Age',
        title: 'Construction of the Great Pyramid of Giza',
        description: 'Pharaoh Khufu oversees the assembly of 2.3 million megalithic limestone blocks, aligned precisely to true north.',
        keyMechanic: 'Megalithic ramp and quarry engineering',
        culturalIconName: 'Landmark'
      },
      {
        id: 'egypt-3',
        yearLabel: 'c. 1479 – 1213 BCE',
        yearBCE: -1479,
        phase: 'golden_age',
        phaseLabel: 'New Kingdom Imperial Florescence',
        title: 'Expansion to Euphrates & Valley of the Kings',
        description: 'Under Hatshepsut, Thutmose III, and Ramesses II, Egypt commands Levant trade, gold routes to Nubia, and monumental temple complexes.',
        keyMechanic: 'Chariot warfare & international diplomacy',
        culturalIconName: 'Globe'
      },
      {
        id: 'egypt-4',
        yearLabel: '332 BCE',
        yearBCE: -332,
        phase: 'collapse',
        phaseLabel: 'Macedonian Transition',
        title: 'Alexander the Great & Ptolemaic Dynasty',
        description: 'Alexander annexes Egypt, establishing Alexandria as a Hellenistic scholarly and maritime trading hub.',
        keyMechanic: 'Hellenistic administrative integration',
        culturalIconName: 'Columns3'
      },
      {
        id: 'egypt-5',
        yearLabel: '30 BCE',
        yearBCE: -30,
        phase: 'collapse',
        phaseLabel: 'Roman Annexation',
        title: 'Fall of Cleopatra & Roman Imperial Province',
        description: 'Octavian absorbs Egypt into the Roman Empire as the personal granary of the emperor, terminating dynastic rule.',
        keyMechanic: 'Imperial provincial annexation',
        culturalIconName: 'AlertOctagon'
      }
    ]
  },
  indus_valley: {
    civilizationId: 'indus_valley',
    genesisSummary:
      'Communities along the perennial Indus and seasonal Ghaggar-Hakra river valleys harnessed biannual flood cycles, innovating standardized kiln-fired brickmaking, metallurgy, and planned agrarian settlements.',
    peakSummary:
      'Mohenjo-daro and Harappa set the ancient world standard for municipal sanitation: covered street drains, private flush toilets, public baths, standardized decimal weights, and tidal drydocks at Lothal.',
    collapseSummary:
      'Tectonic shifts redirected river systems and dried up the sacred Ghaggar-Hakra river, triggering erratic floods and aridification. Unable to sustain high urban density, inhabitants dispersed eastward toward the Ganges.',
    milestones: [
      {
        id: 'indus-1',
        yearLabel: 'c. 3300 BCE',
        yearBCE: -3300,
        phase: 'genesis',
        phaseLabel: 'Early Harappan',
        title: 'Agrarian Fortified Settlements',
        description: 'Agricultural villages along the Indus develop regional trade networks, wheel-thrown ceramics, and mud-brick fortifications.',
        keyMechanic: 'Biannual river silt farming',
        culturalIconName: 'Sprout'
      },
      {
        id: 'indus-2',
        yearLabel: 'c. 2600 BCE',
        yearBCE: -2600,
        phase: 'golden_age',
        phaseLabel: 'Mature Harappan Phase',
        title: 'Grid Urban Planning & Sanitation Engineering',
        description: 'Construction of standardized baked-brick cities featuring multi-story residences, covered sewers, and public baths.',
        keyMechanic: 'Standardized 1:2:4 baked brick metrics',
        culturalIconName: 'Landmark'
      },
      {
        id: 'indus-3',
        yearLabel: 'c. 2400 BCE',
        yearBCE: -2400,
        phase: 'golden_age',
        phaseLabel: 'Maritime Apex',
        title: 'Lothal Tidal Dockyard & Persian Gulf Trade',
        description: 'Harappan merchants build the first artificial tidal dockyard at Lothal, exporting carnelian, lapis, and cotton to Sumer (Meluhha).',
        keyMechanic: 'Hydraulic lock-gate maritime basins',
        culturalIconName: 'Globe'
      },
      {
        id: 'indus-4',
        yearLabel: 'c. 1900 – 1700 BCE',
        yearBCE: -1900,
        phase: 'collapse',
        phaseLabel: 'Hydrological Desiccation',
        title: 'Drying of Ghaggar-Hakra & Urban Decline',
        description: 'River channels shift due to seismic activity; monumental civic maintenance ceases and cities gradually depopulate.',
        keyMechanic: 'Tectonic diversion of water tables',
        culturalIconName: 'Flame'
      },
      {
        id: 'indus-5',
        yearLabel: 'c. 1300 BCE',
        yearBCE: -1300,
        phase: 'collapse',
        phaseLabel: 'De-urbanization',
        title: 'Rural Eastward Migration to the Ganges',
        description: 'The civilization transitions into smaller, non-literate agricultural communities throughout northern and western India.',
        keyMechanic: 'Cultural devolution to rural villages',
        culturalIconName: 'Users'
      }
    ]
  },
  han_dynasty: {
    civilizationId: 'han_dynasty',
    genesisSummary:
      'Following the collapse of the harsh Qin Dynasty, peasant rebel leader Liu Bang founded the Han Dynasty, establishing a durable synthesis of Legalist administrative structure and Confucian moral governance.',
    peakSummary:
      'The Han era introduced the Imperial Civil Service Examination, paper making (Cai Lun), the Silk Road trans-continental trade network, iron plows, blast furnaces, and the comprehensive historical chronicles of Sima Qian.',
    collapseSummary:
      'Palace corruption by eunuch factions and aristocratic land grabs drove peasant landlessness, culminating in the Yellow Turban Rebellion. Warlords fragmented the realm into the chaotic Three Kingdoms in 220 CE.',
    milestones: [
      {
        id: 'han-1',
        yearLabel: '202 BCE',
        yearBCE: -202,
        phase: 'genesis',
        phaseLabel: 'Dynastic Founding',
        title: 'Liu Bang Founds the Han at Chang’an',
        description: 'Emperor Gaozu reduces peasant taxes, relaxes Qin penal codes, and establishes a centralized bureaucratic monarchy.',
        keyMechanic: 'Confucian-Legalist state synthesis',
        culturalIconName: 'Crown'
      },
      {
        id: 'han-2',
        yearLabel: '138 BCE',
        yearBCE: -138,
        phase: 'golden_age',
        phaseLabel: 'Silk Road Opening',
        title: 'Zhang Qian’s Mission to the Western Regions',
        description: 'Emperor Wu dispatches envoy Zhang Qian across Central Asia, inaugurating the trans-continental Silk Road trade network.',
        keyMechanic: 'State-protected caravan diplomacy',
        culturalIconName: 'Globe'
      },
      {
        id: 'han-3',
        yearLabel: '105 CE',
        yearBCE: 105,
        phase: 'golden_age',
        phaseLabel: 'Technological Revolution',
        title: 'Cai Lun Standardizes Paper Making',
        description: 'Court official Cai Lun creates mulberry bark and hemp paper, revolutionizing record keeping and imperial administration.',
        keyMechanic: 'Cellulose fiber papermaking',
        culturalIconName: 'Scroll'
      },
      {
        id: 'han-4',
        yearLabel: '184 CE',
        yearBCE: 184,
        phase: 'collapse',
        phaseLabel: 'Agrarian Insurrection',
        title: 'The Yellow Turban Rebellion',
        description: 'A massive Daoist peasant revolt erupts across the Yellow River basin against corrupt court cliques and oppressive tax burdens.',
        keyMechanic: 'Messianic agrarian insurgency',
        culturalIconName: 'AlertOctagon'
      },
      {
        id: 'han-5',
        yearLabel: '220 CE',
        yearBCE: 220,
        phase: 'collapse',
        phaseLabel: 'Imperial Abdication',
        title: 'Abdication of Emperor Xian & Three Kingdoms',
        description: 'Warlord Cao Pi forces the last Han emperor to abdicate, shattering imperial unity into the three warring states of Wei, Shu, and Wu.',
        keyMechanic: 'Warlord division of central power',
        culturalIconName: 'Scale'
      }
    ]
  },
  classical_rome: {
    civilizationId: 'classical_rome',
    genesisSummary:
      'From a pastoral settlement along the Tiber River, Rome overthrew its Etruscan monarchy to establish a republican constitution governed by the Senate, consuls, and citizen assemblies, conquering the Italian peninsula.',
    peakSummary:
      'Rome conquered the Mediterranean basin ("Mare Nostrum"), pioneering pozzolana hydraulic concrete, the true arch and dome, 80,000 km of paved highways, aqueducts, and universal Roman jurisprudence.',
    collapseSummary:
      'Compounding currency debasement, runaway inflation, constant imperial civil wars, and Germanic incursions fleeing the Huns led to the deposition of Romulus Augustulus in 476 CE.',
    milestones: [
      {
        id: 'rome-1',
        yearLabel: '509 BCE',
        yearBCE: -509,
        phase: 'genesis',
        phaseLabel: 'Republican Genesis',
        title: 'Expulsion of Tarquin & Birth of the Republic',
        description: 'The Roman monarchy is overthrown, establishing a dual-consul republic with a Senate and Tribune system protecting plebeian rights.',
        keyMechanic: 'Constitutional checks & balance assemblies',
        culturalIconName: 'Scale'
      },
      {
        id: 'rome-2',
        yearLabel: '27 BCE',
        yearBCE: -27,
        phase: 'golden_age',
        phaseLabel: 'Imperial Transition',
        title: 'Pax Romana under Augustus Caesar',
        description: 'Octavian assumes the title Augustus, consolidating military and executive authority while ushering in two centuries of imperial peace.',
        keyMechanic: 'Imperial provincial bureaucracy',
        culturalIconName: 'Crown'
      },
      {
        id: 'rome-3',
        yearLabel: '125 CE',
        yearBCE: 125,
        phase: 'golden_age',
        phaseLabel: 'Architectural Apex',
        title: 'Completion of the Pantheon & Roman Concrete Domes',
        description: 'Emperor Hadrian rebuilds the Pantheon with an unreinforced pozzolana concrete dome that remains the largest in the world.',
        keyMechanic: 'Volcanic pozzolana hydraulic cement',
        culturalIconName: 'Landmark'
      },
      {
        id: 'rome-4',
        yearLabel: '212 CE',
        yearBCE: 212,
        phase: 'golden_age',
        phaseLabel: 'Legal Integration',
        title: 'Constitutio Antoniniana Universal Citizenship',
        description: 'Emperor Caracalla grants Roman citizenship to all free men across the empire, standardizing legal rights and imperial taxes.',
        keyMechanic: 'Universal imperial citizenship rights',
        culturalIconName: 'Award'
      },
      {
        id: 'rome-5',
        yearLabel: '476 CE',
        yearBCE: 476,
        phase: 'collapse',
        phaseLabel: 'Western Fall',
        title: 'Odoacer Deposes Romulus Augustulus',
        description: 'Germanic chieftain Odoacer deposes the final western Roman emperor, sending imperial regalia to Constantinople.',
        keyMechanic: 'Military mutiny & barbarian partition',
        culturalIconName: 'AlertOctagon'
      }
    ]
  },
  aksumite_empire: {
    civilizationId: 'aksumite_empire',
    genesisSummary:
      'Indigenous agriculturalists on the Ethiopian plateau synthesized terraced highland agriculture and iron metallurgy with maritime trade out of the Red Sea port of Adulis, establishing a unified imperial kingdom.',
    peakSummary:
      'Aksum minted international gold, silver, and bronze coinage; developed the vocalic Ge’ez script; erected towering 160-ton monolithic granite stelae; and officially adopted Christianity under King Ezana.',
    collapseSummary:
      'The expansion of the early Islamic Caliphates seized control of Red Sea trade routes, cutting Aksum off from Mediterranean and Indian markets. Severe hill deforestation and soil erosion forced a retreat south to the highlands.',
    milestones: [
      {
        id: 'aksum-1',
        yearLabel: 'c. 100 CE',
        yearBCE: 100,
        phase: 'genesis',
        phaseLabel: 'Highland Consolidation',
        title: 'Integration of Adulis Port & Aksum Capital',
        description: 'Aksumite kings unite the Tigray plateau, constructing dry-stone royal palaces and capturing ivory maritime commerce.',
        keyMechanic: 'Terraced ox-drawn plow agriculture',
        culturalIconName: 'Sprout'
      },
      {
        id: 'aksum-2',
        yearLabel: 'c. 270 CE',
        yearBCE: 270,
        phase: 'golden_age',
        phaseLabel: 'Monetary Innovation',
        title: 'King Endubis Mints Sovereign Gold Coinage',
        description: 'Aksum becomes the first sub-Saharan state to issue official trilingual gold and silver currency for international trade.',
        keyMechanic: 'Standardized precious metal monetary minting',
        culturalIconName: 'Coins'
      },
      {
        id: 'aksum-3',
        yearLabel: 'c. 340 CE',
        yearBCE: 340,
        phase: 'golden_age',
        phaseLabel: 'Religious & Monumental Peak',
        title: 'King Ezana Converts & Great Granite Obelisks',
        description: 'King Ezana proclaims Christianity as the state religion and erects the monolithic 24-meter Obelisk of Aksum.',
        keyMechanic: 'Monolithic granite quarrying & Ge’ez codification',
        culturalIconName: 'Landmark'
      },
      {
        id: 'aksum-4',
        yearLabel: 'c. 700 CE',
        yearBCE: 700,
        phase: 'collapse',
        phaseLabel: 'Maritime Severance',
        title: 'Red Sea Blockade by Islamic Caliphate',
        description: 'Loss of maritime dominance over the Dahlak archipelago and Adulis cripples state treasury and coin minting.',
        keyMechanic: 'Commercial trade route encirclement',
        culturalIconName: 'Globe'
      },
      {
        id: 'aksum-5',
        yearLabel: 'c. 940 CE',
        yearBCE: 940,
        phase: 'collapse',
        phaseLabel: 'Highland Transition',
        title: 'Erosion, Depopulation & Southern Shift',
        description: 'Centuries of soil erosion around the capital trigger relocation south, setting the foundation for the Zagwe dynasty.',
        keyMechanic: 'Agrarian soil exhaustion & dynastic migration',
        culturalIconName: 'Flame'
      }
    ]
  },
  maya: {
    civilizationId: 'maya',
    genesisSummary:
      'Pre-Classic Mesoamerican communities in the Petén rainforest engineered raised agricultural fields in seasonal wetlands and hillside terraces, establishing autonomous ceremonial centers centered on the maize god.',
    peakSummary:
      'Classic Maya city-states (Tikal, Calakmul, Palenque) achieved mathematical mastery of zero, calculated Venusian cycles, built corbel-arched limestone pyramids, and carved historical dynasties in intricate logosyllabic glyphs.',
    collapseSummary:
      'Deforestation for agriculture and lime-stucco production intensified a century-long megadrought. Depleted food yields undermined divine king legitimacy, sparking catastrophic warfare and abandonment of southern lowland cities.',
    milestones: [
      {
        id: 'maya-1',
        yearLabel: 'c. 250 CE',
        yearBCE: 250,
        phase: 'genesis',
        phaseLabel: 'Classic Dawn',
        title: 'Rise of Dynastic Lowland Kingdoms',
        description: 'Hereditary divine kings (K’uhul Ajaw) establish dynasties at Tikal and Calakmul with elaborate ballcourts and stelae.',
        keyMechanic: 'Wetland chinampa & terrace agro-engineering',
        culturalIconName: 'Sprout'
      },
      {
        id: 'maya-2',
        yearLabel: 'c. 378 CE',
        yearBCE: 378,
        phase: 'golden_age',
        phaseLabel: 'Teotihuacan Contact',
        title: 'The Arrival of Siyaj K’ak’ at Tikal',
        description: 'Strategic military alliance and cultural exchange with Teotihuacan transforms Petén weaponry, architecture, and political hierarchy.',
        keyMechanic: 'Inter-regional military statecraft',
        culturalIconName: 'Crown'
      },
      {
        id: 'maya-3',
        yearLabel: 'c. 680 – 750 CE',
        yearBCE: 680,
        phase: 'golden_age',
        phaseLabel: 'Astronomical & Epigraphic Florescence',
        title: 'Mathematical Zero & Long Count Calendars',
        description: 'Maya astronomers compile precise eclipse tables, Venus synodic cycles, and calculate cosmological epochs using positional zero.',
        keyMechanic: 'Positional vigesimal mathematics & hieroglyphic codices',
        culturalIconName: 'Cpu'
      },
      {
        id: 'maya-4',
        yearLabel: 'c. 800 – 850 CE',
        yearBCE: 800,
        phase: 'collapse',
        phaseLabel: 'Severe Megadrought',
        title: 'Centennial Drought & Agrarian Failure',
        description: 'Prolonged droughts dry out reservoirs; royal elites fail to produce rain rituals, igniting peasant insurrections.',
        keyMechanic: 'Anthropogenic deforestation & rainfall deficit',
        culturalIconName: 'Flame'
      },
      {
        id: 'maya-5',
        yearLabel: 'c. 900 CE',
        yearBCE: 900,
        phase: 'collapse',
        phaseLabel: 'Southern Lowland Abandonment',
        title: 'Desertion of Tikal & Northern Relocation',
        description: 'Monumental construction halts in the south; populations migrate north to Postclassic centers like Chichen Itza and Mayapan.',
        keyMechanic: 'Complete urban evacuation into the jungle',
        culturalIconName: 'AlertOctagon'
      }
    ]
  },
  islamic_golden_age: {
    civilizationId: 'islamic_golden_age',
    genesisSummary:
      'Following the rapid political unification of Arabia and the Near East under the early Caliphates, the Abbasid Dynasty established Baghdad as a round cosmopolitan metropolis at the nexus of Afro-Eurasian trade.',
    peakSummary:
      'The House of Wisdom (Bayt al-Hikma) translated and synthesized Greek, Persian, and Indian sciences; Al-Khwarizmi invented Algebra; Ibn al-Haytham established modern experimental optics; and Ibn Sina systematized medicine.',
    collapseSummary:
      'Provincial governors fragmented caliphal central authority. The catastrophic blow struck in 1258 CE when Hulagu Khan’s Mongol army sacked Baghdad, burned its grand libraries, and dismantled Mesopotamia’s canal systems.',
    milestones: [
      {
        id: 'islamic-1',
        yearLabel: '762 CE',
        yearBCE: 762,
        phase: 'genesis',
        phaseLabel: 'Abbasid Founding',
        title: 'Caliph Al-Mansur Founds the Round City of Baghdad',
        description: 'Baghdad is constructed along the Tigris as an imperial capital designed for bureaucratic administration and trade.',
        keyMechanic: 'Hydraulic qanat canals & geometric urban design',
        culturalIconName: 'Landmark'
      },
      {
        id: 'islamic-2',
        yearLabel: '830 CE',
        yearBCE: 830,
        phase: 'golden_age',
        phaseLabel: 'Translation Movement',
        title: 'House of Wisdom & Paper Production',
        description: 'Caliph Al-Ma’mun funds the systematic translation of world scientific manuscripts into Arabic, aided by Chinese paper mills.',
        keyMechanic: 'State-funded translation bureaus & rag paper',
        culturalIconName: 'Scroll'
      },
      {
        id: 'islamic-3',
        yearLabel: '820 – 1020 CE',
        yearBCE: 820,
        phase: 'golden_age',
        phaseLabel: 'Scientific Revolution',
        title: 'Invention of Algebra & Experimental Optics',
        description: 'Al-Khwarizmi publishes Al-Jabr; Ibn al-Haytham authors the Book of Optics; Ibn Sina writes the Canon of Medicine.',
        keyMechanic: 'Decimal positional arithmetic & empirical method',
        culturalIconName: 'Cpu'
      },
      {
        id: 'islamic-4',
        yearLabel: '1055 CE',
        yearBCE: 1055,
        phase: 'collapse',
        phaseLabel: 'Political Fragmentation',
        title: 'Seljuk Turks Assume De Facto Power',
        description: 'Central caliphal authority devolves to regional sultanates, reducing the Abbasid Caliph to a ceremonial religious leader.',
        keyMechanic: 'Sultanate military fragmentation',
        culturalIconName: 'Crown'
      },
      {
        id: 'islamic-5',
        yearLabel: '1258 CE',
        yearBCE: 1258,
        phase: 'collapse',
        phaseLabel: 'Mongol Sacking',
        title: 'Siege of Baghdad by Hulagu Khan',
        description: 'Mongol armies breach Baghdad, massacre the populace, burn the House of Wisdom, and execute the final Abbasid Caliph.',
        keyMechanic: 'Total urban military devastation & canal destruction',
        culturalIconName: 'Flame'
      }
    ]
  },
  mali_empire: {
    civilizationId: 'mali_empire',
    genesisSummary:
      'Sundiata Keita united the Mandinka clans following victory at the Battle of Kirina in 1235 CE, codifying the Kouroukan Fuga oral constitution and taking control of the fertile Niger river floodplains.',
    peakSummary:
      'Mali controlled the trans-Saharan gold-salt trade; Mansa Musa’s 1324 CE pilgrimage destabilized Mediterranean gold markets; and Timbuktu’s Sankore University became a global center for Islamic law, medicine, and astronomy.',
    collapseSummary:
      'Repeated succession civil wars weakened the crown. Peripheral vassals rebelled, leading the rising Songhai Empire to seize Timbuktu and Gao, while European coastal trade bypassed the Saharan camel networks.',
    milestones: [
      {
        id: 'mali-1',
        yearLabel: '1235 CE',
        yearBCE: 1235,
        phase: 'genesis',
        phaseLabel: 'Imperial Foundation',
        title: 'Battle of Kirina & Kouroukan Fuga',
        description: 'Sundiata Keita defeats the Sosso king and proclaims the Kouroukan Fuga, an oral constitution governing clan rights and statehood.',
        keyMechanic: 'Federal constitutional monarchy of clans (Gbara)',
        culturalIconName: 'Scale'
      },
      {
        id: 'mali-2',
        yearLabel: '1324 CE',
        yearBCE: 1324,
        phase: 'golden_age',
        phaseLabel: 'Golden Apex',
        title: 'Mansa Musa’s Historic Hajj to Mecca',
        description: 'Mansa Musa travels with a 60,000-person caravan carrying tons of gold, putting West African wealth onto European world maps.',
        keyMechanic: 'Monopolization of Bambuk gold fields & salt mines',
        culturalIconName: 'Coins'
      },
      {
        id: 'mali-3',
        yearLabel: 'c. 1350 CE',
        yearBCE: 1350,
        phase: 'golden_age',
        phaseLabel: 'Scholarly Flowering',
        title: 'University of Sankore & Timbuktu Libraries',
        description: 'Timbuktu becomes an intellectual capital holding hundreds of thousands of illuminated manuscripts in science, theology, and law.',
        keyMechanic: 'Sudano-Sahelian adobe monumental architecture',
        culturalIconName: 'Scroll'
      },
      {
        id: 'mali-4',
        yearLabel: '1468 CE',
        yearBCE: 1468,
        phase: 'collapse',
        phaseLabel: 'Songhai Expansion',
        title: 'Sonni Ali Captures Timbuktu and Gao',
        description: 'The militarized Songhai Empire expands down the Niger river, capturing Mali’s key commercial and university hubs.',
        keyMechanic: 'Territorial loss of river trade bottlenecks',
        culturalIconName: 'AlertOctagon'
      },
      {
        id: 'mali-5',
        yearLabel: 'c. 1670 CE',
        yearBCE: 1670,
        phase: 'collapse',
        phaseLabel: 'Dynastic Dissolution',
        title: 'Bamana Invasions & Fragmentation into Chiefdoms',
        description: 'Following Moroccan incursions and Bamana wars, the centralized Mali state disintegrates into localized Mandinka principalities.',
        keyMechanic: 'Loss of central military authority',
        culturalIconName: 'Users'
      }
    ]
  },
  incan_empire: {
    civilizationId: 'incan_empire',
    genesisSummary:
      'From the Cuzco valley in the high Andes, Pachacuti transformed a small regional kingdom into Tawantinsuyu ("The Four United Regions"), using seismic-proof ashlar stonework and vertical ecological terracing.',
    peakSummary:
      'The Inca built the 40,000-km Qhapaq Ñan highway network across Andean glaciers; coordinated a non-monetary command economy using Khipu knot records; and eliminated hunger through state surplus storehouses (Qollqas).',
    collapseSummary:
      'European smallpox wiped out Emperor Wayna Qhapaq and his heir, triggering a ruinous civil war between Huáscar and Atahualpa. In 1532, Francisco Pizarro ambushed Atahualpa at Cajamarca, capturing the empire.',
    milestones: [
      {
        id: 'inca-1',
        yearLabel: '1438 CE',
        yearBCE: 1438,
        phase: 'genesis',
        phaseLabel: 'Imperial Expansion',
        title: 'Pachacuti Crowned Sapa Inca at Cusco',
        description: 'Pachacuti repels the Chanca invasion, rebuilds Cusco in the shape of a puma, and launches trans-Andean imperial expansion.',
        keyMechanic: 'Labor tax (Mita) & reciprocal storehouse economy',
        culturalIconName: 'Crown'
      },
      {
        id: 'inca-2',
        yearLabel: 'c. 1470 CE',
        yearBCE: 1470,
        phase: 'golden_age',
        phaseLabel: 'Engineering Apex',
        title: 'The Qhapaq Ñan: 40,000-km Highway & Bridges',
        description: 'Royal engineers pave stone highways spanning high mountain passes, suspension bridges, and relay chasqui runner stations.',
        keyMechanic: 'Suspension bridge & ashlar mountain engineering',
        culturalIconName: 'Landmark'
      },
      {
        id: 'inca-3',
        yearLabel: 'c. 1500 CE',
        yearBCE: 1500,
        phase: 'golden_age',
        phaseLabel: 'Administrative Mastery',
        title: 'Khipu Knot Notation & Qollqa Storehouse Network',
        description: 'Quipucamayocs keep meticulous decimal census, army logistics, and grain yields across vertical ecological tiers using cord knots.',
        keyMechanic: '3D colored cord knotted notation system',
        culturalIconName: 'Scroll'
      },
      {
        id: 'inca-4',
        yearLabel: '1527 – 1532 CE',
        yearBCE: 1527,
        phase: 'collapse',
        phaseLabel: 'Epidemic & Civil War',
        title: 'Smallpox Pandemic & Dynastic War',
        description: 'Old World smallpox sweeps ahead of Spanish arrivals, killing Emperor Wayna Qhapaq and igniting civil war between his sons.',
        keyMechanic: 'Biological epidemic & succession conflict',
        culturalIconName: 'Flame'
      },
      {
        id: 'inca-5',
        yearLabel: '1532 – 1572 CE',
        yearBCE: 1532,
        phase: 'collapse',
        phaseLabel: 'Conquest & Neo-Inca Fall',
        title: 'Ambush at Cajamarca & Execution of Túpac Amaru',
        description: 'Pizarro captures Atahualpa using cavalry and steel; the final neo-Inca stronghold at Vilcabamba falls in 1572.',
        keyMechanic: 'Gunpowder/cavalry ambush & colonial dismantling',
        culturalIconName: 'AlertOctagon'
      }
    ]
  },
  kingdom_of_benin: {
    civilizationId: 'kingdom_of_benin',
    genesisSummary:
      'The Edo people overthrew the Ogiso dynasty and invited Prince Oranmiyan from Ife, establishing the Oba divine monarchy with advanced lost-wax brass guilds and rotational rainforest agriculture.',
    peakSummary:
      'Under Oba Ewuare the Great, Benin City constructed the Walls of Benin (16,000 km of earthworks), created the world-renowned Benin Bronzes depicting royal rituals, and engineered street lighting and drainage.',
    collapseSummary:
      'During the 1897 British Punitive Expedition, British forces armed with Maxim guns invaded Benin City, burned the royal palace, looted thousands of irreplaceable brasses and ivories, and exiled the Oba.',
    milestones: [
      {
        id: 'benin-1',
        yearLabel: 'c. 1180 CE',
        yearBCE: 1180,
        phase: 'genesis',
        phaseLabel: 'Oba Dynasty Inception',
        title: 'Prince Eweka Founds the Oba Monarchy',
        description: 'The first Oba, Eweka I, unifies the Edo wards around the central palace, creating non-hereditary palace and town councils.',
        keyMechanic: 'Eghaevbo balance of town and palace chiefs',
        culturalIconName: 'Crown'
      },
      {
        id: 'benin-2',
        yearLabel: 'c. 1440 CE',
        yearBCE: 1440,
        phase: 'golden_age',
        phaseLabel: 'Urban Engineering',
        title: 'Oba Ewuare & the Great Walls of Benin',
        description: 'Ewuare the Great constructs the immense earthwork defense network extending 16,000 km, longer than the Great Wall of China.',
        keyMechanic: 'Linear earthwork ditch-and-bank engineering',
        culturalIconName: 'Landmark'
      },
      {
        id: 'benin-3',
        yearLabel: 'c. 1500 – 1600 CE',
        yearBCE: 1500,
        phase: 'golden_age',
        phaseLabel: 'Metallurgical Masterpieces',
        title: 'The Royal Guild of Lost-Wax Brass Casters (Igun Eronmwon)',
        description: 'Guild artisans cast commemorative brass heads and high-relief narrative palace plaques honoring Obas and Queen Mothers (Idia).',
        keyMechanic: 'Lost-wax (cire perdue) copper-alloy metallurgy',
        culturalIconName: 'Sparkles'
      },
      {
        id: 'benin-4',
        yearLabel: '1892 CE',
        yearBCE: 1892,
        phase: 'collapse',
        phaseLabel: 'Imperial Pressures',
        title: 'Gallwey Treaty & Palm Oil Trade Disputes',
        description: 'British colonial expansion attempts to break Benin’s royal monopoly on palm oil, ivory, and coastal trade tariffs.',
        keyMechanic: 'Commercial protectorate encroachment',
        culturalIconName: 'Globe'
      },
      {
        id: 'benin-5',
        yearLabel: '1897 CE',
        yearBCE: 1897,
        phase: 'collapse',
        phaseLabel: 'Punitive Destruction',
        title: 'British Expedition & Sacking of Benin City',
        description: 'British military forces raze Benin City, loot thousands of royal bronzes to European museums, and exile Oba Ovonramwen.',
        keyMechanic: 'Colonial military invasion & cultural looting',
        culturalIconName: 'Flame'
      }
    ]
  },
  modern_industrial_digital: {
    civilizationId: 'modern_industrial_digital',
    genesisSummary:
      'Beginning in 18th-century Britain, coal-fired steam engines and mechanized textile factories replaced human muscle power, expanding through the Haber-Bosch chemical process and electrical grids into a planetary techno-sphere.',
    peakSummary:
      'Silicon semiconductors, the internet, planetary satellite telemetry, nuclear energy, space probes landing on the Moon, and genomic sequencing (CRISPR) have interconnected 8 billion human beings in real time.',
    collapseSummary:
      'Modernity faces systemic junction rather than historic fall: industrial greenhouse gases driving global climate disruption, biodiversity collapse, and brittle supply chains vulnerable to planetary systemic shocks.',
    milestones: [
      {
        id: 'modern-1',
        yearLabel: '1769 CE',
        yearBCE: 1769,
        phase: 'genesis',
        phaseLabel: 'Steam Revolution',
        title: 'James Watt Patents the Separate Condenser Steam Engine',
        description: 'Mechanized thermodynamic power transforms manufacturing, mining, railways, and maritime cargo transport.',
        keyMechanic: 'Fossil fuel thermodynamic energy conversion',
        culturalIconName: 'Cpu'
      },
      {
        id: 'modern-2',
        yearLabel: '1909 CE',
        yearBCE: 1909,
        phase: 'golden_age',
        phaseLabel: 'Agro-Chemical Breakthrough',
        title: 'Haber-Bosch Nitrogen Synthesis',
        description: 'Fritz Haber and Carl Bosch fix atmospheric nitrogen into ammonia fertilizer, lifting the planetary agricultural carrying capacity.',
        keyMechanic: 'Synthetic chemical fertilizer synthesis',
        culturalIconName: 'Sprout'
      },
      {
        id: 'modern-3',
        yearLabel: '1969 CE',
        yearBCE: 1969,
        phase: 'golden_age',
        phaseLabel: 'Technological Apex',
        title: 'Apollo 11 Moon Landing & ARPANET Inception',
        description: 'Humanity lands on the lunar surface and transmits the first digital packet communication between remote mainframe computers.',
        keyMechanic: 'Orbital astronautics & digital packet switching',
        culturalIconName: 'Globe'
      },
      {
        id: 'modern-4',
        yearLabel: '1990 – 2026 CE',
        yearBCE: 1990,
        phase: 'golden_age',
        phaseLabel: 'Digital Technosphere',
        title: 'World Wide Web, Smartphones & Deep Neural Networks',
        description: 'Ubiquitous mobile computing, planetary fiber optic cables, decentralized ledgers, and artificial intelligence models.',
        keyMechanic: 'Planetary silicon microprocessors & real-time compute',
        culturalIconName: 'Cpu'
      },
      {
        id: 'modern-5',
        yearLabel: 'Present Era',
        yearBCE: 2026,
        phase: 'collapse',
        phaseLabel: 'Anthropocene Junction',
        title: 'Climate Boundaries, Biosphere Strain & Energy Transition',
        description: 'The civilization confronts global greenhouse heating, ocean acidification, and the race toward circular renewable grids.',
        keyMechanic: 'Planetary ecological boundary transgression',
        culturalIconName: 'AlertOctagon'
      }
    ]
  },
  classical_greece: {
    civilizationId: 'classical_greece',
    genesisSummary:
      'Following the collapse of the Mycenaean palaces and the Archaic re-emergence, Greek poleis formed around shared linguistic identity, Homeric epics, and maritime olive/wine trade across the Aegean.',
    peakSummary:
      'The 5th century BCE Athenian Golden Age under Pericles delivered direct citizen democracy, the Parthenon, Euclidean geometry, tragic and comic theater, and medical empiricism under Hippocrates.',
    collapseSummary:
      'The protracted Peloponnesian War (431–404 BCE) exhausted polis finances and citizen armies, leading to Macedonian hegemony under Philip II and Alexander, and ultimate annexation by the Roman Republic in 146 BCE.',
    milestones: [
      {
        id: 'greece-1',
        yearLabel: 'c. 776 BCE',
        yearBCE: -776,
        phase: 'genesis',
        phaseLabel: 'Panhellenic Dawn',
        title: 'First Olympic Games & Phonetic Alphabet',
        description: 'Panhellenic cultural institutions crystallize at Olympia; Greeks vocalize the Phoenician alphabet to record Homeric epics.',
        keyMechanic: 'Panhellenic religious athletic truce & literacy',
        culturalIconName: 'Scroll'
      },
      {
        id: 'greece-2',
        yearLabel: '508 BCE',
        yearBCE: -508,
        phase: 'genesis',
        phaseLabel: 'Democratic Revolution',
        title: 'Cleisthenes Establishes Athenian Democracy',
        description: 'Reorganization of Attica into ten mixed demes breaks aristocratic clans, instituting the sovereign Assembly (Ekklesia) and lot-selected Council.',
        keyMechanic: 'Constitutional direct civic franchise by lot',
        culturalIconName: 'Scale'
      },
      {
        id: 'greece-3',
        yearLabel: '447 – 432 BCE',
        yearBCE: -447,
        phase: 'golden_age',
        phaseLabel: 'Classical Florescence',
        title: 'Periclean Building Program & Philosophy',
        description: 'Construction of the Parthenon by Ictinus and Phidias; Socrates questions ethical axioms; Sophocles and Euripides stage tragic dramas.',
        keyMechanic: 'Doric golden-ratio marble engineering & dialectic inquiry',
        culturalIconName: 'Landmark'
      },
      {
        id: 'greece-4',
        yearLabel: '431 – 404 BCE',
        yearBCE: -431,
        phase: 'collapse',
        phaseLabel: 'Inter-Polis Ruin',
        title: 'The Peloponnesian War',
        description: 'Catastrophic conflict between the Athenian maritime empire and Spartan Peloponnesian League leaves Greece bankrupted and depopulated.',
        keyMechanic: 'Exhaustive intra-civilizational total war',
        culturalIconName: 'Flame'
      },
      {
        id: 'greece-5',
        yearLabel: '146 BCE',
        yearBCE: -146,
        phase: 'collapse',
        phaseLabel: 'Roman Annexation',
        title: 'Sack of Corinth & Hellenistic Provincial Shift',
        description: 'Roman consul Mummius sacks Corinth; Greece is absorbed into the Roman Republic as the province of Achaea.',
        keyMechanic: 'Roman legionary conquest & cultural assimilation',
        culturalIconName: 'AlertOctagon'
      }
    ]
  },
  norse_vikings: {
    civilizationId: 'norse_vikings',
    genesisSummary:
      'Scandinavian iron-age communities along Norwegian fjords and Danish sounds mastered clinker shipwrightry and sail design, expanding outward in search of portable wealth, arable farmland, and trade alliances.',
    peakSummary:
      'Norse seafarers established the Althing assembly in Iceland (930 CE), explored Greenland and North America, founded trading emporia across the British Isles and Ireland, and dominated river trade to Byzantium as the Varangian Guard.',
    collapseSummary:
      'Consolidation of centralized royal dynasties in Denmark, Norway, and Sweden, combined with Christianization, integrated Norse society into standard European feudal statecraft, concluding with the 1066 Battle of Stamford Bridge.',
    milestones: [
      {
        id: 'norse-1',
        yearLabel: '793 CE',
        yearBCE: 793,
        phase: 'genesis',
        phaseLabel: 'Maritime Genesis',
        title: 'Raid on Lindisfarne & Dawn of Seafaring Reach',
        description: 'Norse shallow-draft longships cross the North Sea, inaugurating two centuries of combined maritime raiding and mercantile expansion.',
        keyMechanic: 'Flexible oak clinker hull naval engineering',
        culturalIconName: 'Globe'
      },
      {
        id: 'norse-2',
        yearLabel: '930 CE',
        yearBCE: 930,
        phase: 'golden_age',
        phaseLabel: 'Institutional Breakthrough',
        title: 'Foundation of the Icelandic Althing',
        description: 'Free farmers gather at Thingvellir to recite laws, resolve disputes, and elect Lawspeakers, establishing the world’s oldest parliament.',
        keyMechanic: 'Parliamentary customary law code assembly',
        culturalIconName: 'Scale'
      },
      {
        id: 'norse-3',
        yearLabel: 'c. 1000 CE',
        yearBCE: 1000,
        phase: 'golden_age',
        phaseLabel: 'Oceanic Apex',
        title: 'Leif Erikson Lands at Vinland (North America)',
        description: 'Norse expeditions cross the North Atlantic to establish timber and trade encampments in modern Newfoundland five centuries before Columbus.',
        keyMechanic: 'Open-ocean solar navigation (sunstones)',
        culturalIconName: 'Compass'
      },
      {
        id: 'norse-4',
        yearLabel: 'c. 980 – 1030 CE',
        yearBCE: 980,
        phase: 'collapse',
        phaseLabel: 'Christian Transition',
        title: 'Royal Christianization of Scandinavia',
        description: 'Kings Harald Bluetooth and Olaf Haraldsson enforce Christianity, dismantling indigenous pagan temple rites and centralizing royal tax monopolies.',
        keyMechanic: 'Monarchical conversion to Roman Catholic statehood',
        culturalIconName: 'Crown'
      },
      {
        id: 'norse-5',
        yearLabel: '1066 CE',
        yearBCE: 1066,
        phase: 'collapse',
        phaseLabel: 'End of Viking Epoch',
        title: 'Battle of Stamford Bridge',
        description: 'King Harald Hardrada of Norway is defeated by Harold Godwinson in Yorkshire, bringing a definitive end to large-scale Viking overseas campaigns.',
        keyMechanic: 'Defeat of overseas expeditionary campaigns',
        culturalIconName: 'AlertOctagon'
      }
    ]
  },
  mongol_empire: {
    civilizationId: 'mongol_empire',
    genesisSummary:
      'Temüjin united the feuding pastoral tribes of the Mongolian plateau under the Great Mongol State (Yeke Monggol Ulus) in 1206 CE, assuming the title Genghis Khan and reorganizing society along meritocratic military decimal units.',
    peakSummary:
      'The Mongol armies created the largest contiguous land empire in world history, connecting Europe to China via the Pax Mongolica, enforcing the Yassa law, establishing the Yam postal network, and protecting religious pluralism.',
    collapseSummary:
      'Following the death of Möngke Khan, the realm fractured into four competing regional khanates. Depopulated by the Black Death and agrarian revolts, the native Chinese Ming Dynasty overthrew the Mongol Yuan court in 1368.',
    milestones: [
      {
        id: 'mongol-1',
        yearLabel: '1206 CE',
        yearBCE: 1206,
        phase: 'genesis',
        phaseLabel: 'Imperial Coronation',
        title: 'Kurultai Proclaims Genghis Khan',
        description: 'Temüjin establishes the Yeke Monggol Ulus, abolishing aristocratic clans in favor of meritocratic decimal military commands.',
        keyMechanic: 'Decimal cavalry organization & Yassa legal code',
        culturalIconName: 'Crown'
      },
      {
        id: 'mongol-2',
        yearLabel: '1227 – 1259 CE',
        yearBCE: 1227,
        phase: 'golden_age',
        phaseLabel: 'Continental Expansion',
        title: 'The Trans-Eurasian Conquest & Yam System',
        description: 'Mongol forces assimilate Central Asia, Russia, Persia, and northern China, connecting thousands of postal relay stations along the Silk Road.',
        keyMechanic: 'Composite recurve horse archery & Yam postal relay',
        culturalIconName: 'Globe'
      },
      {
        id: 'mongol-3',
        yearLabel: '1271 – 1294 CE',
        yearBCE: 1271,
        phase: 'golden_age',
        phaseLabel: 'Pax Mongolica Apex',
        title: 'Kublai Khan Founds the Yuan Dynasty',
        description: 'Kublai Khan establishes Khanbaliq (Beijing), unifies China, issues standardized paper currency (Chao), and sponsors global scientific bureaus.',
        keyMechanic: 'Universal paper fiat currency & astronomical exchanges',
        culturalIconName: 'Coins'
      },
      {
        id: 'mongol-4',
        yearLabel: '1346 – 1353 CE',
        yearBCE: 1346,
        phase: 'collapse',
        phaseLabel: 'Pandemic Devastation',
        title: 'The Black Death Shuts Trade Corridors',
        description: 'Bubonic plague travels along the connected Eurasian caravan routes, killing millions in urban garrisons and disrupting imperial trade revenue.',
        keyMechanic: 'Epidemic contagion collapse along trade arteries',
        culturalIconName: 'Flame'
      },
      {
        id: 'mongol-5',
        yearLabel: '1368 CE',
        yearBCE: 1368,
        phase: 'collapse',
        phaseLabel: 'Imperial Fall',
        title: 'Ming Uprising Expels the Yuan Dynasty',
        description: 'Red Turban agrarian rebels led by Zhu Yuanzhang capture Beijing, driving the Mongol court back into the northern steppe.',
        keyMechanic: 'Sedentary agrarian rebellion & dynastic partition',
        culturalIconName: 'AlertOctagon'
      }
    ]
  },
  ottoman_empire: {
    civilizationId: 'ottoman_empire',
    genesisSummary:
      'Osman I established a frontier principality (Beylik) in northwestern Anatolia, attracting Turkmen ghazi warriors and Byzantine defectors to form a centralized gunpowder empire positioned across the Bosporus.',
    peakSummary:
      'Under Mehmed II (conquest of Constantinople 1453) and Suleiman the Magnificent, the empire spanned three continents, governed diverse faiths through the Millet system, fielded disciplined Janissaries, and erected Mimar Sinan’s monumental mosques.',
    collapseSummary:
      'Failing to keep pace with European industrialization and oceanic trade shifts, the empire suffered financial crises and nationalist revolts in the Balkans, disintegrating in World War I before Mustafa Kemal Atatürk founded the Republic of Turkey in 1922.',
    milestones: [
      {
        id: 'ottoman-1',
        yearLabel: '1299 CE',
        yearBCE: 1299,
        phase: 'genesis',
        phaseLabel: 'Ghazi Foundation',
        title: 'Osman I Establishes the Ottoman Beylik',
        description: 'Osman unifies pastoral Turkmen warriors on the Byzantine frontier, instituting the Timar military cavalry land tenure system.',
        keyMechanic: 'Timar cavalry land grants & frontier mobility',
        culturalIconName: 'Landmark'
      },
      {
        id: 'ottoman-2',
        yearLabel: '1453 CE',
        yearBCE: 1453,
        phase: 'golden_age',
        phaseLabel: 'Imperial Gateway',
        title: 'Mehmed II Conquers Constantinople',
        description: 'Using massive bronze siege cannons and naval portage, Mehmed breaches the Theodosian Walls, transforming Istanbul into the imperial capital.',
        keyMechanic: 'Heavy gunpowder siege artillery & multi-faith reconstruction',
        culturalIconName: 'Columns3'
      },
      {
        id: 'ottoman-3',
        yearLabel: '1520 – 1566 CE',
        yearBCE: 1520,
        phase: 'golden_age',
        phaseLabel: 'The Golden Age',
        title: 'Reign of Suleiman the Lawgiver (Magnificent)',
        description: 'Codification of the Kanun secular statute law; Sinan builds the Süleymaniye Mosque; imperial borders stretch from Budapest to Baghdad and Algiers.',
        keyMechanic: 'Millet communal legal autonomy & Janissary corps',
        culturalIconName: 'Crown'
      },
      {
        id: 'ottoman-4',
        yearLabel: '1683 – 1839 CE',
        yearBCE: 1683,
        phase: 'collapse',
        phaseLabel: 'Stagnation & Modernization',
        title: 'Battle of Vienna & Tanzimat Reforms',
        description: 'The failed second siege of Vienna halts European expansion; 19th-century Tanzimat modernization attempts fail to arrest territorial losses.',
        keyMechanic: 'Fiscal inflation & military modernization lag',
        culturalIconName: 'Scale'
      },
      {
        id: 'ottoman-5',
        yearLabel: '1922 – 1923 CE',
        yearBCE: 1922,
        phase: 'collapse',
        phaseLabel: 'Sultanate Abolition',
        title: 'WWI Partition & Foundation of Turkish Republic',
        description: 'Following defeat in WWI and Allied partition, Atatürk leads the War of Independence, abolishing the Sultanate and establishing secular Turkey.',
        keyMechanic: 'WWI imperial partition & secular republican revolution',
        culturalIconName: 'AlertOctagon'
      }
    ]
  },
  british_empire: {
    civilizationId: 'british_empire',
    genesisSummary:
      'Driven by mercantilist rivalry and maritime trade, England established chartered joint-stock companies (East India Company, Virginia Company) and naval dockyards, developing coal-fired machinery and parliamentary rule.',
    peakSummary:
      'Pax Britannica during the 19th century commanded global maritime trade via the Royal Navy, pioneered the steam locomotive and mechanized factory system, laid undersea global telegraph cables, and encompassed 400 million people across a quarter of the globe.',
    collapseSummary:
      'The catastrophic economic bloodletting of World War I and II destroyed Britain’s global financial dominance. Post-war debt, Indian independence in 1947, the 1956 Suez Crisis, and African decolonization concluded with the 1997 handover of Hong Kong.',
    milestones: [
      {
        id: 'brit-1',
        yearLabel: '1600 CE',
        yearBCE: 1600,
        phase: 'genesis',
        phaseLabel: 'Commercial Charter',
        title: 'Charter of the East India Company',
        description: 'Queen Elizabeth I grants a royal charter to London merchants, pioneering the joint-stock corporate structure for oceanic trade in spices and textiles.',
        keyMechanic: 'Joint-stock limited liability enterprise & naval armaments',
        culturalIconName: 'Coins'
      },
      {
        id: 'brit-2',
        yearLabel: '1769 – 1825 CE',
        yearBCE: 1769,
        phase: 'golden_age',
        phaseLabel: 'Industrial Genesis',
        title: 'Steam Engine, Cotton Factories & Stockton Railway',
        description: 'James Watt, Richard Arkwright, and George Stephenson transform biological human labor into coal-powered mechanized industrial output.',
        keyMechanic: 'Thermodynamic steam power & mechanized textile factories',
        culturalIconName: 'Cpu'
      },
      {
        id: 'brit-3',
        yearLabel: '1858 – 1897 CE',
        yearBCE: 1858,
        phase: 'golden_age',
        phaseLabel: 'Imperial Zenith',
        title: 'British Raj & the All Red Telegraph Line',
        description: 'Direct Crown rule over India is established; Queen Victoria is proclaimed Empress; global undersea telegraph cables link London to every continent.',
        keyMechanic: 'Global undersea telegraph cables & naval coaling stations',
        culturalIconName: 'Globe'
      },
      {
        id: 'brit-4',
        yearLabel: '1947 CE',
        yearBCE: 1947,
        phase: 'collapse',
        phaseLabel: 'Decolonization Inception',
        title: 'Independence and Partition of India',
        description: 'Exhausted by World War II, Britain transfers sovereignty to independent India and Pakistan, sparking rapid decolonization across Asia and Africa.',
        keyMechanic: 'Anti-colonial mass resistance & post-war financial bankruptcy',
        culturalIconName: 'Users'
      },
      {
        id: 'brit-5',
        yearLabel: '1997 CE',
        yearBCE: 1997,
        phase: 'collapse',
        phaseLabel: 'Final Transition',
        title: 'Handover of Hong Kong & Commonwealth Evolution',
        description: 'Britain returns Hong Kong to Chinese sovereignty, completing the formal dissolution of the empire into the voluntary Commonwealth of Nations.',
        keyMechanic: 'Diplomatic territorial handover & post-imperial Commonwealth',
        culturalIconName: 'AlertOctagon'
      }
    ]
  }
};

