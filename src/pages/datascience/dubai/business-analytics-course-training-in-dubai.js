import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BADubaiCourseData } from "../../../CityData/Dubai/businessAnalyticsCourseTrainingDubaiData";
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Business-Analytics-Program.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Business Analyst Course in Dubai with IBM Certification</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll now in Learnbay's Business Analytics Training in Dubai and Gain Essential Skills from Industry Experts. Don't miss out on this opportunity. Enroll Now."
        />
        <meta
          name="keywords"
          content="Business Analytics course in Dubai, Business Analytics training in Dubai, Business Analytics institute in Dubai, best Business Analytics institute in Dubai, Business Analytics course in Dubai, Business Analytics certification in Dubai, Business Analytics training institute in Dubai, advanced Business Analytics course in Dubai, Business Analytics course with Placement Assistance, Business Analytics course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/dubai/business-analytics-course-training-in-dubai"
        />
        <meta
          property="og:title"
          content="Business Analytics Course in Dubai | Data Science Training in Dubai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Business Analytics Course in Dubai. Learnbay is Advanced Business Analytics Course Training Institute in Dubai. Business Analytics Course in Dubai will enhance your career"
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Business Analytics Course in Dubai | Data Science Training in Dubai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Business Analytics Course in Dubai. Learnbay is Advanced Business Analytics Course Training Institute in Dubai. Business Analytics Course in Dubai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Business Analytics Course in Dubai. Learnbay is Advanced Business Analytics Course Training Institute in Dubai. Business Analytics Course in Dubai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/dubai/business-analytics-course-training-in-dubai"
        />
        <meta
          name="copyright"
          content="Learnbay: Business Analytics Courses Certification Training Dubai"
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
          dataScience={true}
          interstedInHide={true}
          titleCourse="Business Analytics Master Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
          brochurePdf={pdfUrl}
          idss="CHut_wm-P2s"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/manager+header+image.webp"
          firstToparaImg="For Non-tech Professionals"
          firstHeading="Business Analytics Course Training in Dubai"
          firstTopPara="Industrial program for working professionals"
          cityParaCont="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future."
        />
        <SecondSection SecondSectionData={BADubaiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={BADubaiCourseData[0].testimonial}
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
              ProgramHead1={BADubaiCourseData[0].ProgramHead1}
              ProgramBot1={BADubaiCourseData[0].ProgramBot1}
              ProgramHead3={BADubaiCourseData[0].ProgramHead3}
              ProgramBot3={BADubaiCourseData[0].ProgramBot3}
              ProgramBot31={BADubaiCourseData[0].ProgramBot31}
              ProgramBot32={BADubaiCourseData[0].ProgramBot32}
              ProgramBot4={BADubaiCourseData[0].ProgramBot4}
              ProgramBot5={BADubaiCourseData[0].ProgramBot5}
              ProgramBot6={BADubaiCourseData[0].ProgramBot6}
              Courselink1={BADubaiCourseData[0].Courselink1}
              Courselink2={BADubaiCourseData[0].Courselink2}
              Courselink3={BADubaiCourseData[0].Courselink3}
              Courselink4={BADubaiCourseData[0].Courselink4}
              Courselink5={BADubaiCourseData[0].Courselink5}
              Course1={BADubaiCourseData[0].Course1}
              Course2={BADubaiCourseData[0].Course2}
              Course3={BADubaiCourseData[0].Course3}
              Course4={BADubaiCourseData[0].Course4}
              Course5={BADubaiCourseData[0].Course5}
              DomainHead1={BADubaiCourseData[0].DomainHead1}
              DomainBot1={BADubaiCourseData[0].DomainBot1}
              DomainBot2={BADubaiCourseData[0].DomainBot2}
              DomainBot3={BADubaiCourseData[0].DomainBot3}
              DomainList1={BADubaiCourseData[0].DomainList1}
              DomainList2={BADubaiCourseData[0].DomainList2}
              DomainList3={BADubaiCourseData[0].DomainList3}
              DomainList4={BADubaiCourseData[0].DomainList4}
              DomainList5={BADubaiCourseData[0].DomainList5}
              DomainList6={BADubaiCourseData[0].DomainList6}
              DomainList7={BADubaiCourseData[0].DomainList7}
              DomainList8={BADubaiCourseData[0].DomainList8}
              DomainList9={BADubaiCourseData[0].DomainList9}
              DomainList10={BADubaiCourseData[0].DomainList10}
              Domainlink1={BADubaiCourseData[0].Domainlink1}
              Domainlink2={BADubaiCourseData[0].Domainlink2}
              Domainlink3={BADubaiCourseData[0].Domainlink3}
              Domainlink4={BADubaiCourseData[0].Domainlink4}
              Domainlink5={BADubaiCourseData[0].Domainlink5}
              Domainlink6={BADubaiCourseData[0].Domainlink6}
              Domainlink7={BADubaiCourseData[0].Domainlink7}
              Domainlink8={BADubaiCourseData[0].Domainlink8}
              Domainlink9={BADubaiCourseData[0].Domainlink9}
              Domainlink10={BADubaiCourseData[0].Domainlink10}
              CertificationBot1={BADubaiCourseData[0].CertificationBot1}
              CertificationBot2={BADubaiCourseData[0].CertificationBot2}
              src={BADubaiCourseData[0].src}
              src22={BADubaiCourseData[0].src22}
              src33={BADubaiCourseData[0].src33}
              ModuleBot1={BADubaiCourseData[0].ModuleBot1}
              ModuleBot2={BADubaiCourseData[0].ModuleBot2}
              ModuleBot3={BADubaiCourseData[0].ModuleBot3}
              ModuleHead3={BADubaiCourseData[0].ModuleHead3}
              ModuleBot4={BADubaiCourseData[0].ModuleBot4}
              syllabush1={BADubaiCourseData[0].syllabush1}
              syllabusb1={BADubaiCourseData[0].syllabusb1}
              SyllabusBotlist11={BADubaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={BADubaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={BADubaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={BADubaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={BADubaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={BADubaiCourseData[0].SyllabusBotlist16}
              syllabush2={BADubaiCourseData[0].syllabush2}
              syllabusb2={BADubaiCourseData[0].syllabusb2}
              SyllabusBotlist21={BADubaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={BADubaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={BADubaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={BADubaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={BADubaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={BADubaiCourseData[0].SyllabusBotlist26}
              syllabush3={BADubaiCourseData[0].syllabush3}
              syllabusb3={BADubaiCourseData[0].syllabusb3}
              SyllabusBotlist31={BADubaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={BADubaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={BADubaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={BADubaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={BADubaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={BADubaiCourseData[0].SyllabusBotlist36}
              syllabush4={BADubaiCourseData[0].syllabush4}
              syllabusb4={BADubaiCourseData[0].syllabusb4}
              SyllabusBotlist41={BADubaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={BADubaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={BADubaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={BADubaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={BADubaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={BADubaiCourseData[0].SyllabusBotlist46}
              syllabussrc={BADubaiCourseData[0].syllabussrc}
              JobHead1={BADubaiCourseData[0].JobHead1}
              JobBot1={BADubaiCourseData[0].JobBot1}
              JobHead2={BADubaiCourseData[0].JobHead2}
              JobBot3={BADubaiCourseData[0].JobBot3}
              JobBot4={BADubaiCourseData[0].JobBot4}
              JobBot5={BADubaiCourseData[0].JobBot5}
              ProjectsBot1={BADubaiCourseData[0].ProjectsBot1}
              ProjectsBot2={BADubaiCourseData[0].ProjectsBot2}
              src1={BADubaiCourseData[0].src1}
              ProjectsH1={BADubaiCourseData[0].ProjectsH1}
              Projectsp1={BADubaiCourseData[0].Projectsp1}
              src2={BADubaiCourseData[0].src2}
              ProjectsH2={BADubaiCourseData[0].ProjectsH2}
              Projectsp2={BADubaiCourseData[0].Projectsp2}
              src3={BADubaiCourseData[0].src3}
              ProjectsH3={BADubaiCourseData[0].ProjectsH3}
              Projectsp3={BADubaiCourseData[0].Projectsp3}
              src4={BADubaiCourseData[0].src4}
              ProjectsH4={BADubaiCourseData[0].ProjectsH4}
              Projectsp4={BADubaiCourseData[0].Projectsp4}
              AlumniBot1={BADubaiCourseData[0].AlumniBot1}
              Asrc1={BADubaiCourseData[0].Asrc1}
              AlumniH1={BADubaiCourseData[0].AlumniH1}
              Alumnip1={BADubaiCourseData[0].Alumnip1}
              Asrc2={BADubaiCourseData[0].Asrc2}
              AlumniH2={BADubaiCourseData[0].AlumniH2}
              Alumnip2={BADubaiCourseData[0].Alumnip2}
              Asrc3={BADubaiCourseData[0].Asrc3}
              AlumniH3={BADubaiCourseData[0].AlumniH3}
              Alumnip3={BADubaiCourseData[0].Alumnip3}
              Asrc4={BADubaiCourseData[0].Asrc4}
              AlumniH4={BADubaiCourseData[0].AlumniH4}
              Alumnip4={BADubaiCourseData[0].Alumnip4}
              alt1={BADubaiCourseData[0].alt1}
              alt2={BADubaiCourseData[0].alt2}
              alt3={BADubaiCourseData[0].alt3}
              alt4={BADubaiCourseData[0].alt4}
              alt5={BADubaiCourseData[0].alt5}
              alt6={BADubaiCourseData[0].alt6}
              alt7={BADubaiCourseData[0].alt7}
              alt8={BADubaiCourseData[0].alt8}
              alt9={BADubaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={BADubaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={BADubaiCourseData[0].CityTextB}
          CityText={BADubaiCourseData[0].CityText}
          CityTextLB={BADubaiCourseData[0].CityTextLB}
          CityTextL={BADubaiCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
