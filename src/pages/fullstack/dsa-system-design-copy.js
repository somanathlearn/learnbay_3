import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import DSAFirstPart from "@/components/CoursePage/FirstPart/DSAFirstPart";
import DSASecondPart from "@/components/CoursePage/FirstPart/DSASecondPart";

const OfferPopup = dynamic(() =>
  import("../../components/Global/OfferPopup/OfferPopup")
);

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Best Data Structure Algorithms & System Design Course</title>
        <meta
          name="description"
          content="Enroll in Learnbay to comprehensively understand DSA and System Design. Learn the fundamental concepts of advanced DSA Courses and improve your competencies to enhance your technical proficiency."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="dsa and system design course, best dsa course, best system design course, dsa course online, dsa course, data structures and algorithms course, data structures and algorithms class, courses on data structures and algorithms, best data structures and algorithms course, best course on data structures and algorithms"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/dsa-system-design"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/dsa-system-design"
        />
        <meta
          property="og:title"
          content="Best Data Structure Algorithms & System Design Course"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll in Learnbay to comprehensively understand DSA and System Design. Learn the fundamental concepts of advanced DSA Courses and improve your competencies to enhance your technical proficiency."
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
          content="Best Data Structure Algorithms & System Design Course"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Enroll in Learnbay to comprehensively understand DSA and System Design. Learn the fundamental concepts of advanced DSA Courses and improve your competencies to enhance your technical proficiency."
        />
        <meta
          name="twitter:description"
          content="Enroll in Learnbay to comprehensively understand DSA and System Design. Learn the fundamental concepts of advanced DSA Courses and improve your competencies to enhance your technical proficiency."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "Best Data Structure Algorithms & System Design Course",
      "description": "Enroll in Learnbay to comprehensively understand DSA and System Design. Learn the fundamental concepts of advanced DSA Courses and improve your competencies to enhance your technical proficiency.",
      "url": "https://www.learnbay.co/fullstack/dsa-system-design",
      "offers": {
        "@type": "Offer",
        "price": 75000,
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
            "price": "₹ 75,000 + 18% GST",
            "priceCurrency": "INR"
          }
        }
      ]
    }`,
          }}
        />
      </Head>
      <main>
        <DSAFirstPart
          summaryData={
            DataScienceCourseData.FSSPDataScienceCourseData[0].summarySection
          }
          SecondSectionData={
            DataScienceCourseData.FSSPDataScienceCourseData[0].secondSection
          }
        />

        <DSASecondPart
          masterSyllabusMobile={
            DataScienceCourseData.FSSPDataScienceCourseData[0]
              .masterSyllabusMobile
          }
          certificateNew={
            DataScienceCourseData.FSSPDataScienceCourseData[0].certificateNew
          }
          FAQNewData={DataScienceCourseData.FSSPDataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/DSAProgram");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
