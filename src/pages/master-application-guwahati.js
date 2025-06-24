import React from "react";
import MasterApplicationForm from "../components/StaticPage/masterApplicationForm/MasterApplicationForm";
import Head from "next/head";

const masterApplication = () => {
  return(
    <>
     <Head>
        <title>
        Master - Application Guwahati Form
        </title>
        <meta
          name="description"
          content=" Submit your information to LearnBay to unlock a world of learning opportunities. Join our platform today and start your path to success."
        />
        <meta
          name="keywords"
          content="Data Science Course, Best data Science Course Training,   Data Science, Master Course Application "
        />
                <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.learnbay.co/master-application-guwahati"
    
        />
      </Head>
     <MasterApplicationForm title="Application Form" />;
</>
)
};

export default masterApplication;
