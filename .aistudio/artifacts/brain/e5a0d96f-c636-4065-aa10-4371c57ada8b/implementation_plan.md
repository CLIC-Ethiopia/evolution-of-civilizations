# Implementation Plan: Obsidian-Style Civilization Interaction Graph & TLDR Hub

## Title & Summary
Implement an interactive, Obsidian-style **Civilization Interaction Graph** directly on the landing overview page as the default experience. This feature untangles complex historical data into an intuitive, visual force-directed network showing civilizational inheritances, achievements, and transmission pathways with filtering controls and quick-glance TLDR dossiers.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> **Key Architecture Decisions for Review:**
> 1. **Default Landing Experience**: The app will load directly into the **Civilization Graph** view by default inside the Overview page (with the primary action button prominently in front of "Interactive Timeline", "Multi-Era Radar Compare", and "Exhibition Archive").
> 2. **Rendering Engine (SVG + D3-Force)**: For 17 civilizations and ~25–35 interaction vectors, an SVG-based force simulation (`d3-force` mathematics with React rendering) provides 60 FPS performance while offering crisp typography, glow filters, responsive pan/zoom, and accessible pointer interactions without Canvas pixelation on high-DPI displays.
> 3. **Obsidian Visual Style**: Dark obsidian backdrop (`#0a0b10`), glowing colored nodes (grouped by continent or era), animated directional pulses along interaction edges, and neighborhood spotlighting (hovering dims unrelated nodes to 10% opacity).

---

## 1. Overview & Core Concept

### What It Does
The **Civilization Graph** is an interactive, spatial knowledge graph that maps human history as an interconnected web of civilization nodes and exchange vectors. Instead of reading through long walls of text, users can immediately see:
- Who influenced whom (incoming roots vs. outgoing legacies).
- The complete list of historical achievements per civilization.
- Core breakthroughs extracted from the evolutionary analysis (science, metallurgy, law, hydraulics).
- Dynamic inclusion/exclusion checkboxes to compare specific regional or temporal networks.

### Target Audience & Persona
Users seeking a **TLDR ("Too Long; Didn't Read")** executive summary of world history. It transforms the feeling of a "dense Wikipedia" into an engaging, explorable mental model.

### Key Value
Immediate clarity: within 5 seconds of opening the application, the user grasps the connected nature of human history and can click any node to pull up a curated 30-second digest.

---

## 2. User Experience & Visual Design

### Key User Flows

