"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ImageBoxes.scss";

gsap.registerPlugin(ScrollTrigger);

const ImageBoxes = () => {
  const sectionRef = useRef(null);
  const centerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const bottomRef = useRef(null);
  const starTopRef = useRef(null);
  const starBottomRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(centerRef.current, { y: 80, opacity: 0, scale: 0.92 });
      gsap.set(leftRef.current, { x: -100, opacity: 0, rotate: -8 });
      gsap.set(rightRef.current, { x: 100, opacity: 0, rotate: 8 });
      gsap.set(bottomRef.current, { y: 60, opacity: 0, scale: 0.8 });
      gsap.set(starTopRef.current, { scale: 0, rotation: -180 });
      gsap.set(starBottomRef.current, { scale: 0, rotation: 180 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 15%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(centerRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      });

      tl.to(
        starTopRef.current,
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.7",
      );

      tl.to(
        leftRef.current,
        {
          x: 0,
          opacity: 1,
          rotate: -2,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.6",
      );

      tl.to(
        rightRef.current,
        {
          x: 0,
          opacity: 1,
          rotate: 2,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.8",
      );

      tl.to(
        bottomRef.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.5",
      );

      tl.to(
        starBottomRef.current,
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6",
      );

      gsap.to(leftRef.current, {
        y: -8,
        rotation: -3,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });

      gsap.to(rightRef.current, {
        y: 10,
        rotation: 3,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      });

      gsap.to(bottomRef.current, {
        y: -6,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="image-boxes-section" ref={sectionRef}>
      {/* Decorative star - top left */}
      <div className="image-boxes-star image-boxes-star--top" ref={starTopRef}>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 0L42.5 37.5L80 40L42.5 42.5L40 80L37.5 42.5L0 40L37.5 37.5L40 0Z"
            fill="#e0524f"
          />
          <path
            d="M40 10L41.5 38.5L70 40L41.5 41.5L40 70L38.5 41.5L10 40L38.5 38.5L40 10Z"
            fill="#e0524f"
          />
        </svg>
      </div>

      {/* Decorative star - bottom right */}
      <div
        className="image-boxes-star image-boxes-star--bottom"
        ref={starBottomRef}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 0L42.5 37.5L80 40L42.5 42.5L40 80L37.5 42.5L0 40L37.5 37.5L40 0Z"
            fill="#e0524f"
          />
          <path
            d="M40 10L41.5 38.5L70 40L41.5 41.5L40 70L38.5 41.5L10 40L38.5 38.5L40 10Z"
            fill="#e0524f"
          />
        </svg>
      </div>

      <div className="image-boxes-layout">
        {/* Small left card - overlapping center */}
        <div className="image-box image-box--small-left" ref={leftRef}>
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=500&fit=crop&q=80"
            alt="Event crowd"
            fill
            sizes="(max-width: 768px) 200px, 400px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Large center card - tall and narrower */}
        <div className="image-box image-box--large" ref={centerRef}>
          <iframe
            src="https://www.youtube.com/embed/fe_sUj8OWaY?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=fe_sUj8OWaY&playsinline=1"
            title="AtomX Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Small right card - overlapping center */}
        <div className="image-box image-box--small-right" ref={rightRef}>
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=500&fit=crop&q=80"
            alt="Live event"
            fill
            sizes="(max-width: 768px) 200px, 400px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Small bottom center card - overlapping center bottom */}
        <div className="image-box image-box--bottom" ref={bottomRef}>
          <iframe
            src="https://www.youtube.com/embed/ts6kTurcUBk?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=ts6kTurcUBk&playsinline=1"
            title="AtomX Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default ImageBoxes;
