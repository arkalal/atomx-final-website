"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import "./CashlessCTA.scss";

gsap.registerPlugin(ScrollTrigger);

const CashlessCTA = () => {
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
    <section className="clcta" ref={sectionRef}>
      <div className="clcta__inner" ref={contentRef}>
        <span className="clcta__eyebrow">READY TO GO CASHLESS?</span>
        <h2 className="clcta__heading">
          Let&apos;s Power Your
          <br />
          Next Event
        </h2>
        <p className="clcta__sub">
          Faster transactions, real-time data, and complete operational control
          — all through one unified platform.
        </p>
        <div className="clcta__btn-wrap">
          <Link href="/contact" className="clcta__btn">
            <span className="clcta__btn-text">Get in Touch</span>
            <span className="clcta__btn-icon">
              <GoArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CashlessCTA;
