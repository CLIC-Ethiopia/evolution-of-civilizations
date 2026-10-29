/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Landmark, Eye } from 'lucide-react';

interface ArchivalImageProps {
  primarySrc: string;
  fallbackSrc?: string;
  alt: string;
  caption?: string;
  credit?: string;
  aspectRatioClass?: string;
  className?: string;
  showCaption?: boolean;
}

export const ArchivalImage: React.FC<ArchivalImageProps> = ({
  primarySrc,
  fallbackSrc,
  alt,
  caption,
  credit,
  aspectRatioClass = 'aspect-16/9',
  className = '',
  showCaption = true,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(primarySrc);
  const [hasTriedFallback, setHasTriedFallback] = useState<boolean>(false);
  const [hasFailedCompletely, setHasFailedCompletely] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const handleError = () => {
    if (!hasTriedFallback && fallbackSrc && fallbackSrc !== currentSrc) {
      setHasTriedFallback(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setHasFailedCompletely(true);
    }
  };

  return (
    <>
      <figure className={`relative overflow-hidden rounded-lg bg-[#14161f] border border-[#2d3142]/60 group ${className}`}>
        <div className={`relative w-full overflow-hidden ${aspectRatioClass} flex items-center justify-center`}>
          {/* Subtle loading placeholder */}
          {!isLoaded && !hasFailedCompletely && (
            <div className="absolute inset-0 bg-[#161824] animate-pulse flex items-center justify-center">
              <Landmark className="w-8 h-8 text-[#c5a059]/30 animate-spin" />
            </div>
          )}

          {!hasFailedCompletely ? (
            <img
              src={currentSrc}
              alt={alt}
              referrerPolicy="no-referrer"
              onLoad={() => setIsLoaded(true)}
              onError={handleError}
              className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            /* Styled Museum Fallback Vessel */
            <div className="absolute inset-0 bg-gradient-to-br from-[#12141c] via-[#1a1d28] to-[#12141c] p-6 flex flex-col items-center justify-center text-center border border-[#c5a059]/20">
              <div className="w-12 h-12 rounded-full border border-[#c5a059]/40 flex items-center justify-center mb-3 bg-[#0d0e14]">
                <Landmark className="w-6 h-6 text-[#c5a059]" />
              </div>
              <p className="text-xs uppercase tracking-widest text-[#c5a059] font-serif mb-1">
                Archival Record Specimen
              </p>
              <p className="text-sm text-stone-300 font-medium max-w-sm line-clamp-2">
                {alt}
              </p>
            </div>
          )}

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

          {/* Quick Inspect Button */}
          {!hasFailedCompletely && isLoaded && (
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label="Inspect archival plate"
              className="absolute top-3 right-3 p-2 rounded-md bg-black/60 hover:bg-[#c5a059] text-stone-300 hover:text-black backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Archival Caption Strip */}
        {showCaption && (caption || credit) && (
          <figcaption className="px-4 py-3 bg-[#10121a] border-t border-[#2d3142]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-400">
            <span className="font-serif italic text-stone-300 line-clamp-2">
              {caption}
            </span>
            {credit && (
              <span className="text-[11px] uppercase tracking-wider text-stone-400 shrink-0">
                {credit}
              </span>
            )}
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 md:p-8 flex items-center justify-center animate-in fade-in duration-200"
        >
          <div
            className="max-w-5xl max-h-[90vh] bg-[#10121a] border border-[#c5a059]/40 rounded-lg overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden flex items-center justify-center bg-black">
              <img
                src={currentSrc}
                alt={alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 bg-[#141620] border-t border-[#2d3142] flex items-center justify-between">
              <div>
                <h4 className="text-sm font-serif text-[#f8f5ee]">{alt}</h4>
                {caption && <p className="text-xs text-stone-400 italic mt-0.5">{caption}</p>}
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="px-3 py-1.5 text-xs font-medium text-stone-200 bg-[#252837] hover:bg-[#c5a059] hover:text-black rounded transition-colors"
              >
                Close Plate
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
