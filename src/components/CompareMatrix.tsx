/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowLeftRight,
  GitCompare,
  Award,
  AlertOctagon,
  Download,
  Filter
} from 'lucide-react';
import { Civilization, CharacteristicKey } from '../types/civilization';
import { CHARACTERISTICS_META } from '../constants/characteristics';
import { CharacteristicIcon } from './CharacteristicIcon';
import { ArchivalImage } from './ArchivalImage';
import { soundManager } from '../utils/audioAmbience';

interface CompareMatrixProps {
  civilizations: Civilization[];
  defaultCivAId?: string;
  defaultCivBId?: string;
  onSelectCivilization: (id: string) => void;
}

export const CompareMatrix: React.FC<CompareMatrixProps> = ({
  civilizations,
  defaultCivAId,
  defaultCivBId,
  onSelectCivilization,
}) => {
  const [civAId, setCivAId] = useState<string>(
    defaultCivAId || civilizations[0]?.id || 'sumer'
  );
  const [civBId, setCivBId] = useState<string>(
    defaultCivBId || civilizations[4]?.id || 'classical_rome'
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copyFeedback, setCopyFeedback] = useState<boolean>(false);

  const civA = civilizations.find((c) => c.id === civAId) || civilizations[0];
  const civB = civilizations.find((c) => c.id === civBId) || civilizations[1];

  const handleSwap = () => {
    soundManager.playChime();
    const temp = civAId;
    setCivAId(civBId);
    setCivBId(temp);
  };

  const categories = [
    'All',
    'Infrastructure & Survival',
    'Social & Governance',
    'Knowledge & Expression',
    'Macro Economics & Limits',
  ];

  const filteredCharacteristics = CHARACTERISTICS_META.filter(
    (meta) => selectedCategory === 'All' || meta.category === selectedCategory
  );

  const presets = [
    {
      label: 'Sumer vs. Rome',
      a: 'sumer',
      b: 'classical_rome',
      desc: 'Riverine City-States vs. Trans-Mediterranean Empire',
    },
    {
      label: 'Han Dynasty vs. Rome',
      a: 'han_dynasty',
      b: 'classical_rome',
      desc: 'Classical Superpowers of the Ancient World',
    },
    {
      label: 'Maya vs. Inca',
      a: 'maya',
      b: 'incan_empire',
      desc: 'Rainforest Astronomy vs. High-Altitude Terracing',
    },
    {
      label: 'Mali vs. Benin',
      a: 'mali_empire',
      b: 'kingdom_of_benin',
      desc: 'Trans-Saharan Trade vs. Rainforest Metallurgy',
    },
    {
      label: 'Sumer vs. Modern Technosphere',
      a: 'sumer',
      b: 'modern_industrial_digital',
      desc: 'The First Writing vs. Planetary Digital Compute',
    },
  ];

  const handleExportText = () => {
    const text = `=== HISTORICAL COMPARISON DOSSIER ===
ERA A: ${civA.name} (${civA.era}) - ${civA.region}
ERA B: ${civB.name} (${civB.era}) - ${civB.region}

--- 12 STRUCTURAL CHARACTERISTICS ---
${CHARACTERISTICS_META.map(
  (m) => `\n[${m.label}]
${civA.name}:
${civA.characteristics[m.key]}

${civB.name}:
${civB.characteristics[m.key]}`
).join('\n')}

--- COLLAPSE / TRANSFORMATION ---
${civA.name} (${civA.collapse_or_transformation.type}):
${civA.collapse_or_transformation.detailed_analysis}

${civB.name} (${civB.collapse_or_transformation.type}):
${civB.collapse_or_transformation.detailed_analysis}
`;

    navigator.clipboard.writeText(text);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2500);
  };

  return (
    <div className="flex-1 min-w-0 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300">
      {/* Title & Presets Header */}
      <div className="space-y-4 pb-6 border-b border-[#232738]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium mb-1">
              <GitCompare className="w-4 h-4" />
              <span>Comparative Synthesis</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f8f5ee]">
              The Comparison Matrix
            </h1>
          </div>

          <button
            type="button"
            onClick={handleExportText}
            className="flex items-center gap-2 px-4 py-2 bg-[#171a26] hover:bg-[#222738] text-stone-200 border border-[#2d3348] rounded text-xs transition-colors self-start sm:self-auto cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>{copyFeedback ? 'Dossier Copied!' : 'Copy Comparative Dossier'}</span>
          </button>
        </div>

        {/* Curated Presets */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <span className="text-xs text-stone-400 whitespace-nowrap shrink-0">
            Curatorial Matchups:
          </span>
          {presets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                soundManager.playChime();
                setCivAId(preset.a);
                setCivBId(preset.b);
              }}
              title={preset.desc}
              className="px-3 py-1 bg-[#141620] hover:bg-[#202538] border border-[#262c3e] hover:border-[#c5a059]/40 text-stone-300 hover:text-white rounded text-xs whitespace-nowrap shrink-0 transition-colors cursor-pointer"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Selector Command Banner */}
      <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center bg-[#10121a] p-6 rounded-xl border border-[#24293c]">
        {/* Civilization A Dropdown */}
        <div className="md:col-span-5 space-y-2">
          <label className="text-xs uppercase tracking-wider text-[#c5a059] font-medium block">
            Pillar Civilization Alpha
          </label>
          <select
            value={civAId}
            onChange={(e) => {
              soundManager.playChime();
              setCivAId(e.target.value);
            }}
            className="w-full px-4 py-2.5 bg-[#171a27] border border-[#2c3247] rounded-lg text-sm text-[#f8f5ee] font-serif font-semibold focus:outline-none focus:border-[#c5a059]"
          >
            {civilizations.map((civ) => (
              <option key={civ.id} value={civ.id}>
                {civ.name} ({civ.era})
              </option>
            ))}
          </select>
          <div className="text-xs text-stone-400 flex items-center justify-between pt-1">
            <span>{civA.region}</span>
            <button
              type="button"
              onClick={() => onSelectCivilization(civA.id)}
              className="text-[#c5a059] hover:underline cursor-pointer"
            >
              View Full Profile
            </button>
          </div>
        </div>

        {/* Swap Button */}
        <div className="md:col-span-1 flex justify-center py-2 md:py-0">
          <button
            type="button"
            onClick={handleSwap}
            title="Swap Civilizations"
            className="p-3 rounded-full bg-[#1c2030] hover:bg-[#c5a059] text-[#c5a059] hover:text-black border border-[#2e354c] transition-colors cursor-pointer"
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>
        </div>

        {/* Civilization B Dropdown */}
        <div className="md:col-span-5 space-y-2">
          <label className="text-xs uppercase tracking-wider text-[#c5a059] font-medium block">
            Pillar Civilization Beta
          </label>
          <select
            value={civBId}
            onChange={(e) => {
              soundManager.playChime();
              setCivBId(e.target.value);
            }}
            className="w-full px-4 py-2.5 bg-[#171a27] border border-[#2c3247] rounded-lg text-sm text-[#f8f5ee] font-serif font-semibold focus:outline-none focus:border-[#c5a059]"
          >
            {civilizations.map((civ) => (
              <option key={civ.id} value={civ.id}>
                {civ.name} ({civ.era})
              </option>
            ))}
          </select>
          <div className="text-xs text-stone-400 flex items-center justify-between pt-1">
            <span>{civB.region}</span>
            <button
              type="button"
              onClick={() => onSelectCivilization(civB.id)}
              className="text-[#c5a059] hover:underline cursor-pointer"
            >
              View Full Profile
            </button>
          </div>
        </div>
      </div>

      {/* Visual Header Cards of the Two Civilizations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-lg bg-[#12141e] border border-[#252a3d] space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[#c5a059]">{civA.era}</span>
            <span className="text-stone-400">{civA.continent}</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-[#f8f5ee]">
            {civA.name}
          </h2>
          <ArchivalImage
            primarySrc={civA.primaryImage}
            fallbackSrc={civA.fallbackImage}
            alt={civA.name}
            aspectRatioClass="aspect-16/9"
            showCaption={false}
          />
          <p className="text-xs text-stone-300 italic">
            "{civA.tagline}"
          </p>
        </div>

        <div className="p-5 rounded-lg bg-[#12141e] border border-[#252a3d] space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[#c5a059]">{civB.era}</span>
            <span className="text-stone-400">{civB.continent}</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-[#f8f5ee]">
            {civB.name}
          </h2>
          <ArchivalImage
            primarySrc={civB.primaryImage}
            fallbackSrc={civB.fallbackImage}
            alt={civB.name}
            aspectRatioClass="aspect-16/9"
            showCaption={false}
          />
          <p className="text-xs text-stone-300 italic">
            "{civB.tagline}"
          </p>
        </div>
      </div>

      {/* Category Filter Ribbon */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar pt-2">
        <Filter className="w-3.5 h-3.5 text-stone-500 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#c5a059] text-black font-semibold'
                : 'bg-[#151824] text-stone-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Side-by-Side 12 Structural Characteristics Table */}
      <div className="space-y-6">
        <h3 className="text-xl font-serif font-bold text-[#f8f5ee] border-b border-[#232738] pb-3">
          Structural Vectors Comparison ({filteredCharacteristics.length} Vectors)
        </h3>

        <div className="space-y-4">
          {filteredCharacteristics.map((meta, idx) => {
            const valA = civA.characteristics[meta.key];
            const valB = civB.characteristics[meta.key];

            return (
              <div
                key={meta.key}
                className="rounded-lg bg-[#11131c] border border-[#23273a] overflow-hidden"
              >
                {/* Row Header */}
                <div className="px-5 py-3 bg-[#161926] border-b border-[#23273a] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-[#1f2436] text-[#c5a059] flex items-center justify-center">
                      <CharacteristicIcon characteristicKey={meta.key} className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#c5a059] uppercase tracking-wider block">
                        Vector {(idx + 1).toString().padStart(2, '0')} · {meta.category}
                      </span>
                      <h4 className="text-sm font-serif font-bold text-[#f8f5ee]">
                        {meta.label}
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs text-stone-400 italic hidden md:inline max-w-xs truncate text-right">
                    {meta.guidingQuestion}
                  </span>
                </div>

                {/* Side-by-Side Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#23273a]">
                  <div className="p-5 space-y-1">
                    <span className="text-[11px] font-serif uppercase tracking-wider text-[#c5a059] block">
                      {civA.name}
                    </span>
                    <p className="text-xs text-stone-200 leading-relaxed font-normal">
                      {valA}
                    </p>
                  </div>

                  <div className="p-5 space-y-1 bg-[#131522]">
                    <span className="text-[11px] font-serif uppercase tracking-wider text-[#c5a059] block">
                      {civB.name}
                    </span>
                    <p className="text-xs text-stone-200 leading-relaxed font-normal">
                      {valB}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Side-by-Side Key Achievements Comparison */}
      <div className="space-y-4 pt-6 border-t border-[#232738]">
        <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium">
          <Award className="w-4 h-4" />
          <span>Monumental Innovations</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-[#f8f5ee]">
          Triad of Key Achievements
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg bg-[#12141e] border border-[#252a3d] space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#c5a059]">
              {civA.name}
            </h4>
            <ul className="space-y-3 text-xs text-stone-200">
              {civA.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#1c2030] border border-[#c5a059]/40 flex items-center justify-center text-[10px] text-[#c5a059] shrink-0 font-serif">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-lg bg-[#12141e] border border-[#252a3d] space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#c5a059]">
              {civB.name}
            </h4>
            <ul className="space-y-3 text-xs text-stone-200">
              {civB.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#1c2030] border border-[#c5a059]/40 flex items-center justify-center text-[10px] text-[#c5a059] shrink-0 font-serif">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Side-by-Side Collapse / Transformation Dynamics */}
      <div className="space-y-4 pt-6 border-t border-[#232738] pb-12">
        <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c86d51] font-medium">
          <AlertOctagon className="w-4 h-4" />
          <span>Systemic Dynamics</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-[#f8f5ee]">
          Collapse & Structural Transformation
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg bg-[#171318] border border-[#b85d43]/30 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-serif font-bold text-stone-200">
                {civA.name}
              </h4>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#281816] text-[#e8886d] border border-[#c86d51]/30">
                {civA.collapse_or_transformation.type}
              </span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              {civA.collapse_or_transformation.detailed_analysis}
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#171318] border border-[#b85d43]/30 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-serif font-bold text-stone-200">
                {civB.name}
              </h4>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#281816] text-[#e8886d] border border-[#c86d51]/30">
                {civB.collapse_or_transformation.type}
              </span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              {civB.collapse_or_transformation.detailed_analysis}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
