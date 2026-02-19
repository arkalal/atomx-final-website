"use client";

import React from "react";
import "./CashlessBenefits.scss";

const benefitWords = [
  "Speed",
  "Control",
  "Visibility",
  "Accuracy",
  "Scalability",
  "Security",
  "Efficiency",
  "Revenue",
  "Reliability",
];

const CashlessBenefits = () => {
  const duplicated = [...benefitWords, ...benefitWords];

  return (
    <section className="clb">
      <div className="clb__track">
        {duplicated.map((word, i) => (
          <span key={i} className="clb__item">
            <span className="clb__word">{word}</span>
            <span className="clb__dot" />
          </span>
        ))}
      </div>
    </section>
  );
};

export default CashlessBenefits;
