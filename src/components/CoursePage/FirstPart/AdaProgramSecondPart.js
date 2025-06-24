import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import BottomBar from "../../Global/BottomBar/BottomBar";
import LJourney from "../LJourney/LJourney";
const GetHire = dynamic(() => import("../../MastersCourse/GetHire/GetHire"));
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
const Certificate = dynamic(() =>
  import("../../MastersCourse/Certificate/Certificate")
);
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

const SeventhSection = dynamic(() =>
  import("../../Global/SeventhSection/SeventhSection")
);
const MobileTestimonial = dynamic(() =>
  import("@/components/Home/MobileTestimonial/MobileTestimonial")
);

const Footer = dynamic(() => import("../../Global/Footer/Footer"));
const FAQNew = dynamic(() => import("../../CoursePage/FAQNew/FAQNewDomain"));

const ExecutiveSecondPart = ({
  CertificateData,
  masterSyllabusMobile,
  projectSection,
  FAQNewData,
  noGuwahatiimg,
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Iit-Data-Analytics-Certifications.pdf";
  return (
    <>
      <GetHire />
      <ContactCounsellor dataScienceCounselling={true} />
      <LJourney />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        MastersContent={true}
        buttonHide={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/iit-Guwahati/Copy+of+Data+Analytics+Certification+Program_compress.pdf"
        brochurePdf={pdfUrl}
        isGuwahati={true}
      />
      <ToolsCovered
        deskImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Tools-Logo.png"
        mobImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Mobile-Tools-Covered.png"
      />
      <Certificate data={CertificateData} Imgno={true} isGuwahati={true} />
      <FeeSection
        Fee="₹ 1,40,000"
        FeeEmi="9,178/month."
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekend Batch"
        weekday="MON - WED - FRI"
        weekend="SAT - SUN"
        WeekdayDate="28th April"
        WeekendDate="18th May"
        WeekdayTime="8:00 PM - 10:00 PM "
        WeekendTime="9:30 AM - 1:00 PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="10 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        // EMI POPUPDATA
        emiType="NO COST EMI"
        duration1="12 Months"
        totalAmount1="₹1,40,000"
        monthlyPayment1="₹13,767"
        greenDown1="Standard Intrest rate Applicable"
        duration2="18 Months"
        totalAmount2="₹1,40,000"
        monthlyPayment2="₹9,178"
      />

      <SliderTabs />
      <PlacementCall />
      <MobileTestimonial dataScienceCounselling={true} />
      <NewProjectSection
        dataScience={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/iit-Guwahati/Copy+of+Data+Analytics+Certification+Program_compress.pdf"
        brochurePdf={pdfUrl}
        projectSection={projectSection}
      />
      {/* <FAQNew FAQNewData={DataScienceMastersinCS[0].faq} /> */}
      <FAQNew FAQNewData={FAQNewData} isGuwahati={true} isSpecial={true} />

      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} />
      <WhatsappFloat />
      {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
    </>
  );
};

export default ExecutiveSecondPart;
