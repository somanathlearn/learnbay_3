import { parseJSONData } from "@/Util/JsonConvertor";
import Head from "next/head";

import ExecutiveSecondPart from "@/components/CoursePage/FirstPart/ExecutiveSecondPartGeneric";
import ExecutiveFirstPartGeneric from "@/components/CoursePage/FirstPart/ExecutiveFirstPartGeneric";

const ExecutiveIIT = ({ DataScienceCourseDataJson }) => {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>
          Executive program in Data Science and AI | IITG Certification
        </title>
        <meta
          name="description"
          content="Advance your career with Learnbay's Executive Program in Data Science and AI. Gain advanced skills and become IIT Guwahati certified Data Scientist."
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
          href="https://learnbay.co/datascience/executive-program-in-data-science-and-ai-by-iit-guwahati"
        />
      </Head>
      <main>
        <ExecutiveFirstPartGeneric/>
        <ExecutiveSecondPart sections={DataScienceCourseData.ExcutiveProgramAIDS[0].sections}
          FAQNewData={DataScienceCourseData.ExcutiveProgramAIDS[0].faq}/>
      </main>
    </>
  );
};
export default ExecutiveIIT;
export async function getStaticProps() {
  const data = await import("../../Data/ExecutiveProgramDataGeneric");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
