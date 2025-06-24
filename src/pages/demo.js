import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import Footer from "../components/Global//Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Navbar from "../components/Global/Navbar/Navbar";
import Demo from "../components/StaticPage/Demo/Demo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learnbay - Demo Sessions and Class Recordings</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Explore Learnbay's demo sessions and class recordings. Experience interactive learning with expert instructors. Enroll today for a hands-on educational journey."
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/demo" />
      </Head>
      <main>
        {" "}
        <Navbar
          popup={true}
          dataScienceCounselling={true}
          interstedInHide={true}
          radio={true}
        />
        <Demo demos={true} />
        <Footer />
        <WhatsappFloat />
        <BottomBar
          dataScienceGeneric={true}
          interstedInHide={true}
          radio={true}
        />
      </main>
    </div>
  );
}
