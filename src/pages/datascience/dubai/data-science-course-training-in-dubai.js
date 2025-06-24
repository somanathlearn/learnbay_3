import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSDubaiCourseData } from "../../../CityData/Dubai/DataScienceCourseTrainingDubaiData";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Navbar from "../../../components/Global/Navbar/Navbar";
import Popup from "../../../components/Global/Popup/Popup";
import FeeSection from "../../../components/Seo/FeeSection/FeeSection";
import Testimonial from "../../../components/Seo/Testimonial/Testimonial";
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
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Data Science Course in Dubai With IBM Certification</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Master At Learnbay's Data Science Course In Dubai With Flexible Scheduling, Hands-On Projects, And Receive Personalised Mentorship. Enroll Now!"
        />
        <meta
          name="keywords"
          content="data science course in Dubai, data science training in Dubai, data science institute in Dubai, best data science institute in Dubai, data scientist course in Dubai,data scientist certification in Dubai, data science training institute in Dubai, advanced data science course in Dubai, data science course with Placement Assistance, data science course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/dubai/data-science-course-training-in-dubai"
        />
        <meta
          property="og:title"
          content="Data Science Course in Dubai | Data Science Training in Dubai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Master At Learnbay's Data Science Course In Dubai With Flexible Scheduling, Hands-On Projects, And Receive Personalised Mentorship. Enroll Now!"
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
          content="Data Science Course in Dubai | Data Science Training in Dubai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Master At Learnbay's Data Science Course In Dubai With Flexible Scheduling, Hands-On Projects, And Receive Personalised Mentorship. Enroll Now!"
        />
        <meta
          name="twitter:description"
          content="Master At Learnbay's Data Science Course In Dubai With Flexible Scheduling, Hands-On Projects, And Receive Personalised Mentorship. Enroll Now!"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/dubai/data-science-course-training-in-dubai"
        />
        <meta
          name="copyright"
          content="Learnbay: Data Science Courses Certification Training Dubai"
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
          cityParaCont="Our comprehensive Data Science course in Dubai with IBM Certification will enhance your Data Science career. Advanced Data Science & AI training in Dubai will help you to make experts in Python, Power BI, etc. You will get training from industry leaders and masters. to gain the most in-demand data science and AI skills."
          dataScience={true}
          interstedInHide={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstToparaImg="Enroll Now"
          firstHeading="Data Science Course in Dubai - "
          firstTopPara="Foundational and Advance Job-ready Program"
        />
        <SecondSection SecondSectionData={DSDubaiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={DSDubaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
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
              ProgramHead1={DSDubaiCourseData[0].ProgramHead1}
              ProgramBot1={DSDubaiCourseData[0].ProgramBot1}
              ProgramHead3={DSDubaiCourseData[0].ProgramHead3}
              ProgramBot3={DSDubaiCourseData[0].ProgramBot3}
              ProgramBot66={DSDubaiCourseData[0].ProgramBot66}
              ProgramBot4={DSDubaiCourseData[0].ProgramBot4}
              Courselink1={DSDubaiCourseData[0].Courselink1}
              Courselink2={DSDubaiCourseData[0].Courselink2}
              Courselink4={DSDubaiCourseData[0].Courselink4}
              Courselink5={DSDubaiCourseData[0].Courselink5}
              Course1={DSDubaiCourseData[0].Course1}
              Course2={DSDubaiCourseData[0].Course2}
              Course4={DSDubaiCourseData[0].Course4}
              Course5={DSDubaiCourseData[0].Course5}
              DomainHead1={DSDubaiCourseData[0].DomainHead1}
              DomainBot1={DSDubaiCourseData[0].DomainBot1}
              DomainBot2={DSDubaiCourseData[0].DomainBot2}
              DomainBot3={DSDubaiCourseData[0].DomainBot3}
              DomainList1={DSDubaiCourseData[0].DomainList1}
              DomainList2={DSDubaiCourseData[0].DomainList2}
              DomainList3={DSDubaiCourseData[0].DomainList3}
              DomainList4={DSDubaiCourseData[0].DomainList4}
              DomainList5={DSDubaiCourseData[0].DomainList5}
              DomainList6={DSDubaiCourseData[0].DomainList6}
              DomainList7={DSDubaiCourseData[0].DomainList7}
              DomainList8={DSDubaiCourseData[0].DomainList8}
              DomainList9={DSDubaiCourseData[0].DomainList9}
              DomainList10={DSDubaiCourseData[0].DomainList10}
              Domainlink1={DSDubaiCourseData[0].Domainlink1}
              Domainlink2={DSDubaiCourseData[0].Domainlink2}
              Domainlink3={DSDubaiCourseData[0].Domainlink3}
              Domainlink4={DSDubaiCourseData[0].Domainlink4}
              Domainlink5={DSDubaiCourseData[0].Domainlink5}
              Domainlink6={DSDubaiCourseData[0].Domainlink6}
              Domainlink7={DSDubaiCourseData[0].Domainlink7}
              Domainlink8={DSDubaiCourseData[0].Domainlink8}
              Domainlink9={DSDubaiCourseData[0].Domainlink9}
              Domainlink10={DSDubaiCourseData[0].Domainlink10}
              CertificationHead1={DSDubaiCourseData[0].CertificationHead1}
              CertificationBot1={DSDubaiCourseData[0].CertificationBot1}
              CertificationBot2={DSDubaiCourseData[0].CertificationBot2}
              src={DSDubaiCourseData[0].src}
              src22={DSDubaiCourseData[0].src22}
              src33={DSDubaiCourseData[0].src33}
              ModuleHead1={DSDubaiCourseData[0].ModuleHead1}
              ModuleBot1={DSDubaiCourseData[0].ModuleBot1}
              ModuleBot2={DSDubaiCourseData[0].ModuleBot2}
              ModuleHead2={DSDubaiCourseData[0].ModuleHead2}
              ModuleBot4={DSDubaiCourseData[0].ModuleBot4}
              ModuleBot41={DSDubaiCourseData[0].ModuleBot41}
              ModuleBot3={DSDubaiCourseData[0].ModuleBot3}
              syllabush1={DSDubaiCourseData[0].syllabush1}
              syllabusb1={DSDubaiCourseData[0].syllabusb1}
              SyllabusBotlist11={DSDubaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSDubaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSDubaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSDubaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSDubaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSDubaiCourseData[0].SyllabusBotlist16}
              syllabush2={DSDubaiCourseData[0].syllabush2}
              syllabusb2={DSDubaiCourseData[0].syllabusb2}
              SyllabusBotlist21={DSDubaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSDubaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSDubaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSDubaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSDubaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSDubaiCourseData[0].SyllabusBotlist26}
              syllabush3={DSDubaiCourseData[0].syllabush3}
              syllabusb3={DSDubaiCourseData[0].syllabusb3}
              SyllabusBotlist31={DSDubaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSDubaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSDubaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSDubaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSDubaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSDubaiCourseData[0].SyllabusBotlist36}
              syllabush4={DSDubaiCourseData[0].syllabush4}
              syllabusb4={DSDubaiCourseData[0].syllabusb4}
              SyllabusBotlist41={DSDubaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSDubaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSDubaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSDubaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSDubaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSDubaiCourseData[0].SyllabusBotlist46}
              syllabussrc={DSDubaiCourseData[0].syllabussrc}
              JobHead1={DSDubaiCourseData[0].JobHead1}
              JobBot1={DSDubaiCourseData[0].JobBot1}
              JobBot2={DSDubaiCourseData[0].JobBot2}
              JobHead2={DSDubaiCourseData[0].JobHead2}
              JobBot3={DSDubaiCourseData[0].JobBot3}
              JobBot4={DSDubaiCourseData[0].JobBot4}
              ProjectsBot1={DSDubaiCourseData[0].ProjectsBot1}
              ProjectsBot2={DSDubaiCourseData[0].ProjectsBot2}
              src1={DSDubaiCourseData[0].src1}
              ProjectsH1={DSDubaiCourseData[0].ProjectsH1}
              Projectsp1={DSDubaiCourseData[0].Projectsp1}
              src2={DSDubaiCourseData[0].src2}
              ProjectsH2={DSDubaiCourseData[0].ProjectsH2}
              Projectsp2={DSDubaiCourseData[0].Projectsp2}
              src3={DSDubaiCourseData[0].src3}
              ProjectsH3={DSDubaiCourseData[0].ProjectsH3}
              Projectsp3={DSDubaiCourseData[0].Projectsp3}
              src4={DSDubaiCourseData[0].src4}
              ProjectsH4={DSDubaiCourseData[0].ProjectsH4}
              Projectsp4={DSDubaiCourseData[0].Projectsp4}
              AlumniBot1={DSDubaiCourseData[0].AlumniBot1}
              Asrc1={DSDubaiCourseData[0].Asrc1}
              AlumniH1={DSDubaiCourseData[0].AlumniH1}
              Alumnip1={DSDubaiCourseData[0].Alumnip1}
              Asrc2={DSDubaiCourseData[0].Asrc2}
              AlumniH2={DSDubaiCourseData[0].AlumniH2}
              Alumnip2={DSDubaiCourseData[0].Alumnip2}
              Asrc3={DSDubaiCourseData[0].Asrc3}
              AlumniH3={DSDubaiCourseData[0].AlumniH3}
              Alumnip3={DSDubaiCourseData[0].Alumnip3}
              Asrc4={DSDubaiCourseData[0].Asrc4}
              AlumniH4={DSDubaiCourseData[0].AlumniH4}
              Alumnip4={DSDubaiCourseData[0].Alumnip4}
              alt1={DSDubaiCourseData[0].alt1}
              alt2={DSDubaiCourseData[0].alt2}
              alt3={DSDubaiCourseData[0].alt3}
              alt4={DSDubaiCourseData[0].alt4}
              alt5={DSDubaiCourseData[0].alt5}
              alt6={DSDubaiCourseData[0].alt6}
              alt7={DSDubaiCourseData[0].alt7}
              alt8={DSDubaiCourseData[0].alt8}
              alt9={DSDubaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSDubaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
