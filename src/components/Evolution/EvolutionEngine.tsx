/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  GitBranch,
  GitCommit,
  ShieldAlert,
  Compass,
  TrendingDown,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Civilization } from '../../types/civilization';
import { LineageGraphModule } from './LineageGraphModule';
import { GenealogyTracerModule } from './GenealogyTracerModule';
import { CollapseResilienceModule } from './CollapseResilienceModule';
import { TransmissionVectorsModule } from './TransmissionVectorsModule';
import { CliodynamicsRadarModule } from './CliodynamicsRadarModule';
import {
  TRANSMISSION_EDGES,
  INNOVATION_GENEALOGIES,
  COLLAPSE_CASE_STUDIES,
  TRANSMISSION_VECTORS
} from '../../data/evolutionData';

interface EvolutionEngineProps {
  civilizations: Civilization[];
  onSelectCivilization: (id: string) => void;
  onOpenCompare: (civAId: string, civBId: string) => void;
}

export type EvolutionSection =
  | 'lineage_graph'
  | 'innovation_genealogies'
  | 'collapse_adaptation'
  | 'transmission_vectors'
  | 'cliodynamics';

export const EvolutionEngine: React.FC<EvolutionEngineProps> = ({
  civilizations,
  onSelectCivilization,
  onOpenCompare
}) => {
  const [activeSection, setActiveSection] = useState<EvolutionSection>('lineage_graph');

  const navigationSections: {
    id: EvolutionSection;
    title: string;
    shortLabel: string;
    icon: React.ReactNode;
    badge: string;
  }[] = [
    {
      id: 'lineage_graph',
      title: 'Inheritance & Transmission Network',
      shortLabel: 'Lineage Web',
      icon: <GitBranch className="w-4 h-4" />,
      badge: `${TRANSMISSION_EDGES.length} Transmissions`
    },
    {
      id: 'innovation_genealogies',
      title: 'Genealogy of Innovations',
      shortLabel: 'Innovation Threads',
      icon: <GitCommit className="w-4 h-4" />,
      badge: `${INNOVATION_GENEALOGIES.length} Threads`
    },
    {
      id: 'collapse_adaptation',
      title: 'Collapse & Human Adaptation',
      shortLabel: 'Resilience Matrix',
      icon: <ShieldAlert className="w-4 h-4" />,
      badge: `${COLLAPSE_CASE_STUDIES.length} Case Studies`
    },
    {
      id: 'transmission_vectors',
      title: 'Historical Transmission Vectors',
      shortLabel: 'Conduits & Routes',
      icon: <Compass className="w-4 h-4" />,
      badge: `${TRANSMISSION_VECTORS.length} Vectors`
    },
    {
      id: 'cliodynamics',
      title: 'Cliodynamics & Complexity Science',
      shortLabel: 'Complexity Laws',
      icon: <TrendingDown className="w-4 h-4" />,
      badge: 'Tainter & Turchin'
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0a0b0f] text-[#ded9cd] min-h-[calc(100vh-61px)]">
      {/* Hero Header Strip for Evolution Wing */}
      <section className="bg-gradient-to-b from-[#12141f] via-[#0e1017] to-[#0a0b0f] border-b border-[#212638] px-4 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/40 text-[#c5a059] text-[11px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              The Evolutionary Web of Civilization
            </span>
            <span className="text-stone-400 text-xs hidden sm:inline">
              Macro-Historical Systems Analysis & Cultural Epigenetics
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-2xl lg:text-4xl font-serif font-bold text-stone-100 tracking-tight">
                The Evolutionary Metabolism of Human History
              </h1>
              <p className="text-sm text-stone-300 mt-2 max-w-3xl leading-relaxed">
                Beyond cataloging static empires, this analytical laboratory traces the continuous transmission
                of knowledge, energy capture, and institutional adaptations across 6,500 years of civilization rise,
                collapse, and rebirth.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
              <div className="px-3.5 py-2.5 rounded-lg bg-[#141724] border border-[#23283c]">
                <div className="text-[10px] font-mono text-stone-400 uppercase">Civilizations</div>
                <div className="text-lg font-serif font-bold text-[#c5a059]">
                  {civilizations.length}
                </div>
              </div>
              <div className="px-3.5 py-2.5 rounded-lg bg-[#141724] border border-[#23283c]">
                <div className="text-[10px] font-mono text-stone-400 uppercase">Transmissions</div>
                <div className="text-lg font-serif font-bold text-blue-400">
                  {TRANSMISSION_EDGES.length}
                </div>
              </div>
              <div className="px-3.5 py-2.5 rounded-lg bg-[#141724] border border-[#23283c]">
                <div className="text-[10px] font-mono text-stone-400 uppercase">Genealogies</div>
                <div className="text-lg font-serif font-bold text-purple-400">
                  {INNOVATION_GENEALOGIES.length}
                </div>
              </div>
              <div className="px-3.5 py-2.5 rounded-lg bg-[#141724] border border-[#23283c]">
                <div className="text-[10px] font-mono text-stone-400 uppercase">Collapse Studies</div>
                <div className="text-lg font-serif font-bold text-rose-400">
                  {COLLAPSE_CASE_STUDIES.length}
                </div>
              </div>
            </div>
          </div>

          {/* Section Navigation Pills */}
          <div className="pt-4 flex items-center gap-2 overflow-x-auto pb-1">
            {navigationSections.map((sec) => {
              const isCurrent = sec.id === activeSection;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setActiveSection(sec.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                    isCurrent
                      ? 'bg-[#c5a059] text-stone-950 font-bold border-[#c5a059] shadow-md shadow-[#c5a059]/10'
                      : 'bg-[#121522] text-stone-300 border-[#23283c] hover:border-stone-500 hover:text-white'
                  }`}
                >
                  <span className={isCurrent ? 'text-stone-950' : 'text-[#c5a059]'}>
                    {sec.icon}
                  </span>
                  <span>{sec.title}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isCurrent
                        ? 'bg-stone-950/20 text-stone-900 font-bold'
                        : 'bg-[#1a1e2f] text-stone-400'
                    }`}
                  >
                    {sec.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Dynamic Viewport */}
      <section className="flex-1 px-4 lg:px-12 py-8 max-w-7xl mx-auto w-full">
        {activeSection === 'lineage_graph' && (
          <LineageGraphModule
            civilizations={civilizations}
            onSelectCivilization={onSelectCivilization}
            onOpenCompare={onOpenCompare}
          />
        )}

        {activeSection === 'innovation_genealogies' && (
          <GenealogyTracerModule onSelectCivilization={onSelectCivilization} />
        )}

        {activeSection === 'collapse_adaptation' && (
          <CollapseResilienceModule />
        )}

        {activeSection === 'transmission_vectors' && (
          <TransmissionVectorsModule />
        )}

        {activeSection === 'cliodynamics' && (
          <CliodynamicsRadarModule />
        )}
      </section>
    </div>
  );
};
