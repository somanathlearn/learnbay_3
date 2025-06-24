import React, { useEffect, useState } from "react";
import styles from "./ScrollTracker.module.css";

const ScrollTracker = ({ cardCount }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const cardsEl = document.querySelector("#program-scroll-section");
    if (!cardsEl) return;

    const handleScroll = () => {
      const rect = cardsEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // We want the progress to start when the top of the container
      // is visible and end when the bottom of the container is visible.
      // 0% = top of container aligns with bottom of viewport
      // 100% = bottom of container aligns with top of viewport
      const totalScrollableDist = cardsEl.offsetHeight + windowHeight;

      // Current position within that total distance
      const currentScrollPos = windowHeight - rect.top;

      let newProgress = (currentScrollPos / totalScrollableDist) * 100;

      // Clamp the value between 0 and 100
      newProgress = Math.min(Math.max(newProgress, 0), 100);

      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.scrollTrackerContainer}>
      <div className={styles.track}>
        <div className={styles.progress} style={{ height: `${progress}%` }} />
      </div>
      <div className={styles.dots}>
        {Array.from({ length: cardCount }).map((_, index) => {
          // Position dots evenly
          const position = (index / (cardCount - 1)) * 100;

          // Determine if the dot should be active
          const lowerBound = ((index - 0.5) / (cardCount - 1)) * 100;
          const upperBound = ((index + 0.5) / (cardCount - 1)) * 100;
          const isActive = progress >= lowerBound && progress < upperBound;

          return (
            <div
              key={index}
              className={`${styles.dot} ${isActive ? styles.activeDot : ""}`}
              style={{ top: `${position}%` }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollTracker;
