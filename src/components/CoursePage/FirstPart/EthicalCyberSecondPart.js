import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import LJourney from "../LJourney/LJourney";
import DSAFeeSection from "../dsaFee/DSAFeeSection";
import NewTools from "../newTools/NewTools";
import IHubAboutIIT from "../iHubAbout/IHubAboutIIT";
const Certificate= dynamic(() =>
import("../Certificate/Certificate")
)
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));

const SliderTab = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));

const FAQNew = dynamic(() =>
  import("../FAQNew/FAQNewDomain")
);


const EthicalCyberSecondPart = ({
  masterSyllabusMobile,
  FAQNewData,
  toolsData,
  CertificateData,
}) => {

  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Advance-Cyber-security.pdf";
  return (
    <div>
      <LJourney />
      <NewTools toolsData={toolsData}/>
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse=""
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance-Cyber-security.pdf"
        brochurePdf={pdfUrl}
        buttonHide={true}
        interstedInHide={true}
      />

<Certificate data={CertificateData} microEC={true} AdCyber={true} ECCou={true}/>

      <DSAFeeSection
         Fee="₹60,000"
         FeeEmi="₹ 3,933/month"
         weekendbatch="Weekday Evening"
         weekdaybatch="Weekday Evening"
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
         totalAmount1="₹60,000"
         monthlyPayment1="₹3,933"
         greenDown1="Standard Intrest rate Applicable"
         duration2="12 Months"
         totalAmount2="₹60,000"
         monthlyPayment2="₹5,900"
      />
  
      <SliderTab />
      <FAQNew FAQNewData={FAQNewData} />
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
    </div>
  );
};

export default EthicalCyberSecondPart;
