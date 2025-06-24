import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "../FirstSection/FirstSection";
import PSummary from "../pSummary/PSummary";
import AnimationDSAFresher from "@/components/Home/whyChooseSection/AnimationDSAFresher";
const FullStackSecondSection = dynamic(() =>
  import("../FullStackSecondSection/FullStackSecondSection")
);
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

const FullStackSoftwareDevelopmentFirstPart = ({
  SecondSectionData,
  summaryData,
  hideduration,
}) => {
  const JobData = {
    title: "Build your foundation for a Bright Tech Future!",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/adobe_illustrator+(1).webp",
        imgAlt: "image",
        title: "Placement Prep For Top MNCs",
        description:
          "Improve Your Problem-Solving Skills with DSA & Aim for Top Tech Companies.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/generated_photos+(1).webp",
        imgAlt: "image",
        title: "Live Interactive Sessions",
        description:
          "Hands-on coding sessions and Companywise Interview Preparation.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/smart_upscaler+(1).webp",
        imgAlt: "image",
        title: "Instructors from MAANG",
        description:
          "Learn from professionals with extensive teaching experience.",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/dsa-job-lefts.webp",
      width: 360,
      height: 350,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/DSA-for-Fresherss.pdf";
  return (
    <div>
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <FirstSection
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        titleCourse="DSA Course with Placement Prep. {2025}"
        cityParaCont="For Freshers & Students"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA+for+Freshers.pdf"
        brochurePdf={pdfUrl}
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/fullhead.webp"
        firstToparaImg="With Placement Prep"
        firstHeading="DSA Course"
        firstTopPara="Crack Interviews in PRODUCT-BASED MNCs"
        idss="0cspp1jXAbM"
        interstedInHide={true}
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sf-f.webp"
        videoId="0cspp1jXAbM"
        backgorunimg={true}
        backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/dsa_backgrounds.webp"
        // microsoftOnly={true}
        DSA={true}
        DSAFresherHeadContent={true}
      />

      {/* <MasterSecondSection data={seconddata} /> */}
      <PSummary summaryData={summaryData} />
      <JobAbroad
        data={JobData}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <TrainerSection idss="eautK0odE7Q" DSA={true} />
      <FullStackSecondSection />

      <WhoIsProgram
        first="BE/B.Tech, B.Sc, CS"
        second="Final year students/ Freshers with NO work experience"
        third="Students pursuing BE/B.Tech, B.Sc, CS"
        forth="For individuals seeking coding mastery, programming libraries, and API skills"
      />
      <AnimationDSAFresher />
      <GetHire proHide={true} hideduration={hideduration} />
      <ContactConsellor
        GenAi={true}
        titleCourse="DSA Course with Placement Prep. {2025}"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA+for+Freshers.pdf"
        brochurePdf={pdfUrl}
        dataScience={true}
        interstedInHide={true}
      />
    </div>
  );
};

export default React.memo(FullStackSoftwareDevelopmentFirstPart);
