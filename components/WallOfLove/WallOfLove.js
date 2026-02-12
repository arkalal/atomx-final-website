"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import "./WallOfLove.scss";

gsap.registerPlugin(ScrollTrigger);

const WallOfLove = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      });

      tl.from(line1Ref.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          line2Ref.current,
          {
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          line3Ref.current,
          {
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wall-of-love" ref={sectionRef}>
      <div className="wall-of-love-content">
        <h2 className="wall-of-love-heading">
          <span className="wall-of-love-line" ref={line1Ref}>
            RUN YOUR
          </span>
          <span className="wall-of-love-line" ref={line2Ref}>
            NEXT
          </span>
          <span className="wall-of-love-line" ref={line3Ref}>
            EVENTS
          </span>
        </h2>
        <div className="wall-of-love-cta" ref={ctaRef}>
          <button className="wall-of-love-btn">
            <span>Make Your Event Seamless</span>
            <span className="wall-of-love-btn-arrow">
              <GoArrowUpRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;
