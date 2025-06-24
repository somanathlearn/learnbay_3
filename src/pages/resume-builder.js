import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import Footer from "../components/Global//Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Navbar from "../components/Global/Navbar/Navbar";
import FirstSection from "../components/StaticPage/ResumeBuilder/FirstSection/FirstSection";
import ThirdSection from "../components/StaticPage/ResumeBuilder/ThirdSection/ThirdSection";
import styles from "../styles/Home.module.css";

const ResumeBuilder = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online IT Certification Courses and Professional Programs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
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
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        radio={true}
        eventLink={true}
      />
      <FirstSection />
      <ThirdSection idss="4PBfjKsw580" />
      <Footer />
      <WhatsappFloat />
      <BottomBar
        dataScienceCounselling={true}
        interstedInHide={true}
        radio={true}
      />
    </div>
  );
};

export default ResumeBuilder;
