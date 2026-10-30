/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import {
  X,
  Compass,
  GitCompare,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Globe,
  Landmark,
  ShieldCheck,
  Cpu,
  BookOpen,
  Scale,
  Wheat,
  Share2
} from 'lucide-react';
import { Civilization } from '../types/civilization';
import { TransmissionEdge, InnovationDomain } from '../data/evolutionData';
import { soundManager } from '../utils/audioAmbience';

interface CivQuickDossierModalProps {
  civilization: Civilization;
  allCivilizations: Civilization[];
  transmissionEdges: TransmissionEdge[];
  onClose: () => void;
  onNavigateToArchive: (civId: string) => void;
  onOpenCompare: (civAId: string, civBId: string) => void;
  onSelectConnectedCiv: (civId: string) => void;
}

const DOMAIN_ICONS: Record<InnovationDomain, React.ReactNode> = {
  science_script: <BookOpen className="w-3.5 h-3.5 text-cyan-400" />,
  technology: <Cpu className="w-3.5 h-3.5 text-amber-400" />,
  philosophy_law: <Scale className="w-3.5 h-3.5 text-purple-400" />,
  agronomy_energy: <Wheat className="w-3.5 h-3.5 text-emerald-400" />,
  trade_statecraft: <Share2 className="w-3.5 h-3.5 text-rose-400" />,
};

const DOMAIN_LABELS: Record<InnovationDomain, string> = {
  science_script: 'Science & Script',
  technology: 'Technology & Metallurgy',
  philosophy_law: 'Philosophy & Law',
  agronomy_energy: 'Agronomy & Energy',
  trade_statecraft: 'Trade & Statecraft',
};

