import { useEffect, useRef } from 'react';

interface MeshNode {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  phase: number;
  glow: number;
}

const LINE_COLOR = '64, 140, 255';
const LINE_GLOW_COLOR = '94, 234, 212';
const NODE_COLOR = '186, 214, 255';
const NODE_GLOW_COLOR = '203, 255, 240';
const CELL_SIZE = 100;
const JITTER = 0.22;
const POINTER_RADIUS = 220;
const POINTER_PUSH = 14;
const POINTER_EASE = 0.07;
const DRIFT_EASE = 0.035;
const DRIFT_AMOUNT = 3;

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.closest('.immersive-hero') as HTMLElement | null;
    if (!canvas || !section) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    const ctx = context;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cols = 0;
    let rows = 0;
    let nodes: MeshNode[] = [];
    const pointer = { x: -9999, y: -9999, active: false };

    function nodeAt(c: number, r: number) {
      return nodes[r * cols + c];
    }

    function createMesh() {
      cols = Math.max(2, Math.round(width / CELL_SIZE) + 2);
      rows = Math.max(2, Math.round(height / CELL_SIZE) + 2);
      const spacingX = width / (cols - 1);
      const spacingY = height / (rows - 1);
      nodes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const jitterX = (Math.random() - 0.5) * spacingX * JITTER;
          const jitterY = (Math.random() - 0.5) * spacingY * JITTER;
          nodes.push({
            x: c * spacingX + jitterX,
            y: r * spacingY + jitterY,
            offsetX: 0,
            offsetY: 0,
            phase: Math.random() * Math.PI * 2,
            glow: 0,
          });
        }
      }
    }

    function resize() {
      if (!canvas || !section) return;
      width = section.clientWidth;
      height = section.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createMesh();
    }

    function handlePointerMove(event: PointerEvent) {
      const rect = section!.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    }

    function handlePointerLeave() {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    }

    function drawEdge(a: MeshNode, b: MeshNode, baseAlpha: number) {
      const ax = a.x + a.offsetX;
      const ay = a.y + a.offsetY;
      const bx = b.x + b.offsetX;
      const by = b.y + b.offsetY;
      const glow = Math.max(a.glow, b.glow);
      const alpha = baseAlpha + glow * 0.3;
      const color = glow > 0.05 ? LINE_GLOW_COLOR : LINE_COLOR;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${color}, ${Math.min(1, alpha)})`;
      ctx.lineWidth = 1 + glow * 0.5;
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.stroke();
    }

    function drawMesh() {
      ctx.clearRect(0, 0, width, height);
      ctx.shadowBlur = 0;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const n = nodeAt(c, r);
          const right = c < cols - 1 ? nodeAt(c + 1, r) : null;
          const down = r < rows - 1 ? nodeAt(c, r + 1) : null;
          const diag = right && down ? nodeAt(c + 1, r + 1) : null;
          if (right) drawEdge(n, right, 0.24);
          if (down) drawEdge(n, down, 0.24);
          if (diag) drawEdge(n, diag, 0.08);
        }
      }

      for (const n of nodes) {
        const nx = n.x + n.offsetX;
        const ny = n.y + n.offsetY;
        const color = n.glow > 0.05 ? NODE_GLOW_COLOR : NODE_COLOR;
        ctx.shadowBlur = 3 + n.glow * 10;
        ctx.shadowColor = `rgba(${color}, ${0.5 + n.glow * 0.3})`;
        ctx.beginPath();
        ctx.arc(nx, ny, 1.3 + n.glow * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${0.4 + n.glow * 0.4})`;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    }

    let rafId = 0;
    let lastTime = performance.now();
    let elapsed = 0;

    function tick(now: number) {
      const dt = Math.min(now - lastTime, 48);
      lastTime = now;
      const step = dt / 16.67;
      elapsed += dt;

      for (const n of nodes) {
        const driftX = Math.sin(elapsed / 1800 + n.phase) * DRIFT_AMOUNT;
        const driftY = Math.cos(elapsed / 2200 + n.phase) * DRIFT_AMOUNT;

        let targetOffsetX = driftX;
        let targetOffsetY = driftY;
        let targetGlow = 0;

        if (pointer.active) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < POINTER_RADIUS && dist > 0.01) {
            const proximity = 1 - dist / POINTER_RADIUS;
            const strength = proximity * POINTER_PUSH;
            targetOffsetX += (dx / dist) * strength;
            targetOffsetY += (dy / dist) * strength;
            targetGlow = proximity;
          }
        }

        const ease = pointer.active ? POINTER_EASE : DRIFT_EASE;
        n.offsetX += (targetOffsetX - n.offsetX) * ease * step;
        n.offsetY += (targetOffsetY - n.offsetY) * ease * step;
        n.glow += (targetGlow - n.glow) * 0.12 * step;
      }

      drawMesh();
      rafId = requestAnimationFrame(tick);
    }

    resize();

    if (prefersReducedMotion) {
      drawMesh();
    } else {
      rafId = requestAnimationFrame(tick);
      section.addEventListener('pointermove', handlePointerMove);
      section.addEventListener('pointerleave', handlePointerLeave);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (prefersReducedMotion) drawMesh();
    });
    resizeObserver.observe(section);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      section.removeEventListener('pointermove', handlePointerMove);
      section.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="immersive-hero-canvas" aria-hidden="true" />;
}
