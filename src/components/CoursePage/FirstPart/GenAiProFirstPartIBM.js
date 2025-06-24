import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "../FirstSection/FirstSection";
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

const GenAiProFirstPartIBM = ({ summaryData, whyChooseData }) => {
  const JobData = {
    title: "Program outcome: What’s in it for you?",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/adobe_illustrator+(1).webp",
        imgAlt: "image",
        title: "Master GenAI Tools + Frameworks",
        description:
          "Learn OpenAI APIs, LangChain, Hugging Face, and more to build intelligent applications effortlessly.",
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
        title: "Higher Earning Potential",
        description:
          "Leverage advanced GenAI knowledge to drive business success, enhancing career prospects and salary growth.",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/genAI_DEV+(1).webp  ",
      width: 350,
      height: 350,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  const pdfUrl = "/Brochure/IBM-GenAI-Developers.pdf";
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
        titleCourse="GenAI Developer Certification For Professionals"
        cityParaCont="Future-Ready Leadership Starts with Generative AI Mastery"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/IBM-GenAI-Developers.pdf"
        brochurePdf={pdfUrl}
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/fullhead.webp"
        firstToparaImg=""
        GEnAi={true}
        firstHeading="GenAI Developer Certification For Professionals"
        firstTopPara="For Tech Professionals & Developers"
        idss="0cspp1jXAbM"
        interstedInHide={true}
        videoId="0cspp1jXAbM"
        backgorunimg={true}
        IIT={true}
        fresher={true}
        // backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/SyllabusIcon/iitGen_twos.webp"
        highlightedWords={["GenAI", "Developer"]}
        // compLogo="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ibm-grays.webp"
        // logoWidth={100}
        // logoHeight={46}
        noLogoDemo={true}
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
        first="Graduation/Masters Degree in CS/IT and MCA."
        second="2+ year of  work experience is required"
        third="Mid-career professionals interested in Advance GenAI"
        forth="Achieving higher career growth in  AI."
      />

      <GetHire />
      <ContactConsellor
        GenAi={true}
        titleCourse="Data Structure Algorithms & System Design"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/IBM-GenAI-Developers.pdf"
        brochurePdf={pdfUrl}
        dataScience={true}
        interstedInHide={true}
      />
    </div>
  );
};

export default React.memo(GenAiProFirstPartIBM);
