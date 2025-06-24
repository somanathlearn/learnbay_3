import React from "react";
import styles from "./jobReadySection.module.css";
import Image from "next/image";

function jobReadySection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2 className={styles.headH4}>
          <span className={styles.grey}>Achieve Your Career Goals with Our </span> 
          <span className={styles.orange}>Placement Support</span>
        </h2>
        <div className={styles.innerdiv}>
          <div className={styles.innerbox}>
            <h4>Placement Support</h4>
            <p>
              Unlock exclusive access to a wide range of job opportunities, with
              personalized support to enhance your interview readiness and
              optimize your professional profile.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/placement_support_icon.webp"
              alt="Zest"
              width="393"
              height="346"
              loading="lazy"
              className={styles.img1}
            />
          </div>
          <div className={styles.innerbox}>
            <h4>Mock Interviews</h4>
            <p>
              Sharpen your interview skills with tailored mock sessions that
              simulate real-world scenarios, giving you the confidence and
              experience to excel in actual job interviews.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/mock_icon.webp"
              alt="Zest"
              width="393"
              height="323"
              loading="lazy"
              className={styles.img2}
            />
          </div>
          <div className={styles.innerbox}>
            <h4>Resume BuildUp</h4>
            <p>
              Craft a compelling resume with expert guidance, ensuring your
              profile stands out in a competitive job market and highlights your
              key strengths and achievements.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/resume_icon.webp"
              alt="Zest"
              width="393"
              height="346"
              loading="lazy"
              className={styles.img1}
            />
          </div>
          <div className={styles.innerbox}>
            <h4>Ultimate Interview calls</h4>
            <p>
              Maximise your chances of landing the perfect job with unlimited
              interview opportunities, backed by continuous support and feedback
              to refine your approach.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/calls_icon.webp"
              alt="Zest"
              width="393"
              height="346"
              loading="lazy"
              className={styles.img2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default jobReadySection;
