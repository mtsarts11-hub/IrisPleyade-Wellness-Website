"use client";

import { useEffect } from "react";

const ease = 0.26;

export function SmoothScroll() {
  useEffect(() => {
    let current = window.scrollY;
    let target = window.scrollY;
    let animationFrame = 0;
    let isAnimating = false;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const animate = () => {
      const distance = target - current;
      current += distance * ease;

      if (Math.abs(distance) < 0.5) {
        current = target;
        isAnimating = false;
      }

      window.scrollTo(0, current);

      if (isAnimating) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      if (isAnimating) return;
      isAnimating = true;
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const hash = anchor?.getAttribute("href");
      if (!hash || hash === "#") return;

      const destination = document.querySelector(hash);
      if (!destination) return;

      event.preventDefault();
      current = window.scrollY;
      const headerOffset = hash === "#inicio" ? 0 : 76;
      target = Math.min(
        maxScroll(),
        Math.max(
          0,
          destination.getBoundingClientRect().top +
            window.scrollY -
            headerOffset,
        ),
      );
      startAnimation();
      window.history.pushState(null, "", hash);
    };

    const stopAnimation = () => {
      if (!isAnimating) return;
      window.cancelAnimationFrame(animationFrame);
      isAnimating = false;
      current = window.scrollY;
      target = window.scrollY;
    };

    const syncNativeScroll = () => {
      if (isAnimating) return;
      current = window.scrollY;
      target = window.scrollY;
    };

    window.addEventListener("wheel", stopAnimation, { passive: true });
    window.addEventListener("touchstart", stopAnimation, { passive: true });
    window.addEventListener("scroll", syncNativeScroll, { passive: true });
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("wheel", stopAnimation);
      window.removeEventListener("touchstart", stopAnimation);
      window.removeEventListener("scroll", syncNativeScroll);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
