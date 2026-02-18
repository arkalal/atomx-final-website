import React from "react";
import Image from "next/image";
import "./ScrollingMarquee.scss";

const eventLogos = [
  { src: "/assets/event-logos/1.png", alt: "Event Partner 1" },
  { src: "/assets/event-logos/2.png", alt: "Event Partner 2" },
  { src: "/assets/event-logos/3.png", alt: "Event Partner 3" },
  { src: "/assets/event-logos/4.png", alt: "Event Partner 4" },
  { src: "/assets/event-logos/5.png", alt: "Event Partner 5" },
  { src: "/assets/event-logos/6.png", alt: "Event Partner 6" },
  { src: "/assets/event-logos/7.png", alt: "Event Partner 7" },
  { src: "/assets/event-logos/8.png", alt: "Event Partner 8" },
  { src: "/assets/event-logos/9.png", alt: "Event Partner 9" },
  { src: "/assets/event-logos/10.png", alt: "Event Partner 10" },
];

const ScrollingMarquee = () => {
  return (
    <section className="scrolling-marquee-section">
      <div className="scrolling-marquee-track">
        {/* Duplicate content for seamless loop */}
        {[...eventLogos, ...eventLogos].map((logo, i) => (
          <div key={i} className="marquee-logo">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollingMarquee;
