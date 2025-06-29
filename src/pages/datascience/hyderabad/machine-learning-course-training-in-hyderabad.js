import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MachineLearningHyderabadCourseData } from "../../../CityData/Hyderabad/machineLearningCourseTrainingInHyderabad";
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
          Machine Learning Certification Course in Hyderabad - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay offers the Best Machine Learning Training program in Hyderabad with the highly-skilled industry experts and mentors. Enroll Now."
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/hyderabad/machine-learning-course-training-in-hyderabad"
        />
        <meta
          property="og:title"
          content="Machine Learning Course in Hyderabad | Data Science Training in Hyderabad"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Machine Learning Course in Chennai. Learnbay is Advanced Machine Learning Course Training Institute in Hyderabad. Machine Learning Course in Hyderabad will enhance your career"
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
          content="Machine Learning Course in Hyderabad | Data Science Training in Hyderabad"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Machine Learning Course in Hyderabad. Learnbay is Advanced Machine Learning Course Training Institute in Hyderabad. Machine Learning Course in Hyderabad will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Machine Learning Course in Hyderabad. Learnbay is Advanced Machine Learning Course Training Institute in Hyderabad. Machine Learning Course in Hyderabad will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <meta
          name="keywords"
          content="Machine learning course in Hyderabad, Machine learning training in Hyderabad, Machine learning institute in Hyderabad, best Machine learning institute in Hyderabad, Machine learning course in Hyderabad, Machine learning certification in Hyderabad, Machine learning training institute in Hyderabad, advanced Machine learning course in Hyderabad, Machine learning course with Placement Assistance, Machine learning course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/hyderabad/machine-learning-course-training-in-hyderabad"
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
          titleCourse="Machine Learning Course Training In Hyderabad"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          brochurePdf={pdfUrl}
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/ML.png"
          firstHeading="Machine Learning Course "
          firstToparaImg="Training In Hyderabad"
          firstTopPara="Machine Learning Course For Experienced Tech Professionals"
          idss="YWxTtvb3x-U"
        />
        <SecondSection
          SecondSectionData={
            MachineLearningHyderabadCourseData[0].secondSection
          }
        />
        <Testimonial
          redirectDS={true}
          Testimonial={MachineLearningHyderabadCourseData[0].testimonial}
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
              ProgramBot1={MachineLearningHyderabadCourseData[0].ProgramBot1}
              ProgramBot2={MachineLearningHyderabadCourseData[0].ProgramBot2}
              ProgramBot3={MachineLearningHyderabadCourseData[0].ProgramBot3}
              ProgramHead4={MachineLearningHyderabadCourseData[0].ProgramHead4}
              ProgramBot4={MachineLearningHyderabadCourseData[0].ProgramBot4}
              ProgramHead5={MachineLearningHyderabadCourseData[0].ProgramHead5}
              ProgramBot5={MachineLearningHyderabadCourseData[0].ProgramBot5}
              ProgramHead6={MachineLearningHyderabadCourseData[0].ProgramHead6}
              ProgramBot6={MachineLearningHyderabadCourseData[0].ProgramBot6}
              ProgramHead7={MachineLearningHyderabadCourseData[0].ProgramHead7}
              ProgramBot8={MachineLearningHyderabadCourseData[0].ProgramBot8}
              ProgramBot9={MachineLearningHyderabadCourseData[0].ProgramBot9}
              DomainHead1={MachineLearningHyderabadCourseData[0].DomainHead1}
              DomainBot1={MachineLearningHyderabadCourseData[0].DomainBot1}
              DomainBot2={MachineLearningHyderabadCourseData[0].DomainBot2}
              DomainBot3={MachineLearningHyderabadCourseData[0].DomainBot3}
              DomainList1={MachineLearningHyderabadCourseData[0].DomainList1}
              DomainList2={MachineLearningHyderabadCourseData[0].DomainList2}
              DomainList3={MachineLearningHyderabadCourseData[0].DomainList3}
              DomainList4={MachineLearningHyderabadCourseData[0].DomainList4}
              DomainList5={MachineLearningHyderabadCourseData[0].DomainList5}
              DomainList6={MachineLearningHyderabadCourseData[0].DomainList6}
              DomainList7={MachineLearningHyderabadCourseData[0].DomainList7}
              DomainList8={MachineLearningHyderabadCourseData[0].DomainList8}
              DomainList9={MachineLearningHyderabadCourseData[0].DomainList9}
              DomainList10={MachineLearningHyderabadCourseData[0].DomainList10}
              Domainlink1={MachineLearningHyderabadCourseData[0].Domainlink1}
              Domainlink2={MachineLearningHyderabadCourseData[0].Domainlink2}
              Domainlink3={MachineLearningHyderabadCourseData[0].Domainlink3}
              Domainlink4={MachineLearningHyderabadCourseData[0].Domainlink4}
              Domainlink5={MachineLearningHyderabadCourseData[0].Domainlink5}
              Domainlink6={MachineLearningHyderabadCourseData[0].Domainlink6}
              Domainlink7={MachineLearningHyderabadCourseData[0].Domainlink7}
              Domainlink8={MachineLearningHyderabadCourseData[0].Domainlink8}
              Domainlink9={MachineLearningHyderabadCourseData[0].Domainlink9}
              Domainlink10={MachineLearningHyderabadCourseData[0].Domainlink10}
              CertificationHead1={
                MachineLearningHyderabadCourseData[0].CertificationHead1
              }
              CertificationBot1={
                MachineLearningHyderabadCourseData[0].CertificationBot1
              }
              src={MachineLearningHyderabadCourseData[0].src}
              alt2={MachineLearningHyderabadCourseData[0].alt2}
              alt3={MachineLearningHyderabadCourseData[0].alt3}
              alt4={MachineLearningHyderabadCourseData[0].alt4}
              alt5={MachineLearningHyderabadCourseData[0].alt5}
              ModuleHead1={MachineLearningHyderabadCourseData[0].ModuleHead1}
              ModuleBot1={MachineLearningHyderabadCourseData[0].ModuleBot1}
              ModuleBot2={MachineLearningHyderabadCourseData[0].ModuleBot2}
              syllabush1={MachineLearningHyderabadCourseData[0].syllabush1}
              syllabusb1={MachineLearningHyderabadCourseData[0].syllabusb1}
              SyllabusBotlist11={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist16
              }
              syllabush2={MachineLearningHyderabadCourseData[0].syllabush2}
              syllabusb2={MachineLearningHyderabadCourseData[0].syllabusb2}
              SyllabusBotlist21={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist26
              }
              syllabush3={MachineLearningHyderabadCourseData[0].syllabush3}
              syllabusb3={MachineLearningHyderabadCourseData[0].syllabusb3}
              SyllabusBotlist31={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist36
              }
              syllabush4={MachineLearningHyderabadCourseData[0].syllabush4}
              syllabusb4={MachineLearningHyderabadCourseData[0].syllabusb4}
              SyllabusBotlist41={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist46
              }
              syllabussrc={MachineLearningHyderabadCourseData[0].syllabussrc}
              JobHead1={MachineLearningHyderabadCourseData[0].JobHead1}
              JobBot1={MachineLearningHyderabadCourseData[0].JobBot1}
              JobBot2={MachineLearningHyderabadCourseData[0].JobBot2}
              JobBot5={MachineLearningHyderabadCourseData[0].JobBot5}
              JobHead2={MachineLearningHyderabadCourseData[0].JobHead2}
              JobBot3={MachineLearningHyderabadCourseData[0].JobBot3}
              JobBot4={MachineLearningHyderabadCourseData[0].JobBot4}
              JobBot6={MachineLearningHyderabadCourseData[0].JobBot6}
              ProjectsBot1={MachineLearningHyderabadCourseData[0].ProgramBot1}
              ProjectsBot2={MachineLearningHyderabadCourseData[0].ProgramBot2}
              src1={MachineLearningHyderabadCourseData[0].src1}
              ProjectsH1={MachineLearningHyderabadCourseData[0].ProjectsH1}
              Projectsp1={MachineLearningHyderabadCourseData[0].Projectsp1}
              src2={MachineLearningHyderabadCourseData[0].src2}
              ProjectsH2={MachineLearningHyderabadCourseData[0].ProjectsH2}
              Projectsp2={MachineLearningHyderabadCourseData[0].Projectsp2}
              src3={MachineLearningHyderabadCourseData[0].src3}
              ProjectsH3={MachineLearningHyderabadCourseData[0].ProjectsH3}
              Projectsp3={MachineLearningHyderabadCourseData[0].Projectsp3}
              src4={MachineLearningHyderabadCourseData[0].src4}
              ProjectsH4={MachineLearningHyderabadCourseData[0].ProjectsH4}
              Projectsp4={MachineLearningHyderabadCourseData[0].Projectsp4}
              AlumniBot1={MachineLearningHyderabadCourseData[0].AlumniBot1}
              Asrc1={MachineLearningHyderabadCourseData[0].Asrc1}
              AlumniH1={MachineLearningHyderabadCourseData[0].AlumniH1}
              Alumnip1={MachineLearningHyderabadCourseData[0].Alumnip1}
              Asrc2={MachineLearningHyderabadCourseData[0].Asrc2}
              AlumniH2={MachineLearningHyderabadCourseData[0].AlumniH2}
              Alumnip2={MachineLearningHyderabadCourseData[0].Alumnip2}
              Asrc3={MachineLearningHyderabadCourseData[0].Asrc3}
              AlumniH3={MachineLearningHyderabadCourseData[0].AlumniH3}
              Alumnip3={MachineLearningHyderabadCourseData[0].Alumnip3}
              Asrc4={MachineLearningHyderabadCourseData[0].Asrc4}
              AlumniH4={MachineLearningHyderabadCourseData[0].AlumniH4}
              Alumnip4={MachineLearningHyderabadCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MachineLearningHyderabadCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={MachineLearningHyderabadCourseData[0].CityTextB}
          CityText={MachineLearningHyderabadCourseData[0].CityText}
          CityTextLB={MachineLearningHyderabadCourseData[0].CityTextLB}
          CityTextL={MachineLearningHyderabadCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
