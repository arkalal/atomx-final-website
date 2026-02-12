"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoShieldCheck } from "react-icons/go";
import "./ContactTrust.scss";

gsap.registerPlugin(ScrollTrigger);

const badges = [
  { label: "ISO 27001" },
  { label: "GDPR Compliant" },
  { label: "SOC 2 Type II" },
  { label: "AICPA SOC Certified" },
];

const ContactTrust = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const badgesRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      if (badgesRef.current) {
        const badgeEls = badgesRef.current.querySelectorAll(
          ".contact-trust-badge"
        );
        gsap.fromTo(
          badgeEls,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: badgesRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-trust" ref={sectionRef}>
      <div className="contact-trust-inner">
        <span className="contact-trust-label">SECURITY</span>
        <h2 className="contact-trust-title" ref={titleRef}>
          Trusted at Scale
        </h2>
        <p className="contact-trust-text" ref={textRef}>
          Backed by proven technology and deployed across high-footfall live
          events, AtomX is trusted by organisers, partners, and vendors to
          deliver secure, scalable event operations.
        </p>
        <div className="contact-trust-badges" ref={badgesRef}>
          {badges.map((badge, i) => (
            <div className="contact-trust-badge" key={i}>
              <span className="contact-trust-badge-icon">
                <GoShieldCheck />
              </span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactTrust;
