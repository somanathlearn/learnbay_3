import React, { useEffect, useState, useRef, memo, useCallback } from "react";
import Image from "next/image";
import styles from "./pSummary.module.css";

const PSummaryAD = ({
  summaryData,
  customClassName = "", // New prop for dynamic class
  extraImageSrcWidth,
  extraImageSrcHeight

}) => {
  const [activeDot, setActiveDot] = useState(0); // Track the active dot
  const contentContainerRef = useRef(null); // Ref for content container

  // Function to scroll to a specific section
  const scrollToSection = useCallback((index) => {
    const section = document.querySelectorAll(`.${styles.Box}`)[index];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // Adjust this to nearest to avoid excessive scrolling
        inline: "start",  // Keeps horizontal scrolling intact
      });
      setActiveDot(index);
    }
  }, []);

  useEffect(() => {
    const contentContainer = contentContainerRef.current;

    // Set overflow scroll on smaller devices
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        contentContainer.style.overflowX = "auto";
      } else {
  
      }
    };

    window.addEventListener("resize", handleResize);

    // Call the handler once on initial render
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const contentContainer = contentContainerRef.current;

    // Update the active dot based on scroll position
    const handleScroll = () => {
      const sections = document.querySelectorAll(`.${styles.Box}`);
      let updatedDot = activeDot; // Use local state to track updates

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.left >= 0 && rect.left < window.innerWidth / 2 && activeDot !== index) {
          updatedDot = index;
        }
      });

      // Only update state if necessary to avoid re-renders
      if (updatedDot !== activeDot) {
        setActiveDot(updatedDot);
      }
    };

    contentContainer.addEventListener("scroll", handleScroll);

    return () => {
      contentContainer.removeEventListener("scroll", handleScroll);
    };
  }, [activeDot]);

  return (
    <div className={`${styles.Container} ${customClassName}`}>
      <h2>Program <span className={styles.spans}>Summary <hr className={styles.hrline}/></span></h2>
      <div className={styles.contentConteiner} ref={contentContainerRef}>
        {summaryData.map((item, index) => (
          <div key={item.id} className={styles.Box}>
            <div>
              <Image
                src={item.imageSrc}
                width={60}
                height={60}
                loading="lazy"
                alt={item.imageAlt}
              />
              <h4>{item.title}</h4>
            </div>
            <div>
              <p>{item.description}</p>
              {item.extraImageSrc && (
                <Image
                  src={item.extraImageSrc}
                  width={item.extraImageSrcWidth}
                  height={item.extraImageSrcHeight}
                  loading="lazy"
                  alt={item.extraImageAlt}
                  className={styles.ibmLogo}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar with Dots */}
      <div className={styles.customScrollbar}>
        <div className={styles.dotContainer}>
          {summaryData.map((_, index) => (
            <span
              key={index}
              onClick={() => scrollToSection(index)}
              className={`${styles.dot} ${
                activeDot === index ? styles.active : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(PSummaryAD);
