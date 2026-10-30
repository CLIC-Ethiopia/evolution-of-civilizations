/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  ArrowRight,
  GitBranch,
  Layers,
  Sparkles,
  Search,
  Filter,
  Info,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { Civilization } from '../../types/civilization';
import {
  TRANSMISSION_EDGES,
  CONVERGENT_CASES,
  InnovationDomain,
  TransmissionEdge,
  ConvergentEvolutionCase
} from '../../data/evolutionData';

interface LineageGraphModuleProps {
  civilizations: Civilization[];
  onSelectCivilization: (id: string) => void;
  onOpenCompare: (civAId: string, civBId: string) => void;
}

export const LineageGraphModule: React.FC<LineageGraphModuleProps> = ({
  civilizations,
  onSelectCivilization,
  onOpenCompare
}) => {
  const [selectedCivId, setSelectedCivId] = useState<string>('classical_greece');
  const [selectedDomain, setSelectedDomain] = useState<InnovationDomain | 'all'>('all');
  const [activeSubTab, setActiveSubTab] = useState<'network' | 'convergent'>('network');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEdge, setSelectedEdge] = useState<TransmissionEdge | null>(null);

  const domainLabels: Record<InnovationDomain | 'all', { label: string; color: string }> = {
    all: { label: 'All Domains', color: 'bg-stone-800 text-stone-200 border-stone-600' },
    science_script: { label: 'Script, Math & Science', color: 'bg-blue-950/70 text-blue-300 border-blue-700/50' },
    philosophy_law: { label: 'Philosophy, Law & State', color: 'bg-purple-950/70 text-purple-300 border-purple-700/50' },
    technology: { label: 'Technology & Metallurgy', color: 'bg-amber-950/70 text-amber-300 border-amber-700/50' },
    agronomy_energy: { label: 'Agronomy & Hydraulics', color: 'bg-emerald-950/70 text-emerald-300 border-emerald-700/50' },
    trade_statecraft: { label: 'Trade & Imperial Relays', color: 'bg-rose-950/70 text-rose-300 border-rose-700/50' }
  };

  // Filter edges based on selected domain and search query
  const filteredEdges = useMemo(() => {
    return TRANSMISSION_EDGES.filter((edge) => {
      const matchDomain = selectedDomain === 'all' || edge.domain === selectedDomain;
      const matchSearch =
        searchQuery === '' ||
        edge.earlierCivName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        edge.successorCivName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        edge.breakthrough.toLowerCase().includes(searchQuery.toLowerCase()) ||
        edge.howUtilizedAndAdapted.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDomain && matchSearch;
    });
  }, [selectedDomain, searchQuery]);

  // Edges related to selected focal civilization
  const focalAncestors = useMemo(() => {
    return TRANSMISSION_EDGES.filter((e) => e.successorCivId === selectedCivId);
  }, [selectedCivId]);

  const focalProgeny = useMemo(() => {
    return TRANSMISSION_EDGES.filter((e) => e.earlierCivId === selectedCivId);
  }, [selectedCivId]);

  const activeCiv = civilizations.find((c) => c.id === selectedCivId) || civilizations[0];

  return (
    <div className="space-y-8">
      {/* Sub-Header & Controls */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-[#242838] pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] uppercase tracking-wider mb-2">
            <GitBranch className="w-3.5 h-3.5" />
            Module A: The Lineage & Transmission Network
          </div>
          <h2 className="text-xl lg:text-2xl font-serif font-bold text-stone-100">
            Civilizational Inheritance & Transmitted Breakthroughs
          </h2>
          <p className="text-sm text-stone-400 mt-1 max-w-2xl">
            Analyze which earlier civilizations contributed foundational knowledge to successor empires,
            how the new civilizations adapted those breakthroughs, and via what historical vectors the transfer occurred.
          </p>
        </div>

        {/* View Toggle: Directed Transmission vs. Convergent Evolution */}
        <div className="flex items-center p-1 bg-[#12141e] border border-[#262c3f] rounded-lg shrink-0">
          <button
            type="button"
            onClick={() => setActiveSubTab('network')}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
              activeSubTab === 'network'
                ? 'bg-[#c5a059] text-stone-950 font-bold shadow'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            Transmission Network
          </button>
          <button
            type="button"
            onClick={() => setActiveSubTab('convergent')}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
              activeSubTab === 'convergent'
                ? 'bg-[#c5a059] text-stone-950 font-bold shadow'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            Convergent Evolution
          </button>
        </div>
      </div>

      {activeSubTab === 'network' ? (
        <>
          {/* Domain Filters & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#11131c] p-3.5 rounded-lg border border-[#212638]">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-stone-400 flex items-center gap-1 mr-2 font-medium">
                <Filter className="w-3.5 h-3.5 text-[#c5a059]" /> Domain:
              </span>
              {(Object.keys(domainLabels) as (InnovationDomain | 'all')[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedDomain(key)}
                  className={`text-xs px-2.5 py-1 rounded transition-all border cursor-pointer ${
                    selectedDomain === key
                      ? 'border-[#c5a059] bg-[#c5a059]/20 text-[#c5a059] font-bold'
                      : 'border-stone-800 bg-[#161824] text-stone-400 hover:text-stone-200 hover:border-stone-700'
                  }`}
                >
                  {domainLabels[key].label}
                </button>
              ))}
            </div>

            <div className="relative min-w-[220px]">
              <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search breakthrough or vector..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#161824] border border-[#262c3e] rounded pl-8 pr-3 py-1.5 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#c5a059]"
              />
            </div>
          </div>

          {/* Focal Node Inspector: Select civilization to examine Ancestral Roots and Successor Offshoots */}
          <div className="bg-[#12141e] border border-[#23283a] rounded-xl p-5 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#212638] pb-4 mb-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c5a059] flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Civilizational Node Inspector
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  Click any civilization to inspect its inherited foundations (roots) and transmitted gifts (offshoots).
                </p>
              </div>

              {/* Horizontal civilization selection chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                {civilizations.map((civ) => (
                  <button
                    key={civ.id}
                    type="button"
                    onClick={() => setSelectedCivId(civ.id)}
                    className={`text-xs px-3 py-1.5 rounded whitespace-nowrap transition-all border cursor-pointer ${
                      selectedCivId === civ.id
                        ? 'bg-[#c5a059] text-stone-950 font-bold border-[#c5a059] shadow-sm'
                        : 'bg-[#181a26] text-stone-300 border-[#282d40] hover:border-stone-500 hover:text-white'
                    }`}
                  >
                    {civ.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Split View: Ancestral Roots (Incoming) vs. Civilizational Offshoots (Outgoing) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: Ancestral Roots */}
              <div className="bg-[#0e1017] border border-[#1e2334] rounded-lg p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#1b1f2e] pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                      <h4 className="text-sm font-bold text-stone-100">
                        Ancestral Foundations of {activeCiv.name}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/60 text-blue-400 border border-blue-900/60">
                      {focalAncestors.length} Incoming Transmissions
                    </span>
                  </div>

                  {focalAncestors.length === 0 ? (
                    <div className="text-xs text-stone-400 py-6 text-center italic bg-[#131520]/50 rounded border border-dashed border-[#23283a]">
                      Primordial cradle civilization. Its earliest breakthroughs arose primarily through indigenous innovation and river-alluvial adaptation.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {focalAncestors.map((edge) => (
                        <div
                          key={edge.id}
                          onClick={() => setSelectedEdge(edge)}
                          className="p-3 rounded bg-[#131622] border border-[#23283c] hover:border-blue-500/50 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
                            <span className="font-bold text-blue-400 flex items-center gap-1">
                              From: {edge.earlierCivName}
                            </span>
                            <span className="text-[10px] text-stone-400 font-mono">
                              {edge.historicalPeriod}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-stone-200 group-hover:text-blue-300 transition-colors">
                            {edge.breakthrough}
                          </div>
                          <p className="text-[11px] text-stone-400 mt-1.5 leading-relaxed line-clamp-2">
                            <span className="text-stone-300 font-medium">How {activeCiv.name} adapted it: </span>
                            {edge.howUtilizedAndAdapted}
                          </p>
                          <div className="mt-2 text-[10px] text-stone-400 flex items-center gap-1.5 pt-1.5 border-t border-[#1b1f2e]">
                            <span className="text-stone-300 font-mono">Vector:</span> {edge.transmissionVector}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#1b1f2e] flex items-center justify-between text-xs text-stone-400">
                  <span>Selected: <strong className="text-stone-200">{activeCiv.name}</strong></span>
                  <button
                    type="button"
                    onClick={() => onSelectCivilization(activeCiv.id)}
                    className="text-[#c5a059] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                  >
                    View in Archive <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Right Column: Civilizational Offshoots */}
              <div className="bg-[#0e1017] border border-[#1e2334] rounded-lg p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#1b1f2e] pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      <h4 className="text-sm font-bold text-stone-100">
                        Transmitted Legacy of {activeCiv.name}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-400 border border-amber-900/60">
                      {focalProgeny.length} Outgoing Legacies
                    </span>
                  </div>

                  {focalProgeny.length === 0 ? (
                    <div className="text-xs text-stone-400 py-6 text-center italic bg-[#131520]/50 rounded border border-dashed border-[#23283a]">
                      Culminating era or autonomous lineage whose innovations are currently being integrated into global successors.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {focalProgeny.map((edge) => (
                        <div
                          key={edge.id}
                          onClick={() => setSelectedEdge(edge)}
                          className="p-3 rounded bg-[#131622] border border-[#23283c] hover:border-amber-500/50 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
                            <span className="font-bold text-amber-400 flex items-center gap-1">
                              To: {edge.successorCivName}
                            </span>
                            <span className="text-[10px] text-stone-400 font-mono">
                              {edge.historicalPeriod}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-stone-200 group-hover:text-amber-300 transition-colors">
                            {edge.breakthrough}
                          </div>
                          <p className="text-[11px] text-stone-400 mt-1.5 leading-relaxed line-clamp-2">
                            <span className="text-stone-300 font-medium">How {edge.successorCivName} scaled it: </span>
                            {edge.howUtilizedAndAdapted}
                          </p>
                          <div className="mt-2 text-[10px] text-stone-400 flex items-center gap-1.5 pt-1.5 border-t border-[#1b1f2e]">
                            <span className="text-stone-300 font-mono">Vector:</span> {edge.transmissionVector}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#1b1f2e] flex items-center justify-between text-xs text-stone-400">
                  <span>Region: <strong className="text-stone-200">{activeCiv.region}</strong></span>
                  <span className="font-mono text-[11px] text-[#c5a059]">{activeCiv.periodLabel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Transmission Matrix Table */}
          <div className="bg-[#10121b] border border-[#202537] rounded-xl overflow-hidden shadow-lg">
            <div className="px-5 py-4 border-b border-[#202537] flex items-center justify-between">
              <div>
                <h3 className="text-sm font-serif font-bold text-stone-100 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#c5a059]" />
                  Global Transmission Ledger: Breakthroughs, Adaptations & Vectors
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  Showing {filteredEdges.length} historical knowledge transmissions across the civilized world.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#141724] text-stone-400 border-b border-[#24293c] text-[11px] uppercase tracking-wider font-semibold">
                    <th className="py-3 px-4">Earlier Foundation</th>
                    <th className="py-3 px-4">Transmitted Breakthrough</th>
                    <th className="py-3 px-4">Successor Recipient</th>
                    <th className="py-3 px-4">Utilization & Scaling</th>
                    <th className="py-3 px-4">Transmission Vector</th>
                    <th className="py-3 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1c2032] text-stone-300">
                  {filteredEdges.map((edge) => (
                    <tr
                      key={edge.id}
                      className="hover:bg-[#151826] transition-colors"
                    >
                      <td className="py-3.5 px-4 font-semibold text-stone-100 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => setSelectedCivId(edge.earlierCivId)}
                          className="hover:text-[#c5a059] text-left cursor-pointer transition-colors"
                        >
                          {edge.earlierCivName}
                        </button>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-stone-200">
                          {edge.breakthrough}
                        </div>
                        <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded bg-[#181b28] text-stone-400 border border-[#262c3e]">
                          {domainLabels[edge.domain].label}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-stone-100 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => setSelectedCivId(edge.successorCivId)}
                          className="hover:text-[#c5a059] text-left cursor-pointer transition-colors"
                        >
                          {edge.successorCivName}
                        </button>
                      </td>
                      <td className="py-3.5 px-4 max-w-xs text-stone-300 leading-relaxed">
                        {edge.howUtilizedAndAdapted}
                      </td>
                      <td className="py-3.5 px-4 max-w-xs text-stone-400 text-[11px] leading-relaxed">
                        {edge.transmissionVector}
                      </td>
                      <td className="py-3.5 px-3 text-right whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => onOpenCompare(edge.earlierCivId, edge.successorCivId)}
                          className="px-2.5 py-1 rounded bg-[#1b1f2e] hover:bg-[#c5a059] hover:text-stone-950 text-stone-300 text-[11px] font-semibold transition-all border border-[#2b3147] cursor-pointer"
                        >
                          Compare Both
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        /* CONVERGENT EVOLUTION VIEW */
        <div className="space-y-6">
          <div className="bg-[#12141e] border border-[#23283a] rounded-xl p-5 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/20 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-stone-100">
                  The Principle of Convergent Evolution in Human History
                </h3>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  Just as dolphins and sharks independently evolved hydrodynamic torpedo bodies due to the physical laws of water,
                  human civilizations separated by vast oceans and millennia independently developed identical solutions (writing, zero, stepped pyramids, agriculture)
                  when confronted with identical physical, structural, or demographic constraints.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {CONVERGENT_CASES.map((cCase) => (
              <div
                key={cCase.id}
                className="bg-[#10121b] border border-[#222739] rounded-xl p-6 shadow-md space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1e2334] pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059] font-bold">
                      {domainLabels[cCase.domain].label}
                    </span>
                    <h4 className="text-base font-serif font-bold text-stone-100 mt-0.5">
                      {cCase.title}
                    </h4>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-stone-900 text-stone-400 border border-stone-800">
                    {cCase.independentCultures.length} Independent Isolated Inventions
                  </span>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {cCase.description}
                </p>

                {/* Independent Manifestations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {cCase.independentCultures.map((manifest, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[#141724] border border-[#23283c] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <strong className="text-stone-100">{manifest.civName}</strong>
                          <span className="text-[10px] text-[#c5a059] font-mono">{manifest.era}</span>
                        </div>
                        <p className="text-[11px] text-stone-400 mt-2 leading-relaxed">
                          {manifest.manifestation}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-[#1d2233] text-[10px] text-stone-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Zero cross-continental contact</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Underlying Systems Insight */}
                <div className="p-3.5 rounded-lg bg-[#171a27] border-l-4 border-l-[#c5a059] border border-[#262c3f] text-xs text-stone-300">
                  <div className="font-semibold text-[#c5a059] text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> Evolutionary Epistemology Insight:
                  </div>
                  {cCase.underlyingInsight}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Edge Modal / Detail Drawer if clicked */}
      {selectedEdge && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedEdge(null)}
        >
          <div
            className="bg-[#12141e] border border-[#2d344b] rounded-xl max-w-xl w-full p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#212638] pb-3">
              <div>
                <span className="text-[11px] font-mono text-[#c5a059] font-semibold uppercase">
                  Direct Lineage Transmission
                </span>
                <h3 className="text-base font-serif font-bold text-stone-100 mt-0.5">
                  {selectedEdge.earlierCivName} <ArrowRight className="inline w-4 h-4 mx-1 text-stone-400" /> {selectedEdge.successorCivName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEdge(null)}
                className="text-stone-400 hover:text-white text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-stone-400 font-mono text-[10px] uppercase">Breakthrough Transmitted:</span>
                <p className="font-bold text-stone-100 text-sm mt-0.5">{selectedEdge.breakthrough}</p>
              </div>

              <div className="p-3 rounded bg-[#0d0f17] border border-[#1e2334]">
                <span className="text-stone-400 font-mono text-[10px] uppercase">How the Successor Utilized & Scaled It:</span>
                <p className="text-stone-300 mt-1 leading-relaxed">{selectedEdge.howUtilizedAndAdapted}</p>
              </div>

              <div className="p-3 rounded bg-[#0d0f17] border border-[#1e2334]">
                <span className="text-stone-400 font-mono text-[10px] uppercase">Historical Transmission Vector:</span>
                <p className="text-stone-300 mt-1 leading-relaxed">{selectedEdge.transmissionVector}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#212638] text-[11px] text-stone-400">
                <span>Era: <strong className="text-stone-200">{selectedEdge.historicalPeriod}</strong></span>
                <button
                  type="button"
                  onClick={() => {
                    onOpenCompare(selectedEdge.earlierCivId, selectedEdge.successorCivId);
                    setSelectedEdge(null);
                  }}
                  className="px-3 py-1.5 rounded bg-[#c5a059] text-stone-950 font-bold hover:bg-[#d8b56f] transition-all cursor-pointer"
                >
                  Open in Compare Matrix
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
