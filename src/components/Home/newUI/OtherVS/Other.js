import React, { useEffect, useRef, useState } from "react";
import styles from "./Other.module.css";
import Image from "next/image";
import { otherData } from "./OtherData";

const Other = () => {
  const headDivRef = useRef(null); // Create a ref for the HeadDiv
  const [activeDot, setActiveDot] = useState(0); // State to track active dot

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint for mobile view

    if (headDivRef.current && isMobile) {
      const containerWidth = headDivRef.current.clientWidth;
      const contentWidth = headDivRef.current.scrollWidth;
      const initialScroll = (contentWidth - containerWidth) / 2; // Centering logic
      headDivRef.current.scrollLeft = initialScroll;
    } else if (headDivRef.current) {
      headDivRef.current.scrollLeft = 0; // Default behavior for larger screens
    }

    const handleScroll = () => {
      if (headDivRef.current) {
        const scrollPosition = headDivRef.current.scrollLeft;
        const maxScroll = headDivRef.current.scrollWidth - headDivRef.current.clientWidth;
        const scrollPercentage = scrollPosition / maxScroll;

        // Update active dot based on scroll position
        if (scrollPercentage < 0.5) {
          setActiveDot(0);
        } else {
          setActiveDot(1);
        }
      }
    };

    headDivRef.current.addEventListener("scroll", handleScroll);

    return () => {
      if (headDivRef.current) {
        headDivRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = (index) => {
    if (headDivRef.current) {
      const containerWidth = headDivRef.current.clientWidth;
      const scrollAmount =
        index === 0
          ? 0
          : headDivRef.current.scrollWidth - containerWidth; // Scroll to end for dot 1
      headDivRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
      setActiveDot(index);
    }
  };

  return (
    <div className={`${styles.mainContainer} width`}>
      <h2 className={styles.h2}>{otherData.title}</h2>

      <div className={styles.HeadDiv} ref={headDivRef}>

        <div className={styles.left}>
          {otherData.leftSide.map((item, index) => (
            <div className={styles.inside} key={index}>
              <p>{item.label}</p>
              {otherData.svgArrow(item.svgWidth, item.svgHeight)}
            </div>
          ))}
        </div>


        <div className={styles.middle}>
          <div className={styles.imgdiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/learnbay_logo_others.webp"
              width={200}
              height={40}
              alt="learnbay"
              loading="lazy"
            />
          </div>

          {otherData.middleSide.map((content, index) => (
            <div key={index}>
              <div className={styles.middleContent}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/sign_mark.webp"
                  width={25}
                  height={25}
                  alt="icon"
                  priority
                  quality={80}
                />
                <p>{content}</p>
              </div>
              {index < otherData.middleSide.length - 1 && <hr />}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          <h4>Others</h4>
          {otherData.rightSide.map((content, index) => (
            <div key={index}>
              <div className={styles.rytInside}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/wrong_icon.webp"
                  width={30}
                  height={30}
                  alt="icon"
                  priority
                  quality={80}
                />
                <p>{content}</p>
              </div>
              {index < otherData.rightSide.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>

      {/* Custom Scrollbar */}
      <div className={styles.customScrollbar}>
        <div className={styles.dotContainer}>
          <span
            onClick={() => scrollToSection(0)}
            className={`${styles.dotOne} ${activeDot === 0 ? styles.active : ""}`}
          />
          <span
            onClick={() => scrollToSection(1)}
            className={`${styles.dot} ${activeDot === 1 ? styles.active : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Other;
