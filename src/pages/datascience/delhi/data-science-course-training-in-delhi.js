import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSDelhiCourseData } from "../../../CityData/Delhi/DataScienceCourseTrainingDelhiData";
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
        <title>Data Science Course in Delhi With IBM Certification</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Advance Your Career With Learnbay's Data Science Course In Delhi. Get Dual Certifications, Updated Curriculum, And Hands-On Project Experience. Join Now!"
        />
        <meta
          name="keywords"
          content="data science course in Delhi, data science training in Delhi, data science institute in Delhi, best data science institute in Delhi, data scientist course in Delhi,data scientist certification in Delhi, data science training institute in Delhi, advanced data science course in Delhi, data science course with Placement Assistance, data science course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/delhi/data-science-course-training-in-delhi"
        />
        <meta
          property="og:title"
          content="Data Science Course in Delhi | Data Science Training in Delhi"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Advance Your Career With Learnbay's Data Science Course In Delhi. Get Dual Certifications, Updated Curriculum, And Hands-On Project Experience. Join Now!"
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
          content="Data Science Course in Delhi | Data Science Training in Delhi"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Advance Your Career With Learnbay's Data Science Course In Delhi. Get Dual Certifications, Updated Curriculum, And Hands-On Project Experience. Join Now!"
        />
        <meta
          name="twitter:description"
          content="Advance Your Career With Learnbay's Data Science Course In Delhi. Get Dual Certifications, Updated Curriculum, And Hands-On Project Experience. Join Now!"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/delhi/data-science-course-training-in-delhi"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "name": "Learnbay - Data Science Course in Delhi",
  "description": "Learnbay Offers Quality Data Science Training in Dubai with Flexible Scheduling, Hands-on Projects and One-To-One Mentorship. Sign-up Now to Master Data Science.",
  "url": "https://www.learnbay.co/datascience/dubai/data-science-course-training-in-delhi",
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Business Centre, Arunachal Building, 6th floor, Barakhamba Road",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.62912828688559,
    "longitude":77.22708624314137
  },
  "telephone": "(+91) 77956 87988",
  "email": "contacts@learnbay.co",
  "openingHoursSpecification": [
        {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "10:00",
        "closes": "18:00"
      },
       {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "15:00"
     }
  ],
  "priceRange": "₹ 1,25,000 + 18% GST",
  "servesCuisine": "Data Science Education",
  "areaServed": "Delhi",
  "paymentAccepted": "Cash, Credit Card, Debit Card, EMI"
  },
  "sameAs": [
      "https://www.facebook.com/learnbay/",
                "https://twitter.com/Learnbay",
                "https://www.instagram.com/learnbayofficial/",
                "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
                "https://www.linkedin.com/company/learnbay/"
  ]
    }`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Data Science Course in Delhi | Data Science Training in Delhi - Learnbay",
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
  "brand": {
    "@type": "Brand",
    "name": "Learnbay"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "12693"
  }
    }`,
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
          firstToparaImg=" - Enroll Now"
          firstHeading="Data Science Course in Delhi"
          firstTopPara="Foundational and Advance Job-ready Program"
          cityParaCont="Enhance your Data Science career with our comprehensive Data Science course in Delhi with IBM Certification. Our advanced Data Science training in Delhi will help you to make experts in Python, Power BI, etc. You will get training from industry leaders and masters. to gain the most in-demand data science and AI skills."
        />
        <SecondSection SecondSectionData={DSDelhiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={DSDelhiCourseData[0].testimonial}
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
        WeekdayDate="23rd Feb"
        WeekendDate="14th Feb"
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
              cityTextDSDelhi={true}
              DomainHead1={DSDelhiCourseData[0].DomainHead1}
              DomainBot1={DSDelhiCourseData[0].DomainBot1}
              DomainBot2={DSDelhiCourseData[0].DomainBot2}
              DomainBot3={DSDelhiCourseData[0].DomainBot3}
              DomainList1={DSDelhiCourseData[0].DomainList1}
              DomainList2={DSDelhiCourseData[0].DomainList2}
              DomainList3={DSDelhiCourseData[0].DomainList3}
              DomainList4={DSDelhiCourseData[0].DomainList4}
              DomainList5={DSDelhiCourseData[0].DomainList5}
              DomainList6={DSDelhiCourseData[0].DomainList6}
              DomainList7={DSDelhiCourseData[0].DomainList7}
              DomainList8={DSDelhiCourseData[0].DomainList8}
              DomainList9={DSDelhiCourseData[0].DomainList9}
              DomainList10={DSDelhiCourseData[0].DomainList10}
              Domainlink1={DSDelhiCourseData[0].Domainlink1}
              Domainlink2={DSDelhiCourseData[0].Domainlink2}
              Domainlink3={DSDelhiCourseData[0].Domainlink3}
              Domainlink4={DSDelhiCourseData[0].Domainlink4}
              Domainlink5={DSDelhiCourseData[0].Domainlink5}
              Domainlink6={DSDelhiCourseData[0].Domainlink6}
              Domainlink7={DSDelhiCourseData[0].Domainlink7}
              Domainlink8={DSDelhiCourseData[0].Domainlink8}
              Domainlink9={DSDelhiCourseData[0].Domainlink9}
              Domainlink10={DSDelhiCourseData[0].Domainlink10}
              CertificationHead1={DSDelhiCourseData[0].CertificationHead1}
              CertificationBot1={DSDelhiCourseData[0].CertificationBot1}
              CertificationBot2={DSDelhiCourseData[0].CertificationBot2}
              src={DSDelhiCourseData[0].src}
              src22={DSDelhiCourseData[0].src22}
              src33={DSDelhiCourseData[0].src33}
              ModuleHead1={DSDelhiCourseData[0].ModuleHead1}
              ModuleBot1={DSDelhiCourseData[0].ModuleBot1}
              ModuleBot2={DSDelhiCourseData[0].ModuleBot2}
              ModuleBot3={DSDelhiCourseData[0].ModuleBot3}
              ModuleHead3={DSDelhiCourseData[0].ModuleHead3}
              ModuleBot4={DSDelhiCourseData[0].ModuleBot4}
              ModuleHead2={DSDelhiCourseData[0].ModuleHead2}
              syllabush1={DSDelhiCourseData[0].syllabush1}
              syllabusb1={DSDelhiCourseData[0].syllabusb1}
              SyllabusBotlist11={DSDelhiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSDelhiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSDelhiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSDelhiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSDelhiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSDelhiCourseData[0].SyllabusBotlist16}
              syllabush2={DSDelhiCourseData[0].syllabush2}
              syllabusb2={DSDelhiCourseData[0].syllabusb2}
              SyllabusBotlist21={DSDelhiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSDelhiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSDelhiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSDelhiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSDelhiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSDelhiCourseData[0].SyllabusBotlist26}
              syllabush3={DSDelhiCourseData[0].syllabush3}
              syllabusb3={DSDelhiCourseData[0].syllabusb3}
              SyllabusBotlist31={DSDelhiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSDelhiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSDelhiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSDelhiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSDelhiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSDelhiCourseData[0].SyllabusBotlist36}
              syllabush4={DSDelhiCourseData[0].syllabush4}
              syllabusb4={DSDelhiCourseData[0].syllabusb4}
              SyllabusBotlist41={DSDelhiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSDelhiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSDelhiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSDelhiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSDelhiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSDelhiCourseData[0].SyllabusBotlist46}
              syllabussrc={DSDelhiCourseData[0].syllabussrc}
              JobHead1={DSDelhiCourseData[0].JobHead1}
              JobBot1={DSDelhiCourseData[0].JobBot1}
              JobBot2={DSDelhiCourseData[0].JobBot2}
              JobBot3={DSDelhiCourseData[0].JobBot3}
              JobHead2={DSDelhiCourseData[0].JobHead2}
              JobBot5={DSDelhiCourseData[0].JobBot5}
              JobBot4={DSDelhiCourseData[0].JobBot4}
              JobBot6={DSDelhiCourseData[0].JobBot6}
              ProjectsBot1={DSDelhiCourseData[0].ProjectsBot1}
              ProjectsBot2={DSDelhiCourseData[0].ProjectsBot2}
              src1={DSDelhiCourseData[0].src1}
              ProjectsHead1={DSDelhiCourseData[0].ProjectsHead1}
              ProjectsH1={DSDelhiCourseData[0].ProjectsH1}
              Projectsp1={DSDelhiCourseData[0].Projectsp1}
              src2={DSDelhiCourseData[0].src2}
              ProjectsH2={DSDelhiCourseData[0].ProjectsH2}
              Projectsp2={DSDelhiCourseData[0].Projectsp2}
              src3={DSDelhiCourseData[0].src3}
              ProjectsH3={DSDelhiCourseData[0].ProjectsH3}
              Projectsp3={DSDelhiCourseData[0].Projectsp3}
              src4={DSDelhiCourseData[0].src4}
              ProjectsH4={DSDelhiCourseData[0].ProjectsH4}
              Projectsp4={DSDelhiCourseData[0].Projectsp4}
              AlumniBot1={DSDelhiCourseData[0].AlumniBot1}
              Asrc1={DSDelhiCourseData[0].Asrc1}
              AlumniH1={DSDelhiCourseData[0].AlumniH1}
              Alumnip1={DSDelhiCourseData[0].Alumnip1}
              Asrc2={DSDelhiCourseData[0].Asrc2}
              AlumniH2={DSDelhiCourseData[0].AlumniH2}
              Alumnip2={DSDelhiCourseData[0].Alumnip2}
              Asrc3={DSDelhiCourseData[0].Asrc3}
              AlumniH3={DSDelhiCourseData[0].AlumniH3}
              Alumnip3={DSDelhiCourseData[0].Alumnip3}
              Asrc4={DSDelhiCourseData[0].Asrc4}
              AlumniH4={DSDelhiCourseData[0].AlumniH4}
              Alumnip4={DSDelhiCourseData[0].Alumnip4}
              alt1={DSDelhiCourseData[0].alt1}
              alt2={DSDelhiCourseData[0].alt2}
              alt3={DSDelhiCourseData[0].alt3}
              alt4={DSDelhiCourseData[0].alt4}
              alt5={DSDelhiCourseData[0].alt5}
              alt6={DSDelhiCourseData[0].alt6}
              alt7={DSDelhiCourseData[0].alt7}
              alt8={DSDelhiCourseData[0].alt8}
              alt9={DSDelhiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSDelhiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DSDelhiCourseData[0].CityTextB}
          CityText={DSDelhiCourseData[0].CityText}
          CityTextLB={DSDelhiCourseData[0].CityTextLB}
          CityTextL={DSDelhiCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
