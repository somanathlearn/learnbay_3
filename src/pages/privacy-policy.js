import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import Footer from "../components/Global//Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Navbar from "../components/Global/Navbar/Navbar";
import Privacy from "../components/StaticPage/privacy/privacy";

function privacy() {
  return (
    <div>
      <Head>
        <title>Learnbay - Privacy Policies</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learn about Learnbay's privacy policies, which ensure the security of your personal information."
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/privacy-policy" />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <Privacy />
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

export default privacy;
