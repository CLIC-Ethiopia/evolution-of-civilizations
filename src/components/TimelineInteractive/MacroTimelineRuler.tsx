/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from 'react';
import {
  Calendar,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Clock,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { Civilization } from '../../types/civilization';
import { soundManager } from '../../utils/audioAmbience';

interface MacroTimelineRulerProps {
  civilizations: Civilization[];
  activeCivId: string;
  onSelectCivilization: (id: string) => void;
  onOpenFullscreen: () => void;
  isInsideFullscreen?: boolean;
}

interface HistoricalEraBand {
  id: string;
  label: string;
  startBCE: number;
  endBCE: number;
  color: string;
  borderColor: string;
  bgGlow: string;
}

const HISTORICAL_ERAS: HistoricalEraBand[] = [
  {
    id: 'bronze-early',
    label: 'Early Bronze Age',
    startBCE: -4500,
    endBCE: -2000,
    color: '#d97706',
    borderColor: 'border-amber-600/40',
    bgGlow: 'bg-amber-950/25',
  },
  {
    id: 'bronze-late',
    label: 'Late Bronze Age',
    startBCE: -2000,
    endBCE: -1200,
    color: '#ca8a04',
    borderColor: 'border-yellow-600/40',
    bgGlow: 'bg-yellow-950/25',
  },
  {
    id: 'classical',
    label: 'Classical Antiquity',
    startBCE: -1200,
    endBCE: 500,
    color: '#10b981',
    borderColor: 'border-emerald-600/40',
    bgGlow: 'bg-emerald-950/25',
  },
  {
    id: 'medieval',
    label: 'Middle Ages & Golden Ages',
    startBCE: 500,
    endBCE: 1500,
    color: '#3b82f6',
    borderColor: 'border-blue-600/40',
    bgGlow: 'bg-blue-950/25',
  },
  {
    id: 'early-modern',
    label: 'Early Modern Horizon',
    startBCE: 1500,
    endBCE: 1760,
    color: '#a855f7',
    borderColor: 'border-purple-600/40',
    bgGlow: 'bg-purple-950/25',
  },
  {
    id: 'modern-digital',
    label: 'Industrial & Digital Epoch',
    startBCE: 1760,
    endBCE: 2026,
    color: '#06b6d4',
    borderColor: 'border-cyan-600/40',
    bgGlow: 'bg-cyan-950/25',
  },
];

export const MacroTimelineRuler: React.FC<MacroTimelineRulerProps> = ({
  civilizations,
  activeCivId,
  onSelectCivilization,
  onOpenFullscreen,
  isInsideFullscreen = false,
}) => {
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const activeCiv =
    civilizations.find((c) => c.id === activeCivId) || civilizations[0];

  // Continuous linear span: -4500 to 2026 = 6526 years
  const MIN_YEAR = -4500;
  const MAX_YEAR = 2026;
  const TOTAL_SPAN = MAX_YEAR - MIN_YEAR;

  const yearToPercent = (year: number): number => {
    const clamped = Math.max(MIN_YEAR, Math.min(MAX_YEAR, year));
    return ((clamped - MIN_YEAR) / TOTAL_SPAN) * 100;
  };

  const getLifespanLabel = (civ: Civilization): string => {
    const years = civ.endBCE - civ.startBCE;
    if (civ.id === 'modern_industrial_digital') {
      return `${years}+ Years (Active)`;
    }
    return `${years.toLocaleString()} Years Duration`;
  };

  // Scroll active civilization card into view smoothly
  useEffect(() => {
    if (scrollTrackRef.current) {
      const activeCard = scrollTrackRef.current.querySelector(
        `[data-civ-id="${activeCivId}"]`
      );
      if (activeCard) {
        activeCard.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [activeCivId]);

  const scrollCards = (direction: 'left' | 'right') => {
    if (scrollTrackRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollTrackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#0c0e14] border border-[#232738] p-5 sm:p-7 space-y-6 shadow-2xl">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#202436]">
        <div>
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-semibold mb-1">
            <Calendar className="w-4 h-4" />
            <span>Dual-Tier Chrono-Rhythm Architecture</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#f8f5ee]">
            The 6,500-Year Civilizational Span
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#141724] px-3 py-1.5 rounded-lg border border-[#24293c] text-xs text-stone-300 font-mono">
            <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>4500 BCE — 2026 CE</span>
          </div>

          {!isInsideFullscreen && (
            <button
              type="button"
              onClick={() => {
                soundManager.playChime();
                onOpenFullscreen();
              }}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#c5a059] hover:bg-[#d8b56f] text-black font-semibold text-xs transition-colors cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Fullscreen Timeline</span>
            </button>
          )}
        </div>
      </div>

      {/* TIER 1: Non-Scrolling Full-Width Proportional Chronological Ribbon */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs text-stone-400">
          <span className="font-serif uppercase tracking-wider text-[#c5a059] font-semibold">
            Tier 1: Global Chronological Horizon (Proportional Scale)
          </span>
          <span className="font-mono text-[11px] text-stone-400 hidden sm:inline">
            Active: <strong className="text-white">{activeCiv.name}</strong> ({activeCiv.era})
          </span>
        </div>

        {/* The Proportional Ribbon Bar */}
        <div className="relative w-full h-14 rounded-xl bg-[#08090f] border border-[#202436] overflow-hidden select-none">
          {/* Era Bands */}
          <div className="absolute inset-0 flex">
            {HISTORICAL_ERAS.map((era) => {
              const startPct = yearToPercent(era.startBCE);
              const endPct = yearToPercent(era.endBCE);
              const widthPct = endPct - startPct;

              return (
                <div
                  key={era.id}
                  className={`absolute top-0 bottom-0 border-r ${era.borderColor} ${era.bgGlow} flex flex-col justify-between p-1.5 transition-colors`}
                  style={{ left: `${startPct}%`, width: `${widthPct}%` }}
                >
                  <span
                    className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider font-bold truncate"
                    style={{ color: era.color }}
                  >
                    {era.label}
                  </span>
                  <span className="text-[8px] font-mono text-stone-400">
                    {era.startBCE < 0 ? `${Math.abs(era.startBCE)} BCE` : `${era.startBCE} CE`}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Civilization Highlight Range Overlay */}
          {activeCiv && (
            <div
              className="absolute top-0 bottom-0 bg-[#c5a059]/20 border-x-2 border-[#c5a059] z-10 pointer-events-none transition-all duration-300"
              style={{
                left: `${yearToPercent(activeCiv.startBCE)}%`,
                width: `${Math.max(1.2, yearToPercent(activeCiv.endBCE) - yearToPercent(activeCiv.startBCE))}%`,
              }}
            />
          )}

          {/* Interactive Society Pins on the Ribbon */}
          <div className="absolute inset-x-0 bottom-1.5 z-20 flex">
            {civilizations.map((civ) => {
              const centerYear = (civ.startBCE + civ.endBCE) / 2;
              const leftPct = yearToPercent(centerYear);
              const isActive = civ.id === activeCivId;

              return (
                <button
                  key={civ.id}
                  type="button"
                  onClick={() => {
                    soundManager.playChime();
                    onSelectCivilization(civ.id);
                  }}
                  title={`${civ.name} (${civ.era})`}
                  style={{ left: `${leftPct}%` }}
                  className={`absolute -translate-x-1/2 p-1 rounded-full transition-all cursor-pointer group ${
                    isActive ? 'scale-125 z-30' : 'hover:scale-110 z-20'
                  }`}
                >
                  <span
                    className={`block w-2.5 h-2.5 rounded-full transition-all ${
                      isActive
                        ? 'bg-[#c5a059] ring-4 ring-[#c5a059]/40 scale-125 shadow-[0_0_12px_#c5a059]'
                        : 'bg-stone-500 group-hover:bg-[#c5a059]'
                    }`}
                  />
                  {/* Tooltip on Hover */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-[#10121a] border border-[#2d3248] text-[10px] font-serif text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-40">
                    {civ.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* TIER 2: Fully Readable Society Cards Rail (Equal Width, Zero Truncation) */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif uppercase tracking-wider text-[#c5a059] font-semibold text-xs">
              Tier 2: Sequential Society Deck (12 Civilizations)
            </span>
            <span className="text-[11px] text-stone-400 hidden md:inline">
              · All cards fully readable with duration and innovations
            </span>
          </div>

          {/* Carousel Step Controls */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollCards('left')}
              title="Scroll left"
              className="p-1.5 rounded-md bg-[#161926] hover:bg-[#22283a] text-stone-300 hover:text-white border border-[#252a3c] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollCards('right')}
              title="Scroll right"
              className="p-1.5 rounded-md bg-[#161926] hover:bg-[#22283a] text-stone-300 hover:text-white border border-[#252a3c] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable / Horizontally Flowing Cards Container */}
        <div
          ref={scrollTrackRef}
          className="flex items-stretch gap-4 overflow-x-auto pb-4 pt-1 px-1 no-scrollbar select-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {civilizations.map((civ, index) => {
            const isActive = civ.id === activeCivId;
            const lifespan = getLifespanLabel(civ);

            return (
              <div
                key={civ.id}
                data-civ-id={civ.id}
                onClick={() => {
                  soundManager.playChime();
                  onSelectCivilization(civ.id);
                }}
                style={{ scrollSnapAlign: 'start' }}
                className={`w-[320px] sm:w-[360px] shrink-0 rounded-2xl p-6 border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isActive
                    ? 'bg-[#181c2b] border-[#c5a059] shadow-[0_0_25px_rgba(197,160,89,0.25)] ring-1 ring-[#c5a059]'
                    : 'bg-[#11131c] border-[#252a3c] hover:border-[#c5a059]/70 hover:bg-[#161926]'
                }`}
              >
                <div>
                  {/* Top Header: Index & Era Bounds */}
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <span className="font-mono text-[#c5a059] font-bold text-xs">
                      Epoch {(index + 1).toString().padStart(2, '0')} · {civ.era}
                    </span>
                    <span className="text-xs text-stone-300 uppercase tracking-wider font-mono font-medium">
                      {civ.continent}
                    </span>
                  </div>

                  {/* Complete, Un-truncated Civilization Title with Larger Font */}
                  <h4
                    className={`text-lg font-serif font-bold leading-snug mb-2.5 transition-colors ${
                      isActive ? 'text-[#f8f5ee]' : 'text-stone-100 group-hover:text-white'
                    }`}
                  >
                    {civ.name}
                  </h4>

                  {/* Lifespan Duration Badge with Larger Font */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171a26] border border-[#2a3044] text-xs font-mono font-medium text-[#c5a059] mb-3.5">
                    <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{lifespan}</span>
                  </div>

                  {/* Defining Innovation Tagline with Larger Readable Text */}
                  <p className="text-sm text-stone-200 leading-relaxed font-light line-clamp-3 mb-4">
                    {civ.tagline}
                  </p>
                </div>

                {/* Card Action Footprint */}
                <div className="pt-3.5 border-t border-[#1e2334] flex items-center justify-between text-xs">
                  <span className="text-xs text-stone-300 italic truncate max-w-[190px] font-serif">
                    {civ.keyInnovation}
                  </span>

                  <span
                    className={`flex items-center gap-1 font-bold text-xs transition-colors ${
                      isActive ? 'text-[#c5a059]' : 'text-stone-300 group-hover:text-[#c5a059]'
                    }`}
                  >
                    <span>{isActive ? 'Active Epoch' : 'Inspect Arc'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
