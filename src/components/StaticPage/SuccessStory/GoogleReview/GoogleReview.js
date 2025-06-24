import React from "react";
import Styles from "./GoogleReview.module.css";
import Image from "next/image";
function GoogleReview() {
  return (
    <section className={Styles.container}>
      <h4>Google Reviews</h4>
      <div className={Styles.BoxDiv}>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Google-review-1-min.webp"
            width={548}
            height={364}
            style={{ height: "fit-content" }}
            alt="Image showcasing google review of Learnbay's student for data science course"
          />
        </div>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Google-review-2-min.webp"
            width={548}
            height={268}
            style={{ height: "fit-content" }}
            alt="Image showcasing google review of Learnbay's student for Fullstack development Course"
          />
        </div>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Google-review-3-min.webp"
            width={548}
            height={258}
            style={{ height: "fit-content" }}
            alt="Image showcasing google review of Learnbay's student for data science certification"
          />
        </div>
      </div>
    </section>
  );
}
export default GoogleReview;
