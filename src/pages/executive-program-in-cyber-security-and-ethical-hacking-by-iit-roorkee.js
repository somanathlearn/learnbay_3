import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";

import IITCyberFirstPart from "@/components/CoursePage/FirstPart/IITCyberFirstPart";
import IITCyberSecondPart from "@/components/CoursePage/FirstPart/IITCyberSecondPart";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>
          Best Cyber Security & Ethical Hacking Course | IITR Certification
        </title>
        <meta
          name="description"
          content="Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats."
        />

        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="cyber security and ethical hacking course, cyber security and ethical hacking, cyber hacking course, cyber security ethical hacking course, cyber security and hacking courses, cyber security ethical hacking certification"
        />

        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee"
        />
        <meta
          property="og:title"
          content="Best Cyber Security & Ethical Hacking Course | IITR Certification"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats."
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
          content="Best Cyber Security & Ethical Hacking Course | IITR Certification"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats."
        />
        <meta
          name="twitter:description"
          content="Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats."
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
        <IITCyberFirstPart
          summaryData={
            DataScienceCourseData.IITCyberSecurityData[0].summarySection
          }
          SecondSectionData={
            DataScienceCourseData.IITCyberSecurityData[0].secondSection
          }
          whyChooseData={
            DataScienceCourseData.IITCyberSecurityData[0].whyChooseData
          }
        />
        <IITCyberSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.IITCyberSecurityData[0].masterSyllabusMobile
          }
          toolsData={DataScienceCourseData.IITCyberSecurityData[0].toolsData}
          CertificateData={
            DataScienceCourseData.IITCyberSecurityData[0].Certificate
          }
          certificateNew={
            DataScienceCourseData.IITCyberSecurityData[0].certificateNew
          }
          FAQNewData={DataScienceCourseData.IITCyberSecurityData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../Data/IITCyberSecurityData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
