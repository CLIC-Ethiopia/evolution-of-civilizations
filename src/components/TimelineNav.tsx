/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Compass, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Civilization } from '../types/civilization';
import { soundManager } from '../utils/audioAmbience';

interface TimelineNavProps {
  civilizations: Civilization[];
  activeId: string;
  onSelectCivilization: (id: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const TimelineNav: React.FC<TimelineNavProps> = ({
  civilizations,
  activeId,
  onSelectCivilization,
  isCollapsed,
  onToggleCollapse,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<string>('All');

  const continents = ['All', 'Middle East', 'Africa', 'Asia', 'Europe', 'Americas', 'Global'];

  const filteredCivilizations = useMemo(() => {
    return civilizations.filter((civ) => {
      const matchesSearch =
        civ.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        civ.era.toLowerCase().includes(searchQuery.toLowerCase()) ||
        civ.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        civ.keyInnovation.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesContinent =
        selectedContinent === 'All' || civ.continent === selectedContinent;

      return matchesSearch && matchesContinent;
    });
  }, [civilizations, searchQuery, selectedContinent]);

  if (isCollapsed) {
    return (
      <aside className="w-14 bg-[#0d0e14] border-r border-[#222636] flex flex-col items-center py-4 shrink-0 transition-all duration-300">
        <button
          type="button"
          onClick={onToggleCollapse}
          title="Expand Timeline"
          className="p-2.5 rounded bg-[#161824] hover:bg-[#202436] text-[#c5a059] mb-6 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="flex-1 flex flex-col items-center gap-3 overflow-y-auto no-scrollbar w-full px-2">
          {civilizations.map((civ, index) => {
            const isActive = civ.id === activeId;
            return (
              <button
                key={civ.id}
                type="button"
                onClick={() => {
                  soundManager.playChime();
                  onSelectCivilization(civ.id);
                }}
                title={`${civ.name} (${civ.era})`}
                className={`relative w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#c5a059] text-black ring-2 ring-[#c5a059]/40 scale-110'
                    : 'bg-[#181a26] text-stone-400 hover:text-white hover:bg-[#24283b]'
                }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-80 lg:w-96 bg-[#0d0e14] border-r border-[#222636] flex flex-col shrink-0 h-[calc(100vh-61px)] sticky top-[61px] transition-all duration-300 z-20">
      {/* Sidebar Header & Search */}
      <div className="p-4 border-b border-[#202436] space-y-3 bg-[#0d0e14]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-bold">
            <Compass className="w-4 h-4" />
            <span>Chronological Rail</span>
          </div>

          <button
            type="button"
            onClick={onToggleCollapse}
            title="Collapse Timeline"
            className="p-1.5 rounded hover:bg-[#1a1d2c] text-stone-400 hover:text-white cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search era, name, or region..."
            className="w-full pl-9 pr-3 py-1.5 bg-[#141622] border border-[#252a3d] focus:border-[#c5a059]/60 rounded text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
          <Filter className="w-3 h-3 text-stone-500 shrink-0 mr-1" />
          {continents.map((continent) => (
            <button
              key={continent}
              type="button"
              onClick={() => setSelectedContinent(continent)}
              className={`px-2 py-0.5 text-[11px] font-medium rounded whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                selectedContinent === continent
                  ? 'bg-[#c5a059] text-black font-semibold'
                  : 'bg-[#151824] text-stone-400 hover:text-stone-200 hover:bg-[#1e2233]'
              }`}
            >
              {continent}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline List Scrollable Container */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 relative">
        {/* Continuous vertical timeline track wire */}
        <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-[#c5a059]/40 via-[#2d3348] to-[#c5a059]/30 pointer-events-none" />

        {filteredCivilizations.length === 0 ? (
          <div className="text-center py-10 text-stone-500 text-xs">
            No civilizations match criteria.
          </div>
        ) : (
          filteredCivilizations.map((civ) => {
            const isActive = civ.id === activeId;
            return (
              <button
                key={civ.id}
                type="button"
                onClick={() => {
                  soundManager.playChime();
                  onSelectCivilization(civ.id);
                }}
                className={`w-full text-left relative pl-9 pr-3 py-3 rounded-lg transition-all duration-200 group cursor-pointer ${
                  isActive
                    ? 'bg-[#181b28] border border-[#c5a059]/50 shadow-[0_0_15px_rgba(197,160,89,0.08)]'
                    : 'hover:bg-[#141724] border border-transparent'
                }`}
              >
                {/* Node marker on timeline wire */}
                <div
                  className={`absolute left-[7px] top-[18px] w-2.5 h-2.5 rounded-full transition-all duration-200 z-10 ${
                    isActive
                      ? 'bg-[#c5a059] ring-4 ring-[#c5a059]/25 scale-125'
                      : 'bg-[#292e42] group-hover:bg-stone-400'
                  }`}
                />

                {/* Content */}
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="font-mono text-[#c5a059] font-medium tracking-wide">
                    {civ.era}
                  </span>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider">
                    {civ.continent}
                  </span>
                </div>

                <h3
                  className={`text-sm font-serif font-bold leading-tight transition-colors ${
                    isActive ? 'text-[#f8f5ee]' : 'text-stone-300 group-hover:text-white'
                  }`}
                >
                  {civ.name}
                </h3>

                <p className="text-[11px] text-stone-400 mt-1 line-clamp-1">
                  {civ.region}
                </p>

                {isActive && (
                  <div className="mt-2 pt-1.5 border-t border-[#262c3f] flex items-center justify-between text-[10px] text-[#c5a059]">
                    <span className="italic truncate">{civ.periodLabel}</span>
                    <span className="uppercase tracking-wider font-semibold">Active</span>
                  </div>
                )}
              </button>
            );
          })
        )}
      </div>

      {/* Sidebar Footer Indicator */}
      <div className="p-3 border-t border-[#202436] bg-[#0b0c10] text-[11px] text-stone-400 flex items-center justify-between">
        <span>{filteredCivilizations.length} of {civilizations.length} Civilizations</span>
        <span className="text-stone-400">Sequential View</span>
      </div>
    </aside>
  );
};
