import React from 'react'
import Navbar from "@/components/Global/Navbar/Navbar";
import DmdPart from "@/components/CoursePage/FirstPart/DmdPart";
import { parseJSONData } from "@/Util/JsonConvertor";
import Head from 'next/head';





function dmd({ DataScienceCourseDataJson }

  ) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);


  return (
    <div>
      <Head>
        <title>Learnbay - Domain Specialization</title>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.learnbay.co/campaign/dmd" />
        <meta
          name="description"
          content="Learn about the members of Learnbay's core team, their vision and mission. Learn how it is assisting graduates and working professionals in achieving their career goals."
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
      <Navbar popup={true} dataScienceCounselling={true} adPage={true} DMD={true}   interstedInHide={true}/>
      <DmdPart
          CertificateData={
            DataScienceCourseData.DataScienceCourseData[0].Certificate
          }
          S3RightImage={true}
          adsHide={true}
          projectSection={
            DataScienceCourseData.DataScienceCourseData[0].projectSection
          }
          
   
          EightSection={true}
        />

      </main>
    </div>
  )
}

export default dmd
export async function getStaticProps() {
  const data = await import("../../Data/AdvanceDataScienceCourse");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
