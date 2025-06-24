import React from "react";
import Image from "next/image";
import styles from "./Transpro.module.css";
import Survey from "@/components/Dmd/Survey/Survey";

function Transpro() {
  return (
    <div>
      <div className={styles.transmain}>
        <div className={styles.img}>
          <h2 className={styles.header}>Career Transition Process</h2>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/transition_process.webp"
            width={1200}
            height={720}
            loading="lazy"
          />
        </div>

        <div className={styles.divone}>
          <div className={styles.firstinside}>
            <h4>1. Enrol in our Program</h4>
            <p>
              Supercharge your career by enrolling in our industryrelevant
              program, designed to shape your professional trajectory.
            </p>
          </div>
          <div className={styles.ftwoinside}>
            <h4>5. Unlock Limitless Career Opportunities</h4>
            <p>
              Conquer the tech domain and open the gateway to boundless career
              prospects with 250% salary hike
            </p>
          </div>
        </div>
        <div className={styles.divtwo}>
          <div className={styles.twoinside}>
            <h4>2. Flexible Learning with Hands-On Exposure</h4>
            <p>
              Get immersive experiences for unparalleled learning through
              practical engagement taught by industry experts
            </p>
          </div>
          <div className={styles.stwoinside}>
            <h4>4. Get IBM Course Completion Certificate</h4>
            <p>
              Complete the most sought-after program, get IBM's course
              certificate, and elevate your skills to new heights!
            </p>
          </div>
        </div>

        <div className={styles.divthree}>
          <div className={styles.tinside}>
            <h4>3. Master Key Skills to Excel</h4>
            <p>
              Learn essential skills and industry insights for a remarkable
              career transition that propels you to excellence.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.mbl}>
      <Survey />
      </div>
    </div>
  );
}

export default Transpro;
