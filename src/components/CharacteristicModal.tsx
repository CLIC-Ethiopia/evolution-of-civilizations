/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { CharacteristicKey, Civilization } from '../types/civilization';
import { CHARACTERISTICS_MAP, CHARACTERISTICS_META } from '../constants/characteristics';
import { CharacteristicIcon } from './CharacteristicIcon';
import { soundManager } from '../utils/audioAmbience';

interface CharacteristicModalProps {
  characteristicKey: CharacteristicKey | null;
  civilization: Civilization;
  onClose: () => void;
  onSelectCharacteristic: (key: CharacteristicKey) => void;
  onOpenCompareWithCivilization?: (civId: string) => void;
}

export const CharacteristicModal: React.FC<CharacteristicModalProps> = ({
  characteristicKey,
  civilization,
  onClose,
  onSelectCharacteristic,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!characteristicKey) return null;

  const meta = CHARACTERISTICS_MAP[characteristicKey];
  const detailText = civilization.characteristics[characteristicKey];

  // Find index for next/prev navigation
  const currentIndex = CHARACTERISTICS_META.findIndex((m) => m.key === characteristicKey);
  const prevMeta = CHARACTERISTICS_META[(currentIndex - 1 + CHARACTERISTICS_META.length) % CHARACTERISTICS_META.length];
  const nextMeta = CHARACTERISTICS_META[(currentIndex + 1) % CHARACTERISTICS_META.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl bg-[#11131b] border border-[#c5a059]/40 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#141724] border-b border-[#24293d] flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1c2032] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] shrink-0">
              <CharacteristicIcon characteristicKey={characteristicKey} className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#c5a059] uppercase tracking-wider">
                <span>Pillar {currentIndex + 1} of 12</span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span>{meta.category}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#f8f5ee]">
                {meta.label}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close characteristic dialog"
            className="p-2 rounded-lg bg-[#1a1d2c] hover:bg-[#252a3d] text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6">
          {/* Civilization Context Marker */}
          <div className="px-4 py-3 rounded-lg bg-[#171a26] border border-[#242a3c] flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-stone-200 text-sm">
                {civilization.name}
              </span>
              <span className="text-stone-400">·</span>
              <span className="font-mono text-[#c5a059]">{civilization.era}</span>
            </div>
            <span className="text-stone-400">{civilization.region}</span>
          </div>

          {/* Guiding Curatorial Question */}
          <div className="p-4 rounded-lg bg-[#141620] border-l-2 border-[#c5a059]">
            <p className="text-xs uppercase tracking-wider text-[#c5a059] font-serif mb-1 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>Curatorial Inquiry</span>
            </p>
            <p className="text-sm text-stone-300 italic">
              "{meta.guidingQuestion}"
            </p>
          </div>

          {/* Deep Dive Narrative Prose */}
          <div className="prose prose-invert max-w-none text-stone-200 text-base leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#c5a059] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              {detailText}
            </p>
          </div>

          {/* Thematic Significance */}
          <div className="pt-4 border-t border-[#232738]">
            <h4 className="text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2">
              Broader Civilizational Vector
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              {meta.thematicSignificance}
            </p>
          </div>
        </div>

        {/* Modal Footer with Carousel Controls */}
        <div className="px-6 py-4 bg-[#141724] border-t border-[#24293d] flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onSelectCharacteristic(prevMeta.key);
            }}
            className="flex items-center gap-2 text-xs text-stone-300 hover:text-[#c5a059] py-1.5 px-3 rounded bg-[#1b1e2c] hover:bg-[#24283b] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{prevMeta.shortLabel}</span>
            <span className="sm:hidden">Prev</span>
          </button>

          <span className="text-xs text-stone-500 font-mono">
            {currentIndex + 1} / 12
          </span>

          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onSelectCharacteristic(nextMeta.key);
            }}
            className="flex items-center gap-2 text-xs text-stone-300 hover:text-[#c5a059] py-1.5 px-3 rounded bg-[#1b1e2c] hover:bg-[#24283b] transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">{nextMeta.shortLabel}</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
