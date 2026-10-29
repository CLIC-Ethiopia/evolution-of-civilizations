/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Compass, ChevronRight, Layers } from 'lucide-react';
import { Civilization, CharacteristicKey } from '../types/civilization';
import { CHARACTERISTICS_META, CHARACTERISTICS_MAP } from '../constants/characteristics';
import { CharacteristicIcon } from './CharacteristicIcon';
import { soundManager } from '../utils/audioAmbience';

interface MacroMatrixProps {
  civilizations: Civilization[];
  onSelectCivilization: (id: string) => void;
}

export const MacroMatrix: React.FC<MacroMatrixProps> = ({
  civilizations,
  onSelectCivilization,
}) => {
  const [activeVectorKey, setActiveVectorKey] = useState<CharacteristicKey>('record_keeping_writing');
  const activeMeta = CHARACTERISTICS_MAP[activeVectorKey];

  return (
    <div className="flex-1 min-w-0 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="pb-6 border-b border-[#232738] space-y-2">
        <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium">
          <Layers className="w-4 h-4" />
          <span>Macro Comparative Lens</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f8f5ee]">
          Cross-Civilization Macro Matrix
        </h1>
        <p className="text-sm text-stone-300 max-w-2xl font-light">
          Track a single evolutionary vector across all 12 civilizations sequentially from 4500 BCE to the contemporary digital era.
        </p>
      </div>

      {/* Vector Selector Tabs */}
      <div className="space-y-2">
        <span className="text-xs font-serif uppercase tracking-wider text-[#c5a059] font-semibold block">
          Select Structural Vector to Trace
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {CHARACTERISTICS_META.map((meta) => {
            const isSelected = meta.key === activeVectorKey;
            return (
              <button
                key={meta.key}
                type="button"
                onClick={() => {
                  soundManager.playChime();
                  setActiveVectorKey(meta.key);
                }}
                className={`p-3 rounded-lg text-left transition-all border flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1e2334] border-[#c5a059] text-white shadow-[0_0_15px_rgba(197,160,89,0.15)]'
                    : 'bg-[#12141e] border-[#222738] text-stone-400 hover:text-stone-200 hover:bg-[#181b28]'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-[#c5a059] text-black' : 'bg-[#1a1e2b] text-stone-400'
                  }`}
                >
                  <CharacteristicIcon characteristicKey={meta.key} className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-serif font-bold truncate">
                    {meta.shortLabel}
                  </h4>
                  <p className="text-[10px] text-stone-400 truncate">
                    {meta.category}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Vector Spotlight Card */}
      <div className="p-6 rounded-xl bg-[#141724] border border-[#c5a059]/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c5a059] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Active Vector Inquiry</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#f8f5ee]">
            {activeMeta.label}
          </h2>
          <p className="text-sm text-stone-300 italic">
            "{activeMeta.guidingQuestion}"
          </p>
        </div>

        <div className="md:max-w-xs p-4 rounded bg-[#10121a] border border-[#23283b] text-xs text-stone-400">
          <span className="text-[10px] uppercase font-mono tracking-wider text-[#c5a059] block mb-1">
            Thematic Archetype
          </span>
          {activeMeta.thematicSignificance}
        </div>
      </div>

      {/* Sequential Evolution Across All 12 Civilizations */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-[#f8f5ee]">
          Chronological Evolution Across All 12 Societies
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {civilizations.map((civ, index) => {
            const vectorText = civ.characteristics[activeVectorKey];
            return (
              <div
                key={civ.id}
                className="p-5 rounded-lg bg-[#11131c] border border-[#22273a] hover:border-[#c5a059]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Epoch header */}
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-[#c5a059] font-medium">
                      Epoch {index + 1} · {civ.era}
                    </span>
                    <span className="text-stone-400 text-[11px]">{civ.continent}</span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-[#f8f5ee] mb-1">
                    {civ.name}
                  </h4>
                  <p className="text-[11px] text-stone-400 mb-3 flex items-center gap-1">
                    <Compass className="w-3 h-3 text-[#c5a059]" />
                    <span>{civ.region}</span>
                  </p>

                  <p className="text-xs text-stone-200 leading-relaxed font-normal">
                    {vectorText}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1e2334] flex items-center justify-between">
                  <span className="text-[11px] text-[#c5a059] italic truncate max-w-[180px]">
                    {civ.keyInnovation}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playChime();
                      onSelectCivilization(civ.id);
                    }}
                    className="text-xs text-stone-300 hover:text-white flex items-center gap-1 font-medium cursor-pointer"
                  >
                    <span>View Civilization</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
