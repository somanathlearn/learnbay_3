import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";

import GenAiMLeadersFirstPartIBM from "@/components/CoursePage/FirstPart/GenAiMLeadersFirstPartIBM";
import GenAiMLeadersSecondPartIBM from "@/components/CoursePage/FirstPart/GenAiMLeadersSecondPartIBM";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>
          Advance Gen AI Course For Managers & Tech Leaders - Learnbay
        </title>
        <meta
          name="description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="generative ai for managers, gen ai for managers, generative ai course for managers, gen ai course for managers"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/generative-ai-course-for-manager"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/generative-ai-course-for-manager"
        />
        <meta
          property="og:title"
          content="Advance Gen AI Course For Managers & Tech Leaders - Learnbay"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Advance Gen AI Course For Managers & Tech Leaders - Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
        />
        <meta
          name="twitter:description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />

        {/* <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "Data Structures Algorithms and System Design Course",
      "description": "Elevate your tech skills through our Data Structures Algorithms and System Design Course and switch from service-based to product-based companies. Earn globally recognized IBM and Microsoft Certifications.",
      "url": "https://www.learnbay.co/fullstack/dsa-system-design",
      "offers": {
        "@type": "Offer",
        "price": 115000,
        "priceCurrency": "INR",
        "category": "Educational"
      },
      "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "url": "https://www.learnbay.co/"
      },
      "coursePrerequisites": "Nothing but basic coding knowledge is required to start with this course.",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "P10W",
          "courseFee": {
            "@type": "PriceSpecification",
            "price": "₹ 1,15,000 + 18% GST",
            "priceCurrency": "INR"
          }
        }
      ]
    }`
  }}
/> */}
      </Head>
      <main>
        <GenAiMLeadersFirstPartIBM
          summaryData={
            DataScienceCourseData.GENAIManagersLeadersCourseDataIBM[0]
              .summarySection
          }
          SecondSectionData={
            DataScienceCourseData.GENAIManagersLeadersCourseDataIBM[0]
              .secondSection
          }
          whyChooseData={
            DataScienceCourseData.GENAIManagersLeadersCourseDataIBM[0]
              .whyChooseData
          }
        />

        <GenAiMLeadersSecondPartIBM
          masterSyllabusMobile={
            DataScienceCourseData.GENAIManagersLeadersCourseDataIBM[0]
              .masterSyllabusMobile
          }
          toolsData={
            DataScienceCourseData.GENAIManagersLeadersCourseDataIBM[0].toolsData
          }
          CertificateData={
            DataScienceCourseData.GENAIManagersLeadersCourseDataIBM[0].Certificate
          }
          certificateNew={
            DataScienceCourseData.GENAIManagersLeadersCourseDataIBM[0]
              .certificateNew
          }
          genAiData={
            DataScienceCourseData.GENAIManagersLeadersCourseDataIBM[0].genAiData
          }
          FAQNewData={
            DataScienceCourseData.GENAIManagersLeadersCourseDataIBM[0].faq
          }
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/generativeManagersLeaderscourseDataIBM");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
