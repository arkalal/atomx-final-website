"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import { FiPlay } from "react-icons/fi";
import "./CashlessHero.scss";

gsap.registerPlugin(ScrollTrigger);

const CashlessHero = () => {
  const sectionRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroContentRef = useRef(null);
  const backdropRef = useRef(null);
  const showreelTextRef = useRef(null);
  const videoWrapRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heroImage = heroImageRef.current;
      const heroContent = heroContentRef.current;
      const backdrop = backdropRef.current;
      const showreelText = showreelTextRef.current;
      const videoWrap = videoWrapRef.current;

      if (!heroContent || !showreelText || !videoWrap) return;

      // ===== SET EXPLICIT INITIAL STATES =====
      gsap.set(heroContent, { opacity: 0, y: 50 });
      gsap.set(heroImage, { opacity: 1, scale: 1 });
      gsap.set(backdrop, { opacity: 0 });
      gsap.set(showreelText, { yPercent: 120, opacity: 0 });
      gsap.set(videoWrap, { width: "48%", opacity: 0, y: 100 });

      // ===== INITIAL LOAD: Fade-in hero content =====
      gsap.to(heroContent, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      // ===== MASTER SCROLL TIMELINE =====
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=350%",
          pin: true,
          scrub: 0.6,
          pinSpacing: true,
          anticipatePin: 1,
          refreshPriority: 1,
        },
      });

      // ====== PHASE 1 (0 → 0.15): Hero content fades up & out ======
      tl.fromTo(
        heroContent,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -80, duration: 0.15, ease: "power2.inOut" },
        0,
      );

      // Hero image scales slightly and fades
      tl.fromTo(
        heroImage,
        { scale: 1, opacity: 1 },
        { scale: 1.08, opacity: 0, duration: 0.15, ease: "power2.inOut" },
        0,
      );

      // ====== PHASE 2 (0.08 → 0.18): Black backdrop fades in ======
      tl.fromTo(
        backdrop,
        { opacity: 0 },
        { opacity: 1, duration: 0.1, ease: "none" },
        0.08,
      );

      // ====== PHASE 3 (0.15 → 0.32): SHOWREEL text slides up ======
      tl.fromTo(
        showreelText,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.17, ease: "power2.out" },
        0.15,
      );

      // ====== PHASE 4 (0.30 → 0.42): Video card fades in below title ======
      tl.fromTo(
        videoWrap,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.12, ease: "power2.out" },
        0.3,
      );

      // ====== PHASE 5 (0.40 → 0.60): SHOWREEL text retreats upward ======
      tl.to(
        showreelText,
        {
          yPercent: -90,
          opacity: 0.08,
          scale: 0.88,
          duration: 0.2,
          ease: "power2.inOut",
        },
        0.4,
      );

      // ====== PHASE 6 (0.52 → 0.85): Video card expands to 90% width ======
      tl.to(
        videoWrap,
        {
          width: "90%",
          y: -20,
          duration: 0.33,
          ease: "power2.inOut",
        },
        0.52,
      );

      // ====== PHASE 7 (0.85 → 1.0): Final state — hold expanded card ======
      tl.to(showreelText, { opacity: 0, duration: 0.08, ease: "none" }, 0.85);

      tl.to(
        videoWrap,
        { borderRadius: "14px", duration: 0.15, ease: "power1.out" },
        0.85,
      );
    }, section);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="clh" aria-label="Hero and showreel">
      {/* Layer 1: Hero background image */}
      <div className="clh__hero-layer" ref={heroImageRef}>
        <Image
          src="/assets/cashless-payments/hero-cover.avif"
          alt="AtomX cashless payments for live events"
          fill
          priority
          sizes="100vw"
          className="clh__hero-bg"
        />
        <div className="clh__hero-gradient" />
      </div>

      {/* Layer 2: Hero content — fades in on load */}
      <div className="clh__hero-content" ref={heroContentRef}>
        <h1 className="clh__headline">
          Cashless payments
          <br />
          <span className="clh__headline-italic">built for live events.</span>
        </h1>
        <p className="clh__supporting">
          Run faster operations, reduce cash handling, and gain real-time
          visibility across every NFC-powered transaction — all through a
          single, unified event payment system.
        </p>
        <div className="clh__cta-row">
          <Link href="/contact" className="clh__cta-btn">
            <span className="clh__cta-text">Make Your Event Seamless</span>
            <span className="clh__cta-icon">
              <GoArrowUpRight />
            </span>
          </Link>
          <button type="button" className="clh__play-btn-hero">
            <FiPlay />
            <span>Play Showreel</span>
          </button>
        </div>
      </div>

      {/* Layer 3: Black backdrop */}
      <div className="clh__backdrop" ref={backdropRef} />

      {/* Layer 4: SHOWREEL text */}
      <div className="clh__showreel-text" ref={showreelTextRef}>
        <h2 className="clh__showreel-title">SHOWREEL</h2>
      </div>

      {/* Layer 5: Video card */}
      <div className="clh__video-wrap" ref={videoWrapRef}>
        <div className="clh__video-card">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="clh__video"
          >
            <source
              src="/assets/cashless-payments/showreel.mp4"
              type="video/mp4"
            />
          </video>
          <button
            type="button"
            className="clh__video-play"
            aria-label="Play video"
          >
            <FiPlay />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CashlessHero;
