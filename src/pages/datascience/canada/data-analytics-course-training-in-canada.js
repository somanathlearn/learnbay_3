import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DAcanadaCourseData } from "../../../CityData/Canada/DataAnalyticsCourseTrainingCanada";
import FeeSection from "../../../components/CoursePage/FeeSection/FeeSection";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Navbar from "../../../components/Global/Navbar/Navbar";
import Popup from "../../../components/Global/Popup/Popup";
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
        <title>Data Analytics Certification Course in Canada - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in Most Advanced Data Analytics Course in Canada for working professionals offered by Learnbay with Assured Placement Assistance."
        />
        <meta
          name="keywords"
          content="Data Analytics course in Canada, Data Analytics training in Canada, Data Analytics institute in Canada, best Data Analytics institute in Canada, Data Analytics course in Canada, Data Analytics certification in Canada, Data Analytics training institute in Canada, advanced Data Analytics course in Canada, Data Analytics course with Placement Assistance, Data Analytics course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/canada/data-analytics-course-training-in-canada"
        />
        <meta
          property="og:title"
          content="Data Analytics Course in Canada | Data Science Training in Canada"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data Analytics Course in Canada. Learnbay is Advanced Data Analytics Course Training Institute in Canada. Data Analytics Course in Canada will enhance your career"
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
          content="Data Analytics Course in Canada | Data Science Training in Canada"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data Analytics Course in Canada. Learnbay is Advanced Data Analytics Course Training Institute in Canada. Data Analytics Course in Canada will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data Analytics Course in Canada. Learnbay is Advanced Data Analytics Course Training Institute in Canada. Data Analytics Course in Canada will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/canada/data-analytics-course-training-in-canada"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training Canada"
        />
        {/* <meta name="language" content="English" /> */}
        {/* <meta name="rating" content="general" /> */}
        {/* <meta name="revisit-after" content="Daily" /> */}
        {/* <meta name="author" content="Learnbay" /> */}
        {/* <meta name="googlebot" content="index,follow" /> */}
        {/* <meta name="bingbot" content="index,follow" /> */}
        {/* <meta name="expires" content="never" /> */}
        {/* <meta name="coverage" content="Worldwide" /> */}
        {/* <meta name="robots" content="ALL" /> */}
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
          titleCourse="Data Analytics Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
          brochurePdf={pdfUrl}
          idss="y_0IdhFKJKM"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/data+analytics+header+image.webp"
          firstToparaImg="For Professionals"
          firstHeading="Data Analytics Course in Canada "
          firstTopPara="A Fast Track Career Upgradation Training Program For Early Professionals"
          cityParaCont="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
        />
        <SecondSection
          SecondSectionData={DAcanadaCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DAcanadaCourseData[0].testimonial}
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
              ProgramHead1={DAcanadaCourseData[0].ProgramHead1}
              ProgramBot1={DAcanadaCourseData[0].ProgramBot1}
              ProgramBot2={DAcanadaCourseData[0].ProgramBot2}
              ProgramHead3={DAcanadaCourseData[0].ProgramHead3}
              ProgramHead4={DAcanadaCourseData[0].ProgramHead4}
              ProgramBot3={DAcanadaCourseData[0].ProgramBot3}
              ProgramBot31={DAcanadaCourseData[0].ProgramBot31}
              ProgramBot32={DAcanadaCourseData[0].ProgramBot32}
              ProgramBot4={DAcanadaCourseData[0].ProgramBot4}
              ProgramBot5={DAcanadaCourseData[0].ProgramBot5}
              ProgramBot6={DAcanadaCourseData[0].ProgramBot6}
              Courselink1={DAcanadaCourseData[0].Courselink1}
              Courselink2={DAcanadaCourseData[0].Courselink2}
              Courselink3={DAcanadaCourseData[0].Courselink3}
              Courselink4={DAcanadaCourseData[0].Courselink4}
              Courselink5={DAcanadaCourseData[0].Courselink5}
              Course1={DAcanadaCourseData[0].Course1}
              Course2={DAcanadaCourseData[0].Course2}
              Course3={DAcanadaCourseData[0].Course3}
              Course4={DAcanadaCourseData[0].Course4}
              Course5={DAcanadaCourseData[0].Course5}
              DomainHead1={DAcanadaCourseData[0].DomainHead1}
              DomainBot1={DAcanadaCourseData[0].DomainBot1}
              DomainBot2={DAcanadaCourseData[0].DomainBot2}
              DomainBot3={DAcanadaCourseData[0].DomainBot3}
              DomainList1={DAcanadaCourseData[0].DomainList1}
              DomainList2={DAcanadaCourseData[0].DomainList2}
              DomainList3={DAcanadaCourseData[0].DomainList3}
              DomainList4={DAcanadaCourseData[0].DomainList4}
              DomainList5={DAcanadaCourseData[0].DomainList5}
              DomainList6={DAcanadaCourseData[0].DomainList6}
              DomainList7={DAcanadaCourseData[0].DomainList7}
              DomainList8={DAcanadaCourseData[0].DomainList8}
              DomainList9={DAcanadaCourseData[0].DomainList9}
              DomainList10={DAcanadaCourseData[0].DomainList10}
              Domainlink1={DAcanadaCourseData[0].Domainlink1}
              Domainlink2={DAcanadaCourseData[0].Domainlink2}
              Domainlink3={DAcanadaCourseData[0].Domainlink3}
              Domainlink4={DAcanadaCourseData[0].Domainlink4}
              Domainlink5={DAcanadaCourseData[0].Domainlink5}
              Domainlink6={DAcanadaCourseData[0].Domainlink6}
              Domainlink7={DAcanadaCourseData[0].Domainlink7}
              Domainlink8={DAcanadaCourseData[0].Domainlink8}
              Domainlink9={DAcanadaCourseData[0].Domainlink9}
              Domainlink10={DAcanadaCourseData[0].Domainlink10}
              CertificationHead1={DAcanadaCourseData[0].CertificationHead1}
              // CertificationBot1={DAcanadaCourseData[0].CertificationBot1}
              // CertificationBot2={DAcanadaCourseData[0].CertificationBot2}
              certificate2={true}
              src={DAcanadaCourseData[0].src}
              src22={DAcanadaCourseData[0].src22}
              src33={DAcanadaCourseData[0].src33}
              ModuleHead1={DAcanadaCourseData[0].ModuleHead1}
              ModuleBot1={DAcanadaCourseData[0].ModuleBot1}
              ModuleBot2={DAcanadaCourseData[0].ModuleBot2}
              ModuleHead2={DAcanadaCourseData[0].ModuleHead2}
              syllabush1={DAcanadaCourseData[0].syllabush1}
              syllabusb1={DAcanadaCourseData[0].syllabusb1}
              SyllabusBotlist11={DAcanadaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DAcanadaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DAcanadaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DAcanadaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DAcanadaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DAcanadaCourseData[0].SyllabusBotlist16}
              syllabush2={DAcanadaCourseData[0].syllabush2}
              syllabusb2={DAcanadaCourseData[0].syllabusb2}
              SyllabusBotlist21={DAcanadaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DAcanadaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DAcanadaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DAcanadaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DAcanadaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DAcanadaCourseData[0].SyllabusBotlist26}
              syllabush3={DAcanadaCourseData[0].syllabush3}
              syllabusb3={DAcanadaCourseData[0].syllabusb3}
              SyllabusBotlist31={DAcanadaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DAcanadaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DAcanadaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DAcanadaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DAcanadaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DAcanadaCourseData[0].SyllabusBotlist36}
              syllabush4={DAcanadaCourseData[0].syllabush4}
              syllabusb4={DAcanadaCourseData[0].syllabusb4}
              SyllabusBotlist41={DAcanadaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DAcanadaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DAcanadaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DAcanadaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DAcanadaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DAcanadaCourseData[0].SyllabusBotlist46}
              syllabussrc={DAcanadaCourseData[0].syllabussrc}
              JobHead1={DAcanadaCourseData[0].JobHead1}
              JobBot1={DAcanadaCourseData[0].JobBot1}
              JobBot2={DAcanadaCourseData[0].JobBot2}
              JobBot3={DAcanadaCourseData[0].JobBot3}
              JobHead2={DAcanadaCourseData[0].JobHead2}
              JobBot5={DAcanadaCourseData[0].JobBot5}
              JobBot4={DAcanadaCourseData[0].JobBot4}
              JobBot6={DAcanadaCourseData[0].JobBot6}
              ProjectsBot1={DAcanadaCourseData[0].ProjectsBot1}
              ProjectsBot2={DAcanadaCourseData[0].ProjectsBot2}
              src1={DAcanadaCourseData[0].src1}
              ProjectsHead1={DAcanadaCourseData[0].ProjectsHead1}
              ProjectsH1={DAcanadaCourseData[0].ProjectsH1}
              Projectsp1={DAcanadaCourseData[0].Projectsp1}
              src2={DAcanadaCourseData[0].src2}
              ProjectsH2={DAcanadaCourseData[0].ProjectsH2}
              Projectsp2={DAcanadaCourseData[0].Projectsp2}
              src3={DAcanadaCourseData[0].src3}
              ProjectsH3={DAcanadaCourseData[0].ProjectsH3}
              Projectsp3={DAcanadaCourseData[0].Projectsp3}
              src4={DAcanadaCourseData[0].src4}
              ProjectsH4={DAcanadaCourseData[0].ProjectsH4}
              Projectsp4={DAcanadaCourseData[0].Projectsp4}
              AlumniBot1={DAcanadaCourseData[0].AlumniBot1}
              Asrc1={DAcanadaCourseData[0].Asrc1}
              AlumniH1={DAcanadaCourseData[0].AlumniH1}
              Alumnip1={DAcanadaCourseData[0].Alumnip1}
              Asrc2={DAcanadaCourseData[0].Asrc2}
              AlumniH2={DAcanadaCourseData[0].AlumniH2}
              Alumnip2={DAcanadaCourseData[0].Alumnip2}
              Asrc3={DAcanadaCourseData[0].Asrc3}
              AlumniH3={DAcanadaCourseData[0].AlumniH3}
              Alumnip3={DAcanadaCourseData[0].Alumnip3}
              Asrc4={DAcanadaCourseData[0].Asrc4}
              AlumniH4={DAcanadaCourseData[0].AlumniH4}
              Alumnip4={DAcanadaCourseData[0].Alumnip4}
              alt1={DAcanadaCourseData[0].alt1}
              alt2={DAcanadaCourseData[0].alt2}
              alt3={DAcanadaCourseData[0].alt3}
              alt4={DAcanadaCourseData[0].alt4}
              alt5={DAcanadaCourseData[0].alt5}
              alt6={DAcanadaCourseData[0].alt6}
              alt7={DAcanadaCourseData[0].alt7}
              alt8={DAcanadaCourseData[0].alt8}
              alt9={DAcanadaCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DAcanadaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DAcanadaCourseData[0].CityTextB}
          CityText={DAcanadaCourseData[0].CityText}
          CityTextLB={DAcanadaCourseData[0].CityTextLB}
          CityTextL={DAcanadaCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
