"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FeaturedPortfolio.scss";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    image: "/assets/home/gifs/Copy%20of%200V5A6639.jpeg",
    title: "GreenWaves",
    category: "Eco-Warriors",
  },
  {
    image: "/assets/home/gifs/Copy%20of%200V5A6674.jpeg",
    title: "Mystic Horizons",
    category: "ModeElite",
  },
  {
    image: "/assets/home/gifs/Copy%20of%200V5A6687.jpeg",
    title: "Pixel Fusion",
    category: "Techno",
  },
  {
    image: "/assets/home/gifs/Copy%20of%200V5A6735.jpeg",
    title: "SoundScape",
    category: "Live Audio",
  },
  {
    image: "/assets/home/cashlessStack.jpg",
    title: "NeonPulse",
    category: "Digital Arts",
  },
  {
    image: "/assets/home/tapX-Stack.jpeg",
    title: "EventFlow",
    category: "Tech Events",
  },
];

const FeaturedPortfolio = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(btnRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      const totalScrollWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalScrollWidth - viewportWidth + 100;

      if (scrollDistance > 0) {
        gsap.to(track, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => "+=" + scrollDistance * 1.2,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }

      const cards = cardRefs.current.filter(Boolean);
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          scale: 0.92,
          duration: 0.8,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="featured-portfolio" ref={sectionRef}>
      <div className="fp-header">
        <h2 className="fp-heading" ref={headingRef}>
          Our Handpicked Featured Portfolio
        </h2>
        <button className="fp-see-all" ref={btnRef}>
          <span className="fp-see-all-dot"></span>
          <span>See All Projects</span>
        </button>
      </div>
      <div className="fp-track" ref={trackRef}>
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            className="fp-card"
            ref={(el) => (cardRefs.current[idx] = el)}
          >
            <div className="fp-card-image">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 80vw, 480px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="fp-card-info">
              <h3 className="fp-card-title">{item.title}</h3>
              <span className="fp-card-category">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
