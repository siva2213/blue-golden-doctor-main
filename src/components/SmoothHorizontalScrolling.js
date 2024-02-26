import React, { useEffect, useRef } from "react";

const useSmoothHorizontalScrolling = () => {
  const scrollTo = (containerRef, target, duration) => {
    const targetElement = document.querySelector(target);
    if (!targetElement) {
      console.error(`Element with selector '${target}' not found`);
      return;
    }
    const targetPosition = targetElement.offsetLeft;
    const startPosition = containerRef.current.scrollLeft;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      containerRef.current.scrollLeft = run;
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return scrollTo;
};

const SmoothHorizontalScrolling = () => {
  const containerRef = useRef(null);
  const scrollTo = useSmoothHorizontalScrolling();

  useEffect(() => {
    scrollTo(containerRef, "#targetElement", 3000); // Smooth scroll to target element
  }, []); // Run only once on component mount

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", overflowX: "auto", whiteSpace: "nowrap" }}
    >
      {/* Content */}
    </div>
  );
};

export default SmoothHorizontalScrolling;
