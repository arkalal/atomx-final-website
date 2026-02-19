"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HowTapXFits.scss";

gsap.registerPlugin(ScrollTrigger);

const stepsData = [
  {
    number: "01",
    label: "On-Ground Setup",
    contentTitle:
      "Deploy NFC wristbands and cards across all venue touchpoints",
    contentText: "",
    slideTitle: "On-Ground Setup",
    slideText:
      "TapX is active for payments across food, beverages, and merchandise zones.",
  },
  {
    number: "02",
    label: "Attendee Experience",
    contentTitle: "Tap once to complete instant contactless payments anywhere",
    contentText: "",
    slideTitle: "Attendee Experience",
    slideText: "One tap completes a payment instantly.",
  },
  {
    number: "03",
    label: "On-Ground Operations",
    contentTitle: "Streamline vendor transactions and reduce queue times",
    contentText: "",
    slideTitle: "On-Ground Operations",
    slideText: "Faster service. Fewer queues.",
  },
  {
    number: "04",
    label: "Event Oversight",
    contentTitle:
      "Monitor real-time cashless activity and make smarter decisions",
    contentText: "",
    slideTitle: "Event Oversight",
    slideText: "Transactions synced securely within the AtomX ecosystem.",
  },
];

const slideIcons = [
  <svg
    key="icon1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <circle cx="12" cy="20" r="1" />
  </svg>,
  <svg
    key="icon2"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v0" />
    <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 13" />
  </svg>,
  <svg
    key="icon3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,
  <svg
    key="icon4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>,
];

