/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Landmark, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { Civilization } from '../../types/civilization';
import { MUSEUM_SPECIMENS } from '../../data/museumData';
import { ArchivalImage } from '../ArchivalImage';
import { soundManager } from '../../utils/audioAmbience';

interface ArtifactGalleryProps {
  civilizations: Civilization[];
  onSelectCivilization: (id: string) => void;
}

export const ArtifactGallery: React.FC<ArtifactGalleryProps> = ({
  civilizations,
  onSelectCivilization,
}) => {
  const [selectedCivFilter, setSelectedCivFilter] = useState<string>('all');

  const filteredSpecimens = MUSEUM_SPECIMENS.filter(
    (specimen) =>
      selectedCivFilter === 'all' || specimen.civilizationId === selectedCivFilter
  );

  return (
    <div className="flex-1 min-w-0 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Title */}
      <div className="pb-4 border-b border-[#232738] space-y-2">
        <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium">
          <Landmark className="w-4 h-4" />
          <span>Archaeological Repository</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f8f5ee]">
          Milestone Artifact Gallery
        </h1>
        <p className="text-sm text-stone-300 max-w-2xl font-light">
          Primary historical relics that substantiate civilizational breakthroughs: from Sumerian clay cuneiform tablets to the Benin lost-wax bronzes and early silicon wafers.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <span className="text-xs font-serif text-[#c5a059] uppercase tracking-wider shrink-0">
          Society:
        </span>
        <button
          type="button"
          onClick={() => setSelectedCivFilter('all')}
          className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer shrink-0 ${
            selectedCivFilter === 'all'
              ? 'bg-[#c5a059] text-black font-semibold'
              : 'bg-[#151824] text-stone-400 hover:text-white'
          }`}
        >
          All Relics ({MUSEUM_SPECIMENS.length})
        </button>

        {civilizations.map((civ) => (
          <button
            key={civ.id}
            type="button"
            onClick={() => setSelectedCivFilter(civ.id)}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer shrink-0 ${
              selectedCivFilter === civ.id
                ? 'bg-[#c5a059] text-black font-semibold'
                : 'bg-[#151824] text-stone-400 hover:text-white'
            }`}
          >
            {civ.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Artifact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpecimens.map((item) => {
          const civ = civilizations.find((c) => c.id === item.civilizationId);
          return (
            <div
              key={item.id}
              className="rounded-xl bg-[#11131c] border border-[#24293c] overflow-hidden flex flex-col justify-between hover:border-[#c5a059]/60 transition-all duration-300 group shadow-md"
            >
              <div>
                {/* Archival Image with Lightbox */}
                <ArchivalImage
                  primarySrc={item.imageUrl}
                  fallbackSrc={item.fallbackUrl}
                  alt={item.name}
                  aspectRatioClass="aspect-16/10"
                  showCaption={false}
                />

                <div className="p-5 space-y-3">
                  {/* Accession & Era */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#c5a059] text-[11px]">
                      {item.accessionNumber}
                    </span>
                    <span className="text-stone-400 text-[11px] font-mono">
                      {item.era}
                    </span>
                  </div>

                  {/* Title & Medium */}
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#f8f5ee] group-hover:text-[#c5a059] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#c5a059]/80 italic mt-0.5">
                      {item.medium}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-stone-200 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Curatorial Significance */}
                  <div className="p-3.5 rounded bg-[#151824] border border-[#202538] text-xs text-stone-200 leading-relaxed">
                    <span className="text-xs uppercase font-mono tracking-wider text-[#c5a059] block mb-1 font-bold">
                      Curatorial Significance
                    </span>
                    {item.historicalSignificance}
                  </div>
                </div>
              </div>

              {/* Card Footer with Link */}
              {civ && (
                <div className="p-4 bg-[#141724] border-t border-[#1f2334] flex items-center justify-between">
                  <span className="text-xs font-serif text-stone-400">
                    {civ.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playChime();
                      onSelectCivilization(civ.id);
                    }}
                    className="text-xs text-[#c5a059] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                  >
                    <span>Visit Civilization</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
