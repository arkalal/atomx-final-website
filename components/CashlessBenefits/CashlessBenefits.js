"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import "./CashlessBenefits.scss";

const benefitWords = [
  {
    text: "Speed",
    image: "/assets/cashless-payments/industry-corporate.jpg",
  },
  {
    text: "Control",
    image: "/assets/cashless-payments/industry-entertainment.jpg",
  },
  {
    text: "Visibility",
    image: "/assets/cashless-payments/industry-commercials.jpg",
  },
  {
    text: "Accuracy",
    image: "/assets/cashless-payments/industry-shorts.jpg",
  },
  {
    text: "Scalability",
    image: "/assets/cashless-payments/industry-animation.jpg",
  },
  {
    text: "Security",
    image: "/assets/cashless-payments/industry-event.jpg",
  },
  {
    text: "Efficiency",
    image: "/assets/cashless-payments/industry-corporate.jpg",
  },
  {
    text: "Revenue",
    image: "/assets/cashless-payments/industry-entertainment.jpg",
  },
  {
    text: "Reliability",
    image: "/assets/cashless-payments/industry-commercials.jpg",
  },
];

const eventLogos = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/event-logos/${i + 1}.png`,
  alt: `Event Partner ${i + 1}`,
}));

const CashlessBenefits = () => {
  const duplicated = [...benefitWords, ...benefitWords];
  const reduceMotion = useReducedMotion();
  const marqueeLogos = [...eventLogos, ...eventLogos];
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="clb">
      <div className="clb__words-section">
        <div className="clb__track">
          {duplicated.map((word, i) => (
            <span
              key={i}
              className="clb__item"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <span className="clb__word">
                {word.text}
                {hoveredIdx === i && (
                  <span className="clb__word-image">
                    <Image
                      src={word.image}
                      alt={word.text}
                      fill
                      sizes="180px"
                      style={{ objectFit: "cover" }}
                    />
                  </span>
                )}
              </span>
              <span className="clb__dot" />
            </span>
          ))}
        </div>
      </div>

      <div className="clb__logos-section">
        <div className="clb__logos-header">
          <p className="clb__logos-eyebrow">TRUSTED BY ORGANIZERS</p>
          <h3 className="clb__logos-title">
            Powering cashless events across industries
          </h3>
        </div>

        <div className="clb__logos-marquee">
          <div className="clb__logos-fade-left" />
          <div className="clb__logos-fade-right" />
          <motion.div
            className="clb__logos-track"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 18, ease: "linear", repeat: Infinity }
            }
          >
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo.src}-${index}`} className="clb__logo-item">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={50}
                  style={{
                    objectFit: "contain",
                    width: "auto",
                    height: "auto",
                  }}
                  className="clb__logo-img"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CashlessBenefits;
