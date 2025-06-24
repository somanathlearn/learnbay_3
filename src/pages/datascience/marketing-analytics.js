import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import { useEffect, useState } from "react";
import MarketingFirstPart from "@/components/CoursePage/FirstPart/MarketingFirstPart";
import MarketingSecondPart from "@/components/CoursePage/FirstPart/MarketingSecondPart";

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
          data.page.includes("Business Analytics Program")
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
        <title>Best Marketing Analytics Certification Course | Learnbay</title>
        <meta
          name="description"
          content="Elevate your business acumen with our comprehensive Marketing Analytics Program. Gain valuable insights, enhance decision-making, and drive success through advanced analytics tools and strategies. Enroll today for a data-driven future."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Marketing Analytics course, Marketing Analytics certification course, Marketing Analytics certification, Marketing Analytics training, Marketing Analytics course online, marketing analytics course, Marketing Analytics certification course, best Marketing Analytics course, best Marketing Analytics certification          "
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/marketing-analytics"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Marketing Analytics Certification Course | Learnbay"
        />
        <meta
          property="og:description"
          content="Elevate your business acumen with our comprehensive Marketing Analytics Program. Gain valuable insights, enhance decision-making, and drive success through advanced analytics tools and strategies. Enroll today for a data-driven future."
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
          content="https://www.learnbay.co/datascience/marketing-analytics"
        />
        <meta
          name="twitter:title"
          content="Best Marketing Analytics Certification Course | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Elevate your business acumen with our comprehensive Marketing Analytics Program. Gain valuable insights, enhance decision-making, and drive success through advanced analytics tools and strategies. Enroll today for a data-driven future."
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
          href="https://www.learnbay.co/datascience/marketing-analytics"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "Course",
            "name": "Marketing Analytics Certification Program",
            "description": "Upskill yourself with cutting edge Marketing Analytics Skills and Techniques by enrolling into the Learnbay's Business Analaytics certification Course.",
            "url": "https://www.learnbay.co/datascience/marketing-analytics",
            "offers": {
              "@type": "Offer",
              "price": 90000,
              "priceCurrency": "INR",
              "category": "Educational"
            },
             "provider": {
                  "@type": "Organization",
                  "name": "Learnbay",
                  "Url": "https://www.learnbay.co/"
                },
            "coursePrerequisites": "There are no prerequisites for this Marketing Analytics certification course as all modules are beginner-friendly and are taught from scratch. ",
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "courseMode": "Online",
                "courseWorkload": "P10W",
                "courseFee": {
                  "@type": "PriceSpecification",
                  "price": "₹ 90,000 + 18% GST",
                  "priceCurrency": "INR"
                }
              }
            ]



          }`,
          }}
        />
      </Head>
      <main>
        <MarketingFirstPart
          SecondSectionData={
            DataScienceCourseData.MarketingDataScienceCourseData[0]
              .secondSection
          }
          TestimonialData={
            DataScienceCourseData.MarketingDataScienceCourseData[0].testimonial
          }
        />
        <MarketingSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.MarketingDataScienceCourseData[0]
              .masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.MarketingDataScienceCourseData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.MarketingDataScienceCourseData[0]
              .projectSection
          }
          FAQNewData={
            DataScienceCourseData.MarketingDataScienceCourseData[0].faq
          }
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/MarketingAnalyticsData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
