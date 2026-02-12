import React from "react";
import "./ScrollingMarquee.scss";

const marqueeItems = [
  { type: "text", content: "Discover AtomX" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop",
  },
  { type: "text", content: "Discover AtomX" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop",
  },
  { type: "text", content: "Discover AtomX" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop",
  },
  { type: "text", content: "Discover AtomX" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop",
  },
];

const ScrollingMarquee = () => {
  return (
    <section className="scrolling-marquee-section">
      <div className="scrolling-marquee-track">
        {/* Duplicate content for seamless loop */}
        {[...marqueeItems, ...marqueeItems].map((item, i) =>
          item.type === "text" ? (
            <span key={i} className="marquee-text">
              {item.content}
            </span>
          ) : (
            <div key={i} className="marquee-image">
              <img src={item.src} alt="" loading="lazy" />
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default ScrollingMarquee;
