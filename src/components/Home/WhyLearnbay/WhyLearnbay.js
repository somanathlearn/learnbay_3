import React from "react";
import styles from "./WhyLearnbay.module.css";
import Image from "next/image";
import { FiTrendingUp } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";

function WhyLearnbay() {
  return (
    <section className={styles.Container}>
      <div className={styles.firstDivSection}>
        <p className={styles.heading}>
          Why choose Learnbay for{" "}
          <span className={styles.contBlue}>Upskilling?</span>
        </p>
        <p className={styles.para}>
          We have upskilled thousands of professionals from various domains to
          land their dream tech job.
        </p>
        <div className={styles.boxDiv}>
          {renderBox(
            "250% Avg.",
            "Salary Hike",
            <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/diagram_2285545+1.svg"
            width={40}
            height={40}
            alt="Learnbay"
            loading="lazy"
            quality={40}
          />
          )}
          {renderBox(
            "Dedicated",
            "Placement Cell",
            <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/hotel-new.svg"
            width={40}
            height={40}
            alt="Learnbay"
            loading="lazy"
            quality={40}
          />
          )}
          {renderBox(
            "Live online",
            "Interactive Session",
            <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cinema-new.png"
            width={40}
            height={40}
            alt="Learnbay"
            loading="lazy"
            quality={40}
          />
          )}
        </div>
      </div>
      <div className={styles.boxSecond}>
        <div className={styles.imgBoy}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/global-boy.webp"
            width={420}
            height={420}
            alt="Learnbay"
            loading="lazy"
            quality={40}
          />
        </div>
        <div className={styles.imgShow}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/globe.webp"
            width={370}
            height={370}
            alt="Learnbay"
            loading="lazy"
            quality={40}
          />
        </div>
      </div>
    </section>
  );
}

function renderBox(orangeText, botPara, icon) {
  return (
    <div className={styles.innerDiv}>
      <div className={styles.imgBox}>
        <div className={styles.iconbox}>{icon}</div>
      </div>
      <div>
        <p className={styles.OrangeText}>{orangeText}</p>
        <p className={styles.botPara}>{botPara}</p>
      </div>
    </div>
  );
}

export default WhyLearnbay;
