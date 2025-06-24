import React, { useEffect, useRef, useState } from "react";
import styles from "./ScrollTracker.module.css";

const ScrollTracker = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = document.querySelector("#program-scroll-section");
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = section.offsetHeight;

      const scrollPosition = Math.min(Math.max((windowHeight - rect.top) / totalHeight, 0), 1);

      setProgress(scrollPosition * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <div className={styles.progress} style={{ height: `${progress}%` }} />
      </div>
    </div>
  );
};

export default ScrollTracker;
