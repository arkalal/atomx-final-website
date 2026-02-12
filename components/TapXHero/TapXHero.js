"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import "./TapXHero.scss";

gsap.registerPlugin(ScrollTrigger);

const TapXHero = () => {
  const sectionRef = useRef(null);
  const bigTitleRef = useRef(null);
  const boxRef = useRef(null);
  const boxTitleRef = useRef(null);
  const boxImageRef = useRef(null);
  const subTextRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animations on load
      const loadTl = gsap.timeline();

      loadTl.fromTo(
        bigTitleRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      );

      loadTl.fromTo(
        boxRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.7",
      );

      loadTl.fromTo(
        boxTitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5",
      );

      loadTl.fromTo(
        boxImageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.5",
      );

      // Scroll-driven box expansion animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      // Expand the box width and height simultaneously
      scrollTl.to(
        boxRef.current,
        { width: "96%", height: "90vh", duration: 1, ease: "none" },
        0,
      );

      // Scale up and fade out the big background title
      scrollTl.fromTo(
        bigTitleRef.current,
        { scale: 1, opacity: 1, y: 0 },
        { scale: 1.15, opacity: 0, y: -30, duration: 1, ease: "none" },
        0,
      );

      // Fade in the sub paragraph
      scrollTl.fromTo(
        subTextRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        0.45,
      );

      // Slight upward movement of the box image for parallax feel
      scrollTl.to(
        boxImageRef.current,
        { y: -25, duration: 1, ease: "none" },
        0,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="tapx-hero" ref={sectionRef}>
      {/* Big faded background title */}
      <h1 className="tapx-hero__big-title" ref={bigTitleRef}>
        Solution
      </h1>

      {/* Expandable white box */}
      <div className="tapx-hero__box" ref={boxRef}>
        <div className="tapx-hero__box-inner">
          <h2 className="tapx-hero__box-title" ref={boxTitleRef}>
            TapX
          </h2>

          <div className="tapx-hero__box-image" ref={boxImageRef}>
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=1000&fit=crop"
              alt="TapX NFC Payment Device"
              loading="eager"
            />
          </div>

          {/* Sub paragraph - bottom right */}
          <motion.p className="tapx-hero__sub-text" ref={subTextRef}>
            TapX is the NFC-powered transaction layer that powers seamless
            cashless payments across live events, giving organizers real-time
            control and attendees a frictionless experience.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TapXHero;
