import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import Header from "@/components/CoursePage/NewCyberECCouncil/NewCyberECCouncilHeader";
import Navbar from "@/components/Global/Navbar/Navbar";
import ProgramSection from "@/components/CoursePage/NewDSA/ProgramSection/ProgramSection";
import NewCyberSecurityECCouncilPractical from "@/components/CoursePage/NewDSA/Practical/NewCyberSecurityECCouncilPractical";
import AnimationGEN from "@/components/Home/whyChooseSection/AnimationGEN";
import JobReadySection from "@/components/CoursePage/NewDSA/JobReadySection/JobReadySection";
import NewCyberECCouncilCertificate from "@/components/CoursePage/NewCyberECCouncil/NewCyberECCouncilCertificate/NewCyberECCouncilCertificate";
import DSAFeeSection from "@/components/CoursePage/dsaFee/DSAFeeSection";
import ReviewSlider from "@/components/Home/newUI/reviewSlider/reviewSlider";
import DSASyllabus from "@/components/CoursePage/NewDSA/DSASyllabusSection/DSASyllabus";
import NewCyberECCouncilProject from "@/components/CoursePage/NewDSA/ProjectSection/NewCyberECCouncilProject";
import MentorsSection from "@/components/course/MentorsSection/MentorsSection";
import Footer from "@/components/Global/Footer/Footer";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import FAQNew from "@/components/CoursePage/FAQNew/FAQNewDomain";
import NewSevenSection from "@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection";
const Content = dynamic(() =>
  import("@/components/CoursePage/Content/content")
);

const CyberSecurityECCouncil = ({ NewCyberSecurityECCouncilDataJson }) => {
  const NewCyberSecurityECCouncilData = parseJSONData(
    NewCyberSecurityECCouncilDataJson
  );

  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Advance-Cyber-security.pdf";
  return (
    <>
      <Head>
        <title>
          Advance Cyber Security & Ethical Hacking Course | Learnbay
        </title>
        <meta
          name="description"
          content="Join Learnbay's Advance Cyber Security & Ethical Hacking program. Master top skills to become a cybersecurity expert and protect systems from cyber threats."
        />

        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="advance cyber security course, advanced cyber security course"
        />

        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/advanced-cyber-security-course-training"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/advanced-cyber-security-course-training"
        />
        <meta
          property="og:title"
          content="Advance Cyber Security & Ethical Hacking Course | Learnbay "
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Join Learnbay's Advance Cyber Security & Ethical Hacking program. Master top skills to become a cybersecurity expert and protect systems from cyber threats."
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
          content="Advance Cyber Security & Ethical Hacking Course | Learnbay "
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats."
        />
        <meta
          name="twitter:description"
          content="Join Learnbay's Advance Cyber Security & Ethical Hacking program. Master top skills to become a cybersecurity expert and protect systems from cyber threats."
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
        <Navbar
          popup={true}
          dataScienceCounselling={true}
          interstedInHide={true}
        />
        <Header
          title={NewCyberSecurityECCouncilData[0].header[0].title}
          orgTitle={NewCyberSecurityECCouncilData[0].header[0].orgTitle}
          spanTag={NewCyberSecurityECCouncilData[0].header[0].spanTag}
          spanIcon={NewCyberSecurityECCouncilData[0].header[0].spanIcon}
          descrption={NewCyberSecurityECCouncilData[0].header[0].descrption}
          collaborationImg={
            NewCyberSecurityECCouncilData[0].header[0].collaborationImg
          }
          subtitle={NewCyberSecurityECCouncilData[0].header[0].subtitle}
          applicationIcon={
            NewCyberSecurityECCouncilData[0].header[0].applicationIcon
          }
          BotWidth={NewCyberSecurityECCouncilData[0].header[0].BotWidth}
          BotHeight={NewCyberSecurityECCouncilData[0].header[0].BotHeight}
          ProgramIcon={NewCyberSecurityECCouncilData[0].header[0].ProgramIcon}
          trainingIcon={NewCyberSecurityECCouncilData[0].header[0].trainingIcon}
          CloseDes={NewCyberSecurityECCouncilData[0].header[0].CloseDes}
          CloseBotDate={NewCyberSecurityECCouncilData[0].header[0].CloseBotDate}
          DurationBot={NewCyberSecurityECCouncilData[0].header[0].DurationBot}
          DurationBotDate={
            NewCyberSecurityECCouncilData[0].header[0].DurationBotDate
          }
          TrainingBot={NewCyberSecurityECCouncilData[0].header[0].TrainingBot}
          TrainingBotFormat={
            NewCyberSecurityECCouncilData[0].header[0].TrainingBotFormat
          }
          downloadBrochure={true}
          backgroundImg={
            NewCyberSecurityECCouncilData[0].header[0].backgroundImg
          }
          isCyberSecurity={true}
          dataScience={true}
          dataScienceCounselling={true}
          titleCourse="Advance Certification in Cyber Security & Ethical Hacking"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance-Cyber-security.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <ProgramSection
          programSectionData={NewCyberSecurityECCouncilData[0].ProgramSection}
          dataScienceCounselling={true}
          interstedInHide={true}
          upSkillingHide={true}
        />
        <NewCyberSecurityECCouncilPractical />
        <AnimationGEN
          whyChooseData={NewCyberSecurityECCouncilData[0].whyChooseData}
          cyber={true}
        />
        <JobReadySection />
        <DSASyllabus
          sections={NewCyberSecurityECCouncilData[0].sections}
          dataScience={true}
          interstedInHide={true}
          titleCourse="Advance Certification in Cyber Security & Ethical Hacking"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance-Cyber-security.pdf"
          brochurePdf={pdfUrl}
          downloadBrochure={true}
        />
        <NewCyberECCouncilCertificate
          certificateData={NewCyberSecurityECCouncilData[0].certificateNew}
        />

        <DSAFeeSection
          Fee="₹70,000"
          FeeEmi="₹4,588/month"
          weekendbatch="Weekend Morning"
          weekdaybatch="Weekend Morning"
          weekday="SAT-SUN"
          weekend="SAT-SUN"
          WeekendDate="23rd Mar"
          WeekdayDate="2nd Mar"
          WeekendTime="09:30AM - 12:30PM"
          WeekdayTime="09:30AM - 12:30PM"
          FeeContent3="Flexible payment"
          // <EMI POPUP
          emiType="NO COST EMI"
          duration1="18 Months"
          totalAmount1="₹70,000"
          monthlyPayment1="₹4,588"
          greenDown1="Standard Intrest rate Applicable"
          duration2="12 Months"
          totalAmount2="₹70,000"
          monthlyPayment2="₹6,883"
          dataScienceCounselling={true}
        iitGuwatiGen={true}
        interstedInHide={true}
        />
        <ReviewSlider />
        <MentorsSection />
        <NewCyberECCouncilProject />
        <FAQNew
          FAQNewData={NewCyberSecurityECCouncilData[0].faq}
          background={true}
        />
        <Content
          dataScienceCounselling={true}
          AdvanceCyberSecurity={true}
          background={true}
        />
        <NewSevenSection
          dataScienceCounselling={true}
          interstedInHide={true}
          upSkillingHide={true}
        />
        <Footer />
        <BottomBar dataScienceCounselling={true} interstedInHide={true} />
        <WhatsappFloat />
      </main>
    </>
  );
};

export default CyberSecurityECCouncil;

export async function getStaticProps() {
  const module = await import("../Data/NewCyberSecurityECCouncilData");
  const data = module.default;

  const NewCyberSecurityECCouncilDataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { NewCyberSecurityECCouncilDataJson } };
}
