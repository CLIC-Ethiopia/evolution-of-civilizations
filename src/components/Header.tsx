/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { ViewMode } from '../types/civilization';
import { soundManager } from '../utils/audioAmbience';

interface HeaderProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  onOpenFullscreenTimeline?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onSelectView,
  onOpenFullscreenTimeline,
}) => {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const handleAudioToggle = () => {
    const active = soundManager.toggle();
    setIsAudioActive(active);
  };

  const navItems: { view: ViewMode; label: string }[] = [
    { view: 'landing', label: 'Overview' },
    { view: 'archive', label: 'Archive' },
    { view: 'timeline', label: 'Dual Timeline' },
    { view: 'evolution', label: 'Evolution' },
    { view: 'compare', label: 'Compare Eras' },
    { view: 'macro_matrix', label: 'Macro Matrix' },
  ];

  const secondaryWings: { view: ViewMode; label: string }[] = [
    { view: 'map', label: 'Geographic Cradles' },
    { view: 'lineage', label: 'Legacy Lineage Tree' },
    { view: 'artifacts', label: 'Artifact Gallery' },
    { view: 'dossier', label: 'Study Dossier' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0d12]/92 backdrop-blur-md border-b border-[#242838] px-4 lg:px-8 py-3.5 flex items-center justify-between gap-6 print:hidden">
      {/* Zone 1: Single text element wordmark */}
      <button
        type="button"
        onClick={() => {
          soundManager.playChime();
          onSelectView('landing');
        }}
        className="text-base lg:text-lg font-serif font-bold tracking-wider text-[#f8f5ee] hover:text-[#c5a059] transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
      >
        CHRONOS ARCHIVE
      </button>

      {/* Zone 2: Concise single-line text links */}
      <nav className="hidden md:flex items-center gap-5 text-xs lg:text-sm font-medium">
        {navItems.map((item) => (
          <button
            key={item.view}
            type="button"
            onClick={() => {
              soundManager.playChime();
              onSelectView(item.view);
            }}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentView === item.view
                ? 'text-[#c5a059] border-b-2 border-[#c5a059]'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {item.label}
          </button>
        ))}

        {/* Secondary Wings Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            className={`flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${
              secondaryWings.some((w) => w.view === currentView)
                ? 'text-[#c5a059] border-b-2 border-[#c5a059]'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <span>Museum Wings</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {isMoreMenuOpen && (
            <div
              className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-[#12141e] border border-[#2d3348] shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
              onClick={() => setIsMoreMenuOpen(false)}
            >
              {secondaryWings.map((w) => (
                <button
                  key={w.view}
                  type="button"
                  onClick={() => {
                    soundManager.playChime();
                    onSelectView(w.view);
                  }}
                  className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                    currentView === w.view
                      ? 'bg-[#1a1e2c] text-[#c5a059] font-bold'
                      : 'text-stone-300 hover:bg-[#1a1e2c] hover:text-white'
                  }`}
                >
                  <span>{w.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Zone 3: 1 primary action + ambient audio toggle */}
      <div className="flex items-center gap-2.5 shrink-0">
        <button
          type="button"
          onClick={handleAudioToggle}
          title={isAudioActive ? 'Mute ambient resonance' : 'Play ambient resonance'}
          aria-label={isAudioActive ? 'Mute ambient audio' : 'Unmute ambient audio'}
          className="p-2 rounded-md bg-[#161924] hover:bg-[#202434] text-stone-400 hover:text-[#c5a059] transition-colors cursor-pointer"
        >
          {isAudioActive ? <Volume2 className="w-4 h-4 text-[#c5a059]" /> : <VolumeX className="w-4 h-4" />}
        </button>

        <button
          type="button"
          onClick={() => {
            soundManager.playChime();
            if (currentView === 'timeline') {
              if (onOpenFullscreenTimeline) onOpenFullscreenTimeline();
            } else {
              onSelectView('timeline');
            }
          }}
          className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b56f] rounded transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
        >
          {currentView === 'timeline' ? 'Fullscreen Timeline' : 'Interactive Timeline'}
        </button>
      </div>
    </header>
  );
};
