"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ArrowUpRight, Box, Command, Globe, Heart, Layers, LucideIcon, Send, GitBranchPlus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------------------------------- */
/*                                   HERO                                     */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl">
        <div className="size-2 rounded-full bg-violet-500" />
        Open-source Type-safe SDK for Obsidian
      </div>

      {/* Heading */}
      <h1 className="max-w-6xl text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground leading-tight">
        Automate Your{" "}
        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
          Obsidian Vaults
        </span>{" "}
        Like a System
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
        A powerful TypeScript SDK to build workflows on top of Obsidian —
        manage notes, files, links, search, templates, and local knowledge graphs
        with clean programmatic APIs.
      </p>

      {/* NPM install block (FIXED LIGHT/DARK) */}
      <div className="mt-8 w-full max-w-xl rounded-xl border border-border bg-muted/20 px-5 py-4 text-left backdrop-blur-xl">
        <p className="text-xs text-muted-foreground mb-2">Install via npm</p>
        <code className="text-sm text-violet-400">
          npm install obsidian-sdk
        </code>
      </div>

      {/* Buttons (UNIFIED SYSTEM STYLE) */}
      <div className="mt-10 flex items-center gap-4">

        <Link
          href="/docs"
          className="rounded-xl bg-violet-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-600"
        >
          Explore Docs
        </Link>

        <Link
          href="https://github.com/MYSELF-SAYAN/obsidian_cli_sdk"
          className="rounded-xl border border-border bg-muted/20 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-xl transition hover:bg-muted"
        >
          GitHub
        </Link>

      </div>

    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CODE SECTION                                                               */
/* -------------------------------------------------------------------------- */

