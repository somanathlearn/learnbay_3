import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSAPuneData } from "../../CityData/Pune/DSAPuneData";
import Footer from "../../components/Global/Footer/Footer";
import Form from "../../components/Global/Form/Form";
import Navbar from "../../components/Global/Navbar/Navbar";
import Popup from "../../components/Global/Popup/Popup";
import FeeSection from "../../components/Seo/FeeSection/FeeSection";
import styles from "../../styles/Home.module.css";
const FirstSection = dynamic(() =>
  import("../../components/Seo/FirstSection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("../../components/Seo/SecondSection/SecondSection")
);
const ProgramInfo = dynamic(() =>
  import("../../components/Seo/ProgramInfo/ProgramInfo")
);
const SeventhSection = dynamic(() =>
  import("../../components/Seo/SeventhSection/SeventhSection")
);
const ProgramFee = dynamic(() =>
  import("../../components/Seo/ProgramInfo/ProgramFee/ProgramFee")
);
const CityText = dynamic(() =>
  import("../../components/Seo/CityText/CityText")
);
const CitiesLeft = dynamic(() =>
  import("../../components/Seo/CitiesLeft/CitiesLeft")
);
const CitiesRight = dynamic(() =>
  import("../../components/Seo/CitiesRight/CitiesRight")
);
const FAQNew = dynamic(() => import("../../components/Seo/FAQNew/FAQNew"));
const OfferPopup = dynamic(() =>
  import("../../components/Global/OfferPopup/OfferPopup")
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
            if (popupData === "Full Stack Developer course") {
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

  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/data-dtructure-system-design.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Data Structures & Algorithms Course | DSA Training in Pune{" "}
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Gain in-demand DSA Skills in Pune! This Course Offers Expert Instruction and Real-World Practice for Coding Interviews and Software Careers."
        />
        <meta
          name="keywords"
          content="dsa course in pune, data structures and algorithms training in pune, data structures and algorithms classes in pune, data structure training in pune, dsa classes in pune, data structures and algorithms course in pune"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/dsa-course-training-pune"
        />
        <meta
          property="og:title"
          content="Data Structures & Algorithms Course | DSA Training in Pune  "
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Gain in-demand DSA Skills in Pune! This Course Offers Expert Instruction and Real-World Practice for Coding Interviews and Software Careers."
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
          content="Data Structures & Algorithms Course | DSA Training in Pune"
          
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Gain in-demand DSA Skills in Pune! This Course Offers Expert Instruction and Real-World Practice for Coding Interviews and Software Careers."
        />
        <meta
          name="twitter:description"
          content="Gain in-demand DSA Skills in Pune! This Course Offers Expert Instruction and Real-World Practice for Coding Interviews and Software Careers."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/dsa-course-training-pune"

        />
        <meta
          name="copyright"
          content="Learnbay: Data Structures & Algorithms Course Courses Certification Training India"
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
          cityParaCont=" Accelerate a rewarding tech career with new-age knowledge and coding expertise via our DSA course in Pune. Join us to effortlessly crack top product-based interviews and craft a lucrative career in DSA. Also, earn globally recognized IBM & Microsoft credentials to exhibit your potential in the present tech age. "
          titleCourse="Full-Stack Software Developer Course In Bangalore To Achieve Your Dream Job"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstHeading="Best Data Structures and Algorithms Training in Pune"
          firstToparaImg=""
          firstTopPara="Exhibit Your Coding Deft "
          idss="YWxTtvb3x-U"
          microsSoftOnly={true}
          softwareBtnHide={true}
        />
        <SecondSection SecondSectionData={DSAPuneData[0].secondSection} />
        {/* <Testimonial
          redirectDS={false}
          Testimonial={DSAPuneData [0].testimonial}
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
              DSAPune={true}
              ProgramBot1={DSAPuneData[0].ProgramBot1}
              ProgramBot2={DSAPuneData[0].ProgramBot2}
              ProgramBot3={DSAPuneData[0].ProgramBot3}
              ProgramHead4={DSAPuneData[0].ProgramHead4}
              ProgramBot4={DSAPuneData[0].ProgramBot4}
              ProgramHead5={DSAPuneData[0].ProgramHead5}
              ProgramBot5={DSAPuneData[0].ProgramBot5}
              ProgramHead6={DSAPuneData[0].ProgramHead6}
              ProgramBot6={DSAPuneData[0].ProgramBot6}
              ProgramHead7={DSAPuneData[0].ProgramHead7}
              ProgramBot8={DSAPuneData[0].ProgramBot8}
              ProgramHead8={DSAPuneData[0].ProgramHead8}
              ProgramHead9={DSAPuneData[0].ProgramHead9}
              ProgramHead10={DSAPuneData[0].ProgramHead10}
              ProgramHead11={DSAPuneData[0].ProgramHead11}
              ProgramHead12={DSAPuneData[0].ProgramHead12}
              ProgramHead13={DSAPuneData[0].ProgramHead13}
              ProgramBot9={DSAPuneData[0].ProgramBot9}
              DomainHead1={DSAPuneData[0].DomainHead1}
              DomainBot1={DSAPuneData[0].DomainBot1}
              DomainHead2={DSAPuneData[0].DomainHead2}
              DomainHead30={DSAPuneData[0].DomainHead30}
              DomainHead4={DSAPuneData[0].DomainHead4}
              DomainHead5={DSAPuneData[0].DomainHead5}
              DomainHead6={DSAPuneData[0].DomainHead6}
              DomainHead7={DSAPuneData[0].DomainHead7}
              DomainBot2={DSAPuneData[0].DomainBot2}
              DomainBot3={DSAPuneData[0].DomainBot3}
              DomainList1={DSAPuneData[0].DomainList1}
              DomainList2={DSAPuneData[0].DomainList2}
              DomainList3={DSAPuneData[0].DomainList3}
              DomainList4={DSAPuneData[0].DomainList4}
              DomainList5={DSAPuneData[0].DomainList5}
              DomainList6={DSAPuneData[0].DomainList6}
              DomainList7={DSAPuneData[0].DomainList7}
              DomainList8={DSAPuneData[0].DomainList8}
              DomainList9={DSAPuneData[0].DomainList9}
              DomainList10={DSAPuneData[0].DomainList10}
              Domainlink1={DSAPuneData[0].Domainlink1}
              Domainlink2={DSAPuneData[0].Domainlink2}
              Domainlink3={DSAPuneData[0].Domainlink3}
              Domainlink4={DSAPuneData[0].Domainlink4}
              Domainlink5={DSAPuneData[0].Domainlink5}
              Domainlink6={DSAPuneData[0].Domainlink6}
              Domainlink7={DSAPuneData[0].Domainlink7}
              Domainlink8={DSAPuneData[0].Domainlink8}
              Domainlink9={DSAPuneData[0].Domainlink9}
              Domainlink10={DSAPuneData[0].Domainlink10}
              CertificationHead1={DSAPuneData[0].CertificationHead1}
              CertificationBot1={DSAPuneData[0].CertificationBot1}
              src={DSAPuneData[0].src}
              ModuleHead1={DSAPuneData[0].ModuleHead1}
              ModuleBot1={DSAPuneData[0].ModuleBot1}
              ModuleHead2={DSAPuneData[0].Head2}
              ModuleBot3={DSAPuneData[0].ModuleBot3}
              ModuleBot2={DSAPuneData[0].ModuleBot2}
              syllabush1={DSAPuneData[0].syllabush1}
              syllabusb1={DSAPuneData[0].syllabusb1}
              SyllabusBotlist11={DSAPuneData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSAPuneData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSAPuneData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSAPuneData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSAPuneData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSAPuneData[0].SyllabusBotlist16}
              syllabush2={DSAPuneData[0].syllabush2}
              syllabusb2={DSAPuneData[0].syllabusb2}
              SyllabusBotlist21={DSAPuneData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSAPuneData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSAPuneData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSAPuneData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSAPuneData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSAPuneData[0].SyllabusBotlist26}
              syllabush3={DSAPuneData[0].syllabush3}
              syllabusb3={DSAPuneData[0].syllabusb3}
              SyllabusBotlist31={DSAPuneData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSAPuneData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSAPuneData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSAPuneData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSAPuneData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSAPuneData[0].SyllabusBotlist36}
              syllabush4={DSAPuneData[0].syllabush4}
              syllabusb4={DSAPuneData[0].syllabusb4}
              SyllabusBotlist41={DSAPuneData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSAPuneData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSAPuneData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSAPuneData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSAPuneData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSAPuneData[0].SyllabusBotlist46}
              syllabussrc={DSAPuneData[0].syllabussrc}
              JobHead1={DSAPuneData[0].JobHead1}
              JobBot1={DSAPuneData[0].JobBot1}
              JobBot2={DSAPuneData[0].JobBot2}
              JobBot5={DSAPuneData[0].JobBot5}
              JobHead2={DSAPuneData[0].JobHead2}
              JobBot3={DSAPuneData[0].JobBot3}
              JobBot4={DSAPuneData[0].JobBot4}
              JobBot6={DSAPuneData[0].JobBot6}
              JobBot7={DSAPuneData[0].JobBot7}
              JobBot8={DSAPuneData[0].JobBot8}
              JobBot9={DSAPuneData[0].JobBot9}
              JobBot11={DSAPuneData[0].JobBot11}
              ProjectsBot1={DSAPuneData[0].ProjectsBot1}
              ProjectsBot2={DSAPuneData[0].ProjectsBot2}
              src1={DSAPuneData[0].src1}
              ProjectsH1={DSAPuneData[0].ProjectsH1}
              Projectsp1={DSAPuneData[0].Projectsp1}
              src2={DSAPuneData[0].src2}
              alt2={DSAPuneData[0].alt2}
              alt3={DSAPuneData[0].alt3}
              alt4={DSAPuneData[0].alt4}
              alt5={DSAPuneData[0].alt5}
              ProjectsH2={DSAPuneData[0].ProjectsH2}
              Projectsp2={DSAPuneData[0].Projectsp2}
              src3={DSAPuneData[0].src3}
              ProjectsH3={DSAPuneData[0].ProjectsH3}
              Projectsp3={DSAPuneData[0].Projectsp3}
              src4={DSAPuneData[0].src4}
              ProjectsH4={DSAPuneData[0].ProjectsH4}
              Projectsp4={DSAPuneData[0].Projectsp4}
              AlumniBot1={DSAPuneData[0].AlumniBot1}
              Asrc1={DSAPuneData[0].Asrc1}
              AlumniH1={DSAPuneData[0].AlumniH1}
              Alumnip1={DSAPuneData[0].Alumnip1}
              Asrc2={DSAPuneData[0].Asrc2}
              AlumniH2={DSAPuneData[0].AlumniH2}
              Alumnip2={DSAPuneData[0].Alumnip2}
              Asrc3={DSAPuneData[0].Asrc3}
              AlumniH3={DSAPuneData[0].AlumniH3}
              Alumnip3={DSAPuneData[0].Alumnip3}
              Asrc4={DSAPuneData[0].Asrc4}
              AlumniH4={DSAPuneData[0].AlumniH4}
              Alumnip4={DSAPuneData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSAPuneData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DSAPuneData[0].CityTextB}
          CityText={DSAPuneData[0].CityText}
          CityTextLB={DSAPuneData[0].CityTextLB}
          CityTextL={DSAPuneData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
