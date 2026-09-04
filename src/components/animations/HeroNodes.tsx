'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  speed: number;
  opacity: number;
  connections: number[];
}

const NODE_COUNT = 18;
const MAX_DISTANCE = 30; // % of canvas — nodes within this distance connect

/**
 * Ambient floating node system for the hero background.
 * Draws connecting lines between nearby nodes and gently moves them.
 *
 * Respects prefers-reduced-motion: renders a static grid of nodes with no movement.
 */
export function HeroNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  // Set up the canvas to match its display size (device-pixel-ratio aware)
  const resizeCanvas = useCallback((canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.scale(rect.width / 100, rect.height / 100);
    }
  }, []);

  // Draw a static, distributed set of nodes (reduced motion)
  const drawStatic = useCallback(
    (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Fixed grid pattern
      const cols = 6;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < 6; j++) {
          const x = (i / (cols - 1)) * 100;
          const y = (j / 5) * 100;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
          ctx.fill();
        }
      }
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    resizeCanvas(canvas);

    // Reduced motion — render a static network, do not animate
    if (reducedMotion) {
      drawStatic(canvas);
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize nodes
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: 1.5 + Math.random() * 2.5,
      speed: 0.05 + Math.random() * 0.15,
      opacity: 0.15 + Math.random() * 0.25,
      connections: [],
    }));

    // Precompute connections based on initial distance
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i !== j) {
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          if (Math.sqrt(dx * dx + dy * dy) < MAX_DISTANCE) {
            node.connections.push(j);
          }
        }
      });
    });

    let animationId: number;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Update positions with gentle random drift
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Occasional random nudge
        if (Math.random() < 0.01) {
          node.vx += (Math.random() - 0.5) * 0.02;
          node.vy += (Math.random() - 0.5) * 0.02;
        }

        // Bounce off edges
        if (node.x <= 0 || node.x >= 100) node.vx *= -1;
        if (node.y <= 0 || node.y >= 100) node.vy *= -1;

        node.x = Math.max(0, Math.min(100, node.x));
        node.y = Math.max(0, Math.min(100, node.y));

        // Clamp velocity to keep motion subtle
        node.vx = Math.max(-0.2, Math.min(0.2, node.vx));
        node.vy = Math.max(-0.2, Math.min(0.2, node.vy));
      });

      // Draw connections
      nodes.forEach((node) => {
        node.connections.forEach((connId) => {
          const other = nodes[connId];
          if (!other) return;
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / MAX_DISTANCE)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${node.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [reducedMotion, resizeCanvas, drawStatic]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}