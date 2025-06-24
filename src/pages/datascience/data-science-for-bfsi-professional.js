import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import { useEffect, useState } from "react";
import BFSIFirstPart from "@/components/CoursePage/FirstPart/BFSIFirstPart";
import BFSISecondPart from "@/components/CoursePage/FirstPart/BFSISecondPart";

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
        <title>Data Science Course for BFSI Professionals - Learnbay</title>
        <meta
          name="description"
          content="Advance your BFSI career with Learnbay’s Data Science Course. Gain AI-driven skills to innovate in banking & finance. Enroll today."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Data Science for BFSI Professional course, Data Science for BFSI Professional certification course, Data Science for BFSI Professional certification, BFSI Professional Program training, hr analytics course, BFSI Professional Program course online, marketing analytics course, BFSI Professional Program certification course, best BFSI Professional Program course, best BFSI Professional Program certification          "
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/data-science-for-bfsi-professional"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Data Science Course for BFSI Professionals - Learnbay"
        />
        <meta
          property="og:description"
          content="Advance your BFSI career with Learnbay’s Data Science Course. Gain AI-driven skills to innovate in banking & finance. Enroll today."
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
          content="https://www.learnbay.co/datascience/data-science-for-bfsi-professional"
        />
        <meta
          name="twitter:title"
          content="Data Science Course with Certifications for BFSI Professionals - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Empower your BFSI career with Learnbay's Data Science course for BSFI professionals. Elevate skills, drive innovation in banking and finance. Enroll now!"
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
          href="https://www.learnbay.co/datascience/data-science-for-bfsi-professional"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "Course",
            "name": "BFSI Professional Program",
            "description": "Upskill yourself with cutting edge Data Science for BFSI Professional Skills and Techniques by enrolling into the Learnbay's BFSI Professional Course.",
            "url": "https://www.learnbay.co/datascience/data-science-for-bfsi-professional",
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
            "coursePrerequisites": "There are no prerequisites for this Data Science for BFSI Professional certification course as all modules are beginner-friendly and are taught from scratch. ",
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
        <BFSIFirstPart
          SecondSectionData={
            DataScienceCourseData.BFSIDataScienceCourseData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.BFSIDataScienceCourseData[0].testimonial
          }
        />
        <BFSISecondPart
          masterSyllabusMobile={
            DataScienceCourseData.BFSIDataScienceCourseData[0]
              .masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.BFSIDataScienceCourseData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.BFSIDataScienceCourseData[0].projectSection
          }
          FAQNewData={DataScienceCourseData.BFSIDataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/BFSIAnalyticsData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
