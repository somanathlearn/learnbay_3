import { parseJSONData } from "@/Util/JsonConvertor";
import dynamic from "next/dynamic";
import Head from "next/head";

import FirstPart from "@/components/MastersCourse/PagePart/FirstPart";
const SecondPart = dynamic(() =>
  import("@/components/MastersCourse/PagePart/SecondPart")
);

const Blockchain = ({ DataScienceCourseDataJson }) => {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Master’s in Data Science & AI Course - Learnbay</title>
        <meta
          name="description"
          content="Advance with Learnbay’s Master's in Data Science & AI. Gain industry-ready skills and succeed in a data-driven world. Join today."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="masters in data science and ai, masters in data science, data science masters programs, best data science masters programs, data science master degree          "
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Master’s in Data Science & AI Course - Learnbay"
        />
        <meta
          property="og:description"
          content="Advance with Learnbay’s Master's in Data Science & AI. Gain industry-ready skills and succeed in a data-driven world. Join today."
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
          content="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
        />
        <meta
          name="twitter:title"
          content="Advance Your Career with a Master's in Data Science and AI - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Elevate your career with Learnbay's Master's in Data Science and AI program. Gain the skills you need to succeed in today's data-driven world. Enroll now!"
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
          href="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "Master in CS: Data Science and AI",
      "description": "Upskill yourself with cutting edge Masters degree in Data Science and AI, earn global recognition from a Master's degree certification from WOOLF university.",
      "provider": {
        "@type": "Organization",
        "name": "Learnbay"
      },
      "occupationalCategory": [
        "Data Science and Analytics",
        "AI & Machine Learning"
      ],
      "url": "https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs",
      "offers": {
        "@type": "Offer",
        "price": 250000,
        "priceCurrency": "INR",
        "category": "Educational"
      },
      "coursePrerequisites": "Bachelor's degree in Computer Science or related field",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "courseWorkload": "P10W",
        "location": {
          "@type": "VirtualLocation",
          "name": "Online"
        }
      },
      "courseCredential": "Master in CS: Data Science and AI",
      "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png"
    }`,
          }}
        />
      </Head>
      <main>
        <FirstPart
          WolfLink={true}
          formbtn={true}
          TestimonialData={
            DataScienceCourseData.DataScienceMastersinCS[0].testimonial
          }
        />
        <SecondPart
          masterSyllabusMobile={
            DataScienceCourseData.DataScienceMastersinCS[0].masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.DataScienceMastersinCS[0].Certificate
          }
          projectSection={
            DataScienceCourseData.DataScienceMastersinCS[0].projectSection
          }
          FAQNewData={DataScienceCourseData.DataScienceMastersinCS[0].faq}
        />

        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </>
  );
};
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/DataScienceAiMastersinCS");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
