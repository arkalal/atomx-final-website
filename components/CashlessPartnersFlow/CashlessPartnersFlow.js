"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import "./CashlessPartnersFlow.scss";

const partnerLogos = [
  { name: "Partner 1", src: "/assets/cashless-payments/partner-1.svg" },
  { name: "Partner 2", src: "/assets/cashless-payments/partner-2.svg" },
  { name: "Partner 3", src: "/assets/cashless-payments/partner-3.svg" },
  { name: "Partner 4", src: "/assets/cashless-payments/partner-4.svg" },
  { name: "Partner 5", src: "/assets/cashless-payments/partner-5.svg" },
  { name: "Partner 6", src: "/assets/cashless-payments/partner-6.svg" },
];

const CashlessPartnersFlow = () => {
  const reduceMotion = useReducedMotion();
  const marqueeLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="cpf">
      <div className="cpf__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="cpf__header"
        >
          <p className="cpf__eyebrow">Trusted by organizers</p>
          <h2 className="cpf__title">
            Powering cashless events across industries
          </h2>
        </motion.div>

        <div className="cpf__marquee-container">
          <div className="cpf__fade-left" />
          <div className="cpf__fade-right" />

          <motion.ul
            aria-label="Brand partners carousel"
            className="cpf__marquee-track"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 14, ease: "linear", repeat: Infinity }
            }
          >
            {marqueeLogos.map((logo, index) => (
              <li key={`${logo.src}-${index}`} className="cpf__logo-item">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={132}
                  height={40}
                  className="cpf__logo-img"
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default CashlessPartnersFlow;
