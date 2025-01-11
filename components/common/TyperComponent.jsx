"use client";
import React, { useEffect, useRef, useState } from "react";

// Updated default strings with a <br /> in the first string
const demostrings = [
  "Your Business Needs a Digital <br /> Revolution.",
  "Accelerate Your Business Growth.",
  "Shape the Future of Your Business."
];

export default function TyperComponent({
  className = "theme-gradient",
  strings = demostrings,
}) {
  const [activeStringIndex, setActiveStringIndex] = useState(0);
  const typeitRef = useRef(null);

  useEffect(() => {
    // Set initial width based on the first .is-visible element
    if (typeitRef.current) {
      const visibleElem = typeitRef.current.querySelector(".is-visible");
      if (visibleElem) {
        typeitRef.current.style.width = visibleElem.scrollWidth + "px";
      }
    }

    // Interval to swap between strings
    const repeatTyping = setInterval(() => {
      // 1) Shrink width to 0
      if (typeitRef.current) {
        typeitRef.current.style.width = "0px";
      }

      // 2) After shrink, switch to next string
      setTimeout(() => {
        setActiveStringIndex((prevIndex) =>
          prevIndex === strings.length - 1 ? 0 : prevIndex + 1
        );

        // 3) Expand to match new string’s width
        setTimeout(() => {
          if (typeitRef.current) {
            const newVisibleElem =
              typeitRef.current.querySelector(".is-visible");
            if (newVisibleElem) {
              typeitRef.current.style.width = newVisibleElem.scrollWidth + "px";
            }
          }
        }, 100); // short delay to let new string appear
      }, 1000); // time for width to fully shrink
    }, 5000); // total interval between each text transition

    return () => {
      clearInterval(repeatTyping);
    };
  }, [strings]);

  return (
    <span ref={typeitRef} className="cd-words-wrapper typeanimation">
      {strings.map((text, i) => (
        <b
          key={i}
          className={`${className} ${
            activeStringIndex === i ? "is-visible" : "is-hidden"
          }`}
          // Use dangerouslySetInnerHTML to interpret <br />
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ))}
    </span>
  );
}
