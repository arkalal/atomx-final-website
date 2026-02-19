"use client";

import React, { useState } from "react";
import Image from "next/image";
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

const CashlessBenefits = () => {
  const duplicated = [...benefitWords, ...benefitWords];
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
    </section>
  );
};

export default CashlessBenefits;
