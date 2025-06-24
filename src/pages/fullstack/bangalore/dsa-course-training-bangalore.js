import dynamic from "next/dynamic";
import Head from "next/head";
import {useState } from "react";
import { DSABangaloreCourseData } from "../../../CityData/Bangalore/DSAbangaloreData";
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

const SeventhSection = dynamic(() =>
  import("../../../components/Seo/SeventhSection/SeventhSection")
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
;
export default function Home() {
  const [popups, setPopups] = useState(false);


  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/data-dtructure-system-design.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Structures & Algorithms | DSA Course in Bangalore</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Advance Your Coding Skills with Expert DSA Training in Bangalore. Learn Key Algorithms and Data Structures to Excel in Tech Careers and Coding Interviews."
        />
        <meta
          name="keywords"
          content="dsa course in bangalore, data structures and algorithms training in bangalore, data structure training in bangalore, data structures and algorithms course in bangalore, best datastructures & algorithms training institute in bangalore, best institute for data structures and algorithms in bangalore, data structures and algorithms classes in bangalore, dsa courses in bangalore"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/bangalore/dsa-course-training-bangalore"
        />
        <meta
          property="og:title"
          content="Data Structures & Algorithms | DSA Course in Bangalore"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Level up your coding expertise via a DSA course in Bangalore and leap forward to craft a compelling tech career with leading MNCs/MAANG. Enroll in our job-enriched course to build data management, algorithmic optimization, and critical thinking skills. "
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
          content="Data Structures & Algorithms | DSA Course in Bangalore"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Full stack software developer course Bangalore. We are Advanced Full stack software developer course Certification Training Institute in Bangalore. Full stack software developer course will enhance your career."
        />
        <meta
          name="twitter:description"
          content="Full stack software developer course Bangalore. We are Advanced Full stack software developer course Certification Training Institute in Bangalore. Full stack software developer course will enhance your career."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/bangalore/dsa-course-training-bangalore"
        />
        <meta
          name="copyright"
          content="Learnbay: Full-Stack Software Developer Courses Certification Training India"
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
          cityParaCont=" Level up your coding expertise via a DSA course in Bangalore and leap forward to craft a compelling tech career with leading MNCs/MAANG. Enroll in our job-enriched course to build data management, algorithmic optimization, and critical thinking skills."
          titleCourse="Best Data Structures and Algorithms Training in Bangalore"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstHeading="Best Data Structures and Algorithms Training in Bangalore "
          firstToparaImg=""
          firstTopPara="Ace Your Coding Interviews"
          idss="YWxTtvb3x-U"
          softwareBtnHide={true}
          microsSoftOnly={true}
        />
        <SecondSection
          SecondSectionData={DSABangaloreCourseData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={false}
          Testimonial={DSABangaloreCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        /> */}
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹95,000"
            FeeEmi="₹6,228/month"
            weekendbatch="Weekday Evening (DSA BATCHES)"
            weekdaybatch="Weekday Evening (DSA BATCHES)"
            weekday="MON-WED-FRI"
            weekend="MON-WED-FRI"
            WeekendDate="JAN 26th"
            WeekdayDate="JAN 10th "
            WeekendTime="08:00PM - 10:00PM"
            WeekdayTime="08:00PM - 10:00PM"
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
            totalAmount1="₹70,000"
            monthlyPayment1="₹6,228"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹70,000"
            monthlyPayment2="₹9,342"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              fullStackCity={true}
              DSABangalore={true}
              ProgramBot1={DSABangaloreCourseData[0].ProgramBot1}
              ProgramBot2={DSABangaloreCourseData[0].ProgramBot2}
              ProgramBot3={DSABangaloreCourseData[0].ProgramBot3}
              ProgramHead4={DSABangaloreCourseData[0].ProgramHead4}
              ProgramBot4={DSABangaloreCourseData[0].ProgramBot4}
              ProgramHead5={DSABangaloreCourseData[0].ProgramHead5}
              ProgramBot5={DSABangaloreCourseData[0].ProgramBot5}
              ProgramHead6={DSABangaloreCourseData[0].ProgramHead6}
              ProgramBot6={DSABangaloreCourseData[0].ProgramBot6}
              ProgramHead7={DSABangaloreCourseData[0].ProgramHead7}
              ProgramBot8={DSABangaloreCourseData[0].ProgramBot8}
              ProgramHead8={DSABangaloreCourseData[0].ProgramHead8}
              ProgramHead9={DSABangaloreCourseData[0].ProgramHead9}
              ProgramHead10={DSABangaloreCourseData[0].ProgramHead10}
              ProgramHead11={DSABangaloreCourseData[0].ProgramHead11}
              ProgramHead12={DSABangaloreCourseData[0].ProgramHead12}
              ProgramHead13={DSABangaloreCourseData[0].ProgramHead13}
              ProgramBot9={DSABangaloreCourseData[0].ProgramBot9}
              DomainHead1={DSABangaloreCourseData[0].DomainHead1}
              DomainBot1={DSABangaloreCourseData[0].DomainBot1}
              DomainHead2={DSABangaloreCourseData[0].DomainHead2}
              DomainHead30={DSABangaloreCourseData[0].DomainHead30}
              DomainHead4={DSABangaloreCourseData[0].DomainHead4}
              DomainHead5={DSABangaloreCourseData[0].DomainHead5}
              DomainHead6={DSABangaloreCourseData[0].DomainHead6}
              DomainHead7={DSABangaloreCourseData[0].DomainHead7}
              DomainBot2={DSABangaloreCourseData[0].DomainBot2}
              DomainBot3={DSABangaloreCourseData[0].DomainBot3}
              DomainList1={DSABangaloreCourseData[0].DomainList1}
              DomainList2={DSABangaloreCourseData[0].DomainList2}
              DomainList3={DSABangaloreCourseData[0].DomainList3}
              DomainList4={DSABangaloreCourseData[0].DomainList4}
              DomainList5={DSABangaloreCourseData[0].DomainList5}
              DomainList6={DSABangaloreCourseData[0].DomainList6}
              DomainList7={DSABangaloreCourseData[0].DomainList7}
              DomainList8={DSABangaloreCourseData[0].DomainList8}
              DomainList9={DSABangaloreCourseData[0].DomainList9}
              DomainList10={DSABangaloreCourseData[0].DomainList10}
              Domainlink1={DSABangaloreCourseData[0].Domainlink1}
              Domainlink2={DSABangaloreCourseData[0].Domainlink2}
              Domainlink3={DSABangaloreCourseData[0].Domainlink3}
              Domainlink4={DSABangaloreCourseData[0].Domainlink4}
              Domainlink5={DSABangaloreCourseData[0].Domainlink5}
              Domainlink6={DSABangaloreCourseData[0].Domainlink6}
              Domainlink7={DSABangaloreCourseData[0].Domainlink7}
              Domainlink8={DSABangaloreCourseData[0].Domainlink8}
              Domainlink9={DSABangaloreCourseData[0].Domainlink9}
              Domainlink10={DSABangaloreCourseData[0].Domainlink10}
              CertificationHead1={
                DSABangaloreCourseData[0].CertificationHead1
              }
              CertificationBot1={
                DSABangaloreCourseData[0].CertificationBot1
              }
              src={DSABangaloreCourseData[0].src}
              ModuleHead1={DSABangaloreCourseData[0].ModuleHead1}
              ModuleBot1={DSABangaloreCourseData[0].ModuleBot1}
              ModuleHead2={DSABangaloreCourseData[0].Head2}
              ModuleBot3={DSABangaloreCourseData[0].ModuleBot3}
              ModuleBot2={DSABangaloreCourseData[0].ModuleBot2}
              syllabush1={DSABangaloreCourseData[0].syllabush1}
              syllabusb1={DSABangaloreCourseData[0].syllabusb1}
              SyllabusBotlist11={
                DSABangaloreCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                DSABangaloreCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                DSABangaloreCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                DSABangaloreCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                DSABangaloreCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                DSABangaloreCourseData[0].SyllabusBotlist16
              }
              syllabush2={DSABangaloreCourseData[0].syllabush2}
              syllabusb2={DSABangaloreCourseData[0].syllabusb2}
              SyllabusBotlist21={
                DSABangaloreCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                DSABangaloreCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                DSABangaloreCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                DSABangaloreCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                DSABangaloreCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                DSABangaloreCourseData[0].SyllabusBotlist26
              }
              syllabush3={DSABangaloreCourseData[0].syllabush3}
              syllabusb3={DSABangaloreCourseData[0].syllabusb3}
              SyllabusBotlist31={
                DSABangaloreCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                DSABangaloreCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                DSABangaloreCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                DSABangaloreCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                DSABangaloreCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                DSABangaloreCourseData[0].SyllabusBotlist36
              }
              syllabush4={DSABangaloreCourseData[0].syllabush4}
              syllabusb4={DSABangaloreCourseData[0].syllabusb4}
              SyllabusBotlist41={
                DSABangaloreCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                DSABangaloreCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                DSABangaloreCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                DSABangaloreCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                DSABangaloreCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                DSABangaloreCourseData[0].SyllabusBotlist46
              }
              syllabussrc={DSABangaloreCourseData[0].syllabussrc}
              JobHead1={DSABangaloreCourseData[0].JobHead1}
              JobBot1={DSABangaloreCourseData[0].JobBot1}
              JobBot2={DSABangaloreCourseData[0].JobBot2}
              JobBot5={DSABangaloreCourseData[0].JobBot5}
              JobHead2={DSABangaloreCourseData[0].JobHead2}
              JobBot3={DSABangaloreCourseData[0].JobBot3}
              JobBot4={DSABangaloreCourseData[0].JobBot4}
              JobBot6={DSABangaloreCourseData[0].JobBot6}
              JobBot7={DSABangaloreCourseData[0].JobBot7}
              JobBot8={DSABangaloreCourseData[0].JobBot8}
              JobBot9={DSABangaloreCourseData[0].JobBot9}
              JobBot11={DSABangaloreCourseData[0].JobBot11}
              ProjectsBot1={DSABangaloreCourseData[0].ProjectsBot1}
             
              src1={DSABangaloreCourseData[0].src1}
              ProjectsH1={DSABangaloreCourseData[0].ProjectsH1}
              Projectsp1={DSABangaloreCourseData[0].Projectsp1}
              src2={DSABangaloreCourseData[0].src2}
              alt2={DSABangaloreCourseData[0].alt2}
              alt3={DSABangaloreCourseData[0].alt3}
              alt4={DSABangaloreCourseData[0].alt4}
              alt5={DSABangaloreCourseData[0].alt5}
              ProjectsH2={DSABangaloreCourseData[0].ProjectsH2}
              Projectsp2={DSABangaloreCourseData[0].Projectsp2}
              src3={DSABangaloreCourseData[0].src3}
              ProjectsH3={DSABangaloreCourseData[0].ProjectsH3}
              Projectsp3={DSABangaloreCourseData[0].Projectsp3}
              src4={DSABangaloreCourseData[0].src4}
              ProjectsH4={DSABangaloreCourseData[0].ProjectsH4}
              Projectsp4={DSABangaloreCourseData[0].Projectsp4}
              AlumniBot1={DSABangaloreCourseData[0].AlumniBot1}
              Asrc1={DSABangaloreCourseData[0].Asrc1}
              AlumniH1={DSABangaloreCourseData[0].AlumniH1}
              Alumnip1={DSABangaloreCourseData[0].Alumnip1}
              Asrc2={DSABangaloreCourseData[0].Asrc2}
              AlumniH2={DSABangaloreCourseData[0].AlumniH2}
              Alumnip2={DSABangaloreCourseData[0].Alumnip2}
              Asrc3={DSABangaloreCourseData[0].Asrc3}
              AlumniH3={DSABangaloreCourseData[0].AlumniH3}
              Alumnip3={DSABangaloreCourseData[0].Alumnip3}
              Asrc4={DSABangaloreCourseData[0].Asrc4}
              AlumniH4={DSABangaloreCourseData[0].AlumniH4}
              Alumnip4={DSABangaloreCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSABangaloreCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DSABangaloreCourseData[0].CityTextB}
          CityText={DSABangaloreCourseData[0].CityText}
          CityTextLB={DSABangaloreCourseData[0].CityTextLB}
          CityTextL={DSABangaloreCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
