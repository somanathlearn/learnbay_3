import dynamic from "next/dynamic";
import React from "react";
const SecondNavbar = dynamic(() => import("../SecondNavbar/SecondNavbar"));
const WhoProgram = dynamic(() => import("../WhoProgram/ThirdSection"));
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
const FirstSection = dynamic(() => import("../FirstSection/FirstSection"));
const MasterSecondSection = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
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
      normalText: "Global Certification",
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
    title1: "Project-Based Learning",
    image1: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/group_845.webp",
    points: [
      "Work in an industry like environment and gain practical hands-on experience",
      "8 Real-World + 1 Capstone Projects",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask-group-_32_-min.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Data Scientist ",
        salary: " 14.4 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Tableau Developer ",
        salary: "11.9 LPA        ",
      },
      {
        icon: <BsPersonGear />,
        role: "Data Analyst ",
        salary: "7.2 LPA      ",
      },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-768-min.webp",
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
    title: "Jumpstart Your Career In Data Science & AI    ",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "image",
        title: "6 Month Internship Certificate        ",
        description:
          "Earn an internship certificate by working on real-time data science projects.         ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "image",
        title: "Final Year Project Assistance        ",
        description:
          "Get Live help from Industry Experts for your final year project        ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "image",
        title: "Expert Crafted Curriculum        ",
        description:
          "Tailored for career transformation in a tech-driven era        ",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Fresher_job.webp",
      width: 500,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/AI-For-Freshers.pdf";
  return (
    <>
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        titleCourse="Data Science & AI Certification Program For Freshers"
        cityParaCont="Gain work experience of data scientist with real projects"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data_Science_%26_AI_For_Freshers.pdf"
        brochurePdf={pdfUrl}
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
        firstToparaImg="For Freshers"
        firstHeading="Data Science & AI Certification Program"
        firstTopPara="Final Year Project Assistance with        "
        idss="m6M4vEacIN0"
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-fs.webp"
        videoId="m6M4vEacIN0"
        ibmOnly={true}
        IBMGl={true}
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
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data_Science_%26_AI_For_Freshers.pdf"
        brochurePdf={pdfUrl}
        titleCourse="Data Science & AI Certification Program For Freshers"
      />
      <Realstory />
      <TrainerSection idss="eautK0odE7Q" />
      {/* <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} /> */}
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 6 Months of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in data science"
        forth="Developing skills in data science for future opportunities"
      />
      <WhyLearnbay
        idss="ZPOTy4PEnNU"
        Intern={true}
        targetjobs={true}
        FreshersIntern={true}
      />
      <GetHire />
      <ContactConsellor
        dataScience={true}
        interstedInHide={true}
        titleCourse="Data Science & AI Certification Program For Freshers"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data_Science_%26_AI_For_Freshers.pdf"
        brochurePdf={pdfUrl}
      />
    </>
  );
};

export default React.memo(FirstPart);
