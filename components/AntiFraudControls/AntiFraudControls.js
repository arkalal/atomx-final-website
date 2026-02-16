"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AntiFraudControls.scss";

gsap.registerPlugin(ScrollTrigger);

const inlineImages = [
  "/assets/access-control/0V5A6518.jpeg",
  "/assets/access-control/0V5A6595.jpeg",
  "/assets/access-control/0V5A6621.jpeg",
  "/assets/access-control/0V5A6630.jpeg",
];

const AntiFraudControls = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current.querySelectorAll(".afc__word");

      gsap.set(words, { opacity: 0, y: 30 });

      gsap.to(words, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.04,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="afc" ref={sectionRef}>
      <div className="afc__inner">
        <span className="afc__eyebrow">ANTI-FRAUD CONTROLS</span>

        <p className="afc__text" ref={textRef}>
          <span className="afc__word">Anti-fraud</span>{" "}
          <span className="afc__word">controls</span>{" "}
          <span className="afc__word afc__word--img">
            <img src={inlineImages[0]} alt="" />
          </span>{" "}
          <span className="afc__word">keep</span>{" "}
          <span className="afc__word">entry</span>{" "}
          <span className="afc__word">secure</span>{" "}
          <span className="afc__word">without</span>{" "}
          <span className="afc__word">slowing</span>{" "}
          <span className="afc__word afc__word--img">
            <img src={inlineImages[1]} alt="" />
          </span>{" "}
          <span className="afc__word">it</span>{" "}
          <span className="afc__word">down.</span>{" "}
          <span className="afc__word">Access</span>{" "}
          <span className="afc__word">control</span>{" "}
          <span className="afc__word">systems</span>{" "}
          <span className="afc__word afc__word--img">
            <img src={inlineImages[2]} alt="" />
          </span>{" "}
          <span className="afc__word">are</span>{" "}
          <span className="afc__word">designed</span>{" "}
          <span className="afc__word">to</span>{" "}
          <span className="afc__word">prevent</span>{" "}
          <span className="afc__word">misuse</span>{" "}
          <span className="afc__word">at</span>{" "}
          <span className="afc__word">event</span>{" "}
          <span className="afc__word">entry</span>{" "}
          <span className="afc__word afc__word--img">
            <img src={inlineImages[3]} alt="" />
          </span>{" "}
          <span className="afc__word">points.</span>{" "}
          <span className="afc__word">Each</span>{" "}
          <span className="afc__word">credential</span>{" "}
          <span className="afc__word">is</span>{" "}
          <span className="afc__word">validated</span>{" "}
          <span className="afc__word">in</span>{" "}
          <span className="afc__word">real</span>{" "}
          <span className="afc__word">time,</span>{" "}
          <span className="afc__word">ensuring</span>{" "}
          <span className="afc__word">that</span>{" "}
          <span className="afc__word">only</span>{" "}
          <span className="afc__word">authorized</span>{" "}
          <span className="afc__word">attendees</span>{" "}
          <span className="afc__word">can</span>{" "}
          <span className="afc__word">pass</span>{" "}
          <span className="afc__word">through—once</span>{" "}
          <span className="afc__word">and</span>{" "}
          <span className="afc__word">only</span>{" "}
          <span className="afc__word">once.</span>
        </p>
      </div>
    </section>
  );
};

export default AntiFraudControls;
