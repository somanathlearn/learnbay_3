import { ThirdSectionData } from "@/Data/ThirdSectionData";
import dynamic from "next/dynamic";
import React from "react";
const SecondNavbar = dynamic(() =>
  import("../../../components/CoursePage/SecondNavbar/SecondNavbar")
);
const WhoProgram = dynamic(() =>
  import("../../../components/CoursePage/WhoProgram/ThirdSection")
);
const TrainerSection = dynamic(() =>
  import("../../../components/Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("../../../components/Global/Testimonial/Testimonial")
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
import styles from "../../../styles/Home.module.css"
import { DataScienceCourseData } from "../../../Data/DataScinceCourseOnly";

import FAQNew from "../FAQNew/FAQNew";
const FirstSection = dynamic(() =>
  import("../../CoursePage/FirstSection/FirstSection")
);

const MasterSecondSection = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
);
const CitiesRight = dynamic(() =>
  import("../../Seo/CitiesRight/CitiesRight")
);
const CitiesLeft = dynamic(()=>
import ("../../Seo/CitiesLeft/CitiesLeft"));
const Course = dynamic(() => import("../../Home/Course/DSCourse"));
const Realstory = dynamic(() => import("../../Home/Realstory/Realstory"));

import { AiOutlineContainer } from "react-icons/ai";
import { BsDisplay, BsPeople, BsPersonGear } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import Dropdown from "@/components/Seo/DropDownContent/Accordion";
import Accordion from "@/components/Seo/DropDownContent/Accordion";
const FirstPart = ({ SecondSectionData, TestimonialData,  }) => {
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
  

  return (
    <>
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        titleCourse="Data Science Courses – Learnbay        "
        cityParaCont="Experience the analytical power of data science with Learnbay’s industry-paced upskilling programs designed to propel competitive success rates. Enroll in our data science courses to break into the perplexity of emerging data-driven culture.     "
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
        firstToparaImg="– Learnbay"
        firstHeading="Data Science Courses       "
        firstTopPara="  "
        idss="djokazk1d-0"
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-fs.webp"
        videoId="djokazk1d-0"
        DSWolf={true}
       softwareBtnHide={true}
      />

      <Course
        // radio={true}
       
        // interstedInHide={true}
        newDesign={true}
      
        DomainInput={true}
        interstedInHide={true}
        DatascienOnlycourse={true}
      />
    


  

      <Realstory />
      <TrainerSection idss="eautK0odE7Q" />

      {/* <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} /> */}

<Accordion/>
      <GetHire />
    </>
  );
};

export default React.memo(FirstPart);
