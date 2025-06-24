import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AIelhiCourseData } from "../../../CityData/Delhi/ArtificialIntelligenceCourseTrainingDelhiData";
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
        <title>Best Artificial Intelligence Course in Delhi - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay Provides Artificial Intelligence Training in Delhi for Managers and Leaders in Collaboration with IBM and Microsoft Certification. Enroll Now."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence course in Delhi, Artificial Intelligence training in Delhi, Artificial Intelligence institute in Delhi, best Artificial Intelligence institute in Delhi, Artificial Intelligence course in Delhi, Artificial Intelligence certification in Delhi, Artificial Intelligence training institute in Delhi, advanced Artificial Intelligence course in Delhi, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/delhi/artificial-intelligence-ai-course-training-delhi"
        />
        <meta
          property="og:title"
          content="Artificial Intellgince Course in Delhi | Data Science Training in Delhi"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Artificial Intellgince Course in Delhi. Learnbay is Advanced Artificial Intellgince Course Training Institute in Delhi. Artificial Intellgince Course in Delhi will enhance your career"
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
          content="Artificial Intellgince Course in Delhi | Data Science Training in Delhi"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Artificial Intellgince Course in Delhi. Learnbay is Advanced Artificial Intellgince Course Training Institute in Delhi. Artificial Intellgince Course in Delhi will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Artificial Intellgince Course in Delhi. Learnbay is Advanced Artificial Intellgince Course Training Institute in Delhi. Artificial Intellgince Course in Delhi will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/delhi/artificial-intelligence-ai-course-training-delhi"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training India"
        />
        {/* <meta name="language" content="English" /> */}
        {/* <meta name="rating" content="general" /> */}
        {/* <meta name="revisit-after" content="Daily" /> */}
        {/* <meta name="author" content="Learnbay" /> */}
        {/* <meta name="googlebot" content="index,follow" /> */}
        {/* <meta name="bingbot" content="index,follow" /> */}
        {/* <meta name="expires" content="never" /> */}
        {/* <meta name="coverage" content="Worldwide" /> */}
        {/* <meta name="robots" content="ALL" /> */}
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />

<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Learnbay - Data Analytics, Data Science Course Training in Delhi",
              "description":
                "Learnbay offers the best Artificial Intelligence Training in Delhi. Get mentorship from the industry experts with best career assistance. Enroll Now.",
              "url":
                "https://www.learnbay.co/datascience/delhi/artificial-intelligence-ai-course-training-delhi",
              "image":
                "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Business Centre, Arunachal Building 6th floor, Barakhamba Rd",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.628633344829215,
                "longitude": 77.22698341224316
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
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "10:00",
                  "closes": "15:00"
                }
              ],
              "priceRange": "₹ 1,15,000 + 18% GST",
              "servesCuisine": "Artificial Intelligence Education",
              "areaServed": "Delhi",
              "paymentAccepted": "Cash, Credit Card, Debit Card, EMI",
              "sameAs": [
                "https://www.facebook.com/learnbay/",
                "https://twitter.com/Learnbay",
                "https://www.instagram.com/learnbayofficial/",
                "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
                "https://www.linkedin.com/company/learnbay/"
              ]
            })
          }}
        />


