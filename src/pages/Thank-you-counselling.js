import { useEffect, useState } from "react";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Footer from "../components/Global/Footer/Footer";
import Navbar from "../components/Global/Navbar/Navbar";
import FirstHeader from "../components/StaticPage/Thankyou/FirstHeader/FirstHeader";
import Survey from "../components/StaticPage/Thankyou/Survey/Survey";
import ThankStats from "../components/StaticPage/Thankyou/ThankStat/ThankStats";
import Head from "next/head";
import cookies from "next-cookies";
const setCookie = (name, value, days, domain) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;domain=${domain}`;
};

const ThankYouDemo = ({ initialName, initialPhone }) => {
  const email = JSON.stringify(initialName);
  const phone = JSON.stringify(initialPhone);
  console.log(email); // Log the email to the console

  useEffect(() => {
    // Set the cookie with a domain that allows cross-origin access
    setCookie("yourCookieName", initialName, 30, ".learnbay.co");
    setCookie("yourCookieName", initialPhone, 30, ".learnbay.co");
  }, [initialName, initialPhone]);

  return (
    <div>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  'event': 'form_complete',
                  'enhanced_conversion_data': {
                    "email": ${email},
                    "phone": ${phone},
                  }
                });
              `,
          }}
        />
      </Head>
      <Navbar radio={true} />
      <FirstHeader />
      <ThankStats
        img1="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/GIF.gif"
        heading="Gain Clarity: Explore the possibilities and chart your Career Journey"
        head1="Explore Career Options:"
        head2="Embrace Opportunities:"
        head5="Personalized Goal:"
        head6="Strategize for Success:"
        para5="Bridge the gap between aspirations and expertise."
        para6="Overcome obstacles and maximize your potential."
        para1="Find your ideal path based on skills, interests, and goals."
        para2="Discover growth potential in emerging industries."
      />
      <Survey
        header="Are you seeking the perfect course that will propel your career to new heights?"
        para="Unleash your full potential with our personalized and tailored course suggestions that will guide you towards your ideal learning journey."
      />
      <BottomBar
        dataScienceCounselling={true}
        interstedInHide={true}
        radio={true}
      />
      <Footer />
      <WhatsappFloat />
      <BottomBar />
    </div>
  );
};

ThankYouDemo.getInitialProps = async (ctx) => {
  return {
    initialName: cookies(ctx).CARD || "",
    initialPhone: cookies(ctx).CARDPHONE || "",
  };
};

export default ThankYouDemo;
