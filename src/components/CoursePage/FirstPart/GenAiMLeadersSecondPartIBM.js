import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";

import LJourney from "../LJourney/LJourney";
import DSAFeeSection from "../dsaFee/DSAFeeSection";
import NewTools from "../newTools/NewTools";
import GenAIProject from "../genAiProject/GenAIProject";
import FAQNew from "../FAQNew/FAQNewDomain";
const Certificate= dynamic(() =>
import("../Certificate/Certificate")
)
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));

const SliderTab = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));



const GenAiMLeadersSecondPartIBM = ({
  masterSyllabusMobile,
  FAQNewData,
  toolsData,
  CertificateData,
  genAiData,
}) => {

  // console.log(popupData);

  const pdfUrl = "/Brochure/IBM-GenAI-Managers.pdf";
  return (
    <div>
      <LJourney />
      <NewTools toolsData={toolsData}/>
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse=""
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/IBM-GenAI-Managers.pdf"
        brochurePdf={pdfUrl}
        buttonHide={true}
        interstedInHide={true}
        // onlyGENAIPage={true}
        GenAIMangersOnly={true}
        genAIIIT={true}
      />

{/* <Certificate data={CertificateData}      singlecertificate={true}/> */}
      {/* <NewCertificateSection certificateNew={certificateNew} /> */}

      <DSAFeeSection
        Fee="₹ 90,000"
        FeeEmi="₹ 5,900/month"
        weekendbatch="Weekday Evening"
        weekdaybatch="Weekday Evening "
        weekday="MON-WED-FRI"
        weekend="MON-WED-FRI"
        WeekendDate="JAN 26th"
        WeekdayDate="JAN 10th "
        WeekendTime="08:00PM - 10:00PM"
        WeekdayTime="08:00PM - 10:00PM"
        FeeContent3="Flexible payment"

         // <EMI POPUP
         emiType="NO COST EMI"
         duration1="18 Months"
         totalAmount1="₹90,000"
         monthlyPayment1=" ₹5,900"
         greenDown1="Standard Intrest rate Applicable"
         duration2="12 Months"
         totalAmount2="₹90,000"
         monthlyPayment2=" ₹8,850"
      />
      {/* <FeeSection
        Fee="₹ 70,000"
        FeeEmi="₹ 4,588/month"
        weekendbatch="Weekday Evening (DSA BATCHES)"
        weekdaybatch="Weekday Evening (DSA BATCHES)"
        weekday="MON-WED-FRI"
        weekend="MON-WED-FRI"
        WeekendDate="JAN 26th"
        WeekdayDate="JAN 10th "
        WeekendTime="08:00PM - 10:00PM"
        WeekdayTime="08:00PM - 10:00PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="10 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        titleCourse="Software Development Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/IBM-GenAI-Managers.pdf"
        brochurePdf={pdfUrl}
        dataScience={true}
        interstedInHide={true}
        // <EMI POPUP
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹70,000"
        monthlyPayment1="₹4,588"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹70,000"
        monthlyPayment2="₹6,883"
      /> */}
      {/* <MentorsSection /> */}
      <SliderTab />
      {/* <PlacementCall /> */}

      <GenAIProject genAiData ={genAiData } GENAIMAN={true} Duration={true}/>
      {/* <FAQNew FAQNewData={FAQNewData} /> */}
      {/* <Content dataScienceCounselling={true} DSASeoContent={true} /> */}
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
    </div>
  );
};

export default GenAiMLeadersSecondPartIBM;
