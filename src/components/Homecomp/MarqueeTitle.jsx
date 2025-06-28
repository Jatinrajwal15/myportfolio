"use client";
import React, { useState, useEffect } from "react";

const MarqueeTitle = ({ text, number = "01" }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden w-full py-16">
      <div
        className="whitespace-nowrap flex"
        style={{ transform: `translateX(-${scrollY * 0.2}px)` }}
      >
        {[...Array(3)].map((_, index) => (
          <div key={index} className="mx-4 text-[150px] font-bold leading-none">
            {text}{" "}
            <span className="inline-block align-super text-2xl font-normal">
              {number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTitle;
