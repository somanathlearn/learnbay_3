import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MLBangaloreCourseData } from "../../../CityData/Bangalore/MLCourseTrainingBangaloreData";
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
        <title>Machine Learning Course in Bangalore with Job Assistance</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay offers the Most Advanced Machine Learning Training in Bangalore with Hands-on Projects, IBM Certification and Best Career Assistance. Sign-up Now."
        />
        <meta
          name="keywords"
          content="Machine learning course in Bangalore, Machine learning training in Bangalore, Machine learning institute in Bangalore, best Machine learning institute in Bangalore, Machine learning course in Bangalore, Machine learning certification in Bangalore, Machine learning training institute in Bangalore, advanced Machine learning course in Bangalore, Machine learning course with Placement Assistance, Machine learning course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/bangalore/machine-learning-course-training-in-bangalore"
        />
        <meta
          property="og:title"
          content="Machine Learning course Training In Bangalore with Placement Assistance"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Machine Learning coursein Bangalore. We are Advanced Machine Learning courseCertification Training Institute in Bangalore. Machine Learning coursewill enhance your career."
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
          content="Machine Learning courseTraining In Bangalore with Placement Assistance"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Machine Learning courseBangalore. We are Advanced Machine Learning courseCertification Training Institute in Bangalore. Machine Learning coursewill enhance your career."
        />
        <meta
          name="twitter:description"
          content="Machine Learning courseBangalore. We are Advanced Machine Learning courseCertification Training Institute in Bangalore. Machine Learning coursewill enhance your career."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/bangalore/machine-learning-course-training-in-bangalore"
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
          dataScience={true}
          interstedInHide={true}
          titleCourse="AI & ML Program for tech professionals"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          brochurePdf={pdfUrl}
          idss="Jn2puEQC8yk"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/AIML-Header.png"
          firstToparaImg="Training in Bangalore"
          firstHeading="Machine Learning Course"
          firstTopPara="Machine Learning Course For Experienced Tech Professionals"
          cityParaCont="Be eligible to work as an AI/ML expert in MNC/PRODUCT Based Companies. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
        />
        <SecondSection
          SecondSectionData={MLBangaloreCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={MLBangaloreCourseData[0].testimonial}
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
              ProgramBot1={MLBangaloreCourseData[0].ProgramBot1}
              ProgramHead3={MLBangaloreCourseData[0].ProgramHead3}
              ProgramBot3={MLBangaloreCourseData[0].ProgramBot3}
              ProgramBot31={MLBangaloreCourseData[0].ProgramBot31}
              ProgramBot4={MLBangaloreCourseData[0].ProgramBot4}
              ProgramBot5={MLBangaloreCourseData[0].ProgramBot5}
              ProgramBot6={MLBangaloreCourseData[0].ProgramBot6}
              Courselink1={MLBangaloreCourseData[0].Courselink1}
              Courselink2={MLBangaloreCourseData[0].Courselink2}
              Courselink3={MLBangaloreCourseData[0].Courselink3}
              Courselink4={MLBangaloreCourseData[0].Courselink4}
              Courselink5={MLBangaloreCourseData[0].Courselink5}
              Course1={MLBangaloreCourseData[0].Course1}
              Course2={MLBangaloreCourseData[0].Course2}
              Course3={MLBangaloreCourseData[0].Course3}
              Course4={MLBangaloreCourseData[0].Course4}
              Course5={MLBangaloreCourseData[0].Course5}
              DomainHead1={MLBangaloreCourseData[0].DomainHead1}
              DomainBot1={MLBangaloreCourseData[0].DomainBot1}
              DomainBot2={MLBangaloreCourseData[0].DomainBot2}
              DomainBot3={MLBangaloreCourseData[0].DomainBot3}
              DomainList1={MLBangaloreCourseData[0].DomainList1}
              DomainList2={MLBangaloreCourseData[0].DomainList2}
              DomainList3={MLBangaloreCourseData[0].DomainList3}
              DomainList4={MLBangaloreCourseData[0].DomainList4}
              DomainList5={MLBangaloreCourseData[0].DomainList5}
              DomainList6={MLBangaloreCourseData[0].DomainList6}
              DomainList7={MLBangaloreCourseData[0].DomainList7}
              DomainList8={MLBangaloreCourseData[0].DomainList8}
              DomainList9={MLBangaloreCourseData[0].DomainList9}
              DomainList10={MLBangaloreCourseData[0].DomainList10}
              Domainlink1={MLBangaloreCourseData[0].Domainlink1}
              Domainlink2={MLBangaloreCourseData[0].Domainlink2}
              Domainlink3={MLBangaloreCourseData[0].Domainlink3}
              Domainlink4={MLBangaloreCourseData[0].Domainlink4}
              Domainlink5={MLBangaloreCourseData[0].Domainlink5}
              Domainlink6={MLBangaloreCourseData[0].Domainlink6}
              Domainlink7={MLBangaloreCourseData[0].Domainlink7}
              Domainlink8={MLBangaloreCourseData[0].Domainlink8}
              Domainlink9={MLBangaloreCourseData[0].Domainlink9}
              Domainlink10={MLBangaloreCourseData[0].Domainlink10}
              CertificationBot1={MLBangaloreCourseData[0].CertificationBot1}
              src={MLBangaloreCourseData[0].src}
              src22={MLBangaloreCourseData[0].src22}
              src33={MLBangaloreCourseData[0].src33}
              ModuleBot1={MLBangaloreCourseData[0].ModuleBot1}
              ModuleBot2={MLBangaloreCourseData[0].ModuleBot2}
              syllabush1={MLBangaloreCourseData[0].syllabush1}
              syllabusb1={MLBangaloreCourseData[0].syllabusb1}
              SyllabusBotlist11={MLBangaloreCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={MLBangaloreCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={MLBangaloreCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={MLBangaloreCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={MLBangaloreCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={MLBangaloreCourseData[0].SyllabusBotlist16}
              syllabush2={MLBangaloreCourseData[0].syllabush2}
              syllabusb2={MLBangaloreCourseData[0].syllabusb2}
              SyllabusBotlist21={MLBangaloreCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={MLBangaloreCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={MLBangaloreCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={MLBangaloreCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={MLBangaloreCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={MLBangaloreCourseData[0].SyllabusBotlist26}
              syllabush3={MLBangaloreCourseData[0].syllabush3}
              syllabusb3={MLBangaloreCourseData[0].syllabusb3}
              SyllabusBotlist31={MLBangaloreCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={MLBangaloreCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={MLBangaloreCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={MLBangaloreCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={MLBangaloreCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={MLBangaloreCourseData[0].SyllabusBotlist36}
              syllabush4={MLBangaloreCourseData[0].syllabush4}
              syllabusb4={MLBangaloreCourseData[0].syllabusb4}
              SyllabusBotlist41={MLBangaloreCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={MLBangaloreCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={MLBangaloreCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={MLBangaloreCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={MLBangaloreCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={MLBangaloreCourseData[0].SyllabusBotlist46}
              syllabussrc={MLBangaloreCourseData[0].syllabussrc}
              JobBot1={MLBangaloreCourseData[0].JobBot1}
              JobHead2={MLBangaloreCourseData[0].JobHead2}
              JobBot3={MLBangaloreCourseData[0].JobBot3}
              JobBot4={MLBangaloreCourseData[0].JobBot4}
              ProjectsBot1={MLBangaloreCourseData[0].ProgramBot1}
              src1={MLBangaloreCourseData[0].src1}
              ProjectsH1={MLBangaloreCourseData[0].ProjectsH1}
              Projectsp1={MLBangaloreCourseData[0].Projectsp1}
              src2={MLBangaloreCourseData[0].src2}
              ProjectsH2={MLBangaloreCourseData[0].ProjectsH2}
              Projectsp2={MLBangaloreCourseData[0].Projectsp2}
              src3={MLBangaloreCourseData[0].src3}
              ProjectsH3={MLBangaloreCourseData[0].ProjectsH3}
              Projectsp3={MLBangaloreCourseData[0].Projectsp3}
              src4={MLBangaloreCourseData[0].src4}
              ProjectsH4={MLBangaloreCourseData[0].ProjectsH4}
              Projectsp4={MLBangaloreCourseData[0].Projectsp4}
              AlumniBot1={MLBangaloreCourseData[0].AlumniBot1}
              Asrc1={MLBangaloreCourseData[0].Asrc1}
              AlumniH1={MLBangaloreCourseData[0].AlumniH1}
              Alumnip1={MLBangaloreCourseData[0].Alumnip1}
              Asrc2={MLBangaloreCourseData[0].Asrc2}
              AlumniH2={MLBangaloreCourseData[0].AlumniH2}
              Alumnip2={MLBangaloreCourseData[0].Alumnip2}
              Asrc3={MLBangaloreCourseData[0].Asrc3}
              AlumniH3={MLBangaloreCourseData[0].AlumniH3}
              Alumnip3={MLBangaloreCourseData[0].Alumnip3}
              Asrc4={MLBangaloreCourseData[0].Asrc4}
              AlumniH4={MLBangaloreCourseData[0].AlumniH4}
              Alumnip4={MLBangaloreCourseData[0].Alumnip4}
              alt1={MLBangaloreCourseData[0].alt1}
              alt2={MLBangaloreCourseData[0].alt2}
              alt3={MLBangaloreCourseData[0].alt3}
              alt4={MLBangaloreCourseData[0].alt4}
              alt5={MLBangaloreCourseData[0].alt5}
              alt6={MLBangaloreCourseData[0].alt6}
              alt7={MLBangaloreCourseData[0].alt7}
              alt8={MLBangaloreCourseData[0].alt8}
              alt9={MLBangaloreCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MLBangaloreCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={MLBangaloreCourseData[0].CityTextB}
          CityText={MLBangaloreCourseData[0].CityText}
          CityTextLB={MLBangaloreCourseData[0].CityTextLB}
          CityTextL={MLBangaloreCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
