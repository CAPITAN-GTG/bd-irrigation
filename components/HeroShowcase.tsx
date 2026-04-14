"use client";

import Image from "next/image";
import { Droplets, Leaf, ShieldCheck } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function HeroShowcase() {
  return (
    <CardContainer
      containerClassName="w-full max-w-none py-6 sm:py-8 lg:py-4 xl:py-2"
      className="w-full"
      perspectivePx={1280}
    >
      <CardBody className="hero-3d-card-root">
        <div className="hero-3d-card relative h-full w-full overflow-hidden border border-white/30 bg-gradient-to-br from-white/12 to-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-[2px]">
          <div
            className="pointer-events-none absolute -left-1/2 top-0 h-[160%] w-[70%] rotate-12 bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-70 mix-blend-overlay"
            aria-hidden
          />
          <CardItem
            translateZ={42}
            className="pointer-events-none absolute inset-0 h-full w-full opacity-90"
          >
            <div className="hero-3d-card__grid absolute inset-0" aria-hidden />
          </CardItem>
          <CardItem
            translateZ={28}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src="/pic-2.webp"
              alt="Landscaping and irrigation installation in the Dallas–Fort Worth area"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 85vw, 380px"
              priority
            />
          </CardItem>
          <div className="hero-3d-card__scrim pointer-events-none absolute inset-0" aria-hidden />
          <CardItem
            translateZ={56}
            className="pointer-events-none absolute left-3 top-3 z-[1] sm:left-4 sm:top-4"
          >
            <span className="hero-3d-card__badge inline-flex items-center gap-1.5 border border-white/35 bg-black/35 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-md sm:text-xs">
              <ShieldCheck size={14} className="shrink-0 text-[#9ee4c0]" aria-hidden />
              Licensed · DFW
            </span>
          </CardItem>
          <CardItem
            translateZ={72}
            className="pointer-events-none absolute bottom-3 left-3 right-3 z-[1] sm:bottom-4 sm:left-4 sm:right-4"
          >
            <div className="flex flex-col gap-2 border border-white/25 bg-black/40 p-3 shadow-xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:p-3.5">
              <p className="flex items-center gap-2 font-heading text-sm font-semibold leading-tight text-white sm:text-base">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[rgba(var(--color-primary-rgb),0.35)] text-[#c8f5dd]">
                  <Droplets size={18} aria-hidden />
                </span>
                Efficient irrigation &amp; lush landscapes
              </p>
              <p className="flex items-center gap-2 text-xs font-medium text-white/85 sm:text-sm">
                <Leaf size={16} className="shrink-0 text-[#a8ebc4]" aria-hidden />
                Design, install, maintain
              </p>
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
