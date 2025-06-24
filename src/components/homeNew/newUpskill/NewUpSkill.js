import React, { useRef, useState, useEffect } from "react";
import styles from "./NewUpskill.module.css";
import Image from "next/image";

const NewUpSkill = () => {
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  // Scroll listener for mobile slider
  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const onScroll = () => {
      const cardWidth = containerEl.firstChild?.offsetWidth || 1;
      const gap = parseFloat(getComputedStyle(containerEl).gap || 16);
      const index = Math.round(containerEl.scrollLeft / (cardWidth + gap));
      setActiveSlide(index);
    };

    if (window.innerWidth <= 768) {
      containerEl.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => containerEl.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to slide on dot click
  const scrollToSlide = (index) => {
    const containerEl = containerRef.current;
    if (!containerEl) return;
    const cardWidth = containerEl.firstChild?.offsetWidth || 1;
    const gap = parseFloat(getComputedStyle(containerEl).gap || 16);
    containerEl.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.NewUpSkill}>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.bluebox}>
            <p>OUR PROVEN UPSKILLING SYSTEM</p>
          </div>
          <h2>
            What's the smartest way for{" "}
            <span className={styles.color}>professionals to upskill</span> today
          </h2>
          <p className={styles.desc}>
            Choose our platform for real-world, project-based programs designed
            to help working professionals build career-ready skills with expert
            guidance.
          </p>
        </div>

        <div className={styles.boxContianr} ref={containerRef}>
          <div className={styles.box}>
            <div className={styles.imgDiv}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/icon_purss.webp"
                width={60}
                height={56}
                loading="lazy"
              />
            </div>
            <h4>1-on-1 Mentorship</h4>
            <p>Get personalized guidance from experienced tech professionals</p>
          </div>
          <div className={styles.box}>
            <div className={styles.imgDiv}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/green-stars.webp"
                width={60}
                height={56}
                loading="lazy"
              />
            </div>
            <h4>Industry Recognition</h4>
            <p>Earn credentials recognized by top employers</p>
          </div>
          <div className={styles.box}>
            <div className={styles.imgDiv}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/orange-whs.webp"
                width={60}
                height={56}
                loading="lazy"
              />
            </div>
            <h4>Real Projects</h4>
            <p>Practice what you learn with real-world scenarios</p>
          </div>
        </div>

        {/* Dots for mobile slider */}
        <div className={styles.dotsWrapper}>
          {[0, 1, 2].map((idx) => (
            <span
              key={idx}
              className={`${styles.dot} ${
                idx === activeSlide ? styles.dotActive : ""
              }`}
              onClick={() => scrollToSlide(idx)}
            />
          ))}
        </div>

        <div className={styles.bottmcontainer}>
          <div className={styles.bottmBox}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/green-group+(1).webp"
              width={60}
              height={60}
              loading="lazy"
              alt=""
            />
            <p>1,250+</p>
            <span>Industry Experts</span>
          </div>
          <div className={styles.bottmBox}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/red-cap+(1).webp"
              width={60}
              height={60}
              loading="lazy"
              alt=""
            />
            <p>400+</p>
            <span>Comprehensive Courses</span>
          </div>
          <div className={styles.bottmBox}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/new-blue+(1).webp"
              width={60}
              height={60}
              loading="lazy"
              alt=""
            />
            <p>100+</p>
            <span>Countries & Counting</span>
          </div>
          <div className={styles.bottmBox}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/grow-org+(1).webp"
              width={60}
              height={60}
              loading="lazy"
              alt=""
            />
            <p>300+</p>
            <span>Career Transformations</span>
          </div>
        </div>

        <div className={styles.mainbtn}>
          <div className={styles.btnDiv}>
            <button>Apply for Counselling</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="25"
              viewBox="0 0 33 25"
              fill="none"
            >
              <path
                d="M2.11475 10.8179C1.19278 10.8179 0.445375 11.5653 0.445375 12.4873C0.445375 13.4093 1.19278 14.1567 2.11475 14.1567L2.11475 10.8179ZM31.9382 13.6677C32.5901 13.0158 32.5901 11.9588 31.9382 11.3069L21.3144 0.683069C20.6625 0.0311397 19.6055 0.0311398 18.9535 0.68307C18.3016 1.335 18.3016 2.39199 18.9535 3.04392L28.3969 12.4873L18.9535 21.9307C18.3016 22.5826 18.3016 23.6396 18.9535 24.2915C19.6055 24.9435 20.6625 24.9435 21.3144 24.2915L31.9382 13.6677ZM2.11475 12.4873L2.11475 14.1567L30.7578 14.1567L30.7578 12.4873L30.7578 10.8179L2.11475 10.8179L2.11475 12.4873Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUpSkill;
