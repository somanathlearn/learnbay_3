import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "../components/Global/Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Navbar from "../components/Global/Navbar/Navbar";
import Review from "../components/StaticPage/Review/Review";
import styles from "../styles/Home.module.css";

const Button = dynamic(() => import("../components/Global/Button/Button"));

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Learnbay - Testimonials and Reviews of Our Trusted Learners
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay - The best online professional learning platform, has received numerous positive student reviews. Gain knowledge and make sound decisions. Join today!"
        />
        <link rel="canonical" href="https://www.learnbay.co/reviews" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <Review viewmore={false} />
        <div
          className={styles.Button}
          style={{
            marginBottom: "70px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href=" https://www.google.com/search?q=learnbay&rlz=1C1VDKB_enIN998IN998&tbm=lcl&ei=uUDyYunBIoObz7sPzvu7wAQ&oq=learnbay&gs_l=psy-ab.3...0.0.0.6647.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.vlnVRtRM_mw#lrd=0x3bae13b203864921:0xcd2b3d47edc34b69,1,,,&rlfi=hd:;si:14783977580914756457,l,CghsZWFybmJheUj0z4qEu66AgAhaFBAAGAAiCGxlYXJuYmF5KgQIAhAAkgEbc29mdHdhcmVfdHJhaW5pbmdfaW5zdGl0dXRl;mv:[[12.9145896,77.66070289999999],[12.8624165,77.6400574]]"
            target="_blank"
          >
            <Button className={styles.Btn} text="View All Reviews" />
          </a>
        </div>
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
