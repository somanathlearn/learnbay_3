import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DataScienceMumbaiCourseData } from "../../../CityData/Mumbai/dataScienceCourseTrainingInMumbai";
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
  import("../../../components/Seo/CitiesRight/CitiesRight")
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Advanced-Data-Sciences.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Science Course in Mumbai With IBM Certification</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Gain Competitive Edge In Todays World With Learnbay’s Data Science Course In Mumbai. Enrol Now To Learn From Industry Experts And Boost Your Data Science Career"
        />
        <meta
          name="keywords"
          content="data science course in Mumbai, data science training in Mumbai, data science institute in Mumbai, best data science institute in Mumbai, data scientist course in Mumbai,data scientist certification in Mumbai, data science training institute in Mumbai, advanced data science course in Mumbai, data science course with Placement Assistance, data science course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/mumbai/data-science-course-training-in-mumbai"
        />
        <meta
          property="og:title"
          content="Data Science Course in Mumbai | Data Science Training in Mumbai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Gain Competitive Edge In Todays World With Learnbay’s Data Science Course In Mumbai. Enrol Now To Learn From Industry Experts And Boost Your Data Science Career"
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
          content="Data Science Course in Mumbai | Data Science Training in Mumbai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Gain Competitive Edge In Todays World With Learnbay’s Data Science Course In Mumbai. Enrol Now To Learn From Industry Experts And Boost Your Data Science Career"
        />
        <meta
          name="twitter:description"
          content="Gain Competitive Edge In Todays World With Learnbay’s Data Science Course In Mumbai. Enrol Now To Learn From Industry Experts And Boost Your Data Science Career"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/mumbai/data-science-course-training-in-mumbai"
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
          cityParaCont="Enhance your career with industry-level data science courses in Mumbai. Learn and understand cutting-edge data science techniques with advanced IBM certifications. This will enhance your expertise in tools like Python, Power BI, machine learning, etc. You will receive in-depth data science training from industry leaders and experts, allowing you to gain the most in-demand data science and AI skills."
          dataScience={true}
          interstedInHide={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstToparaImg=" - Enroll Now"
          firstHeading="Data Science Course in Mumbai"
          firstTopPara="Foundational and Advance Job-ready Program"
        />
        <SecondSection
          SecondSectionData={DataScienceMumbaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DataScienceMumbaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹1,35,000"
            FeeEmi="₹8,850/month"
           weekdaybatch="Weekend Batch"
        weekendbatch="Weekday Batch"
        weekday="SAT - SUN"
        weekend="MON - THU"
        WeekdayDate="23rd Feb"
        WeekendDate="14th Feb"
        WeekendTime="8:00 PM - 10:30 PM"
        WeekdayTime="9:30 AM - 1 PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            dataScience={true}
            titleCourse="Advanced Data Science and AI Program with domain specialization"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+%26+AI+Master+Certification+Program.pdf"
            brochurePdf={pdfUrl}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,35,000"
            monthlyPayment1="₹8,850"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,35,000"
            monthlyPayment2="₹13,275"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextDSmumbai={true}
              DomainHead1={DataScienceMumbaiCourseData[0].DomainHead1}
              DomainBot1={DataScienceMumbaiCourseData[0].DomainBot1}
              DomainBot2={DataScienceMumbaiCourseData[0].DomainBot2}
              DomainBot3={DataScienceMumbaiCourseData[0].DomainBot3}
              DomainHead2={DataScienceMumbaiCourseData[0].DomainHead2}
              DomainBot4={DataScienceMumbaiCourseData[0].DomainBot4}
              DomainBot5={DataScienceMumbaiCourseData[0].DomainBot5}
              DomainBot6={DataScienceMumbaiCourseData[0].DomainBot6}
              DomainBot7={DataScienceMumbaiCourseData[0].DomainBot7}
              DomainBot8={DataScienceMumbaiCourseData[0].DomainBot8}
              DomainBot9={DataScienceMumbaiCourseData[0].DomainBot9}
              DomainBot11={DataScienceMumbaiCourseData[0].DomainBot11}
              DomainBot12={DataScienceMumbaiCourseData[0].DomainBot12}
              DomainBot10={DataScienceMumbaiCourseData[0].DomainBot10}
              DomainHead3={DataScienceMumbaiCourseData[0].DomainHead3}
              DomainList1={DataScienceMumbaiCourseData[0].DomainList1}
              DomainList2={DataScienceMumbaiCourseData[0].DomainList2}
              DomainList3={DataScienceMumbaiCourseData[0].DomainList3}
              DomainList4={DataScienceMumbaiCourseData[0].DomainList4}
              DomainList5={DataScienceMumbaiCourseData[0].DomainList5}
              DomainList6={DataScienceMumbaiCourseData[0].DomainList6}
              DomainList7={DataScienceMumbaiCourseData[0].DomainList7}
              DomainList8={DataScienceMumbaiCourseData[0].DomainList8}
              DomainList9={DataScienceMumbaiCourseData[0].DomainList9}
              DomainList10={DataScienceMumbaiCourseData[0].DomainList10}
              Domainlink1={DataScienceMumbaiCourseData[0].Domainlink1}
              Domainlink2={DataScienceMumbaiCourseData[0].Domainlink2}
              Domainlink3={DataScienceMumbaiCourseData[0].Domainlink3}
              Domainlink4={DataScienceMumbaiCourseData[0].Domainlink4}
              Domainlink5={DataScienceMumbaiCourseData[0].Domainlink5}
              Domainlink6={DataScienceMumbaiCourseData[0].Domainlink6}
              Domainlink7={DataScienceMumbaiCourseData[0].Domainlink7}
              Domainlink8={DataScienceMumbaiCourseData[0].Domainlink8}
              Domainlink9={DataScienceMumbaiCourseData[0].Domainlink9}
              Domainlink10={DataScienceMumbaiCourseData[0].Domainlink10}
              CertificationBot1={
                DataScienceMumbaiCourseData[0].CertificationBot1
              }
              CertificationBot2={
                DataScienceMumbaiCourseData[0].CertificationBot2
              }
              CertificationBot4={
                DataScienceMumbaiCourseData[0].CertificationBot4
              }
              CertificationBot6={
                DataScienceMumbaiCourseData[0].CertificationBot6
              }
              CertificationBot7={
                DataScienceMumbaiCourseData[0].CertificationBot7
              }
              CertificationBot5={
                DataScienceMumbaiCourseData[0].CertificationBot5
              }
              CertificationHead1={
                DataScienceMumbaiCourseData[0].CertificationHead1
              }
              CertificationHead2={
                DataScienceMumbaiCourseData[0].CertificationHead2
              }
              CertificationHead3={
                DataScienceMumbaiCourseData[0].CertificationHead3
              }
              CertificationBot3={
                DataScienceMumbaiCourseData[0].CertificationBot3
              }
              src={DataScienceMumbaiCourseData[0].src}
              src22={DataScienceMumbaiCourseData[0].src22}
              src33={DataScienceMumbaiCourseData[0].src33}
              ModuleHead1={DataScienceMumbaiCourseData[0].ModuleHead1}
              ModuleBot1={DataScienceMumbaiCourseData[0].ModuleBot1}
              ModuleBot2={DataScienceMumbaiCourseData[0].ModuleBot2}
              ModuleBotL21={DataScienceMumbaiCourseData[0].ModuleBotL21}
              ModuleBotL22={DataScienceMumbaiCourseData[0].ModuleBotL22}
              ModuleBotL23={DataScienceMumbaiCourseData[0].ModuleBotL23}
              ModuleBot21={DataScienceMumbaiCourseData[0].ModuleBot21}
              ModuleHead2={DataScienceMumbaiCourseData[0].ModuleHead2}
              ModuleBot3={DataScienceMumbaiCourseData[0].ModuleBot3}
              ModuleHead3={DataScienceMumbaiCourseData[0].ModuleHead3}
              ModuleBot4={DataScienceMumbaiCourseData[0].ModuleBot4}
              ModuleBot41={DataScienceMumbaiCourseData[0].ModuleBot41}
              ModuleBot42={DataScienceMumbaiCourseData[0].ModuleBot42}
              ModuleBot43={DataScienceMumbaiCourseData[0].ModuleBot43}
              ModuleBot44={DataScienceMumbaiCourseData[0].ModuleBot44}
              ModuleBot45={DataScienceMumbaiCourseData[0].ModuleBot45}
              syllabush1={DataScienceMumbaiCourseData[0].syllabush1}
              syllabusb1={DataScienceMumbaiCourseData[0].syllabusb1}
              SyllabusBotlist11={
                DataScienceMumbaiCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                DataScienceMumbaiCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                DataScienceMumbaiCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                DataScienceMumbaiCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                DataScienceMumbaiCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                DataScienceMumbaiCourseData[0].SyllabusBotlist16
              }
              syllabush2={DataScienceMumbaiCourseData[0].syllabush2}
              syllabusb2={DataScienceMumbaiCourseData[0].syllabusb2}
              SyllabusBotlist21={
                DataScienceMumbaiCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                DataScienceMumbaiCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                DataScienceMumbaiCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                DataScienceMumbaiCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                DataScienceMumbaiCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                DataScienceMumbaiCourseData[0].SyllabusBotlist26
              }
              syllabush3={DataScienceMumbaiCourseData[0].syllabush3}
              syllabusb3={DataScienceMumbaiCourseData[0].syllabusb3}
              SyllabusBotlist31={
                DataScienceMumbaiCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                DataScienceMumbaiCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                DataScienceMumbaiCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                DataScienceMumbaiCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                DataScienceMumbaiCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                DataScienceMumbaiCourseData[0].SyllabusBotlist36
              }
              syllabush4={DataScienceMumbaiCourseData[0].syllabush4}
              syllabusb4={DataScienceMumbaiCourseData[0].syllabusb4}
              SyllabusBotlist41={
                DataScienceMumbaiCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                DataScienceMumbaiCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                DataScienceMumbaiCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                DataScienceMumbaiCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                DataScienceMumbaiCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                DataScienceMumbaiCourseData[0].SyllabusBotlist46
              }
              syllabussrc={DataScienceMumbaiCourseData[0].syllabussrc}
              JobHead1={DataScienceMumbaiCourseData[0].JobHead1}
              JobBot1={DataScienceMumbaiCourseData[0].JobBot1}
              JobBot2={DataScienceMumbaiCourseData[0].JobBot2}
              JobBot5={DataScienceMumbaiCourseData[0].JobBot5}
              JobHead2={DataScienceMumbaiCourseData[0].JobHead2}
              JobHead3={DataScienceMumbaiCourseData[0].JobHead3}
              JobBot3={DataScienceMumbaiCourseData[0].JobBot3}
              JobBot4={DataScienceMumbaiCourseData[0].JobBot4}
              JobBot6={DataScienceMumbaiCourseData[0].JobBot6}
              JobBot7={DataScienceMumbaiCourseData[0].JobBot7}
              JobBot8={DataScienceMumbaiCourseData[0].JobBot8}
              ProjectsHead1={DataScienceMumbaiCourseData[0].ProjectsHead1}
              ProjectsHead3={DataScienceMumbaiCourseData[0].ProjectsHead3}
              ProjectsBot1={DataScienceMumbaiCourseData[0].ProjectsBot1}
              ProjectsBot31={DataScienceMumbaiCourseData[0].ProjectsBot31}
              ProjectsBot32={DataScienceMumbaiCourseData[0].ProjectsBot32}
              ProjectsBot2={DataScienceMumbaiCourseData[0].ProjectsBot2}
              src1={DataScienceMumbaiCourseData[0].src1}
              ProjectsH1={DataScienceMumbaiCourseData[0].ProjectsH1}
              Projectsp1={DataScienceMumbaiCourseData[0].Projectsp1}
              src2={DataScienceMumbaiCourseData[0].src2}
              ProjectsH2={DataScienceMumbaiCourseData[0].ProjectsH2}
              Projectsp2={DataScienceMumbaiCourseData[0].Projectsp2}
              src3={DataScienceMumbaiCourseData[0].src3}
              ProjectsH3={DataScienceMumbaiCourseData[0].ProjectsH3}
              Projectsp3={DataScienceMumbaiCourseData[0].Projectsp3}
              src4={DataScienceMumbaiCourseData[0].src4}
              ProjectsH4={DataScienceMumbaiCourseData[0].ProjectsH4}
              Projectsp4={DataScienceMumbaiCourseData[0].Projectsp4}
              AlumniBot1={DataScienceMumbaiCourseData[0].AlumniBot1}
              Asrc1={DataScienceMumbaiCourseData[0].Asrc1}
              AlumniH1={DataScienceMumbaiCourseData[0].AlumniH1}
              Alumnip1={DataScienceMumbaiCourseData[0].Alumnip1}
              Asrc2={DataScienceMumbaiCourseData[0].Asrc2}
              AlumniH2={DataScienceMumbaiCourseData[0].AlumniH2}
              Alumnip2={DataScienceMumbaiCourseData[0].Alumnip2}
              Asrc3={DataScienceMumbaiCourseData[0].Asrc3}
              AlumniH3={DataScienceMumbaiCourseData[0].AlumniH3}
              Alumnip3={DataScienceMumbaiCourseData[0].Alumnip3}
              Asrc4={DataScienceMumbaiCourseData[0].Asrc4}
              AlumniH4={DataScienceMumbaiCourseData[0].AlumniH4}
              Alumnip4={DataScienceMumbaiCourseData[0].Alumnip4}
              alt1={DataScienceMumbaiCourseData[0].alt1}
              alt2={DataScienceMumbaiCourseData[0].alt2}
              alt3={DataScienceMumbaiCourseData[0].alt3}
              alt4={DataScienceMumbaiCourseData[0].alt4}
              alt5={DataScienceMumbaiCourseData[0].alt5}
              alt6={DataScienceMumbaiCourseData[0].alt6}
              alt7={DataScienceMumbaiCourseData[0].alt7}
              alt8={DataScienceMumbaiCourseData[0].alt8}
              alt9={DataScienceMumbaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DataScienceMumbaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DataScienceMumbaiCourseData[0].CityTextB}
          CityText={DataScienceMumbaiCourseData[0].CityText}
          CityTextLB={DataScienceMumbaiCourseData[0].CityTextLB}
          CityTextL={DataScienceMumbaiCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
