import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DAnalystPuneCourseData } from "../../../CityData/Pune/DAnalystCourseData";
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
        <title>Data Analyst Certification Course in Pune - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Unlock your potential with Learnbay's Data Analyst course in Pune. Gain hands-on experience on tools like NumPy, Pandas, MongoDB, Hadoop, etc."
        />
        <meta
          name="keywords"
          content="data analyst course in Pune with placement, data analyst course with placement in Pune, data analyst institute in Pune, data analyst course in Pune offline, data analyst offline course in Pune, data analyst course institute in Pune, data analytics institute in Pune, data analysis classes in Pune, data analyst certification in Pune, data analysis course fees in Pune"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/pune/data-analyst-course-training-in-pune"
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
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
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
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
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
          titleCourse="Data Analyst Course in Pune"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
          brochurePdf={pdfUrl}
          idss="y_0IdhFKJKM"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/data+analytics+header+image.webp"
          firstToparaImg="Training In Pune"
          firstHeading="Data Analyst"
          firstTopPara="Industrial Training Program for Early-professional"
          cityParaCont="A specially crafted module for aspirants with IBM certifications, preparing you for a golden data analyst position."
        />
        <SecondSection
          SecondSectionData={DAnalystPuneCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DAnalystPuneCourseData[0].testimonial}
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
              DAnalyst={true}
              ProgramBot1={DAnalystPuneCourseData[0].ProgramBot1}
              ProgramBot2={DAnalystPuneCourseData[0].ProgramBot2}
              ProgramBot3={DAnalystPuneCourseData[0].ProgramBot3}
              ProgramBot4={DAnalystPuneCourseData[0].ProgramBot4}
              ProgramBot5={DAnalystPuneCourseData[0].ProgramBot5}
              ProgramHead1={DAnalystPuneCourseData[0].ProgramHead1}
              ProgramBot6={DAnalystPuneCourseData[0].ProgramBot6}
              ProgramHead3={DAnalystPuneCourseData[0].ProgramHead3}
              ProgramBot8={DAnalystPuneCourseData[0].ProgramBot8}
              ProgramHead4={DAnalystPuneCourseData[0].ProgramHead4}
              ProgramBot9={DAnalystPuneCourseData[0].ProgramBot9}
              list1={DAnalystPuneCourseData[0].list1}
              list2={DAnalystPuneCourseData[0].list2}
              list3={DAnalystPuneCourseData[0].list3}
              list4={DAnalystPuneCourseData[0].list4}
              list5={DAnalystPuneCourseData[0].list5}
              list27={DAnalystPuneCourseData[0].list27}
              ProgramHead2={DAnalystPuneCourseData[0].ProgramHead2}
              ProgramBot7={DAnalystPuneCourseData[0].ProgramBot7}
              list6={DAnalystPuneCourseData[0].list6}
              list7={DAnalystPuneCourseData[0].list7}
              list8={DAnalystPuneCourseData[0].list8}
              list9={DAnalystPuneCourseData[0].list9}
              list10={DAnalystPuneCourseData[0].list10}
              list11={DAnalystPuneCourseData[0].list11}
              list12={DAnalystPuneCourseData[0].list12}
              list30={DAnalystPuneCourseData[0].list30}
              list31={DAnalystPuneCourseData[0].list31}
              ProgramBot30={DAnalystPuneCourseData[0].ProgramBot30}
              ProgramBot31={DAnalystPuneCourseData[0].ProgramBot31}
              ProgramBot32={DAnalystPuneCourseData[0].ProgramBot32}
              ProgramBot10={DAnalystPuneCourseData[0].ProgramBot10}
              ProgramSpan4={DAnalystPuneCourseData[0].ProgramSpan4}
              ProgramBot11={DAnalystPuneCourseData[0].ProgramBot11}
              ProgramBot12={DAnalystPuneCourseData[0].ProgramBot12}
              ProgramBot13={DAnalystPuneCourseData[0].ProgramBot13}
              ProgramHead5={DAnalystPuneCourseData[0].ProgramHead5}
              list13={DAnalystPuneCourseData[0].list13}
              list14={DAnalystPuneCourseData[0].list14}
              list15={DAnalystPuneCourseData[0].list15}
              list16={DAnalystPuneCourseData[0].list16}
              list17={DAnalystPuneCourseData[0].list17}
              ProgramSpan1={DAnalystPuneCourseData[0].ProgramSpan1}
              ProgramSpan2={DAnalystPuneCourseData[0].ProgramSpan2}
              ProgramBot14={DAnalystPuneCourseData[0].ProgramBot14}
              list18={DAnalystPuneCourseData[0].list18}
              list19={DAnalystPuneCourseData[0].list19}
              list20={DAnalystPuneCourseData[0].list20}
              list21={DAnalystPuneCourseData[0].list21}
              list22={DAnalystPuneCourseData[0].list22}
              ProgramBot15={DAnalystPuneCourseData[0].ProgramBot15}
              ProgramBot16={DAnalystPuneCourseData[0].ProgramBot16}
              ProgramBot17={DAnalystPuneCourseData[0].ProgramBot17}
              ProgramBot18={DAnalystPuneCourseData[0].ProgramBot18}
              ProgramBot19={DAnalystPuneCourseData[0].ProgramBot19}
              ProgramBot20={DAnalystPuneCourseData[0].ProgramBot20}
              ProgramBot21={DAnalystPuneCourseData[0].ProgramBot21}
              ProgramBot22={DAnalystPuneCourseData[0].ProgramBot22}
              ProgramBot23={DAnalystPuneCourseData[0].ProgramBot23}
              Courselink1={DAnalystPuneCourseData[0].Courselink1}
              Courselink2={DAnalystPuneCourseData[0].Courselink2}
              Courselink3={DAnalystPuneCourseData[0].Courselink3}
              Courselink4={DAnalystPuneCourseData[0].Courselink4}
              Courselink5={DAnalystPuneCourseData[0].Courselink5}
              Course1={DAnalystPuneCourseData[0].Course1}
              Course2={DAnalystPuneCourseData[0].Course2}
              Course3={DAnalystPuneCourseData[0].Course3}
              Course4={DAnalystPuneCourseData[0].Course4}
              Course5={DAnalystPuneCourseData[0].Course5}
              DomainHead1={DAnalystPuneCourseData[0].DomainHead1}
              DomainBot1={DAnalystPuneCourseData[0].DomainBot1}
              DomainBot2={DAnalystPuneCourseData[0].DomainBot2}
              DomainBot3={DAnalystPuneCourseData[0].DomainBot3}
              DomainList1={DAnalystPuneCourseData[0].DomainList1}
              DomainList2={DAnalystPuneCourseData[0].DomainList2}
              DomainList3={DAnalystPuneCourseData[0].DomainList3}
              DomainList4={DAnalystPuneCourseData[0].DomainList4}
              DomainList5={DAnalystPuneCourseData[0].DomainList5}
              DomainList6={DAnalystPuneCourseData[0].DomainList6}
              DomainList7={DAnalystPuneCourseData[0].DomainList7}
              DomainList8={DAnalystPuneCourseData[0].DomainList8}
              DomainList9={DAnalystPuneCourseData[0].DomainList9}
              DomainList10={DAnalystPuneCourseData[0].DomainList10}
              Domainlink1={DAnalystPuneCourseData[0].Domainlink1}
              Domainlink2={DAnalystPuneCourseData[0].Domainlink2}
              Domainlink3={DAnalystPuneCourseData[0].Domainlink3}
              Domainlink4={DAnalystPuneCourseData[0].Domainlink4}
              Domainlink5={DAnalystPuneCourseData[0].Domainlink5}
              Domainlink6={DAnalystPuneCourseData[0].Domainlink6}
              Domainlink7={DAnalystPuneCourseData[0].Domainlink7}
              Domainlink8={DAnalystPuneCourseData[0].Domainlink8}
              Domainlink9={DAnalystPuneCourseData[0].Domainlink9}
              Domainlink10={DAnalystPuneCourseData[0].Domainlink10}
              // CertificationBot1={DAnalystPuneCourseData[0].CertificationBot1}
              // certificate1={true}

              src={DAnalystPuneCourseData[0].src}
              src22={DAnalystPuneCourseData[0].src22}
              src33={DAnalystPuneCourseData[0].src33}
              ModuleBot1={DAnalystPuneCourseData[0].ModuleBot1}
              ModuleBot2={DAnalystPuneCourseData[0].ModuleBot2}
              syllabush1={DAnalystPuneCourseData[0].syllabush1}
              syllabusb1={DAnalystPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={DAnalystPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DAnalystPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DAnalystPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DAnalystPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DAnalystPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DAnalystPuneCourseData[0].SyllabusBotlist16}
              syllabush2={DAnalystPuneCourseData[0].syllabush2}
              syllabusb2={DAnalystPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={DAnalystPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DAnalystPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DAnalystPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DAnalystPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DAnalystPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DAnalystPuneCourseData[0].SyllabusBotlist26}
              syllabush3={DAnalystPuneCourseData[0].syllabush3}
              syllabusb3={DAnalystPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={DAnalystPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DAnalystPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DAnalystPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DAnalystPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DAnalystPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DAnalystPuneCourseData[0].SyllabusBotlist36}
              syllabush4={DAnalystPuneCourseData[0].syllabush4}
              syllabusb4={DAnalystPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={DAnalystPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DAnalystPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DAnalystPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DAnalystPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DAnalystPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DAnalystPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={DAnalystPuneCourseData[0].syllabussrc}
              JobBot1={DAnalystPuneCourseData[0].JobBot1}
              JobHead40={DAnalystPuneCourseData[0].JobHead40}
              JobBot2={DAnalystPuneCourseData[0].JobBot2}
              JobBot41={DAnalystPuneCourseData[0].JobBot41}
              JobBot42={DAnalystPuneCourseData[0].JobBot42}
              JobBo43={DAnalystPuneCourseData[0].JobBot43}
              JobBot44={DAnalystPuneCourseData[0].JobBot44}
              JobBot45={DAnalystPuneCourseData[0].JobBot45}
              JobBot46={DAnalystPuneCourseData[0].JobBot46}
              JobBot47={DAnalystPuneCourseData[0].JobBot47}
              JobBot48={DAnalystPuneCourseData[0].JobBot48}
              JobBot49={DAnalystPuneCourseData[0].JobBot49}
              JobHead3={DAnalystPuneCourseData[0].JobHead3}
              JobBot50={DAnalystPuneCourseData[0].JobBot50}
              listJob1={DAnalystPuneCourseData[0].listJob1}
              listJob2={DAnalystPuneCourseData[0].listJob2}
              listJob3={DAnalystPuneCourseData[0].listJob3}
              listJob4={DAnalystPuneCourseData[0].listJob4}
              listJob5={DAnalystPuneCourseData[0].listJob5}
              listJob6={DAnalystPuneCourseData[0].listJob6}
              listJob7={DAnalystPuneCourseData[0].listJob7}
              listJob8={DAnalystPuneCourseData[0].listJob8}
              listJob9={DAnalystPuneCourseData[0].listJob9}
              listJob10={DAnalystPuneCourseData[0].listJob10}
              listJob11={DAnalystPuneCourseData[0].listJob11}
              listJob12={DAnalystPuneCourseData[0].listJob12}
              listJob13={DAnalystPuneCourseData[0].listJob13}
              listJob14={DAnalystPuneCourseData[0].listJob14}
              listJob15={DAnalystPuneCourseData[0].listJob15}
              JobBot9={DAnalystPuneCourseData[0].JobBot9}
              JobBot10={DAnalystPuneCourseData[0].JobBot10}
              JobBot11={DAnalystPuneCourseData[0].JobBot11}
              JobBot12={DAnalystPuneCourseData[0].JobBot12}
              JobBot13={DAnalystPuneCourseData[0].JobBot13}
              JobBot14={DAnalystPuneCourseData[0].JobBot14}
              JobBot15={DAnalystPuneCourseData[0].JobBot15}
              JobHead4={DAnalystPuneCourseData[0].JobHead4}
              JobList1={DAnalystPuneCourseData[0].JobList1}
              JobList2={DAnalystPuneCourseData[0].JobList2}
              JobList3={DAnalystPuneCourseData[0].JobList3}
              JobList4={DAnalystPuneCourseData[0].JobList4}
              JobList5={DAnalystPuneCourseData[0].JobList5}
              listJob16={DAnalystPuneCourseData[0].listJob16}
              JobList6={DAnalystPuneCourseData[0].JobList6}
              JobList7={DAnalystPuneCourseData[0].JobList7}
              JobList8={DAnalystPuneCourseData[0].JobList8}
              JobList9={DAnalystPuneCourseData[0].JobList9}
              JobList10={DAnalystPuneCourseData[0].JobList10}
              JobBot21={DAnalystPuneCourseData[0].JobBot21}
              JobBot22={DAnalystPuneCourseData[0].JobBot22}
              JobBot23={DAnalystPuneCourseData[0].JobBot23}
              listJob17={DAnalystPuneCourseData[0].listJob17}
              listJob18={DAnalystPuneCourseData[0].listJob18}
              listJob19={DAnalystPuneCourseData[0].listJob19}
              listJob20={DAnalystPuneCourseData[0].listJob20}
              listJob21={DAnalystPuneCourseData[0].listJob21}
              JobHead5={DAnalystPuneCourseData[0].JobHead5}
              JobHead6={DAnalystPuneCourseData[0].JobHead6}
              JobBot16={DAnalystPuneCourseData[0].JobBot16}
              JobBot17={DAnalystPuneCourseData[0].JobBot17}
              listJob22={DAnalystPuneCourseData[0].listJob22}
              listJob23={DAnalystPuneCourseData[0].listJob23}
              listJob24={DAnalystPuneCourseData[0].listJob24}
              listJob25={DAnalystPuneCourseData[0].listJob25}
              listJob26={DAnalystPuneCourseData[0].listJob26}
              listJob27={DAnalystPuneCourseData[0].listJob27}
              listJob28={DAnalystPuneCourseData[0].listJob28}
              listJob29={DAnalystPuneCourseData[0].listJob29}
              listJob30={DAnalystPuneCourseData[0].listJob30}
              listJob31={DAnalystPuneCourseData[0].listJob31}
              listJob32={DAnalystPuneCourseData[0].listJob32}
              listJob33={DAnalystPuneCourseData[0].listJob33}
              listJob34={DAnalystPuneCourseData[0].listJob34}
              listJob35={DAnalystPuneCourseData[0].listJob35}
              listJob36={DAnalystPuneCourseData[0].listJob36}
              JobHead7={DAnalystPuneCourseData[0].JobHead7}
              JobBot18={DAnalystPuneCourseData[0].JobBot18}
              listJob37={DAnalystPuneCourseData[0].listJob37}
              listJob38={DAnalystPuneCourseData[0].listJob38}
              listJob39={DAnalystPuneCourseData[0].listJob39}
              listJob40={DAnalystPuneCourseData[0].listJob40}
              listJob41={DAnalystPuneCourseData[0].listJob41}
              listJob42={DAnalystPuneCourseData[0].listJob42}
              listJob43={DAnalystPuneCourseData[0].listJob43}
              listJob44={DAnalystPuneCourseData[0].listJob44}
              listJob45={DAnalystPuneCourseData[0].listJob45}
              listJob46={DAnalystPuneCourseData[0].listJob46}
              JobBot19={DAnalystPuneCourseData[0].JobBot19}
              JobBot20={DAnalystPuneCourseData[0].JobBot20}
              ProjectsBot1={DAnalystPuneCourseData[0].ProjectsBot1}
              ProjectsBot2={DAnalystPuneCourseData[0].ProjectsBot2}
              src1={DAnalystPuneCourseData[0].src1}
              ProjectsH1={DAnalystPuneCourseData[0].ProjectsH1}
              Projectsp1={DAnalystPuneCourseData[0].Projectsp1}
              src2={DAnalystPuneCourseData[0].src2}
              ProjectsH2={DAnalystPuneCourseData[0].ProjectsH2}
              Projectsp2={DAnalystPuneCourseData[0].Projectsp2}
              src3={DAnalystPuneCourseData[0].src3}
              ProjectsH3={DAnalystPuneCourseData[0].ProjectsH3}
              Projectsp3={DAnalystPuneCourseData[0].Projectsp3}
              src4={DAnalystPuneCourseData[0].src4}
              ProjectsH4={DAnalystPuneCourseData[0].ProjectsH4}
              Projectsp4={DAnalystPuneCourseData[0].Projectsp4}
              AlumniBot1={DAnalystPuneCourseData[0].AlumniBot1}
              Asrc1={DAnalystPuneCourseData[0].Asrc1}
              AlumniH1={DAnalystPuneCourseData[0].AlumniH1}
              Alumnip1={DAnalystPuneCourseData[0].Alumnip1}
              Asrc2={DAnalystPuneCourseData[0].Asrc2}
              AlumniH2={DAnalystPuneCourseData[0].AlumniH2}
              Alumnip2={DAnalystPuneCourseData[0].Alumnip2}
              Asrc3={DAnalystPuneCourseData[0].Asrc3}
              AlumniH3={DAnalystPuneCourseData[0].AlumniH3}
              Alumnip3={DAnalystPuneCourseData[0].Alumnip3}
              Asrc4={DAnalystPuneCourseData[0].Asrc4}
              AlumniH4={DAnalystPuneCourseData[0].AlumniH4}
              Alumnip4={DAnalystPuneCourseData[0].Alumnip4}
              alt1={DAnalystPuneCourseData[0].alt1}
              alt2={DAnalystPuneCourseData[0].alt2}
              alt3={DAnalystPuneCourseData[0].alt3}
              alt4={DAnalystPuneCourseData[0].alt4}
              alt5={DAnalystPuneCourseData[0].alt5}
              alt6={DAnalystPuneCourseData[0].alt6}
              alt7={DAnalystPuneCourseData[0].alt7}
              alt8={DAnalystPuneCourseData[0].alt8}
              alt9={DAnalystPuneCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew
                FAQNewData={DAnalystPuneCourseData[0].faq}
                bAnalystAbout={true}
              />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DAnalystPuneCourseData[0].CityTextB}
          CityText={DAnalystPuneCourseData[0].CityText}
          CityTextLB={DAnalystPuneCourseData[0].CityTextLB}
          CityTextL={DAnalystPuneCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
