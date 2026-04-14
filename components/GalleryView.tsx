"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_ALT, GALLERY_IMAGE_PATHS } from "@/lib/gallery-images";

const THUMB_SIZES =
  "(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1100px) 25vw, 220px";

type GalleryViewLayout = "grid" | "rail";

export function GalleryView({
  images = GALLERY_IMAGE_PATHS,
  layout = "grid",
  label = "Project photo thumbnails. Select an image to view it larger.",
  thumbSizes = THUMB_SIZES,
  thumbAspect = "square",
}: {
  images?: readonly string[];
  layout?: GalleryViewLayout;
  label?: string;
  thumbSizes?: string;
  thumbAspect?: "square" | "landscape";
}) {
  const labelId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const safeImages = useMemo(() => images.filter(Boolean), [images]);

  const close = useCallback(() => setOpenIndex(null), []);

  const goNext = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return null;
      return i >= safeImages.length - 1 ? 0 : i + 1;
    });
  }, [safeImages.length]);

  const goPrev = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return null;
      return i <= 0 ? safeImages.length - 1 : i - 1;
    });
  }, [safeImages.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeBtnRef.current?.focus());
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, goNext, goPrev]);

  const scrollRailBy = useCallback((dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    const delta = Math.max(320, Math.round(el.clientWidth * 0.9)) * dir;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  if (safeImages.length === 0) {
    return null;
  }

  return (
    <>
      {layout === "grid" ? (
        <div className="gallery-grid" role="list" aria-label={label}>
          {safeImages.map((src, index) => (
            <div key={src} className="gallery-grid__cell" role="listitem">
              <button
                type="button"
                className="gallery-grid__thumb"
                onClick={() => setOpenIndex(index)}
                aria-label={`Open image ${index + 1} of ${safeImages.length}`}
              >
                <span className="gallery-grid__frame">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="gallery-grid__img"
                    sizes={thumbSizes}
                    loading="eager"
                    quality={75}
                    decoding="async"
                  />
                </span>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="gallery-rail-wrap" aria-label={label}>
          <div className="gallery-rail__header">
            <div className="gallery-rail__controls" aria-label="Carousel controls">
              <button
                type="button"
                className="gallery-rail__btn"
                onClick={() => scrollRailBy(-1)}
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} aria-hidden />
              </button>
              <button
                type="button"
                className="gallery-rail__btn"
                onClick={() => scrollRailBy(1)}
                aria-label="Scroll right"
              >
                <ChevronRight size={18} aria-hidden />
              </button>
            </div>
          </div>
          <div
            ref={railRef}
            className={`gallery-rail gallery-rail--${thumbAspect}`}
            role="list"
          >
            {safeImages.map((src, index) => (
              <div key={src} className="gallery-rail__item" role="listitem">
                <button
                  type="button"
                  className="gallery-rail__thumb"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Open image ${index + 1} of ${safeImages.length}`}
                >
                  <span className="gallery-rail__frame">
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="gallery-rail__img"
                                           sizes={thumbSizes}
                      loading="eager"
                      quality={75}
                      decoding="async"
                    />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {openIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
        >
          <button
            type="button"
            className="gallery-lightbox__backdrop"
            aria-label="Close gallery"
            onClick={close}
          />
          <div className="gallery-lightbox__chrome">
            <p id={labelId} className="visually-hidden">
              Image {openIndex + 1} of {safeImages.length}. Use arrow keys or swipe to move
              between photos. Press Escape to close.
            </p>
            <button
              ref={closeBtnRef}
              type="button"
              className="gallery-lightbox__close"
              aria-label="Close"
              onClick={close}
            >
              <X size={28} strokeWidth={2} aria-hidden />
            </button>
            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              aria-label="Previous image"
              onClick={goPrev}
            >
              <ChevronLeft size={36} strokeWidth={2} aria-hidden />
            </button>
            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              aria-label="Next image"
              onClick={goNext}
            >
              <ChevronRight size={36} strokeWidth={2} aria-hidden />
            </button>
            <div
              className="gallery-lightbox__stage"
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                const start = touchStartX.current;
                touchStartX.current = null;
                const end = e.changedTouches[0]?.clientX;
                if (start == null || end == null) return;
                const dx = end - start;
                if (dx > 56) goPrev();
                else if (dx < -56) goNext();
              }}
            >
              <Image
                key={safeImages[openIndex]}
                src={safeImages[openIndex]!}
                alt={GALLERY_ALT}
                fill
                className="gallery-lightbox__full"
                sizes="100vw"
                priority
                quality={85}
                draggable={false}
              />
            </div>
            <div className="gallery-lightbox__footer" aria-hidden>
              <span className="gallery-lightbox__counter">
                {openIndex + 1} / {safeImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
