import Navbar from "@/components/Global/Navbar/Navbar";
import Realstory from "@/components/Home/Realstory/Realstory";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSBangladeshCourseData } from "../../../CityData/Bangladesh/datascienceCourseTrainingInBangladesh";
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
          Best Data Science Certification Course Online in Bangladesh
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Top online data science certification course in Bangladesh. Gain practical skills, hands-on experience, and industry recognition with Learnbay's program.          "
        />
        <meta
          name="keywords"
          content="Data Science Course in bangladesh, data scientist course in bangladesh, best data science courses in bangladesh, data science training in bangladesh, data science course, data science certificate, data science certification course, best data science certification          "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/bangladesh/data-science-course-training-in-bangladesh"
        />
        <meta
          property="og:title"
          content="Data Science Course in bangladesh | Data Science Training in bangladesh"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in bangladesh. Learnbay is Advanced Data Science Course Training Institute in bangladesh. Data science course in bangladesh will enhance your career"
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
          content="Data Science Course in Chennai | Data Science Training in Chennai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data science course in Chennai. Learnbay is Advanced Data Science Course Training Institute in Chennai. Data science course in Chennai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data science course in Chennai. Learnbay is Advanced Data Science Course Training Institute in Chennai. Data science course in Chennai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/bangladesh/data-science-course-training-in-bangladesh"
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
          content="https://www.learnbay.co/data-science-course-training-in-bangladesh"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in bangladesh"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/data-science-course-training-in-bangladesh"
        />
        <meta
          property="og:title"
          content="Data Science Course bangladesh | Data Scientist Course bangladesh | Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll for Data Science Course and Certification Training in bangladesh from Learnbay in association with IBM. This Data Scientist course in bangladesh will give you hands-on experience with technologies and job assistance.
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
          content=" Best Data Science Course Training in bangladesh - Learnbay"
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
          firstHeading="Best Online Data Science Course in Bangladesh          "
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont="Drive yourself towards multi-faceted career excellence with Learnbay’s industry-driven data science course in Bangladesh. Engage in Learnbay’s comprehensively curated GenAI-rich course syllabus to ace global job interviews. Our gainful alliance with IBM & Microsoft (MS) supports insightful upskilling with data-driven tools.           "
        />
        <SecondSection
          SecondSectionData={DSBangladeshCourseData[0].secondSection}
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
              cityTextBangla={true}
              ProgramBot1={DSBangladeshCourseData[0].ProgramBot1}
              ProgramHead3={DSBangladeshCourseData[0].ProgramHead3}
              ProgramBot3={DSBangladeshCourseData[0].ProgramBot3}
              ProgramBot31={DSBangladeshCourseData[0].ProgramBot31}
              ProgramBot4={DSBangladeshCourseData[0].ProgramBot4}
              ProgramBot5={DSBangladeshCourseData[0].ProgramBot5}
              ProgramBot6={DSBangladeshCourseData[0].ProgramBot6}
              Courselink1={DSBangladeshCourseData[0].Courselink1}
              Courselink2={DSBangladeshCourseData[0].Courselink2}
              Courselink3={DSBangladeshCourseData[0].Courselink3}
              Courselink4={DSBangladeshCourseData[0].Courselink4}
              Courselink5={DSBangladeshCourseData[0].Courselink5}
              Course1={DSBangladeshCourseData[0].Course1}
              Course2={DSBangladeshCourseData[0].Course2}
              Course3={DSBangladeshCourseData[0].Course3}
              Course4={DSBangladeshCourseData[0].Course4}
              Course5={DSBangladeshCourseData[0].Course5}
              DomainHead1={DSBangladeshCourseData[0].DomainHead1}
              DomainBot1={DSBangladeshCourseData[0].DomainBot1}
              DomainBot2={DSBangladeshCourseData[0].DomainBot2}
              DomainBot3={DSBangladeshCourseData[0].DomainBot3}
              DomainList1={DSBangladeshCourseData[0].DomainList1}
              DomainList2={DSBangladeshCourseData[0].DomainList2}
              DomainList3={DSBangladeshCourseData[0].DomainList3}
              DomainList4={DSBangladeshCourseData[0].DomainList4}
              DomainList5={DSBangladeshCourseData[0].DomainList5}
              DomainList6={DSBangladeshCourseData[0].DomainList6}
              DomainList7={DSBangladeshCourseData[0].DomainList7}
              DomainList8={DSBangladeshCourseData[0].DomainList8}
              DomainList9={DSBangladeshCourseData[0].DomainList9}
              DomainList10={DSBangladeshCourseData[0].DomainList10}
              Domainlink1={DSBangladeshCourseData[0].Domainlink1}
              Domainlink2={DSBangladeshCourseData[0].Domainlink2}
              Domainlink3={DSBangladeshCourseData[0].Domainlink3}
              Domainlink4={DSBangladeshCourseData[0].Domainlink4}
              Domainlink5={DSBangladeshCourseData[0].Domainlink5}
              Domainlink6={DSBangladeshCourseData[0].Domainlink6}
              CertificationBot1={DSBangladeshCourseData[0].CertificationBot1}
              CertificationBot2={DSBangladeshCourseData[0].CertificationBot2}
              CertificationBot3={DSBangladeshCourseData[0].CertificationBot3}
              CertificationBot4={DSBangladeshCourseData[0].CertificationBot4}
              CertificationBot5={DSBangladeshCourseData[0].CertificationBot5}
              src={DSBangladeshCourseData[0].src}
              src22={DSBangladeshCourseData[0].src22}
              src33={DSBangladeshCourseData[0].src33}
              ModuleBot1={DSBangladeshCourseData[0].ModuleBot1}
              ModuleBot3={DSBangladeshCourseData[0].ModuleBot3}
              ModuleBot10={DSBangladeshCourseData[0].ModuleBot10}
              ModuleBot2={DSBangladeshCourseData[0].ModuleBot2}
              Modulelist1={DSBangladeshCourseData[0].Modulelist1}
              Modulelist2={DSBangladeshCourseData[0].Modulelist2}
              Modulelist3={DSBangladeshCourseData[0].Modulelist3}
              Modulelist4={DSBangladeshCourseData[0].Modulelist4}
              Modulelist5={DSBangladeshCourseData[0].Modulelist5}
              Modulelist6={DSBangladeshCourseData[0].Modulelist6}
              Modulelist7={DSBangladeshCourseData[0].Modulelist7}
              Modulelist8={DSBangladeshCourseData[0].Modulelist8}
              syllabush1={DSBangladeshCourseData[0].syllabush1}
              syllabusb1={DSBangladeshCourseData[0].syllabusb1}
              SyllabusBotlist11={DSBangladeshCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSBangladeshCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSBangladeshCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSBangladeshCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSBangladeshCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSBangladeshCourseData[0].SyllabusBotlist16}
              syllabush2={DSBangladeshCourseData[0].syllabush2}
              syllabusb2={DSBangladeshCourseData[0].syllabusb2}
              SyllabusBotlist21={DSBangladeshCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSBangladeshCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSBangladeshCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSBangladeshCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSBangladeshCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSBangladeshCourseData[0].SyllabusBotlist26}
              syllabush3={DSBangladeshCourseData[0].syllabush3}
              syllabusb3={DSBangladeshCourseData[0].syllabusb3}
              SyllabusBotlist31={DSBangladeshCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSBangladeshCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSBangladeshCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSBangladeshCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSBangladeshCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSBangladeshCourseData[0].SyllabusBotlist36}
              syllabush4={DSBangladeshCourseData[0].syllabush4}
              syllabusb4={DSBangladeshCourseData[0].syllabusb4}
              SyllabusBotlist41={DSBangladeshCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSBangladeshCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSBangladeshCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSBangladeshCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSBangladeshCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSBangladeshCourseData[0].SyllabusBotlist46}
              syllabussrc={DSBangladeshCourseData[0].syllabussrc}
              JobHead1={DSBangladeshCourseData[0].JobHead1}
              JobBot1={DSBangladeshCourseData[0].JobBot1}
              JobHead2={DSBangladeshCourseData[0].JobHead2}
              JobBot3={DSBangladeshCourseData[0].JobBot3}
              Joblist1={DSBangladeshCourseData[0].Joblist1}
              Joblist2={DSBangladeshCourseData[0].Joblist2}
              Joblist3={DSBangladeshCourseData[0].Joblist3}
              Joblist4={DSBangladeshCourseData[0].Joblist4}
              Joblist5={DSBangladeshCourseData[0].Joblist5}
              Joblist6={DSBangladeshCourseData[0].Joblist6}
              Joblist7={DSBangladeshCourseData[0].Joblist7}
              Joblist8={DSBangladeshCourseData[0].Joblist8}
              Joblist9={DSBangladeshCourseData[0].Joblist9}
              Joblist10={DSBangladeshCourseData[0].Joblist10}
              Joblist11={DSBangladeshCourseData[0].Joblist11}
              Joblist12={DSBangladeshCourseData[0].Joblist12}
              Joblist13={DSBangladeshCourseData[0].Joblist13}
              JobBot19={DSBangladeshCourseData[0].JobBot19}
              JobBot18={DSBangladeshCourseData[0].JobBot18}
              JobBot20={DSBangladeshCourseData[0].JobBot20}
              JobBot17={DSBangladeshCourseData[0].JobBot17}
              JobBot39={DSBangladeshCourseData[0].JobBot39}
              JobHead19={DSBangladeshCourseData[0].JobHead19}
              JobHead20={DSBangladeshCourseData[0].JobHead1}
              Joblist14={DSBangladeshCourseData[0].Joblist14}
              Joblist15={DSBangladeshCourseData[0].Joblist15}
              Joblist16={DSBangladeshCourseData[0].Joblist16}
              Joblist17={DSBangladeshCourseData[0].Joblist17}
              Joblist18={DSBangladeshCourseData[0].Joblist1}
              JobHead21={DSBangladeshCourseData[0].JobHead21}
              JobBot21={DSBangladeshCourseData[0].JobBot21}
              JobBot22={DSBangladeshCourseData[0].JobBot22}
              Joblist21={DSBangladeshCourseData[0].Joblist21}
              Joblist22={DSBangladeshCourseData[0].Joblist22}
              Joblist19={DSBangladeshCourseData[0].Joblist19}
              Joblist20={DSBangladeshCourseData[0].Joblist20}
              JobBot40={DSBangladeshCourseData[0].JobBot40}
              JobBot41={DSBangladeshCourseData[0].JobBot41}
              JobSpan1={DSBangladeshCourseData[0].JobSpan1}
              modulelist={true}
              ModuleHead1={DSBangladeshCourseData[0].ModuleHead1}
              joblist={true}
              showData={true}
              JobHead22={DSBangladeshCourseData[0].JobHead22}
              JobHead23={DSBangladeshCourseData[0].JobHead23}
              JobBot24={DSBangladeshCourseData[0].JobBot24}
              Joblist23={DSBangladeshCourseData[0].Joblist23}
              Joblist24={DSBangladeshCourseData[0].Joblist24}
              Joblist25={DSBangladeshCourseData[0].Joblist25}
              Joblist26={DSBangladeshCourseData[0].Joblist26}
              Joblist27={DSBangladeshCourseData[0].Joblist27}
              Joblist28={DSBangladeshCourseData[0].Joblist28}
              Joblist29={DSBangladeshCourseData[0].Joblist29}
              Joblist30={DSBangladeshCourseData[0].Joblist30}
              JobBot25={DSBangladeshCourseData[0].JobBot25}
              ProjectsHead1={DSBangladeshCourseData[0].ProjectsHead1}
              ProjectsBot1={DSBangladeshCourseData[0].ProjectsBot1}
              ProjectsBot2={DSBangladeshCourseData[0].ProjectsBot2}
              ProjectsBot3={DSBangladeshCourseData[0].ProjectsBot3}
              ProjectsBot4={DSBangladeshCourseData[0].ProjectsBot4}
              ProjectsBot5={DSBangladeshCourseData[0].ProjectsBot5}
              ProjectsBot6={DSBangladeshCourseData[0].ProjectsBot6}
              ProjectsBot7={DSBangladeshCourseData[0].ProjectsBot7}
              src1={DSBangladeshCourseData[0].src1}
              ProjectsH1={DSBangladeshCourseData[0].ProjectsH1}
              Projectsp1={DSBangladeshCourseData[0].Projectsp1}
              src2={DSBangladeshCourseData[0].src2}
              ProjectsH2={DSBangladeshCourseData[0].ProjectsH2}
              Projectsp2={DSBangladeshCourseData[0].Projectsp2}
              src3={DSBangladeshCourseData[0].src3}
              ProjectsH3={DSBangladeshCourseData[0].ProjectsH3}
              Projectsp3={DSBangladeshCourseData[0].Projectsp3}
              src4={DSBangladeshCourseData[0].src4}
              ProjectsH4={DSBangladeshCourseData[0].ProjectsH4}
              Projectsp4={DSBangladeshCourseData[0].Projectsp4}
              AlumniBot1={DSBangladeshCourseData[0].AlumniBot1}
              Asrc1={DSBangladeshCourseData[0].Asrc1}
              AlumniH1={DSBangladeshCourseData[0].AlumniH1}
              Alumnip1={DSBangladeshCourseData[0].Alumnip1}
              Asrc2={DSBangladeshCourseData[0].Asrc2}
              AlumniH2={DSBangladeshCourseData[0].AlumniH2}
              Alumnip2={DSBangladeshCourseData[0].Alumnip2}
              Asrc3={DSBangladeshCourseData[0].Asrc3}
              AlumniH3={DSBangladeshCourseData[0].AlumniH3}
              Alumnip3={DSBangladeshCourseData[0].Alumnip3}
              Asrc4={DSBangladeshCourseData[0].Asrc4}
              AlumniH4={DSBangladeshCourseData[0].AlumniH4}
              Alumnip4={DSBangladeshCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSBangladeshCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={DSBangladeshCourseData[0].CityTextB}
          CityText={DSBangladeshCourseData[0].CityText}
          CityTextLB={DSBangladeshCourseData[0].CityTextLB}
          CityTextL={DSBangladeshCourseData[0].CityTextL}
        /> */}
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
