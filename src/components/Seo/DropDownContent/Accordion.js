import React, { useState } from "react";
import styles from "./Accordion.module.css"; // Import your CSS module
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      leftSideHeadline: "About The Program",
      title: "About The Program",
      content: (
        <>
          <h4 style={{ fontSize: "20px" }}>
            Presenting Learner-centric Data Science Training Programs with
            Globally Recognized Certifications
          </h4>
          <p>
            In today's world of technology, data scientists help businesses make
            smart decisions based on their advanced analytics. Both working pros
            and companies find data modeling as a weapon for business analytics
            to conquer unbeatable success. Such shifts encourage businesses to
            adopt more resilient analytical and statistical methods to attain
            assured success. Meanwhile, its impact on global job market dynamics
            is worth noticing. Thus, the demand for a custom-fit data science
            certification course increases faster.
          </p>

          <p>
            As the demand for upskilling increases, Learnbay’s top data science
            courses take the central stage. Our industry-driven training
            programs help you remain competitive and sustain for longer. Besides
            skills upgrades, our premium training programs make you apt to crack
            top-tier job interviews with leading MNCs.
          </p>
          <p>
            Today’s digital space believes in data-driven working methods like
            data management, data mining, and predictive analytics-infused
            problem-solving. Thus, employers across the globe search for
            skillful data experts at every career level. Such job market shifts
            encourage experts to rethink their career paths with better offers.
            A data science course with cutting-edge career-building gains is
            helpful.
          </p>
          <p>
            Yet, generic course modules with less realistic touch limit career
            progress somewhat. Unlike standard courses, our{" "}
            <b>data science course syllabus</b> crafts a definite career with
            proven skills.
          </p>
          <p>
            Upskilling with our data science online course helps you develop
            in-demand skills to thrive in today’s competitive career race.
            Working pros at early to senior career levels can enroll in the best
            data science courses to attain success. In addition, certificates
            from IBM & Microsoft and a master’s degree (Woolf University) uplift
            the career value.
          </p>

          <p>
            <b>
              Our trending data science courses with elite career gains are here
              –
            </b>
          </p>
          <br />
          <ul style={{ marginLeft: "20px" }}>
            <a
              style={{ color: "#2D9CD7", fontWeight: "600" }}
              href="https://www.learnbay.co/datascience/data-science-certification-courses"
              target="_blank"
            >
              <li>Data Science Foundation Program </li>
            </a>
            <br />
            <a
              style={{ color: "#2D9CD7", fontWeight: "600" }}
              href="https://www.learnbay.co/datascience/data-science-ai-for-freshers"
              target="_blank"
            >
              {" "}
              <li>Data Science and AI Program for Freshers </li>
            </a>
            <br />
            <a
              style={{ color: "#2D9CD7", fontWeight: "600" }}
              href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
              target="_blank"
            >
              <li>Advanced Data Science and AI Certification</li>
            </a>
            <br />
            <a
              style={{ color: "#2D9CD7", fontWeight: "600" }}
              href="https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program"
              target="_blank"
            >
              <li>Data Science and AI Master Certification Program </li>
            </a>
            <br />
            <a
              style={{ color: "#2D9CD7", fontWeight: "600" }}
              href="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
              target="_blank"
            >
              <li>Master’s Degree in CS: Data Science and AI</li>
            </a>
            <br />
          </ul>
          <br />

          <h4 style={{ fontSize: "20px" }}>
            Best Data Science Courses Online in 2024
          </h4>
          <br />
          <p>
            Experts from diverse domains and professional backgrounds can
            kick-start a growing career in data science. Understanding the
            career goals and enrolling in a proven data science online training
            is vital for success.
          </p>
          <p>
            Experts eager to learn the basics of data science can enroll in our
            foundation program. Whereas, Pros aspiring to leverage their earning
            limits can opt for certification programs with better job and
            placement offers. Likewise, working pros wishing to rebuild their
            career on a global scale can go for a master’s program.
          </p>

          <p>
            Our data science and artificial intelligence course offers a
            360-degree career reshaping stage with in-detailed job-ready
            programs. Plus, globally recognized certifications and master of
            science degrees enrich the success limits with endless gains.
          </p>
          <b>
            <p>Highlights of the Data Science Foundation Program</p>
          </b>
          <br />
          <ul style={{ marginLeft: "20px" }}>
            <li>Hybrid learning with affordable fees</li>
            <li>An in-detailed learning of data science tools and trends</li>
            <li>
              Project Innovation Labs (Real-time learning via hands-on capstone
              project)
            </li>
            <li>
              Globally recognized certifications (IBM Course completion
              certificate)
            </li>
            <li>Career Service PRO (100% Job and Placement Support)</li>
            <li>Attractive hikes and job calls from leading MNCs</li>
          </ul>
          <br />
          <p>
            <b>Highlights of the Data Science and AI Program for Freshers</b>
          </p>
          <br />
          <ul style={{ marginLeft: "20px" }}>
            <li>Hybrid learning with affordable fees</li>
            <li>1 MS (Microsoft) Certification</li>

            <li>An in-detailed learning of data science and AI tools </li>
            <li>
              Project Innovation Labs (Real-time projects in the final year)
            </li>
            <li>
              Globally recognized certifications (IBM Course completion
              certificate)
            </li>
            <li>6-month Internship Certificate</li>
            <li>Career Service PRO (100% Job and Placement Support)</li>
            <li>Attractive hikes and job calls from leading MNCs</li>
          </ul>
          <br />
          <p>
            <b>Highlights of Advanced Data Science and AI Certification</b>
          </p>
          <br />
          <ul style={{ marginLeft: "20px" }}>
            <li>Hybrid learning with a flexible fee structure</li>
            <li>GenAI-inclusive course syllabus</li>
            <li>Project Innovation Labs (12+ Real-time projects)</li>
            <li>
              Globally recognized certifications (IBM Course completion
              certificate, MS certificate, IBM Project certificate)
            </li>
            <li>Career Service PRO (100% Job and Placement Support)</li>
            <li>Attractive hikes and job calls from leading MNCs</li>
          </ul>
          <br />
          <p>
            <b>
              Highlights of Data Science and AI Master Certification Program
            </b>
          </p>
          <br />
          <ul style={{ marginLeft: "20px" }}>
            <li>Hybrid training sessions with a flexible fee structure</li>
            <li>GenAI-rich course modules (AI & Data Science)</li>
            <li>Domain-specific training</li>
            <li>Project Innovation Labs (12+ Real-time projects)</li>
            <li>
              Globally recognized certifications (IBM Course completion
              certificate, MS certificate, 3 IBM Project certificates)
            </li>
            <li>Career Service PRO (100% Job Support)</li>
            <li>Lucrative job offers from leading MNCs</li>
          </ul>
          <p>
            <b>Highlights of a Master’s Degree in CS: Data Science and AI</b>
          </p>
          <br />
          <ul style={{ marginLeft: "20px" }}>
            <li>Hybrid training sessions from renowned experts</li>
            <li>GenAI-rich course modules (AI & Data Science)</li>
            <li>Domain-specific training </li>
            <li>Project Innovation Labs (12+ Real-time projects)</li>
            <li>
              Globally recognized certifications (1 IBM project certificate)
            </li>
            <li>Globally accredited master’s degree from Woolf University</li>
            <li>Effortless Immigration </li>
            <li>Career Service PRO (100% Job Support)</li>
            <li>Premium job offers from leading MNCs</li>
          </ul>
          <br />
          <p>
            Experts at any career level can opt for our data science training
            institute and upgrade their skill sets as per the latest trends.
            It's up to the learners and their career goals that help you decide
            on the right data science course.
          </p>
          <br />
          <h4 style={{ fontSize: "20px" }}>
            Locate Our <b>Data Science Courses</b> Across the Globe!!
          </h4>
          <p>
            At Learnbay, we believe in inclusive learning for notable career
            growth. Data science is rapidly changing its dynamics and welcoming
            working pros from diverse professions. We offer data science course
            for beginners and experienced via our global presence. Yes, you can
            locate us at prime global locations to continue your career growth
            journey effortlessly.
          </p>
          <br />
          <i>
            <b>Our prime locations are –</b>
          </i>
          <p>
            India, USA, UK, Dubai, Canada, Nigeria, Vietnam, Egypt, Australia,
            South Africa, Malaysia, Singapore, Germany, Brazil, Netherlands,
            France, Mexico, Kuwait, Switzerland, Sweden, Oman, South Korea,
            China, and Bangladesh.
          </p>

          <p>
            Experts eager to redefine their slow-paced careers can join our data
            science training courses at these prime locations. It elevates
            career growth chances with endless offers.
          </p>
        </>
      ),
    },
    {
      leftSideHeadline: "Domain Specialization      ",
      title: "Domain Specialization      ",
      content: (
        <>
          <p>
            In today’s digital space, domain-specific learning has become vital
            for optimal solutions. Data science has become the main force
            driving higher profits and helping firms retain themselves. Thus,
            domain knowledge is vital for experts, as it helps them solve issues
            with proven insights.{" "}
          </p>
          <p>
            Our leading-edge data science course institute offers
            domain-specific training sessions to enrich your prior knowledge. It
            helps you note down real issues and tackle them with the right
            methods. Learnbay’s best data science courses follow the trending
            domains to align them for upskilling. Such domain electives are –
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>BFSI</li>
            <br />
            <li>Healthcare</li>
            <br />
            <li>Marketing</li>
            <br />
            <li>Manufacturing</li>
            <br />
            <li>HR</li>
            <br />
            <li>Supply Chain</li>
            <br />
          </ul>
          <p>
            Experts can opt for any data science online course and choose the
            right domain for exciting career growth options.
          </p>
          <p>
            Apart from domain electives, our master’s data science course has
            two domain specializations. Here, learners must select any one
            domain specialization as per their interests. In short, experts must
            opt for one domain specialization in their preferred elective to
            continue upskilling.{" "}
          </p>
        </>
      ),
    },
    {
      leftSideHeadline: "Degree and Certification Details       ",
      title: "Degree and Certification Details       ",
      content: (
        <>
          <p>
            Data science is an ever-evolving field with infinite growth scopes.
            Working pros with stagnant skills must upgrade their skills to
            thrive. Yet, upskilling from a common course with generic
            validations can degrade career values. Unlike standard courses, our
            data science courses offer globally recognized certificates with
            valuable returns.{" "}
          </p>

          <h4 style={{ fontSize: "20px" }}>
            IBM Course Completion Certificate
          </h4>
          <p>
            Our industry collaboration with global tech leader IBM unlocks
            exciting career growth offers. Experts opting for industry-driven
            courses develop an in-detailed learning of data science and AI
            trends. We acknowledge their learned skills and expertise via an IBM
            course completion certificate. Once you complete your coursework,
            you will obtain a globally recognized certification.
          </p>
          <br />
          <br />
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm-min.webp"
            width={400}
            height={300}
            alt="certificate"
            loading="lazy"
          />
          <br />
          <h4 style={{ fontSize: "20px" }}>Microsoft Certificate </h4>
          <p>
            Our successful alliance with Microsoft expands your career growth
            horizons with limitless offers. Regardless of data science course
            fees, experts opt for our programs for globally valued industry
            certifications. You will obtain one MS certificate to leverage your
            earning limits.{" "}
          </p>
          <br />
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Azure%2BAI%2BFundamentals.png"
            width={400}
            height={300}
            alt="certificate"
            loading="lazy"
          />
          <br />
          <br />
          <h4 style={{ fontSize: "20px" }}>IBM Project Certificate</h4>
          <p>
            {" "}
            Our alliance with tech giant IBM unlocks successive ways to
            establish a global-level career with better hikes. Learners will
            obtain an IBM project certificate once they complete the course. It
            validates your learned skills to crack down on premium job offers
            worldwide.
          </p>
          <br />
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/new-project-cer-s.webp"
            width={400}
            height={300}
            alt="certificate"
            loading="lazy"
          />
          <br />
          <br />
          <h4 style={{ fontSize: "20px" }}>
            Master’s Degree from Woolf University
          </h4>

          <p>
            Apart from foundational and certification courses, we have expertise
            in data science master’s degree programs. Our comprehensively
            designed master’s in data science course validates your skills for
            global offers. Experts joining our master’s program will obtain a
            degree from Woolf University. Learners can step into highly-paying
            careers with their master’s degree. Our master’s degree has
            impactful recognition across 60+ Western countries.{" "}
          </p>
          <br />
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate/degree-woolf.webp"
            width={400}
            height={300}
            alt="certificate"
            loading="lazy"
          />
          <br />
        </>
      ),
    },
    {
      leftSideHeadline: "Job Assist Program ",
      title: "Job Assist Program ",
      content: (
        <>
          <p>
            In today’s tech era, we offer the best online data science courses
            with premium career gains. Experts joining any of the courses will
            equip themselves with alluring job offers from the leading MNCs. All
            the eligible learners with at least 70% score in tasks can avail of
            our job assist program.
          </p>

          <p>
            <b>
              {" "}
              By the end of our data science training, you will have expertise
              in –
            </b>
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>Introduction to data science to industry cases </li>
            <li>Insightful data analysis</li>
            <li>Decision-making techniques</li>
            <li>Statistical analysis </li>
            <li>Predictive modeling</li>
            <li>Data science and machine learning uses</li>
            <li>Efficient coding with programming languages </li>
            <li>Applied data science tools and trends</li>
            <li>Deep learning tools and uses</li>
            <li>Dashboard creation with facts </li>
            <li>Big data analytics </li>
            <li>Business intelligence tools</li>
            <li>GenAI trends (ChatGPT)</li>
          </ul>
          <br />
          <h4 style={{ fontSize: "20px" }}>Career Service PRO</h4>
          <p>
            Experts eager to re-establish their careers with premium gains must
            enroll in the best{" "}
            <b>data science course with placement guarantee.</b> We envision a
            successful career change with alluring growth offers. Apart from
            tech skills, our job assist program focuses on soft and behavioral
            skill development. Mentors guide our learners through their
            real-time experience and help them become a perfect organizational
            fit.
          </p>
          <p>
            <i>Vital career gains via our Career Service PRO are –</i>
          </p>

          <ul style={{ marginLeft: "20px" }}>
            <li>
              1:1 doubt-clearing with mentors (Course and Project-related){" "}
            </li>
            <li>Six 1:1 mock interviews (450+ industry partners)</li>
            <li>Three years of job support/Resume building</li>
            <li>Endless job calls from leading MNCs</li>
            <li>LinkedIn profile review </li>
          </ul>
          <br />
          <p>
            Unlike generic courses, we are moving on our path toward proven
            career shifts. A data science course with placement guarantee
            unlocks true career potential for experts with stagnancy. With our
            programs, you can unlock alluring job roles of data scientists, data
            analysts, data engineers, etc.{" "}
          </p>
        </>
      ),
    },
    {
      leftSideHeadline: "Know Your Projects ",
      title: "Know Your Projects ",
      content: (
        <>
          <p>
            Data science is reforming businesses with data-driven insights and
            higher returns. Employers across the globe search for skillful data
            experts with proven skills with the latest trends. Real-world
            projects are useful in optimizing growth chances and helping you
            land your dream roles.
          </p>

          <p>
            The best data science courses offer a project-based learning
            experience with assured career gains. Experts enrolling in our data
            science courses will have the scope to work with 12+ real-time
            projects. Learners can choose their preferred domain electives and
            continue their projects.
          </p>
          <p>
            <i>
              <b>Note:</b>
            </i>{" "}
            If you opt for our master’s data science online course, you will
            have three capstone projects in each domain specialization.
          </p>

          <p>
            Industry experts help our learners gain real-time knowledge of
            business cases and apply the right methods to reach solutions. Our
            experimental <b>data science training</b> enriches your skills as
            per the latest trends.{" "}
          </p>
          <p>
            Our data science projects cover trending topics related to data
            analytics, data visualizations, machine learning uses, artificial
            intelligence tools, etc. Real-time projects help you with fair data
            analysis and informed decision-making. Thus, experts at any career
            level can opt for our courses with better career returns.
          </p>

          <div className={styles.projectmain}>
            <div className={styles.mainbox}>
              <div className={styles.imgco}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/SAMSUNG.png"
                  width={100}
                  height={60}
                  alt="img"
                  loading="lazy"
                />
                <p className={styles.headline}>Samsung Health Monitor App</p>
              </div>
              <div>
                <p>
                  {" "}
                  Samsung will launch a new healthcare app soon. The key goal of
                  this app is accurate human activity tracking and providing
                  relevant health-related recommendations. Continuous analysis
                  of a massive amount of mobile data is required for such an
                  app.
                </p>
              </div>
            </div>
            <div className={styles.mainbox}>
              <div className={styles.imgco}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/IBM.png"
                  width={100}
                  height={60}
                  alt="img"
                  loading="lazy"
                />
                <p className={styles.headline}>IBM HR Analytics</p>
              </div>
              <div>
                <p>
                  {" "}
                  IBM intends to boost its HR department by identifying
                  employees' masked inconsistency. They need models to identify
                  the graphical variations in their 14000+ employees'
                  performances. Help them build models with your regressions and
                  other Data science abilities.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.projectmain}>
            <div className={styles.mainbox}>
              <div className={styles.imgco}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/amazon1.png"
                  width={100}
                  height={60}
                  alt="img"
                  loading="lazy"
                />
               <p className={styles.headline}>Amazon Customer Review Analysis</p>
              </div>
              <div>
                <p>
                  {" "}
                  Amazon has made a goal to identify the most successful
                  consumer electronic products. For these, they require live
                  customer review analysis. You can participate in the assisting
                  project of customer insight regeneration from the ongoing and
                  existing reviews via a suitable data visualization approach.
                </p>
              </div>
            </div>
            <div className={styles.mainbox}>
              <div className={styles.imgco}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BMW.png"
                  width={100}
                  height={60}
                  alt="img"
                  loading="lazy"
                />
                <p className={styles.headline}>BMW Used Car Price Optimization</p>
              </div>
              <div>
                <p>
                  {" "}
                  BMW allows existing customers to sell used cars but many
                  competitors are now offering better resale values. A data
                  science-powered statistical app from BMW will provide the best
                  market value for used cars based on parameters like Km driven,
                  daily pricing up and down, manufacturing dates, etc. Develop
                  your analytical skills through such projects.
                </p>
              </div>
             
            </div>
            
          </div>
          <Link href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf" target="_blank">
          <div style={{display:"flex", justifyContent:"center", alignContent:"center", alignItems:"center", cursor:"pointer"}}>
          <button  style={{fontSize:"12px", padding:"10px 16px", background:"#0072bc", border:"none", color:"#fff", borderRadius:"6px", cursor:"pointer" }} >View All Projects</button>
          </div>
          </Link>
        </>
      ),
    },

    // Add more sections as needed
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      // If the current accordion is being closed
      setActiveIndex(null); // Close the current accordion
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };
  const openAccordionByLeftSide = (index) => {
    toggleAccordion(index);
  };

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.leftside}>
        {/* Left side navigation */}
        {accordionData.map((section, index) => (
          <p
            key={index}
            onClick={() => openAccordionByLeftSide(index)}
            className={`${styles.leftSideItem} ${
              activeIndex === index && styles.active
            }`}
          >
            {section.leftSideHeadline}
          </p>
        ))}
      </div>
      <div className={styles.centerLine}></div>
      <div>
        {accordionData.map((section, index) => (
          <div key={index} className={styles.accordionItem}>
            {/* <div className={styles.leftSide}>
            <h2>{section.leftSideHeadline}</h2>
          </div> */}
            <div className={`${styles.rightSide}${activeIndex === index && styles.active}`}>
            
              <button
                className={`${styles.accordionButton} ${
                  activeIndex === index && styles.active
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {section.title}
                <MdArrowDropDown />
              </button>
              <div
                className={`${styles.accordionContent} ${
                  activeIndex === index && styles.show
                }`}
              >
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
