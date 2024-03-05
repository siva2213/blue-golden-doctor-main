import React, { useState, useEffect, useRef } from "react";
import "./Scrollbar.css";

const Scrollbar = ({ children, style }) => {
  const [thumbHeight, setThumbHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const { clientHeight, scrollHeight } = containerRef.current;
      setContentHeight(scrollHeight);
      const scrollbarTrackHeight = clientHeight;
      const scrollbarThumbHeight = (clientHeight / scrollHeight) * clientHeight;
      setThumbHeight(scrollbarThumbHeight);
    }
  }, [children]);

  const handleScroll = () => {
    const { scrollTop, clientHeight } = containerRef.current;
    const scrollbarTrackHeight = clientHeight;
    const scrollbarThumbHeight = (clientHeight / contentHeight) * clientHeight;
    const scrollPercentage = scrollTop / (contentHeight - clientHeight);
    const thumbHeight = scrollbarThumbHeight;
    setThumbHeight(thumbHeight);
    containerRef.current.style.setProperty(
      "--thumb-height",
      `${thumbHeight}px`
    );
  };

  return (
    <div
      className="scrollbar-container"
      style={{ ...style }}
      onScroll={handleScroll}
      ref={containerRef}
    >
      <div className="scrollbar-content">{children}</div>
      <div
        className="scrollbar-track"
        style={{ height: "100%" }} 
      >
        <div className="scrollbar-thumb" style={{ height: thumbHeight }}></div>
      </div>
    </div>
  );
};

export default Scrollbar;
