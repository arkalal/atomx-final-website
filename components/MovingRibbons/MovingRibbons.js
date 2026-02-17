import React from "react";
import Image from "next/image";
import "./MovingRibbons.scss";

const ribbonData = [
  {
    direction: "right",
    colorClass: "ribbon--blue",
    items: [
      { type: "text", content: "NFC" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop",
      },
      { type: "text", content: "CASHLESS" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=300&fit=crop",
      },
      { type: "text", content: "INNOVATION" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop",
      },
      { type: "text", content: "EVENTS" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=300&fit=crop",
      },
    ],
  },
  {
    direction: "left",
    colorClass: "ribbon--lavender",
    items: [
      { type: "text", content: "ACCESS" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=300&fit=crop",
      },
      { type: "text", content: "RFID" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop",
      },
      { type: "text", content: "REAL-TIME" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=300&fit=crop",
      },
      { type: "text", content: "TapX" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop",
      },
    ],
  },
  {
    direction: "right",
    colorClass: "ribbon--coral",
    items: [
      { type: "text", content: "SCALE" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop",
      },
      { type: "text", content: "GROWTH" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=300&fit=crop",
      },
      { type: "text", content: "IMPACT" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=300&fit=crop",
      },
      { type: "text", content: "CONTROL" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=300&fit=crop",
      },
    ],
  },
];

const MovingRibbons = () => {
  return (
    <section className="ribbons-section">
      {ribbonData.map((ribbon, idx) => (
        <div
          key={idx}
          className={`ribbon ${ribbon.colorClass} ribbon--${ribbon.direction}`}
        >
          <div className="ribbon-track">
            {/* Render items twice for seamless loop */}
            {[...ribbon.items, ...ribbon.items].map((item, i) =>
              item.type === "text" ? (
                <span key={i} className="ribbon-text">
                  {item.content}
                </span>
              ) : (
                <div key={i} className="ribbon-image">
                  <Image
                    src={item.src}
                    alt=""
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MovingRibbons;
