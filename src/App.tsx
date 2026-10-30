/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { RAW_CIVILIZATIONS } from './data/civilizationsData';
import { ViewMode } from './types/civilization';
import { Header } from './components/Header';
import { HeroLanding } from './components/HeroLanding';
import { TimelineNav } from './components/TimelineNav';
import { CivilizationDetail } from './components/CivilizationDetail';
import { MacroMatrix } from './components/MacroMatrix';
import { TimelineView } from './components/TimelineInteractive/TimelineView';
import { FullscreenTimelineModal } from './components/TimelineInteractive/FullscreenTimelineModal';
import { MultiCompareMatrix } from './components/CompareMatrix/MultiCompareMatrix';
import { GeographicOriginMap } from './components/MuseumWings/GeographicOriginMap';
import { LegacyLineageTree } from './components/MuseumWings/LegacyLineageTree';
import { ArtifactGallery } from './components/MuseumWings/ArtifactGallery';
import { PrintableDossier } from './components/MuseumWings/PrintableDossier';
import { EvolutionEngine } from './components/Evolution/EvolutionEngine';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('landing');
  const [activeCivilizationId, setActiveCivilizationId] = useState<string>('sumer');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [compareCivIds, setCompareCivIds] = useState<string[]>(['sumer', 'classical_rome']);
  const [isFullscreenTimelineOpen, setIsFullscreenTimelineOpen] = useState<boolean>(false);

  // Ensure switching between different tabs always loads the clicked tab scrolled to the top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.querySelectorAll('.overflow-y-auto').forEach((el) => {
      el.scrollTop = 0;
    });
  }, [currentView, activeCivilizationId]);

  const activeCiv =
    RAW_CIVILIZATIONS.find((c) => c.id === activeCivilizationId) ||
    RAW_CIVILIZATIONS[0];

  const handleSelectCivilization = (id: string) => {
    setActiveCivilizationId(id);
    if (currentView !== 'archive' && currentView !== 'timeline') {
      setCurrentView('archive');
    }
  };

  const handleNavigateToArchive = (id: string) => {
    setActiveCivilizationId(id);
    setCurrentView('archive');
  };

  const handleOpenCompare = (civAId: string, civBId: string) => {
    setCompareCivIds([civAId, civBId]);
    setCurrentView('compare');
  };

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-[#ded9cd] flex flex-col font-sans selection:bg-[#c5a059]/30 selection:text-white">
      {/* Top Bar Contract Navigation */}
      <Header
        currentView={currentView}
        onSelectView={(view) => setCurrentView(view)}
        onOpenFullscreenTimeline={() => setIsFullscreenTimelineOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {currentView === 'landing' && (
          <HeroLanding
            civilizations={RAW_CIVILIZATIONS}
            onSelectCivilization={handleSelectCivilization}
            onNavigateView={(view) => setCurrentView(view)}
            onOpenCompare={handleOpenCompare}
          />
        )}

        {currentView === 'archive' && (
          <div className="flex-1 flex flex-col md:flex-row min-h-[calc(100vh-61px)]">
            {/* Split-screen Left Sidebar: Chronological Timeline */}
            <TimelineNav
              civilizations={RAW_CIVILIZATIONS}
              activeId={activeCivilizationId}
              onSelectCivilization={(id) => setActiveCivilizationId(id)}
              isCollapsed={isSidebarCollapsed}
              onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />

            {/* Split-screen Right Viewport: Civilization Detail Showcase */}
            <CivilizationDetail
              civilization={activeCiv}
              civilizations={RAW_CIVILIZATIONS}
              onSelectCivilization={(id) => setActiveCivilizationId(id)}
              onOpenCompare={handleOpenCompare}
            />
          </div>
        )}

        {currentView === 'timeline' && (
          <TimelineView
            civilizations={RAW_CIVILIZATIONS}
            activeCivId={activeCivilizationId}
            onSelectCivilization={(id) => setActiveCivilizationId(id)}
            onNavigateToArchive={handleNavigateToArchive}
            onOpenFullscreen={() => setIsFullscreenTimelineOpen(true)}
          />
        )}

        {currentView === 'evolution' && (
          <EvolutionEngine
            civilizations={RAW_CIVILIZATIONS}
            onSelectCivilization={handleNavigateToArchive}
            onOpenCompare={handleOpenCompare}
          />
        )}

        {currentView === 'compare' && (
          <div className="flex-1 flex flex-col min-h-[calc(100vh-61px)]">
            <MultiCompareMatrix
              civilizations={RAW_CIVILIZATIONS}
              initialCivIds={compareCivIds}
              onSelectCivilization={handleNavigateToArchive}
            />
          </div>
        )}

        {currentView === 'macro_matrix' && (
          <div className="flex-1 flex flex-col min-h-[calc(100vh-61px)]">
            <MacroMatrix
              civilizations={RAW_CIVILIZATIONS}
              onSelectCivilization={handleNavigateToArchive}
            />
          </div>
        )}

        {currentView === 'map' && (
          <GeographicOriginMap
            civilizations={RAW_CIVILIZATIONS}
            onSelectCivilization={handleNavigateToArchive}
          />
        )}

        {currentView === 'lineage' && (
          <LegacyLineageTree
            civilizations={RAW_CIVILIZATIONS}
            onSelectCivilization={handleNavigateToArchive}
            onOpenCompare={handleOpenCompare}
          />
        )}

        {currentView === 'artifacts' && (
          <ArtifactGallery
            civilizations={RAW_CIVILIZATIONS}
            onSelectCivilization={handleNavigateToArchive}
          />
        )}

        {currentView === 'dossier' && (
          <PrintableDossier civilizations={RAW_CIVILIZATIONS} />
        )}
      </main>

      {/* Fullscreen Interactive Timeline Modal Theater */}
      <FullscreenTimelineModal
        isOpen={isFullscreenTimelineOpen}
        onClose={() => setIsFullscreenTimelineOpen(false)}
        civilizations={RAW_CIVILIZATIONS}
        activeCivId={activeCivilizationId}
        onSelectCivilization={(id) => setActiveCivilizationId(id)}
        onNavigateToArchive={handleNavigateToArchive}
      />

      {/* Archival Museum Footer */}
      <footer className="border-t border-[#1b1f2e] bg-[#08090d] px-6 lg:px-12 py-5 text-xs text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-2">
          <span className="font-serif text-[#c5a059] font-bold">CHRONOS ARCHIVE</span>
          <span aria-hidden="true" className="text-stone-700">·</span>
          <span>12 Structural Pillars & Civilizational Transformations</span>
        </div>
        <div className="text-[11px] text-stone-400 flex flex-wrap items-center gap-3">
          <span>4500 BCE – Present</span>
          <span>·</span>
          <span>Dual Timeline</span>
          <span>·</span>
          <span>Multi-Radar Analysis</span>
          <span>·</span>
          <span>Geographic Cradles</span>
        </div>
      </footer>
    </div>
  );
}
