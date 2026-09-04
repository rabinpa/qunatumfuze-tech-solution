'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ecosystemNodes, ecosystemConnections } from '@/data/ecosystem';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Technology Ecosystem section with interactive nodes,
 * data-flow particles, and hover highlighting.
 */
export function TechnologyEcosystem() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-24 bg-neutral-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Everything connected, nothing outsourced."
          className="mb-16"
        />

        <div className="relative max-w-4xl mx-auto aspect-square">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <defs>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </radialGradient>
              <filter id="ecosystemGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {!reducedMotion && (
              <circle cx="200" cy="200" r="80" fill="url(#hubGlow)">
                <animate attributeName="r" values="70;90;70" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
              </circle>
            )}

            {ecosystemConnections.map((conn, i) => {
              const from = ecosystemNodes.find((n) => n.id === conn.from);
              const to = ecosystemNodes.find((n) => n.id === conn.to);
              if (!from || !to) return null;

              const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to;
              const x1 = from.x * 4;
              const y1 = from.y * 4;
              const x2 = to.x * 4;
              const y2 = to.y * 4;

              return (
                <g key={`${conn.from}-${conn.to}`}>
                  <motion.line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#38BDF8"
                    strokeWidth={isHighlighted ? '2' : '1'}
                    strokeOpacity={isHighlighted ? '0.8' : '0.3'}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  />

                  {!reducedMotion && (
                    <circle r={isHighlighted ? '3.5' : '2.5'} fill="#22C55E">
                      <animateMotion
                        dur={`${2 + (i % 3)}s`}
                        repeatCount="indefinite"
                        path={`M${x1},${y1} L${x2},${y2}`}
                      />
                    </circle>
                  )}
                </g>
              );
            })}
            <g>
              <circle
                cx="200"
                cy="200"
                r="50"
                fill="#071A33"
                stroke="#38BDF8"
                strokeWidth="2"
                filter="url(#ecosystemGlow)"
              />
              {!reducedMotion && (
                <circle cx="200" cy="200" r="55" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.5">
                  <animate attributeName="r" values="50;65;50" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
              )}
              <text x="200" y="198" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">
                QuantumFuze
              </text>
              <text x="200" y="212" textAnchor="middle" fill="#38BDF8" fontSize="8">
                Digital Growth
              </text>
            </g>

            {ecosystemNodes.map((node) => {
              const x = node.x * 4;
              const y = node.y * 4;
              const isHovered = hoveredNode === node.id;

              return (
                <g
                  key={node.id}
                  role="button"
                  aria-label={"Explore " + node.label + " connections"}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onFocus={() => setHoveredNode(node.id)}
                  onBlur={() => setHoveredNode(null)}
                  tabIndex={0}
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? '24' : '18'}
                    fill={isHovered ? '#0EA5E9' : '#0B2445'}
                    stroke={isHovered ? '#FFFFFF' : '#38BDF8'}
                    strokeWidth={isHovered ? '2' : '1.5'}
                  >
                    {!reducedMotion && (
                      <animate
                        attributeName="r"
                        values={isHovered ? '22;26;22' : '16;20;16'}
                                                                        dur={`${2 + (Math.random() * 2).toFixed(1)}s`}
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    fill="white"
                    fontSize={isHovered ? '10' : '8'}
                    fontWeight={isHovered ? '600' : '500'}
                  >
                    {node.label}
                  </text>
                  {isHovered && !reducedMotion && (
                    <circle cx={x} cy={y} r="30" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.3">
                      <animate attributeName="r" values="28;35;28" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0;0.3" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          <p className="text-center text-sm text-neutral-secondary mt-4">
            Hover over any node to explore connections
          </p>
        </div>
      </div>
    </section>
  );
}