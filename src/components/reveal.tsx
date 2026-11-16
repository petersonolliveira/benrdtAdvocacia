"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    // The content is visible before JavaScript and stays visible if observation is unavailable.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.classList.add("reveal-pending");
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        element.classList.remove("reveal-pending");
        observer.disconnect();
      }
    }, { threshold: 0.06 });
    observer.observe(element);
    return () => { element.classList.remove("reveal-pending"); observer.disconnect(); };
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
