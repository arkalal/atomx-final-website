"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { GoChevronDown } from "react-icons/go";
import "./AccessControlFAQ.scss";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What is access control in event management?",
    answer:
      "Access control is the system used to manage and regulate how attendees enter a venue. It ensures that only valid ticket holders or authorized individuals can gain entry through designated checkpoints.",
  },
  {
    question: "How does access control improve entry flow at events?",
    answer:
      "By automating entry validation, access control reduces manual checks, speeds up entry lines, and minimizes congestion at gates—especially during peak arrival times.",
  },
  {
    question: "What types of access credentials can be used?",
    answer:
      "Access control systems can work with multiple credential types such as QR codes, RFID cards, wristbands, or digital passes, depending on event requirements.",
  },
  {
    question: "What is turnstile-based entry?",
    answer:
      "Turnstile-based entry uses physical gates connected to the access system. A turnstile opens only after a valid credential is verified, ensuring controlled and one-directional entry.",
  },
  {
    question:
      "How does access control prevent duplicate or unauthorized entry?",
    answer:
      "Each credential is validated in real time. Once used, it can be marked as consumed or restricted based on rules, preventing reuse, sharing, or re-entry misuse.",
  },
  {
    question: "Can access control handle large crowds?",
    answer:
      "Yes. Modern access control systems are designed to scale efficiently, handling high footfall while maintaining speed, accuracy, and security at entry points.",
  },
];

const AccessControlFAQ = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
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
        const items = listRef.current.querySelectorAll(".ac-faq__item");
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
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
    <section className="ac-faq" ref={sectionRef}>
      <div className="ac-faq__inner">
        <div className="ac-faq__header" ref={headingRef}>
          <span className="ac-faq__op1">Questions Before the Gates Open?</span>
          <h2 className="ac-faq__heading">Clarity on Event Access Control</h2>
        </div>

        <div className="ac-faq__list" ref={listRef}>
          {faqData.map((faq, i) => (
            <div
              className={`ac-faq__item ${activeIndex === i ? "ac-faq__item--active" : ""}`}
              key={i}
              onClick={() => toggleFAQ(i)}
            >
              <div className="ac-faq__question-bar">
                <span className="ac-faq__question">{faq.question}</span>
                <motion.span
                  className="ac-faq__chevron"
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <GoChevronDown />
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    className="ac-faq__answer-wrap"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <p className="ac-faq__answer">{faq.answer}</p>
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

export default AccessControlFAQ;