function CodePreviewSection({
  codeRef,
}: {
  codeRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section
      ref={codeRef}
      className="relative z-20 mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-32"
    >
      <div className="w-full overflow-hidden rounded-3xl border border-border bg-muted/20 shadow-[0_0_120px_rgba(139,92,246,0.15)] backdrop-blur-xl">

        <div className="flex items-center gap-2 border-b border-border px-6 py-4">
          <div className="size-3 rounded-full bg-red-500" />
          <div className="size-3 rounded-full bg-yellow-500" />
          <div className="size-3 rounded-full bg-green-500" />
        </div>

        <pre className="overflow-x-auto p-8 text-left text-sm text-foreground">
          {`import { Obsidian } from "obsidian-sdk";

const obsidian = new Obsidian({
  vault: "newvault",
});

// Create a note
await obsidian.notes.create({
  path: "Notes/Idea.md",
  content: "# New Idea"
});

// Read a note
const note = await obsidian.notes.read({
  path: "Notes/Idea.md"
});

// Append content
await obsidian.notes.append({
  path: "Notes/Idea.md",
  content: "\\n## Updates\\nThis is evolving."
});`}
        </pre>

      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MORPHING SECTION (FIXED)                                                   */
/* -------------------------------------------------------------------------- */

function MagneticMorphStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const image = imageRef.current;
      const content = contentRef.current;
      const text = textRef.current;

      if (!container || !image || !content || !text) return;

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });

      tl.to(image, { width: "50%", ease: "none" }, 0);
      tl.to(image, { scale: 0.95, borderRadius: "24px", ease: "none" }, 0);

      tl.to(
        text,
        {
          opacity: 0,
          y: -30,
          filter: "blur(8px)",
          ease: "none",
        },
        0
      );

      tl.fromTo(
        content,
        {
          x: "100%",
          opacity: 0,
          filter: "blur(12px)",
        },
        {
          x: "0%",
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="
        relative h-screen overflow-hidden
        bg-white text-zinc-900
        dark:bg-black dark:text-white
      "
    >
      <div className="relative flex h-screen w-full">

        {/* IMAGE */}
        <div
          ref={imageRef}
          className="absolute inset-0 h-full w-full overflow-hidden will-change-transform"
        >
          <img
            src="https://i.redd.it/k2i4ims15fva1.png"
            className="h-full w-full object-cover scale-110"
            alt="hero"
          />

          <div className="absolute inset-0 bg-black/30 dark:bg-black/60" />

          {/* HERO TEXT */}
          <div
            ref={textRef}
            className="absolute inset-0 flex flex-col items-center justify-center text-center will-change-transform"
          >
            <h2 className="text-6xl font-black tracking-tight text-white">
              OBSIDIAN-SDK
            </h2>
            <p className="mt-2 text-sm tracking-widest uppercase text-zinc-200/80 dark:text-zinc-300">
              Scroll to explore
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          ref={contentRef}
          className="
            absolute right-0 top-0 h-full w-1/2
            flex items-center justify-center
            px-10 md:px-20 will-change-transform
          "
        >
          <div className="max-w-xl space-y-6">

            {/* label */}
            <p className="text-xs uppercase tracking-[0.35em] text-violet-500 dark:text-violet-400">
              Open Source · Community Driven
            </p>

            {/* heading */}
            <h2 className="
              text-5xl font-bold leading-tight tracking-tight
              text-zinc-900 dark:text-white
            ">
              Built in public, by developers like you
            </h2>

            {/* description */}
            <p className="
              text-zinc-600 dark:text-zinc-400
              leading-8 text-[15px]
            ">
              Obsidian SDK is fully open-source — designed for extensibility,
              contributions, and real-world automation workflows. Every feature
              evolves with the community.
            </p>

            {/* cards */}
            <div className="grid grid-cols-2 gap-4">

              <div className="
                rounded-xl p-5
                border border-zinc-200 bg-zinc-50
                dark:border-white/10 dark:bg-white/5
              ">
                <h4 className="font-semibold text-zinc-900 dark:text-white">
                  Open Contributions
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Add modules, fix CLI bindings, or extend APIs.
                </p>
              </div>

              <div className="
                rounded-xl p-5
                border border-zinc-200 bg-zinc-50
                dark:border-white/10 dark:bg-white/5
              ">
                <h4 className="font-semibold text-zinc-900 dark:text-white">
                  Plugin Friendly
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Extend SDK behavior with custom automation layers.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="https://github.com/MYSELF-SAYAN/obsidian_cli_sdk"
                className="
                  inline-flex items-center gap-2
                  rounded-full px-6 py-3
                  bg-zinc-900 text-white
                  dark:bg-white dark:text-black
                  font-semibold
                  hover:opacity-90 transition
                "
              >
                Contribute on GitHub
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */


interface FeatureItem {
  title: string;
  desc: string;
  icon?: LucideIcon;
}

interface AccordionFeatureProps {
  features?: FeatureItem[];
  backgroundColor?: string;
  title?: string;
  titleHighlight?: string;
  activeBarColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
  cardBgColor?: string;
  iconColor?: string;
}

const AccordionFeature: React.FC = () => {
  const [active, setActive] = useState(0);

  const features = [
    {
      title: "Notes",
      desc: "Full CRUD operations for markdown notes with YAML front-matter support.",
      icon: Command,
      code: `import { Obsidian } from "obsidian-sdk";

const obsidian = new Obsidian({
  vault: "newvault",
});

await obsidian.notes.create({
  path: "Notes/Idea.md",
  content: "# New Idea"
});

const note = await obsidian.notes.read({
  path: "Notes/Idea.md"
});

await obsidian.notes.append({
  path: "Notes/Idea.md",
  content: "\\n## Updates\\nThis is evolving."
});`,
    },
    {
      title: "Files",
      desc: "List and filter all vault files with metadata like size and timestamps.",
      icon: Box,
      code: `const obsidian = new Obsidian({ vault: "newvault" });

const files = await obsidian.files.list();

const notes = await obsidian.files.list({
  filter: "type:note"
});

const projectFiles = await obsidian.files.list({
  filter: "path:/Projects/"
});`,
    },
    {
      title: "FileOps",
      desc: "Low-level file operations like move, copy, read, and prepend.",
      icon: Layers,
      code: `const obsidian = new Obsidian({ vault: "newvault" });

await obsidian.fileOps.move(
  "Docs/Old.md",
  "Archive/New.md"
);

await obsidian.fileOps.copy(
  "Assets/logo.png",
  "Backup/logo.png"
);

await obsidian.fileOps.prepend(
  "Notes.md",
  "# Important Header\\n"
);`,
    },
    {
      title: "Search",
      desc: "Full-text search, tag queries, and contextual search across vault.",
      icon: Globe,
      code: `const obsidian = new Obsidian({ vault: "newvault" });

const results = await obsidian.search.search({
  query: "important meeting"
});

const todos = await obsidian.search.tasks({
  status: "todo"
});

const tags = await obsidian.search.getTags();`,
    },
    {
      title: "Linking",
      desc: "Backlinks, outgoing links, orphans, and graph-based queries.",
      icon: Command,
      code: `const obsidian = new Obsidian({ vault: "newvault" });

const backlinks = await obsidian.linking.backlinks({
  file: "Project.md"
});

const outgoing = await obsidian.linking.outgoing({
  file: "Project.md"
});

const orphans = await obsidian.linking.orphans();`,
    },
    {
      title: "Templates",
      desc: "Insert and render reusable markdown templates programmatically.",
      icon: Box,
      code: `const obsidian = new Obsidian({ vault: "newvault" });

const tpl = await obsidian.templates.read("Weekly");

await obsidian.templates.insert(
  "Weekly",
  "Notes/Agenda.md"
);

await obsidian.templates.insert("Meeting");`,
    },
    {
      title: "Workspace",
      desc: "Save and restore UI layouts for context switching.",
      icon: Layers,
      code: `const obsidian = new Obsidian({ vault: "newvault" });

await obsidian.workspace.save("coding");

await obsidian.workspace.load("coding");

await obsidian.workspace.load("writing");`,
    },
    {
      title: "Dev Tools",
      desc: "Debug utilities like eval, DevTools toggle, and screenshots.",
      icon: Globe,
      code: `const obsidian = new Obsidian({ vault: "newvault" });

await obsidian.dev.toggleDevTools();

const version = await obsidian.dev.eval("app.version");

await obsidian.dev.screenshot("/tmp/obsidian.png");`,
    },
  ];

  const activeFeature = features[active];

  return (
    <section
      className="
        w-full min-h-screen flex items-center justify-center px-4 py-20

        bg-white text-zinc-900
        dark:bg-black dark:text-white
      "
    >
      <div className="mx-auto max-w-7xl w-full flex flex-col lg:flex-row gap-12">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">

          <h2 className="
            text-4xl font-bold tracking-tight mb-10
            text-zinc-900 dark:text-white
          ">
            SDK Modules{" "}
            <span className="text-zinc-500 dark:text-zinc-400 font-medium">
              Overview
            </span>
          </h2>

          <div className="
            max-h-[70vh] overflow-y-auto pr-4 space-y-1
            scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700
            scrollbar-track-transparent
          ">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = active === index;

              return (
                <div
                  key={feature.title}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="
                    cursor-pointer border-b
                    border-zinc-200 dark:border-white/10
                    py-6 transition-all
                  "
                >
                  <div className="flex items-center gap-4">

                    <Icon
                      size={18}
                      className={
                        isActive
                          ? "text-zinc-900 dark:text-white"
                          : "text-zinc-400 dark:text-zinc-500"
                      }
                    />

                    <div>

                      <h3
                        className={`
                          text-xl font-semibold tracking-tight transition
                          ${isActive
                            ? "text-zinc-900 dark:text-white"
                            : "text-zinc-500 dark:text-zinc-400"
                          }
                        `}
                      >
                        {feature.title}
                      </h3>

                      <p className="
                        text-sm mt-1 max-w-md leading-relaxed
                        text-zinc-500 dark:text-zinc-400
                      ">
                        {feature.desc}
                      </p>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">

          <div className="w-full max-w-xl">

            <div className="
              rounded-2xl overflow-hidden shadow-2xl

              border border-zinc-200 bg-zinc-50
              dark:border-white/10 dark:bg-black/40
            ">

              {/* top bar */}
              <div className="
                flex items-center gap-2 px-4 py-3 border-b

                border-zinc-200 dark:border-white/10
              ">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />

                <span className="
                  ml-4 text-xs font-mono tracking-wide
                  text-zinc-500 dark:text-zinc-400
                ">
                  obsidian-sdk.ts
                </span>
              </div>

              {/* CODE */}
              <pre className="
                p-6 text-sm leading-relaxed overflow-x-auto
                whitespace-pre-wrap break-words

                text-zinc-800 dark:text-zinc-200
              ">
                <code>{activeFeature.code}</code>
              </pre>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

const SOCIALS = [
  { name: "GitHub", icon: <GitBranchPlus size={20} /> },
];

const LINKS = ["Home", "About", "Services", "Work", "Contact"];

export const GridFooter = () => {
  return (
    <footer className="border-t border-border bg-background text-foreground">

      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">

        {/* Brand Column */}
        <div className="p-12 md:col-span-2 flex flex-col justify-between h-[400px] group hover:bg-muted/20 transition-colors duration-500">

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight max-w-sm">
              Turn your Obsidian vault into a programmable system.
            </h2>

            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Obsidian SDK is an open-source TypeScript layer over the CLI —
              built for automation, context engines, and knowledge workflows.
            </p>
          </div>

        </div>

        {/* Documentation Column */}
        <div className="p-12 flex flex-col gap-6 group hover:bg-muted/20 transition-colors duration-500">

          <span className="text-muted-foreground font-mono text-sm tracking-wider">
            NAVIGATION
          </span>

          <Link
            href="/docs"
            className="text-xl font-medium flex items-center gap-2 text-foreground hover:text-violet-400 transition-colors group/link"
          >
            SDK Documentation

            <ArrowUpRight
              className="opacity-0 group-hover/link:opacity-100 transition-opacity"
              size={16}
            />
          </Link>
          <Link
            href="/docs/api"
            className="text-xl font-medium flex items-center gap-2 text-foreground hover:text-violet-400 transition-colors group/link"
          >
            API Documentation

            <ArrowUpRight
              className="opacity-0 group-hover/link:opacity-100 transition-opacity"
              size={16}
            />
          </Link>
        </div>

        {/* Socials Column */}
        <div className="p-12 flex flex-col gap-6 group hover:bg-muted/20 transition-colors duration-500">

          <span className="text-muted-foreground font-mono text-sm tracking-wider">
            SOCIALS
          </span>

          {[
            { name: "GitHub", url: "https://github.com/MYSELF-SAYAN/obsidian_cli_sdk" },
            { name: "Reddit", url: "https://www.reddit.com/user/Cubic_coder/" },
            { name: "Twitter", url: "https://x.com/itz_sayan_03" },
             { name: "Linkedin", url: "https://www.linkedin.com/in/sayan-mukherjee-898a47257" }
          ].map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              className="text-xl font-medium flex items-center gap-2 text-foreground hover:text-violet-400 transition-colors group/link"
            >
              {s.name}

              <ArrowUpRight
                className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                size={16}
              />
            </a>
          ))}

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border p-6 flex justify-center text-muted-foreground text-sm">
        <p className="flex items-center gap-2">
          Open source SDK built for developers • Made with
          <Heart size={12} className="text-red-400" />
          by Sayan
        </p>
      </div>

    </footer>
  );
};
function FAQSection() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "What is Obsidian SDK used for?",
      a: "It lets you programmatically control your Obsidian vault — create notes, manage files, run searches, and build automation workflows using a TypeScript API over the CLI."
    },
    {
      q: "Does it modify my vault directly?",
      a: "Yes, but safely. All operations go through the Obsidian CLI layer, ensuring structured, predictable changes like create, move, append, and delete."
    },
    {
      q: "Can I build automation workflows with it?",
      a: "Absolutely. You can chain APIs like notes, search, linking, and templates to build full automation pipelines for your vault."
    },
    {
      q: "Is it only for Obsidian desktop?",
      a: "Yes, currently it requires the Obsidian desktop app with CLI enabled. The SDK communicates locally with your running vault."
    },
    {
      q: "Can I use it for AI or context systems?",
      a: "Yes. The search, linking, and file APIs are designed to help build local context engines, AI agents, and knowledge graph systems."
    },
    {
      q: "Is the SDK extensible?",
      a: "Yes. You can build custom modules on top of fileOps, notes, and search to extend functionality for your own workflows."
    },
    {
      q: "Does it support plugins or templates?",
      a: "Yes. You can integrate templates, trigger workspace layouts, and even interact with plugin-driven features via CLI extensions."
    }
  ];

  return (
    <section className="py-28 px-6 max-w-4xl mx-auto">
      
      {/* Heading (UNIFIED TYPOGRAPHY) */}
      <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground text-center mb-20">
        COMMON{" "}
        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
          CURIOSITIES_
        </span>
      </h2>

      <div className="space-y-5">
        {faqs.map((f, i) => (
          <div
            key={i}
            onClick={() => setOpen(open === i ? -1 : i)}
            className="
              rounded-2xl
              border border-border
              bg-muted/20
              backdrop-blur-xl
              overflow-hidden
              transition-all
              cursor-pointer
              hover:border-violet-400/40
            "
          >

            {/* Question row */}
            <div
              className={cn(
                "p-7 flex justify-between items-center transition-colors",
                open === i ? "bg-muted/40" : ""
              )}
            >
              <h3 className="text-lg md:text-xl font-medium text-foreground">
                {f.q}
              </h3>

              <button
                className={cn(
                  "w-10 h-10 rounded-full border border-border bg-background/40 flex items-center justify-center transition-transform duration-500",
                  open === i ? "rotate-45 text-violet-400" : "text-muted-foreground"
                )}
              >
                <Plus size={20} />
              </button>
            </div>

            {/* Answer (NO ANIMATION CHANGED) */}
            {open === i && (
              <div className="p-8 md:p-10 text-muted-foreground text-base md:text-lg leading-relaxed bg-background/40">
                {f.a}
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}
interface UiloraNightGridProps {
  title?: string;
  description?: string;
  accentColor?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Micro icons (accent-colored)
// ─────────────────────────────────────────────────────────────────────────────
const IconSearch = ({ c }: { c: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="7.5" cy="7.5" r="5" stroke={c} strokeWidth="1.6" />
    <line x1="11.5" y1="11.5" x2="16.5" y2="16.5" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconCode = ({ c }: { c: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M6,4.5 L1.5,9 L6,13.5" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12,4.5 L16.5,9 L12,13.5" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconPalette = ({ c }: { c: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="6.5" stroke={c} strokeWidth="1.6" />
    <circle cx="9" cy="4.5" r="1.5" fill={c} />
    <circle cx="13.5" cy="11.5" r="1.5" fill={c} />
    <circle cx="4.5" cy="11.5" r="1.5" fill={c} />
  </svg>
);
const IconLayers = ({ c }: { c: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9,2 L16.5,6 L9,10 L1.5,6 Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M1.5,10 L9,14 L16.5,10" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Animated constellation illustration for hero card
// ─────────────────────────────────────────────────────────────────────────────
const Constellation = ({ accent }: { accent: string }) => {
  const dots = [
    { x: 14, y: 16, hi: false }, { x: 58, y: 8, hi: true }, { x: 102, y: 22, hi: false },
    { x: 150, y: 6, hi: false }, { x: 194, y: 18, hi: true },
    { x: 34, y: 54, hi: false }, { x: 80, y: 46, hi: true }, { x: 126, y: 58, hi: false },
    { x: 172, y: 48, hi: false },
    { x: 16, y: 88, hi: false }, { x: 62, y: 80, hi: false }, { x: 110, y: 92, hi: true },
    { x: 158, y: 80, hi: false }, { x: 206, y: 88, hi: false },
  ];

  return (
    <svg width="220" height="104" viewBox="0 0 220 104" className="mt-auto pt-5 opacity-90">
      {dots.map((d, i) => (
        <motion.circle
          key={`d${i}`}
          cx={d.x} cy={d.y}
          r={d.hi ? 5 : 2.8}
          fill={d.hi ? accent : "dark:rgba(255,255,255,0.18) light:rgba(0,0,0,0.1)"}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 + i * 0.055, type: "spring", bounce: 0.35 }}
        />
      ))}
    </svg>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
const UiloraNightGrid: React.FC<UiloraNightGridProps> = ({
  title = "Everything you need to automate your Obsidian vault",
  description = "Obsidian SDK turns your vault into a programmable system — automate notes, build local context engines, and manage knowledge like infrastructure.",
  accentColor = "#8e52ff",
}) => {
  const cards = [
    {
      Icon: IconSearch,
      label: "Local Context Engine",
      desc: "Build intelligent context from your vault using search, tags, and graph-aware queries.",
    },
    {
      Icon: IconCode,
      label: "Vault Automation",
      desc: "Create, edit, move, and organize notes programmatically with a simple API layer.",
    },
    {
      Icon: IconPalette,
      label: "Graph-Aware Linking",
      desc: "Work with backlinks, orphan notes, and relationships like a knowledge graph database.",
    },
  ];

  return (
    <section
      className="
        py-24 px-6
        bg-white text-zinc-900
        dark:bg-black dark:text-white
      "
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <h2
            className="
              text-[2.5rem] md:text-[3.1rem]
              font-bold tracking-tight leading-[1.1]
              mb-4
              text-zinc-900 dark:text-white
            "
            style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
          >
            {title}
          </h2>

          <p className="text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            {description}
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* HERO CARD */}
          <div className="md:col-span-2">

            <div
              className="
                h-full rounded-2xl p-px
              "
              style={{
                background: `linear-gradient(135deg, ${accentColor}55 0%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.02) 100%)`,
              }}
            >

              <div
                className="
                  rounded-[15px] p-7 h-full flex flex-col
                  bg-zinc-50 dark:bg-zinc-950
                  border border-zinc-200 dark:border-white/10
                "
              >

                <span
                  className="
                    text-[10px] font-mono tracking-[0.22em] uppercase
                  "
                  style={{ color: accentColor }}
                >
                  Obsidian SDK · Automation Layer
                </span>

                <h3
                  className="
                    text-[1.65rem] font-bold tracking-tight leading-snug mt-3
                    text-zinc-900 dark:text-white
                  "
                  style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
                >
                  Turn your vault into a programmable knowledge system.
                </h3>

                <p className="text-sm mt-4 leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Automate notes, build workflows, query relationships, and treat your vault like a database.
                </p>

                <div className="mt-auto pt-6">
                  <Constellation accent={accentColor} />
                </div>

              </div>

            </div>

          </div>

          {/* Context Card */}
          <div className="
            rounded-2xl p-6 flex flex-col gap-4

            bg-zinc-50 dark:bg-white/5
            border border-zinc-200 dark:border-white/10
          ">

            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${accentColor}1a` }}
            >
              <IconLayers c={accentColor} />
            </div>

            <div>
              <h4 className="text-[14px] font-semibold text-zinc-900 dark:text-white mb-1.5">
                Context-Aware Vault
              </h4>

              <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                Extract meaning from notes using search, tags, and structured graph traversal.
              </p>
            </div>

          </div>

          {/* Feature Cards */}
          {cards.map(({ Icon, label, desc }, i) => (
            <div
              key={i}
              className="
                rounded-2xl p-6 flex flex-col gap-4

                bg-zinc-50 dark:bg-white/5
                border border-zinc-200 dark:border-white/10
              "
            >

              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${accentColor}1a` }}
              >
                <Icon c={accentColor} />
              </div>

              <div>
                <h4 className="text-[14px] font-semibold text-zinc-900 dark:text-white mb-1.5">
                  {label}
                </h4>

                <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh(); // 🔥 GLOBAL FIX

      const hero = heroRef.current;
      const code = codeRef.current;
      const container = containerRef.current;

      if (!hero || !code || !container) return;

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom top",
        pin: hero,
        pinSpacing: false,
      });

      gsap.to(hero, {
        scale: 0.92,
        opacity: 0,
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "40% top",
          scrub: true,
        },
      });

      gsap.fromTo(
        code,
        { y: 120, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "20% top",
            end: "60% top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-500">

      <section
        ref={containerRef}
        className="relative min-h-[220vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(138,92,245,0.18),transparent_40%)]" />

        <div ref={heroRef}>
          <HeroSection />
        </div>

        <CodePreviewSection codeRef={codeRef} />
      </section>
      <UiloraNightGrid />
      <div className="relative isolate mb-10">
        <AccordionFeature />
      </div>

      <MagneticMorphStack />
      <FAQSection />
      <GridFooter />
    </main>
  );
}