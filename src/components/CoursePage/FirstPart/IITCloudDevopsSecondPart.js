import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import LJourney from "../LJourney/LJourney";
import NewCertificateSection from "../newCertificate/NewCertificate";
import DSAFeeSection from "../dsaFee/DSAFeeSection";
import NewTools from "../newTools/NewTools";
import GenAIProject from "../genAiProject/GenAIProject";
const Certificate = dynamic(() =>
  import("../../../components/CoursePage/UpdatedCertificate/UpdatedCertificate")
);
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const MentorsSection = dynamic(() =>
  import("../../Global/MentorsSection/MentorsSection")
);
const SliderTab = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));
const PlacementCall = dynamic(() =>
  import("../../Global/PlacementCall/PlacementCallFsd")
);
const FAQNew = dynamic(() => import("../FAQNew/FAQNew"));
const Content = dynamic(() =>
  import("@/components/CoursePage/Content/content")
);

const IITCloudDevopsSecondPart = ({
  masterSyllabusMobile,
  FAQNewData,
  CertificateData,
  toolsData,
  genAiData,
}) => {
  // console.log(popupData);

  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/IIT-cloud-devops.pdf";
  return (
    <div>
      <LJourney />
      <NewTools toolsData={toolsData} />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse="Software Development Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/IIT-cloud-devops.pdf"
        brochurePdf={pdfUrl}
        buttonHide={true}
        interstedInHide={true}
        onlyGENAIPage={true}
        IITGenCloudonly={true}
        // genAIIIT={true}
      />

      <Certificate data={CertificateData} />
      {/* <NewCertificateSection certificateNew={certificateNew} /> */}

      <DSAFeeSection
        Fee="₹1,10,000"
        FeeEmi="₹ 7,211/month"
        weekendbatch="Weekend Evening"
        weekdaybatch="Weekday Evening"
        weekday="MON - WED - FRI"
        weekend="SAT - SUN"
        WeekdayDate="28th April"
        WeekendDate="18th May"
        WeekdayTime="8:00 PM - 10:00 PM "
        WeekendTime="9:30 AM - 1:00 PM"
        FeeContent3="Flexible payment"
        // <EMI POPUP
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹1,10,000"
        monthlyPayment1="₹7,211"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹1,10,000"
        monthlyPayment2="₹10,816"


        dataScienceCounselling={true}
        iitGuwatiGen={true}
        interstedInHide={true}
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
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/IIT-cloud-devops.pdf"
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
      <GenAIProject genAiData={genAiData} GENAIMAN={true} noClud={true} />
      {/* <PlacementCall /> */}
      {/* <FAQNew FAQNewData={FAQNewData} /> */}
      {/* <Content dataScienceCounselling={true} DSASeoContent={true} /> */}
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
    </div>
  );
};

export default IITCloudDevopsSecondPart;
