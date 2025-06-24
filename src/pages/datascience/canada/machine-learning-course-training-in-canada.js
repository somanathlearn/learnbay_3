import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MLcanadaCourseData } from "../../../CityData/Canada/MLCourseTrainingCanadaData";
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
          Best Machine Learning Course in Canada with Career Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay's Most Comprehensive Machine Learning Training Program in Canada specifically designed for working professionals. Enroll Now."
        />
        <meta
          name="keywords"
          content="Machine learning course in Canada, Machine learning training in Canada, Machine learning institute in Canada, best Machine learning institute in Canada, Machine learning course in Canada, Machine learning certification in Canada, Machine learning training institute in Canada, advanced Machine learning course in Canada, Machine learning course with Placement Assistance, Machine learning course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/canada/machine-learning-course-training-in-canada"
        />
        <meta
          property="og:title"
          content="Machine Learning Course in Canada | Data Science Training in Canada"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Machine Learning Course in Canada. Learnbay is Advanced Machine Learning Course Training Institute in Canada. Machine Learning Course in Canada will enhance your career"
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
          content="Machine Learning Course in Canada | Data Science Training in Canada"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Machine Learning Course in Canada. Learnbay is Advanced Machine Learning Course Training Institute in Canada. Machine Learning Course in Canada will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Machine Learning Course in Canada. Learnbay is Advanced Machine Learning Course Training Institute in Canada. Machine Learning Course in Canada will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/canada/machine-learning-course-training-in-canada"
        />
        <meta
          name="copyright"
          content="Learnbay: Machine Learning Courses Certification Training Canada"
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
          titleCourse="Machine Learning Course Training In Canada"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="Jn2puEQC8yk"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/ML.png"
          firstToparaImg="Training In Canada"
          firstHeading="Machine Learning Course"
          firstTopPara="Machine Learning Course For Experienced Tech Professionals"
          cityParaCont="Be eligible to work as an AI/ML expert in MNC/PRODUCT Based Companies. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
        />
        <SecondSection
          SecondSectionData={MLcanadaCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={MLcanadaCourseData[0].testimonial}
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
              ProgramHead1={MLcanadaCourseData[0].ProgramHead1}
              ProgramBot1={MLcanadaCourseData[0].ProgramBot1}
              ProgramBot2={MLcanadaCourseData[0].ProgramBot2}
              ProgramHead3={MLcanadaCourseData[0].ProgramHead3}
              ProgramHead4={MLcanadaCourseData[0].ProgramHead4}
              ProgramBot3={MLcanadaCourseData[0].ProgramBot3}
              ProgramBot31={MLcanadaCourseData[0].ProgramBot31}
              ProgramBot32={MLcanadaCourseData[0].ProgramBot32}
              ProgramBot4={MLcanadaCourseData[0].ProgramBot4}
              ProgramBot5={MLcanadaCourseData[0].ProgramBot5}
              ProgramBot6={MLcanadaCourseData[0].ProgramBot6}
              ProgramBot8={MLcanadaCourseData[0].ProgramBot8}
              ProgramBot9={MLcanadaCourseData[0].ProgramBot9}
              ProgramBot10={MLcanadaCourseData[0].ProgramBot10}
              Courselink1={MLcanadaCourseData[0].Courselink1}
              Courselink2={MLcanadaCourseData[0].Courselink2}
              Courselink3={MLcanadaCourseData[0].Courselink3}
              Courselink4={MLcanadaCourseData[0].Courselink4}
              Courselink5={MLcanadaCourseData[0].Courselink5}
              Course1={MLcanadaCourseData[0].Course1}
              Course2={MLcanadaCourseData[0].Course2}
              Course3={MLcanadaCourseData[0].Course3}
              Course4={MLcanadaCourseData[0].Course4}
              Course5={MLcanadaCourseData[0].Course5}
              DomainHead1={MLcanadaCourseData[0].DomainHead1}
              DomainBot1={MLcanadaCourseData[0].DomainBot1}
              DomainBot2={MLcanadaCourseData[0].DomainBot2}
              DomainBot3={MLcanadaCourseData[0].DomainBot3}
              DomainList1={MLcanadaCourseData[0].DomainList1}
              DomainList2={MLcanadaCourseData[0].DomainList2}
              DomainList3={MLcanadaCourseData[0].DomainList3}
              DomainList4={MLcanadaCourseData[0].DomainList4}
              DomainList5={MLcanadaCourseData[0].DomainList5}
              DomainList6={MLcanadaCourseData[0].DomainList6}
              DomainList7={MLcanadaCourseData[0].DomainList7}
              DomainList8={MLcanadaCourseData[0].DomainList8}
              DomainList9={MLcanadaCourseData[0].DomainList9}
              DomainList10={MLcanadaCourseData[0].DomainList10}
              Domainlink1={MLcanadaCourseData[0].Domainlink1}
              Domainlink2={MLcanadaCourseData[0].Domainlink2}
              Domainlink3={MLcanadaCourseData[0].Domainlink3}
              Domainlink4={MLcanadaCourseData[0].Domainlink4}
              Domainlink5={MLcanadaCourseData[0].Domainlink5}
              Domainlink6={MLcanadaCourseData[0].Domainlink6}
              Domainlink7={MLcanadaCourseData[0].Domainlink7}
              Domainlink8={MLcanadaCourseData[0].Domainlink8}
              Domainlink9={MLcanadaCourseData[0].Domainlink9}
              Domainlink10={MLcanadaCourseData[0].Domainlink10}
              CertificationHead1={MLcanadaCourseData[0].CertificationHead1}
              CertificationBot1={MLcanadaCourseData[0].CertificationBot1}
              CertificationBot2={MLcanadaCourseData[0].CertificationBot2}
              src={MLcanadaCourseData[0].src}
              src22={MLcanadaCourseData[0].src22}
              src33={MLcanadaCourseData[0].src33}
              ModuleHead1={MLcanadaCourseData[0].ModuleHead1}
              ModuleBot1={MLcanadaCourseData[0].ModuleBot1}
              ModuleBot2={MLcanadaCourseData[0].ModuleBot2}
              ModuleBot3={MLcanadaCourseData[0].ModuleBot3}
              ModuleHead3={MLcanadaCourseData[0].ModuleHead3}
              ModuleBot4={MLcanadaCourseData[0].ModuleBot4}
              ModuleHead2={MLcanadaCourseData[0].ModuleHead2}
              syllabush1={MLcanadaCourseData[0].syllabush1}
              syllabusb1={MLcanadaCourseData[0].syllabusb1}
              SyllabusBotlist11={MLcanadaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={MLcanadaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={MLcanadaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={MLcanadaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={MLcanadaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={MLcanadaCourseData[0].SyllabusBotlist16}
              syllabush2={MLcanadaCourseData[0].syllabush2}
              syllabusb2={MLcanadaCourseData[0].syllabusb2}
              SyllabusBotlist21={MLcanadaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={MLcanadaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={MLcanadaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={MLcanadaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={MLcanadaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={MLcanadaCourseData[0].SyllabusBotlist26}
              syllabush3={MLcanadaCourseData[0].syllabush3}
              syllabusb3={MLcanadaCourseData[0].syllabusb3}
              SyllabusBotlist31={MLcanadaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={MLcanadaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={MLcanadaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={MLcanadaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={MLcanadaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={MLcanadaCourseData[0].SyllabusBotlist36}
              syllabush4={MLcanadaCourseData[0].syllabush4}
              syllabusb4={MLcanadaCourseData[0].syllabusb4}
              SyllabusBotlist41={MLcanadaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={MLcanadaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={MLcanadaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={MLcanadaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={MLcanadaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={MLcanadaCourseData[0].SyllabusBotlist46}
              syllabussrc={MLcanadaCourseData[0].syllabussrc}
              JobHead1={MLcanadaCourseData[0].JobHead1}
              JobBot1={MLcanadaCourseData[0].JobBot1}
              JobBot2={MLcanadaCourseData[0].JobBot2}
              JobBot3={MLcanadaCourseData[0].JobBot3}
              JobHead2={MLcanadaCourseData[0].JobHead2}
              JobBot5={MLcanadaCourseData[0].JobBot5}
              JobBot4={MLcanadaCourseData[0].JobBot4}
              JobBot6={MLcanadaCourseData[0].JobBot6}
              ProjectsBot1={MLcanadaCourseData[0].ProjectsBot1}
              ProjectsBot2={MLcanadaCourseData[0].ProjectsBot2}
              src1={MLcanadaCourseData[0].src1}
              ProjectsHead1={MLcanadaCourseData[0].ProjectsHead1}
              ProjectsH1={MLcanadaCourseData[0].ProjectsH1}
              Projectsp1={MLcanadaCourseData[0].Projectsp1}
              src2={MLcanadaCourseData[0].src2}
              ProjectsH2={MLcanadaCourseData[0].ProjectsH2}
              Projectsp2={MLcanadaCourseData[0].Projectsp2}
              src3={MLcanadaCourseData[0].src3}
              ProjectsH3={MLcanadaCourseData[0].ProjectsH3}
              Projectsp3={MLcanadaCourseData[0].Projectsp3}
              src4={MLcanadaCourseData[0].src4}
              ProjectsH4={MLcanadaCourseData[0].ProjectsH4}
              Projectsp4={MLcanadaCourseData[0].Projectsp4}
              AlumniBot1={MLcanadaCourseData[0].AlumniBot1}
              Asrc1={MLcanadaCourseData[0].Asrc1}
              AlumniH1={MLcanadaCourseData[0].AlumniH1}
              Alumnip1={MLcanadaCourseData[0].Alumnip1}
              Asrc2={MLcanadaCourseData[0].Asrc2}
              AlumniH2={MLcanadaCourseData[0].AlumniH2}
              Alumnip2={MLcanadaCourseData[0].Alumnip2}
              Asrc3={MLcanadaCourseData[0].Asrc3}
              AlumniH3={MLcanadaCourseData[0].AlumniH3}
              Alumnip3={MLcanadaCourseData[0].Alumnip3}
              Asrc4={MLcanadaCourseData[0].Asrc4}
              AlumniH4={MLcanadaCourseData[0].AlumniH4}
              Alumnip4={MLcanadaCourseData[0].Alumnip4}
              alt1={MLcanadaCourseData[0].alt1}
              alt2={MLcanadaCourseData[0].alt2}
              alt3={MLcanadaCourseData[0].alt3}
              alt4={MLcanadaCourseData[0].alt4}
              alt5={MLcanadaCourseData[0].alt5}
              alt6={MLcanadaCourseData[0].alt6}
              alt7={MLcanadaCourseData[0].alt7}
              alt8={MLcanadaCourseData[0].alt8}
              alt9={MLcanadaCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MLcanadaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={MLcanadaCourseData[0].CityTextB}
          CityText={MLcanadaCourseData[0].CityText}
          CityTextLB={MLcanadaCourseData[0].CityTextLB}
          CityTextL={MLcanadaCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
