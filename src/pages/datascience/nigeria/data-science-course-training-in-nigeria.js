import Navbar from "@/components/Global/Navbar/Navbar";
import Realstory from "@/components/Home/Realstory/Realstory";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSNigeriaCourseData } from "../../../CityData/Nigeria/datascienceCourseTrainingInnigeria";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
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
// const CityText = dynamic(() =>
//   import("../../../components/Seo/CityText/CityText")
// );
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
        <title>
          Data Science Course Training with Certificate in Nigeria - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content=" Top-notch data science course training in Nigeria with Learnbay. Gain hands-on experience through live projects and become industry-ready. Enroll now!          "
        />
        <meta
          name="keywords"
          content="Data Science Course in nigeria, data scientist course in nigeria, best data science courses in nigeria, data science training in nigeria, data science course, data science certificate, data science certification course, best data science certification          "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/nigeria/data-science-course-training-in-nigeria"
        />
        <meta
          property="og:title"
          content="Data Science Course in Nigeria | Data Science Training in Nigeria"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in Nigeria. Learnbay is Advanced Data Science Course Training Institute in Nigeria. Data science course in Nigeria will enhance your career"
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
          content="Data Science Course in Nigeria | Data Science Training in Nigeria"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data science course in Nigeria. Learnbay is Advanced Data Science Course Training Institute in Nigeria. Data science course in Nigeria will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data science course in Nigeria. Learnbay is Advanced Data Science Course Training Institute in Nigeria. Data science course in Nigeria will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/nigeria/data-science-course-training-in-nigeria"
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
          content="https://www.learnbay.co/datascience/nigeria/data-science-course-training-in-nigeria"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in Nigeria"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/nigeria/data-science-course-training-in-nigeria"
        />
        <meta
          property="og:title"
          content="Data Science Course Nigeria | Data Scientist Course Nigeria | Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll for Data Science Course and Certification Training in Nigeria from Learnbay in association with IBM. This Data Scientist course in Nigeria will give you hands-on experience with technologies and job assistance.
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
          content="Data Science Course Nigeria | Data Scientist Course Nigeria | Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Enroll for Data Science Course and Certification Training in Nigeria from Learnbay in association with IBM. This Data Scientist course in Nigeria will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          name="twitter:description"
          content="Enroll for Data Science Course and Certification Training in Nigeria from Learnbay in association with IBM. This Data Scientist course in Nigeria will give you hands-on experience with technologies and job assistance.
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
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Data Science Courses in Nigeria"
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont="Get into the world of digital complexities with the ease of data-driven insights. Enroll in Learnbay’s data science course in Nigeria to kick-start an assured career transition. Join us today to unlock untapped career horizons in data science and gain attractive perks.           "
        />
        <SecondSection
          SecondSectionData={DSNigeriaCourseData[0].secondSection}
        />
        <Realstory />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="$1700"
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
              cityTextDSNGR={true}
              ProgramBot1={DSNigeriaCourseData[0].ProgramBot1}
              ProgramHead3={DSNigeriaCourseData[0].ProgramHead3}
              ProgramBot3={DSNigeriaCourseData[0].ProgramBot3}
              ProgramBot31={DSNigeriaCourseData[0].ProgramBot31}
              ProgramBot4={DSNigeriaCourseData[0].ProgramBot4}
              ProgramBot5={DSNigeriaCourseData[0].ProgramBot5}
              ProgramBot6={DSNigeriaCourseData[0].ProgramBot6}
              Courselink1={DSNigeriaCourseData[0].Courselink1}
              Courselink2={DSNigeriaCourseData[0].Courselink2}
              Courselink3={DSNigeriaCourseData[0].Courselink3}
              Courselink4={DSNigeriaCourseData[0].Courselink4}
              Courselink5={DSNigeriaCourseData[0].Courselink5}
              Course1={DSNigeriaCourseData[0].Course1}
              Course2={DSNigeriaCourseData[0].Course2}
              Course3={DSNigeriaCourseData[0].Course3}
              Course4={DSNigeriaCourseData[0].Course4}
              Course5={DSNigeriaCourseData[0].Course5}
              DomainHead1={DSNigeriaCourseData[0].DomainHead1}
              DomainBot1={DSNigeriaCourseData[0].DomainBot1}
              DomainBot2={DSNigeriaCourseData[0].DomainBot2}
              DomainBot3={DSNigeriaCourseData[0].DomainBot3}
              DomainList1={DSNigeriaCourseData[0].DomainList1}
              DomainList2={DSNigeriaCourseData[0].DomainList2}
              DomainList3={DSNigeriaCourseData[0].DomainList3}
              DomainList4={DSNigeriaCourseData[0].DomainList4}
              DomainList5={DSNigeriaCourseData[0].DomainList5}
              DomainList6={DSNigeriaCourseData[0].DomainList6}
              DomainList7={DSNigeriaCourseData[0].DomainList7}
              DomainList8={DSNigeriaCourseData[0].DomainList8}
              DomainList9={DSNigeriaCourseData[0].DomainList9}
              DomainList10={DSNigeriaCourseData[0].DomainList10}
              Domainlink1={DSNigeriaCourseData[0].Domainlink1}
              Domainlink2={DSNigeriaCourseData[0].Domainlink2}
              Domainlink3={DSNigeriaCourseData[0].Domainlink3}
              Domainlink4={DSNigeriaCourseData[0].Domainlink4}
              Domainlink5={DSNigeriaCourseData[0].Domainlink5}
              Domainlink6={DSNigeriaCourseData[0].Domainlink6}
              CertificationBot1={DSNigeriaCourseData[0].CertificationBot1}
              CertificationBot2={DSNigeriaCourseData[0].CertificationBot2}
              CertificationBot3={DSNigeriaCourseData[0].CertificationBot3}
              CertificationBot4={DSNigeriaCourseData[0].CertificationBot4}
              CertificationBot5={DSNigeriaCourseData[0].CertificationBot5}
              src={DSNigeriaCourseData[0].src}
              src22={DSNigeriaCourseData[0].src22}
              src33={DSNigeriaCourseData[0].src33}
              ModuleHead1={DSNigeriaCourseData[0].ModuleHead1}
              ModuleBot1={DSNigeriaCourseData[0].ModuleBot1}
              ModuleBot2={DSNigeriaCourseData[0].ModuleBot2}
              Modulelist1={DSNigeriaCourseData[0].Modulelist1}
              Modulelist2={DSNigeriaCourseData[0].Modulelist2}
              Modulelist3={DSNigeriaCourseData[0].Modulelist3}
              Modulelist4={DSNigeriaCourseData[0].Modulelist4}
              Modulelist5={DSNigeriaCourseData[0].Modulelist5}
              Modulelist6={DSNigeriaCourseData[0].Modulelist6}
              Modulelist7={DSNigeriaCourseData[0].Modulelist7}
              syllabush1={DSNigeriaCourseData[0].syllabush1}
              syllabusb1={DSNigeriaCourseData[0].syllabusb1}
              SyllabusBotlist11={DSNigeriaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSNigeriaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSNigeriaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSNigeriaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSNigeriaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSNigeriaCourseData[0].SyllabusBotlist16}
              syllabush2={DSNigeriaCourseData[0].syllabush2}
              syllabusb2={DSNigeriaCourseData[0].syllabusb2}
              SyllabusBotlist21={DSNigeriaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSNigeriaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSNigeriaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSNigeriaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSNigeriaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSNigeriaCourseData[0].SyllabusBotlist26}
              syllabush3={DSNigeriaCourseData[0].syllabush3}
              syllabusb3={DSNigeriaCourseData[0].syllabusb3}
              SyllabusBotlist31={DSNigeriaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSNigeriaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSNigeriaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSNigeriaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSNigeriaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSNigeriaCourseData[0].SyllabusBotlist36}
              syllabush4={DSNigeriaCourseData[0].syllabush4}
              syllabusb4={DSNigeriaCourseData[0].syllabusb4}
              SyllabusBotlist41={DSNigeriaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSNigeriaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSNigeriaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSNigeriaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSNigeriaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSNigeriaCourseData[0].SyllabusBotlist46}
              syllabussrc={DSNigeriaCourseData[0].syllabussrc}
              JobHead1={DSNigeriaCourseData[0].JobHead1}
              JobBot1={DSNigeriaCourseData[0].JobBot1}
              JobHead2={DSNigeriaCourseData[0].JobHead2}
              JobBot3={DSNigeriaCourseData[0].JobBot3}
              Joblist1={DSNigeriaCourseData[0].Joblist1}
              Joblist2={DSNigeriaCourseData[0].Joblist2}
              Joblist3={DSNigeriaCourseData[0].Joblist3}
              Joblist4={DSNigeriaCourseData[0].Joblist4}
              Joblist5={DSNigeriaCourseData[0].Joblist5}
              Joblist6={DSNigeriaCourseData[0].Joblist6}
              Joblist7={DSNigeriaCourseData[0].Joblist7}
              Joblist8={DSNigeriaCourseData[0].Joblist8}
              Joblist9={DSNigeriaCourseData[0].Joblist9}
              Joblist10={DSNigeriaCourseData[0].Joblist10}
              Joblist11={DSNigeriaCourseData[0].Joblist11}
              Joblist12={DSNigeriaCourseData[0].Joblist12}
              Joblist13={DSNigeriaCourseData[0].Joblist13}
              JobBot19={DSNigeriaCourseData[0].JobBot19}
              JobHead19={DSNigeriaCourseData[0].JobHead19}
              JobHead20={DSNigeriaCourseData[0].JobHead21}
              Joblist14={DSNigeriaCourseData[0].Joblist14}
              Joblist15={DSNigeriaCourseData[0].Joblist15}
              Joblist16={DSNigeriaCourseData[0].Joblist16}
              Joblist17={DSNigeriaCourseData[0].Joblist17}
              Joblist18={DSNigeriaCourseData[0].Joblist18}
              JobHead30={DSNigeriaCourseData[0].JobHead30}
              JobBot21={DSNigeriaCourseData[0].JobBot21}
              JobBot22={DSNigeriaCourseData[0].JobBot22}
              Joblist21={DSNigeriaCourseData[0].Joblist21}
              Joblist22={DSNigeriaCourseData[0].Joblist22}
              Joblist19={DSNigeriaCourseData[0].Joblist19}
              Joblist20={DSNigeriaCourseData[0].Joblist20}
              JobBot23={DSNigeriaCourseData[0].JobBot23}
              JobBot20={DSNigeriaCourseData[0].JobBot20}
              Joblist50={DSNigeriaCourseData[0].Joblist50}
              Joblist51={DSNigeriaCourseData[0].Joblist51}
              Joblist52={DSNigeriaCourseData[0].Joblist52}
              Joblist53={DSNigeriaCourseData[0].Joblist53}
              Joblist54={DSNigeriaCourseData[0].Joblist54}
              modulelist={true}
              usaonly={true}
              joblist={true}
              showData={true}
              JobHead22={DSNigeriaCourseData[0].JobHead22}
              JobBot24={DSNigeriaCourseData[0].JobBot24}
              Joblist23={DSNigeriaCourseData[0].Joblist23}
              Joblist24={DSNigeriaCourseData[0].Joblist24}
              Joblist25={DSNigeriaCourseData[0].Joblist25}
              Joblist26={DSNigeriaCourseData[0].Joblist26}
              Joblist27={DSNigeriaCourseData[0].Joblist27}
              Joblist28={DSNigeriaCourseData[0].Joblist28}
              Joblist29={DSNigeriaCourseData[0].Joblist29}
              Joblist30={DSNigeriaCourseData[0].Joblist30}
              Joblist31={DSNigeriaCourseData[0].Joblist31}
              JobBot25={DSNigeriaCourseData[0].JobBot25}
              ProjectsHead1={DSNigeriaCourseData[0].ProjectsHead1}
              ProjectsBot1={DSNigeriaCourseData[0].ProjectsBot1}
              ProjectsBot2={DSNigeriaCourseData[0].ProjectsBot2}
              ProjectsBot3={DSNigeriaCourseData[0].ProjectsBot3}
              ProjectsBot4={DSNigeriaCourseData[0].ProjectsBot4}
              ProjectsBot5={DSNigeriaCourseData[0].ProjectsBot5}
              ProjectsBot6={DSNigeriaCourseData[0].ProjectsBot6}
              ProjectsBot7={DSNigeriaCourseData[0].ProjectsBot7}
              src1={DSNigeriaCourseData[0].src1}
              ProjectsH1={DSNigeriaCourseData[0].ProjectsH1}
              Projectsp1={DSNigeriaCourseData[0].Projectsp1}
              src2={DSNigeriaCourseData[0].src2}
              ProjectsH2={DSNigeriaCourseData[0].ProjectsH2}
              Projectsp2={DSNigeriaCourseData[0].Projectsp2}
              src3={DSNigeriaCourseData[0].src3}
              ProjectsH3={DSNigeriaCourseData[0].ProjectsH3}
              Projectsp3={DSNigeriaCourseData[0].Projectsp3}
              src4={DSNigeriaCourseData[0].src4}
              ProjectsH4={DSNigeriaCourseData[0].ProjectsH4}
              Projectsp4={DSNigeriaCourseData[0].Projectsp4}
              AlumniBot1={DSNigeriaCourseData[0].AlumniBot1}
              Asrc1={DSNigeriaCourseData[0].Asrc1}
              AlumniH1={DSNigeriaCourseData[0].AlumniH1}
              Alumnip1={DSNigeriaCourseData[0].Alumnip1}
              Asrc2={DSNigeriaCourseData[0].Asrc2}
              AlumniH2={DSNigeriaCourseData[0].AlumniH2}
              Alumnip2={DSNigeriaCourseData[0].Alumnip2}
              Asrc3={DSNigeriaCourseData[0].Asrc3}
              AlumniH3={DSNigeriaCourseData[0].AlumniH3}
              Alumnip3={DSNigeriaCourseData[0].Alumnip3}
              Asrc4={DSNigeriaCourseData[0].Asrc4}
              AlumniH4={DSNigeriaCourseData[0].AlumniH4}
              Alumnip4={DSNigeriaCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSNigeriaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={DSNigeriaCourseData[0].CityTextB}
          CityText={DSNigeriaCourseData[0].CityText}
          CityTextLB={DSNigeriaCourseData[0].CityTextLB}
          CityTextL={DSNigeriaCourseData[0].CityTextL}
        /> */}
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
