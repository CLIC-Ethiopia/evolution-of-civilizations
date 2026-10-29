/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  GitCompare,
  Plus,
  X,
  Award,
  AlertOctagon,
  Download,
  Filter,
  Check
} from 'lucide-react';
import { Civilization } from '../../types/civilization';
import { CHARACTERISTICS_META } from '../../constants/characteristics';
import { CharacteristicIcon } from '../CharacteristicIcon';
import { CivilizationRadarChart } from './CivilizationRadarChart';
import { ArchivalImage } from '../ArchivalImage';
import { soundManager } from '../../utils/audioAmbience';

interface MultiCompareMatrixProps {
  civilizations: Civilization[];
  initialCivIds?: string[];
  onSelectCivilization: (id: string) => void;
}

export const MultiCompareMatrix: React.FC<MultiCompareMatrixProps> = ({
  civilizations,
  initialCivIds = ['sumer', 'classical_rome'],
  onSelectCivilization,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(initialCivIds);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [highlightDifferences, setHighlightDifferences] = useState<boolean>(false);
  const [copyFeedback, setCopyFeedback] = useState<boolean>(false);

  // Maximum of 4 civilizations for clean comparison layout
  const MAX_COMPARE = 4;

  const handleAddCiv = (id: string) => {
    if (selectedIds.length < MAX_COMPARE && !selectedIds.includes(id)) {
      soundManager.playChime();
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleRemoveCiv = (id: string) => {
    if (selectedIds.length > 2) {
      soundManager.playChime();
      setSelectedIds(selectedIds.filter((civId) => civId !== id));
    }
  };

  const selectedCivs = selectedIds
    .map((id) => civilizations.find((c) => c.id === id))
    .filter((c): c is Civilization => Boolean(c));

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
      label: 'Ancient River Basins',
      ids: ['sumer', 'ancient_egypt', 'indus_valley'],
      desc: 'Tigris-Euphrates vs. Nile vs. Indus',
    },
    {
      label: 'Classical Superpowers',
      ids: ['han_dynasty', 'classical_rome', 'aksumite_empire'],
      desc: 'Imperial China vs. Rome vs. Aksum',
    },
    {
      label: 'Pre-Columbian Americas',
      ids: ['maya', 'incan_empire'],
      desc: 'Mesoamerican Astronomy vs. Andean Terracing',
    },
    {
      label: 'African Dynasties',
      ids: ['mali_empire', 'kingdom_of_benin', 'aksumite_empire'],
      desc: 'Sahel Gold vs. Rainforest Lost-Wax vs. Red Sea Obelisks',
    },
    {
      label: 'Genesis to Digital Epoch',
      ids: ['sumer', 'classical_rome', 'modern_industrial_digital'],
      desc: 'First Cuneiform to Planetary Microprocessors',
    },
  ];

  const handleExportSummary = () => {
    const text = `=== MULTI-CIVILIZATION COMPARATIVE DOSSIER ===
CIVILIZATIONS:
${selectedCivs.map((c) => `- ${c.name} (${c.era}) | ${c.region}`).join('\n')}

--- STRUCTURAL VECTORS COMPARISON ---
${CHARACTERISTICS_META.map(
  (m) => `\n[${m.label}]
${selectedCivs.map((c) => `${c.name}: ${c.characteristics[m.key]}`).join('\n\n')}`
).join('\n')}

--- COLLAPSE / TRANSFORMATION ---
${selectedCivs
  .map(
    (c) =>
      `${c.name} (${c.collapse_or_transformation.type}):\n${c.collapse_or_transformation.detailed_analysis}`
  )
  .join('\n\n')}
`;

    navigator.clipboard.writeText(text);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2500);
  };

  return (
    <div className="flex-1 min-w-0 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300">
      {/* Header & Presets */}
      <div className="space-y-4 pb-6 border-b border-[#232738]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium mb-1">
              <GitCompare className="w-4 h-4" />
              <span>Multi-Era Synthetic Comparative Laboratory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f8f5ee]">
              Multi-Civilization Comparison
            </h1>
            <p className="text-xs text-stone-300 font-light mt-1">
              Select 2 to 4 civilizations to evaluate simultaneously through radar capability vectors and side-by-side matrices.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={handleExportSummary}
              className="flex items-center gap-2 px-3.5 py-2 bg-[#171a26] hover:bg-[#222738] text-stone-200 border border-[#2d3348] rounded text-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{copyFeedback ? 'Dossier Copied!' : 'Copy Dossier'}</span>
            </button>
          </div>
        </div>

        {/* Curated Multi-Era Presets */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <span className="text-xs text-stone-400 whitespace-nowrap shrink-0">
            Triad Matchups:
          </span>
          {presets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                soundManager.playChime();
                setSelectedIds(preset.ids);
              }}
              title={preset.desc}
              className="px-3 py-1 bg-[#141620] hover:bg-[#202538] border border-[#262c3e] hover:border-[#c5a059]/40 text-stone-300 hover:text-white rounded text-xs whitespace-nowrap shrink-0 transition-colors cursor-pointer"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Civilizations Bar & Add Selector */}
      <div className="p-5 rounded-xl bg-[#10121a] border border-[#24293c] space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-serif uppercase tracking-wider text-[#c5a059] font-bold">
            Active Comparison Cohort ({selectedCivs.length} of {MAX_COMPARE})
          </span>
          {selectedIds.length < MAX_COMPARE && (
            <span className="text-stone-400">Add up to {MAX_COMPARE} civilizations</span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {selectedCivs.map((civ) => (
            <div
              key={civ.id}
              className="px-3.5 py-2 rounded-lg bg-[#181c2b] border border-[#2d344a] flex items-center gap-2.5 text-xs"
            >
              <div>
                <span className="font-serif font-bold text-white block">
                  {civ.name}
                </span>
                <span className="text-[10px] font-mono text-[#c5a059]">
                  {civ.era}
                </span>
              </div>

              {selectedCivs.length > 2 && (
                <button
                  type="button"
                  onClick={() => handleRemoveCiv(civ.id)}
                  title="Remove from comparison"
                  className="p-1 rounded hover:bg-[#282f42] text-stone-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}

          {/* Add Civilization Dropdown */}
          {selectedIds.length < MAX_COMPARE && (
            <div className="relative">
              <select
                value=""
                onChange={(e) => {
                  if (e.target.value) handleAddCiv(e.target.value);
                }}
                className="px-3.5 py-2.5 bg-[#141724] border border-dashed border-[#c5a059]/60 hover:border-[#c5a059] rounded-lg text-xs font-serif font-bold text-[#c5a059] focus:outline-none cursor-pointer"
              >
                <option value="">+ Add Civilization to Compare</option>
                {civilizations
                  .filter((c) => !selectedIds.includes(c.id))
                  .map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.era})
                    </option>
                  ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Radar Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <CivilizationRadarChart selectedCivs={selectedCivs} size={460} />
        </div>

        <div className="lg:col-span-6 space-y-4">
          <div className="p-5 rounded-lg bg-[#12141e] border border-[#252a3d] space-y-3">
            <h3 className="text-base font-serif font-bold text-[#f8f5ee]">
              Multi-Axis Capability Dynamics
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Civilizations balance different energetic constraints: riverine hydraulic civilizations excelled in canal earthworks and municipal sanitation, while imperial continental regimes prioritized written jurisprudence, roads, and monetary velocity.
            </p>

            <div className="space-y-2 pt-2 border-t border-[#1d2232] text-xs">
              {selectedCivs.map((civ) => (
                <div key={civ.id} className="flex items-center justify-between">
                  <span className="font-serif font-bold text-stone-200">{civ.name}</span>
                  <span className="text-[#c5a059] text-[11px] italic truncate max-w-xs">{civ.keyInnovation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter & Options Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#232738]">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
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

        {/* Difference Highlight Toggle */}
        <button
          type="button"
          onClick={() => setHighlightDifferences(!highlightDifferences)}
          className={`flex items-center gap-2 px-3 py-1 rounded text-xs border transition-colors cursor-pointer ${
            highlightDifferences
              ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#c5a059]'
              : 'bg-[#141620] border-[#25293d] text-stone-400 hover:text-white'
          }`}
        >
          <Check className={`w-3.5 h-3.5 ${highlightDifferences ? 'opacity-100' : 'opacity-0'}`} />
          <span>Highlight Divergent Characteristics</span>
        </button>
      </div>

      {/* Multi-Column Side-by-Side 12 Structural Vectors Table */}
      <div className="space-y-6">
        <h3 className="text-xl font-serif font-bold text-[#f8f5ee]">
          Structural Characteristics Matrix ({filteredCharacteristics.length} Vectors)
        </h3>

        <div className="space-y-4">
          {filteredCharacteristics.map((meta, idx) => (
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

                <span className="text-xs text-stone-400 italic hidden md:inline max-w-sm truncate text-right">
                  {meta.guidingQuestion}
                </span>
              </div>

              {/* Dynamic Grid: 2, 3, or 4 columns based on selected civs */}
              <div
                className={`grid divide-y md:divide-y-0 md:divide-x divide-[#23273a] ${
                  selectedCivs.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : selectedCivs.length === 3
                    ? 'grid-cols-1 md:grid-cols-3'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                }`}
              >
                {selectedCivs.map((civ) => (
                  <div
                    key={civ.id}
                    className={`p-5 space-y-2 transition-colors ${
                      highlightDifferences ? 'bg-[#151928]/40' : 'bg-transparent'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-serif uppercase tracking-wider text-[#c5a059] block font-bold">
                      {civ.name}
                    </span>
                    <p className="text-sm text-stone-200 leading-relaxed font-normal">
                      {civ.characteristics[meta.key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Triad of Achievements Comparison */}
      <div className="space-y-4 pt-6 border-t border-[#232738]">
        <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium">
          <Award className="w-4 h-4" />
          <span>Historical Legacy</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-[#f8f5ee]">
          Triad of Monumental Achievements
        </h3>

        <div
          className={`grid gap-4 ${
            selectedCivs.length === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : selectedCivs.length === 3
              ? 'grid-cols-1 md:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {selectedCivs.map((civ) => (
            <div
              key={civ.id}
              className="p-5 rounded-lg bg-[#12141e] border border-[#252a3d] space-y-3"
            >
              <h4 className="text-base font-serif font-bold text-[#c5a059]">
                {civ.name}
              </h4>
              <ul className="space-y-3 text-sm text-stone-200">
                {civ.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#1c2030] border border-[#c5a059]/40 flex items-center justify-center text-[10px] text-[#c5a059] shrink-0 font-serif font-bold">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed font-normal">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Collapse or Transformation Comparison */}
      <div className="space-y-4 pt-6 border-t border-[#232738] pb-12">
        <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c86d51] font-medium">
          <AlertOctagon className="w-4 h-4" />
          <span>Systemic Dynamics</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-[#f8f5ee]">
          Collapse & Structural Transformation
        </h3>

        <div
          className={`grid gap-4 ${
            selectedCivs.length === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : selectedCivs.length === 3
              ? 'grid-cols-1 md:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {selectedCivs.map((civ) => (
            <div
              key={civ.id}
              className="p-5 rounded-lg bg-[#171318] border border-[#b85d43]/30 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-base font-serif font-bold text-stone-100">
                  {civ.name}
                </h4>
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono bg-[#281816] text-[#e8886d] border border-[#c86d51]/30">
                {civ.collapse_or_transformation.type}
              </span>
              <p className="text-sm text-stone-200 leading-relaxed font-normal pt-1">
                {civ.collapse_or_transformation.detailed_analysis}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
