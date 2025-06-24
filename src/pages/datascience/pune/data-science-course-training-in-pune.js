import { DSPuneSchema } from "@/Data/Schema/DSPuneSchema";
import Navbar from "@/components/Global/Navbar/Navbar";
import Realstory from "@/components/Home/Realstory/Realstory";
import Map from "@/components/Seo/Maps/Maps";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSPuneCourseData } from "../../../CityData/Pune/dataScienceCourseTrainingInPune";
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
        <title>Best Data Science Course Training in Pune</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay's Proven GenAI-Rich Data Science Course In Pune Has Escalated Competitive Success With 100% Placement Assistance. Join Now!"
        />
        <meta
          name="keywords"
          content="data science online course, data science certification in pune, data science course in india, data science course in pune, data science training in pune, data science courses, data science courses in pune, data science course, data science training, data science institute, data science certification,"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/pune/data-science-course-training-in-pune"
        />
        <meta
          property="og:title"
          content="Data Science Course in pune | Data Science Training in pune"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Learnbay's Proven GenAI-Rich Data Science Course In Pune Has Escalated Competitive Success With 100% Placement Assistance. Join Now!"
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Data Science Course in pune | Data Science Training in pune"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Learnbay's Proven GenAI-Rich Data Science Course In Pune Has Escalated Competitive Success With 100% Placement Assistance. Join Now!"
        />
        <meta
          name="twitter:description"
          content="Learnbay's Proven GenAI-Rich Data Science Course In Pune Has Escalated Competitive Success With 100% Placement Assistance. Join Now!"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/pune/data-science-course-training-in-pune"
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
          content="https://www.learnbay.co/data-science-course-training-in-pune"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in Pune"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/data-science-course-training-in-pune"
        />
        <meta
          property="og:title"
          content="Data Science Course Pune | Data Scientist Course Pune | Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Learnbay's Proven GenAI-Rich Data Science Course In Pune Has Escalated Competitive Success With 100% Placement Assistance. Join Now!"
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <meta property="og:image:height" content="240" />
        <meta property="og:image:width" content="360" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Data Science Course Pune | Data Scientist Course Pune | Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Learnbay's Proven GenAI-Rich Data Science Course In Pune Has Escalated Competitive Success With 100% Placement Assistance. Join Now!"
        />
        <meta
          name="twitter:description"
          content="Learnbay's Proven GenAI-Rich Data Science Course In Pune Has Escalated Competitive Success With 100% Placement Assistance. Join Now!"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        ></meta>
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "name": "Learnbay - Data Analytics, Data Data Science Course in Pune",
  "description": "Are you searching for the best data science courses in Pune? Learnbay is providing the best online data science course training in Pune.",
  "url": "https://www.learnbay.co/datascience/pune/data-science-course-training-in-pune",
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "office no. 408, 4th floor, City Space, opposite to Fiserv, Viman Nagar",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411014",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.801159281162093,
    "longitude": 73.86267542806505
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
  "areaServed": "Bangalore",
  "paymentAccepted": "Cash, Credit Card, Debit Card, EMI"
  },
  "sameAs": [
      "https://www.facebook.com/learnbay/",
                "https://twitter.com/Learnbay",
                "https://www.instagram.com/learnbayofficial/",
                "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
                "https://www.linkedin.com/company/learnbay/"
  ]
             
              
} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Learnbay - Data Analytics, Data Data Science Course in Pune",
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
             
              
} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(DSPuneSchema),
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
          idss="-XjsfU8-bK8"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Data Science Courses in Pune"
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont=" Acquire the weight of an experienced candidate even at your first data science job. Get Industry-accredited training from the best Data Science courses in Pune. This course will help you to capitalize on your domain expertise by utilizing your existing domain knowledge in the data science field via fresh industrial capstones."
        />
        <SecondSection SecondSectionData={DSPuneCourseData[0].secondSection} />
        <Realstory />
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
              cityTextDSPune={true}
              ProgramBot1={DSPuneCourseData[0].ProgramBot1}
              ProgramHead3={DSPuneCourseData[0].ProgramHead3}
              ProgramBot3={DSPuneCourseData[0].ProgramBot3}
              ProgramBot31={DSPuneCourseData[0].ProgramBot31}
              ProgramBot4={DSPuneCourseData[0].ProgramBot4}
              ProgramBot5={DSPuneCourseData[0].ProgramBot5}
              ProgramBot6={DSPuneCourseData[0].ProgramBot6}
              Courselink1={DSPuneCourseData[0].Courselink1}
              Courselink2={DSPuneCourseData[0].Courselink2}
              Courselink3={DSPuneCourseData[0].Courselink3}
              Courselink4={DSPuneCourseData[0].Courselink4}
              Courselink5={DSPuneCourseData[0].Courselink5}
              Course1={DSPuneCourseData[0].Course1}
              Course2={DSPuneCourseData[0].Course2}
              Course3={DSPuneCourseData[0].Course3}
              Course4={DSPuneCourseData[0].Course4}
              Course5={DSPuneCourseData[0].Course5}
              DomainHead1={DSPuneCourseData[0].DomainHead1}
              DomainBot1={DSPuneCourseData[0].DomainBot1}
              DomainBot2={DSPuneCourseData[0].DomainBot2}
              DomainBot3={DSPuneCourseData[0].DomainBot3}
              DomainList1={DSPuneCourseData[0].DomainList1}
              DomainList2={DSPuneCourseData[0].DomainList2}
              DomainList3={DSPuneCourseData[0].DomainList3}
              DomainList4={DSPuneCourseData[0].DomainList4}
              DomainList5={DSPuneCourseData[0].DomainList5}
              DomainList6={DSPuneCourseData[0].DomainList6}
              DomainList7={DSPuneCourseData[0].DomainList7}
              DomainList8={DSPuneCourseData[0].DomainList8}
              DomainList9={DSPuneCourseData[0].DomainList9}
              DomainList10={DSPuneCourseData[0].DomainList10}
              Domainlink1={DSPuneCourseData[0].Domainlink1}
              Domainlink2={DSPuneCourseData[0].Domainlink2}
              Domainlink3={DSPuneCourseData[0].Domainlink3}
              Domainlink4={DSPuneCourseData[0].Domainlink4}
              Domainlink5={DSPuneCourseData[0].Domainlink5}
              Domainlink6={DSPuneCourseData[0].Domainlink6}
              Domainlink7={DSPuneCourseData[0].Domainlink7}
              Domainlink8={DSPuneCourseData[0].Domainlink8}
              Domainlink9={DSPuneCourseData[0].Domainlink9}
              Domainlink10={DSPuneCourseData[0].Domainlink10}
              CertificationBot1={DSPuneCourseData[0].CertificationBot1}
              src={DSPuneCourseData[0].src}
              src22={DSPuneCourseData[0].src22}
              src33={DSPuneCourseData[0].src33}
              alt2={DSPuneCourseData[0].alt2}
              alt3={DSPuneCourseData[0].alt3}
              alt4={DSPuneCourseData[0].alt4}
              alt5={DSPuneCourseData[0].alt5}
              ModuleBot1={DSPuneCourseData[0].ModuleBot1}
              ModuleBot2={DSPuneCourseData[0].ModuleBot2}
              syllabush1={DSPuneCourseData[0].syllabush1}
              syllabusb1={DSPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={DSPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSPuneCourseData[0].SyllabusBotlist16}
              syllabush2={DSPuneCourseData[0].syllabush2}
              syllabusb2={DSPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={DSPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSPuneCourseData[0].SyllabusBotlist26}
              syllabush3={DSPuneCourseData[0].syllabush3}
              syllabusb3={DSPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={DSPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSPuneCourseData[0].SyllabusBotlist36}
              syllabush4={DSPuneCourseData[0].syllabush4}
              syllabusb4={DSPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={DSPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={DSPuneCourseData[0].syllabussrc}
              JobHead1={DSPuneCourseData[0].JobHead1}
              JobBot1={DSPuneCourseData[0].JobBot1}
              JobHead2={DSPuneCourseData[0].JobHead2}
              JobBot3={DSPuneCourseData[0].JobBot3}
              ProjectsBot1={DSPuneCourseData[0].ProjectsBot1}
              ProjectsBot2={DSPuneCourseData[0].ProjectsBot2}
              src1={DSPuneCourseData[0].src1}
              ProjectsH1={DSPuneCourseData[0].ProjectsH1}
              Projectsp1={DSPuneCourseData[0].Projectsp1}
              src2={DSPuneCourseData[0].src2}
              ProjectsH2={DSPuneCourseData[0].ProjectsH2}
              Projectsp2={DSPuneCourseData[0].Projectsp2}
              src3={DSPuneCourseData[0].src3}
              ProjectsH3={DSPuneCourseData[0].ProjectsH3}
              Projectsp3={DSPuneCourseData[0].Projectsp3}
              src4={DSPuneCourseData[0].src4}
              ProjectsH4={DSPuneCourseData[0].ProjectsH4}
              Projectsp4={DSPuneCourseData[0].Projectsp4}
              AlumniBot1={DSPuneCourseData[0].AlumniBot1}
              Asrc1={DSPuneCourseData[0].Asrc1}
              AlumniH1={DSPuneCourseData[0].AlumniH1}
              Alumnip1={DSPuneCourseData[0].Alumnip1}
              Asrc2={DSPuneCourseData[0].Asrc2}
              AlumniH2={DSPuneCourseData[0].AlumniH2}
              Alumnip2={DSPuneCourseData[0].Alumnip2}
              Asrc3={DSPuneCourseData[0].Asrc3}
              AlumniH3={DSPuneCourseData[0].AlumniH3}
              Alumnip3={DSPuneCourseData[0].Alumnip3}
              Asrc4={DSPuneCourseData[0].Asrc4}
              AlumniH4={DSPuneCourseData[0].AlumniH4}
              Alumnip4={DSPuneCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSPuneCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <Map PuneMap={true} />
        <CityText
          CityTextB={DSPuneCourseData[0].CityTextB}
          CityText={DSPuneCourseData[0].CityText}
          CityTextLB={DSPuneCourseData[0].CityTextLB}
          CityTextL={DSPuneCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
