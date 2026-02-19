"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import "./AboutCTA.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const children = contentRef.current.children;

      gsap.fromTo(
        children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-cta" ref={sectionRef}>
      <div className="about-cta__inner" ref={contentRef}>
        <span className="about-cta__eyebrow">LET&apos;S WORK TOGETHER</span>
        <h2 className="about-cta__heading">
          Your next event,
          <br />
          powered by AtomX.
        </h2>
        <p className="about-cta__sub">
          End-to-end event operations — access control, cashless payments, and
          real-time intelligence, all in one platform.
        </p>
        <div className="about-cta__btn-wrap">
          <Link href="/contact" className="about-cta__btn">
            <span className="about-cta__btn-text">Contact Us</span>
            <span className="about-cta__btn-icon">
              <GoArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
