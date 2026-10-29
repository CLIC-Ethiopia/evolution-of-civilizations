/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Civilization } from '../types/civilization';

export const RAW_CIVILIZATIONS: Civilization[] = [
  {
    id: "sumer",
    name: "Sumerian Civilization",
    era: "c. 4500 – 1900 BCE",
    region: "Mesopotamia (Modern-day Iraq)",
    startBCE: -4500,
    endBCE: -1900,
    periodLabel: "Bronze Age Cradle",
    continent: "Middle East",
    tagline: "The Cradle of Cities, Cuneiform, and the Sexagesimal Hour",
    keyInnovation: "Cuneiform Script & Canal Hydraulics",
    curatorialQuote: "Before kingship descended from heaven, humanity sowed the river silts and marked accounting tallies in soft clay.",
    primaryImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1599732434462-4a4b2b1a1340?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Ruins of the Ziggurat of Ur and Mesopotamia silt flats, engineered with kiln-fired bitumen and sun-dried mud bricks.",
    imageCredit: "Archival Collection · Ancient Near East",
    characteristics: {
      stable_food_supply: "Intensive irrigation utilizing the Tigris and Euphrates rivers; cultivation of barley, wheat, flax; domestication of sheep and cattle.",
      advanced_cities: "Autonomous city-states like Uruk, Ur, Eridu, and Lagash featuring dense mud-brick residential quarters and central plazas.",
      specialized_workers: "Scribes, temple priests, metalworkers (bronze), potters, weavers, and professional soldiers.",
      complex_institutions: "Theocratic governance transitioning to secular kingship (Lugal); centralized temple economies directed by the Priesthood.",
      social_classes: "Hierarchical structure: King and nobility at the apex, followed by priests/scribes, merchants/artisans, peasant farmers, and enslaved laborers.",
      record_keeping_writing: "Cuneiform script impressed on clay tablets, originating as tokens for agricultural accounting before evolving into a phonetic writing system.",
      art_architecture: "Monumental step-pyramids called Ziggurats; sophisticated votive statues with oversized eyes; cylinder seals carved from semi-precious stones.",
      advanced_technology: "The potter's wheel, wheeled vehicles, early sailboats, bronze metallurgy, and a base-60 mathematical system.",
      long_distance_trade: "Extensive trade networks exchanging agricultural surplus for timber from Lebanon, copper from Oman, and lapis lazuli from Badakhshan.",
      artistic_material_culture: "Complex narrative reliefs on stone (e.g., Standard of Ur), specialized jewelry inlay techniques using shell, lapis lazuli, and carnelian.",
      socio_political_statecraft: "Development of the earliest written law codes (e.g., Code of Ur-Nammu) to institutionalize justice, taxation, and labor conscription.",
      resource_extraction_limits: "High vulnerability to ecological changes; lack of local timber and stone forced total reliance on riverine mud and aggressive external sourcing."
    },
    achievements: [
      "Invention of the earliest known writing system (Cuneiform).",
      "Development of the sexagesimal (base-60) numerical system, providing the foundation for modern timekeeping (60 seconds, 60 minutes) and the 360-degree circle.",
      "Engineering the world's first large-scale urban centers with sophisticated canal-based water management frameworks."
    ],
    collapse_or_transformation: {
      type: "Ecological Collapse & Geopolitical Absorption",
      detailed_analysis: "Centuries of intensive irrigation without proper drainage led to rising water tables, bringing underground mineral salts to the surface. Severe soil salinization systematically crippled crop yields, triggering economic decay and depopulation. Weakened city-states were progressively conquered and assimilated by external powers, including the Akkadians, Elamites, and Amorites, permanently shifting the geopolitical center of gravity northward."
    }
  },
  {
    id: "ancient_egypt",
    name: "Ancient Egyptian Civilization",
    era: "c. 3100 – 30 BCE",
    region: "Northeast Africa (Nile River Valley)",
    startBCE: -3100,
    endBCE: -30,
    periodLabel: "Pharaonic Dynasties",
    continent: "Africa",
    tagline: "The Eternal River Valley of Living Gods and Monumental Stone",
    keyInnovation: "Solar 365-Day Calendar & Megalithic Masonry",
    curatorialQuote: "Egypt was the gift of the Nile: a rhythm of inundation that turned cosmic order into monumental stone.",
    primaryImage: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Megalithic limestone casing blocks and the Great Pyramid of Giza, aligned to true cardinal north with astronomical precision.",
    imageCredit: "Nile Valley Antiquities Archive",
    characteristics: {
      stable_food_supply: "Complete reliance on the predictable, annual flooding of the Nile River; basin irrigation networks producing heavy yields of wheat, barley, and papyrus.",
      advanced_cities: "Major urban nodes serving administrative and religious functions, including Memphis, Thebes, Alexandria, and Akhetaten.",
      specialized_workers: "Stone masons, embalmers, papyrus makers, scribes, royal architects, goldsmiths, and naval engineers.",
      complex_institutions: "Highly centralized pharaonic bureaucracy; state-directed religion positioning the Pharaoh as a living god; vast standing armies during the New Kingdom.",
      social_classes: "Rigid pyramid structure: Pharaoh at the apex; viziers, nomarchs, and priests; scribes and military officers; skilled artisans; and a vast base of peasant farmers.",
      record_keeping_writing: "Hieroglyphic script used for sacred and monumental inscriptions; Hieratic and Demotic cursive scripts on papyrus rolls for daily administrative accounts.",
      art_architecture: "Monumental stone architecture including the Pyramids of Giza, Karnak Temple complex, and the Valley of the Kings; highly stylized, frontal artistic canons.",
      advanced_technology: "Advanced quarrying and stone-cutting techniques, ramp engineering, glassmaking, solar calendars (365 days), and advanced anatomical knowledge from mummification.",
      long_distance_trade: "State-sponsored expeditions to the Land of Punt for gold, frankincense, and myrrh; Mediterranean trade for Levantine cedar and Aegean oils.",
      artistic_material_culture: "Exquisite gold funerary masks, faience jewelry, painted tomb frescoes depicting daily life, and masterfully carved basalt statues.",
      socio_political_statecraft: "Division of the realm into administrative zones (Nomes) ruled by Nomarchs answering directly to the Vizier, establishing continuous bureaucratic legal traditions.",
      resource_extraction_limits: "Geographically protected by deserts but entirely dependent on the Nile's predictable behavior; vulnerable to severe multi-year droughts that starved the state core."
    },
    achievements: [
      "Monumental stone engineering, culminating in the Great Pyramid of Giza, which remained the tallest man-made structure for over 3,800 years.",
      "Creation of a 365-day solar calendar aligned with the star Sirius, laying the groundwork for the modern calendar year.",
      "Pioneering medical and surgical techniques, including bone setting, suturing, and complex pharmacology documented in the Edwin Smith and Ebers papyri."
    ],
    collapse_or_transformation: {
      type: "Geopolitical Assimilation and Imperial Transition",
      detailed_analysis: "Internal fragmentation during Intermediate Periods repeatedly destabilized the state, but the definitive end came via foreign conquest. Following centuries of invasions by Libyans, Nubians, Assyrians, and Persians, Egypt was captured by Alexander the Great, inaugurating the Ptolemaic Dynasty. The suicide of Cleopatra VII in 30 BCE marked the end of the Ptolemaic Kingdom, transforming Egypt into a highly exploited breadbasket province of the Roman Empire, while its culture slowly Christianized and later Islamicized."
    }
  },
  {
    id: "indus_valley",
    name: "Indus Valley (Harappan) Civilization",
    era: "c. 3300 – 1300 BCE",
    region: "South Asia (Modern-day Pakistan and Northwest India)",
    startBCE: -3300,
    endBCE: -1300,
    periodLabel: "Mature Harappan Era",
    continent: "Asia",
    tagline: "The Grid-Planned Egalitarian Metropolis of Covered Drains and Standardized Weights",
    keyInnovation: "Subterranean Sewage Networks & Metrological Standardization",
    curatorialQuote: "A civilization sprawling over a million square kilometers without monumental palaces or royal graves—defined instead by impeccable public hygiene.",
    primaryImage: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Excavated kiln-baked brick foundations and public sanitation conduits at Mohenjo-daro.",
    imageCredit: "Indus Archaeological Survey",
    characteristics: {
      stable_food_supply: "Bi-annual agricultural strategy utilizing the flood cycles of the Indus and Ghaggar-Hakra rivers; cultivation of wheat, barley, peas, and sesame; earliest evidence of cotton cultivation.",
      advanced_cities: "Meticulously planned grid-pattern cities like Harappa and Mohenjo-daro, constructed with standardized baked bricks and featuring uniform residential blocks.",
      specialized_workers: "Bead makers, bronze smiths, bricklayers, dockyard engineers, seal carvers, and maritime traders.",
      complex_institutions: "Evidence of highly centralized municipal authorities managing urban layouts and public hygiene; lack of grand palaces or temples suggests a unique civic or mercantile governance model.",
      social_classes: "Stratification indicated by residential sizing and variations in grave goods, though noticeably more egalitarian in material distribution than contemporary Egypt or Sumer.",
      record_keeping_writing: "The Indus Script, an undeciphered logosyllabic system found on soapstone seals, pottery fragments, and amulet tokens.",
      art_architecture: "Sophisticated public works including the Great Bath at Mohenjo-daro; advanced drainage and sewage networks with residential toilets; monumental granaries and defensive citadels.",
      advanced_technology: "Invention of standardized weights and measures based on binary and decimal systems; advanced metallurgy for working bronze, copper, and tin; construction of the world's first artificial tidal dockyard at Lothal.",
      long_distance_trade: "Extensive maritime networks trading carnelian beads, ivory, and timber with Mesopotamia (referred to as Meluhha in cuneiform records) and Central Asia.",
      artistic_material_culture: "Intricate steatite seals depicting animals and deities (e.g., Pashupati); realistic bronze sculptures (e.g., the 'Dancing Girl'); terracotta figurines.",
      socio_political_statecraft: "Enforcement of rigorous standardization in weights, brick dimensions (1:2:4 ratio), and city layouts across an area of over one million square kilometers without visible military enforcement.",
      resource_extraction_limits: "High dependency on stable river channels; clearing massive forests to fire billions of mud bricks created localized ecological pressure."
    },
    achievements: [
      "World's first highly integrated municipal sanitation system, featuring covered street drains, private indoor bathrooms, and vertical waste chutes.",
      "Unprecedented metrological precision, creating standardized weight increments as small as 0.86 grams that were uniform across hundreds of urban sites.",
      "Advanced maritime and hydraulic engineering, notably the Lothal dockyard which accommodated ocean-going ships using complex lock gates."
    ],
    collapse_or_transformation: {
      type: "Environmental Shift and De-urbanization",
      detailed_analysis: "The civilization did not experience a sudden violent end, but rather a gradual disintegration during the Late Harappan phase. Tectonic shifts and climatic changes led to the drying up of the major Ghaggar-Hakra river system and altered the course of the Indus tributaries. This caused catastrophic flooding in some zones and severe aridity in others. Unable to sustain the food surpluses required for large populations, urban centers were abandoned, and the population migrated eastward to the Ganges basin, reverting to smaller, non-literate agricultural communities."
    }
  },
  {
    id: "han_dynasty",
    name: "Han Dynasty (Imperial China)",
    era: "202 BCE – 220 CE",
    region: "East Asia (China)",
    startBCE: -202,
    endBCE: 220,
    periodLabel: "Classical Imperial Horizon",
    continent: "Asia",
    tagline: "The Meritocratic Bureaucracy, Silk Arteries, and the Invention of Paper",
    keyInnovation: "Wood Pulp Paper Making & Imperial Civil Service Exams",
    curatorialQuote: "By linking Confucian moral philosophy to Legalist statecraft, the Han synthesized an imperial administration that shaped East Asian civilization for two millennia.",
    primaryImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Historic Chinese watchtower architecture and stone masonry along the ancient imperial frontier.",
    imageCredit: "Imperial Dynastic Annals Archive",
    characteristics: {
      stable_food_supply: "Intensive agricultural regimes utilizing iron plowshares, row cropping, and extensive hydraulic irrigation works across the Yellow and Yangtze river basins; main crops included millet, wheat, and wet-field rice.",
      advanced_cities: "Grand imperial capitals like Chang'an and Luoyang, featuring massive defensive walls, ceremonial palaces, markets, and highly organized bureaucratic sectors.",
      specialized_workers: "Imperial bureaucrats, silk weavers, ironmasters, salt miners, scholars, military strategists, and alchemists.",
      complex_institutions: "Centralized bureaucratic monarchy operating on a synthesis of Legalist state structures and Confucian ethical philosophy; introduction of formal civil service examinations.",
      social_classes: "Four-tier social hierarchy (Sishi): Scholars/Officials (Shi), Farmers/Peasants (Nong), Artisans (Gong), and Merchants (Shang), with the Emperor at the absolute apex.",
      record_keeping_writing: "Standardized Clerical Script (Lishu) written on bamboo slips, wooden tablets, and later, the revolutionary medium of paper; meticulous keeping of dynastic annals (e.g., Shiji by Sima Qian).",
      art_architecture: "Grand multi-story watchtowers and palaces constructed using timber tie-beam frameworks; elaborate tomb complexes containing terracotta figurines and jade burial suits.",
      advanced_technology: "The invention of paper making, the wheelbarrow, the water-powered trip-hammer, the blast furnace for cast iron, the blast bellows, and early seismoscopes.",
      long_distance_trade: "Inauguration of the Silk Road trans-Eurasian trade network, exporting luxury silk, ironware, and lacquerware to Central Asia, India, and the Roman Empire in exchange for horses, jade, and Roman glassware.",
      artistic_material_culture: "Exquisite silk brocades, intricate lacquerware bowls, dynamic bronze statues (e.g., the 'Flying Horse of Gansu'), and masterfully carved jade objects.",
      socio_political_statecraft: "Monopolization of vital state resources like salt and iron to fund military expansions; enforcement of a meritocratic administrative system that undermined regional feudal lords.",
      resource_extraction_limits: "Massive deforestation for agriculture and charcoal for ironworks caused severe soil erosion along the Yellow River, exacerbating devastating floods."
    },
    achievements: [
      "Invention of paper making (attributed to Cai Lun in 105 CE), which fundamentally transformed information storage and bureaucratic management worldwide.",
      "Establishment of the Silk Road, creating the first sustained commercial and cultural highway connecting the Far East with the Western world.",
      "Institutionalization of the Civil Service Examination system, creating a highly educated, merit-based governing bureaucracy that lasted for millennia."
    ],
    collapse_or_transformation: {
      type: "Internal Political Fracturing and Agrarian Crisis",
      detailed_analysis: "The Han Empire fell prey to a combination of institutional rot and socio-economic crises. Decades of corruption at court—dominated by competing factions of powerful eunuchs and consort clans—weakened imperial authority. Concurrently, wealthy elites monopolized vast tracts of agricultural land, leaving peasants heavily taxed and landless. This sparked massive, messianic agrarian rebellions like the Yellow Turban Rebellion. Weakened by internal strife, the empire fractured into military warlord factions, culminating in the abdication of the last Han Emperor in 220 CE and ushering in the chaotic Three Kingdoms period."
    }
  },
  {
    id: "classical_rome",
    name: "Classical Roman Civilization",
    era: "c. 753 BCE – 476 CE (Western Empire)",
    region: "Mediterranean Basin & Europe",
    startBCE: -753,
    endBCE: 476,
    periodLabel: "Republic to Western Empire",
    continent: "Europe",
    tagline: "Hydraulic Concrete, Codified Jurisprudence, and Trans-Continental Logistics",
    keyInnovation: "Pozzolana Concrete Domes & Roman Legal Code",
    curatorialQuote: "Others may beat out bronze or shape marble; your art, Roman, is to govern the nations with law and establish peace.",
    primaryImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Flavian Amphitheater (Colosseum) arches and travertine masonry in Rome, embodying hydraulic concrete engineering.",
    imageCredit: "Capitoline Antiquities Archive",
    characteristics: {
      stable_food_supply: "Large-scale estate agriculture (latifundia) employing slave labor; importing millions of tons of grain from North Africa and Egypt to feed the urban populace via the Annona system.",
      advanced_cities: "Rome (the first city to surpass 1 million residents), alongside major cosmopolitan hubs like Antioch, Alexandria, Ephesus, and Londinium.",
      specialized_workers: "Professional legionnaires, jurists, architects, mosaicists, gladiators, glassblowers, and extensive state bureaucrats.",
      complex_institutions: "Evolved from a Representative Republic with a Senate, Consuls, and Assemblies into an autocratic Imperial Autocracy; highly codified, universal legal systems (Roman Law).",
      social_classes: "Rigid legally defined classes: Patricians (nobles) and Plebeians (commoners), further divided into Senatorial, Equestrian, and Plebeian orders; large populations of freedmen and enslaved individuals.",
      record_keeping_writing: "Latin script used across administrative, legal, and military spheres; extensive public inscriptions, archival tax records, and monumental literature.",
      art_architecture: "Engineering feats featuring pozzolana hydraulic concrete, the true arch, barrel vaults, and structural domes (e.g., the Pantheon); realistic portrait sculpture.",
      advanced_technology: "Massive aqueduct systems, underfloor heating (hypocausts), ballistae, watermills, and an empire-wide network of over 80,000 kilometers of paved roads.",
      long_distance_trade: "Dominance over the Mediterranean Sea ('Mare Nostrum'), connecting European silver and tin mines with Egyptian grain, Indian spices, and Chinese silk via maritime trade routes.",
      artistic_material_culture: "Vibrant wall frescoes (e.g., Pompeii), complex floor mosaics, luxury blown glassware, and commemorative triumphal columns.",
      socio_political_statecraft: "Use of Roman Citizenship as a powerful mechanism of cultural integration, absorbing defeated elites into the imperial administrative framework.",
      resource_extraction_limits: "Vast silver and lead mining operations in Hispania and Britain created severe regional environmental pollution; total reliance on continuous territorial expansion to supply new wealth and slave labor."
    },
    achievements: [
      "Development of Roman Law, introducing concepts like the presumption of innocence and written legal precedents, forming the bedrock of modern Western jurisprudence.",
      "Mastery of hydraulic concrete engineering, facilitating the construction of long-lasting structures like the Colosseum, aqueducts, and deep-water harbors.",
      "Creation of an unprecedented trans-continental infrastructure network that unified diverse economies across Europe, North Africa, and the Near East."
    ],
    collapse_or_transformation: {
      type: "Systemic Internal Decay and External Invasions",
      detailed_analysis: "The Western Roman Empire collapsed under a web of compounding crises. Structurally, constant civil wars for the imperial throne eroded military discipline and state authority. Economically, hyperinflation, debasement of the silver currency, and an overextended tax base paralyzed the economy. These internal crises left the borders vulnerable to massive migrations of Germanic tribes fleeing the Huns. In 476 CE, the Germanic chieftain Odoacer deposed the final western emperor, Romulus Augustulus. The Eastern half, however, transformed and survived for another millennium as the Byzantine Empire."
    }
  },
  {
    id: "aksumite_empire",
    name: "Aksumite Empire",
    era: "c. 100 – 940 CE",
    region: "Horn of Africa (Modern-day Ethiopia and Eritrea)",
    startBCE: 100,
    endBCE: 940,
    periodLabel: "Classical Horn of Africa",
    continent: "Africa",
    tagline: "The Red Sea Crossroads of Gold Coinage, Monolithic Stelae, and Ge'ez Script",
    keyInnovation: "Granite Monolithic Obelisks & Multi-Currency Minting",
    curatorialQuote: "Counted by Persian prophet Mani alongside Rome, Persia, and China as one of the four great kingdoms of the world.",
    primaryImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Towering granite stele of Aksum, carved from a single stone to emulate multi-storied timber-beam palace architecture.",
    imageCredit: "Ethiopian Heritage and Red Sea Antiquities",
    characteristics: {
      stable_food_supply: "Advanced terraced agriculture on mountainous terrain; utilization of animal-drawn plows (an absolute rarity in sub-Saharan Africa); cultivation of teff, wheat, barley, and finger millet.",
      advanced_cities: "The cosmopolitan capital of Aksum, featuring royal palaces and grand plazas, alongside strategic commercial ports like Adulis on the Red Sea.",
      specialized_workers: "Mint masters (coining gold/silver), ivory carvers, stone masons, international merchants, naval captains, and Christian clergy.",
      complex_institutions: "Centralized imperial monarchy under the 'King of Kings' (Negusa Nagast); institutional state church following King Ezana’s conversion to Christianity in the 4th century CE.",
      social_classes: "Royal family and nobility; priestly class; wealthy international merchant elite; military officers; agrarian artisans; and domestic servants.",
      record_keeping_writing: "Development of the Ge'ez script, a unique African vocalic alphabet (abugida) used for royal inscriptions, religious texts, and administrative bookkeeping.",
      art_architecture: "Monumental monolithic stone stelae (obelisks) carved to resemble multi-story Aksumite buildings, serving as subterranean royal tomb markers.",
      advanced_technology: "Advanced dry-stone masonry without mortar; sophisticated water preservation systems including dams and reservoirs (e.g., Safra Dam); indigenous gold/silver/bronze coinage minting.",
      long_distance_trade: "A critical trade nexus linking the Roman Empire, India, and Persia; exported high-value commodities like ivory, gold, emeralds, frankincense, and tortoise shells.",
      artistic_material_culture: "Finely minted coins bearing the profiles of kings and religious symbols (first shifting from disc/crescent to Christian crosses); decorated pottery and luxury glassware.",
      socio_political_statecraft: "Projected geopolitical power across the Red Sea, invading and ruling parts of Himyar (modern-day Yemen) in the 6th century to safeguard trade channels.",
      resource_extraction_limits: "Intensive farming on steep hillslopes coupled with vast timber cutting for fuel and metallurgy caused catastrophic soil erosion and local climate shifts."
    },
    achievements: [
      "Development of the Ge'ez script, one of the few indigenous written languages created and maintained within sub-Saharan Africa.",
      "One of the first global empires to mint its own official coinage in gold, silver, and bronze, serving as an international currency recognized from Rome to India.",
      "Architectural engineering of the massive Obelisk of Aksum, a single block of granite weighing 160 tons, masterfully carved and erected without mortar."
    ],
    collapse_or_transformation: {
      type: "Economic Isolation and Environmental Degradation",
      detailed_analysis: "The rise of the early Islamic Caliphates in the 7th century seized control of the Red Sea maritime routes, isolating Aksum from its core international trading partners in the Mediterranean and India. The economic loss crippled the empire’s revenue base. Simultaneously, centuries of intense cultivation and deforestation triggered massive soil erosion and lowered agricultural productivity in the Aksumite core. The state was forced to shift its political center southward into the rugged Ethiopian highlands, transforming into the isolated medieval Christian kingdom that paved the way for the Zagwe and Solomonic dynasties."
    }
  },
  {
    id: "maya",
    name: "Classic Maya Civilization",
    era: "c. 250 – 900 CE",
    region: "Mesoamerica (Modern-day southern Mexico, Guatemala, Belize, and Honduras)",
    startBCE: 250,
    endBCE: 900,
    periodLabel: "Classic Mesoamerican Florescence",
    continent: "Americas",
    tagline: "The Astronomical Calculators of Zero, Corbelled Pyramids, and Glyphic Codices",
    keyInnovation: "Mathematical Concept of Zero & Long Count Calendrics",
    curatorialQuote: "Deep in the Petén rainforest, astronomer-kings calculated the movements of Venus and recorded the deeds of divine dynasts upon stone stelae.",
    primaryImage: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Towering limestone stepped pyramid temples emerging from the Petén tropical forest canopy.",
    imageCredit: "Mesoamerican Archaeological Corpus",
    characteristics: {
      stable_food_supply: "Highly sophisticated agro-engineering, including raised fields in seasonal wetlands, swidden farming, and hillside terracing; primary crops were maize, beans, squash, and cacao.",
      advanced_cities: "Densely populated, independent city-states like Tikal, Palenque, Copán, and Calakmul, arranged around expansive ceremonial plazas.",
      specialized_workers: "Astronomer-priests, royal scribes, jade artisans, limestone architects, master stone carvers, and elite warriors.",
      complex_institutions: "Fragmented, competitive divine kingdoms (K'uhul Ajaw); deeply ritualized state religion centered on bloodletting, cyclical cosmos, and ballgame rituals.",
      social_classes: "Rigid hierarchy: The divine king and dynastic lineages; administrative nobility and priests; wealthy long-distance merchants; specialized artisans; and the broad base of peasant laborers.",
      record_keeping_writing: "The most advanced pre-Columbian writing system—a logosyllabic script composed of hundreds of intricate glyphs; written in bark-paper codices and carved onto stone stelae.",
      art_architecture: "Monumental corbel-arched stone temple pyramids, ballcourts, and palaces; intricate limestone stucco reliefs and painted multi-scene pottery.",
      advanced_technology: "Sophisticated hydraulic engineering featuring plastered reservoirs, underground aqueducts, a base-20 vigesimal system, the mathematical concept of absolute zero, and precise astronomical tools.",
      long_distance_trade: "Intra-regional networks trading elite goods like jade, obsidian, quetzal feathers, marine shells, and highly prized cacao beans used as currency.",
      artistic_material_culture: "Exquisite jade portraits, masterfully carved limestone lintels detailing royal history, and polychrome vessels illustrating complex mythological scenes.",
      socio_political_statecraft: "Dynamic geopolitical alliances and intense endemic warfare handled via complex hegemony structures, driven by competing superpowers Tikal and Calakmul.",
      resource_extraction_limits: "Massive consumption of timber to burn limestone into stucco plaster caused sweeping deforestation, fundamentally altering the local microclimate."
    },
    achievements: [
      "Independent invention of the mathematical concept of zero, allowing for advanced place-value calculations within their vigesimal system.",
      "Unprecedented astronomical precision, calculating the synodic cycle of Venus, solar eclipses, and formulating the highly accurate Long Count Calendar.",
      "Creation of a fully functional, complex phonetic writing system capable of recording spoken language, historical events, and dynastic genealogies in rich detail."
    ],
    collapse_or_transformation: {
      type: "Systemic Ecological Breakdown and Societal Disintegration",
      detailed_analysis: "The 'Classic Maya Collapse' was triggered by an intersection of anthropogenic environmental degradation and severe climatic shifts. Universal deforestation for agricultural expansion and lime-plaster production altered the local climate, reducing rainfall. This coincided with a devastating century-long megadrought cycle. The depleted agricultural base could no longer support the ballooning urban populations. As resources dwindled, the divine kings lost religious legitimacy, sparking systemic peasant revolts and hyper-violent warfare among desperate city-states. The urban centers were abandoned to the jungle, though northern cities like Chichen Itza transformed and thrived during the Postclassic era."
    }
  },
  {
    id: "islamic_golden_age",
    name: "Islamic Golden Age (Abbasid Caliphate focus)",
    era: "c. 750 – 1258 CE",
    region: "Middle East, North Africa, Central Asia, and Iberia",
    startBCE: 750,
    endBCE: 1258,
    periodLabel: "High Abbasid Intellectual Epoch",
    continent: "Middle East",
    tagline: "The House of Wisdom, Algebraic Mathematics, and Trans-Continental Science",
    keyInnovation: "Invention of Algebra (Al-Jabr) & Systematic Empirical Optics",
    curatorialQuote: "Ink of the scholar is holier than the blood of the martyr: Baghdad's libraries preserved antiquity while birthing modern science.",
    primaryImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Geometric arabesque and muqarnas vaulting in historic Islamic architecture, echoing algebraic proportion.",
    imageCredit: "Dar al-Hikma Archival Retrospective",
    characteristics: {
      stable_food_supply: "The Islamic Agricultural Revolution: Dissemination of crops across Afro-Eurasia (sorghum, citrus, rice, sugarcane); widespread diffusion of advanced hydraulic machinery like the noria, saqiya, and underground qanat canals.",
      advanced_cities: "Metropolitan super-hubs including Baghdad (the round city, holding over 1 million residents), Cairo, Damascus, Córdoba, and Samarkand.",
      specialized_workers: "Polymath scholars, paper makers, astronomers, pharmacists, expert calligraphers, textile weavers, and international spice merchants.",
      complex_institutions: "Centralized caliphal state bureaucracy (Diwan) overseen by the Grand Vizier; universal legal systems rooted in Islamic Jurisprudence (Sharia); state-funded academic institutes.",
      social_classes: "Caliphal family and Arab nobility; non-Arab Muslim converts (Mawali); protected non-Muslim monotheists (Dhimmi, including Jews and Christians); and domestic/military enslaved populations.",
      record_keeping_writing: "Highly standardized Arabic script; massive adoption of paper production technology from China, enabling the creation of vast public libraries, state registries, and extensive translation bureaus.",
      art_architecture: "Magnificent mosques and palaces featuring geometric arabesque patterns, complex tilework, pointed arches, and sweeping domes (e.g., Great Mosque of Córdoba, House of Wisdom).",
      advanced_technology: "Sophisticated water clocks, astrolabes for navigation, early chemical distillation apparatuses, advanced lenses/optics, and early windmills.",
      long_distance_trade: "The heart of the Afro-Eurasian trade network, connecting the Indian Ocean maritime routes and Trans-Saharan camel caravans with the Silk Road and European trade nodes.",
      artistic_material_culture: "Lusterware ceramics, intricate damascene inlaid metalwork, finely woven Persian carpets, and masterfully illuminated Quranic manuscripts.",
      socio_political_statecraft: "The Translation Movement: State-funded efforts to gather, translate, and preserve ancient Greek, Persian, and Indian scientific texts into Arabic, unifying disparate global knowledge systems.",
      resource_extraction_limits: "High dependence on maintaining fragile irrigation webs in arid regions; urbanization placed high strain on surrounding wood supplies for brickmaking and public baths."
    },
    achievements: [
      "Founding of the House of Wisdom (Bayt al-Hikma) in Baghdad, driving the global preservation and expansion of scientific, philosophical, and medical knowledge.",
      "Invention of Algebra (Al-Jabr) and the popularization of the Hindu-Arabic numeral system with place-value decimals by polymath Al-Khwarizmi.",
      "Pioneering the modern scientific method and experimental optics by Ibn al-Haytham, alongside the systematization of global medicine by Ibn Sina (Avicenna)."
    ],
    collapse_or_transformation: {
      type: "Catastrophic External Invasion and Fragmentation",
      detailed_analysis: "The golden age began to splinter due to political devolution, as regional governors (Sultans and Emirs) formed independent dynasties, reducing the Abbasid Caliph in Baghdad to a symbolic religious figurehead. The absolute end of the golden age core came with the arrival of the Mongol Empire led by Hulagu Khan. In 1258 CE, the Mongols besieged and sacked Baghdad, executing the Caliph, burning the House of Wisdom, and destroying the ancient canal systems of Mesopotamia. While Islamic culture and science transformed and continued to flourish in the Ottoman, Safavid, and Mughal Empires, the central Abbasid institutional golden age was definitively broken."
    }
  },
  {
    id: "mali_empire",
    name: "Mali Empire",
    era: "c. 1230 – 1670 CE",
    region: "West Africa (Sahel and Niger River Valley)",
    startBCE: 1230,
    endBCE: 1670,
    periodLabel: "Sahelian Imperial Golden Age",
    continent: "Africa",
    tagline: "The Trans-Saharan Gold Nexus, Timbuktu Universities, and the Kouroukan Fuga",
    keyInnovation: "Sudano-Sahelian Adobe Architecture & Kouroukan Fuga Constitution",
    curatorialQuote: "A traveler in Mali felt no fear of robbers; justice was strict, and learning was celebrated from Djenné to the Sankore University.",
    primaryImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Sudano-Sahelian monumental adobe architecture with projecting palm toron beams in Djenné.",
    imageCredit: "Sahel Heritage & Sankore Manuscript Archive",
    characteristics: {
      stable_food_supply: "Floodplain agriculture along the fertile Niger River valley; cultivation of African rice, millet, sorghum, cotton, and groundnuts; intensive cattle herding.",
      advanced_cities: "Major urban commercial and scholarly centers like Timbuktu, Gao, Djenné, and the imperial capital of Niani.",
      specialized_workers: "Gold miners, trans-Saharan caravan drivers, Islamic scholars/jurists, blacksmiths (revered for ritual and military ironwork), griots (oral historians), and weavers.",
      complex_institutions: "Decentralized federal monarchy led by the Mansa (Emperor), ruling through a supreme council of clan leaders (Gbara); integration of Islamic law alongside traditional indigenous legal customs.",
      social_classes: "The royal family and court officials; Islamic scholars and judges; artisan guilds (castes of smiths and leatherworkers); free farmers; and domestic enslaved populations.",
      record_keeping_writing: "Widespread use of the Arabic script for administrative records, judicial rulings, diplomatic letters, and the production of hundreds of thousands of scholarly manuscripts in Timbuktu universities.",
      art_architecture: "Distinctive Sudano-Sahelian architecture, characterized by monumental adobe mud-brick structures reinforced with wooden logs (e.g., Sankore Mosque, Great Mosque of Djenné).",
      advanced_technology: "Advanced iron metallurgy for weapon production, architectural engineering utilizing earthen plaster matrices, and complex logistics for trans-continental camel caravan routes.",
      long_distance_trade: "Absolute monopoly over the Trans-Saharan trade routes, exchanging vast quantities of West African gold, ivory, and ostrich feathers for North African salt, copper, luxury textiles, and books.",
      artistic_material_culture: "Terra-cotta sculptures of the Inner Niger Delta, intricate gold jewelry, heavy woven textiles, and masterfully crafted wooden ceremonial masks.",
      socio_political_statecraft: "Codification of the Kouroukan Fuga in 1235 CE, an oral constitution establishing human rights, social divisions, and economic regulations across the multi-ethnic empire.",
      resource_extraction_limits: "Heavy reliance on the environmental stability of the Sahel belt; gold extraction depended on clandestine southern mining fields (Bambuk, Boure) beyond direct administrative control."
    },
    achievements: [
      "Transforming Timbuktu into one of the world's premier centers of Islamic scholarship, boasting the University of Sankore and vast private libraries holding thousands of manuscripts.",
      "Orchestrating the famous hajj of Mansa Musa in 1324 CE, whose immense distribution of gold in Cairo, Medina, and Mecca single-handedly altered the gold economy of the Mediterranean.",
      "Codification of the Kouroukan Fuga, one of the world's earliest constitutional frameworks governing state organization and human rights."
    ],
    collapse_or_transformation: {
      type: "Internal Succession Crises and Rise of Rival Powers",
      detailed_analysis: "Following the death of powerful rulers like Mansa Musa and Mansa Suleyman, the Mali Empire was plagued by constant succession disputes, weakening central authority. Seizing upon this instability, peripheral vassal states began to rebel and break away. The neighboring Songhai Empire under Sonni Ali captured the key commercial cities of Gao and Timbuktu in the late 15th century, absorbing Mali's wealth. Compounded by Moroccan military incursions and the opening of European coastal trade routes that bypassed the trans-Saharan routes, Mali fractured into small, competing Mandinka chiefdoms by the mid-17th century."
    }
  },
  {
    id: "incan_empire",
    name: "Incan Empire (Tawantinsuyu)",
    era: "c. 1438 – 1572 CE",
    region: "South America (Andean Mountain Range)",
    startBCE: 1438,
    endBCE: 1572,
    periodLabel: "High Andean Synthesis",
    continent: "Americas",
    tagline: "The Road of the Sun: Ashlar Masonry, Khipu Strings, and Vertical Agro-Ecology",
    keyInnovation: "Earthquake-Proof Interlocking Stone & 40,000-km Qhapaq Ñan Highway",
    curatorialQuote: "Without coinage or commercial markets, Tawantinsuyu fed twelve million souls across snowbound peaks and barren deserts.",
    primaryImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Precision-fitted granite terrace and citadel masonry overlooking the Urubamba valley at Machu Picchu.",
    imageCredit: "Andean Tawantinsuyu Archive",
    characteristics: {
      stable_food_supply: "Unparalleled vertical archipelago agro-engineering: extensive mountainside stone terraces (andenes) coupled with complex irrigation canals; freeze-drying food preservation; cultivation of thousands of varieties of potatoes, maize, quinoa, and coca.",
      advanced_cities: "The monumental imperial capital of Cusco, alongside high-altitude urban citadels like Machu Picchu, Ollantaytambo, and Huánuco Pampa.",
      specialized_workers: "Stone masons capable of tight-fitting ashlar masonry, quipucamayocs (knot-record keepers), chasquis (relay runners), bridge builders, textile weavers, and military engineers.",
      complex_institutions: "Absolute command-economy monarchy ruled by the Sapa Inca (considered a child of the Sun god Inti); highly structured state distribution networks lacking a commercial market or money system; labor tax system (Mita).",
      social_classes: "Strict caste structure: Sapa Inca and the royal ayllus (Panacas); regional aristocratic governors (Curacas); professional bureaucrats; and the massive population of common ayllu farmers.",
      record_keeping_writing: "The Khipu (Quipu)—a highly advanced three-dimensional notation system using colored, knotted cotton or camelid cords to record census data, taxes, military logistics, and narrative histories.",
      art_architecture: "Monumental ashlar stone architecture utilizing massive, precisely shaped interlocking stones without mortar (seismically resistant); fine geometric abstract art.",
      advanced_technology: "The Qhapaq Ñan—a spectacular 40,000-kilometer paved highway system spanning vertical peaks and deserts; advanced suspension bridge engineering; bronze metallurgy; complex skull surgery (trepanation).",
      long_distance_trade: "State-directed, non-market trade; resources were collected into imperial storehouses (Qollqas) and redistributed across different eco-zones by the state based on collective need.",
      artistic_material_culture: "Finely woven polychrome textiles of alpaca and vicuña wool (more valued than gold); standardized geometric pottery (Urpus); gold and silver votive statues.",
      socio_political_statecraft: "The Mitma policy: strategic forced relocation of rebellious populations and mixing of ethnic groups to ensure complete imperial integration and prevent insurrections.",
      resource_extraction_limits: "High energetic cost of transport across sheer vertical terrain; lack of draft animals (only llamas for light loads) forced total reliance on human muscle power."
    },
    achievements: [
      "Engineering the Qhapaq Ñan, a massive trans-continental highway system running through the world's most rugged mountain terrain, complete with post-stations and suspension bridges.",
      "Perfecting earthquake-proof ashlar masonry, where massive multi-angled stones fit together so tightly that a knife blade cannot pass between them, surviving major seismic shifts.",
      "Eliminating systemic hunger across a massive imperial population through a comprehensive state-managed agricultural surplus and redistribution system using high-altitude storehouses."
    ],
    collapse_or_transformation: {
      type: "Epidemic Decimation, Civil War, and Foreign Conquest",
      detailed_analysis: "Before the Spanish conquistadors arrived on the coast, Old World smallpox swept through the Andes, killing the Sapa Inca Wayna Qhapaq and his designated heir. This triggered a devastating civil war for the throne between his sons Huáscar and Atahualpa. Atahualpa emerged victorious but inherited a fractured, exhausted empire. In 1532, Francisco Pizarro and a small band of Spanish soldiers ambushed and captured Atahualpa at Cajamarca using firearms, steel armor, and cavalry. Exploiting the empire's internal political cracks and utilizing anti-Inca indigenous allies, the Spanish dismantled the central state apparatus, culminating in the execution of the final neo-Inca resistance ruler, Túpac Amaru, in 1572."
    }
  },
  {
    id: "kingdom_of_benin",
    name: "Kingdom of Benin (Edo Civilization)",
    era: "c. 1180 – 1897 CE",
    region: "West Africa (Modern-day southern Nigeria)",
    startBCE: 1180,
    endBCE: 1897,
    periodLabel: "Rainforest Edo Florescence",
    continent: "Africa",
    tagline: "Lost-Wax Brass Masterpieces, the Linear Earthwork Walls, and the Oba Court",
    keyInnovation: "Lost-Wax Copper Metallurgy & 16,000-km Linear Earthwork Walls",
    curatorialQuote: "The brass casters of Benin captured sovereign power and court liturgy in alloyed metal of astounding technical finesse.",
    primaryImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Historic West African cast copper-alloy relief craftsmanship and royal iconography.",
    imageCredit: "Edo Heritage Guild & Benin Bronzes Archive",
    characteristics: {
      stable_food_supply: "Rainforest agriculture using rotational fallow methods; intensive cultivation of yams, oil palms, plantains, and cassava; raising of livestock like West African Dwarf sheep and goats.",
      advanced_cities: "Edo (Benin City), a highly organized metropolis divided into precise wards, featuring wide, straight avenues and the massive, sprawling royal palace complex of the Oba.",
      specialized_workers: "Guilds of brass casters (lost-wax method), ivory carvers, coral bead craftsmen, ironworkers, palace guards, and professional diplomats.",
      complex_institutions: "Centralized divine monarchy led by the Oba, supported by a dual administrative council of town chiefs (Eghaevbo n'Ore) and palace chiefs (Eghaevbo n'Ogbe).",
      social_classes: "The Oba and royal household; titled palace and town chiefs; corporate artisan guild masters; free common citizens; and low-tier servants or war captives.",
      record_keeping_writing: "A unique system of visual historical record-keeping via narrative bronze plaques and carved ivory tusks that chronicled dynastic genealogies, battles, and court rituals.",
      art_architecture: "The Walls of Benin—an immense network of earthwork banks and ditches extending over 16,000 kilometers across the region; royal palace structures with polished mud columns and brass plaques.",
      advanced_technology: "Unmatched mastery of the lost-wax casting technique for copper alloys; advanced urban engineering for linear defense networks (earthworks).",
      long_distance_trade: "Extensive regional networks trading cloth and palm products, which expanded into international maritime trade with the Portuguese from the late 15th century, exchanging pepper, ivory, and slaves for European coral beads and firearms.",
      artistic_material_culture: "The world-renowned 'Benin Bronzes'—intricate brass commemorative heads of Obas, Queen Mother pendants (Idia), and dynamic relief plaques showing court life.",
      socio_political_statecraft: "Establishment of a complex title system where political ranks were non-hereditary and granted by the Oba, preventing the rise of a permanent independent feudal aristocracy.",
      resource_extraction_limits: "The dense tropical rainforest environment restricted expansion to cleared corridors and required constant manual maintenance against jungle reclamation."
    },
    achievements: [
      "Construction of the Walls of Benin, recognized as one of the world's largest matrix networks of human earthwork engineering, longer than the Great Wall of China in total length.",
      "Perfecting the lost-wax brass casting technique to a level of aesthetic and technical precision that baffled European artists and academics upon contact.",
      "Creating a highly sophisticated urban planning layout in Benin City, complete with early forms of street lighting using palm oil torches and excellent street drainage structures."
    ],
    collapse_or_transformation: {
      type: "Imperial Military Invasion and Destruction",
      detailed_analysis: "During the late 19th-century 'Scramble for Africa,' the British Empire sought to consolidate commercial dominance over the oil palm trade in West Africa. Tensions peaked when an unauthorized British trade mission was attacked by Benin forces. In retaliation, the British launched the violent Benin Punitive Expedition of 1897. British forces advanced on Benin City with Maxim machine guns, captured and looted the royal palace of thousands of irreplaceable brasses and ivory carvings, and intentionally set the historic city ablaze. The Oba, Ovonramwen, was exiled, breaking the independent administrative core of the Edo civilization."
    }
  },
  {
    id: "classical_greece",
    name: "Classical Greek Civilization",
    era: "c. 800 – 146 BCE",
    region: "Aegean Basin, Peloponnese & Mediterranean Littoral",
    startBCE: -800,
    endBCE: -146,
    periodLabel: "Hellenic Archaic & Classical Age",
    continent: "Europe",
    tagline: "Direct Democracy, Socratic Inquiry, Dramatics, and Maritime Thalassocracy",
    keyInnovation: "Direct Citizen Democracy & Axiomatic Mathematics",
    curatorialQuote: "Man is the measure of all things: Greek poleis transformed civic assembly and philosophical inquiry into the bedrock of Western intellectual life.",
    primaryImage: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "The Parthenon on the Athenian Acropolis, embodying golden-ratio Doric architecture and civic statecraft.",
    imageCredit: "Acropolis Antiquities Collection",
    characteristics: {
      stable_food_supply: "Mediterranean triad agriculture: intensive cultivation of olives, wine grapes, and barley on rugged hill terracing; heavy maritime grain imports from the Black Sea (Pontic grain trade).",
      advanced_cities: "Autonomous poleis (city-states) like Athens, Sparta, Corinth, and Thebes centered around a civic agora and elevated defensive acropolis.",
      specialized_workers: "Philosophers, playwrights, sculptors, bronze armorers, hoplite citizen-soldiers, trireme shipwrights, and olive oil exporters.",
      complex_institutions: "Athenian direct citizen democracy (Ekklesia, Boule, and Dikasteria juries); Spartan dual kingship and Gerousia; Panhellenic Olympic games.",
      social_classes: "Free adult male citizens with voting franchise; resident metics (foreign merchants); non-citizen women; and a large base of unfree helots or chattel enslaved laborers.",
      record_keeping_writing: "Adoption and phonetic vocalization of the Phoenician alphabet; flourishing of dramatic playwriting, judicial speeches, and formal histories (Herodotus, Thucydides).",
      art_architecture: "Peripteral marble temples with Doric, Ionic, and Corinthian orders; Contrapposto realistic human statuary; red-figure and black-figure narrative ceramic vases.",
      advanced_technology: "Trireme naval engineering with three banks of oars, the Antikythera astronomical mechanism, torsion catapults, crane pulleys, and Euclidean geometry.",
      long_distance_trade: "Maritime thalassocracy across the Mediterranean and Black Seas, exporting olive oil, wine, and silver in exchange for Egyptian papyrus, Scythian wheat, and copper.",
      artistic_material_culture: "Chryselephantine (gold and ivory) cult statues, bronze discus throwers, finely carved marble funerary stelae, and Olympic victory amphorae.",
      socio_political_statecraft: "Cleisthenic democratic reforms, ostracism laws against tyrants, the Delian League naval hegemony, and Hellenic inter-polis alliances.",
      resource_extraction_limits: "Poor thin topsoils and steep rocky terrain restricted cereal production, forcing continuous maritime colonization and total reliance on open grain sea-lanes."
    },
    achievements: [
      "Invention of direct citizen democracy in Athens, institutionalizing trial by jury, civic debate, and rotation of public offices.",
      "Laying the foundations of deductive logic, philosophical inquiry, drama/tragedy, and Euclidean axiomatic mathematics.",
      "Engineering the Antikythera Mechanism, the world's first analog mechanical computer capable of predicting astronomical positions and eclipses."
    ],
    collapse_or_transformation: {
      type: "Endemic Hegemonic Warfare and Roman Conquest",
      detailed_analysis: "The devastating Peloponnesian War (431–404 BCE) between Athens and Sparta permanently depleted the manpower, treasury, and democratic institutions of the poleis. Successive struggles for hegemony left Greece exhausted and vulnerable. In 338 BCE, Philip II of Macedon unified Greece by conquest, followed by Alexander the Great spreading Hellenism across Afro-Eurasia. Finally, in 146 BCE, Roman legions sacked Corinth, absorbing Greece as an imperial province while its philosophical and architectural culture captured Rome itself."
    }
  },
  {
    id: "norse_vikings",
    name: "Norse Civilization (Viking Age)",
    era: "c. 793 – 1066 CE",
    region: "Scandinavia (Norway, Sweden, Denmark) & North Atlantic",
    startBCE: 793,
    endBCE: 1066,
    periodLabel: "Early Medieval Scandinavian Diaspora",
    continent: "Europe",
    tagline: "Clinker Longships, Althing Parliamentary Assemblies, and Trans-Atlantic Seafaring",
    keyInnovation: "Shallow-Draft Ocean Clinker Longships & Althing Assembly",
    curatorialQuote: "With wind, sail, and sunstone, the Norse navigated open northern oceans, colonizing Iceland, Greenland, and touching Newfoundland five centuries before Columbus.",
    primaryImage: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Reconstructed Viking clinker oak longship cutting through coastal waters, equipped with square wool sail and steering oar.",
    imageCredit: "Nordic Maritime Heritage Archive",
    characteristics: {
      stable_food_supply: "Fjord valley farming and pastoralism: cattle, sheep, barley, rye; heavy reliance on oceanic cod fisheries, seal hunting, and walrus ivory extraction.",
      advanced_cities: "Trading emporia like Hedeby, Birka, Ribe, and Kaupang acting as fortified coastal trading nodes alongside regional farmsteads.",
      specialized_workers: "Shipwrights, bog-iron smelters, runestone carvers, skaldic oral poets, fur trappers, and veteran maritime raiders (Varangians).",
      complex_institutions: "Decentralized regional Thing and Althing parliamentary assemblies where free landowners debated customary law; jarldoms evolving into unified Nordic monarchies.",
      social_classes: "Three-tier social structure: Jarls (nobility and chieftains), Karls (free farmers and craftsmen), and Thralls (unfree laborers and captives).",
      record_keeping_writing: "Runic alphabets (Younger Futhark) carved into monumental runestones, wooden tally sticks, and weapons; preservation of vast epic oral mythologies (Eddas).",
      art_architecture: "Intricate zoomorphic animal-style wood and silver filigree carvings (Urnes, Borre, Oseberg styles); timber turf-roofed longhouses and stave churches.",
      advanced_technology: "Clinker-built flexible longships with symmetrical double-ended hulls capable of crossing open oceans and rowing up shallow rivers; sunstone solar navigation.",
      long_distance_trade: "Enormous trade diaspora connecting Greenland and North America to Dublin, York, Kiev, Novgorod, and Constantinople, trading furs, amber, and slaves for silver bullion.",
      artistic_material_culture: "Silver hack-silver torcs, gilt-bronze oval brooches, Damascus-pattern-welded swords (Ulfberht), and carved walrus ivory chessmen.",
      socio_political_statecraft: "Customary law codified at the Althing (established 930 CE in Iceland); Danegeld tribute treaties with Anglo-Saxon and Frankish crowns; Varangian guard service.",
      resource_extraction_limits: "Extremely short sub-arctic growing seasons, poor soils, and deforestation in Iceland and Greenland pushed societies to oceanic raids and long-distance migration."
    },
    achievements: [
      "Pioneering trans-Atlantic maritime navigation, establishing settlements in Iceland, Greenland, and L'Anse aux Meadows in North America c. 1000 CE.",
      "Engineering the clinker longship, a naval technological masterpiece combining deep-sea seaworthiness with shallow river draft of less than one meter.",
      "Founding the Althing in Iceland in 930 CE, recognized as one of the world's oldest surviving parliamentary assembly institutions."
    ],
    collapse_or_transformation: {
      type: "Christianization, Feudal Integration, and State Consolidation",
      detailed_analysis: "The Viking Age concluded not by ecological destruction, but through deep structural Christianization and absorption into the European feudal order. Scandinavian kings (Harald Bluetooth, Olaf Tryggvason) centralized authority, converted to Roman Christianity, and replaced raiding with formal diplomatic states in Denmark, Norway, and Sweden. The defeat of Harald Hardrada at the Battle of Stamford Bridge in 1066 marked the definitive close of the Viking expansion."
    }
  },
  {
    id: "mongol_empire",
    name: "Mongol Empire (Yeke Monggol Ulus)",
    era: "1206 – 1368 CE",
    region: "Eurasian Steppe (Spanning China, Central Asia, Persia, Russia, Eastern Europe)",
    startBCE: 1206,
    endBCE: 1368,
    periodLabel: "Pax Mongolica Continental Empire",
    continent: "Asia",
    tagline: "Genghis Khan, Nomadic Horse Archery, the Yam Postal Relay, and Eurasian Trade Unification",
    keyInnovation: "Trans-Eurasian Yam Postal Relay & Religious Freedom Edicts",
    curatorialQuote: "A maiden bearing a nugget of gold on her head could wander safely throughout the realm without fear of harm, so strict was the Pax Mongolica.",
    primaryImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Vast sweeps of the Eurasian steppe grassland, cradle of the nomadic horse archer armies.",
    imageCredit: "Steppe Historical Corpus",
    characteristics: {
      stable_food_supply: "Pastoral nomadic subsistence based on five herds (horses, sheep, goats, cattle, camels); mare's milk (airag), dried curd, and meat supplemented by tribute grain from conquered farming sedentary zones.",
      advanced_cities: "Tented mobile imperial courts (ordas) alongside administrative capitals like Karakorum, Sarai, and Khanbaliq (Beijing) housing multi-ethnic scribes and artisans.",
      specialized_workers: "Mounted cavalry archers, siege engineers (conscripted Chinese and Persian specialists), translators, postal stationmasters, and caravaneers.",
      complex_institutions: "Kurultai grand councils to elect the Khagan; strict meritocratic military organization on decimal units (Arban, Jagun, Mingghan, Tumen); formal religious neutrality policy.",
      social_classes: "Golden Family (Altan Urug, direct descendants of Genghis Khan) at the apex; steppe military nobility (Noyans); common nomadic herders; and subjugated agrarian populations.",
      record_keeping_writing: "Adoption of the Uyghur vertical script for imperial edicts, tax registries, and the codification of the Secret History of the Mongols.",
      art_architecture: "Transportable felt yurts (gers) engineered for harsh steppe climates; monumental silver drink fountains in Karakorum; Yuan dynasty imperial palace halls.",
      advanced_technology: "Composite recurve bows with 150-pound draw weights, stirrup archery, smoke signaling, counterweight trebuchets, and the revolutionary Yam pony-express postal network.",
      long_distance_trade: "The Pax Mongolica unified the entire trans-continental Silk Road under single passport control (Paiza), facilitating safe commerce between Venice, Persia, Central Asia, and China.",
      artistic_material_culture: "Gold brocade silk textiles (nasij), blue-and-white Yuan porcelain developed with Persian cobalt, carved jade seals, and silver Paiza safe-conduct tablets.",
      socio_political_statecraft: "The Yassa legal code enforced strict laws against theft, pasture degradation, and corruption, instituting tax exemptions for religious scholars and physicians.",
      resource_extraction_limits: "Extreme reliance on vast grassland pastures for millions of horses; prolonged severe steppe winters (dzuds) created periodic ecological crises and animal starvation."
    },
    achievements: [
      "Forging the largest contiguous land empire in human history, spanning 24 million square kilometers from the Sea of Japan to the Danube River.",
      "Engineering the Yam postal relay network, with thousands of post stations and relay horses enabling messages to cross Eurasia in days.",
      "Establishing the Pax Mongolica, unifying trans-Eurasian commerce, diplomacy, and the diffusion of gunpowder, printing, and paper money between East and West."
    ],
    collapse_or_transformation: {
      type: "Dynastic Devolution, Black Death, and Sedentary Assimilation",
      detailed_analysis: "Following the death of Möngke Khan, the empire fractured into four autonomous khanates: the Yuan Dynasty in China, the Ilkhanate in Persia, the Golden Horde in Russia, and the Chagatai Khanate. In the 1340s, the Black Death swept across the connected trade routes, devastating urban populations and military units. In China, the native Ming Dynasty drove out the Mongols in 1368, while the other khanates progressively assimilated into Persian Islamic, Turkic, or Slavic societies."
    }
  },
  {
    id: "ottoman_empire",
    name: "Ottoman Empire (Devlet-i ʿAlīye-i ʿO s̱mānīye)",
    era: "1299 – 1922 CE",
    region: "Anatolia, Balkans, Middle East & North Africa (Tri-Continental Empire)",
    startBCE: 1299,
    endBCE: 1922,
    periodLabel: "Early Modern Imperial Caliphate",
    continent: "Middle East",
    tagline: "The Sublime Porte, Gunpowder Siege Artillery, Istanbul Crossroads, and the Millet Autonomy",
    keyInnovation: "Gunpowder Cannon Siege Warfare & Multi-Religious Millet System",
    curatorialQuote: "Positioned at the geographical axis of East and West, Istanbul under the Sultans bridged continents with monumental domes, Iznik tiles, and unmatched administrative discipline.",
    primaryImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a1b?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "The cascading domes and minarets of the Süleymaniye Mosque in Istanbul, designed by imperial architect Mimar Sinan.",
    imageCredit: "Topkapi Palace Imperial Archive",
    characteristics: {
      stable_food_supply: "Diverse agrarian base: Anatolian wheat and barley, Nile Delta grain shipments, Danubian livestock, Aegean olive groves, and Levantine orchards, managed via the Timar land tenure system.",
      advanced_cities: "Istanbul (Constantinople, capital holding over 700,000 people), alongside regional metropolitan nodes like Cairo, Damascus, Aleppo, Thessaloniki, and Bursa.",
      specialized_workers: "Janissary elite infantry, sipahi cavalry, imperial architects (e.g. Mimar Sinan), silk weavers, Iznik tile ceramicists, scribes (Kâtips), and Islamic jurists (Muftis).",
      complex_institutions: "The Sublime Porte: centralized bureaucratic monarchy under the Sultan-Caliph; the Grand Vizier presiding over the Imperial Divan council; the Devshirme bureaucratic recruitment system.",
      social_classes: "Two primary estates: the Askeri (military and bureaucratic tax-exempt ruling elite) and the Reaya (tax-paying subjects including farmers, merchants, and artisans of all faiths).",
      record_keeping_writing: "Ottoman Turkish written in Arabic script; enormous state archives (Başbakanlık Osmanlı Arşivi) keeping cadastral land surveys (Tapu Tahrir) and court registers (Sicil).",
      art_architecture: "Classical Ottoman domed mosques with pencil minarets (e.g. Blue Mosque, Süleymaniye); sprawling courtyards of Topkapi Palace; intricate Iznik cobalt-and-coral tiles.",
      advanced_technology: "Massive bronze siege bombards (e.g. Basilica cannon used in 1453), advanced military logistics, naval galley fleets, and sophisticated public water fountains and bathhouses.",
      long_distance_trade: "Dominance over the eastern Mediterranean and the convergence of Silk and Spice routes, levying custom tariffs on European merchants buying silk, spices, and Yemeni coffee.",
      artistic_material_culture: "Imperial tughra calligraphic emblems, finely forged Damascus steel shamshir swords, gold-embroidered silk caftans, and illuminated manuscripts.",
      socio_political_statecraft: "The Millet System: granting self-governing communal and legal autonomy to Christian and Jewish religious minorities under their own religious leaders.",
      resource_extraction_limits: "Massive logistical strain of sustaining dual-front wars against the Habsburgs in central Europe and the Safavids in Persia simultaneously across three continents."
    },
    achievements: [
      "Conquest of Constantinople in 1453 under Mehmed II, transforming the Byzantine capital into the thriving multi-cultural metropolis of Istanbul.",
      "Formulation of the Millet System, providing institutional autonomy and religious freedom for minorities centuries before modern secular tolerance.",
      "Mastery of monumental domed architecture under imperial architect Mimar Sinan, culminating in the Selimiye and Süleymaniye complexes."
    ],
    collapse_or_transformation: {
      type: "Modern Military Modernization Pressures and WWI Dissolution",
      detailed_analysis: "The bypassing of Mediterranean trade routes by European oceanic voyages and silver inflation eroded Ottoman fiscal revenues. During the 19th century, nationalist uprisings across the Balkans and military defeats earned the empire the moniker 'Sick Man of Europe.' Despite the Tanzimat modernization reforms, entry into World War I on the side of the Central Powers proved fatal. Following wartime devastation, the empire was partitioned by Allied powers, leading Mustafa Kemal Atatürk to lead the Turkish War of Independence and abolish the Sultanate in 1922 to establish the modern Republic of Turkey."
    }
  },
  {
    id: "british_empire",
    name: "British Empire & Maritime Hegemony",
    era: "c. 1600 – 1997 CE",
    region: "Global Maritime Archipelago (UK, Americas, India, Africa, Australasia, Asia)",
    startBCE: 1600,
    endBCE: 1997,
    periodLabel: "Pax Britannica & Global Maritime Reach",
    continent: "Global",
    tagline: "Steam Mechanization, Royal Navy Navigation, Joint-Stock Charters, and Trans-Oceanic Logistics",
    keyInnovation: "Industrial Steam Thermodynamics & Global Undersea Telegraph Cables",
    curatorialQuote: "The empire on which the sun never set: fueled by coal mines, parliamentary statutes, and global container-scale merchant shipping.",
    primaryImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "The Palace of Westminster and Big Ben in London, heart of parliamentary statutes and maritime legislation.",
    imageCredit: "Maritime Greenwich Collection",
    characteristics: {
      stable_food_supply: "British Agricultural Revolution: four-crop rotation, selective livestock breeding, and seed drills, transitioning to global oceanic food supplies (grain from North America, meat from Australia and Argentina).",
      advanced_cities: "London (the first modern metropolis to surpass 6 million residents), Liverpool, Manchester, alongside imperial port cities like Bombay, Calcutta, Singapore, and Hong Kong.",
      specialized_workers: "Naval engineers, mechanical machinists, textile factory operators, steam locomotive drivers, colonial civil servants, and merchant marine sailors.",
      complex_institutions: "Parliamentary constitutional monarchy; independent judiciary and Common Law traditions; chartered monopolies like the British East India Company; Bank of England credit mechanisms.",
      social_classes: "Industrial capitalist bourgeoisie, landed aristocracy, professional managerial classes, and a massive domestic industrial working class alongside colonized subjects.",
      record_keeping_writing: "Universal print press, standardized English commercial law documentation, global undersea telegraph communication networks (All Red Line), and meticulous imperial gazetteers.",
      art_architecture: "Victorian Gothic Revival architecture (Houses of Parliament), iron and plate-glass engineering (Crystal Palace), and grand neoclassical colonial civic buildings.",
      advanced_technology: "Steam engines (Watt), steamships, trans-continental railways, iron/steel Bessemer converters, chronometer longitude navigation, and mechanized cotton textile looms.",
      long_distance_trade: "Global maritime dominion: exporting manufactured textiles, iron, and coal while importing Indian tea and spices, Chinese porcelain, American raw cotton, and Malayan rubber.",
      artistic_material_culture: "Sheffield silver-plate, Wedgwood jasperware ceramics, bespoke Savile Row tailored clothing, and massive institutional museum collections in London.",
      socio_political_statecraft: "Rule of Common Law precedents, parliamentary governance, gunboat diplomacy, divide-and-rule colonial administration, and the creation of international gold standard currency.",
      resource_extraction_limits: "Heavy reliance on continuous coal extraction and global imperial raw commodities; exploitation of subject populations sparked catastrophic famines and anti-colonial resistance."
    },
    achievements: [
      "Igniting the Industrial Revolution, transitioning human civilization from biological muscle and wind power to coal-fired thermodynamic steam machinery.",
      "Constructing the first global communications network via thousands of miles of undersea telegraph cables spanning every ocean.",
      "Establishing global maritime navigation standards, including Greenwich Mean Time (GMT) and the Prime Meridian as the international standard of time and longitude."
    ],
    collapse_or_transformation: {
      type: "Post-War Exhaustion, Decolonization, and Commonwealth Transition",
      detailed_analysis: "The economic exhaustion of World War I and World War II shattered Britain's financial hegemony and ability to project global naval power. Facing powerful anti-colonial independence movements led by figures like Mahatma Gandhi in India, Britain underwent rapid decolonization between 1947 and the 1960s. The transfer of sovereignty of Hong Kong in 1997 symbolized the definitive end of the empire, which transitioned into the voluntary diplomatic association of the Commonwealth of Nations."
    }
  },
  {
    id: "modern_industrial_digital",
    name: "Modern Industrial & Digital Civilization",
    era: "c. 1760 CE – Present",
    region: "Global (Originating in Western Europe, now planetary)",
    startBCE: 1760,
    endBCE: 2026,
    periodLabel: "The Planetary Technosphere",
    continent: "Global",
    tagline: "Synthetic Nitrogen, Planetary Compute, Spacecraft, and the Anthropocene",
    keyInnovation: "Silicon Microprocessors, Haber-Bosch Synthesis & Global Internet",
    curatorialQuote: "For the first time in geological history, a single species orchestrates planetary energy flows, split atoms, and encoded consciousness in silicon.",
    primaryImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Integrated semiconductor microarchitecture, planetary fiber optics, and orbital satellite telemetry.",
    imageCredit: "Planetary Technology & Contemporary Systems Archive",
    characteristics: {
      stable_food_supply: "Industrialized agriculture utilizing synthetic fertilizers (Haber-Bosch process), mechanized harvesting, automated monoculture, genetically modified crops, and international cold-chain logistics.",
      advanced_cities: "Massive interconnected hyper-cities and megalopolises (e.g., Tokyo, New York, Shanghai) housing more than 55% of the total human population.",
      specialized_workers: "Highly technical, granular division of labor: software engineers, quantum physicists, logistics managers, financial analysts, data scientists, and automated factory operators.",
      complex_institutions: "Supranational governing organizations (UN, WTO, IMF); sovereign nation-states operating under corporate or constitutional legal frameworks; global capital markets and central banking systems.",
      social_classes: "Fluid socioeconomic stratification driven by capital, educational access, and technological integration, shifting from old landed aristocracies to corporate elites, professional classes, and gig economies.",
      record_keeping_writing: "Hyper-dense digital information systems using binary code; planetary server farms, decentralized cloud computing networks, and real-time algorithmic big-data tracking.",
      art_architecture: "Skyscrapers built with structural steel, plate glass, and reinforced concrete; digital media, algorithmic generative art, virtual environments, and multimedia global streaming.",
      advanced_technology: "Semiconductor microprocessors, internet networking, artificial intelligence, quantum computing, space exploration hardware, gene editing (CRISPR), and nuclear fission engines.",
      long_distance_trade: "Total globalization: instantaneous high-frequency electronic financial transactions; massive supply chains utilizing containerized shipping lanes and air freight corridors.",
      artistic_material_culture: "Mass-produced consumer electronics, algorithmic user-interface designs, global fashion brands, and digital assets stored via decentralized ledgers.",
      socio_political_statecraft: "Globalized regulatory governance, complex intellectual property frameworks, data privacy laws, and international treaty matrix systems managing weapons and environmental impact.",
      resource_extraction_limits: "Unprecedented resource consumption: absolute reliance on fossil fuels and rare-earth minerals, pushing planetary systems toward dangerous anthropogenic climate boundaries."
    },
    achievements: [
      "Eradication of numerous infectious diseases through the development of vaccines, antibiotics, and molecular gene therapies, doubling average human life expectancy.",
      "Creation of the Internet and global satellite networks, facilitating instantaneous data transfer and vocal communication across any point on Earth.",
      "Successful space exploration initiatives, culminating in landing humans on the Moon, placing permanent space stations in orbit, and sending probes out of the solar system."
    ],
    collapse_or_transformation: {
      type: "Ongoing Anthropogenic Pressures and Technological Transition",
      detailed_analysis: "Modern global civilization faces a critical systemic junction rather than an accomplished historical collapse. The primary threat stems from its own success: carbon emissions from industrial energy use have triggered systemic climate change, causing ocean acidification, extreme weather shifts, and biosphere degradation. Concurrently, hyper-complex supply networks create high vulnerability to systemic collapses (e.g., pandemics, cyberattacks, or financial panics). The civilization is currently attempting a structural transformation—shifting toward renewable energy grids, circular resource footprints, and advanced artificial intelligence management to avoid a global ecological or technological collapse."
    }
  }
];
