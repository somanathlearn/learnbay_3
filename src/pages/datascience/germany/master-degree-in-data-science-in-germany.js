import Navbar from "@/components/Global/Navbar/Navbar";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { masterdegreeGermanyCourseData } from "../../../CityData/Germany/masterDegreeGermanyData";
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Masters-in-CS.pdf"
  return (
    <div className={styles.container}>
      <Head>
        <title>Master’s Degree in Data Science in Germany – Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content=" Prepare for a successful career in data science with Learnbay's Master’s Degree program in Germany. Gain practical skills and hands-on experience. Enroll now! "
        />
        <meta
          name="keywords"
          content="MS in data science in Germany, master degree in data science in Germany, masters in data science, best data science masters programs, MS in data science, data science masters in Germany, MSC data science in Germany,  online master’s degree in data science  "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/Germany/masters-degree-in-data-science-in-Germany"
        />
        <meta
          property="og:title"
          content="Master data Science Course in germany | Data Science Training in germany"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in germany. Learnbay is Advanced Data Science Course Training Institute in germany. Data science course in germany will enhance your career"
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
          content="Data Science Course in germany | Data Science Training in germany"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data science course in germany. Learnbay is Advanced Data Science Course Training Institute in germany. Data science course in germany will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data science course in germany. Learnbay is Advanced Data Science Course Training Institute in germany. Data science course in germany will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/germany/master-degree-in-data-science-in-germany"
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
          content="https://www.learnbay.co/datascience/germany/master-degree-in-data-science-in-germany"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in germany"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/germany/master-degree-in-data-science-in-germany"
        />
        <meta
          property="og:title"
          content="Data Science Course germany | Data Scientist Course germany | Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll for Data Science Course and Certification Training in Germany from Learnbay in association with IBM. This Data Scientist course in Germany will give you hands-on experience with technologies and job assistance.
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
          content="Data Science Course Germany | Data Scientist Course Germany | Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Enroll for Data Science Course and Certification Training in Germany from Learnbay in association with IBM. This Data Scientist course in Germany will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          name="twitter:description"
          content="Enroll for Data Science Course and Certification Training in Germany from Learnbay in association with IBM. This Data Scientist course in Germany will give you hands-on experience with technologies and job assistance.
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
          titleCourse="Best Data Science Courses in USA          "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="  Master’s Degree in Data Science in Germany   "
          firstTopPara="Learnbay Excelvarsity          "
          cityParaCont="Proliferate your business growth metrics with Learnbay’s MS in data science in Germany. Join us to leverage business yields with data-driven insights and impactful decisions. Our trend-setting master’s program supports a GenAI-rich career transition with optimal success. Enroll today and validate your data skills with an IBM Project Certification. 
   "
        />
        <SecondSection
          SecondSectionData={masterdegreeGermanyCourseData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={true}
          Testimonial={masterdegreeGermanyCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        /> */}
        <Realstory />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="$3500 "
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
              cityTextMastergermany={true}
              ProgramBot1={masterdegreeGermanyCourseData[0].ProgramBot1}
              ProgramHead3={masterdegreeGermanyCourseData[0].ProgramHead3}
              ProgramBot3={masterdegreeGermanyCourseData[0].ProgramBot3}
              ProgramBot31={masterdegreeGermanyCourseData[0].ProgramBot31}
              ProgramBot4={masterdegreeGermanyCourseData[0].ProgramBot4}
              ProgramBot5={masterdegreeGermanyCourseData[0].ProgramBot5}
              ProgramBot6={masterdegreeGermanyCourseData[0].ProgramBot6}
              Courselink1={masterdegreeGermanyCourseData[0].Courselink1}
              Courselink2={masterdegreeGermanyCourseData[0].Courselink2}
              Courselink3={masterdegreeGermanyCourseData[0].Courselink3}
              Courselink4={masterdegreeGermanyCourseData[0].Courselink4}
              Courselink5={masterdegreeGermanyCourseData[0].Courselink5}
              Course1={masterdegreeGermanyCourseData[0].Course1}
              Course2={masterdegreeGermanyCourseData[0].Course2}
              Course3={masterdegreeGermanyCourseData[0].Course3}
              Course4={masterdegreeGermanyCourseData[0].Course4}
              Course5={masterdegreeGermanyCourseData[0].Course5}
              DomainHead1={masterdegreeGermanyCourseData[0].DomainHead1}
              DomainBot1={masterdegreeGermanyCourseData[0].DomainBot1}
              DomainBot2={masterdegreeGermanyCourseData[0].DomainBot2}
              DomainBot3={masterdegreeGermanyCourseData[0].DomainBot3}
              DomainMasterBot1={
                masterdegreeGermanyCourseData[0].DomainMasterBot1
              }
              DomainMasterh4={masterdegreeGermanyCourseData[0].DomainMasterh4}
              DomainMasterBot2={
                masterdegreeGermanyCourseData[0].DomainMasterBot2
              }
              DomainMasterBot3={
                masterdegreeGermanyCourseData[0].DomainMasterBot3
              }
              masterdomain={true}
              DomainMasterHead1={
                masterdegreeGermanyCourseData[0].DomainMasterHead1
              }
              DomainMasterlist1={
                masterdegreeGermanyCourseData[0].DomainMasterlist1
              }
              DomainMasterlist2={
                masterdegreeGermanyCourseData[0].DomainMasterlist2
              }
              DomainMasterBot4={
                masterdegreeGermanyCourseData[0].DomainMasterBot4
              }
              DomainList1={masterdegreeGermanyCourseData[0].DomainList1}
              DomainList2={masterdegreeGermanyCourseData[0].DomainList2}
              DomainList3={masterdegreeGermanyCourseData[0].DomainList3}
              DomainList4={masterdegreeGermanyCourseData[0].DomainList4}
              DomainList5={masterdegreeGermanyCourseData[0].DomainList5}
              DomainList6={masterdegreeGermanyCourseData[0].DomainList6}
              Domainlink1={masterdegreeGermanyCourseData[0].Domainlink1}
              Domainlink2={masterdegreeGermanyCourseData[0].Domainlink2}
              Domainlink3={masterdegreeGermanyCourseData[0].Domainlink3}
              Domainlink4={masterdegreeGermanyCourseData[0].Domainlink4}
              Domainlink5={masterdegreeGermanyCourseData[0].Domainlink5}
              Domainlink6={masterdegreeGermanyCourseData[0].Domainlink6}
              Domainlink7={masterdegreeGermanyCourseData[0].Domainlink1}
              Domainlink8={masterdegreeGermanyCourseData[0].Domainlink1}
              Domainlink9={masterdegreeGermanyCourseData[0].Domainlink1}
              Domainlink10={masterdegreeGermanyCourseData[0].Domainlink1}
              CertificationBot1={
                masterdegreeGermanyCourseData[0].CertificationBot1
              }
              CertificationMasterHead1={
                masterdegreeGermanyCourseData[0].CertificationMasterHead1
              }
              CertificationMasterHead2={
                masterdegreeGermanyCourseData[0].CertificationMasterHead2
              }
              CertificationBot2={
                masterdegreeGermanyCourseData[0].CertificationBot2
              }
              CertificationBot3={
                masterdegreeGermanyCourseData[0].CertificationBot3
              }
              CertificationBot4={
                masterdegreeGermanyCourseData[0].CertificationBot4
              }
              src={masterdegreeGermanyCourseData[0].src}
              src22={masterdegreeGermanyCourseData[0].src22}
              src33={masterdegreeGermanyCourseData[0].src33}
              ModuleMasterBot1={
                masterdegreeGermanyCourseData[0].ModuleMasterBot1
              }
              ModuleMasterBot2={
                masterdegreeGermanyCourseData[0].ModuleMasterBot2
              }
              ModuleHead1={masterdegreeGermanyCourseData[0].ModuleHead1}
              ModuleMasterHead1={
                masterdegreeGermanyCourseData[0].ModuleMasterHead1
              }
              ModuleMasterHead2={
                masterdegreeGermanyCourseData[0].ModuleMasterHead2
              }
              MasterModulelist={true}
              ModuleMasterlist1={
                masterdegreeGermanyCourseData[0].ModuleMasterlist1
              }
              ModuleMasterlist2={
                masterdegreeGermanyCourseData[0].ModuleMasterlist2
              }
              ModuleMasterlist3={
                masterdegreeGermanyCourseData[0].ModuleMasterlist3
              }
              ModuleMasterlist4={
                masterdegreeGermanyCourseData[0].ModuleMasterlist4
              }
              ModuleMasterlist5={
                masterdegreeGermanyCourseData[0].ModuleMasterlist5
              }
              ModuleMasterlist6={
                masterdegreeGermanyCourseData[0].ModuleMasterlist6
              }
              ModuleMasterlist7={
                masterdegreeGermanyCourseData[0].ModuleMasterlist7
              }
              Modulelist1={masterdegreeGermanyCourseData[0].Modulelist1}
              Modulelist2={masterdegreeGermanyCourseData[0].Modulelist2}
              Modulelist3={masterdegreeGermanyCourseData[0].Modulelist3}
              Modulelist4={masterdegreeGermanyCourseData[0].Modulelist4}
              Modulelist5={masterdegreeGermanyCourseData[0].Modulelist5}
              Modulelist6={masterdegreeGermanyCourseData[0].Modulelist6}
              Modulelist7={masterdegreeGermanyCourseData[0].Modulelist7}
              syllabush1={masterdegreeGermanyCourseData[0].syllabush1}
              syllabusb1={masterdegreeGermanyCourseData[0].syllabusb1}
              SyllabusBotlist11={
                masterdegreeGermanyCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                masterdegreeGermanyCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                masterdegreeGermanyCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                masterdegreeGermanyCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                masterdegreeGermanyCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                masterdegreeGermanyCourseData[0].SyllabusBotlist16
              }
              syllabush2={masterdegreeGermanyCourseData[0].syllabush2}
              syllabusb2={masterdegreeGermanyCourseData[0].syllabusb2}
              SyllabusBotlist21={
                masterdegreeGermanyCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                masterdegreeGermanyCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                masterdegreeGermanyCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                masterdegreeGermanyCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                masterdegreeGermanyCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                masterdegreeGermanyCourseData[0].SyllabusBotlist26
              }
              syllabush3={masterdegreeGermanyCourseData[0].syllabush3}
              syllabusb3={masterdegreeGermanyCourseData[0].syllabusb3}
              SyllabusBotlist31={
                masterdegreeGermanyCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                masterdegreeGermanyCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                masterdegreeGermanyCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                masterdegreeGermanyCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                masterdegreeGermanyCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                masterdegreeGermanyCourseData[0].SyllabusBotlist36
              }
              syllabush4={masterdegreeGermanyCourseData[0].syllabush4}
              syllabusb4={masterdegreeGermanyCourseData[0].syllabusb4}
              SyllabusBotlist41={
                masterdegreeGermanyCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                masterdegreeGermanyCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                masterdegreeGermanyCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                masterdegreeGermanyCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                masterdegreeGermanyCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                masterdegreeGermanyCourseData[0].SyllabusBotlist46
              }
              syllabussrc={masterdegreeGermanyCourseData[0].syllabussrc}
              JobHead1={masterdegreeGermanyCourseData[0].JobHead1}
              MasterJobBot1={masterdegreeGermanyCourseData[0].MasterJobBot1}
              JobHead2={masterdegreeGermanyCourseData[0].JobHead2}
              JobBot3={masterdegreeGermanyCourseData[0].JobBot3}
              Joblist1={masterdegreeGermanyCourseData[0].Joblist1}
              Joblist2={masterdegreeGermanyCourseData[0].Joblist2}
              Joblist3={masterdegreeGermanyCourseData[0].Joblist3}
              Joblist4={masterdegreeGermanyCourseData[0].Joblist4}
              MasterJobSpan1={masterdegreeGermanyCourseData[0].MasterJobSpan1}
              JobBotMasterBot4={
                masterdegreeGermanyCourseData[0].JobBotMasterBot4
              }
              Joblist5={masterdegreeGermanyCourseData[0].Joblist5}
              Joblist6={masterdegreeGermanyCourseData[0].Joblist6}
              Joblist7={masterdegreeGermanyCourseData[0].Joblist7}
              Joblist8={masterdegreeGermanyCourseData[0].Joblist8}
              Joblist9={masterdegreeGermanyCourseData[0].Joblist9}
              Joblist10={masterdegreeGermanyCourseData[0].Joblist10}
              Joblist11={masterdegreeGermanyCourseData[0].Joblist11}
              Joblist12={masterdegreeGermanyCourseData[0].Joblist12}
              Joblist13={masterdegreeGermanyCourseData[0].Joblist13}
              JobHead19={masterdegreeGermanyCourseData[0].JobHead19}
              JobBot20={masterdegreeGermanyCourseData[0].JobBot20}
              JobHead20={masterdegreeGermanyCourseData[0].JobHead20}
              Joblist14={masterdegreeGermanyCourseData[0].Joblist14}
              Joblist15={masterdegreeGermanyCourseData[0].Joblist15}
              Joblist16={masterdegreeGermanyCourseData[0].Joblist16}
              Joblist17={masterdegreeGermanyCourseData[0].Joblist17}
              JobHead21={masterdegreeGermanyCourseData[0].JobHead21}
              JobBot21={masterdegreeGermanyCourseData[0].JobBot21}
              JobBot22={masterdegreeGermanyCourseData[0].JobBot22}
              Joblist21={masterdegreeGermanyCourseData[0].Joblist21}
              Joblist22={masterdegreeGermanyCourseData[0].Joblist22}
              Joblist50={masterdegreeGermanyCourseData[0].Joblist50}
              Joblist51={masterdegreeGermanyCourseData[0].Joblist51}
              Joblist52={masterdegreeGermanyCourseData[0].Joblist52}
              Joblist53={masterdegreeGermanyCourseData[0].Joblist53}
              Joblist54={masterdegreeGermanyCourseData[0].Joblist54}
              JobBot23={masterdegreeGermanyCourseData[0].JobBot23}
              JobBotMasterBot5={
                masterdegreeGermanyCourseData[0].JobBotMasterBot5
              }
              JobBotMasterBot6={
                masterdegreeGermanyCourseData[0].JobBotMasterBot6
              }
              //   Germanyonly={true}
              modulelist={true}
              joblist={true}
              showData={true}
              JobHead22={masterdegreeGermanyCourseData[0].JobHead22}
              JobBot24={masterdegreeGermanyCourseData[0].JobBot24}
              Joblist23={masterdegreeGermanyCourseData[0].Joblist23}
              Joblist24={masterdegreeGermanyCourseData[0].Joblist24}
              Joblist25={masterdegreeGermanyCourseData[0].Joblist25}
              Joblist26={masterdegreeGermanyCourseData[0].Joblist26}
              Joblist27={masterdegreeGermanyCourseData[0].Joblist27}
              Joblist28={masterdegreeGermanyCourseData[0].Joblist28}
              Joblist29={masterdegreeGermanyCourseData[0].Joblist29}
              Joblist30={masterdegreeGermanyCourseData[0].Joblist30}
              JobBot25={masterdegreeGermanyCourseData[0].JobBot25}
              ProjectsHead1={masterdegreeGermanyCourseData[0].ProjectsHead1}
              ProjectsBot1={masterdegreeGermanyCourseData[0].ProjectsBot1}
              ProjectsBot2={masterdegreeGermanyCourseData[0].ProjectsBot2}
              ProjectsBot3={masterdegreeGermanyCourseData[0].ProjectsBot3}
              ProjectsBot4={masterdegreeGermanyCourseData[0].ProjectsBot4}
              ProjectsBot5={masterdegreeGermanyCourseData[0].ProjectsBot5}
              ProjectsBot6={masterdegreeGermanyCourseData[0].ProjectsBot6}
              ProjectsBot7={masterdegreeGermanyCourseData[0].ProjectsBot7}
              src1={masterdegreeGermanyCourseData[0].src1}
              ProjectsH1={masterdegreeGermanyCourseData[0].ProjectsH1}
              Projectsp1={masterdegreeGermanyCourseData[0].Projectsp1}
              src2={masterdegreeGermanyCourseData[0].src2}
              ProjectsH2={masterdegreeGermanyCourseData[0].ProjectsH2}
              Projectsp2={masterdegreeGermanyCourseData[0].Projectsp2}
              src3={masterdegreeGermanyCourseData[0].src3}
              ProjectsH3={masterdegreeGermanyCourseData[0].ProjectsH3}
              Projectsp3={masterdegreeGermanyCourseData[0].Projectsp3}
              src4={masterdegreeGermanyCourseData[0].src4}
              ProjectsH4={masterdegreeGermanyCourseData[0].ProjectsH4}
              Projectsp4={masterdegreeGermanyCourseData[0].Projectsp4}
              AlumniBot1={masterdegreeGermanyCourseData[0].AlumniBot1}
              Asrc1={masterdegreeGermanyCourseData[0].Asrc1}
              AlumniH1={masterdegreeGermanyCourseData[0].AlumniH1}
              Alumnip1={masterdegreeGermanyCourseData[0].Alumnip1}
              Asrc2={masterdegreeGermanyCourseData[0].Asrc2}
              AlumniH2={masterdegreeGermanyCourseData[0].AlumniH2}
              Alumnip2={masterdegreeGermanyCourseData[0].Alumnip2}
              Asrc3={masterdegreeGermanyCourseData[0].Asrc3}
              AlumniH3={masterdegreeGermanyCourseData[0].AlumniH3}
              Alumnip3={masterdegreeGermanyCourseData[0].Alumnip3}
              Asrc4={masterdegreeGermanyCourseData[0].Asrc4}
              AlumniH4={masterdegreeGermanyCourseData[0].AlumniH4}
              Alumnip4={masterdegreeGermanyCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={masterdegreeGermanyCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={masterdegreeGermanyCourseData[0].CityTextB}
          CityText={masterdegreeGermanyCourseData[0].CityText}
          CityTextLB={masterdegreeGermanyCourseData[0].CityTextLB}
          CityTextL={masterdegreeGermanyCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
