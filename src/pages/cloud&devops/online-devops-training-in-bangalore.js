import { CloudBangalore } from "@/Data/Schema/CloudBangalore";
import Map from "@/components/Seo/Maps/Maps";
import dynamic from "next/dynamic";
import Head from "next/head";
import { DevOpsCourseInBangalore } from "../../CityData/Bangalore/DevOpsCourseInBangaloreData";
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
        <title>DevOps Course Training in Bangalore - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in the best DevOps course training in Bangalore. Gain hands-on experience with tools like Docker, Kubernetes, and Jenkins. Kickstart your career in DevOps now.
"
        />
        <meta
          name="keywords"
          content="devops course in Bangalore, best devops training in bangalore, devops training in bangalore, best institute for devops in bangalore, devops certification in bangalore, devops institute in bangalore, azure devops training in bangalore, devops offline training in bangalore, top 10 devops training institutes in bangalore, devops training institute in bangalore, devops course fees in bangalore, best devops training institute in bangalore, devops classes in bangalore, devops coaching centers in bangalore"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cloud&devops/online-devops-training-in-bangalore"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/cloud&devops/online-devops-training-in-bangalore"
        />
        <meta
          property="og:title"
          content="DevOps Course Training in Bangalore - Learnbay"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll in the best DevOps course training in Bangalore. Gain hands-on experience with tools like Docker, Kubernetes, and Jenkins. Kickstart your career in DevOps now.
."
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
          content="DevOps Course Training in Bangalore - Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Enroll in the best DevOps course training in Bangalore. Gain hands-on experience with tools like Docker, Kubernetes, and Jenkins. Kickstart your career in DevOps now.
"
        />
        <meta
          name="twitter:description"
          content="Enroll in the best DevOps course training in Bangalore. Gain hands-on experience with tools like Docker, Kubernetes, and Jenkins. Kickstart your career in DevOps now.
