"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const isMobile = window.innerWidth < 768;

    // mobile = pas d’animation fragile
    if (isMobile) {
      elements.forEach((el) => {
        (el as HTMLElement).classList.add("show");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}