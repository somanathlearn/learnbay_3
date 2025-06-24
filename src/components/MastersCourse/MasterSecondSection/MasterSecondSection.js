import React from "react";
import styles from "./MasterSecondSection.module.css";
import Image from "next/image";

const MasterSecondSection = ({ data }) => {
  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.firstbox}>
          {data.map((item, index) => (
            <div className={styles.box} key={index}>
              <p className={styles.BoldP}>{item.boldText} <span style={{ color: "#ff8403" }}>{item.CboldText}</span>
</p>
        
              <p className={styles.NormalP}>{item.normalText}</p>
              <div className={styles.radial}></div>
            </div>
          ))}
        </div>
        <div className={styles.secondbox}>
          {data.map((item, index) => (
            <div className={styles.imgBox} key={index}>
              {item.imageUrl && (
                <Image
                  src={item.imageUrl}
                  width={280}
                  height={130}
                  priority
                  alt={`review-${index}`}
                />
              )}
            </div>
          ))}

          {/* For the third item, which doesn't have an imageUrl */}
          {data[2] && (
            <div className={`${styles.imgWrapper} ${styles.imgMobile}`}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review-mobile.webp"
                width={180}
                height={180}
                priority
                alt="review mobile"
                style={{width:"100%"}}
              />
            </div>
          )}
        </div>
      </div>
      </>
  );
};

export default MasterSecondSection;
