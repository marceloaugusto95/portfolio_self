"use client";

import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type LightboxProps = {
  images: string[];
  title: string;
  /** Active image index, or null when closed. */
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
};

export function Lightbox({ images, title, index, onClose, onIndex }: LightboxProps) {
  const open = index !== null;

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      onIndex((index + dir + images.length) % images.length);
    },
    [index, images.length, onIndex],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go, onClose]);

  if (index === null) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full border border-border-strong bg-surface/80 p-2 text-muted transition-colors hover:text-foreground"
      >
        <X size={20} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border-strong bg-surface/80 p-2 text-muted transition-colors hover:text-foreground sm:left-4"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border-strong bg-surface/80 p-2 text-muted transition-colors hover:text-foreground sm:right-4"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <figure
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full flex-col items-center gap-3"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index]}
          alt={`${title} screenshot ${index + 1} of ${images.length}`}
          className="max-h-[80vh] w-auto max-w-full rounded-lg border border-border object-contain shadow-2xl"
        />
        <figcaption className="text-xs text-muted">
          {title} · {index + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  );
}
