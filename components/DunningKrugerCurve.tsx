'use client';

import { useState } from 'react';

export default function DunningKrugerCurve() {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const stages = [
    { id: 'start', x: 50, y: 280, label: 'Beginner', description: 'Just starting out' },
    { id: 'peak', x: 150, y: 80, label: 'Peak of "Mt. Stupid"', description: 'Overconfident with minimal knowledge' },
    { id: 'valley', x: 300, y: 240, label: 'Valley of Despair', description: 'Realizing how much you don\'t know' },
    { id: 'current', x: 350, y: 220, label: 'I am here', description: 'Past the valley, climbing the slope (∂confidence/∂knowledge > 0)' },
    { id: 'expert', x: 580, y: 100, label: 'Plateau of Sustainability', description: 'True competence with humility' },
  ];

  return (
    <div className="my-12 p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
        The Dunning-Kruger Journey
      </h3>
      
      <div className="relative w-full" style={{ height: '350px' }}>
        <svg
          viewBox="0 0 650 320"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
        >
          {/* Axes */}
          <line x1="40" y1="300" x2="620" y2="300" stroke="currentColor" strokeWidth="2" className="text-gray-400 dark:text-gray-600" />
          <line x1="40" y1="40" x2="40" y2="300" stroke="currentColor" strokeWidth="2" className="text-gray-400 dark:text-gray-600" />
          
          {/* Axis labels */}
          <text x="330" y="318" textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400" fontWeight="600">
            Knowledge →
          </text>
          <text x="25" y="170" textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400" fontWeight="600" transform="rotate(-90 25 170)">
            Confidence →
          </text>

          {/* The Dunning-Kruger curve with color psychology */}
          <defs>
            {/* Gradient for the curve - representing emotional journey */}
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.9" /> {/* Bright yellow - overconfidence */}
              <stop offset="15%" stopColor="#FBBF24" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#60A5FA" stopOpacity="0.7" /> {/* Transition to blue */}
              <stop offset="50%" stopColor="#6B7280" stopOpacity="0.6" /> {/* Muted gray - despair */}
              <stop offset="65%" stopColor="#3B82F6" stopOpacity="0.8" /> {/* Blue - beginning enlightenment */}
              <stop offset="85%" stopColor="#10B981" stopOpacity="0.9" /> {/* Green - enlightenment */}
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.9" /> {/* Bright green - mastery */}
            </linearGradient>
            
            {/* Fill gradient - lighter version */}
            <linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#6B7280" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          
          {/* Main curve path with continuous animation */}
          <path
            d="M 50 280 Q 100 60, 150 80 Q 200 100, 250 200 Q 280 260, 300 240 Q 360 180, 420 180 Q 480 180, 540 120 Q 580 80, 600 100"
            fill="none"
            stroke="url(#curveGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            className="curve-path"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
            }}
          />

          {/* Fill under curve with gradient */}
          <path
            d="M 50 280 Q 100 60, 150 80 Q 200 100, 250 200 Q 280 260, 300 240 Q 360 180, 420 180 Q 480 180, 540 120 Q 580 80, 600 100 L 600 300 L 50 300 Z"
            fill="url(#fillGradient)"
            opacity="0.3"
            className="animate-fadeIn"
          />

          {/* Stage markers */}
          {stages.map((stage) => (
            <g
              key={stage.id}
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredPoint(stage.id)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              {/* Outer glow ring when hovered */}
              {hoveredPoint === stage.id && (
                <circle
                  cx={stage.x}
                  cy={stage.y}
                  r="18"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  opacity="0.5"
                />
              )}
              
              {/* Marker dot with contextual colors */}
              <circle
                cx={stage.x}
                cy={stage.y}
                r={hoveredPoint === stage.id ? '10' : stage.id === 'current' ? '12' : '8'}
                fill={
                  stage.id === 'current' ? '#10B981' : // Green for current position (enlightenment)
                  stage.id === 'peak' ? '#FBBF24' : // Yellow for peak (overconfidence)
                  stage.id === 'valley' ? '#6B7280' : // Gray for valley (despair)
                  stage.id === 'expert' ? '#34D399' : // Bright green for expert
                  '#60A5FA' // Default blue
                }
                className="transition-all duration-300"
                style={{
                  filter: hoveredPoint === stage.id ? 'brightness(1.3) drop-shadow(0 0 8px currentColor)' : 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))'
                }}
              />
              
              {/* Center dot */}
              <circle
                cx={stage.x}
                cy={stage.y}
                r="3"
                fill="white"
                opacity="0.9"
              />

              {/* Special marker for "I am here" */}
              {stage.id === 'current' && (
                <>
                  <path
                    d={`M ${stage.x} ${stage.y - 25} L ${stage.x - 8} ${stage.y - 15} L ${stage.x + 8} ${stage.y - 15} Z`}
                    fill="#10B981"
                  />
                  <text
                    x={stage.x}
                    y={stage.y - 30}
                    textAnchor="middle"
                    className="text-xs font-bold fill-green-600 dark:fill-green-400"
                  >
                    ↓
                  </text>
                </>
              )}
            </g>
          ))}
        </svg>

        {/* Hover tooltip */}
        {hoveredPoint && (
          <div
            className="absolute bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-10 animate-fadeIn"
            style={{
              left: '50%',
              top: '10px',
              transform: 'translateX(-50%)',
              maxWidth: '300px'
            }}
          >
            <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {stages.find(s => s.id === hoveredPoint)?.label}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {stages.find(s => s.id === hoveredPoint)?.description}
            </p>
          </div>
        )}
      </div>

      {/* Legend with emotional journey colors */}
      <div className="mt-6 flex flex-wrap gap-4 text-xs justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(to right, #FBBF24, #6B7280, #10B981)' }}></div>
          <span className="text-gray-700 dark:text-gray-300">Emotional journey: Overconfidence → Despair → Enlightenment</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-700 dark:text-gray-300">I am here</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 dark:text-gray-300 italic">Hover to explore stages</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes continuousDraw {
          0% {
            stroke-dasharray: 1200;
            stroke-dashoffset: 1200;
          }
          50% {
            stroke-dasharray: 1200;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 1200;
            stroke-dashoffset: -1200;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes gentlePulse {
          0%, 100% {
            opacity: 0.9;
          }
          50% {
            opacity: 1;
          }
        }
        
        .curve-path {
          stroke-dasharray: 1200;
          animation: continuousDraw 8s ease-in-out infinite, gentlePulse 3s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out both;
        }
      `}</style>
    </div>
  );
}
