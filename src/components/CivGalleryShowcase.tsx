/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Landmark,
  Image as ImageIcon,
  Compass,
  Sparkles,
  Layers,
  ZoomIn
} from 'lucide-react';
import { Civilization, ArchivalGalleryItem } from '../types/civilization';
import { CIVILIZATION_GALLERIES } from '../data/civilizationGalleries';
import { soundManager } from '../utils/audioAmbience';

interface CivGalleryShowcaseProps {
  civilization: Civilization;
  className?: string;
}

export const CivGalleryShowcase: React.FC<CivGalleryShowcaseProps> = ({
  civilization,
  className = '',
}) => {
  // Retrieve curated gallery items or construct fallback array
  const galleryItems: ArchivalGalleryItem[] =
    CIVILIZATION_GALLERIES[civilization.id] &&
    CIVILIZATION_GALLERIES[civilization.id].length > 0
      ? CIVILIZATION_GALLERIES[civilization.id]
      : [
          {
            id: `${civilization.id}-primary`,
            title: civilization.name,
            category: 'Architecture',
            period: civilization.era,
            primarySrc: civilization.primaryImage,
            fallbackSrc: civilization.fallbackImage,
            caption: civilization.imageCaption,
            credit: civilization.imageCredit,
          },
        ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [failedPrimary, setFailedPrimary] = useState<Record<string, boolean>>({});
  const [failedFallback, setFailedFallback] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const thumbnailTrackRef = useRef<HTMLDivElement | null>(null);

  // Reset active image when selected civilization changes
  useEffect(() => {
    setActiveIndex(0);
    setIsLoaded(false);
  }, [civilization.id]);

  // Scroll active thumbnail into center of rail
  useEffect(() => {
    if (thumbnailTrackRef.current) {
      const activeThumb = thumbnailTrackRef.current.querySelector(
        `[data-thumb-index="${activeIndex}"]`
      ) as HTMLElement | null;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [activeIndex]);

  const currentItem = galleryItems[activeIndex] || galleryItems[0];

  const handleNext = () => {
    soundManager.playChime();
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    setIsLoaded(false);
  };

  const handlePrev = () => {
    soundManager.playChime();
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    setIsLoaded(false);
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailTrackRef.current) {
      const offset = direction === 'left' ? -220 : 220;
      thumbnailTrackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Keyboard navigation for carousel and lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % galleryItems.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryItems.length, isLightboxOpen]);

  const handleImageError = (itemId: string) => {
    if (!failedPrimary[itemId]) {
      setFailedPrimary((prev) => ({ ...prev, [itemId]: true }));
    } else {
      setFailedFallback((prev) => ({ ...prev, [itemId]: true }));
    }
  };

  const isPrimaryFailed = Boolean(failedPrimary[currentItem.id]);
  const isFallbackFailed = Boolean(failedFallback[currentItem.id]);
  const currentFailed = isPrimaryFailed && isFallbackFailed;
  const currentSrc = !isPrimaryFailed ? currentItem.primarySrc : currentItem.fallbackSrc;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* 1. TOP LARGE FEATURED VIEWER */}
      <div className="relative rounded-2xl bg-[#0f1118] border border-[#262c3e] overflow-hidden shadow-2xl group flex flex-col">
        {/* Main Image Box */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="relative w-full aspect-16/10 sm:aspect-4/3 bg-[#08090f] overflow-hidden flex items-center justify-center cursor-pointer select-none"
        >
          {/* Subtle Loading Placeholder */}
          {!isLoaded && !currentFailed && (
            <div className="absolute inset-0 bg-[#121520] animate-pulse flex items-center justify-center">
              <Landmark className="w-10 h-10 text-[#c5a059]/40 animate-spin" />
            </div>
          )}

          {!currentFailed ? (
            <img
              key={`${currentItem.id}-${currentSrc}`}
              src={currentSrc}
              alt={currentItem.title}
              referrerPolicy="no-referrer"
              onLoad={() => setIsLoaded(true)}
              onError={() => handleImageError(currentItem.id)}
              className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            /* Styled Museum Specimen Fallback Vessel */
            <div className="absolute inset-0 bg-gradient-to-br from-[#12141c] via-[#1a1d28] to-[#12141c] p-6 flex flex-col items-center justify-center text-center border border-[#c5a059]/20">
              <div className="w-14 h-14 rounded-full border border-[#c5a059]/40 flex items-center justify-center mb-3 bg-[#0d0e14] shadow-inner">
                <Landmark className="w-7 h-7 text-[#c5a059]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-mono font-bold mb-1">
                Archival Record Specimen
              </span>
              <p className="text-base font-serif font-bold text-white max-w-sm">
                {currentItem.title}
              </p>
              <p className="text-xs text-stone-400 font-mono mt-1">
                {currentItem.period}
              </p>
            </div>
          )}

          {/* Scrim Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

          {/* Top Overlays: Category Badge & Photo Counter */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
            <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-[#c5a059]/40 text-xs font-mono font-bold text-[#c5a059] tracking-wider uppercase shadow-md pointer-events-auto">
              {currentItem.category}
            </span>

            <div className="flex items-center gap-2 pointer-events-auto">
              <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-stone-200 shadow-md">
                {activeIndex + 1} of {galleryItems.length}
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  soundManager.playChime();
                  setIsLightboxOpen(true);
                }}
                aria-label="Zoom to full-screen view"
                className="p-1.5 rounded-md bg-black/60 hover:bg-[#c5a059] text-stone-300 hover:text-black backdrop-blur-md border border-white/10 transition-colors shadow-md cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Arrow Overlays on Left & Right */}
          {galleryItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous gallery image"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-[#c5a059] text-stone-300 hover:text-black border border-white/15 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer shadow-lg z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next gallery image"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-[#c5a059] text-stone-300 hover:text-black border border-white/15 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer shadow-lg z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Archival Information & Caption Strip */}
        <div className="p-4 sm:p-5 bg-[#12141e] border-t border-[#232738] space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#f8f5ee]">
              {currentItem.title}
            </h3>
            <span className="text-xs font-mono font-bold text-[#c5a059]">
              {currentItem.period}
            </span>
          </div>

          <p className="text-sm text-stone-200 leading-relaxed font-normal">
            {currentItem.caption}
          </p>

          <div className="pt-2 border-t border-[#1b1f2e] flex items-center justify-between text-xs text-stone-400 font-mono">
            <span>{currentItem.credit}</span>
            <span className="text-[#c5a059] italic flex items-center gap-1 font-serif">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Click image for full-screen zoom</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. HORIZONTALLY SCROLLING THUMBNAIL LIBRARY */}
      {galleryItems.length > 1 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-stone-300">
              <Layers className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-serif uppercase tracking-wider text-xs font-bold text-[#c5a059]">
                Archival Plate Library
              </span>
              <span className="text-stone-400 font-mono">
                ({galleryItems.length} Curated Perspectives)
              </span>
            </div>

            {/* Thumbnail Scroll Controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollThumbnails('left')}
                title="Scroll thumbnails left"
                className="p-1 rounded-md bg-[#161824] hover:bg-[#202538] text-stone-300 hover:text-white border border-[#282d40] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => scrollThumbnails('right')}
                title="Scroll thumbnails right"
                className="p-1 rounded-md bg-[#161824] hover:bg-[#202538] text-stone-300 hover:text-white border border-[#282d40] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Thumbnail Track */}
          <div
            ref={thumbnailTrackRef}
            className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar select-none"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {galleryItems.map((item, idx) => {
              const isActive = idx === activeIndex;
              const isThumbPrimaryFailed = Boolean(failedPrimary[item.id]);
              const isThumbFallbackFailed = Boolean(failedFallback[item.id]);
              const thumbFailed = isThumbPrimaryFailed && isThumbFallbackFailed;
              const thumbSrc = !isThumbPrimaryFailed ? item.primarySrc : item.fallbackSrc;

              return (
                <button
                  key={item.id}
                  data-thumb-index={idx}
                  type="button"
                  onClick={() => {
                    soundManager.playChime();
                    setActiveIndex(idx);
                    setIsLoaded(false);
                  }}
                  style={{ scrollSnapAlign: 'start' }}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 transition-all duration-200 cursor-pointer text-left group ${
                    isActive
                      ? 'ring-2 ring-[#c5a059] border-2 border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.3)] scale-[1.03] opacity-100 z-10'
                      : 'border border-[#262c3e] hover:border-[#c5a059]/70 opacity-60 hover:opacity-100'
                  }`}
                >
                  {!thumbFailed ? (
                    <img
                      src={thumbSrc}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#161824] flex items-center justify-center p-1 text-center">
                      <Landmark className="w-5 h-5 text-[#c5a059]/60" />
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent ${
                      isActive ? 'opacity-30' : 'opacity-60 group-hover:opacity-20'
                    }`}
                  />

                  {/* Mini Category Stamp on Thumbnail */}
                  <span className="absolute bottom-1 inset-x-1 text-[9px] font-mono text-stone-200 truncate text-center drop-shadow-md">
                    {item.category}
                  </span>

                  {/* Active Indicator Pip */}
                  {isActive && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#c5a059] ring-2 ring-black" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. FULL-SCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between animate-in fade-in duration-200"
        >
          {/* Top Bar in Lightbox */}
          <div className="w-full max-w-6xl flex items-center justify-between text-xs pb-3 border-b border-[#252a3c]">
            <div className="flex items-center gap-3">
              <span className="font-serif uppercase tracking-widest text-[#c5a059] font-bold text-sm">
                {civilization.name} Archival Portfolio
              </span>
              <span className="text-stone-400 font-mono">·</span>
              <span className="font-mono text-xs text-stone-300">
                Plate {activeIndex + 1} of {galleryItems.length}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close full-screen lightbox"
              className="p-2 rounded-lg bg-[#191d2c] hover:bg-[#252c3f] text-stone-300 hover:text-white transition-colors cursor-pointer border border-[#2c3246]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Full-Resolution Image Vessel */}
          <div
            className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-3 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentSrc}
              alt={currentItem.title}
              referrerPolicy="no-referrer"
              className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl"
            />

            {/* Lightbox Carousel Navigation Arrows */}
            {galleryItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous plate"
                  className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/75 hover:bg-[#c5a059] text-stone-200 hover:text-black border border-white/20 transition-all cursor-pointer shadow-2xl"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next plate"
                  className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/75 hover:bg-[#c5a059] text-stone-200 hover:text-black border border-white/20 transition-all cursor-pointer shadow-2xl"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Captions & Provenance in Lightbox */}
          <div
            className="w-full max-w-4xl p-4 sm:p-5 rounded-xl bg-[#10131e] border border-[#24293d] space-y-1.5 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-[#1c2234] text-[#c5a059] border border-[#c5a059]/40 font-bold">
                {currentItem.category}
              </span>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white">
                {currentItem.title}
              </h4>
              <span className="text-xs font-mono text-[#c5a059]">
                ({currentItem.period})
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal max-w-3xl mx-auto">
              {currentItem.caption}
            </p>

            <p className="text-[11px] font-mono text-stone-400">
              Provenance: {currentItem.credit}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
