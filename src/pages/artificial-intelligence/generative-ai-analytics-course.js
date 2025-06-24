import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import DABAFirstPart from "@/components/CoursePage/FirstPart/DABAFirstPart";

import DABASecondPart from "@/components/CoursePage/FirstPart/DABASecondPart";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  // const [batchDateData, setBatchDateData] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Fetch Popup Data
  //     const popupResponse = await fetch("/api/Popup/popupGenerate", {
  //       method: "GET",
  //     });
  //     if (popupResponse.status === 200) {
  //       const { popData } = await popupResponse.json();
  //       const foundPopup = popData.find((data) =>
  //         data.page.includes("Adv Data Science and AI")
  //       );
  //       if (foundPopup) {
  //         setPopupData(foundPopup);
  //       }
  //     }

  //     // Fetch Batch Data
  //     const batchResponse = await fetch("/api/BatchDetails/getBatchDetails", {
  //       method: "POST",
  //       body: JSON.stringify("Data Science and AI"),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (batchResponse.status === 200) {
  //       const { batchDate } = await batchResponse.json();
  //       setBatchDateData(batchDate);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>Data & Business Analytics Course with Gen AI | Learnbay</title>
        <meta
          name="description"
          content="Upskill with a hands-on Data & Business Analytics course powered by Generative AI. Learn top tools, real-world projects, and boost your career."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data analytics and ai course, data analytics with ai, business analytics and artificial intelligence, ai in business analytics"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/artificial-intelligence/generative-ai-analytics-course"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Data & Business Analytics Course with Gen AI | Learnbay"
        />
        <meta
          property="og:description"
          content="Upskill with a hands-on Data & Business Analytics course powered by Generative AI. Learn top tools, real-world projects, and boost your career."
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
          content="https://www.learnbay.co/artificial-intelligence/generative-ai-analytics-course"
        />
        <meta
          name="twitter:title"
          content="Data & Business Analytics Course with Gen AI | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Upskill with a hands-on Data & Business Analytics course powered by Generative AI. Learn top tools, real-world projects, and boost your career."
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
          href="https://www.learnbay.co/artificial-intelligence/generative-ai-analytics-course"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "Course",
            "name": "Businesss Analytics Master Certification Program",
            "description": "Upskill yourself with cutting edge Business Analytics master Skills and Techniques by enrolling into the Learnbay's Business Analaytics certification Course.",
            "url": "https://www.learnbay.co/artificial-intelligence/generative-ai-analytics-course",
            "offers": {
              "@type": "Offer",
              "price": 90000,
              "priceCurrency": "INR",
              "category": "Educational"
            },
             "provider": {
                  "@type": "Organization",
                  "name": "Learnbay",
                  "Url": "https://www.learnbay.co/"
                },
            "coursePrerequisites": "There are no prerequisites for this Business Analytics master certification course as all modules are beginner-friendly and are taught from scratch. ",
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "courseMode": "Online",
                "courseWorkload": "P10W",
                "courseFee": {
                  "@type": "PriceSpecification",
                  "price": "₹ 90,000 + 18% GST",
                  "priceCurrency": "INR"
                }
              }
            ]



          }`,
          }}
        />
      </Head>
      <main>
        <DABAFirstPart
          SecondSectionData={
            DataScienceCourseData.DABAData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.DABAData[0].testimonial
          }
        />
        <DABASecondPart
          masterSyllabusMobile={
            DataScienceCourseData.DABAData[0]
              .masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.DABAData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.DABAData[0].projectSection
          }
          toolsdynamic={true}
          FAQNewData={DataScienceCourseData.DABAData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/DABAData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
