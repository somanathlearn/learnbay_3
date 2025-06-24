import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";

import GenAiMLeadersFirstPart from "@/components/CoursePage/FirstPart/GenAiMLeadersFirstPart";
import GenAiMLeadersSecondPart from "@/components/CoursePage/FirstPart/GenAiMLeadersSecondPart";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Gen AI Course for Managers and Leaders - Learnbay</title>
        <meta
          name="description"
          content="Master Advanced Gen AI with Learnbay. Enhance leadership skills and make impactful AI-driven decisions. Enroll now and lead with AI."
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
          href="https://www.learnbay.co/artificial-intelligence/generative-ai-course-for-data-science-professionals"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/artificial-intelligence/generative-ai-course-for-data-science-professionals"
        />
        <meta
          property="og:title"
          content="Gen AI Course for Managers and Leaders - Learnbay"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Master Advanced Gen AI with Learnbay. Enhance leadership skills and make impactful AI-driven decisions. Enroll now and lead with AI."
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
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Course",
            "name": "GenAI Certification For Managers & Tech Leaders",
            "description":
              "Master Advanced Gen AI with Learnbay. Enhance leadership skills and make impactful AI-driven decisions. Enroll now and lead with AI.",
            "url":
              "https://www.learnbay.co/artificial-intelligence/generative-ai-course-for-data-science-professionals",
            "offers": {
              "@type": "Offer",
              "price": 95000,
              "priceCurrency": "INR",
              "category": "Educational"
            },
            "provider": {
              "@type": "Organization",
              "name": "Learnbay",
              "url": "https://www.learnbay.co/"
            },
            "coursePrerequisites":
              "You should have knowledge of Python, Machine Learning, and basic Deep Learning. If you don’t have these skills, you can first complete our foundation program before joining this course.",
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "courseMode": "Online",
                "courseWorkload": "P13W",
                "courseFee": {
                  "@type": "PriceSpecification",
                  "price": 95000,
                  "priceCurrency": "INR"
                }
              }
            ]
          })
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://www.learnbay.co/",
            "sameAs": [
              "https://www.facebook.com/learnbay/",
              "https://twitter.com/Learnbay",
              "https://www.instagram.com/learnbayofficial/",
              "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
              "https://www.linkedin.com/company/learnbay/"
            ],
            "logo":
              "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
            "name": "Learnbay",
            "description":
              "Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!",
            "address": {
              "@type": "PostalAddress",
              "streetAddress":
                "1090, 1st floor, 18th cross road, HSR layout sector 3",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "560102",
              "addressCountry": "IN"
            },
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": 265
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "contacts@learnbay.co",
              "telephone": "(+91) 77956 87988"
            }
          })
        }}
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
        <GenAiMLeadersFirstPart
          summaryData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0]
              .summarySection
          }
          SecondSectionData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0]
              .secondSection
          }
          whyChooseData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0]
              .whyChooseData
          }
        />

        <GenAiMLeadersSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0]
              .masterSyllabusMobile
          }
          toolsData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0].toolsData
          }
          CertificateData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0].Certificate
          }
          certificateNew={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0]
              .certificateNew
          }
          genAiData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0].genAiData
          }
          FAQNewData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0].faq
          }
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/generativeManagersLeaderscourseData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
