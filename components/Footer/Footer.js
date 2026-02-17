"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.scss";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef(null);
  const brandRef = useRef(null);
  const taglineRef = useRef(null);
  const bottomRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(brandRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(taglineRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="site-footer" ref={sectionRef}>
      <div className="footer-content">
        <h2 className="footer-brand" ref={brandRef}>
          AtomX
        </h2>
        <p className="footer-tagline" ref={taglineRef}>
          THE <strong>OFFICIAL</strong> CASHLESS PAYMENTS &amp; ACCESS CONTROL
          PLATFORM FOR LIVE EVENTS
        </p>
      </div>
      <div className="footer-bottom" ref={bottomRef}>
        <span className="footer-copy">
          &copy; atomX {new Date().getFullYear()}
        </span>
        <div className="footer-links">
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
          <Link href="/privacy" className="footer-link">
            Privacy Policy
          </Link>
          <Link href="/refund-cancellation" className="footer-link">
            Refund Policy
          </Link>
          <Link href="/terms" className="footer-link">
            Terms & Conditions
          </Link>
          <Link href="/gdpr" className="footer-link">
            GDPR
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
