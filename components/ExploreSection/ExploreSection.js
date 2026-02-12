"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import "./ExploreSection.scss";

const trailImages = [
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=400&fit=crop",
];

function playTrailAnimation(img) {
  gsap.killTweensOf(img);
  const rotation = gsap.utils.random(-12, 12);
  gsap.set(img, {
    rotation: rotation,
    scale: 0.6,
    opacity: 0,
  });
  gsap.to(img, {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    ease: "power2.out",
  });
  gsap.to(img, {
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    delay: 0.6,
    ease: "power1.inOut",
  });
}

const ExploreSection = () => {
  const sectionRef = useRef(null);
  const flairRef = useRef([]);
  const indexRef = useRef(0);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const flair = flairRef.current.filter(Boolean);
    const wrap = gsap.utils.wrap(0, flair.length);
    const gap = 100;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const tickerFn = () => {
      const mp = mousePosRef.current;
      const lmp = lastMousePosRef.current;
      const travelDistance = Math.hypot(lmp.x - mp.x, lmp.y - mp.y);

      if (travelDistance > gap) {
        const wrappedIndex = wrap(indexRef.current);
        const img = flair[wrappedIndex];
        if (!img) return;

        gsap.set(img, { clearProps: "all" });
        gsap.set(img, {
          left: mp.x,
          top: mp.y,
          xPercent: -50,
          yPercent: -50,
          zIndex: indexRef.current,
        });

        playTrailAnimation(img);
        indexRef.current++;
        lastMousePosRef.current = { ...mp };
      }
    };

    section.addEventListener("mousemove", handleMouseMove);
    gsap.ticker.add(tickerFn);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(tickerFn);
    };
  }, []);

  return (
    <section className="explore-section" ref={sectionRef}>
      {/* Cursor trail images */}
      <div className="explore-trail-container">
        {trailImages.map((src, i) => (
          <img
            key={i}
            className="explore-trail-img"
            ref={(el) => (flairRef.current[i] = el)}
            src={src}
            alt=""
            loading="eager"
          />
        ))}
      </div>

      <div className="explore-content">
        <span className="explore-subtitle">EXPLORE AT YOUR OWN PACE</span>
        <h2 className="explore-heading">
          From Entry <br /> to Exit,
          <br />
          Fully Controlled
        </h2>
        <motion.button
          className="explore-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Explore Products</span>
          <span className="explore-cta-arrow">
            <GoArrowUpRight />
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default ExploreSection;
