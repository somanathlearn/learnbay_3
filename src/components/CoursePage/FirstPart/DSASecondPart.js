import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import LJourney from "../LJourney/LJourney";
import NewCertificateSection from "../newCertificate/NewCertificate";
import DSAFeeSection from "../dsaFee/DSAFeeSection";
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));

const SliderTab = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));
const PlacementCall = dynamic(() =>
  import("../../Global/PlacementCall/PlacementCallFsd")
);
const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);
const Content = dynamic(() =>
  import("@/components/CoursePage/Content/content")
);

const FullStackSoftwareDevelopmentSecondPart = ({
  masterSyllabusMobile,
  FAQNewData,
  certificateNew,
}) => {

  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/data-dtructure-system-design.pdf";
  return (
    <div>
      <LJourney />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse="Software Development Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
        brochurePdf={pdfUrl}
        buttonHide={true}
        interstedInHide={true}
      />

      <NewCertificateSection certificateNew={certificateNew} />

      <DSAFeeSection
        Fee="₹ 95,000"
        FeeEmi="₹ 6,333/month"
        weekendbatch="Weekend Evening (DSA BATCHES)"
        weekdaybatch="Weekend Evening (DSA BATCHES)"
        weekday="SAT-SUN"
        weekend="SAT-SUN"
        WeekendDate="FEB 1st"
        WeekdayDate="JAN 12th "
        WeekendTime="08:00PM - 10:00PM"
        WeekdayTime="08:00PM - 10:00PM"
        FeeContent3="Flexible payment"

         // <EMI POPUP
         emiType="NO COST EMI"
         duration1="18 Months"
         totalAmount1="₹95,000"
         monthlyPayment1="₹6,333"
         greenDown1="Standard Intrest rate Applicable"
         duration2="12 Months"
         totalAmount2="₹95,000"
         monthlyPayment2="₹9,228"
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
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
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
      <PlacementCall />
      <FAQNew FAQNewData={FAQNewData} />
      <Content dataScienceCounselling={true} DSANewContent={true} />
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
    </div>
  );
};

export default FullStackSoftwareDevelopmentSecondPart;
