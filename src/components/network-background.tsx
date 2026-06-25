"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;

  vx: number;
  vy: number;

  radius: number;

  hub: boolean;

  pulse: number;

  layer: number;
};

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;

    let animationFrame = 0;
    let time = 0;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const particles: Particle[] = [];
    const stars: { x: number; y: number; r: number }[] = [];

    // =====================
    // STAR FIELD
    // =====================
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.2,
      });
    }

    // =====================
    // PARTICLES
    // =====================
    for (let i = 0; i < 30; i++) {
      const hub = Math.random() > 0.95;

      const layer =
        Math.random() < 0.33
          ? 0.3
          : Math.random() < 0.66
          ? 0.6
          : 1.0;

      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,

        vx:
          (Math.random() - 0.5) *
          (0.15 + layer * 0.6),

        vy:
          (Math.random() - 0.5) *
          (0.15 + layer * 0.6),

        radius: hub
          ? 2.5 + Math.random() * 1.5
          : 0.7 + Math.random() * 1.2,

        hub,

        pulse:
          Math.random() *
          Math.PI *
          2,

        layer,
      });
    }

    // =====================
    // ELECTRIC HUB AURA
    // =====================
    const drawElectricAura = (
      x: number,
      y: number,
      radius: number,
      pulse: number,
      isLight: boolean
    ) => {
      const spikes = 12;

      ctx.strokeStyle = isLight
        ? "rgba(168,85,247,0.7)"
        : "rgba(168,85,247,0.55)";

      ctx.shadowColor = "#a855f7";
      ctx.shadowBlur = isLight ? 2 : 6;
      ctx.lineWidth = 1;

      for (let i = 0; i < spikes; i++) {
        const angle =
          (Math.PI * 2 * i) / spikes;

        const inner = radius + 0.5;

        const outer =
          radius +
          2 +
          Math.sin(pulse * 2 + i) * 1.5;

        const x1 =
          x + Math.cos(angle) * inner;

        const y1 =
          y + Math.sin(angle) * inner;

        const x2 =
          x + Math.cos(angle) * outer;

        const y2 =
          y + Math.sin(angle) * outer;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    const animate = () => {
      time += 0.015;

      // Check if light mode is currently active
      const isLight = document.documentElement.classList.contains("light");

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      // =====================
      // STARS / BACKGROUND DOTS
      // =====================
      for (const star of stars) {
        ctx.beginPath();

        ctx.fillStyle = isLight
          ? "rgba(0,0,0,0.12)"
          : "rgba(255,255,255,0.12)";

        ctx.arc(
          star.x,
          star.y,
          star.r,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      // =====================
      // UPDATE PARTICLES
      // =====================
      for (const p of particles) {
        p.pulse += 0.03;

        p.x += p.vx;
        p.y += p.vy;

        // Strong parallax
        const offsetX =
          ((mouseX -
            window.innerWidth / 2) /
            window.innerWidth) *
          40 *
          p.layer;

        const offsetY =
          ((mouseY -
            window.innerHeight / 2) /
            window.innerHeight) *
          40 *
          p.layer;

        p.x += offsetX * 0.015;
        p.y += offsetY * 0.015;

        // Nearby attraction
        const dxMouse =
          mouseX - p.x;

        const dyMouse =
          mouseY - p.y;

        const mouseDist =
          Math.sqrt(
            dxMouse * dxMouse +
              dyMouse * dyMouse
          );

        if (mouseDist < 180) {
          p.x += dxMouse * 0.001;
          p.y += dyMouse * 0.001;
        }

        if (p.x < -50)
          p.x = canvas.width + 50;

        if (p.x > canvas.width + 50)
          p.x = -50;

        if (p.y < -50)
          p.y = canvas.height + 50;

        if (p.y > canvas.height + 50)
          p.y = -50;
      }

      // =====================
      // CONNECTIONS
      // =====================
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const p2 = particles[j];

          const dx =
            p1.x - p2.x;

          const dy =
            p1.y - p2.y;

          const dist =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (dist > 140)
            continue;

          const baseOpacity = isLight ? 0.22 : 0.12;
          const opacity =
            (
              baseOpacity +
              Math.sin(
                time * 2 + i
              ) *
                0.08
            ) *
            (1 - dist / 140);

          const gradient =
            ctx.createLinearGradient(
              p1.x,
              p1.y,
              p2.x,
              p2.y
            );

          gradient.addColorStop(
            0,
            `rgba(96,165,250,${opacity})`
          );

          gradient.addColorStop(
            1,
            `rgba(168,85,247,${opacity})`
          );

          ctx.strokeStyle =
            gradient;

          ctx.shadowBlur = isLight ? 1 : 4;
          ctx.shadowColor =
            "#8b5cf6";

          ctx.lineWidth =
            p1.hub || p2.hub
              ? 1.2
              : 0.45;

          const cx =
            (p1.x + p2.x) / 2 +
            Math.sin(
              time + i
            ) *
              5;

          const cy =
            (p1.y + p2.y) / 2 +
            Math.cos(
              time + j
            ) *
              5;

          ctx.beginPath();
          ctx.moveTo(
            p1.x,
            p1.y
          );

          ctx.quadraticCurveTo(
            cx,
            cy,
            p2.x,
            p2.y
          );

          ctx.stroke();

          // Energy packet
          const t =
            (
              time * 0.25 +
              i * 0.17
            ) %
            1;

          const px =
            (1 - t) *
              (1 - t) *
              p1.x +
            2 *
              (1 - t) *
              t *
              cx +
            t *
              t *
              p2.x;

          const py =
            (1 - t) *
              (1 - t) *
              p1.y +
            2 *
              (1 - t) *
              t *
              cy +
            t *
              t *
              p2.y;

          ctx.beginPath();

          ctx.fillStyle = isLight
            ? "rgba(139,92,246,0.9)"
            : "rgba(255,255,255,0.9)";

          ctx.shadowBlur = isLight ? 3 : 8;
          ctx.shadowColor =
            "#a855f7";

          ctx.arc(
            px,
            py,
            1,
            0,
            Math.PI * 2
          );

          ctx.fill();
        }
      }

      // =====================
      // NODES
      // =====================
      for (const p of particles) {
        if (p.hub) {
          drawElectricAura(
            p.x,
            p.y,
            p.radius,
            p.pulse,
            isLight
          );
        }

        // tiny glow only
        ctx.beginPath();

        ctx.fillStyle = p.hub
          ? (isLight ? "rgba(168,85,247,0.35)" : "rgba(168,85,247,0.25)")
          : (isLight ? "rgba(96,165,250,0.22)" : "rgba(96,165,250,0.12)");

        ctx.shadowBlur =
          p.hub ? (isLight ? 4 : 8) : (isLight ? 1 : 3);

        ctx.shadowColor = p.hub
          ? "#a855f7"
          : "#60a5fa";

        ctx.arc(
          p.x,
          p.y,
          p.radius * 1.8,
          0,
          Math.PI * 2
        );

        ctx.fill();

        // bright core
        ctx.beginPath();

        ctx.fillStyle = isLight ? "#8b5cf6" : "#ffffff";

        ctx.arc(
          p.x,
          p.y,
          p.radius,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed
        inset-0
        -z-20
        pointer-events-none
        w-full
        h-full
      "
    />
  );
}