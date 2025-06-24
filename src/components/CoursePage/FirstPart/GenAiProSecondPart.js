import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";

import LJourney from "../LJourney/LJourney";
import DSAFeeSection from "../dsaFee/DSAFeeSection";
import NewTools from "../newTools/NewTools";
import GenAIProject from "../genAiProject/GenAIProject";
import FAQNew from "../FAQNew/FAQNewDomain";
import Content from '../../../components/CoursePage/Content/content'
const Certificate = dynamic(() =>
  import("../../../components/CoursePage/Certificate/Certificate")
);
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));

const SliderTab = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));

const GenAiProSecondPart = ({
  masterSyllabusMobile,
  toolsData,
  CertificateData,
  genAiData,
  FAQNewData,
}) => {
  // console.log(popupData);

  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/GenAI-Developer-Program.pdf";
  return (
    <div>
      <LJourney />
      <NewTools toolsData={toolsData} />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        onlyGENAIPage={true}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse=""
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/GenAI-Developer-Program.pdf"
        brochurePdf={pdfUrl}
        buttonHide={true}
        interstedInHide={true}
        genAIIIT={true}
      />

      <Certificate data={CertificateData} noTabs={true} />
      {/* <NewCertificateSection certificateNew={certificateNew} /> */}

      <DSAFeeSection
      
        Fee="₹ 95,000"
        FeeEmi="₹ 6,228/month"
        weekendbatch="Weekday Evening "
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
        totalAmount1="₹95,000"
        monthlyPayment1="₹6,228"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹95,000"
        monthlyPayment2="₹9,342"

        dataScienceCounselling={true}
        iitGuwatiGen={true}
        interstedInHide={true}
      />

      <SliderTab />
      {/* <PlacementCall /> */}
      <GenAIProject genAiData={genAiData} Duration={true} />
      <FAQNew FAQNewData={FAQNewData} />
      {/* <Content dataScienceCounselling={true} DSASeoContent={true} /> */}
      <Content GenAIDevelopers={true} background={true}/>
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
    </div>
  );
};

export default GenAiProSecondPart;
