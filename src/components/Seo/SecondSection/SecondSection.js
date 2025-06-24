import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";

function SecondSection({ SecondSectionData }) {
  return (
    <div className={styles.boxP}>
      <div className={styles.boxD}>
        <div className={styles.boxC}>
          <div className={styles.imgBox}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sec1.webp"
              width="35"
              height="35"
           loading="lazy"
              alt="data science course"
            />
          </div>{" "}
          <p>1:1 Doubt Session</p>
        </div>
      </div>
      <div className={styles.boxE}>
        <div className={styles.boxC}>
          <div className={styles.imgBox}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sec2.webp"
              width="35"
              height="35"
           loading="lazy"
              alt="data science course"
            />
          </div>{" "}
          <p>Guaranteed Interview Calls</p>
        </div>
      </div>
      <div className={styles.boxE}>
        <div className={styles.boxC}>
          <div className={styles.imgBox}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sec3.webp"
              width="35"
              height="35"
           loading="lazy"
              alt="data science course"
            />
          </div>{" "}
          <p>IBM Project Certificate</p>
        </div>
      </div>
      <div className={styles.boxD}>
        <div className={styles.boxC}>
          <div className={styles.imgBox}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sec4.webp"
              width="35"
              height="35"
           loading="lazy"
              alt="data science course"
            />
          </div>{" "}
          <p>Designed For Professionals</p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
