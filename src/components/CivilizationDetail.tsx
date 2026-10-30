/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Compass,
  Award,
  AlertOctagon,
  ChevronLeft,
  ChevronRight,
  GitCompare,
  ArrowUpRight,
  Layers
} from 'lucide-react';
import { Civilization, CharacteristicKey } from '../types/civilization';
import { CHARACTERISTICS_META } from '../constants/characteristics';
import { CharacteristicIcon } from './CharacteristicIcon';
import { CivGalleryShowcase } from './CivGalleryShowcase';
import { CharacteristicModal } from './CharacteristicModal';
import { soundManager } from '../utils/audioAmbience';

interface CivilizationDetailProps {
  civilization: Civilization;
  civilizations: Civilization[];
  onSelectCivilization: (id: string) => void;
  onOpenCompare: (civA: string, civB: string) => void;
}

export const CivilizationDetail: React.FC<CivilizationDetailProps> = ({
  civilization,
  civilizations,
  onSelectCivilization,
  onOpenCompare,
}) => {
  const [activeModalKey, setActiveModalKey] = useState<CharacteristicKey | null>(null);

  // Compute previous and next civilization
  const currentIndex = civilizations.findIndex((c) => c.id === civilization.id);
  const prevCiv = civilizations[(currentIndex - 1 + civilizations.length) % civilizations.length];
  const nextCiv = civilizations[(currentIndex + 1) % civilizations.length];

  return (
    <article className="flex-1 min-w-0 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-3 duration-300">
      {/* Top Breadcrumb & Quick Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#232738] text-xs">
        <div className="flex items-center gap-2 text-stone-400">
          <span className="font-serif text-[#c5a059] uppercase tracking-wider">
            Archive Epoch {currentIndex + 1}
          </span>
          <span aria-hidden="true">·</span>
          <span>{civilization.periodLabel}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono text-stone-300">{civilization.era}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onOpenCompare(civilization.id, nextCiv.id);
            }}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded bg-[#171a26] hover:bg-[#202538] border border-[#2d3248] text-stone-300 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <GitCompare className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Compare with Next Era</span>
          </button>
        </div>
      </div>

      {/* Hero Showcase Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Monumental Title & Context */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#c5a059] uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>{civilization.region}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f8f5ee] leading-tight text-balance">
              {civilization.name}
            </h1>
            <p className="text-base sm:text-lg text-[#c5a059]/90 font-serif italic mt-3">
              "{civilization.tagline}"
            </p>
          </div>

          {/* Curatorial Quote Box */}
          <div className="p-5 rounded-lg bg-[#12141d] border border-[#262b3d] text-stone-300 text-sm leading-relaxed relative">
            <div className="w-8 h-8 rounded-full bg-[#1b1e2c] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] absolute -top-4 left-5">
              <span className="font-serif font-bold text-xs">“</span>
            </div>
            <p className="pt-2 italic text-stone-200">
              {civilization.curatorialQuote}
            </p>
            <div className="mt-3 pt-3 border-t border-[#1f2334] flex items-center justify-between text-xs text-stone-400">
              <span>Primary Historical Synthesis</span>
              <span className="font-mono text-[#c5a059]">{civilization.era}</span>
            </div>
          </div>

          {/* Key Innovation Ribbon */}
          <div className="p-4 rounded-lg bg-[#141724] border border-[#c5a059]/25 flex items-start gap-3.5">
            <div className="p-2 rounded bg-[#1c2032] text-[#c5a059] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#c5a059] font-medium block">
                Defining Civilizational Innovation
              </span>
              <p className="text-sm font-serif font-bold text-[#f8f5ee] mt-0.5">
                {civilization.keyInnovation}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Curated Archival Gallery with Horizontal Library */}
        <div className="lg:col-span-5">
          <CivGalleryShowcase
            civilization={civilization}
            className="w-full"
          />
        </div>
      </section>

      {/* The 12-Characteristic Interactive Grid */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#232738] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium mb-1">
              <Layers className="w-4 h-4" />
              <span>Structural Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f8f5ee]">
              The 12 Core Characteristics
            </h2>
          </div>
          <p className="text-xs text-stone-400 max-w-sm sm:text-right">
            Click any pillar card to open the expanded archival analysis and comparative implications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CHARACTERISTICS_META.map((meta, idx) => {
            const rawText = civilization.characteristics[meta.key];
            return (
              <div
                key={meta.key}
                role="button"
                tabIndex={0}
                onClick={() => {
                  soundManager.playChime();
                  setActiveModalKey(meta.key);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    soundManager.playChime();
                    setActiveModalKey(meta.key);
                  }
                }}
                className="group p-5 rounded-lg bg-[#12141d] hover:bg-[#191d2c] border border-[#232738] hover:border-[#c5a059]/60 transition-all duration-200 cursor-pointer flex flex-col justify-between text-left shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <div>
                  {/* Card Header: Icon & Category */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-md bg-[#1a1d2a] group-hover:bg-[#c5a059] text-[#c5a059] group-hover:text-black flex items-center justify-center transition-colors">
                      <CharacteristicIcon characteristicKey={meta.key} className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#c5a059] tracking-wider font-bold">
                      #{(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-[#f8f5ee] group-hover:text-[#c5a059] transition-colors leading-snug">
                    {meta.label}
                  </h3>

                  <p className="text-xs text-[#c5a059]/90 font-mono uppercase tracking-wider mt-1 mb-3">
                    {meta.category}
                  </p>

                  {/* Excerpt */}
                  <p className="text-sm text-stone-200 leading-relaxed line-clamp-3 font-normal">
                    {rawText}
                  </p>
                </div>

                {/* Card Action Kicker */}
                <div className="mt-4 pt-3 border-t border-[#1e2232] flex items-center justify-between text-xs text-stone-300 group-hover:text-[#c5a059] transition-colors font-medium">
                  <span>Examine Deep Dive</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Monumental Achievements Section */}
      <section className="space-y-6 pt-4 border-t border-[#232738]">
        <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium">
          <Award className="w-4 h-4" />
          <span>Historical Legacy</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f8f5ee]">
          Key Monumental Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {civilization.achievements.map((achievement, idx) => {
            const romanNumerals = ['I', 'II', 'III', 'IV'];
            return (
              <div
                key={idx}
                className="p-6 rounded-lg bg-[#12141e] border border-[#252a3d] flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#1b2030] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] font-serif font-bold text-sm mb-4">
                    {romanNumerals[idx] || (idx + 1)}
                  </div>
                  <p className="text-base text-stone-100 leading-relaxed font-normal">
                    {achievement}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1d2232] text-xs text-[#c5a059] font-mono">
                  Achievement Vector {idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Collapse or Structural Transformation Section */}
      <section className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#161824] via-[#12141d] to-[#161824] border border-[#b85d43]/30 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-3.5 rounded-lg bg-[#271816] text-[#c86d51] border border-[#c86d51]/40 shrink-0">
            <AlertOctagon className="w-7 h-7" />
          </div>

          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs uppercase tracking-widest text-[#c86d51] font-serif font-bold">
                Collapse & Structural Transformation
              </span>
              <span className="px-3 py-1 rounded text-xs font-mono font-medium bg-[#271816] text-[#e8886d] border border-[#c86d51]/30">
                {civilization.collapse_or_transformation.type}
              </span>
            </div>

            <p className="text-base sm:text-lg text-stone-100 leading-relaxed font-normal">
              {civilization.collapse_or_transformation.detailed_analysis}
            </p>
          </div>
        </div>
      </section>

      {/* Chronological Step Navigation Footer */}
      <nav aria-label="Epoch pagination" className="pt-8 border-t border-[#232738] flex flex-col sm:flex-row items-center justify-between gap-4 pb-12">
        <button
          type="button"
          onClick={() => {
            soundManager.playChime();
            onSelectCivilization(prevCiv.id);
          }}
          className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#141622] hover:bg-[#1e2233] border border-[#252a3c] text-left transition-colors flex items-center gap-3 group cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-[#c5a059] transition-transform group-hover:-translate-x-1" />
          <div>
            <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
              Previous Era
            </span>
            <span className="text-xs font-serif font-bold text-stone-200 group-hover:text-white">
              {prevCiv.name}
            </span>
          </div>
        </button>

        <span className="text-xs font-mono text-[#c5a059]">
          Epoch {currentIndex + 1} of {civilizations.length}
        </span>

        <button
          type="button"
          onClick={() => {
            soundManager.playChime();
            onSelectCivilization(nextCiv.id);
          }}
          className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#141622] hover:bg-[#1e2233] border border-[#252a3c] text-right transition-colors flex items-center justify-end gap-3 group cursor-pointer"
        >
          <div>
            <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
              Next Era
            </span>
            <span className="text-xs font-serif font-bold text-stone-200 group-hover:text-white">
              {nextCiv.name}
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-[#c5a059] transition-transform group-hover:translate-x-1" />
        </button>
      </nav>

      {/* Characteristic Deep Dive Modal */}
      {activeModalKey && (
        <CharacteristicModal
          characteristicKey={activeModalKey}
          civilization={civilization}
          onClose={() => setActiveModalKey(null)}
          onSelectCharacteristic={(newKey) => setActiveModalKey(newKey)}
        />
      )}
    </article>
  );
};
