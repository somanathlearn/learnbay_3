import React from "react";
import Styles from "./ReviewCourse.module.css";
import Image from "next/image";
function ReviewCourse() {
  return (
    <section className={Styles.container}>
      <h4>Course Report Reviews</h4>
      <div className={Styles.BoxDiv}>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/course-report-1-min.webp"
            width={798}
            height={542}
            alt="Image showcasing course report review of Learnbay's student for DSA course"
          />
        </div>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/course-report-2-min.webp"
            width={798}
            height={542}
            alt="Image showcasing course report review of Learnbay's student for Data Science & AI course"
          />
        </div>
      </div>
    </section>
  );
}
export default ReviewCourse;
