import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { CuberSecurityPuneCourseData } from "../../../CityData/Pune/cyberSecurityPuneData";
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

export default function Home() {
  const [popups, setPopups] = useState(false);

  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Advance-Cyber-security.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Online Cyber Security Course in Pune</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Become a certified expert with our digitally-driven cyber security course in Pune. Join our GenAI-rich course to master network security tools and detect key oddities. Earn iHUB DivyaSampark and IIT Roorkee credentials to validate your skills in shielding data webs from data thefts & breaches. "
        />
        <meta
          name="keywords"
          content="cyber security course in pune, cyber security course in pune with placement, best cyber security institute in pune, cyber security classes in pune, cyber security training in pune, cyber security training institute in pune, best cyber security course in pune, cyber security certification in pune, cyber security course fees in pune, cyber security course institute in pune, best cyber security training institute in pune, cyber security course with certification in pune, cyber security course with placement in pune"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/cyber-security/india/cyber-security-course-training-in-pune"
        />
        <meta property="og:title" content="Cyber Security " />
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
          content="Best Online Cyber Security Course in Pune"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Become a certified expert with our digitally-driven cyber security course in Pune. Join our GenAI-rich course to master network security tools and detect key oddities. Earn iHUB DivyaSampark and IIT Roorkee credentials to validate your skills in shielding data webs from data thefts & breaches. "
        />
        <meta
          name="twitter:description"
          content="Become a certified expert with our digitally-driven cyber security course in Pune. Join our GenAI-rich course to master network security tools and detect key oddities. Earn iHUB DivyaSampark and IIT Roorkee credentials to validate your skills in shielding data webs from data thefts & breaches. "
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cyber-security/india/cyber-security-course-training-in-pune"
        />
        <meta
          name="copyright"
          content="Learnbay: Best Online Cyber Security Course in Pune Courses Certification Training India"
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
          cityParaCont="Become a certified expert with our digitally-driven cyber security course in Pune. Join our GenAI-rich course to master network security tools and detect key oddities. Earn iHUB DivyaSampark and IIT Roorkee credentials to validate your skills in shielding data webs from data thefts & breaches. "
          titleCourse="Best Online Cyber Security Course in Pune"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstHeading="Best Online Cyber Security Course in Pune"
          firstToparaImg=""
          firstTopPara="Master Network Security Skills"
          idss="YWxTtvb3x-U"
          softwareBtnHide={true}
        />
        <SecondSection
          SecondSectionData={CuberSecurityPuneCourseData[0].secondSection}
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹70,000"
            FeeEmi="₹6,883/month"
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
            monthlyPayment1="₹6,883/month"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹70,000"
            monthlyPayment2="₹13,275"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              fullStackCity={true}
              CyberSecurityPune={true}
              ProgramBot1={CuberSecurityPuneCourseData[0].ProgramBot1}
              ProgramBot2={CuberSecurityPuneCourseData[0].ProgramBot2}
              ProgramBot3={CuberSecurityPuneCourseData[0].ProgramBot3}
              ProgramHead4={CuberSecurityPuneCourseData[0].ProgramHead4}
              ProgramBot4={CuberSecurityPuneCourseData[0].ProgramBot4}
              ProgramHead5={CuberSecurityPuneCourseData[0].ProgramHead5}
              ProgramBot5={CuberSecurityPuneCourseData[0].ProgramBot5}
              ProgramHead6={CuberSecurityPuneCourseData[0].ProgramHead6}
              ProgramBot6={CuberSecurityPuneCourseData[0].ProgramBot6}
              ProgramHead7={CuberSecurityPuneCourseData[0].ProgramHead7}
              ProgramBot8={CuberSecurityPuneCourseData[0].ProgramBot8}
              ProgramHead8={CuberSecurityPuneCourseData[0].ProgramHead8}
              ProgramHead9={CuberSecurityPuneCourseData[0].ProgramHead9}
              ProgramHead10={CuberSecurityPuneCourseData[0].ProgramHead10}
              ProgramHead11={CuberSecurityPuneCourseData[0].ProgramHead11}
              ProgramHead12={CuberSecurityPuneCourseData[0].ProgramHead12}
              ProgramHead13={CuberSecurityPuneCourseData[0].ProgramHead13}
              ProgramBot9={CuberSecurityPuneCourseData[0].ProgramBot9}
              DomainHead1={CuberSecurityPuneCourseData[0].DomainHead1}
              DomainBot1={CuberSecurityPuneCourseData[0].DomainBot1}
              DomainHead2={CuberSecurityPuneCourseData[0].DomainHead2}
              DomainHead30={CuberSecurityPuneCourseData[0].DomainHead30}
              DomainHead4={CuberSecurityPuneCourseData[0].DomainHead4}
              DomainHead5={CuberSecurityPuneCourseData[0].DomainHead5}
              DomainHead6={CuberSecurityPuneCourseData[0].DomainHead6}
              DomainHead7={CuberSecurityPuneCourseData[0].DomainHead7}
              DomainBot2={CuberSecurityPuneCourseData[0].DomainBot2}
              DomainBot3={CuberSecurityPuneCourseData[0].DomainBot3}
              DomainList1={CuberSecurityPuneCourseData[0].DomainList1}
              DomainList2={CuberSecurityPuneCourseData[0].DomainList2}
              DomainList3={CuberSecurityPuneCourseData[0].DomainList3}
              DomainList4={CuberSecurityPuneCourseData[0].DomainList4}
              DomainList5={CuberSecurityPuneCourseData[0].DomainList5}
              DomainList6={CuberSecurityPuneCourseData[0].DomainList6}
              DomainList7={CuberSecurityPuneCourseData[0].DomainList7}
              DomainList8={CuberSecurityPuneCourseData[0].DomainList8}
              DomainList9={CuberSecurityPuneCourseData[0].DomainList9}
              DomainList10={CuberSecurityPuneCourseData[0].DomainList10}
              Domainlink1={CuberSecurityPuneCourseData[0].Domainlink1}
              Domainlink2={CuberSecurityPuneCourseData[0].Domainlink2}
              Domainlink3={CuberSecurityPuneCourseData[0].Domainlink3}
              Domainlink4={CuberSecurityPuneCourseData[0].Domainlink4}
              Domainlink5={CuberSecurityPuneCourseData[0].Domainlink5}
              Domainlink6={CuberSecurityPuneCourseData[0].Domainlink6}
              Domainlink7={CuberSecurityPuneCourseData[0].Domainlink7}
              Domainlink8={CuberSecurityPuneCourseData[0].Domainlink8}
              Domainlink9={CuberSecurityPuneCourseData[0].Domainlink9}
              Domainlink10={CuberSecurityPuneCourseData[0].Domainlink10}
              CertificationHead1={
                CuberSecurityPuneCourseData[0].CertificationHead1
              }
              CertificationBot1={
                CuberSecurityPuneCourseData[0].CertificationBot1
              }
              src={CuberSecurityPuneCourseData[0].src}
              ModuleHead1={CuberSecurityPuneCourseData[0].ModuleHead1}
              ModuleBot1={CuberSecurityPuneCourseData[0].ModuleBot1}
              ModuleHead2={CuberSecurityPuneCourseData[0].Head2}
              ModuleBot3={CuberSecurityPuneCourseData[0].ModuleBot3}
              ModuleBot4={CuberSecurityPuneCourseData[0].ModuleBot4}
              ModuleBot2={CuberSecurityPuneCourseData[0].ModuleBot2}
              syllabush1={CuberSecurityPuneCourseData[0].syllabush1}
              syllabusb1={CuberSecurityPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={
                CuberSecurityPuneCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                CuberSecurityPuneCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                CuberSecurityPuneCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                CuberSecurityPuneCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                CuberSecurityPuneCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                CuberSecurityPuneCourseData[0].SyllabusBotlist16
              }
              syllabush2={CuberSecurityPuneCourseData[0].syllabush2}
              syllabusb2={CuberSecurityPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={
                CuberSecurityPuneCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                CuberSecurityPuneCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                CuberSecurityPuneCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                CuberSecurityPuneCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                CuberSecurityPuneCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                CuberSecurityPuneCourseData[0].SyllabusBotlist26
              }
              syllabush3={CuberSecurityPuneCourseData[0].syllabush3}
              syllabusb3={CuberSecurityPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={
                CuberSecurityPuneCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                CuberSecurityPuneCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                CuberSecurityPuneCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                CuberSecurityPuneCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                CuberSecurityPuneCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                CuberSecurityPuneCourseData[0].SyllabusBotlist36
              }
              syllabush4={CuberSecurityPuneCourseData[0].syllabush4}
              syllabusb4={CuberSecurityPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={
                CuberSecurityPuneCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                CuberSecurityPuneCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                CuberSecurityPuneCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                CuberSecurityPuneCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                CuberSecurityPuneCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                CuberSecurityPuneCourseData[0].SyllabusBotlist46
              }
              syllabussrc={CuberSecurityPuneCourseData[0].syllabussrc}
              JobHead1={CuberSecurityPuneCourseData[0].JobHead1}
              JobBot1={CuberSecurityPuneCourseData[0].JobBot1}
              JobBot2={CuberSecurityPuneCourseData[0].JobBot2}
              JobBot5={CuberSecurityPuneCourseData[0].JobBot5}
              JobHead2={CuberSecurityPuneCourseData[0].JobHead2}
              JobBot3={CuberSecurityPuneCourseData[0].JobBot3}
              JobBot4={CuberSecurityPuneCourseData[0].JobBot4}
              JobBot6={CuberSecurityPuneCourseData[0].JobBot6}
              JobBot7={CuberSecurityPuneCourseData[0].JobBot7}
              JobBot8={CuberSecurityPuneCourseData[0].JobBot8}
              JobBot9={CuberSecurityPuneCourseData[0].JobBot9}
              JobBot11={CuberSecurityPuneCourseData[0].JobBot11}
              ProjectsBot1={CuberSecurityPuneCourseData[0].ProjectsBot1}
              ProjectsBot2={CuberSecurityPuneCourseData[0].ProjectsBot2}
              ProjectsBot3={CuberSecurityPuneCourseData[0].ProjectsBot3}
              ProjectsBot4={CuberSecurityPuneCourseData[0].ProjectsBot4}
              src1={CuberSecurityPuneCourseData[0].src1}
              ProjectsH1={CuberSecurityPuneCourseData[0].ProjectsH1}
              Projectsp1={CuberSecurityPuneCourseData[0].Projectsp1}
              src2={CuberSecurityPuneCourseData[0].src2}
              alt2={CuberSecurityPuneCourseData[0].alt2}
              alt3={CuberSecurityPuneCourseData[0].alt3}
              alt4={CuberSecurityPuneCourseData[0].alt4}
              alt5={CuberSecurityPuneCourseData[0].alt5}
              ProjectsH2={CuberSecurityPuneCourseData[0].ProjectsH2}
              Projectsp2={CuberSecurityPuneCourseData[0].Projectsp2}
              src3={CuberSecurityPuneCourseData[0].src3}
              ProjectsH3={CuberSecurityPuneCourseData[0].ProjectsH3}
              Projectsp3={CuberSecurityPuneCourseData[0].Projectsp3}
              src4={CuberSecurityPuneCourseData[0].src4}
              ProjectsH4={CuberSecurityPuneCourseData[0].ProjectsH4}
              Projectsp4={CuberSecurityPuneCourseData[0].Projectsp4}
              AlumniBot1={CuberSecurityPuneCourseData[0].AlumniBot1}
              Asrc1={CuberSecurityPuneCourseData[0].Asrc1}
              AlumniH1={CuberSecurityPuneCourseData[0].AlumniH1}
              Alumnip1={CuberSecurityPuneCourseData[0].Alumnip1}
              Asrc2={CuberSecurityPuneCourseData[0].Asrc2}
              AlumniH2={CuberSecurityPuneCourseData[0].AlumniH2}
              Alumnip2={CuberSecurityPuneCourseData[0].Alumnip2}
              Asrc3={CuberSecurityPuneCourseData[0].Asrc3}
              AlumniH3={CuberSecurityPuneCourseData[0].AlumniH3}
              Alumnip3={CuberSecurityPuneCourseData[0].Alumnip3}
              Asrc4={CuberSecurityPuneCourseData[0].Asrc4}
              AlumniH4={CuberSecurityPuneCourseData[0].AlumniH4}
              Alumnip4={CuberSecurityPuneCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={CuberSecurityPuneCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={CuberSecurityPuneCourseData[0].CityTextB}
          CityText={CuberSecurityPuneCourseData[0].CityText}
          CityTextLB={CuberSecurityPuneCourseData[0].CityTextLB}
          CityTextL={CuberSecurityPuneCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
