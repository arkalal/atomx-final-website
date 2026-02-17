"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { GoArrowRight } from "react-icons/go";
import "./ExperiencesList.scss";

const experiencesData = [
  {
    title: "Cashless Payments",
    tags: ["NFC", "RFID WRISTBANDS", "TAP & PAY"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop",
    hoverColor: "rgba(200, 180, 220, 0.12)",
    icon: "💳",
  },
  {
    title: "TapX — Point of Sale",
    tags: ["1-SEC TRANSACTIONS", "OFFLINE-FIRST", "REAL-TIME REPORTS"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=600&fit=crop",
    hoverColor: "rgba(180, 210, 230, 0.12)",
    icon: "⚡",
  },
  {
    title: "Access Control",
    tags: ["FACIAL RECOGNITION", "RFID & QR", "LIVE TRACKING"],
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop",
    hoverColor: "rgba(220, 190, 200, 0.12)",
    icon: "�",
  },
  {
    title: "Crowd Analytics",
    tags: ["HEATMAPS", "REAL-TIME DATA", "ATTENDEE INSIGHTS"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop",
    hoverColor: "rgba(180, 220, 200, 0.12)",
    icon: "📊",
  },
  {
    title: "Event Integration Suite",
    tags: ["API ACCESS", "CUSTOM SETUP", "WHITE-LABEL"],
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=600&fit=crop",
    hoverColor: "rgba(210, 200, 170, 0.12)",
    icon: "🔗",
  },
];

const ExperiencesList = () => {
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean);
    const images = imageRefs.current.filter(Boolean);

    gsap.set(images, { xPercent: -50, yPercent: -50 });

    let firstEnter;

    rows.forEach((el, i) => {
      const image = images[i];
      if (!image) return;

      const setX = gsap.quickTo(image, "x", {
        duration: 0.4,
        ease: "power3",
      });
      const setY = gsap.quickTo(image, "y", {
        duration: 0.4,
        ease: "power3",
      });

      const align = (e) => {
        if (firstEnter) {
          setX(e.clientX, e.clientX);
          setY(e.clientY, e.clientY);
          firstEnter = false;
        } else {
          setX(e.clientX);
          setY(e.clientY);
        }
      };

      const startFollow = () => document.addEventListener("mousemove", align);
      const stopFollow = () => document.removeEventListener("mousemove", align);

      const fade = gsap.to(image, {
        autoAlpha: 1,
        ease: "none",
        paused: true,
        duration: 0.15,
        onReverseComplete: stopFollow,
      });

      el.addEventListener("mouseenter", (e) => {
        firstEnter = true;
        fade.play();
        startFollow();
        align(e);
      });

      el.addEventListener("mouseleave", () => fade.reverse());
    });

    return () => {
      rows.forEach((el) => {
        if (!el) return;
        el.replaceWith(el.cloneNode(true));
      });
    };
  }, []);

  return (
    <section className="experiences-list-section" ref={sectionRef}>
      <ul className="experiences-list">
        {experiencesData.map((item, idx) => (
          <li
            key={idx}
            className="experiences-row"
            ref={(el) => (rowRefs.current[idx] = el)}
            style={{ "--hover-color": item.hoverColor }}
          >
            {/* Cursor-tracking preview image */}
            <Image
              className="experiences-preview-img"
              ref={(el) => (imageRefs.current[idx] = el)}
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              priority
            />

            <div className="experiences-row-left">
              <div className="experiences-row-icon">{item.icon}</div>
              <div className="experiences-row-info">
                <h3 className="experiences-row-title">{item.title}</h3>
                <div className="experiences-row-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="experiences-row-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button className="experiences-row-arrow">
              <GoArrowRight />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperiencesList;
