import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import FirstPart from "@/components/CoursePage/FirstPart/FreshersFirstPart";
import SecondPart from "@/components/CoursePage/FirstPart/FreshersSecondPart";
import Navbar from "@/components/Global/Navbar/Navbar";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Data Science & AI Course for Freshers - Learnbay</title>
        <meta
          name="description"
          content="Start your AI journey with Learnbay’s Data Science & AI Program for Freshers. Learn from experts and boost your career. Enroll now."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data science and ai course, Data Science and AI Certification Program For Freshers, data science and ai, ai and data science course, artificial intelligence and data science course, advanced certification in data science and ai"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/data-science-ai-for-freshers"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Data Science & AI Course for Freshers - Learnbay"
        />
        <meta
          property="og:description"
          content="Start your AI journey with Learnbay’s Data Science & AI Program for Freshers. Learn from experts and boost your career. Enroll now."
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="learnbay.co" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          property="twitter:url"
          content="https://www.learnbay.co/datascience/data-science-ai-for-freshers"
        />
        <meta
          name="twitter:title"
          content="Data Science and AI Certification Program For Freshers - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Are you searching for the Data Science and AI Certification Program For Freshers ? Learnbay is providing the best online Advanced Data Science and AI Program . Enroll now!"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/data-science-ai-for-freshers"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
  "@type": "Course",
  "name": "Data Science and AI Certification Program For Freshers",
  "description": "Our Advance Data Science and AI Course brings you a wide knowledge of Data Science and AI and helps you to make precise data-driven decisions.",
  "url": "https://www.learnbay.co/datascience/advance-data-science-certification-courses",
  "offers": {
    "@type": "offer",
    "price": "125000",
    "pricecurrency": "INR",
    "category": "Educational"
  },
   "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "Url": "https://www.learnbay.co/"
      },
  "coursePrerequisites": "There are no prerequisites for Advanced Data Science and AI Program, as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for non-IT/Non-Programmers.",
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "P10W",
      "courseFee": {
        "@type": "PriceSpecification",
        "price": "₹ 1,25,000 + 18% GST",
        "priceCurrency": "INR"
      }
    }
  ]
    }`,
          }}
        />
      </Head>
      <main>
        <Navbar dataScienceCounselling={true} interstedInHide={true} />

        <FirstPart
          SecondSectionData={
            DataScienceCourseData.DataScienceCourseData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.DataScienceCourseData[0].testimonial
          }
        />
      </main>
      <main>
        <SecondPart
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
  const data = await import("../../Data/FreshersDataScienceCourse");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
