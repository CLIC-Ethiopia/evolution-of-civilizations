/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  ArrowRight,
  GitCompare,
  Sparkles,
  Calendar,
  Globe,
  Landmark,
  GitBranch,
  Network
} from 'lucide-react';
import { Civilization, ViewMode } from '../types/civilization';
import { soundManager } from '../utils/audioAmbience';
import { ObsidianCivGraph } from './ObsidianCivGraph';

interface HeroLandingProps {
  civilizations: Civilization[];
  onSelectCivilization: (id: string) => void;
  onNavigateView: (view: ViewMode) => void;
  onOpenCompare?: (civAId: string, civBId: string) => void;
}

export const HeroLanding: React.FC<HeroLandingProps> = ({
  civilizations,
  onSelectCivilization,
  onNavigateView,
  onOpenCompare,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const graphSectionRef = useRef<HTMLDivElement | null>(null);

  // Subtle ambient particle starfield canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: { x: number; y: number; size: number; speedY: number; opacity: number; pulse: number }[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.4,
        speedY: (Math.random() * 0.15 + 0.05) * -1,
        opacity: Math.random() * 0.7 + 0.2,
        pulse: Math.random() * Math.PI,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.y += p.speedY;
        p.pulse += 0.02;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        const currentOpacity = Math.max(0.1, p.opacity + Math.sin(p.pulse) * 0.25);
        ctx.fillStyle = `rgba(197, 160, 89, ${currentOpacity * 0.45})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-61px)] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0a0b0f] via-[#0e1017] to-[#0a0b0f]">
      {/* Background canvas particle dust */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      />

      {/* Subtle radial historic lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Marquee Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-12 pb-6 text-center flex flex-col items-center">
        {/* Curatorial Header Kicker */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#c5a059] font-medium mb-5">
          <span>Digital Curatorial Archive</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>Comparative World Systems</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>4500 BCE – Present</span>
        </div>

        {/* Monumental Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#f8f5ee] tracking-tight leading-[1.1] mb-5 max-w-4xl text-balance">
          The Evolutionary Web of Civilization
        </h1>

        {/* Curatorial Subdeck */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-3xl font-light leading-relaxed mb-8 text-balance">
          An interactive digital museum examining human organization across twelve structural pillars—from the canal-irrigated silt of early Sumer to the planetary compute matrices of the modern digital epoch.
        </p>

        {/* Interactive Primary Actions with Civilization Graph IN FRONT (Default view) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {/* Button 1: Civilization Graph (Active Default!) */}
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              graphSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-6 py-3.5 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-md transition-all flex items-center gap-2.5 shadow-[0_0_35px_rgba(197,160,89,0.35)] hover:shadow-[0_0_45px_rgba(197,160,89,0.5)] cursor-pointer border border-[#c5a059]"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
            <span>Civilization Graph</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/20 text-black uppercase font-bold">
              Default
            </span>
          </button>

          {/* Button 2: Interactive Timeline */}
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onNavigateView('timeline');
            }}
            className="px-5 py-3.5 bg-[#171a26] hover:bg-[#202436] text-stone-200 hover:text-white font-medium text-xs sm:text-sm rounded-md transition-all border border-[#2d3248] hover:border-[#c5a059]/50 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#c5a059]" />
            <span>Interactive Timeline</span>
          </button>

          {/* Button 3: Multi-Era Radar Compare */}
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onNavigateView('compare');
            }}
            className="px-5 py-3.5 bg-[#171a26] hover:bg-[#202436] text-stone-200 hover:text-white font-medium text-xs sm:text-sm rounded-md transition-all border border-[#2d3248] hover:border-[#c5a059]/50 flex items-center gap-2 cursor-pointer"
          >
            <GitCompare className="w-4 h-4 text-[#c5a059]" />
            <span>Multi-Era Radar Compare</span>
          </button>

          {/* Button 4: Exhibition Archive */}
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onNavigateView('archive');
            }}
            className="px-5 py-3.5 bg-[#171a26]/60 hover:bg-[#202436] text-stone-300 hover:text-white font-medium text-xs sm:text-sm rounded-md transition-all border border-[#2d3248] flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-stone-400" />
            <span>Exhibition Archive</span>
          </button>
        </div>

        {/* Secondary Wings Shortcuts Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-xs">
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onNavigateView('map');
            }}
            className="px-3 py-1.5 rounded-full bg-[#141622] hover:bg-[#1d2133] border border-[#252a3d] text-stone-300 hover:text-[#c5a059] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Geographic Cradles Map</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onNavigateView('lineage');
            }}
            className="px-3 py-1.5 rounded-full bg-[#141622] hover:bg-[#1d2133] border border-[#252a3d] text-stone-300 hover:text-[#c5a059] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <GitBranch className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Legacy Lineage Tree</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onNavigateView('artifacts');
            }}
            className="px-3 py-1.5 rounded-full bg-[#141622] hover:bg-[#1d2133] border border-[#252a3d] text-stone-300 hover:text-[#c5a059] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Landmark className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Relics Gallery</span>
          </button>
        </div>
      </div>

      {/* Primary Centerpiece: Civilization Knowledge Graph (Default Load) */}
      <div ref={graphSectionRef} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <ObsidianCivGraph
          civilizations={civilizations}
          onSelectCivilization={onSelectCivilization}
          onNavigateToArchive={(id) => {
            onSelectCivilization(id);
            onNavigateView('archive');
          }}
          onOpenCompare={(a, b) => {
            if (onOpenCompare) {
              onOpenCompare(a, b);
            } else {
              onNavigateView('compare');
            }
          }}
        />
      </div>

      {/* Statistical Anchors */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 mb-12">
        <div className="w-full pt-6 border-t border-[#232738] grid grid-cols-1 sm:grid-cols-3 gap-6 text-stone-400 text-xs">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-serif text-[#f8f5ee] font-semibold tabular-nums mb-1">
              {civilizations.length}
            </span>
            <span className="uppercase tracking-wider text-[11px] text-stone-400">
              World Civilizations
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl font-serif text-[#c5a059] font-semibold tabular-nums mb-1">
              12
            </span>
            <span className="uppercase tracking-wider text-[11px] text-stone-400">
              Structural Vectors
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl font-serif text-[#f8f5ee] font-semibold tabular-nums mb-1">
              6,500+
            </span>
            <span className="uppercase tracking-wider text-[11px] text-stone-400">
              Years of Human History
            </span>
          </div>
        </div>
      </div>

      {/* Curated Era Carousel / Grid Preview at bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold flex items-center gap-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Select a Historical Portal</span>
          </h2>
          <span className="text-xs text-stone-400 hidden sm:inline">
            Chronologically Arranged (4500 BCE – Present)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {civilizations.map((civ) => (
            <button
              key={civ.id}
              type="button"
              onClick={() => {
                soundManager.playChime();
                onSelectCivilization(civ.id);
                onNavigateView('archive');
              }}
              className="group p-3.5 rounded-lg bg-[#12141d]/90 hover:bg-[#1a1e2c] border border-[#232738] hover:border-[#c5a059]/60 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[110px]"
            >
              <div>
                <p className="text-[10px] font-mono text-[#c5a059] uppercase tracking-wider mb-1 line-clamp-1">
                  {civ.era}
                </p>
                <h3 className="text-xs font-serif font-bold text-stone-200 group-hover:text-white line-clamp-2">
                  {civ.name}
                </h3>
              </div>
              <div className="mt-2 pt-2 border-t border-[#1f2334] flex items-center justify-between text-[11px] text-stone-400 group-hover:text-stone-300">
                <span className="truncate max-w-[80px]">{civ.continent}</span>
                <Sparkles className="w-3 h-3 text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
