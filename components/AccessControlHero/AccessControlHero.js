"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AccessControlHero.scss";

gsap.registerPlugin(ScrollTrigger);

const AccessControlHero = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const imageWrapRef = useRef(null);
  const sublineWrapRef = useRef(null);
  const overlayRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const loadTl = gsap.timeline();

      loadTl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      );

      loadTl.fromTo(
        imageWrapRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" },
        "-=0.7",
      );

      loadTl.fromTo(
        sublineWrapRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.5",
      );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      scrollTl.to(
        imageWrapRef.current,
        {
          height: "100vh",
          duration: 1,
          ease: "none",
        },
        0,
      );

      scrollTl.to(
        overlayRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: "none",
        },
        0.3,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ac-hero" ref={sectionRef}>
      <h1 className="ac-hero__headline" ref={headlineRef}>
        ACCESS CONTROL
      </h1>

      <div className="ac-hero__image-wrap" ref={imageWrapRef}>
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop&q=80"
          alt="Access Control Systems"
          className="ac-hero__image"
          loading="eager"
        />
        <div className="ac-hero__image-overlay" ref={overlayRef} />

        <div className="ac-hero__subline-wrap" ref={sublineWrapRef}>
          <span className="ac-hero__eyebrow">ATOMX INFRASTRUCTURE</span>
          <p className="ac-hero__subline">
            Seamless, secure entry through
            <br />
            access-controlled turnstiles with
            <br />
            real-time monitoring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccessControlHero;
