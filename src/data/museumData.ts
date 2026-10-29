/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeographicCradle, LineageLink, ArtifactSpecimen } from '../types/civilization';

export const GEOGRAPHIC_CRADLES: Record<string, GeographicCradle> = {
  sumer: {
    civilizationId: 'sumer',
    lat: 31.32,
    lng: 45.63,
    coordinates: { x: 57, y: 39 },
    riverSystem: 'Tigris & Euphrates Silt Alluvium',
    geographicBiome: 'Arid riverine marshland and alluvial flood basins',
    coreCapital: 'Uruk & Ur',
    strategicAdvantage: 'High fertility of river silt when drained; natural clay matrix for brick and writing.',
    territoryAreaKm2: 'c. 100,000 km²',
    modernCountries: ['Iraq', 'Kuwait'],
    territorialPolygon: [
      [33.5, 43.8],
      [32.8, 45.5],
      [31.0, 47.5],
      [29.9, 48.4],
      [30.2, 46.8],
      [31.8, 44.5]
    ],
    tradeConnections: [
      {
        partnerCivId: 'indus_valley',
        partnerName: 'Indus Valley (Meluhha)',
        targetCoords: [27.32, 68.13],
        commodities: 'Barley, wool & flax for carnelian beads, ivory & lapis',
        routeType: 'maritime'
      },
      {
        partnerName: 'Levant & Cedar Mountains',
        targetCoords: [34.0, 36.0],
        commodities: 'Textiles for cedar timber & silver',
        routeType: 'overland'
      },
      {
        partnerName: 'Magan (Oman)',
        targetCoords: [23.6, 58.5],
        commodities: 'Grain for raw copper ingots & diorite',
        routeType: 'maritime'
      }
    ]
  },
  ancient_egypt: {
    civilizationId: 'ancient_egypt',
    lat: 26.82,
    lng: 30.8,
    coordinates: { x: 53, y: 41 },
    riverSystem: 'Lower Nile River Delta & Valley',
    geographicBiome: 'Fertile linear river valley flanked by the Sahara & Eastern deserts',
    coreCapital: 'Memphis & Thebes (Luxor)',
    strategicAdvantage: 'Predictable annual inundation depositing black silt; natural desert security barriers.',
    territoryAreaKm2: 'c. 1,000,000 km² (New Kingdom Peak)',
    modernCountries: ['Egypt', 'Sudan', 'Israel', 'Palestine', 'Lebanon', 'Syria'],
    territorialPolygon: [
      [31.5, 29.5],
      [34.5, 36.0],
      [31.5, 35.0],
      [22.0, 33.0],
      [18.5, 31.5],
      [22.0, 29.0],
      [29.0, 27.5]
    ],
    tradeConnections: [
      {
        partnerName: 'Land of Punt (Horn of Africa)',
        targetCoords: [11.8, 43.5],
        commodities: 'Linen & papyrus for frankincense, myrrh, ebony & baboons',
        routeType: 'maritime'
      },
      {
        partnerName: 'Levant (Byblos / Phoenicia)',
        targetCoords: [34.1, 35.6],
        commodities: 'Gold & wheat for cedar wood & olive oil',
        routeType: 'maritime'
      },
      {
        partnerCivId: 'classical_greece',
        partnerName: 'Minoan & Mycenaean Greece',
        targetCoords: [35.3, 25.1],
        commodities: 'Faience & alabaster vessels for Aegean pottery & wine',
        routeType: 'maritime'
      }
    ]
  },
  indus_valley: {
    civilizationId: 'indus_valley',
    lat: 27.32,
    lng: 68.13,
    coordinates: { x: 67, y: 43 },
    riverSystem: 'Indus, Ravi & Ghaggar-Hakra River Plains',
    geographicBiome: 'Alluvial floodplains and monsoon-fed delta corridors',
    coreCapital: 'Mohenjo-daro & Harappa',
    strategicAdvantage: 'Biannual flood harvests (winter & summer crops); maritime Persian Gulf access.',
    territoryAreaKm2: 'c. 1,300,000 km²',
    modernCountries: ['Pakistan', 'India', 'Afghanistan'],
    territorialPolygon: [
      [33.0, 70.0],
      [32.0, 75.0],
      [29.0, 77.0],
      [22.0, 73.0],
      [23.0, 68.0],
      [25.0, 62.0],
      [30.0, 66.0]
    ],
    tradeConnections: [
      {
        partnerCivId: 'sumer',
        partnerName: 'Mesopotamia (Ur & Lagash)',
        targetCoords: [31.32, 45.63],
        commodities: 'Etched carnelian, cotton cloth & timber for wool & barley',
        routeType: 'maritime'
      },
      {
        partnerName: 'Badakhshan (Central Asia)',
        targetCoords: [36.7, 70.8],
        commodities: 'Manufactured beads for raw lapis lazuli & tin',
        routeType: 'overland'
      }
    ]
  },
  classical_greece: {
    civilizationId: 'classical_greece',
    lat: 37.98,
    lng: 23.72,
    coordinates: { x: 49, y: 36 },
    riverSystem: 'Ilissos & Eurotas Valleys (Aegean Thalassocracy)',
    geographicBiome: 'Mountainous coastal peninsulas, islands, and Mediterranean scrub',
    coreCapital: 'Athens & Sparta',
    strategicAdvantage: 'Extensive coastline and natural harbors enabling Mediterranean trade colonies.',
    territoryAreaKm2: 'c. 450,000 km² (including Magna Graecia & Black Sea colonies)',
    modernCountries: ['Greece', 'Turkey', 'Italy', 'Albania', 'Cyprus', 'Ukraine'],
    territorialPolygon: [
      [41.5, 22.0],
      [41.0, 28.0],
      [37.5, 28.5],
      [35.0, 27.0],
      [36.0, 21.5],
      [39.5, 20.0]
    ],
    tradeConnections: [
      {
        partnerName: 'Black Sea Scythia',
        targetCoords: [44.6, 33.5],
        commodities: 'Wine, olive oil & pottery for wheat, dried fish & slaves',
        routeType: 'maritime'
      },
      {
        partnerCivId: 'ancient_egypt',
        partnerName: 'Egypt (Naucratis)',
        targetCoords: [30.9, 30.6],
        commodities: 'Silver & marble for grain, papyrus & linen',
        routeType: 'maritime'
      },
      {
        partnerName: 'Magna Graecia (Sicily & Southern Italy)',
        targetCoords: [37.5, 14.2],
        commodities: 'Manufactured bronzes for cereals, cattle & timber',
        routeType: 'maritime'
      }
    ]
  },
  classical_rome: {
    civilizationId: 'classical_rome',
    lat: 41.9,
    lng: 12.49,
    coordinates: { x: 48, y: 34 },
    riverSystem: 'Tiber River Basin & Mediterranean Coast',
    geographicBiome: 'Temperate Mediterranean hills, volcanic soils, and coastal maritime access',
    coreCapital: 'Rome',
    strategicAdvantage: 'Central location in Mediterranean basin enabling control of all sea-lanes; pozzolana ash.',
    territoryAreaKm2: 'c. 5,000,000 km² (Peak under Trajan, 117 CE)',
    modernCountries: ['Italy', 'France', 'Spain', 'UK', 'Germany', 'Greece', 'Egypt', 'Turkey', 'Algeria', 'Tunisia'],
    territorialPolygon: [
      [55.0, -3.0],
      [51.0, 6.0],
      [46.0, 16.0],
      [41.0, 29.0],
      [34.0, 36.0],
      [31.0, 32.0],
      [30.0, 10.0],
      [33.0, -5.0],
      [43.0, -9.0]
    ],
    tradeConnections: [
      {
        partnerCivId: 'han_dynasty',
        partnerName: 'Han Dynasty (Silk Road)',
        targetCoords: [34.26, 108.94],
        commodities: 'Roman glassware, silver & gold coins for raw Chinese silk',
        routeType: 'overland'
      },
      {
        partnerCivId: 'ancient_egypt',
        partnerName: 'Egypt (Alexandria Annona Granary)',
        targetCoords: [31.2, 29.9],
        commodities: '135,000 tonnes annual grain imports for civic Roman Annona dole',
        routeType: 'maritime'
      },
      {
        partnerCivId: 'aksumite_empire',
        partnerName: 'Aksumite Empire',
        targetCoords: [14.13, 38.72],
        commodities: 'Roman wine & textiles for ivory, emeralds & frankincense',
        routeType: 'maritime'
      }
    ]
  },
  han_dynasty: {
    civilizationId: 'han_dynasty',
    lat: 34.26,
    lng: 108.94,
    coordinates: { x: 81, y: 38 },
    riverSystem: 'Yellow (Huang He) & Yangtze River Basins',
    geographicBiome: 'Loess plateau, temperate alluvial plains, and wet rice valleys',
    coreCapital: 'Chang’an (Xi’an) & Luoyang',
    strategicAdvantage: 'Vast loess soil agricultural capacity; eastern terminus of the trans-Eurasian Silk Road.',
    territoryAreaKm2: 'c. 6,000,000 km²',
    modernCountries: ['China', 'North Korea', 'Mongolia', 'Vietnam'],
    territorialPolygon: [
      [41.0, 105.0],
      [40.0, 124.0],
      [30.0, 122.0],
      [21.0, 108.0],
      [24.0, 100.0],
      [37.0, 95.0]
    ],
    tradeConnections: [
      {
        partnerCivId: 'classical_rome',
        partnerName: 'Roman Empire & Parthia',
        targetCoords: [41.9, 12.49],
        commodities: 'High-value silk textiles, iron & lacquer for Roman glassware & horses',
        routeType: 'overland'
      },
      {
        partnerName: 'Kushan Empire (India / Central Asia)',
        targetCoords: [34.0, 71.5],
        commodities: 'Silk and paper for Buddhist texts, jade, and Indian spices',
        routeType: 'overland'
      }
    ]
  },
  aksumite_empire: {
    civilizationId: 'aksumite_empire',
    lat: 14.13,
    lng: 38.72,
    coordinates: { x: 56, y: 52 },
    riverSystem: 'Mareb & Tekeze River Highlands (Red Sea Gateway)',
    geographicBiome: 'Rugged volcanic Ethiopian plateau (2,000m+) and Red Sea littoral',
    coreCapital: 'Aksum (Port of Adulis)',
    strategicAdvantage: 'Controlling Bab-el-Mandeb maritime choke-point between the Indian Ocean and Rome.',
    territoryAreaKm2: 'c. 1,250,000 km² (including Southern Arabia / Himyar)',
    modernCountries: ['Ethiopia', 'Eritrea', 'Sudan', 'Yemen', 'Djibouti'],
    territorialPolygon: [
      [17.5, 36.0],
      [16.5, 43.5],
      [14.0, 48.0],
      [12.5, 44.0],
      [10.0, 39.0],
      [13.0, 35.0]
    ],
    tradeConnections: [
      {
        partnerCivId: 'classical_rome',
        partnerName: 'Roman & Byzantine Empires',
        targetCoords: [41.9, 12.49],
        commodities: 'Ivory, gold, frankincense & tortoise shells for Roman coins & glass',
        routeType: 'maritime'
      },
      {
        partnerName: 'Gupta India',
        targetCoords: [19.0, 72.8],
        commodities: 'African emeralds & ivory for Indian cotton textiles & pepper',
        routeType: 'maritime'
      }
    ]
  },
  maya: {
    civilizationId: 'maya',
    lat: 17.22,
    lng: -89.62,
    coordinates: { x: 22, y: 46 },
    riverSystem: 'Usumacinta River & Petén Karst Aquifers',
    geographicBiome: 'Tropical karst rainforest, cenotes, and seasonal bajos wetlands',
    coreCapital: 'Tikal, Calakmul & Palenque',
    strategicAdvantage: 'Limestone quarrying for masonry; rich micro-ecologies for cacao, maize, and jade.',
    territoryAreaKm2: 'c. 324,000 km²',
    modernCountries: ['Guatemala', 'Mexico', 'Belize', 'Honduras', 'El Salvador'],
    territorialPolygon: [
      [21.5, -90.5],
      [21.2, -87.0],
      [16.0, -88.0],
      [14.2, -89.5],
      [16.5, -93.0],
      [19.0, -91.5]
    ],
    tradeConnections: [
      {
        partnerName: 'Teotihuacan (Valley of Mexico)',
        targetCoords: [19.69, -98.84],
        commodities: 'Quetzal feathers, jade & cacao for green Pachuca obsidian',
        routeType: 'overland'
      },
      {
        partnerName: 'Motagua Valley Jade Works',
        targetCoords: [15.0, -89.5],
        commodities: 'High-purity jadeite boulders for ceremonial regalia',
        routeType: 'overland'
      }
    ]
  },
  islamic_golden_age: {
    civilizationId: 'islamic_golden_age',
    lat: 33.31,
    lng: 44.36,
    coordinates: { x: 56, y: 37 },
    riverSystem: 'Tigris-Euphrates Nexus & Trans-Regional Qanats',
    geographicBiome: 'Arid crossroads of Afro-Eurasia spanning deserts, steppes, and river oases',
    coreCapital: 'Baghdad (The Round City)',
    strategicAdvantage: 'Central pivot connecting China, India, Byzantium, and the Mediterranean world.',
    territoryAreaKm2: 'c. 11,100,000 km² (Caliphate Peak)',
    modernCountries: ['Iraq', 'Iran', 'Syria', 'Egypt', 'Saudi Arabia', 'Spain', 'Uzbekistan', 'Morocco'],
    territorialPolygon: [
      [42.0, -5.0],
      [36.0, 5.0],
      [33.0, 36.0],
      [37.0, 60.0],
      [41.0, 70.0],
      [25.0, 65.0],
      [15.0, 48.0],
      [22.0, 30.0],
      [30.0, -9.0]
    ],
    tradeConnections: [
      {
        partnerCivId: 'han_dynasty',
        partnerName: 'Tang & Song Dynasties (China)',
        targetCoords: [34.26, 108.94],
        commodities: 'Frankincense, dates & Persian cobalt for silk, porcelain & paper',
        routeType: 'maritime'
      },
      {
        partnerCivId: 'mali_empire',
        partnerName: 'Trans-Saharan Kingdoms',
        targetCoords: [16.76, -3.0],
        commodities: 'North African salt, books & horses for sub-Saharan gold',
        routeType: 'overland'
      },
      {
        partnerCivId: 'norse_vikings',
        partnerName: 'Viking Rus (Volga & Dnieper Routes)',
        targetCoords: [55.75, 37.61],
        commodities: 'Silver dirhams & silk for northern amber, furs & swords',
        routeType: 'maritime'
      }
    ]
  },
  norse_vikings: {
    civilizationId: 'norse_vikings',
    lat: 59.91,
    lng: 10.75,
    coordinates: { x: 48, y: 22 },
    riverSystem: 'Scandinavian Fjords, Baltic Sea & Volga/Dnieper Rivers',
    geographicBiome: 'Sub-arctic boreal forests, deep fjords, and North Atlantic archipelagos',
    coreCapital: 'Hedeby, Kaupang & Birka',
    strategicAdvantage: 'Mastery of clinker naval engineering connecting North Atlantic and Russian river trade.',
    territoryAreaKm2: 'c. 1,500,000 km² (settlement diaspora)',
    modernCountries: ['Norway', 'Denmark', 'Sweden', 'Iceland', 'UK', 'Ireland', 'Russia'],
    territorialPolygon: [
      [70.0, 25.0],
      [65.0, -18.0],
      [54.0, -8.0],
      [50.0, 2.0],
      [55.0, 30.0],
      [60.0, 35.0]
    ],
    tradeConnections: [
      {
        partnerCivId: 'islamic_golden_age',
        partnerName: 'Abbasid Caliphate via Caspian / Volga',
        targetCoords: [33.31, 44.36],
        commodities: 'Amber, walrus ivory & furs for silver Islamic dirham coin hoards',
        routeType: 'maritime'
      },
      {
        partnerName: 'Byzantine Empire (Constantinople)',
        targetCoords: [41.0, 28.97],
        commodities: 'Mercenary military service (Varangian Guard) for gold coins & silk',
        routeType: 'maritime'
      },
      {
        partnerName: 'North Atlantic Outposts (Iceland & Vinland)',
        targetCoords: [51.5, -55.5],
        commodities: 'Timber, walrus ropes & dried cod',
        routeType: 'maritime'
      }
    ]
  },
  kingdom_of_benin: {
    civilizationId: 'kingdom_of_benin',
    lat: 6.33,
    lng: 5.62,
    coordinates: { x: 47, y: 53 },
    riverSystem: 'Benin & Niger Delta Littoral',
    geographicBiome: 'Dense equatorial rainforest and coastal mangrove estuaries',
    coreCapital: 'Benin City (Edo)',
    strategicAdvantage: 'Formidable natural forest defense; lost-wax copper alloy casting; palm oil wealth.',
    territoryAreaKm2: 'c. 40,000 km²',
    modernCountries: ['Nigeria'],
    territorialPolygon: [
      [7.2, 5.0],
      [6.8, 6.4],
      [5.5, 6.0],
      [5.8, 5.0]
    ],
    tradeConnections: [
      {
        partnerName: 'Portuguese Merchant Fleet',
        targetCoords: [38.7, -9.1],
        commodities: 'Pepper, ivory & cotton cloth for European brass manillas & coral beads',
        routeType: 'maritime'
      },
      {
        partnerCivId: 'mali_empire',
        partnerName: 'Yoruba & Niger River Networks',
        targetCoords: [12.6, -7.9],
        commodities: 'Palm oil & woven textiles for northern Sahelian cattle and copper',
        routeType: 'overland'
      }
    ]
  },
  mongol_empire: {
    civilizationId: 'mongol_empire',
    lat: 47.91,
    lng: 106.91,
    coordinates: { x: 78, y: 32 },
    riverSystem: 'Orkhon, Kerulen & Selenge River Basins',
    geographicBiome: 'Eurasian temperate steppe, desert grasslands, and river valleys',
    coreCapital: 'Karakorum (later Khanbaliq / Beijing)',
    strategicAdvantage: 'Nomadic horse cavalry mobility; control of all continental trans-Eurasian trade corridors.',
    territoryAreaKm2: 'c. 24,000,000 km² (Largest contiguous empire)',
    modernCountries: ['Mongolia', 'China', 'Russia', 'Iran', 'Kazakhstan', 'Uzbekistan', 'Ukraine', 'Turkey', 'Iraq'],
    territorialPolygon: [
      [55.0, 30.0],
      [58.0, 75.0],
      [52.0, 125.0],
      [30.0, 120.0],
      [22.0, 105.0],
      [30.0, 50.0],
      [38.0, 40.0],
      [48.0, 25.0]
    ],
    tradeConnections: [
      {
        partnerName: 'Republic of Venice & Genoa',
        targetCoords: [45.43, 12.33],
        commodities: 'Marco Polo travels; silk & spices for European silver & wool',
        routeType: 'overland'
      },
      {
        partnerCivId: 'islamic_golden_age',
        partnerName: 'Ilkhanate Persia',
        targetCoords: [35.68, 51.38],
        commodities: 'Persian cobalt, turquoise & carpets for Chinese silk & printing',
        routeType: 'overland'
      }
    ]
  },
  mali_empire: {
    civilizationId: 'mali_empire',
    lat: 12.63,
    lng: -8.0,
    coordinates: { x: 42, y: 49 },
    riverSystem: 'Upper Niger River Inland Delta',
    geographicBiome: 'Sahelian transition belt and fertile river floodplain',
    coreCapital: 'Niani (with Timbuktu & Djenné hubs)',
    strategicAdvantage: 'Monopoly over Bambuk/Boure gold fields and Sahara camel caravan choke-points.',
    territoryAreaKm2: 'c. 1,100,000 km²',
    modernCountries: ['Mali', 'Senegal', 'Guinea', 'Mauritania', 'Niger'],
    territorialPolygon: [
      [18.0, -15.0],
      [18.5, -2.0],
      [14.0, 2.5],
      [10.5, -8.0],
      [11.5, -14.0]
    ],
    tradeConnections: [
      {
        partnerCivId: 'ancient_egypt',
        partnerName: 'Cairo (Mameluke Sultanate)',
        targetCoords: [30.04, 31.23],
        commodities: 'Mansa Musa hajj gold distribution for Arabic manuscripts & silk',
        routeType: 'overland'
      },
      {
        partnerName: 'Taghaza Salt Mines',
        targetCoords: [23.5, -4.9],
        commodities: 'Pure rock salt blocks exchanged equal weight for gold dust',
        routeType: 'overland'
      }
    ]
  },
  ottoman_empire: {
    civilizationId: 'ottoman_empire',
    lat: 41.0,
    lng: 28.97,
    coordinates: { x: 53, y: 35 },
    riverSystem: 'The Bosporus Strait & Danube/Euphrates Flanks',
    geographicBiome: 'Mediterranean hills, Anatolian plateau, and Balkan river basins',
    coreCapital: 'Istanbul (Constantinople)',
    strategicAdvantage: 'Controlling maritime access between Black Sea and Mediterranean; gateway to Asia.',
    territoryAreaKm2: 'c. 5,200,000 km² (Peak under Suleiman)',
    modernCountries: ['Turkey', 'Greece', 'Egypt', 'Syria', 'Iraq', 'Bulgaria', 'Hungary', 'Algeria', 'Saudi Arabia'],
    territorialPolygon: [
      [47.5, 19.0],
      [46.0, 30.0],
      [40.0, 48.0],
      [30.0, 48.0],
      [22.0, 38.0],
      [30.0, 10.0],
      [36.0, 2.0],
      [40.0, 20.0]
    ],
    tradeConnections: [
      {
        partnerName: 'Republic of Venice',
        targetCoords: [45.43, 12.33],
        commodities: 'Raw silk, Yemeni coffee, mohair & wheat for Venetian glass & textiles',
        routeType: 'maritime'
      },
      {
        partnerName: 'Safavid Persia',
        targetCoords: [32.65, 51.66],
        commodities: 'Tabriz silk & carpets for silver coinage and European firearms',
        routeType: 'overland'
      }
    ]
  },
  incan_empire: {
    civilizationId: 'incan_empire',
    lat: -13.53,
    lng: -71.96,
    coordinates: { x: 28, y: 68 },
    riverSystem: 'Urubamba & Vilcanota River Valleys',
    geographicBiome: 'High-altitude vertical Andes cordillera (altiplano, cloud forests, deserts)',
    coreCapital: 'Cusco',
    strategicAdvantage: 'Vertical archipelago micro-climates allowing simultaneous potato, maize, and coca farming.',
    territoryAreaKm2: 'c. 2,000,000 km²',
    modernCountries: ['Peru', 'Bolivia', 'Ecuador', 'Chile', 'Argentina', 'Colombia'],
    territorialPolygon: [
      [1.0, -78.0],
      [-5.0, -76.0],
      [-15.0, -68.0],
      [-32.0, -70.0],
      [-34.0, -71.5],
      [-20.0, -70.0],
      [-8.0, -79.0]
    ],
    tradeConnections: [
      {
        partnerName: 'Coastal Chincha Seafarers',
        targetCoords: [-13.4, -76.1],
        commodities: 'Prestige Spondylus thorny oyster shells & guano fertilizer for highland textiles',
        routeType: 'maritime'
      },
      {
        partnerName: 'Amazonian Piedmont (Antisuyu)',
        targetCoords: [-12.5, -71.0],
        commodities: 'Medicinal plants, coca leaves & jaguar pelts for bronze axes',
        routeType: 'overland'
      }
    ]
  },
  british_empire: {
    civilizationId: 'british_empire',
    lat: 51.5,
    lng: -0.12,
    coordinates: { x: 46, y: 28 },
    riverSystem: 'Thames & Oceanic Global Sea Corridors',
    geographicBiome: 'Temperate maritime island with worldwide colonial port network',
    coreCapital: 'London',
    strategicAdvantage: 'Abundant coal/iron deposits; island geography invulnerable to land invasion; Royal Navy hegemony.',
    territoryAreaKm2: 'c. 35,500,000 km² (Largest global empire in history)',
    modernCountries: ['United Kingdom', 'Canada', 'Australia', 'India', 'South Africa', 'New Zealand', 'Kenya', 'Singapore'],
    territorialPolygon: [
      [58.0, -6.0],
      [58.0, 1.5],
      [50.0, 1.5],
      [50.0, -5.5]
    ],
    tradeConnections: [
      {
        partnerName: 'British Raj (India)',
        targetCoords: [22.57, 88.36],
        commodities: 'Manufactured cotton cloth & railway iron for raw cotton, tea, opium & jute',
        routeType: 'maritime'
      },
      {
        partnerName: 'Treaty Ports (China / Hong Kong)',
        targetCoords: [22.31, 114.16],
        commodities: 'Manufactured goods for silk, tea & porcelain',
        routeType: 'maritime'
      },
      {
        partnerName: 'North American Colonies & Dominions',
        targetCoords: [43.65, -79.38],
        commodities: 'Manufactured machinery for wheat, timber & beaver furs',
        routeType: 'maritime'
      }
    ]
  },
  modern_industrial_digital: {
    civilizationId: 'modern_industrial_digital',
    lat: 40.71,
    lng: -74.0,
    coordinates: { x: 46, y: 28 },
    riverSystem: 'Planetary Hydro-electric & Ocean Shipping Lanes',
    geographicBiome: 'Planetary urban technosphere and global logistical network',
    coreCapital: 'Global Networked Megalopolises',
    strategicAdvantage: 'Thermodynamic fossil fuels, synthetic nitrogen, semiconductors, and orbital communication.',
    territoryAreaKm2: 'Planetary Biosphere (510,000,000 km²)',
    modernCountries: ['Global (195 Sovereign States)'],
    territorialPolygon: [
      [70.0, -120.0],
      [70.0, 120.0],
      [-50.0, 120.0],
      [-50.0, -120.0]
    ],
    tradeConnections: [
      {
        partnerName: 'Global Semiconductor Supply Chain',
        targetCoords: [25.03, 121.56],
        commodities: 'Silicon lithography, wafer chips, rare earths & neural compute accelerators',
        routeType: 'maritime'
      },
      {
        partnerName: 'Panama & Suez Global Canals',
        targetCoords: [9.08, -79.68],
        commodities: 'Containerized consumer electronics, automotive parts & chemical fertilizers',
        routeType: 'maritime'
      }
    ]
  }
};

