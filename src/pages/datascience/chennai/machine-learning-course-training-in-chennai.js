import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MachineLearningChennaiCourseData } from "../../../CityData/Chennai/machineLearningCourseTrainingInChennai";
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Advance-AI-ML-v1.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Best Machine Learning Course in Chennai with Career Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join-us The Learnbay's Extensive Machine Learning Training Course in Chennai. Get mentored by top industry experts, multiple batches available. Enroll Now."
        />
        <meta
          name="keywords"
          content="Machine learning course in Chennai, Machine learning training in Chennai, Machine learning institute in Chennai, best Machine learning institute in Chennai, Machine learning course in Chennai, Machine learning certification in Chennai, Machine learning training institute in Chennai, advanced Machine learning course in Chennai, Machine learning course with Placement Assistance, Machine learning course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/chennai/machine-learning-course-training-in-chennai"
        />
        <meta
          property="og:title"
          content="machine Learning Course in Chennai | Data Science Training in Chennai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="machine Learning Course in Chennai. Learnbay is Advanced machine Learning Course Training Institute in Chennai. machine Learning Course in Chennai will enhance your career"
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
          content="machine Learning Course in Chennai | Data Science Training in Chennai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="machine Learning Course in Chennai. Learnbay is Advanced machine Learning Course Training Institute in Chennai. machine Learning Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="machine Learning Course in Chennai. Learnbay is Advanced machine Learning Course Training Institute in Chennai. machine Learning Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/chennai/machine-learning-course-training-in-chennai"
        />
        <meta
          name="copyright"
          content="Learnbay: Machine Learning Courses Certification Training India"
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
          cityParaCont=" Be eligible to work as an AI/ML expert in MNC/PRODUCT Based Companies. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
          dataScience={true}
          interstedInHide={true}
          titleCourse="Machine Learning Course Training In Chennai"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          brochurePdf={pdfUrl}
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/ML.png"
          firstHeading="Machine Learning Course "
          firstTopPara="Machine Learning Course For Experienced Tech Professionals"
          firstToparaImg="Training In Chennai"
          idss="YWxTtvb3x-U"
        />
        <SecondSection
          SecondSectionData={MachineLearningChennaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={MachineLearningChennaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,15,000"
            FeeEmi="₹ 7,539/ Month"
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
            dataScience={true}
            titleCourse="AI & ML Program for tech professionals"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
            brochurePdf={pdfUrl}
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,15,000"
            monthlyPayment1="₹7,539"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,15,000"
            monthlyPayment2="₹11,308"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramBot1={MachineLearningChennaiCourseData[0].ProgramBot1}
              ProgramBot2={MachineLearningChennaiCourseData[0].ProgramBot2}
              ProgramBot3={MachineLearningChennaiCourseData[0].ProgramBot3}
              ProgramHead4={MachineLearningChennaiCourseData[0].ProgramHead4}
              ProgramBot4={MachineLearningChennaiCourseData[0].ProgramBot4}
              ProgramHead5={MachineLearningChennaiCourseData[0].ProgramHead5}
              ProgramBot5={MachineLearningChennaiCourseData[0].ProgramBot5}
              ProgramHead6={MachineLearningChennaiCourseData[0].ProgramHead6}
              ProgramBot6={MachineLearningChennaiCourseData[0].ProgramBot6}
              ProgramHead7={MachineLearningChennaiCourseData[0].ProgramHead7}
              ProgramBot8={MachineLearningChennaiCourseData[0].ProgramBot8}
              ProgramBot9={MachineLearningChennaiCourseData[0].ProgramBot9}
              DomainHead1={MachineLearningChennaiCourseData[0].DomainHead1}
              DomainBot1={MachineLearningChennaiCourseData[0].DomainBot1}
              DomainBot2={MachineLearningChennaiCourseData[0].DomainBot2}
              DomainBot3={MachineLearningChennaiCourseData[0].DomainBot3}
              DomainList1={MachineLearningChennaiCourseData[0].DomainList1}
              DomainList2={MachineLearningChennaiCourseData[0].DomainList2}
              DomainList3={MachineLearningChennaiCourseData[0].DomainList3}
              DomainList4={MachineLearningChennaiCourseData[0].DomainList4}
              DomainList5={MachineLearningChennaiCourseData[0].DomainList5}
              DomainList6={MachineLearningChennaiCourseData[0].DomainList6}
              DomainList7={MachineLearningChennaiCourseData[0].DomainList7}
              DomainList8={MachineLearningChennaiCourseData[0].DomainList8}
              DomainList9={MachineLearningChennaiCourseData[0].DomainList9}
              DomainList10={MachineLearningChennaiCourseData[0].DomainList10}
              Domainlink1={MachineLearningChennaiCourseData[0].Domainlink1}
              Domainlink2={MachineLearningChennaiCourseData[0].Domainlink2}
              Domainlink3={MachineLearningChennaiCourseData[0].Domainlink3}
              Domainlink4={MachineLearningChennaiCourseData[0].Domainlink4}
              Domainlink5={MachineLearningChennaiCourseData[0].Domainlink5}
              Domainlink6={MachineLearningChennaiCourseData[0].Domainlink6}
              Domainlink7={MachineLearningChennaiCourseData[0].Domainlink7}
              Domainlink8={MachineLearningChennaiCourseData[0].Domainlink8}
              Domainlink9={MachineLearningChennaiCourseData[0].Domainlink9}
              Domainlink10={MachineLearningChennaiCourseData[0].Domainlink10}
              CertificationHead1={
                MachineLearningChennaiCourseData[0].CertificationHead1
              }
              CertificationBot1={
                MachineLearningChennaiCourseData[0].CertificationBot1
              }
              src={MachineLearningChennaiCourseData[0].src}
              ModuleHead1={MachineLearningChennaiCourseData[0].ModuleHead1}
              ModuleBot1={MachineLearningChennaiCourseData[0].ModuleBot1}
              ModuleBot2={MachineLearningChennaiCourseData[0].ModuleBot2}
              syllabush1={MachineLearningChennaiCourseData[0].syllabush1}
              syllabusb1={MachineLearningChennaiCourseData[0].syllabusb1}
              SyllabusBotlist11={
                MachineLearningChennaiCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                MachineLearningChennaiCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                MachineLearningChennaiCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                MachineLearningChennaiCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                MachineLearningChennaiCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                MachineLearningChennaiCourseData[0].SyllabusBotlist16
              }
              syllabush2={MachineLearningChennaiCourseData[0].syllabush2}
              syllabusb2={MachineLearningChennaiCourseData[0].syllabusb2}
              SyllabusBotlist21={
                MachineLearningChennaiCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                MachineLearningChennaiCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                MachineLearningChennaiCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                MachineLearningChennaiCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                MachineLearningChennaiCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                MachineLearningChennaiCourseData[0].SyllabusBotlist26
              }
              syllabush3={MachineLearningChennaiCourseData[0].syllabush3}
              syllabusb3={MachineLearningChennaiCourseData[0].syllabusb3}
              SyllabusBotlist31={
                MachineLearningChennaiCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                MachineLearningChennaiCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                MachineLearningChennaiCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                MachineLearningChennaiCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                MachineLearningChennaiCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                MachineLearningChennaiCourseData[0].SyllabusBotlist36
              }
              syllabush4={MachineLearningChennaiCourseData[0].syllabush4}
              syllabusb4={MachineLearningChennaiCourseData[0].syllabusb4}
              SyllabusBotlist41={
                MachineLearningChennaiCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                MachineLearningChennaiCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                MachineLearningChennaiCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                MachineLearningChennaiCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                MachineLearningChennaiCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                MachineLearningChennaiCourseData[0].SyllabusBotlist46
              }
              syllabussrc={MachineLearningChennaiCourseData[0].syllabussrc}
              JobHead1={MachineLearningChennaiCourseData[0].JobHead1}
              JobBot1={MachineLearningChennaiCourseData[0].JobBot1}
              JobBot2={MachineLearningChennaiCourseData[0].JobBot2}
              JobBot5={MachineLearningChennaiCourseData[0].JobBot5}
              JobHead2={MachineLearningChennaiCourseData[0].JobHead2}
              JobBot3={MachineLearningChennaiCourseData[0].JobBot3}
              JobBot4={MachineLearningChennaiCourseData[0].JobBot4}
              JobBot6={MachineLearningChennaiCourseData[0].JobBot6}
              ProjectsBot1={MachineLearningChennaiCourseData[0].ProgramBot1}
              ProjectsBot2={MachineLearningChennaiCourseData[0].ProgramBot2}
              src1={MachineLearningChennaiCourseData[0].src1}
              alt2={MachineLearningChennaiCourseData[0].alt2}
              alt3={MachineLearningChennaiCourseData[0].alt3}
              alt4={MachineLearningChennaiCourseData[0].alt4}
              alt5={MachineLearningChennaiCourseData[0].alt5}
              ProjectsH1={MachineLearningChennaiCourseData[0].ProjectsH1}
              Projectsp1={MachineLearningChennaiCourseData[0].Projectsp1}
              src2={MachineLearningChennaiCourseData[0].src2}
              ProjectsH2={MachineLearningChennaiCourseData[0].ProjectsH2}
              Projectsp2={MachineLearningChennaiCourseData[0].Projectsp2}
              src3={MachineLearningChennaiCourseData[0].src3}
              ProjectsH3={MachineLearningChennaiCourseData[0].ProjectsH3}
              Projectsp3={MachineLearningChennaiCourseData[0].Projectsp3}
              src4={MachineLearningChennaiCourseData[0].src4}
              ProjectsH4={MachineLearningChennaiCourseData[0].ProjectsH4}
              Projectsp4={MachineLearningChennaiCourseData[0].Projectsp4}
              AlumniBot1={MachineLearningChennaiCourseData[0].AlumniBot1}
              Asrc1={MachineLearningChennaiCourseData[0].Asrc1}
              AlumniH1={MachineLearningChennaiCourseData[0].AlumniH1}
              Alumnip1={MachineLearningChennaiCourseData[0].Alumnip1}
              Asrc2={MachineLearningChennaiCourseData[0].Asrc2}
              AlumniH2={MachineLearningChennaiCourseData[0].AlumniH2}
              Alumnip2={MachineLearningChennaiCourseData[0].Alumnip2}
              Asrc3={MachineLearningChennaiCourseData[0].Asrc3}
              AlumniH3={MachineLearningChennaiCourseData[0].AlumniH3}
              Alumnip3={MachineLearningChennaiCourseData[0].Alumnip3}
              Asrc4={MachineLearningChennaiCourseData[0].Asrc4}
              AlumniH4={MachineLearningChennaiCourseData[0].AlumniH4}
              Alumnip4={MachineLearningChennaiCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MachineLearningChennaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={MachineLearningChennaiCourseData[0].CityTextB}
          CityText={MachineLearningChennaiCourseData[0].CityText}
          CityTextLB={MachineLearningChennaiCourseData[0].CityTextLB}
          CityTextL={MachineLearningChennaiCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
