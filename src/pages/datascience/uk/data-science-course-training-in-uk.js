import Navbar from "@/components/Global/Navbar/Navbar";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSUKCourseData } from "../../../CityData/Uk/datascienceTrainingInUk";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Popup from "../../../components/Global/Popup/Popup";
import FeeSection from "../../../components/Seo/FeeSection/FeeSection";
// import Testimonial from "../../../components/Seo/Testimonial/Testimonial";
import Realstory from "@/components/Home/Realstory/Realstory";
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Advanced-Data-Sciences.pdf"
  return (
    <div className={styles.container}>
      <Head>
        <title>Top Rated Online Data Science Course in UK – Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Empower your career with Learnbay's top online data science course in UK. Grab the chance to excel with advanced data science technique. Enroll now          "
        />
        <meta
          name="keywords"
          content="  Data Science Course in UK, Online Data Science Masters UK, Data Science in UK, Best Data Science Courses, Study Data Science in UK, Data Science Courses in London. "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/uk/data-science-course-training-in-uk"
        />
        <meta
          property="og:title"
          content="Data Science Course in UK | Data Science Training in UK"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in UK. Learnbay is Advanced Data Science Course Training Institute in UK. Data science course in UK will enhance your career"
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
          content="Data Science Course in UK | Data Science Training in UK"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data science course in UK. Learnbay is Advanced Data Science Course Training Institute in UK. Data science course in UK will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data science course in UK. Learnbay is Advanced Data Science Course Training Institute in UK. Data science course in UK will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/uk/data-science-course-training-in-uk"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta name="copyright" content="Learnbay" />
        {/* <meta name="language" content="English" /> */}
        {/* <meta name="rating" content="general" /> */}
        {/* <meta name="revisit-after" content="Daily" /> */}
        {/* <meta name="author" content="Learnbay" /> */}
        {/* <meta name="googlebot" content="index,follow" /> */}
        {/* <meta name="bingbot" content="index,follow" /> */}
        {/* <meta name="expires" content="never" /> */}
        {/* <meta name="coverage" content="Worldwide" /> */}
        {/* <meta name="robots" content="ALL" /> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/uk/data-science-course-training-in-uk"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in UK"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/uk/data-science-course-training-in-uk"
        />
        <meta
          property="og:title"
          content="Data Science Course UK | Data Scientist Course UK | Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll for Data Science Course and Certification Training in UK from Learnbay in association with IBM. This Data Scientist course in UK will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="240" />
        <meta property="og:image:width" content="360" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Data Science Course UK | Data Scientist Course UK | Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Enroll for Data Science Course and Certification Training in UK from Learnbay in association with IBM. This Data Scientist course in UK will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          name="twitter:description"
          content="Enroll for Data Science Course and Certification Training in UK from Learnbay in association with IBM. This Data Scientist course in UK will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        ></meta>
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
          titleCourse="Best Online Data Science Course in UK – Learnbay          "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Online Data Science Course in UK           "
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont="Learn insightful uses of data science in real-world business problems and gain in-depth knowledge of trending tools. Learnbay’s data science course in UK presents an open learning setup to escalate your career limitlessly. Validate your skills with a GenAI-rich syllabus and global certifications (IBM & Microsoft).           "
        />
        <SecondSection SecondSectionData={DSUKCourseData[0].secondSection} />
        {/* <Testimonial
          redirectDS={true}
          Testimonial={DSUKCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        /> */}
        <Realstory />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="$1700 "
            FeeEmi="₹ 8,194/month"
            weekdaybatch="Weekday Batch"
            weekendbatch="Weekday  Batch"
            weekday="MON - FRI"
            weekend="MON - FRI"
            WeekdayDate="FEB 2nd"
            WeekendDate="FEB 9th"
            WeekdayTime="8 PM - 10 PM"
            WeekendTime="8 AM - 10 AM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,25,000"
            monthlyPayment1="₹8,194"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,25,000"
            monthlyPayment2="₹12,291"
            countryfee={true}
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextDSUK={true}
              ProgramBot1={DSUKCourseData[0].ProgramBot1}
              ProgramHead3={DSUKCourseData[0].ProgramHead3}
              ProgramBot3={DSUKCourseData[0].ProgramBot3}
              ProgramBot31={DSUKCourseData[0].ProgramBot31}
              ProgramBot4={DSUKCourseData[0].ProgramBot4}
              ProgramBot5={DSUKCourseData[0].ProgramBot5}
              ProgramBot6={DSUKCourseData[0].ProgramBot6}
              Courselink1={DSUKCourseData[0].Courselink1}
              Courselink2={DSUKCourseData[0].Courselink2}
              Courselink3={DSUKCourseData[0].Courselink3}
              Courselink4={DSUKCourseData[0].Courselink4}
              Courselink5={DSUKCourseData[0].Courselink5}
              Course1={DSUKCourseData[0].Course1}
              Course2={DSUKCourseData[0].Course2}
              Course3={DSUKCourseData[0].Course3}
              Course4={DSUKCourseData[0].Course4}
              Course5={DSUKCourseData[0].Course5}
              DomainHead1={DSUKCourseData[0].DomainHead1}
              DomainBot1={DSUKCourseData[0].DomainBot1}
              DomainBot2={DSUKCourseData[0].DomainBot2}
              DomainBot3={DSUKCourseData[0].DomainBot3}
              DomainBot40={DSUKCourseData[0].DomainBot40}
              DomainList1={DSUKCourseData[0].DomainList1}
              DomainList2={DSUKCourseData[0].DomainList2}
              DomainList3={DSUKCourseData[0].DomainList3}
              DomainList4={DSUKCourseData[0].DomainList4}
              DomainList5={DSUKCourseData[0].DomainList5}
              DomainList6={DSUKCourseData[0].DomainList6}
              Domainlink1={DSUKCourseData[0].Domainlink1}
              Domainlink2={DSUKCourseData[0].Domainlink2}
              Domainlink3={DSUKCourseData[0].Domainlink3}
              Domainlink4={DSUKCourseData[0].Domainlink4}
              Domainlink5={DSUKCourseData[0].Domainlink5}
              Domainlink6={DSUKCourseData[0].Domainlink6}
              Domainlink7={DSUKCourseData[0].Domainlink1}
              Domainlink8={DSUKCourseData[0].Domainlink1}
              Domainlink9={DSUKCourseData[0].Domainlink1}
              Domainlink10={DSUKCourseData[0].Domainlink1}
              CertificationBot1={DSUKCourseData[0].CertificationBot1}
              CertificationBot2={DSUKCourseData[0].CertificationBot2}
              CertificationBot3={DSUKCourseData[0].CertificationBot3}
              CertificationBot4={DSUKCourseData[0].CertificationBot4}
              src={DSUKCourseData[0].src}
              src22={DSUKCourseData[0].src22}
              src33={DSUKCourseData[0].src33}
              ModuleHead1={DSUKCourseData[0].ModuleHead1}
              ModuleBot1={DSUKCourseData[0].ModuleBot1}
              ModuleBot2={DSUKCourseData[0].ModuleBot2}
              Modulelist1={DSUKCourseData[0].Modulelist1}
              Modulelist2={DSUKCourseData[0].Modulelist2}
              Modulelist3={DSUKCourseData[0].Modulelist3}
              Modulelist4={DSUKCourseData[0].Modulelist4}
              Modulelist5={DSUKCourseData[0].Modulelist5}
              Modulelist6={DSUKCourseData[0].Modulelist6}
              Modulelist7={DSUKCourseData[0].Modulelist7}
              syllabush1={DSUKCourseData[0].syllabush1}
              syllabusb1={DSUKCourseData[0].syllabusb1}
              SyllabusBotlist11={DSUKCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSUKCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSUKCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSUKCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSUKCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSUKCourseData[0].SyllabusBotlist16}
              syllabush2={DSUKCourseData[0].syllabush2}
              syllabusb2={DSUKCourseData[0].syllabusb2}
              SyllabusBotlist21={DSUKCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSUKCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSUKCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSUKCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSUKCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSUKCourseData[0].SyllabusBotlist26}
              syllabush3={DSUKCourseData[0].syllabush3}
              syllabusb3={DSUKCourseData[0].syllabusb3}
              SyllabusBotlist31={DSUKCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSUKCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSUKCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSUKCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSUKCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSUKCourseData[0].SyllabusBotlist36}
              syllabush4={DSUKCourseData[0].syllabush4}
              syllabusb4={DSUKCourseData[0].syllabusb4}
              SyllabusBotlist41={DSUKCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSUKCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSUKCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSUKCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSUKCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSUKCourseData[0].SyllabusBotlist46}
              syllabussrc={DSUKCourseData[0].syllabussrc}
              JobBot001={DSUKCourseData[0].JobBot001}
              JobBot003={DSUKCourseData[0].JobBot003}
              JobHeadAustin01={DSUKCourseData[0].JobHeadAustin01}
              JobBot34={DSUKCourseData[0].JobBot34}
              JobBot39={DSUKCourseData[0].JobBot39}
              JobHead1={DSUKCourseData[0].JobHead1}
              JobHead2={DSUKCourseData[0].JobHead2}
              JobBot3={DSUKCourseData[0].JobBot3}
              Joblist1={DSUKCourseData[0].Joblist1}
              Joblist2={DSUKCourseData[0].Joblist2}
              Joblist3={DSUKCourseData[0].Joblist3}
              Joblist4={DSUKCourseData[0].Joblist4}
              Joblist5={DSUKCourseData[0].Joblist5}
              Joblist6={DSUKCourseData[0].Joblist6}
              Joblist7={DSUKCourseData[0].Joblist7}
              Joblist8={DSUKCourseData[0].Joblist8}
              Joblist9={DSUKCourseData[0].Joblist9}
              Joblist10={DSUKCourseData[0].Joblist10}
              Joblist11={DSUKCourseData[0].Joblist11}
              Joblist12={DSUKCourseData[0].Joblist12}
              Joblist13={DSUKCourseData[0].Joblist13}
              JobHead19={DSUKCourseData[0].JobHead19}
              JobBot20={DSUKCourseData[0].JobBot20}
              JobHead20={DSUKCourseData[0].JobHead20}
              Joblist14={DSUKCourseData[0].Joblist14}
              Joblist15={DSUKCourseData[0].Joblist15}
              Joblist16={DSUKCourseData[0].Joblist16}
              Joblist17={DSUKCourseData[0].Joblist17}
              JobHead21={DSUKCourseData[0].JobHead21}
              JobBot21={DSUKCourseData[0].JobBot21}
              JobBot22={DSUKCourseData[0].JobBot22}
              Joblist21={DSUKCourseData[0].Joblist21}
              Joblist22={DSUKCourseData[0].Joblist22}
              Joblist50={DSUKCourseData[0].Joblist50}
              Joblist51={DSUKCourseData[0].Joblist51}
              Joblist52={DSUKCourseData[0].Joblist52}
              Joblist53={DSUKCourseData[0].Joblist53}
              Joblist54={DSUKCourseData[0].Joblist54}
              JobBot23={DSUKCourseData[0].JobBot23}
              JobBotMasterBot5={DSUKCourseData[0].JobBotMasterBot5}
              modulelist={true}
              joblist={true}
              showData={true}
              JobHead22={DSUKCourseData[0].JobHead22}
              JobBot37={DSUKCourseData[0].JobBot37}
              JobBot24={DSUKCourseData[0].JobBot24}
              Joblist23={DSUKCourseData[0].Joblist23}
              Joblist24={DSUKCourseData[0].Joblist24}
              Joblist25={DSUKCourseData[0].Joblist25}
              Joblist26={DSUKCourseData[0].Joblist26}
              Joblist27={DSUKCourseData[0].Joblist27}
              Joblist28={DSUKCourseData[0].Joblist28}
              Joblist29={DSUKCourseData[0].Joblist29}
              Joblist30={DSUKCourseData[0].Joblist30}
              JobBot25={DSUKCourseData[0].JobBot25}
              ProjectsHead1={DSUKCourseData[0].ProjectsHead1}
              ProjectsBot1={DSUKCourseData[0].ProjectsBot1}
              ProjectsBot2={DSUKCourseData[0].ProjectsBot2}
              ProjectsBot3={DSUKCourseData[0].ProjectsBot3}
              ProjectsBot4={DSUKCourseData[0].ProjectsBot4}
              ProjectsBot5={DSUKCourseData[0].ProjectsBot5}
              ProjectsBot6={DSUKCourseData[0].ProjectsBot6}
              ProjectsBot7={DSUKCourseData[0].ProjectsBot7}
              src1={DSUKCourseData[0].src1}
              ProjectsH1={DSUKCourseData[0].ProjectsH1}
              Projectsp1={DSUKCourseData[0].Projectsp1}
              src2={DSUKCourseData[0].src2}
              ProjectsH2={DSUKCourseData[0].ProjectsH2}
              Projectsp2={DSUKCourseData[0].Projectsp2}
              src3={DSUKCourseData[0].src3}
              ProjectsH3={DSUKCourseData[0].ProjectsH3}
              Projectsp3={DSUKCourseData[0].Projectsp3}
              src4={DSUKCourseData[0].src4}
              ProjectsH4={DSUKCourseData[0].ProjectsH4}
              Projectsp4={DSUKCourseData[0].Projectsp4}
              AlumniBot1={DSUKCourseData[0].AlumniBot1}
              Asrc1={DSUKCourseData[0].Asrc1}
              AlumniH1={DSUKCourseData[0].AlumniH1}
              Alumnip1={DSUKCourseData[0].Alumnip1}
              Asrc2={DSUKCourseData[0].Asrc2}
              AlumniH2={DSUKCourseData[0].AlumniH2}
              Alumnip2={DSUKCourseData[0].Alumnip2}
              Asrc3={DSUKCourseData[0].Asrc3}
              AlumniH3={DSUKCourseData[0].AlumniH3}
              Alumnip3={DSUKCourseData[0].Alumnip3}
              Asrc4={DSUKCourseData[0].Asrc4}
              AlumniH4={DSUKCourseData[0].AlumniH4}
              Alumnip4={DSUKCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSUKCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DSUKCourseData[0].CityTextB}
          CityText={DSUKCourseData[0].CityText}
          CityTextLB={DSUKCourseData[0].CityTextLB}
          CityTextL={DSUKCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
