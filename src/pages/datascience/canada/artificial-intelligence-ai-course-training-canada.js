import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AIcanadaCourseData } from "../../../CityData/Canada/ArtificaialIntellginceCourseTrainingCanadaData";
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
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Advance-AI-ML-v1.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Artificial Intelligence Course in Canada - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay offers best Artificial Intelligence Training in Canada with live projects, IBM certification with best placement assistance. Enroll Now."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence course in Canada, Artificial Intelligence training in Canada, Artificial Intelligence institute in Canada, best Artificial Intelligence institute in Canada, Artificial Intelligence course in Canada, Artificial Intelligence certification in Canada, Artificial Intelligence training institute in Canada, advanced Artificial Intelligence course in Canada, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/canada/artificial-intelligence-ai-course-training-canada"
        />
        <meta
          property="og:title"
          content=" Artificial intelligence in Canada | Data Science Training in Canada"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content=" Artificial intelligence in Canada. Learnbay is Advanced  Artificial intelligence Training Institute in Canada.  Artificial intelligence in Canada will enhance your career"
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
          content=" Artificial intelligence in Canada | Artificial intelligence Training in Canada"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content=" Artificial intelligence in Canada. Learnbay is Advanced  Artificial intelligence Training Institute in Canada.  Artificial intelligence in Canada will enhance your career"
        />
        <meta
          name="twitter:description"
          content=" Artificial intelligence in Canada. Learnbay is Advanced  Artificial intelligence Training Institute in Canada.  Artificial intelligence in Canada will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/canada/artificial-intelligence-ai-course-training-canada"
        />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training Canada"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />


      {/* Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Artificial Intelligence(AI) Course Training In Canada",
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
  "brand": {
    "@type": "Brand",
    "name": "Learnbay"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "2513"

  }
          })
        }}
      />

      {/* Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://www.learnbay.co/",
            "sameAs": [
              "https://www.facebook.com/learnbay/",
              "https://twitter.com/Learnbay",
              "https://www.instagram.com/learnbayofficial/",
              "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
              "https://www.linkedin.com/company/learnbay/"
            ],
            "logo": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
            "name": "Learnbay",
            "description": "Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!",
           
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": 265
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "contacts@learnbay.co",
              "telephone": "(+91) 77956 87988"

            }

          })
        }}
      />

      {/* FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "What are Artificial Intelligence (AI) training courses available at Learnbay in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Foundational data science and Artificial Intelligence Training Course, Advanced data science and AI Certification Course, Machine learning and AI Certification, Data Science and AI Certification Course for Managers and Leaders Data Science and Artificial Intelligence Training with Placement Assistance"
}
},
{
"@type": "Question",
"name": "What are the prerequisites for these AI training Courses in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "There are no prerequisites for this artificial certification course as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
}
},
{
"@type": "Question",
"name": "What if I miss a few classes of Learnbay AI courses due to an emergency?",
"acceptedAnswer": {
"@type": "Answer",
"text": "In case you miss a few classes, you will be provided with backup classes in other batches. But if you could not attend more classes, you can opt for batch change and join the next batch."
}
},
{
"@type": "Question",
"name": "What is a Flexi Subscription in these advanced artificial intelligence courses in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Those who enroll for AI live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational data science and Artificial Intelligence Training Course- 1 Year Advanced data science and AI Certification Course- 3 Years Machine learning and AI Certification- 3 Years Data Science and AI Certification Course for Managers and Leaders- 3 Years Data Science and Artificial Intelligence Training with Placement Assistance - 3-years"
}
},
{
"@type": "Question",
"name": "What’s the duration of these advanced AI in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The duration of these courses is about 6-15 months, which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Monday to Friday - 2 hours/day and Saturday & Sunday - 3.5 hours/day Foundational Data Science and Artificial Intelligence Training Course (220+ hours) Weekday batch - 6 months Weekend batch - 8 months Machine learning and AI Certification (280+ hours) Weekday batch - 9.5 months Weekend batch - 11 months Advanced Data Science and AI Certification Course (270+ hours) Weekday batch - 7 months Weekend batch - 9 months Data Science and AI Certification Course for Managers and Leaders (340+ hours) Weekday batch - 11 months Weekend batch - 13 months Data Science and Artificial Intelligence Training with Placement Assistance (380+ hours) Weekday batch - 13 months Weekend batch - 15 months"
}
},
{
"@type": "Question",
"name": "What is the learning mode of Artificial Intelligence Certification courses in Canada at Learnbay?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We provide both classroom and online AI training modes. Based on your requirement, you can choose your preferred mode."
}
},
{
"@type": "Question",
"name": "How can I opt for a Hybrid mode of learning in IBM artificial intelligence training courses in Canada, At Learnbay?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
}
},
{
"@type": "Question",
"name": "What is domain specialization in the professional AI certification courses provided by Learnbay in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We offer industry-specific full-stack AI modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational AI course."
}
},
{
"@type": "Question",
"name": "What are the available elective domain options in the different artificial intelligence training courses of Learnbay in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps; Sales, Marketing, & HR; Retail, E-Commerce, & Supply Chain; Healthcare, Pharma, & Clinical Research; BFSI; Manufacturing, Mechanical, & Telecom; Media, Hospitality, & Transportation; Oil, Gas, & Energy"
}
},
{
"@type": "Question",
"name": "Which domain elective within the Learnbay AI Certification courses is best suited for me?",
"acceptedAnswer": {
"@type": "Answer",
"text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for free profile review and career guidance. +917795687988"
}
},
{
"@type": "Question",
"name": "Why is domain specialization important in professional artificial intelligence certification?",
"acceptedAnswer": {
"@type": "Answer",
"text": "After enrolling in the advanced AI courses, one must opt for domain electives. It is essential to have business/industry knowledge that is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset's attributes. Furthermore, the model will be more observable in a real-world situation."
}
},
{
"@type": "Question",
"name": "Can I select multiple domain electives and do I need to pay extra charges in any of the eligible AI certification courses?",
"acceptedAnswer": {
"@type": "Answer",
"text": "You can select a pre-set maximum number (based on course) of domain electives (both tech and non-tech) based on your interest and career goals. Advance Data Science and AI Certification course- Maximum 2 domains. Data Science and AI Certification Course for Managers and Leaders- All domains Data Science and Artificial Intelligence Training with Placement Assistance- All domains Machine learning and AI Certification- maximum 4 domains No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum."
}
},
{
"@type": "Question",
"name": "What if I don't have any prior experience in any domain?",
"acceptedAnswer": {
"@type": "Answer",
"text": "If you don't have any prior work experience, you can opt for any electives to gain domain expertise and work on real-time industrial projects."
}
},
{
"@type": "Question",
"name": "Can I change my domain electives later?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, you can change your electives or repeat the training anytime but within the course accessibility duration."
}
},
{
"@type": "Question",
"name": "What is the total fee for Learnbay AI Certifications courses in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The total course fee for the Foundational Data Science and AI Training course is 75,000/- inclusive of GST. Advance Data Science and AI Certification course is 1,25,000/- inclusive of GST. Data Science and AI Certification Course for Managers and Leaders is 1,35,000/- inclusive of GST. Data Science and AI Master Certification Program is 1,55,000/- inclusive of GST."
}
},
{
"@type": "Question",
"name": "Can I pay in installments for these AI Certification courses in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 11 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
}
},
{
"@type": "Question",
"name": "Is there any scholarship/discount available for these Artificial intelligence training courses available in Canada? What is Group Discount?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+"
}
},
{
"@type": "Question",
"name": "What is the refund policy for the Artificial Intelligence Certification courses at Learnbay?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Candidates are advised to read .Learnbay’s Refund/Cancellation Policy before enrolling in the course."
}
},
{
"@type": "Question",
"name": "How many capstone projects will be there?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Depending on the course you choose the number of capstone projects will vary. Foundational Artificial Intelligence Training Course - 1 Capstone. Advance Data Science and AI Certification course -2 Capstones. Data Science and AI Certification Course for Managers and Leaders- 2 Capstones. Data Science and Artificial Intelligence Training with Placement Assistance- 3 Capstones. Machine learning and AI Certification- 2 Capstones."
}
},
{
"@type": "Question",
"name": "How many real-time projects/case studies will be covered in these artificial intelligence certification courses in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Depending on the course you choose the number of live projects will vary. Foundational Data Science and Artificial Intelligence Training Course- 8 projects. Advance Data Science and AI Certification course-12 projects. Data Science and AI Certification Course for Managers and Leaders- 15 projects. Data Science and Artificial Intelligence Training with Placement Assistance- 15 projects. Machine learning and AI Certification- 15 projects. Click here to download the list of the projects."
}
},
{
"@type": "Question",
"name": "How will the projects be executed in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
}
},
{
"@type": "Question",
"name": "Is there any accredited AI certification after course completion?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, you will be awarded IBM accredited Data Scientist Certificate on successful course completion. But Based on the course you choose you can get Multiple certification options too. Foundational Data Science and Artificial Intelligence Training Course- 1 Course Completion Certificate. Advance Data Science and AI Certification course-1 Course Completion Certificate + 1-project experience certificate + 4 microdata science skills certificates = 6 Certificates. Data Science and AI Certification Course for Managers and Leaders- 1 Course Completion Certificate + 1-project experience certificate + 6 microdata science skills certificates= 8 Certificates. Data Science and Artificial Intelligence Training with Placement Assistance- 1 Course Completion Certificates Machine learning and AI Certification- 1 Course Completion Certificate + 1-project experience certificate + 4 microdata science skills certificates = 6 Certificates. *All the certificates accredited by IBM. For more details, please refer to the respective course syllabus."
}
},
{
"@type": "Question",
"name": "What's the eligibility for a job assistance Program in Learnbay artificial intelligence training courses in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
}
},
{
"@type": "Question",
"name": "How long will I get support for job assistance at Learnbay in Canada?",
"acceptedAnswer": {
"@type": "Answer",
"text": "At Learnbay, you’ll be provided with job assistance after the completion of the course for a period of 1 year. What is a job-readiness program? The Job readiness program helps you prepare for interviews which include: Resume preparation sessions, Preparing projects for a strong portfolio, Interview guidance and prep sessions, 1:1 Mock interviews based on targeted companies and roles."
}
},
{
"@type": "Question",
"name": "Will I get job referrals at Learnbay?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, we offer dedicated placement assistance by referring to your profile through our partnered consultancies and companies."
}
},
{
"@type": "Question",
"name": "What is an interview guarantee feature?",
"acceptedAnswer": {
"@type": "Answer",
"text": "As a special feature, we provide interview assurance. That means once you complete the course by fulfilling all the scoring and attendance-related criteria, we’ll provide assured interview calls and job referrals. You will get this facility until you get placed. Terms and conditions applied."
}
},
{
"@type": "Question",
"name": "Until when do the students get the facility of mentorship?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Our Mentors will provide AI training to the students until the completion of the course."
}
},
{
"@type": "Question",
"name": "Can a Learnbay student in Canada choose to study from their desired mentor?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
}
},
{
"@type": "Question",
"name": "When is the job assistance provided at Learnbay and how long will I get it?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Job assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNC’s/startups. This assistance is provided unless one gets placed in a company."
}
},
{
"@type": "Question",
"name": "How long will I get Job referrals?",
"acceptedAnswer": {
"@type": "Answer",
"text": "You’ll be provided with job assistance after the completion of the course for a period of 1 year."
}
}
]



          })
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
          titleCourse="Data Science and AI Program For Manager & Leaders"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="qxwIns6z2Bc"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Business-Analytics-Masters-Header.png"
          firstToparaImg="For Managers and Leaders"
          firstHeading="Artificial Intelligence(Ai) Course Training In Canada"
          firstTopPara="Job-Assured Artificial Intelligence Training  Program"
          cityParaCont="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "
        />
        <SecondSection
          SecondSectionData={AIcanadaCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={AIcanadaCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,15,000"
            FeeEmi="₹ 7,539/ Month"
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
            dataScience={true}
            titleCourse="AI & ML Program for tech professionals"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
            brochurePdf={pdfUrl}
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,15,000"
            monthlyPayment1="₹7,539"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,15,000"
            monthlyPayment2="₹11,308"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramHead1={AIcanadaCourseData[0].ProgramHead1}
              ProgramBot1={AIcanadaCourseData[0].ProgramBot1}
              ProgramBot2={AIcanadaCourseData[0].ProgramBot2}
              ProgramHead3={AIcanadaCourseData[0].ProgramHead3}
              ProgramHead4={AIcanadaCourseData[0].ProgramHead4}
              ProgramBot3={AIcanadaCourseData[0].ProgramBot3}
              ProgramBot66={AIcanadaCourseData[0].ProgramBot66}
              ProgramBot32={AIcanadaCourseData[0].ProgramBot32}
              ProgramBot4={AIcanadaCourseData[0].ProgramBot4}
              ProgramBot5={AIcanadaCourseData[0].ProgramBot5}
              ProgramBot6={AIcanadaCourseData[0].ProgramBot6}
              ProgramBot8={AIcanadaCourseData[0].ProgramBot8}
              ProgramBot9={AIcanadaCourseData[0].ProgramBot9}
              ProgramBot10={AIcanadaCourseData[0].ProgramBot10}
              Courselink1={AIcanadaCourseData[0].Courselink1}
              Courselink2={AIcanadaCourseData[0].Courselink2}
              Courselink3={AIcanadaCourseData[0].Courselink3}
              Courselink4={AIcanadaCourseData[0].Courselink4}
              Courselink5={AIcanadaCourseData[0].Courselink5}
              Course1={AIcanadaCourseData[0].Course1}
              Course2={AIcanadaCourseData[0].Course2}
              Course3={AIcanadaCourseData[0].Course3}
              Course4={AIcanadaCourseData[0].Course4}
              Course5={AIcanadaCourseData[0].Course5}
              DomainHead1={AIcanadaCourseData[0].DomainHead1}
              DomainBot1={AIcanadaCourseData[0].DomainBot1}
              DomainBot2={AIcanadaCourseData[0].DomainBot2}
              DomainBot3={AIcanadaCourseData[0].DomainBot3}
              DomainList1={AIcanadaCourseData[0].DomainList1}
              DomainList2={AIcanadaCourseData[0].DomainList2}
              DomainList3={AIcanadaCourseData[0].DomainList3}
              DomainList4={AIcanadaCourseData[0].DomainList4}
              DomainList5={AIcanadaCourseData[0].DomainList5}
              DomainList6={AIcanadaCourseData[0].DomainList6}
              DomainList7={AIcanadaCourseData[0].DomainList7}
              DomainList8={AIcanadaCourseData[0].DomainList8}
              DomainList9={AIcanadaCourseData[0].DomainList9}
              DomainList10={AIcanadaCourseData[0].DomainList10}
              Domainlink1={AIcanadaCourseData[0].Domainlink1}
              Domainlink2={AIcanadaCourseData[0].Domainlink2}
              Domainlink3={AIcanadaCourseData[0].Domainlink3}
              Domainlink4={AIcanadaCourseData[0].Domainlink4}
              Domainlink5={AIcanadaCourseData[0].Domainlink5}
              Domainlink6={AIcanadaCourseData[0].Domainlink6}
              Domainlink7={AIcanadaCourseData[0].Domainlink7}
              Domainlink8={AIcanadaCourseData[0].Domainlink8}
              Domainlink9={AIcanadaCourseData[0].Domainlink9}
              Domainlink10={AIcanadaCourseData[0].Domainlink10}
              CertificationHead1={AIcanadaCourseData[0].CertificationHead1}
              CertificationBot1={AIcanadaCourseData[0].CertificationBot1}
              CertificationBot2={AIcanadaCourseData[0].CertificationBot2}
              src={AIcanadaCourseData[0].src}
              src22={AIcanadaCourseData[0].src22}
              src33={AIcanadaCourseData[0].src33}
              ModuleHead1={AIcanadaCourseData[0].ModuleHead1}
              ModuleBot1={AIcanadaCourseData[0].ModuleBot1}
              ModuleBot2={AIcanadaCourseData[0].ModuleBot2}
              ModuleBot3={AIcanadaCourseData[0].ModuleBot3}
              ModuleHead3={AIcanadaCourseData[0].ModuleHead3}
              ModuleBot4={AIcanadaCourseData[0].ModuleBot4}
              ModuleHead2={AIcanadaCourseData[0].ModuleHead2}
              syllabush1={AIcanadaCourseData[0].syllabush1}
              syllabusb1={AIcanadaCourseData[0].syllabusb1}
              SyllabusBotlist11={AIcanadaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={AIcanadaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={AIcanadaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={AIcanadaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={AIcanadaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={AIcanadaCourseData[0].SyllabusBotlist16}
              syllabush2={AIcanadaCourseData[0].syllabush2}
              syllabusb2={AIcanadaCourseData[0].syllabusb2}
              SyllabusBotlist21={AIcanadaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={AIcanadaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={AIcanadaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={AIcanadaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={AIcanadaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={AIcanadaCourseData[0].SyllabusBotlist26}
              syllabush3={AIcanadaCourseData[0].syllabush3}
              syllabusb3={AIcanadaCourseData[0].syllabusb3}
              SyllabusBotlist31={AIcanadaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={AIcanadaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={AIcanadaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={AIcanadaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={AIcanadaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={AIcanadaCourseData[0].SyllabusBotlist36}
              syllabush4={AIcanadaCourseData[0].syllabush4}
              syllabusb4={AIcanadaCourseData[0].syllabusb4}
              SyllabusBotlist41={AIcanadaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={AIcanadaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={AIcanadaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={AIcanadaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={AIcanadaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={AIcanadaCourseData[0].SyllabusBotlist46}
              syllabussrc={AIcanadaCourseData[0].syllabussrc}
              JobHead1={AIcanadaCourseData[0].JobHead1}
              JobBot1={AIcanadaCourseData[0].JobBot1}
              JobBot2={AIcanadaCourseData[0].JobBot2}
              JobBot3={AIcanadaCourseData[0].JobBot3}
              JobHead2={AIcanadaCourseData[0].JobHead2}
              JobBot5={AIcanadaCourseData[0].JobBot5}
              JobBot4={AIcanadaCourseData[0].JobBot4}
              JobBot6={AIcanadaCourseData[0].JobBot6}
              ProjectsBot1={AIcanadaCourseData[0].ProjectsBot1}
              ProjectsBot2={AIcanadaCourseData[0].ProjectsBot2}
              src1={AIcanadaCourseData[0].src1}
              ProjectsHead1={AIcanadaCourseData[0].ProjectsHead1}
              ProjectsH1={AIcanadaCourseData[0].ProjectsH1}
              Projectsp1={AIcanadaCourseData[0].Projectsp1}
              src2={AIcanadaCourseData[0].src2}
              ProjectsH2={AIcanadaCourseData[0].ProjectsH2}
              Projectsp2={AIcanadaCourseData[0].Projectsp2}
              src3={AIcanadaCourseData[0].src3}
              ProjectsH3={AIcanadaCourseData[0].ProjectsH3}
              Projectsp3={AIcanadaCourseData[0].Projectsp3}
              src4={AIcanadaCourseData[0].src4}
              ProjectsH4={AIcanadaCourseData[0].ProjectsH4}
              Projectsp4={AIcanadaCourseData[0].Projectsp4}
              AlumniBot1={AIcanadaCourseData[0].AlumniBot1}
              Asrc1={AIcanadaCourseData[0].Asrc1}
              AlumniH1={AIcanadaCourseData[0].AlumniH1}
              Alumnip1={AIcanadaCourseData[0].Alumnip1}
              Asrc2={AIcanadaCourseData[0].Asrc2}
              AlumniH2={AIcanadaCourseData[0].AlumniH2}
              Alumnip2={AIcanadaCourseData[0].Alumnip2}
              Asrc3={AIcanadaCourseData[0].Asrc3}
              AlumniH3={AIcanadaCourseData[0].AlumniH3}
              Alumnip3={AIcanadaCourseData[0].Alumnip3}
              Asrc4={AIcanadaCourseData[0].Asrc4}
              AlumniH4={AIcanadaCourseData[0].AlumniH4}
              Alumnip4={AIcanadaCourseData[0].Alumnip4}
              alt1={AIcanadaCourseData[0].alt1}
              alt2={AIcanadaCourseData[0].alt2}
              alt3={AIcanadaCourseData[0].alt3}
              alt4={AIcanadaCourseData[0].alt4}
              alt5={AIcanadaCourseData[0].alt5}
              alt6={AIcanadaCourseData[0].alt6}
              alt7={AIcanadaCourseData[0].alt7}
              alt8={AIcanadaCourseData[0].alt8}
              alt9={AIcanadaCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={AIcanadaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={AIcanadaCourseData[0].CityTextB}
          CityText={AIcanadaCourseData[0].CityText}
          CityTextLB={AIcanadaCourseData[0].CityTextLB}
          CityTextL={AIcanadaCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
