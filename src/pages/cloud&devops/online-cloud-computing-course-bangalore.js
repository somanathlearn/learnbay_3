import { CloudBangalore } from "@/Data/Schema/CloudBangalore";
import Map from "@/components/Seo/Maps/Maps";
import dynamic from "next/dynamic";
import Head from "next/head";
import { CloudComputingTrainingInBangalore } from "../../CityData/Bangalore/CloudComputingTrainingInBangalore";
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
        <title>Online Cloud Computing Course in Bangalore - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join our online cloud computing course training in Bangalore to gain in-demand skills and accelerate your tech career. Start Learning Today."
        />
        <meta
          name="keywords"
          content="cloud computing training in bangalore, best cloud computing institute in bangalore, cloud computing course fees in bangalore, best cloud computing training institute in bangalore, best cloud computing courses in bangalore, cloud computing training institute in bangalore, best cloud training institute in bangalore, cloud training institutes in bangalore, cloud computing classes in bangalore, cloud computing training bangalore"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cloud&devops/online-cloud-computing-course-bangalore"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/cloud&devops/online-cloud-computing-course-bangalore"
        />
        <meta
          property="og:title"
          content="Online Cloud Computing Course in Bangalore - Learnbay"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Join our online cloud computing course training in Bangalore to gain in-demand skills and accelerate your tech career. Start Learning Today."
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
          content="Online Cloud Computing Course in Bangalore - Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Join our online cloud computing course training in Bangalore to gain in-demand skills and accelerate your tech career. Start Learning Today."
        />
        <meta
          name="twitter:description"
          content="Join our online cloud computing course training in Bangalore to gain in-demand skills and accelerate your tech career. Start Learning Today."
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
  "name": "Learnbay - Cloud Computing Course in Bangalore",
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
    "ratingCount": "13659"
  }
              }
             
              
} `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(CloudBangalore),
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
          titleCourse="Best Online Cloud Computing Course in Bangalore"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
          dataScience={true}
          interstedInHide={true}
          brochurePdf={pdfUrl}
          idss="gaQYhVPCudQ"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Online Cloud Computing Course in Bangalore"
          firstTopPara="Expand beyond technology"
          cityParaCont="Assemble an ambitious career and certify your tech-driven skills with an industry-specific cloud computing course in Bangalore. Learnbay’s ‘Cloud & DevOps Certification Program’ is here to lift your coding efficiency with better gains. Join us today to modernize your tech career with IBM & Microsoft certifications."
        />
        <SecondSection
          SecondSectionData={CloudComputingTrainingInBangalore[0].secondSection}
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
              cityTextCloudBangalore={true}
              Programvideo={[<br />, <YoutubeVideo />]}
              CertificationBot1={
                CloudComputingTrainingInBangalore[0].CertificationBot1
              }
              CertificationBot2={
                CloudComputingTrainingInBangalore[0].CertificationBot2
              }
              CertificationBot3={
                CloudComputingTrainingInBangalore[0].CertificationBot3
              }
              src={CloudComputingTrainingInBangalore[0].src}
              src22={CloudComputingTrainingInBangalore[0].src22}
              src33={CloudComputingTrainingInBangalore[0].src33}
              ModuleHead1={CloudComputingTrainingInBangalore[0].ModuleHead1}
              ModuleBot1={CloudComputingTrainingInBangalore[0].ModuleBot1}
              ModuleBot2={CloudComputingTrainingInBangalore[0].ModuleBot2}
              ModuleBot3={CloudComputingTrainingInBangalore[0].ModuleBot3}
              ulModule={true}
              list1={CloudComputingTrainingInBangalore[0].list1}
              list2={CloudComputingTrainingInBangalore[0].list2}
              list3={CloudComputingTrainingInBangalore[0].list3}
              list4={CloudComputingTrainingInBangalore[0].list4}
              list5={CloudComputingTrainingInBangalore[0].list5}
              list6={CloudComputingTrainingInBangalore[0].list6}
              syllabush1={CloudComputingTrainingInBangalore[0].syllabush1}
              syllabusb1={CloudComputingTrainingInBangalore[0].syllabusb1}
              SyllabusBotlist11={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist16
              }
              syllabush2={CloudComputingTrainingInBangalore[0].syllabush2}
              syllabusb2={CloudComputingTrainingInBangalore[0].syllabusb2}
              SyllabusBotlist21={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist26
              }
              syllabush3={CloudComputingTrainingInBangalore[0].syllabush3}
              syllabusb3={CloudComputingTrainingInBangalore[0].syllabusb3}
              SyllabusBotlist31={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist36
              }
              syllabush4={CloudComputingTrainingInBangalore[0].syllabush4}
              syllabusb4={CloudComputingTrainingInBangalore[0].syllabusb4}
              SyllabusBotlist41={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                CloudComputingTrainingInBangalore[0].SyllabusBotlist46
              }
              syllabussrc={CloudComputingTrainingInBangalore[0].syllabussrc}
              JobHead1={CloudComputingTrainingInBangalore[0].JobHead1}
              JobBot1={CloudComputingTrainingInBangalore[0].JobBot1}
              JobBot2={CloudComputingTrainingInBangalore[0].JobBot2}
              JobHead2={CloudComputingTrainingInBangalore[0].JobHead2}
              JobBot3={CloudComputingTrainingInBangalore[0].JobBot3}
              JobBot4={CloudComputingTrainingInBangalore[0].JobBot4}
              JobHead3={CloudComputingTrainingInBangalore[0].JobHead3}
              JobBot7={CloudComputingTrainingInBangalore[0].JobBot7}
              JobHead4={CloudComputingTrainingInBangalore[0].JobHead4}
              JobBot8={CloudComputingTrainingInBangalore[0].JobBot8}
              JobBot9={CloudComputingTrainingInBangalore[0].JobBot9}
              JobHead6={CloudComputingTrainingInBangalore[0].JobHead6}
              JobHead5={CloudComputingTrainingInBangalore[0].JobHead5}
              JobBot11={CloudComputingTrainingInBangalore[0].JobBot11}
              JobBot12={CloudComputingTrainingInBangalore[0].JobBot12}
              JobBot13={CloudComputingTrainingInBangalore[0].JobBot13}
              JobBot14={CloudComputingTrainingInBangalore[0].JobBot14}
              JobBot15={CloudComputingTrainingInBangalore[0].JobBot15}
              JobBot16={CloudComputingTrainingInBangalore[0].JobBot16}
              JobBot17={CloudComputingTrainingInBangalore[0].JobBot17}
              JobBot18={CloudComputingTrainingInBangalore[0].JobBot18}
              JobBot19={CloudComputingTrainingInBangalore[0].JobBot19}
              JobBotA={CloudComputingTrainingInBangalore[0].JobBotA}
              JobBotB={CloudComputingTrainingInBangalore[0].JobBotB}
              JobBotC={CloudComputingTrainingInBangalore[0].JobBotC}
              JobBotD={CloudComputingTrainingInBangalore[0].JobBotD}
              ProjectsHead1={CloudComputingTrainingInBangalore[0].ProjectsHead1}
              ProjectsBot1={CloudComputingTrainingInBangalore[0].ProjectsBot1}
              ProjectsBot2={CloudComputingTrainingInBangalore[0].ProjectsBot2}
              ProjectsBot3={CloudComputingTrainingInBangalore[0].ProjectsBot3}
              ProjectsBot4={CloudComputingTrainingInBangalore[0].ProjectsBot4}
              src1={CloudComputingTrainingInBangalore[0].src1}
              ProjectsH1={CloudComputingTrainingInBangalore[0].ProjectsH1}
              Projectsp1={CloudComputingTrainingInBangalore[0].Projectsp1}
              src2={CloudComputingTrainingInBangalore[0].src2}
              ProjectsH2={CloudComputingTrainingInBangalore[0].ProjectsH2}
              Projectsp2={CloudComputingTrainingInBangalore[0].Projectsp2}
              src3={CloudComputingTrainingInBangalore[0].src3}
              ProjectsH3={CloudComputingTrainingInBangalore[0].ProjectsH3}
              Projectsp3={CloudComputingTrainingInBangalore[0].Projectsp3}
              src4={CloudComputingTrainingInBangalore[0].src4}
              ProjectsH4={CloudComputingTrainingInBangalore[0].ProjectsH4}
              Projectsp4={CloudComputingTrainingInBangalore[0].Projectsp4}
              AlumniBot1={CloudComputingTrainingInBangalore[0].AlumniBot1}
              AlumniBot2={CloudComputingTrainingInBangalore[0].AlumniBot2}
              Asrc1={CloudComputingTrainingInBangalore[0].Asrc1}
              AlumniH1={CloudComputingTrainingInBangalore[0].AlumniH1}
              Alumnip1={CloudComputingTrainingInBangalore[0].Alumnip1}
              Asrc2={CloudComputingTrainingInBangalore[0].Asrc2}
              AlumniH2={CloudComputingTrainingInBangalore[0].AlumniH2}
              Alumnip2={CloudComputingTrainingInBangalore[0].Alumnip2}
              Asrc3={CloudComputingTrainingInBangalore[0].Asrc3}
              AlumniH3={CloudComputingTrainingInBangalore[0].AlumniH3}
              Alumnip3={CloudComputingTrainingInBangalore[0].Alumnip3}
              Asrc4={CloudComputingTrainingInBangalore[0].Asrc4}
              AlumniH4={CloudComputingTrainingInBangalore[0].AlumniH4}
              Alumnip4={CloudComputingTrainingInBangalore[0].Alumnip4}
              alt1={CloudComputingTrainingInBangalore[0].alt1}
              alt2={CloudComputingTrainingInBangalore[0].alt2}
              alt3={CloudComputingTrainingInBangalore[0].alt3}
              alt4={CloudComputingTrainingInBangalore[0].alt4}
              alt5={CloudComputingTrainingInBangalore[0].alt5}
              alt6={CloudComputingTrainingInBangalore[0].alt6}
              alt7={CloudComputingTrainingInBangalore[0].alt7}
              alt8={CloudComputingTrainingInBangalore[0].alt8}
              alt9={CloudComputingTrainingInBangalore[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={CloudComputingTrainingInBangalore[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <Map BangaloreMap={true} />
        <CityText CityText={true} />
        <Footer />
      </main>
    </div>
  );
}
