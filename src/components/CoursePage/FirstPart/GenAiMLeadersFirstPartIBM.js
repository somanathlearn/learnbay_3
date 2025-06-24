import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar/Navbar";
import PSummary from "../pSummary/PSummary";
import AnimationGEN from "@/components/Home/whyChooseSection/AnimationGEN";
import GenAiFirstSection from "../FirstSection/GenAiFirstSection";

const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const WhoIsProgram = dynamic(() => import("../WhoIsProgram/WhoIsProgram"));

const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);

const JobAbroad = dynamic(() =>
  import("../../MastersCourse/JobAbroad/JobAbroad")
);

const GenAiMLeadersFirstPart = ({ summaryData, whyChooseData }) => {
  const JobData = {
    title: "Program outcome: What’s in it for you?",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/adobe_illustrator+(1).webp",
        imgAlt: "image",
        title: "Master GenAI For Business Transformation",
        description:
          "Learn to harness cutting-edge GenAI tools to solve real-world challenges and lead your organization into the future",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/generated_photos+(1).webp",
        imgAlt: "image",
        title: "Real-World GenAI Project Portfolio",
        description:
          "Work on live projects like chatbot creation, workflow automation, and RAG-powered assistants to showcase your expertise.",
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
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/left_job_GEN+(1).webp",
      width: 350,
      height: 350,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  const pdfUrl = "/Brochure/IBM-GenAI-Managers.pdf";
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
        titleCourse="Curriculum Inclusive of Gen-AI"
        cityParaCont="Future-Ready Leadership Starts with Generative AI Mastery"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/IBM-GenAI-Managers.pdf"
        brochurePdf={pdfUrl}
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/fullhead.webp"
        firstToparaImg=""
        highlightedWords={["GenAI", "Certification"]}
        GEnAi={true}
        firstHeading="GenAI Certification For Managers & Tech Leaders"
        firstTopPara="Curriculum Inclusive of Gen-AI"
        idss="0cspp1jXAbM"
        interstedInHide={true}
        videoId="0cspp1jXAbM"
        backgorunimg={true}
        IIT={true}
        fresher={true}
        noLogoDemo={true}
        //  compLogo="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ibm-grays.webp"
        //  logoWidth={100}
        //  logoHeight={46}
        // backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/SyllabusIcon/iitGen_ones.webp"
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

      <WhoIsProgram
        first="For Project Managers, Technical Leaders, and Team Leads in tech."
        second="4+ year of  work experience is required"
        third="Mid-career professionals interested in data science & AII"
        forth="Achieving higher career growth in data science and AI "
      />

      <GetHire />
      <ContactConsellor
        GenAi={true}
        titleCourse="Data Structure Algorithms & System Design"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/IBM-GenAI-Managers.pdf"
        brochurePdf={pdfUrl}
        dataScience={true}
        interstedInHide={true}
      />
    </div>
  );
};

export default React.memo(GenAiMLeadersFirstPart);
