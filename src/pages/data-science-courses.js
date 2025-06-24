import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";

import Navbar from "@/components/Global/Navbar/Navbar";
import DSCourseFirstPart from "@/components/CoursePage/FirstPart/DSCourseFirstPart";
import DSCourseSecondPart from "@/components/CoursePage/FirstPart/DSCourseSecondPart";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Best Data Science Courses with Certification [2025] </title>
        <meta
          name="description"
          content="Enroll in the best data science courses to elevate your skills. Select from foundation to advanced courses according to your career requirement. Join Now!!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data science course, data science courses, data science training, online data science courses, data science certifications, best online data science courses, data science certification courses, best data science courses, data science certificate online "
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-science-courses"
        />
      </Head>
      <main>
        <Navbar dataScienceCounselling={true} interstedInHide={true} />

        <DSCourseFirstPart
          SecondSectionData={
            DataScienceCourseData.DataScienceCourseData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.DataScienceCourseData[0].testimonial
          }
        />
      </main>
      <main>
        <DSCourseSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.DataScienceCourseData[0].masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.DataScienceCourseData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.DataScienceCourseData[0].projectSection
          }
          FAQNewData={DataScienceCourseData.DataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../Data/DataScinceCourseOnly");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
