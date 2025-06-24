import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import GenAiProFirstPartIBM from "@/components/CoursePage/FirstPart/GenAiProFirstPartIBM";
import GenAiProSecondPartIBM from "@/components/CoursePage/FirstPart/GenAiProSecondPartIBM";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);
  const JobData = {
    title: "Decode Your Tech Carer Path to Competitive Success",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "image",
        title: "Transform with Coding Expertise",
        description:
          "Build a highly desired software developer/engineer role with our multifaceted training.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "image",
        title:
          "Learn and Practice with Real-time coding projects in an industry-leading setup",
        description:
          "Exhibit real-time coding mastery to tackle algorithmic ordeals.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "image",
        title: "From Novice to Specialist",
        description:
          "Master, from basics to advanced DSA concepts to specify your reign in the tech field. ",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job1.webp",
      width: 500,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  return (
    <>
      <Head>
        <title>
          Advance Gen AI Developer Course for Professionals | Learnbay{" "}
        </title>
        <meta
          name="description"
          content="Join Learnbay's Advance Gen AI Developer course. Develop cutting-edge AI solutions and take your career to the next level with hands-on learning."
        />

        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="generative ai course online, generative ai course, generative ai courses, gen ai developer course, gen ai course online, advance gen ai program, gen ai course for professionals, advance gen ai course for professionals, advance generative ai course, generative ai course for professionals"
        />

        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/generative-ai-course-for-professional"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/generative-ai-course-for-professional"
        />
        <meta
          property="og:title"
          content="Advance Gen AI Developer Course for Professionals | Learnbay "
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Join Learnbay's Advance Gen AI Developer course. Develop cutting-edge AI solutions and take your career to the next level with hands-on learning."
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

        {/* <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "Data Structures Algorithms and System Design Course",
      "description": "Elevate your tech skills through our Data Structures Algorithms and System Design Course and switch from service-based to product-based companies. Earn globally recognized IBM and Microsoft Certifications.",
      "url": "https://www.learnbay.co/fullstack/dsa-system-design",
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
/> */}
      </Head>
      <main>
        <GenAiProFirstPartIBM
          summaryData={
            DataScienceCourseData.GENAIPROCourseDataIBM[0].summarySection
          }
          SecondSectionData={
            DataScienceCourseData.GENAIPROCourseDataIBM[0].secondSection
          }
          whyChooseData={
            DataScienceCourseData.GENAIPROCourseDataIBM[0].whyChooseData
          }
        />

        <GenAiProSecondPartIBM
          masterSyllabusMobile={
            DataScienceCourseData.GENAIPROCourseDataIBM[0].masterSyllabusMobile
          }
          toolsData={DataScienceCourseData.GENAIPROCourseDataIBM[0].toolsData}
          CertificateData={
            DataScienceCourseData.GENAIPROCourseDataIBM[0].Certificate
          }
          certificateNew={
            DataScienceCourseData.GENAIPROCourseDataIBM[0].certificateNew
          }
          genAiData={DataScienceCourseData.GENAIPROCourseDataIBM[0].genAiData}
          FAQNewData={DataScienceCourseData.GENAIPROCourseDataIBM[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/generativeAiProcourseDataIBM");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