<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/", 
            "@type": "Product", 
            "name": "Artificial Intelligence (AI) Training in Delhi",
            "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
            "brand": {
              "@type": "Brand",
              "name": "Learnbay"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "6831"
          
          

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
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Business Centre, Arunachal Building 6th floor, Barakhamba Rd",
              "addressLocality": "Delhi",
              "addressRegion": "New Delhi",
              "postalCode": "110001",
              "addressCountry": "IN"
            },
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
"name": "What are Artificial Intelligence (AI) training courses available at Learnbay in Delhi?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Foundational data science and Artificial Intelligence Training Course, Advanced data science and AI Certification Course, Machine learning and AI Certification, Data Science and AI Certification Course for Managers and Leaders Data Science and Artificial Intelligence Training with Placement Assistance"
}
},
{
"@type": "Question",
"name": "What are the prerequisites for these AI training Courses in Delhi?",
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
"name": "What is a Flexi Subscription in these advanced artificial intelligence courses in Delhi?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Those who enroll for AI live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational data science and Artificial Intelligence Training Course- 1 Year Advanced data science and AI Certification Course- 3 Years Machine learning and AI Certification- 3 Years Data Science and AI Certification Course for Managers and Leaders- 3 Years Data Science and Artificial Intelligence Training with Placement Assistance - 3-years."
}
},
{
"@type": "Question",
"name": "What’s the duration of these advanced AI in Delhi?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The duration of these courses is about 6-15 months, which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Monday to Friday - 2 hours/day and Saturday & Sunday - 3.5 hours/day Foundational Data Science and Artificial Intelligence Training Course (220+ hours) Weekday batch - 6 months Weekend batch - 8 months Machine learning and AI Certification (280+ hours) Weekday batch - 9.5 months Weekend batch - 11 months Advanced Data Science and AI Certification Course (270+ hours) Weekday batch - 7 months Weekend batch - 9 months Data Science and AI Certification Course for Managers and Leaders (340+ hours) Weekday batch - 11 months Weekend batch - 13 months Data Science and Artificial Intelligence Training with Placement Assistance (380+ hours) Weekday batch - 13 months Weekend batch - 15 months"
}
},
{
"@type": "Question",
"name": "What is the learning mode of Artificial Intelligence Certification courses in Delhi at Learnbay?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We provide both classroom and online AI training modes. Based on your requirement, you can choose your preferred mode."
}
},
{
"@type": "Question",
"name": "How can I opt for a Hybrid mode of learning in IBM artificial intelligence training courses in Delhi, At Learnbay?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
}
},
{
"@type": "Question",
"name": "What is domain specialization in the professional AI certification courses provided by Learnbay in Delhi?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We offer industry-specific full-stack AI modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational AI course."
}
},
{
"@type": "Question",
"name": "What are the available elective domain options in the different artificial intelligence training courses of Learnbay in Delhi?",
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
"name": "What is the total fee for Learnbay AI Certifications courses in Delhi?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The total course fee for the Foundational Data Science and Artificial Intelligence Training Course is 75,000/- inclusive of GST. Advance Data Science and AI Certification course is 1,25,000/- inclusive of GST. Data Science and AI Certification Course for Managers and Leaders is 1,35,000/- inclusive of GST. Data Science and Artificial Intelligence Training with Placement Assistance is 1,55,000/- inclusive of GST. Machine learning and AI Certification is 1,35,000/-inclusive of GST."
}
},
{
"@type": "Question",
"name": "Can I pay in installments for these AI Certification courses in Delhi?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 9 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
}
},
{
"@type": "Question",
"name": "Is there any scholarship/discount available for these Artificial intelligence training courses available in Delhi? What is Group Discount?",
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
"text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
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
"name": "How many real-time projects/case studies will be covered in these artificial intelligence certification courses in Delhi?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Depending on the course you choose the number of live projects will vary. Foundational Data Science and Artificial Intelligence Training Course- 8 projects. Advance Data Science and AI Certification course-12 projects. Data Science and AI Certification Course for Managers and Leaders- 15 projects. Data Science and Artificial Intelligence Training with Placement Assistance- 15 projects. Machine learning and AI Certification- 15 projects. Click here to download the list of the projects."
}
},
{
"@type": "Question",
"name": "How will the projects be executed in Delhi?",
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
"text": "Yes, you will be awarded IBM accredited Data Scientist Certificate on successful course completion. But Based on the course you choose you can get Multiple certification options too. Foundational Data Science and Artificial Intelligence Training Course- 1 Course Completion Certificate. Advance Data Science and AI Certification course-1 Course Completion Certificate + 1-project experience certificate + 4 microdata science skills certificates = 6 Certificates. Data Science and AI Certification Course for Managers and Leaders- 1 Course Completion Certificate + 1-project experience certificate + 6 microdata science skills certificates= 8 Certificates. Data Science and Artificial Intelligence Training with Placement Assistance- 1 Course Completion Certificates Machine learning and AI Certification- 1 Course Completion Certificate + 1-project experience certificate + 4 microdata science skills certificates = 6 Certificates. *All the certificates accredited by IBM. For more details, please refer to the respective course syllabus.."
}
},
{
"@type": "Question",
"name": "What's the eligibility for a job assistance Program in Learnbay artificial intelligence training courses in Delhi?",
"acceptedAnswer": {
"@type": "Answer",
"text": "You should have completed the course with: A minimum score of 70% in assessments Should have completed the assignments and case studies, Worked and successfully completed the minimum recommended number of real-time projects."
}
},
{
"@type": "Question",
"name": "How long will I get support for job assistance at Learnbay in Delhi?",
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
"name": "Can a Learnbay student in Delhi choose to study from their desired mentor?",
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
"text": "Job assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNCs/startups. This assistance is provided unless one gets placed in a company."
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
          firstToparaImg=" For Managers and Leaders"
          firstHeading="Artificial Intelligence (AI) Training in Delhi"
          firstTopPara="Becomes an AI Expertise In Product Based MNCs"
          cityParaCont="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "
        />
        <SecondSection SecondSectionData={AIelhiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={AIelhiCourseData[0].testimonial}
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
              ProgramBot1={AIelhiCourseData[0].ProgramBot1}
              ProgramBot2={AIelhiCourseData[0].ProgramBot2}
              ProgramHead3={AIelhiCourseData[0].ProgramHead3}
              ProgramBot3={AIelhiCourseData[0].ProgramBot3}
              ProgramBot66={AIelhiCourseData[0].ProgramBot66}
              ProgramBot67={AIelhiCourseData[0].ProgramBot67}
              ProgramBot4={AIelhiCourseData[0].ProgramBot4}
              ProgramBot5={AIelhiCourseData[0].ProgramBot5}
              ProgramBot6={AIelhiCourseData[0].ProgramBot6}
              Courselink1={AIelhiCourseData[0].Courselink1}
              Courselink2={AIelhiCourseData[0].Courselink2}
              Courselink3={AIelhiCourseData[0].Courselink3}
              Courselink4={AIelhiCourseData[0].Courselink4}
              Courselink5={AIelhiCourseData[0].Courselink5}
              Course1={AIelhiCourseData[0].Course1}
              Course2={AIelhiCourseData[0].Course2}
              Course3={AIelhiCourseData[0].Course3}
              Course4={AIelhiCourseData[0].Course4}
              Course5={AIelhiCourseData[0].Course5}
              DomainHead1={AIelhiCourseData[0].DomainHead1}
              DomainBot1={AIelhiCourseData[0].DomainBot1}
              DomainBot2={AIelhiCourseData[0].DomainBot2}
              DomainBot3={AIelhiCourseData[0].DomainBot3}
              DomainList1={AIelhiCourseData[0].DomainList1}
              DomainList2={AIelhiCourseData[0].DomainList2}
              DomainList3={AIelhiCourseData[0].DomainList3}
              DomainList4={AIelhiCourseData[0].DomainList4}
              DomainList5={AIelhiCourseData[0].DomainList5}
              DomainList6={AIelhiCourseData[0].DomainList6}
              DomainList7={AIelhiCourseData[0].DomainList7}
              DomainList8={AIelhiCourseData[0].DomainList8}
              DomainList9={AIelhiCourseData[0].DomainList9}
              DomainList10={AIelhiCourseData[0].DomainList10}
              Domainlink1={AIelhiCourseData[0].Domainlink1}
              Domainlink2={AIelhiCourseData[0].Domainlink2}
              Domainlink3={AIelhiCourseData[0].Domainlink3}
              Domainlink4={AIelhiCourseData[0].Domainlink4}
              Domainlink5={AIelhiCourseData[0].Domainlink5}
              Domainlink6={AIelhiCourseData[0].Domainlink6}
              Domainlink7={AIelhiCourseData[0].Domainlink7}
              Domainlink8={AIelhiCourseData[0].Domainlink8}
              Domainlink9={AIelhiCourseData[0].Domainlink9}
              Domainlink10={AIelhiCourseData[0].Domainlink10}
              CertificationBot1={AIelhiCourseData[0].CertificationBot1}
              CertificationBot2={AIelhiCourseData[0].CertificationBot2}
              CertificationHead1={AIelhiCourseData[0].CertificationHead1}
              src={AIelhiCourseData[0].src}
              src22={AIelhiCourseData[0].src22}
              src33={AIelhiCourseData[0].src33}
              ModuleBot1={AIelhiCourseData[0].ModuleBot1}
              ModuleBot2={AIelhiCourseData[0].ModuleBot2}
              ModuleBot3={AIelhiCourseData[0].ModuleBot3}
              ModuleBot4={AIelhiCourseData[0].ModuleBot4}
              syllabush1={AIelhiCourseData[0].syllabush1}
              syllabusb1={AIelhiCourseData[0].syllabusb1}
              SyllabusBotlist11={AIelhiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={AIelhiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={AIelhiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={AIelhiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={AIelhiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={AIelhiCourseData[0].SyllabusBotlist16}
              syllabush2={AIelhiCourseData[0].syllabush2}
              syllabusb2={AIelhiCourseData[0].syllabusb2}
              SyllabusBotlist21={AIelhiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={AIelhiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={AIelhiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={AIelhiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={AIelhiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={AIelhiCourseData[0].SyllabusBotlist26}
              syllabush3={AIelhiCourseData[0].syllabush3}
              syllabusb3={AIelhiCourseData[0].syllabusb3}
              SyllabusBotlist31={AIelhiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={AIelhiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={AIelhiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={AIelhiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={AIelhiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={AIelhiCourseData[0].SyllabusBotlist36}
              syllabush4={AIelhiCourseData[0].syllabush4}
              syllabusb4={AIelhiCourseData[0].syllabusb4}
              SyllabusBotlist41={AIelhiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={AIelhiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={AIelhiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={AIelhiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={AIelhiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={AIelhiCourseData[0].SyllabusBotlist46}
              syllabussrc={AIelhiCourseData[0].syllabussrc}
              JobBot1={AIelhiCourseData[0].JobBot1}
              JobBot2={AIelhiCourseData[0].JobBot2}
              JobHead2={AIelhiCourseData[0].JobHead2}
              JobHead1={AIelhiCourseData[0].JobHead1}
              JobBot3={AIelhiCourseData[0].JobBot3}
              JobBot4={AIelhiCourseData[0].JobBot4}
              ProjectsBot1={AIelhiCourseData[0].ProgramBot1}
              src1={AIelhiCourseData[0].src1}
              ProjectsH1={AIelhiCourseData[0].ProjectsH1}
              Projectsp1={AIelhiCourseData[0].Projectsp1}
              src2={AIelhiCourseData[0].src2}
              ProjectsH2={AIelhiCourseData[0].ProjectsH2}
              Projectsp2={AIelhiCourseData[0].Projectsp2}
              src3={AIelhiCourseData[0].src3}
              ProjectsH3={AIelhiCourseData[0].ProjectsH3}
              Projectsp3={AIelhiCourseData[0].Projectsp3}
              src4={AIelhiCourseData[0].src4}
              ProjectsH4={AIelhiCourseData[0].ProjectsH4}
              Projectsp4={AIelhiCourseData[0].Projectsp4}
              AlumniBot1={AIelhiCourseData[0].AlumniBot1}
              Asrc1={AIelhiCourseData[0].Asrc1}
              AlumniH1={AIelhiCourseData[0].AlumniH1}
              Alumnip1={AIelhiCourseData[0].Alumnip1}
              Asrc2={AIelhiCourseData[0].Asrc2}
              AlumniH2={AIelhiCourseData[0].AlumniH2}
              Alumnip2={AIelhiCourseData[0].Alumnip2}
              Asrc3={AIelhiCourseData[0].Asrc3}
              AlumniH3={AIelhiCourseData[0].AlumniH3}
              Alumnip3={AIelhiCourseData[0].Alumnip3}
              Asrc4={AIelhiCourseData[0].Asrc4}
              AlumniH4={AIelhiCourseData[0].AlumniH4}
              Alumnip4={AIelhiCourseData[0].Alumnip4}
              alt1={AIelhiCourseData[0].alt1}
              alt2={AIelhiCourseData[0].alt2}
              alt3={AIelhiCourseData[0].alt3}
              alt4={AIelhiCourseData[0].alt4}
              alt5={AIelhiCourseData[0].alt5}
              alt6={AIelhiCourseData[0].alt6}
              alt7={AIelhiCourseData[0].alt7}
              alt8={AIelhiCourseData[0].alt8}
              alt9={AIelhiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={AIelhiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={AIelhiCourseData[0].CityTextB}
          CityText={AIelhiCourseData[0].CityText}
          CityTextLB={AIelhiCourseData[0].CityTextLB}
          CityTextL={AIelhiCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
