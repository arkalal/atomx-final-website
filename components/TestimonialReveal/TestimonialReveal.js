"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import "./TestimonialReveal.scss";

gsap.registerPlugin(ScrollTrigger);

const TestimonialReveal = () => {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const contentRef = useRef(null);
  const starsRef = useRef(null);
  const nameRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const inner = innerRef.current;
      const leftImg = leftImgRef.current;
      const rightImg = rightImgRef.current;

      const calcOffsets = () => {
        const innerRect = inner.getBoundingClientRect();
        const imgW = leftImg.offsetWidth;
        const centerX = innerRect.width / 2;
        const overflow = imgW * 0.35;

        return {
          startLeft: centerX - imgW / 2 + imgW * 0.08,
          startRight: centerX - imgW / 2 - imgW * 0.08,
          endLeft: -overflow,
          endRight: innerRect.width - imgW + overflow,
        };
      };

      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const offsets = calcOffsets();

        gsap.set(leftImg, { left: offsets.startLeft, xPercent: 0 });
        gsap.set(rightImg, { left: offsets.startRight, xPercent: 0 });
        gsap.set(contentRef.current, { opacity: 0, scale: 0.85 });
        gsap.set(
          [starsRef.current, nameRef.current, quoteRef.current, ctaRef.current],
          { opacity: 0, y: 25 },
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "center center",
            scrub: 1,
          },
        });

        tl.to(leftImg, {
          left: offsets.endLeft,
          duration: 1,
          ease: "none",
        })
          .to(
            rightImg,
            { left: offsets.endRight, duration: 1, ease: "none" },
            "<",
          )
          .to(
            contentRef.current,
            { opacity: 1, scale: 1, duration: 0.5, ease: "none" },
            0.25,
          )
          .to(
            starsRef.current,
            { opacity: 1, y: 0, duration: 0.3, ease: "none" },
            0.35,
          )
          .to(
            nameRef.current,
            { opacity: 1, y: 0, duration: 0.3, ease: "none" },
            0.42,
          )
          .to(
            quoteRef.current,
            { opacity: 1, y: 0, duration: 0.4, ease: "none" },
            0.48,
          )
          .to(
            ctaRef.current,
            { opacity: 1, y: 0, duration: 0.3, ease: "none" },
            0.6,
          );
      });

      mm.add("(max-width: 768px)", () => {
        gsap.set(leftImg, { left: "30%", xPercent: 0 });
        gsap.set(rightImg, { left: "35%", xPercent: 0 });
        gsap.set(contentRef.current, { opacity: 0, scale: 0.85 });
        gsap.set(
          [starsRef.current, nameRef.current, quoteRef.current, ctaRef.current],
          { opacity: 0, y: 20 },
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "center center",
            scrub: 1,
          },
        });

        tl.to(leftImg, { left: "-10%", duration: 1, ease: "none" })
          .to(rightImg, { left: "75%", duration: 1, ease: "none" }, "<")
          .to(
            contentRef.current,
            { opacity: 1, scale: 1, duration: 0.5, ease: "none" },
            0.3,
          )
          .to(
            [
              starsRef.current,
              nameRef.current,
              quoteRef.current,
              ctaRef.current,
            ],
            { opacity: 1, y: 0, duration: 0.4, ease: "none" },
            0.4,
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonial-reveal" ref={sectionRef}>
      <div className="testimonial-reveal-inner" ref={innerRef}>
        {/* Left image */}
        <div className="testimonial-img testimonial-img-left" ref={leftImgRef}>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
            alt="Team collaboration"
            fill
            sizes="(max-width: 768px) 300px, 500px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Right image */}
        <div
          className="testimonial-img testimonial-img-right"
          ref={rightImgRef}
        >
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop"
            alt="Team working"
            fill
            sizes="(max-width: 768px) 300px, 500px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Center content */}
        <div className="testimonial-center" ref={contentRef}>
          <div className="testimonial-stars" ref={starsRef}>
            ★ ★ ★ ★ ★
          </div>
          <span className="testimonial-reviewer" ref={nameRef}>
            RAJESH, EVENT DIRECTOR — INDIA
          </span>
          <p className="testimonial-quote" ref={quoteRef}>
            AtomX transformed our festival operations overnight. Zero cash
            queues, real-time revenue tracking, and seamless entry for 50,000+
            attendees. We&apos;ll never go back.
          </p>
          <div className="testimonial-cta" ref={ctaRef}>
            <button className="testimonial-cta-btn">
              <span>See How It Works</span>
              <span className="testimonial-cta-arrow">
                <GoArrowUpRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialReveal;
