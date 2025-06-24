import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DAPuneCourseData } from "../../../CityData/Pune/dataAnalyticsCourseTrainingInPune";
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
const OfferPopup = dynamic(() =>
  import("../../../components/Global/OfferPopup/OfferPopup")
);
const FAQNew = dynamic(() => import("../../../components/Seo/FAQNew/FAQNew"));

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
        <title>Data Analytics Course Training in Pune | Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in our Data Analytics Course in Pune now!! Gain industry recognition with IBM Certification to accelerate your career as a Data Analyst.          "
        />
        <meta
          name="keywords"
          content="data analytics course in pune, data analytics training in pune
          data analyst course in pune, best data analyst course in pune
          data analytics institute in pune, data analysis courses in pune, data analytics certification in pune, business analytics course in pune, data analytics courses in pune with placement assistance, data analytics classes in pune
          "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/pune/data-analytics-course-training-in-pune"
        />
        <meta
          property="og:title"
          content="Data Analytics Course in pune | Data Science Training in pune"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data Analytics Course in pune. Learnbay is Advanced Data Analytics Course Training Institute in pune. Data Analytics Course in pune will enhance your career"
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
          content="Data Analytics Course in Chennai | Data Science Training in Chennai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data Analytics Course in Chennai. Learnbay is Advanced Data Analytics Course Training Institute in Chennai. Data Analytics Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data Analytics Course in Chennai. Learnbay is Advanced Data Analytics Course Training Institute in Chennai. Data Analytics Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/pune/data-analytics-course-training-in-pune"
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
          titleCourse="Data Analytics Course Training in Pune"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
          brochurePdf={pdfUrl}
          idss="y_0IdhFKJKM"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/data+analytics+header+image.webp"
          firstToparaImg="For Professionals"
          firstHeading="Data Analytics Course Training in Pune"
          firstTopPara="Industrial Training Program for Early-professionals"
          cityParaCont="Gain inarguable eminence to sustain in today’s digital world via Learnbay’s data analytics course in Pune. Join our practical, accessible, and Generative AI-rich courses to build a globally recognized career. Our industry alliance with IBM (course & project certifications) and 450+ MNCs ensures an invincible career path.           "
        />
        <SecondSection SecondSectionData={DAPuneCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={DAPuneCourseData[0].testimonial}
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
            FeeContent5="15 days refund policy"
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
              cityTextDAPune={true}
              cityTextJDAPune={true}
              ProgramHead1={DAPuneCourseData[0].ProgramHead1}
              ProgramBot1={DAPuneCourseData[0].ProgramBot1}
              ProgramBot2={DAPuneCourseData[0].ProgramBot2}
              ProgramBot3={DAPuneCourseData[0].ProgramBot3}
              ProgramBot4={DAPuneCourseData[0].ProgramBot4}
              ProgramBot5={DAPuneCourseData[0].ProgramBot5}
              ProgramBot6={DAPuneCourseData[0].ProgramBot6}
              ProgramBot7={DAPuneCourseData[0].ProgramBot7}
              ProgramBot8={DAPuneCourseData[0].ProgramBot8}
              ProgramBot9={DAPuneCourseData[0].ProgramBot9}
              ProgramBot32={DAPuneCourseData[0].ProgramBot32}
              ProgramBot10={DAPuneCourseData[0].ProgramBot10}
              ProgramBot11={DAPuneCourseData[0].ProgramBot11}
              ProgramBot12={DAPuneCourseData[0].ProgramBot12}
              ProgramHead3={DAPuneCourseData[0].ProgramHead3}
              ProgramBot31={DAPuneCourseData[0].ProgramBot31}
              ProgramHead4={DAPuneCourseData[0].ProgramHead4}
              ProgramHead5={DAPuneCourseData[0].ProgramHead5}
              CertificationHead1={DAPuneCourseData[0].CertificationHead1}
              CertificationBot3={DAPuneCourseData[0].CertificationBot3}
              ProgramHead6={DAPuneCourseData[0].ProgramHead6}
              Courselink1={DAPuneCourseData[0].Courselink1}
              Courselink2={DAPuneCourseData[0].Courselink2}
              Courselink3={DAPuneCourseData[0].Courselink3}
              Courselink4={DAPuneCourseData[0].Courselink4}
              Courselink5={DAPuneCourseData[0].Courselink5}
              Course1={DAPuneCourseData[0].Course1}
              Course2={DAPuneCourseData[0].Course2}
              Course3={DAPuneCourseData[0].Course3}
              Course4={DAPuneCourseData[0].Course4}
              Course5={DAPuneCourseData[0].Course5}
              DomainHead1={DAPuneCourseData[0].DomainHead1}
              DomainBot1={DAPuneCourseData[0].DomainBot1}
              DomainBot2={DAPuneCourseData[0].DomainBot2}
              DomainBot3={DAPuneCourseData[0].DomainBot3}
              DomainList1={DAPuneCourseData[0].DomainList1}
              DomainList2={DAPuneCourseData[0].DomainList2}
              DomainList3={DAPuneCourseData[0].DomainList3}
              DomainList4={DAPuneCourseData[0].DomainList4}
              DomainList5={DAPuneCourseData[0].DomainList5}
              DomainList6={DAPuneCourseData[0].DomainList6}
              DomainList7={DAPuneCourseData[0].DomainList7}
              DomainList8={DAPuneCourseData[0].DomainList8}
              DomainList9={DAPuneCourseData[0].DomainList9}
              DomainList10={DAPuneCourseData[0].DomainList10}
              Domainlink1={DAPuneCourseData[0].Domainlink1}
              Domainlink2={DAPuneCourseData[0].Domainlink2}
              Domainlink3={DAPuneCourseData[0].Domainlink3}
              Domainlink4={DAPuneCourseData[0].Domainlink4}
              Domainlink5={DAPuneCourseData[0].Domainlink5}
              Domainlink6={DAPuneCourseData[0].Domainlink6}
              Domainlink7={DAPuneCourseData[0].Domainlink7}
              Domainlink8={DAPuneCourseData[0].Domainlink8}
              Domainlink9={DAPuneCourseData[0].Domainlink9}
              Domainlink10={DAPuneCourseData[0].Domainlink10}
              CertificationBot1={DAPuneCourseData[0].CertificationBot1}
              CertificationBot2={DAPuneCourseData[0].CertificationBot2}
              src={DAPuneCourseData[0].src}
              src22={DAPuneCourseData[0].src22}
              ModuleHead1={DAPuneCourseData[0].ModuleHead1}
              ModuleBot1={DAPuneCourseData[0].ModuleBot1}
              ModuleBot2={DAPuneCourseData[0].ModuleBot2}
              ModuleBot3={DAPuneCourseData[0].ModuleBot3}
              ModuleBot4={DAPuneCourseData[0].ModuleBot4}
              syllabush1={DAPuneCourseData[0].syllabush1}
              syllabusb1={DAPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={DAPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DAPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DAPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DAPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DAPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DAPuneCourseData[0].SyllabusBotlist16}
              syllabush2={DAPuneCourseData[0].syllabush2}
              syllabusb2={DAPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={DAPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DAPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DAPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DAPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DAPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DAPuneCourseData[0].SyllabusBotlist26}
              syllabush3={DAPuneCourseData[0].syllabush3}
              syllabusb3={DAPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={DAPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DAPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DAPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DAPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DAPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DAPuneCourseData[0].SyllabusBotlist36}
              syllabush4={DAPuneCourseData[0].syllabush4}
              syllabusb4={DAPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={DAPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DAPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DAPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DAPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DAPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DAPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={DAPuneCourseData[0].syllabussrc}
              JobHead1={DAPuneCourseData[0].JobHead1}
              JobBot1={DAPuneCourseData[0].JobBot1}
              JobBot2={DAPuneCourseData[0].JobBot2}
              JobBot4={DAPuneCourseData[0].JobBot4}
              JobBot5={DAPuneCourseData[0].JobBot5}
              JobBot7={DAPuneCourseData[0].JobBot7}
              JobHead2={DAPuneCourseData[0].JobHead2}
              JobHead3={DAPuneCourseData[0].JobHead3}
              JobHead5={DAPuneCourseData[0].JobHead5}
              JobHead4={DAPuneCourseData[0].JobHead4}
              JobBot3={DAPuneCourseData[0].JobBot3}
              JobBot6={DAPuneCourseData[0].JobBot6}
              JobBot8={DAPuneCourseData[0].JobBot8}
              JobBot9={DAPuneCourseData[0].JobBot9}
              JobBot10={DAPuneCourseData[0].JobBot10}
              JobBot11={DAPuneCourseData[0].JobBot11}
              ProjectsBot1={DAPuneCourseData[0].ProjectsBot1}
              ProjectsBot2={DAPuneCourseData[0].ProjectsBot2}
              ProjectsBot3={DAPuneCourseData[0].ProjectsBot3}
              src1={DAPuneCourseData[0].src1}
              ProjectsH1={DAPuneCourseData[0].ProjectsH1}
              Projectsp1={DAPuneCourseData[0].Projectsp1}
              src2={DAPuneCourseData[0].src2}
              ProjectsH2={DAPuneCourseData[0].ProjectsH2}
              Projectsp2={DAPuneCourseData[0].Projectsp2}
              src3={DAPuneCourseData[0].src3}
              ProjectsH3={DAPuneCourseData[0].ProjectsH3}
              Projectsp3={DAPuneCourseData[0].Projectsp3}
              src4={DAPuneCourseData[0].src4}
              ProjectsH4={DAPuneCourseData[0].ProjectsH4}
              Projectsp4={DAPuneCourseData[0].Projectsp4}
              AlumniBot1={DAPuneCourseData[0].AlumniBot1}
              Asrc1={DAPuneCourseData[0].Asrc1}
              AlumniH1={DAPuneCourseData[0].AlumniH1}
              Alumnip1={DAPuneCourseData[0].Alumnip1}
              Asrc2={DAPuneCourseData[0].Asrc2}
              AlumniH2={DAPuneCourseData[0].AlumniH2}
              Alumnip2={DAPuneCourseData[0].Alumnip2}
              Asrc3={DAPuneCourseData[0].Asrc3}
              AlumniH3={DAPuneCourseData[0].AlumniH3}
              Alumnip3={DAPuneCourseData[0].Alumnip3}
              Asrc4={DAPuneCourseData[0].Asrc4}
              AlumniH4={DAPuneCourseData[0].AlumniH4}
              Alumnip4={DAPuneCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DAPuneCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DAPuneCourseData[0].CityTextB}
          CityText={DAPuneCourseData[0].CityText}
          CityTextLB={DAPuneCourseData[0].CityTextLB}
          CityTextL={DAPuneCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
