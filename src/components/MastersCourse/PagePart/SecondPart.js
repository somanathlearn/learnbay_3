import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import BottomBar from "../../Global/BottomBar/BottomBar";
const GetHire = dynamic(() => import("../GetHire/GetHire"));
const ContactCounsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);
const SyllabusNew = dynamic(() =>
  import("../../CoursePage/Syllabus/MasterSyllabus")
);
const ToolsCovered = dynamic(() =>
  import("../../CoursePage/ToolsCovered/ToolsCovered")
);
const OfferPopup = dynamic(() => import("../../Global/OfferPopup/OfferPopup"));
const Certificate = dynamic(() => import("../Certificate/Certificate"));
const FeeSection = dynamic(() =>
  import("../../CoursePage/FeeSection/FeeSection")
);
const MentorsSection = dynamic(() =>
  import("../../Global/MentorsSection/MentorsSection")
);
const SliderTabs = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));
const PlacementCall = dynamic(() =>
  import("../../Global/PlacementCall/PlacementCall")
);
const NewProjectSection = dynamic(() =>
  import("../../Global/NewProjectSection/NewProjectSection")
);
const Content = dynamic(() => import("../../CoursePage/Content/content"));
const SeventhSection = dynamic(() =>
  import("../../Global/SeventhSection/SeventhSection")
);
const MobileTestimonial = dynamic(() =>
  import("@/components/Home/MobileTestimonial/MobileTestimonial")
);

const Footer = dynamic(() => import("../../Global/Footer/Footer"));
const FAQNew = dynamic(() => import("../../CoursePage/FAQNew/FAQNewDomain"));

const SecondPart = ({
  CertificateData,
  masterSyllabusMobile,
  projectSection,
  FAQNewData,
}) => {
  const [popupData, setPopupData] = useState([]);
  // console.log(popupData);
  useEffect(() => {
    // console.log("inside UseEFFect");
    const fetchPopup = async () => {
      const data = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        // console.log(popData, "get data");
        if (popData == []) {
          setPopupData([]);
        }

        popData.map((data, i) => {
          // console.log(data);
          data.page.map((popupData, i) => {
            // console.log(popData);
            if (popupData === "Master in Cs") {
              setPopupData(data);
              // console.log(popupData);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Masters-in-CS.pdf";
  return (
    <>
      <GetHire />
      <ContactCounsellor dataScienceCounselling={true} />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        MastersContent={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters%2Bin%2BCS%2BData%2BScience%2B%2526%2BAI.pdf"
        brochurePdf={pdfUrl}
      />
      <ToolsCovered
        deskImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Tools-Logo.png"
        mobImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Mobile-Tools-Covered.png"
      />
      <Certificate data={CertificateData} />
      <FeeSection
        Fee="₹ 3,25,000"
        FeeEmi="15,980/month."
        weekdaybatch="weekend Batch"
        weekendbatch="Weekday Batch"
        weekend="MON - THU"
        weekday="SAT - SUN"
        WeekdayDate="27th April"
        WeekendDate="1st April"
        WeekdayTime="8:00 PM - 10:30 PM "
        WeekendTime="9:30 AM - 1:00 PM"
        CutFee="₹ 3,25,000/-"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="10 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        // EMI POPUPDATA
        emiType="NO COST EMI"
        duration1="24 Months"
        totalAmount1="₹3,25,000"
        monthlyPayment1="₹15,980"
        greenDown1="Standard Intrest rate Applicable"
        duration2="18 Months"
        totalAmount2="₹3,25,000"
        monthlyPayment2="₹21,306"
      />
      <MentorsSection />
      <SliderTabs />
      <PlacementCall />
      <MobileTestimonial />
      <NewProjectSection
        dataScience={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters%2Bin%2BCS%2BData%2BScience%2B%2526%2BAI.pdf"
        brochurePdf={pdfUrl}
        projectSection={projectSection}
      />
      {/* <FAQNew FAQNewData={DataScienceMastersinCS[0].faq} /> */}
      <FAQNew FAQNewData={FAQNewData} />
      <Content Masterscontent={true} dataScienceCounselling={true} />
      <SeventhSection />
      <Footer />
      <BottomBar masterdegree={true} dataScienceCounselling={true} />
      <WhatsappFloat />
      {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
    </>
  );
};

export default SecondPart;
