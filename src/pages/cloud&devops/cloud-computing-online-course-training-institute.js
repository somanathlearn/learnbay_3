import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import FirstPart from "@/components/CoursePage/FirstPart/CloudOnlyFirstpart";
import SecondPart from "@/components/CoursePage/FirstPart/CloudOnlySecondPart";
import Navbar from "@/components/Global/Navbar/Navbar";

function CloudAndDevOpsCoursePage({ CloudAndDevOpsCourseDataJson }) {
  const CloudAndDevOpsCourseData = parseJSONData(CloudAndDevOpsCourseDataJson);

  return (
    <>
      <Head>
        <title>
        Advanced Certification in Cloud Computing  - Learnbay
        </title>
        <meta
          name="description"
          content="Elevate your skills with our Advanced Cloud Computing and DevOps Certification. Gain expertise in cutting-edge technologies to streamline development and enhance cloud-based solutions. Future-proof your career today!"
        />
        
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="cloud computing certification , aws training and certification, google cloud computing certification, cloud engineering certification, cloud computing online courses, amazon aws training, azure devops certification, microsoft azure cloud computing"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cloud&devops/cloud-computing-online-course-training-institute"
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
  const data = await import("../../Data/CloudComputingData");
  function getCloudAndDevOpsCourseDataJSON(CloudAndDevOpsCourseData) {
    return JSON.stringify(CloudAndDevOpsCourseData);
  }
  const CloudAndDevOpsCourseDataJson = getCloudAndDevOpsCourseDataJSON(data);
  return { props: { CloudAndDevOpsCourseDataJson } };
}
