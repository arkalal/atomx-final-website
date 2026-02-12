"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import "./ClosingCTA.scss";

gsap.registerPlugin(ScrollTrigger);

const ClosingCTA = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current.querySelectorAll(".closing-word");

      gsap.set(words, { opacity: 0, y: 30 });
      gsap.set(ctaRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "top 15%",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      });

      tl.to(words, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      }).to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="closing-cta" ref={sectionRef}>
      <div className="closing-cta-content">
        <p className="closing-cta-text" ref={textRef}>
          <span className="closing-word">From</span>{" "}
          <span className="closing-word closing-icon">💳</span>{" "}
          <span className="closing-word closing-highlight closing-highlight--cyan">
            cashless payments
          </span>{" "}
          <span className="closing-word">to</span>{" "}
          <span className="closing-word closing-icon">�</span>{" "}
          <span className="closing-word closing-highlight closing-highlight--lavender">
            access control,
          </span>{" "}
          <span className="closing-word closing-icon">�</span>{" "}
          <span className="closing-word">discover</span>{" "}
          <span className="closing-word closing-highlight closing-highlight--pink">
            real-time crowd analytics
          </span>{" "}
          <span className="closing-word">
            and seamless event tech by AtomX.
          </span>
        </p>
        <div className="closing-cta-btn-wrap" ref={ctaRef}>
          <button className="closing-cta-btn">
            <span>Get Started</span>
            <span className="closing-cta-btn-arrow">
              <GoArrowUpRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
