import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { CuberSecurityBangaloreCourseData } from "../../../CityData/Bangalore/cyberSecurityBangloreData";
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
        <title>Best Online Cyber Security Course in Bangalore</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Become a cyber security expert to protect diversified sensitive data and corporate assets from vicious attacks. Level up your responsiveness and powers via our cyber security course in Bangalore and attain a career edge."
        />
        <meta
          name="keywords"
          content="cyber security course in bangalore, cyber security course in bangalore with placement, cyber security course in bangalore fees, cyber security course fees in bangalore, cyber security course with placement in bangalore, cyber security and ethical hacking course in bangalore, yber security, cyber security course, cyber security jobs, cyber security certifications, cyber security threats, cyber security courses online, cyber security training, cyber security certification course"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/cyber-security/india/cyber-security-course-training-in-bangalore"
        />
        <meta
          property="og:title"
          content="Cyber Security "
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Become a cyber security expert to protect diversified sensitive data and corporate assets from vicious attacks. Level up your responsiveness and powers via our cyber security course in Bangalore and attain a career edge."
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
          content="Best Online Cyber Security Course in Bangalore"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Become a cyber security expert to protect diversified sensitive data and corporate assets from vicious attacks. Level up your responsiveness and powers via our cyber security course in Bangalore and attain a career edge."
        />
        <meta
          name="twitter:description"
          content="Become a cyber security expert to protect diversified sensitive data and corporate assets from vicious attacks. Level up your responsiveness and powers via our cyber security course in Bangalore and attain a career edge."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cyber-security/india/cyber-security-course-training-in-bangalore"
        />
        <meta
          name="copyright"
          content="Learnbay: Best Online Cyber Security Courses Certification Training India"
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
          cityParaCont="Become a cyber security expert to protect diversified sensitive data and corporate assets from vicious attacks. Level up your responsiveness and powers via our cyber security course in Bangalore and attain a career edge."
          titleCourse="Best Online Cyber Security Course in Bangalore "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstHeading="Best Online Cyber Security Course in Bangalore"
          firstToparaImg=""
          firstTopPara="Secure Your Data and Assets"
          idss="YWxTtvb3x-U"
          microsSoftOnly={true}
          softwareBtnHide={true}
        />
        <SecondSection
          SecondSectionData={CuberSecurityBangaloreCourseData[0].secondSection}
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
              CyberSecurityBangalore={true}
              ProgramBot1={CuberSecurityBangaloreCourseData[0].ProgramBot1}
              ProgramBot2={CuberSecurityBangaloreCourseData[0].ProgramBot2}
              ProgramBot3={CuberSecurityBangaloreCourseData[0].ProgramBot3}
              ProgramHead4={CuberSecurityBangaloreCourseData[0].ProgramHead4}
              ProgramBot4={CuberSecurityBangaloreCourseData[0].ProgramBot4}
              ProgramHead5={CuberSecurityBangaloreCourseData[0].ProgramHead5}
              ProgramBot5={CuberSecurityBangaloreCourseData[0].ProgramBot5}
              ProgramHead6={CuberSecurityBangaloreCourseData[0].ProgramHead6}
              ProgramBot6={CuberSecurityBangaloreCourseData[0].ProgramBot6}
              ProgramHead7={CuberSecurityBangaloreCourseData[0].ProgramHead7}
              ProgramBot8={CuberSecurityBangaloreCourseData[0].ProgramBot8}
              ProgramHead8={CuberSecurityBangaloreCourseData[0].ProgramHead8}
              ProgramHead9={CuberSecurityBangaloreCourseData[0].ProgramHead9}
              ProgramHead10={CuberSecurityBangaloreCourseData[0].ProgramHead10}
              ProgramHead11={CuberSecurityBangaloreCourseData[0].ProgramHead11}
              ProgramHead12={CuberSecurityBangaloreCourseData[0].ProgramHead12}
              ProgramHead13={CuberSecurityBangaloreCourseData[0].ProgramHead13}
              ProgramBot9={CuberSecurityBangaloreCourseData[0].ProgramBot9}
              DomainHead1={CuberSecurityBangaloreCourseData[0].DomainHead1}
              DomainBot1={CuberSecurityBangaloreCourseData[0].DomainBot1}
              DomainHead2={CuberSecurityBangaloreCourseData[0].DomainHead2}
              DomainHead30={CuberSecurityBangaloreCourseData[0].DomainHead30}
              DomainHead4={CuberSecurityBangaloreCourseData[0].DomainHead4}
              DomainHead5={CuberSecurityBangaloreCourseData[0].DomainHead5}
              DomainHead6={CuberSecurityBangaloreCourseData[0].DomainHead6}
              DomainHead7={CuberSecurityBangaloreCourseData[0].DomainHead7}
              DomainBot2={CuberSecurityBangaloreCourseData[0].DomainBot2}
              DomainBot3={CuberSecurityBangaloreCourseData[0].DomainBot3}
              DomainList1={CuberSecurityBangaloreCourseData[0].DomainList1}
              DomainList2={CuberSecurityBangaloreCourseData[0].DomainList2}
              DomainList3={CuberSecurityBangaloreCourseData[0].DomainList3}
              DomainList4={CuberSecurityBangaloreCourseData[0].DomainList4}
              DomainList5={CuberSecurityBangaloreCourseData[0].DomainList5}
              DomainList6={CuberSecurityBangaloreCourseData[0].DomainList6}
              DomainList7={CuberSecurityBangaloreCourseData[0].DomainList7}
              DomainList8={CuberSecurityBangaloreCourseData[0].DomainList8}
              DomainList9={CuberSecurityBangaloreCourseData[0].DomainList9}
              DomainList10={CuberSecurityBangaloreCourseData[0].DomainList10}
              Domainlink1={CuberSecurityBangaloreCourseData[0].Domainlink1}
              Domainlink2={CuberSecurityBangaloreCourseData[0].Domainlink2}
              Domainlink3={CuberSecurityBangaloreCourseData[0].Domainlink3}
              Domainlink4={CuberSecurityBangaloreCourseData[0].Domainlink4}
              Domainlink5={CuberSecurityBangaloreCourseData[0].Domainlink5}
              Domainlink6={CuberSecurityBangaloreCourseData[0].Domainlink6}
              Domainlink7={CuberSecurityBangaloreCourseData[0].Domainlink7}
              Domainlink8={CuberSecurityBangaloreCourseData[0].Domainlink8}
              Domainlink9={CuberSecurityBangaloreCourseData[0].Domainlink9}
              Domainlink10={CuberSecurityBangaloreCourseData[0].Domainlink10}
              CertificationHead1={
                CuberSecurityBangaloreCourseData[0].CertificationHead1
              }
              CertificationBot1={
                CuberSecurityBangaloreCourseData[0].CertificationBot1
              }
              src={CuberSecurityBangaloreCourseData[0].src}
              ModuleHead1={CuberSecurityBangaloreCourseData[0].ModuleHead1}
              ModuleBot1={CuberSecurityBangaloreCourseData[0].ModuleBot1}
              ModuleHead2={CuberSecurityBangaloreCourseData[0].Head2}
              ModuleBot3={CuberSecurityBangaloreCourseData[0].ModuleBot3}
              ModuleBot2={CuberSecurityBangaloreCourseData[0].ModuleBot2}
              syllabush1={CuberSecurityBangaloreCourseData[0].syllabush1}
              syllabusb1={CuberSecurityBangaloreCourseData[0].syllabusb1}
              SyllabusBotlist11={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist16
              }
              syllabush2={CuberSecurityBangaloreCourseData[0].syllabush2}
              syllabusb2={CuberSecurityBangaloreCourseData[0].syllabusb2}
              SyllabusBotlist21={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist26
              }
              syllabush3={CuberSecurityBangaloreCourseData[0].syllabush3}
              syllabusb3={CuberSecurityBangaloreCourseData[0].syllabusb3}
              SyllabusBotlist31={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist36
              }
              syllabush4={CuberSecurityBangaloreCourseData[0].syllabush4}
              syllabusb4={CuberSecurityBangaloreCourseData[0].syllabusb4}
              SyllabusBotlist41={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                CuberSecurityBangaloreCourseData[0].SyllabusBotlist46
              }
              syllabussrc={CuberSecurityBangaloreCourseData[0].syllabussrc}
              JobHead1={CuberSecurityBangaloreCourseData[0].JobHead1}
              JobBot1={CuberSecurityBangaloreCourseData[0].JobBot1}
              JobBot2={CuberSecurityBangaloreCourseData[0].JobBot2}
              JobBot5={CuberSecurityBangaloreCourseData[0].JobBot5}
              JobHead2={CuberSecurityBangaloreCourseData[0].JobHead2}
              JobBot3={CuberSecurityBangaloreCourseData[0].JobBot3}
              JobBot4={CuberSecurityBangaloreCourseData[0].JobBot4}
              JobBot6={CuberSecurityBangaloreCourseData[0].JobBot6}
              JobBot7={CuberSecurityBangaloreCourseData[0].JobBot7}
              JobBot8={CuberSecurityBangaloreCourseData[0].JobBot8}
              JobBot9={CuberSecurityBangaloreCourseData[0].JobBot9}
              JobBot11={CuberSecurityBangaloreCourseData[0].JobBot11}
              ProjectsBot1={CuberSecurityBangaloreCourseData[0].ProjectsBot1}
              src1={CuberSecurityBangaloreCourseData[0].src1}
              ProjectsH1={CuberSecurityBangaloreCourseData[0].ProjectsH1}
              Projectsp1={CuberSecurityBangaloreCourseData[0].Projectsp1}
              src2={CuberSecurityBangaloreCourseData[0].src2}
              alt2={CuberSecurityBangaloreCourseData[0].alt2}
              alt3={CuberSecurityBangaloreCourseData[0].alt3}
              alt4={CuberSecurityBangaloreCourseData[0].alt4}
              alt5={CuberSecurityBangaloreCourseData[0].alt5}
              ProjectsH2={CuberSecurityBangaloreCourseData[0].ProjectsH2}
              Projectsp2={CuberSecurityBangaloreCourseData[0].Projectsp2}
              src3={CuberSecurityBangaloreCourseData[0].src3}
              ProjectsH3={CuberSecurityBangaloreCourseData[0].ProjectsH3}
              Projectsp3={CuberSecurityBangaloreCourseData[0].Projectsp3}
              src4={CuberSecurityBangaloreCourseData[0].src4}
              ProjectsH4={CuberSecurityBangaloreCourseData[0].ProjectsH4}
              Projectsp4={CuberSecurityBangaloreCourseData[0].Projectsp4}
              AlumniBot1={CuberSecurityBangaloreCourseData[0].AlumniBot1}
              Asrc1={CuberSecurityBangaloreCourseData[0].Asrc1}
              AlumniH1={CuberSecurityBangaloreCourseData[0].AlumniH1}
              Alumnip1={CuberSecurityBangaloreCourseData[0].Alumnip1}
              Asrc2={CuberSecurityBangaloreCourseData[0].Asrc2}
              AlumniH2={CuberSecurityBangaloreCourseData[0].AlumniH2}
              Alumnip2={CuberSecurityBangaloreCourseData[0].Alumnip2}
              Asrc3={CuberSecurityBangaloreCourseData[0].Asrc3}
              AlumniH3={CuberSecurityBangaloreCourseData[0].AlumniH3}
              Alumnip3={CuberSecurityBangaloreCourseData[0].Alumnip3}
              Asrc4={CuberSecurityBangaloreCourseData[0].Asrc4}
              AlumniH4={CuberSecurityBangaloreCourseData[0].AlumniH4}
              Alumnip4={CuberSecurityBangaloreCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={CuberSecurityBangaloreCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={CuberSecurityBangaloreCourseData[0].CityTextB}
          CityText={CuberSecurityBangaloreCourseData[0].CityText}
          CityTextLB={CuberSecurityBangaloreCourseData[0].CityTextLB}
          CityTextL={CuberSecurityBangaloreCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
