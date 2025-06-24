import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FullStackChennaiCourseData } from "../../../CityData/Chennai/fullstackSoftwareDeveloperCourseInChennai";
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
        <title>Full Stack Developer Course In Chennai - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Looking for Best Full Stack Training Program in Chennai? Become A Skilled Full Stack Developer with Learnbay's Advance Full Stack Curriculum Modules with Best Career Assistance."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Chennai, Full-Stack Software Developer Course training in Chennai, Full-Stack Software Developer Course institute in Chennai, best Full-Stack Software Developer Course institute in Chennai, data scientist course in Chennai,data scientist certification in Chennai, Full-Stack Software Developer Course training institute in Chennai, advanced Full-Stack Software Developer Course in Chennai, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/chennai/full-stack-software-developer-course-in-chennai"
        />
        <meta
          property="og:title"
          content="Full-Stack Software Developer Course in Chennai | Data Science Training in Chennai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Full-Stack Software Developer Course in Chennai. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Chennai. Full-Stack Software Developer Course in Chennai will enhance your career"
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
          content="Full-Stack Software Developer Course in Chennai | Data Science Training in Chennai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Full-Stack Software Developer Course in Chennai. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Chennai. Full-Stack Software Developer Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Full-Stack Software Developer Course in Chennai. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Chennai. Full-Stack Software Developer Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/chennai/full-stack-software-developer-course-in-chennai"
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
        <Navbar popup={true} dataScience={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form
              popup={true}
              setTrigger={setPopups}
              dataScience={true}
              interstedInHide={true}
            />
          </div>
        </Popup>
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          cityParaCont=" Enroll in the best Job-ready full-stack software development course in Chennai. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve."
          titleCourse="Full-Stack Software Developer Course In Chennai To Achieve Your Dream Job"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstHeading="Full-Stack Software Developer Course In Chennai "
          firstToparaImg="To Achieve Your Dream Job"
          firstTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          idss="YWxTtvb3x-U"
        />
        <SecondSection
          SecondSectionData={FullStackChennaiCourseData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={false}
          Testimonial={FullStackChennaiCourseData[0].testimonial}
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
              ProgramBot1={FullStackChennaiCourseData[0].ProgramBot1}
              ProgramBot2={FullStackChennaiCourseData[0].ProgramBot2}
              ProgramBot3={FullStackChennaiCourseData[0].ProgramBot3}
              ProgramHead4={FullStackChennaiCourseData[0].ProgramHead4}
              ProgramBot4={FullStackChennaiCourseData[0].ProgramBot4}
              ProgramHead5={FullStackChennaiCourseData[0].ProgramHead5}
              ProgramBot5={FullStackChennaiCourseData[0].ProgramBot5}
              ProgramHead6={FullStackChennaiCourseData[0].ProgramHead6}
              ProgramBot6={FullStackChennaiCourseData[0].ProgramBot6}
              ProgramHead7={FullStackChennaiCourseData[0].ProgramHead7}
              ProgramBot8={FullStackChennaiCourseData[0].ProgramBot8}
              ProgramHead8={FullStackChennaiCourseData[0].ProgramHead8}
              ProgramHead9={FullStackChennaiCourseData[0].ProgramHead9}
              ProgramHead10={FullStackChennaiCourseData[0].ProgramHead10}
              ProgramHead11={FullStackChennaiCourseData[0].ProgramHead11}
              ProgramHead12={FullStackChennaiCourseData[0].ProgramHead12}
              ProgramHead13={FullStackChennaiCourseData[0].ProgramHead13}
              ProgramBot9={FullStackChennaiCourseData[0].ProgramBot9}
              DomainHead1={FullStackChennaiCourseData[0].DomainHead1}
              DomainBot1={FullStackChennaiCourseData[0].DomainBot1}
              DomainHead2={FullStackChennaiCourseData[0].DomainHead2}
              DomainHead3={FullStackChennaiCourseData[0].DomainHead3}
              DomainHead4={FullStackChennaiCourseData[0].DomainHead4}
              DomainHead5={FullStackChennaiCourseData[0].DomainHead5}
              DomainHead6={FullStackChennaiCourseData[0].DomainHead6}
              DomainHead7={FullStackChennaiCourseData[0].DomainHead7}
              DomainBot2={FullStackChennaiCourseData[0].DomainBot2}
              DomainBot3={FullStackChennaiCourseData[0].DomainBot3}
              DomainList1={FullStackChennaiCourseData[0].DomainList1}
              DomainList2={FullStackChennaiCourseData[0].DomainList2}
              DomainList3={FullStackChennaiCourseData[0].DomainList3}
              DomainList4={FullStackChennaiCourseData[0].DomainList4}
              DomainList5={FullStackChennaiCourseData[0].DomainList5}
              DomainList6={FullStackChennaiCourseData[0].DomainList6}
              DomainList7={FullStackChennaiCourseData[0].DomainList7}
              DomainList8={FullStackChennaiCourseData[0].DomainList8}
              DomainList9={FullStackChennaiCourseData[0].DomainList9}
              DomainList10={FullStackChennaiCourseData[0].DomainList10}
              Domainlink1={FullStackChennaiCourseData[0].Domainlink1}
              Domainlink2={FullStackChennaiCourseData[0].Domainlink2}
              Domainlink3={FullStackChennaiCourseData[0].Domainlink3}
              Domainlink4={FullStackChennaiCourseData[0].Domainlink4}
              Domainlink5={FullStackChennaiCourseData[0].Domainlink5}
              Domainlink6={FullStackChennaiCourseData[0].Domainlink6}
              Domainlink7={FullStackChennaiCourseData[0].Domainlink7}
              Domainlink8={FullStackChennaiCourseData[0].Domainlink8}
              Domainlink9={FullStackChennaiCourseData[0].Domainlink9}
              Domainlink10={FullStackChennaiCourseData[0].Domainlink10}
              CertificationHead1={
                FullStackChennaiCourseData[0].CertificationHead1
              }
              CertificationBot1={
                FullStackChennaiCourseData[0].CertificationBot1
              }
              src={FullStackChennaiCourseData[0].src}
              ModuleHead1={FullStackChennaiCourseData[0].ModuleHead1}
              ModuleBot1={FullStackChennaiCourseData[0].ModuleBot1}
              ModuleHead2={FullStackChennaiCourseData[0].Head2}
              ModuleBot3={FullStackChennaiCourseData[0].ModuleBot3}
              ModuleBot2={FullStackChennaiCourseData[0].ModuleBot2}
              syllabush1={FullStackChennaiCourseData[0].syllabush1}
              syllabusb1={FullStackChennaiCourseData[0].syllabusb1}
              SyllabusBotlist11={
                FullStackChennaiCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                FullStackChennaiCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                FullStackChennaiCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                FullStackChennaiCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                FullStackChennaiCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                FullStackChennaiCourseData[0].SyllabusBotlist16
              }
              syllabush2={FullStackChennaiCourseData[0].syllabush2}
              syllabusb2={FullStackChennaiCourseData[0].syllabusb2}
              SyllabusBotlist21={
                FullStackChennaiCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                FullStackChennaiCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                FullStackChennaiCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                FullStackChennaiCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                FullStackChennaiCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                FullStackChennaiCourseData[0].SyllabusBotlist26
              }
              syllabush3={FullStackChennaiCourseData[0].syllabush3}
              syllabusb3={FullStackChennaiCourseData[0].syllabusb3}
              SyllabusBotlist31={
                FullStackChennaiCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                FullStackChennaiCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                FullStackChennaiCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                FullStackChennaiCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                FullStackChennaiCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                FullStackChennaiCourseData[0].SyllabusBotlist36
              }
              syllabush4={FullStackChennaiCourseData[0].syllabush4}
              syllabusb4={FullStackChennaiCourseData[0].syllabusb4}
              SyllabusBotlist41={
                FullStackChennaiCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                FullStackChennaiCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                FullStackChennaiCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                FullStackChennaiCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                FullStackChennaiCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                FullStackChennaiCourseData[0].SyllabusBotlist46
              }
              syllabussrc={FullStackChennaiCourseData[0].syllabussrc}
              JobHead1={FullStackChennaiCourseData[0].JobHead1}
              JobBot1={FullStackChennaiCourseData[0].JobBot1}
              JobBot2={FullStackChennaiCourseData[0].JobBot2}
              JobBot5={FullStackChennaiCourseData[0].JobBot5}
              JobHead2={FullStackChennaiCourseData[0].JobHead2}
              JobBot3={FullStackChennaiCourseData[0].JobBot3}
              JobBot4={FullStackChennaiCourseData[0].JobBot4}
              JobBot6={FullStackChennaiCourseData[0].JobBot6}
              ProjectsBot1={FullStackChennaiCourseData[0].ProgramBot1}
              ProjectsBot2={FullStackChennaiCourseData[0].ProgramBot2}
              src1={FullStackChennaiCourseData[0].src1}
              alt2={FullStackChennaiCourseData[0].alt2}
              alt3={FullStackChennaiCourseData[0].alt3}
              alt4={FullStackChennaiCourseData[0].alt4}
              alt5={FullStackChennaiCourseData[0].alt5}
              ProjectsH1={FullStackChennaiCourseData[0].ProjectsH1}
              Projectsp1={FullStackChennaiCourseData[0].Projectsp1}
              src2={FullStackChennaiCourseData[0].src2}
              ProjectsH2={FullStackChennaiCourseData[0].ProjectsH2}
              Projectsp2={FullStackChennaiCourseData[0].Projectsp2}
              src3={FullStackChennaiCourseData[0].src3}
              ProjectsH3={FullStackChennaiCourseData[0].ProjectsH3}
              Projectsp3={FullStackChennaiCourseData[0].Projectsp3}
              src4={FullStackChennaiCourseData[0].src4}
              ProjectsH4={FullStackChennaiCourseData[0].ProjectsH4}
              Projectsp4={FullStackChennaiCourseData[0].Projectsp4}
              AlumniBot1={FullStackChennaiCourseData[0].AlumniBot1}
              Asrc1={FullStackChennaiCourseData[0].Asrc1}
              AlumniH1={FullStackChennaiCourseData[0].AlumniH1}
              Alumnip1={FullStackChennaiCourseData[0].Alumnip1}
              Asrc2={FullStackChennaiCourseData[0].Asrc2}
              AlumniH2={FullStackChennaiCourseData[0].AlumniH2}
              Alumnip2={FullStackChennaiCourseData[0].Alumnip2}
              Asrc3={FullStackChennaiCourseData[0].Asrc3}
              AlumniH3={FullStackChennaiCourseData[0].AlumniH3}
              Alumnip3={FullStackChennaiCourseData[0].Alumnip3}
              Asrc4={FullStackChennaiCourseData[0].Asrc4}
              AlumniH4={FullStackChennaiCourseData[0].AlumniH4}
              Alumnip4={FullStackChennaiCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={FullStackChennaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={FullStackChennaiCourseData[0].CityTextB}
          CityText={FullStackChennaiCourseData[0].CityText}
          CityTextLB={FullStackChennaiCourseData[0].CityTextLB}
          CityTextL={FullStackChennaiCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
