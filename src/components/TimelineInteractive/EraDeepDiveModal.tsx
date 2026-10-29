/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import {
  X,
  Clock,
  Sparkles,
  AlertOctagon,
  ArrowRight,
  Compass,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { HistoricalEraDetail, HISTORICAL_ERAS_DETAIL } from '../../data/historicalErasData';
import { Civilization } from '../../types/civilization';
import { soundManager } from '../../utils/audioAmbience';

interface EraDeepDiveModalProps {
  eraId: string | null;
  civilizations: Civilization[];
  onClose: () => void;
  onSelectEra: (eraId: string) => void;
  onNavigateToCivilization: (civId: string) => void;
}

export const EraDeepDiveModal: React.FC<EraDeepDiveModalProps> = ({
  eraId,
  civilizations,
  onClose,
  onSelectEra,
  onNavigateToCivilization,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!eraId) return null;

  const currentEra =
    HISTORICAL_ERAS_DETAIL.find((e) => e.id === eraId) ||
    HISTORICAL_ERAS_DETAIL[0];

  const currentIndex = HISTORICAL_ERAS_DETAIL.findIndex((e) => e.id === currentEra.id);
  const prevEra =
    HISTORICAL_ERAS_DETAIL[
      (currentIndex - 1 + HISTORICAL_ERAS_DETAIL.length) % HISTORICAL_ERAS_DETAIL.length
    ];
  const nextEra =
    HISTORICAL_ERAS_DETAIL[(currentIndex + 1) % HISTORICAL_ERAS_DETAIL.length];

  // Look up civilization objects that flourished during this era
  const activeCivObjects = currentEra.activeCivilizationIds
    .map((id) => civilizations.find((c) => c.id === id))
    .filter((c): c is Civilization => Boolean(c));

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-8 flex items-center justify-center animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-[#0f1118] border border-[#c5a059]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 bg-[#141724] border-b border-[#24293d] flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span
                className="px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider border"
                style={{
                  color: currentEra.color,
                  borderColor: `${currentEra.color}66`,
                  backgroundColor: `${currentEra.color}15`,
                }}
              >
                Epoch {currentIndex + 1} of {HISTORICAL_ERAS_DETAIL.length}
              </span>
              <span className="text-xs font-mono text-stone-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <strong className="text-white">{currentEra.durationLabel}</strong>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f8f5ee] leading-tight">
              {currentEra.label}
            </h2>

            <p className="text-sm font-serif italic" style={{ color: currentEra.color }}>
              "{currentEra.subtitle}"
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close historical era dialog"
            className="p-2.5 rounded-xl bg-[#1b1e2c] hover:bg-[#252a3d] text-stone-300 hover:text-white transition-colors cursor-pointer shrink-0 border border-[#2b3146]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-8 no-scrollbar text-stone-200">
          {/* Epoch Overview & Tagline */}
          <section className="p-5 rounded-xl bg-[#131622] border border-[#24293d] space-y-3">
            <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-bold">
              <Calendar className="w-4 h-4" />
              <span>Epochal Macro-Synthesis</span>
            </div>
            <p className="text-base sm:text-lg text-[#f8f5ee] leading-relaxed font-normal">
              {currentEra.macroOverview}
            </p>
            <div className="pt-2 border-t border-[#1e2334] text-xs text-stone-400 font-mono italic">
              Historical Vector: {currentEra.tagline}
            </div>
          </section>

          {/* Key Paradigm Shifts / Technological Revolutions */}
          <section className="space-y-3">
            <h3 className="text-base font-serif font-bold text-[#f8f5ee] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#c5a059]" />
              <span>Defining Paradigm Shifts & Civilizational Breakthroughs</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentEra.keyParadigmShifts.map((shift, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#141724] border border-[#222738] flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-[#1b2032] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] text-xs font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-stone-200 leading-snug">{shift}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Civilizations That Existed / Flourished During This Age */}
          <section className="space-y-4 pt-2">
            <div className="flex items-center justify-between border-b border-[#232738] pb-2">
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#10b981] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Civilizations That Existed & Flourished in This Age ({activeCivObjects.length})</span>
              </div>
              <span className="text-xs text-stone-400 font-mono">
                Click any society to open exhibition
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCivObjects.map((civ) => (
                <div
                  key={civ.id}
                  onClick={() => {
                    soundManager.playChime();
                    onClose();
                    onNavigateToCivilization(civ.id);
                  }}
                  className="p-4 rounded-xl bg-[#121520] hover:bg-[#181d2c] border border-[#242a3e] hover:border-[#c5a059] transition-all cursor-pointer group flex flex-col justify-between space-y-3 shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-mono text-[#c5a059] font-bold">
                        {civ.era}
                      </span>
                      <span className="text-stone-400 text-xs font-mono">
                        {civ.continent}
                      </span>
                    </div>

                    <h4 className="text-base font-serif font-bold text-white group-hover:text-[#c5a059] transition-colors">
                      {civ.name}
                    </h4>

                    <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                      {civ.tagline}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#1d2234] flex items-center justify-between text-xs">
                    <span className="text-xs text-[#c5a059] font-serif italic truncate max-w-[200px]">
                      {civ.keyInnovation}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-[#c5a059] group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Civilizations That Collapsed or Died Out During This Age */}
          {currentEra.diedOutRecords.length > 0 && (
            <section className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#e8886d] font-bold border-b border-[#232738] pb-2">
                <AlertOctagon className="w-4 h-4 text-[#c86d51]" />
                <span>Civilizations That Collapsed or Died Out in This Era ({currentEra.diedOutRecords.length})</span>
              </div>

              <div className="space-y-3.5">
                {currentEra.diedOutRecords.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-[#171318] border border-[#b85d43]/40 space-y-2.5 shadow-md"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#c86d51] ring-4 ring-[#c86d51]/20" />
                        <h4 className="text-base font-serif font-bold text-[#f8f5ee]">
                          {item.civName}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#291715] text-[#e8886d] border border-[#c86d51]/40">
                          Dissolved: {item.endYearLabel}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs font-serif font-semibold text-[#c86d51]">
                      Mechanism: {item.collapseType}
                    </div>

                    <p className="text-sm text-stone-200 leading-relaxed font-normal">
                      {item.causeAnalysis}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Civilizations That Began / Arose In This Age */}
          {currentEra.aroseRecords.length > 0 && (
            <section className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#38bdf8] font-bold border-b border-[#232738] pb-2">
                <Compass className="w-4 h-4 text-[#38bdf8]" />
                <span>Civilizations That Arose or Were Founded in This Age ({currentEra.aroseRecords.length})</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {currentEra.aroseRecords.map((arose, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#101420] border border-[#1e2a40] space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-serif font-bold text-[#f8f5ee] text-sm">
                        {arose.civName}
                      </span>
                      <span className="font-mono text-xs text-[#38bdf8] font-bold">
                        {arose.startYearLabel}
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed font-light">
                      {arose.foundingNote}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Modal Footer with Era Carousel Step */}
        <div className="px-6 sm:px-8 py-4 bg-[#141724] border-t border-[#24293d] flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onSelectEra(prevEra.id);
            }}
            className="flex items-center gap-2 text-xs text-stone-300 hover:text-[#c5a059] py-2 px-3.5 rounded-lg bg-[#191d2c] hover:bg-[#22283c] transition-colors cursor-pointer border border-[#2a3044]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Era: {prevEra.shortLabel}</span>
            <span className="sm:hidden">Prev Era</span>
          </button>

          <span className="text-xs font-mono text-[#c5a059] font-bold">
            Epoch {currentIndex + 1} of {HISTORICAL_ERAS_DETAIL.length}
          </span>

          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onSelectEra(nextEra.id);
            }}
            className="flex items-center gap-2 text-xs text-stone-300 hover:text-[#c5a059] py-2 px-3.5 rounded-lg bg-[#191d2c] hover:bg-[#22283c] transition-colors cursor-pointer border border-[#2a3044]"
          >
            <span className="hidden sm:inline">Next Era: {nextEra.shortLabel}</span>
            <span className="sm:hidden">Next Era</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
