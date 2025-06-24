import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import FirstPart from "@/components/CoursePage/FirstPart/DevOpsOnlyFirstpart";
import SecondPart from "@/components/CoursePage/FirstPart/DevopsOnlySecondPart";
import Navbar from "@/components/Global/Navbar/Navbar";
import {
  cloudDevOpsSchema,
  cloudCourseSchema,
} from "@/Data/Schema/CloudAnddevopsSchema"; // Import the schema

function CloudAndDevOpsCoursePage({ CloudAndDevOpsCourseDataJson }) {
  const CloudAndDevOpsCourseData = parseJSONData(CloudAndDevOpsCourseDataJson);

  return (
    <>
      <Head>
        <title>Best DevOps Certification Course</title>
        <meta
          name="description"
          content="Future-proof your career today! Elevate your skills with our DevOps Certification. Gain expertise in cutting-edge technologies to streamline development."
        />

        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="devops certification course, devops course with certification
          devops training with placement, devops training institutes
          best devops certification course online, advanced devops course, devops course with placement
        "
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cloud&devops/devops-online-course-training-institute"
        />

      </Head>
      <main>
        <Navbar dataScienceCounselling={true} />

        <FirstPart
          SecondSectionData={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].secondSection
          }
        />
      </main>
      <main>
        <SecondPart
          masterSyllabusMobile={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0]
              .masterSyllabusMobile
          }
          devops={true}
          mbldevops={true}
          CertificateData={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].Certificate
          }
          devopfee={true}
          projectSection={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].projectSection
          }
          FAQNewData={CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default CloudAndDevOpsCoursePage;

export async function getStaticProps() {
  const data = await import("../../Data/DevopsData");
  function getCloudAndDevOpsCourseDataJSON(CloudAndDevOpsCourseData) {
    return JSON.stringify(CloudAndDevOpsCourseData);
  }
  const CloudAndDevOpsCourseDataJson = getCloudAndDevOpsCourseDataJSON(data);
  return { props: { CloudAndDevOpsCourseDataJson } };
}
