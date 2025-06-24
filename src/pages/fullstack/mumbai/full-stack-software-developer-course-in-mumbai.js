import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FullStackMumbaiCourseData } from "../../../CityData/Mumbai/fullStackSoftwareDeveloperCourseInMumbaiData";
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
        <title>Full Stack Developer Course in Mumbai with Job Assistance</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Best Full Stack Web Development Course in Mumbai and Master the Most in-demand Coding and Web Development Skills. Signup Now."
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/mumbai/full-stack-software-developer-course-in-mumbai"
        />
        <meta
          property="og:title"
          content="Best Full Stack Web Development Course | Data Science Training in Mumbai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Best Full Stack Web Development Course. Learnbay is Advanced Artifical intellgince Course Training Institute in Mumbai. Best Full Stack Web Development Course will enhance your career"
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
          content="Best Full Stack Web Development Course | Data Science Training in Mumbai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Best Full Stack Web Development Course. Learnbay is Advanced Artifical intellgince Course Training Institute in Mumbai. Best Full Stack Web Development Course will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Best Full Stack Web Development Course. Learnbay is Advanced Artifical intellgince Course Training Institute in Mumbai. Best Full Stack Web Development Course will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Mumbai, Full-Stack Software Developer Course training in Mumbai, Full-Stack Software Developer Course institute in Mumbai, best Full-Stack Software Developer Course institute in Mumbai, data scientist course in Mumbai,data scientist certification in Mumbai, Full-Stack Software Developer Course training institute in Mumbai, advanced Full-Stack Software Developer Course in Mumbai, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/mumbai/full-stack-software-developer-course-in-mumbai"
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
          cityParaCont="Enroll in the best Job-ready full-stack software development course in Mumbai. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve."
          dataScience={true}
          titleCourse="Full-Stack Software Developer Course In Mumbai To Achieve Your Dream Job"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstToparaImg="To Achieve Your Dream Job"
          firstHeading="Full-Stack Software Developer Course In Mumbai"
          firstTopPara="Specialization over generalization"
          idss="YWxTtvb3x-U"
        />
        <SecondSection
          SecondSectionData={FullStackMumbaiCourseData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={false}
          Testimonial={FullStackMumbaiCourseData[0].testimonial}
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
              ProgramBot1={FullStackMumbaiCourseData[0].ProgramBot1}
              ProgramHead3={FullStackMumbaiCourseData[0].ProgramHead3}
              ProgramBot3={FullStackMumbaiCourseData[0].ProgramBot3}
              ProgramBot31={FullStackMumbaiCourseData[0].ProgramBot31}
              ProgramBot4={FullStackMumbaiCourseData[0].ProgramBot4}
              ProgramBot5={FullStackMumbaiCourseData[0].ProgramBot5}
              ProgramBot6={FullStackMumbaiCourseData[0].ProgramBot6}
              Courselink1={FullStackMumbaiCourseData[0].Courselink1}
              Courselink2={FullStackMumbaiCourseData[0].Courselink2}
              Courselink3={FullStackMumbaiCourseData[0].Courselink3}
              Courselink4={FullStackMumbaiCourseData[0].Courselink4}
              Courselink5={FullStackMumbaiCourseData[0].Courselink5}
              Course1={FullStackMumbaiCourseData[0].Course1}
              Course2={FullStackMumbaiCourseData[0].Course2}
              Course3={FullStackMumbaiCourseData[0].Course3}
              Course4={FullStackMumbaiCourseData[0].Course4}
              Course5={FullStackMumbaiCourseData[0].Course5}
              DomainHead1={FullStackMumbaiCourseData[0].DomainHead1}
              DomainBot1={FullStackMumbaiCourseData[0].DomainBot1}
              DomainBot2={FullStackMumbaiCourseData[0].DomainBot2}
              DomainBot3={FullStackMumbaiCourseData[0].DomainBot3}
              DomainList1={FullStackMumbaiCourseData[0].DomainList1}
              DomainList2={FullStackMumbaiCourseData[0].DomainList2}
              DomainList3={FullStackMumbaiCourseData[0].DomainList3}
              DomainList4={FullStackMumbaiCourseData[0].DomainList4}
              DomainList5={FullStackMumbaiCourseData[0].DomainList5}
              DomainList6={FullStackMumbaiCourseData[0].DomainList6}
              DomainList7={FullStackMumbaiCourseData[0].DomainList7}
              DomainList8={FullStackMumbaiCourseData[0].DomainList8}
              DomainList9={FullStackMumbaiCourseData[0].DomainList9}
              DomainList10={FullStackMumbaiCourseData[0].DomainList10}
              Domainlink1={FullStackMumbaiCourseData[0].Domainlink1}
              Domainlink2={FullStackMumbaiCourseData[0].Domainlink2}
              Domainlink3={FullStackMumbaiCourseData[0].Domainlink3}
              Domainlink4={FullStackMumbaiCourseData[0].Domainlink4}
              Domainlink5={FullStackMumbaiCourseData[0].Domainlink5}
              Domainlink6={FullStackMumbaiCourseData[0].Domainlink6}
              Domainlink7={FullStackMumbaiCourseData[0].Domainlink7}
              Domainlink8={FullStackMumbaiCourseData[0].Domainlink8}
              Domainlink9={FullStackMumbaiCourseData[0].Domainlink9}
              Domainlink10={FullStackMumbaiCourseData[0].Domainlink10}
              CertificationBot1={FullStackMumbaiCourseData[0].CertificationBot1}
              src={FullStackMumbaiCourseData[0].src}
              src22={FullStackMumbaiCourseData[0].src22}
              src33={FullStackMumbaiCourseData[0].src33}
              ModuleBot1={FullStackMumbaiCourseData[0].ModuleBot1}
              ModuleBot2={FullStackMumbaiCourseData[0].ModuleBot2}
              syllabush1={FullStackMumbaiCourseData[0].syllabush1}
              syllabusb1={FullStackMumbaiCourseData[0].syllabusb1}
              SyllabusBotlist11={FullStackMumbaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={FullStackMumbaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={FullStackMumbaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={FullStackMumbaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={FullStackMumbaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={FullStackMumbaiCourseData[0].SyllabusBotlist16}
              syllabush2={FullStackMumbaiCourseData[0].syllabush2}
              syllabusb2={FullStackMumbaiCourseData[0].syllabusb2}
              SyllabusBotlist21={FullStackMumbaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={FullStackMumbaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={FullStackMumbaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={FullStackMumbaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={FullStackMumbaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={FullStackMumbaiCourseData[0].SyllabusBotlist26}
              syllabush3={FullStackMumbaiCourseData[0].syllabush3}
              syllabusb3={FullStackMumbaiCourseData[0].syllabusb3}
              SyllabusBotlist31={FullStackMumbaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={FullStackMumbaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={FullStackMumbaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={FullStackMumbaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={FullStackMumbaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={FullStackMumbaiCourseData[0].SyllabusBotlist36}
              syllabush4={FullStackMumbaiCourseData[0].syllabush4}
              syllabusb4={FullStackMumbaiCourseData[0].syllabusb4}
              SyllabusBotlist41={FullStackMumbaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={FullStackMumbaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={FullStackMumbaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={FullStackMumbaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={FullStackMumbaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={FullStackMumbaiCourseData[0].SyllabusBotlist46}
              syllabussrc={FullStackMumbaiCourseData[0].syllabussrc}
              JobBot1={FullStackMumbaiCourseData[0].JobBot1}
              JobHead2={FullStackMumbaiCourseData[0].JobHead2}
              JobBot3={FullStackMumbaiCourseData[0].JobBot3}
              JobBot4={FullStackMumbaiCourseData[0].JobBot4}
              ProjectsBot1={FullStackMumbaiCourseData[0].ProgramBot1}
              src1={FullStackMumbaiCourseData[0].src1}
              ProjectsH1={FullStackMumbaiCourseData[0].ProjectsH1}
              Projectsp1={FullStackMumbaiCourseData[0].Projectsp1}
              src2={FullStackMumbaiCourseData[0].src2}
              ProjectsH2={FullStackMumbaiCourseData[0].ProjectsH2}
              Projectsp2={FullStackMumbaiCourseData[0].Projectsp2}
              src3={FullStackMumbaiCourseData[0].src3}
              ProjectsH3={FullStackMumbaiCourseData[0].ProjectsH3}
              Projectsp3={FullStackMumbaiCourseData[0].Projectsp3}
              src4={FullStackMumbaiCourseData[0].src4}
              ProjectsH4={FullStackMumbaiCourseData[0].ProjectsH4}
              Projectsp4={FullStackMumbaiCourseData[0].Projectsp4}
              AlumniBot1={FullStackMumbaiCourseData[0].AlumniBot1}
              Asrc1={FullStackMumbaiCourseData[0].Asrc1}
              AlumniH1={FullStackMumbaiCourseData[0].AlumniH1}
              Alumnip1={FullStackMumbaiCourseData[0].Alumnip1}
              Asrc2={FullStackMumbaiCourseData[0].Asrc2}
              AlumniH2={FullStackMumbaiCourseData[0].AlumniH2}
              Alumnip2={FullStackMumbaiCourseData[0].Alumnip2}
              Asrc3={FullStackMumbaiCourseData[0].Asrc3}
              AlumniH3={FullStackMumbaiCourseData[0].AlumniH3}
              Alumnip3={FullStackMumbaiCourseData[0].Alumnip3}
              Asrc4={FullStackMumbaiCourseData[0].Asrc4}
              AlumniH4={FullStackMumbaiCourseData[0].AlumniH4}
              Alumnip4={FullStackMumbaiCourseData[0].Alumnip4}
              alt1={FullStackMumbaiCourseData[0].alt1}
              alt2={FullStackMumbaiCourseData[0].alt2}
              alt3={FullStackMumbaiCourseData[0].alt3}
              alt4={FullStackMumbaiCourseData[0].alt4}
              alt5={FullStackMumbaiCourseData[0].alt5}
              alt6={FullStackMumbaiCourseData[0].alt6}
              alt7={FullStackMumbaiCourseData[0].alt7}
              alt8={FullStackMumbaiCourseData[0].alt8}
              alt9={FullStackMumbaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={FullStackMumbaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={FullStackMumbaiCourseData[0].CityTextB}
          CityText={FullStackMumbaiCourseData[0].CityText}
          CityTextLB={FullStackMumbaiCourseData[0].CityTextLB}
          CityTextL={FullStackMumbaiCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
