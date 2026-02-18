"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineViewGrid } from "react-icons/hi";
import "./HeroSection.scss";

const HeroSection = () => {
  const heroRef = useRef(null);
  const cardWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const heroContentRef = useRef(null);

  const [animationDone, setAnimationDone] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setAnimationDone(true),
      });

      // Hero content elements animate in on load
      tl.set(heroContentRef.current, { opacity: 1 });

      tl.fromTo(
        ".hero-nav-left",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
      );

      tl.fromTo(
        ".hero-nav-center",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
        "<+=0.05",
      );

      tl.fromTo(
        ".hero-nav-right",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
        "<+=0.05",
      );

      tl.fromTo(
        ".hero-heading",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "<+=0.1",
      );

      tl.fromTo(
        ".hero-subtext",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "<+=0.15",
      );

      tl.fromTo(
        ".hero-cta-bottom",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
        "<+=0.15",
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-card-wrapper" ref={cardWrapperRef}>
        <div className="hero-video-wrapper">
          <iframe
            ref={videoRef}
            className="hero-video"
            src="https://www.youtube.com/embed/tiyNNUC1qzY?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=tiyNNUC1qzY&playsinline=1&enablejsapi=1"
            title="AtomX Hero Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="hero-card-overlay" />

        {/* Hero content overlaid on the card */}
        <div className="hero-content" ref={heroContentRef}>
          {/* Top Navigation */}
          <div className="hero-nav">
            <div className="hero-nav-left">
              <motion.button
                className="hero-menu-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlineViewGrid />
                <span>Menu</span>
              </motion.button>
            </div>

            <div className="hero-nav-center">
              <div className="hero-nav-logo">
                <Image
                  src="/assets/logo/atomXLogo.png"
                  alt="AtomX Logo"
                  width={280}
                  height={85}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="hero-nav-right">
              <motion.button
                className="hero-nav-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
              </motion.button>
              <motion.button
                className="hero-nav-cta-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <GoArrowUpRight />
              </motion.button>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="hero-bottom">
            <div className="hero-bottom-left">
              <h2 className="hero-heading">
                End-to-end
                <br />
                cashless payments
                <br />
                and access control
                <br />
                for live events.
              </h2>
            </div>

            <div className="hero-bottom-right">
              <p className="hero-subtext">
                Built for organizers who need speed at scale, control on ground,
                and real-time visibility across every transaction and entry.
              </p>
              <motion.button
                className="hero-cta-bottom"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="hero-cta-text">View Services</span>
                <span className="hero-cta-arrow">
                  <GoArrowUpRight />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
