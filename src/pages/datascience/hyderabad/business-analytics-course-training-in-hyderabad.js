import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BusinessAnalyticsHyderabadCourseData } from "../../../CityData/Hyderabad/businessAnalyticsCourseTrainingInHyderabad";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Navbar from "../../../components/Global/Navbar/Navbar";
import Popup from "../../../components/Global/Popup/Popup";
import FeeSection from "../../../components/Seo/FeeSection/FeeSection";
import Testimonial from "../../../components/Seo/Testimonial/Testimonial";
import styles from "../../../styles/Home.module.css";
const FirstSection = dynamic(() =>
  import("../../../components/Seo/FirstSection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("../../../components/Seo/SecondSection/SecondSection")
);
const ProgramInfo = dynamic(() =>
  import("../../../components/Seo/ProgramInfo/ProgramInfo")
);
const SeventhSection = dynamic(() =>
  import("../../../components/Seo/SeventhSection/SeventhSection")
);
const ProgramFee = dynamic(() =>
  import("../../../components/Seo/ProgramInfo/ProgramFee/ProgramFee")
);
const CityText = dynamic(() =>
  import("../../../components/Seo/CityText/CityText")
);
const CitiesLeft = dynamic(() =>
  import("../../../components/Seo/CitiesLeft/CitiesLeft")
);
const CitiesRight = dynamic(() =>
  import("../../../components/Seo/CitiesRight/CitiesRightdomain")
);
const FAQNew = dynamic(() => import("../../../components/Seo/FAQNew/FAQNew"));
const OfferPopup = dynamic(() =>
  import("../../../components/Global/OfferPopup/OfferPopup")
);
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
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
            if (popupData === "Adv Data Science and AI") {
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Business-Analytics-Program.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Business Analyst Course in Hyderabad with IBM Certification
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll Learnbay's Business Analytics Training in Hyderabad and gain live project experience, IBM certification, and placement assistance."
        />
        <meta
          name="keywords"
          content="Business Analytics course in Hyderabad, Business Analytics training in Hyderabad, Business Analytics institute in Hyderabad, best Business Analytics institute in Hyderabad, Business Analytics course in Hyderabad, Business Analytics certification in Hyderabad, Business Analytics training institute in Hyderabad, advanced Business Analytics course in Hyderabad, Business Analytics course with Placement Assistance, Business Analytics course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/hyderabad/business-analytics-course-training-in-hyderabad"
        />
        <meta
          property="og:title"
          content="Business Analytics Course in Hyderabad | Data Science Training in Hyderabad"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Business Analytics Course in Chennai. Learnbay is Advanced Business Analytics Course Training Institute in Hyderabad. Business Analytics Course in Hyderabad will enhance your career"
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Business Analytics Course in Hyderabad | Data Science Training in Hyderabad"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Business Analytics Course in Hyderabad. Learnbay is Advanced Business Analytics Course Training Institute in Hyderabad. Business Analytics Course in Hyderabad will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Business Analytics Course in Hyderabad. Learnbay is Advanced Business Analytics Course Training Institute in Hyderabad. Business Analytics Course in Hyderabad will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/hyderabad/business-analytics-course-training-in-hyderabad"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Business Analytics Courses Certification Training India"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScience={true} interstedInHide={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          cityParaCont=" The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "
          dataScienceCounselling={true}
          interstedInHide={true}
          titleCourse="Business Analytics Course Training In Hyderabad"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
          brochurePdf={pdfUrl}
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/manager+header+image.webp"
          firstHeading="Business Analytics Course Training In Hyderabad"
          firstToparaImg="For Non-tech Professionals"
          firstTopPara="IBM Certified Business Analytics Course for Early Professionals"
          idss="CHut_wm-P2s"
        />
        <SecondSection
          SecondSectionData={
            BusinessAnalyticsHyderabadCourseData[0].secondSection
          }
        />
        <Testimonial
          redirectDS={true}
          Testimonial={BusinessAnalyticsHyderabadCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 95,000"
            FeeEmi="₹ 6,228/month"
            weekdaybatch="Weekday Batch"
            weekendbatch="Weekend Batch"
            weekday="MON-FRI"
            weekend="SAT- SUN"
            WeekdayDate="Oct 18th"
            WeekendDate="Nov 17th"
            WeekendTime="9:30 AM - 1:00 PM"
            WeekdayTime="8:00 PM - 10:30 PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            titleCourse="Business Analytics Certification Program"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
            brochurePdf={pdfUrl}
            dataScience={true}
            // EMI POPUPDATA
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹95,000"
            monthlyPayment1="₹6,228"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹95,000"
            monthlyPayment2="₹9,342"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramHead1={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead1
              }
              ProgramBot1={BusinessAnalyticsHyderabadCourseData[0].ProgramBot1}
              ProgramBot2={BusinessAnalyticsHyderabadCourseData[0].ProgramBot2}
              ProgramHead3={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead3
              }
              ProgramBot3={BusinessAnalyticsHyderabadCourseData[0].ProgramBot3}
              ProgramBot66={
                BusinessAnalyticsHyderabadCourseData[0].ProgramBot66
              }
              ProgramBot32={
                BusinessAnalyticsHyderabadCourseData[0].ProgramBot32
              }
              ProgramHead4={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead4
              }
              ProgramBot4={BusinessAnalyticsHyderabadCourseData[0].ProgramBot4}
              ProgramHead5={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead5
              }
              ProgramBot5={BusinessAnalyticsHyderabadCourseData[0].ProgramBot5}
              ProgramHead6={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead6
              }
              ProgramBot6={BusinessAnalyticsHyderabadCourseData[0].ProgramBot6}
              ProgramHead7={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead7
              }
              ProgramBot8={BusinessAnalyticsHyderabadCourseData[0].ProgramBot8}
              ProgramBot9={BusinessAnalyticsHyderabadCourseData[0].ProgramBot9}
              DomainHead1={BusinessAnalyticsHyderabadCourseData[0].DomainHead1}
              DomainBot1={BusinessAnalyticsHyderabadCourseData[0].DomainBot1}
              DomainBot2={BusinessAnalyticsHyderabadCourseData[0].DomainBot2}
              DomainBot3={BusinessAnalyticsHyderabadCourseData[0].DomainBot3}
              DomainList1={BusinessAnalyticsHyderabadCourseData[0].DomainList1}
              DomainList2={BusinessAnalyticsHyderabadCourseData[0].DomainList2}
              DomainList3={BusinessAnalyticsHyderabadCourseData[0].DomainList3}
              DomainList4={BusinessAnalyticsHyderabadCourseData[0].DomainList4}
              DomainList5={BusinessAnalyticsHyderabadCourseData[0].DomainList5}
              DomainList6={BusinessAnalyticsHyderabadCourseData[0].DomainList6}
              DomainList7={BusinessAnalyticsHyderabadCourseData[0].DomainList7}
              DomainList8={BusinessAnalyticsHyderabadCourseData[0].DomainList8}
              DomainList9={BusinessAnalyticsHyderabadCourseData[0].DomainList9}
              DomainList10={
                BusinessAnalyticsHyderabadCourseData[0].DomainList10
              }
              Domainlink1={BusinessAnalyticsHyderabadCourseData[0].Domainlink1}
              Domainlink2={BusinessAnalyticsHyderabadCourseData[0].Domainlink2}
              Domainlink3={BusinessAnalyticsHyderabadCourseData[0].Domainlink3}
              Domainlink4={BusinessAnalyticsHyderabadCourseData[0].Domainlink4}
              Domainlink5={BusinessAnalyticsHyderabadCourseData[0].Domainlink5}
              Domainlink6={BusinessAnalyticsHyderabadCourseData[0].Domainlink6}
              Domainlink7={BusinessAnalyticsHyderabadCourseData[0].Domainlink7}
              Domainlink8={BusinessAnalyticsHyderabadCourseData[0].Domainlink8}
              Domainlink9={BusinessAnalyticsHyderabadCourseData[0].Domainlink9}
              Domainlink10={
                BusinessAnalyticsHyderabadCourseData[0].Domainlink10
              }
              CertificationHead1={
                BusinessAnalyticsHyderabadCourseData[0].CertificationHead1
              }
              CertificationBot1={
                BusinessAnalyticsHyderabadCourseData[0].CertificationBot1
              }
              CertificationBot2={
                BusinessAnalyticsHyderabadCourseData[0].CertificationBot2
              }
              src={BusinessAnalyticsHyderabadCourseData[0].src}
              src22={BusinessAnalyticsHyderabadCourseData[0].src22}
              src33={BusinessAnalyticsHyderabadCourseData[0].src33}
              ModuleHead1={BusinessAnalyticsHyderabadCourseData[0].ModuleHead1}
              ModuleBot1={BusinessAnalyticsHyderabadCourseData[0].ModuleBot1}
              ModuleBot2={BusinessAnalyticsHyderabadCourseData[0].ModuleBot2}
              ModuleBot3={BusinessAnalyticsHyderabadCourseData[0].ModuleBot3}
              ModuleHead3={BusinessAnalyticsHyderabadCourseData[0].ModuleHead3}
              ModuleBot4={BusinessAnalyticsHyderabadCourseData[0].ModuleBot4}
              syllabush1={BusinessAnalyticsHyderabadCourseData[0].syllabush1}
              syllabusb1={BusinessAnalyticsHyderabadCourseData[0].syllabusb1}
              SyllabusBotlist11={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist16
              }
              syllabush2={BusinessAnalyticsHyderabadCourseData[0].syllabush2}
              syllabusb2={BusinessAnalyticsHyderabadCourseData[0].syllabusb2}
              SyllabusBotlist21={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist26
              }
              syllabush3={BusinessAnalyticsHyderabadCourseData[0].syllabush3}
              syllabusb3={BusinessAnalyticsHyderabadCourseData[0].syllabusb3}
              SyllabusBotlist31={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist36
              }
              syllabush4={BusinessAnalyticsHyderabadCourseData[0].syllabush4}
              syllabusb4={BusinessAnalyticsHyderabadCourseData[0].syllabusb4}
              SyllabusBotlist41={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist46
              }
              syllabussrc={BusinessAnalyticsHyderabadCourseData[0].syllabussrc}
              JobHead1={BusinessAnalyticsHyderabadCourseData[0].JobHead1}
              JobBot1={BusinessAnalyticsHyderabadCourseData[0].JobBot1}
              JobBot2={BusinessAnalyticsHyderabadCourseData[0].JobBot2}
              JobBot5={BusinessAnalyticsHyderabadCourseData[0].JobBot5}
              JobHead2={BusinessAnalyticsHyderabadCourseData[0].JobHead2}
              JobBot3={BusinessAnalyticsHyderabadCourseData[0].JobBot3}
              JobBot4={BusinessAnalyticsHyderabadCourseData[0].JobBot4}
              JobBot6={BusinessAnalyticsHyderabadCourseData[0].JobBot6}
              ProjectsBot1={
                BusinessAnalyticsHyderabadCourseData[0].ProjectsBot1
              }
              ProjectsBot2={
                BusinessAnalyticsHyderabadCourseData[0].ProjectsBot2
              }
              src1={BusinessAnalyticsHyderabadCourseData[0].src1}
              ProjectsH1={BusinessAnalyticsHyderabadCourseData[0].ProjectsH1}
              Projectsp1={BusinessAnalyticsHyderabadCourseData[0].Projectsp1}
              src2={BusinessAnalyticsHyderabadCourseData[0].src2}
              ProjectsH2={BusinessAnalyticsHyderabadCourseData[0].ProjectsH2}
              Projectsp2={BusinessAnalyticsHyderabadCourseData[0].Projectsp2}
              src3={BusinessAnalyticsHyderabadCourseData[0].src3}
              ProjectsH3={BusinessAnalyticsHyderabadCourseData[0].ProjectsH3}
              Projectsp3={BusinessAnalyticsHyderabadCourseData[0].Projectsp3}
              src4={BusinessAnalyticsHyderabadCourseData[0].src4}
              ProjectsH4={BusinessAnalyticsHyderabadCourseData[0].ProjectsH4}
              Projectsp4={BusinessAnalyticsHyderabadCourseData[0].Projectsp4}
              AlumniBot1={BusinessAnalyticsHyderabadCourseData[0].AlumniBot1}
              Asrc1={BusinessAnalyticsHyderabadCourseData[0].Asrc1}
              AlumniH1={BusinessAnalyticsHyderabadCourseData[0].AlumniH1}
              Alumnip1={BusinessAnalyticsHyderabadCourseData[0].Alumnip1}
              Asrc2={BusinessAnalyticsHyderabadCourseData[0].Asrc2}
              AlumniH2={BusinessAnalyticsHyderabadCourseData[0].AlumniH2}
              Alumnip2={BusinessAnalyticsHyderabadCourseData[0].Alumnip2}
              Asrc3={BusinessAnalyticsHyderabadCourseData[0].Asrc3}
              AlumniH3={BusinessAnalyticsHyderabadCourseData[0].AlumniH3}
              Alumnip3={BusinessAnalyticsHyderabadCourseData[0].Alumnip3}
              Asrc4={BusinessAnalyticsHyderabadCourseData[0].Asrc4}
              AlumniH4={BusinessAnalyticsHyderabadCourseData[0].AlumniH4}
              Alumnip4={BusinessAnalyticsHyderabadCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew
                FAQNewData={BusinessAnalyticsHyderabadCourseData[0].faq}
              />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={BusinessAnalyticsHyderabadCourseData[0].CityTextB}
          CityText={BusinessAnalyticsHyderabadCourseData[0].CityText}
          CityTextLB={BusinessAnalyticsHyderabadCourseData[0].CityTextLB}
          CityTextL={BusinessAnalyticsHyderabadCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
