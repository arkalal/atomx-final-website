"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import "./CashlessPartnersFlow.scss";

const partnerLogos = [
  { name: "Event Partner 1", src: "/assets/event-logos/1.png" },
  { name: "Event Partner 2", src: "/assets/event-logos/2.png" },
  { name: "Event Partner 3", src: "/assets/event-logos/3.png" },
  { name: "Event Partner 4", src: "/assets/event-logos/4.png" },
  { name: "Event Partner 5", src: "/assets/event-logos/5.png" },
  { name: "Event Partner 6", src: "/assets/event-logos/6.png" },
  { name: "Event Partner 7", src: "/assets/event-logos/7.png" },
  { name: "Event Partner 8", src: "/assets/event-logos/8.png" },
  { name: "Event Partner 9", src: "/assets/event-logos/9.png" },
  { name: "Event Partner 10", src: "/assets/event-logos/10.png" },
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
