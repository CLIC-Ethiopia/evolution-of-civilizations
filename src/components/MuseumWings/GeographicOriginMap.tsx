/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import {
  Globe,
  MapPin,
  ArrowRight,
  Waves,
  Shield,
  Layers,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { Civilization } from '../../types/civilization';
import { GEOGRAPHIC_CRADLES } from '../../data/museumData';
import { soundManager } from '../../utils/audioAmbience';

interface GeographicOriginMapProps {
  civilizations: Civilization[];
  onSelectCivilization: (id: string) => void;
}

export const GeographicOriginMap: React.FC<GeographicOriginMapProps> = ({
  civilizations,
  onSelectCivilization,
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layersGroupRef = useRef<L.LayerGroup | null>(null);

  const [activeCivId, setActiveCivId] = useState<string>('classical_rome');
  const [showTradeRoutes, setShowTradeRoutes] = useState<boolean>(true);
  const [showTerritory, setShowTerritory] = useState<boolean>(true);

  const activeCiv =
    civilizations.find((c) => c.id === activeCivId) || civilizations[0];
  const activeCradle = GEOGRAPHIC_CRADLES[activeCiv.id] || GEOGRAPHIC_CRADLES['sumer'];

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Center near Mediterranean / Middle East / Asia crossroads
    const map = L.map(mapContainerRef.current, {
      center: [28.0, 30.0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 10,
      zoomControl: true,
      attributionControl: true,
    });

    // Standard OpenStreetMap colorful tiles showing countries & continents clearly
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    }).addTo(map);

    const layersGroup = L.layerGroup().addTo(map);
    layersGroupRef.current = layersGroup;
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Map Layers whenever active civilization, trade routes, or territory toggles change
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layers = layersGroupRef.current;
    if (!map || !layers) return;

    layers.clearLayers();

    // 1. Draw Territorial Polygon for the active civilization
    if (showTerritory && activeCradle?.territorialPolygon && activeCradle.territorialPolygon.length > 2) {
      const territoryPolygon = L.polygon(activeCradle.territorialPolygon, {
        color: '#c5a059',
        weight: 2.5,
        fillColor: '#c5a059',
        fillOpacity: 0.18,
        dashArray: '4, 4',
      });
      layers.addLayer(territoryPolygon);
    }

    // 2. Draw Animated Trade Routes for the active civilization
    if (showTradeRoutes && activeCradle?.tradeConnections) {
      activeCradle.tradeConnections.forEach((trade) => {
        const isMaritime = trade.routeType === 'maritime';
        const routeColor = isMaritime ? '#38bdf8' : '#f59e0b';

        const polyline = L.polyline(
          [
            [activeCradle.lat, activeCradle.lng],
            trade.targetCoords,
          ],
          {
            color: routeColor,
            weight: 3,
            opacity: 0.85,
            className: 'leaflet-trade-route',
          }
        );

        // Bind interactive tooltip on trade corridor
        polyline.bindTooltip(
          `<div class="p-1 text-xs">
            <strong class="text-[#c5a059] block">${trade.partnerName}</strong>
            <span class="text-stone-300">${trade.commodities}</span>
            <span class="block text-[10px] text-stone-400 uppercase mt-0.5">${trade.routeType} route</span>
          </div>`,
          { sticky: true, opacity: 0.95 }
        );

        layers.addLayer(polyline);

        // Target partner pulse marker
        const partnerIcon = L.divIcon({
          className: 'custom-partner-pin',
          html: `<div style="width: 10px; height: 10px; border-radius: 50%; background: ${routeColor}; box-shadow: 0 0 10px ${routeColor}; border: 1.5px solid white;"></div>`,
          iconSize: [10, 10],
          iconAnchor: [5, 5],
        });
        const partnerMarker = L.marker(trade.targetCoords, { icon: partnerIcon });
        partnerMarker.bindTooltip(trade.partnerName, { direction: 'top' });
        layers.addLayer(partnerMarker);
      });
    }

    // 3. Draw All 17 Civilization Markers
    civilizations.forEach((civ) => {
      const cradle = GEOGRAPHIC_CRADLES[civ.id];
      if (!cradle) return;

      const isCurrent = civ.id === activeCivId;
      const markerHtml = `
        <div style="
          width: ${isCurrent ? '34px' : '26px'};
          height: ${isCurrent ? '34px' : '26px'};
          background: ${isCurrent ? '#c5a059' : '#141620'};
          border: 2px solid ${isCurrent ? '#ffffff' : '#c5a059'};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${isCurrent ? '#000000' : '#c5a059'};
          box-shadow: ${isCurrent ? '0 0 20px rgba(197, 160, 89, 0.9)' : '0 2px 8px rgba(0,0,0,0.5)'};
          cursor: pointer;
          font-weight: bold;
          font-size: ${isCurrent ? '14px' : '11px'};
          font-family: serif;
          transition: all 0.2s ease;
        ">
          ${civ.name.charAt(0)}
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-civ-pin',
        html: markerHtml,
        iconSize: [isCurrent ? 34 : 26, isCurrent ? 34 : 26],
        iconAnchor: [isCurrent ? 17 : 13, isCurrent ? 17 : 13],
      });

      const marker = L.marker([cradle.lat, cradle.lng], { icon: customIcon });

      // Build rich popup
      const popupHtml = `
        <div style="padding: 14px; min-width: 250px; max-width: 300px; font-family: 'Plus Jakarta Sans', system-ui, sans-serif;">
          <div style="font-size: 11px; font-family: monospace; color: #c5a059; text-transform: uppercase; margin-bottom: 4px;">
            ${civ.continent} · ${civ.era}
          </div>
          <h4 style="font-size: 16px; font-family: 'Cinzel', Georgia, serif; font-weight: bold; color: #ffffff; margin: 0 0 6px 0;">
            ${civ.name}
          </h4>
          <p style="font-size: 12px; color: #d6d3d1; margin: 0 0 10px 0; line-height: 1.4;">
            ${civ.tagline}
          </p>
          <div style="border-top: 1px solid #292d3f; padding-top: 8px; margin-bottom: 10px; font-size: 11px; color: #a8a29e;">
            <div><strong>Capital:</strong> ${cradle.coreCapital}</div>
            <div><strong>Peak Area:</strong> ${cradle.territoryAreaKm2}</div>
            <div><strong>Modern Lands:</strong> ${cradle.modernCountries.slice(0, 3).join(', ')}...</div>
          </div>
          <button
            id="popup-explore-btn-${civ.id}"
            style="
              width: 100%;
              padding: 7px 12px;
              background: #c5a059;
              color: #000000;
              font-weight: bold;
              font-size: 11px;
              text-transform: uppercase;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              transition: background 0.2s;
            "
          >
            Inspect Archive & 12 Pillars
          </button>
        </div>
      `;

      marker.bindPopup(popupHtml);

      marker.on('click', () => {
        soundManager.playChime();
        setActiveCivId(civ.id);
      });

      marker.on('popupopen', () => {
        const btn = document.getElementById(`popup-explore-btn-${civ.id}`);
        if (btn) {
          btn.onclick = () => {
            soundManager.playChime();
            onSelectCivilization(civ.id);
          };
        }
      });

      layers.addLayer(marker);
    });

    // Fly smoothly to active civilization coordinates
    map.flyTo([activeCradle.lat, activeCradle.lng], 4.5, {
      duration: 1.2,
      easeLinearity: 0.25,
    });
  }, [activeCivId, showTradeRoutes, showTerritory, civilizations, onSelectCivilization]);

  return (
    <div className="flex-1 min-w-0 overflow-y-auto px-4 sm:px-8 lg:px-12 py-8 max-w-[1550px] w-full mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#232738]">
        <div>
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#c5a059] font-medium mb-1">
            <Globe className="w-4 h-4" />
            <span>OpenStreetMap Historical GIS Atlas</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f8f5ee]">
            Geographic Cradles, Extent & Trade Networks
          </h1>
          <p className="text-sm text-stone-300 font-light mt-1 max-w-2xl">
            Real-world interactive cartography showing the river basins, maximum territorial reach, and bilateral trade corridors across all 17 world civilizations.
          </p>
        </div>

        {/* Map Display Toggles */}
        <div className="flex items-center gap-2 bg-[#12141e] p-1.5 rounded-xl border border-[#252a3c] self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setShowTerritory(!showTerritory)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              showTerritory
                ? 'bg-[#c5a059] text-black font-semibold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Territorial Extent</span>
          </button>

          <button
            type="button"
            onClick={() => setShowTradeRoutes(!showTradeRoutes)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              showTradeRoutes
                ? 'bg-[#38bdf8] text-black font-semibold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trade Corridors</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Map Canvas */}
      <div className="relative w-full h-[520px] rounded-2xl overflow-hidden border border-[#232738] shadow-2xl z-0">
        <div ref={mapContainerRef} className="w-full h-full" />

        {/* Floating Active Civilization Badge */}
        <div className="absolute top-4 right-4 z-10 bg-[#0d0f17]/92 backdrop-blur-md p-4 rounded-xl border border-[#c5a059]/40 max-w-xs shadow-2xl hidden md:block text-xs">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#c5a059] mb-1">
            <span>{activeCiv.continent}</span>
            <span>{activeCiv.era}</span>
          </div>
          <h3 className="text-base font-serif font-bold text-white mb-1">
            {activeCiv.name}
          </h3>
          <p className="text-stone-300 text-[11px] font-light line-clamp-2 mb-2">
            {activeCiv.tagline}
          </p>
          <div className="pt-2 border-t border-[#232738] flex items-center justify-between text-[11px]">
            <span className="text-stone-400">Peak Reach:</span>
            <span className="text-[#c5a059] font-mono font-bold">
              {activeCradle.territoryAreaKm2}
            </span>
          </div>
        </div>

        {/* Bottom Map Legend */}
        <div className="absolute bottom-4 left-4 z-10 bg-[#0d0f17]/92 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#24293c] flex flex-wrap items-center gap-4 text-xs text-stone-300 shadow-xl">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#c5a059] border border-white" />
            <span className="font-serif">Active Origin Pin</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-1 bg-[#38bdf8]" />
            <span>Maritime Trade</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-1 bg-[#f59e0b]" />
            <span>Overland Trade</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-[#c5a059]/30 border border-[#c5a059]" />
            <span>Territorial Extent</span>
          </div>
        </div>
      </div>

      {/* Horizontal Society Quick Selector */}
      <div className="space-y-2">
        <span className="text-xs font-serif uppercase tracking-wider text-[#c5a059] font-semibold block">
          Select Civilization to Center Map & Trace Routes ({civilizations.length} Civilizations)
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {civilizations.map((civ) => {
            const isSelected = civ.id === activeCivId;
            return (
              <button
                key={civ.id}
                type="button"
                onClick={() => {
                  soundManager.playChime();
                  setActiveCivId(civ.id);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-serif whitespace-nowrap shrink-0 transition-all cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#c5a059] text-black font-bold border-white shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                    : 'bg-[#12141e] text-stone-300 hover:text-white border-[#24293c] hover:bg-[#181c2b]'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{civ.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Geographical Dossier Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#11131c] border border-[#c5a059]/35 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#232738]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#c5a059] uppercase tracking-wider">
              <span>{activeCiv.continent}</span>
              <span aria-hidden="true">·</span>
              <span>{activeCiv.era}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f8f5ee]">
              {activeCiv.name}: Geographic Analysis
            </h2>
            <p className="text-sm text-stone-300 font-light">
              Capital: <strong className="text-white font-medium">{activeCradle.coreCapital}</strong> · Peak Territorial Reach: <strong className="text-[#c5a059] font-medium">{activeCradle.territoryAreaKm2}</strong>
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              soundManager.playChime();
              onSelectCivilization(activeCiv.id);
            }}
            className="px-4 py-2.5 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-semibold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] self-start sm:self-auto"
          >
            <span>Open 12-Pillar Exhibition</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Geographic Insight Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#161824] border border-[#232738] space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-[#c5a059] block font-bold">
              Primary River & Water System
            </span>
            <h4 className="text-sm font-serif font-bold text-stone-200">
              {activeCradle.riverSystem}
            </h4>
          </div>

          <div className="p-4 rounded-xl bg-[#161824] border border-[#232738] space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-[#c5a059] block font-bold">
              Geographic Biome
            </span>
            <h4 className="text-sm font-serif font-bold text-stone-200">
              {activeCradle.geographicBiome}
            </h4>
          </div>

          <div className="p-4 rounded-xl bg-[#161824] border border-[#232738] space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-[#c5a059] block font-bold">
              Modern Countries Encompassed
            </span>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              {activeCradle.modernCountries.join(', ')}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161824] border border-[#232738] space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-[#c5a059] block font-bold">
              Strategic Landscape Advantage
            </span>
            <p className="text-xs text-stone-300 leading-relaxed font-light line-clamp-3">
              {activeCradle.strategicAdvantage}
            </p>
          </div>
        </div>

        {/* Trade Partners List */}
        <div className="pt-2">
          <h4 className="text-xs font-serif uppercase tracking-wider text-[#c5a059] font-bold mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Historical Trade Partners & Commodities</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeCradle.tradeConnections.map((t, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#141622] border border-[#222738] text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-white">{t.partnerName}</span>
                  <span
                    className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${
                      t.routeType === 'maritime'
                        ? 'bg-sky-950 text-sky-400 border border-sky-800'
                        : 'bg-amber-950 text-amber-400 border border-amber-800'
                    }`}
                  >
                    {t.routeType}
                  </span>
                </div>
                <p className="text-stone-300 font-light text-[11px]">
                  {t.commodities}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Agricultural Adaptation Excerpt */}
        <div className="p-4 rounded-xl bg-[#141620] border-l-2 border-[#c5a059]">
          <span className="text-xs font-serif uppercase tracking-wider text-[#c5a059] font-bold block mb-1 flex items-center gap-1.5">
            <Waves className="w-3.5 h-3.5" />
            <span>Agro-Ecological Engineering Strategy</span>
          </span>
          <p className="text-sm text-stone-200 leading-relaxed font-light">
            {activeCiv.characteristics.stable_food_supply}
          </p>
        </div>
      </div>
    </div>
  );
};
