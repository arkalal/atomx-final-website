"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MdTrendingUp,
  MdSpeed,
  MdStorefront,
  MdAccountBalanceWallet,
  MdDashboard,
} from "react-icons/md";
import "./CashlessDashboard.scss";

gsap.registerPlugin(ScrollTrigger);

const dashboardCards = [
  {
    icon: MdTrendingUp,
    title: "Live Revenue",
    description: "Track total sales and vendor performance in real time.",
    image: "/assets/cashless-payments/industry-corporate.jpg",
    stat: "₹12.4L",
    statLabel: "Today's Revenue",
  },
  {
    icon: MdSpeed,
    title: "Queue Insights",
    description: "Understand speed, flow, and bottlenecks live.",
    image: "/assets/cashless-payments/industry-entertainment.jpg",
    stat: "8s",
    statLabel: "Avg. Transaction",
  },
  {
    icon: MdStorefront,
    title: "Vendor Performance",
    description:
      "Know who's selling, who's slowing down, and where to act.",
    image: "/assets/cashless-payments/industry-commercials.jpg",
    stat: "24",
    statLabel: "Active Vendors",
  },
  {
    icon: MdAccountBalanceWallet,
    title: "Top-Ups & Balances",
    description: "Monitor top-ups, spends, and remaining balances live.",
    image: "/assets/cashless-payments/industry-shorts.jpg",
    stat: "₹3.2L",
    statLabel: "Pending Balances",
  },
  {
    icon: MdDashboard,
    title: "Unified Dashboard",
    description: "Payments, access, and operations — all in one view.",
    image: "/assets/cashless-payments/industry-animation.jpg",
    stat: "1",
    statLabel: "Single View",
  },
];

const CashlessDashboard = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

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

      cardRefs.current.filter(Boolean).forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cld" ref={sectionRef}>
      <div className="cld__inner">
        <div className="cld__header" ref={headingRef}>
          <span className="cld__eyebrow">REAL-TIME INTELLIGENCE</span>
          <h2 className="cld__heading">Real-Time Event Intelligence</h2>
          <p className="cld__sub">
            Decisions don&apos;t wait till the event ends.
            <br />
            AtomX gives you live visibility while it matters.
          </p>
        </div>

        <div className="cld__grid" ref={gridRef}>
          {dashboardCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.title}
                className={`cld__card ${idx < 3 ? "cld__card--top" : "cld__card--bottom"}`}
                ref={(el) => (cardRefs.current[idx] = el)}
              >
                <div className="cld__card-image">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="cld__card-overlay" />
                </div>
                <div className="cld__card-content">
                  <div className="cld__card-icon">
                    <IconComp />
                  </div>
                  <h3 className="cld__card-title">{card.title}</h3>
                  <p className="cld__card-desc">{card.description}</p>
                  <div className="cld__card-stat">
                    <span className="cld__card-stat-value">{card.stat}</span>
                    <span className="cld__card-stat-label">
                      {card.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CashlessDashboard;
