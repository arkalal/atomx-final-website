import React from "react";
import {
  HiOutlineLightningBolt,
  HiOutlineChip,
  HiOutlineGlobe,
  HiOutlineSparkles,
} from "react-icons/hi";
import "./ScrollingMarquee.scss";

const marqueeItems = [
  { type: "text", content: "Discover", highlight: "atomX" },
  { type: "icon", icon: HiOutlineLightningBolt },
  { type: "text", content: "Discover", highlight: "atomX" },
  { type: "icon", icon: HiOutlineChip },
  { type: "text", content: "Discover", highlight: "atomX" },
  { type: "icon", icon: HiOutlineGlobe },
  { type: "text", content: "Discover", highlight: "atomX" },
  { type: "icon", icon: HiOutlineSparkles },
];

const ScrollingMarquee = () => {
  return (
    <section className="scrolling-marquee-section">
      <div className="scrolling-marquee-track">
        {/* Duplicate content for seamless loop */}
        {[...marqueeItems, ...marqueeItems].map((item, i) =>
          item.type === "text" ? (
            <span key={i} className="marquee-text">
              {item.content}{" "}
              <span className="marquee-text-highlight">{item.highlight}</span>
            </span>
          ) : (
            <div key={i} className="marquee-icon">
              <item.icon />
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default ScrollingMarquee;
