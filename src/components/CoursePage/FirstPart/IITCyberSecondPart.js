import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import LJourney from "../LJourney/LJourney";
import DSAFeeSection from "../dsaFee/DSAFeeSection";
import NewTools from "../newTools/NewTools";
import IHubAboutIIT from "../iHubAbout/IHubAboutIIT";
const Certificate = dynamic(() => import("../Certificate/Certificate"));
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));

const SliderTab = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));

const FAQNew = dynamic(() => import("../FAQNew/FAQNewDomain"));
const Content = dynamic(() =>
  import("@/components/CoursePage/Content/content")
);

const IITCyberSecondPart = ({
  masterSyllabusMobile,
  FAQNewData,
  toolsData,
  CertificateData,
}) => {
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Cyberss-Security-IITs.pdf";
  return (
    <div>
      <LJourney />
      <NewTools toolsData={toolsData} />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse=""
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cyber-Security-IIT.pdf"
        brochurePdf={pdfUrl}
        buttonHide={true}
        interstedInHide={true}
      />

      <Certificate data={CertificateData} cyber={true} ECCou={true} />

      <DSAFeeSection
        Fee="₹1,20,000"
        FeeEmi="₹ 7,866/month"
        weekendbatch="Weekend Morning"
        weekdaybatch="Weekend Morning"
        weekday="SAT-SUN"
        weekend="SAT-SUN"
        WeekendDate="23rd Mar"
        WeekdayDate="2nd Mar"
        WeekendTime="09:30AM - 12:30PM"
        WeekdayTime="09:30AM - 12:30PM"
        FeeContent3="Flexible payment"
        // <EMI POPUP
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹1,20,000"
        monthlyPayment1="₹ 7,866"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹ 1,20,000"
        monthlyPayment2="₹11,800"
        dataScienceCounselling={true}
        iitGuwatiGen={true}
        interstedInHide={true}
      />

      <SliderTab />
      <IHubAboutIIT />
      <FAQNew FAQNewData={FAQNewData} />
      <Content ExecutiveCyberSecurityIITR={true} background={true}/>
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
    </div>
  );
};

export default IITCyberSecondPart;
