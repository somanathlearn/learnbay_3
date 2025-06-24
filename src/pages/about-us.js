import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import Footer from "../components/Global//Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Navbar from "../components/Global/Navbar/Navbar";
import AboutUs from "../components/StaticPage/AboutUs/AboutUs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learnbay - About Us</title>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.learnbay.co/about-us" />
        <meta
          name="description"
          content="Learn about the members of Learnbay's core team, their vision and mission. Learn how it is assisting graduates and working professionals in achieving their career goals."
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        <Navbar radio={true} interstedInHide={true} />
        <AboutUs />
        <Footer />
        <WhatsappFloat />
        <BottomBar
          dataScienceCounselling={true}
          interstedInHide={true}
          radio={true}
        />
      </main>
    </div>
  );
}
