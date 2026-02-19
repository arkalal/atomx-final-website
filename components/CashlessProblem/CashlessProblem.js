"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CashlessProblem.scss";

gsap.registerPlugin(ScrollTrigger);

const problemCards = [
  {
    title: "Queues slow revenue",
    subtitle: "Peak Bottlenecks",
    image: "/assets/cashless-payments/portfolio-1.jpg",
  },
  {
    title: "Cash creates risk",
    subtitle: "Operational Overhead",
    image: "/assets/cashless-payments/portfolio-2.jpg",
  },
  {
    title: "Vendors struggle",
    subtitle: "Inconsistent Service",
    image: "/assets/cashless-payments/portfolio-3.jpg",
  },
  {
    title: "No real-time visibility",
    subtitle: "Delayed Insights",
    image: "/assets/cashless-payments/portfolio-4.jpg",
  },
];

const CashlessProblem = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      const cards = gsap.utils.toArray("[data-problem-card]");
      if (!cards.length) return;

      const lastCard = cards[cards.length - 1];
      const scrollDistance =
        lastCard.offsetLeft + lastCard.offsetWidth / 2 - window.innerWidth / 2;

      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.fromTo(
        cards,
        { opacity: 0.5, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 0.6,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="clprob" ref={sectionRef}>
      <div className="clprob__header">
        <h2 className="clprob__heading" ref={headingRef}>
          Why payments break at live events
        </h2>
      </div>

      <div className="clprob__track-wrap">
        <div className="clprob__track" ref={trackRef}>
          {problemCards.map((card, idx) => (
            <article
              key={card.title}
              data-problem-card
              className="clprob__card"
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <div className="clprob__card-image">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="clprob__card-info">
                <h3 className="clprob__card-title">{card.title}</h3>
                <span className="clprob__card-subtitle">{card.subtitle}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CashlessProblem;
