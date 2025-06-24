import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
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
const MasterSecondSection = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
);
const JobAbroad = dynamic(() =>
  import("../../MastersCourse/JobAbroad/JobAbroad")
);

const FullStackSWebDevelopmentFirstPart = ({ SecondSectionData }) => {
  const seconddata = [
    {
      boldText: "IBM",
      normalText: "Certified Capstone",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp",
    },
    {
      CboldText: "175%",
      normalText: "Average Salary Hike",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review2.webp",
    },
    { boldText: "35K+", normalText: "Trusted Learners" },
  ];
  const JobData = {
    title: "Code Your Career Path To Success    ",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "image",
        title: "Transform with Top Tech Skills        ",
        description:
          "Become a sought-after software developer with our expert-led training.         ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "image",
        title: "Practice Real-time projects in industry setting        ",
        description:
          "Dive into realt-time projects that solve real-world problems.         ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "image",
        title: "From Novice to Expert        ",
        description:
          "Learn from basics to advanced software development techniques.        ",
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Software-Developer-Certification.pdf";
  return (
    <div>
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <FirstSection
        // FirstTyped="Guaranteed Interview Calls"
        // SecondTyped="Capstone Project Certificate"
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        titleCourse="Web Development Certification Program"
        cityParaCont="Upskill and switch from service-based to product-based companies"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay.pdf"
        brochurePdf={pdfUrl}
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/fullhead.webp"
        firstToparaImg="Certification Program"
        firstHeading="Web Development "
        firstTopPara="Crack Interview in Top MNCs"
        idss="0cspp1jXAbM"
        interstedInHide={true}
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sf-f.webp"
        videoId="0cspp1jXAbM"
      />
      <MasterSecondSection data={seconddata} />
      <JobAbroad
        data={JobData}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      {/* <SecondSection SecondSectionData={SecondSectionData} /> */}

      {/* <WhoProgram
          dataScience={true}
          leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
          ThirdSectionData={FSSPDataScienceCourseData[0].thirdSection}
        /> */}
      <TrainerSection idss="eautK0odE7Q" />
      <FullStackSecondSection />

      <WhoIsProgram
        first="Bachelor's degree with consistent good academics"
        second="1+ year(s) experience in IT domain"
        third="Students pursuing B.Tech and B.Sc. in computer science"
        forth="For individuals seeking web development skills"
      />
      <GetHire />
      <ContactConsellor
        titleCourse="Web Development Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay.pdf"
        brochurePdf={pdfUrl}
        dataScience={true}
        interstedInHide={true}
      />
    </div>
  );
};

export default React.memo(FullStackSWebDevelopmentFirstPart);
