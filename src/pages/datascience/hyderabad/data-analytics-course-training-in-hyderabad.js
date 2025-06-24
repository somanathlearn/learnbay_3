import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DataAnalyticsHyderabadCourseData } from "../../../CityData/Hyderabad/dataAnalyticsCourseTrainingInHyderabad";
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
  import("../../../components/Seo/CitiesLeft/CitiesLeftDomain")
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Data-Analytics-Certification.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Best IBM Certified Data Analytics Course in Hyderabad</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your skills with Learnbay's Data Analytics Training in Hyderabad. Designed for professionals seeking practical skills and industry insights. Sign-up Now."
        />
        <meta
          name="keywords"
          content="Data Analytics course in Hyderabad, Data Analytics training in Hyderabad, Data Analytics institute in Hyderabad, best Data Analytics institute in Hyderabad, Data Analytics course in Hyderabad, Data Analytics certification in Hyderabad, Data Analytics training institute in Hyderabad, advanced Data Analytics course in Hyderabad, Data Analytics course with Placement Assistance, Data Analytics course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/hyderabad/data-analytics-course-training-in-hyderabad"
        />
        <meta
          property="og:title"
          content="Data Science Course in Hyderabad | Data Science Training in Hyderabad"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data analytics course in Hyderabad. Learnbay is Data Analytics Course Training Institute in Hyderabad. Data analytics course in Hyderabad will enhance your career"
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
          content="Data analytics course in Hyderabad | Data analytics course in Training in Hyderabad"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/hyderabad/data-analytics-course-training-in-hyderabad"
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
          dataScienceCounselling={true}
          interstedInHide={true}
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          cityParaCont=" Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
          titleCourse="Data Analytics Course Training in Hyderabad"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
          brochurePdf={pdfUrl}
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/data+analytics+header+image.webp"
          firstHeading="Data Analytics Course Training in Hyderabad"
          firstTopPara="First-Track Industrial Training For Early Professionals"
          firstToparaImg="For Professionals"
          idss="y_0IdhFKJKM"
        />
        <SecondSection
          SecondSectionData={DataAnalyticsHyderabadCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DataAnalyticsHyderabadCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹85,000"
            FeeEmi="₹5,572/month"
           weekdaybatch="Weekend Batch"
        weekendbatch="Weekday Batch"
        weekday="SAT - SUN"
        weekend="MON - THU"
        WeekdayDate="19th Jan"
        WeekendDate="3rd Jan"
        WeekendTime="8:00 PM - 10:30 PM"
        WeekdayTime="9:30 AM - 1 PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            dataScience={true}
            titleCourse="Data Analytics Certification Program"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
            brochurePdf={pdfUrl}
            // EMI POPUPDATA
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹85,000"
            monthlyPayment1="₹5,572"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹85,000"
            monthlyPayment2="₹8,358"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextDAhyderabad={true}
              ProgramHead1={DataAnalyticsHyderabadCourseData[0].ProgramHead1}
              ProgramHead2={DataAnalyticsHyderabadCourseData[0].ProgramHead2}
              ProgramBot1={DataAnalyticsHyderabadCourseData[0].ProgramBot1}
              ProgramBot2={DataAnalyticsHyderabadCourseData[0].ProgramBot2}
              ProgramHead3={DataAnalyticsHyderabadCourseData[0].ProgramHead3}
              ProgramBot3={DataAnalyticsHyderabadCourseData[0].ProgramBot3}
              ProgramBot31={DataAnalyticsHyderabadCourseData[0].ProgramBot31}
              ProgramBot32={DataAnalyticsHyderabadCourseData[0].ProgramBot32}
              ProgramHead4={DataAnalyticsHyderabadCourseData[0].ProgramHead4}
              ProgramBot4={DataAnalyticsHyderabadCourseData[0].ProgramBot4}
              ProgramHead5={DataAnalyticsHyderabadCourseData[0].ProgramHead5}
              ProgramBot5={DataAnalyticsHyderabadCourseData[0].ProgramBot5}
              ProgramHead6={DataAnalyticsHyderabadCourseData[0].ProgramHead6}
              ProgramBot6={DataAnalyticsHyderabadCourseData[0].ProgramBot6}
              ProgramHead7={DataAnalyticsHyderabadCourseData[0].ProgramHead7}
              ProgramBot8={DataAnalyticsHyderabadCourseData[0].ProgramBot8}
              ProgramBot9={DataAnalyticsHyderabadCourseData[0].ProgramBot9}
              DomainHead1={DataAnalyticsHyderabadCourseData[0].DomainHead1}
              DomainBot1={DataAnalyticsHyderabadCourseData[0].DomainBot1}
              DomainBot2={DataAnalyticsHyderabadCourseData[0].DomainBot2}
              DomainBot3={DataAnalyticsHyderabadCourseData[0].DomainBot3}
              DomainList1={DataAnalyticsHyderabadCourseData[0].DomainList1}
              DomainList2={DataAnalyticsHyderabadCourseData[0].DomainList2}
              DomainList3={DataAnalyticsHyderabadCourseData[0].DomainList3}
              DomainList4={DataAnalyticsHyderabadCourseData[0].DomainList4}
              DomainList5={DataAnalyticsHyderabadCourseData[0].DomainList5}
              DomainList6={DataAnalyticsHyderabadCourseData[0].DomainList6}
              DomainList7={DataAnalyticsHyderabadCourseData[0].DomainList7}
              DomainList8={DataAnalyticsHyderabadCourseData[0].DomainList8}
              DomainList9={DataAnalyticsHyderabadCourseData[0].DomainList9}
              DomainList10={DataAnalyticsHyderabadCourseData[0].DomainList10}
              Domainlink1={DataAnalyticsHyderabadCourseData[0].Domainlink1}
              Domainlink2={DataAnalyticsHyderabadCourseData[0].Domainlink2}
              Domainlink3={DataAnalyticsHyderabadCourseData[0].Domainlink3}
              Domainlink4={DataAnalyticsHyderabadCourseData[0].Domainlink4}
              Domainlink5={DataAnalyticsHyderabadCourseData[0].Domainlink5}
              Domainlink6={DataAnalyticsHyderabadCourseData[0].Domainlink6}
              Domainlink7={DataAnalyticsHyderabadCourseData[0].Domainlink7}
              Domainlink8={DataAnalyticsHyderabadCourseData[0].Domainlink8}
              Domainlink9={DataAnalyticsHyderabadCourseData[0].Domainlink9}
              Domainlink10={DataAnalyticsHyderabadCourseData[0].Domainlink10}
              CertificationHead1={
                DataAnalyticsHyderabadCourseData[0].CertificationHead1
              }
              CertificationBot1={
                DataAnalyticsHyderabadCourseData[0].CertificationBot1
              }
              CertificationBot2={
                DataAnalyticsHyderabadCourseData[0].CertificationBot2
              }
              src={DataAnalyticsHyderabadCourseData[0].src}
              src22={DataAnalyticsHyderabadCourseData[0].src22}
              ModuleHead1={DataAnalyticsHyderabadCourseData[0].ModuleHead1}
              ModuleBot1={DataAnalyticsHyderabadCourseData[0].ModuleBot1}
              ModuleBot2={DataAnalyticsHyderabadCourseData[0].ModuleBot2}
              ModuleBot3={DataAnalyticsHyderabadCourseData[0].ModuleBot3}
              syllabush1={DataAnalyticsHyderabadCourseData[0].syllabush1}
              syllabusb1={DataAnalyticsHyderabadCourseData[0].syllabusb1}
              SyllabusBotlist11={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist16
              }
              syllabush2={DataAnalyticsHyderabadCourseData[0].syllabush2}
              syllabusb2={DataAnalyticsHyderabadCourseData[0].syllabusb2}
              SyllabusBotlist21={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist26
              }
              syllabush3={DataAnalyticsHyderabadCourseData[0].syllabush3}
              syllabusb3={DataAnalyticsHyderabadCourseData[0].syllabusb3}
              SyllabusBotlist31={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist36
              }
              syllabush4={DataAnalyticsHyderabadCourseData[0].syllabush4}
              syllabusb4={DataAnalyticsHyderabadCourseData[0].syllabusb4}
              SyllabusBotlist41={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                DataAnalyticsHyderabadCourseData[0].SyllabusBotlist46
              }
              syllabussrc={DataAnalyticsHyderabadCourseData[0].syllabussrc}
              JobHead1={DataAnalyticsHyderabadCourseData[0].JobHead1}
              JobBot1={DataAnalyticsHyderabadCourseData[0].JobBot1}
              JobBot2={DataAnalyticsHyderabadCourseData[0].JobBot2}
              JobBot5={DataAnalyticsHyderabadCourseData[0].JobBot5}
              JobHead2={DataAnalyticsHyderabadCourseData[0].JobHead2}
              JobBot3={DataAnalyticsHyderabadCourseData[0].JobBot3}
              JobBot4={DataAnalyticsHyderabadCourseData[0].JobBot4}
              JobBot6={DataAnalyticsHyderabadCourseData[0].JobBot6}
              ProjectsBot1={DataAnalyticsHyderabadCourseData[0].ProjectsBot1}
              ProjectsBot2={DataAnalyticsHyderabadCourseData[0].ProjectsBot2}
              src1={DataAnalyticsHyderabadCourseData[0].src1}
              ProjectsH1={DataAnalyticsHyderabadCourseData[0].ProjectsH1}
              Projectsp1={DataAnalyticsHyderabadCourseData[0].Projectsp1}
              src2={DataAnalyticsHyderabadCourseData[0].src2}
              ProjectsH2={DataAnalyticsHyderabadCourseData[0].ProjectsH2}
              Projectsp2={DataAnalyticsHyderabadCourseData[0].Projectsp2}
              src3={DataAnalyticsHyderabadCourseData[0].src3}
              ProjectsH3={DataAnalyticsHyderabadCourseData[0].ProjectsH3}
              Projectsp3={DataAnalyticsHyderabadCourseData[0].Projectsp3}
              src4={DataAnalyticsHyderabadCourseData[0].src4}
              ProjectsH4={DataAnalyticsHyderabadCourseData[0].ProjectsH4}
              Projectsp4={DataAnalyticsHyderabadCourseData[0].Projectsp4}
              AlumniBot1={DataAnalyticsHyderabadCourseData[0].AlumniBot1}
              Asrc1={DataAnalyticsHyderabadCourseData[0].Asrc1}
              AlumniH1={DataAnalyticsHyderabadCourseData[0].AlumniH1}
              Alumnip1={DataAnalyticsHyderabadCourseData[0].Alumnip1}
              Asrc2={DataAnalyticsHyderabadCourseData[0].Asrc2}
              AlumniH2={DataAnalyticsHyderabadCourseData[0].AlumniH2}
              Alumnip2={DataAnalyticsHyderabadCourseData[0].Alumnip2}
              Asrc3={DataAnalyticsHyderabadCourseData[0].Asrc3}
              AlumniH3={DataAnalyticsHyderabadCourseData[0].AlumniH3}
              Alumnip3={DataAnalyticsHyderabadCourseData[0].Alumnip3}
              Asrc4={DataAnalyticsHyderabadCourseData[0].Asrc4}
              AlumniH4={DataAnalyticsHyderabadCourseData[0].AlumniH4}
              Alumnip4={DataAnalyticsHyderabadCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DataAnalyticsHyderabadCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DataAnalyticsHyderabadCourseData[0].CityTextB}
          CityText={DataAnalyticsHyderabadCourseData[0].CityText}
          CityTextLB={DataAnalyticsHyderabadCourseData[0].CityTextLB}
          CityTextL={DataAnalyticsHyderabadCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
