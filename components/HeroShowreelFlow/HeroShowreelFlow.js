'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Play } from 'lucide-react';
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from 'framer-motion';

const heroContent = {
  eyebrow: 'Cashless Payment Solutions',
  headline: 'Cashless payments built for live events.',
  supporting:
    'Run faster operations, reduce cash handling, and gain real-time visibility across every NFC-powered transaction — all through a single, unified event payment system.',
  stats: ['500+ Events', '10M+ Transactions', '99.9% Uptime'],
  cta: 'Make Your Event Seamless',
};

const showreelContent = {
  title: 'SHOWREEL',
  subtitle:
    'From concept to final deployment, we bring your cashless event vision to life with cutting-edge NFC technology.',
  path: '/assets/cashless-payments/showreel.mp4',
};

export default function HeroShowreelFlow() {
  const sceneRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start start', 'end end'],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 82,
    damping: 24,
    mass: 0.55,
    restDelta: 0.0008,
  });

  // --- Layer 1: Hero bg (z-10) — stays put, copy fades out early ---
  const heroCopyOpacity = useTransform(progress, [0.0, 0.08, 0.18], [1, 1, 0]);
  const heroCopyY = useTransform(progress, [0.0, 0.18], [0, -60]);

  // --- Layer 2: Text bar (z-20) — slides up from bottom ---
  const textY = useTransform(progress, [0.08, 0.35, 0.6], ['100vh', '0vh', '-100vh']);

  // --- Black backdrop (z-15) — fades in early so hero is hidden before text arrives ---
  const backdropOpacity = useTransform(progress, [0.12, 0.3], [0, 1]);

  // --- Layer 3: Video (z-30) — appears as text starts moving toward header ---
  const videoOpacity = useTransform(progress, [0.38, 0.5], [0, 1]);
  const videoScale = useTransform(progress, [0.38, 0.95], [0.5, 1]);
  const videoRadius = useTransform(progress, [0.38, 0.85], [40, 0]);
  const videoShadowOpacity = useTransform(progress, [0.38, 0.7], [0.2, 0.6]);
  const videoShadow = useMotionTemplate`0 30px 120px rgba(0,0,0,${videoShadowOpacity})`;

  return (
    <section ref={sceneRef} id="hero" className="relative h-[300vh] bg-black text-white" aria-label="Hero and showreel">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">

        {/* Layer 1 (z-10): Hero background image + copy — full bleed, fades to black at bottom */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/assets/cashless-payments/hero-cover.avif"
            alt="AtomX hero — cashless event operations"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Bottom fade to black — seamless blend into the dark bg / text bar */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.12)_40%,rgba(0,0,0,0.55)_70%,#000000_100%)]" />

          <motion.div
            style={{ opacity: heroCopyOpacity, y: heroCopyY }}
            className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-7 text-center sm:px-12 lg:px-16"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#eb4d2b]">{heroContent.eyebrow}</p>
            <h1 className="mx-auto max-w-[860px] text-balance font-display text-4xl font-bold leading-[0.93] text-white sm:text-5xl lg:text-[4.65rem]">
              {heroContent.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-sm text-white/76 sm:text-xl/8">
              {heroContent.supporting}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#eb4d2b] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#d4432a]"
              >
                {heroContent.cta}
              </Link>
              <button
                type="button"
                aria-label="Play showreel"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3 text-sm font-semibold text-white/95"
              >
                <Play size={15} />
                Play Showreel
              </button>
            </div>

            <div className="mx-auto mt-10 flex max-w-[580px] items-center justify-center gap-6 text-[0.72rem] uppercase tracking-[0.18em] text-white/60 sm:gap-8 sm:text-xs">
              {heroContent.stats.map((stat) => (
                <span key={stat} className="whitespace-nowrap">{stat}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Black backdrop (z-[15]) — fades in as text sweeps, solid black before video */}
        <motion.div
          style={{ opacity: backdropOpacity }}
          className="absolute inset-0 z-[15] bg-black"
        />

        {/* Layer 2 (z-20): Board — slides up from below the viewport */}
        <motion.div
          style={{ y: textY }}
          className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-screen flex-col"
        >
          {/* Top merge — gradient blends into hero above */}
          <div className="flex-1 bg-gradient-to-b from-transparent via-black/60 to-black" />

          {/* Text row */}
          <div className="shrink-0 bg-black px-4 py-5 sm:py-7">
            <p className="whitespace-nowrap text-center font-display text-[min(10vw,9rem)] font-bold uppercase leading-none tracking-[0.02em] text-white">
              {showreelContent.title}
            </p>
          </div>

          {/* Bottom — solid black, video will show through this area */}
          <div className="flex-1 bg-black" />
        </motion.div>

        {/* Layer 3 (z-30): Video — appears after text exits top, grows to full viewport */}
        <motion.div
          initial={{ opacity: 0 }}
          style={{
            opacity: videoOpacity,
            scale: videoScale,
            borderRadius: videoRadius,
            boxShadow: videoShadow,
          }}
          className="absolute inset-0 z-30 overflow-hidden"
        >
          <video autoPlay muted loop playsInline preload="metadata" className="h-full w-full object-cover" aria-label="Showreel video">
            <source src={showreelContent.path} type="video/mp4" />
          </video>

          <button
            type="button"
            className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/42 text-white/95 backdrop-blur-sm"
            aria-label="Play video"
          >
            <Play size={21} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
