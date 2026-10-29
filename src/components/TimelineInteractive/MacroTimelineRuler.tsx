/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect, useState } from 'react';
import {
  Calendar,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Clock,
  Compass,
  CheckCircle2,
  Layers,
  HelpCircle,
  ExternalLink,
  Flame
} from 'lucide-react';
import { Civilization } from '../../types/civilization';
import { soundManager } from '../../utils/audioAmbience';
import {
  HISTORICAL_ERAS_DETAIL,
  HistoricalEraDetail,
} from '../../data/historicalErasData';
import { EraDeepDiveModal } from './EraDeepDiveModal';

interface MacroTimelineRulerProps {
  civilizations: Civilization[];
  activeCivId: string;
  onSelectCivilization: (id: string) => void;
  onOpenFullscreen: () => void;
  isInsideFullscreen?: boolean;
}

export const MacroTimelineRuler: React.FC<MacroTimelineRulerProps> = ({
  civilizations,
  activeCivId,
  onSelectCivilization,
  onOpenFullscreen,
  isInsideFullscreen = false,
}) => {
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const [hoveredEraId, setHoveredEraId] = useState<string | null>(null);
  const [selectedEraForModal, setSelectedEraForModal] = useState<string | null>(null);
  const [horizonViewMode, setHorizonViewMode] = useState<'proportional' | 'balanced'>('proportional');

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

  // Scroll active civilization card in Tier 2 into view smoothly
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

  // Major chronological milestone ticks across the 6500-year span
  const CHRONO_TICKS = [
    { year: -4000, label: '4000 BCE' },
    { year: -3000, label: '3000 BCE' },
    { year: -2000, label: '2000 BCE' },
    { year: -1000, label: '1000 BCE' },
    { year: 0, label: '1 CE' },
    { year: 1000, label: '1000 CE' },
    { year: 2000, label: '2000 CE' },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#0c0e14] border border-[#232738] p-5 sm:p-7 space-y-7 shadow-2xl">
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
          <div className="flex items-center gap-2 bg-[#141724] px-3.5 py-2 rounded-lg border border-[#24293c] text-xs font-mono font-bold text-stone-200">
            <Clock className="w-4 h-4 text-[#c5a059]" />
            <span>4500 BCE — 2026 CE</span>
          </div>

          {!isInsideFullscreen && (
            <button
              type="button"
              onClick={() => {
                soundManager.playChime();
                onOpenFullscreen();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c5a059] hover:bg-[#d8b56f] text-black font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Fullscreen Mode</span>
            </button>
          )}
        </div>
      </div>

      {/* TIER 1: Global Chronological Horizon with Animated Zoom & Floating Modal */}
      <div className="space-y-3.5">
        {/* Tier 1 Header & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif uppercase tracking-wider text-[#c5a059] font-bold text-sm">
                Tier 1: Global Chronological Horizon
              </span>
              <span className="text-xs text-stone-400 font-mono hidden md:inline">
                (Click any age to open Epoch Deep Dive)
              </span>
            </div>
          </div>

          {/* Active Civilization Highlight Box & Horizon Mode Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Prominent, readable Active Civilization tag */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141724] border border-[#c5a059]/40 text-xs shadow-inner">
              <span className="uppercase font-mono text-[#c5a059] font-bold tracking-wider">
                Active Focus:
              </span>
              <span className="text-sm font-serif font-bold text-white">
                {activeCiv.name}
              </span>
              <span className="font-mono text-xs font-bold text-[#c5a059] bg-[#1a1d2e] px-2 py-0.5 rounded border border-[#c5a059]/30">
                {activeCiv.era}
              </span>
            </div>

            {/* View Mode Toggle: Proportional Zoom vs Balanced Equal Cards */}
            <div className="flex items-center gap-1 bg-[#12141e] p-1 rounded-lg border border-[#232738] text-xs">
              <button
                type="button"
                onClick={() => setHorizonViewMode('proportional')}
                title="Linear time-accurate proportions with animated expansion on hover"
                className={`px-3 py-1 rounded transition-colors font-medium cursor-pointer ${
                  horizonViewMode === 'proportional'
                    ? 'bg-[#c5a059] text-black font-semibold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Proportional (Hover-Zoom)
              </button>
              <button
                type="button"
                onClick={() => setHorizonViewMode('balanced')}
                title="Equal-width cards for all 6 eras to inspect modern eras with generous space"
                className={`px-3 py-1 rounded transition-colors font-medium cursor-pointer ${
                  horizonViewMode === 'balanced'
                    ? 'bg-[#c5a059] text-black font-semibold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Balanced Eras Deck
              </button>
            </div>
          </div>
        </div>

        {/* The Horizon Container: Spacious, High-Contrast & Interactive */}
        <div className="relative w-full rounded-2xl bg-[#08090f] border border-[#252b3e] overflow-hidden shadow-xl">
          {/* Era Cards Track */}
          <div className="flex items-stretch min-h-[140px] sm:min-h-[155px] w-full relative overflow-x-auto no-scrollbar">
            {HISTORICAL_ERAS_DETAIL.map((era) => {
              const startPct = yearToPercent(era.startBCE);
              const endPct = yearToPercent(era.endBCE);
              const proportionalWidth = endPct - startPct;
              const isHovered = hoveredEraId === era.id;

              // Calculate width style based on mode and hover zoom
              let widthStyle = {};
              if (horizonViewMode === 'balanced') {
                widthStyle = {
                  flex: isHovered ? '2 1 340px' : '1 1 180px',
                  minWidth: isHovered ? '320px' : '180px',
                };
              } else {
                // Proportional mode with dynamic hover expansion
                if (isHovered) {
                  widthStyle = {
                    flex: '0 0 auto',
                    minWidth: '340px',
                    width: 'max(340px, 32%)',
                  };
                } else if (hoveredEraId !== null) {
                  // Another card is hovered, condense gracefully
                  widthStyle = {
                    flex: `0 0 max(80px, ${(proportionalWidth * 0.65).toFixed(1)}%)`,
                  };
                } else {
                  // Default unhovered proportional width with minimum readable floor
                  widthStyle = {
                    flex: `0 0 max(90px, ${proportionalWidth.toFixed(1)}%)`,
                  };
                }
              }

              return (
                <div
                  key={era.id}
                  onClick={() => {
                    soundManager.playChime();
                    setSelectedEraForModal(era.id);
                  }}
                  onMouseEnter={() => setHoveredEraId(era.id)}
                  onMouseLeave={() => setHoveredEraId(null)}
                  style={widthStyle}
                  className={`group relative p-3 sm:p-4 border-r ${era.borderColor} ${era.bgGlow} flex flex-col justify-between transition-all duration-300 ease-out cursor-pointer select-none ${
                    isHovered
                      ? 'bg-[#181d2c] z-30 ring-2 ring-[#c5a059] shadow-[0_10px_35px_rgba(0,0,0,0.8)] scale-[1.01]'
                      : 'hover:bg-[#151926] z-10'
                  }`}
                >
                  {/* Top: Short/Full Title & Epoch Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span
                        className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider truncate"
                        style={{ color: era.color }}
                      >
                        {isHovered || horizonViewMode === 'balanced'
                          ? era.label
                          : era.shortLabel}
                      </span>

                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/50 text-stone-300 border border-white/10 shrink-0">
                        {era.activeCivilizationIds.length} Civs
                      </span>
                    </div>

                    {/* Large, High-Contrast Date Range */}
                    <div className="font-mono text-xs sm:text-sm font-bold text-stone-100 flex items-center gap-1.5 flex-wrap">
                      <span>
                        {era.startBCE < 0
                          ? `${Math.abs(era.startBCE)} BCE`
                          : `${era.startBCE} CE`}
                      </span>
                      <span className="text-stone-500">—</span>
                      <span>
                        {era.endBCE < 0
                          ? `${Math.abs(era.endBCE)} BCE`
                          : `${era.endBCE} CE`}
                      </span>
                    </div>

                    {/* Tagline / Subtitle (Always visible on hover or balanced mode) */}
                    {(isHovered || horizonViewMode === 'balanced') && (
                      <p className="text-xs text-stone-300 leading-snug mt-2 line-clamp-2 font-normal animate-in fade-in duration-200">
                        {era.tagline}
                      </p>
                    )}
                  </div>

                  {/* Bottom: Civilizational Dynamics & Click-to-Inspect Hint */}
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-stone-300">
                      {era.durationLabel.split('(')[0].trim()}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-serif font-bold text-[#c5a059] group-hover:underline">
                      <span>Epoch Deep Dive</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Society Highlight Indicator Bar */}
          {activeCiv && horizonViewMode === 'proportional' && (
            <div
              className="absolute bottom-0 h-1.5 bg-[#c5a059] z-20 pointer-events-none transition-all duration-300 shadow-[0_0_12px_#c5a059]"
              style={{
                left: `${yearToPercent(activeCiv.startBCE)}%`,
                width: `${Math.max(
                  1.5,
                  yearToPercent(activeCiv.endBCE) - yearToPercent(activeCiv.startBCE)
                )}%`,
              }}
            />
          )}

          {/* Chronological Ruler Tick Bar Across the Bottom */}
          <div className="relative w-full h-7 bg-[#07080c] border-t border-[#1d2232] flex items-center px-2 select-none">
            {CHRONO_TICKS.map((tick) => {
              const tickPct = yearToPercent(tick.year);
              return (
                <div
                  key={tick.year}
                  style={{ left: `${tickPct}%` }}
                  className="absolute -translate-x-1/2 flex flex-col items-center pointer-events-none"
                >
                  <div className="w-px h-2 bg-stone-600 mb-0.5" />
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-stone-300 whitespace-nowrap">
                    {tick.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Curatorial Helper Hint */}
        <div className="flex flex-wrap items-center justify-between text-xs text-stone-400 pt-1">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Hover any age to smoothly zoom card content. Click to inspect which civilizations existed and died out.</span>
          </div>
          <span className="font-mono text-[#c5a059]">
            Current Epoch Focus: {activeCiv.periodLabel}
          </span>
        </div>
      </div>

      {/* TIER 2: Fully Readable Society Cards Rail (Equal Width, Zero Truncation) */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif uppercase tracking-wider text-[#c5a059] font-bold text-sm">
              Tier 2: Sequential Society Deck ({civilizations.length} Civilizations)
            </span>
            <span className="text-xs text-stone-400 hidden md:inline">
              · All cards un-truncated with duration and key achievements
            </span>
          </div>

          {/* Carousel Step Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollCards('left')}
              title="Scroll left"
              className="p-2 rounded-lg bg-[#161926] hover:bg-[#22283a] text-stone-300 hover:text-white border border-[#252a3c] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollCards('right')}
              title="Scroll right"
              className="p-2 rounded-lg bg-[#161926] hover:bg-[#22283a] text-stone-300 hover:text-white border border-[#252a3c] transition-colors cursor-pointer"
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
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171a26] border border-[#2a3044] text-xs font-mono font-bold text-[#c5a059] mb-3.5">
                    <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{lifespan}</span>
                  </div>

                  {/* Defining Innovation Tagline with Larger Readable Text */}
                  <p className="text-sm text-stone-200 leading-relaxed font-normal line-clamp-3 mb-4">
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

      {/* Floating Era Deep Dive Modal */}
      {selectedEraForModal && (
        <EraDeepDiveModal
          eraId={selectedEraForModal}
          civilizations={civilizations}
          onClose={() => setSelectedEraForModal(null)}
          onSelectEra={(newEraId) => setSelectedEraForModal(newEraId)}
          onNavigateToCivilization={onSelectCivilization}
        />
      )}
    </div>
  );
};
