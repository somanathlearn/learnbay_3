import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MLDubaiCourseData } from "../../../CityData/Dubai/MLCourseTrainingDubaiData";
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
          Best Machine Learning Course in Dubai with Career Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Boost your skills in Machine Learning with Learnbay's top-notch Machine Learning Certification Program in Dubai with Best Career Assistance. Enroll Now."
        />
        <meta
          name="keywords"
          content="Machine learning course in Dubai, Machine learning training in Dubai, Machine learning institute in Dubai, best Machine learning institute in Dubai, Machine learning course in Dubai, Machine learning certification in Dubai, Machine learning training institute in Dubai, advanced Machine learning course in Dubai, Machine learning course with Placement Assistance, Machine learning course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/dubai/machine-learning-course-training-in-dubai"
        />
        <meta
          property="og:title"
          content="Machine Learning Course in Dubai | Data Science Training in Dubai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Machine Learning Course in Dubai. Learnbay is Advanced Machine Learning Course Training Institute in Dubai. Machine Learning Course in Dubai will enhance your career"
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
          content="Machine Learning Course in Dubai | Data Science Training in Dubai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Machine Learning Course in Dubai. Learnbay is Advanced Machine Learning Course Training Institute in Dubai. Machine Learning Course in Dubai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Machine Learning Course in Dubai. Learnbay is Advanced Machine Learning Course Training Institute in Dubai. Machine Learning Course in Dubai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/dubai/machine-learning-course-training-in-dubai"
        />
        <meta
          name="copyright"
          content="Learnbay: Machine Learning Courses Certification Training Dubai"
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
          titleCourse="AI & ML Program for tech professionals"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          brochurePdf={pdfUrl}
          idss="Jn2puEQC8yk"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/AIML-Header.png"
          firstToparaImg="For Managers and Leaders"
          firstHeading="Machine Learning (ML) Course Training in Dubai"
          firstTopPara="Job-oriented Data Science Training for working professionals"
          cityParaCont=" Be eligible to work as an AI/ML expert in MNC/PRODUCT Based Companies. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
        />
        <SecondSection SecondSectionData={MLDubaiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={MLDubaiCourseData[0].testimonial}
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
              certificate1={true}
              ProgramBot1={MLDubaiCourseData[0].ProgramBot1}
              ProgramHead3={MLDubaiCourseData[0].ProgramHead3}
              ProgramBot3={MLDubaiCourseData[0].ProgramBot3}
              ProgramBot31={MLDubaiCourseData[0].ProgramBot31}
              ProgramBot4={MLDubaiCourseData[0].ProgramBot4}
              ProgramBot5={MLDubaiCourseData[0].ProgramBot5}
              ProgramBot6={MLDubaiCourseData[0].ProgramBot6}
              Courselink1={MLDubaiCourseData[0].Courselink1}
              Courselink2={MLDubaiCourseData[0].Courselink2}
              Courselink3={MLDubaiCourseData[0].Courselink3}
              Courselink4={MLDubaiCourseData[0].Courselink4}
              Courselink5={MLDubaiCourseData[0].Courselink5}
              Course1={MLDubaiCourseData[0].Course1}
              Course2={MLDubaiCourseData[0].Course2}
              Course3={MLDubaiCourseData[0].Course3}
              Course4={MLDubaiCourseData[0].Course4}
              Course5={MLDubaiCourseData[0].Course5}
              DomainHead1={MLDubaiCourseData[0].DomainHead1}
              DomainBot1={MLDubaiCourseData[0].DomainBot1}
              DomainBot2={MLDubaiCourseData[0].DomainBot2}
              DomainBot3={MLDubaiCourseData[0].DomainBot3}
              DomainList1={MLDubaiCourseData[0].DomainList1}
              DomainList2={MLDubaiCourseData[0].DomainList2}
              DomainList3={MLDubaiCourseData[0].DomainList3}
              DomainList4={MLDubaiCourseData[0].DomainList4}
              DomainList5={MLDubaiCourseData[0].DomainList5}
              DomainList6={MLDubaiCourseData[0].DomainList6}
              DomainList7={MLDubaiCourseData[0].DomainList7}
              DomainList8={MLDubaiCourseData[0].DomainList8}
              DomainList9={MLDubaiCourseData[0].DomainList9}
              DomainList10={MLDubaiCourseData[0].DomainList10}
              Domainlink1={MLDubaiCourseData[0].Domainlink1}
              Domainlink2={MLDubaiCourseData[0].Domainlink2}
              Domainlink3={MLDubaiCourseData[0].Domainlink3}
              Domainlink4={MLDubaiCourseData[0].Domainlink4}
              Domainlink5={MLDubaiCourseData[0].Domainlink5}
              Domainlink6={MLDubaiCourseData[0].Domainlink6}
              Domainlink7={MLDubaiCourseData[0].Domainlink7}
              Domainlink8={MLDubaiCourseData[0].Domainlink8}
              Domainlink9={MLDubaiCourseData[0].Domainlink9}
              Domainlink10={MLDubaiCourseData[0].Domainlink10}
              CertificationBot1={MLDubaiCourseData[0].CertificationBot1}
              src={MLDubaiCourseData[0].src}
              // src22={MLDubaiCourseData[0].src22}
              // src33={MLDubaiCourseData[0].src33}
              ModuleBot1={MLDubaiCourseData[0].ModuleBot1}
              ModuleBot2={MLDubaiCourseData[0].ModuleBot2}
              syllabush1={MLDubaiCourseData[0].syllabush1}
              syllabusb1={MLDubaiCourseData[0].syllabusb1}
              SyllabusBotlist11={MLDubaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={MLDubaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={MLDubaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={MLDubaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={MLDubaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={MLDubaiCourseData[0].SyllabusBotlist16}
              syllabush2={MLDubaiCourseData[0].syllabush2}
              syllabusb2={MLDubaiCourseData[0].syllabusb2}
              SyllabusBotlist21={MLDubaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={MLDubaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={MLDubaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={MLDubaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={MLDubaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={MLDubaiCourseData[0].SyllabusBotlist26}
              syllabush3={MLDubaiCourseData[0].syllabush3}
              syllabusb3={MLDubaiCourseData[0].syllabusb3}
              SyllabusBotlist31={MLDubaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={MLDubaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={MLDubaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={MLDubaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={MLDubaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={MLDubaiCourseData[0].SyllabusBotlist36}
              syllabush4={MLDubaiCourseData[0].syllabush4}
              syllabusb4={MLDubaiCourseData[0].syllabusb4}
              SyllabusBotlist41={MLDubaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={MLDubaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={MLDubaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={MLDubaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={MLDubaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={MLDubaiCourseData[0].SyllabusBotlist46}
              syllabussrc={MLDubaiCourseData[0].syllabussrc}
              JobBot1={MLDubaiCourseData[0].JobBot1}
              JobHead2={MLDubaiCourseData[0].JobHead2}
              JobBot3={MLDubaiCourseData[0].JobBot3}
              JobBot4={MLDubaiCourseData[0].JobBot4}
              ProjectsBot1={MLDubaiCourseData[0].ProgramBot1}
              src1={MLDubaiCourseData[0].src1}
              ProjectsH1={MLDubaiCourseData[0].ProjectsH1}
              Projectsp1={MLDubaiCourseData[0].Projectsp1}
              src2={MLDubaiCourseData[0].src2}
              ProjectsH2={MLDubaiCourseData[0].ProjectsH2}
              Projectsp2={MLDubaiCourseData[0].Projectsp2}
              src3={MLDubaiCourseData[0].src3}
              ProjectsH3={MLDubaiCourseData[0].ProjectsH3}
              Projectsp3={MLDubaiCourseData[0].Projectsp3}
              src4={MLDubaiCourseData[0].src4}
              ProjectsH4={MLDubaiCourseData[0].ProjectsH4}
              Projectsp4={MLDubaiCourseData[0].Projectsp4}
              AlumniBot1={MLDubaiCourseData[0].AlumniBot1}
              Asrc1={MLDubaiCourseData[0].Asrc1}
              AlumniH1={MLDubaiCourseData[0].AlumniH1}
              Alumnip1={MLDubaiCourseData[0].Alumnip1}
              Asrc2={MLDubaiCourseData[0].Asrc2}
              AlumniH2={MLDubaiCourseData[0].AlumniH2}
              Alumnip2={MLDubaiCourseData[0].Alumnip2}
              Asrc3={MLDubaiCourseData[0].Asrc3}
              AlumniH3={MLDubaiCourseData[0].AlumniH3}
              Alumnip3={MLDubaiCourseData[0].Alumnip3}
              Asrc4={MLDubaiCourseData[0].Asrc4}
              AlumniH4={MLDubaiCourseData[0].AlumniH4}
              Alumnip4={MLDubaiCourseData[0].Alumnip4}
              alt1={MLDubaiCourseData[0].alt1}
              alt2={MLDubaiCourseData[0].alt2}
              alt3={MLDubaiCourseData[0].alt3}
              alt4={MLDubaiCourseData[0].alt4}
              alt5={MLDubaiCourseData[0].alt5}
              alt6={MLDubaiCourseData[0].alt6}
              alt7={MLDubaiCourseData[0].alt7}
              alt8={MLDubaiCourseData[0].alt8}
              alt9={MLDubaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MLDubaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
