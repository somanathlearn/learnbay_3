import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import Image from "next/image";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Footer from "../components/Global/Footer/Footer";
import Form from "../components/Global/Form/Form";
import Navbar from "../components/Global/Navbar/Navbar";
import styles from "../styles/Submit.module.css";

const sumbit = () => {
  return (
    <div>
      <Head>
        <title>Learnbay - Counselling Form - Apply</title>
        <meta
          name="description"
          content="Submit your information to LearnBay to unlock a world of learning opportunities. Join our platform today and start your path to success."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/submit-info" />
      </Head>
      <Navbar popup={true} radio={true} />
      <div className={styles.Wrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.left}>
            <h6>Apply For Counselling</h6>
            <Form
              dataScienceCounselling={true}
              radio={true}
              interstedInHide={true}
            />
          </div>
          <div className={styles.right}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/info-right-img.webp"
              width="600"
              height="606"
            />
          </div>
          <div className={styles.rightM}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/submit-right-m.webp"
              width="600"
              height="606"
            />
          </div>
        </div>
      </div>
      <BottomBar
        dataScienceCounselling={true}
        interstedInHide={true}
        radio={true}
      />
      <Footer />
      <WhatsappFloat />
    </div>
  );
};

export default sumbit;
