import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import Footer from "../components/Global//Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Navbar from "../components/Global/Navbar/Navbar";
import FirstSection from "../components/StaticPage/CareerReport/FirstSection/FirstSection";
import SecondSection from "../components/StaticPage/CareerReport/SecondSection/SecondSection";
import ThirdSection from "../components/StaticPage/CareerReport/ThirdSection/ThirdSection";
import styles from "../styles/Home.module.css";

function careerReport() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learning Learnbay</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="data science courses with IBM certification. Learnbay is advanced data science course training institute. Enrol in our data science course to enhance your career"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/career-report"
        />
        <meta
          name="keywords"
          content="data science course, data science training , data science institute in India, best data science institute, data scientist course ,data scientist certification, data science training institute , advanced data science course , data science course with Placement Assistance, data science course with IBM certification"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <Navbar popup={true} dataScienceCounselling={true} radio={true} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />

      <BottomBar
        dataScienceCounselling={true}
        interstedInHide={true}
        radio={true}
      />
      <WhatsappFloat />
      <Footer />
    </div>
  );
}

export default careerReport;
