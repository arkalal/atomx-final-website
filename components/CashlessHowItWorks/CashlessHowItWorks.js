"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import "./CashlessHowItWorks.scss";

gsap.registerPlugin(ScrollTrigger);

const approachCards = [
  {
    phase: "01",
    title: "Plan the flow",
    subtitle: "Before gates open",
    description:
      "AtomX helps organizers design how payments should move across the venue — from entry to bars, merchandise, and top-up points.",
    detail:
      "Everything is configured in advance, so teams are prepared before the first tap happens.",
    hoverImage: "/assets/cashless-payments/service-preproduction.jpg",
  },
  {
    phase: "02",
    title: "Operate at scale",
    subtitle: "During the event",
    description:
      "Cashless payments run through NFC cards or wristbands, powered by POSX devices. Transactions stay fast, queues stay short, and vendors stay in sync — even during peak hours.",
    detail: "No cash handling. No manual workarounds.",
    hoverImage: "/assets/cashless-payments/service-production.jpg",
  },
  {
    phase: "03",
    title: "Track and optimize",
    subtitle: "After — and during — the event",
    description:
      "Organizers get real-time visibility into transactions, vendor performance, and sales patterns. Decisions can be made instantly — not after the event is over.",
    detail: "Clear data. Clear accountability.",
    hoverImage: "/assets/cashless-payments/service-postproduction.jpg",
  },
];

const CashlessHowItWorks = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      cardsRef.current.filter(Boolean).forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="clhw" ref={sectionRef}>
      <div className="clhw__inner">
        <div className="clhw__left" ref={headingRef}>
          <span className="clhw__eyebrow">HOW IT WORKS</span>
          <h2 className="clhw__heading">
            How AtomX approaches cashless payments
          </h2>
          <p className="clhw__sub">
            A structured system designed for live events — not a patchwork of
            tools.
          </p>
          <div className="clhw__cta-group">
            <Link href="/contact" className="clhw__cta-btn">
              <span>Explore Services</span>
              <span className="clhw__cta-icon">
                <GoArrowUpRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="clhw__cards">
          {approachCards.map((card, idx) => (
            <div
              key={card.phase}
              className={`clhw__card ${hoveredIdx === idx ? "clhw__card--hovered" : ""}`}
              ref={(el) => (cardsRef.current[idx] = el)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="clhw__card-header">
                <h3 className="clhw__card-title">{card.title}</h3>
                <span className="clhw__card-subtitle">{card.subtitle}</span>
              </div>
              <p className="clhw__card-desc">{card.description}</p>
              <p className="clhw__card-detail">{card.detail}</p>

              <div className="clhw__card-hover-image">
                <Image
                  src={card.hoverImage}
                  alt={`${card.title} visual`}
                  fill
                  sizes="200px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <button className="clhw__card-learn">
                <span>LEARN MORE</span>
                <span className="clhw__card-learn-icon">
                  <GoArrowRight />
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="clhw__product-links">
          <Link href="#" className="clhw__product-btn">
            <span>Wristband</span>
            <span className="clhw__product-btn-icon">
              <GoArrowUpRight />
            </span>
          </Link>
          <Link href="#" className="clhw__product-btn">
            <span>Card</span>
            <span className="clhw__product-btn-icon">
              <GoArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CashlessHowItWorks;
