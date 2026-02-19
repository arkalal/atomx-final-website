"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import {
  MdDevices,
  MdPeople,
  MdTimeline,
  MdWifiOff,
  MdSecurity,
  MdSupportAgent,
} from "react-icons/md";
import "./CashlessOnGround.scss";

gsap.registerPlugin(ScrollTrigger);

const operationItems = [
  {
    icon: MdDevices,
    title: "POSX Deployment",
    description:
      "POSX devices are deployed across bars, food counters, merchandise stalls, and top-up points — enabling fast, consistent cashless transactions using NFC cards and wristbands.",
  },
  {
    icon: MdPeople,
    title: "Staff Enablement",
    description:
      "Temporary and permanent staff are onboarded quickly with intuitive POS workflows, reducing training time and minimizing operational errors during peak hours.",
  },
  {
    icon: MdTimeline,
    title: "Live Transaction Monitoring",
    description:
      "All on-ground transactions sync with the AtomX platform in real time, giving organizers instant visibility into sales, queue performance, and vendor activity.",
  },
  {
    icon: MdWifiOff,
    title: "Offline Continuity",
    description:
      "In case of network disruptions, on-ground systems continue operating securely — with transactions synced automatically once connectivity is restored.",
  },
  {
    icon: MdSecurity,
    title: "Access & Crowd Flow Coordination",
    description:
      "On-ground operations align with access control systems to manage entry points, reduce congestion, and maintain smooth crowd movement across zones.",
  },
  {
    icon: MdSupportAgent,
    title: "Operational Control & Support",
    description:
      "Dedicated operational oversight ensures quick issue resolution, system stability, and uninterrupted service throughout the event lifecycle.",
  },
];

const CashlessOnGround = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const itemRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      itemRefs.current.filter(Boolean).forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="clog" ref={sectionRef}>
      <div className="clog__inner">
        <div className="clog__top">
          <div className="clog__top-text">
            <span className="clog__eyebrow">ON-GROUND EXECUTION</span>
            <h2 className="clog__heading" ref={headingRef}>
              Built for on-ground realities
            </h2>
            <p className="clog__sub">
              Not just software — a system that works in the field.
            </p>
          </div>
        </div>

        <div className="clog__body">
          <div className="clog__left">
            <div className="clog__desc-block" ref={descRef}>
              <h3 className="clog__desc-title">On-Ground Operations</h3>
              <p className="clog__desc-text">
                Before the gates open and the first tap happens, on-ground
                execution decides whether a cashless event succeeds or fails.
                This is where AtomX operates at full strength — across devices,
                staff, and real-time systems.
              </p>
              <p className="clog__desc-highlight">
                On-ground operations are the critical execution phase where
                AtomX ensures every transaction, entry, and top-up works
                flawlessly. This stage involves:
              </p>
            </div>
            <div className="clog__images" ref={imageRef}>
              <div className="clog__image-wrap">
                <Image
                  src="/assets/cashless-payments/industry-event.jpg"
                  alt="On-ground operations at live event"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="clog__image-wrap clog__image-wrap--secondary">
                <Image
                  src="/assets/cashless-payments/industry-corporate.jpg"
                  alt="POSX device deployment"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className="clog__right">
            {operationItems.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="clog__item"
                  ref={(el) => (itemRefs.current[i] = el)}
                >
                  <div className="clog__item-icon">
                    <IconComp />
                  </div>
                  <div className="clog__item-content">
                    <h4 className="clog__item-title">{item.title}</h4>
                    <p className="clog__item-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="clog__cta-wrap">
          <Link href="#" className="clog__cta-btn">
            <span className="clog__cta-text">Explore POSX Device</span>
            <span className="clog__cta-icon">
              <GoArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CashlessOnGround;
