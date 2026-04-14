"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxSlashFigureProps = {
  src: string;
  alt: string;
  sizes: string;
  figureClassName: string;
  imgClassName: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  /** Vertical shift in px at full parallax range */
  strength?: number;
};

export function ParallaxSlashFigure({
  src,
  alt,
  sizes,
  figureClassName,
  imgClassName,
  loading = "lazy",
  priority,
  strength = 20,
}: ParallaxSlashFigureProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    if (typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      inner.style.transform = "";
      return;
    }

    let raf = 0;

    const tick = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const centerOffset = (rect.top + rect.height / 2 - vh / 2) / vh;
      const y = -centerOffset * strength;
      inner.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    const onScrollOrResize = () => {
      if (raf) return;
      raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={wrapRef} className={figureClassName}>
      <div ref={innerRef} className="home-parallax-slash__track">
        <Image src={src} alt={alt} fill className={imgClassName} sizes={sizes} loading={loading} priority={priority} />
      </div>
    </div>
  );
}
