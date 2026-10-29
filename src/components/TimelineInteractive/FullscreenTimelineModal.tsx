/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import {
  X,
  Minimize2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Calendar
} from 'lucide-react';
import { Civilization } from '../../types/civilization';
import { MacroTimelineRuler } from './MacroTimelineRuler';
import { CivilizationZoomTimeline } from './CivilizationZoomTimeline';
import { soundManager } from '../../utils/audioAmbience';

interface FullscreenTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  civilizations: Civilization[];
  activeCivId: string;
  onSelectCivilization: (id: string) => void;
  onNavigateToArchive: (id: string) => void;
}

export const FullscreenTimelineModal: React.FC<FullscreenTimelineModalProps> = ({
  isOpen,
  onClose,
  civilizations,
  activeCivId,
  onSelectCivilization,
  onNavigateToArchive,
}) => {
  const currentIndex = civilizations.findIndex((c) => c.id === activeCivId);
  const activeCiv =
    civilizations[currentIndex >= 0 ? currentIndex : 0] || civilizations[0];

  const handlePrev = () => {
    soundManager.playChime();
    const prevIndex =
      (currentIndex - 1 + civilizations.length) % civilizations.length;
    onSelectCivilization(civilizations[prevIndex].id);
  };

  const handleNext = () => {
    soundManager.playChime();
    const nextIndex = (currentIndex + 1) % civilizations.length;
    onSelectCivilization(civilizations[nextIndex].id);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, currentIndex, civilizations]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#07080c]/98 backdrop-blur-2xl flex flex-col w-screen h-screen overflow-hidden animate-in fade-in duration-200"
    >
      {/* Top Theater Navigation Ribbon (True Edge-to-Edge) */}
      <div className="w-full px-6 lg:px-12 py-3.5 bg-[#0b0c13] border-b border-[#242838] flex items-center justify-between gap-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#161a26] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] font-serif font-bold text-sm">
            Ω
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-serif font-bold text-[#f8f5ee]">
              Fullscreen Chronological Theater
            </h2>
            <p className="text-[11px] text-stone-400 font-mono">
              True Edge-to-Edge Monitor Canvas · Use ← / → keys to navigate
            </p>
          </div>
        </div>

        {/* Center Quick Switcher */}
        <div className="hidden md:flex items-center gap-2 bg-[#141622] px-3 py-1.5 rounded-lg border border-[#24293c] text-xs">
          <button
            type="button"
            onClick={handlePrev}
            className="p-1 rounded hover:bg-[#202538] text-stone-300 hover:text-white cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-serif font-bold text-white px-2">
            Epoch {currentIndex + 1} of {civilizations.length}: {activeCiv.name}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="p-1 rounded hover:bg-[#202538] text-stone-300 hover:text-white cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onNavigateToArchive(activeCiv.id);
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-[#c5a059] hover:bg-[#d8b56f] text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]"
          >
            <span>Open {activeCiv.name} Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onClose}
            title="Exit Fullscreen Theater (Esc)"
            className="p-2 rounded-lg bg-[#181a26] hover:bg-[#25293d] text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <Minimize2 className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={onClose}
            title="Close"
            className="p-2 rounded-lg bg-[#181a26] hover:bg-[#25293d] text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Full-Width Scrollable Canvas (Edge-to-Edge, NO max-w-7xl restriction!) */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-14 py-6 space-y-8 w-full">
        {/* Tier 1 & Tier 2: Dual-Tier Chrono-Rhythm Component */}
        <MacroTimelineRuler
          civilizations={civilizations}
          activeCivId={activeCivId}
          onSelectCivilization={onSelectCivilization}
          onOpenFullscreen={() => {}}
          isInsideFullscreen={true}
        />

        {/* Detailed 3-Act Life-Cycle Inspector */}
        <CivilizationZoomTimeline
          civilization={activeCiv}
          onNavigateToArchive={(id) => {
            onNavigateToArchive(id);
            onClose();
          }}
        />
      </div>
    </div>
  );
};
