"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./RealTimeEntry.scss";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    image: "/assets/access-control/0V5A6518.jpeg",
    title: "Live Entry Monitoring",
    description:
      "Track entries as they happen across all access points. Know exactly how many attendees have entered, zone by zone, without delays or manual checks.",
  },
  {
    image: "/assets/access-control/0V5A6621.jpeg",
    title: "Crowd Flow Awareness",
    description:
      "Identify congestion early with real-time entry data. Helps teams react faster to manage queues and balance gate usage.",
  },
  {
    image: "/assets/access-control/0V5A6630.jpeg",
    title: "Centralized Access Dashboard",
    description:
      "All entry activity is visible from a single control view. Security and operations teams stay aligned with the same live information.",
  },
  {
    image: "/assets/access-control/0V5A6595.jpeg",
    title: "Operational Confidence",
    description:
      "Real-time visibility reduces guesswork. Decisions are based on live data, not assumptions.",
  },
];

const RealTimeEntry = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;
  const maxIndex = Math.max(0, cardsData.length - visibleCount);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );

      cardRefs.current.filter(Boolean).forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="rte" ref={sectionRef}>
      <div className="rte__inner">
        <div className="rte__header" ref={headingRef}>
          <div className="rte__header-text">
            <span className="rte__eyebrow">REAL-TIME ENTRY VISIBILITY</span>
            <h2 className="rte__heading">Live Oversight at All Entry Points</h2>
          </div>
          <div className="rte__nav">
            <button
              className={`rte__nav-btn ${currentIndex === 0 ? "rte__nav-btn--disabled" : ""}`}
              onClick={handlePrev}
              aria-label="Previous"
            >
              <GoArrowLeft />
            </button>
            <button
              className={`rte__nav-btn ${currentIndex >= maxIndex ? "rte__nav-btn--disabled" : ""}`}
              onClick={handleNext}
              aria-label="Next"
            >
              <GoArrowRight />
            </button>
          </div>
        </div>

        <div className="rte__cards-viewport" ref={cardsContainerRef}>
          <div
            className="rte__cards-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {cardsData.map((card, i) => (
              <div
                key={i}
                className="rte__card"
                ref={(el) => (cardRefs.current[i] = el)}
              >
                <div className="rte__card-image">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="rte__card-title">{card.title}</h3>
                <p className="rte__card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeEntry;
