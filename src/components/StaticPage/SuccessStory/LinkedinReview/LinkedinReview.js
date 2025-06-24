import React, { useState } from "react";
import styles from "./LinkedinReview.module.css";
const imageSources = [
  "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/linked-in-1.webp",
  "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/linked-in-6.webp",
  "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/linked-in-3.webp",
  "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/linked-in-4.webp",
  "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/linked-in-5.webp",
  "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/linked-in-2.webp",
];
function LinkedinReview() {
  const [showMobileImages, setShowMobileImages] = useState(false);
  const toggleMobileImages = () => {
    setShowMobileImages(!showMobileImages);
  };
  return (
    <div className={styles.LinkedinReviewMain}>
      <h2>Linkedin Reviews</h2>
      <div className={styles.LinkedinReviewBoxHead}>
        {imageSources
          .slice(0, showMobileImages ? imageSources.length : 3)
          .map((imageSource, index) => (
            <div className={styles.LinkedinReviewBox} key={index}>
              <img src={imageSource} alt={`Image ${index}`} />
            </div>
          ))}
      </div>
      {imageSources.length > 3 && (
        <button className={styles.btn} onClick={toggleMobileImages}>
          {showMobileImages ? "View Less" : "View More"}
        </button>
      )}
    </div>
  );
}
export default LinkedinReview;
