"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TapXFeatures.scss";

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    number: "01",
    title: "Speed",
    description:
      "Instant tap-and-pay transactions that keep queues moving, even during peak rush.",
  },
  {
    number: "02",
    title: "Control",
    description:
      "Centralized management of payments, limits, refunds, and access—across cards and wristbands.",
  },
  {
    number: "03",
    title: "Visibility",
    description:
      "Real-time transaction data and sales insights, available the moment your event goes live.",
  },
  {
    number: "04",
    title: "Reliability",
    description:
      "Built for on-ground realities—high volume, intermittent connectivity, and zero room for failure.",
  },
];

const TapXFeatures = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsWrapRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      const stripH = 90;

      // Center the header vertically in the section initially
      const sectionH = sectionRef.current.offsetHeight;
      const headerH = headerRef.current.offsetHeight;
      const centerY = (sectionH - headerH) / 2;
      gsap.set(headerRef.current, { y: centerY });

      // All cards start hidden below the viewport
      cards.forEach((card) => {
        gsap.set(card, { yPercent: 100 });
      });

      // Pin the section and drive the stacking animation by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${(cards.length + 1) * window.innerHeight}`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      });

      // Phase 0: Title moves from center to top + Card 1 slides up
      // Cards are inside .tapx-features__cards (flex:1, below header),
      // so yPercent:0 = top of cards container = right below header
      tl.to(headerRef.current, { y: 0, duration: 1, ease: "none" }, 0);
      tl.to(cards[0], { yPercent: 0, duration: 1, ease: "none" }, 0);

      // Phases 1-3: Cards 2-4 slide up and stack with strip offsets
      // y offset is relative to cards container (already below header)
      for (let i = 1; i < cards.length; i++) {
        tl.to(cards[i], {
          yPercent: 0,
          y: i * stripH,
          duration: 1,
          ease: "none",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="tapx-features" ref={sectionRef}>
      <h2 className="tapx-features__header" ref={headerRef}>
        What TapX Enables
        <br />
        at Live Events
      </h2>

      <div className="tapx-features__cards" ref={cardsWrapRef}>
        {featuresData.map((feature, i) => (
          <div
            key={feature.number}
            className={`tapx-features__card ${
              i % 2 === 0
                ? "tapx-features__card--accent"
                : "tapx-features__card--light"
            }`}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ zIndex: i + 1 }}
          >
            <div className="tapx-features__card-content">
              <span className="tapx-features__card-number">
                {feature.number}
              </span>
              <div className="tapx-features__card-text">
                <h3 className="tapx-features__card-title">{feature.title}</h3>
                <p className="tapx-features__card-desc">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TapXFeatures;
