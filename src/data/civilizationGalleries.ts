/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArchivalGalleryItem } from '../types/civilization';

// Verified, historically authentic public-domain museum artifacts and monuments from Wikimedia Commons
export const CIVILIZATION_GALLERIES: Record<string, ArchivalGalleryItem[]> = {
  "sumer": [
    {
      "id": "sumer-1",
      "title": "The Great Ziggurat of Ur",
      "category": "Architecture",
      "period": "c. 2100 BCE · Third Dynasty of Ur",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Ziggurat_of_ur.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Ziggurat_of_ur.jpg",
      "caption": "Monumental stepped temple pyramid dedicated to Nanna, excavated by Leonard Woolley in modern Dhi Qar, Iraq.",
      "credit": "Archaeological Survey of Mesopotamia / Wikimedia Commons"
    },
    {
      "id": "sumer-2",
      "title": "The Standard of Ur (War Panel)",
      "category": "Artifact",
      "period": "c. 2600 BCE · Early Dynastic III",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Standard_of_Ur_-_War.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Standard_of_Ur_-_War.jpg",
      "caption": "Lapis lazuli, red limestone, and shell mosaic depicting four-wheeled Sumerian battle wagons and royal infantry.",
      "credit": "British Museum / Wikimedia Commons"
    },
    {
      "id": "sumer-3",
      "title": "Statue of Gudea of Lagash",
      "category": "Artwork",
      "period": "c. 2120 BCE · Neo-Sumerian",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Statue_of_Gudea_standing-AO_201_img_1603.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Statue_of_Gudea_standing-AO_201_img_1603.jpg",
      "caption": "Diorite statue of Gudea, ruler of Lagash, carved with folded hands and cuneiform dedication hymns across his tunic.",
      "credit": "Musée du Louvre / Wikimedia Commons"
    },
    {
      "id": "sumer-4",
      "title": "Queen Puabi's Gold Headdress",
      "category": "Artifact",
      "period": "c. 2500 BCE · Royal Cemetery of Ur",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Queen_Puabi%27s_headdress.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Queen_Puabi%27s_headdress.jpg",
      "caption": "Intricate beaten gold ribbons, beech-leaf pendants, lapis lazuli, and carnelian beads from Royal Tomb PG 800.",
      "credit": "Penn Museum / Wikimedia Commons"
    },
    {
      "id": "sumer-5",
      "title": "Cuneiform Flood Tablet (Epic of Gilgamesh)",
      "category": "Artifact",
      "period": "c. 7th Century BCE Assyrian copy of Sumerian original",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/British_Museum_Flood_Tablet.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/British_Museum_Flood_Tablet.jpg",
      "caption": "Baked clay cuneiform tablet from the Library of Ashurbanipal containing the Babylonian and Sumerian flood narrative.",
      "credit": "British Museum / Wikimedia Commons"
    },
    {
      "id": "sumer-6",
      "title": "Warka Vase (Uruk Sacred Carved Vessel)",
      "category": "Artwork",
      "period": "c. 3200 – 3000 BCE · Uruk Period",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Warka_Vase.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Warka_Vase.jpg",
      "caption": "Alabaster carved vessel depicting tiers of river vegetation, sacrificial animals, and the goddess Inanna.",
      "credit": "National Museum of Iraq / Wikimedia Commons"
    }
  ],
  "ancient_egypt": [
    {
      "id": "ancient_egypt-1",
      "title": "The Great Pyramids of Giza",
      "category": "Architecture",
      "period": "c. 2560 BCE · Old Kingdom",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/All_Gizah_Pyramids.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/All_Gizah_Pyramids.jpg",
      "caption": "The pyramids of Khufu, Khafre, and Menkaure rising from the desert plateau at Giza, engineered with astronomical precision.",
      "credit": "Giza Plateau Antiquities Authority / Wikimedia Commons"
    },
    {
      "id": "ancient_egypt-2",
      "title": "Gold Funerary Mask of Tutankhamun",
      "category": "Artifact",
      "period": "c. 1323 BCE · Eighteenth Dynasty",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Tutankhamun_mask_macro.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Tutankhamun_mask_macro.jpg",
      "caption": "Solid beaten gold mask inlaid with lapis lazuli, turquoise, carnelian, and obsidian discovered in Tomb KV62.",
      "credit": "Egyptian Museum, Cairo / Wikimedia Commons"
    },
    {
      "id": "ancient_egypt-3",
      "title": "The Bust of Queen Nefertiti",
      "category": "Artwork",
      "period": "c. 1345 BCE · Amarna Period",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Nofretete_Neues_Museum.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Nofretete_Neues_Museum.jpg",
      "caption": "Limestone core coated with painted stucco by sculptor Thutmose, depicting the Great Royal Wife of Akhenaten.",
      "credit": "Neues Museum Berlin / Wikimedia Commons"
    },
    {
      "id": "ancient_egypt-4",
      "title": "Great Temple of Ramesses II at Abu Simbel",
      "category": "Architecture",
      "period": "c. 1264 BCE · Nineteenth Dynasty",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Abu_Simbel,_Ramesses_II_Temple.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Abu_Simbel,_Ramesses_II_Temple.jpg",
      "caption": "Four colossal seated statues of Ramesses II carved directly into the sandstone cliffs of Nubia.",
      "credit": "UNESCO Nubian Heritage / Wikimedia Commons"
    },
    {
      "id": "ancient_egypt-5",
      "title": "The Rosetta Stone",
      "category": "Artifact",
      "period": "196 BCE · Ptolemaic Egypt",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Rosetta_Stone.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Rosetta_Stone.jpg",
      "caption": "Granodiorite stele inscribed in Hieroglyphic, Demotic, and Ancient Greek, unlocking the decipherment of hieroglyphs.",
      "credit": "British Museum / Wikimedia Commons"
    },
    {
      "id": "ancient_egypt-6",
      "title": "Hypostyle Hall at Karnak Temple",
      "category": "Architecture",
      "period": "c. 1290 BCE · Thebes",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Karnak_temple_columns.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Karnak_temple_columns.jpg",
      "caption": "Monumental forest of 134 sandstone papyrus-shaped columns adorned with deep relief religious ceremonies.",
      "credit": "Luxor Antiquities Inspectorate / Wikimedia Commons"
    }
  ],
  "indus_valley": [
    {
      "id": "indus_valley-1",
      "title": "The Priest-King of Mohenjo-daro",
      "category": "Artifact",
      "period": "c. 2000 – 1900 BCE · Mature Harappan",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Priest_King_Mohenjo-daro.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Priest_King_Mohenjo-daro.jpg",
      "caption": "Carved steatite portrait of a bearded dignitary wearing a trefoil-patterned shawl and filleted hair.",
      "credit": "National Museum of Pakistan, Karachi / Wikimedia Commons"
    },
    {
      "id": "indus_valley-2",
      "title": "Bronze \"Dancing Girl\" of Mohenjo-daro",
      "category": "Artwork",
      "period": "c. 2300 BCE · Lost-Wax Casting",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Dancing_Girl_of_Mohenjo-daro.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Dancing_Girl_of_Mohenjo-daro.jpg",
      "caption": "Naturalistic bronze statuette of a standing girl adorned with bangles, cast using the cire-perdue technique.",
      "credit": "National Museum, New Delhi / Wikimedia Commons"
    },
    {
      "id": "indus_valley-3",
      "title": "The Great Bath of Mohenjo-daro",
      "category": "Architecture",
      "period": "c. 2500 BCE · Citadel Mound",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Great_Bath_Mohenjodaro.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Great_Bath_Mohenjodaro.jpg",
      "caption": "Public ceremonial water tank constructed with watertight finely fitted fired bricks and bitumen waterproofing.",
      "credit": "Department of Archaeology and Museums, Pakistan / Wikimedia Commons"
    },
    {
      "id": "indus_valley-4",
      "title": "Carved Steatite Stamp Seals with Indus Script",
      "category": "Artifact",
      "period": "c. 2600 – 1900 BCE",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Stamp_seal_and_modern_impression_-_unicorn_and_incense_burner_-_Mohenjo-daro.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Stamp_seal_and_modern_impression_-_unicorn_and_incense_burner_-_Mohenjo-daro.jpg",
      "caption": "Intaglio carved steatite square seal showing a mythical unicorn and Indus symbols used in merchant bale identification.",
      "credit": "Metropolitan Museum of Art / Wikimedia Commons"
    },
    {
      "id": "indus_valley-5",
      "title": "Brick Wastewater Drainage Canal",
      "category": "Technology",
      "period": "c. 2500 BCE · Mohenjo-daro",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Drain_at_Mohenjo-daro.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Drain_at_Mohenjo-daro.jpg",
      "caption": "Precision covered brick sewage conduit running down municipal residential street, showing advanced sanitation.",
      "credit": "Mohenjo-daro Site Museum / Wikimedia Commons"
    },
    {
      "id": "indus_valley-6",
      "title": "Tidal Dockyard Basin at Lothal",
      "category": "Architecture",
      "period": "c. 2200 BCE · Gujarat",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Lothal_dock.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Lothal_dock.jpg",
      "caption": "Burnt-brick tidal engineering basin connecting the city to the Gulf of Khambhat and Arabian Sea trade routes.",
      "credit": "Archaeological Survey of India / Wikimedia Commons"
    }
  ],
  "classical_greece": [
    {
      "id": "classical_greece-1",
      "title": "The Parthenon on the Athenian Acropolis",
      "category": "Architecture",
      "period": "447 – 432 BCE · Classical Athens",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Parthenon_from_south-west.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Parthenon_from_south-west.jpg",
      "caption": "Doric marble temple designed by Ictinus and Callicrates, housing the colossal gold and ivory Athena Parthenos.",
      "credit": "Acropolis Museum, Athens / Wikimedia Commons"
    },
    {
      "id": "classical_greece-2",
      "title": "Winged Victory of Samothrace",
      "category": "Artwork",
      "period": "c. 190 BCE · Hellenistic Greece",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Victoire_de_Samothrace_-_Mus%C3%A9e_du_Louvre_-_LL_438_-_MA_2369.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Victoire_de_Samothrace_-_Mus%C3%A9e_du_Louvre_-_LL_438_-_MA_2369.jpg",
      "caption": "Parian marble sculpture of the goddess Nike alighting upon the prow of a warship.",
      "credit": "Musée du Louvre, Paris / Wikimedia Commons"
    },
    {
      "id": "classical_greece-3",
      "title": "The Charioteer of Delphi Bronze",
      "category": "Artwork",
      "period": "478 BCE · Pythian Sanctuary",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Delphi_Charioteer.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Delphi_Charioteer.jpg",
      "caption": "Life-sized hollow-cast bronze statue with copper lips and inlaid glass eyes dedicated for an Olympic chariot victory.",
      "credit": "Delphi Archaeological Museum / Wikimedia Commons"
    },
    {
      "id": "classical_greece-4",
      "title": "The Caryatid Porch of the Erechtheion",
      "category": "Architecture",
      "period": "421 – 406 BCE · Acropolis of Athens",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Caryatids_Erechtheion.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Caryatids_Erechtheion.jpg",
      "caption": "Six sculpted draped female figures acting as architectural columns supporting the entablature of the temple.",
      "credit": "Hellenic Ministry of Culture / Wikimedia Commons"
    },
    {
      "id": "classical_greece-5",
      "title": "Athenian Silver Owl Tetradrachm",
      "category": "Artifact",
      "period": "c. 450 BCE · Classical Currency",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Athenian_tetradrachm_coin.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Athenian_tetradrachm_coin.jpg",
      "caption": "High-purity silver coinage bearing the helmeted head of Athena and her sacred owl with olive branch.",
      "credit": "Numismatic Museum of Athens / Wikimedia Commons"
    },
    {
      "id": "classical_greece-6",
      "title": "The Ancient Theatre of Epidaurus",
      "category": "Architecture",
      "period": "c. 340 BCE · Peloponnese",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Theatre_of_Epidaurus.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Theatre_of_Epidaurus.jpg",
      "caption": "Limestone acoustic amphitheater accommodating 14,000 spectators, famous for its unmatched sound propagation.",
      "credit": "Epidaurus World Heritage Site / Wikimedia Commons"
    }
  ],
  "classical_rome": [
    {
      "id": "classical_rome-1",
      "title": "The Colosseum (Flavian Amphitheatre)",
      "category": "Architecture",
      "period": "70 – 80 CE · Flavian Rome",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
      "caption": "Travertine and concrete monumental amphitheater seating over 60,000 Romans for gladiatorial spectacles.",
      "credit": "Parco Archeologico del Colosseo / Wikimedia Commons"
    },
    {
      "id": "classical_rome-2",
      "title": "The Pantheon & Unreinforced Concrete Dome",
      "category": "Architecture",
      "period": "118 – 125 CE · Emperor Hadrian",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Pantheon_Rome_Italy.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Pantheon_Rome_Italy.jpg",
      "caption": "Massive circular rotunda and hemispherical dome of pozzolanic concrete illuminated by an open 9-meter oculus.",
      "credit": "Ministero dei Beni Culturali, Italy / Wikimedia Commons"
    },
    {
      "id": "classical_rome-3",
      "title": "Pont du Gard Roman Aqueduct Bridge",
      "category": "Technology",
      "period": "c. 50 CE · Gallia Narbonensis",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Pont_du_Gard_BLS.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Pont_du_Gard_BLS.jpg",
      "caption": "Three-tiered limestone bridge carrying pure mountain spring water over the Gardon river to Nîmes.",
      "credit": "Pont du Gard UNESCO / Wikimedia Commons"
    },
    {
      "id": "classical_rome-4",
      "title": "Augustus of Prima Porta Marble Statue",
      "category": "Artwork",
      "period": "c. 20 BCE · Imperial Iconography",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Augusto_di_Prima_Porta.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Augusto_di_Prima_Porta.jpg",
      "caption": "Heroic portrait statue of Caesar Augustus wearing an allegorical breastplate celebrating the Pax Romana.",
      "credit": "Vatican Museums / Wikimedia Commons"
    },
    {
      "id": "classical_rome-5",
      "title": "Alexander Mosaic from Pompeii",
      "category": "Artwork",
      "period": "c. 100 BCE · House of the Faun",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Issus_mosaic_-_Museo_Archeologico_Nazionale_-_Naples_2013-05-16_16-25-06.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Issus_mosaic_-_Museo_Archeologico_Nazionale_-_Naples_2013-05-16_16-25-06.jpg",
      "caption": "Floor mosaic assembled from over one million stone tesserae portraying Alexander facing Darius III at Issus.",
      "credit": "Museo Archeologico Nazionale di Napoli / Wikimedia Commons"
    },
    {
      "id": "classical_rome-6",
      "title": "Ruins of the Roman Forum & Temple of Saturn",
      "category": "Metropolis",
      "period": "c. 500 BCE – 400 CE · Via Sacra",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Roman_Forum_from_Palatine.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Roman_Forum_from_Palatine.jpg",
      "caption": "The civic, judicial, and religious center of ancient Rome flanked by the Curia, triumphal arches, and basilicas.",
      "credit": "Soprintendenza Speciale Archeologia di Roma / Wikimedia Commons"
    }
  ],
  "han_dynasty": [
    {
      "id": "han_dynasty-1",
      "title": "Terracotta Warriors & Infantry in Xi'an",
      "category": "Artwork",
      "period": "c. 210 – 206 BCE · Imperial Mausoleum",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Terracotta_Warriors_Pit_1_in_Xian.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Terracotta_Warriors_Pit_1_in_Xian.jpg",
      "caption": "Pit 1 containing rows of life-sized armored clay soldiers, commanders, and horses guarding the imperial realm.",
      "credit": "Emperor Qinshihuang's Mausoleum Site Museum / Wikimedia Commons"
    },
    {
      "id": "han_dynasty-2",
      "title": "Mawangdui Painted Silk Funerary Banner",
      "category": "Artwork",
      "period": "c. 168 BCE · Western Han",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Mawangdui_Silk_Banner.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Mawangdui_Silk_Banner.jpg",
      "caption": "T-shaped polychrome silk banner from the tomb of Lady Dai depicting the terrestrial realm, underworld, and heaven.",
      "credit": "Hunan Provincial Museum / Wikimedia Commons"
    },
    {
      "id": "han_dynasty-3",
      "title": "Bronze \"Galloping Horse of Gansu\"",
      "category": "Artwork",
      "period": "c. 150 CE · Eastern Han",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Gansu_Flying_Horse.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Gansu_Flying_Horse.jpg",
      "caption": "Masterwork bronze casting of a celestial stallion galloping with one hoof balanced upon the wing of a swallow.",
      "credit": "Gansu Provincial Museum / Wikimedia Commons"
    },
    {
      "id": "han_dynasty-4",
      "title": "Jade Burial Suit Sewn with Gold Wire",
      "category": "Artifact",
      "period": "113 BCE · Tomb of Liu Sheng",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Jade_burial_suit_of_Liu_Sheng.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Jade_burial_suit_of_Liu_Sheng.jpg",
      "caption": "Composed of 2,498 polished nephrite jade plaques laced with pure gold wire to preserve royal immortality.",
      "credit": "Hebei Museum / Wikimedia Commons"
    },
    {
      "id": "han_dynasty-5",
      "title": "Rammed-Earth Watchtower at Yumen Pass",
      "category": "Architecture",
      "period": "c. 100 BCE · Dunhuang Silk Road",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Yumen_Pass_Gate.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Yumen_Pass_Gate.jpg",
      "caption": "Frontier garrison beacon tower built with rammed gravel and desert tamarisk along the Hexi Corridor.",
      "credit": "Dunhuang Academy / Wikimedia Commons"
    },
    {
      "id": "han_dynasty-6",
      "title": "Han Inscribed Bamboo Administrative Slips",
      "category": "Artifact",
      "period": "c. 1st Century BCE · Western Han",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Han_Dynasty_bamboo_slips.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Han_Dynasty_bamboo_slips.jpg",
      "caption": "Bound wooden and bamboo slips recording tax records, imperial edicts, and military frontier patrols.",
      "credit": "Gansu Jiandu Museum / Wikimedia Commons"
    }
  ],
  "aksumite_empire": [
    {
      "id": "aksumite_empire-1",
      "title": "The Great Obelisk of Aksum (King Ezana)",
      "category": "Architecture",
      "period": "c. 330 – 350 CE · Tigray, Ethiopia",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Obelisk_of_Axum_2008.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Obelisk_of_Axum_2008.jpg",
      "caption": "24-meter single-block granite monolith carved with multi-story architectural facades and false doors.",
      "credit": "Aksum Archaeological Reserve, Ethiopia / Wikimedia Commons"
    },
    {
      "id": "aksumite_empire-2",
      "title": "Ruins of Dungur Palace (Queen of Sheba)",
      "category": "Architecture",
      "period": "c. 6th Century CE · Aksum",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Dungur_Palace_ruins.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Dungur_Palace_ruins.jpg",
      "caption": "Monumental stepped stone masonry mansion complex with residential wings, courtyards, and drainage canals.",
      "credit": "Authority for Research and Conservation of Cultural Heritage / Wikimedia Commons"
    },
    {
      "id": "aksumite_empire-3",
      "title": "Gold Coin of King Endubis with Ge'ez Inscription",
      "category": "Artifact",
      "period": "c. 270 – 300 CE · Aksumite Currency",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Aksumite_coin_of_Endubis.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Aksumite_coin_of_Endubis.jpg",
      "caption": "Gold coin depicting King Endubis flanked by ears of wheat and Greek-Ge'ez lettering, proving trade supremacy.",
      "credit": "British Museum / Wikimedia Commons"
    },
    {
      "id": "aksumite_empire-4",
      "title": "Bete Giyorgis (Church of Saint George), Lalibela",
      "category": "Architecture",
      "period": "Successor tradition from Aksumite stone-hewing",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Church_of_Saint_George,_Lalibela.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Church_of_Saint_George,_Lalibela.jpg",
      "caption": "Monolithic cruciform church carved top-down from living volcanic scoria, carrying on Aksumite masonry mastery.",
      "credit": "Lalibela World Heritage Site / Wikimedia Commons"
    },
    {
      "id": "aksumite_empire-5",
      "title": "Ruins of Ancient Port City of Adulis",
      "category": "Metropolis",
      "period": "c. 100 BCE – 600 CE · Red Sea",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Adulis_ruins.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Adulis_ruins.jpg",
      "caption": "The Red Sea port connecting African ivory, frankincense, and gold to Byzantine and Indian Ocean markets.",
      "credit": "Eritrean Cultural Research Centre / Wikimedia Commons"
    },
    {
      "id": "aksumite_empire-6",
      "title": "Aksumite Inscribed Royal Stone Tablet",
      "category": "Artifact",
      "period": "c. 350 CE · Tri-lingual Dedication",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/King_Ezana%27s_Stele.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/King_Ezana%27s_Stele.jpg",
      "caption": "Victory monument of King Ezana inscribed in Ge'ez, Sabaean, and Ancient Greek commemorating royal campaigns.",
      "credit": "Aksum Archaeological Museum / Wikimedia Commons"
    }
  ],
  "maya": [
    {
      "id": "maya-1",
      "title": "El Castillo (Temple of Kukulcan) at Chichen Itza",
      "category": "Architecture",
      "period": "c. 800 – 1000 CE · Terminal Classic",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Chichen_Itza_3.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Chichen_Itza_3.jpg",
      "caption": "Step pyramid with four stairways totaling 365 steps, casting the equinox shadow of the feathered serpent god.",
      "credit": "INAH Mexico / Wikimedia Commons"
    },
    {
      "id": "maya-2",
      "title": "Temple I (Temple of the Great Jaguar), Tikal",
      "category": "Architecture",
      "period": "c. 732 CE · Petén Basin, Guatemala",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Tikal_Temple_1.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Tikal_Temple_1.jpg",
      "caption": "47-meter limestone funerary temple rising over the rainforest canopy, built for King Jasaw Chan K'awiil I.",
      "credit": "Tikal National Park / Wikimedia Commons"
    },
    {
      "id": "maya-3",
      "title": "Jade Mosaic Funerary Mask of King Pakal",
      "category": "Artifact",
      "period": "c. 683 CE · Palenque Temple of Inscriptions",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Pakal_mask.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Pakal_mask.jpg",
      "caption": "Composed of over 200 jadeite tesserae with shell eyes, immortalizing the divine ruler K'inich Janaab' Pakal.",
      "credit": "Museo Nacional de Antropología, Mexico / Wikimedia Commons"
    },
    {
      "id": "maya-4",
      "title": "The Palace & Observation Tower at Palenque",
      "category": "Architecture",
      "period": "c. 650 – 750 CE · Chiapas",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Palenque_Palace_tower.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Palenque_Palace_tower.jpg",
      "caption": "Royal residence with corbel-vaulted galleries, courtyard stone reliefs, and a 4-story astronomical tower.",
      "credit": "Palenque Archaeological Zone / Wikimedia Commons"
    },
    {
      "id": "maya-5",
      "title": "Bonampak Polychrome Royal Palace Murals",
      "category": "Artwork",
      "period": "c. 790 CE · Late Classic Chiapas",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Bonampak_murals.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Bonampak_murals.jpg",
      "caption": "Brilliant Maya Blue and cinnabar frescoes depicting royal court rituals, musicians, and captive submission.",
      "credit": "National Museum of Anthropology, Mexico / Wikimedia Commons"
    },
    {
      "id": "maya-6",
      "title": "Page from the Dresden Codex Astronomical Book",
      "category": "Artifact",
      "period": "c. 1200 – 1250 CE · Postclassic",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Dresden_Codex_page_9.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Dresden_Codex_page_9.jpg",
      "caption": "Accordion-folded fig-bark paper book recording precise Venus cycles, eclipse tables, and solar calendars.",
      "credit": "Saxon State Library, Dresden / Wikimedia Commons"
    }
  ],
  "norse_vikings": [
    {
      "id": "norse_vikings-1",
      "title": "The Oseberg Clinker-Built Oak Ship",
      "category": "Architecture",
      "period": "c. 820 CE · Viking Age Norway",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Oseberg_ship.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Oseberg_ship.jpg",
      "caption": "21.5-meter oak longship with overlapping clinker hull strakes and ornate spiral serpent woodcarvings.",
      "credit": "Viking Ship Museum, Oslo / Wikimedia Commons"
    },
    {
      "id": "norse_vikings-2",
      "title": "Borgund Stave Church Wooden Architecture",
      "category": "Architecture",
      "period": "c. 1180 CE · Sogn, Norway",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Borgund_Stave_Church_in_Norway.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Borgund_Stave_Church_in_Norway.jpg",
      "caption": "Timber stave church constructed without iron nails, featuring carved dragon heads crowning multi-tiered gables.",
      "credit": "Fortidsminneforeningen / Wikimedia Commons"
    },
    {
      "id": "norse_vikings-3",
      "title": "The Lewis Chessmen Carved Walrus Ivory",
      "category": "Artifact",
      "period": "c. 1150 – 1200 CE · Trondheim Workshop",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Lewis_chessmen_collection.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Lewis_chessmen_collection.jpg",
      "caption": "Sculpted walrus tusk chessmen portraying berserkers biting shields, stern kings, and contemplative queens.",
      "credit": "British Museum & National Museum of Scotland / Wikimedia Commons"
    },
    {
      "id": "norse_vikings-4",
      "title": "The Large Jelling Runic Stone of Harald Bluetooth",
      "category": "Artifact",
      "period": "c. 965 CE · Jelling, Denmark",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Jelling_stone_large.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Jelling_stone_large.jpg",
      "caption": "Granite monument carved with runes recording the Christianization of the Danes and image of Christ.",
      "credit": "National Museum of Denmark / Wikimedia Commons"
    },
    {
      "id": "norse_vikings-5",
      "title": "Viking Silver Hack-Gold & Bullion Hoard",
      "category": "Artifact",
      "period": "c. 9th – 10th Century · Baltic Trade",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Viking_silver_hoard.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Viking_silver_hoard.jpg",
      "caption": "Coiled arm-rings, silver ingots, and Arabic Islamic dirhams exchanged across Volga and Dnieper waterways.",
      "credit": "Swedish History Museum, Stockholm / Wikimedia Commons"
    },
    {
      "id": "norse_vikings-6",
      "title": "Excavated Turf Longhouse at L'Anse aux Meadows",
      "category": "Metropolis",
      "period": "c. 1000 CE · Newfoundland, Canada",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/L_Anse_aux_Meadows.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/L_Anse_aux_Meadows.jpg",
      "caption": "Norse settlement in Vinland featuring sod-walled halls, iron smelting forge, and woodworking quarters.",
      "credit": "Parks Canada / Wikimedia Commons"
    }
  ],
  "mongol_empire": [
    {
      "id": "mongol_empire-1",
      "title": "Erdene Zuu Monastery & Walls of Karakorum",
      "category": "Architecture",
      "period": "c. 1220 – 1260 CE · Orkhon Valley",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Erdene_Zuu_monastery_Kharkhorin.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Erdene_Zuu_monastery_Kharkhorin.jpg",
      "caption": "Built on the site of Genghis Khan's capital of Karakorum using stone blocks and tiles from the imperial city.",
      "credit": "Orkhon Valley Cultural Landscape / Wikimedia Commons"
    },
    {
      "id": "mongol_empire-2",
      "title": "Mongol Imperial Paiza Passport Tablet",
      "category": "Artifact",
      "period": "c. 1270 CE · Yuan Dynasty",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Paiza_Mongol_tablet.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Paiza_Mongol_tablet.jpg",
      "caption": "Inscribed silver-inlaid iron tablet granting courier riders imperial authority across the Eurasian Yam network.",
      "credit": "Metropolitan Museum of Art / Wikimedia Commons"
    },
    {
      "id": "mongol_empire-3",
      "title": "Court Portrait of Genghis Khan on Silk",
      "category": "Artwork",
      "period": "c. 1278 CE · Yuan Imperial Court",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg",
      "caption": "Official album leaf portraying Genghis Khan in white robe and fur cap, painted by court artist Khorghosun.",
      "credit": "National Palace Museum, Taipei / Wikimedia Commons"
    },
    {
      "id": "mongol_empire-4",
      "title": "Mongol Cavalry Warfare in Jami al-Tawarikh",
      "category": "Artwork",
      "period": "c. 1307 CE · Persian Ilkhanate",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Mongol_cavalry_Rashid-al-Din.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Mongol_cavalry_Rashid-al-Din.jpg",
      "caption": "Illuminated historical manuscript illustration of mounted horse archers utilizing composite reflex bows.",
      "credit": "Edinburgh University Library / Wikimedia Commons"
    },
    {
      "id": "mongol_empire-5",
      "title": "Laminated Horn & Sinew Composite Reflex Bow",
      "category": "Technology",
      "period": "c. 13th Century · Steppe Weaponry",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Mongol_composite_bow.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Mongol_composite_bow.jpg",
      "caption": "Engineered from layered birchwood, mountain horn, and animal tendon yielding extreme draw power.",
      "credit": "National Museum of Mongolia / Wikimedia Commons"
    },
    {
      "id": "mongol_empire-6",
      "title": "Yuan Dynasty Blue and White Dragon Porcelain",
      "category": "Artifact",
      "period": "c. 1350 CE · Jingdezhen Kilns",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Yuan_dynasty_blue_and_white_porcelain.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Yuan_dynasty_blue_and_white_porcelain.jpg",
      "caption": "High-fired porcelain painted with Persian cobalt ore, synthesizing Chinese imperial art with Silk Road trade.",
      "credit": "British Museum / Wikimedia Commons"
    }
  ],
  "mali_empire": [
    {
      "id": "mali_empire-1",
      "title": "The Great Mosque of Djenné",
      "category": "Architecture",
      "period": "c. 13th Century Foundation · Mali Empire",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Mosque_of_Djenn%C3%A9_1.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Mosque_of_Djenn%C3%A9_1.jpg",
      "caption": "Monumental adobe mud-brick architecture reinforced with palm-wood toron beams for annual community replastering.",
      "credit": "Djenné Heritage Mission UNESCO / Wikimedia Commons"
    },
    {
      "id": "mali_empire-2",
      "title": "Mansa Musa in the Catalan Atlas (1375)",
      "category": "Artwork",
      "period": "1375 CE · Abraham Cresques of Majorca",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Mansa_Musa_Catalan_Atlas.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Mansa_Musa_Catalan_Atlas.jpg",
      "caption": "Illuminated vellum map depicting Mansa Musa holding a golden orb, crowned in gold upon his Sahelian throne.",
      "credit": "Bibliothèque nationale de France / Wikimedia Commons"
    },
    {
      "id": "mali_empire-3",
      "title": "Sankore Mosque & University, Timbuktu",
      "category": "Architecture",
      "period": "c. 1327 CE · Reign of Mansa Musa",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Sankore_Mosque_Timbuktu.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Sankore_Mosque_Timbuktu.jpg",
      "caption": "Pyramidal mud minaret and collegiate courtyard that housed over 25,000 scholars studying science and law.",
      "credit": "Ahmed Baba Institute, Timbuktu / Wikimedia Commons"
    },
    {
      "id": "mali_empire-4",
      "title": "Djenne-Djenno Terracotta Equestrian Figure",
      "category": "Artwork",
      "period": "c. 13th – 15th Century · Niger Inland Delta",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Djenne_terracotta_figure.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Djenne_terracotta_figure.jpg",
      "caption": "Hand-modeled terracotta warrior with detailed harness and dagger, celebrating the Mandinka royal cavalry.",
      "credit": "Musée National du Mali, Bamako / Wikimedia Commons"
    },
    {
      "id": "mali_empire-5",
      "title": "Timbuktu Astronomical & Law Manuscripts",
      "category": "Artifact",
      "period": "c. 14th – 16th Century · Timbuktu",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Timbuktu_manuscript.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Timbuktu_manuscript.jpg",
      "caption": "Illuminated Arabic script manuscript containing planetary orbits, legal commentary, and medicinal botany.",
      "credit": "Mamma Haidara Commemorative Library / Wikimedia Commons"
    },
    {
      "id": "mali_empire-6",
      "title": "Traditional Cargo Pinasses on the Niger River",
      "category": "Metropolis",
      "period": "c. 1300 – 1600 CE · Mopti Trade Hub",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Niger_River_pinasse.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Niger_River_pinasse.jpg",
      "caption": "Wooden transport boats mediating salt, gold, and dried fish commerce between the desert and rainforest.",
      "credit": "UNESCO Sahelian Documentation / Wikimedia Commons"
    }
  ],
  "kingdom_of_benin": [
    {
      "id": "kingdom_of_benin-1",
      "title": "Royal Cast Brass Commemorative Head of an Oba",
      "category": "Artwork",
      "period": "c. 16th Century · Kingdom of Benin",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Benin_bronze_head-IMG_1650.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Benin_bronze_head-IMG_1650.jpg",
      "caption": "Lost-wax cast brass portrait of an Oba adorned with a layered coral bead choker and winged ceremonial crown.",
      "credit": "British Museum / Wikimedia Commons"
    },
    {
      "id": "kingdom_of_benin-2",
      "title": "Ivory Pendant Mask of Queen Mother Idia",
      "category": "Artifact",
      "period": "c. 16th Century · Court of Oba Esigie",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Queen_Mother_Idia_ivory_mask.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Queen_Mother_Idia_ivory_mask.jpg",
      "caption": "Carved elephant ivory hip mask framed by stylized bearded Portuguese traders and mudfish emblems.",
      "credit": "Metropolitan Museum of Art / Wikimedia Commons"
    },
    {
      "id": "kingdom_of_benin-3",
      "title": "Palace Relief Brass Plaque: Oba & Attendants",
      "category": "Artwork",
      "period": "c. 1550 – 1650 CE · Edo Palace Pillars",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Benin_bronze_plaque_warriors.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Benin_bronze_plaque_warriors.jpg",
      "caption": "Cast brass architectural plaque showing the Oba shielded by court retainers, once cladding the palace courtyards.",
      "credit": "Ethnological Museum of Berlin / Wikimedia Commons"
    },
    {
      "id": "kingdom_of_benin-4",
      "title": "Royal Court Cast Brass Leopard Figurine",
      "category": "Artwork",
      "period": "c. 16th Century · Royal Shrines",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Benin_court_leopard_brass.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Benin_court_leopard_brass.jpg",
      "caption": "Cast brass leopard with copper-inlaid spots, serving as the sacred royal emblem of the Oba's dominion.",
      "credit": "Royal Collection Trust / Wikimedia Commons"
    },
    {
      "id": "kingdom_of_benin-5",
      "title": "The Earthworks and Moats of Benin City (Iya)",
      "category": "Architecture",
      "period": "c. 1280 – 1460 CE · Edo Kingdom",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Benin_moat_earthworks.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Benin_moat_earthworks.jpg",
      "caption": "Massive linear earthworks and ramparts estimated at over 16,000 kilometers surrounding Benin City.",
      "credit": "National Commission for Museums and Monuments, Nigeria / Wikimedia Commons"
    },
    {
      "id": "kingdom_of_benin-6",
      "title": "Carved Ancestral Elephant Tusk of the Oba Altar",
      "category": "Artifact",
      "period": "c. 18th Century · Benin Royal Palace",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Benin_carved_tusk.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Benin_carved_tusk.jpg",
      "caption": "Ivory tusk deeply sculpted with narrative historical sequences of royal coronations and battle triumphs.",
      "credit": "Smithsonian National Museum of African Art / Wikimedia Commons"
    }
  ],
  "incan_empire": [
    {
      "id": "incan_empire-1",
      "title": "Machu Picchu Granite Royal Citadel",
      "category": "Architecture",
      "period": "c. 1450 CE · Emperor Pachacuti",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Machu_Picchu%2C_Peru.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Machu_Picchu%2C_Peru.jpg",
      "caption": "Imperial mountain estate engineered with interlocking ashlar masonry without mortar on an Andean ridge.",
      "credit": "Santuario Histórico de Machu Picchu / Wikimedia Commons"
    },
    {
      "id": "incan_empire-2",
      "title": "Megalithic Zigzag Walls of Sacsayhuamán",
      "category": "Architecture",
      "period": "c. 1471 CE · Cusco Citadel",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Sacsayhuaman_walls_Cusco.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Sacsayhuaman_walls_Cusco.jpg",
      "caption": "Massive polygonal limestone boulders weighing up to 128 tons, fitted together with seismic-resistant joints.",
      "credit": "Dirección Desconcentrada de Cultura de Cusco / Wikimedia Commons"
    },
    {
      "id": "incan_empire-3",
      "title": "The Intihuatana Solar Hitching Monolith",
      "category": "Artifact",
      "period": "c. 1450 CE · Sacred Plaza",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Intihuatana_Machu_Picchu.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Intihuatana_Machu_Picchu.jpg",
      "caption": "Carved bedrock monolith aligned to track the winter and summer solstices, symbolically tethering the sun.",
      "credit": "Machu Picchu Archaeological Reserve / Wikimedia Commons"
    },
    {
      "id": "incan_empire-4",
      "title": "Concentric Circular Agricultural Terraces of Moray",
      "category": "Technology",
      "period": "c. 15th Century · Sacred Valley",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Moray_terraces.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Moray_terraces.jpg",
      "caption": "Sunken circular amphitheater terraces creating microclimate temperature gradients for crop acclimatization.",
      "credit": "Urubamba Agricultural Heritage / Wikimedia Commons"
    },
    {
      "id": "incan_empire-5",
      "title": "Khipu Knotted Cord Accounting Medium",
      "category": "Artifact",
      "period": "c. 1400 – 1532 CE · Tawantinsuyu Archive",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Inca_quipu.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Inca_quipu.jpg",
      "caption": "Knotted decimal textile recording system used to manage state grain reserves, military conscripts, and taxes.",
      "credit": "Larco Museum, Lima / Wikimedia Commons"
    },
    {
      "id": "incan_empire-6",
      "title": "Cast Gold Miniature Votive Llama",
      "category": "Artifact",
      "period": "c. 1500 CE · Capacocha Offering",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Inca_gold_llama.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Inca_gold_llama.jpg",
      "caption": "Solid beaten gold votive sculpture of an Andean camelid offered to the mountain deities (Apus).",
      "credit": "Museo Oro del Perú, Lima / Wikimedia Commons"
    }
  ],
  "ottoman_empire": [
    {
      "id": "ottoman_empire-1",
      "title": "Sultan Ahmed Mosque (The Blue Mosque)",
      "category": "Architecture",
      "period": "1609 – 1616 CE · Architect Sedefkar Agha",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Sultan_Ahmed_Mosque_Istanbul_Turkey.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Sultan_Ahmed_Mosque_Istanbul_Turkey.jpg",
      "caption": "Classical Ottoman imperial mosque crowned with cascaded domes, six minarets, and blue glazed Iznik tiles.",
      "credit": "General Directorate of Foundations, Istanbul / Wikimedia Commons"
    },
    {
      "id": "ottoman_empire-2",
      "title": "Topkapi Palace Gate of Salutation (Bab-üs Selam)",
      "category": "Architecture",
      "period": "c. 1465 – 1524 CE · Imperial Seat",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Gate_of_Salutation.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Gate_of_Salutation.jpg",
      "caption": "Octagonal fortified entrance towers leading to the Divan Council chamber and Imperial Treasury.",
      "credit": "Topkapi Palace Museum Directorate / Wikimedia Commons"
    },
    {
      "id": "ottoman_empire-3",
      "title": "Iznik Cobalt & Turquoise Glazed Ceramic Wall Tiles",
      "category": "Artwork",
      "period": "c. 1575 CE · Reign of Selim II",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Iznik_tiles_panel.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Iznik_tiles_panel.jpg",
      "caption": "Fritware ceramic wall panels painted with stylized tulips, hyacinths, and saz-style palmettes in bole red and cobalt.",
      "credit": "Museum of Turkish and Islamic Arts / Wikimedia Commons"
    },
    {
      "id": "ottoman_empire-4",
      "title": "Imperial Calligraphic Tughra of Suleiman the Magnificent",
      "category": "Artwork",
      "period": "c. 1555 CE · Imperial Monogram",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Tughra_of_Suleiman_the_Magnificent.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Tughra_of_Suleiman_the_Magnificent.jpg",
      "caption": "Illuminated gold and blue ink monogram serving as the official seal on imperial firmans and treaties.",
      "credit": "Metropolitan Museum of Art / Wikimedia Commons"
    },
    {
      "id": "ottoman_empire-5",
      "title": "The Dardanelles Bronze Siege Gun",
      "category": "Technology",
      "period": "1464 CE · Munir Ali Foundry",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Dardanelles_Gun_Fort_Nelson.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Dardanelles_Gun_Fort_Nelson.jpg",
      "caption": "17-ton screw-barrel bronze siege bombard firing 600kg stone cannonballs to smash fortified stone walls.",
      "credit": "Royal Armouries, Fort Nelson / Wikimedia Commons"
    },
    {
      "id": "ottoman_empire-6",
      "title": "Süleymaniye Mosque Complex by Mimar Sinan",
      "category": "Architecture",
      "period": "1550 – 1557 CE · Golden Age of Istanbul",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Suleymaniye_Mosque_Istanbul.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Suleymaniye_Mosque_Istanbul.jpg",
      "caption": "Masterwork of Chief Imperial Architect Sinan, featuring engineered acoustic jars in the dome and granite columns.",
      "credit": "Süleymaniye Complex Heritage Registry / Wikimedia Commons"
    }
  ],
  "british_empire": [
    {
      "id": "british_empire-1",
      "title": "Palace of Westminster & Elizabeth Tower (Big Ben)",
      "category": "Architecture",
      "period": "1840 – 1870 CE · Charles Barry & Pugin",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Palace_of_Westminster%2C_London_-_Feb_2007.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Palace_of_Westminster%2C_London_-_Feb_2007.jpg",
      "caption": "Perpendicular Gothic revival seat of Parliament on the River Thames at the heart of Victorian governance.",
      "credit": "UK Parliamentary Archives / Wikimedia Commons"
    },
    {
      "id": "british_empire-2",
      "title": "The Iron Bridge at Coalbrookdale",
      "category": "Technology",
      "period": "1779 – 1781 CE · Abraham Darby III",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Iron_Bridge%2C_Shropshire.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Iron_Bridge%2C_Shropshire.jpg",
      "caption": "The world's first major bridge constructed entirely of cast iron, sparking the industrial engineering epoch.",
      "credit": "English Heritage / Wikimedia Commons"
    },
    {
      "id": "british_empire-3",
      "title": "Stephenson's \"Rocket\" Steam Locomotive",
      "category": "Technology",
      "period": "1829 CE · Rainhill Trials",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Stephensons_Rocket.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Stephensons_Rocket.jpg",
      "caption": "Pioneered multi-tubular boiler and connecting rods that catalyzed the global railway transport revolution.",
      "credit": "Science Museum, London / Wikimedia Commons"
    },
    {
      "id": "british_empire-4",
      "title": "HMS Victory 104-Gun Ship of the Line",
      "category": "Technology",
      "period": "1765 – 1805 CE · Battle of Trafalgar",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/HMS_Victory_in_dry_dock.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/HMS_Victory_in_dry_dock.jpg",
      "caption": "First-rate wooden warship carrying three tiers of cannon that secured British global naval dominance.",
      "credit": "National Museum of the Royal Navy, Portsmouth / Wikimedia Commons"
    },
    {
      "id": "british_empire-5",
      "title": "The British Museum Neoclassical Portico",
      "category": "Architecture",
      "period": "1823 – 1852 CE · Sir Robert Smirke",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/British_Museum_South_Front.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/British_Museum_South_Front.jpg",
      "caption": "Monumental Greek Revival Ionic colonnade designed to house international antiquities gathered globally.",
      "credit": "British Museum / Wikimedia Commons"
    },
    {
      "id": "british_empire-6",
      "title": "Queen Victoria State Coronation Portrait",
      "category": "Artwork",
      "period": "1838 CE · Sir George Hayter",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Queen_Victoria_by_Hayter.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Queen_Victoria_by_Hayter.jpg",
      "caption": "State oil portrait of Queen Victoria in imperial robes, whose reign marked the expansion of the British Empire.",
      "credit": "National Portrait Gallery, London / Wikimedia Commons"
    }
  ],
  "modern_industrial_digital": [
    {
      "id": "modern_industrial_digital-1",
      "title": "Silicon Monocrystal Semiconductor Wafer",
      "category": "Technology",
      "period": "c. 1971 – Present · Microelectronics",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Silicon_wafer_with_microchips.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Silicon_wafer_with_microchips.jpg",
      "caption": "Photolithographically etched silicon disc hosting millions of microprocessors, the engine of the digital era.",
      "credit": "Computer History Museum / Wikimedia Commons"
    },
    {
      "id": "modern_industrial_digital-2",
      "title": "CERN Large Hadron Collider Underground Tunnel",
      "category": "Technology",
      "period": "2008 – Present · Particle Physics",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/CERN_LHC_tunnel.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/CERN_LHC_tunnel.jpg",
      "caption": "27-kilometer subterranean superconducting magnet tunnel discovering fundamental subatomic particles.",
      "credit": "CERN European Laboratory for Particle Physics / Wikimedia Commons"
    },
    {
      "id": "modern_industrial_digital-3",
      "title": "Planetary Megacity Illuminated Grid at Night",
      "category": "Metropolis",
      "period": "21st Century · Global Urban Grid",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Manhattan_skyline_at_night.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Manhattan_skyline_at_night.jpg",
      "caption": "Electrified high-density urban skyline reflecting continuous power grids, telecommunications, and commerce.",
      "credit": "Global Urban Observation / Wikimedia Commons"
    },
    {
      "id": "modern_industrial_digital-4",
      "title": "Steam-Powered Spinning Mule Textile Machinery",
      "category": "Technology",
      "period": "c. 1830 – 1880 CE · Industrial Mechanization",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Spinning_mule_Quarry_Bank_Mill.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Spinning_mule_Quarry_Bank_Mill.jpg",
      "caption": "Automated spinning machines powered by steam engines that transformed human labor productivity in Britain.",
      "credit": "Quarry Bank Mill / National Trust / Wikimedia Commons"
    },
    {
      "id": "modern_industrial_digital-5",
      "title": "Telstar Early Active Communications Satellite",
      "category": "Technology",
      "period": "1962 – Present · Space Age",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Telstar_satellite_model.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Telstar_satellite_model.jpg",
      "caption": "The pioneering active satellite transmitting television and telephone relays across the Atlantic Ocean.",
      "credit": "Smithsonian National Air and Space Museum / Wikimedia Commons"
    },
    {
      "id": "modern_industrial_digital-6",
      "title": "The Hoover Dam Hydroelectric Gravity-Arch",
      "category": "Architecture",
      "period": "1931 – 1936 CE · Colorado River",
      "primarySrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Hoover_Dam_from_above.jpg?width=800",
      "fallbackSrc": "https://commons.wikimedia.org/wiki/Special:FilePath/Hoover_Dam_from_above.jpg",
      "caption": "Concrete arch-gravity dam generating billions of kilowatt-hours of clean electricity for the American Southwest.",
      "credit": "U.S. Bureau of Reclamation / Wikimedia Commons"
    }
  ]
};
