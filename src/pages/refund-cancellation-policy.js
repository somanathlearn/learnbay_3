import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import Footer from "../components/Global//Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Navbar from "../components/Global/Navbar/Navbar";
import Refund from "../components/StaticPage/refund/refund";

function refund() {
  return (
    <div>
      <Head>
        <title>Learnbay - Refund and Cancellations Policies</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learn more about Learnbay's refund policy and cancellation conditions. Your satisfaction is our top priority."
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/refund-cancellation-policy"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <Refund />
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

export default refund;
