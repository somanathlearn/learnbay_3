import { DSBangaloreSchema } from "@/Data/Schema/DSBangalore";
import Realstory from "@/components/Home/Realstory/Realstory";
import Map from "@/components/Seo/Maps/Maps";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSinodreCourseData } from "../../../CityData/Indore/DSindoreData";
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

  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Advanced-Data-Sciences.pdf";

  const items = [
    "Data Science Foundation",
    "Python for Data Science",
    "Statistics for Data Science",
    "Maths for Data Science",
    "Machine Learning",
    "Data Preparation with Pandas",
    "Data Visualisation with Python",
    "Tableau Foundations for Data analysis",
    "Big Data Foundation",
    "Model deployment (Flask-API)",
    "R Language Essentials",
    "Deep Learning",
    "SQL for Data Science",
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Data Science Certification Course in Indore</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content=" Enroll in the best Data Science training in Indore! Gain hands-on experience with live projects. Earn internationally recognized IBM & Microsoft Certificates.          "
        />
        <meta
          name="keywords"
          content="data science course in indore, data science training in indore, data science coaching in indore, data science institute in indore, data science course fees in indore, data science course with placement in indore, data science classes in indore"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/india/data-science-course-training-in-indore"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/india/data-science-course-training-in-indore"
        />
        <meta
          property="og:title"
          content="Data Science Course in Indore | Data Scientist Training In Indore - Learnbay"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Best Data Science Courses in Indore. Learnbay is the Best Data Scientist Certification Course Training Institute in Indore with 100% Placement assistance and offers an advanced data scientist training in Indore"
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
          content="Data Science Course in Indore | Data Scientist Training In Indore - Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Best Data Science Courses in Indore. Learnbay is the Best Data Scientist Certification Course Training Institute in Indore with 100% Placement assistance and offers an advanced data scientist training in Indore."
        />
        <meta
          name="twitter:description"
          content="Best Data Science Courses in Indore. Learnbay is the Best Data Scientist Certification Course Training Institute in Indore with 100% Placement assistance and offers an advanced data scientist training in bhubaneswar."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(DSBangaloreSchema),
          }}
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
          firstHeading="Data Science Course in Indore          "
          firstTopPara="Foundational and Advance Job-ready Program"
          cityParaCont="Gain global-scale excellence via Learnbay's broadly designed data science course in Indore. Enroll today to equip yourself with proven data-driven skills via real-time learning. Also, receive global certifications from IBM & Microsoft to accelerate your career growth prospects in today's tech age.          "
        />
        <SecondSection
          SecondSectionData={DSinodreCourseData[0].secondSection}
        />
        <div className={styles.Realstorysec}>
          <Realstory />
        </div>
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹1,35,000"
            FeeEmi="₹8,850/month"
           weekdaybatch="Weekend Batch"
        weekendbatch="Weekday Batch"
        weekday="SAT - SUN"
        weekend="MON - THU"
        WeekdayDate="19th Jan"
        WeekendDate="3rd Jan"
        WeekendTime="8:00 PM - 10:30 PM"
        WeekdayTime="9:30 AM - 1 PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            dataScience={true}
            titleCourse="Advanced Data Science and AI Program with domain specialization"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+%26+AI+Master+Certification+Program.pdf"
            brochurePdf={pdfUrl}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,35,000"
            monthlyPayment1="₹8,850"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,35,000"
            monthlyPayment2="₹13,275"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              DSIndore={true}
              DomainHead1={DSinodreCourseData[0].DomainHead1}
              DomainBot1={DSinodreCourseData[0].DomainBot1}
              DomainBot2={DSinodreCourseData[0].DomainBot2}
              DomainBot3={DSinodreCourseData[0].DomainBot3}
              DomainList1={DSinodreCourseData[0].DomainList1}
              DomainList2={DSinodreCourseData[0].DomainList2}
              DomainList3={DSinodreCourseData[0].DomainList3}
              DomainList4={DSinodreCourseData[0].DomainList4}
              DomainList5={DSinodreCourseData[0].DomainList5}
              DomainList6={DSinodreCourseData[0].DomainList6}
              DomainList7={DSinodreCourseData[0].DomainList7}
              DomainList8={DSinodreCourseData[0].DomainList8}
              DomainList9={DSinodreCourseData[0].DomainList9}
              DomainList10={DSinodreCourseData[0].DomainList10}
              Domainlink1={DSinodreCourseData[0].Domainlink1}
              Domainlink2={DSinodreCourseData[0].Domainlink2}
              Domainlink3={DSinodreCourseData[0].Domainlink3}
              Domainlink4={DSinodreCourseData[0].Domainlink4}
              Domainlink5={DSinodreCourseData[0].Domainlink5}
              Domainlink6={DSinodreCourseData[0].Domainlink6}
              Domainlink7={DSinodreCourseData[0].Domainlink7}
              Domainlink8={DSinodreCourseData[0].Domainlink8}
              Domainlink9={DSinodreCourseData[0].Domainlink9}
              Domainlink10={DSinodreCourseData[0].Domainlink10}
              DomainBot40={DSinodreCourseData[0].DomainBot40}
              CertificationHead1={DSinodreCourseData[0].CertificationHead1}
              CertificationBot1={DSinodreCourseData[0].CertificationBot1}
              CertificationBot2={DSinodreCourseData[0].CertificationBot2}
              CertificationBot3={DSinodreCourseData[0].CertificationBot3}
              CertificationBot4={DSinodreCourseData[0].CertificationBot4}
              CertificationBot5={DSinodreCourseData[0].CertificationBot5}
              src={DSinodreCourseData[0].src}
              src22={DSinodreCourseData[0].src22}
              src33={DSinodreCourseData[0].src33}
              MasterModulelist={true}
              ModuleMasterBot1={DSinodreCourseData[0].ModuleMasterBot1}
              ModuleHead1={DSinodreCourseData[0].ModuleHead1}
              ModuleBot1={DSinodreCourseData[0].ModuleBot1}
              ModuleBot2={DSinodreCourseData[0].ModuleBot2}
              ModuleMasterlist1={DSinodreCourseData[0].ModuleMasterlist1}
              ModuleMasterlist2={DSinodreCourseData[0].ModuleMasterlist2}
              ModuleMasterlist3={DSinodreCourseData[0].ModuleMasterlist3}
              ModuleMasterlist4={DSinodreCourseData[0].ModuleMasterlist4}
              ModuleMasterlist5={DSinodreCourseData[0].ModuleMasterlist5}
              ModuleMasterlist6={DSinodreCourseData[0].ModuleMasterlist6}
              ModuleMasterlist7={DSinodreCourseData[0].ModuleMasterlist7}
              ModuleMasterlist8={DSinodreCourseData[0].ModuleMasterlist8}
              ModuleMasterlist9={DSinodreCourseData[0].ModuleMasterlist9}
              ModuleMasterlist10={DSinodreCourseData[0].ModuleMasterlist10}
              ModuleMasterBot3={DSinodreCourseData[0].ModuleMasterBot3}
              ModuleMasterBot2={DSinodreCourseData[0].ModuleMasterBot2}
              ModuleBot46={DSinodreCourseData[0].ModuleBot46}
              ModuleBot47={DSinodreCourseData[0].ModuleBot47}
              syllabush1={DSinodreCourseData[0].syllabush1}
              syllabusb1={DSinodreCourseData[0].syllabusb1}
              SyllabusBotlist11={DSinodreCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSinodreCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSinodreCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSinodreCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSinodreCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSinodreCourseData[0].SyllabusBotlist16}
              syllabush2={DSinodreCourseData[0].syllabush2}
              syllabusb2={DSinodreCourseData[0].syllabusb2}
              SyllabusBotlist21={DSinodreCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSinodreCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSinodreCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSinodreCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSinodreCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSinodreCourseData[0].SyllabusBotlist26}
              syllabush3={DSinodreCourseData[0].syllabush3}
              syllabusb3={DSinodreCourseData[0].syllabusb3}
              SyllabusBotlist31={DSinodreCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSinodreCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSinodreCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSinodreCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSinodreCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSinodreCourseData[0].SyllabusBotlist36}
              syllabush4={DSinodreCourseData[0].syllabush4}
              syllabusb4={DSinodreCourseData[0].syllabusb4}
              SyllabusBotlist41={DSinodreCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSinodreCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSinodreCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSinodreCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSinodreCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSinodreCourseData[0].SyllabusBotlist46}
              syllabussrc={DSinodreCourseData[0].syllabussrc}
              joblist={true}
              JobHead1={DSinodreCourseData[0].JobHead1}
              MasterJobBot1={DSinodreCourseData[0].MasterJobBot1}
              Joblist1={DSinodreCourseData[0].Joblist1}
              Joblist2={DSinodreCourseData[0].Joblist2}
              Joblist3={DSinodreCourseData[0].Joblist3}
              Joblist4={DSinodreCourseData[0].Joblist4}
              Joblist5={DSinodreCourseData[0].Joblist5}
              Joblist6={DSinodreCourseData[0].Joblist6}
              Joblist7={DSinodreCourseData[0].Joblist7}
              Joblist8={DSinodreCourseData[0].Joblist8}
              Joblist9={DSinodreCourseData[0].Joblist9}
              Joblist10={DSinodreCourseData[0].Joblist10}
              Joblist11={DSinodreCourseData[0].Joblist11}
              Joblist12={DSinodreCourseData[0].Joblist12}
              Joblist13={DSinodreCourseData[0].Joblist13}
              JobBot001={DSinodreCourseData[0].JobBot001}
              JobBot002={DSinodreCourseData[0].JobBot002}
              JobBot1={DSinodreCourseData[0].JobBot1}
              JobHeadbhubaneswar01={DSinodreCourseData[0].JobHeadbhubaneswar01}
              JobHead001={DSinodreCourseData[0].JobHead001}
              JobHead2={DSinodreCourseData[0].JobHead2}
              JobBot3={DSinodreCourseData[0].JobBot3}
              JobHead3={DSinodreCourseData[0].JobHead3}
              JobBot7={DSinodreCourseData[0].JobBot7}
              JobHead4={DSinodreCourseData[0].JobHead4}
              JobBot8={DSinodreCourseData[0].JobBot8}
              JobHead19={DSinodreCourseData[0].JobHead19}
              JobBot9={DSinodreCourseData[0].JobBot9}
              JobHead6={DSinodreCourseData[0].JobHead6}
              JobBot11={DSinodreCourseData[0].JobBot11}
              JobBot20={DSinodreCourseData[0].JobBot20}
              JobBot003={DSinodreCourseData[0].JobBot003}
              JobBot34={DSinodreCourseData[0].JobBot34}
              JobBot24={DSinodreCourseData[0].JobBot24}
              JobBotMasterBot5={DSinodreCourseData[0].JobBotMasterBot5}
              JobBot007={DSinodreCourseData[0].JobBot007}
              JobBot005={DSinodreCourseData[0].JobBot005}
              JobHead22={DSinodreCourseData[0].JobHead22}
              Joblist23={DSinodreCourseData[0].Joblist23}
              Joblist24={DSinodreCourseData[0].Joblist24}
              Joblist25={DSinodreCourseData[0].Joblist25}
              Joblist26={DSinodreCourseData[0].Joblist26}
              Joblist27={DSinodreCourseData[0].Joblist27}
              Joblist28={DSinodreCourseData[0].Joblist28}
              Joblist29={DSinodreCourseData[0].Joblist29}
              Joblist30={DSinodreCourseData[0].Joblist30}
              JobBot25={DSinodreCourseData[0].JobBot25}
              showData={true}
              JobBot39={DSinodreCourseData[0].JobBot39}
              Joblist14={DSinodreCourseData[0].Joblist14}
              Joblist15={DSinodreCourseData[0].Joblist15}
              Joblist16={DSinodreCourseData[0].Joblist16}
              Joblist17={DSinodreCourseData[0].Joblist17}
              JobBot21={DSinodreCourseData[0].JobBot21}
              JobBot22={DSinodreCourseData[0].JobBot22}
              ProjectsHead1={DSinodreCourseData[0].ProjectsHead1}
              ProjectsBot1={DSinodreCourseData[0].ProjectsBot1}
              ProjectsBot3={DSinodreCourseData[0].ProjectsBot3}
              ProjectsBot4={DSinodreCourseData[0].ProjectsBot4}
              ProjectsBot5={DSinodreCourseData[0].ProjectsBot5}
              src1={DSinodreCourseData[0].src1}
              ProjectsH1={DSinodreCourseData[0].ProjectsH1}
              Projectsp1={DSinodreCourseData[0].Projectsp1}
              src2={DSinodreCourseData[0].src2}
              ProjectsH2={DSinodreCourseData[0].ProjectsH2}
              Projectsp2={DSinodreCourseData[0].Projectsp2}
              src3={DSinodreCourseData[0].src3}
              ProjectsH3={DSinodreCourseData[0].ProjectsH3}
              Projectsp3={DSinodreCourseData[0].Projectsp3}
              src4={DSinodreCourseData[0].src4}
              ProjectsH4={DSinodreCourseData[0].ProjectsH4}
              Projectsp4={DSinodreCourseData[0].Projectsp4}
              AlumniBot1={DSinodreCourseData[0].AlumniBot1}
              Asrc1={DSinodreCourseData[0].Asrc1}
              AlumniH1={DSinodreCourseData[0].AlumniH1}
              Alumnip1={DSinodreCourseData[0].Alumnip1}
              Asrc2={DSinodreCourseData[0].Asrc2}
              AlumniH2={DSinodreCourseData[0].AlumniH2}
              Alumnip2={DSinodreCourseData[0].Alumnip2}
              Asrc3={DSinodreCourseData[0].Asrc3}
              AlumniH3={DSinodreCourseData[0].AlumniH3}
              Alumnip3={DSinodreCourseData[0].Alumnip3}
              Asrc4={DSinodreCourseData[0].Asrc4}
              AlumniH4={DSinodreCourseData[0].AlumniH4}
              Alumnip4={DSinodreCourseData[0].Alumnip4}
              alt1={DSinodreCourseData[0].alt1}
              alt2={DSinodreCourseData[0].alt2}
              alt3={DSinodreCourseData[0].alt3}
              alt4={DSinodreCourseData[0].alt4}
              alt5={DSinodreCourseData[0].alt5}
              alt6={DSinodreCourseData[0].alt6}
              alt7={DSinodreCourseData[0].alt7}
              alt8={DSinodreCourseData[0].alt8}
              alt9={DSinodreCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSinodreCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <Map />
        <CityText CityText={true} />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
