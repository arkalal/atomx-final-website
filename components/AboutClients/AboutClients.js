"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutClients.scss";

gsap.registerPlugin(ScrollTrigger);

const logos = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/event-logos/${i + 1}.png`,
  alt: `AtomX Client ${i + 1}`,
}));

const AboutClients = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
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
          duration: 0.7,
          delay: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );

      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll(".about-clients__logo");
        gsap.fromTo(
          items,
          { y: 25, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-clients" ref={sectionRef}>
      <div className="about-clients__grid-lines">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="about-clients__col-line" />
        ))}
      </div>

      <div className="about-clients__inner">
        <div className="about-clients__header">
          <h2 className="about-clients__heading" ref={headingRef}>
            The technology partner behind large-scale live experiences
          </h2>
          <p className="about-clients__sub" ref={subRef}>
            Built with enterprise trust. Proven on live grounds.
          </p>
        </div>

        <div className="about-clients__grid" ref={gridRef}>
          {logos.map((logo, i) => (
            <div className="about-clients__logo" key={i}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={90}
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutClients;
