import React from "react";
import styles from "./StucturedSection.module.css";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

function StucturedSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2>Structured <span className={styles.topHead}>Admission Process</span></h2>
        <div className={styles.innerDiv}>
          <div className={styles.leftSide}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/structured_left_process.webp"
              alt="Zest"
              width="393"
              height="346"
              loading="lazy"
            />
          </div>
          <div>
            <div className={styles.rightSide}>
              <div className={styles.rightContainer}>
                <span className={styles.SpanBlue}>1</span>
                <div>
                  <p className={styles.paraTopBlue}>Fill The Application Form</p>
                  <p className={styles.para}>
                    We follow an application process to carefully curate our
                    learning community.
                  </p>
                </div>
              </div>
              <div className={styles.spanLine}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="44"
                  viewBox="0 0 17 64"
                  fill="none"
                >
                  <rect
                    x="6.47266"
                    y="0.138672"
                    width="3.23951"
                    height="58.3113"
                    rx="1.61976"
                    fill="#0072BC"
                  />
                  <circle
                    cx="8.09097"
                    cy="55.7506"
                    r="8.09879"
                    fill="#0072BC"
                  />
                </svg>
              </div>
              <div className={styles.rightContainer}>
                <span className={styles.SpanBlue}>2</span>
                <div>
                  <p className={styles.paraTopBlue}>Eligibility Test</p>
                  <p className={styles.para}>
                    Successfully complete the eligibility test to confirm your
                    admission
                  </p>
                </div>
              </div>
              <div className={styles.spanLine}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="44"
                  viewBox="0 0 17 64"
                  fill="none"
                >
                  <rect
                    x="6.47266"
                    y="0.138672"
                    width="3.23951"
                    height="58.3113"
                    rx="1.61976"
                    fill="#0072BC"
                  />
                  <circle
                    cx="8.09097"
                    cy="55.7506"
                    r="8.09879"
                    fill="#0072BC"
                  />
                </svg>
              </div>
              <div className={styles.rightContainer}>
                <span className={styles.spanGrey}>3</span>
                <div>
                  <p className={styles.paraTopGrey}>Start Learning</p>
                  <p className={styles.para}>
                    Congratulations, you're in! It's time to embark on your
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StucturedSection;
