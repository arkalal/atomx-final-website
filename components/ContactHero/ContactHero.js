"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FiCornerDownLeft } from "react-icons/fi";
import "./ContactHero.scss";

const ContactHero = () => {
  const sectionRef = useRef(null);
  const navRef = useRef(null);
  const infoRef = useRef(null);
  const formWrapRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      tl.fromTo(
        ".contact-form-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.4"
      );

      tl.fromTo(
        ".contact-form-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.5"
      );

      tl.fromTo(
        ".contact-form",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      );

      tl.fromTo(
        infoRef.current.children,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-hero" ref={sectionRef}>
      <nav className="contact-nav" ref={navRef}>
        <div className="contact-nav-left">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              <button className="contact-menu-btn">
                <HiOutlineViewGrid />
                <span>Menu</span>
              </button>
            </Link>
          </motion.div>
        </div>

        <Link href="/" className="contact-nav-center">
          atomX
        </Link>

        <div className="contact-nav-right">
          <motion.button
            className="contact-nav-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Services
          </motion.button>
          <motion.button
            className="contact-nav-cta-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GoArrowUpRight />
          </motion.button>
        </div>
      </nav>

      <div className="contact-main">
        <div className="contact-info" ref={infoRef}>
          <div className="contact-info-block">
            <span className="contact-info-label">CHAT TO US</span>
            <p className="contact-info-text">
              We&apos;re here to help with any questions you may have. Feel free
              to drop us an email or fill in the form.
            </p>
            <p className="contact-info-text">
              Our team is available Monday through Friday, from 9:00 AM to 6:00
              PM IST.
            </p>
          </div>

          <div className="contact-info-block">
            <span className="contact-info-label">REACH OUT TO US</span>
            <motion.a
              href="mailto:hello@atomx.in"
              className="contact-email-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiCornerDownLeft />
              <span>hello@atomx.in</span>
            </motion.a>
          </div>
        </div>

        <div className="contact-form-wrap" ref={formWrapRef}>
          <h1 className="contact-form-title">Contact</h1>
          <p className="contact-form-subtitle">
            Tell us about your event — we&apos;ll take it from there.
          </p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form-row">
              <input
                type="text"
                className="contact-input"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                className="contact-input"
                placeholder="Email"
                required
              />
            </div>

            <div className="contact-form-row">
              <input
                type="tel"
                className="contact-input"
                placeholder="Phone Number"
              />
              <select className="contact-select" defaultValue="">
                <option value="" disabled>
                  Event Type
                </option>
                <option value="music-festival">Music Festival</option>
                <option value="concert">Concert / Arena Show</option>
                <option value="conference">Conference / Exhibition</option>
                <option value="sports">Sports Event</option>
                <option value="corporate">Private / Corporate Event</option>
                <option value="other">Other</option>
              </select>
            </div>

            <input
              type="text"
              className="contact-input"
              placeholder="Expected Footfall (Optional)"
            />

            <textarea
              className="contact-textarea"
              placeholder="Your Message (Optional)"
              rows={5}
            />

            <motion.button
              type="submit"
              className="contact-submit-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Get Started</span>
              <span className="contact-submit-arrow">
                <GoArrowUpRight />
              </span>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
