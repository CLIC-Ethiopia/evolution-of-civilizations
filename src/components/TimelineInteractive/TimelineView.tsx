/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Compass, ArrowRight, Maximize2 } from 'lucide-react';
import { Civilization } from '../../types/civilization';
import { MacroTimelineRuler } from './MacroTimelineRuler';
import { CivilizationZoomTimeline } from './CivilizationZoomTimeline';
import { soundManager } from '../../utils/audioAmbience';

interface TimelineViewProps {
  civilizations: Civilization[];
  activeCivId: string;
  onSelectCivilization: (id: string) => void;
  onNavigateToArchive: (id: string) => void;
  onOpenFullscreen: () => void;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  civilizations,
  activeCivId,
  onSelectCivilization,
  onNavigateToArchive,
  onOpenFullscreen,
}) => {
  const activeCiv =
    civilizations.find((c) => c.id === activeCivId) || civilizations[0];

  return (
    <div className="flex-1 min-w-0 overflow-y-auto px-4 sm:px-8 lg:px-12 py-8 max-w-[1550px] w-full mx-auto space-y-10 animate-in fade-in duration-300">
      {/* Title & Introduction */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232738]">
        <div>
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium mb-1">
            <Calendar className="w-4 h-4" />
            <span>Dual-Tier Chrono-Rhythm Suite</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f8f5ee]">
            Interactive Chronological Timeline
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 font-light mt-1 max-w-2xl">
            Tier 1 establishes the proportional 6,500-year historical truth, while Tier 2 delivers fully readable society cards. Inspect the granular 3-act biological life-cycle (Genesis, Apex Achievements, and Collapse/Transformation) below.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onOpenFullscreen();
            }}
            className="px-4 py-2 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-semibold rounded-lg text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Fullscreen Theater</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onNavigateToArchive(activeCiv.id);
            }}
            className="px-4 py-2 bg-[#171a26] hover:bg-[#202538] text-stone-200 border border-[#2d3348] rounded-lg text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span>Open {activeCiv.name} Archive</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
          </button>
        </div>
      </div>

      {/* Component 1: Dual-Tier Macro Timeline Ruler */}
      <section className="space-y-3">
        <MacroTimelineRuler
          civilizations={civilizations}
          activeCivId={activeCivId}
          onSelectCivilization={onSelectCivilization}
          onOpenFullscreen={onOpenFullscreen}
        />
      </section>

      {/* Component 2: Zoomed-In Civilization Life-Cycle Inspector */}
      <section className="space-y-3 pt-4 border-t border-[#232738]">
        <CivilizationZoomTimeline
          civilization={activeCiv}
          onNavigateToArchive={onNavigateToArchive}
          onOpenFullscreen={onOpenFullscreen}
        />
      </section>
    </div>
  );
};
