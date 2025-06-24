import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar/Navbar";
import PSummary from "../pSummary/PSummary";
import AnimationGEN from "@/components/Home/whyChooseSection/AnimationGEN";
import GenAiFirstSection from "../FirstSection/GenAiFirstSection";

const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);

const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);

const JobAbroad = dynamic(() =>
  import("../../MastersCourse/JobAbroad/JobAbroad")
);

const IITCloudDevopsFirstPart = ({ summaryData, whyChooseData }) => {
  const JobData = {
    title: "Program outcome: What’s in it for you?",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/adobe_illustrator+(1).webp",
        imgAlt: "image",
        title: "Full stack Cloud Mastery For Professionals ",
        description:
          "Learn  AWS, GCP, and Azure with end-to-end real projects. Mastering these skills helps you to manage, deploy, and scale cloud-based applications",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/generated_photos+(1).webp",
        imgAlt: "image",
        title: "Master GenAI Skills for Cloud and Devops",
        description:
          "By integrating GenAI into our programs, we ensure that our learners are well-prepared to lead and innovate in their respective fields.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/smart_upscaler+(1).webp",
        imgAlt: "image",
        title: "Accelerate Your Career Growth",
        description:
          "Leverage advanced GenAI knowledge to drive business success, enhancing career prospects and salary growth.",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cloud_iit_jobs.webp",
      width: 350,
      height: 350,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/IIT-cloud-devops.pdf";
  return (
    <div>
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <GenAiFirstSection
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        titleCourse="Executive Certification in Cloud and Devops"
        cityParaCont=""
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/IIT-cloud-devops.pdf"
        brochurePdf={pdfUrl}
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/fullhead.webp"
        firstToparaImg="Cloud and Devops"
        GEnAi={true}
        firstHeading="Executive Certification in "
        firstTopPara="Curriculum Inclusive of Gen-AI"
        idss="0cspp1jXAbM"
        interstedInHide={true}
        videoId="0cspp1jXAbM"
        backgorunimg={true}
        IIT={true}
        fresher={true}
        backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cloud-iit.webp"
        highlightedWords={["GenAI", "Developer"]}
        devopsIIt={true}
        compLogo="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/iit_guwati_logo.webp"
        logoWidth={180}
        logoHeight={50}
      />

      {/* <MasterSecondSection data={seconddata} /> */}
      <PSummary summaryData={summaryData} />
      <JobAbroad
        data={JobData}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <AnimationGEN whyChooseData={whyChooseData} />
      <TrainerSection idss="eautK0odE7Q" />

      {/* <WhoIsProgram
        first="BE/B.Tech, MBA, MCA/M.Tech, B.Sc, CS"
        second="6 months plus experience in the IT domain"
        third="Students pursuing BE/B.Tech, MBA, MCA/M.Tech, B.Sc, CS"
        forth="For individuals seeking coding mastery, programming libraries, and API skills"
      /> */}

      <GetHire />
      <ContactConsellor
        GenAi={true}
        titleCourse="Data Structure Algorithms & System Design"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/IIT-cloud-devops.pdf"
        brochurePdf={pdfUrl}
        dataScience={true}
        interstedInHide={true}
      />
    </div>
  );
};

export default React.memo(IITCloudDevopsFirstPart);
