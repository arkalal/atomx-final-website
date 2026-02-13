"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FlexibleAccessCredentials.scss";

gsap.registerPlugin(ScrollTrigger);

const credentialsData = [
  {
    id: 1,
    eyebrow: "SUPPORTED TECHNOLOGY",
    title: "RFID Credentials",
    body: "AtomX access control systems are designed to work with RFID-based credentials, enabling fast and reliable entry validation at turnstiles and gates.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=1000&fit=crop&q=80",
  },
  {
    id: 2,
    eyebrow: "SUPPORTED TECHNOLOGY",
    title: "QR Code Access",
    body: "QR-based passes can be used for digital tickets, staff access, and temporary credentials, validated securely in real time through the AtomX platform.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1000&fit=crop&q=80",
  },
  {
    id: 3,
    eyebrow: "EVENT INFRASTRUCTURE",
    title: "Wristbands & Cards",
    body: "The system supports event-issued wristbands or cards, integrating them into a unified access control workflow without changing attendee experience.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&h=1000&fit=crop&q=80",
  },
];

const FlexibleAccessCredentials = () => {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const stripRef = useRef(null);
  const headingRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const strip = stripRef.current;
      const gallery = galleryRef.current;
      const heading = headingRef.current;

      if (!strip || !gallery) return;

      let stripWidth;
      let scrollDistance;

      function refresh() {
        stripWidth = strip.scrollWidth;
        scrollDistance = stripWidth - window.innerWidth;
      }

      refresh();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gallery,
          start: "center center",
          end: () => `+=${stripWidth}`,
          pin: gallery,
          scrub: true,
          invalidateOnRefresh: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentIndex = Math.min(
              Math.floor(progress * credentialsData.length),
              credentialsData.length - 1,
            );

            if (counterRef.current) {
              counterRef.current.textContent = `[ ${currentIndex + 1} / ${credentialsData.length} ]`;
            }

            if (progressRef.current) {
              progressRef.current.style.width = `${progress * 100}%`;
            }
          },
        },
      });

      tl.to(
        strip,
        {
          x: () => -scrollDistance,
          ease: "none",
        },
        0,
      );

      tl.to(
        heading,
        {
          opacity: 0.15,
          ease: "none",
          duration: 0.3,
        },
        0,
      );

      ScrollTrigger.addEventListener("refreshInit", refresh);

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", refresh);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="fac" ref={sectionRef}>
      <div className="fac__gallery" ref={galleryRef}>
        <div className="fac__heading-wrap" ref={headingRef}>
          <h2 className="fac__heading">Flexible Access Credentials</h2>
        </div>

        <div className="fac__strip" ref={stripRef}>
          {credentialsData.map((card, index) => (
            <div key={card.id} className="fac__card">
              <div className="fac__card-header">
                <span className="fac__card-number">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="fac__card-title">{card.title}</h3>
              </div>

              <div className="fac__card-image">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>

              <div className="fac__card-info">
                <div className="fac__card-tags">
                  <span className="fac__card-tag">{card.eyebrow}</span>
                </div>
                <p className="fac__card-body">{card.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fac__bottom">
          <span className="fac__counter" ref={counterRef}>
            [ 1 / {credentialsData.length} ]
          </span>

          <div className="fac__progress-track">
            <div className="fac__progress-bar" ref={progressRef} />
          </div>

          <span className="fac__view-all">VIEW ALL SOLUTIONS ↗</span>
        </div>
      </div>
    </section>
  );
};

export default FlexibleAccessCredentials;
