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

const EthicalCyberFirstPart = ({ summaryData, whyChooseData }) => {
  const JobData = {
    title: "Program outcome: What’s in it for you?",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/generated_photos+(1).webp",
        imgAlt: "image",
        title: "Full stack Cybersecurity Certification",
        description:
          "Learn Cybersecurity and Ethical Hacking with real-world projects. Mastering these skills helps to protect and secure system against threats.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/adobe_illustrator+(1).webp",
        imgAlt: "image",
        title: "Master GenAI Skills for Cybersecurity",
        description:
          "By integrating GenAI into our programs, we ensure that our learners are well-prepared to lead and innovate in their respective fields.",
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
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cyber-jobs.webp",
      width: 350,
      height: 350,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Advance-Cyber-security.pdf";
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
        dataScienceCounselling={true}
        titleCourse="Advance Certification in"
        cityParaCont=""
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance-Cyber-security.pdf"
        brochurePdf={pdfUrl}
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/fullhead.webp"
        firstToparaImg="Cyber Security & Ethical Hacking"
        GEnAi={true}
        firstHeading="Advance Certification in"
        firstTopPara="Curriculum Inclusive of Gen-AI"
        idss="DzxLshgOtXE"
        interstedInHide={true}
        videoId="0cspp1jXAbM"
        backgorunimg={true}
        IIT={true}
        fresher={true}
        backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cyber-backs.webp"
        cyber={true}
        logoWidth={200}
        logoHeight={20}
        cyberTitle="Advance Certification in "
        cyberTitleSpan=" Cyber Security & Ethical Hacking"
        compLogo="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ec-mcs.webp"
      />

      {/* <MasterSecondSection data={seconddata} /> */}
      <PSummary summaryData={summaryData} />
      <JobAbroad
        data={JobData}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <AnimationGEN whyChooseData={whyChooseData} cyber={true} />
      <TrainerSection idss="eautK0odE7Q" />

      <WhoIsProgram
        first="Graduation or Masters with Work experience."
        second="Minimum 1 year of IT work experience"
        third="Entry to Mid Level Professionals with 1+ Years of Experience"
        forth="Achieving higher career growth in data science and AI"
      />

      <GetHire />
      <ContactConsellor
        GenAi={true}
        titleCourse="Cyber Security & Ethical Hacking"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance-Cyber-security.pdf"
        brochurePdf={pdfUrl}
        dataScience={true}
        interstedInHide={true}
      />
    </div>
  );
};

export default React.memo(EthicalCyberFirstPart);
