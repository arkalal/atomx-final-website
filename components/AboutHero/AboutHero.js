"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutHero.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power3.out" },
      );

      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=1",
      );

      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.5",
      );

      tl.fromTo(
        descRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4",
      );

      gsap.to(imageRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-hero" ref={sectionRef}>
      <div className="about-hero__image-side" ref={imageRef}>
        <Image
          src="/assets/home/gifs/Copy of 0V5A6687.jpeg"
          alt="AtomX Events"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="about-hero__image-blur" />
      <div className="about-hero__gradient-bottom" />

      <div className="about-hero__content">
        <h1 className="about-hero__title" ref={titleRef}>
          About Us
        </h1>
        <span className="about-hero__subtitle" ref={subtitleRef}>
          Who We Are
        </span>
        <p className="about-hero__desc" ref={descRef}>
          Powering modern events with smart, secure systems. AtomX is the team
          behind smoother entries, faster payments, and better event
          experiences. We design systems that work quietly in the background, so
          events run exactly how they should.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
