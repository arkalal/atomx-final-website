"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { GoArrowUpRight } from "react-icons/go";
import "./WallOfLove.scss";

gsap.registerPlugin(ScrollTrigger, Draggable);

const draggableCards = [
  {
    image: "/assets/home/gifs/Copy%20of%200V5A6639.jpeg",
    name: "Live Concert",
    location: "London, UK",
    event: "Music Festival Experience",
  },
  {
    image: "/assets/home/gifs/Copy%20of%200V5A6674.jpeg",
    name: "Tech Summit",
    location: "Berlin, Germany",
    event: "Innovation Conference 2025",
  },
  {
    image: "/assets/home/gifs/Copy%20of%200V5A6687.jpeg",
    name: "Food Festival",
    location: "Paris, France",
    event: "Gourmet Wine Tasting",
  },
  {
    image: "/assets/home/gifs/Copy%20of%200V5A6735.jpeg",
    name: "Sports Arena",
    location: "Dubai, UAE",
    event: "Championship Finals",
  },
];

const cardInitialOffsets = [
  { x: -140, y: -50, rotation: -6 },
  { x: 80, y: 30, rotation: 4.5 },
  { x: -30, y: 70, rotation: -2.5 },
  { x: 120, y: -20, rotation: 7 },
];

const WallOfLove = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const ctaRef = useRef(null);
  const cardRefs = useRef([]);
  const dragLabelRef = useRef(null);
  const highestZRef = useRef(10);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      });

      tl.from(line1Ref.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          line2Ref.current,
          {
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          line3Ref.current,
          {
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        );

      const cards = cardRefs.current.filter(Boolean);
      const dragLabel = dragLabelRef.current;

      cards.forEach((card, i) => {
        gsap.set(card, {
          x: cardInitialOffsets[i].x,
          y: cardInitialOffsets[i].y,
          rotation: cardInitialOffsets[i].rotation,
          opacity: 0,
          scale: 0.7,
        });

        gsap.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: i * 0.12,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        });

        Draggable.create(card, {
          type: "x,y",
          bounds: sectionRef.current,
          cursor: "grab",
          activeCursor: "grabbing",
          zIndexBoost: false,
          onPress: function () {
            highestZRef.current++;
            gsap.set(card, { zIndex: highestZRef.current });
            gsap.to(card, {
              scale: 1.06,
              boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
              duration: 0.25,
              ease: "power2.out",
            });
            if (dragLabel) {
              gsap.to(dragLabel, {
                opacity: 0,
                duration: 0.2,
              });
            }
          },
          onRelease: function () {
            gsap.to(card, {
              scale: 1,
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              duration: 0.4,
              ease: "elastic.out(1, 0.5)",
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wall-of-love" ref={sectionRef}>
      <div className="wall-of-love-content">
        <h2 className="wall-of-love-heading">
          <span className="wall-of-love-line" ref={line1Ref}>
            RUN YOUR
          </span>
          <span className="wall-of-love-line" ref={line2Ref}>
            NEXT
          </span>
          <span className="wall-of-love-line" ref={line3Ref}>
            EVENTS
          </span>
        </h2>
        <div className="wall-of-love-cta" ref={ctaRef}>
          <button className="wall-of-love-btn">
            <span>Make Your Event Seamless</span>
            <span className="wall-of-love-btn-arrow">
              <GoArrowUpRight />
            </span>
          </button>
        </div>
      </div>

      <div className="wol-cards-container">
        {draggableCards.map((card, idx) => (
          <div
            key={idx}
            className="wol-card"
            ref={(el) => (cardRefs.current[idx] = el)}
            style={{ zIndex: idx + 1 }}
          >
            <div className="wol-card-image-wrap">
              <Image
                src={card.image}
                alt={card.name}
                fill
                sizes="260px"
                style={{ objectFit: "cover" }}
                draggable={false}
              />
            </div>
            <div className="wol-card-info">
              <span className="wol-card-name">
                {card.name}, {card.location}
              </span>
              <span className="wol-card-event">{card.event}</span>
            </div>
            {idx === draggableCards.length - 1 && (
              <div className="wol-card-drag-badge" ref={dragLabelRef}>
                DRAG ME
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WallOfLove;
