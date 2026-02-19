"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { GoChevronDown } from "react-icons/go";
import "./AboutFAQ.scss";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What is AtomX?",
    answer:
      "AtomX is an end-to-end event operations ecosystem that powers access control, cashless payments, and real-time event intelligence at scale.",
  },
  {
    question: "What kind of events does AtomX support?",
    answer:
      "AtomX is built for high-footfall live events — including concerts, festivals, sports events, exhibitions, and large-format experiences.",
  },
  {
    question: "How does AtomX ensure secure event access?",
    answer:
      "AtomX uses intelligent access logic to prevent re-entry misuse, duplicate scans, and unauthorized access — ensuring clean entries and reliable data.",
  },
  {
    question: "Is AtomX scalable for large crowds?",
    answer:
      "Yes. AtomX is designed to perform seamlessly across events with thousands of attendees, multiple gates, and simultaneous transactions.",
  },
  {
    question: "Does AtomX work offline at events?",
    answer:
      "AtomX systems are built to handle on-ground challenges, including network fluctuations, ensuring uninterrupted operations during live events.",
  },
  {
    question: "Who typically uses AtomX at an event?",
    answer:
      "Event organisers, venue operators, vendors, and operations teams rely on AtomX to manage access, payments, and on-ground visibility efficiently.",
  },
];

const AboutFAQ = () => {
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
        const items = listRef.current.querySelectorAll(".about-faq__item");
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
    <section className="about-faq" ref={sectionRef}>
      <div className="about-faq__inner">
        <div className="about-faq__header" ref={headingRef}>
          <span className="about-faq__eyebrow">Got Questions?</span>
          <h2 className="about-faq__heading">FAQs</h2>
        </div>

        <div className="about-faq__list" ref={listRef}>
          {faqData.map((faq, i) => (
            <div
              className={`about-faq__item ${activeIndex === i ? "about-faq__item--active" : ""}`}
              key={i}
              onClick={() => toggleFAQ(i)}
            >
              <div className="about-faq__question-bar">
                <span className="about-faq__question">{faq.question}</span>
                <motion.span
                  className="about-faq__chevron"
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <GoChevronDown />
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    className="about-faq__answer-wrap"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <p className="about-faq__answer">{faq.answer}</p>
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

export default AboutFAQ;
