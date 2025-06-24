import styles from "./HomeLine.module.css";
import React from "react";
import Image from "next/image";

const HomeLine = () => {
  return (
    <div className={styles.feature}>
      <p>
        Learn from <span>Top 1% Tech Mentors</span>
      </p>
      <div className={styles.container}>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/homeline.webp"
            width="1200"
            height="60"
            loading="lazy"
            quality={40}
            alt="data science course"
          />
        </div>
      </div>

      <div className={styles.containerMobile}>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/MobileSecond.webp"
            width="450"
            height="152"
            loading="lazy"
            quality={40}
            alt="data science course"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomeLine);
