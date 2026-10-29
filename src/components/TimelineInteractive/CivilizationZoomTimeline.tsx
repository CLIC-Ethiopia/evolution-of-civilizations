/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Sparkles,
  AlertOctagon,
  Clock,
  Layers,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { Civilization, MilestonePhase } from '../../types/civilization';
import { CIVILIZATION_LIFECYCLES } from '../../data/timelineMilestones';
import { CharacteristicIcon } from '../CharacteristicIcon';
import { ArchivalImage } from '../ArchivalImage';
import { soundManager } from '../../utils/audioAmbience';

interface CivilizationZoomTimelineProps {
  civilization: Civilization;
  onNavigateToArchive: (id: string) => void;
  onOpenFullscreen?: () => void;
  isCompact?: boolean;
}

export const CivilizationZoomTimeline: React.FC<CivilizationZoomTimelineProps> = ({
  civilization,
  onNavigateToArchive,
  onOpenFullscreen,
  isCompact = false
}) => {
  const [activePhase, setActivePhase] = useState<MilestonePhase | 'all'>('all');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(null);

  const lifecycle = CIVILIZATION_LIFECYCLES[civilization.id] || {
    civilizationId: civilization.id,
    genesisSummary: civilization.characteristics.stable_food_supply,
    peakSummary: civilization.achievements.join(' '),
    collapseSummary: civilization.collapse_or_transformation.detailed_analysis,
    milestones: []
  };

  const filteredMilestones = lifecycle.milestones.filter(
    (m) => activePhase === 'all' || m.phase === activePhase
  );

  return (
    <div className="rounded-xl bg-[#0f1118] border border-[#232738] p-6 lg:p-8 space-y-8 animate-in fade-in duration-300">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#232738]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c5a059] uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>Zoomed-In Epoch Inspector</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>{civilization.era}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f8f5ee]">
            {civilization.name}: The Life-Cycle Arc
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-light max-w-2xl">
            {civilization.tagline}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {onOpenFullscreen && (
            <button
              type="button"
              onClick={() => {
                soundManager.playChime();
                onOpenFullscreen();
              }}
              className="px-3.5 py-2 rounded-lg bg-[#161926] hover:bg-[#202538] text-stone-200 border border-[#2d3348] text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="hidden sm:inline">Fullscreen Mode</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onNavigateToArchive(civilization.id);
            }}
            className="px-4 py-2 rounded-lg bg-[#c5a059] hover:bg-[#d8b56f] text-black text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]"
          >
            <span>Exhibition Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3-Act Biological Arc Summary Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Act I: Genesis / Rise */}
        <div
          onClick={() => setActivePhase(activePhase === 'genesis' ? 'all' : 'genesis')}
          className={`p-5 rounded-lg border transition-all cursor-pointer ${
            activePhase === 'genesis'
              ? 'bg-[#181d28] border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.15)]'
              : 'bg-[#12141e] border-[#222738] hover:border-[#c5a059]/40'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-bold">
              Act I: Genesis & Rise
            </span>
            <span className="text-xs text-stone-400 font-mono">c. Inception</span>
          </div>
          <h3 className="text-base font-serif font-bold text-[#f8f5ee] mb-2">
            Environmental Adaptation
          </h3>
          <p className="text-sm text-stone-200 leading-relaxed font-normal line-clamp-4">
            {lifecycle.genesisSummary}
          </p>
        </div>

        {/* Act II: Golden Age & Peak Achievements */}
        <div
          onClick={() => setActivePhase(activePhase === 'golden_age' ? 'all' : 'golden_age')}
          className={`p-5 rounded-lg border transition-all cursor-pointer ${
            activePhase === 'golden_age'
              ? 'bg-[#181d28] border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.15)]'
              : 'bg-[#12141e] border-[#222738] hover:border-[#c5a059]/40'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-bold">
              Act II: Apex Florescence
            </span>
            <span className="text-xs text-stone-400 font-mono">c. Golden Age</span>
          </div>
          <h3 className="text-base font-serif font-bold text-[#f8f5ee] mb-2">
            Pivotal Achievements
          </h3>
          <p className="text-sm text-stone-200 leading-relaxed font-normal line-clamp-4">
            {lifecycle.peakSummary}
          </p>
        </div>

        {/* Act III: Decline, Collapse or Transformation */}
        <div
          onClick={() => setActivePhase(activePhase === 'collapse' ? 'all' : 'collapse')}
          className={`p-5 rounded-lg border transition-all cursor-pointer ${
            activePhase === 'collapse'
              ? 'bg-[#221618] border-[#c86d51] shadow-[0_0_15px_rgba(200,109,81,0.2)]'
              : 'bg-[#171318] border-[#382322] hover:border-[#c86d51]/50'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c86d51] font-bold">
              Act III: Collapse & Transition
            </span>
            <span className="text-xs text-[#e8886d] font-mono">{civilization.collapse_or_transformation.type}</span>
          </div>
          <h3 className="text-base font-serif font-bold text-stone-100 mb-2">
            Systemic Resolution
          </h3>
          <p className="text-sm text-stone-200 leading-relaxed font-normal line-clamp-4">
            {lifecycle.collapseSummary}
          </p>
        </div>
      </div>

      {/* Filter Tabs for Milestones */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-serif uppercase tracking-wider text-[#c5a059] font-semibold">
            Filter Milestones:
          </span>
          <div className="flex items-center gap-1.5 bg-[#141620] p-1 rounded-lg border border-[#232738]">
            <button
              type="button"
              onClick={() => setActivePhase('all')}
              className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                activePhase === 'all'
                  ? 'bg-[#c5a059] text-black font-semibold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              type="button"
              onClick={() => setActivePhase('genesis')}
              className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                activePhase === 'genesis'
                  ? 'bg-[#c5a059] text-black font-semibold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Genesis
            </button>
            <button
              type="button"
              onClick={() => setActivePhase('golden_age')}
              className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                activePhase === 'golden_age'
                  ? 'bg-[#c5a059] text-black font-semibold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Apex Achievements
            </button>
            <button
              type="button"
              onClick={() => setActivePhase('collapse')}
              className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                activePhase === 'collapse'
                  ? 'bg-[#c86d51] text-white font-semibold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Collapse & Transition
            </button>
          </div>
        </div>

        <span className="text-xs text-stone-400 hidden sm:inline">
          Showing {filteredMilestones.length} Chronological Benchmarks
        </span>
      </div>

      {/* Vertical Granular Timeline Stepper */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#282d3f] space-y-6 pt-2">
        {filteredMilestones.map((milestone, idx) => {
          const isSelected = selectedMilestoneId === milestone.id;
          const isCollapse = milestone.phase === 'collapse';
          const isGolden = milestone.phase === 'golden_age';

          return (
            <div
              key={milestone.id}
              onClick={() => {
                soundManager.playChime();
                setSelectedMilestoneId(isSelected ? null : milestone.id);
              }}
              className={`group relative p-6 rounded-lg border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#181c2a] border-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.15)]'
                  : isCollapse
                  ? 'bg-[#151216] border-[#342220] hover:border-[#c86d51]'
                  : 'bg-[#12141e] border-[#222738] hover:border-[#c5a059]/50'
              }`}
            >
              {/* Stepper node pin on the vertical line */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-7 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  isSelected
                    ? 'bg-[#c5a059] border-black ring-4 ring-[#c5a059]/30'
                    : isCollapse
                    ? 'bg-[#c86d51] border-black'
                    : isGolden
                    ? 'bg-[#c5a059] border-black'
                    : 'bg-[#2b3044] border-black'
                }`}
              />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-sm font-bold text-[#c5a059]">
                    {milestone.yearLabel}
                  </span>
                  <span aria-hidden="true" className="text-stone-600">·</span>
                  <span
                    className={`text-xs uppercase font-mono tracking-wider px-2.5 py-0.5 rounded ${
                      isCollapse
                        ? 'bg-[#2b1816] text-[#e8886d] border border-[#c86d51]/30 font-semibold'
                        : isGolden
                        ? 'bg-[#242938] text-[#e5c378] border border-[#c5a059]/30 font-semibold'
                        : 'bg-[#171a26] text-stone-200 border border-[#2d3248]'
                    }`}
                  >
                    {milestone.phaseLabel}
                  </span>
                </div>

                <span className="text-xs text-stone-400 font-serif italic">
                  Chronological Step {idx + 1}
                </span>
              </div>

              <h4 className="text-lg font-serif font-bold text-[#f8f5ee] mb-2 group-hover:text-white">
                {milestone.title}
              </h4>

              <p className="text-sm text-stone-200 leading-relaxed font-normal">
                {milestone.description}
              </p>

              {/* Key Mechanic Tag */}
              <div className="mt-4 pt-3.5 border-t border-[#1e2334] flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-stone-400">
                  <span>Historical Vector:</span>
                  <span className="text-[#c5a059] font-medium font-serif">
                    {milestone.keyMechanic}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[#c5a059] font-medium group-hover:underline">
                  <span>Inspect Phase</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