export const LINEAGE_LINKS: LineageLink[] = [
  {
    id: 'link-1',
    sourceCivId: 'sumer',
    targetCivId: 'islamic_golden_age',
    transmittedVector: 'Sexagesimal Math, Astronomy & Canal Irrigation',
    description: 'Mesopotamian base-60 time division, planetary astronomy, and canal hydraulics were preserved, translated, and advanced in Baghdad.',
    historicalPeriod: 'Ancient Near East -> Abbasid Era'
  },
  {
    id: 'link-2',
    sourceCivId: 'classical_greece',
    targetCivId: 'classical_rome',
    transmittedVector: 'Philosophy, Stoicism, Temple Orders & Rhetoric',
    description: 'Graecia capta ferum victorem cepit: Greek philosophy, theatrical drama, and Doric/Ionic architecture shaped Roman elite education.',
    historicalPeriod: 'Classical Greece -> Roman Republic'
  },
  {
    id: 'link-3',
    sourceCivId: 'ancient_egypt',
    targetCivId: 'classical_rome',
    transmittedVector: 'Monumental Megalithic Masonry, Surgery & Solar 365-day Calendar',
    description: 'Julius Caesar adopted the 365.25-day Alexandrian Egyptian solar calendar (Julian Calendar), while Egyptian stone construction techniques shaped Roman engineering.',
    historicalPeriod: 'Ptolemaic Egypt -> Late Roman Republic'
  },
  {
    id: 'link-4',
    sourceCivId: 'han_dynasty',
    targetCivId: 'islamic_golden_age',
    transmittedVector: 'Cellulose Paper Making & Trans-Continental Silk Road',
    description: 'Following the 751 CE Battle of Talas, Chinese papermaking technology entered Samarkand and Baghdad, enabling the massive Islamic library expansion.',
    historicalPeriod: 'Han Dynastic Legacy -> Abbasid Translation Movement'
  },
  {
    id: 'link-5',
    sourceCivId: 'mongol_empire',
    targetCivId: 'ottoman_empire',
    transmittedVector: 'Gunpowder Warfare, Steppe Horse Cavalry & Imperial Administration',
    description: 'The Mongol expansion spread gunpowder technology, postal relays, and centralized imperial models that Turkic dynasties synthesized into Ottoman statecraft.',
    historicalPeriod: 'Pax Mongolica -> Early Ottoman Beylik'
  },
  {
    id: 'link-6',
    sourceCivId: 'islamic_golden_age',
    targetCivId: 'modern_industrial_digital',
    transmittedVector: 'Algebra, Algorithmic Thinking & Experimental Scientific Method',
    description: 'Al-Khwarizmi’s algebra and Ibn al-Haytham’s optics provided the empirical and mathematical grammar for the European Scientific Revolution and modern computing.',
    historicalPeriod: 'Middle Ages -> Industrial Revolution'
  },
  {
    id: 'link-7',
    sourceCivId: 'norse_vikings',
    targetCivId: 'british_empire',
    transmittedVector: 'Maritime Deep-Sea Navigation, Thing Assemblies & Common Law',
    description: 'Norse Danelaw settlements in England integrated customary assembly trials and naval traditions into Anglo-Saxon and British maritime law.',
    historicalPeriod: 'Viking Age -> British Maritime State'
  },
  {
    id: 'link-8',
    sourceCivId: 'ottoman_empire',
    targetCivId: 'british_empire',
    transmittedVector: 'Spice Routes & Impetus for Oceanic Exploration',
    description: 'Ottoman control of the eastern Mediterranean forced Western European crowns to finance oceanic expeditions, birthing the global colonial era.',
    historicalPeriod: 'Ottoman Hegemony -> European Oceanic Expansion'
  },
  {
    id: 'link-9',
    sourceCivId: 'mali_empire',
    targetCivId: 'kingdom_of_benin',
    transmittedVector: 'Trans-Regional Metallurgy & Scholarly Diplomacy',
    description: 'West African iron networks, royal guild structures, and Sahelian diplomacy enriched regional trade between the Niger bend and Guinea forest.',
    historicalPeriod: 'Medieval Sahel -> Edo Golden Age'
  },
  {
    id: 'link-10',
    sourceCivId: 'incan_empire',
    targetCivId: 'modern_industrial_digital',
    transmittedVector: 'Freeze-Drying (Chuño) & Vertical Ecological Agronomy',
    description: 'Incan freeze-drying preservation techniques and potato biodiversity continue to feed global populations and space explorers.',
    historicalPeriod: 'Tawantinsuyu -> Modern Agricultural Science'
  }
];

