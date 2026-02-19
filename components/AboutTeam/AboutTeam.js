"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutTeam.scss";

gsap.registerPlugin(ScrollTrigger);

const mediaItems = [
  {
    type: "image",
    src: "/assets/access-control/0V5A6518.jpeg",
    alt: "AtomX on-ground operations",
  },
  {
    type: "image",
    src: "/assets/access-control/0V5A6595.jpeg",
    alt: "AtomX event access",
  },
  { type: "video", src: "/assets/cashless-payments/showreel.mp4" },
  {
    type: "image",
    src: "/assets/access-control/0V5A6621.jpeg",
    alt: "AtomX crowd management",
  },
  {
    type: "image",
    src: "/assets/home/gifs/Copy of 0V5A6639.jpeg",
    alt: "AtomX team at work",
  },
  {
    type: "image",
    src: "/assets/access-control/DSC09118.jpg",
    alt: "AtomX team",
  },
  {
    type: "image",
    src: "/assets/home/gifs/Copy of 0V5A6674.jpeg",
    alt: "AtomX live event",
  },
  {
    type: "image",
    src: "/assets/home/gifs/Copy of 0V5A6735.jpeg",
    alt: "AtomX operations",
  },
];

const AboutTeam = () => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const subRef = useRef(null);
  const galleryRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = quoteRef.current.querySelectorAll(".about-team__word");
      gsap.fromTo(
        words,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        subRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      if (trackRef.current && galleryRef.current) {
        const track = trackRef.current;
        const scrollWidth = track.scrollWidth - galleryRef.current.offsetWidth;

        if (scrollWidth > 0) {
          gsap.to(track, {
            x: -scrollWidth * 0.6,
            ease: "none",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 60%",
              end: "bottom 20%",
              scrub: 1,
            },
          });
        }

        const items = track.querySelectorAll(".about-team__media");
        gsap.fromTo(
          items,
          { y: 50, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const quoteText =
    "Behind every seamless event is a team that never stops moving.";
  const highlightWords = ["seamless", "never"];

  return (
    <section className="about-team" ref={sectionRef}>
      <div className="about-team__inner">
        <p className="about-team__quote" ref={quoteRef}>
          {quoteText.split(" ").map((word, i) => (
            <span
              key={i}
              className={`about-team__word ${
                highlightWords.includes(word)
                  ? "about-team__word--highlight"
                  : ""
              }`}
            >
              {word}{" "}
            </span>
          ))}
        </p>

        <p className="about-team__sub" ref={subRef}>
          From gates to grounds, AtomX&apos;s on-site operations team works in
          real time — handling access, cashless flows, and crowd movement so the
          experience stays effortless for everyone.
        </p>
      </div>

      <div className="about-team__gallery" ref={galleryRef}>
        <div className="about-team__track" ref={trackRef}>
          {mediaItems.map((item, i) => (
            <div className="about-team__media" key={i}>
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 60vw, 280px"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="about-team__video"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
