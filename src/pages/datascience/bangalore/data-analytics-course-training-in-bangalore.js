import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DABangaloreCourseData } from "../../../../src/CityData/Bangalore/DataAnalyticsCourseTrainingBangaloreData";
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
  import("../../../components/Seo/CitiesLeft/CitiesLeftDomain")
);
const CitiesRight = dynamic(() =>
  import("../../../components/Seo/CitiesRight/CitiesRightdomain")
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Data-Analytics-Certification.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Data Analytics Course in Bangalore - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your career with Data Analytics Training in Bangalore offered by Learnbay. In associated with IBM, get the best mentorship from the industry experts. Enroll Now."
        />
        <meta
          name="keywords"
          content="Data Analytics course in Bangalore, Data Analytics training in Bangalore, Data Analytics institute in Bangalore, best Data Analytics institute in Bangalore, Data Analytics course in Bangalore, Data Analytics certification in Bangalore, Data Analytics training institute in Bangalore, advanced Data Analytics course in Bangalore, Data Analytics course with Placement Assistance, Data Analytics course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/bangalore/data-analytics-course-training-in-bangalore"
        />
        <meta
          property="og:title"
          content="Data Analytics course Training In Bangalore with Placement Assistance"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Data Analytics course in Bangalore. We are Advanced Data Analytics course Certification Training Institute in Bangalore. Data Analytics course will enhance your career."
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
          content="Data Analytics course Training In Bangalore with Placement Assistance"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data Analytics course Bangalore. We are Advanced Data Analytics course Certification Training Institute in Bangalore. Data Analytics course will enhance your career."
        />
        <meta
          name="twitter:description"
          content="Data Analytics course Bangalore. We are Advanced Data Analytics course Certification Training Institute in Bangalore. Data Analytics course will enhance your career."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/bangalore/data-analytics-course-training-in-bangalore"
        />
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training India"
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
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Analytics Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
          brochurePdf={pdfUrl}
          idss="y_0IdhFKJKM"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/data+analytics+header+image.webp"
          firstToparaImg="Course in Bangalore"
          firstHeading="Online Data Analytics"
          firstTopPara="IBM Certified Industry-paced Training"
          cityParaCont="Escalate career success metrics in today’s digital era via an industry-paced training program in Bangalore. Learnbay’s data analytics course in Bangalore will provide you with valuable and timeless data skills. Our data analytics institute in Bangalore offers a program ideal for non-tech professionals. Plus, our alliance with IBM & Microsoft is here to equip you with exciting career gains.           "
        />
        <SecondSection
          SecondSectionData={DABangaloreCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DABangaloreCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹85,000"
            FeeEmi="₹5,572/month"
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
            titleCourse="Data Analytics Certification Program"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
            brochurePdf={pdfUrl}
            // EMI POPUPDATA
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹85,000"
            monthlyPayment1="₹5,572"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹85,000"
            monthlyPayment2="₹8,358"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextJDAPune={true}
              ProgramHead1={DABangaloreCourseData[0].ProgramHead1}
              ProgramBot1={DABangaloreCourseData[0].ProgramBot1}
              ProgramBot2={DABangaloreCourseData[0].ProgramBot2}
              ProgramBot3={DABangaloreCourseData[0].ProgramBot3}
              ProgramBot4={DABangaloreCourseData[0].ProgramBot4}
              ProgramBot5={DABangaloreCourseData[0].ProgramBot5}
              ProgramBot6={DABangaloreCourseData[0].ProgramBot6}
              ProgramBot7={DABangaloreCourseData[0].ProgramBot7}
              ProgramBot8={DABangaloreCourseData[0].ProgramBot8}
              ProgramBot9={DABangaloreCourseData[0].ProgramBot9}
              ProgramBot32={DABangaloreCourseData[0].ProgramBot32}
              ProgramBot10={DABangaloreCourseData[0].ProgramBot10}
              ProgramBot11={DABangaloreCourseData[0].ProgramBot11}
              ProgramBot12={DABangaloreCourseData[0].ProgramBot12}
              ProgramHead3={DABangaloreCourseData[0].ProgramHead3}
              ProgramBot31={DABangaloreCourseData[0].ProgramBot31}
              ProgramHead4={DABangaloreCourseData[0].ProgramHead4}
              ProgramHead5={DABangaloreCourseData[0].ProgramHead5}
              CertificationHead1={DABangaloreCourseData[0].CertificationHead1}
              CertificationBot3={DABangaloreCourseData[0].CertificationBot3}
              ProgramHead6={DABangaloreCourseData[0].ProgramHead6}
              Courselink1={DABangaloreCourseData[0].Courselink1}
              Courselink2={DABangaloreCourseData[0].Courselink2}
              Courselink3={DABangaloreCourseData[0].Courselink3}
              Courselink4={DABangaloreCourseData[0].Courselink4}
              Courselink5={DABangaloreCourseData[0].Courselink5}
              Course1={DABangaloreCourseData[0].Course1}
              Course2={DABangaloreCourseData[0].Course2}
              Course3={DABangaloreCourseData[0].Course3}
              Course4={DABangaloreCourseData[0].Course4}
              Course5={DABangaloreCourseData[0].Course5}
              DomainHead1={DABangaloreCourseData[0].DomainHead1}
              DomainBot1={DABangaloreCourseData[0].DomainBot1}
              DomainBot2={DABangaloreCourseData[0].DomainBot2}
              DomainBot3={DABangaloreCourseData[0].DomainBot3}
              DomainList1={DABangaloreCourseData[0].DomainList1}
              DomainList2={DABangaloreCourseData[0].DomainList2}
              DomainList3={DABangaloreCourseData[0].DomainList3}
              DomainList4={DABangaloreCourseData[0].DomainList4}
              DomainList5={DABangaloreCourseData[0].DomainList5}
              DomainList6={DABangaloreCourseData[0].DomainList6}
              DomainList7={DABangaloreCourseData[0].DomainList7}
              DomainList8={DABangaloreCourseData[0].DomainList8}
              DomainList9={DABangaloreCourseData[0].DomainList9}
              DomainList10={DABangaloreCourseData[0].DomainList10}
              Domainlink1={DABangaloreCourseData[0].Domainlink1}
              Domainlink2={DABangaloreCourseData[0].Domainlink2}
              Domainlink3={DABangaloreCourseData[0].Domainlink3}
              Domainlink4={DABangaloreCourseData[0].Domainlink4}
              Domainlink5={DABangaloreCourseData[0].Domainlink5}
              Domainlink6={DABangaloreCourseData[0].Domainlink6}
              Domainlink7={DABangaloreCourseData[0].Domainlink7}
              Domainlink8={DABangaloreCourseData[0].Domainlink8}
              Domainlink9={DABangaloreCourseData[0].Domainlink9}
              Domainlink10={DABangaloreCourseData[0].Domainlink10}
              CertificationBot1={DABangaloreCourseData[0].CertificationBot1}
              CertificationBot2={DABangaloreCourseData[0].CertificationBot2}
              src={DABangaloreCourseData[0].src}
              src22={DABangaloreCourseData[0].src22}
              ModuleHead1={DABangaloreCourseData[0].ModuleHead1}
              ModuleBot1={DABangaloreCourseData[0].ModuleBot1}
              ModuleBot2={DABangaloreCourseData[0].ModuleBot2}
              ModuleBot3={DABangaloreCourseData[0].ModuleBot3}
              ModuleBot4={DABangaloreCourseData[0].ModuleBot4}
              syllabush1={DABangaloreCourseData[0].syllabush1}
              syllabusb1={DABangaloreCourseData[0].syllabusb1}
              SyllabusBotlist11={DABangaloreCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DABangaloreCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DABangaloreCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DABangaloreCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DABangaloreCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DABangaloreCourseData[0].SyllabusBotlist16}
              syllabush2={DABangaloreCourseData[0].syllabush2}
              syllabusb2={DABangaloreCourseData[0].syllabusb2}
              SyllabusBotlist21={DABangaloreCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DABangaloreCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DABangaloreCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DABangaloreCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DABangaloreCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DABangaloreCourseData[0].SyllabusBotlist26}
              syllabush3={DABangaloreCourseData[0].syllabush3}
              syllabusb3={DABangaloreCourseData[0].syllabusb3}
              SyllabusBotlist31={DABangaloreCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DABangaloreCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DABangaloreCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DABangaloreCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DABangaloreCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DABangaloreCourseData[0].SyllabusBotlist36}
              syllabush4={DABangaloreCourseData[0].syllabush4}
              syllabusb4={DABangaloreCourseData[0].syllabusb4}
              SyllabusBotlist41={DABangaloreCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DABangaloreCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DABangaloreCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DABangaloreCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DABangaloreCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DABangaloreCourseData[0].SyllabusBotlist46}
              syllabussrc={DABangaloreCourseData[0].syllabussrc}
              JobHead1={DABangaloreCourseData[0].JobHead1}
              JobBot1={DABangaloreCourseData[0].JobBot1}
              JobBot2={DABangaloreCourseData[0].JobBot2}
              JobBot4={DABangaloreCourseData[0].JobBot4}
              JobBot5={DABangaloreCourseData[0].JobBot5}
              JobBot7={DABangaloreCourseData[0].JobBot7}
              JobHead2={DABangaloreCourseData[0].JobHead2}
              JobHead3={DABangaloreCourseData[0].JobHead3}
              JobHead5={DABangaloreCourseData[0].JobHead5}
              JobHead4={DABangaloreCourseData[0].JobHead4}
              JobBot3={DABangaloreCourseData[0].JobBot3}
              JobBot6={DABangaloreCourseData[0].JobBot6}
              JobBot8={DABangaloreCourseData[0].JobBot8}
              JobBot9={DABangaloreCourseData[0].JobBot9}
              JobBot10={DABangaloreCourseData[0].JobBot10}
              JobBot11={DABangaloreCourseData[0].JobBot11}
              ProjectsBot1={DABangaloreCourseData[0].ProjectsBot1}
              ProjectsBot2={DABangaloreCourseData[0].ProjectsBot2}
              ProjectsBot3={DABangaloreCourseData[0].ProjectsBot3}
              src1={DABangaloreCourseData[0].src1}
              ProjectsH1={DABangaloreCourseData[0].ProjectsH1}
              Projectsp1={DABangaloreCourseData[0].Projectsp1}
              src2={DABangaloreCourseData[0].src2}
              ProjectsH2={DABangaloreCourseData[0].ProjectsH2}
              Projectsp2={DABangaloreCourseData[0].Projectsp2}
              src3={DABangaloreCourseData[0].src3}
              ProjectsH3={DABangaloreCourseData[0].ProjectsH3}
              Projectsp3={DABangaloreCourseData[0].Projectsp3}
              src4={DABangaloreCourseData[0].src4}
              ProjectsH4={DABangaloreCourseData[0].ProjectsH4}
              Projectsp4={DABangaloreCourseData[0].Projectsp4}
              AlumniBot1={DABangaloreCourseData[0].AlumniBot1}
              Asrc1={DABangaloreCourseData[0].Asrc1}
              AlumniH1={DABangaloreCourseData[0].AlumniH1}
              Alumnip1={DABangaloreCourseData[0].Alumnip1}
              Asrc2={DABangaloreCourseData[0].Asrc2}
              AlumniH2={DABangaloreCourseData[0].AlumniH2}
              Alumnip2={DABangaloreCourseData[0].Alumnip2}
              Asrc3={DABangaloreCourseData[0].Asrc3}
              AlumniH3={DABangaloreCourseData[0].AlumniH3}
              Alumnip3={DABangaloreCourseData[0].Alumnip3}
              Asrc4={DABangaloreCourseData[0].Asrc4}
              AlumniH4={DABangaloreCourseData[0].AlumniH4}
              Alumnip4={DABangaloreCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DABangaloreCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DABangaloreCourseData[0].CityTextB}
          CityText={DABangaloreCourseData[0].CityText}
          CityTextLB={DABangaloreCourseData[0].CityTextLB}
          CityTextL={DABangaloreCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
