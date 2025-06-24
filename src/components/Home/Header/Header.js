import React from "react";
import styles from "./Header.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.inner}>
        <div className={styles.heroSection}>
          <div className={styles.overlay}>
            <div className={styles.textContent}>
              <h1 className={styles.heading}>
                Learnbay Reviews: Real Voices, Real Successes to Trusted Career
                Excellence
              </h1>
              <p className={styles.description}>
                Read the genuine reviews of our learners regarding the courses
                offered by Learnbay. Our diverse course completion programs have
                helped professionals worldwide reach their potential and gain
                better career opportunities. Discover the difference we've made
                in their lives by reading their inspirational testimonies.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <img
                src="https://learnbay-s3.s3.us-east-2.amazonaws.com/profile.png"
                alt="Trusted Learners"
                className={styles.statIcon}
              />
              <div className={styles.text}>
                <div className={styles.statNumber}>35K+</div>
                <p className={styles.statText}>Trusted Learners</p>
              </div>
              <img
                src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Line1.webp"
                alt="Career Transitions"
                className={styles.line}
              />
            </div>
            <div className={styles.statCard}>
              <img
                src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/PositiveDynamic.webp"
                alt="Salary Hike"
                className={styles.statIcon}
              />
              <div className={styles.text}>
                <div className={styles.statNumber}>175%</div>
                <p className={styles.statText}>Average Salary Hike</p>
              </div>
              <img
                src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Line1.webp"
                alt="Career Transitions"
                className={styles.line}
              />
            </div>
            <div className={styles.statCard}>
              <img
                src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/JobSeeker.webp"
                alt="Career Transitions"
                className={styles.statIcon}
              />
              <div className={styles.text}>
                <div className={styles.statNumber}>9K+</div>
                <p className={styles.statText}>Successful Career Transitions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
