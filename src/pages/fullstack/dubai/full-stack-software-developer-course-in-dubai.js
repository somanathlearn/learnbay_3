import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FullStackDubaiCourseData } from "../../../CityData/Dubai/fullstackSoftwareDeveloperCourseInDubai";
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
        <title>Full Stack Developer Course in Dubai with Job Assistance</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Become A Certified in Full Stack Software Developer with Best Full Stack Training Course in Dubai by Learnbay with Interactive Sessions. Enroll Now."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Dubai, Full-Stack Software Developer Course training in Dubai, Full-Stack Software Developer Course institute in Dubai, best Full-Stack Software Developer Course institute in Dubai, data scientist course in Dubai,data scientist certification in Dubai, Full-Stack Software Developer Course training institute in Dubai, advanced Full-Stack Software Developer Course in Dubai, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/dubai/full-stack-software-developer-course-in-dubai"
        />
        <meta
          property="og:title"
          content="Full-Stack Software Developer Course in Dubai | Data Science Training in Dubai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Full-Stack Software Developer Course in Dubai. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Dubai. Full-Stack Software Developer Course in Dubai will enhance your career"
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
          content="Full-Stack Software Developer Course in Dubai | Data Science Training in Dubai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Full-Stack Software Developer Course in Dubai. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Dubai. Full-Stack Software Developer Course in Dubai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Full-Stack Software Developer Course in Dubai. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Dubai. Full-Stack Software Developer Course in Dubai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />

        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/dubai/full-stack-software-developer-course-in-dubai"
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
          cityParaCont=" Enroll in the best Job-ready full-stack software development course in Dubai. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve."
          titleCourse="Full-Stack Software Developer Course In Dubai To Achieve Your Dream Job"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstHeading="Full-Stack Software Developer Course In Dubai"
          firstTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          firstToparaImg=" To Achieve Your Dream Job"
          idss="YWxTtvb3x-U"
        />
        <SecondSection
          SecondSectionData={FullStackDubaiCourseData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={false}
          Testimonial={FullStackDubaiCourseData[0].testimonial}
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
              ProgramBot1={FullStackDubaiCourseData[0].ProgramBot1}
              ProgramBot2={FullStackDubaiCourseData[0].ProgramBot2}
              ProgramBot3={FullStackDubaiCourseData[0].ProgramBot3}
              ProgramHead4={FullStackDubaiCourseData[0].ProgramHead4}
              ProgramBot4={FullStackDubaiCourseData[0].ProgramBot4}
              ProgramHead5={FullStackDubaiCourseData[0].ProgramHead5}
              ProgramBot5={FullStackDubaiCourseData[0].ProgramBot5}
              ProgramHead6={FullStackDubaiCourseData[0].ProgramHead6}
              ProgramBot6={FullStackDubaiCourseData[0].ProgramBot6}
              ProgramHead7={FullStackDubaiCourseData[0].ProgramHead7}
              ProgramBot8={FullStackDubaiCourseData[0].ProgramBot8}
              ProgramHead8={FullStackDubaiCourseData[0].ProgramHead8}
              ProgramHead9={FullStackDubaiCourseData[0].ProgramHead9}
              ProgramHead10={FullStackDubaiCourseData[0].ProgramHead10}
              ProgramHead11={FullStackDubaiCourseData[0].ProgramHead11}
              ProgramHead12={FullStackDubaiCourseData[0].ProgramHead12}
              ProgramHead13={FullStackDubaiCourseData[0].ProgramHead13}
              ProgramBot9={FullStackDubaiCourseData[0].ProgramBot9}
              DomainHead1={FullStackDubaiCourseData[0].DomainHead1}
              DomainBot1={FullStackDubaiCourseData[0].DomainBot1}
              DomainHead2={FullStackDubaiCourseData[0].DomainHead2}
              DomainHead3={FullStackDubaiCourseData[0].DomainHead3}
              DomainHead4={FullStackDubaiCourseData[0].DomainHead4}
              DomainHead5={FullStackDubaiCourseData[0].DomainHead5}
              DomainHead6={FullStackDubaiCourseData[0].DomainHead6}
              DomainHead7={FullStackDubaiCourseData[0].DomainHead7}
              DomainBot2={FullStackDubaiCourseData[0].DomainBot2}
              DomainBot3={FullStackDubaiCourseData[0].DomainBot3}
              DomainList1={FullStackDubaiCourseData[0].DomainList1}
              DomainList2={FullStackDubaiCourseData[0].DomainList2}
              DomainList3={FullStackDubaiCourseData[0].DomainList3}
              DomainList4={FullStackDubaiCourseData[0].DomainList4}
              DomainList5={FullStackDubaiCourseData[0].DomainList5}
              DomainList6={FullStackDubaiCourseData[0].DomainList6}
              DomainList7={FullStackDubaiCourseData[0].DomainList7}
              DomainList8={FullStackDubaiCourseData[0].DomainList8}
              DomainList9={FullStackDubaiCourseData[0].DomainList9}
              DomainList10={FullStackDubaiCourseData[0].DomainList10}
              Domainlink1={FullStackDubaiCourseData[0].Domainlink1}
              Domainlink2={FullStackDubaiCourseData[0].Domainlink2}
              Domainlink3={FullStackDubaiCourseData[0].Domainlink3}
              Domainlink4={FullStackDubaiCourseData[0].Domainlink4}
              Domainlink5={FullStackDubaiCourseData[0].Domainlink5}
              Domainlink6={FullStackDubaiCourseData[0].Domainlink6}
              Domainlink7={FullStackDubaiCourseData[0].Domainlink7}
              Domainlink8={FullStackDubaiCourseData[0].Domainlink8}
              Domainlink9={FullStackDubaiCourseData[0].Domainlink9}
              Domainlink10={FullStackDubaiCourseData[0].Domainlink10}
              CertificationHead1={
                FullStackDubaiCourseData[0].CertificationHead1
              }
              CertificationBot1={FullStackDubaiCourseData[0].CertificationBot1}
              src={FullStackDubaiCourseData[0].src}
              ModuleHead1={FullStackDubaiCourseData[0].ModuleHead1}
              ModuleBot1={FullStackDubaiCourseData[0].ModuleBot1}
              ModuleHead2={FullStackDubaiCourseData[0].Head2}
              ModuleBot3={FullStackDubaiCourseData[0].ModuleBot3}
              ModuleBot2={FullStackDubaiCourseData[0].ModuleBot2}
              syllabush1={FullStackDubaiCourseData[0].syllabush1}
              syllabusb1={FullStackDubaiCourseData[0].syllabusb1}
              SyllabusBotlist11={FullStackDubaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={FullStackDubaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={FullStackDubaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={FullStackDubaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={FullStackDubaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={FullStackDubaiCourseData[0].SyllabusBotlist16}
              syllabush2={FullStackDubaiCourseData[0].syllabush2}
              syllabusb2={FullStackDubaiCourseData[0].syllabusb2}
              SyllabusBotlist21={FullStackDubaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={FullStackDubaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={FullStackDubaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={FullStackDubaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={FullStackDubaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={FullStackDubaiCourseData[0].SyllabusBotlist26}
              syllabush3={FullStackDubaiCourseData[0].syllabush3}
              syllabusb3={FullStackDubaiCourseData[0].syllabusb3}
              SyllabusBotlist31={FullStackDubaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={FullStackDubaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={FullStackDubaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={FullStackDubaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={FullStackDubaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={FullStackDubaiCourseData[0].SyllabusBotlist36}
              syllabush4={FullStackDubaiCourseData[0].syllabush4}
              syllabusb4={FullStackDubaiCourseData[0].syllabusb4}
              SyllabusBotlist41={FullStackDubaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={FullStackDubaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={FullStackDubaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={FullStackDubaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={FullStackDubaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={FullStackDubaiCourseData[0].SyllabusBotlist46}
              syllabussrc={FullStackDubaiCourseData[0].syllabussrc}
              JobHead1={FullStackDubaiCourseData[0].JobHead1}
              JobBot1={FullStackDubaiCourseData[0].JobBot1}
              JobBot2={FullStackDubaiCourseData[0].JobBot2}
              JobBot5={FullStackDubaiCourseData[0].JobBot5}
              JobHead2={FullStackDubaiCourseData[0].JobHead2}
              JobBot3={FullStackDubaiCourseData[0].JobBot3}
              JobBot4={FullStackDubaiCourseData[0].JobBot4}
              JobBot6={FullStackDubaiCourseData[0].JobBot6}
              ProjectsBot1={FullStackDubaiCourseData[0].ProgramBot1}
              ProjectsBot2={FullStackDubaiCourseData[0].ProgramBot2}
              src1={FullStackDubaiCourseData[0].src1}
              alt2={FullStackDubaiCourseData[0].alt2}
              alt3={FullStackDubaiCourseData[0].alt3}
              alt4={FullStackDubaiCourseData[0].alt4}
              alt5={FullStackDubaiCourseData[0].alt5}
              ProjectsH1={FullStackDubaiCourseData[0].ProjectsH1}
              Projectsp1={FullStackDubaiCourseData[0].Projectsp1}
              src2={FullStackDubaiCourseData[0].src2}
              ProjectsH2={FullStackDubaiCourseData[0].ProjectsH2}
              Projectsp2={FullStackDubaiCourseData[0].Projectsp2}
              src3={FullStackDubaiCourseData[0].src3}
              ProjectsH3={FullStackDubaiCourseData[0].ProjectsH3}
              Projectsp3={FullStackDubaiCourseData[0].Projectsp3}
              src4={FullStackDubaiCourseData[0].src4}
              ProjectsH4={FullStackDubaiCourseData[0].ProjectsH4}
              Projectsp4={FullStackDubaiCourseData[0].Projectsp4}
              AlumniBot1={FullStackDubaiCourseData[0].AlumniBot1}
              Asrc1={FullStackDubaiCourseData[0].Asrc1}
              AlumniH1={FullStackDubaiCourseData[0].AlumniH1}
              Alumnip1={FullStackDubaiCourseData[0].Alumnip1}
              Asrc2={FullStackDubaiCourseData[0].Asrc2}
              AlumniH2={FullStackDubaiCourseData[0].AlumniH2}
              Alumnip2={FullStackDubaiCourseData[0].Alumnip2}
              Asrc3={FullStackDubaiCourseData[0].Asrc3}
              AlumniH3={FullStackDubaiCourseData[0].AlumniH3}
              Alumnip3={FullStackDubaiCourseData[0].Alumnip3}
              Asrc4={FullStackDubaiCourseData[0].Asrc4}
              AlumniH4={FullStackDubaiCourseData[0].AlumniH4}
              Alumnip4={FullStackDubaiCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={FullStackDubaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={FullStackDubaiCourseData[0].CityTextB}
          CityText={FullStackDubaiCourseData[0].CityText}
          CityTextLB={FullStackDubaiCourseData[0].CityTextLB}
          CityTextL={FullStackDubaiCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
