import React from "react";
import CareerHome from "../components/StaticPage/CareerPortal/CareerHome/CareerHome";
import Navbar from "../components/Global/Navbar/Navbar";
import Footer from "../components/Global//Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Head from "next/head";

const sumbit = () => {
  return (
    <div>
      <Head>
        <title>Learnbay - Career Portal</title>
        <meta
          name="description"
          content="Learnbay offers a comprehensive job portal with a variety of career opportunities. With us, you can find your ideal job and advance your career."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/career-portal" />
      </Head>
      <Navbar careerForm={true} careerportalbtn={true} />
      <CareerHome />
      <WhatsappFloat />
      <Footer />
    </div>
  );
};

export default sumbit;
