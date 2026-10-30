/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Compass,
  Sparkles,
  Search,
  Filter,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Play,
  Pause,
  CheckSquare,
  Square,
  X,
  ArrowRight,
  ArrowLeft,
  Share2,
  Info,
  Calendar,
  Globe,
  SlidersHorizontal,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { Civilization } from '../types/civilization';
import { TRANSMISSION_EDGES, TransmissionEdge, InnovationDomain } from '../data/evolutionData';
import { CivQuickDossierModal } from './CivQuickDossierModal';
import { soundManager } from '../utils/audioAmbience';

interface ObsidianCivGraphProps {
  civilizations: Civilization[];
  onSelectCivilization: (id: string) => void;
  onNavigateToArchive: (id: string) => void;
  onOpenCompare: (civAId: string, civBId: string) => void;
}

interface GraphNode {
  id: string;
  name: string;
  era: string;
  continent: string;
  keyInnovation: string;
  tagline: string;
  color: string;
  radius: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  isDragging?: boolean;
  degree: number;
}

interface GraphLink {
  id: string;
  source: string;
  target: string;
  breakthrough: string;
  howUtilizedAndAdapted: string;
  transmissionVector: string;
  domain: InnovationDomain;
  historicalPeriod: string;
  significance: 'foundational' | 'catalytic' | 'incremental';
}

const CONTINENT_COLORS: Record<string, { base: string; glow: string; text: string }> = {
  'Middle East': { base: '#f59e0b', glow: 'rgba(245, 158, 11, 0.45)', text: '#fbbf24' },
  'Africa': { base: '#10b981', glow: 'rgba(16, 185, 129, 0.45)', text: '#34d399' },
  'Asia': { base: '#06b6d4', glow: 'rgba(6, 182, 212, 0.45)', text: '#22d3ee' },
  'Europe': { base: '#818cf8', glow: 'rgba(129, 140, 248, 0.45)', text: '#a5b4fc' },
  'Americas': { base: '#f43f5e', glow: 'rgba(244, 63, 94, 0.45)', text: '#fb7185' },
  'Global': { base: '#c5a059', glow: 'rgba(197, 160, 89, 0.45)', text: '#e6c887' },
};

const DOMAIN_CONFIG: Record<InnovationDomain, { label: string; stroke: string; glow: string }> = {
  science_script: { label: 'Science & Script', stroke: '#38bdf8', glow: 'rgba(56, 189, 248, 0.6)' },
  technology: { label: 'Technology & Metallurgy', stroke: '#fbbf24', glow: 'rgba(251, 191, 36, 0.6)' },
  philosophy_law: { label: 'Philosophy & Law', stroke: '#c084fc', glow: 'rgba(192, 132, 252, 0.6)' },
  agronomy_energy: { label: 'Agronomy & Energy', stroke: '#34d399', glow: 'rgba(52, 211, 153, 0.6)' },
  trade_statecraft: { label: 'Trade & Statecraft', stroke: '#fb7185', glow: 'rgba(251, 113, 133, 0.6)' },
};

