import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import LJourney from "../LJourney/LJourney";
import NewCertificateSection from "../newCertificate/NewCertificate";
import DSAFeeSection from "../dsaFee/DSAFeeSection";
import Certificate from "../Certificate/Certificate";

const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));

const SliderTab = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));
const PlacementCall = dynamic(() =>
  import("../../Global/PlacementCall/PlacementCallFsd")
);
const FAQNewDSAFresher = dynamic(() => import("../FAQNew/FAQNewDSAFresher"));
const Content = dynamic(() =>
  import("@/components/CoursePage/Content/content")
);

const FullStackSoftwareDevelopmentSecondPart = ({
  masterSyllabusMobile,
  FAQNewData,
  certificateNew,
  notcall,
}) => {
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/DSA-for-Fresherss.pdf";
  return (
    <div>
      <LJourney />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse="Software Development Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA+for+Freshers.pdf"
        brochurePdf={pdfUrl}
        buttonHide={true}
        interstedInHide={true}
      />

      {/* <NewCertificateSection certificateNew={certificateNew} /> */}
      <Certificate
        noTabs={true}
        data={certificateNew}
        DSAFresherCertHeading={true}
      />

      <DSAFeeSection
        isDSAFresher={true}
        Fee="₹ 45,000"
        FeeEmi="₹ 4,425/month"
        weekendbatch="Weekend Morning (DSA BATCHES)"
        weekdaybatch="Weekend Morning (DSA BATCHES)"
        weekday="SAT-SUN"
        weekend="SAR-SUN"
        WeekendDate="MAR 1st"
        WeekdayDate="FEB 1st"
        WeekendTime="10:00AM - 01:00PM"
        WeekdayTime="10:00AM - 01:00PM"
        FeeContent3="Flexible payment"
        // <EMI POPUP
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹45,000"
        monthlyPayment1="₹2,950"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹45,000"
        monthlyPayment2="₹4,425"
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
      <SliderTab
        {...(notcall ? { notcall: true } : { WithoutService: true })}
      />

      <PlacementCall />
      <FAQNewDSAFresher FAQNewData={FAQNewData} DSAFresherFAQT={true} />
      <Content dataScienceCounselling={true} DSAFresherContent={true} />
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
    </div>
  );
};

export default FullStackSoftwareDevelopmentSecondPart;
