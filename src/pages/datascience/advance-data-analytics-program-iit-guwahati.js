import { parseJSONData } from "@/Util/JsonConvertor";
import dynamic from "next/dynamic";
import Head from "next/head";

import AdaProgramFirst from "@/components/CoursePage/FirstPart/AdaProgramFirstPart";
const AdaProgramSecondPart = dynamic(() =>
  import("@/components/CoursePage/FirstPart/AdaProgramSecondPart")
);

const Blockchain = ({ DataScienceCourseDataJson }) => {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Advanced Data Analytics Course | IITG Certification</title>
        <meta
          name="description"
          content="Elevate your Analytics career with Learnbay's Advanced Data Analytics Certification. Gain advanced skills, and certification from E&ICT Academy IIT Guwahati."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="E&ICT Academy IIT Guwahati data analytics course, iit data analytics course, iit data analytics course online, data analyst course iit, data analytics course iit, data analyst course from iit, advanced data analytics course by E&ICT Academy IIT Guwahati, advanced data analytics course, best data analyst certification, data analytics professional certificate,"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/advance-data-analytics-program-iit-guwahati"
        />
      </Head>
      <main>
        <AdaProgramFirst
          WolfLink={true}
          formbtn={true}
          TestimonialData={DataScienceCourseData.ADAProgram[0].testimonial}
        />
        <AdaProgramSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.ADAProgram[0].masterSyllabusMobile
          }
          CertificateData={DataScienceCourseData.ADAProgram[0].Certificate}
          projectSection={DataScienceCourseData.ADAProgram[0].projectSection}
          FAQNewData={DataScienceCourseData.ADAProgram[0].faq}
        />

        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </>
  );
};
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/AdvanceDataAnalyticsProgramData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
