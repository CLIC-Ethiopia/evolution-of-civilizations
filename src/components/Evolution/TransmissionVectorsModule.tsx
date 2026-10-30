/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Compass,
  BookOpen,
  Route,
  Swords,
  Mail,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import {
  TRANSMISSION_VECTORS,
  TransmissionVectorDossier
} from '../../data/evolutionData';

export const TransmissionVectorsModule: React.FC = () => {
  const [selectedVectorId, setSelectedVectorId] = useState<string>(
    TRANSMISSION_VECTORS[0].id
  );

  const activeVector: TransmissionVectorDossier =
    TRANSMISSION_VECTORS.find((v) => v.id === selectedVectorId) ||
    TRANSMISSION_VECTORS[0];

  const getVectorIcon = (category: TransmissionVectorDossier['category']) => {
    switch (category) {
      case 'Translation':
        return <BookOpen className="w-4 h-4" />;
      case 'Trade Corridors':
        return <Route className="w-4 h-4" />;
      case 'Military Collision':
        return <Swords className="w-4 h-4" />;
      case 'Postal Networks':
        return <Mail className="w-4 h-4" />;
      case 'Diaspora':
        return <Users className="w-4 h-4" />;
      default:
        return <Compass className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-[#242838] pb-5">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-[#c5a059] uppercase tracking-wider mb-2">
          <Compass className="w-3.5 h-3.5" />
          Module D: Historical Transmission Vectors
        </div>
        <h2 className="text-xl lg:text-2xl font-serif font-bold text-stone-100">
          The Five Conduits of Knowledge Transmission
        </h2>
        <p className="text-sm text-stone-400 mt-1 max-w-3xl">
          Breakthroughs did not diffuse randomly through air. They were carried along specific institutional,
          commercial, martial, and infrastructural pipelines across continents.
        </p>
      </div>

      {/* Vector Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {TRANSMISSION_VECTORS.map((vec) => {
          const isSelected = vec.id === activeVector.id;
          return (
            <button
              key={vec.id}
              type="button"
              onClick={() => setSelectedVectorId(vec.id)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#181a28] border-[#c5a059] shadow-lg shadow-[#c5a059]/10'
                  : 'bg-[#10121b] border-[#222739] hover:border-stone-600 hover:bg-[#141724]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span
                    className={`p-1.5 rounded ${
                      isSelected
                        ? 'bg-[#c5a059] text-stone-950'
                        : 'bg-[#1c2032] text-stone-400'
                    }`}
                  >
                    {getVectorIcon(vec.category)}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400 font-medium">
                    {vec.category}
                  </span>
                </div>
                <h3
                  className={`text-xs font-bold leading-snug font-serif ${
                    isSelected ? 'text-[#c5a059]' : 'text-stone-200'
                  }`}
                >
                  {vec.title}
                </h3>
              </div>
              <div className="mt-2 text-[10px] text-stone-400 font-mono">
                {vec.historicalPeriod}
              </div>
            </button>
          );
        })}
      </div>

      {/* Vector Dossier Detail Card */}
      <div className="bg-[#11131e] border border-[#23283c] rounded-xl p-6 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#212638] pb-4">
          <div>
            <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-wider font-semibold">
              Historical Conduit Deep Dive
            </span>
            <h3 className="text-lg font-serif font-bold text-stone-100 mt-0.5">
              {activeVector.title}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {activeVector.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded bg-[#171a28] text-stone-300 border border-[#272d42]">
              {activeVector.historicalPeriod}
            </span>
          </div>
        </div>

        {/* Mechanism & Geography Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[#0e1017] border border-[#1e2334] space-y-2">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
              Mechanism Summary:
            </span>
            <p className="text-xs text-stone-300 leading-relaxed">
              {activeVector.mechanismSummary}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#0e1017] border border-[#1e2334] space-y-2">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
              Geography & Key Corridors:
            </span>
            <p className="text-xs text-stone-300 leading-relaxed">
              <strong className="text-stone-100">{activeVector.keyGeography}</strong>
            </p>
            <div className="pt-2 text-[11px] text-stone-400">
              <span className="text-stone-300 font-mono">Key Historical Figures:</span>{' '}
              {activeVector.keyActors.join(', ')}
            </div>
          </div>
        </div>

        {/* Primary Transmitted Breakthroughs */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
            Primary Innovations Diffused via This Vector:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeVector.primaryTransmissions.map((trans, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#141724] border border-[#23283c] text-xs text-stone-300 flex items-start gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{trans}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Vignette / Case Study */}
        <div className="p-4 rounded-lg bg-[#141824] border border-[#262c3e] space-y-2">
          <div className="text-xs font-bold text-[#c5a059] uppercase tracking-wider flex items-center gap-1.5">
            <Route className="w-4 h-4 text-[#c5a059]" />
            Historical Case Study Vignette:
          </div>
          <p className="text-xs text-stone-200 leading-relaxed font-serif italic">
            "{activeVector.historicalCaseStudy}"
          </p>
        </div>

        {/* Systemic Macro Impact */}
        <div className="p-3.5 rounded-lg bg-[#0d0f17] border-l-4 border-l-emerald-500 border border-[#1e2334] text-xs text-stone-300">
          <span className="font-semibold text-emerald-400 uppercase text-[11px] tracking-wider block mb-1">
            Systemic Impact on Human Civilization:
          </span>
          {activeVector.systemicImpact}
        </div>
      </div>
    </div>
  );
};