export const ObsidianCivGraph: React.FC<ObsidianCivGraphProps> = ({
  civilizations,
  onSelectCivilization,
  onNavigateToArchive,
  onOpenCompare,
}) => {
  // Checkbox inclusions: all 17 selected by default
  const [selectedCivIds, setSelectedCivIds] = useState<Set<string>>(() => {
    return new Set(civilizations.map((c) => c.id));
  });

  // Filter states
  const [selectedDomain, setSelectedDomain] = useState<InnovationDomain | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(true);

  // Interaction states
  const [hoveredCivId, setHoveredCivId] = useState<string | null>(null);
  const [hoveredEdgeId, setHoveredEdgeId] = useState<string | null>(null);
  const [activeModalCivId, setActiveModalCivId] = useState<string | null>(null);
  const [activeEdgeDetail, setActiveEdgeDetail] = useState<GraphLink | null>(null);

  // Canvas pan & zoom states
  const [zoom, setZoom] = useState<number>(0.92);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPhysicsActive, setIsPhysicsActive] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Store simulation node coordinates in ref to avoid react state render lags
  const nodesRef = useRef<Map<string, GraphNode>>(new Map());
  const draggingNodeRef = useRef<{ id: string; offsetX: number; offsetY: number } | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const [, setSimulationTick] = useState<number>(0);

  // Group civilizations by continent for the checkbox drawer
  const continentGroups = useMemo(() => {
    const groups: Record<string, Civilization[]> = {};
    civilizations.forEach((c) => {
      if (!groups[c.continent]) groups[c.continent] = [];
      groups[c.continent].push(c);
    });
    return groups;
  }, [civilizations]);

  // Compute active links based on selected civilizations and domain filter
  const activeLinks = useMemo(() => {
    return TRANSMISSION_EDGES.filter((edge) => {
      const sourceIncluded = selectedCivIds.has(edge.earlierCivId);
      const targetIncluded = selectedCivIds.has(edge.successorCivId);
      const domainMatch = selectedDomain === 'all' || edge.domain === selectedDomain;
      return sourceIncluded && targetIncluded && domainMatch;
    }).map((e) => ({
      id: e.id,
      source: e.earlierCivId,
      target: e.successorCivId,
      breakthrough: e.breakthrough,
      howUtilizedAndAdapted: e.howUtilizedAndAdapted,
      transmissionVector: e.transmissionVector,
      domain: e.domain,
      historicalPeriod: e.historicalPeriod,
      significance: e.significance,
    }));
  }, [selectedCivIds, selectedDomain]);

  // Compute degree connectivity for node scaling
  const degrees = useMemo(() => {
    const degMap: Record<string, number> = {};
    civilizations.forEach((c) => (degMap[c.id] = 0));
    activeLinks.forEach((link) => {
      degMap[link.source] = (degMap[link.source] || 0) + 1;
      degMap[link.target] = (degMap[link.target] || 0) + 1;
    });
    return degMap;
  }, [civilizations, activeLinks]);

  // Initialize or update node positions in nodesRef
  useEffect(() => {
    const container = containerRef.current;
    const width = container ? container.clientWidth : 1100;
    const height = container ? container.clientHeight : 700;
    const cx = width / 2;
    const cy = height / 2;

    const currentMap = nodesRef.current;
    const newMap = new Map<string, GraphNode>();

    civilizations.forEach((civ, idx) => {
      const isSelected = selectedCivIds.has(civ.id);
      if (!isSelected) return;

      const existing = currentMap.get(civ.id);
      const deg = degrees[civ.id] || 0;
      const radius = Math.min(38, Math.max(22, 22 + deg * 2.2));
      const col = CONTINENT_COLORS[civ.continent] || CONTINENT_COLORS['Global'];

      if (existing) {
        newMap.set(civ.id, {
          ...existing,
          name: civ.name,
          era: civ.era,
          continent: civ.continent,
          keyInnovation: civ.keyInnovation,
          tagline: civ.tagline,
          color: col.base,
          radius,
          degree: deg,
        });
      } else {
        // Distribute newly added nodes radially according to chronological era / index
        const angle = (idx / civilizations.length) * Math.PI * 2 + Math.random() * 0.2;
        const dist = 180 + (idx % 3) * 70;
        newMap.set(civ.id, {
          id: civ.id,
          name: civ.name,
          era: civ.era,
          continent: civ.continent,
          keyInnovation: civ.keyInnovation,
          tagline: civ.tagline,
          color: col.base,
          radius,
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          degree: deg,
        });
      }
    });

    nodesRef.current = newMap;
    // Wake up physics engine
    setIsPhysicsActive(true);
  }, [civilizations, selectedCivIds, degrees]);

  // Continuous Force-Directed Physics Simulation Loop
  useEffect(() => {
    let alpha = 1.0;
    const minAlpha = 0.002;
    const decay = 0.992;

    const step = () => {
      if (!isPhysicsActive && !draggingNodeRef.current) {
        animFrameRef.current = requestAnimationFrame(step);
        return;
      }

      const container = containerRef.current;
      const width = container ? container.clientWidth : 1100;
      const height = container ? container.clientHeight : 700;
      const cx = width / 2;
      const cy = height / 2;

      const nodes = Array.from(nodesRef.current.values());
      const nodeCount = nodes.length;

      if (nodeCount > 0) {
        // 1. Coulomb Repulsion between all nodes
        for (let i = 0; i < nodeCount; i++) {
          const a = nodes[i];
          for (let j = i + 1; j < nodeCount; j++) {
            const b = nodes[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const distSq = dx * dx + dy * dy || 1;
            const dist = Math.sqrt(distSq);
            const minDist = a.radius + b.radius + 35;

            // Stronger push if overlapping, standard Coulomb repulsion otherwise
            const forceMag = dist < minDist ? 80 / (dist + 1) : 4800 / distSq;
            const fx = (dx / dist) * forceMag * alpha;
            const fy = (dy / dist) * forceMag * alpha;

            if (!a.isDragging) {
              a.vx -= fx;
              a.vy -= fy;
            }
            if (!b.isDragging) {
              b.vx += fx;
              b.vy += fy;
            }
          }
        }

        // 2. Hooke's Spring Attraction along active links
        activeLinks.forEach((link) => {
          const sourceNode = nodesRef.current.get(link.source);
          const targetNode = nodesRef.current.get(link.target);
          if (!sourceNode || !targetNode) return;

          const dx = targetNode.x - sourceNode.x;
          const dy = targetNode.y - sourceNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const restLength = 170;
          const displacement = dist - restLength;
          const springK = 0.045 * alpha;

          const fx = (dx / dist) * displacement * springK;
          const fy = (dy / dist) * displacement * springK;

          if (!sourceNode.isDragging) {
            sourceNode.vx += fx;
            sourceNode.vy += fy;
          }
          if (!targetNode.isDragging) {
            targetNode.vx -= fx;
            targetNode.vy -= fy;
          }
        });

        // 3. Centering Gravity & Velocity Damping
        nodes.forEach((node) => {
          if (node.isDragging) return;

          // Pull gently toward center
          const cdx = cx - node.x;
          const cdy = cy - node.y;
          node.vx += cdx * 0.012 * alpha;
          node.vy += cdy * 0.012 * alpha;

          // Apply velocity damping
          node.vx *= 0.82;
          node.vy *= 0.82;

          // Update position
          node.x += node.vx;
          node.y += node.vy;

          // Constrain within soft canvas boundaries
          const pad = node.radius + 20;
          if (node.x < pad) {
            node.x = pad;
            node.vx *= -0.5;
          }
          if (node.x > width - pad) {
            node.x = width - pad;
            node.vx *= -0.5;
          }
          if (node.y < pad) {
            node.y = pad;
            node.vy *= -0.5;
          }
          if (node.y > height - pad) {
            node.y = height - pad;
            node.vy *= -0.5;
          }
        });

        // Alpha decay
        alpha *= decay;
        if (alpha < minAlpha && !draggingNodeRef.current) {
          alpha = minAlpha;
        }

        // Trigger react re-render of SVG elements
        setSimulationTick((t) => t + 1);
      }

      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [activeLinks, isPhysicsActive]);

  // Zoom and Pan Handlers
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
    setZoom((prev) => Math.min(2.8, Math.max(0.4, prev * zoomFactor)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // If clicking on background, start panning
    if ((e.target as HTMLElement).tagName === 'svg' || (e.target as HTMLElement).id === 'graph-bg') {
      setIsPanning(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
      return;
    }

    if (draggingNodeRef.current) {
      const { id } = draggingNodeRef.current;
      const node = nodesRef.current.get(id);
      if (node && svgRef.current) {
        const svgRect = svgRef.current.getBoundingClientRect();
        // Convert screen coordinates to SVG zoom/pan space
        const mouseX = (e.clientX - svgRect.left - pan.x) / zoom;
        const mouseY = (e.clientY - svgRect.top - pan.y) / zoom;
        node.x = mouseX;
        node.y = mouseY;
        node.vx = 0;
        node.vy = 0;
        setSimulationTick((t) => t + 1);
      }
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
    if (draggingNodeRef.current) {
      const node = nodesRef.current.get(draggingNodeRef.current.id);
      if (node) {
        node.isDragging = false;
      }
      draggingNodeRef.current = null;
    }
  };

  const handleNodeMouseDown = (civId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const node = nodesRef.current.get(civId);
    if (!node || !svgRef.current) return;

    node.isDragging = true;
    draggingNodeRef.current = {
      id: civId,
      offsetX: 0,
      offsetY: 0,
    };
  };

  const handleResetView = () => {
    soundManager.playChime();
    setZoom(0.92);
    setPan({ x: 0, y: 0 });
    // Re-center physics
    const container = containerRef.current;
    const width = container ? container.clientWidth : 1100;
    const height = container ? container.clientHeight : 700;
    const cx = width / 2;
    const cy = height / 2;

    Array.from(nodesRef.current.values()).forEach((node, idx, arr) => {
      const angle = (idx / arr.length) * Math.PI * 2;
      node.x = cx + Math.cos(angle) * 200;
      node.y = cy + Math.sin(angle) * 200;
      node.vx = (Math.random() - 0.5) * 4;
      node.vy = (Math.random() - 0.5) * 4;
    });
    setIsPhysicsActive(true);
  };

  const handleFitScreen = () => {
    soundManager.playChime();
    const nodes = Array.from(nodesRef.current.values());
    if (nodes.length === 0) return;

    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;
    nodes.forEach((n) => {
      if (n.x < minX) minX = n.x;
      if (n.x > maxX) maxX = n.x;
      if (n.y < minY) minY = n.y;
      if (n.y > maxY) maxY = n.y;
    });

    const container = containerRef.current;
    const width = container ? container.clientWidth : 1100;
    const height = container ? container.clientHeight : 700;

    const graphWidth = maxX - minX + 120;
    const graphHeight = maxY - minY + 120;
    const scale = Math.min(1.8, Math.max(0.4, Math.min(width / graphWidth, height / graphHeight)));

    const graphCenterX = (minX + maxX) / 2;
    const graphCenterY = (minY + maxY) / 2;

    setZoom(scale);
    setPan({
      x: width / 2 - graphCenterX * scale,
      y: height / 2 - graphCenterY * scale,
    });
  };

  // Toggle single civilization checkbox
  const toggleCivInclusion = (id: string) => {
    soundManager.playChime();
    setSelectedCivIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        // Prevent deselecting everything
        if (next.size > 1) next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Select all / Deselect all
  const selectAllCivs = () => {
    soundManager.playChime();
    setSelectedCivIds(new Set(civilizations.map((c) => c.id)));
  };

  const deselectAllExceptCurrent = (keepId?: string) => {
    soundManager.playChime();
    const idToKeep = keepId || civilizations[0].id;
    setSelectedCivIds(new Set([idToKeep]));
  };

  // Select entire continent
  const toggleContinent = (continent: string) => {
    soundManager.playChime();
    const continentCivs = continentGroups[continent] || [];
    const allSelected = continentCivs.every((c) => selectedCivIds.has(c.id));

    setSelectedCivIds((prev) => {
      const next = new Set(prev);
      if (allSelected) {
        continentCivs.forEach((c) => {
          if (next.size > 1) next.delete(c.id);
        });
      } else {
        continentCivs.forEach((c) => next.add(c.id));
      }
      return next;
    });
  };

  // Calculate neighborhood for spotlight hover
  const neighborIds = useMemo(() => {
    if (!hoveredCivId) return null;
    const neighbors = new Set<string>([hoveredCivId]);
    activeLinks.forEach((link) => {
      if (link.source === hoveredCivId) neighbors.add(link.target);
      if (link.target === hoveredCivId) neighbors.add(link.source);
    });
    return neighbors;
  }, [hoveredCivId, activeLinks]);

  // Active modal civilization object
  const activeCivModal = useMemo(() => {
    if (!activeModalCivId) return null;
    return civilizations.find((c) => c.id === activeModalCivId) || null;
  }, [activeModalCivId, civilizations]);

  // Filtered civilizations by search query in the sidebar
  const searchedCivs = useMemo(() => {
    if (!searchQuery.trim()) return civilizations;
    const q = searchQuery.toLowerCase();
    return civilizations.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.keyInnovation.toLowerCase().includes(q) ||
        c.continent.toLowerCase().includes(q)
    );
  }, [civilizations, searchQuery]);

  // Hovered civilization object for live TLDR card
  const hoveredCivObj = useMemo(() => {
    if (!hoveredCivId) return null;
    return civilizations.find((c) => c.id === hoveredCivId) || null;
  }, [hoveredCivId, civilizations]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[760px] sm:h-[840px] bg-[#07080e] overflow-hidden rounded-2xl border border-[#1f2436] shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col font-sans select-none"
    >
      {/* 1. TOP EXECUTIVE BAR: TITLE, STATS, AND TLDR DOMAIN PILLS */}
      <div className="relative z-20 px-4 sm:px-6 py-3.5 bg-[#0b0c15]/95 backdrop-blur-md border-b border-[#1d2235] flex flex-wrap items-center justify-between gap-4">
        {/* Left: Section Header & Obsidian Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#c5a059] animate-pulse shadow-[0_0_10px_#c5a059]" />
          <div>
            <h2 className="text-sm sm:text-base font-serif font-bold text-[#f8f5ee] flex items-center gap-2">
              <span>Obsidian Civilization Knowledge Graph</span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#1c2236] text-[#c5a059] border border-[#2d3654]">
                Interactive Force Matrix
              </span>
            </h2>
            <p className="text-[11px] text-stone-400 hidden sm:block">
              Mapping 6,500+ years of cross-civilizational transmissions, breakthroughs & inheritances
            </p>
          </div>
        </div>

        {/* Center: Live Structural Matrix Counters */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#121422] border border-[#21273c]">
            <span className="text-stone-400">Civilizations:</span>
            <span className="text-[#c5a059] font-bold">
              {selectedCivIds.size} / {civilizations.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#121422] border border-[#21273c]">
            <span className="text-stone-400">Transmissions:</span>
            <span className="text-cyan-400 font-bold">{activeLinks.length}</span>
          </div>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-2">
          {/* Toggle Filter Drawer Button */}
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              setIsFilterDrawerOpen(!isFilterDrawerOpen);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors cursor-pointer ${
              isFilterDrawerOpen
                ? 'bg-[#c5a059]/15 border-[#c5a059] text-[#c5a059]'
                : 'bg-[#151928] border-[#252c42] text-stone-300 hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Filter Civilizations</span>
          </button>

          {/* Physics Pause / Resume Toggle */}
          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              setIsPhysicsActive(!isPhysicsActive);
            }}
            className="p-2 rounded-lg bg-[#151928] hover:bg-[#1f253d] border border-[#252c42] text-stone-300 hover:text-white transition-colors cursor-pointer"
            title={isPhysicsActive ? 'Pause Physics Engine' : 'Resume Physics Engine'}
          >
            {isPhysicsActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#c5a059]" />}
          </button>

          {/* Reset View */}
          <button
            type="button"
            onClick={handleResetView}
            className="p-2 rounded-lg bg-[#151928] hover:bg-[#1f253d] border border-[#252c42] text-stone-300 hover:text-white transition-colors cursor-pointer"
            title="Reset Graph Center"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Fit Screen */}
          <button
            type="button"
            onClick={handleFitScreen}
            className="p-2 rounded-lg bg-[#151928] hover:bg-[#1f253d] border border-[#252c42] text-stone-300 hover:text-white transition-colors cursor-pointer"
            title="Fit Graph to Screen"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. SECONDARY DOMAIN FILTER TABS */}
      <div className="relative z-10 px-4 sm:px-6 py-2 bg-[#090a12]/90 border-b border-[#181d2e] flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
        <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Filter className="w-3 h-3 text-[#c5a059]" />
          <span>Domain:</span>
        </span>

        <button
          type="button"
          onClick={() => {
            soundManager.playChime();
            setSelectedDomain('all');
          }}
          className={`px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
            selectedDomain === 'all'
              ? 'bg-[#c5a059] text-black font-bold shadow-[0_0_12px_rgba(197,160,89,0.3)]'
              : 'bg-[#131624] text-stone-400 hover:text-stone-200 border border-[#21273c]'
          }`}
        >
          All Domains ({TRANSMISSION_EDGES.length})
        </button>

        {(Object.keys(DOMAIN_CONFIG) as InnovationDomain[]).map((domainKey) => {
          const cfg = DOMAIN_CONFIG[domainKey];
          const count = TRANSMISSION_EDGES.filter((e) => e.domain === domainKey).length;
          const isActive = selectedDomain === domainKey;

          return (
            <button
              key={domainKey}
              type="button"
              onClick={() => {
                soundManager.playChime();
                setSelectedDomain(isActive ? 'all' : domainKey);
              }}
              className={`px-2.5 py-1 rounded-md text-[11px] transition-all shrink-0 flex items-center gap-1.5 cursor-pointer border ${
                isActive
                  ? 'bg-[#1b2238] text-white border-[#3b476b] shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                  : 'bg-[#101320] text-stone-400 hover:text-stone-200 border-[#1c2236]'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: cfg.stroke, boxShadow: isActive ? `0 0 8px ${cfg.stroke}` : 'none' }}
              />
              <span>{cfg.label}</span>
              <span className="text-[10px] opacity-60 font-mono">({count})</span>
            </button>
          );
        })}
      </div>

      {/* 3. MAIN WORKSPACE: GRAPH CANVAS + SLIDE-OVER CHECKBOX DRAWER */}
      <div className="relative flex-1 w-full h-full overflow-hidden flex">
        {/* SVG Obsidian Knowledge Graph Canvas */}
        <div
          className="relative flex-1 h-full cursor-grab active:cursor-grabbing overflow-hidden"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Subtle Ambient Background Grid Dots */}
          <div
            id="graph-bg"
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(#3a4463 1px, transparent 1px), radial-gradient(#20273a 1px, transparent 1px)',
              backgroundSize: '36px 36px',
              backgroundPosition: '0 0, 18px 18px',
            }}
          />

          {/* Interactive SVG Renderer */}
          <svg
            ref={svgRef}
            className="w-full h-full absolute inset-0"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: '0 0',
            }}
          >
            {/* SVG Defs: Gradients, Filters, Markers */}
            <defs>
              {/* Outer Glow Filter for Obsidian Nodes */}
              <filter id="obsidian-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Edge Pulse Filter */}
              <filter id="edge-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Directional Arrowheads for each domain */}
              {(Object.keys(DOMAIN_CONFIG) as InnovationDomain[]).map((d) => (
                <marker
                  key={`arrow-${d}`}
                  id={`arrow-${d}`}
                  viewBox="0 0 10 10"
                  refX="18"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill={DOMAIN_CONFIG[d].stroke} opacity="0.85" />
                </marker>
              ))}
            </defs>

            {/* LINKS LAYER */}
            <g className="links-layer">
              {activeLinks.map((link) => {
                const sourceNode = nodesRef.current.get(link.source);
                const targetNode = nodesRef.current.get(link.target);
                if (!sourceNode || !targetNode) return null;

                const isDirectlyConnectedToHovered =
                  hoveredCivId && (link.source === hoveredCivId || link.target === hoveredCivId);
                const isEdgeHovered = hoveredEdgeId === link.id;

                // Dim links if a node is hovered and this link is not attached to it
                let opacity = 0.45;
                let strokeWidth = 1.6;
                if (hoveredCivId) {
                  if (isDirectlyConnectedToHovered) {
                    opacity = 0.95;
                    strokeWidth = 2.8;
                  } else {
                    opacity = 0.08;
                  }
                }
                if (isEdgeHovered) {
                  opacity = 1;
                  strokeWidth = 3.2;
                }

                // Curved Bezier calculation for organic Obsidian feel
                const dx = targetNode.x - sourceNode.x;
                const dy = targetNode.y - sourceNode.y;
                const dr = Math.sqrt(dx * dx + dy * dy);
                const sweep = link.id.length % 2 === 0 ? 0 : 1;
                const pathD = `M ${sourceNode.x} ${sourceNode.y} A ${dr * 1.3} ${dr * 1.3} 0 0 ${sweep} ${targetNode.x} ${targetNode.y}`;

                const domainCfg = DOMAIN_CONFIG[link.domain];

                return (
                  <g
                    key={link.id}
                    className="cursor-pointer transition-opacity duration-200"
                    onMouseEnter={() => setHoveredEdgeId(link.id)}
                    onMouseLeave={() => setHoveredEdgeId(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      soundManager.playChime();
                      setActiveEdgeDetail(link);
                    }}
                  >
                    {/* Thicker transparent hit target for easy clicking */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke="transparent"
                      strokeWidth="16"
                    />

                    {/* Visible Vector Path */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={domainCfg.stroke}
                      strokeWidth={strokeWidth}
                      strokeOpacity={opacity}
                      strokeDasharray={isDirectlyConnectedToHovered || isEdgeHovered ? '6 4' : 'none'}
                      markerEnd={`url(#arrow-${link.domain})`}
                      filter={isEdgeHovered || isDirectlyConnectedToHovered ? 'url(#edge-glow)' : undefined}
                    />

                    {/* Edge Label on Hover */}
                    {isEdgeHovered && (
                      <text
                        x={(sourceNode.x + targetNode.x) / 2}
                        y={(sourceNode.y + targetNode.y) / 2 - 12}
                        textAnchor="middle"
                        fill="#f8f5ee"
                        fontSize="11"
                        fontFamily="monospace"
                        className="pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                      >
                        {link.breakthrough.length > 32
                          ? `${link.breakthrough.slice(0, 32)}…`
                          : link.breakthrough}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>

            {/* NODES LAYER */}
            <g className="nodes-layer">
              {Array.from(nodesRef.current.values()).map((node) => {
                const isHovered = hoveredCivId === node.id;
                const isNeighbor = neighborIds?.has(node.id);
                const isDimmed = hoveredCivId && !isHovered && !isNeighbor;

                let opacity = 1;
                if (isDimmed) opacity = 0.12;

                const continentCfg = CONTINENT_COLORS[node.continent] || CONTINENT_COLORS['Global'];

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    className="cursor-pointer transition-opacity duration-200"
                    opacity={opacity}
                    onMouseDown={(e) => handleNodeMouseDown(node.id, e)}
                    onMouseEnter={() => setHoveredCivId(node.id)}
                    onMouseLeave={() => setHoveredCivId(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      soundManager.playChime();
                      setActiveModalCivId(node.id);
                    }}
                  >
                    {/* Outer Obsidian Aura Halo */}
                    <circle
                      r={node.radius + (isHovered ? 12 : 5)}
                      fill={continentCfg.glow}
                      filter="url(#obsidian-glow)"
                      className="transition-all duration-300"
                    />

                    {/* Outer Ring */}
                    <circle
                      r={node.radius + 2}
                      fill="none"
                      stroke={node.color}
                      strokeWidth={isHovered ? 2.5 : 1.4}
                      strokeDasharray={isHovered ? '4 2' : 'none'}
                      className="transition-all duration-200"
                    />

                    {/* Main Dark Node Body */}
                    <circle
                      r={node.radius}
                      fill="#0d101a"
                      stroke="#22293d"
                      strokeWidth="1.5"
                    />

                    {/* Inner Accent Ring */}
                    <circle
                      r={node.radius * 0.72}
                      fill={node.color}
                      fillOpacity={isHovered ? 0.35 : 0.18}
                    />

                    {/* Degree Badge Pill inside node */}
                    <text
                      x="0"
                      y="4"
                      textAnchor="middle"
                      fill="#f8f5ee"
                      fontSize="11"
                      fontWeight="bold"
                      fontFamily="monospace"
                      className="pointer-events-none"
                    >
                      {node.degree}
                    </text>

                    {/* Civilization Name Label underneath */}
                    <text
                      x="0"
                      y={node.radius + 16}
                      textAnchor="middle"
                      fill={isHovered ? '#ffffff' : '#d1d5db'}
                      fontSize={isHovered ? '13' : '11.5'}
                      fontWeight={isHovered ? '700' : '500'}
                      fontFamily="serif"
                      className="pointer-events-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                    >
                      {node.name.replace('Civilization', '').replace('Empire', '').trim()}
                    </text>

                    {/* Era Sublabel */}
                    <text
                      x="0"
                      y={node.radius + 29}
                      textAnchor="middle"
                      fill="#9ca3af"
                      fontSize="9.5"
                      fontFamily="monospace"
                      className="pointer-events-none opacity-80"
                    >
                      {node.era.split('–')[0]?.replace('c.', '').trim()}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* BOTTOM-LEFT CANVAS HUD: ZOOM & CENTER CONTROLS */}
          <div className="absolute bottom-5 left-5 z-20 flex flex-col gap-1.5 p-1.5 rounded-xl bg-[#0e101a]/90 backdrop-blur-md border border-[#21273c] shadow-xl">
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(2.8, z * 1.2))}
              className="p-2 rounded-lg hover:bg-[#1a1f33] text-stone-300 hover:text-white transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(0.4, z * 0.8))}
              className="p-2 rounded-lg hover:bg-[#1a1f33] text-stone-300 hover:text-white transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleFitScreen}
              className="p-2 rounded-lg hover:bg-[#1a1f33] text-stone-300 hover:text-white transition-colors cursor-pointer"
              title="Fit to Screen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* BOTTOM-RIGHT HUD: REAL-TIME TLDR HOVER PREVIEW CARD */}
          {hoveredCivObj && (
            <div className="absolute bottom-5 right-5 z-20 max-w-sm sm:max-w-md p-4 rounded-xl bg-[#0f121d]/95 backdrop-blur-md border border-[#2d3654] shadow-[0_15px_40px_rgba(0,0,0,0.85)] animate-in fade-in duration-150">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-wider flex items-center gap-1">
                  <Globe className="w-3 h-3 text-[#c5a059]" />
                  {hoveredCivObj.continent} · {hoveredCivObj.era}
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  Click node for Full Dossier
                </span>
              </div>
              <h4 className="text-sm font-serif font-bold text-[#f8f5ee] mb-1">
                {hoveredCivObj.name}
              </h4>
              <p className="text-xs text-stone-300 line-clamp-2 mb-2 font-light">
                {hoveredCivObj.tagline}
              </p>
              <div className="pt-2 border-t border-[#1f263c] flex items-center justify-between text-[11px] text-stone-400 font-mono">
                <span>Key: <strong className="text-stone-200">{hoveredCivObj.keyInnovation}</strong></span>
                <span className="text-[#c5a059]">{hoveredCivObj.achievements.length} Achievements</span>
              </div>
            </div>
          )}

          {/* HELPER TIP OVERLAY */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none hidden md:flex items-center gap-2 text-[11px] font-mono text-stone-400 bg-[#0c0e18]/80 px-3 py-1.5 rounded-lg border border-[#1b2034] backdrop-blur-sm">
            <Info className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Click any node for TLDR dossier · Drag nodes · Scroll to zoom</span>
          </div>
        </div>

        {/* 4. SLIDE-OVER CHECKBOX & FILTER DRAWER (Requirement #5) */}
        {isFilterDrawerOpen && (
          <div className="relative w-80 sm:w-88 h-full bg-[#0b0d16] border-l border-[#1f253a] flex flex-col z-30 shadow-2xl animate-in slide-in-from-right-4 duration-200">
            {/* Drawer Header */}
            <div className="p-4 bg-[#0f121e] border-b border-[#1c2236] flex items-center justify-between">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#c5a059] flex items-center gap-1.5 font-bold">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Civilization Inclusions</span>
                </h3>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  Include or exclude civilizations to isolate historical networks
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsFilterDrawerOpen(false)}
                className="p-1 rounded text-stone-400 hover:text-white hover:bg-[#1a2033] transition-colors cursor-pointer"
                aria-label="Close filter drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions Ribbon: Select All / Clear All */}
            <div className="p-3 bg-[#0c0e18] border-b border-[#181d2e] flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={selectAllCivs}
                className="flex-1 py-1.5 px-2.5 rounded bg-[#171c2e] hover:bg-[#202740] border border-[#262f4c] text-stone-200 hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <CheckSquare className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Select All (17)</span>
              </button>

              <button
                type="button"
                onClick={() => deselectAllExceptCurrent('sumer')}
                className="py-1.5 px-2.5 rounded bg-[#171c2e] hover:bg-[#202740] border border-[#262f4c] text-stone-300 hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Square className="w-3.5 h-3.5 text-stone-400" />
                <span>Clear</span>
              </button>
            </div>

            {/* Search Input Filter */}
            <div className="p-3 border-b border-[#181d2e]">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search civilization or innovation..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#121522] border border-[#23293e] rounded-lg text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#c5a059]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable Checkbox List by Continent */}
            <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
              {Object.keys(continentGroups).map((continent) => {
                const groupCivs = continentGroups[continent].filter((c) =>
                  searchedCivs.some((sc) => sc.id === c.id)
                );
                if (groupCivs.length === 0) return null;

                const continentColor = CONTINENT_COLORS[continent]?.text || '#c5a059';
                const allInContinentSelected = groupCivs.every((c) => selectedCivIds.has(c.id));

                return (
                  <div key={continent} className="space-y-1.5">
                    {/* Continent Header Toggle */}
                    <div className="flex items-center justify-between pb-1 border-b border-[#1b2033]">
                      <button
                        type="button"
                        onClick={() => toggleContinent(continent)}
                        className="font-mono text-[11px] uppercase tracking-wider font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                        style={{ color: continentColor }}
                      >
                        <Globe className="w-3 h-3" />
                        <span>{continent}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleContinent(continent)}
                        className="text-[10px] text-stone-400 hover:text-stone-200 font-mono cursor-pointer"
                      >
                        {allInContinentSelected ? 'Deselect' : 'Select'}
                      </button>
                    </div>

                    {/* Individual Civilization Checkboxes */}
                    <div className="space-y-1 pl-1">
                      {groupCivs.map((civ) => {
                        const isChecked = selectedCivIds.has(civ.id);
                        const deg = degrees[civ.id] || 0;

                        return (
                          <div
                            key={civ.id}
                            className={`p-2 rounded-lg flex items-center justify-between gap-2 transition-colors cursor-pointer border ${
                              isChecked
                                ? 'bg-[#121626] border-[#222942] hover:border-[#c5a059]/40'
                                : 'bg-[#0e101a] border-[#181d2e] opacity-50 hover:opacity-80'
                            }`}
                            onClick={() => toggleCivInclusion(civ.id)}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleCivInclusion(civ.id)}
                                onClick={(e) => e.stopPropagation()}
                                className="rounded bg-[#1a2034] border-[#2d3856] text-[#c5a059] focus:ring-0 cursor-pointer"
                              />
                              <div className="min-w-0">
                                <p className="font-serif font-medium text-stone-200 truncate text-[11.5px]">
                                  {civ.name}
                                </p>
                                <p className="text-[10px] text-stone-400 font-mono truncate">
                                  {civ.era}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-1 shrink-0">
                              <span className="text-[10px] font-mono text-cyan-400/80 bg-[#161d30] px-1.5 py-0.5 rounded">
                                {deg}v
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  soundManager.playChime();
                                  setActiveModalCivId(civ.id);
                                }}
                                className="p-1 rounded text-stone-400 hover:text-[#c5a059] hover:bg-[#1a2136] transition-colors"
                                title="Open TLDR Dossier"
                              >
                                <Info className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 5. MODAL 1: CIVILIZATION TLDR QUICK DOSSIER MODAL (Requirement #3, #6, #7) */}
      {activeCivModal && (
        <CivQuickDossierModal
          civilization={activeCivModal}
          allCivilizations={civilizations}
          transmissionEdges={TRANSMISSION_EDGES}
          onClose={() => setActiveModalCivId(null)}
          onNavigateToArchive={(id) => {
            setActiveModalCivId(null);
            onNavigateToArchive(id);
          }}
          onOpenCompare={(a, b) => {
            setActiveModalCivId(null);
            onOpenCompare(a, b);
          }}
          onSelectConnectedCiv={(id) => {
            setActiveModalCivId(id);
          }}
        />
      )}

      {/* 6. MODAL 2: TRANSMISSION VECTOR DETAIL CARD (Clicking an edge) */}
      {activeEdgeDetail && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setActiveEdgeDetail(null)}
        >
          <div
            className="relative w-full max-w-xl bg-[#0d0f18] border border-[#2d344d] rounded-xl shadow-2xl p-6 sm:p-7 text-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveEdgeDetail(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#191d2c] text-stone-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <Share2 className="w-3.5 h-3.5" />
              <span>Cross-Civilization Transmission Vector</span>
            </div>

            <div className="flex items-center gap-3 text-lg font-serif font-bold text-white mb-4">
              <span>{activeEdgeDetail.source.replace('_', ' ').toUpperCase()}</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              <span>{activeEdgeDetail.target.replace('_', ' ').toUpperCase()}</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#141826] border border-[#242b42] mb-4 space-y-2">
              <p className="text-xs font-mono uppercase text-[#c5a059]">Breakthrough Vector</p>
              <p className="text-sm font-semibold text-stone-100">{activeEdgeDetail.breakthrough}</p>
              <p className="text-xs text-stone-300 leading-relaxed">
                <strong className="text-stone-200 font-medium">Utilization:</strong> {activeEdgeDetail.howUtilizedAndAdapted}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono text-stone-400 border-t border-[#1e2438] pt-3">
              <div>
                <span className="block text-[10px] text-stone-500 uppercase">Historical Period</span>
                <span className="text-stone-200">{activeEdgeDetail.historicalPeriod}</span>
              </div>
              <div>
                <span className="block text-[10px] text-stone-500 uppercase">Transfer Vector</span>
                <span className="text-stone-200">{activeEdgeDetail.transmissionVector}</span>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2.5">
              <button
                type="button"
                onClick={() => {
                  const targetCiv = activeEdgeDetail.target;
                  setActiveEdgeDetail(null);
                  setActiveModalCivId(targetCiv);
                }}
                className="px-4 py-2 bg-[#c5a059] hover:bg-[#d8b56f] text-black text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Inspect Successor Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
