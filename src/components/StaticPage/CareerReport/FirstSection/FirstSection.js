import React from "react";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import styles from "./FirstSection.module.css";
import Image from "next/image";

function FirstSection() {
  return (
    <>
      <h4 className={styles.FirstH4}>Personalized Career Report</h4>
      <div className={styles.firstSection}>
        <LeftSection />
        <div className="imgWrapper">
          <div className={styles.upLine}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Straight-Line.png"
              width={4}
              height={700}
            />
          </div>
        </div>
        <RightSection />
      </div>
    </>
  );
}

export default FirstSection;