export const MUSEUM_SPECIMENS: ArtifactSpecimen[] = [
  {
    id: 'specimen-1',
    civilizationId: 'sumer',
    name: 'Cuneiform Administrative Clay Tablet',
    accessionNumber: 'SUM.BCE.3100.08',
    era: 'c. 3100 BCE',
    medium: 'Incised alluvial clay with reed stylus impressions',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1599732434462-4a4b2b1a1340?auto=format&fit=crop&w=1200&q=80',
    description: 'An archival administrative tablet from ancient Uruk recording barley allocations and communal temple labor assignments.',
    historicalSignificance: 'Represents the transition from physical counting tokens to phonetic writing, the dawn of recorded human history.'
  },
  {
    id: 'specimen-2',
    civilizationId: 'ancient_egypt',
    name: 'Gilded Funerary Pectoral of Tutankhamun',
    accessionNumber: 'EGY.BCE.1323.01',
    era: 'c. 1323 BCE',
    medium: 'Repoussé gold, lapis lazuli, turquoise, and carnelian inlay',
    imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=80',
    description: 'A royal New Kingdom funerary pectoral depicting the solar winged scarab carrying the lunar bark across the heavens.',
    historicalSignificance: 'Exemplifies the Egyptian mastery of gold metallurgy, faience glazing, and cosmological mortuary theology.'
  },
  {
    id: 'specimen-3',
    civilizationId: 'indus_valley',
    name: 'Pashupati Unicorn Soapstone Seal',
    accessionNumber: 'IND.BCE.2400.12',
    era: 'c. 2400 BCE',
    medium: 'Carved steatite stone coated with alkali glaze',
    imageUrl: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    description: 'Square seal featuring a horned seated deity surrounded by animals, accompanied by five Indus script characters.',
    historicalSignificance: 'Used as an official merchant seal for export shipments to Mesopotamia, exhibiting extraordinary miniature glyptic carving.'
  },
  {
    id: 'specimen-greece',
    civilizationId: 'classical_greece',
    name: 'Athenian Owl Silver Tetradrachm',
    accessionNumber: 'GRE.BCE.450.01',
    era: 'c. 450 BCE',
    medium: 'Die-struck Laurion silver (98% pure)',
    imageUrl: 'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    description: 'Silver coin depicting Athena on the obverse and an owl with olive sprig on the reverse, the global reserve currency of the Aegean.',
    historicalSignificance: 'The premier international trade currency of Classical Antiquity, funding the construction of the Parthenon.'
  },
  {
    id: 'specimen-4',
    civilizationId: 'han_dynasty',
    name: 'Han Dynasty Jade Burial Suit Plaque',
    accessionNumber: 'HAN.BCE.113.04',
    era: 'c. 113 BCE',
    medium: 'Polished nephrite jade plaques sewn with gold wire',
    imageUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    description: 'A funerary armor shroud constructed from over two thousand jade wafers, crafted for Prince Liu Sheng of Zhongshan.',
    historicalSignificance: 'Reflects the Han belief that jade prevented bodily decomposition, symbolizing the zenith of imperial lapidary art.'
  },
  {
    id: 'specimen-5',
    civilizationId: 'classical_rome',
    name: 'Travertine Aureus of Emperor Augustus',
    accessionNumber: 'ROM.BCE.027.09',
    era: 'c. 27 BCE',
    medium: 'Die-struck high-purity gold (99% fine gold)',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1200&q=80',
    description: 'Imperial gold coin depicting Augustus Caesar laurel-crowned on the obverse, celebrating the restoration of peace across the empire.',
    historicalSignificance: 'Illustrates how imperial coinage was used as an ideological mass-media tool to unify the trans-Mediterranean economy.'
  },
  {
    id: 'specimen-norse',
    civilizationId: 'norse_vikings',
    name: 'Oseberg Carved Oak Dragon Prow & Silver Brooch',
    accessionNumber: 'NOR.CE.834.02',
    era: 'c. 834 CE',
    medium: 'Relief-carved Norwegian oak and silver filigree',
    imageUrl: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    description: 'A masterfully carved serpent dragon head from the royal Oseberg burial ship, buried alongside two high-status women.',
    historicalSignificance: 'Demonstrates the breathtaking zoomorphic woodcarving mastery and oceanic shipwrightry of the Viking Age.'
  },
  {
    id: 'specimen-mongol',
    civilizationId: 'mongol_empire',
    name: 'Silver Paiza Passport of the Great Khan',
    accessionNumber: 'MON.CE.1280.05',
    era: 'c. 1280 CE',
    medium: 'Cast silver tablet with engraved Phags-pa script',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    description: 'An official imperial passport guaranteeing safe passage, horses, and food across all Eurasian postal stations under the authority of the Khan.',
    historicalSignificance: 'The world’s first continental diplomatic safe-conduct passport that maintained the security of the Pax Mongolica.'
  },
  {
    id: 'specimen-ottoman',
    civilizationId: 'ottoman_empire',
    name: 'Imperial Tughra of Suleiman the Magnificent',
    accessionNumber: 'OTT.CE.1555.03',
    era: 'c. 1555 CE',
    medium: 'Gold leaf and lapis lazuli illumination on vellum',
    imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a1b?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    description: 'The monumental calligraphic monogram of Sultan Suleiman, heading imperial fermans (edicts) and military appointments.',
    historicalSignificance: 'The ultimate visual emblem of sovereign Ottoman bureaucratic authority and Islamic calligraphic artistic perfection.'
  },
  {
    id: 'specimen-british',
    civilizationId: 'british_empire',
    name: 'Marine Chronometer H4 by John Harrison',
    accessionNumber: 'BRI.CE.1759.01',
    era: '1759 CE',
    medium: 'Gilded brass, hardened steel, and ruby jewels in pocket-watch case',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
    description: 'The precision mechanical timekeeper that solved the centuries-old longitude problem, enabling exact oceanic navigation.',
    historicalSignificance: 'The mechanical foundation of British global naval supremacy, allowing Royal Navy ships to navigate without shipwrecks.'
  },
  {
    id: 'specimen-12',
    civilizationId: 'modern_industrial_digital',
    name: 'Silicon Wafer Photolithography Mask & Core Microprocessor',
    accessionNumber: 'MOD.CE.1971.01',
    era: '1971 CE',
    medium: 'Monocrystalline silicon wafer with doped semiconductor circuits',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    description: 'The microprocessor chip layout that condensed millions of microscopic transistors onto a fingernail-sized piece of etched silicon.',
    historicalSignificance: 'The core physical engine of the modern digital epoch, ushering in planetary algorithmic intelligence.'
  }
];
