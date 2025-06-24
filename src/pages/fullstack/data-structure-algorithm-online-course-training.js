import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import DSAFresherSecondPart from "@/components/CoursePage/FirstPart/DSAFresherSecondPart";
import DSAFresherFirstPart from "@/components/CoursePage/FirstPart/DSAFresherFirstPart";

const OfferPopup = dynamic(() =>
  import("../../components/Global/OfferPopup/OfferPopup")
);

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>DSA Course with Placement Prep. 2025 - Learnbay</title>
        <meta
          name="description"
          content="Master DSA course & ace placements assistance with our expert-led training. Gain coding skills, interview prep, and job-ready expertise. Get into a Data Field Today."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="DSA course, Best DSA course, Best DSA course for beginners, Learn data structures and algorithms from scratch, DSA course online, DSA online course, Data structures and algorithms course"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/data-structure-algorithm-online-course-training"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/data-structure-algorithm-online-course-training"
        />
        <meta
          property="og:title"
          content="DSA Course with Placement Prep. 2025 - Learnbay"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Master DSA course & ace placements assistance with our expert-led training. Gain coding skills, interview prep, and job-ready expertise. Get into a Data Field Today."
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
          content="DSA Course with Placement Prep. 2025"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Master DSA course & ace placements assistance with our expert-led training. Gain coding skills, interview prep, and job-ready expertise. Get into a Data Field Today."
        />
        <meta
          name="twitter:description"
          content="Master DSA course & ace placements assistance with our expert-led training. Gain coding skills, interview prep, and job-ready expertise. Get into a Data Field Today."
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
      "name": "DSA Course with Placement Prep. 2025 - Learnbay",
      "description": "Master DSA course & ace placements assistance with our expert-led training. Gain coding skills, interview prep, and job-ready expertise. Get into a Data Field Today.",
      "url": "https://www.learnbay.co/fullstack/data-structure-algorithm-online-course-training",
      "offers": {
        "@type": "Offer",
        "price": 45000,
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
            "price": "₹ 45,000 + 18% GST",
            "priceCurrency": "INR"
          }
        }
      ]
    }`,
          }}
        />
      </Head>
      <main>
        <DSAFresherFirstPart
          summaryData={
            DataScienceCourseData.FSSPDataScienceCourseData[0].summarySection
          }
          SecondSectionData={
            DataScienceCourseData.FSSPDataScienceCourseData[0].secondSection
          }
          hideduration={true}
        />

        <DSAFresherSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.FSSPDataScienceCourseData[0]
              .masterSyllabusMobile
          }
          certificateNew={
            DataScienceCourseData.FSSPDataScienceCourseData[0].certificateNew
          }
          notcall={true}
          FAQNewData={DataScienceCourseData.FSSPDataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/DSAFreshersData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
