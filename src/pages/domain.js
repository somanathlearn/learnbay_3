import { ThirdSectionData } from "@/Data/ThirdSectionData";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import WhoProgram from "../components/CoursePage/WhoProgram/ThirdSection";
import Footer from "../components/Global//Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Navbar from "../components/Global/Navbar/Navbar";

const sumbit = () => {
  return (
    <div>
      <Head>
        <title>Learnbay - Domain Info</title>
        <meta
          name="description"
          content="Choose Your our Domain information to LearnBay to unlock a world of learning opportunities. Join our platform today and start your path to success."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/domain" />
      </Head>
      <Navbar popup={true} radio={true} />
      <WhoProgram
        dataScience={true}
        leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
        ThirdSectionData={ThirdSectionData}
      />
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
