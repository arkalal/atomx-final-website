"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoShieldCheck, GoLock, GoVerified } from "react-icons/go";
import "./AboutAtomX.scss";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    icon: <GoShieldCheck />,
    title: "ISO 27001 Certified",
  },
  {
    icon: <GoLock />,
    title: "GDPR Compliant",
  },
  {
    icon: <GoVerified />,
    title: "SOC 2 Type II",
  },
];

const stats = [
  { number: "13", suffix: "+", label: "YEARS OF EXPERIENCE" },
  { number: "1000", suffix: "+", label: "HAPPY CLIENTS" },
  { number: "6000", suffix: "+", label: "EVENTS POWERED" },
  { number: "7,50,000", suffix: "+", label: "ATTENDEES SERVED" },
];

const AboutAtomX = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const rightRef = useRef(null);
  const certsRef = useRef(null);
  const bigTextRef = useRef(null);
  const bodyRef = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
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
        },
      );

      if (certsRef.current) {
        const cards = certsRef.current.querySelectorAll(".about-atomx__cert");
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: certsRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      gsap.fromTo(
        bigTextRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bigTextRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      if (bodyRef.current) {
        gsap.fromTo(
          bodyRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bodyRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (statsRef.current) {
        const items = statsRef.current.querySelectorAll(".about-atomx__stat");
        items.forEach((item) => {
          const bigNum = item.querySelector(".about-atomx__stat-num");
          const label = item.querySelector(".about-atomx__stat-label");

          gsap.fromTo(
            bigNum,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            },
          );

          gsap.fromTo(
            label,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              delay: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            },
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-atomx" ref={sectionRef}>
      <div className="about-atomx__grid-lines">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="about-atomx__col-line" />
        ))}
      </div>

      <div className="about-atomx__layout">
        <div className="about-atomx__left">
          <h2 className="about-atomx__title" ref={titleRef}>
            About AtomX
          </h2>
        </div>

        <div className="about-atomx__right" ref={rightRef}>
          <div className="about-atomx__certs" ref={certsRef}>
            {certifications.map((cert, i) => (
              <div className="about-atomx__cert" key={i}>
                <div className="about-atomx__cert-icon">{cert.icon}</div>
                <span className="about-atomx__cert-name">{cert.title}</span>
              </div>
            ))}
          </div>

          <div className="about-atomx__big-text" ref={bigTextRef}>
            <p>
              Established in 2012, AtomX was built to{" "}
              <strong>
                redefine how live events operate — making access, payments, and
                data flow
              </strong>{" "}
              faster, smarter, and more secure. What started as a focused
              event-tech solution has grown into a trusted infrastructure
              powering large-scale festivals, concerts, and{" "}
              <strong>live experiences across India.</strong>
            </p>
          </div>

          <div className="about-atomx__body" ref={bodyRef}>
            <p>
              We design systems that work on the ground, in real time — where
              speed matters, queues cost money, and security can&apos;t fail.
              From controlled access to seamless cashless journeys, AtomX
              enables organisers to run events with confidence, clarity, and
              complete control.
            </p>
          </div>

          <div className="about-atomx__stats" ref={statsRef}>
            {stats.map((stat, i) => (
              <div className="about-atomx__stat" key={i}>
                <span className="about-atomx__stat-num">
                  {stat.number}
                  <span className="about-atomx__stat-suffix">
                    {stat.suffix}
                  </span>
                </span>
                <h4 className="about-atomx__stat-label">{stat.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAtomX;
