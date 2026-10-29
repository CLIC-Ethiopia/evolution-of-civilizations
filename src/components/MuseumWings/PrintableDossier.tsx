/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Printer, Download, BookOpen, Check, HelpCircle } from 'lucide-react';
import { Civilization } from '../../types/civilization';
import { CHARACTERISTICS_META } from '../../constants/characteristics';

interface PrintableDossierProps {
  civilizations: Civilization[];
}

export const PrintableDossier: React.FC<PrintableDossierProps> = ({
  civilizations,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const content = `# The Evolutionary Web of Civilization: Comprehensive Study Dossier
Curatorial Archive · 4500 BCE to Present

## 1. Chronological Register
${civilizations.map((c, i) => `${i + 1}. **${c.name}** (${c.era}) — ${c.region}\n   *Defining Innovation:* ${c.keyInnovation}`).join('\n')}

## 2. The 12 Structural Characteristics
${CHARACTERISTICS_META.map((m) => `### Vector: ${m.label} (${m.category})\n*Inquiry:* ${m.guidingQuestion}\n${m.thematicSignificance}\n`).join('\n')}

## 3. Comparative Collapse & Transformation Archetypes
${civilizations.map((c) => `### ${c.name} (${c.collapse_or_transformation.type})\n${c.collapse_or_transformation.detailed_analysis}\n`).join('\n')}
`;

    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const discussionQuestions = [
    {
      q: 'Hydraulic Despotism vs. Public Sanitation',
      prompt: 'Compare how Sumer and Egypt used centralized irrigation bureaucracies versus the seemingly more egalitarian municipal sanitation grid of the Indus Valley.',
    },
    {
      q: 'Notation Media & Imperial Longevity',
      prompt: 'How did writing materials (clay tablets in Sumer, papyrus in Egypt, bamboo/paper in Han China, khipu knots in the Andes, and silicon servers today) dictate the physical durability and transmission of state memory?',
    },
    {
      q: 'Ecological Boundaries Across Millennia',
      prompt: 'Examine how Sumerian soil salinization and Maya megadrought deforestation parallel contemporary modern planetary boundaries regarding carbon emissions and resource depletion.',
    },
  ];

  return (
    <div className="flex-1 min-w-0 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Action Header (Hidden in Print) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232738] print:hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Curatorial Educational Suite</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-[#f8f5ee]">
            Exportable Educational Dossier & Study Guide
          </h1>
          <p className="text-xs text-stone-300 font-light mt-1">
            Formatted for classroom instruction, university seminars, academic printouts, and offline reference.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCopyMarkdown}
            className="flex items-center gap-2 px-3.5 py-2 bg-[#171a26] hover:bg-[#202538] text-stone-200 border border-[#2d3348] rounded text-xs transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5 text-[#c5a059]" />}
            <span>{copied ? 'Copied Markdown!' : 'Copy Markdown'}</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-semibold text-xs rounded transition-colors cursor-pointer shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Print Publication Dossier</span>
          </button>
        </div>
      </div>

      {/* The Printable Paper Container */}
      <article className="p-8 sm:p-12 rounded-xl bg-[#10121a] border border-[#232738] text-stone-200 space-y-10 shadow-2xl print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
        {/* Document Masthead */}
        <header className="border-b border-[#2d3248] pb-6 space-y-2 print:border-black">
          <div className="flex items-center justify-between text-xs font-mono text-[#c5a059] print:text-stone-700">
            <span>CURATORIAL PUBLICATION SERIES · VOL. I</span>
            <span>4500 BCE – PRESENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f8f5ee] print:text-black">
            The Evolutionary Web of Civilization
          </h2>
          <p className="text-sm font-serif italic text-stone-300 print:text-stone-700">
            A Comparative Study Guide on the 12 Structural Characteristics, Monumental Innovations, and Systemic Transformations of Human Society.
          </p>
        </header>

        {/* Section 1: Chronological Register */}
        <section className="space-y-4">
          <h3 className="text-lg font-serif font-bold text-[#c5a059] uppercase tracking-wider print:text-black border-b border-[#222638] pb-1">
            1. Chronological Epoch Register
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-[#252a3d] text-stone-400 print:text-black print:border-black">
                  <th className="py-2 pr-3 font-serif">Civilization</th>
                  <th className="py-2 px-3 font-mono">Era Bounds</th>
                  <th className="py-2 px-3 font-serif">Geographic Region</th>
                  <th className="py-2 pl-3 font-serif">Key Structural Innovation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2334] print:divide-stone-300">
                {civilizations.map((civ) => (
                  <tr key={civ.id} className="hover:bg-[#151825] print:hover:bg-transparent">
                    <td className="py-2.5 pr-3 font-serif font-bold text-stone-200 print:text-black">
                      {civ.name}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[#c5a059] print:text-black text-[11px]">
                      {civ.era}
                    </td>
                    <td className="py-2.5 px-3 text-stone-400 print:text-stone-800">
                      {civ.region}
                    </td>
                    <td className="py-2.5 pl-3 text-stone-300 print:text-black italic">
                      {civ.keyInnovation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Discussion & Seminar Inquiry Prompts */}
        <section className="space-y-4">
          <h3 className="text-lg font-serif font-bold text-[#c5a059] uppercase tracking-wider print:text-black border-b border-[#222638] pb-1 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 print:hidden" />
            <span>2. Seminar Socratic Discussion Prompts</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {discussionQuestions.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#141724] border border-[#22283a] print:bg-stone-50 print:border-stone-300 space-y-2"
              >
                <div className="text-[11px] font-mono text-[#c5a059] print:text-stone-800 font-bold uppercase">
                  Prompt 0{idx + 1} · {item.q}
                </div>
                <p className="text-xs text-stone-200 print:text-stone-900 leading-relaxed font-light">
                  {item.prompt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: The 12 Vectors Reference */}
        <section className="space-y-4">
          <h3 className="text-lg font-serif font-bold text-[#c5a059] uppercase tracking-wider print:text-black border-b border-[#222638] pb-1">
            3. The 12 Structural Capability Vectors
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CHARACTERISTICS_META.map((meta, i) => (
              <div
                key={meta.key}
                className="p-4 rounded-lg bg-[#141622] border border-[#222738] print:border-stone-300 print:bg-transparent space-y-1"
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-serif font-bold text-[#f8f5ee] print:text-black">
                    {(i + 1).toString().padStart(2, '0')}. {meta.label}
                  </span>
                  <span className="font-mono text-[#c5a059] print:text-stone-600 text-[10px]">
                    {meta.category}
                  </span>
                </div>
                <p className="text-[11px] text-stone-300 print:text-stone-800 italic">
                  "{meta.guidingQuestion}"
                </p>
                <p className="text-[11px] text-stone-400 print:text-stone-600 font-light pt-1">
                  {meta.thematicSignificance}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};
