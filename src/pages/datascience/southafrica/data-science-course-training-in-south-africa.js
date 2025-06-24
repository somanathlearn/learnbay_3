import Navbar from "@/components/Global/Navbar/Navbar";
import Realstory from "@/components/Home/Realstory/Realstory";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSSouthAfricaCourseData } from "../../../CityData/Southafrica/datascienceCourseTrainingInSouthafrica";
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
          Best Data Science Certification Course Online in South Africa
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Master data science skills with the top online certification course in South Africa. Learnbay offers comprehensive training for aspiring data scientists. Enroll Now!          "
        />
        <meta
          name="keywords"
          content="data science course in south africa, data scientist courses in south africa, best data science courses in south africa, data science training in south africa, data science course, data science certificate, data science certification course, best data science certification          "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/southafrica/data-science-course-training-in-south-africa"
        />
        <meta
          property="og:title"
          content="Data Science Course in south-africa | Data Science Training in south-africa"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in south-africa. Learnbay is Advanced Data Science Course Training Institute in south-africa. Data science course in south-africa will enhance your career"
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
          content="Data Science Course in south-africa | Data Science Training in south-africa"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data science course in south-africa. Learnbay is Advanced Data Science Course Training Institute in south-africa. Data science course in south-africa will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data science course in south-africa. Learnbay is Advanced Data Science Course Training Institute in south-africa. Data science course in south-africa will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/southafrica/data-science-course-training-in-south-africa"
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
          content="https://www.learnbay.co/datascience/southafrica/data-science-course-training-in-south-africa"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in south-africa"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/southafrica/data-science-course-training-in-south-africa"
        />
        <meta
          property="og:title"
          content="Data Science Course south-africa | Data Scientist Course south-africa | Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll for Data Science Course and Certification Training in south-africa from Learnbay in association with IBM. This Data Scientist course in south-africa will give you hands-on experience with technologies and job assistance.
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
          content=" Best Data Science Course Training in south-africa - Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content=" data science course in south africa, data scientist courses in south africa, best data science courses in south africa, data science training in south africa, data science course, data science certificate, data science certification course, best data science certification          "
        />
        <meta
          name="twitter:description"
          content="Enroll for Data Science Course and Certification Training in Southafrica from Learnbay in association with IBM. This Data Scientist course in Southafrica will give you hands-on experience with technologies and job assistance.
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
          firstHeading="Best Online Data Science Course in South Africa          "
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont="Master data-driven abilities to achieve professional success with Learnbay's data science course in South Africa. Train up with our leading-edge course syllabus to confront Data-AI dominance and tackle it. Our industry alliance with IBM & Microsoft (MS) helps you upgrade and validate data literacy.           "
        />
        <SecondSection
          SecondSectionData={DSSouthAfricaCourseData[0].secondSection}
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
              cityTextDSSAfrica={true}
              ProgramBot1={DSSouthAfricaCourseData[0].ProgramBot1}
              ProgramHead3={DSSouthAfricaCourseData[0].ProgramHead3}
              ProgramBot3={DSSouthAfricaCourseData[0].ProgramBot3}
              ProgramBot31={DSSouthAfricaCourseData[0].ProgramBot31}
              ProgramBot4={DSSouthAfricaCourseData[0].ProgramBot4}
              ProgramBot5={DSSouthAfricaCourseData[0].ProgramBot5}
              ProgramBot6={DSSouthAfricaCourseData[0].ProgramBot6}
              Courselink1={DSSouthAfricaCourseData[0].Courselink1}
              Courselink2={DSSouthAfricaCourseData[0].Courselink2}
              Courselink3={DSSouthAfricaCourseData[0].Courselink3}
              Courselink4={DSSouthAfricaCourseData[0].Courselink4}
              Courselink5={DSSouthAfricaCourseData[0].Courselink5}
              Course1={DSSouthAfricaCourseData[0].Course1}
              Course2={DSSouthAfricaCourseData[0].Course2}
              Course3={DSSouthAfricaCourseData[0].Course3}
              Course4={DSSouthAfricaCourseData[0].Course4}
              Course5={DSSouthAfricaCourseData[0].Course5}
              DomainHead1={DSSouthAfricaCourseData[0].DomainHead1}
              DomainBot1={DSSouthAfricaCourseData[0].DomainBot1}
              DomainBot2={DSSouthAfricaCourseData[0].DomainBot2}
              DomainBot3={DSSouthAfricaCourseData[0].DomainBot3}
              DomainList1={DSSouthAfricaCourseData[0].DomainList1}
              DomainList2={DSSouthAfricaCourseData[0].DomainList2}
              DomainList3={DSSouthAfricaCourseData[0].DomainList3}
              DomainList4={DSSouthAfricaCourseData[0].DomainList4}
              DomainList5={DSSouthAfricaCourseData[0].DomainList5}
              DomainList6={DSSouthAfricaCourseData[0].DomainList6}
              DomainList7={DSSouthAfricaCourseData[0].DomainList7}
              DomainList8={DSSouthAfricaCourseData[0].DomainList8}
              DomainList9={DSSouthAfricaCourseData[0].DomainList9}
              DomainList10={DSSouthAfricaCourseData[0].DomainList10}
              Domainlink1={DSSouthAfricaCourseData[0].Domainlink1}
              Domainlink2={DSSouthAfricaCourseData[0].Domainlink2}
              Domainlink3={DSSouthAfricaCourseData[0].Domainlink3}
              Domainlink4={DSSouthAfricaCourseData[0].Domainlink4}
              Domainlink5={DSSouthAfricaCourseData[0].Domainlink5}
              Domainlink6={DSSouthAfricaCourseData[0].Domainlink6}
              CertificationBot1={DSSouthAfricaCourseData[0].CertificationBot1}
              CertificationBot2={DSSouthAfricaCourseData[0].CertificationBot2}
              CertificationBot3={DSSouthAfricaCourseData[0].CertificationBot3}
              CertificationBot4={DSSouthAfricaCourseData[0].CertificationBot4}
              CertificationBot5={DSSouthAfricaCourseData[0].CertificationBot5}
              src={DSSouthAfricaCourseData[0].src}
              src22={DSSouthAfricaCourseData[0].src22}
              src33={DSSouthAfricaCourseData[0].src33}
              ModuleBot1={DSSouthAfricaCourseData[0].ModuleBot1}
              ModuleBot3={DSSouthAfricaCourseData[0].ModuleBot3}
              ModuleBot2={DSSouthAfricaCourseData[0].ModuleBot2}
              Modulelist1={DSSouthAfricaCourseData[0].Modulelist1}
              Modulelist2={DSSouthAfricaCourseData[0].Modulelist2}
              Modulelist3={DSSouthAfricaCourseData[0].Modulelist3}
              Modulelist4={DSSouthAfricaCourseData[0].Modulelist4}
              Modulelist5={DSSouthAfricaCourseData[0].Modulelist5}
              Modulelist6={DSSouthAfricaCourseData[0].Modulelist6}
              Modulelist7={DSSouthAfricaCourseData[0].Modulelist7}
              Modulelist8={DSSouthAfricaCourseData[0].Modulelist8}
              ModuleHead1={DSSouthAfricaCourseData[0].ModuleHead1}
              syllabush1={DSSouthAfricaCourseData[0].syllabush1}
              syllabusb1={DSSouthAfricaCourseData[0].syllabusb1}
              SyllabusBotlist11={DSSouthAfricaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSSouthAfricaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSSouthAfricaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSSouthAfricaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSSouthAfricaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSSouthAfricaCourseData[0].SyllabusBotlist16}
              syllabush2={DSSouthAfricaCourseData[0].syllabush2}
              syllabusb2={DSSouthAfricaCourseData[0].syllabusb2}
              SyllabusBotlist21={DSSouthAfricaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSSouthAfricaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSSouthAfricaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSSouthAfricaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSSouthAfricaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSSouthAfricaCourseData[0].SyllabusBotlist26}
              syllabush3={DSSouthAfricaCourseData[0].syllabush3}
              syllabusb3={DSSouthAfricaCourseData[0].syllabusb3}
              SyllabusBotlist31={DSSouthAfricaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSSouthAfricaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSSouthAfricaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSSouthAfricaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSSouthAfricaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSSouthAfricaCourseData[0].SyllabusBotlist36}
              syllabush4={DSSouthAfricaCourseData[0].syllabush4}
              syllabusb4={DSSouthAfricaCourseData[0].syllabusb4}
              SyllabusBotlist41={DSSouthAfricaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSSouthAfricaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSSouthAfricaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSSouthAfricaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSSouthAfricaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSSouthAfricaCourseData[0].SyllabusBotlist46}
              syllabussrc={DSSouthAfricaCourseData[0].syllabussrc}
              JobHead1={DSSouthAfricaCourseData[0].JobHead1}
              JobBot1={DSSouthAfricaCourseData[0].JobBot1}
              JobHead2={DSSouthAfricaCourseData[0].JobHead2}
              JobBot3={DSSouthAfricaCourseData[0].JobBot3}
              Joblist1={DSSouthAfricaCourseData[0].Joblist1}
              Joblist2={DSSouthAfricaCourseData[0].Joblist2}
              Joblist3={DSSouthAfricaCourseData[0].Joblist3}
              Joblist4={DSSouthAfricaCourseData[0].Joblist4}
              Joblist5={DSSouthAfricaCourseData[0].Joblist5}
              Joblist6={DSSouthAfricaCourseData[0].Joblist6}
              Joblist7={DSSouthAfricaCourseData[0].Joblist7}
              Joblist8={DSSouthAfricaCourseData[0].Joblist8}
              Joblist9={DSSouthAfricaCourseData[0].Joblist9}
              Joblist10={DSSouthAfricaCourseData[0].Joblist10}
              Joblist11={DSSouthAfricaCourseData[0].Joblist11}
              Joblist12={DSSouthAfricaCourseData[0].Joblist12}
              Joblist13={DSSouthAfricaCourseData[0].Joblist13}
              JobBot19={DSSouthAfricaCourseData[0].JobBot19}
              JobHead19={DSSouthAfricaCourseData[0].JobHead19}
              JobHead20={DSSouthAfricaCourseData[0].JobHead1}
              Joblist14={DSSouthAfricaCourseData[0].Joblist14}
              Joblist15={DSSouthAfricaCourseData[0].Joblist15}
              Joblist16={DSSouthAfricaCourseData[0].Joblist16}
              Joblist17={DSSouthAfricaCourseData[0].Joblist17}
              Joblist18={DSSouthAfricaCourseData[0].Joblist18}
              Joblist19={DSSouthAfricaCourseData[0].Joblist19}
              Joblist20={DSSouthAfricaCourseData[0].Joblist20}
              Joblist21={DSSouthAfricaCourseData[0].Joblist21}
              Joblist22={DSSouthAfricaCourseData[0].Joblist22}
              JobHead21={DSSouthAfricaCourseData[0].JobHead21}
              JobBot21={DSSouthAfricaCourseData[0].JobBot21}
              JobBot22={DSSouthAfricaCourseData[0].JobBot22}
              JobBot30={DSSouthAfricaCourseData[0].JobBot30}
              Jobspan={DSSouthAfricaCourseData[0].Jobspan}
              modulelist={true}
              joblist={true}
              showData={true}
              JobBot20={DSSouthAfricaCourseData[0].JobBot20}
              JobHead22={DSSouthAfricaCourseData[0].JobHead22}
              JobHead23={DSSouthAfricaCourseData[0].JobHead23}
              JobBot24={DSSouthAfricaCourseData[0].JobBot24}
              Joblist23={DSSouthAfricaCourseData[0].Joblist23}
              Joblist24={DSSouthAfricaCourseData[0].Joblist24}
              Joblist25={DSSouthAfricaCourseData[0].Joblist25}
              Joblist26={DSSouthAfricaCourseData[0].Joblist26}
              Joblist27={DSSouthAfricaCourseData[0].Joblist27}
              Joblist28={DSSouthAfricaCourseData[0].Joblist28}
              Joblist29={DSSouthAfricaCourseData[0].Joblist29}
              Joblist30={DSSouthAfricaCourseData[0].Joblist30}
              JobBot25={DSSouthAfricaCourseData[0].JobBot25}
              ProjectsHead1={DSSouthAfricaCourseData[0].ProjectsHead1}
              ProjectsBot1={DSSouthAfricaCourseData[0].ProjectsBot1}
              ProjectsBot2={DSSouthAfricaCourseData[0].ProjectsBot2}
              ProjectsBot3={DSSouthAfricaCourseData[0].ProjectsBot3}
              ProjectsBot4={DSSouthAfricaCourseData[0].ProjectsBot4}
              ProjectsBot5={DSSouthAfricaCourseData[0].ProjectsBot5}
              ProjectsBot6={DSSouthAfricaCourseData[0].ProjectsBot6}
              ProjectsBot7={DSSouthAfricaCourseData[0].ProjectsBot7}
              src1={DSSouthAfricaCourseData[0].src1}
              ProjectsH1={DSSouthAfricaCourseData[0].ProjectsH1}
              Projectsp1={DSSouthAfricaCourseData[0].Projectsp1}
              src2={DSSouthAfricaCourseData[0].src2}
              ProjectsH2={DSSouthAfricaCourseData[0].ProjectsH2}
              Projectsp2={DSSouthAfricaCourseData[0].Projectsp2}
              src3={DSSouthAfricaCourseData[0].src3}
              ProjectsH3={DSSouthAfricaCourseData[0].ProjectsH3}
              Projectsp3={DSSouthAfricaCourseData[0].Projectsp3}
              src4={DSSouthAfricaCourseData[0].src4}
              ProjectsH4={DSSouthAfricaCourseData[0].ProjectsH4}
              Projectsp4={DSSouthAfricaCourseData[0].Projectsp4}
              AlumniBot1={DSSouthAfricaCourseData[0].AlumniBot1}
              Asrc1={DSSouthAfricaCourseData[0].Asrc1}
              AlumniH1={DSSouthAfricaCourseData[0].AlumniH1}
              Alumnip1={DSSouthAfricaCourseData[0].Alumnip1}
              Asrc2={DSSouthAfricaCourseData[0].Asrc2}
              AlumniH2={DSSouthAfricaCourseData[0].AlumniH2}
              Alumnip2={DSSouthAfricaCourseData[0].Alumnip2}
              Asrc3={DSSouthAfricaCourseData[0].Asrc3}
              AlumniH3={DSSouthAfricaCourseData[0].AlumniH3}
              Alumnip3={DSSouthAfricaCourseData[0].Alumnip3}
              Asrc4={DSSouthAfricaCourseData[0].Asrc4}
              AlumniH4={DSSouthAfricaCourseData[0].AlumniH4}
              Alumnip4={DSSouthAfricaCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSSouthAfricaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={DSSouthAfricaCourseData[0].CityTextB}
          CityText={DSSouthAfricaCourseData[0].CityText}
          CityTextLB={DSSouthAfricaCourseData[0].CityTextLB}
          CityTextL={DSSouthAfricaCourseData[0].CityTextL}
        /> */}
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
