/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GitBranch, ArrowRight, GitCompare, Sparkles } from 'lucide-react';
import { Civilization } from '../../types/civilization';
import { LINEAGE_LINKS } from '../../data/museumData';
import { soundManager } from '../../utils/audioAmbience';

interface LegacyLineageTreeProps {
  civilizations: Civilization[];
  onSelectCivilization: (id: string) => void;
  onOpenCompare: (civA: string, civB: string) => void;
}

export const LegacyLineageTree: React.FC<LegacyLineageTreeProps> = ({
  civilizations,
  onSelectCivilization,
  onOpenCompare,
}) => {
  const [selectedSourceId, setSelectedSourceId] = useState<string>('all');

  const filteredLinks = LINEAGE_LINKS.filter(
    (link) => selectedSourceId === 'all' || link.sourceCivId === selectedSourceId
  );

  return (
    <div className="flex-1 min-w-0 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Title */}
      <div className="pb-4 border-b border-[#232738] space-y-2">
        <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium">
          <GitBranch className="w-4 h-4" />
          <span>Cultural Inheritance & Technology Diffusion</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f8f5ee]">
          Civilization Legacy Lineage Tree
        </h1>
        <p className="text-sm text-stone-300 max-w-2xl font-light">
          No civilization evolved in total isolation. Track how cuneiform writing, mathematical zero, paper, optics, and law diffused across continents to forge global modernity.
        </p>
      </div>

      {/* Filter by Root Source */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <span className="text-xs font-serif text-[#c5a059] uppercase tracking-wider shrink-0">
          Filter by Root Society:
        </span>
        <button
          type="button"
          onClick={() => setSelectedSourceId('all')}
          className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer shrink-0 ${
            selectedSourceId === 'all'
              ? 'bg-[#c5a059] text-black font-semibold'
              : 'bg-[#151824] text-stone-400 hover:text-white'
          }`}
        >
          All Lineages
        </button>

        {civilizations.map((civ) => {
          const hasTransmission = LINEAGE_LINKS.some((l) => l.sourceCivId === civ.id);
          if (!hasTransmission) return null;
          return (
            <button
              key={civ.id}
              type="button"
              onClick={() => setSelectedSourceId(civ.id)}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                selectedSourceId === civ.id
                  ? 'bg-[#c5a059] text-black font-semibold'
                  : 'bg-[#151824] text-stone-400 hover:text-white'
              }`}
            >
              {civ.name}
            </button>
          );
        })}
      </div>

      {/* Lineage Transmission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredLinks.map((link) => {
          const source = civilizations.find((c) => c.id === link.sourceCivId);
          const target = civilizations.find((c) => c.id === link.targetCivId);
          if (!source || !target) return null;

          return (
            <div
              key={link.id}
              className="p-6 rounded-xl bg-[#11131c] border border-[#24293c] hover:border-[#c5a059]/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div>
                {/* Period ribbon */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-[#c5a059]">
                    {link.historicalPeriod}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a059] opacity-70" />
                </div>

                {/* Vector Title */}
                <h3 className="text-base font-serif font-bold text-[#f8f5ee] mb-2">
                  {link.transmittedVector}
                </h3>

                {/* Description */}
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  {link.description}
                </p>
              </div>

              {/* Source -> Target Nodes */}
              <div className="pt-4 border-t border-[#1e2334] space-y-3">
                <div className="flex items-center justify-between gap-3 bg-[#151825] p-3 rounded-lg border border-[#232738]">
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">
                      Origin Society
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectCivilization(source.id)}
                      className="text-xs font-serif font-bold text-[#c5a059] hover:underline truncate text-left cursor-pointer"
                    >
                      {source.name}
                    </button>
                  </div>

                  <ArrowRight className="w-4 h-4 text-stone-500 shrink-0" />

                  <div className="min-w-0 text-right">
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">
                      Inheriting Society
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectCivilization(target.id)}
                      className="text-xs font-serif font-bold text-[#f8f5ee] hover:underline truncate text-right cursor-pointer"
                    >
                      {target.name}
                    </button>
                  </div>
                </div>

                {/* Direct Compare Trigger */}
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playChime();
                    onOpenCompare(source.id, target.id);
                  }}
                  className="w-full py-2 bg-[#171a26] hover:bg-[#202538] text-stone-300 hover:text-white rounded text-xs font-medium flex items-center justify-center gap-2 border border-[#2b3044] transition-colors cursor-pointer"
                >
                  <GitCompare className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Launch Side-by-Side Comparison of These Two</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
