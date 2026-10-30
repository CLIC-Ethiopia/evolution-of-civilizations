/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ShieldAlert,
  Activity,
  HeartPulse,
  Sprout,
  Repeat,
  Scale,
  Info,
  AlertTriangle
} from 'lucide-react';
import {
  COLLAPSE_CASE_STUDIES,
  CollapseAdaptationStudy
} from '../../data/evolutionData';

export const CollapseResilienceModule: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(
    COLLAPSE_CASE_STUDIES[0].id
  );

  const activeStudy: CollapseAdaptationStudy =
    COLLAPSE_CASE_STUDIES.find((c) => c.id === selectedCaseId) ||
    COLLAPSE_CASE_STUDIES[0];

  return (
    <div className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-[#242838] pb-5">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/30 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
          <ShieldAlert className="w-3.5 h-3.5" />
          Module C: Collapse, Adaptation & Resilience Engine
        </div>
        <h2 className="text-xl lg:text-2xl font-serif font-bold text-stone-100">
          How Humanity Adapted Through Civilizational Collapse & Rebirth
        </h2>
        <p className="text-sm text-stone-400 mt-1 max-w-3xl">
          Civilizations collapse, but human populations and core knowledge survive.
          Investigate how catastrophic systemic bottlenecks triggered decentralization, technological pruning,
          and institutional adaptations that seeded higher-order successor civilizations.
        </p>
      </div>

      {/* Case Study Cards Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {COLLAPSE_CASE_STUDIES.map((study) => {
          const isSelected = study.id === activeStudy.id;
          return (
            <button
              key={study.id}
              type="button"
              onClick={() => setSelectedCaseId(study.id)}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#1a141b] border-rose-500/70 shadow-lg shadow-rose-950/20'
                  : 'bg-[#10121b] border-[#222739] hover:border-stone-600 hover:bg-[#141724]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span
                    className={`p-1.5 rounded ${
                      isSelected
                        ? 'bg-rose-500 text-stone-950'
                        : 'bg-[#1c1e2c] text-stone-400'
                    }`}
                  >
                    <Activity className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono text-stone-400 font-semibold">
                    {study.era}
                  </span>
                </div>
                <h3
                  className={`text-sm font-bold font-serif leading-snug ${
                    isSelected ? 'text-rose-300' : 'text-stone-200'
                  }`}
                >
                  {study.title}
                </h3>
              </div>
              <div className="mt-3 text-[11px] text-stone-400">
                Focal: <strong className="text-stone-300">{study.focalCivilization.split('->')[0]}</strong>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep Dive Case Dossier */}
      <div className="bg-[#11131e] border border-[#23283c] rounded-xl p-6 shadow-xl space-y-6">
        {/* Banner Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#212638] pb-4">
          <div>
            <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider font-semibold">
              Systemic Post-Mortem Analysis
            </span>
            <h3 className="text-lg font-serif font-bold text-stone-100 mt-0.5">
              {activeStudy.title}
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Civilizational Shift: <strong className="text-stone-200">{activeStudy.focalCivilization}</strong>
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 rounded bg-[#171a28] text-rose-300 border border-rose-900/40 shrink-0">
            Era: {activeStudy.era}
          </span>
        </div>

        {/* 4-Phase Systemic Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Box 1: Crisis Catalyst */}
          <div className="p-4 rounded-xl bg-[#191114] border border-rose-900/40 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              1. The Exogenous Crisis Catalyst
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {activeStudy.crisisCatalyst}
            </p>
          </div>

          {/* Box 2: Systemic Failure Mechanic */}
          <div className="p-4 rounded-xl bg-[#17141f] border border-purple-900/40 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-purple-400" />
              2. The Systemic Failure Mechanic
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {activeStudy.systemicFailureMechanic}
            </p>
          </div>

          {/* Box 3: Human Adaptation Vector */}
          <div className="p-4 rounded-xl bg-[#10191c] border border-cyan-900/40 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <HeartPulse className="w-4 h-4 text-cyan-400" />
              3. Human Population Adaptation
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {activeStudy.humanAdaptationVector}
            </p>
          </div>

          {/* Box 4: Preserved Knowledge Seeds */}
          <div className="p-4 rounded-xl bg-[#101c16] border border-emerald-900/40 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Sprout className="w-4 h-4 text-emerald-400" />
              4. Cultural Seeds & Knowledge Refugia
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {activeStudy.preservedKnowledgeSeed}
            </p>
          </div>
        </div>

        {/* Evolutionary Rebirth Strip */}
        <div className="p-4 rounded-xl bg-[#151826] border border-[#293046] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Repeat className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-wider font-semibold">
                Evolutionary Rebirth (The Successor Paradigm)
              </span>
              <p className="text-xs text-stone-200 mt-1 leading-relaxed">
                {activeStudy.evolutionaryRebirth}
              </p>
            </div>
          </div>
        </div>

        {/* Joseph Tainter Complexity Analysis */}
        <div className="p-4 rounded-xl bg-[#0e1017] border border-[#1f2436] space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Scale className="w-4 h-4 text-amber-400" />
            Tainter Complexity Analysis (Diminishing Marginal Returns)
          </div>
          <p className="text-xs text-stone-300 leading-relaxed font-serif italic">
            "{activeStudy.tainterComplexityAnalysis}"
          </p>
        </div>
      </div>
    </div>
  );
};
