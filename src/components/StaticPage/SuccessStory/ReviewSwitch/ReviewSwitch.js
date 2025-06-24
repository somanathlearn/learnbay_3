import React from "react";
import Styles from "./ReviewSwitch.module.css";
import Image from "next/image";
function ReviewSwitch() {
  return (
    <section className={Styles.container}>
      <h4>Switchup Reviews</h4>
      <div className={Styles.BoxDiv}>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Switch-review-1png-min.webp"
            width={562}
            height={538}
            alt="Image showcasing Switchup review of Learnbay's student for Data Science & AI course"
          />
        </div>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Switch-review-2-min.webp"
            width={562}
            height={538}
            alt="Image showcasing Switchup review of Learnbay's student for Data Science & AI certification"
          />
        </div>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Switch-review-3-min.webp"
            width={562}
            height={538}
            alt="Image showcasing Switchup review of Learnbay's student for Data Science course"
          />
        </div>
      </div>
    </section>
  );
}
export default ReviewSwitch;
