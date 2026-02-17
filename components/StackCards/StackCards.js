"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./StackCards.scss";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    category: "CASHLESS PAYMENTS",
    title: "Every Second\nSells",
    image: "/assets/home/cashlessStack.jpg",
    pills: [">1 Second", "Works Offline", "Zero Cash Handling"],
    cta: "Explore Cashless Payments",
  },
  {
    category: "TapX",
    title: "Tap. Pay.\nDone.",
    image: "/assets/home/tapX-Stack.jpeg",
    pills: [
      "1-Second Transactions",
      "Offline-First Payments",
      "Post-Event Reports",
    ],
    cta: "Explore TapX",
  },
  {
    category: "ACCESS CONTROL",
    title: "Entry Without\nExcuses",
    image: "/assets/home/accessConStack.jpeg",
    pills: ["Facial Recognition", "RFID & QR", "Real-Time Tracking"],
    cta: "Explore Access Control",
  },
];

const StackCards = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      // Cards 2-4 start hidden below the viewport
      cards.forEach((card, i) => {
        if (i > 0) {
          gsap.set(card, { yPercent: 100 });
        }
      });

      // Create a timeline pinned to the section, driven by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${cards.length * window.innerHeight}`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      });

      // For each card after the first: animate it up from below
      // and simultaneously scale/dim the previous card
      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.to(card, {
          yPercent: 0,
          duration: 1,
          ease: "none",
        });

        // Scale down the card behind
        tl.to(
          cards[i - 1].querySelector(".stack-card-inner"),
          {
            scale: 0.93,
            borderRadius: "24px",
            duration: 1,
            ease: "none",
          },
          "<",
        );

        // Dim the card behind using an overlay
        tl.to(
          cards[i - 1].querySelector(".stack-card-dim"),
          {
            opacity: 0.45,
            duration: 1,
            ease: "none",
          },
          "<",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stack-cards-section" ref={sectionRef}>
      <div className="stack-cards-container" ref={containerRef}>
        {cardsData.map((card, idx) => (
          <div
            key={idx}
            className="stack-card"
            ref={(el) => (cardsRef.current[idx] = el)}
            style={{ zIndex: idx + 1 }}
          >
            <div className="stack-card-inner">
              <Image
                src={card.image}
                alt={card.title}
                className="stack-card-image"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="stack-card-overlay" />
              <div className="stack-card-dim" />
              <div className="stack-card-content">
                <span className="stack-card-category">{card.category}</span>
                <h3 className="stack-card-title">
                  {card.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <div className="stack-card-pills">
                  {card.pills.map((pill, i) => (
                    <span key={i} className="stack-card-pill">
                      {pill}
                    </span>
                  ))}
                </div>
                <button className="stack-card-cta">{card.cta}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackCards;
