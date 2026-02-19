"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutExperience.scss";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: "13",
    suffix: "+",
    label: "Years of Experience",
    desc: "Building and operating live event technology",
  },
  {
    number: "6000",
    suffix: "+",
    label: "Events Powered",
    desc: "Across festivals, concerts, and large-scale gatherings",
  },
  {
    number: "1000",
    suffix: "+",
    label: "Happy Clients",
    desc: "Trusted again and again by organisers",
  },
  {
    number: "7,50,000",
    suffix: "+",
    label: "Attendees Served",
    desc: "Smooth entries, secure access, seamless transactions",
  },
];

const AboutExperience = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll(".about-exp__item");
        items.forEach((item) => {
          const bigNum = item.querySelector(".about-exp__big-num");
          const label = item.querySelector(".about-exp__label");
          const desc = item.querySelector(".about-exp__desc");

          gsap.fromTo(
            bigNum,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );

          gsap.fromTo(
            label,
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              delay: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );

          gsap.fromTo(
            desc,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: 0.35,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        const crosshair = sectionRef.current.querySelector(
          ".about-exp__crosshair"
        );
        if (crosshair) {
          gsap.fromTo(
            crosshair,
            { scale: 0, opacity: 0, rotation: -90 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-exp" ref={sectionRef}>
      <div className="about-exp__grid" ref={gridRef}>
        {stats.map((stat, i) => (
          <div className="about-exp__item" key={i}>
            <span className="about-exp__big-num">
              {stat.number}
              <span className="about-exp__suffix">{stat.suffix}</span>
            </span>
            <h4 className="about-exp__label">{stat.label}</h4>
            <p className="about-exp__desc">{stat.desc}</p>
          </div>
        ))}
        <div className="about-exp__crosshair">
          <span className="about-exp__cross-v" />
          <span className="about-exp__cross-h" />
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
