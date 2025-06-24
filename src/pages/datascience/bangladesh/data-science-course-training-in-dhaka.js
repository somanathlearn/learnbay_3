import Navbar from "@/components/Global/Navbar/Navbar";
import Realstory from "@/components/Home/Realstory/Realstory";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSDhakaCourseData } from "../../../CityData/Bangladesh/datascienceTrainingInDhakaData";
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
        <title>Best Data Science Course in Dhaka, Bangladesh - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join the best online data science course in Dhaka. Master real-world skills, work on live projects & earn a globally recognized certificate with Learnbay. "
        />
        <meta
          name="keywords"
          content="data science training institute in Dhaka, data science training institute in Dhaka, data science course in Dhaka, data science course, best data science courses, online master’s degree in data science, data science certificate programs, online data science degree, MSc in data science in Bangladesh   "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/bangladesh/data-science-course-training-in-dhaka"
        />
        <meta
          property="og:title"
          content="Data Science Course in bangladesh | Data Science Training in bangladesh"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Join the best online data science course in Dhaka. Master real-world skills, work on live projects & earn a globally recognized certificate with Learnbay."
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
          content="Data Science Course in Dhaka | Data Science Training in Dhaka"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Join the best online data science course in Dhaka. Master real-world skills, work on live projects & earn a globally recognized certificate with Learnbay.Join the best online data science course in Dhaka. Master real-world skills, work on live projects & earn a globally recognized certificate with Learnbay."
        />
        <meta
          name="twitter:description"
          content="Join the best online data science course in Dhaka. Master real-world skills, work on live projects & earn a globally recognized certificate with Learnbay."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/bangladesh/data-science-course-training-in-dhaka"
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
          content="https://www.learnbay.co/datascience/bangladesh/data-science-course-training-in-dhaka"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in Dhaka"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/bangladesh/data-science-course-training-in-dhaka"
        />
        <meta
          property="og:title"
          content="Data Science Course Dhaka | Data Scientist Course Dhaka | Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll for Data Science Course and Certification Training in Dhaka from Learnbay in association with IBM. This Data Scientist course in Dhaka will give you hands-on experience with technologies and job assistance.
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
          content=" Best Data Science Course Training in Dhaka - Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content=" data science course in Bangladesh, data scientist courses in Bangladesh, best data science courses in Bangladesh, data science training in Bangladesh, data science course, data science certificate, data science certification course, best data science certification          "
        />
        <meta
          name="twitter:description"
          content="Enroll for Data Science Course and Certification Training in Bangladesh from Learnbay in association with IBM. This Data Scientist course in Bangladesh will give you hands-on experience with technologies and job assistance.
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
          firstHeading="Best Online Data Science Course in Dhaka, Bangladesh      "
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont="Leap forward to master in-demand tools via an industry-focused data science training institute in Dhaka. Here, you will develop your expertise with Generative AI models to demonstrate methodological skills in data science via live projects. Plus, our industry alliance with IBM & Microsoft supports a hassle-free global career rise.           "
        />
        <SecondSection SecondSectionData={DSDhakaCourseData[0].secondSection} />
        <Realstory />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="$1700"
            FeeEmi="₹ 8,850/month"
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
              cityTextDhaka={true}
              ProgramBot1={DSDhakaCourseData[0].ProgramBot1}
              ProgramHead3={DSDhakaCourseData[0].ProgramHead3}
              ProgramBot3={DSDhakaCourseData[0].ProgramBot3}
              ProgramBot31={DSDhakaCourseData[0].ProgramBot31}
              ProgramBot4={DSDhakaCourseData[0].ProgramBot4}
              ProgramBot5={DSDhakaCourseData[0].ProgramBot5}
              ProgramBot6={DSDhakaCourseData[0].ProgramBot6}
              Courselink1={DSDhakaCourseData[0].Courselink1}
              Courselink2={DSDhakaCourseData[0].Courselink2}
              Courselink3={DSDhakaCourseData[0].Courselink3}
              Courselink4={DSDhakaCourseData[0].Courselink4}
              Courselink5={DSDhakaCourseData[0].Courselink5}
              Course1={DSDhakaCourseData[0].Course1}
              Course2={DSDhakaCourseData[0].Course2}
              Course3={DSDhakaCourseData[0].Course3}
              Course4={DSDhakaCourseData[0].Course4}
              Course5={DSDhakaCourseData[0].Course5}
              DomainHead1={DSDhakaCourseData[0].DomainHead1}
              DomainBot1={DSDhakaCourseData[0].DomainBot1}
              DomainBot2={DSDhakaCourseData[0].DomainBot2}
              DomainBot3={DSDhakaCourseData[0].DomainBot3}
              DomainBot40={DSDhakaCourseData[0].DomainBot40}
              DomainBot41={DSDhakaCourseData[0].DomainBot41}
              DomainList1={DSDhakaCourseData[0].DomainList1}
              DomainList2={DSDhakaCourseData[0].DomainList2}
              DomainList3={DSDhakaCourseData[0].DomainList3}
              DomainList4={DSDhakaCourseData[0].DomainList4}
              DomainList5={DSDhakaCourseData[0].DomainList5}
              DomainList6={DSDhakaCourseData[0].DomainList6}
              DomainList7={DSDhakaCourseData[0].DomainList7}
              DomainList8={DSDhakaCourseData[0].DomainList8}
              DomainList9={DSDhakaCourseData[0].DomainList9}
              DomainList10={DSDhakaCourseData[0].DomainList10}
              Domainlink1={DSDhakaCourseData[0].Domainlink1}
              Domainlink2={DSDhakaCourseData[0].Domainlink2}
              Domainlink3={DSDhakaCourseData[0].Domainlink3}
              Domainlink4={DSDhakaCourseData[0].Domainlink4}
              Domainlink5={DSDhakaCourseData[0].Domainlink5}
              Domainlink6={DSDhakaCourseData[0].Domainlink6}
              CertificationBot1={DSDhakaCourseData[0].CertificationBot1}
              CertificationBot2={DSDhakaCourseData[0].CertificationBot2}
              CertificationBot3={DSDhakaCourseData[0].CertificationBot3}
              CertificationBot4={DSDhakaCourseData[0].CertificationBot4}
              CertificationBot5={DSDhakaCourseData[0].CertificationBot5}
              src={DSDhakaCourseData[0].src}
              src22={DSDhakaCourseData[0].src22}
              src33={DSDhakaCourseData[0].src33}
              ModuleBot1={DSDhakaCourseData[0].ModuleBot1}
              ModuleBot3={DSDhakaCourseData[0].ModuleBot3}
              ModuleBot10={DSDhakaCourseData[0].ModuleBot10}
              ModuleBot2={DSDhakaCourseData[0].ModuleBot2}
              Modulelist1={DSDhakaCourseData[0].Modulelist1}
              Modulelist2={DSDhakaCourseData[0].Modulelist2}
              Modulelist3={DSDhakaCourseData[0].Modulelist3}
              Modulelist4={DSDhakaCourseData[0].Modulelist4}
              Modulelist5={DSDhakaCourseData[0].Modulelist5}
              Modulelist6={DSDhakaCourseData[0].Modulelist6}
              Modulelist7={DSDhakaCourseData[0].Modulelist7}
              Modulelist8={DSDhakaCourseData[0].Modulelist8}
              syllabush1={DSDhakaCourseData[0].syllabush1}
              syllabusb1={DSDhakaCourseData[0].syllabusb1}
              SyllabusBotlist11={DSDhakaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSDhakaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSDhakaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSDhakaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSDhakaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSDhakaCourseData[0].SyllabusBotlist16}
              syllabush2={DSDhakaCourseData[0].syllabush2}
              syllabusb2={DSDhakaCourseData[0].syllabusb2}
              SyllabusBotlist21={DSDhakaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSDhakaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSDhakaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSDhakaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSDhakaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSDhakaCourseData[0].SyllabusBotlist26}
              syllabush3={DSDhakaCourseData[0].syllabush3}
              syllabusb3={DSDhakaCourseData[0].syllabusb3}
              SyllabusBotlist31={DSDhakaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSDhakaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSDhakaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSDhakaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSDhakaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSDhakaCourseData[0].SyllabusBotlist36}
              syllabush4={DSDhakaCourseData[0].syllabush4}
              syllabusb4={DSDhakaCourseData[0].syllabusb4}
              SyllabusBotlist41={DSDhakaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSDhakaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSDhakaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSDhakaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSDhakaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSDhakaCourseData[0].SyllabusBotlist46}
              syllabussrc={DSDhakaCourseData[0].syllabussrc}
              JobHead1={DSDhakaCourseData[0].JobHead1}
              JobBot1={DSDhakaCourseData[0].JobBot1}
              JobHead2={DSDhakaCourseData[0].JobHead2}
              JobBot3={DSDhakaCourseData[0].JobBot3}
              Joblist1={DSDhakaCourseData[0].Joblist1}
              Joblist2={DSDhakaCourseData[0].Joblist2}
              Joblist3={DSDhakaCourseData[0].Joblist3}
              Joblist4={DSDhakaCourseData[0].Joblist4}
              Joblist5={DSDhakaCourseData[0].Joblist5}
              Joblist6={DSDhakaCourseData[0].Joblist6}
              Joblist7={DSDhakaCourseData[0].Joblist7}
              Joblist8={DSDhakaCourseData[0].Joblist8}
              Joblist9={DSDhakaCourseData[0].Joblist9}
              Joblist10={DSDhakaCourseData[0].Joblist10}
              Joblist11={DSDhakaCourseData[0].Joblist11}
              Joblist12={DSDhakaCourseData[0].Joblist12}
              Joblist13={DSDhakaCourseData[0].Joblist13}
              JobBot19={DSDhakaCourseData[0].JobBot19}
              JobBot18={DSDhakaCourseData[0].JobBot18}
              JobBot20={DSDhakaCourseData[0].JobBot20}
              JobBot17={DSDhakaCourseData[0].JobBot17}
              JobBot39={DSDhakaCourseData[0].JobBot39}
              JobHead19={DSDhakaCourseData[0].JobHead19}
              JobHead20={DSDhakaCourseData[0].JobHead1}
              Joblist14={DSDhakaCourseData[0].Joblist14}
              Joblist15={DSDhakaCourseData[0].Joblist15}
              Joblist16={DSDhakaCourseData[0].Joblist16}
              Joblist17={DSDhakaCourseData[0].Joblist17}
              Joblist18={DSDhakaCourseData[0].Joblist1}
              JobHead21={DSDhakaCourseData[0].JobHead21}
              JobBot21={DSDhakaCourseData[0].JobBot21}
              JobBot22={DSDhakaCourseData[0].JobBot22}
              Joblist21={DSDhakaCourseData[0].Joblist21}
              Joblist22={DSDhakaCourseData[0].Joblist22}
              Joblist19={DSDhakaCourseData[0].Joblist19}
              Joblist20={DSDhakaCourseData[0].Joblist20}
              JobBot40={DSDhakaCourseData[0].JobBot40}
              // JobBot50 ={DSDhakaCourseData[0].JobBot50 }
              JobBot35={DSDhakaCourseData[0].JobBot35}
              MasterJobBot2={DSDhakaCourseData[0].MasterJobBot2}
              MasterJobBot1={DSDhakaCourseData[0].MasterJobBot1}
              MasterJobBot3={DSDhakaCourseData[0].MasterJobBot3}
              JobBot26={DSDhakaCourseData[0].JobBot26}
              JobBot27={DSDhakaCourseData[0].JobBot27}
              JobBot28={DSDhakaCourseData[0].JobBot28}
              JobHead10={DSDhakaCourseData[0].JobHead10}
              JobBot29={DSDhakaCourseData[0].JobBot29}
              JobBot31={DSDhakaCourseData[0].JobBot31}
              JobBot41={DSDhakaCourseData[0].JobBot41}
              JobSpan1={DSDhakaCourseData[0].JobSpan1}
              onlyDhaka={true}
              ListJob1={DSDhakaCourseData[0].ListJob1}
              ListJob2={DSDhakaCourseData[0].ListJob2}
              ListJob3={DSDhakaCourseData[0].ListJob3}
              ListJob4={DSDhakaCourseData[0].ListJob4}
              ListJob5={DSDhakaCourseData[0].ListJob5}
              ListJob6={DSDhakaCourseData[0].ListJob6}
              ListJob7={DSDhakaCourseData[0].ListJob7}
              ListJob8={DSDhakaCourseData[0].ListJob8}
              ListJob9={DSDhakaCourseData[0].ListJob9}
              ListJob10={DSDhakaCourseData[0].ListJob10}
              ListJobBot1={DSDhakaCourseData[0].ListJobBot1}
              modulelist={true}
              ModuleHead1={DSDhakaCourseData[0].ModuleHead1}
              joblist={true}
              showData={true}
              JobHead22={DSDhakaCourseData[0].JobHead22}
              JobHead23={DSDhakaCourseData[0].JobHead23}
              JobBot24={DSDhakaCourseData[0].JobBot24}
              Joblist23={DSDhakaCourseData[0].Joblist23}
              Joblist24={DSDhakaCourseData[0].Joblist24}
              Joblist25={DSDhakaCourseData[0].Joblist25}
              Joblist26={DSDhakaCourseData[0].Joblist26}
              Joblist27={DSDhakaCourseData[0].Joblist27}
              Joblist28={DSDhakaCourseData[0].Joblist28}
              Joblist29={DSDhakaCourseData[0].Joblist29}
              Joblist30={DSDhakaCourseData[0].Joblist30}
              JobBot25={DSDhakaCourseData[0].JobBot25}
              ProjectsHead1={DSDhakaCourseData[0].ProjectsHead1}
              ProjectsBot1={DSDhakaCourseData[0].ProjectsBot1}
              ProjectsBot2={DSDhakaCourseData[0].ProjectsBot2}
              ProjectsBot3={DSDhakaCourseData[0].ProjectsBot3}
              ProjectsBot4={DSDhakaCourseData[0].ProjectsBot4}
              ProjectsBot5={DSDhakaCourseData[0].ProjectsBot5}
              ProjectsBot6={DSDhakaCourseData[0].ProjectsBot6}
              ProjectsBot7={DSDhakaCourseData[0].ProjectsBot7}
              src1={DSDhakaCourseData[0].src1}
              ProjectsH1={DSDhakaCourseData[0].ProjectsH1}
              Projectsp1={DSDhakaCourseData[0].Projectsp1}
              src2={DSDhakaCourseData[0].src2}
              ProjectsH2={DSDhakaCourseData[0].ProjectsH2}
              Projectsp2={DSDhakaCourseData[0].Projectsp2}
              src3={DSDhakaCourseData[0].src3}
              ProjectsH3={DSDhakaCourseData[0].ProjectsH3}
              Projectsp3={DSDhakaCourseData[0].Projectsp3}
              src4={DSDhakaCourseData[0].src4}
              ProjectsH4={DSDhakaCourseData[0].ProjectsH4}
              Projectsp4={DSDhakaCourseData[0].Projectsp4}
              AlumniBot1={DSDhakaCourseData[0].AlumniBot1}
              Asrc1={DSDhakaCourseData[0].Asrc1}
              AlumniH1={DSDhakaCourseData[0].AlumniH1}
              Alumnip1={DSDhakaCourseData[0].Alumnip1}
              Asrc2={DSDhakaCourseData[0].Asrc2}
              AlumniH2={DSDhakaCourseData[0].AlumniH2}
              Alumnip2={DSDhakaCourseData[0].Alumnip2}
              Asrc3={DSDhakaCourseData[0].Asrc3}
              AlumniH3={DSDhakaCourseData[0].AlumniH3}
              Alumnip3={DSDhakaCourseData[0].Alumnip3}
              Asrc4={DSDhakaCourseData[0].Asrc4}
              AlumniH4={DSDhakaCourseData[0].AlumniH4}
              Alumnip4={DSDhakaCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSDhakaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={DSDhakaCourseData[0].CityTextB}
          CityText={DSDhakaCourseData[0].CityText}
          CityTextLB={DSDhakaCourseData[0].CityTextLB}
          CityTextL={DSDhakaCourseData[0].CityTextL}
        /> */}
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
