import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FullStackBangaloreCourseData } from "../../../CityData/Bangalore/fullstackSoftwareDeveloperCourseInBangalore";
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
        <title>Full Stack Developer Course in Bangalore - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Want to become a skilled Web Developer? Enroll Now - Learnbay's Most Extensive Full Stack Web Developer Course in Bangalore."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Bangalore, Full-Stack Software Developer Course training in Bangalore, Full-Stack Software Developer Course institute in Bangalore, best Full-Stack Software Developer Course institute in Bangalore, data scientist course in Bangalore,data scientist certification in Bangalore, Full-Stack Software Developer Course training institute in Bangalore, advanced Full-Stack Software Developer Course in Bangalore, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/bangalore/full-stack-software-developer-course-in-bangalore"
        />
        <meta
          property="og:title"
          content="Full stack software developer course In Bangalore with Placement Assistance"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Full stack software developer course in Bangalore. We are Advanced Full stack software developer course Certification Training Institute in Bangalore. Full stack software developer course will enhance your career."
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
          content="Full stack software developer course Training In Bangalore with Placement Assistance"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Full stack software developer course Bangalore. We are Advanced Full stack software developer course Certification Training Institute in Bangalore. Full stack software developer course will enhance your career."
        />
        <meta
          name="twitter:description"
          content="Full stack software developer course Bangalore. We are Advanced Full stack software developer course Certification Training Institute in Bangalore. Full stack software developer course will enhance your career."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/bangalore/full-stack-software-developer-course-in-bangalore"
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
          cityParaCont=" Enroll in the best Job-ready full-stack software development course in Bangalore. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve."
          titleCourse="Full-Stack Software Developer Course In Bangalore To Achieve Your Dream Job"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstHeading="Full-Stack Software Developer Course In Bangalore "
          firstToparaImg="To Achieve Your Dream Job"
          firstTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          idss="YWxTtvb3x-U"
        />
        <SecondSection
          SecondSectionData={FullStackBangaloreCourseData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={false}
          Testimonial={FullStackBangaloreCourseData[0].testimonial}
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
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              fullStackCity={true}
              ProgramBot1={FullStackBangaloreCourseData[0].ProgramBot1}
              ProgramBot2={FullStackBangaloreCourseData[0].ProgramBot2}
              ProgramBot3={FullStackBangaloreCourseData[0].ProgramBot3}
              ProgramHead4={FullStackBangaloreCourseData[0].ProgramHead4}
              ProgramBot4={FullStackBangaloreCourseData[0].ProgramBot4}
              ProgramHead5={FullStackBangaloreCourseData[0].ProgramHead5}
              ProgramBot5={FullStackBangaloreCourseData[0].ProgramBot5}
              ProgramHead6={FullStackBangaloreCourseData[0].ProgramHead6}
              ProgramBot6={FullStackBangaloreCourseData[0].ProgramBot6}
              ProgramHead7={FullStackBangaloreCourseData[0].ProgramHead7}
              ProgramBot8={FullStackBangaloreCourseData[0].ProgramBot8}
              ProgramHead8={FullStackBangaloreCourseData[0].ProgramHead8}
              ProgramHead9={FullStackBangaloreCourseData[0].ProgramHead9}
              ProgramHead10={FullStackBangaloreCourseData[0].ProgramHead10}
              ProgramHead11={FullStackBangaloreCourseData[0].ProgramHead11}
              ProgramHead12={FullStackBangaloreCourseData[0].ProgramHead12}
              ProgramHead13={FullStackBangaloreCourseData[0].ProgramHead13}
              ProgramBot9={FullStackBangaloreCourseData[0].ProgramBot9}
              DomainHead1={FullStackBangaloreCourseData[0].DomainHead1}
              DomainBot1={FullStackBangaloreCourseData[0].DomainBot1}
              DomainHead2={FullStackBangaloreCourseData[0].DomainHead2}
              DomainHead3={FullStackBangaloreCourseData[0].DomainHead3}
              DomainHead4={FullStackBangaloreCourseData[0].DomainHead4}
              DomainHead5={FullStackBangaloreCourseData[0].DomainHead5}
              DomainHead6={FullStackBangaloreCourseData[0].DomainHead6}
              DomainHead7={FullStackBangaloreCourseData[0].DomainHead7}
              DomainBot2={FullStackBangaloreCourseData[0].DomainBot2}
              DomainBot3={FullStackBangaloreCourseData[0].DomainBot3}
              DomainList1={FullStackBangaloreCourseData[0].DomainList1}
              DomainList2={FullStackBangaloreCourseData[0].DomainList2}
              DomainList3={FullStackBangaloreCourseData[0].DomainList3}
              DomainList4={FullStackBangaloreCourseData[0].DomainList4}
              DomainList5={FullStackBangaloreCourseData[0].DomainList5}
              DomainList6={FullStackBangaloreCourseData[0].DomainList6}
              DomainList7={FullStackBangaloreCourseData[0].DomainList7}
              DomainList8={FullStackBangaloreCourseData[0].DomainList8}
              DomainList9={FullStackBangaloreCourseData[0].DomainList9}
              DomainList10={FullStackBangaloreCourseData[0].DomainList10}
              Domainlink1={FullStackBangaloreCourseData[0].Domainlink1}
              Domainlink2={FullStackBangaloreCourseData[0].Domainlink2}
              Domainlink3={FullStackBangaloreCourseData[0].Domainlink3}
              Domainlink4={FullStackBangaloreCourseData[0].Domainlink4}
              Domainlink5={FullStackBangaloreCourseData[0].Domainlink5}
              Domainlink6={FullStackBangaloreCourseData[0].Domainlink6}
              Domainlink7={FullStackBangaloreCourseData[0].Domainlink7}
              Domainlink8={FullStackBangaloreCourseData[0].Domainlink8}
              Domainlink9={FullStackBangaloreCourseData[0].Domainlink9}
              Domainlink10={FullStackBangaloreCourseData[0].Domainlink10}
              CertificationHead1={
                FullStackBangaloreCourseData[0].CertificationHead1
              }
              CertificationBot1={
                FullStackBangaloreCourseData[0].CertificationBot1
              }
              src={FullStackBangaloreCourseData[0].src}
              ModuleHead1={FullStackBangaloreCourseData[0].ModuleHead1}
              ModuleBot1={FullStackBangaloreCourseData[0].ModuleBot1}
              ModuleHead2={FullStackBangaloreCourseData[0].Head2}
              ModuleBot3={FullStackBangaloreCourseData[0].ModuleBot3}
              ModuleBot2={FullStackBangaloreCourseData[0].ModuleBot2}
              syllabush1={FullStackBangaloreCourseData[0].syllabush1}
              syllabusb1={FullStackBangaloreCourseData[0].syllabusb1}
              SyllabusBotlist11={
                FullStackBangaloreCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                FullStackBangaloreCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                FullStackBangaloreCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                FullStackBangaloreCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                FullStackBangaloreCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                FullStackBangaloreCourseData[0].SyllabusBotlist16
              }
              syllabush2={FullStackBangaloreCourseData[0].syllabush2}
              syllabusb2={FullStackBangaloreCourseData[0].syllabusb2}
              SyllabusBotlist21={
                FullStackBangaloreCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                FullStackBangaloreCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                FullStackBangaloreCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                FullStackBangaloreCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                FullStackBangaloreCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                FullStackBangaloreCourseData[0].SyllabusBotlist26
              }
              syllabush3={FullStackBangaloreCourseData[0].syllabush3}
              syllabusb3={FullStackBangaloreCourseData[0].syllabusb3}
              SyllabusBotlist31={
                FullStackBangaloreCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                FullStackBangaloreCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                FullStackBangaloreCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                FullStackBangaloreCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                FullStackBangaloreCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                FullStackBangaloreCourseData[0].SyllabusBotlist36
              }
              syllabush4={FullStackBangaloreCourseData[0].syllabush4}
              syllabusb4={FullStackBangaloreCourseData[0].syllabusb4}
              SyllabusBotlist41={
                FullStackBangaloreCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                FullStackBangaloreCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                FullStackBangaloreCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                FullStackBangaloreCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                FullStackBangaloreCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                FullStackBangaloreCourseData[0].SyllabusBotlist46
              }
              syllabussrc={FullStackBangaloreCourseData[0].syllabussrc}
              JobHead1={FullStackBangaloreCourseData[0].JobHead1}
              JobBot1={FullStackBangaloreCourseData[0].JobBot1}
              JobBot2={FullStackBangaloreCourseData[0].JobBot2}
              JobBot5={FullStackBangaloreCourseData[0].JobBot5}
              JobHead2={FullStackBangaloreCourseData[0].JobHead2}
              JobBot3={FullStackBangaloreCourseData[0].JobBot3}
              JobBot4={FullStackBangaloreCourseData[0].JobBot4}
              JobBot6={FullStackBangaloreCourseData[0].JobBot6}
              ProjectsBot1={FullStackBangaloreCourseData[0].ProgramBot1}
              ProjectsBot2={FullStackBangaloreCourseData[0].ProgramBot2}
              src1={FullStackBangaloreCourseData[0].src1}
              ProjectsH1={FullStackBangaloreCourseData[0].ProjectsH1}
              Projectsp1={FullStackBangaloreCourseData[0].Projectsp1}
              src2={FullStackBangaloreCourseData[0].src2}
              alt2={FullStackBangaloreCourseData[0].alt2}
              alt3={FullStackBangaloreCourseData[0].alt3}
              alt4={FullStackBangaloreCourseData[0].alt4}
              alt5={FullStackBangaloreCourseData[0].alt5}
              ProjectsH2={FullStackBangaloreCourseData[0].ProjectsH2}
              Projectsp2={FullStackBangaloreCourseData[0].Projectsp2}
              src3={FullStackBangaloreCourseData[0].src3}
              ProjectsH3={FullStackBangaloreCourseData[0].ProjectsH3}
              Projectsp3={FullStackBangaloreCourseData[0].Projectsp3}
              src4={FullStackBangaloreCourseData[0].src4}
              ProjectsH4={FullStackBangaloreCourseData[0].ProjectsH4}
              Projectsp4={FullStackBangaloreCourseData[0].Projectsp4}
              AlumniBot1={FullStackBangaloreCourseData[0].AlumniBot1}
              Asrc1={FullStackBangaloreCourseData[0].Asrc1}
              AlumniH1={FullStackBangaloreCourseData[0].AlumniH1}
              Alumnip1={FullStackBangaloreCourseData[0].Alumnip1}
              Asrc2={FullStackBangaloreCourseData[0].Asrc2}
              AlumniH2={FullStackBangaloreCourseData[0].AlumniH2}
              Alumnip2={FullStackBangaloreCourseData[0].Alumnip2}
              Asrc3={FullStackBangaloreCourseData[0].Asrc3}
              AlumniH3={FullStackBangaloreCourseData[0].AlumniH3}
              Alumnip3={FullStackBangaloreCourseData[0].Alumnip3}
              Asrc4={FullStackBangaloreCourseData[0].Asrc4}
              AlumniH4={FullStackBangaloreCourseData[0].AlumniH4}
              Alumnip4={FullStackBangaloreCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={FullStackBangaloreCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={FullStackBangaloreCourseData[0].CityTextB}
          CityText={FullStackBangaloreCourseData[0].CityText}
          CityTextLB={FullStackBangaloreCourseData[0].CityTextLB}
          CityTextL={FullStackBangaloreCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