```
┌────────────────────────────────────────────────────────────────────────┐
│                       LANDING OVERVIEW PAGE                            │
├────────────────────────────────────────────────────────────────────────┤
│  [✦ Civilization Graph (Default)]  [Timeline]  [Radar Compare] [Archive]│
├────────────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────────┐ ┌──────────────────────────────────┐ │
│ │  FILTER & CHECKBOX DRAWER     │ │  OBSIDIAN KNOWLEDGE GRAPH CANVAS │ │
│ │  ☑ Select All / Deselect All  │ │                                  │ │
│ │  By Continent / Era:          │ │        (Sumer) ──[Math/Law]──►   │ │
│ │  ☑ Sumer                      │ │           │                      │ │
│ │  ☑ Ancient Egypt              │ │           ▼                      │ │
│ │  ☑ Classical Greece           │ │      (Greece) ──[Philosophy]─►   │ │
│ │  ☑ Han Dynasty                │ │           │            (Rome)    │ │
│ │  ☑ Islamic Golden Age         │ │           ▼               │      │ │
│ │  ☑ ... (17 civilizations)     │ │       (Islamic) ──────────┘      │ │
│ │                               │ │           │                      │ │
│ │  Edge Domain Filters:         │ │  [Zoom + / -] [Reset] [Recenter] │ │
│ │  [All] [Sci/Math] [Trade/Law] │ │                                  │ │
│ └───────────────────────────────┘ └──────────────────────────────────┘ │
│                                                                        │
│   ▼ CLICK ON ANY NODE (e.g., Classical Greece)                         │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │  TLDR CIVILIZATIONAL DOSSIER POPUP (Modal / Drawer)                │ │
│ │  • Era & Geographic Cradle                                         │ │
│ │  • Core Tagline & Key Innovation                                   │ │
│ │  • Full List of Achievements (Bulleted & Tagged)                   │ │
│ │  • Transmitted Breakthroughs (What it gave & what it took)        │ │
│ │  • Actions: [Explore Full Exhibition] [Compare in Radar]           │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

1. **Zero-State / Load**: The page loads with the Obsidian Graph active. Nodes settle into an organic cluster layout with gentle gravitational physics.
2. **Hover Spotlight**: Hovering over a civilization (e.g., *Islamic Golden Age*) highlights its direct ancestors (*Greece, China, India*) and descendants (*Western Europe, Modern Era*), while dimming all unrelated nodes and links.
3. **Filtering**: Users can uncheck individual civilizations or use "Select All / Deselect All" / continent filters to isolate specific historical corridors (e.g., *Mediterranean Exchange*, *Silk Road Corridors*, or *Pre-Columbian Americas*).
4. **Click for TLDR Popup Card**: Clicking a node opens a high-density, beautifully structured popup card containing:
   - **Vital Stats**: Dates, duration, continent, and core capital.
   - **Key Innovation**: The single greatest breakthrough.
   - **Full Achievements Ledger**: All historical achievements presented in scannable, icon-tagged badges.
   - **Evolutionary Transmissions**: Incoming parent gifts and outgoing legacies.
   - **Direct Jump Buttons**: "Open Full Exhibition Archive" or "Compare Eras".

---

## 3. Best Practices for an Uncluttered, TLDR Experience

To eliminate the "confusing Wikipedia" feeling:
1. **The 3-Second Rule (Executive Summary Badges)**: Every popup starts with a 1-sentence synopsis, epoch badge, and primary innovation.
2. **Color-Coded Semantic Domains**: Node halos and link lines use consistent thematic colors (Blue = Science/Script, Amber = Technology, Purple = Law/Philosophy, Green = Agronomy).
3. **Node Sizing by Influence**: Node radii scale proportionally to their connectivity (degree of transmissions), visually communicating pivotal "nexus" empires (Rome, Abbasid Caliphate, Han Dynasty, Sumer).
4. **Dynamic Minimap & Zoom Controls**: Pan, zoom in/out, reset view, and fit-to-screen controls so the graph never gets lost off-screen.
5. **No Text Clutter at Low Zoom**: Label font sizes adjust dynamically or fade out gracefully when zooming far out, keeping the view clean and cinematic.

---

## 4. Technical Architecture & Component Hierarchy

```
App.tsx
 └── HeroLanding.tsx
      ├── HeroLanding Action Buttons:
      │    ├── [★ Civilization Graph] (Active by default)
      │    ├── [Interactive Timeline]
      │    ├── [Multi-Era Radar Compare]
      │    └── [Exhibition Archive]
      │
      └── ObsidianCivGraph.tsx (Main Container)
           ├── GraphControls.tsx (Zoom, Pan, Fit, Physics Pause)
           ├── GraphFilterSidebar.tsx (Checkboxes, Continent Groups, Link Types)
           ├── ForceGraphCanvas.tsx (SVG + D3-Force simulation, glowing links, nodes)
           └── CivQuickDossierModal.tsx (TLDR Popup Card with Achievements & Evolution)
```

### Data Sources Reused:
- `RAW_CIVILIZATIONS` from `src/data/civilizationsData.ts`: Basic metadata, full achievements lists, taglines, key innovations.
- `TRANSMISSION_EDGES` from `src/data/evolutionData.ts`: Interaction links, breakthroughs, vectors, and historical periods.

---

## 5. Verification & Testing Plan
- Verify default rendering on initial load (HeroLanding displays graph directly).
- Verify node filtering: toggling checkboxes correctly adds/removes nodes and recalculates active links without crashing.
- Verify simulation stability: physics ticks decay smoothly to rest ($alpha \to 0$) without endless jitter.
- Verify click interactions: clicking any node reliably displays the TLDR modal with full achievements and evolution insights.
- Verify responsive layout on desktop and mobile viewports.
- Run `compile_applet` and `lint_applet` to ensure zero TypeScript errors.
