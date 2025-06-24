import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import LJourney from "../LJourney/LJourney";
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));

import Certificate from "../Certificate/Certificate";
const OfferPopup = dynamic(() => import("../../Global/OfferPopup/OfferPopup"));
const FeeSection = dynamic(() =>
  import("../../../components/CoursePage/FeeSection/FeeSection")
);
const MentorsSection = dynamic(() =>
  import("../../../components/Global/MentorsSection/MentorsSection")
);
const SliderTab = dynamic(() =>
  import("../../../components/Global/SliderTabs/SliderTabs")
);
const PlacementCall = dynamic(() =>
  import("../../../components/Global/PlacementCall/PlacementCall")
);
const DevOpsProject = dynamic(() =>
  import("../DevOps/DevOpsProject/DevOpsProject")
);

const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNewDomain")
);
const Content = dynamic(() => import("../Content/content"));

const SecondPart = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  mbldevops,
  FAQNewData,
  devops,
  devopfee,
  adsHide,
  CloudAWs,
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
            if (
              popupData ===
              "Advance Cloud Computing & DevOps Certification Program"
            ) {
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/AWS.pdf";
  return (
    <div style={{ marginTop: "50px" }}>
      <LJourney />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        // interstedInHide={interstedInHide}
        titleCourse="Certificate in AWS Cloud Computing & Devops"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/AWS-Cloud-and-Devops-Certification-Program.pdf"
        brochurePdf={pdfUrl}
        buttonHide={true}
      />
      <ToolsCovered devops={true} mbldevops={mbldevops} />

      <Certificate
        noTabs={true}
        data={CertificateData}
        DSAFresherCertHeading={true}
      />
      <FeeSection
        devopfee={devopfee}
        adsHide={adsHide}
        Fee=" ₹ 50,000"
        FeeEmi="₹ 3,277/month"
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekend Batch"
        weekday="MON - THU "
        weekend="SAT - SUN"
        WeekdayDate="11th April"
        WeekendDate="6th April"
        WeekendTime="9:30 AM - 1 PM"
        WeekdayTime="8:00 PM - 10:00 PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="10 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        // interstedInHide={interstedInHide}
        dataScience={true}
        titleCourse="Certificate in AWS Cloud Computing & Devops"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/AWS-Cloud-and-Devops-Certification-Program.pdf"
        brochurePdf={pdfUrl}
        // <EMI POPUP
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹ 50,000"
        monthlyPayment1="₹ 3,277"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹ 50,000"
        monthlyPayment2="₹ 4,916"
      />

      <MentorsSection />
      <SliderTab WithoutService={true} />
      {adsHide ? "" : <PlacementCall devops={devops} />}

      <DevOpsProject
        CloudAWs={true}
        titleCourse="Certificate in AWS Cloud Computing & Devops"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/AWS-Cloud-and-Devops-Certification-Program.pdf"
        brochurePdf={pdfUrl}
        dataScience={true}
        // interstedInHide={true}
      />

      {adsHide ? "" : <FAQNew FAQNewData={FAQNewData} />}
      <SeventhSection />
      {adsHide ? "" : <Footer />}
      <BottomBar
        dataScienceCounselling={true}
        // interstedInHide={true}
      />
      <WhatsappFloat />
      {/* {adsHide ? (
        ""
      ) : (
        <>
          {popupData.length == 0 ? (
            ""
          ) : (
            <OfferPopup popupData={popupData} devops={devops} />
          )}
        </>
      )} */}
    </div>
  );
};

export default SecondPart;
