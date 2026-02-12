"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactFAQ.scss";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What kind of events is AtomX built for?",
    answer:
      "AtomX is designed for live events of all scales — from concerts and festivals to conferences, exhibitions, and sports events.",
  },
  {
    question: "Do I need to use all AtomX products together?",
    answer:
      "No. AtomX is modular. You can choose access control, cashless payments, TapX, or POS — based on your event requirements.",
  },
  {
    question: "How early should we reach out before our event?",
    answer:
      "Ideally 3–4 weeks in advance. For large-scale events, earlier helps us plan infrastructure and on-ground support better.",
  },
  {
    question: "Is AtomX secure and compliant?",
    answer:
      "Yes. AtomX follows enterprise-grade security standards and complies with ISO, GDPR, and SOC 2 Type II certifications.",
  },
  {
    question: "Will AtomX provide on-ground support?",
    answer:
      "Yes. Our team supports setup, deployment, and live operations to ensure smooth event execution.",
  },
  {
    question: "Is AtomX suitable for high-footfall events?",
    answer:
      "Absolutely. AtomX is built to handle large volumes with real-time monitoring and fail-safe systems.",
  },
  {
    question: "Can AtomX work with existing ticketing platforms?",
    answer:
      "Yes. AtomX is built to integrate seamlessly with major ticketing and event platforms, allowing smooth data sync and access validation.",
  },
  {
    question: "What happens if internet connectivity drops at the event?",
    answer:
      "AtomX systems are designed with offline fail-safes, ensuring core operations continue even during temporary network disruptions.",
  },
  {
    question: "Can organizers access real-time event data during the event?",
    answer:
      "Yes. Organizers get live dashboards with insights on entries, transactions, and system performance in real time.",
  },
  {
    question:
      "Is AtomX customizable for different event formats and branding?",
    answer:
      "Absolutely. From access rules to wristband and system configurations, AtomX adapts to your event\u2019s scale, format, and operational needs.",
  },
];

const ContactFAQ = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

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
        }
      );

      if (listRef.current) {
        const items = listRef.current.querySelectorAll(".contact-faq-item");
        gsap.fromTo(
          items,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="contact-faq" ref={sectionRef}>
      <div className="contact-faq-inner">
        <h2 className="contact-faq-heading" ref={headingRef}>
          FAQ
        </h2>

        <div className="contact-faq-list" ref={listRef}>
          {faqData.map((faq, i) => (
            <div
              className={`contact-faq-item ${activeIndex === i ? "contact-faq-item--active" : ""}`}
              key={i}
              onClick={() => toggleFAQ(i)}
            >
              <div className="contact-faq-question-bar">
                <span className="contact-faq-question">{faq.question}</span>
                <motion.span
                  className="contact-faq-arrow"
                  animate={{
                    rotate: activeIndex === i ? 90 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <GoArrowUpRight />
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    className="contact-faq-answer-wrap"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <p className="contact-faq-answer">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
