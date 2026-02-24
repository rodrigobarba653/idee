"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Root margin (e.g. "0px 0px -50px 0px" to trigger when 50px from bottom of viewport) */
  rootMargin?: string;
  /** Minimum fraction of element visible (0-1) to reveal */
  threshold?: number;
  /** Stagger delay in ms for children (e.g. in a list) */
  delay?: number;
};

export function ScrollReveal({
  children,
  className = "",
  rootMargin = "0px 0px -40px 0px",
  threshold = 0.1,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (delay > 0) {
          timeoutId = setTimeout(() => setIsVisible(true), delay);
        } else {
          setIsVisible(true);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [rootMargin, threshold, delay]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "scroll-reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