export const CivQuickDossierModal: React.FC<CivQuickDossierModalProps> = ({
  civilization,
  allCivilizations,
  transmissionEdges,
  onClose,
  onNavigateToArchive,
  onOpenCompare,
  onSelectConnectedCiv,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Compute incoming inheritances and outgoing legacies
  const incomingEdges = transmissionEdges.filter(
    (e) => e.successorCivId === civilization.id
  );
  const outgoingEdges = transmissionEdges.filter(
    (e) => e.earlierCivId === civilization.id
  );

  const lifespanYears = Math.abs(civilization.endBCE - civilization.startBCE);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="civ-dossier-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0d0f17] border border-[#2d3348] rounded-xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col text-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#141824] via-[#10131d] to-[#141824] border-b border-[#252b3d]">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-[#1a1f2e] text-stone-400 hover:text-white hover:bg-[#252d42] transition-colors cursor-pointer"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Meta Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#c5a059] uppercase tracking-wider mb-2">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#c5a059]" />
              {civilization.continent}
            </span>
            <span className="text-stone-600">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              {civilization.era}
            </span>
            <span className="text-stone-600">·</span>
            <span>~{lifespanYears.toLocaleString()} Years Lifespan</span>
          </div>

          {/* Title */}
          <h2
            id="civ-dossier-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#f8f5ee] tracking-tight mb-2"
          >
            {civilization.name}
          </h2>

          {/* Region and Tagline */}
          <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-2xl">
            {civilization.tagline}
          </p>

          {/* Key Innovation Callout */}
          <div className="mt-4 p-3 sm:p-4 rounded-lg bg-[#191d2c]/80 border border-[#c5a059]/30 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#c5a059]">
                Pivotal Civilizational Breakthrough
              </p>
              <p className="text-sm font-semibold text-stone-100">
                {civilization.keyInnovation}
              </p>
              <p className="text-xs text-stone-400 mt-1 italic">
                &ldquo;{civilization.curatorialQuote}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Dossier Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Section 1: Complete List of All Achievements */}
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-[#212638] pb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#c5a059] flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#c5a059]" />
                <span>Complete Historical Achievements</span>
              </h3>
              <span className="text-xs text-stone-400 font-mono">
                {civilization.achievements.length} Recorded Masterworks
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {civilization.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#121520] border border-[#202538] hover:border-[#c5a059]/40 transition-colors flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-[#1b2133] border border-[#2d3652] text-[#c5a059] font-mono text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1 text-xs sm:text-sm text-stone-200 leading-relaxed">
                    {achievement}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Evolutionary Interactions (Incoming & Outgoing) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Incoming: Inherited Roots */}
            <div className="p-4 rounded-xl bg-[#10131d] border border-[#22273a] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Inherited Roots (Earlier Influences)</span>
                  </h4>
                  <span className="text-[11px] font-mono text-stone-400">
                    {incomingEdges.length} Inflow Vectors
                  </span>
                </div>

                {incomingEdges.length === 0 ? (
                  <p className="text-xs text-stone-400 italic py-4">
                    Primary origin cradle / independent pristine emergence without earlier recorded ancestor transmissions.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {incomingEdges.map((edge) => (
                      <div
                        key={edge.id}
                        className="p-3 rounded-lg bg-[#151926] border border-[#22293d] text-xs space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => {
                              soundManager.playChime();
                              onSelectConnectedCiv(edge.earlierCivId);
                            }}
                            className="font-serif font-bold text-stone-200 hover:text-cyan-300 transition-colors cursor-pointer underline decoration-cyan-500/40 underline-offset-2"
                          >
                            {edge.earlierCivName}
                          </button>
                          <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-400/90">
                            {DOMAIN_ICONS[edge.domain]}
                            {DOMAIN_LABELS[edge.domain]}
                          </span>
                        </div>
                        <p className="text-stone-300 font-medium">
                          {edge.breakthrough}
                        </p>
                        <p className="text-stone-400 text-[11px] leading-relaxed">
                          <strong className="text-stone-300 font-medium">How Utilized:</strong> {edge.howUtilizedAndAdapted}
                        </p>
                        <div className="pt-1 text-[10px] text-stone-400 font-mono flex items-center justify-between">
                          <span>Vector: {edge.transmissionVector}</span>
                          <span>{edge.historicalPeriod}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Outgoing: Transmitted Legacies */}
            <div className="p-4 rounded-xl bg-[#10131d] border border-[#22273a] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>Transmitted Legacies (Successor Gifts)</span>
                  </h4>
                  <span className="text-[11px] font-mono text-stone-400">
                    {outgoingEdges.length} Outflow Vectors
                  </span>
                </div>

                {outgoingEdges.length === 0 ? (
                  <p className="text-xs text-stone-400 italic py-4">
                    Terminal epoch or modern digital horizon (contemporary living synthesis).
                  </p>
                ) : (
                  <div className="space-y-3">
                    {outgoingEdges.map((edge) => (
                      <div
                        key={edge.id}
                        className="p-3 rounded-lg bg-[#151926] border border-[#22293d] text-xs space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => {
                              soundManager.playChime();
                              onSelectConnectedCiv(edge.successorCivId);
                            }}
                            className="font-serif font-bold text-stone-200 hover:text-amber-300 transition-colors cursor-pointer underline decoration-amber-500/40 underline-offset-2"
                          >
                            ➔ {edge.successorCivName}
                          </button>
                          <span className="flex items-center gap-1 text-[10px] font-mono text-amber-400/90">
                            {DOMAIN_ICONS[edge.domain]}
                            {DOMAIN_LABELS[edge.domain]}
                          </span>
                        </div>
                        <p className="text-stone-300 font-medium">
                          {edge.breakthrough}
                        </p>
                        <p className="text-stone-400 text-[11px] leading-relaxed">
                          <strong className="text-stone-300 font-medium">Legacy Seed:</strong> {edge.howUtilizedAndAdapted}
                        </p>
                        <div className="pt-1 text-[10px] text-stone-400 font-mono flex items-center justify-between">
                          <span>Vector: {edge.transmissionVector}</span>
                          <span>{edge.historicalPeriod}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 3: Collapse & Evolutionary Continuity */}
          <div className="p-4 rounded-xl bg-[#11131c] border border-[#23283c]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#c5a059] flex items-center gap-2 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Evolutionary Transformation & Seeds of Continuity</span>
            </h4>
            <p className="text-xs font-semibold text-stone-200 mb-1">
              {civilization.collapse_or_transformation.type}
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {civilization.collapse_or_transformation.detailed_analysis}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 bg-[#090b12] border-t border-[#202538] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-400 font-mono">
            Civilization ID: <span className="text-stone-300">{civilization.id}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                soundManager.playChime();
                onClose();
                onOpenCompare(civilization.id, allCivilizations[0].id === civilization.id ? allCivilizations[1].id : allCivilizations[0].id);
              }}
              className="px-4 py-2 bg-[#171a26] hover:bg-[#202536] text-stone-200 text-xs font-medium rounded-lg border border-[#2d3348] flex items-center gap-2 cursor-pointer transition-colors"
            >
              <GitCompare className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Compare in Radar</span>
            </button>

            <button
              type="button"
              onClick={() => {
                soundManager.playChime();
                onClose();
                onNavigateToArchive(civilization.id);
              }}
              className="px-4 py-2 bg-[#c5a059] hover:bg-[#d8b56f] text-black text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center gap-2 cursor-pointer transition-colors shadow-[0_0_20px_rgba(197,160,89,0.25)]"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>View Full Exhibition Archive</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
