import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.from(el.children, {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  const features = [
    { title: 'Fast', description: 'GPU‑accelerated motion and smooth 60fps' },
    { title: 'Adaptive', description: 'Responsive design that works everywhere' },
    { title: 'Composable', description: 'Mix and match tweens and timelines' },
  ];

  return (
    <section ref={containerRef} className="mx-auto max-w-5xl py-16 px-6">
      <h2 className="mb-8 text-center text-4xl font-bold text-white">Features</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <h3 className="mb-2 text-2xl font-semibold text-white">{f.title}</h3>
            <p className="text-sm text-neutral-400">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
