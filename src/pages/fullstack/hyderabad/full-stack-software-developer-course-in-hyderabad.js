import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FullStackHyderabadCourseData } from "../../../CityData/Hyderabad/fullstackSoftwareDeveloperCourseInHyderabad";
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
        <title>
          Full Stack Developer Course in Hyderabad with Job Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Most comprehensive Full Stack Software Development Training in Hyderabad, Covers Front-end, Back-end and Advanced DSA. Sign-up Today."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Hyderabad, Full-Stack Software Developer Course training in Hyderabad, Full-Stack Software Developer Course institute in Hyderabad, best Full-Stack Software Developer Course institute in Hyderabad, data scientist course in Hyderabad,data scientist certification in Hyderabad, Full-Stack Software Developer Course training institute in Hyderabad, advanced Full-Stack Software Developer Course in Hyderabad, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/hyderabad/full-stack-software-developer-course-in-hyderabad"
        />
        <meta
          property="og:title"
          content="Full-Stack Software Developer Course in Hyderabad | Data Science Training in Hyderabad"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Full-Stack Software Developer Course in Chennai. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Hyderabad. Full-Stack Software Developer Course in Hyderabad will enhance your career"
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
          content="Full-Stack Software Developer Course in Hyderabad | Data Science Training in Hyderabad"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Full-Stack Software Developer Course in Hyderabad. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Hyderabad. Full-Stack Software Developer Course in Hyderabad will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Full-Stack Software Developer Course in Hyderabad. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Hyderabad. Full-Stack Software Developer Course in Hyderabad will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />

        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/hyderabad/full-stack-software-developer-course-in-hyderabad"
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
          cityParaCont=" Enroll in the best Job-ready full-stack software development course in Hyderabad. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve."
          titleCourse="Full-Stack Software Developer Course In Hyderabad To Achieve Your Dream Job"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstHeading="Full-Stack Software Developer Course In Hyderabad"
          firstToparaImg=" To Achieve Your Dream Job"
          firstTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          idss="YWxTtvb3x-U"
        />
        <SecondSection
          SecondSectionData={FullStackHyderabadCourseData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={false}
          Testimonial={FullStackHyderabadCourseData[0].testimonial}
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
              ProgramBot1={FullStackHyderabadCourseData[0].ProgramBot1}
              ProgramBot2={FullStackHyderabadCourseData[0].ProgramBot2}
              ProgramBot3={FullStackHyderabadCourseData[0].ProgramBot3}
              ProgramHead4={FullStackHyderabadCourseData[0].ProgramHead4}
              ProgramBot4={FullStackHyderabadCourseData[0].ProgramBot4}
              ProgramHead5={FullStackHyderabadCourseData[0].ProgramHead5}
              ProgramBot5={FullStackHyderabadCourseData[0].ProgramBot5}
              ProgramHead6={FullStackHyderabadCourseData[0].ProgramHead6}
              ProgramBot6={FullStackHyderabadCourseData[0].ProgramBot6}
              ProgramHead7={FullStackHyderabadCourseData[0].ProgramHead7}
              ProgramBot8={FullStackHyderabadCourseData[0].ProgramBot8}
              ProgramHead8={FullStackHyderabadCourseData[0].ProgramHead8}
              ProgramHead9={FullStackHyderabadCourseData[0].ProgramHead9}
              ProgramHead10={FullStackHyderabadCourseData[0].ProgramHead10}
              ProgramHead11={FullStackHyderabadCourseData[0].ProgramHead11}
              ProgramHead12={FullStackHyderabadCourseData[0].ProgramHead12}
              ProgramHead13={FullStackHyderabadCourseData[0].ProgramHead13}
              ProgramBot9={FullStackHyderabadCourseData[0].ProgramBot9}
              DomainHead1={FullStackHyderabadCourseData[0].DomainHead1}
              DomainBot1={FullStackHyderabadCourseData[0].DomainBot1}
              DomainHead2={FullStackHyderabadCourseData[0].DomainHead2}
              DomainHead3={FullStackHyderabadCourseData[0].DomainHead3}
              DomainHead4={FullStackHyderabadCourseData[0].DomainHead4}
              DomainHead5={FullStackHyderabadCourseData[0].DomainHead5}
              DomainHead6={FullStackHyderabadCourseData[0].DomainHead6}
              DomainHead7={FullStackHyderabadCourseData[0].DomainHead7}
              DomainBot2={FullStackHyderabadCourseData[0].DomainBot2}
              DomainBot3={FullStackHyderabadCourseData[0].DomainBot3}
              DomainList1={FullStackHyderabadCourseData[0].DomainList1}
              DomainList2={FullStackHyderabadCourseData[0].DomainList2}
              DomainList3={FullStackHyderabadCourseData[0].DomainList3}
              DomainList4={FullStackHyderabadCourseData[0].DomainList4}
              DomainList5={FullStackHyderabadCourseData[0].DomainList5}
              DomainList6={FullStackHyderabadCourseData[0].DomainList6}
              DomainList7={FullStackHyderabadCourseData[0].DomainList7}
              DomainList8={FullStackHyderabadCourseData[0].DomainList8}
              DomainList9={FullStackHyderabadCourseData[0].DomainList9}
              DomainList10={FullStackHyderabadCourseData[0].DomainList10}
              Domainlink1={FullStackHyderabadCourseData[0].Domainlink1}
              Domainlink2={FullStackHyderabadCourseData[0].Domainlink2}
              Domainlink3={FullStackHyderabadCourseData[0].Domainlink3}
              Domainlink4={FullStackHyderabadCourseData[0].Domainlink4}
              Domainlink5={FullStackHyderabadCourseData[0].Domainlink5}
              Domainlink6={FullStackHyderabadCourseData[0].Domainlink6}
              Domainlink7={FullStackHyderabadCourseData[0].Domainlink7}
              Domainlink8={FullStackHyderabadCourseData[0].Domainlink8}
              Domainlink9={FullStackHyderabadCourseData[0].Domainlink9}
              Domainlink10={FullStackHyderabadCourseData[0].Domainlink10}
              CertificationHead1={
                FullStackHyderabadCourseData[0].CertificationHead1
              }
              CertificationBot1={
                FullStackHyderabadCourseData[0].CertificationBot1
              }
              src={FullStackHyderabadCourseData[0].src}
              alt2={FullStackHyderabadCourseData[0].alt2}
              alt3={FullStackHyderabadCourseData[0].alt3}
              alt4={FullStackHyderabadCourseData[0].alt4}
              alt5={FullStackHyderabadCourseData[0].alt5}
              ModuleHead1={FullStackHyderabadCourseData[0].ModuleHead1}
              ModuleBot1={FullStackHyderabadCourseData[0].ModuleBot1}
              ModuleHead2={FullStackHyderabadCourseData[0].Head2}
              ModuleBot3={FullStackHyderabadCourseData[0].ModuleBot3}
              ModuleBot2={FullStackHyderabadCourseData[0].ModuleBot2}
              syllabush1={FullStackHyderabadCourseData[0].syllabush1}
              syllabusb1={FullStackHyderabadCourseData[0].syllabusb1}
              SyllabusBotlist11={
                FullStackHyderabadCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                FullStackHyderabadCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                FullStackHyderabadCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                FullStackHyderabadCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                FullStackHyderabadCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                FullStackHyderabadCourseData[0].SyllabusBotlist16
              }
              syllabush2={FullStackHyderabadCourseData[0].syllabush2}
              syllabusb2={FullStackHyderabadCourseData[0].syllabusb2}
              SyllabusBotlist21={
                FullStackHyderabadCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                FullStackHyderabadCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                FullStackHyderabadCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                FullStackHyderabadCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                FullStackHyderabadCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                FullStackHyderabadCourseData[0].SyllabusBotlist26
              }
              syllabush3={FullStackHyderabadCourseData[0].syllabush3}
              syllabusb3={FullStackHyderabadCourseData[0].syllabusb3}
              SyllabusBotlist31={
                FullStackHyderabadCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                FullStackHyderabadCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                FullStackHyderabadCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                FullStackHyderabadCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                FullStackHyderabadCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                FullStackHyderabadCourseData[0].SyllabusBotlist36
              }
              syllabush4={FullStackHyderabadCourseData[0].syllabush4}
              syllabusb4={FullStackHyderabadCourseData[0].syllabusb4}
              SyllabusBotlist41={
                FullStackHyderabadCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                FullStackHyderabadCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                FullStackHyderabadCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                FullStackHyderabadCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                FullStackHyderabadCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                FullStackHyderabadCourseData[0].SyllabusBotlist46
              }
              syllabussrc={FullStackHyderabadCourseData[0].syllabussrc}
              JobHead1={FullStackHyderabadCourseData[0].JobHead1}
              JobBot1={FullStackHyderabadCourseData[0].JobBot1}
              JobBot2={FullStackHyderabadCourseData[0].JobBot2}
              JobBot5={FullStackHyderabadCourseData[0].JobBot5}
              JobHead2={FullStackHyderabadCourseData[0].JobHead2}
              JobBot3={FullStackHyderabadCourseData[0].JobBot3}
              JobBot4={FullStackHyderabadCourseData[0].JobBot4}
              JobBot6={FullStackHyderabadCourseData[0].JobBot6}
              ProjectsBot1={FullStackHyderabadCourseData[0].ProgramBot1}
              ProjectsBot2={FullStackHyderabadCourseData[0].ProgramBot2}
              src1={FullStackHyderabadCourseData[0].src1}
              ProjectsH1={FullStackHyderabadCourseData[0].ProjectsH1}
              Projectsp1={FullStackHyderabadCourseData[0].Projectsp1}
              src2={FullStackHyderabadCourseData[0].src2}
              ProjectsH2={FullStackHyderabadCourseData[0].ProjectsH2}
              Projectsp2={FullStackHyderabadCourseData[0].Projectsp2}
              src3={FullStackHyderabadCourseData[0].src3}
              ProjectsH3={FullStackHyderabadCourseData[0].ProjectsH3}
              Projectsp3={FullStackHyderabadCourseData[0].Projectsp3}
              src4={FullStackHyderabadCourseData[0].src4}
              ProjectsH4={FullStackHyderabadCourseData[0].ProjectsH4}
              Projectsp4={FullStackHyderabadCourseData[0].Projectsp4}
              AlumniBot1={FullStackHyderabadCourseData[0].AlumniBot1}
              Asrc1={FullStackHyderabadCourseData[0].Asrc1}
              AlumniH1={FullStackHyderabadCourseData[0].AlumniH1}
              Alumnip1={FullStackHyderabadCourseData[0].Alumnip1}
              Asrc2={FullStackHyderabadCourseData[0].Asrc2}
              AlumniH2={FullStackHyderabadCourseData[0].AlumniH2}
              Alumnip2={FullStackHyderabadCourseData[0].Alumnip2}
              Asrc3={FullStackHyderabadCourseData[0].Asrc3}
              AlumniH3={FullStackHyderabadCourseData[0].AlumniH3}
              Alumnip3={FullStackHyderabadCourseData[0].Alumnip3}
              Asrc4={FullStackHyderabadCourseData[0].Asrc4}
              AlumniH4={FullStackHyderabadCourseData[0].AlumniH4}
              Alumnip4={FullStackHyderabadCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={FullStackHyderabadCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={FullStackHyderabadCourseData[0].CityTextB}
          CityText={FullStackHyderabadCourseData[0].CityText}
          CityTextLB={FullStackHyderabadCourseData[0].CityTextLB}
          CityTextL={FullStackHyderabadCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
