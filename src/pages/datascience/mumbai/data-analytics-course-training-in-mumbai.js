import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DAMumbaiCourseData } from "../../../CityData/Mumbai/DataAnalyticsCourseTrainingMumbaiData";
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
        <title>
          Best IBM Certified Data Analytics Course in Mumbai - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join our comprehensive Data Analytics Training program in Mumbai to become a highly-skilled Data Analyst. Don't wait, Enroll Now."
        />
        <meta
          name="keywords"
          content="Data Analytics course in Mumbai, Data Analytics training in Mumbai, Data Analytics institute in Mumbai, best Data Analytics institute in Mumbai, Data Analytics course in Mumbai, Data Analytics certification in Mumbai, Data Analytics training institute in Mumbai, advanced Data Analytics course in Mumbai, Data Analytics course with Placement Assistance, Data Analytics course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/mumbai/data-analytics-course-training-in-mumbai"
        />
        <meta
          property="og:title"
          content="Data Analytics Course in Mumbai | Data Science Training in Mumbai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data Analytics Course in Mumbai. Learnbay is Advanced Data Analytics Course Training Institute in Mumbai. Data Analytics Course in Mumbai will enhance your career"
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
          content="Data Analytics Course in Mumbai | Data Science Training in Mumbai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data Analytics Course in Mumbai. Learnbay is Advanced Data Analytics Course Training Institute in Mumbai. Data Analytics Course in Mumbai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data Analytics Course in Mumbai. Learnbay is Advanced Data Analytics Course Training Institute in Mumbai. Data Analytics Course in Mumbai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/mumbai/data-analytics-course-training-in-mumbai"
        />
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training India"
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
          titleCourse="Data Analytics Master Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
          brochurePdf={pdfUrl}
          idss="y_0IdhFKJKM"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/data+analytics+header+image.webp"
          firstToparaImg="For Professionals"
          firstHeading="Data Analytics Course Training in Mumbai"
          firstTopPara="In Collaboration with IBM"
          cityParaCont="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
        />
        <SecondSection
          SecondSectionData={DAMumbaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DAMumbaiCourseData[0].testimonial}
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
              ProgramHead1={DAMumbaiCourseData[0].ProgramHead1}
              ProgramHead2={DAMumbaiCourseData[0].ProgramHead2}
              ProgramBot1={DAMumbaiCourseData[0].ProgramBot1}
              ProgramBot2={DAMumbaiCourseData[0].ProgramBot2}
              ProgramHead3={DAMumbaiCourseData[0].ProgramHead3}
              ProgramHead4={DAMumbaiCourseData[0].ProgramHead4}
              ProgramBot3={DAMumbaiCourseData[0].ProgramBot3}
              ProgramBot31={DAMumbaiCourseData[0].ProgramBot31}
              ProgramBot32={DAMumbaiCourseData[0].ProgramBot32}
              ProgramBot4={DAMumbaiCourseData[0].ProgramBot4}
              ProgramBot5={DAMumbaiCourseData[0].ProgramBot5}
              ProgramBot6={DAMumbaiCourseData[0].ProgramBot6}
              ProgramBot7={DAMumbaiCourseData[0].ProgramBot7}
              ProgramBot8={DAMumbaiCourseData[0].ProgramBot8}
              ProgramBot9={DAMumbaiCourseData[0].ProgramBot9}
              ProgramBot10={DAMumbaiCourseData[0].ProgramBot10}
              ProgramBot11={DAMumbaiCourseData[0].ProgramBot11}
              ProgramBot12={DAMumbaiCourseData[0].ProgramBot12}
              ProgramBot13={DAMumbaiCourseData[0].ProgramBot13}
              ProgramBot14={DAMumbaiCourseData[0].ProgramBot14}
              ProgramBot15={DAMumbaiCourseData[0].ProgramBot15}
              ProgramBot16={DAMumbaiCourseData[0].ProgramBot16}
              Courselink1={DAMumbaiCourseData[0].Courselink1}
              Courselink2={DAMumbaiCourseData[0].Courselink2}
              Courselink3={DAMumbaiCourseData[0].Courselink3}
              Courselink4={DAMumbaiCourseData[0].Courselink4}
              Courselink5={DAMumbaiCourseData[0].Courselink5}
              Course1={DAMumbaiCourseData[0].Course1}
              Course2={DAMumbaiCourseData[0].Course2}
              Course3={DAMumbaiCourseData[0].Course3}
              Course4={DAMumbaiCourseData[0].Course4}
              Course5={DAMumbaiCourseData[0].Course5}
              DomainHead1={DAMumbaiCourseData[0].DomainHead1}
              DomainBot1={DAMumbaiCourseData[0].DomainBot1}
              DomainBot2={DAMumbaiCourseData[0].DomainBot2}
              DomainBot3={DAMumbaiCourseData[0].DomainBot3}
              DomainList1={DAMumbaiCourseData[0].DomainList1}
              DomainList2={DAMumbaiCourseData[0].DomainList2}
              DomainList3={DAMumbaiCourseData[0].DomainList3}
              DomainList4={DAMumbaiCourseData[0].DomainList4}
              DomainList5={DAMumbaiCourseData[0].DomainList5}
              DomainList6={DAMumbaiCourseData[0].DomainList6}
              DomainList7={DAMumbaiCourseData[0].DomainList7}
              DomainList8={DAMumbaiCourseData[0].DomainList8}
              DomainList9={DAMumbaiCourseData[0].DomainList9}
              DomainList10={DAMumbaiCourseData[0].DomainList10}
              Domainlink1={DAMumbaiCourseData[0].Domainlink1}
              Domainlink2={DAMumbaiCourseData[0].Domainlink2}
              Domainlink3={DAMumbaiCourseData[0].Domainlink3}
              Domainlink4={DAMumbaiCourseData[0].Domainlink4}
              Domainlink5={DAMumbaiCourseData[0].Domainlink5}
              Domainlink6={DAMumbaiCourseData[0].Domainlink6}
              Domainlink7={DAMumbaiCourseData[0].Domainlink7}
              Domainlink8={DAMumbaiCourseData[0].Domainlink8}
              Domainlink9={DAMumbaiCourseData[0].Domainlink9}
              Domainlink10={DAMumbaiCourseData[0].Domainlink10}
              CertificationHead1={DAMumbaiCourseData[0].CertificationHead1}
              CertificationBot1={DAMumbaiCourseData[0].CertificationBot1}
              CertificationBot2={DAMumbaiCourseData[0].CertificationBot2}
              src={DAMumbaiCourseData[0].src}
              src22={DAMumbaiCourseData[0].src22}
              ModuleHead1={DAMumbaiCourseData[0].ModuleHead1}
              ModuleHead4={DAMumbaiCourseData[0].ModuleHead4}
              ModuleBot1={DAMumbaiCourseData[0].ModuleBot1}
              ModuleBot2={DAMumbaiCourseData[0].ModuleBot2}
              ModuleBot3={DAMumbaiCourseData[0].ModuleBot3}
              ModuleBot4={DAMumbaiCourseData[0].ModuleBot4}
              ModuleHead2={DAMumbaiCourseData[0].ModuleHead2}
              syllabush1={DAMumbaiCourseData[0].syllabush1}
              syllabusb1={DAMumbaiCourseData[0].syllabusb1}
              SyllabusBotlist11={DAMumbaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DAMumbaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DAMumbaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DAMumbaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DAMumbaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DAMumbaiCourseData[0].SyllabusBotlist16}
              syllabush2={DAMumbaiCourseData[0].syllabush2}
              syllabusb2={DAMumbaiCourseData[0].syllabusb2}
              SyllabusBotlist21={DAMumbaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DAMumbaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DAMumbaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DAMumbaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DAMumbaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DAMumbaiCourseData[0].SyllabusBotlist26}
              syllabush3={DAMumbaiCourseData[0].syllabush3}
              syllabusb3={DAMumbaiCourseData[0].syllabusb3}
              SyllabusBotlist31={DAMumbaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DAMumbaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DAMumbaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DAMumbaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DAMumbaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DAMumbaiCourseData[0].SyllabusBotlist36}
              syllabush4={DAMumbaiCourseData[0].syllabush4}
              syllabusb4={DAMumbaiCourseData[0].syllabusb4}
              SyllabusBotlist41={DAMumbaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DAMumbaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DAMumbaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DAMumbaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DAMumbaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DAMumbaiCourseData[0].SyllabusBotlist46}
              syllabussrc={DAMumbaiCourseData[0].syllabussrc}
              JobHead1={DAMumbaiCourseData[0].JobHead1}
              JobBot1={DAMumbaiCourseData[0].JobBot1}
              JobBot2={DAMumbaiCourseData[0].JobBot2}
              JobHead2={DAMumbaiCourseData[0].JobHead2}
              JobHead3={DAMumbaiCourseData[0].JobHead3}
              JobBot3={DAMumbaiCourseData[0].JobBot3}
              JobBot4={DAMumbaiCourseData[0].JobBot4}
              JobBot6={DAMumbaiCourseData[0].JobBot6}
              ProjectsBot1={DAMumbaiCourseData[0].ProjectsBot1}
              src1={DAMumbaiCourseData[0].src1}
              ProjectsH1={DAMumbaiCourseData[0].ProjectsH1}
              Projectsp1={DAMumbaiCourseData[0].Projectsp1}
              src2={DAMumbaiCourseData[0].src2}
              ProjectsH2={DAMumbaiCourseData[0].ProjectsH2}
              Projectsp2={DAMumbaiCourseData[0].Projectsp2}
              src3={DAMumbaiCourseData[0].src3}
              ProjectsH3={DAMumbaiCourseData[0].ProjectsH3}
              Projectsp3={DAMumbaiCourseData[0].Projectsp3}
              src4={DAMumbaiCourseData[0].src4}
              ProjectsH4={DAMumbaiCourseData[0].ProjectsH4}
              Projectsp4={DAMumbaiCourseData[0].Projectsp4}
              AlumniBot1={DAMumbaiCourseData[0].AlumniBot1}
              Asrc1={DAMumbaiCourseData[0].Asrc1}
              AlumniH1={DAMumbaiCourseData[0].AlumniH1}
              Alumnip1={DAMumbaiCourseData[0].Alumnip1}
              Asrc2={DAMumbaiCourseData[0].Asrc2}
              AlumniH2={DAMumbaiCourseData[0].AlumniH2}
              Alumnip2={DAMumbaiCourseData[0].Alumnip2}
              Asrc3={DAMumbaiCourseData[0].Asrc3}
              AlumniH3={DAMumbaiCourseData[0].AlumniH3}
              Alumnip3={DAMumbaiCourseData[0].Alumnip3}
              Asrc4={DAMumbaiCourseData[0].Asrc4}
              AlumniH4={DAMumbaiCourseData[0].AlumniH4}
              Alumnip4={DAMumbaiCourseData[0].Alumnip4}
              alt1={DAMumbaiCourseData[0].alt1}
              alt2={DAMumbaiCourseData[0].alt2}
              alt3={DAMumbaiCourseData[0].alt3}
              alt4={DAMumbaiCourseData[0].alt4}
              alt5={DAMumbaiCourseData[0].alt5}
              alt6={DAMumbaiCourseData[0].alt6}
              alt7={DAMumbaiCourseData[0].alt7}
              alt8={DAMumbaiCourseData[0].alt8}
              alt9={DAMumbaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DAMumbaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DAMumbaiCourseData[0].CityTextB}
          CityText={DAMumbaiCourseData[0].CityText}
          CityTextLB={DAMumbaiCourseData[0].CityTextLB}
          CityTextL={DAMumbaiCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
