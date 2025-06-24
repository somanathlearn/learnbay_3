import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";

function SecondSection({ SecondSectionData }) {
  const featureData = [
    {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sec1.webp",
      alt: "data science course",
      text: "1-on-1 Doubt Session",
    },
    {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Mask+group+(5).png",
      alt: "data science course",
      text: "Guaranteed Interview Calls",
    },
    {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sec3.webp",
      alt: "data science course",
      text: "IBM Project Certificate",
    },
    {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sec4.webp",
      alt: "data science course",
      text: "Designed For Professionals  ",
    },
  ];

  return (
    <div className={styles.boxP}>
      {featureData.map((feature, index) => (
        <div className={styles.boxC} key={index}>
          <div className={styles.imgBox}>
            <Image
              src={feature.src}
              width="35"
              height="35"
              loading="lazy"
              alt={feature.alt}
            />
          </div>
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
  );
}

export default SecondSection;
