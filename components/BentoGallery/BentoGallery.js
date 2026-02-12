"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BentoGallery.scss";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
];

const BentoGallery = () => {
  const wrapRef = useRef(null);
  const galleryRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const gallery = galleryRef.current;
      const items = itemsRef.current.filter(Boolean);
      if (!gallery || items.length < 8) return;

      const centerIndex = 2;
      const centerItem = items[centerIndex];

      const nonCenterItems = items.filter((_, i) => i !== centerIndex);

      const centerRect = centerItem.getBoundingClientRect();
      const galleryRect = gallery.getBoundingClientRect();

      const originX =
        ((centerRect.left - galleryRect.left + centerRect.width / 2) /
          galleryRect.width) *
        100;
      const originY =
        ((centerRect.top - galleryRect.top + centerRect.height / 2) /
          galleryRect.height) *
        100;

      gsap.set(gallery, {
        transformOrigin: `${originX}% ${originY}%`,
      });

      const scaleX = window.innerWidth / centerRect.width;
      const scaleY = window.innerHeight / centerRect.height;
      const targetScale = Math.max(scaleX, scaleY) * 1.05;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.to(
        nonCenterItems,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          stagger: 0.02,
          ease: "none",
        },
        0
      ).to(
        gallery,
        {
          scale: targetScale,
          duration: 1,
          ease: "expoScale(1,5)",
        },
        0
      ).to(
        centerItem,
        {
          opacity: 0,
          duration: 0.3,
          ease: "none",
        },
        0.85
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bento-gallery-wrap" ref={wrapRef}>
      <div className="bento-gallery" ref={galleryRef}>
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="bento-gallery__item"
            ref={(el) => (itemsRef.current[i] = el)}
          >
            <img src={src} alt="" loading="eager" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGallery;
