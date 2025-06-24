import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import FullStackSoftwareDevelopmentFirstPart from "@/components/CoursePage/FirstPart/FullStackSoftwareDevelopmentFirstPart";
import FullStackSoftwareDevelopmentSecondPart from "@/components/CoursePage/FirstPart/FullStackSoftwareDevelopmentSecondPart";

const OfferPopup = dynamic(() =>
  import("../../components/Global/OfferPopup/OfferPopup")
);

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Software Development Certification Program - Learnbay</title>
        <meta
          name="description"
          content="Elevate your tech skills through our Software development Certification Program and switch from service-based to product-based companies. Earn globally recoganized IBM and Microsoft Certifications.          "
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="software development course, software development program, software engineering course, software engineer certification, software developer certifications, software developer training, software engineer online course          "
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/full-stack-software-development-program"
        />

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "Software Development Certification Program",
      "description": "Elevate your tech skills through our Software Development Certification Program and switch from service-based to product-based companies. Earn globally recognized IBM and Microsoft Certifications.",
      "url": "https://www.learnbay.co/fullstack/full-stack-software-development-program",
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
/>

      </Head>
      <main>
        <FullStackSoftwareDevelopmentFirstPart
          SecondSectionData={
            DataScienceCourseData.FSSPDataScienceCourseData[0].secondSection
          }
        />

        <FullStackSoftwareDevelopmentSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.FSSPDataScienceCourseData[0]
              .masterSyllabusMobile
          }
          FAQNewData={DataScienceCourseData.FSSPDataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/FullStackSoftwareProgram");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