"
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
          titleCourse="Best Institute For DevOps Course in Bangalore"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
          dataScience={true}
          interstedInHide={true}
          brochurePdf={pdfUrl}
          idss="gaQYhVPCudQ"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Institute For DevOps Course in Bangalore"
          firstTopPara="Expand beyond technology"
          cityParaCont="Learning based on evidence to acquire data handling abilities. Learnbay provides the best DevOps training in Bangalore. It offers the best-curated program to build a prospective career. Learnbay’s DevOps Certification in Bangalore has the most industry-relevant modules, including generative AI education. Join us and widen your career scope with real-time projects & guaranteed placements."
        />
        <SecondSection
          SecondSectionData={DevOpsCourseInBangalore[0].secondSection}
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
            cityTextDevopsBangalore={true}
            ProgramHead1={DevOpsCourseInBangalore[0].ProgramHead1}
            ProgramBot1={DevOpsCourseInBangalore[0].ProgramBot1}
            ProgramBot2={DevOpsCourseInBangalore[0].ProgramBot2}
            ProgramBot3={DevOpsCourseInBangalore[0].ProgramBot3}
            ProgramBot4={DevOpsCourseInBangalore[0].ProgramBot4}
            ProgramBot5={DevOpsCourseInBangalore[0].ProgramBot5}
            ProgramBot6={DevOpsCourseInBangalore[0].ProgramBot6}
            ProgramBot7={DevOpsCourseInBangalore[0].ProgramBot7}
            ProgramBot8={DevOpsCourseInBangalore[0].ProgramBot8}
            ProgramBot9={DevOpsCourseInBangalore[0].ProgramBot9}
            ProgramBot10={DevOpsCourseInBangalore[0].ProgramBot10}
            ProgramBot11={DevOpsCourseInBangalore[0].ProgramBot11}
            ProgramBot12={DevOpsCourseInBangalore[0].ProgramBot12}
            ProgramBot13={DevOpsCourseInBangalore[0].ProgramBot13}
            ProgramBot14={DevOpsCourseInBangalore[0].ProgramBot14}
            ProgramBot15={DevOpsCourseInBangalore[0].ProgramBot15}
            ProgramBot16={DevOpsCourseInBangalore[0].ProgramBot16}
            ProgramBot17={DevOpsCourseInBangalore[0].ProgramBot17}
            ProgramBot18={DevOpsCourseInBangalore[0].ProgramBot18}
            ProgramBot19={DevOpsCourseInBangalore[0].ProgramBot19}
            ProgramBot20={DevOpsCourseInBangalore[0].ProgramBot20}
            ProgramBot21={DevOpsCourseInBangalore[0].ProgramBot21}
            ProgramHead2={DevOpsCourseInBangalore[0].ProgramHead2}
            ProgramBot22={DevOpsCourseInBangalore[0].ProgramBot22}
            ProgramBot23={DevOpsCourseInBangalore[0].ProgramBot23}
            list10={DevOpsCourseInBangalore[0].list10}
            list11={DevOpsCourseInBangalore[0].list11}
            list12={DevOpsCourseInBangalore[0].list12}
            list13={DevOpsCourseInBangalore[0].list13}
            list14={DevOpsCourseInBangalore[0].list14}
            list15={DevOpsCourseInBangalore[0].list15}
            list16={DevOpsCourseInBangalore[0].list16}
            list17={DevOpsCourseInBangalore[0].list17}
            list18={DevOpsCourseInBangalore[0].list18}
            list19={DevOpsCourseInBangalore[0].list19}
            ulModule={true}
            lis1={DevOpsCourseInBangalore[0].list1}
              Programvideo={[<br />, <YoutubeVideo />]}
              CertificationBot1={
                DevOpsCourseInBangalore[0].CertificationBot1
              }
              CertificationBot2={
                DevOpsCourseInBangalore[0].CertificationBot2
              }
              CertificationBot3={
                DevOpsCourseInBangalore[0].CertificationBot3
              }
              CertificationBot4={
                DevOpsCourseInBangalore[0].CertificationBot4
              }
              src={DevOpsCourseInBangalore[0].src}
              src22={DevOpsCourseInBangalore[0].src22}
              src33={DevOpsCourseInBangalore[0].src33}
              ModuleHead1={DevOpsCourseInBangalore[0].ModuleHead1}
              ModuleBot1={DevOpsCourseInBangalore[0].ModuleBot1}
              ModuleBot2={DevOpsCourseInBangalore[0].ModuleBot2}
              ModuleBot3={DevOpsCourseInBangalore[0].ModuleBot3}
              list1={DevOpsCourseInBangalore[0].list1}
              list2={DevOpsCourseInBangalore[0].list2}
              list3={DevOpsCourseInBangalore[0].list3}
              list4={DevOpsCourseInBangalore[0].list4}
              list5={DevOpsCourseInBangalore[0].list5}
              list6={DevOpsCourseInBangalore[0].list6}
              list7={DevOpsCourseInBangalore[0].list7}
              list8={DevOpsCourseInBangalore[0].list8}
              list9={DevOpsCourseInBangalore[0].list9}
              syllabush1={DevOpsCourseInBangalore[0].syllabush1}
              syllabusb1={DevOpsCourseInBangalore[0].syllabusb1}
              SyllabusBotlist11={
                DevOpsCourseInBangalore[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                DevOpsCourseInBangalore[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                DevOpsCourseInBangalore[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                DevOpsCourseInBangalore[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                DevOpsCourseInBangalore[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                DevOpsCourseInBangalore[0].SyllabusBotlist16
              }
              syllabush2={DevOpsCourseInBangalore[0].syllabush2}
              syllabusb2={DevOpsCourseInBangalore[0].syllabusb2}
              SyllabusBotlist21={
                DevOpsCourseInBangalore[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                DevOpsCourseInBangalore[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                DevOpsCourseInBangalore[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                DevOpsCourseInBangalore[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                DevOpsCourseInBangalore[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                DevOpsCourseInBangalore[0].SyllabusBotlist26
              }
              syllabush3={DevOpsCourseInBangalore[0].syllabush3}
              syllabusb3={DevOpsCourseInBangalore[0].syllabusb3}
              SyllabusBotlist31={
                DevOpsCourseInBangalore[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                DevOpsCourseInBangalore[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                DevOpsCourseInBangalore[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                DevOpsCourseInBangalore[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                DevOpsCourseInBangalore[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                DevOpsCourseInBangalore[0].SyllabusBotlist36
              }
              syllabush4={DevOpsCourseInBangalore[0].syllabush4}
              syllabusb4={DevOpsCourseInBangalore[0].syllabusb4}
              SyllabusBotlist41={
                DevOpsCourseInBangalore[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                DevOpsCourseInBangalore[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                DevOpsCourseInBangalore[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                DevOpsCourseInBangalore[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                DevOpsCourseInBangalore[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                DevOpsCourseInBangalore[0].SyllabusBotlist46
              }
              syllabussrc={DevOpsCourseInBangalore[0].syllabussrc}
              JobHead1={DevOpsCourseInBangalore[0].JobHead1}
            //   JobBot1={DevOpsCourseInBangalore[0].JobBot1}
            //   JobBot2={DevOpsCourseInBangalore[0].JobBot2}
              JobHead2={DevOpsCourseInBangalore[0].JobHead2}
              JobBot3={DevOpsCourseInBangalore[0].JobBot3}
              JobBot4={DevOpsCourseInBangalore[0].JobBot4}
            //   JobHead3={DevOpsCourseInBangalore[0].JobHead3}
            //   JobBot7={DevOpsCourseInBangalore[0].JobBot7}
              JobHead4={DevOpsCourseInBangalore[0].JobHead4}
            //   JobBot8={DevOpsCourseInBangalore[0].JobBot8}
            //   JobBot9={DevOpsCourseInBangalore[0].JobBot9}
            //   JobHead6={DevOpsCourseInBangalore[0].JobHead6}
            //   JobHead5={DevOpsCourseInBangalore[0].JobHead5}
            //   JobBot11={DevOpsCourseInBangalore[0].JobBot11}
              JobBot12={DevOpsCourseInBangalore[0].JobBot12}
              JobBot13={DevOpsCourseInBangalore[0].JobBot13}
            //   JobBot14={DevOpsCourseInBangalore[0].JobBot14}
            //   JobBot15={DevOpsCourseInBangalore[0].JobBot15}
              JobBot16={DevOpsCourseInBangalore[0].JobBot16}
            //   JobBot17={DevOpsCourseInBangalore[0].JobBot17}
            //   JobBot18={DevOpsCourseInBangalore[0].JobBot18}
            //   JobBot19={DevOpsCourseInBangalore[0].JobBot19}
              JobBotA={DevOpsCourseInBangalore[0].JobBotA}
            //   JobBotB={DevOpsCourseInBangalore[0].JobBotB}
              JobBotC={DevOpsCourseInBangalore[0].JobBotC}
            //   JobBotD={DevOpsCourseInBangalore[0].JobBotD}
              ProjectsHead1={DevOpsCourseInBangalore[0].ProjectsHead1}
              ProjectsBot1={DevOpsCourseInBangalore[0].ProjectsBot1}
              ProjectsBot2={DevOpsCourseInBangalore[0].ProjectsBot2}
              ProjectsBot3={DevOpsCourseInBangalore[0].ProjectsBot3}
              ProjectsBot4={DevOpsCourseInBangalore[0].ProjectsBot4}
              src1={DevOpsCourseInBangalore[0].src1}
              ProjectsH1={DevOpsCourseInBangalore[0].ProjectsH1}
              Projectsp1={DevOpsCourseInBangalore[0].Projectsp1}
              src2={DevOpsCourseInBangalore[0].src2}
              ProjectsH2={DevOpsCourseInBangalore[0].ProjectsH2}
              Projectsp2={DevOpsCourseInBangalore[0].Projectsp2}
              src3={DevOpsCourseInBangalore[0].src3}
              ProjectsH3={DevOpsCourseInBangalore[0].ProjectsH3}
              Projectsp3={DevOpsCourseInBangalore[0].Projectsp3}
              src4={DevOpsCourseInBangalore[0].src4}
              ProjectsH4={DevOpsCourseInBangalore[0].ProjectsH4}
              Projectsp4={DevOpsCourseInBangalore[0].Projectsp4}
              AlumniBot1={DevOpsCourseInBangalore[0].AlumniBot1}
              AlumniBot2={DevOpsCourseInBangalore[0].AlumniBot2}
              Asrc1={DevOpsCourseInBangalore[0].Asrc1}
              AlumniH1={DevOpsCourseInBangalore[0].AlumniH1}
              Alumnip1={DevOpsCourseInBangalore[0].Alumnip1}
              Asrc2={DevOpsCourseInBangalore[0].Asrc2}
              AlumniH2={DevOpsCourseInBangalore[0].AlumniH2}
              Alumnip2={DevOpsCourseInBangalore[0].Alumnip2}
              Asrc3={DevOpsCourseInBangalore[0].Asrc3}
              AlumniH3={DevOpsCourseInBangalore[0].AlumniH3}
              Alumnip3={DevOpsCourseInBangalore[0].Alumnip3}
              Asrc4={DevOpsCourseInBangalore[0].Asrc4}
              AlumniH4={DevOpsCourseInBangalore[0].AlumniH4}
              Alumnip4={DevOpsCourseInBangalore[0].Alumnip4}
              alt1={DevOpsCourseInBangalore[0].alt1}
              alt2={DevOpsCourseInBangalore[0].alt2}
              alt3={DevOpsCourseInBangalore[0].alt3}
              alt4={DevOpsCourseInBangalore[0].alt4}
              alt5={DevOpsCourseInBangalore[0].alt5}
              alt6={DevOpsCourseInBangalore[0].alt6}
              alt7={DevOpsCourseInBangalore[0].alt7}
              alt8={DevOpsCourseInBangalore[0].alt8}
              alt9={DevOpsCourseInBangalore[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DevOpsCourseInBangalore[0].faq} />
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
 