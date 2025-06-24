import Navbar from "@/components/Global/Navbar/Navbar";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSUSACourseData } from "../../../CityData/Usa/datascienceCourseTrainingInUsa";
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Advanced-Data-Sciences.pdf"
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Online Data Science Course Program in USA - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Explore the best online data science course program in USA with Learnbay. Get certified and advance your career with expert-led training. Enroll now!          "
        />
        <meta
          name="keywords"
          content="Data Science Course in USA, data scientist course in usa, best data science courses in usa, data science training in usa, data science course, data science certificate, data science certification course, best data science certification          "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/usa/data-science-course-training-in-usa"
        />
        <meta
          property="og:title"
          content="Data Science Course in usa | Data Science Training in usa"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in usa. Learnbay is Advanced Data Science Course Training Institute in usa. Data science course in usa will enhance your career"
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
          content="Data Science Course in USA | Data Science Training in USA"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data science course in USA. Learnbay is Advanced Data Science Course Training Institute in USA. Data science course in USA will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data science course in USA. Learnbay is Advanced Data Science Course Training Institute in USA. Data science course in USA will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/usa/data-science-course-training-in-usa"
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
          content="https://www.learnbay.co/data-science-course-training-in-usa"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in usa"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/data-science-course-training-in-usa"
        />
        <meta
          property="og:title"
          content="Data Science Course usa | Data Scientist Course usa | Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll for Data Science Course and Certification Training in usa from Learnbay in association with IBM. This Data Scientist course in usa will give you hands-on experience with technologies and job assistance.
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
          content="Data Science Course usa | Data Scientist Course usa | Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Enroll for Data Science Course and Certification Training in usa from Learnbay in association with IBM. This Data Scientist course in usa will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          name="twitter:description"
          content="Enroll for Data Science Course and Certification Training in usa from Learnbay in association with IBM. This Data Scientist course in usa will give you hands-on experience with technologies and job assistance.
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
          firstHeading="Best Data Science Courses in USA          "
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont="Escalate your data science career with our premium training programs in the USA. Our comprehensively engineered courses will help you acquire marketable data science skills with validation from IBM & Microsoft. Get ready to equip yourself with job-oriented expertise via an AI and Data Science course in USA.           "
        />
        <SecondSection SecondSectionData={DSUSACourseData[0].secondSection} />
        {/* <Testimonial
          redirectDS={true}
          Testimonial={DSUSACourseData[0].testimonial}
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
              cityTextDSUSA={true}
              ProgramBot1={DSUSACourseData[0].ProgramBot1}
              ProgramHead3={DSUSACourseData[0].ProgramHead3}
              ProgramBot3={DSUSACourseData[0].ProgramBot3}
              ProgramBot31={DSUSACourseData[0].ProgramBot31}
              ProgramBot4={DSUSACourseData[0].ProgramBot4}
              ProgramBot5={DSUSACourseData[0].ProgramBot5}
              ProgramBot6={DSUSACourseData[0].ProgramBot6}
              Courselink1={DSUSACourseData[0].Courselink1}
              Courselink2={DSUSACourseData[0].Courselink2}
              Courselink3={DSUSACourseData[0].Courselink3}
              Courselink4={DSUSACourseData[0].Courselink4}
              Courselink5={DSUSACourseData[0].Courselink5}
              Course1={DSUSACourseData[0].Course1}
              Course2={DSUSACourseData[0].Course2}
              Course3={DSUSACourseData[0].Course3}
              Course4={DSUSACourseData[0].Course4}
              Course5={DSUSACourseData[0].Course5}
              DomainHead1={DSUSACourseData[0].DomainHead1}
              DomainBot1={DSUSACourseData[0].DomainBot1}
              DomainBot2={DSUSACourseData[0].DomainBot2}
              DomainBot3={DSUSACourseData[0].DomainBot3}
              DomainList1={DSUSACourseData[0].DomainList1}
              DomainList2={DSUSACourseData[0].DomainList2}
              DomainList3={DSUSACourseData[0].DomainList3}
              DomainList4={DSUSACourseData[0].DomainList4}
              DomainList5={DSUSACourseData[0].DomainList5}
              DomainList6={DSUSACourseData[0].DomainList6}
              Domainlink1={DSUSACourseData[0].Domainlink1}
              Domainlink2={DSUSACourseData[0].Domainlink2}
              Domainlink3={DSUSACourseData[0].Domainlink3}
              Domainlink4={DSUSACourseData[0].Domainlink4}
              Domainlink5={DSUSACourseData[0].Domainlink5}
              Domainlink6={DSUSACourseData[0].Domainlink6}
              Domainlink7={DSUSACourseData[0].Domainlink1}
              Domainlink8={DSUSACourseData[0].Domainlink1}
              Domainlink9={DSUSACourseData[0].Domainlink1}
              Domainlink10={DSUSACourseData[0].Domainlink1}
              CertificationBot1={DSUSACourseData[0].CertificationBot1}
              CertificationBot2={DSUSACourseData[0].CertificationBot2}
              CertificationBot3={DSUSACourseData[0].CertificationBot3}
              CertificationBot4={DSUSACourseData[0].CertificationBot4}
              src={DSUSACourseData[0].src}
              src22={DSUSACourseData[0].src22}
              src33={DSUSACourseData[0].src33}
              ModuleHead1={DSUSACourseData[0].ModuleHead1}
              ModuleBot1={DSUSACourseData[0].ModuleBot1}
              ModuleBot2={DSUSACourseData[0].ModuleBot2}
              Modulelist1={DSUSACourseData[0].Modulelist1}
              Modulelist2={DSUSACourseData[0].Modulelist2}
              Modulelist3={DSUSACourseData[0].Modulelist3}
              Modulelist4={DSUSACourseData[0].Modulelist4}
              Modulelist5={DSUSACourseData[0].Modulelist5}
              Modulelist6={DSUSACourseData[0].Modulelist6}
              Modulelist7={DSUSACourseData[0].Modulelist7}
              syllabush1={DSUSACourseData[0].syllabush1}
              syllabusb1={DSUSACourseData[0].syllabusb1}
              SyllabusBotlist11={DSUSACourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSUSACourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSUSACourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSUSACourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSUSACourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSUSACourseData[0].SyllabusBotlist16}
              syllabush2={DSUSACourseData[0].syllabush2}
              syllabusb2={DSUSACourseData[0].syllabusb2}
              SyllabusBotlist21={DSUSACourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSUSACourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSUSACourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSUSACourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSUSACourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSUSACourseData[0].SyllabusBotlist26}
              syllabush3={DSUSACourseData[0].syllabush3}
              syllabusb3={DSUSACourseData[0].syllabusb3}
              SyllabusBotlist31={DSUSACourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSUSACourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSUSACourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSUSACourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSUSACourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSUSACourseData[0].SyllabusBotlist36}
              syllabush4={DSUSACourseData[0].syllabush4}
              syllabusb4={DSUSACourseData[0].syllabusb4}
              SyllabusBotlist41={DSUSACourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSUSACourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSUSACourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSUSACourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSUSACourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSUSACourseData[0].SyllabusBotlist46}
              syllabussrc={DSUSACourseData[0].syllabussrc}
              JobHead1={DSUSACourseData[0].JobHead1}
              JobHead2={DSUSACourseData[0].JobHead2}
              JobBot3={DSUSACourseData[0].JobBot3}
              Joblist1={DSUSACourseData[0].Joblist1}
              Joblist2={DSUSACourseData[0].Joblist2}
              Joblist3={DSUSACourseData[0].Joblist3}
              Joblist4={DSUSACourseData[0].Joblist4}
              Joblist5={DSUSACourseData[0].Joblist5}
              Joblist6={DSUSACourseData[0].Joblist6}
              Joblist7={DSUSACourseData[0].Joblist7}
              Joblist8={DSUSACourseData[0].Joblist8}
              Joblist9={DSUSACourseData[0].Joblist9}
              Joblist10={DSUSACourseData[0].Joblist10}
              Joblist11={DSUSACourseData[0].Joblist11}
              Joblist12={DSUSACourseData[0].Joblist12}
              Joblist13={DSUSACourseData[0].Joblist13}
              JobHead19={DSUSACourseData[0].JobHead19}
              JobBot20={DSUSACourseData[0].JobBot20}
              JobHead20={DSUSACourseData[0].JobHead20}
              Joblist14={DSUSACourseData[0].Joblist14}
              Joblist15={DSUSACourseData[0].Joblist15}
              Joblist16={DSUSACourseData[0].Joblist16}
              Joblist17={DSUSACourseData[0].Joblist17}
              JobHead21={DSUSACourseData[0].JobHead21}
              JobBot21={DSUSACourseData[0].JobBot21}
              JobBot22={DSUSACourseData[0].JobBot22}
              Joblist21={DSUSACourseData[0].Joblist21}
              Joblist22={DSUSACourseData[0].Joblist22}
              Joblist50={DSUSACourseData[0].Joblist50}
              Joblist51={DSUSACourseData[0].Joblist51}
              Joblist52={DSUSACourseData[0].Joblist52}
              Joblist53={DSUSACourseData[0].Joblist53}
              Joblist54={DSUSACourseData[0].Joblist54}
              JobBot23={DSUSACourseData[0].JobBot23}
              usaonly={true}
              modulelist={true}
              joblist={true}
              showData={true}
              JobHead22={DSUSACourseData[0].JobHead22}
              JobBot24={DSUSACourseData[0].JobBot24}
              Joblist23={DSUSACourseData[0].Joblist23}
              Joblist24={DSUSACourseData[0].Joblist24}
              Joblist25={DSUSACourseData[0].Joblist25}
              Joblist26={DSUSACourseData[0].Joblist26}
              Joblist27={DSUSACourseData[0].Joblist27}
              Joblist28={DSUSACourseData[0].Joblist28}
              Joblist29={DSUSACourseData[0].Joblist29}
              Joblist30={DSUSACourseData[0].Joblist30}
              JobBot25={DSUSACourseData[0].JobBot25}
              ProjectsHead1={DSUSACourseData[0].ProjectsHead1}
              ProjectsBot1={DSUSACourseData[0].ProjectsBot1}
              ProjectsBot2={DSUSACourseData[0].ProjectsBot2}
              ProjectsBot3={DSUSACourseData[0].ProjectsBot3}
              ProjectsBot4={DSUSACourseData[0].ProjectsBot4}
              ProjectsBot5={DSUSACourseData[0].ProjectsBot5}
              ProjectsBot6={DSUSACourseData[0].ProjectsBot6}
              ProjectsBot7={DSUSACourseData[0].ProjectsBot7}
              src1={DSUSACourseData[0].src1}
              ProjectsH1={DSUSACourseData[0].ProjectsH1}
              Projectsp1={DSUSACourseData[0].Projectsp1}
              src2={DSUSACourseData[0].src2}
              ProjectsH2={DSUSACourseData[0].ProjectsH2}
              Projectsp2={DSUSACourseData[0].Projectsp2}
              src3={DSUSACourseData[0].src3}
              ProjectsH3={DSUSACourseData[0].ProjectsH3}
              Projectsp3={DSUSACourseData[0].Projectsp3}
              src4={DSUSACourseData[0].src4}
              ProjectsH4={DSUSACourseData[0].ProjectsH4}
              Projectsp4={DSUSACourseData[0].Projectsp4}
              AlumniBot1={DSUSACourseData[0].AlumniBot1}
              Asrc1={DSUSACourseData[0].Asrc1}
              AlumniH1={DSUSACourseData[0].AlumniH1}
              Alumnip1={DSUSACourseData[0].Alumnip1}
              Asrc2={DSUSACourseData[0].Asrc2}
              AlumniH2={DSUSACourseData[0].AlumniH2}
              Alumnip2={DSUSACourseData[0].Alumnip2}
              Asrc3={DSUSACourseData[0].Asrc3}
              AlumniH3={DSUSACourseData[0].AlumniH3}
              Alumnip3={DSUSACourseData[0].Alumnip3}
              Asrc4={DSUSACourseData[0].Asrc4}
              AlumniH4={DSUSACourseData[0].AlumniH4}
              Alumnip4={DSUSACourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSUSACourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={DSUSACourseData[0].CityTextB}
          CityText={DSUSACourseData[0].CityText}
          CityTextLB={DSUSACourseData[0].CityTextLB}
          CityTextL={DSUSACourseData[0].CityTextL}
        /> */}
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
