import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FScanadaCourseData } from "../../../CityData/Canada/FullStackDEveloperCourseTrainingcanadaData";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Navbar from "../../../components/Global/Navbar/Navbar";
import Popup from "../../../components/Global/Popup/Popup";
import FeeSection from "../../../components/Seo/FeeSection/FeeSection";
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
            if (popupData === "Full Stack Developer course") {
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
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack Developer Course In Canada - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Sign-up Learnbay For Software Development Course in Canada with Real-Time Projects and an IBM Certification."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Canada, Full-Stack Software Developer Course training in Canada, Full-Stack Software Developer Course institute in Canada, best Full-Stack Software Developer Course institute in Canada, data scientist course in Canada,data scientist certification in Canada, Full-Stack Software Developer Course training institute in Canada, advanced Full-Stack Software Developer Course in Canada, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/canada/full-stack-software-developer-course-in-canada"
        />
        <meta
          property="og:title"
          content="Full-Stack Software Developer Course in Canada | Data Science Training in Canada"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Full-Stack Software Developer Course in Canada. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Canada. Full-Stack Software Developer Course in Canada will enhance your career"
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
          content="Full-Stack Software Developer Course in Canada | Data Science Training in Canada"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Full-Stack Software Developer Course in Canada. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Canada. Full-Stack Software Developer Course in Canada will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Full-Stack Software Developer Course in Canada. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Canada. Full-Stack Software Developer Course in Canada will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />

        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/canada/full-stack-software-developer-course-in-canada"
        />
        <meta
          name="copyright"
          content="Learnbay: Full-Stack Software Developer Courses Certification Training India"
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
          titleCourse="Full-Stack Software Developer Course In Canada"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
          idss="Jn2puEQC8yk"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstToparaImg="To Achieve Your Dream Job"
          firstHeading="Full-Stack Software Developer Course In Canada"
          firstTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          cityParaCont="Enroll in the best Job-ready full-stack software development course in Canada. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve. "
        />
        <SecondSection
          SecondSectionData={FScanadaCourseData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={false}
          Testimonial={FScanadaCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        /> */}
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,15,000"
            FeeEmi="₹ 7,538/month"
            weekendbatch="Weekday Evening (DSA BATCHES)"
            weekdaybatch="Weekday Evening (DSA BATCHES)"
            weekday="MON-WED-FRI"
            weekend="MON-WED-FRI"
            WeekendDate="JAN 26th"
            WeekdayDate="JAN 10th "
            WeekendTime="08:00PM - 10:00PM"
            WeekdayTime="08:00PM - 10:00PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,15,000"
            monthlyPayment1="₹7,538"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,15,000"
            monthlyPayment2="₹11,308"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft fullStackCity={true} />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              fullStackCity={true}
              ProgramHead1={FScanadaCourseData[0].ProgramHead1}
              ProgramBot1={FScanadaCourseData[0].ProgramBot1}
              ProgramBot2={FScanadaCourseData[0].ProgramBot2}
              ProgramHead3={FScanadaCourseData[0].ProgramHead3}
              ProgramHead4={FScanadaCourseData[0].ProgramHead4}
              ProgramBot3={FScanadaCourseData[0].ProgramBot3}
              ProgramBot31={FScanadaCourseData[0].ProgramBot31}
              ProgramBot32={FScanadaCourseData[0].ProgramBot32}
              ProgramBot4={FScanadaCourseData[0].ProgramBot4}
              ProgramBot5={FScanadaCourseData[0].ProgramBot5}
              ProgramBot6={FScanadaCourseData[0].ProgramBot6}
              ProgramBot8={FScanadaCourseData[0].ProgramBot8}
              ProgramBot9={FScanadaCourseData[0].ProgramBot9}
              ProgramBot10={FScanadaCourseData[0].ProgramBot10}
              Courselink1={FScanadaCourseData[0].Courselink1}
              Courselink2={FScanadaCourseData[0].Courselink2}
              Courselink3={FScanadaCourseData[0].Courselink3}
              Courselink4={FScanadaCourseData[0].Courselink4}
              Courselink5={FScanadaCourseData[0].Courselink5}
              Course1={FScanadaCourseData[0].Course1}
              Course2={FScanadaCourseData[0].Course2}
              Course3={FScanadaCourseData[0].Course3}
              Course4={FScanadaCourseData[0].Course4}
              Course5={FScanadaCourseData[0].Course5}
              DomainHead1={FScanadaCourseData[0].DomainHead1}
              DomainBot1={FScanadaCourseData[0].DomainBot1}
              DomainBot2={FScanadaCourseData[0].DomainBot2}
              DomainBot3={FScanadaCourseData[0].DomainBot3}
              DomainList1={FScanadaCourseData[0].DomainList1}
              DomainList2={FScanadaCourseData[0].DomainList2}
              DomainList3={FScanadaCourseData[0].DomainList3}
              DomainList4={FScanadaCourseData[0].DomainList4}
              DomainList5={FScanadaCourseData[0].DomainList5}
              DomainList6={FScanadaCourseData[0].DomainList6}
              DomainList7={FScanadaCourseData[0].DomainList7}
              DomainList8={FScanadaCourseData[0].DomainList8}
              DomainList9={FScanadaCourseData[0].DomainList9}
              DomainList10={FScanadaCourseData[0].DomainList10}
              Domainlink1={FScanadaCourseData[0].Domainlink1}
              Domainlink2={FScanadaCourseData[0].Domainlink2}
              Domainlink3={FScanadaCourseData[0].Domainlink3}
              Domainlink4={FScanadaCourseData[0].Domainlink4}
              Domainlink5={FScanadaCourseData[0].Domainlink5}
              Domainlink6={FScanadaCourseData[0].Domainlink6}
              Domainlink7={FScanadaCourseData[0].Domainlink7}
              Domainlink8={FScanadaCourseData[0].Domainlink8}
              Domainlink9={FScanadaCourseData[0].Domainlink9}
              Domainlink10={FScanadaCourseData[0].Domainlink10}
              CertificationHead1={FScanadaCourseData[0].CertificationHead1}
              CertificationBot1={FScanadaCourseData[0].CertificationBot1}
              CertificationBot2={FScanadaCourseData[0].CertificationBot2}
              // src={FScanadaCourseData[0].src}
              // src22={FScanadaCourseData[0].src22}
              // src33={FScanadaCourseData[0].src33}
              ModuleHead1={FScanadaCourseData[0].ModuleHead1}
              ModuleBot1={FScanadaCourseData[0].ModuleBot1}
              ModuleBot2={FScanadaCourseData[0].ModuleBot2}
              ModuleBot3={FScanadaCourseData[0].ModuleBot3}
              // ModuleHead3={FScanadaCourseData[0].ModuleHead3}
              // ModuleBot4={FScanadaCourseData[0].ModuleBot4}
              ModuleHead2={FScanadaCourseData[0].ModuleHead2}
              syllabush1={FScanadaCourseData[0].syllabush1}
              syllabusb1={FScanadaCourseData[0].syllabusb1}
              SyllabusBotlist11={FScanadaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={FScanadaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={FScanadaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={FScanadaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={FScanadaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={FScanadaCourseData[0].SyllabusBotlist16}
              syllabush2={FScanadaCourseData[0].syllabush2}
              syllabusb2={FScanadaCourseData[0].syllabusb2}
              SyllabusBotlist21={FScanadaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={FScanadaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={FScanadaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={FScanadaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={FScanadaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={FScanadaCourseData[0].SyllabusBotlist26}
              syllabush3={FScanadaCourseData[0].syllabush3}
              syllabusb3={FScanadaCourseData[0].syllabusb3}
              SyllabusBotlist31={FScanadaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={FScanadaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={FScanadaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={FScanadaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={FScanadaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={FScanadaCourseData[0].SyllabusBotlist36}
              syllabush4={FScanadaCourseData[0].syllabush4}
              syllabusb4={FScanadaCourseData[0].syllabusb4}
              SyllabusBotlist41={FScanadaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={FScanadaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={FScanadaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={FScanadaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={FScanadaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={FScanadaCourseData[0].SyllabusBotlist46}
              // syllabussrc={FScanadaCourseData[0].syllabussrc}
              JobHead1={FScanadaCourseData[0].JobHead1}
              JobBot1={FScanadaCourseData[0].JobBot1}
              JobBot2={FScanadaCourseData[0].JobBot2}
              JobBot3={FScanadaCourseData[0].JobBot3}
              JobHead2={FScanadaCourseData[0].JobHead2}
              JobBot5={FScanadaCourseData[0].JobBot5}
              JobBot4={FScanadaCourseData[0].JobBot4}
              JobBot6={FScanadaCourseData[0].JobBot6}
              ProjectsBot1={FScanadaCourseData[0].ProjectsBot1}
              ProjectsBot2={FScanadaCourseData[0].ProjectsBot2}
              src1={FScanadaCourseData[0].src1}
              ProjectsHead1={FScanadaCourseData[0].ProjectsHead1}
              ProjectsH1={FScanadaCourseData[0].ProjectsH1}
              Projectsp1={FScanadaCourseData[0].Projectsp1}
              src2={FScanadaCourseData[0].src2}
              ProjectsH2={FScanadaCourseData[0].ProjectsH2}
              Projectsp2={FScanadaCourseData[0].Projectsp2}
              src3={FScanadaCourseData[0].src3}
              ProjectsH3={FScanadaCourseData[0].ProjectsH3}
              Projectsp3={FScanadaCourseData[0].Projectsp3}
              src4={FScanadaCourseData[0].src4}
              ProjectsH4={FScanadaCourseData[0].ProjectsH4}
              Projectsp4={FScanadaCourseData[0].Projectsp4}
              AlumniBot1={FScanadaCourseData[0].AlumniBot1}
              Asrc1={FScanadaCourseData[0].Asrc1}
              AlumniH1={FScanadaCourseData[0].AlumniH1}
              Alumnip1={FScanadaCourseData[0].Alumnip1}
              Asrc2={FScanadaCourseData[0].Asrc2}
              AlumniH2={FScanadaCourseData[0].AlumniH2}
              Alumnip2={FScanadaCourseData[0].Alumnip2}
              Asrc3={FScanadaCourseData[0].Asrc3}
              AlumniH3={FScanadaCourseData[0].AlumniH3}
              Alumnip3={FScanadaCourseData[0].Alumnip3}
              Asrc4={FScanadaCourseData[0].Asrc4}
              AlumniH4={FScanadaCourseData[0].AlumniH4}
              Alumnip4={FScanadaCourseData[0].Alumnip4}
              alt1={FScanadaCourseData[0].alt1}
              alt2={FScanadaCourseData[0].alt2}
              alt3={FScanadaCourseData[0].alt3}
              alt4={FScanadaCourseData[0].alt4}
              alt5={FScanadaCourseData[0].alt5}
              alt6={FScanadaCourseData[0].alt6}
              alt7={FScanadaCourseData[0].alt7}
              alt8={FScanadaCourseData[0].alt8}
              alt9={FScanadaCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={FScanadaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={FScanadaCourseData[0].CityTextB}
          CityText={FScanadaCourseData[0].CityText}
          CityTextLB={FScanadaCourseData[0].CityTextLB}
          CityTextL={FScanadaCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
