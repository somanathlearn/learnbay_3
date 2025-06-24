import Head from "next/head";
import styles from "../styles/Counseling.module.css";
import { React } from "react";
import Image from "next/image";
import Form from "../components/Global/Form/Form";
import Navbar from "../components/Global/Navbar/Navbar";

function Counselling() {
  return (
    <div>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Learnbay Courses" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <Navbar event={true} eventO={true} />
      <div className={styles.formq}>
        <div className={styles.forml}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/popup-back+3.png"
            width="400"
            height="500"
            alt="LearnsupportImg"
          />
        </div>

        <div className={styles.formr}>
          <Form referrals={true} workExperience={true} />
        </div>
      </div>
    </div>
  );
}

export default Counselling;
