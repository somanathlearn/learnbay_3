import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Footer from "../components/Global/Footer/Footer";
import Navbar from "../components/Global/Navbar/Navbar";
import Terms from "../components/StaticPage/terms/terms";

function terms() {
  return (
    <div>
      <Head>
        <title>Learnbay - Terms and Conditions</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay's terms and conditions are clear and concise for your peace of mind. Explore more information for a smooth learning experience. Come join us today!"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/terms-conditions" />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <Terms />

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

export default terms;
