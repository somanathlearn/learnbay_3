import { ThirdSectionData } from "@/Data/ThirdSectionData";
import dynamic from "next/dynamic";
import React from "react";

const SecondNavbar = dynamic(() =>
  import("../../../components/CoursePage/SecondNavbar/SecondNavbar")
);
const WhoProgram = dynamic(() =>
  import("../../../components/CoursePage/WhoProgram/ThirdSection")
);
const AnimationNew = dynamic(() =>
  import("@/components/Home/whyChooseSection/AnimationNew")
);
const TrainerSection = dynamic(() =>
  import("../../../components/Global/TrainerSection/TrainerSection")
);
const WhoIsProgram = dynamic(() =>
  import("../../CoursePage/WhoIsProgram/WhoIsProgram")
);
const WhyLearnbay = dynamic(() =>
  import("../../CoursePage/WhyLearnbay/WhyLearnbay")
);
const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../../CoursePage/ContactCounsellor/ContactCounsellor")
);
const CloudDevopsecond = dynamic(() =>
  import(
    "../../CoursePage/cloud&devops/DevOpsSecondSection/DevOpsSecondSection"
  )
);
const MasterSecondSection = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
);
const FirstSection = dynamic(() =>
  import("../../CoursePage/FirstSection/FirstSection")
);

const JobAbroad = dynamic(() =>
  import("../../MastersCourse/JobAbroad/JobAbroad")
);

const Realstory = dynamic(() => import("../../Home/Realstory/Realstory"));

import { AiOutlineContainer } from "react-icons/ai";
import { BsDisplay, BsPeople, BsPersonGear } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
const FirstPart = ({ SecondSectionData, TestimonialData }) => {
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
  const DsSecond = {
    title1: "Domain Specialization",
    image1:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-one.webp",
    points: [
      "Leverage your prior work experience for  relevant career transition.",
      "Aim for higher salary hikes.",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Data Science Manager ",
        salary: "33 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "AI Project Manager ",
        salary: " 17.3 LPA",
      },
      {
        icon: <BsPersonGear />,
        role: "Data Analytics Manager",
        salary: "22.2 LPA",
      },
    ],
    image3: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Frame+42.webp",
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
    title: "Lead with Data: AI for Decision-Makers    ",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "image",
        title:
          "Integrate AI and Data Science in Strategic Decision-Making:        ",
        description:
          "Turn AI insights into business strategies for competitive edge.          ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "image",
        title: "Customized for Leaders and Managers:        ",
        description:
          "Specially crafted curriculum for project managers and team leads.          ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "image",
        title: "Flexible Online Format for Executive Learners:        ",
        description:
          "Study at your own pace, designed for the busy schedules of executives.        ",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/managers_leader.webp",
      width: 500,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  return (
    <>
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        titleCourse="Data Science & AI Certification Program For Managers and Leaders"
        cityParaCont="Empowering Leaders with AI & Data Science Expertise"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
        firstToparaImg="For Managers & Leaders"
        firstHeading="Data Science & Generative AI Certification Program"
        firstTopPara="Gen-AI for Business Leaders"
        idss="rZVkXvgW9gk"
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/managers+and+leaders-min.webp"
        videoId="osYNvuuI1_8"
        brochurePdf="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/data-science-ai-for-managers-v1.pdf"
      />
      <MasterSecondSection data={seconddata} />
      <CloudDevopsecond data={DsSecond} />
      <JobAbroad
        data={JobData}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <SecondNavbar
        interstedInHide={true}
        dataScience={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
        brochurePdf="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/data-science-ai-for-managers-v1.pdf"
        titleCourse="Data Science & AI Certification Program For Managers and Leaders"
      />
      <WhoProgram
        dataScience={true}
        leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
        ThirdSectionData={ThirdSectionData}
      />
      <AnimationNew />
      <Realstory />
      <TrainerSection idss="eautK0odE7Q" />
      {/* <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} /> */}
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 5 years of IT/Non-IT work experience"
        third="Working professionals interested in Data Science & AI"
        forth="Developing skills in data science for future opportunities"
      />
      <WhyLearnbay idss="ZPOTy4PEnNU" />
      <GetHire />
      <ContactConsellor
        dataScience={true}
        interstedInHide={true}
        titleCourse="Data Science & AI Certification Program For Managers and Leaders"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
        brochurePdf="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/data-science-ai-for-managers-v1.pdf"
      />
    </>
  );
};

export default React.memo(FirstPart);
