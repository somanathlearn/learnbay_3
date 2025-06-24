import React, { useMemo } from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";

function SecondSectionCopy() {
  const sectionData = useMemo(
    () => [
      {
        id: 1,
        src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sec1.webp",
        alt: "data science course",
        text: "1:1 Doubt Session",
      },
      {
        id: 2,
        src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sec2.webp",
        alt: "data science course",
        text: "Guaranteed Interview Calls",
      },
      {
        id: 3,
        src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sec3.webp",
        alt: "data science course",
        text: "IBM Project Certificate",
      },
      {
        id: 4,
        src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sec4.webp",
        alt: "data science course",
        text: "Designed For Professionals",
      },
    ],
    []
  );

  return (
    <div className={styles.boxP}>
      {sectionData.map((item, index) => (
        <div
          key={item.id}
          className={index % 2 === 0 ? styles.boxD : styles.boxE}
        >
          <div className={styles.boxC}>
            <div className={styles.imgBox}>
              <Image
                src={item.src}
                width={35}
                height={35}
                alt={item.alt}
                priority={index === 0} // First image gets priority (above the fold)
                {...(index === 0 ? {} : { loading: "lazy" })} // Lazy load all other images
                quality={40}
              />
            </div>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SecondSectionCopy;
