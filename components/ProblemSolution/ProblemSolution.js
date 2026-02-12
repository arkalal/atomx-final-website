"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProblemSolution.scss";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    label: "Problem",
    variant: "problem",
    title: "Long queues breaking the event flow?",
    text: "Cash handling and last-minute payment issues slow down food, drinks, and merch.",
  },
  {
    id: 2,
    label: "Problem",
    variant: "problem-deep",
    title: "Cashless only works when people are prepared",
    text: "When attendees don't know how or where to manage their balance, on-ground operations get delayed.",
  },
  {
    id: 3,
    label: "Solution",
    variant: "solution",
    title: "Meet TapX — the balance management platform",
    text: "TapX is the official web platform where attendees can securely manage their event balance before and during the event.",
  },
  {
    id: 4,
    label: "Solution",
    variant: "solution-how",
    title: "Add balance. Stay ready.",
    text: "Attendees can add balance online through TapX, ensuring their wristband or card is payment-ready when they arrive.",
  },
  {
    id: 5,
    label: "Outcome",
    variant: "outcome",
    title: "Faster taps. Smoother flow.",
    text: "With TapX handling balance management, on-ground payments stay quick, queues stay short, and vendors stay focused.",
  },
];

const TILT_ANGLE = 4;
const FLOAT_Y = 12;
const FLOAT_OFFSETS = [0, 0.7, 0.3, 0.9, 0.5];

const ProblemSolution = () => {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const stripRef = useRef(null);
  const headingRef = useRef(null);
  const cardEls = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const strip = stripRef.current;
      const gallery = galleryRef.current;
      const heading = headingRef.current;
      const cards = cardEls.current.filter(Boolean);

      if (!strip || !gallery || !cards.length) return;

      let stripWidth;
      let scrollDistance;

      function refresh() {
        stripWidth = strip.scrollWidth;
        scrollDistance = stripWidth - window.innerWidth;
      }

      refresh();

      const floatTweens = cards.map((card, i) =>
        gsap.to(card, {
          y: FLOAT_Y,
          duration: 2.2 + i * 0.3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: FLOAT_OFFSETS[i] * 2,
        }),
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gallery,
          start: "center center",
          end: () => `+=${stripWidth}`,
          pin: gallery,
          scrub: true,
          invalidateOnRefresh: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentX = -scrollDistance * progress;

            cards.forEach((card) => {
              const rect = card.getBoundingClientRect();
              const cardCenter = rect.left + rect.width / 2;
              const viewCenter = window.innerWidth / 2;
              const offset =
                (cardCenter - viewCenter) / (window.innerWidth / 2);
              const clampedOffset = Math.max(-1, Math.min(1, offset));
              const rotation = clampedOffset * -TILT_ANGLE;

              gsap.to(card, {
                rotation: rotation,
                duration: 0.4,
                ease: "power2.out",
                overwrite: "auto",
              });
            });
          },
        },
      });

      tl.to(
        strip,
        {
          x: () => -scrollDistance,
          ease: "none",
        },
        0,
      );

      tl.to(
        heading,
        {
          opacity: 0.15,
          ease: "none",
          duration: 0.3,
        },
        0,
      );

      ScrollTrigger.addEventListener("refreshInit", refresh);

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", refresh);
        floatTweens.forEach((tw) => tw.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="problem-solution" ref={sectionRef}>
      <div className="problem-solution__gallery" ref={galleryRef}>
        <div className="problem-solution__heading-wrap" ref={headingRef}>
          <h2 className="problem-solution__heading">From Friction to Flow</h2>
        </div>

        <div className="problem-solution__strip" ref={stripRef}>
          {cardsData.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => (cardEls.current[i] = el)}
              className={`problem-solution__card problem-solution__card--${card.variant}`}
            >
              <div>
                <span className="problem-solution__card-label">
                  <span className="problem-solution__card-label-dot" />
                  {card.label}
                </span>
                <h3 className="problem-solution__card-title">{card.title}</h3>
                <p className="problem-solution__card-text">{card.text}</p>
              </div>
              <span className="problem-solution__card-number">
                {String(card.id).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
