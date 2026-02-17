"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./EntryPainPoints.scss";

gsap.registerPlugin(ScrollTrigger);

const painPointsData = [
  {
    number: "01",
    title: "Slow & Congested Entry",
    description:
      "High footfall moments create long queues at entry points. Manual checks and disconnected systems slow down attendee flow, impacting first impressions and overall event experience.",
    image: "/assets/access-control/0V5A6518.jpeg",
  },
  {
    number: "02",
    title: "Ticket Misuse & Unauthorized Access",
    description:
      "Shared tickets, duplicate scans, and invalid credentials make it difficult to control who enters the venue—especially during peak hours.",
    image: "/assets/access-control/0V5A6595.jpeg",
  },
  {
    number: "03",
    title: "Limited Real-Time Visibility",
    description:
      "Without centralized access control, organizers lack live insights into entry counts, gate-wise flow, and crowd distribution across zones.",
    image: "/assets/access-control/0V5A6621.jpeg",
  },
  {
    number: "04",
    title: "Operational Strain on Staff",
    description:
      "Security teams rely heavily on manual verification, increasing workload, human error, and response time during entry surges.",
    image: "/assets/access-control/0V5A6630.jpeg",
  },
  {
    number: "05",
    title: "Post-Event Data Gaps",
    description:
      "Entry data is often fragmented or unavailable, making it hard to analyze attendance patterns, peak timings, and access bottlenecks for future planning.",
    image: "/assets/access-control/DSC09118.jpg",
  },
];

const EntryPainPoints = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const eyebrowRef = useRef(null);
  const rowRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eyebrowRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      rowRefs.current.filter(Boolean).forEach((row) => {
        const number = row.querySelector(".ep__row-number");
        const image = row.querySelector(".ep__row-image");
        const content = row.querySelector(".ep__row-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          number,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
        );

        tl.fromTo(
          image,
          { opacity: 0, y: 30, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        );

        tl.fromTo(
          content,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ep" ref={sectionRef}>
      <div className="ep__header">
        <span className="ep__eyebrow" ref={eyebrowRef}>
          ENTRY CHALLENGES
        </span>
        <h2 className="ep__heading" ref={headingRef}>
          The Hidden Friction at Entry Points
        </h2>
      </div>

      <div className="ep__rows">
        {painPointsData.map((item, i) => (
          <div
            key={item.number}
            className="ep__row"
            ref={(el) => (rowRefs.current[i] = el)}
          >
            <span className="ep__row-number">{item.number}</span>

            <div className="ep__row-image">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="ep__row-content">
              <h3 className="ep__row-title">{item.title}</h3>
              <p className="ep__row-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EntryPainPoints;
