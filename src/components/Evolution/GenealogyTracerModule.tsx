/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  GitCommit,
  ArrowRight,
  Sparkles,
  ShieldAlert,
  ChevronRight,
  Layers,
  Cpu,
  BookOpen,
  Scale,
  Flame,
  CheckCircle2
} from 'lucide-react';
import {
  INNOVATION_GENEALOGIES,
  InnovationGenealogy,
  InnovationGenealogyStep
} from '../../data/evolutionData';

interface GenealogyTracerModuleProps {
  onSelectCivilization: (id: string) => void;
}

export const GenealogyTracerModule: React.FC<GenealogyTracerModuleProps> = ({
  onSelectCivilization
}) => {
  const [selectedGenealogyId, setSelectedGenealogyId] = useState<string>(
    INNOVATION_GENEALOGIES[0].id
  );
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeGenealogy: InnovationGenealogy =
    INNOVATION_GENEALOGIES.find((g) => g.id === selectedGenealogyId) ||
    INNOVATION_GENEALOGIES[0];

  const currentStep: InnovationGenealogyStep =
    activeGenealogy.steps[activeStepIndex] || activeGenealogy.steps[0];

  const getGenealogyIcon = (id: string) => {
    switch (id) {
      case 'gen-script':
        return <BookOpen className="w-4 h-4" />;
      case 'gen-zero':
        return <Cpu className="w-4 h-4" />;
      case 'gen-metallurgy':
        return <Flame className="w-4 h-4" />;
      case 'gen-law':
        return <Scale className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-[#242838] pb-5">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] uppercase tracking-wider mb-2">
          <GitCommit className="w-3.5 h-3.5" />
          Module B: Millennial Innovation Genealogies
        </div>
        <h2 className="text-xl lg:text-2xl font-serif font-bold text-stone-100">
          The Evolutionary Threads of Human Civilization
        </h2>
        <p className="text-sm text-stone-400 mt-1 max-w-3xl">
          Trace how a single fundamental technological or conceptual breakthrough evolved across millennia,
          passing from civilization to civilization, breaking systemic bottlenecks at each evolutionary jump.
        </p>
      </div>

      {/* Innovation Genealogies Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {INNOVATION_GENEALOGIES.map((gen) => {
          const isSelected = gen.id === activeGenealogy.id;
          return (
            <button
              key={gen.id}
              type="button"
              onClick={() => {
                setSelectedGenealogyId(gen.id);
                setActiveStepIndex(0);
              }}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#181c2b] border-[#c5a059] shadow-lg shadow-[#c5a059]/5'
                  : 'bg-[#10121b] border-[#222739] hover:border-stone-600 hover:bg-[#141724]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span
                    className={`p-1.5 rounded ${
                      isSelected
                        ? 'bg-[#c5a059] text-stone-950'
                        : 'bg-[#1b1f2e] text-stone-400'
                    }`}
                  >
                    {getGenealogyIcon(gen.id)}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">
                    {gen.steps.length} Evolutionary Stages
                  </span>
                </div>
                <h3
                  className={`text-sm font-bold font-serif leading-snug ${
                    isSelected ? 'text-[#c5a059]' : 'text-stone-200'
                  }`}
                >
                  {gen.title}
                </h3>
              </div>
              <div className="mt-3 text-[11px] text-stone-400 font-mono">
                {gen.epochSpan}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Genealogy Banner */}
      <div className="bg-[#12141e] border border-[#23283a] rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#1f2436] pb-4 mb-4">
          <div>
            <h3 className="text-lg font-serif font-bold text-stone-100">
              {activeGenealogy.title}
            </h3>
            <p className="text-xs text-[#c5a059] font-medium mt-0.5">
              {activeGenealogy.subtitle}
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded bg-[#181b28] text-stone-300 border border-[#272d3f] shrink-0">
            {activeGenealogy.epochSpan}
          </span>
        </div>
        <p className="text-xs text-stone-300 leading-relaxed max-w-4xl">
          {activeGenealogy.summary}
        </p>
      </div>

      {/* Interactive Evolutionary Stepper Timeline */}
      <div className="bg-[#0f111a] border border-[#212638] rounded-xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between text-xs border-b border-[#1b1f2e] pb-3">
          <span className="font-semibold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#c5a059]" />
            Chronological Stepper (Click stage to examine breakdown)
          </span>
          <span className="text-stone-400 font-mono">
            Stage {activeStepIndex + 1} of {activeGenealogy.steps.length}
          </span>
        </div>

        {/* Step Progression Buttons Bar */}
        <div className="relative flex items-center justify-between overflow-x-auto pb-4 pt-2">
          {/* Connecting track line */}
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-[#23283a] -z-0" />

          {activeGenealogy.steps.map((step, idx) => {
            const isCurrent = idx === activeStepIndex;
            const isPast = idx < activeStepIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className="relative z-10 flex flex-col items-center group cursor-pointer px-2 min-w-[120px]"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    isCurrent
                      ? 'bg-[#c5a059] text-stone-950 scale-110 shadow-lg shadow-[#c5a059]/30 ring-4 ring-[#c5a059]/20'
                      : isPast
                      ? 'bg-[#1b2234] text-[#c5a059] border border-[#c5a059]/40'
                      : 'bg-[#141724] text-stone-400 border border-[#252a3c] group-hover:border-stone-500'
                  }`}
                >
                  {step.stepNumber}
                </div>
                <span className="mt-2 text-[11px] font-mono font-medium text-stone-300 group-hover:text-white transition-colors">
                  {step.yearLabel}
                </span>
                <span className="text-[10px] text-stone-400 truncate max-w-[110px] text-center">
                  {step.civName.split('(')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Focal Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#131623] border border-[#242a3e] rounded-xl p-6">
          {/* Left Column: Stage Core Identity */}
          <div className="space-y-4 lg:border-r border-[#212638] lg:pr-6">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#c5a059]/20 border border-[#c5a059]/40 text-[#c5a059] text-[11px] font-mono font-bold">
                Stage {currentStep.stepNumber} · {currentStep.yearLabel}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                Originating Civilization:
              </span>
              <h4 className="text-base font-bold text-stone-100 mt-0.5 flex items-center gap-1.5">
                {currentStep.civName}
              </h4>
            </div>

            <div className="p-3 rounded-lg bg-[#0d0f17] border border-[#1c2030]">
              <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-wider font-semibold">
                Breakthrough Name:
              </span>
              <p className="text-sm font-bold text-stone-100 mt-1">
                {currentStep.breakthroughTitle}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectCivilization(currentStep.civId)}
              className="w-full text-xs py-2 px-3 rounded bg-[#1c2032] hover:bg-[#252b42] text-stone-300 hover:text-white font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#2a3148]"
            >
              Explore {currentStep.civName.split('(')[0]} Archive
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Center Column: The Bottleneck Broken & Mechanism */}
          <div className="space-y-4 lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Bottleneck Box */}
              <div className="p-4 rounded-lg bg-[#181116] border border-rose-900/40 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4 text-rose-400" />
                  The Systemic Bottleneck Broken
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {currentStep.bottleneckBroken}
                </p>
              </div>

              {/* Physical / Intellectual Mechanism */}
              <div className="p-4 rounded-lg bg-[#11191a] border border-cyan-900/40 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Mechanism of Action
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {currentStep.mechanism}
                </p>
              </div>
            </div>

            {/* Transmission to the Next Stage */}
            <div className="p-4 rounded-lg bg-[#0f121d] border border-[#242b3e] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  Transmitted Legacy & Handoff to Next Epoch
                </span>
                {activeStepIndex < activeGenealogy.steps.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((prev) => prev + 1)}
                    className="text-[11px] text-[#c5a059] hover:underline font-medium cursor-pointer"
                  >
                    Next Stage $\rightarrow$
                  </button>
                )}
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {currentStep.transmissionToNext}
              </p>
            </div>
          </div>
        </div>

        {/* Evolutionary Verdict Bottom Strip */}
        <div className="p-4 rounded-lg bg-[#141724] border border-[#272d42] flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
          <div className="text-xs text-stone-300 leading-relaxed">
            <strong className="text-[#c5a059] font-serif">Macro-Evolutionary Verdict: </strong>
            {activeGenealogy.evolutionaryVerdict}
          </div>
        </div>
      </div>
    </div>
  );
};
