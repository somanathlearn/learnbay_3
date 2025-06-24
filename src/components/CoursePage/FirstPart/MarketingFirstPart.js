import dynamic from "next/dynamic";
import React from "react";

import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import Navbar from "@/components/Global/Navbar/Navbar";
import { AiOutlineContainer } from "react-icons/ai";
import { BsDatabaseUp, BsDisplay, BsPeople } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
const SecondNavbar = dynamic(() => import("../SecondNavbar/SecondNavbar"));
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("../../Global/Testimonial/Testimonial")
);
const WhoIsProgram = dynamic(() => import("../WhoIsProgram/WhoIsProgram"));
const WhyLearnbay = dynamic(() => import("../WhyLearnbay/WhyLearnbay"));
const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);
const CloudDevopsecond = dynamic(() =>
  import("../cloud&devops/DevOpsSecondSection/DevOpsSecondSection")
);
const MasterSecondSection = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
);

const JobAbroad = dynamic(() =>
  import("../../MastersCourse/JobAbroad/JobAbroad")
);
const Realstory = dynamic(() => import("../../Home/Realstory/Realstory"));

const BusinessAnalyticsFirstPart = ({ SecondSectionData, TestimonialData }) => {
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
  const BASecond = {
    title1: "Project-Based Learning",
    image1: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/group_775.webp",
    points: [
      "Work in an industry like environment and gain practical hands-on experience",
      "10 Real-World + 2 Capstone Projects",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask-group-_32_-min.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Data Analyst ",
        salary: " 11 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Marketing Analyst  ",
        salary: " 9.3 LPA",
      },
      {
        icon: <BsDatabaseUp />,
        role: "Market Research Analyst ",
        salary: " 8 LPA",
      },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-770-min.webp",
    image4:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask+group+(10).webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "8-10 Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    ],
    formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };
  const JobData = {
    title: "Revolutionize Marketing with Data-Driven Strategies",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "image",
        title: "Master Data-Driven Marketing Strategies:",
        description:
          "Specialise in leveraging data for strategic marketing decisions        ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "image",
        title: "Curriculum inclusive of Gen-AI        ",
        description:
          "Tailored for career transformation in a tech-driven era        ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "image",
        title: "Flexible Online Learning for Modern Marketers:        ",
        description:
          "Learn at your own pace, ideal for the busy marketing professionals        ",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Market_job.webp",
      width: 500,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/marketing-analytics.pdf";
  return (
    <>
      <Navbar dataScienceCounselling={true} interstedInHide={true} />
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        ThirdTyped="Live Interactive Classes"
        titleCourse="Marketing Analytics Certification Program"
        cityParaCont="Empowering Marketers with Data-Driven Excellence"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Marketing+Analytics+Certification+Program.pdf"
        brochurePdf={pdfUrl}
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MarketingHeader-min.webp"
        firstToparaImg="for Marketing Professionals"
        firstHeading="Marketing Analytics Certification Program"
        firstTopPara=""
        idss="Humhgja0gCQ"
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MarketingHeader-min.webp"
        videoId="W-WSqLl8_5o"
        topHide={true}
      />
      <MasterSecondSection data={seconddata} />
      <CloudDevopsecond data={BASecond} />
      <JobAbroad
        data={JobData}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      {/* <SecondSection SecondSectionData={SecondSectionData} /> */}
      <SecondNavbar
        hideProjectLab={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <Realstory />
      <TrainerSection idss="eautK0odE7Q" />
      {/* <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} /> */}
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 6 Month of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in marketing analytics"
        forth="Developing skills in marketing analytics for future opportunities"
      />
      {/* <WhyLearnbay idss="ZPOTy4PEnNU" /> */}
      <GetHire />
      <ContactConsellor
        dataScience={true}
        titleCourse="Marketing Analytics Certification Program"
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Marketing+Analytics+Certification+Program.pdf"
        brochurePdf={pdfUrl}
      />
    </>
  );
};

export default React.memo(BusinessAnalyticsFirstPart);
