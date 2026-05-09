import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Obsidian Docs makes my workflow seamless.",
    author: "Jane Doe",
    role: "Product Designer",
  },
  {
    quote: "The API is incredibly intuitive.",
    author: "John Smith",
    role: "Frontend Engineer",
  },
  {
    quote: "I love the smooth animations on the site.",
    author: "Alice Lee",
    role: "Developer Advocate",
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.testimonial');
    gsap.from(items, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="mx-auto max-w-5xl py-16 px-6">
      <h2 className="mb-8 text-center text-4xl font-bold text-white">What People Say</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="mb-4 text-lg italic text-neutral-300">“{t.quote}”</p>
            <p className="font-semibold text-white">{t.author}</p>
            <p className="text-sm text-neutral-400">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
