import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import { useEffect, useState } from "react";
import AISecondPart from "@/components/CoursePage/FirstPart/AISecondPart";
import AIFirstPart from "@/components/CoursePage/FirstPart/AIFirstPart";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  const [popupData, setPopupData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popupResponse = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (popupResponse.status === 200) {
        const { popData } = await popupResponse.json();
        const foundPopup = popData.find((data) =>
          data.page.includes("Adv Data Science and AI")
        );
        if (foundPopup) {
          setPopupData(foundPopup);
        }
      }
    };

    fetchData();
  }, []);

  // const [batchDateData, setBatchDateData] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Fetch Popup Data
  //     const popupResponse = await fetch("/api/Popup/popupGenerate", {
  //       method: "GET",
  //     });
  //     if (popupResponse.status === 200) {
  //       const { popData } = await popupResponse.json();
  //       const foundPopup = popData.find((data) =>
  //         data.page.includes("Adv Data Science and AI")
  //       );
  //       if (foundPopup) {
  //         setPopupData(foundPopup);
  //       }
  //     }

  //     // Fetch Batch Data
  //     const batchResponse = await fetch("/api/BatchDetails/getBatchDetails", {
  //       method: "POST",
  //       body: JSON.stringify("Data Science and AI"),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (batchResponse.status === 200) {
  //       const { batchDate } = await batchResponse.json();
  //       setBatchDateData(batchDate);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>Master AI & ML Course Training - Learnbay</title>
        <meta
          name="description"
          content="Master AI & ML with Learnbay’s Advanced Certification. Gain hands-on expertise in AI and machine learning. Elevate your career today."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="ai and ml course, machine learning course, ai ml courses, artificial intelligence online course, aiml course, artificial intelligence and machine learning course, ai certificate course, ai ml courses online, best ai ml courses          "
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/artificial-intelligence-certification-course"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Master AI & ML Course Training - Learnbay"
        />
        <meta
          property="og:description"
          content="Master AI & ML with Learnbay’s Advanced Certification. Gain hands-on expertise in AI and machine learning. Elevate your career today."
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="learnbay.co" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          property="twitter:url"
          content="https://www.learnbay.co/datascience/artificial-intelligence-certification-course"
        />
        <meta
          name="twitter:title"
          content="Master AI & ML with Learnbay's Advanced Certification Program - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Unlock the future with Learnbay's Advanced AI & ML Certification Program. Gain expertise in artificial intelligence and machine learning through our comprehensive and hands-on training. Elevate your career today!"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/artificial-intelligence-certification-course"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "http://schema.org",
              "@type": "Course",
              "name": "Advance Artificial Intelligence and ML Program",
              "description": "Enroll in our AI and ML Course. It provides you with a wide knowledge of AI and ML tools and techniques and helps you land your dream job.",
              "url": "https://www.learnbay.co/datascience/artificial-intelligence-certification-course",
              "offers": {
               "@type": "offer",
                "price": "110000",
                "pricecurrency": "INR",
                "category": "Educational"
              },
               "provider": {
                    "@type": "Organization",
                    "name": "Learnbay",
                    "Url": "https://www.learnbay.co/"
                  },
              "coursePrerequisites": "Basic programming & mathematics knowledge is enough. For strengthening your programming skills we provide special programming classes. We teach required statistics from a very basic.",
              "hasCourseInstance": [
                {
                  "@type": "CourseInstance",
                  "courseMode": "Online",
                  "courseWorkload": "P10W",
                  "courseFee": {
                    "@type": "PriceSpecification",
                    "price": "₹ 1,10,000 + 18% GST",
                    "priceCurrency": "INR"
                  }
                }
              ]
    }`,
          }}
        />
      </Head>
      <main>
        <AIFirstPart
          SecondSectionData={
            DataScienceCourseData.AIMLDataScienceCourseData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.AIMLDataScienceCourseData[0].testimonial
          }
        />
        <AISecondPart
          masterSyllabusMobile={
            DataScienceCourseData.AIMLDataScienceCourseData[0]
              .masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.AIMLDataScienceCourseData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.AIMLDataScienceCourseData[0].projectSection
          }
          FAQNewData={DataScienceCourseData.AIMLDataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/AIMLDataScienceCourse");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
