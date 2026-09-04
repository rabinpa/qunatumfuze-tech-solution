'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ecosystemNodes, ecosystemConnections } from '@/data/ecosystem';

/**
 * Technology Ecosystem section with animated SVG nodes.
 */
export function TechnologyEcosystem() {
  return (
    <section className="py-24 bg-neutral-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Everything connected, nothing outsourced."
          className="mb-16"
        />

        <div className="relative max-w-4xl mx-auto aspect-square">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            {/* Connections */}
            {ecosystemConnections.map((conn, i) => {
              const from = ecosystemNodes.find((n) => n.id === conn.from);
              const to = ecosystemNodes.find((n) => n.id === conn.to);
              if (!from || !to) return null;

              return (
                <motion.line
                  key={`${conn.from}-${conn.to}`}
                  x1={from.x * 4}
                  y1={from.y * 4}
                  x2={to.x * 4}
                  y2={to.y * 4}
                  stroke="#38BDF8"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
              );
            })}

            {/* Central Node */}
            <circle cx="200" cy="200" r="50" fill="#071A33" stroke="#38BDF8" strokeWidth="2">
              <animate attributeName="r" values="48;52;48" dur="3s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
            </circle>
            <text x="200" y="198" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">
              QuantumFuze
            </text>
            <text x="200" y="212" textAnchor="middle" fill="#38BDF8" fontSize="8">
              Digital Growth
            </text>

            {/* Satellite Nodes */}
            {ecosystemNodes.map((node) => {
              const x = node.x * 4;
              const y = node.y * 4;
              return (
                <g key={node.id}>
                  <circle cx={x} cy={y} r="18" fill="#0B2445" stroke="#38BDF8" strokeWidth="1.5">
                    <animate
                      attributeName="r"
                      values="16;20;16"
                      dur={`${2 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <text x={x} y={y + 4} textAnchor="middle" fill="white" fontSize="8" fontWeight="500">
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
