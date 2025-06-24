import { parseJSONData } from "@/Util/JsonConvertor";
import dynamic from "next/dynamic";
import Head from "next/head";

import ExecutiveFirstPart from "@/components/CoursePage/FirstPart/ExecutiveFirstPart";
const ExecutiveSecondPart = dynamic(() =>
  import("@/components/CoursePage/FirstPart/ExecutiveSecondPart")
);

const Blockchain = ({ DataScienceCourseDataJson }) => {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Executive Data Science Training Program - IITG & Learnbay</title>
        <meta
          name="description"
          content="Get IIT Guwahati certified. Join Learnbay’s Executive Data Science & AI Program. Upgrade your career with expert-led training. Enroll now."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="iit data science course, iit data science certification, data science course from iit, data science course iit, iit data science course for working professionals, iit data science course fees, iit data scientist course, executive program in data science, executive data science program"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/executive-program-in-data-science-and-ai-by-iit-guwahati"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/executive-program-in-data-science-and-ai-by-iit-guwahati"
        />
        <meta
          property="og:title"
          content="Executive Data Science Training Program - IITG & Learnbay"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Get IIT Guwahati certified. Join Learnbay’s Executive Data Science & AI Program. Upgrade your career with expert-led training. Enroll now."
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
          content="Advance Gen AI Developer Course for Professionals | Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Join Learnbay's Advance Gen AI Developer course. Develop cutting-edge AI solutions and take your career to the next level with hands-on learning."
        />
        <meta
          name="twitter:description"
          content="Join Learnbay's Advance Gen AI Developer course. Develop cutting-edge AI solutions and take your career to the next level with hands-on learning."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
      </Head>
      <main>
        <ExecutiveFirstPart
          WolfLink={true}
          formbtn={true}
          TestimonialData={
            DataScienceCourseData.ExcutiveProgramAIDS[0].testimonial
          }
        />
        <ExecutiveSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.ExcutiveProgramAIDS[0].masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.ExcutiveProgramAIDS[0].Certificate
          }
          projectSection={
            DataScienceCourseData.ExcutiveProgramAIDS[0].projectSection
          }
          FAQNewData={DataScienceCourseData.ExcutiveProgramAIDS[0].faq}
        />

        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </>
  );
};
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/ExecutiveProgramData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
