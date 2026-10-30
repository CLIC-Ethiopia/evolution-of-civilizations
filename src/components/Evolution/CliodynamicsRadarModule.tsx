/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  TrendingDown,
  Scale,
  RefreshCw,
  Sliders,
  ShieldCheck,
  AlertOctagon,
  Sparkles,
  Info
} from 'lucide-react';
import {
  CLIDYNAMIC_PRINCIPLES,
  CliodynamicPrinciple
} from '../../data/evolutionData';

export const CliodynamicsRadarModule: React.FC = () => {
  const [complexityLevel, setComplexityLevel] = useState<number>(3);

  // Tainter curve state calculation
  const complexityStates = [
    {
      level: 1,
      label: 'Level 1: Egalitarian / Early Village',
      overheadCost: 'Minimal',
      problemSolvingReturn: 'Enormous',
      marginalReturn: 'Very High (+95%)',
      stateDescription: 'Basic cooperation allows coordinated hunting, seed storage, and mutual defense with zero bureaucratic friction.',
      historicalAnchor: 'Pre-pottery Neolithic (Jericho, Catalhoyuk)',
      collapseVulnerability: 'Resilient to collapse; can simply disperse into small forager bands if local resources dwindle.'
    },
    {
      level: 2,
      label: 'Level 2: Hydraulic City-State',
      overheadCost: 'Moderate (Scribe guilds, granaries)',
      problemSolvingReturn: 'High (Alluvial canal management)',
      marginalReturn: 'Optimal (+75%)',
      stateDescription: 'Investment in cuneiform accounting and canal maintenance yields enormous caloric surpluses along fertile rivers.',
      historicalAnchor: 'Early Dynastic Sumer (Ur, Uruk), Old Kingdom Egypt',
      collapseVulnerability: 'Vulnerable to localized canal salinization, but easily reorganized by neighboring city coalitions.'
    },
    {
      level: 3,
      label: 'Level 3: Transcontinental Empire (Golden Age)',
      overheadCost: 'Substantial (Paved roads, permanent legions, governors)',
      problemSolvingReturn: 'Stable (Pax Romana, Pax Mongolica)',
      marginalReturn: 'Diminishing (+25%)',
      stateDescription: 'Large administrative overhead maintains peace across millions of citizens. Taxes cover costs, but border expansions yield diminishing plunder.',
      historicalAnchor: 'High Roman Empire (Trajan/Hadrian), Han Dynasty, Abbasid Caliphate',
      collapseVulnerability: 'Stable during favorable weather, but requires continuous fiscal discipline to avoid currency debasement.'
    },
    {
      level: 4,
      label: 'Level 4: Hyper-Complex Late State (Stagflation)',
      overheadCost: 'Heavy (Mercenary defense, bloated tax apparatus)',
      problemSolvingReturn: 'Marginal (Struggling to hold status quo)',
      marginalReturn: 'Flat / Zero (+0%)',
      stateDescription: 'Society must triple taxes and double army size merely to defend the existing perimeter. Wealth concentrates among tax-exempt elites while ordinary producers are squeezed.',
      historicalAnchor: 'Late Roman Empire (Diocletian), Late Ming Dynasty, Late Bronze Age Palaces',
      collapseVulnerability: 'High fragility. The society possesses no emergency fiscal buffer; minor shocks cause food riots.'
    },
    {
      level: 5,
      label: 'Level 5: Negative Marginal Return (The Tainter Cliff)',
      overheadCost: 'Crushing (Extractive elite, debt spirals)',
      problemSolvingReturn: 'Negative (Bureaucracy creates more crises than it solves)',
      marginalReturn: 'Severe Deficit (-60%)',
      stateDescription: 'The cost of maintaining institutional complexity exceeds the total energy input of the empire. To ordinary citizens, collapse into decentralized local rule is economically preferable to paying taxes.',
      historicalAnchor: 'Western Roman Collapse (476 CE), Maya Southern Lowlands (850 CE)',
      collapseVulnerability: 'Catastrophic simplification. A drought or nomadic raid causes the imperial superstructure to disintegrate.'
    }
  ];

  const currentTainterState = complexityStates[complexityLevel - 1];

  return (
    <div className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-[#242838] pb-5">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
          <TrendingDown className="w-3.5 h-3.5" />
          Module E: Cliodynamics & Complexity Science
        </div>
        <h2 className="text-xl lg:text-2xl font-serif font-bold text-stone-100">
          The Mathematics of Civilizational Life-Cycles
        </h2>
        <p className="text-sm text-stone-400 mt-1 max-w-3xl">
          Apply modern computational history (Cliodynamics) and complex systems analysis:
          why do empires inevitably hit limits on complexity, and how do group solidarity and information substrates govern survival?
        </p>
      </div>

      {/* Interactive Tainter Complexity Simulator */}
      <div className="bg-[#12141f] border border-[#242a3e] rounded-xl p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#212638] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              <Scale className="w-4 h-4 text-amber-400" />
              Joseph Tainter's Complexity Simulator
            </div>
            <h3 className="text-base font-serif font-bold text-stone-100 mt-0.5">
              The Law of Diminishing Marginal Returns on Complexity
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded bg-[#181c2b] text-stone-300 border border-[#262c3e] shrink-0">
            Interactive Model
          </span>
        </div>

        {/* Complexity Level Slider */}
        <div className="space-y-3 bg-[#0d0f17] p-5 rounded-lg border border-[#1e2334]">
          <div className="flex items-center justify-between text-xs">
            <span className="text-stone-300 font-semibold flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#c5a059]" />
              Adjust Societal Complexity Investment:
            </span>
            <span className="font-mono text-[#c5a059] font-bold">
              {currentTainterState.label}
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={complexityLevel}
            onChange={(e) => setComplexityLevel(Number(e.target.value))}
            className="w-full accent-[#c5a059] cursor-pointer"
          />

          <div className="flex justify-between text-[10px] font-mono text-stone-400 px-1">
            <span>Level 1: Simple Foraging</span>
            <span>Level 2: City-State</span>
            <span>Level 3: Hegemonic Empire</span>
            <span>Level 4: Stagflation</span>
            <span>Level 5: The Cliff</span>
          </div>
        </div>

        {/* Dynamic State Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3.5 rounded-lg bg-[#141724] border border-[#23283c]">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">
              Administrative Overhead:
            </span>
            <span className="text-sm font-bold text-stone-100 mt-1 block">
              {currentTainterState.overheadCost}
            </span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#141724] border border-[#23283c]">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">
              Problem-Solving Yield:
            </span>
            <span className="text-sm font-bold text-stone-100 mt-1 block">
              {currentTainterState.problemSolvingReturn}
            </span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#141724] border border-[#23283c]">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">
              Marginal Return on Next Bureaucratic Layer:
            </span>
            <span
              className={`text-sm font-mono font-bold mt-1 block ${
                complexityLevel <= 2
                  ? 'text-emerald-400'
                  : complexityLevel === 3
                  ? 'text-amber-400'
                  : 'text-rose-400'
              }`}
            >
              {currentTainterState.marginalReturn}
            </span>
          </div>
        </div>

        {/* State Explanation & Historical Example */}
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-[#151926] border border-[#262d42] space-y-2">
            <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-wider font-semibold">
              Systemic State Diagnosis:
            </span>
            <p className="text-xs text-stone-200 leading-relaxed">
              {currentTainterState.stateDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-lg bg-[#10131d] border border-[#1e2334] text-xs">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">
                Historical Benchmark:
              </span>
              <strong className="text-stone-100 font-serif">{currentTainterState.historicalAnchor}</strong>
            </div>

            <div className="p-3.5 rounded-lg bg-[#10131d] border border-[#1e2334] text-xs">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">
                Systemic Fragility Assessment:
              </span>
              <span className="text-stone-300 leading-relaxed">{currentTainterState.collapseVulnerability}</span>
            </div>
          </div>
        </div>
      </div>

      {/* The 3 Core Cliodynamic Principles Grid */}
      <div className="space-y-4">
        <h3 className="text-base font-serif font-bold text-stone-100 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#c5a059]" />
          Foundational Cliodynamic Laws of Civilizational Evolution
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {CLIDYNAMIC_PRINCIPLES.map((principle) => (
            <div
              key={principle.id}
              className="bg-[#10121b] border border-[#222739] rounded-xl p-5 shadow-lg flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono text-[#c5a059] uppercase font-bold">
                    {principle.theorist}
                  </span>
                </div>
                <h4 className="text-sm font-bold font-serif text-stone-100 leading-snug">
                  {principle.conceptName}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed pt-1">
                  {principle.coreLaw}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#1e2334] text-xs">
                <div className="p-2.5 rounded bg-[#141724] border border-[#212638] text-stone-300 text-[11px] leading-relaxed">
                  <strong className="text-stone-100 font-mono block text-[10px] uppercase text-[#c5a059] mb-0.5">
                    Historical Validation:
                  </strong>
                  {principle.historicalValidation}
                </div>

                <div className="p-2.5 rounded bg-[#0d0f17] border border-[#1c2030] text-stone-400 text-[11px] leading-relaxed">
                  <strong className="text-stone-300 font-mono block text-[10px] uppercase mb-0.5">
                    Modern Technological Parallel:
                  </strong>
                  {principle.modernRelevance}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