const HowTapXFits = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const numbersRef = useRef([]);
  const slidesRef = useRef([]);
  const rightItemsRef = useRef([]);
  const progressBarsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const totalSteps = stepsData.length;
      const numbers = numbersRef.current.filter(Boolean);
      const slides = slidesRef.current.filter(Boolean);
      const rightItems = rightItemsRef.current.filter(Boolean);
      const progressBars = progressBarsRef.current.filter(Boolean);

      if (!slides.length || !rightItems.length) return;

      // --- Pre-measure each card's natural height ---
      const cards = rightItems.map((item) =>
        item.querySelector(".how-tapx-fits__right-card"),
      );
      const collapsedLabels = rightItems.map((item) =>
        item.querySelector(".how-tapx-fits__right-label"),
      );
      const cardHeights = cards.map((card) => {
        if (!card) return 0;
        card.style.maxHeight = "none";
        card.style.opacity = "1";
        card.style.padding = "20px 22px";
        const h = card.scrollHeight;
        card.style.maxHeight = "";
        card.style.opacity = "";
        card.style.padding = "";
        return h;
      });

      // --- Apply GSAP initial states ---
      // Numbers
      gsap.set(numbers[0], { opacity: 1, y: 0 });
      for (let i = 1; i < totalSteps; i++) {
        gsap.set(numbers[i], { opacity: 0, y: 40 });
      }

      // Phone slides
      gsap.set(slides[0], { opacity: 1, y: "0%" });
      for (let i = 1; i < totalSteps; i++) {
        gsap.set(slides[i], { opacity: 0, y: "100%" });
      }

      // Right cards — first expanded, rest collapsed
      cards.forEach((card, i) => {
        if (!card) return;
        if (i === 0) {
          gsap.set(card, {
            maxHeight: cardHeights[i],
            opacity: 1,
            padding: "20px 22px",
          });
          // Hide collapsed label for first item
          if (collapsedLabels[i]) {
            gsap.set(collapsedLabels[i], { display: "none" });
          }
        } else {
          gsap.set(card, { maxHeight: 0, opacity: 0, padding: 0 });
          // Show collapsed label for other items
          if (collapsedLabels[i]) {
            gsap.set(collapsedLabels[i], { display: "block" });
          }
        }
      });

      // First progress bar filled
      const firstFill = progressBars[0]?.querySelector(
        ".how-tapx-fits__phone-progress-fill",
      );
      if (firstFill) gsap.set(firstFill, { width: "100%" });

      // Track current active step for label management
      let currentStep = 0;

      // Function to update collapsed labels based on active step
      const updateCollapsedLabels = (activeIdx) => {
        collapsedLabels.forEach((label, i) => {
          if (!label) return;
          if (i === activeIdx) {
            // Hide collapsed label for active card
            gsap.set(label, { display: "none" });
          } else {
            // Show collapsed label for inactive cards
            gsap.set(label, { display: "block" });
          }
        });
      };

      // --- Master pinned timeline ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${(totalSteps - 1) * window.innerHeight}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Calculate which step we're on based on progress
            const progress = self.progress;
            const stepProgress = progress * (totalSteps - 1);
            const newStep = Math.round(stepProgress);
            const clampedStep = Math.max(0, Math.min(totalSteps - 1, newStep));

            if (clampedStep !== currentStep) {
              currentStep = clampedStep;
              updateCollapsedLabels(currentStep);
            }
          },
        },
      });

      for (let i = 0; i < totalSteps - 1; i++) {
        const next = i + 1;
        const pos = i;

        const nextFill = progressBars[next]?.querySelector(
          ".how-tapx-fits__phone-progress-fill",
        );

        // Number out
        tl.to(
          numbers[i],
          { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" },
          pos,
        );
        // Number in
        tl.fromTo(
          numbers[next],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          pos + 0.3,
        );

        // Phone slide out (swipe up)
        tl.to(
          slides[i],
          { y: "-100%", opacity: 0, duration: 0.6, ease: "power2.inOut" },
          pos + 0.05,
        );
        // Phone slide in (from bottom)
        tl.fromTo(
          slides[next],
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.6, ease: "power2.inOut" },
          pos + 0.15,
        );

        // Progress bar fill
        if (nextFill) {
          tl.fromTo(
            nextFill,
            { width: "0%" },
            { width: "100%", duration: 0.5, ease: "none" },
            pos + 0.15,
          );
        }

        // Right card: collapse current (animates down and fades)
        if (cards[i]) {
          tl.to(
            cards[i],
            {
              maxHeight: 0,
              opacity: 0,
              padding: 0,
              duration: 0.4,
              ease: "power2.in",
            },
            pos + 0.05,
          );
        }

        // Right card: expand next (animates up and fades in)
        if (cards[next]) {
          tl.fromTo(
            cards[next],
            { maxHeight: 0, opacity: 0, padding: 0 },
            {
              maxHeight: cardHeights[next],
              opacity: 1,
              padding: "20px 22px",
              duration: 0.4,
              ease: "power2.out",
            },
            pos + 0.35,
          );
        }
      }

      gsap.set(ctaRef.current, { opacity: 1 });
    }, section);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section className="how-tapx-fits" ref={sectionRef}>
      <h2 className="how-tapx-fits__heading" ref={headingRef}>
        How TapX Fits into a Live Event
      </h2>

      <div className="how-tapx-fits__layout">
        {/* LEFT: Step number */}
        <div className="how-tapx-fits__number-col">
          <div className="how-tapx-fits__number-wrap">
            {stepsData.map((step, i) => (
              <div
                key={step.number}
                className={`how-tapx-fits__number ${
                  i === 0 ? "how-tapx-fits__number--active" : ""
                }`}
                ref={(el) => (numbersRef.current[i] = el)}
              >
                {step.number}
              </div>
            ))}
          </div>
        </div>

        {/* CENTER: Phone mockup */}
        <div className="how-tapx-fits__phone-col">
          <div className="how-tapx-fits__phone">
            <div className="how-tapx-fits__phone-screen">
              <div className="how-tapx-fits__phone-progress">
                {stepsData.map((_, i) => (
                  <div
                    key={i}
                    className={`how-tapx-fits__phone-progress-bar ${
                      i === 0 ? "how-tapx-fits__phone-progress-bar--active" : ""
                    }`}
                    ref={(el) => (progressBarsRef.current[i] = el)}
                  >
                    <div className="how-tapx-fits__phone-progress-fill" />
                  </div>
                ))}
              </div>

              <div className="how-tapx-fits__phone-slides">
                {stepsData.map((step, i) => (
                  <div
                    key={step.number}
                    className={`how-tapx-fits__phone-slide ${
                      i === 0 ? "how-tapx-fits__phone-slide--active" : ""
                    }`}
                    ref={(el) => (slidesRef.current[i] = el)}
                  >
                    <div className="how-tapx-fits__slide-icon">
                      {slideIcons[i]}
                    </div>
                    <h3 className="how-tapx-fits__slide-title">
                      {step.slideTitle}
                    </h3>
                    <p className="how-tapx-fits__slide-text">
                      {step.slideText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Cards with content + label inside */}
        <div className="how-tapx-fits__right-col">
          {stepsData.map((step, i) => (
            <div
              key={step.number}
              className={`how-tapx-fits__right-item${
                i === 0 ? " how-tapx-fits__right-item--active" : ""
              }`}
              ref={(el) => (rightItemsRef.current[i] = el)}
            >
              {/* Card with content + label inside */}
              <div
                className={`how-tapx-fits__right-card${
                  i === 0 ? " how-tapx-fits__right-card--active" : ""
                }`}
              >
                <p className="how-tapx-fits__right-content">
                  {step.contentTitle}
                </p>
                <span className="how-tapx-fits__right-label-inside">
                  {step.label}
                </span>
              </div>
              {/* Collapsed label (shown when card is collapsed) */}
              <span
                className={`how-tapx-fits__right-label${
                  i === 0 ? " how-tapx-fits__right-label--hidden" : ""
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="how-tapx-fits__cta-wrap" ref={ctaRef}>
        <button className="how-tapx-fits__cta">
          See TapX in Action
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HowTapXFits;
