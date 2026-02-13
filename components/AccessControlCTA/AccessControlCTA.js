"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import "./AccessControlCTA.scss";

gsap.registerPlugin(ScrollTrigger);

const AccessControlCTA = () => {
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
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ac-cta" ref={sectionRef}>
      <div className="ac-cta__inner" ref={contentRef}>
        <span className="ac-cta__eyebrow">READY TO GET STARTED?</span>
        <h2 className="ac-cta__heading">
          Let&apos;s Build a Better
          <br />
          Entry Flow
        </h2>
        <p className="ac-cta__sub">
          Streamline access, eliminate fraud, and gain real-time visibility
          across every gate.
        </p>
        <div className="ac-cta__btn-wrap">
          <a href="/contact" className="ac-cta__btn">
            <span>Get in Touch</span>
            <span className="ac-cta__btn-icon">
              <GoArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccessControlCTA;
