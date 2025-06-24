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
    image1: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group+773.webp",
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
        role: "Predictive Analyst",
        salary: " 12-15 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Medical Data Scientist",
        salary: " 12-20 LPA",
      },
      {
        icon: <BsDatabaseUp />,
        role: "Telemedicine Analyst",
        salary: " 20-25 LPA",
      },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/health-bottom.webp",
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
    title: "Lead the Future of Healthcare with AI Expertise",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "image",
        title: "Stand Out in Healthcare with Innovative Analytics Skills",
        description: "Gain specialisation by working on real-time projects",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "image",
        title: "Curriculum inclusive of Gen-AI",
        description: "Designed for career advancement in a tech-driven era",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "image",
        title: "Online Classes with Flexible Learning Options",
        description:
          "Learning experience that fits the schedule of Healthcare Professionals",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/health-right-side.webp",
      width: 414,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Healthcare-Pharma-and-Clinical-Research-domain.pdf";
  return (
    <>
      <Navbar dataScienceCounselling={true} interstedInHide={true} />
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        ThirdTyped="Live Interactive Classes"
        titleCourse="Data Science & AI for Healthcare Professionals"
        cityParaCont="Empowering Healthcare professionals with Data Driven Insights"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Healthcare-Pharma-and-Clinical-Research-domain.pdf"
        brochurePdf={pdfUrl}
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BFSIHeader-min.webp"
        firstToparaImg="for Healthcare Professionals"
        firstHeading="Data Science & AI Certification Program"
        firstTopPara=""
        idss="dB3WSmDx6OE"
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BFSIHeader-min.webp"
        videoId="dB3WSmDx6OE"
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
        first="Bachelor’s degree with consistent good academic"
        second="Minimum 6 Month of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in Healthcare domain"
        forth="Developing skills in Healthcare for future opportunities"
      />
      {/* <WhyLearnbay idss="ZPOTy4PEnNU" /> */}
      <GetHire />
      <ContactConsellor
        dataScience={true}
        titleCourse="Data Science & AI for Healthcare Professionals"
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Healthcare-Pharma-and-Clinical-Research-domain.pdf"
        brochurePdf={pdfUrl}
      />
    </>
  );
};

export default React.memo(BusinessAnalyticsFirstPart);
