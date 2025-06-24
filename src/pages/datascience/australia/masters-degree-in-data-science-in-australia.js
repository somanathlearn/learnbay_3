import Navbar from "@/components/Global/Navbar/Navbar";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { masterdegreeAUSData } from "../../../CityData/australia/masterDegreeDSAustreliaData";
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
    const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Masters-in-CS.pdf"
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Master's Degree in Data Science and AI in Australia - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="  Explore our Master's Degree in Data Science and Artificial Intelligence in Australia. Dive into cutting-edge tech and unlock career opportunities. Enroll today!          "
        />
        <meta
          name="keywords"
          content="Masters in data science Australia, Data science masters in Australia, Masters in AI in Australia, Masters in Artificial Intelligence in Australia, Masters in Data Science, Data Science Masters Programs in Australia.          "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/australia/masters-degree-in-data-science-in-australia"
        />
        <meta
          property="og:title"
          content="Master data Science Course in Austrelia | Data Science Training in Austrelia"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in Austrelia. Learnbay is Advanced Data Science Course Training Institute in Austrelia. Data science course in Austrelia will enhance your career"
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
          content="Data Science Course in Austrelia | Data Science Training in Austrelia"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data science course in Austrelia. Learnbay is Advanced Data Science Course Training Institute in Austrelia. Data science course in Austrelia will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data science course in Austrelia. Learnbay is Advanced Data Science Course Training Institute in Austrelia. Data science course in Austrelia will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/australia/masters-degree-in-data-science-in-australia"
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
          content="https://www.learnbay.co/datascience/australia/masters-degree-in-data-science-in-australia"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in Austrelia"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/australia/masters-degree-in-data-science-in-australia"
        />
        <meta
          property="og:title"
          content="Data Science Course Austrelia | Data Scientist Course Austrelia | Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll for Data Science Course and Certification Training in Austrelia from Learnbay in association with IBM. This Data Scientist course in Austrelia will give you hands-on experience with technologies and job assistance.
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
          content="Data Science Course Austrelia | Data Scientist Course Austrelia | Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Enroll for Data Science Course and Certification Training in Austrelia from Learnbay in association with IBM. This Data Scientist course in Austrelia will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          name="twitter:description"
          content="Enroll for Data Science Course and Certification Training in Austrelia from Learnbay in association with IBM. This Data Scientist course in Austrelia will give you hands-on experience with technologies and job assistance.
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
          titleCourse="Best Data Science Courses in Austrelia          "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="  Master’s Degree Program in Data Science and AI – Australia           "
          firstTopPara="Learnbay Excelvarsity          "
          cityParaCont="Equip yourself with a cutting-edge masters in data science program for an effortless career transition.  Enroll with us to acquire the highly sought-after data science competencies through our GenAI-rich course modules.  Kick-start your data science career journey with IBM project certification.            "
        />
        <SecondSection
          SecondSectionData={masterdegreeAUSData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={true}
          Testimonial={masterdegreeAUSData[0].testimonial}
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
              cityTextMasterAUS={true}
              ProgramBot1={masterdegreeAUSData[0].ProgramBot1}
              ProgramHead3={masterdegreeAUSData[0].ProgramHead3}
              ProgramBot3={masterdegreeAUSData[0].ProgramBot3}
              ProgramBot31={masterdegreeAUSData[0].ProgramBot31}
              ProgramBot4={masterdegreeAUSData[0].ProgramBot4}
              ProgramBot5={masterdegreeAUSData[0].ProgramBot5}
              ProgramBot6={masterdegreeAUSData[0].ProgramBot6}
              Courselink1={masterdegreeAUSData[0].Courselink1}
              Courselink2={masterdegreeAUSData[0].Courselink2}
              Courselink3={masterdegreeAUSData[0].Courselink3}
              Courselink4={masterdegreeAUSData[0].Courselink4}
              Courselink5={masterdegreeAUSData[0].Courselink5}
              Course1={masterdegreeAUSData[0].Course1}
              Course2={masterdegreeAUSData[0].Course2}
              Course3={masterdegreeAUSData[0].Course3}
              Course4={masterdegreeAUSData[0].Course4}
              Course5={masterdegreeAUSData[0].Course5}
              DomainHead1={masterdegreeAUSData[0].DomainHead1}
              DomainBot1={masterdegreeAUSData[0].DomainBot1}
              DomainBot2={masterdegreeAUSData[0].DomainBot2}
              DomainBot3={masterdegreeAUSData[0].DomainBot3}
              DomainMasterBot1={masterdegreeAUSData[0].DomainMasterBot1}
              DomainMasterh4={masterdegreeAUSData[0].DomainMasterh4}
              DomainMasterBot2={masterdegreeAUSData[0].DomainMasterBot2}
              DomainMasterBot3={masterdegreeAUSData[0].DomainMasterBot3}
              DomainMasterBot4={masterdegreeAUSData[0].DomainMasterBot4}
              masterdomain={true}
              DomainMasterHead1={masterdegreeAUSData[0].DomainMasterHead1}
              DomainMasterlist1={masterdegreeAUSData[0].DomainMasterlist1}
              DomainMasterlist2={masterdegreeAUSData[0].DomainMasterlist2}
              DomainList1={masterdegreeAUSData[0].DomainList1}
              DomainList2={masterdegreeAUSData[0].DomainList2}
              DomainList3={masterdegreeAUSData[0].DomainList3}
              DomainList4={masterdegreeAUSData[0].DomainList4}
              DomainList5={masterdegreeAUSData[0].DomainList5}
              DomainList6={masterdegreeAUSData[0].DomainList6}
              Domainlink1={masterdegreeAUSData[0].Domainlink1}
              Domainlink2={masterdegreeAUSData[0].Domainlink2}
              Domainlink3={masterdegreeAUSData[0].Domainlink3}
              Domainlink4={masterdegreeAUSData[0].Domainlink4}
              Domainlink5={masterdegreeAUSData[0].Domainlink5}
              Domainlink6={masterdegreeAUSData[0].Domainlink6}
              Domainlink7={masterdegreeAUSData[0].Domainlink1}
              Domainlink8={masterdegreeAUSData[0].Domainlink1}
              Domainlink9={masterdegreeAUSData[0].Domainlink1}
              Domainlink10={masterdegreeAUSData[0].Domainlink1}
              CertificationBot1={masterdegreeAUSData[0].CertificationBot1}
              CertificationMasterHead1={
                masterdegreeAUSData[0].CertificationMasterHead1
              }
              CertificationMasterHead2={
                masterdegreeAUSData[0].CertificationMasterHead2
              }
              CertificationBot2={masterdegreeAUSData[0].CertificationBot2}
              CertificationBot3={masterdegreeAUSData[0].CertificationBot3}
              CertificationBot4={masterdegreeAUSData[0].CertificationBot4}
              CertificationmasterBot5={
                masterdegreeAUSData[0].CertificationmasterBot5
              }
              src={masterdegreeAUSData[0].src}
              src22={masterdegreeAUSData[0].src22}
              src33={masterdegreeAUSData[0].src33}
              ModuleMasterBot1={masterdegreeAUSData[0].ModuleMasterBot1}
              ModuleMasterBot2={masterdegreeAUSData[0].ModuleMasterBot2}
              ModuleHead1={masterdegreeAUSData[0].ModuleHead1}
              ModuleMasterHead1={masterdegreeAUSData[0].ModuleMasterHead1}
              ModuleMasterHead2={masterdegreeAUSData[0].ModuleMasterHead2}
              MasterModulelist={true}
              ModuleMasterlist1={masterdegreeAUSData[0].ModuleMasterlist1}
              ModuleMasterlist2={masterdegreeAUSData[0].ModuleMasterlist2}
              ModuleMasterlist3={masterdegreeAUSData[0].ModuleMasterlist3}
              ModuleMasterlist4={masterdegreeAUSData[0].ModuleMasterlist4}
              ModuleMasterlist5={masterdegreeAUSData[0].ModuleMasterlist5}
              ModuleMasterlist6={masterdegreeAUSData[0].ModuleMasterlist6}
              ModuleMasterlist7={masterdegreeAUSData[0].ModuleMasterlist7}
              Modulelist1={masterdegreeAUSData[0].Modulelist1}
              Modulelist2={masterdegreeAUSData[0].Modulelist2}
              Modulelist3={masterdegreeAUSData[0].Modulelist3}
              Modulelist4={masterdegreeAUSData[0].Modulelist4}
              Modulelist5={masterdegreeAUSData[0].Modulelist5}
              Modulelist6={masterdegreeAUSData[0].Modulelist6}
              Modulelist7={masterdegreeAUSData[0].Modulelist7}
              syllabush1={masterdegreeAUSData[0].syllabush1}
              syllabusb1={masterdegreeAUSData[0].syllabusb1}
              SyllabusBotlist11={masterdegreeAUSData[0].SyllabusBotlist11}
              SyllabusBotlist12={masterdegreeAUSData[0].SyllabusBotlist12}
              SyllabusBotlist13={masterdegreeAUSData[0].SyllabusBotlist13}
              SyllabusBotlist14={masterdegreeAUSData[0].SyllabusBotlist14}
              SyllabusBotlist15={masterdegreeAUSData[0].SyllabusBotlist15}
              SyllabusBotlist16={masterdegreeAUSData[0].SyllabusBotlist16}
              syllabush2={masterdegreeAUSData[0].syllabush2}
              syllabusb2={masterdegreeAUSData[0].syllabusb2}
              SyllabusBotlist21={masterdegreeAUSData[0].SyllabusBotlist21}
              SyllabusBotlist22={masterdegreeAUSData[0].SyllabusBotlist22}
              SyllabusBotlist23={masterdegreeAUSData[0].SyllabusBotlist23}
              SyllabusBotlist24={masterdegreeAUSData[0].SyllabusBotlist24}
              SyllabusBotlist25={masterdegreeAUSData[0].SyllabusBotlist25}
              SyllabusBotlist26={masterdegreeAUSData[0].SyllabusBotlist26}
              syllabush3={masterdegreeAUSData[0].syllabush3}
              syllabusb3={masterdegreeAUSData[0].syllabusb3}
              SyllabusBotlist31={masterdegreeAUSData[0].SyllabusBotlist31}
              SyllabusBotlist32={masterdegreeAUSData[0].SyllabusBotlist32}
              SyllabusBotlist33={masterdegreeAUSData[0].SyllabusBotlist33}
              SyllabusBotlist34={masterdegreeAUSData[0].SyllabusBotlist34}
              SyllabusBotlist35={masterdegreeAUSData[0].SyllabusBotlist35}
              SyllabusBotlist36={masterdegreeAUSData[0].SyllabusBotlist36}
              syllabush4={masterdegreeAUSData[0].syllabush4}
              syllabusb4={masterdegreeAUSData[0].syllabusb4}
              SyllabusBotlist41={masterdegreeAUSData[0].SyllabusBotlist41}
              SyllabusBotlist42={masterdegreeAUSData[0].SyllabusBotlist42}
              SyllabusBotlist43={masterdegreeAUSData[0].SyllabusBotlist43}
              SyllabusBotlist44={masterdegreeAUSData[0].SyllabusBotlist44}
              SyllabusBotlist45={masterdegreeAUSData[0].SyllabusBotlist45}
              SyllabusBotlist46={masterdegreeAUSData[0].SyllabusBotlist46}
              syllabussrc={masterdegreeAUSData[0].syllabussrc}
              JobHead1={masterdegreeAUSData[0].JobHead1}
              MasterJobBot1={masterdegreeAUSData[0].MasterJobBot1}
              JobHead2={masterdegreeAUSData[0].JobHead2}
              JobBot3={masterdegreeAUSData[0].JobBot3}
              Joblist1={masterdegreeAUSData[0].Joblist1}
              Joblist2={masterdegreeAUSData[0].Joblist2}
              Joblist3={masterdegreeAUSData[0].Joblist3}
              Joblist4={masterdegreeAUSData[0].Joblist4}
              MasterJobSpan1={masterdegreeAUSData[0].MasterJobSpan1}
              JobBotMasterBot4={masterdegreeAUSData[0].JobBotMasterBot4}
              Joblist5={masterdegreeAUSData[0].Joblist5}
              Joblist6={masterdegreeAUSData[0].Joblist6}
              Joblist7={masterdegreeAUSData[0].Joblist7}
              Joblist8={masterdegreeAUSData[0].Joblist8}
              Joblist9={masterdegreeAUSData[0].Joblist9}
              Joblist10={masterdegreeAUSData[0].Joblist10}
              Joblist11={masterdegreeAUSData[0].Joblist11}
              Joblist12={masterdegreeAUSData[0].Joblist12}
              Joblist13={masterdegreeAUSData[0].Joblist13}
              JobHead19={masterdegreeAUSData[0].JobHead19}
              JobBot20={masterdegreeAUSData[0].JobBot20}
              JobBotmaster20={masterdegreeAUSData[0].JobBotmaster20}
              JobHead20={masterdegreeAUSData[0].JobHead20}
              Joblist14={masterdegreeAUSData[0].Joblist14}
              Joblist15={masterdegreeAUSData[0].Joblist15}
              Joblist16={masterdegreeAUSData[0].Joblist16}
              Joblist17={masterdegreeAUSData[0].Joblist17}
              Joblist18={masterdegreeAUSData[0].Joblist18}
              Joblist19={masterdegreeAUSData[0].Joblist19}
              JobBot19={masterdegreeAUSData[0].JobBot19}
              JobHead21={masterdegreeAUSData[0].JobHead21}
              JobBot21={masterdegreeAUSData[0].JobBot21}
              JobBot22={masterdegreeAUSData[0].JobBot22}
              Joblist21={masterdegreeAUSData[0].Joblist21}
              Joblist22={masterdegreeAUSData[0].Joblist22}
              Joblist50={masterdegreeAUSData[0].Joblist50}
              Joblist51={masterdegreeAUSData[0].Joblist51}
              Joblist52={masterdegreeAUSData[0].Joblist52}
              Joblist53={masterdegreeAUSData[0].Joblist53}
              Joblist54={masterdegreeAUSData[0].Joblist54}
              JobBot23={masterdegreeAUSData[0].JobBot23}
              JobBotMasterBot5={masterdegreeAUSData[0].JobBotMasterBot5}
              JobBotMasterhead={masterdegreeAUSData[0].JobBotMasterhead}
              //   usaotreliaonly={true}
              modulelist={true}
              joblist={true}
              showData={true}
              JobHead22={masterdegreeAUSData[0].JobHead22}
              JobBot24={masterdegreeAUSData[0].JobBot24}
              Joblist23={masterdegreeAUSData[0].Joblist23}
              Joblist24={masterdegreeAUSData[0].Joblist24}
              Joblist25={masterdegreeAUSData[0].Joblist25}
              Joblist26={masterdegreeAUSData[0].Joblist26}
              Joblist27={masterdegreeAUSData[0].Joblist27}
              Joblist28={masterdegreeAUSData[0].Joblist28}
              Joblist29={masterdegreeAUSData[0].Joblist29}
              Joblist30={masterdegreeAUSData[0].Joblist30}
              JobBot25={masterdegreeAUSData[0].JobBot25}
              ProjectsHead1={masterdegreeAUSData[0].ProjectsHead1}
              ProjectsBot1={masterdegreeAUSData[0].ProjectsBot1}
              ProjectsBot2={masterdegreeAUSData[0].ProjectsBot2}
              ProjectsBot3={masterdegreeAUSData[0].ProjectsBot3}
              ProjectsBot4={masterdegreeAUSData[0].ProjectsBot4}
              ProjectsBot5={masterdegreeAUSData[0].ProjectsBot5}
              ProjectsBot6={masterdegreeAUSData[0].ProjectsBot6}
              ProjectsBot7={masterdegreeAUSData[0].ProjectsBot7}
              src1={masterdegreeAUSData[0].src1}
              ProjectsH1={masterdegreeAUSData[0].ProjectsH1}
              Projectsp1={masterdegreeAUSData[0].Projectsp1}
              src2={masterdegreeAUSData[0].src2}
              ProjectsH2={masterdegreeAUSData[0].ProjectsH2}
              Projectsp2={masterdegreeAUSData[0].Projectsp2}
              src3={masterdegreeAUSData[0].src3}
              ProjectsH3={masterdegreeAUSData[0].ProjectsH3}
              Projectsp3={masterdegreeAUSData[0].Projectsp3}
              src4={masterdegreeAUSData[0].src4}
              ProjectsH4={masterdegreeAUSData[0].ProjectsH4}
              Projectsp4={masterdegreeAUSData[0].Projectsp4}
              AlumniBot1={masterdegreeAUSData[0].AlumniBot1}
              Asrc1={masterdegreeAUSData[0].Asrc1}
              AlumniH1={masterdegreeAUSData[0].AlumniH1}
              Alumnip1={masterdegreeAUSData[0].Alumnip1}
              Asrc2={masterdegreeAUSData[0].Asrc2}
              AlumniH2={masterdegreeAUSData[0].AlumniH2}
              Alumnip2={masterdegreeAUSData[0].Alumnip2}
              Asrc3={masterdegreeAUSData[0].Asrc3}
              AlumniH3={masterdegreeAUSData[0].AlumniH3}
              Alumnip3={masterdegreeAUSData[0].Alumnip3}
              Asrc4={masterdegreeAUSData[0].Asrc4}
              AlumniH4={masterdegreeAUSData[0].AlumniH4}
              Alumnip4={masterdegreeAUSData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={masterdegreeAUSData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={masterdegreeAUSData[0].CityTextB}
          CityText={masterdegreeAUSData[0].CityText}
          CityTextLB={masterdegreeAUSData[0].CityTextLB}
          CityTextL={masterdegreeAUSData[0].CityTextL}
        /> */}
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
