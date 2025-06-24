import { CloudPune } from "@/Data/Schema/CloudPune";
import Map from "@/components/Seo/Maps/Maps";
import dynamic from "next/dynamic";
import Head from "next/head";
import { CloudComputingTrainingInPune } from "../../CityData/Bangalore/CloudComputingTrainingInPune";
import Footer from "../../components/Global/Footer/Footer";
import Navbar from "../../components/Global/Navbar/Navbar";
import FeeSection from "../../components/Seo/FeeSection/FeeSection";
import YoutubeVideo from "../../components/Seo/YoutubeVideo/YoutubeVideo";
import styles from "../../styles/Home.module.css";
const FirstSection = dynamic(() =>
  import("../../components/Seo/FirstSection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("../../components/Seo/SecondSection/SecondSection")
);
const SeventhSection = dynamic(() =>
  import("../../components/Seo/SeventhSection/SeventhSection")
);
const CityText = dynamic(() =>
  import("../../components/Seo/CityText/CityText")
);
const CitiesLeft = dynamic(() =>
  import("../../components/Seo/CitiesLeft/CitiesLeftDomain")
);
const CloudDevopstestimonials = dynamic(() =>
  import(
    "../../components/CoursePage/cloud&devops/CloudDevopstestimonial/Clouddevoptestimonials.js"
  )
);
const CitiesRight = dynamic(() =>
  import("../../components/Seo/CitiesRight/CitiesRightdomain")
);
const FAQNew = dynamic(() => import("../../components/Seo/FAQNew/FAQNew"));

export default function Home() {
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Cloud-and-Devops-Certifications.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Cloud Computing Course in Pune - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join Learnbay's Cloud Computing Course in Pune and Boost Your Career. Learn Core skills of Cloud Computing Modules with Expert Instructors. Start Your Cloud Career Today."
        />
        <meta
          name="keywords"
          content="cloud computing course in pune, cloud computing classes in pune, cloud computing course in pune fees, best cloud computing courses in pune, cloud computing course fees in pune, best cloud computing training institute in pune, cloud computing institute in pune, best institute for cloud computing in pune, cloud computing training institute in pune"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cloud&devops/online-cloud-computing-course-pune"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/cloud&devops/online-cloud-computing-course-pune"
        />
        <meta
          property="og:title"
          content="Online Cloud Computing Course in Pune - Learnbay"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Join Learnbay's Cloud Computing Course in Pune and Boost Your Career. Learn Core skills of Cloud Computing Modules with Expert Instructors. Start Your Cloud Career Today."
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
          content="Online Cloud Computing Course in Pune - Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Join Learnbay's Cloud Computing Course in Pune and Boost Your Career. Learn Core skills of Cloud Computing Modules with Expert Instructors. Start Your Cloud Career Today."
        />
        <meta
          name="twitter:description"
          content="Join Learnbay's Cloud Computing Course in Pune and Boost Your Career. Learn Core skills of Cloud Computing Modules with Expert Instructors. Start Your Cloud Career Today."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Learnbay - Cloud Computing Course in Pune",
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
    "ratingCount": "10500"
  }
              }
             
              
} `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(CloudPune),
          }}
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScience={true} interstedInHide={true} />
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          titleCourse="Best Online Cloud Computing Course in Pune"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
          dataScience={true}
          interstedInHide={true}
          brochurePdf={pdfUrl}
          idss="gaQYhVPCudQ"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Online Cloud Computing Course in Pune"
          firstTopPara="Expand beyond technology"
          cityParaCont="Explore our all-inclusive cloud computing course in Pune and exalt your skills to build a modern tech career. Learnbay’s ‘Cloud Computing Certification Program’ in Pune is here to help you target your dream roles and attain success. Join us to boost your tech-driven skills and earn IBM & Microsoft credentials to build a globally recognized career."
        />
        <SecondSection
          SecondSectionData={CloudComputingTrainingInPune[0].secondSection}
        />
        <CloudDevopstestimonials />
        <div className={styles.cityFee}>
          <FeeSection
            Fee=" ₹ 80,000"
            FeeEmi="₹ 5,244/month"
            weekdaybatch="Weekend Batch"
            weekendbatch="Weekday Batch"
            weekday="SAT - SUN"
            weekend="MON - FRI"
            WeekdayDate="Oct 27th"
            WeekendDate="Nov 8th"
            WeekendTime="8:00 PM - 10:00 PM"
            WeekdayTime="9:30 AM - 1 PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            brochurePdf={pdfUrl}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹ 80,000"
            monthlyPayment1="₹ 5,244"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹ 80,000"
            monthlyPayment2="₹ 7,866"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextCloudPune={true}
              Programvideo={[<br />, <YoutubeVideo />]}
              CertificationBot1={
                CloudComputingTrainingInPune[0].CertificationBot1
              }
              CertificationBot2={
                CloudComputingTrainingInPune[0].CertificationBot2
              }
              CertificationBot3={
                CloudComputingTrainingInPune[0].CertificationBot3
              }
              CertificationBot4={
                CloudComputingTrainingInPune[0].CertificationBot4
              }
              src={CloudComputingTrainingInPune[0].src}
              src22={CloudComputingTrainingInPune[0].src22}
              src33={CloudComputingTrainingInPune[0].src33}

              ModuleHead1={CloudComputingTrainingInPune[0].ModuleHead1}
              ModuleBot1={CloudComputingTrainingInPune[0].ModuleBot1}
              ModuleBot2={CloudComputingTrainingInPune[0].ModuleBot2}
              ModuleBot3={CloudComputingTrainingInPune[0].ModuleBot3}
              ulModule={true}
              list1={CloudComputingTrainingInPune[0].list1}
              list2={CloudComputingTrainingInPune[0].list2}
              list3={CloudComputingTrainingInPune[0].list3}
              list4={CloudComputingTrainingInPune[0].list4}
              list5={CloudComputingTrainingInPune[0].list5}
              list6={CloudComputingTrainingInPune[0].list6}

              syllabush1={CloudComputingTrainingInPune[0].syllabush1}
              syllabusb1={CloudComputingTrainingInPune[0].syllabusb1}
              SyllabusBotlist11={
                CloudComputingTrainingInPune[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                CloudComputingTrainingInPune[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                CloudComputingTrainingInPune[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                CloudComputingTrainingInPune[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                CloudComputingTrainingInPune[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                CloudComputingTrainingInPune[0].SyllabusBotlist16
              }
              syllabush2={CloudComputingTrainingInPune[0].syllabush2}
              syllabusb2={CloudComputingTrainingInPune[0].syllabusb2}
              SyllabusBotlist21={
                CloudComputingTrainingInPune[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                CloudComputingTrainingInPune[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                CloudComputingTrainingInPune[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                CloudComputingTrainingInPune[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                CloudComputingTrainingInPune[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                CloudComputingTrainingInPune[0].SyllabusBotlist26
              }
              syllabush3={CloudComputingTrainingInPune[0].syllabush3}
              syllabusb3={CloudComputingTrainingInPune[0].syllabusb3}
              SyllabusBotlist31={
                CloudComputingTrainingInPune[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                CloudComputingTrainingInPune[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                CloudComputingTrainingInPune[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                CloudComputingTrainingInPune[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                CloudComputingTrainingInPune[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                CloudComputingTrainingInPune[0].SyllabusBotlist36
              }
              syllabush4={CloudComputingTrainingInPune[0].syllabush4}
              syllabusb4={CloudComputingTrainingInPune[0].syllabusb4}
              SyllabusBotlist41={
                CloudComputingTrainingInPune[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                CloudComputingTrainingInPune[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                CloudComputingTrainingInPune[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                CloudComputingTrainingInPune[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                CloudComputingTrainingInPune[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                CloudComputingTrainingInPune[0].SyllabusBotlist46
              }
              syllabussrc={CloudComputingTrainingInPune[0].syllabussrc}

              JobHead1={CloudComputingTrainingInPune[0].JobHead1}
              JobBot1={CloudComputingTrainingInPune[0].JobBot1}
              JobBot2={CloudComputingTrainingInPune[0].JobBot2}
              JobBot21={CloudComputingTrainingInPune[0].JobBot21}
              JobHead2={CloudComputingTrainingInPune[0].JobHead2}
              JobBot4={CloudComputingTrainingInPune[0].JobBot4}
              JobBot51={CloudComputingTrainingInPune[0].JobBot51}
              JobBot6={CloudComputingTrainingInPune[0].JobBot6}
              JobHead3={CloudComputingTrainingInPune[0].JobHead3}
              JobBot7={CloudComputingTrainingInPune[0].JobBot7}
              JobHead4={CloudComputingTrainingInPune[0].JobHead4}
              JobBot8={CloudComputingTrainingInPune[0].JobBot8}
              JobBot9={CloudComputingTrainingInPune[0].JobBot9}
              JobHead6={CloudComputingTrainingInPune[0].JobHead6}
              JobHead5={CloudComputingTrainingInPune[0].JobHead5}
              JobBot11={CloudComputingTrainingInPune[0].JobBot11}
              JobBot12={CloudComputingTrainingInPune[0].JobBot12}
              JobBot13={CloudComputingTrainingInPune[0].JobBot13}
              JobBot14={CloudComputingTrainingInPune[0].JobBot14}
              JobBot15={CloudComputingTrainingInPune[0].JobBot15}
              JobBot16={CloudComputingTrainingInPune[0].JobBot16}
              JobBot17={CloudComputingTrainingInPune[0].JobBot17}
              JobBot18={CloudComputingTrainingInPune[0].JobBot18}
              JobBot19={CloudComputingTrainingInPune[0].JobBot19}
              JobBotA={CloudComputingTrainingInPune[0].JobBotA}
              JobBotB={CloudComputingTrainingInPune[0].JobBotB}
              JobBotC={CloudComputingTrainingInPune[0].JobBotC}
              JobBotD={CloudComputingTrainingInPune[0].JobBotD}
              ProjectsHead1={CloudComputingTrainingInPune[0].ProjectsHead1}
              ProjectsBot1={CloudComputingTrainingInPune[0].ProjectsBot1}
              ProjectsBot2={CloudComputingTrainingInPune[0].ProjectsBot2}
              ProjectsBot3={CloudComputingTrainingInPune[0].ProjectsBot3}
              ProjectsBot4={CloudComputingTrainingInPune[0].ProjectsBot4}
              ProjectsBot5={CloudComputingTrainingInPune[0].ProjectsBot5}
              src1={CloudComputingTrainingInPune[0].src1}
              ProjectsH1={CloudComputingTrainingInPune[0].ProjectsH1}
              Projectsp1={CloudComputingTrainingInPune[0].Projectsp1}
              src2={CloudComputingTrainingInPune[0].src2}
              ProjectsH2={CloudComputingTrainingInPune[0].ProjectsH2}
              Projectsp2={CloudComputingTrainingInPune[0].Projectsp2}
              src3={CloudComputingTrainingInPune[0].src3}
              ProjectsH3={CloudComputingTrainingInPune[0].ProjectsH3}
              Projectsp3={CloudComputingTrainingInPune[0].Projectsp3}
              src4={CloudComputingTrainingInPune[0].src4}
              ProjectsH4={CloudComputingTrainingInPune[0].ProjectsH4}
              Projectsp4={CloudComputingTrainingInPune[0].Projectsp4}

              AlumniBot1={CloudComputingTrainingInPune[0].AlumniBot1}
              AlumniBot2={CloudComputingTrainingInPune[0].AlumniBot2}
              Asrc1={CloudComputingTrainingInPune[0].Asrc1}
              AlumniH1={CloudComputingTrainingInPune[0].AlumniH1}
              Alumnip1={CloudComputingTrainingInPune[0].Alumnip1}
              Asrc2={CloudComputingTrainingInPune[0].Asrc2}
              AlumniH2={CloudComputingTrainingInPune[0].AlumniH2}
              Alumnip2={CloudComputingTrainingInPune[0].Alumnip2}
              Asrc3={CloudComputingTrainingInPune[0].Asrc3}
              AlumniH3={CloudComputingTrainingInPune[0].AlumniH3}
              Alumnip3={CloudComputingTrainingInPune[0].Alumnip3}
              Asrc4={CloudComputingTrainingInPune[0].Asrc4}
              AlumniH4={CloudComputingTrainingInPune[0].AlumniH4}
              Alumnip4={CloudComputingTrainingInPune[0].Alumnip4}
              alt1={CloudComputingTrainingInPune[0].alt1}
              alt2={CloudComputingTrainingInPune[0].alt2}
              alt3={CloudComputingTrainingInPune[0].alt3}
              alt4={CloudComputingTrainingInPune[0].alt4}
              alt5={CloudComputingTrainingInPune[0].alt5}
              alt6={CloudComputingTrainingInPune[0].alt6}
              alt7={CloudComputingTrainingInPune[0].alt7}
              alt8={CloudComputingTrainingInPune[0].alt8}
              alt9={CloudComputingTrainingInPune[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={CloudComputingTrainingInPune[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <Map PuneMap={true} />
        <CityText CityText={true} />
        <Footer />
      </main>
    </div>
  );
}
