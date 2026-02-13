"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { GoArrowLeft } from "react-icons/go";
import "./LegalPageLayout.scss";

gsap.registerPlugin(ScrollTrigger);

const LegalPageLayout = ({
  label,
  title,
  metaItems,
  summaryText,
  sections,
  children,
}) => {
  const pageRef = useRef(null);
  const topbarRef = useRef(null);
  const heroLabelRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroMetaRef = useRef(null);
  const heroDividerRef = useRef(null);
  const summaryRef = useRef(null);
  const sectionsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        topbarRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );

      if (heroLabelRef.current) {
        tl.fromTo(
          heroLabelRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4",
        );
      }

      tl.fromTo(
        heroTitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3",
      );

      if (heroMetaRef.current) {
        tl.fromTo(
          heroMetaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4",
        );
      }

      tl.fromTo(
        heroDividerRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.8, ease: "power3.inOut" },
        "-=0.3",
      );

      if (summaryRef.current) {
        tl.fromTo(
          summaryRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.3",
        );
      }

      const sectionEls = sectionsRef.current.filter(Boolean);
      sectionEls.forEach((el) => {
        gsap.set(el, { y: 30, opacity: 0 });
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="legal-page" ref={pageRef}>
      <nav className="legal-topbar" ref={topbarRef}>
        <Link href="/" className="legal-topbar-brand">
          atomX
        </Link>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Link href="/">
            <button className="legal-topbar-back">
              <GoArrowLeft />
              <span>Back to Home</span>
            </button>
          </Link>
        </motion.div>
      </nav>

      <header className="legal-hero">
        {label && (
          <span className="legal-hero-label" ref={heroLabelRef}>
            {label}
          </span>
        )}
        <h1 className="legal-hero-title" ref={heroTitleRef}>
          {title}
        </h1>
        {metaItems && metaItems.length > 0 && (
          <div className="legal-hero-meta" ref={heroMetaRef}>
            {metaItems.map((item, i) => (
              <span className="legal-hero-meta-item" key={i}>
                <strong>{item.label}:</strong> {item.value}
              </span>
            ))}
          </div>
        )}
        <div className="legal-hero-divider" ref={heroDividerRef} />
      </header>

      {summaryText && (
        <div className="legal-summary-card" ref={summaryRef}>
          <div className="legal-summary-inner">
            <div className="legal-summary-label">Quick Summary</div>
            <p className="legal-summary-text">{summaryText}</p>
          </div>
        </div>
      )}

      <div className="legal-content">
        {sections &&
          sections.map((section, i) => (
            <div
              className="legal-section"
              key={i}
              ref={(el) => (sectionsRef.current[i] = el)}
            >
              {section.number && (
                <span className="legal-section-number">{section.number}</span>
              )}
              <h2 className="legal-section-title">{section.title}</h2>
              <div className="legal-section-body">{section.content}</div>
            </div>
          ))}
        {children}
      </div>

      <footer className="legal-footer">
        <span className="legal-footer-copy">
          &copy; atomX {new Date().getFullYear()}. All rights reserved.
        </span>
        <div className="legal-footer-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/refund-cancellation">Refund Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/gdpr">GDPR</Link>
        </div>
      </footer>
    </div>
  );
};

export default LegalPageLayout;
