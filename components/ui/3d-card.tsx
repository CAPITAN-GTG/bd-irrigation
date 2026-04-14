"use client";

import { cn } from "@/lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

type TiltMode = "interactive" | "static" | "flat";

function useTiltMode(): TiltMode {
  const [mode, setMode] = useState<TiltMode>("flat");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    const sync = () => {
      if (reduceMotion.matches) {
        setMode("flat");
        return;
      }
      if (finePointer.matches) {
        setMode("interactive");
        return;
      }
      setMode("static");
    };

    sync();
    reduceMotion.addEventListener("change", sync);
    finePointer.addEventListener("change", sync);
    return () => {
      reduceMotion.removeEventListener("change", sync);
      finePointer.removeEventListener("change", sync);
    };
  }, []);

  return mode;
}

export const CardContainer = ({
  children,
  className,
  containerClassName,
  perspectivePx = 1100,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  /** Stronger depth on large viewports */
  perspectivePx?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const tiltMode = useTiltMode();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (tiltMode !== "interactive" || !containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 22;
    const y = (e.clientY - top - height / 2) / 22;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform =
      tiltMode === "static"
        ? "rotateY(-5deg) rotateX(4deg)"
        : "rotateY(0deg) rotateX(0deg)";
  };

  useEffect(() => {
    if (!containerRef.current) return;
    if (tiltMode === "static") {
      containerRef.current.style.transform = "rotateY(-5deg) rotateX(4deg)";
    } else if (tiltMode === "flat") {
      containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  }, [tiltMode]);

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "flex items-center justify-center py-8 sm:py-12 lg:py-14",
          containerClassName,
        )}
        style={{
          perspective: `${perspectivePx}px`,
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={() => tiltMode === "interactive" && setIsMouseEntered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative flex items-center justify-center ease-out",
            tiltMode === "interactive"
              ? "duration-200 transition-[transform]"
              : "transition-transform duration-500",
            className,
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
           className={cn(
        "relative mx-auto aspect-square w-full max-w-[17.5rem] sm:max-w-[20rem] md:max-w-[22.5rem] lg:max-w-[25.5rem] [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className,
      )}
    >
      {children}
    </div>
  );
};

type CardItemProps = {
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
};

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
}: CardItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  const applyTransform = useCallback(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [
    isMouseEntered,
    translateX,
    translateY,
    translateZ,
    rotateX,
    rotateY,
    rotateZ,
  ]);

  useEffect(() => {
    applyTransform();
  }, [applyTransform]);

  return (
    <div
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
    >
      {children}
    </div>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a CardContainer");
  }
  return context;
};
