import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import FullStackSoftwareDevelopmentFirstPart from "@/components/CoursePage/FirstPart/FullStackWebDevelopmentFirstPart";
import FullStackSoftwareDevelopmentSecondPart from "@/components/CoursePage/FirstPart/FullStackSoftwareDevelopmentSecondPart";

const OfferPopup = dynamic(() =>
  import("../../components/Global/OfferPopup/OfferPopup")
);

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Full Stack Web Developer Course with Job Assistance - Learnbay        </title>
        <meta
          name="description"
          content="Upgrade your career with our comprehensive Full Stack Developer Course and become a highly skilled, successful Fullstack Developer."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Full Stack Web Development Course, Full Stack Web Development Course training , Full Stack Web Development Course institute in India, best Full Stack Web Development Course institute, Full Stack Web developer Course ,Full Stack Web developer Course certification, Full Stack Web developer Course training institute , advanced Full Stack Web developer Course , Full Stack Web developer Course with Placement Assistance, Full Stack Web developer Course with IBM certification"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/full-stack-web-development-program"
        />

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "web Development Certification Program",
      "description": "Upgrade your career with our comprehensive Full Stack Developer Course and become a highly skilled, successful Fullstack Developer.",
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
