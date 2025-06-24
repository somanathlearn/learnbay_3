import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BAnalystPuneCourseData } from "../../../CityData/Pune/bAnalystCourseData";
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
        <title>Business Analyst Certification Course in Pune - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll Today in Learnbay's Business Analyst Training in Pune for expert teaching and Capstone Projects. Gain valuable skills with IBM Certification."
        />
        <meta
          name="keywords"
          content="Business Analytics course in Pune, Business Analytics training in Pune, Business Analytics institute in Pune, best Business Analytics institute in Pune, Business Analytics course in Pune, Business Analytics certification in Pune, Business Analytics training institute in Pune, advanced Business Analytics course in Pune, Business Analytics course with Placement Assistance, Business Analytics course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/pune/business-analyst-course-training-in-pune"
        />
        <meta
          property="og:title"
          content="Business Analytics Course in pune | Data Science Training in pune"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Business Analytics Course in pune. Learnbay is Advanced Business Analytics Course Training Institute in pune. Business Analytics Course in pune will enhance your career"
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
          content="Business Analytics Course in Pune | Data Science Training in Pune"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Business Analytics Course in Pune. Learnbay is Advanced Business Analytics Course Training Institute in Pune. Business Analytics Course in Pune will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Business Analytics Course in Pune. Learnbay is Advanced Business Analytics Course Training Institute in Pune. Business Analytics Course in Pune will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/pune/business-analyst-course-training-in-pune"
        />
        <meta
          name="copyright"
          content="Learnbay: Business Analyst Courses Certification Training Pune"
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
          titleCourse="Business Analyst Course in Pune"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
          brochurePdf={pdfUrl}
          idss="CHut_wm-P2s"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/manager+header+image.webp"
          firstToparaImg="Training In Pune"
          firstHeading="Business Analyst Course"
          firstTopPara="IBM-Certified Business Analyst training Program with Live Industrial Projects"
          cityParaCont="A tailored course for experienced working experts with certifications from IBM & Microsoft, helping you dream of a rewarding career."
        />
        <SecondSection
          SecondSectionData={BAnalystPuneCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={BAnalystPuneCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 95,000"
            FeeEmi="₹ 6,228/month"
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
              bAnalystAbout={true}
              ProgramBot1={BAnalystPuneCourseData[0].ProgramBot1}
              ProgramBot3={BAnalystPuneCourseData[0].ProgramBot3}
              ProgramBot4={BAnalystPuneCourseData[0].ProgramBot4}
              ProgramBot5={BAnalystPuneCourseData[0].ProgramBot5}
              ProgramHead1={BAnalystPuneCourseData[0].ProgramHead1}
              ProgramBot6={BAnalystPuneCourseData[0].ProgramBot6}
              ProgramHead3={BAnalystPuneCourseData[0].ProgramHead3}
              ProgramBot8={BAnalystPuneCourseData[0].ProgramBot8}
              ProgramHead4={BAnalystPuneCourseData[0].ProgramHead4}
              ProgramBot9={BAnalystPuneCourseData[0].ProgramBot9}
              list1={BAnalystPuneCourseData[0].list1}
              list2={BAnalystPuneCourseData[0].list2}
              list3={BAnalystPuneCourseData[0].list3}
              list4={BAnalystPuneCourseData[0].list4}
              list5={BAnalystPuneCourseData[0].list5}
              ProgramHead2={BAnalystPuneCourseData[0].ProgramHead2}
              ProgramBot7={BAnalystPuneCourseData[0].ProgramBot7}
              list6={BAnalystPuneCourseData[0].list6}
              list7={BAnalystPuneCourseData[0].list7}
              list8={BAnalystPuneCourseData[0].list8}
              list9={BAnalystPuneCourseData[0].list9}
              list10={BAnalystPuneCourseData[0].list10}
              list11={BAnalystPuneCourseData[0].list11}
              list12={BAnalystPuneCourseData[0].list12}
              ProgramBot10={BAnalystPuneCourseData[0].ProgramBot10}
              ProgramBot11={BAnalystPuneCourseData[0].ProgramBot11}
              ProgramBot12={BAnalystPuneCourseData[0].ProgramBot12}
              ProgramBot13={BAnalystPuneCourseData[0].ProgramBot13}
              ProgramHead5={BAnalystPuneCourseData[0].ProgramHead5}
              list13={BAnalystPuneCourseData[0].list13}
              list14={BAnalystPuneCourseData[0].list14}
              list15={BAnalystPuneCourseData[0].list15}
              list16={BAnalystPuneCourseData[0].list16}
              list17={BAnalystPuneCourseData[0].list17}
              ProgramSpan1={BAnalystPuneCourseData[0].ProgramSpan1}
              ProgramSpan2={BAnalystPuneCourseData[0].ProgramSpan2}
              ProgramBot14={BAnalystPuneCourseData[0].ProgramBot14}
              list18={BAnalystPuneCourseData[0].list18}
              list19={BAnalystPuneCourseData[0].list19}
              list20={BAnalystPuneCourseData[0].list20}
              list21={BAnalystPuneCourseData[0].list21}
              list22={BAnalystPuneCourseData[0].list22}
              ProgramBot15={BAnalystPuneCourseData[0].ProgramBot15}
              ProgramBot16={BAnalystPuneCourseData[0].ProgramBot16}
              ProgramBot17={BAnalystPuneCourseData[0].ProgramBot17}
              ProgramBot18={BAnalystPuneCourseData[0].ProgramBot18}
              ProgramBot19={BAnalystPuneCourseData[0].ProgramBot19}
              ProgramBot20={BAnalystPuneCourseData[0].ProgramBot20}
              ProgramBot21={BAnalystPuneCourseData[0].ProgramBot21}
              ProgramBot22={BAnalystPuneCourseData[0].ProgramBot22}
              Courselink1={BAnalystPuneCourseData[0].Courselink1}
              Courselink2={BAnalystPuneCourseData[0].Courselink2}
              Courselink3={BAnalystPuneCourseData[0].Courselink3}
              Courselink4={BAnalystPuneCourseData[0].Courselink4}
              Courselink5={BAnalystPuneCourseData[0].Courselink5}
              Course1={BAnalystPuneCourseData[0].Course1}
              Course2={BAnalystPuneCourseData[0].Course2}
              Course3={BAnalystPuneCourseData[0].Course3}
              Course4={BAnalystPuneCourseData[0].Course4}
              Course5={BAnalystPuneCourseData[0].Course5}
              DomainHead1={BAnalystPuneCourseData[0].DomainHead1}
              DomainBot1={BAnalystPuneCourseData[0].DomainBot1}
              DomainBot2={BAnalystPuneCourseData[0].DomainBot2}
              DomainBot3={BAnalystPuneCourseData[0].DomainBot3}
              DomainList1={BAnalystPuneCourseData[0].DomainList1}
              DomainList2={BAnalystPuneCourseData[0].DomainList2}
              DomainList3={BAnalystPuneCourseData[0].DomainList3}
              DomainList4={BAnalystPuneCourseData[0].DomainList4}
              DomainList5={BAnalystPuneCourseData[0].DomainList5}
              DomainList6={BAnalystPuneCourseData[0].DomainList6}
              DomainList7={BAnalystPuneCourseData[0].DomainList7}
              DomainList8={BAnalystPuneCourseData[0].DomainList8}
              DomainList9={BAnalystPuneCourseData[0].DomainList9}
              DomainList10={BAnalystPuneCourseData[0].DomainList10}
              Domainlink1={BAnalystPuneCourseData[0].Domainlink1}
              Domainlink2={BAnalystPuneCourseData[0].Domainlink2}
              Domainlink3={BAnalystPuneCourseData[0].Domainlink3}
              Domainlink4={BAnalystPuneCourseData[0].Domainlink4}
              Domainlink5={BAnalystPuneCourseData[0].Domainlink5}
              Domainlink6={BAnalystPuneCourseData[0].Domainlink6}
              Domainlink7={BAnalystPuneCourseData[0].Domainlink7}
              Domainlink8={BAnalystPuneCourseData[0].Domainlink8}
              Domainlink9={BAnalystPuneCourseData[0].Domainlink9}
              Domainlink10={BAnalystPuneCourseData[0].Domainlink10}
              // CertificationBot1={BAnalystPuneCourseData[0].CertificationBot1}
              // certificate1={true}

              src={BAnalystPuneCourseData[0].src}
              src22={BAnalystPuneCourseData[0].src22}
              src33={BAnalystPuneCourseData[0].src33}
              ModuleBot1={BAnalystPuneCourseData[0].ModuleBot1}
              ModuleBot2={BAnalystPuneCourseData[0].ModuleBot2}
              syllabush1={BAnalystPuneCourseData[0].syllabush1}
              syllabusb1={BAnalystPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={BAnalystPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={BAnalystPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={BAnalystPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={BAnalystPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={BAnalystPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={BAnalystPuneCourseData[0].SyllabusBotlist16}
              syllabush2={BAnalystPuneCourseData[0].syllabush2}
              syllabusb2={BAnalystPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={BAnalystPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={BAnalystPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={BAnalystPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={BAnalystPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={BAnalystPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={BAnalystPuneCourseData[0].SyllabusBotlist26}
              syllabush3={BAnalystPuneCourseData[0].syllabush3}
              syllabusb3={BAnalystPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={BAnalystPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={BAnalystPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={BAnalystPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={BAnalystPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={BAnalystPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={BAnalystPuneCourseData[0].SyllabusBotlist36}
              syllabush4={BAnalystPuneCourseData[0].syllabush4}
              syllabusb4={BAnalystPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={BAnalystPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={BAnalystPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={BAnalystPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={BAnalystPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={BAnalystPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={BAnalystPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={BAnalystPuneCourseData[0].syllabussrc}
              JobBot1={BAnalystPuneCourseData[0].JobBot1}
              JobHead2={BAnalystPuneCourseData[0].JobHead2}
              JobBot2={BAnalystPuneCourseData[0].JobBot2}
              JobBot3={BAnalystPuneCourseData[0].JobBot3}
              JobBot4={BAnalystPuneCourseData[0].JobBot4}
              JobBot5={BAnalystPuneCourseData[0].JobBot5}
              JobBot6={BAnalystPuneCourseData[0].JobBot6}
              JobBot7={BAnalystPuneCourseData[0].JobBot7}
              JobHead3={BAnalystPuneCourseData[0].JobHead3}
              JobBot8={BAnalystPuneCourseData[0].JobBot8}
              listJob1={BAnalystPuneCourseData[0].listJob1}
              listJob2={BAnalystPuneCourseData[0].listJob2}
              listJob3={BAnalystPuneCourseData[0].listJob3}
              listJob4={BAnalystPuneCourseData[0].listJob4}
              listJob5={BAnalystPuneCourseData[0].listJob5}
              listJob6={BAnalystPuneCourseData[0].listJob6}
              listJob7={BAnalystPuneCourseData[0].listJob7}
              listJob8={BAnalystPuneCourseData[0].listJob8}
              listJob9={BAnalystPuneCourseData[0].listJob9}
              listJob10={BAnalystPuneCourseData[0].listJob10}
              listJob11={BAnalystPuneCourseData[0].listJob11}
              listJob12={BAnalystPuneCourseData[0].listJob12}
              listJob13={BAnalystPuneCourseData[0].listJob13}
              listJob14={BAnalystPuneCourseData[0].listJob14}
              listJob15={BAnalystPuneCourseData[0].listJob15}
              JobBot9={BAnalystPuneCourseData[0].JobBot9}
              JobBot10={BAnalystPuneCourseData[0].JobBot10}
              JobBot11={BAnalystPuneCourseData[0].JobBot11}
              JobBot12={BAnalystPuneCourseData[0].JobBot12}
              JobBot13={BAnalystPuneCourseData[0].JobBot13}
              JobBot14={BAnalystPuneCourseData[0].JobBot14}
              JobBot15={BAnalystPuneCourseData[0].JobBot15}
              JobHead4={BAnalystPuneCourseData[0].JobHead4}
              listJob16={BAnalystPuneCourseData[0].listJob16}
              listJob17={BAnalystPuneCourseData[0].listJob17}
              listJob18={BAnalystPuneCourseData[0].listJob18}
              listJob19={BAnalystPuneCourseData[0].listJob19}
              listJob20={BAnalystPuneCourseData[0].listJob20}
              listJob21={BAnalystPuneCourseData[0].listJob21}
              JobHead5={BAnalystPuneCourseData[0].JobHead5}
              JobHead6={BAnalystPuneCourseData[0].JobHead6}
              JobBot16={BAnalystPuneCourseData[0].JobBot16}
              JobBot17={BAnalystPuneCourseData[0].JobBot17}
              listJob22={BAnalystPuneCourseData[0].listJob22}
              listJob23={BAnalystPuneCourseData[0].listJob23}
              listJob24={BAnalystPuneCourseData[0].listJob24}
              listJob25={BAnalystPuneCourseData[0].listJob25}
              listJob26={BAnalystPuneCourseData[0].listJob26}
              listJob27={BAnalystPuneCourseData[0].listJob27}
              listJob28={BAnalystPuneCourseData[0].listJob28}
              listJob29={BAnalystPuneCourseData[0].listJob29}
              listJob30={BAnalystPuneCourseData[0].listJob30}
              listJob31={BAnalystPuneCourseData[0].listJob31}
              listJob32={BAnalystPuneCourseData[0].listJob32}
              listJob33={BAnalystPuneCourseData[0].listJob33}
              listJob34={BAnalystPuneCourseData[0].listJob34}
              listJob35={BAnalystPuneCourseData[0].listJob35}
              listJob36={BAnalystPuneCourseData[0].listJob36}
              JobHead7={BAnalystPuneCourseData[0].JobHead7}
              JobBot18={BAnalystPuneCourseData[0].JobBot18}
              listJob37={BAnalystPuneCourseData[0].listJob37}
              listJob38={BAnalystPuneCourseData[0].listJob38}
              listJob39={BAnalystPuneCourseData[0].listJob39}
              listJob40={BAnalystPuneCourseData[0].listJob40}
              listJob41={BAnalystPuneCourseData[0].listJob41}
              listJob42={BAnalystPuneCourseData[0].listJob42}
              listJob43={BAnalystPuneCourseData[0].listJob43}
              listJob44={BAnalystPuneCourseData[0].listJob44}
              listJob45={BAnalystPuneCourseData[0].listJob45}
              listJob46={BAnalystPuneCourseData[0].listJob46}
              JobBot19={BAnalystPuneCourseData[0].JobBot19}
              ProjectsBot1={BAnalystPuneCourseData[0].ProjectsBot1}
              ProjectsBot2={BAnalystPuneCourseData[0].ProjectsBot2}
              src1={BAnalystPuneCourseData[0].src1}
              ProjectsH1={BAnalystPuneCourseData[0].ProjectsH1}
              Projectsp1={BAnalystPuneCourseData[0].Projectsp1}
              src2={BAnalystPuneCourseData[0].src2}
              ProjectsH2={BAnalystPuneCourseData[0].ProjectsH2}
              Projectsp2={BAnalystPuneCourseData[0].Projectsp2}
              src3={BAnalystPuneCourseData[0].src3}
              ProjectsH3={BAnalystPuneCourseData[0].ProjectsH3}
              Projectsp3={BAnalystPuneCourseData[0].Projectsp3}
              src4={BAnalystPuneCourseData[0].src4}
              ProjectsH4={BAnalystPuneCourseData[0].ProjectsH4}
              Projectsp4={BAnalystPuneCourseData[0].Projectsp4}
              AlumniBot1={BAnalystPuneCourseData[0].AlumniBot1}
              Asrc1={BAnalystPuneCourseData[0].Asrc1}
              AlumniH1={BAnalystPuneCourseData[0].AlumniH1}
              Alumnip1={BAnalystPuneCourseData[0].Alumnip1}
              Asrc2={BAnalystPuneCourseData[0].Asrc2}
              AlumniH2={BAnalystPuneCourseData[0].AlumniH2}
              Alumnip2={BAnalystPuneCourseData[0].Alumnip2}
              Asrc3={BAnalystPuneCourseData[0].Asrc3}
              AlumniH3={BAnalystPuneCourseData[0].AlumniH3}
              Alumnip3={BAnalystPuneCourseData[0].Alumnip3}
              Asrc4={BAnalystPuneCourseData[0].Asrc4}
              AlumniH4={BAnalystPuneCourseData[0].AlumniH4}
              Alumnip4={BAnalystPuneCourseData[0].Alumnip4}
              alt1={BAnalystPuneCourseData[0].alt1}
              alt2={BAnalystPuneCourseData[0].alt2}
              alt3={BAnalystPuneCourseData[0].alt3}
              alt4={BAnalystPuneCourseData[0].alt4}
              alt5={BAnalystPuneCourseData[0].alt5}
              alt6={BAnalystPuneCourseData[0].alt6}
              alt7={BAnalystPuneCourseData[0].alt7}
              alt8={BAnalystPuneCourseData[0].alt8}
              alt9={BAnalystPuneCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew
                FAQNewData={BAnalystPuneCourseData[0].faq}
                bAnalystAbout={true}
              />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={BAnalystPuneCourseData[0].CityTextB}
          CityText={BAnalystPuneCourseData[0].CityText}
          CityTextLB={BAnalystPuneCourseData[0].CityTextLB}
          CityTextL={BAnalystPuneCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
