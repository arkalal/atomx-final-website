"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TurnstileEntry.scss";

gsap.registerPlugin(ScrollTrigger);

const parallaxImages = [
  {
    col: 1,
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=550&fit=crop&q=80",
    type: "image",
    startY: 120,
    height: "280px",
  },
  {
    col: 2,
    src: "/assets/access-control/0V5A6518.jpeg",
    type: "image",
    startY: 20,
    height: "320px",
  },
  {
    col: 3,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=600&fit=crop&q=80",
    type: "image",
    startY: 85,
    height: "260px",
  },
  {
    col: 4,
    src: "/assets/access-control/0V5A6595.jpeg",
    type: "image",
    startY: 5,
    height: "300px",
  },
  {
    col: 5,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=500&fit=crop&q=80",
    type: "image",
    startY: 140,
    height: "340px",
  },
  {
    col: 6,
    src: "/assets/access-control/0V5A6621.jpeg",
    type: "image",
    startY: 55,
    height: "260px",
  },
];

const TurnstileEntry = () => {
  const sectionRef = useRef(null);
  const pinWrapRef = useRef(null);
  const bgRef = useRef(null);
  const headingRef = useRef(null);
  const eyebrowRef = useRef(null);
  const imagesRef = useRef([]);
  const dotRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const pinWrap = pinWrapRef.current;
      const vh = window.innerHeight;

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=350%",
          scrub: 0.8,
          pin: pinWrap,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      imagesRef.current.filter(Boolean).forEach((img, i) => {
        const data = parallaxImages[i];
        const startTop = (data.startY / 100) * vh;
        const imgHeight = parseInt(data.height);
        const totalScroll = startTop + imgHeight + vh * 0.2;

        masterTl.to(
          img,
          {
            y: -totalScroll,
            ease: "none",
            duration: 0.65,
          },
          0,
        );
      });

      masterTl.to(
        bgRef.current,
        {
          backgroundColor: "#f5f3f0",
          ease: "power1.inOut",
          duration: 0.3,
        },
        0.68,
      );

      masterTl.to(
        dotRef.current,
        {
          backgroundColor: "#e0524f",
          ease: "power1.inOut",
          duration: 0.3,
        },
        0.68,
      );

      masterTl.to(
        ".te__col-line",
        {
          borderColor: "rgba(180, 175, 168, 0.15)",
          ease: "power1.inOut",
          duration: 0.3,
        },
        0.68,
      );

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=350%",
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= 0.65) {
            headingRef.current.classList.add("te__heading--light");
            eyebrowRef.current.classList.add("te__eyebrow--light");
          } else {
            headingRef.current.classList.remove("te__heading--light");
            eyebrowRef.current.classList.remove("te__eyebrow--light");
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="te" ref={sectionRef}>
      <div className="te__pin-wrap" ref={pinWrapRef}>
        <div className="te__bg" ref={bgRef}>
          <div className="te__grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="te__col-line" />
            ))}
          </div>

          <div className="te__center-content">
            <span className="te__eyebrow" ref={eyebrowRef}>
              PRECISION ENTRY
            </span>
            <h2 className="te__heading" ref={headingRef}>
              Precision Entry
              <br />
              at Every Gate.
            </h2>
            <div className="te__dot" ref={dotRef} />
          </div>

          {parallaxImages.map((imgData, i) => (
            <div
              key={i}
              className={`te__float-img te__float-img--col${imgData.col}`}
              ref={(el) => (imagesRef.current[i] = el)}
              style={{
                top: `${imgData.startY}%`,
              }}
            >
              <img
                src={imgData.src}
                alt=""
                loading="eager"
                style={{
                  width: "100%",
                  height: imgData.height,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TurnstileEntry;
