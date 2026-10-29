/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RadarAxis, RadarScores } from '../../types/civilization';
import { RADAR_AXES, CIVILIZATION_RADAR_SCORES } from '../../data/radarMetrics';

interface CivilizationRadarChartProps {
  selectedCivs: { id: string; name: string }[];
  size?: number;
}

const CIV_COLORS = [
  { stroke: '#c5a059', fill: 'rgba(197, 160, 89, 0.25)', label: 'Gold' },
  { stroke: '#38bdf8', fill: 'rgba(56, 189, 248, 0.22)', label: 'Cyan' },
  { stroke: '#f97316', fill: 'rgba(249, 115, 22, 0.22)', label: 'Orange' },
  { stroke: '#a855f7', fill: 'rgba(168, 85, 247, 0.22)', label: 'Purple' },
  { stroke: '#10b981', fill: 'rgba(16, 185, 129, 0.22)', label: 'Emerald' },
];

export const CivilizationRadarChart: React.FC<CivilizationRadarChartProps> = ({
  selectedCivs,
  size = 460,
}) => {
  const [hoveredAxis, setHoveredAxis] = useState<string | null>(null);

  const radius = size * 0.36;
  const center = size / 2;
  const numAxes = RADAR_AXES.length;
  const angleStep = (Math.PI * 2) / numAxes;

  // Grid concentric rings (20%, 40%, 60%, 80%, 100%)
  const rings = [0.2, 0.4, 0.6, 0.8, 1.0];

  // Helper to convert polar coordinates (angle, value 0-1) to cartesian (x, y)
  const polarToCartesian = (angle: number, valueRatio: number) => {
    // Start from top (-PI/2)
    const adjustedAngle = angle - Math.PI / 2;
    const x = center + radius * valueRatio * Math.cos(adjustedAngle);
    const y = center + radius * valueRatio * Math.sin(adjustedAngle);
    return { x, y };
  };

  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-[#0f1118] border border-[#232738] space-y-4">
      <div className="text-center">
        <h4 className="text-sm font-serif font-bold text-[#f8f5ee]">
          Multidimensional Civilizational Radar
        </h4>
        <p className="text-xs text-stone-400 font-light">
          Comparative evaluation across 6 structural capability axes (0 – 100 score)
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <svg
          width={size}
          height={size}
          className="overflow-visible select-none max-w-full h-auto"
        >
          {/* Concentric Polygonal Background Rings */}
          {rings.map((ring, ringIdx) => {
            const points = RADAR_AXES.map((_, i) => {
              const { x, y } = polarToCartesian(i * angleStep, ring);
              return `${x},${y}`;
            }).join(' ');

            return (
              <g key={ringIdx}>
                <polygon
                  points={points}
                  fill="none"
                  stroke="#23283b"
                  strokeWidth="1"
                  strokeDasharray={ringIdx < 4 ? '3 3' : 'none'}
                />
                {/* Score label on vertical axis */}
                <text
                  x={center + 4}
                  y={center - radius * ring + 10}
                  fill="#5a6078"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  {Math.round(ring * 100)}
                </text>
              </g>
            );
          })}

          {/* Radial Axis Spokes & Labels */}
          {RADAR_AXES.map((axis, i) => {
            const angle = i * angleStep;
            const spokeEnd = polarToCartesian(angle, 1.0);
            const labelPos = polarToCartesian(angle, 1.22);
            const isHovered = hoveredAxis === axis.key;

            return (
              <g
                key={axis.key}
                onMouseEnter={() => setHoveredAxis(axis.key)}
                onMouseLeave={() => setHoveredAxis(null)}
                className="cursor-pointer"
              >
                <line
                  x1={center}
                  y1={center}
                  x2={spokeEnd.x}
                  y2={spokeEnd.y}
                  stroke={isHovered ? '#c5a059' : '#23283b'}
                  strokeWidth={isHovered ? '2' : '1'}
                />

                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={isHovered ? '#f8f5ee' : '#a8a29e'}
                  fontSize="11"
                  fontWeight={isHovered ? 'bold' : 'normal'}
                  className="font-serif transition-colors"
                >
                  {axis.shortLabel}
                </text>
              </g>
            );
          })}

          {/* Render Civilization Polygons */}
          {selectedCivs.map((civ, civIdx) => {
            const scores: RadarScores = CIVILIZATION_RADAR_SCORES[civ.id] || {
              agro_resilience: 75,
              urban_hydraulics: 75,
              governance_law: 75,
              notation_density: 75,
              trade_velocity: 75,
              technology_mastery: 75,
            };

            const color = CIV_COLORS[civIdx % CIV_COLORS.length];

            const points = RADAR_AXES.map((axis, i) => {
              const val = (scores[axis.key] || 50) / 100;
              const { x, y } = polarToCartesian(i * angleStep, val);
              return `${x},${y}`;
            }).join(' ');

            return (
              <g key={civ.id} className="transition-all duration-300">
                <polygon
                  points={points}
                  fill={color.fill}
                  stroke={color.stroke}
                  strokeWidth="2.5"
                  className="hover:opacity-90"
                />

                {/* Score Vertex Dots */}
                {RADAR_AXES.map((axis, i) => {
                  const val = (scores[axis.key] || 50) / 100;
                  const { x, y } = polarToCartesian(i * angleStep, val);
                  return (
                    <circle
                      key={axis.key}
                      cx={x}
                      cy={y}
                      r="4"
                      fill={color.stroke}
                      stroke="#0d0e15"
                      strokeWidth="2"
                    />
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2 border-t border-[#202436] w-full">
        {selectedCivs.map((civ, idx) => {
          const color = CIV_COLORS[idx % CIV_COLORS.length];
          return (
            <div key={civ.id} className="flex items-center gap-2 text-xs">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: color.stroke }}
              />
              <span className="font-serif font-bold text-stone-200">
                {civ.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
