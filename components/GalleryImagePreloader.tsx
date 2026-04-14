"use client";

import { useEffect } from "react";
import { getImageProps } from "next/image";

/** Match lightbox `<Image sizes="100vw" quality={85} />` so the browser caches the same URLs. */
const LIGHTBOX_WIDTH = 1920;
const LIGHTBOX_HEIGHT = 1080;
const LIGHTBOX_QUALITY = 85;

export function GalleryImagePreloader({ paths }: { paths: readonly string[] }) {
  useEffect(() => {
    const filtered = paths.filter(Boolean);
    if (filtered.length === 0) return;

    const tasks = filtered.map((src) => {
      try {
        const { props } = getImageProps({
          src,
          alt: "",
          width: LIGHTBOX_WIDTH,
          height: LIGHTBOX_HEIGHT,
          quality: LIGHTBOX_QUALITY,
          sizes: "100vw",
        });

        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          try {
            img.fetchPriority = "low";
          } catch {
            /* Safari / older */
          }
          if (props.srcSet) {
            img.srcset = props.srcSet;
            img.sizes = props.sizes ?? "100vw";
          }
          img.src = props.src;
        });
      } catch {
        return Promise.resolve();
      }
    });

    void Promise.all(tasks);
  }, [paths]);

  return null;
}
