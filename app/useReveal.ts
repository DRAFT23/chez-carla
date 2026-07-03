"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // 👉 SUR MOBILE : on affiche direct (pas d'animation bug)
    if (isMobile) {
      document.querySelectorAll(".reveal").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    // 👉 DESKTOP : animation normale
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}