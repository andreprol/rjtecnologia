"use client";

import Image from "next/image";
import { useRef } from "react";
import heroPc from "@/assets/hero-pc.png";

export function HeroVisual() {
  const card = useRef<HTMLDivElement>(null);

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = card.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`;
  }

  function handleLeave() {
    const el = card.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
  }

  return (
    <div
      className="relative flex h-full items-center justify-center [perspective:1000px]"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <div className="absolute h-[80%] w-[80%] animate-pulse rounded-full bg-accent/20 blur-[100px]" />
      <div className="absolute right-0 h-[60%] w-[60%] rounded-full bg-accent-2/20 blur-[90px]" />

      <div className="relative w-full max-w-sm motion-safe:animate-[float_6s_ease-in-out_infinite]">
        <div
          ref={card}
          className="transition-transform duration-300 ease-out will-change-transform"
        >
          <Image
            src={heroPc}
            alt="Gabinete de computador aberto com iluminação RGB, representando os serviços de manutenção da RJ Tecnologia"
            priority
            sizes="(min-width: 1024px) 480px, 80vw"
            className="w-full object-contain drop-shadow-[0_30px_60px_rgba(34,211,238,0.3)]"
          />
        </div>
      </div>
    </div>
  );
}
