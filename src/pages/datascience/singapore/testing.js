import dynamic from "next/dynamic";
import Head from "next/head";
import { TestingCourseData } from "@/CityData/testingData/testingData";
import Navbar from "../../../components/Global/Navbar/Navbar";
import styles from "../../../styles/Home.module.css";
import FirstSectionCopy from "@/components/testingComponent/FirstSection/FirstSection";
import SecondSectionCopy from "@/components/testingComponent/SecondSection/SecondSection";
const RelatedCourses = dynamic(() =>
  import("@/components/testingComponent/RelatedCourses/RelatedCourses")
);
const TestimonialCopy = dynamic(() =>
  import("@/components/testingComponent/Testimonial/Testimonial")
);
const SeventhSectionCopy = dynamic(() =>
  import("@/components/testingComponent/SeventhSection/SeventhSection")
);
const FeeSectionCopy = dynamic(() =>
  import("@/components/testingComponent/FeeSection/FeeSection")
);
const CitiesLeftCopy = dynamic(() =>
  import("@/components/testingComponent/CitiesLeft/CitiesLeftDomain")
);
const CitiesRightCopy = dynamic(() =>
  import("@/components/testingComponent/CitiesRight/CitiesRightdomain")
);
const MapCopy = dynamic(() =>
  import("@/components/testingComponent/Maps/Maps")
);
const Footer = dynamic(() =>
  import("../../../components/Global/Footer/Footer")
);
const FAQNew = dynamic(() => import("../../../components/Seo/FAQNew/FAQNew"));
export default function Home() {
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Data-Analytics-Certification.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Testing</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="testing"
        />
        <meta
          name="keywords"
          content="testing"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/singapore/testing"
        />
        <meta
          property="og:title"
          content="Testing"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Testing"
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
          content="Testing"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="testing"
        />
        <meta
          name="twitter:description"
          content="testing"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/singapore/testing"
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
        <FirstSectionCopy
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
        <SecondSectionCopy />
        <TestimonialCopy
          redirectDS={true}
          Testimonial={TestingCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSectionCopy
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
            <CitiesLeftCopy />
          </div>
          <div className="CitiesRight">
            <CitiesRightCopy
              cityTextJDAPune={true}
              ProgramHead1={TestingCourseData[0].ProgramHead1}
              ProgramBot1={TestingCourseData[0].ProgramBot1}
              ProgramBot2={TestingCourseData[0].ProgramBot2}
              ProgramBot3={TestingCourseData[0].ProgramBot3}
              ProgramBot4={TestingCourseData[0].ProgramBot4}
              ProgramBot5={TestingCourseData[0].ProgramBot5}
              ProgramBot6={TestingCourseData[0].ProgramBot6}
              ProgramBot7={TestingCourseData[0].ProgramBot7}
              ProgramBot8={TestingCourseData[0].ProgramBot8}
              ProgramBot9={TestingCourseData[0].ProgramBot9}
              ProgramBot32={TestingCourseData[0].ProgramBot32}
              ProgramBot10={TestingCourseData[0].ProgramBot10}
              ProgramBot11={TestingCourseData[0].ProgramBot11}
              ProgramBot12={TestingCourseData[0].ProgramBot12}
              ProgramHead3={TestingCourseData[0].ProgramHead3}
              ProgramBot31={TestingCourseData[0].ProgramBot31}
              ProgramHead4={TestingCourseData[0].ProgramHead4}
              ProgramHead5={TestingCourseData[0].ProgramHead5}
              CertificationHead1={TestingCourseData[0].CertificationHead1}
              CertificationBot3={TestingCourseData[0].CertificationBot3}
              ProgramHead6={TestingCourseData[0].ProgramHead6}
              Courselink1={TestingCourseData[0].Courselink1}
              Courselink2={TestingCourseData[0].Courselink2}
              Courselink3={TestingCourseData[0].Courselink3}
              Courselink4={TestingCourseData[0].Courselink4}
              Courselink5={TestingCourseData[0].Courselink5}
              Course1={TestingCourseData[0].Course1}
              Course2={TestingCourseData[0].Course2}
              Course3={TestingCourseData[0].Course3}
              Course4={TestingCourseData[0].Course4}
              Course5={TestingCourseData[0].Course5}
              DomainHead1={TestingCourseData[0].DomainHead1}
              DomainBot1={TestingCourseData[0].DomainBot1}
              DomainBot2={TestingCourseData[0].DomainBot2}
              DomainBot3={TestingCourseData[0].DomainBot3}
              DomainList1={TestingCourseData[0].DomainList1}
              DomainList2={TestingCourseData[0].DomainList2}
              DomainList3={TestingCourseData[0].DomainList3}
              DomainList4={TestingCourseData[0].DomainList4}
              DomainList5={TestingCourseData[0].DomainList5}
              DomainList6={TestingCourseData[0].DomainList6}
              DomainList7={TestingCourseData[0].DomainList7}
              DomainList8={TestingCourseData[0].DomainList8}
              DomainList9={TestingCourseData[0].DomainList9}
              DomainList10={TestingCourseData[0].DomainList10}
              Domainlink1={TestingCourseData[0].Domainlink1}
              Domainlink2={TestingCourseData[0].Domainlink2}
              Domainlink3={TestingCourseData[0].Domainlink3}
              Domainlink4={TestingCourseData[0].Domainlink4}
              Domainlink5={TestingCourseData[0].Domainlink5}
              Domainlink6={TestingCourseData[0].Domainlink6}
              Domainlink7={TestingCourseData[0].Domainlink7}
              Domainlink8={TestingCourseData[0].Domainlink8}
              Domainlink9={TestingCourseData[0].Domainlink9}
              Domainlink10={TestingCourseData[0].Domainlink10}
              CertificationBot1={TestingCourseData[0].CertificationBot1}
              CertificationBot2={TestingCourseData[0].CertificationBot2}
              src={TestingCourseData[0].src}
              src22={TestingCourseData[0].src22}
              ModuleHead1={TestingCourseData[0].ModuleHead1}
              ModuleBot1={TestingCourseData[0].ModuleBot1}
              ModuleBot2={TestingCourseData[0].ModuleBot2}
              ModuleBot3={TestingCourseData[0].ModuleBot3}
              ModuleBot4={TestingCourseData[0].ModuleBot4}
              syllabush1={TestingCourseData[0].syllabush1}
              syllabusb1={TestingCourseData[0].syllabusb1}
              SyllabusBotlist11={TestingCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={TestingCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={TestingCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={TestingCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={TestingCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={TestingCourseData[0].SyllabusBotlist16}
              syllabush2={TestingCourseData[0].syllabush2}
              syllabusb2={TestingCourseData[0].syllabusb2}
              SyllabusBotlist21={TestingCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={TestingCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={TestingCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={TestingCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={TestingCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={TestingCourseData[0].SyllabusBotlist26}
              syllabush3={TestingCourseData[0].syllabush3}
              syllabusb3={TestingCourseData[0].syllabusb3}
              SyllabusBotlist31={TestingCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={TestingCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={TestingCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={TestingCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={TestingCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={TestingCourseData[0].SyllabusBotlist36}
              syllabush4={TestingCourseData[0].syllabush4}
              syllabusb4={TestingCourseData[0].syllabusb4}
              SyllabusBotlist41={TestingCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={TestingCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={TestingCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={TestingCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={TestingCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={TestingCourseData[0].SyllabusBotlist46}
              syllabussrc={TestingCourseData[0].syllabussrc}
              JobHead1={TestingCourseData[0].JobHead1}
              JobBot1={TestingCourseData[0].JobBot1}
              JobBot2={TestingCourseData[0].JobBot2}
              JobBot4={TestingCourseData[0].JobBot4}
              JobBot5={TestingCourseData[0].JobBot5}
              JobBot7={TestingCourseData[0].JobBot7}
              JobHead2={TestingCourseData[0].JobHead2}
              JobHead3={TestingCourseData[0].JobHead3}
              JobHead5={TestingCourseData[0].JobHead5}
              JobHead4={TestingCourseData[0].JobHead4}
              JobBot3={TestingCourseData[0].JobBot3}
              JobBot6={TestingCourseData[0].JobBot6}
              JobBot8={TestingCourseData[0].JobBot8}
              JobBot9={TestingCourseData[0].JobBot9}
              JobBot10={TestingCourseData[0].JobBot10}
              JobBot11={TestingCourseData[0].JobBot11}
              ProjectsBot1={TestingCourseData[0].ProjectsBot1}
              ProjectsBot2={TestingCourseData[0].ProjectsBot2}
              ProjectsBot3={TestingCourseData[0].ProjectsBot3}
              src1={TestingCourseData[0].src1}
              ProjectsH1={TestingCourseData[0].ProjectsH1}
              Projectsp1={TestingCourseData[0].Projectsp1}
              src2={TestingCourseData[0].src2}
              ProjectsH2={TestingCourseData[0].ProjectsH2}
              Projectsp2={TestingCourseData[0].Projectsp2}
              src3={TestingCourseData[0].src3}
              ProjectsH3={TestingCourseData[0].ProjectsH3}
              Projectsp3={TestingCourseData[0].Projectsp3}
              src4={TestingCourseData[0].src4}
              ProjectsH4={TestingCourseData[0].ProjectsH4}
              Projectsp4={TestingCourseData[0].Projectsp4}
              AlumniBot1={TestingCourseData[0].AlumniBot1}
              Asrc1={TestingCourseData[0].Asrc1}
              AlumniH1={TestingCourseData[0].AlumniH1}
              Alumnip1={TestingCourseData[0].Alumnip1}
              Asrc2={TestingCourseData[0].Asrc2}
              AlumniH2={TestingCourseData[0].AlumniH2}
              Alumnip2={TestingCourseData[0].Alumnip2}
              Asrc3={TestingCourseData[0].Asrc3}
              AlumniH3={TestingCourseData[0].AlumniH3}
              Alumnip3={TestingCourseData[0].Alumnip3}
              Asrc4={TestingCourseData[0].Asrc4}
              AlumniH4={TestingCourseData[0].AlumniH4}
              Alumnip4={TestingCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={TestingCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSectionCopy />
        <RelatedCourses relatedCourses={TestingCourseData[0].relatedCourses} />
        <MapCopy BangaloreMap={true} />
        <Footer />
      </main>
    </div>
  );
}
