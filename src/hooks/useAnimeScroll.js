import { useEffect } from 'react';
import { animate } from 'animejs';

export function useAnimeScroll() {
  useEffect(() => {
    // Staggered section reveals on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            // Stagger reveal child elements
            const elements = target.querySelectorAll('.anime-reveal');
            if (elements.length > 0) {
              animate(elements, {
                translateY: [40, 0],
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 1000,
                delay: (el, i) => i * 120,
                easing: 'easeOutCubic',
              });
            }

            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);
}
