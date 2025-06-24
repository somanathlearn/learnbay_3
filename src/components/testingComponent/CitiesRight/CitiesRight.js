import Image from "next/image";
import { useState } from "react";
import { BsClock } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import Button from "../../Global/Button/Button";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import styles from "./CitiesRight.module.css";
import YoutubeEmbed from "../YoutubeVideo/YoutubeEmbed";

const CitiesRight = ({
  ProgramHead1,
  ProgramHead15,
  ProgramHead16,
  ProgramHead17,
  ProgramHead18,
  ProgramHead19,
  ProgramHead20,
  ProgramHead2,
  ProgramBot14,
  ProgramBot15,
  ProgramBot16,
  ProgramBot17,
  ProgramBot18,
  ProgramBot32,
  ProgramHead3,
  ProgramHead4,
  ProgramHead5,
  ProgramHead6,
  ProgramHead8,
  ProgramHead9,
  ProgramHead10,
  ProgramHead11,
  ProgramHead12,
  ProgramHead13,
  ProgramHead14,
  ProgramBot6,
  listitem1,
  ProgramBot7,
  Programvideo,
  // GoogleMaps,
  // Googlemap,
  ProgramHead7,
  ProgramBot8,
  ProgramBot9,
  ProgramBot10,
  ProgramBot11,
  ProgramBot12,
  ProgramBot13,
  ProgramBot1,
  ProgramBot2,
  ProgramBot3,
  ProgramBot31,
  ProgramBot66,
  ProgramBot67,
  ProgramBot4,
  ProgramBot5,
  ProgramBot51,
  DomainHead1,
  DomainHead2,
  DomainHead3,
  DomainHead30,
  DomainHead4,
  DomainHead5,
  DomainHead6,
  DomainHead7,
  DomainBot1,
  DomainBot2,
  DomainBot3,
  DomainMasterBot1,
  DomainMasterh4,
  DomainMasterBot2,
  DomainMasterBot3,
  masterdomain,

  DomainMasterlist1,
  DomainMasterlist2,
  DomainMasterBot4,
  DomainMasterHead1,
  DomainBot4,
  DomainBot5,
  DomainBot6,
  DomainBot7,
  DomainBot8,
  DomainBot9,
  DomainBot10,
  DomainBot11,
  DomainBot12,
  AlumniHead1,
  DomainList1,
  DomainList2,
  DomainList3,
  DomainList4,
  DomainList5,
  DomainList6,
  DomainBot40,
  DomainBot41,
  DomainList7,
  DomainList8,
  DomainList9,
  DomainList10,
  CertificationHead1,
  CertificationHead2,
  CertificationHead3,
  CertificationHead29,
  CertificationHead30,
  CertificationHead31,
  CertificationHead32,
  CertificationBot1,
  CertificationBot2,
  CertificationBot5,
  CertificationBot3,
  CertificationBot4,
  CertificationmasterBot5,
  CertificationBot6,
  CertificationBot7,
  CertificationMasterHead1,
  CertificationMasterHead2,

  src,
  ModuleMasterBot1,
  ModuleMasterBot2,
  ModuleMasterBot3,
  ModuleHead1,
  ModuleMasterHead1,
  DSNoModule,
  MasterModulelist,
  ModuleMasterHead2,
  ModuleMasterlist1,
  ModuleMasterlist2,
  ModuleMasterlist3,
  ModuleMasterlist4,
  ModuleMasterlist5,
  ModuleMasterlist6,
  ModuleMasterlist7,

  ModuleHead2,
  ModuleHead3,
  ModuleBot1,
  ModuleBot2,
  ModuleBot10,
  ModuleBotL21,
  ModuleBotL22,
  ModuleBotL23,
  ModuleBot21,
  ModuleBot3,
  ModuleBot4,
  ModuleBot41,
  ModuleBot42,
  ModuleBot43,
  ModuleBot44,
  ModuleBot45,
  ModuleBot46,
  ModuleBot47,
  ModuleBot48,
  Modulelist1,
  Modulelist2,
  Modulelist3,
  Modulelist4,
  Modulelist5,
  Modulelist6,
  Modulelist7,
  syllabush1,
  syllabusb1,
  SyllabusBotlist11,
  SyllabusBotlist12,
  SyllabusBotlist13,
  SyllabusBotlist14,
  SyllabusBotlist15,
  SyllabusBotlist16,
  syllabush2,
  syllabusb2,
  SyllabusBotlist21,
  SyllabusBotlist22,
  SyllabusBotlist23,
  SyllabusBotlist24,
  SyllabusBotlist25,
  SyllabusBotlist26,
  syllabush3,
  syllabusb3,
  SyllabusBotlist31,
  SyllabusBotlist32,
  SyllabusBotlist33,
  SyllabusBotlist34,
  SyllabusBotlist35,
  SyllabusBotlist36,
  syllabush4,
  syllabusb4,
  SyllabusBotlist41,
  SyllabusBotlist42,
  SyllabusBotlist43,
  SyllabusBotlist44,
  SyllabusBotlist45,
  SyllabusBotlist46,
  syllabussrc,
  JobHead1,
  JobBot51,
  MasterJobBot1,
  MasterJobSpan1,
  MasterJobBot2,
  MasterJobBot3,
  JobBot1,
  JobBot2,
  JobHead2,
  JobBot7,
  JobHead3,
  JobBot8,
  JobHead5,
  JobBot9,
  JobBot10,
  JobHead6,
  JobBot11,
  JobBot3,
  JobHead4,
  JobHeadIndia01,
  JobBot19,
  JobBot50,
  JobBot5,
  JobBot6,
  Joblist1,
  Joblist2,
  Joblist3,
  Joblist4,
  Joblist5,
  Joblist6,
  Joblist7,
  Joblist8,
  Joblist9,
  Joblist10,
  Joblist11,
  Joblist12,
  Joblist13,
  JobBot001,
  JobBot002,
  JobBot4,
  JobHead19,
  JobBot18,
  JobBot20,
  JobBotmaster20,
  JobBot003,
  JobBot007,
  JobBot0span,
  JobBot34,
  JobBot35,
  Joblist14,
  Joblist15,
  Joblist16,
  Joblist17,
  JobHead21,
  JobBot21,
  JobBot22,
  JobHeadAustin01,
  JobBotAustin01,
  JobBot60,
  JobBot23,
  JobHead23,
  JobBot29,
  JobBot39,
  JobBot41,
  JobHead30,
  JobBot36,
  Joblist18,
  Joblist19,
  Joblist20,
  Jobspan,
  JobBotMasterBot4,
  JobBotMasterBot5,
  JobBotMasterBot6,

  Joblist21,
  Joblist22,
  JobHead22,
  JobBot24,
  JobBot37,
  Joblist23,
  Joblist24,
  Joblist25,
  Joblist26,
  Joblist27,
  Joblist28,
  Joblist29,
  Joblist30,
  JobBot25,
  JobBot26,
  JobBot27,
  JobBot28,
  JobHead10,
  JobBot31,
  onlyDhaka,
  ListJob1,
  ListJob2,
  ListJob3,
  ListJob4,
  ListJob5,
  ListJob6,
  ListJob7,
  ListJob8,
  ListJob9,
  ListJob10,
  ListJobBot1,
  JobBot30,
  JobSpan1,
  Joblist50,
  Joblist51,
  Joblist52,
  Joblist53,
  Joblist54,
  JobHead001,
  JobBot004,
  JobBot005,
  JobBot006,
  cityTextDSUK,
  usaonly,
  hideDSonly,
  ProgramBotItaliic105,
  JobBot40,
  ProjectsBot1,
  ProjectsBot2,
  ProjectsBot3,
  ProjectsBot4,
  ProjectsBot5,
  ProjectsBot6,
  ProjectsBot7,
  ProjectsBot31,
  ProjectsBot32,
  ProjectsHead1,
  ProjectsHead2,
  ProjectsHead3,
  AlumniBot1,
  src1,
  src2,
  src23,
  Dsonlymsatercer,
  src3,
  src4,
  src22,
  src33,
  ProjectsH1,
  ProjectsH2,
  ProjectsH3,
  ProjectsH4,
  Projectsp1,
  Projectsp2,
  Projectsp3,
  Projectsp4,
  Asrc1,
  AlumniH1,
  Alumnip1,
  Asrc2,
  AlumniH2,
  Alumnip2,
  Asrc3,
  AlumniH3,
  Alumnip3,
  Asrc4,
  AlumniH4,
  Alumnip4,
  Courselink1,
  Courselink2,
  Courselink3,
  Courselink4,
  Courselink5,
  Courselink6,
  Courselink7,
  Courselink8,
  Course1,
  Course2,
  Course3,
  Course4,
  Course5,
  Course6,
  Course7,
  Course8,
  Domainlink1,
  Domainlink2,
  Domainlink3,
  Domainlink4,
  Domainlink5,
  Domainlink6,
  Domainlink7,
  Domainlink8,
  Domainlink9,
  Domainlink10,
  alt1,
  alt2,
  alt3,
  alt4,
  alt5,
  alt6,
  alt7,
  alt8,
  alt9,
  fullStackCity,
  ProgramBot61,
  ProgramBot62,
  ProgramBot101,
  ProgramBot102,
  ProgramBot103,
  ProgramBot104,
  ProgramBot105,
  ProgramBot106,
  ProgramBot161,
  ProgramBot162,
  ProgramBot163,
  ProgramBot164,
  ProgramBot165,
  ProgramHead21,
  ProgramBot19,
  ProgramBot20,
  ProgramBot21,
  jobOutlookText,
  jobOutlooklink,
  ProgramBotItaliic31,
  cityText,
  cityTextDSChennai,
  cityTextDSPune,
  cityTextDSUSA,
  cityTextDSHyderabad,
  cityTextDSDelhi,
  cityTextDSmumbai,
  ProgramBot22,
  ProgramBot23,
  ProgramBot24,
  ProgramBot25,
  ProgramBot26,
  ProgramBot27,
  ProgramBot28,
  ProgramBot29,
  ProgramBot42,
  ProgramBot30,
  ProgramBot33,
  ProgramBot34,
  ProgramBot35,
  ProgramBot36,
  ProgramBot37,
  ProgramBot38,
  ProgramBot39,
  ProgramBot40,
  ProgramBot41,
  certificate2,
  certificate1,
  modulelist,
  joblist,
  showData,
  cityTextDSNGR,
  cityTextDSVM,
  cityTextVI,
  cityTextDSSingapore,
  cityTextDSSAfrica,
  cityTextBangla,
  cityTextDhaka,
  cityTextMasterUSA,
  cityTextMastergermany,
  cityTextDSMalaysia,
  cityTextDSAustin,
  cityTextDSEgypt,
  cityTextMasterAUS,
  DSindia,
  DSkolkota,
  DSBhub,
  DSnagpur,
  DSComibotre,
  DSJaipur,
  DSPatna,
  DSMarth,
  DSNoida,
  DSIndore,
  DSKochi,
  DSABangalore,
  DSAPune,
  listsCertificate,
  Certificationlist1,
  Certificationlist2,
  Certificationlist3,
  hydraListJob,
  CyberSecurityBangalore,
  CyberSecurityPune,
  embedId
}) => {
  const [read, setRead] = useState(false);
  const handler = () => {
    setRead(!read);
  };

  return (
    <section className={styles.CitiesRightHead}>
      <div id="Program">
        <div className={styles.CitiesRightSpan}>
          <span>About The Program</span>
        </div>
        {/* {cityTextDAbangalore ? ("") : ("")} */}

        {cityTextDSmumbai ? (
          <div className={styles.CitiesRightInner}>
            <p>
              Learnbay provides an exceptional{" "}
              <b>data science course in Mumbai</b> taught by renowned industry
              professionals. These trainers come from reputed MNCs, making
              Learnbay a reliable choice for those looking to learn data
              science. Both tech and non-tech applicants who want to make a
              career switch can also choose this course. Learnbay offers it
              online as well as in hybrid mode.{" "}
            </p>
            <p>
              Our courses are created by professionals having in-depth knowledge
              of Data Science. They are designed to be simpler to understand for
              people unfamiliar with coding and analytical methods. The focus is
              always on hiring the best data science subject matter experts to
              design course modules.
            </p>
            <p>
              Learnbay’s <b>data science course in Mumbai</b> is intended to
              help working individuals transition smoothly into a new job. The
              program also offers industry-based practical training in a
              well-supervised learning environment. It has been specially
              created to train professionals for the growing need for data
              scientists in the commercial sector.
            </p>
            <p>
              You will receive the greatest and most reliable{" "}
              <b>online data science training in Mumbai</b> at Learnbay, which
              is created to match the expectations of the current competitive
              job market. Learnbay's <b>data science course in Mumbai</b> is a
              great option for people wishing to succeed in this sector because
              of the dramatic rise in the production and use of data in the
              twenty-first century.
            </p>
            <p>
              There are many benefits to choosing{" "}
              <b>online data scientist training in Mumbai</b>. With more data
              being produced daily, corporations largely depend on data science,
              and Mumbai is quickly becoming one of India's top job hubs. As a
              result, Mumbai offers a variety of opportunities for{" "}
              <b>online data science training</b>. However, when securing
              guaranteed job placement, the list of reliable options becomes
              shorter. Moreover, considering the cost-effectiveness of the
              course, the list of reliable options shrinks even further.
            </p>
            <p>
              In Mumbai, data science has become incredibly popular in recent
              years. With a 31% share of job vacancies, Mumbai has emerged as
              India's second-largest hotspot for analytics and data science
              jobs, according to recent research by Analytics India Magazine.
              The survey also notes a 45% growth in demand for data scientists
              in Mumbai over the course of the previous year. These figures
              emphasize the significance of obtaining top-notch{" "}
              <b>data science training in Mumbai</b> to satisfy the rising
              demand for qualified specialists.
            </p>
            <p>
              We cover the data science course using various modules, some of
              which are mentioned below:{" "}
            </p>
            <ul>
              <li>Cohort Orientation </li>
              <li>Special Programming Classes</li>
              <li>Basic Python Programming</li>
              <li>Special Python Programming</li>
              <li>Statistics</li>
              <li>Machine Learning </li>
              <li>SQL</li>
              <li>Tableau</li>
              <li>Deep Learning</li>
            </ul>
            <p>
              The course duration of the online{" "}
              <b>Data Science training in Mumbai</b> is 250+ hours. Our trained
              professionals will tutor you for almost 9 months.{" "}
            </p>
            <p>
              The structured course consists of <b>4 terms.</b>
            </p>
            <b>Module 0: Preparatory Session </b>
            <p>
              This module helps you familiarize yourself with the basics of Data
              Science and Machine Learning. It is a preliminary phase to help
              individuals, particularly non-programmers, become comfortable with
              the basics of maths, programming, and data science foundation. It
              covers basic Python And R, Basic Mathematics, Essential Statistics
              for Data Science, Introduction to Anaconda, Jupyter notebook, Git
              and GitHub for data science, and other practical materials.{" "}
            </p>
            <p>
              Module 0 will teach you the basics of programming, including the
              flavors of Python, introduction to Git, GitHub, and memory
              management in Python. Learners will also get a brief knowledge of
              the fundamentals of statistics, including the mean, median, and
              mode. This module is for those with a non-technical background or
              those working in the non-IT Sector. Some tools covered in Module 0
              are Anaconda, Jupyter, Git, and GitHub.
            </p>
            <h2 className={styles.pHead}>Term 1 - Python for Data Science </h2>
            <b>Module (1) - Python Programming </b>
            <p>
              This module, which includes full-time, focused training sessions
              delivered through <b>live instructor-led online training</b>, is
              an important part of the course. It digs into Python programming
              foundations, a crucial skill for anyone looking to start a career
              as a modern data scientist. During this module, you will learn
              about fundamental programming ideas, Python data types, functions,
              modules, and libraries like Numpy and Pandas. Additionally, you
              will participate in case studies using Python libraries and show
              how these tools are applied in actual situations. You will have a
              strong foundation in Python programming by the end of this module,
              giving you the knowledge and abilities needed to start working as
              a data scientist.
            </p>
            <h2 className={styles.pHead}>
              Term 2 - Statistics and Machine Learning{" "}
            </h2>
            <b>Module (1) - Statistics </b>
            <p>
              The next lesson, vital for data science, focuses on teaching
              fundamental and statistical ideas. After this program, you will
              understand probability, inferential and descriptive statistics,
              exploratory data analysis (EDA), and data processing. You will
              also have the chance to complete four practice assignments
              relating to statistics to enrich your learning experience further.
              You can use your newly learned information in these practical
              exercises, promoting experiential learning.{" "}
            </p>
            <b>Module (2) - Machine Learning </b>
            <p>
              This module gives you access to the most current machine-learning
              methods and tools necessary for building models and reaching wise
              conclusions. The advanced machine learning techniques covered in
              this subject include support vector machines, principal component
              analysis (PCA), clustering, K-nearest neighbors (KNN) models, and
              regression and classification models. (SVM). Your instructor will
              walk you through each of these methods, giving you in-depth
              explanations and examples from the real world to help you
              understand. After finishing this subject, you'll be prepared to
              use cutting-edge machine-learning techniques to build solid models
              and analyze difficult data sets.{" "}
            </p>
            <h2 className={styles.pHead}>
              <b>Term 3 - Data Science Tools</b>
            </h2>
            <p>
              <b>Module 1 - SQL</b>
            </p>
            <p>
              <b>Module 2 - Mongo DB </b>
            </p>
            <p>
              <b>Module 3 - Tableau</b>
            </p>
            <p>
              <b>Module 4 - PowerBI</b>
            </p>
            <p>
              <b>Module 5 - Big Data and Spark Analytics</b>
            </p>
            <p>
              <b>Module 6 - Time Series</b>
            </p>
            <h2 className={styles.pHead}>
              <b>Term 4: Artificial Intelligence Tools</b>
            </h2>
            <p>
              <b>Module 1 - Deep Learning using TensorFlow</b>
            </p>
            <p>
              <b>Module 2 - Natural Language Processing</b>
            </p>
            <p>
              <b>Module 3 - Model Training and Deployment using ( AWS GCP) </b>
            </p>
            <h2 className={styles.pHead}>
              Premium Features of Data Science Training in Mumbai{" "}
            </h2>
            <p>
              Some of the premium features of online data science training in
              Mumbai are
            </p>
            <ol type="1">
              <li>
                <b>Live Interactive Classes:</b> Trained professionals take
                classes in the most interactive and hassle-free way.{" "}
              </li>

              <li>
                <b>One-on-one Mentorship:</b> You get a mentor who helps you
                throughout the process. You get assistance till placements.{" "}
              </li>

              <li>
                <b>Live Project Sessions:</b> These give you an idea of industry
                standards. An exclusive feature of cloud lab is also available.
              </li>

              <li>
                <b>Doubt Clearance Sessions:</b> After your live classes, you
                can take expert doubt clearance sessions to clear any doubts.{" "}
              </li>

              <li>
                <b>Resume Building Support:</b> Our experts teach you how to
                make a resume to get interviews in top MNCs and product-based
                startups.{" "}
              </li>

              <li>
                <b>Interview Preparation:</b> Learnbay trainers will equip you
                with the latest and in-demand interview Q&A to confidently face
                the tricky MAANG interviews. Also, by participating in several
                mock interviews, our professionals will assist you in improving
                your interview success rate and accelerating the hiring process.
              </li>
            </ol>
            <h2 className={styles.pHead}>
              Data Science Foundation Program in Mumbai with Placement
              Assistance{" "}
            </h2>
            <ul>
              <li>
                This course enhances your learning potential with
                industry-specific training.
              </li>
              <li>
                It is good for learners who belong to a non-technical
                background. If you are a working professional looking forward to
                switching your career, the foundation program will make it easy
                for you.{" "}
              </li>
              <li>This program’s fee is INR 1,10,000, excluding GST.</li>
              <h3 className={styles.pHead}>
                Highlights of the Data Science Foundation Program in Mumbai{" "}
              </h3>
              <li>
                This course offers an immersive and thorough learning
                experience, covering a variety of important subjects and
                approaches in data science, with more than 200 hours of live
                sessions.
              </li>
              <li>
                You get lifetime access to{" "}
                <b>recorded live classroom recordings</b>, allowing you to
                review and solidify your understanding of key ideas at your own
                speed.
              </li>
              <li>
                Additionally, you will get to work on{" "}
                <b>offline live projects</b> in the project innovation lab as
                part of the course, giving you practical experience using data
                science techniques to solve real-world issues.
              </li>
              <li>
                The course involves 8+ hours of real-world industrial projects,
                heavy reading, and lab work. These projects will help you
                advance your knowledge and abilities while giving you
                significant job experience.
              </li>
            </ul>
            <h2 className={styles.pHead}>
              Advance Data Science and AI Course in Mumbai with Placement
              Assistance{" "}
            </h2>
            <ul>
              <li>
                This program is ideal for students seeking in-depth instruction
                and a deeper understanding of the field. It will help you
                advance your knowledge of data science.
              </li>

              <li>
                For anyone wishing to change careers or advance their skills,
                this extensive course is meant to give a solid understanding of
                data science.
              </li>

              <li>
                This program is a cost-effective and accessible choice for
                anyone wishing to increase their knowledge and proficiency in
                data science, costing only INR 95,000 + 18% GST.
              </li>

              <h3 className={styles.pHead}>
                Highlights of Advance Data Science and AI Course in Mumbai
              </h3>
              <li>250+ hours of rigorous training</li>
              <li>Assured Interview calls</li>
              <li>Premium mentoring by MAANG and MNC experts</li>
              <li>2 years flexible subscription of learning materials</li>
              <li>12+ real-time industrial projects</li>
            </ul>
            <h2 className={styles.pHead}>
              Data Science and AI program for Managers and Leaders in Mumbai
              with Placement Assistance{" "}
            </h2>
            <ul>
              <li>
                If you are a manager or a leader with over 8+ years of
                experience, this course is best suited for you. {/* hello */}
              </li>
              <li>
                Managers in every organization must have a strong understanding
                of data science to make data-driven decisions effectively and
                boost revenue growth.
              </li>
              <li>The course fee is INR 1,10,000, excluding GST.</li>

              <h3 className={styles.pHead}>
                Highlights of Data Science and AI Program for Managers and
                Leaders in Mumbai
              </h3>
              <li>Consists of 400+ hours of live sessions </li>
              <li>15+ real-time industrial projects</li>
              <li>
                Online sessions guided by professionals working in top MNCs
              </li>
              <li>
                A variety of financing options are available to make it more
                economical
              </li>
            </ul>
            <h2 className={styles.pHead}>
              Data Science and AI Master Program in Mumbai with Placement
              Assistance{" "}
            </h2>
            <ul>
              <li>
                Looking to become a specialized data scientist? Look no further
                than our comprehensive training, covering everything you need to
                succeed in this field.
              </li>
              <li>
                Our master's program in data science is designed to provide a
                thorough education in this rapidly-evolving field, with flexible
                scheduling options to suit your needs.
              </li>
              <li>
                Ready to take your data science skills to the next level? Our
                program will help you become an expert in this field with the
                knowledge and expertise you need to lead teams at top companies.
              </li>
              <li>
                Investing in your education is always a smart choice; our
                master's program in data science is no exception. With a course
                fee of INR 1,25,000 (excluding GST), it's an affordable option
                for anyone looking to advance their career in this exciting
                field.
              </li>

              <h3 className={styles.pHead}>
                Highlights of Data Science and AI Master Program in Mumbai with
                Placement Assistance
              </h3>
              <li>Consists of 500+ hours of live sessions </li>
              <li>35 LPA - 50 LPA salary package</li>
              <li>20+ real-time industrial projects. </li>
              <li>
                Practical covering of real-time industrial projects and case
                studies
              </li>
            </ul>
            <b>Note:</b> All data science courses at Learnbay come with the
            option of no-cost EMI.
            <h2 className={styles.pHead}>Data Science Trends in Mumbai </h2>
            <p>
              In Mumbai, the subject of data science is expanding quickly and
              has recently seen several trends. Artificial intelligence (AI) and
              machine learning (ML) across various businesses are among the most
              noticeable trends. Businesses are now using these technologies to
              analyze massive amounts of data to gain insights to help make
              better business choices.
            </p>
            <p>
              Another trend is the rising usage of cloud-based data processing
              and storage technology. Due to this development, businesses can
              process and store massive data efficiently and economically. A
              prominent trend in Mumbai has also been combining data science
              with other industries, such as healthcare and finance.{" "}
            </p>
            <p>
              The demand for talented data scientists is anticipated to grow as
              businesses rely on data-driven insights, making it a viable career
              choice for anyone wishing to enter the area.
            </p>
            <h2 className={styles.pHead}>
              Best Data Science Training Institute in Mumbai
            </h2>
            <p>
              The <b>best data science training institute in Mumbai</b> is{" "}
              <a
                href="https://www.learnbay.co/data-science-course-training-in-mumbai"
                target="_blank"
              >
                Learnbay
              </a>
              . It offers <b>online data science training</b> to give students a
              hands-on, business-based education. Some of the most knowledgeable
              professionals in the field who work for premier MNCs teach the
              course. This guarantees that it is current with the industry's
              most recent trends and innovations. It is additionally created to
              satisfy the requirements of today's fiercely competitive job
              market, making it a solid option for anyone wishing to enter the
              field of data science.
            </p>
            <p>
              Learnbay's course materials are created by experts and experienced
              professionals who have done a considerable study to simplify it
              for those new to coding and analytical approaches to learning.
              Additionally, Learnbay's data science course offers both
              theoretical and practical knowledge in a well-managed learning
              environment. The course has a high job placement rate and is
              specifically created to assist working professionals in making a
              successful career shift. It is also inexpensive, making it the
              perfect option for those who wish to master data science without
              going over budget. Learnbay has established itself as one of the
              best data science institutes in Mumbai with the help of all these
              qualities
            </p>
            <p>
              Learnbay's course materials are created by experts and experienced
              professionals who have done a considerable study to simplify it
              for those new to coding and analytical approaches to learning.
              Additionally, <b>Learnbay's data science course</b> offers both
              theoretical and practical knowledge in a well-managed learning
              environment. The course has a high job placement rate and is
              specifically created to assist working professionals in making a
              successful career shift. It is also inexpensive, making it the
              perfect option for those who wish to master data science without
              going over budget. Learnbay has established itself as one of the
              best <b>data science institutes in Mumbai</b> with the help of all
              these qualities.
            </p>
            <h2 className={styles.pHead}>
              Why Choose Learnbay Data Science Training Institute in Mumbai?
            </h2>
            <ol type="1">
              <li>
                <b>Affordability:</b> As one of India’s highly expensive cities,
                Mumbai’s professional training courses are higher. But the
                artificial intelligence and data science courses provided by
                Learnbay are comparatively much more affordable than the others.
                Sometimes, It might not seem cheaper to you if you compare only
                the price, but if you compare the benefits, certainly it's the
                best option across Mumbai. At Learnbay, we never compromise the
                quality of our data science certification course.
              </li>{" "}
              <br />
              <li>
                <b>Learning Flexibility:</b> With such an affordable and
                cost-effective course, you get flexible learning hours with our
                trainers and industry experts. And you can choose your
                instructor or change your instructor, depending on your personal
                preferences. Learnbay also offers doubt-clearing sessions with
                industry-based MAANG experts and data scientists. Keeping the
                preferences of learners in mind, Learnbay offers online as well
                as hybrid modes of teaching. Here you can opt and use Learnbay
                LMS on your mobile device, which will help you learn and get
                updated with the daily course on the go.
              </li>{" "}
              <br />
              <li>
                <b>Expertise:</b> Our instructors are working professionals with
                more than 8+ years of experience in the field, such as Senior
                Data Scientists, Machine Learning Engineers, AI Engineers, BI
                Developers, Big Data Architects, and Senior Data Analysts from
                top-class organizations.
              </li>{" "}
              <br />
              <li>
                <b>Promising Support:</b> Post-enrolment dedicated learning
                support is the most significant thing you should look into while
                searching for the{" "}
                <b>best data science training institute in Mumbai</b>. We
                provide the surety of 100% job assistance. We provide the
                maximum possible data science career support based on your
                performance and ability. Apart from this, there are plenty of
                different courses to choose from on our website. You can choose
                your custom-fit course based on your career stage and upcoming
                career goal. If someone lacks coding knowledge, they can take
                additional basic coding classes.
              </li>
            </ol>
            <h2 className={styles.pHead}>Did You Know? </h2>
            <p>
              In Mumbai, data science is assuming greater importance. Companies
              now rely more on data science to help them make wise decisions due
              to the volume of data created daily. Worldwide data production is
              predicted to reach a startling 463 exabytes by 2025. In
              comparison, just 5 exabytes of data have been uttered by humans as
              a whole. As a result, Mumbai will see an increase in demand for
              qualified data scientists.{" "}
            </p>
            <p>
              Additionally, data science is a profitable field; in Mumbai, the
              average <b>data scientist salary in Mumbai</b> is INR 10 lakhs.
              Learnbay offers the <b>best data science training in Mumbai</b> if
              you're interested in a career in data science.
            </p>
            <p>
              The course is taught by some of the top professionals in the field
              and is meant to give students practical, online, and
              industry-based training. Learnbay also provides offline project
              sessions for
              <a
                href="https://www.learnbay.co/machine-learning-course-training-in-mumbai"
                target="_blank"
              >
                machine learning
              </a>{" "}
              and{" "}
              <a
                href="https://www.learnbay.co/artificial-intelligence-ai-course-training-mumbai"
                target="_blank"
              >
                artificial intelligence
              </a>{" "}
              courses in Mumbai.
            </p>
          </div>
        ) : (
          ""
        )}

        {cityTextDSHyderabad ? (
          <div className={styles.CitiesRightInner}>
            <p>
              Data science is trending as a thriving career role in Hyderabad,
              setting the stage for an evolved career change. The city's
              bustling tech space adopts a data-driven culture to stay ahead of
              industry rivalry. Data science in Hyderabad calls for fast-growing
              evolutions that drive success. Experts from distinct fields rely
              on data science training in Hyderabad to build proven skills.
            </p>

            <p>
              Hyderabad is adopting cutting-edge tech creations to lead the
              city's emerging IT hubs. Many startups and trending MNCs in
              Hyderabad are harnessing the data-driven power to tackle related
              intricacies. Data science education has become crucial for experts
              following the industry shifts. This reflects a growing demand for
              data science institutes in Hyderabad with optimal gains.
            </p>

            <p>
              Learnbay concocts a world where data scientists are crucial for
              business growth and success. Hence, it lends notable help to busy
              working experts for steady learning. Our proactive step toward
              career stability via a data science course in Hyderabad states our
              future-proofing talents.
            </p>

            <p>
              Our data science program sets the stage for open and flexible
              learning with the intent of giving hassle-free training. Our motto
              to help busy working pros is justified via our hybrid training
              model and regularly revised syllabus. Experts join this best data
              science institute in Hyderabad to land promising roles. Our live
              interactive training sessions equip you with basic and refined
              skills.
            </p>

            <p>
              Indeed, our notable industry tie-ups with 450+ MNCs ease your
              job-hunting process. Our devoted placement teams enrich your
              job-ready skills to help you grab exciting job offers. Also, we
              offer IBM & Microsoft certificates for course tasks and
              domain-driven projects.
            </p>

            <h3 className={styles.pHead}>
              Cutting-edge Training Sessions by Eminent Industry Experts{" "}
            </h3>
            <b>Module 1- Basics and Advanced Python</b>

            <p>
              Learnbay’s leading-edge training sessions are famous among working
              pros eager to reshape their careers in data science. Our network
              with India’s leading MNCs and well-known industry experts enriches
              our training quality. Experts joining our data science training in
              Hyderabad can induce 100% career growth. Our hybrid training model
              helps busy experts master basic and avant-garde concepts to tackle
              data-driven risks.
            </p>
            <h3 className={styles.pHead}>
              Industry-enriched Career Counselling{" "}
            </h3>
            <p>
              Learnbay’s career experts and advisors provide real-time aid to
              learners in making fruitful decisions. As data science trends in
              Hyderabad enrich business growth and stability, upskilling has
              become vital. Our advisors help learners stay updated on industry
              shifts and make fair moves. Also, our career-driven advice and
              tips help you choose a proper upskilling program with the utmost
              returns.
            </p>

            <h3 className={styles.pHead}>
              Why is Learnbay claimed to be the best data science institute in
              Hyderabad?
            </h3>

            <p>
              Hyderabad’s data science job market requires constant reskilling
              and upskilling to induce exciting gains. Many diversified business
              setups spread their functions across Hyderabad, driving strategic
              gains. Hence, career upskilling has become vital for experts to
              confound stagnancies and attain success. In the interim, Learnbay
              has declared a job-driven data science course in Hyderabad.
            </p>
            <p>
              Today's modern workspace demands unique skill sets and mastery to
              handle digital threats and boost success rates. A firm’s ordeal in
              handling massive data sets and making informed decisions triggers
              the haste for data science. Hence, experts join top-rated data
              science institutes in Hyderabad to elevate their skills and grab
              alluring job offers.
            </p>

            <p>
              Our inclusively crafted syllabus lures learners to update their
              skills and crack critical jobs. We focus on the recent industry
              shifts and revise the learning modules accordingly. Plus, our
              career-specific hybrid training model helps experts to balance
              their learning and job duties.
            </p>

            <p>
              Experts find Learnbay as the best institute to learn data science
              in Hyderabad due to its hands-on upskilling scope. You can work on
              domain-driven projects and case studies to refine your skills and
              grab rewarding roles. Our reputed mentors are here to guide you in
              mastering data-driven tools. Their real-time insights will help
              you optimize your skills and tackle tough cases tactfully.
            </p>

            <p>
              Learnbay’s industry-driven career support services engage learners
              with high-paying roles. Here, experts will receive everything
              required to crack critical roles – from 1:1 interview prep to
              CV-making. Also, having IBM & Microsoft certificates can validate
              your skills and enhance your selection rates. Our globally valued
              credentials enrich career worth and make it job-ready with solid
              portfolios.
            </p>
            <p>
              Joining our data science training in Hyderabad is worth investing
              in as it boosts success and arms you with lucrative earning
              limits.
            </p>
          </div>
        ) : (
          ""
        )}

        {cityTextDSPune ? (
          <div className={styles.CitiesRightInner}>
            <p>
              The <b>Data Science Course in Pune</b> provided by Learnbay
              promotes live training by industrial experts in Data Science. The
              online training is structured keeping in mind the local industry
              needs. With the skills and expertise gained, you can get a
              lucrative and ever-growing career in this field. Data Science,
              Artificial Intelligence, and Machine Learning are continuously
              transforming the business landscape in the 21st century, and
              Learnbay’s <b>Data Science Training in Pune</b> is tailored to
              meet your needs. It’s good to deeply understand a subject to get a
              rewarding career.
            </p>
            <p>
              Industry experts design our Data Science course in the best way to
              promote both theoretical and practical knowledge cost-effectively.
              Data Science is one of the most rewarding professions in the 21st
              Century. The course is customized according to the current high
              demand for data scientist roles.
            </p>
            <p>
              Whether a fresher or a software professional, you will get live
              high-quality training from our experts. The technological outburst
              has made it necessary to have the required knowledge and skills to
              operate in the technology sector. Because massive amounts of data
              are being produced daily in different sectors, it has become an
              essential part of almost every company.
            </p>
            <p>
              A data scientist uses modern tools and techniques to drive
              meaningful information and make decisions. Learnbay’s{" "}
              <b>Data Science Course in Pune</b> is designed to help you learn
              about Data Science from scratch according to your domain. Research
              shows that the top skills required to become a data scientist are
              analysis, communication, statistics, deep learning, machine
              learning, and artificial Intelligence, among many others.
            </p>
            <p>
              Our <b>Data Science course in Pune</b> is a two to a three-year
              subscription program. We have collaborated with IBM to provide a{" "}
              <b>data science certification course</b>. They are globally
              recognized and guarantee 100% job assistance. One-on-one,
              personalized, live doubt-clearing sessions with skilled MAANG data
              scientists make Learnbay different from the rest. Its unique cloud
              lab feature provides access to live Data science projects from
              MNCs and even offers guidance from industrial leads. This way, you
              can learn data science without leaving your job.
            </p>
            <p>
              Learners at Learnbay get a list of specialized domains. To work as
              a data scientist, you must choose the right domain. The career
              experts at Learnbay analyze the profiles and suggest the best
              course according to your domain. It helps you to learn the
              necessary skills with a greater degree of expertise.
            </p>
            <p>
              A Forbes study has found that 2.5 quintillion bytes of data are
              created each passing day. It is where the role of a data scientist
              comes in. They are responsible for analyzing and organizing such
              huge data for organizations. It, in turn, creates ample
              opportunities.
            </p>
            <p>
              The <b>data science learning modules</b> you get at Learnbay are
              customized according to the domain you have chosen while keeping
              in mind the industry requirements. The course provided by us will
              not only make you a skilled data scientist but will also make you
              an expert in particular fields. Learnbay plays an important role
              since you get to choose your specialized domain.
            </p>
            <p>
              The <b>data science course</b> is a complete training course
              covered using multiple modules. Learners from a non-technical
              background receive special coding classes to get along with
              learners who know the technicalities. <br />
              The modules include
            </p>
            <ul>
              <li>Cohort Orientation</li>
              <li>Special Programming Classes</li>
              <li>Basic Python Programming</li>
              <li>Advanced Python Programming </li>
              <li>Statistics and Machine Learning </li>
              <li>SQL</li>
              <li>Big Data and Spark Analytics</li>
              <li>Deep Learning</li>
              <li>NLP </li>
              <li>Deployment (AWS + GCP)</li>
            </ul>
            <p>
              <b>
                The Data Scientist course in Pune has 9 months (300+ hours)
                duration.
              </b>
            </p>
            <p>
              The Structured <b>data science course</b> consists of 4 - Terms:
            </p>
            <p>
              <b>Module 0: Cohort Orientation + Special Programming Classes</b>
            </p>
            <p>
              In this module, learners get a brief introduction to data-related
              tools. The module helps you easily learn about particular
              real-time projects and Capstone projects. Learners also gain a
              thorough knowledge of the fundamental relevance of projects using
              data and the role of data in business. The cohort orientation also
              teaches the significance of data in decision-making. You learn
              data utilization to enhance industrial operations and management.
            </p>
            <p>
              Special Programming classes are designed to teach learners the
              types of code editors in Python, introduction to Anaconda and
              Jupyter notebook, Flavors of Python, Introduction to Git, Github,
              and Python Fundamentals. You also learn the difference between
              Source Code vs. Byte Code vs. Machine Code. The fundamentals of
              statistics help them to learn to mean, median, mode, standard
              deviation, average, probability, and introduction to linear
              algebra.
            </p>
            <h2 className={styles.pHead}>
              <b>Term 1 - Python Programming (Basic and Advanced)</b>
            </h2>
            <p>
              <b>Module 1</b>
            </p>
            <p>
              This module provides full-time dedicated sessions. Experts carry
              out the sessions through Live Instructor-Led Online Training. The
              module equips you with knowledge about program basics and
              environment setup, python programming overview, strings,
              decisions, and loop control Python data types, functions and
              modules, File I/O and Exceptional Handling and Regular Expression,
              Data Analysis using NumPy, Data Analysis using Pandas, Data
              Visualization using Matplotlib, and Data Visualization using
              Seaborn.
            </p>
            <h2 className={styles.pHead}>
              <b>Term 2: Statistics and Machine Learning</b>
            </h2>
            <p>
              <b>Module 1: Statistics</b>
            </p>
            <p>
              This is an essential module focusing on different statistics and
              data processing methods. In this module, you learn about the
              fundamentals of Maths and probability, an introduction to
              statistics, and statistical learning. The modules also cover
              Linear Algebra, Data Processing, Exploratory Data Analysis, and
              EDA. It consists of 4 practice sets and assignments.
            </p>
            <p>
              <b>Module 2: Machine Learning</b>
            </p>
            <p>
              In this module of Learnbay’s data science course, you learn about
              regression and classification models, linear regression models,
              data preprocessing, evaluation metrics for classification models,
              Decision Tree Models, Random Forest Models, Hyperparameter Tuning,
              and Naive Baye’s model. The module also provides in-depth
              knowledge about K means and Hierarchical Clustering, Principal
              Component Analysis, and Support Vector Machine.
            </p>
            <h2 className={styles.pHead}>
              <b>Term 3: Data Science Tools</b>
            </h2>
            <p>
              <b>Module 1 - SQL</b>
            </p>
            <p>
              <b>Module 2 - Mongo DB </b>
            </p>
            <p>
              <b>Module 3 - Tableau</b>
            </p>
            <p>
              <b>Module 4 - PowerBI</b>
            </p>
            <p>
              <b>Module 5 - Big Data and Spark Analytics</b>
            </p>
            <p>
              <b>Module 6 - Time Series</b>
            </p>
            <h2 className={styles.pHead}>
              <b>Term 4: Artificial Intelligence Tools</b>
            </h2>
            <p>
              <b>Module 1 - Deep Learning using TensorFlow</b>
            </p>
            <p>
              <b>Module 2 - Natural Language Processing</b>
            </p>
            <p>
              <b>Module 3 - Model Training and Deployment using ( AWS GCP) </b>
            </p>
            <h2 className={styles.pHead}>
              <b>Premium Features of Data Scientist Training in Pune</b>
            </h2>
            <ol type="1">
              <li>
                <b>Classroom Session </b>: What’s better than getting assistance
                both in online and offline mode? Experts from MAANG and MNCs
                help you throughout the process. You can also attend classroom
                sessions.{" "}
              </li>
              <li>
                <b>One-on-One Dedication </b>: Every learner gets a live
                interactive session with the experts. An industry expert guides
                every session. Technical support is provided to the learners
                around the clock.
              </li>
              <li>
                <b>Two-year Subscription </b>: You can get unlimited access to
                your learning materials and project sessions. If you are a
                professional, you can switch between weekends and workdays. You
                get the flexibility to create your learning calendar.
              </li>
              <li>
                <b>Guaranteed Interview Calls </b>: We partner with 250+ Top
                MNCs & FinTech Startups. Many of our learners have grabbed
                placements in their dream companies. The placement cell is
                dedicated to ensuring a smooth career transition for you.
              </li>
              <li>
                <b>Mock Interviews </b>: Learnbay allows you to participate in
                mock interviews to sharpen your skills. This ensures an
                improvement in your interview success rate. It also builds your
                confidence to ace the interviews in your dream company.
              </li>
            </ol>
            <h2 className={styles.pHead}>
              <b>
                Data Science Foundation Program in Pune with Placement
                Assistance
              </b>
            </h2>
            <ul>
              <li>
                This program is designed for beginners who want to kick-start
                their career in Data Science.{" "}
              </li>
              <li>
                This course introduces you to Data Science and Python
                Programming.{" "}
              </li>
              <li>
                The course also clearly explains Data Analytics vs. Business
                Analytics vs. Big Data.{" "}
              </li>
              <li>
                You also work on hands-on projects, which will help you get
                real-world experience.
              </li>
              <li>
                {" "}
                The course provides a rigorous learning experience at just ₹
                79,000 + 18% GST.{" "}
              </li>
            </ul>

            <h3 className={styles.pHead}>
              Highlights of the Data Science Foundation Program in Pune
            </h3>
            <ul>
              <li>Consists of 200+ hours of live sessions</li>
              <li>Lifetime accessibility of recorded live classroom videos</li>
              <li>
                Offline live project experience in the project innovation lab
              </li>
              <li>8+ real-time industrial projects</li>
            </ul>

            <h2 className={styles.pHead}>
              Advance Data Science and AI Program in Pune with Placement
              Assistance
            </h2>
            <ul>
              <li>
                If you wish to dive deep into the field of Data Science, this
                course is the right fit for you.
              </li>
              <li>
                The experts at Learnbay will help you develop solid knowledge.
              </li>
              <li>
                The course teaches you Deep Learning and Neural Networks.{" "}
              </li>
              <li>You can choose this if you want to switch your domain. </li>
              <li>
                You get rigorous hours of learning at just ₹ 99,000 + 18% GST.
              </li>
            </ul>

            <h3 className={styles.pHead}>
              Highlights of Advance Data Science Course and AI Program in Pune
            </h3>

            <ul>
              <li>Consists of 250+ hours of live sessions</li>
              <li>Global recognition from IBM </li>
              <li>Career assistance for professionals</li>
              <li>Capstone project completion certificate from IBM</li>
              <li>12+ real-time industrial projects. </li>
            </ul>

            <h2 className={styles.pHead}>
              Data Science and AI program for Managers and Leaders in Pune with
              Placement Assistance
            </h2>
            <ul>
              <li>
                This <b>data science course</b> is best suited if you are a
                professional with over 8 years of experience in any field.
              </li>
              <li>
                Our industrial experts help you make a switch as a professional
                and not a fresher.{" "}
              </li>
              <li>
                The domain-specific industrial projects help you to break
                through the crowd and stand out among the rest.
              </li>
              <li>
                You can also attend classroom sessions and get assistance in
                online and offline project sessions.
              </li>
              <li>The program fee is just ₹1,10,000 + 18% GST. </li>
              <li>
                Our experts make you interview-ready, and the placement cell
                ensures you get guaranteed interview calls from FinTech Startups
                and Top MNCs.{" "}
              </li>
            </ul>

            <h3 className={styles.pHead}>
              Highlights of Data Science and AI Program for Managers and Leaders
              in Pune
            </h3>
            <ul>
              <li>Consists of 400+ hours of live sessions</li>
              <li>15+ real-time industrial projects</li>
              <li>
                Online sessions guided by professionals working in top MNCs
              </li>
              <li>
                Variety of financing options are available to make it more
                economical
              </li>
            </ul>

            <h2 className={styles.pHead}>
              Data Science and AI Master Program in Pune with Placement
              Assistance
            </h2>
            <ul>
              <li>
                This course covers all the skills a data scientist must possess.{" "}
              </li>
              <li>
                The MAANG and MNC experts guide the working professionals having
                experience in any domain.
              </li>
              <li>The trainers have 8+ years of experience.</li>
              <li>
                The course teaches you data structure algorithms, Business
                Analytics, and the basics.{" "}
              </li>
              <li>
                To make your experience relevant, Leanbay’s Data Science Course
                helps you work on domain-specific industrial projects.
              </li>
              <li>
                The 3-year subscription gives you limitless access to learning
                materials.{" "}
              </li>
              <li>The course comes at just ₹1,29,000 + 18% GST. </li>

              <h3 className={styles.pHead}>
                Highlights of Data Science and AI Master Program in Pune
              </h3>
              <li>You can opt for either a weekday or a weekend batch</li>
              <li>Consists of 500+ hours of live sessions</li>
              <li>Practical covering for real-time industrial projects</li>
              <li>20+ real-time industrial projects</li>
            </ul>

            <h2 className={styles.pHead}>
              Learnbay’s Domain-Specific Data Science Course in Pune
            </h2>
            <p>Some available domains are </p>

            <ol type="1">
              <li>
                <b>Data Science for Sales and Marketing Professionals:</b>{" "}
                Without domain expertise, your data science abilities are
                useless. From inventory management to merchandising, data
                science applies in most areas of sales and marketing. Targeting
                valuable customers has become an easy task now.{" "}
              </li>
              <li>
                <b>Data Science for HR:</b> Did you know you can reduce employee
                turnover rates by having a data scientist on your team? Online
                data science training helps you find opportunities to boost
                employee engagement, creating an effective workforce.
              </li>
              <li>
                <b>Data Science for Healthcare Workers:</b> Data Science has
                paved its way in the healthcare domain as well. From predicting
                diseases early to collecting and sending real-time updates to
                doctors, it has helped devise treatments efficiently.{" "}
              </li>
              <li>
                <b>Data Science in BFSI Domain:</b> Data Science in the BFSI
                domain help in fraud detection, enhancing customer support, and
                improving operational efficiency. A Data Science course helps
                you gain an advantage over others in the same field.{" "}
              </li>
              <li>
                <b>
                  Data Science in Manufacturing, Automotive, and Telecom Domain:
                </b>{" "}
                The <b>online data science training</b> in this domain helps you
                learn how data is collected in different manufacturing settings.
                It also gives you a brief knowledge of the telecom sector’s
                network performance improvement.{" "}
              </li>

              <li>
                <b>Data Science in Oil, Gas, and Energy Domain:</b> A{" "}
                <b>data science course</b> in this domain teaches you the role
                of analytics and data science in the energy sector and oil and
                gas industry.{" "}
              </li>

              <li>
                <b>Data Science in Media, Hospitality, and Transport Domain:</b>{" "}
                This course teaches you everything from identifying hotel issues
                to satisfying customer needs by improving business strategies.{" "}
              </li>
            </ol>

            <h2 className={styles.pHead}>Data Science Trends in Pune </h2>

            <p>
              The experts have predicted that by 2026, the industry will have
              1105 million data scientist jobs. Both private and public sector
              firms need data scientists to function efficiently. Learnbay
              provides its learners with flexible training options. You can
              choose online or offline training sessions to avail the{" "}
              <b>data science course in Pune</b>. You can also access recorded
              lecture videos to learn anytime you want.
            </p>

            <h2 className={styles.pHead}>
              Best Data Science Training Institute in Pune
            </h2>

            <p>
              Ever found yourself wondering about the{" "}
              <b>Best Data Science Training Institute in Pune</b>? Well, this is
              the right place for you. Learnbay provides you with live training
              at affordable prices. Want to stand out in your domain? Take the
              course by{" "}
              <a
                href="https://www.learnbay.co/data-science-course-training-in-pune"
                target="_blank"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                Learnbay Institute
              </a>
              , as this will be one of the best career choices you will ever
              make. Learnbay institute has proudly assisted over 500+ aspirants
              in pursuing their dream careers. IBM, being our accreditation
              partner, has global recognition. <br />
              <br />
              Learnbay institute has proudly assisted over 500+ aspirants in
              pursuing their dream careers. <b>IBM</b>, being our accreditation
              partner, has global recognition.
            </p>

            <h2 className={styles.pHead}>
              Why Choose Learnbay Data Science Training Institute in Pune?
            </h2>
            <ul>
              <li>IBM Certified Capstone</li>
              <li>Guaranteed Job Referrals</li>
              <li>100% Live Online Classes</li>
              <li>
                Hassle-free and tailored training for MAANG Company interviews
              </li>
              <li>
                A successful career transition even with 0 coding experience
              </li>
              <li>Industry-targeted syllabus</li>
            </ul>

            <h2 className={styles.pHead}>Did You Know? </h2>

            <p>
              The average <b>data scientist salary in Pune</b> is ₹8,20,000 per
              year? Learnbay’s <b>online data science training</b> allows you to
              break through your career in this field! <br />
              <br />
              <b>Learnbay</b> also provides classroom mode for{" "}
              <a
                href="https://www.learnbay.co/machine-learning-course-training-in-pune"
                target="_blank"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                machine learning
              </a>{" "}
              and{" "}
              <a
                href="https://www.learnbay.co/artificial-intelligence-ai-course-training-pune"
                target="_blank"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                artificial intelligence courses in Pune
              </a>{" "}
              and data science courses.
            </p>
          </div>
        ) : (
          ""
        )}

        {cityTextDSDelhi ? (
          <div className={styles.CitiesRightInner}>
            <p>
              The <b>Data Scientist course in Delhi</b> is in high demand.
              Learnbay has collaborated with IBM to provide the{" "}
              <b>data science course</b>. Once you complete the course, you get
              globally recognized dual certification. It paves your way to
              becoming an industry-competent data scientist. Learnbay has a
              strong team of experts, instructors, and mentors to guide you
              throughout the process. The experts have an industrial experience
              of more than 8 years. The <b>online data science training</b> is
              provided keeping in mind your domain and industry requirements.
            </p>
            <p>
              Research in 2022 found that quintillions of data are produced
              yearly, and Data Science comes to the rescue when managing huge
              amounts of data. No matter which sector, every company produces
              vast amounts of data daily, which is difficult to manage without
              proper methods and techniques.
            </p>
            <p>
              Learnbay’s <b>Data Science training in Delhi</b> focuses on live
              learning, which allows learners to grasp knowledge while sitting
              in the comfort of their homes. A <b>Data Science course</b> can
              give you a new range of job opportunities and a lucrative salary
              hike. Our data science learning modules are the best, providing
              the right knowledge to get into a good company.
            </p>
            <p>
              To balance the learning process, we have curated the{" "}
              <b>data science training</b> so that you get practical and
              theoretical learning in a 70:30 ratio. Learnbay Institute offers
              the most cost-effective <b>Data Science course in Delhi</b>.
              Wondering what the best part is? You will be offered a full-stack
              data science course and job placement assistance.
            </p>
            <p>
              Choosing <b>online Data Scientist training in Delhi</b> comes with
              a lot of benefits. Delhi is becoming one of the most significant
              job hubs in India. Since large quantities of data are being
              produced daily, companies are becoming dependent on Data Science.
              You get a wide range of <b>Data Science training</b> options in
              Delhi. However, the list becomes short if we discuss getting
              assured job placement. When evaluating the cost-effectiveness of
              the course, the list becomes even shorter.
            </p>
            <p>
              Learnbay’s <b>Data Science course in Delhi</b> is one of the best
              choices you can make since we provide domain-specific training.
              Even if you have a non-technical background, our online{" "}
              <b>Data Science training</b> will help you get on the same level
              as learners with a technical background. We have a flexible lesson
              schedule for you to learn at your own pace.
            </p>
            <p>
              We cover the <b>data science course</b> using various modules,
              some of which are mentioned below:
            </p>
            <ul>
              <li>Cohort Orientation </li>
              <li>Special Programming Classes</li>
              <li>Basic Python Programming</li>
              <li>Special Python Programming </li>
              <li>Statistics</li>
              <li>Machine Learning </li>
              <li>SQL </li>
              <li>Tableau</li>
              <li>Deep Learning </li>
            </ul>
            <p>
              The course duration of the online{" "}
              <b>Data Science training in Delhi</b> is 250+ hours. Our trained
              professionals will tutor you for almost 9 months.
            </p>
            <p>The structured course consists of 4 terms. </p>
            <p>
              <b>Module 0: Cohort Orientation + Special Programming Classes</b>
            </p>
            <p>
              In this module, you will learn the importance of data and how it
              is managed in everyday life. This module is best suited for those
              belonging to a non-technical background. The module is curated to
              help you get along with learners with technical backgrounds and
              professional experience. Our experts ensure you learn to cope with
              other terms and modules efficiently. From the fundamentals of
              programming to the fundamentals of statistics, the module covers
              the basic topics. Some tools covered in this are Anaconda,
              Jupyter, Git, and GitHub.
            </p>
            <h3 className={styles.pHead}>
              Term 1 - Python Programming (Basic and Advanced)
            </h3>
            <p>
              <b>Module 1: Basic Python Programming</b>
            </p>
            <p>
              Module 1 teaches you the programming basics and environment setup.
              You will learn how to install Anaconda and operate basic GitHub
              commands. With this module, you get familiar with Git, GitHub, and
              version control. Learners will also find detailed knowledge about
              various operators and their precedence. They will also learn how
              to get user input and multiline comments. <br />
              In the first few classes, students will learn about Strings,
              Decisions, Loop Control, Python Data Types, Functions, and
              Modules. Additionally, our application teaches regular expressions
              and file I/O exceptional handling. Data analysis with NumPy and
              Pandas is the subject of another chapter, which discusses ideas
              such as array generation, fundamental operations, and data import
              into Python Pandas. Each module or several chapters will end with
              a final assignment that allows students to assess their newfound
              knowledge and abilities. This exercise consists of coding
              exercises on subjects like functions and Lambda and questions on
              Python programming.
            </p>
            <h3 className={styles.pHead}>
              Term 2 - Statistics and Machine Learning
            </h3>
            <p>
              <b>Module 1: Statistics </b>
            </p>
            <p>
              Learners will master the principles of probability and mathematics
              in this subject, from comprehending probability distribution
              functions to using Baye's theorem to resolve probability issues.
              The program is 30 hours long and covers a variety of subjects,
              such as population vs. sample, sample size, systematic sampling,
              convenience sampling, and quotation sampling. Learners will also
              be introduced to descriptive statistics, inferential statistics,
              statistical thinking, and an introduction to statistics. <br />
              You will learn how to use matrices in Python, including Element
              indexing, matrix multiplication, and matrix transpose, as well as
              data processing and exploratory data analysis, in Learnbay's{" "}
              <b>data science course</b>. Beginning in week 2, the curriculum
              will also cover case studies employing statistics and
              problem-solving techniques. Learners will complete a total of 4
              practice sets and assignments to assess their understanding of the
              material.
            </p>
            <p>
              <b>Module 2: Machine Learning </b>
            </p>
            <p>
              This 40-hour course explores the complexities of machine learning,
              which is necessary to land a well-paying job offer. Learners will
              be provided with a thorough grasp of machine learning's components
              and an introduction to its concept, examples, and significance in
              the first chapter. The differences between MAE, MSE, and RMSE will
              also be covered in this lesson, along with how to design a linear
              regression model and assess its effectiveness using the Python
              tool Sklearn. <br />
              This module will cover data preprocessing, logistic regression
              models, valuation metrics for classification models, and K Nearest
              Neighbor models. These topics are important chapters in the study
              of data science. This module will also cover the decision tree and
              random forest models. By the end of this term, students will have
              a thorough knowledge of all machine learning algorithms, and to
              further their understanding, real-world case studies will be
              offered for each method.
            </p>
            <h3 className={styles.pHead}>Term 3 - Data Science Tools</h3>
            <p>
              <b>Module (1) - SQL</b>
            </p>
            <p>
              <b>Module (2) - MongoDB</b>
            </p>
            <p>
              <b>Module (3) - Tableau</b>
            </p>
            <p>
              <b>Module (4) - PowerBI </b>
            </p>
            <p>
              <b>Module (5) - Big Data and Spark Analytics</b>
            </p>
            <p>
              <b>Module (6) - Time Series</b>
            </p>
            <h3 className={styles.pHead}>
              Term 4 - Artificial Intelligence Tools
            </h3>
            <p>
              <b>Module (1) - Deep learning using TensorFlow</b>
            </p>
            <p>
              <b>Module (2) - Natural Language Processing (NLP)</b>
            </p>
            <p>
              <b>Module (3) - Model Training and Deployment (Using AWS GCP)</b>
            </p>
            <p>
              Lastly, it supports the students to practise their knowledge at a
              cloud lab at their convenience.
            </p>
            <p>
              Upon completing these structured 4-Terms{" "}
              <b>Learnbay's Data Science Training</b>, you will be confident in
              your ability to perform your "SuperHero duty" as a Data Scientist
              in leading firms.
            </p>
            <h2 className={styles.pHead}>
              Premium Features of Data Scientist Training in Delhi
            </h2>
            <p>
              <b>100% Live Online Classes:</b> You can attend Learnbay's 100%
              live online classes from the convenience of your home. During the
              live sessions, our knowledgeable instructors are accessible to
              help you at any stage of your learning process and clear up any
              questions you may have.
            </p>
            <p>
              <b>Dedicated Placement Assistance Cell:</b> To ensure you are
              completely ready and confident when landing a job, our dedicated
              placement assistance cell offers comprehensive support, from
              resume writing to interview training. Learnbay is the perfect
              choice for people wishing to begin a career in data science
              because we also provide guaranteed employment recommendations in
              product-based MNCs.
            </p>
            <p>
              <b>International Accreditation:</b> When you successfully complete
              your course, Learnbay offers domain-specific capstone projects in
              partnership with IBM, offering you the chance to get practical
              experience and a globally recognized certification. We stand apart
              from other education providers because of our dual certification
              and international accreditation.
            </p>
            <p>
              <b>1:1 Mentorship:</b> With 1:1 personal mentorship, our
              specialists are always accessible to help you with any doubts you
              may have, even after the live lessons. We also offer those options
              if you like to take lessons from several mentors or alter your
              batches.
            </p>
            <p>
              <b>Special Classes:</b> Our carefully designed programming
              workshops for beginners will help you learn from scratch whether
              you are a recent college graduate or a working professional
              wishing to launch a career in data science.
            </p>
            <p>
              <b>Project Innovation Lab:</b> We provide a project innovation lab
              where you can work on offline, industry-recognized projects at our
              data science course in Delhi. Collaborate with project mentors and
              other learners to obtain hands-on experience across multiple areas
              and strengthen your abilities.
            </p>

            <h2 className={styles.pHead}>
              Data Science Foundation Program in Delhi with Placement Assistance{" "}
            </h2>
            <p>
              Do you want to pursue a successful career in data science? To meet
              your needs, Learnbay provides a variety of programs.{" "}
            </p>
            <ul>
              <li>
                The Data Science Foundation Program is appropriate for beginners
                with a non-IT background.{" "}
              </li>
              <li>
                The program will teach you the fundamentals of Python, Anaconda,
                and Jupyter Notebook for just 1,10,000 + 18% GST.
              </li>
              <h3 className={styles.pHead}>
                Highlights of the Data Science Foundation Program in Delhi
              </h3>
              <li>200+ hours of rigorous training</li>
              <li>Industry-specific training </li>
              <li>Global recognition from IBM</li>
              <li>Hands-on experience with real-world projects</li>
              <li>8+ real-time industrial projects</li>
            </ul>
            <h2 className={styles.pHead}>
              Advance Data Science and AI Program in Delhi with Placement
              Assistance
            </h2>

            <ul>
              <li>
                The Advance Data Science and AI Program is a wonderful option
                for students seeking more in-depth knowledge of data science.{" "}
              </li>
              <li>
                This course provides in-depth training and helps you deeply
                understand the subject.
              </li>
              <li>
                It's great for people wishing to swap domains, all at just ₹
                99,000 + 18% GST.
              </li>
              <h3 className={styles.pHead}>
                Highlights of the Advance Data Science and AI Program in Delhi
              </h3>
              <li>250+ hours of rigorous training</li>
              <li>Assured Interview calls</li>
              <li>Premium mentoring by MAANG and MNC experts</li>
              <li>2 years flexible subscription of learning materials</li>
              <li>12+ real-time industrial projects</li>
            </ul>

            <h2 className={styles.pHead}>
              Data Science and AI program for Managers and Leaders in Delhi with
              Placement Assistance{" "}
            </h2>
            <ul>
              <li>
                Learnbay's data science and artificial intelligence program is
                the best choice for managers and leaders with 8+ years of
                experience.
              </li>
              <li>
                The course helps you with a smooth transition, and
                domain-specific projects offer you an edge over others.{" "}
              </li>
              <li>It only costs INR 1,10,000 plus 18% GST for the program.</li>
              <h3 className={styles.pHead}>
                Highlights of Data Science and AI Program for Managers and
                Leaders in Delhi
              </h3>
              <li>Earn capstone project certification</li>
              <li>400+ hours of rigorous training</li>
              <li>15+ real-time industrial projects</li>
              <li>
                A variety of financing options are available to make it more
                economical
              </li>
            </ul>

            <h2 className={styles.pHead}>
              Data Science and AI Master Program in Delhi with Placement
              Assistance{" "}
            </h2>

            <ul>
              <li>
                If you’re an employed professional seeking first-rate mentoring
                and practical experience on real-world projects, this program is
                for you.
              </li>
              <li>
                This custom-fit course lets you master Data Science and AI
                effectively and efficiently, with intensive training of 500+
                hours, all at just ₹1,29,000 + 18% GST.{" "}
              </li>
              <li>
                With Learnbay's professional programs, you may begin your Data
                Science path right away!
              </li>
              <h3 className={styles.pHead}>
                Highlights of Data Science and AI Master Program in Delhi
              </h3>
              <li>500+ hours of rigorous training</li>
              <li>IBM certification </li>
              <li>Project Innovation lab</li>
              <li>20+ real-time industrial projects</li>
            </ul>

            <h2 className={styles.pHead}>
              Learnbay’s Domain-Specific Data Science Course in Delhi
            </h2>

            <ol type="1">
              <li>
                <b>BFSI Domain:</b> Data science helps people understand best
                practices in the financial industry in the BFSI domain. The
                course allows learners to work on real-time projects using
                current data from businesses like JP Morgan and HDFC. Building
                recommendation systems or forecasting the stock market's future
                trends require data science.
              </li>

              <li>
                <b>Sales, Marketing, and HR Domain:</b> Data Science provides
                data-driven consumer and market insights in the Sales,
                Marketing, and HR sectors. It is simpler to comprehend the needs
                and functionality of the retail sector thanks to the practical
                Capstone projects that get students involved with business
                management's functional components.
              </li>

              <li>
                <b>Healthcare Domain:</b> Data science courses help students
                incorporate future-proof techniques in the healthcare industry.
                Professionals with experience may expect higher earnings and job
                security.
              </li>

              <li>
                <b>Retail and E-Commerce Domain:</b> The use of data science can
                help business requirements and functionality in the retail and
                e-commerce domains. It can assist in identifying consumer
                preferences and industry trends that help organizations keep one
                step ahead of the competition.
              </li>

              <li>
                <b>Media and Hospitality Domain:</b> The course emphasizes
                customized marketing and revenue management to support business
                growth in the media and hospitality sector. Non-programmers can
                also take specialized classes.
              </li>

              <li>
                <b>Manufacturing Domain:</b> The course sheds light on the uses
                of data science in manufacturing and the automotive industries
                in the manufacturing sector. Nanotechnology, computer-aided
                design, and robotics are some topics covered in the course.
              </li>

              <li>
                <b>Energy, Oil, and Gas Domain: </b> The course offers a
                real-time recording of drilling data in the Energy, Oil, and Gas
                domain, giving learners a greater knowledge of how the sector
                grows exponentially with the help of AI.
              </li>
            </ol>

            <h2 className={styles.pHead}>Data Science Trends in Delhi</h2>
            <p>
              From banking, cyber security, and financial institutions to the
              education and healthcare sectors, there is a huge scope for the
              application of data science. By 2030, the data science market
              trends will reach a valuation of <b>USD 378.7 billion</b>.{" "}
            </p>

            <p>
              People interested in enrolling in a{" "}
              <b>Data Science Course in Delhi</b> can choose from various
              flexible learning alternatives at Learnbay. To accommodate their
              schedules, students can attend classes on weekdays or weekends and
              alter the scheduling and number of sessions.
            </p>

            <h2 className={styles.pHead}>
              Best Data Science Training Institute in Delhi
            </h2>
            <p>
              Learnbay is the <b>best data training institute in Delhi</b>{" "}
              thanks to its individualized and industry-specific courses, which
              provide students with a competitive advantage. Learnbay delivers
              real-time, qualitative training at affordable pricing.{" "}
            </p>
            <p>
              <a
                href="https://www.learnbay.co/"
                target="_blank"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                Learnbay institute
              </a>{" "}
              has proudly assisted over 500+ aspirants in pursuing their dream
              careers. <b>IBM</b>, being our accreditation partner, has global
              recognition. Looking forward to getting high-quality and
              cost-effective <b>online data science training in Delhi</b>? Well,
              look no further. Learnbay training is one of the best choices you
              will make to kickstart your career as a data scientist.
            </p>

            <h2 className={styles.pHead}>Did you know?</h2>

            <p>
              Data science is a lucrative area because the{" "}
              <b>average data scientist salary in Delhi</b> is close to INR 9.5
              lakhs. <b>Learnbay</b> also provides classroom mode for{" "}
              <a
                href="https://www.learnbay.co/datascience/delhi/machine-learning-course-training-in-delhi"
                target="_blank"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                machine learning
              </a>{" "}
              and artificial intelligence courses in Delhi and data science .
            </p>
            <p>
              Considering the current facts and statistics, every company needs
              a data scientist to organize their data. By 2025, the generation
              of everyday data is expected to reach 463 exabytes globally. It’s
              a number that is very hard to envision. To add to the amazement,
              humans have collectively spoken only 5 exabytes of data.{" "}
            </p>

            {/* <YoutubeVideo/> */}
          </div>
        ) : (
          ""
        )}

        {cityTextDSChennai ? (
          <div className={styles.CitiesRightInner}>
            <h2 className={styles.pHead}>
              <b>Data Science Certification from Learnbay</b>
            </h2>
            <p>
              Step up your career with the best{" "}
              <b>Data Science certification</b> from Learnbay, one of the
              leading training centres in Chennai. This training program
              perfectly blends theory, case studies, hackathons, capstone, and
              real-world projects. The course syllabus has been comprehensively
              designed by industry professionals and is regarded as the best in
              the market. With the global certification, it stands out to
              recruiters all around the world. Post completion of the course,
              one will be awarded the IBM certification and a proud Learnbay
              Alumni.{" "}
            </p>
            <h2 className={styles.pHead}>
              <b>What is the certification process?</b>
            </h2>
            <p>
              After completing the data science training in Chennai, one should
              attend an online examination facilitated by Learnbay and pass with
              70% or more to be eligible for the IBM exam. After passing the
              exam and capstone project completion, the candidate will be
              awarded IBM certifications based on the selected course. In
              addition, once the Capstone project is completed, you will be
              given an IBM Project experience certificate.
            </p>
            <h2 className={styles.pHead}>
              <b>Data Science Course Training In Chennai</b>
            </h2>
            <p>
              Learnbay offers a domain-specialised{" "}
              <a
                href="https://www.learnbay.co/data-science-course-training-in-chennai"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank"
              >
                Data Science course in Chennai
              </a>
              , the most comprehensive Data Science training in the market,
              covering the basic to advanced concepts of Data Science process
              from Data Collection, Data Extraction, Data Cleaning, Data
              Exploration, Feature Engineering, model building, Data
              Visualization and implementing the solution. Further, statistical
              Analysis, Tableau, Hadoop, Regression Modelling, Predictive
              Analytics,{" "}
              <a
                href="https://www.learnbay.co/machine-learning-course-training-in-chennai"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank"
              >
                Machine Learning
              </a>
              , NLP, Neural Networks, and programming languages like Python and
              R are just a few of the tools and skills covered in-depth during
              this data science training.
            </p>
            <p>
              Learnbay is said to be the best{" "}
              <b>Data Science training institute in Chennai</b> which provides
              exclusive services from hands-on practical sessions to placement
              as part of the Data science training with around 1000+ students
              placed in MNCs such as Accenture, TCS, Infosys, EY, IBM, and
              others. Learnbay delivers rigorous{" "}
              <b>Data Science online training in Chennai</b> and is considered
              the best in the industry. The <b>data science course fee</b> at
              Learnbay institute ranges from INR 1,10,000 to INR 125,000,
              depending on the preferred course.
            </p>
   
            {read ? (
              <>
                <h2 className={styles.pHead}>
                  Why Choose Learnbay For A Data Science Course In{" "}
                  <b>Chennai</b>?
                </h2>
                <p>
                  If you are curious about how to learn data science, then you
                  are in the perfect place! Learnbay is recognized as one of the
                  top <b>Data Science training institutes in Chennai</b>. We
                  have helped over 10,000 Data Science enthusiasts transform
                  their careers in various MNCs in India and abroad. We aim to
                  provide dedicated practical training and placement to our
                  learners. We also provide personal mentorship to each student
                  until they are placed in a reputed position. In addition, our
                  mentors will assist you with theoretical and practical
                  concepts, assignment completion, and live data science
                  projects. With over 250 hiring partners and a dedicated
                  placement cell, Learnbay helps the participants secure jobs by
                  facilitating multiple MNC interviews. The best part about
                </p>
                <p>
                  Most of our instructors are IIT and IIM graduates, some of
                  whom are Ph.D. professionals and experienced Data Scientists
                  with 15+ years of industry expertise. Because of our dedicated
                  faculty, Learnbay's certification is regarded as the best{" "}
                  <b>Data Science certification course</b> available in the
                  market. Learnbay provides a hybrid learning approach where
                  students can take advantage of the classrooms, instructor-led
                  online classes, and recorded sessions/videos through Learnbay
                  LMS.
                </p>
                <p>
                  This combination of learning modes will have a positive impact
                  on learning. During a period of 2 years, one can attend as
                  many instructor-led online sessions from multiple trainers
                  with no additional cost. No wonder Learnbay is recognized as
                  the best <b>Data Science training institute in Chennai</b> for
                  aspirants wanting to upgrade their Data Science concepts and
                  secure a lucrative position.
                </p>
                <h2 className={styles.pHead}>
                  Overview of Data Science and Data scientist
                </h2>
                <p>
                  Data science is all about uncovering hidden patterns in data
                  that relate to trends, patterns, behaviour, and interpretation
                  to enhance company decisions. Data Professionals who carry out
                  these tasks are called data scientists and are generally
                  termed "superheroes." As reported by Harvard, a data scientist
                  is the most in-demand career worldwide.
                </p>
                <h2 className={styles.pHead}>
                  Why Enrol in the Data Science Course?
                </h2>
                <h3 className={styles.pHead}>
                  <b>Is Data Science certification worth it?</b>
                </h3>
                <p>
                  The answer is definitely <b>YES</b> for plenty of reasons.
                  Billions of jobs are being created in the field of data
                  science and AI as a result of the massive amount of data being
                  generated by digitalization across all industries. Thus,
                  professionals skilled in data analysis and insight extraction
                  are in high demand. There is an extensive gap between supply
                  and demand, which generates a lot of job opportunities with
                  high salaries. Undoubtedly, data scientists are thought to be
                  the most well-paid in the job market today. Since data
                  generation is rising exponentially and there will always be a
                  need for Data Science professionals, a career as a Data
                  Scientist is both lucrative and long-lasting.
                </p>
                <ul>
                  <li>
                    A NASSCOM survey estimates that there are almost 1.4 lakh
                    open positions in the fields of data science, AI and big
                    data.
                  </li>
                  <li>
                    According to the US Bureau of Labor Statistics, the number
                    of data scientists' jobs is expected to increase by 36%
                    between 2021 and 2031.
                  </li>
                  <li>
                    Further, according to glassdoor ranking, Data Science is the
                    best job to pursue in the coming years.
                  </li>
                </ul>
                <h2 className={styles.pHead}>
                  You May Wonder If Data Science Certification Is Worth It?
                </h2>
                <p>
                  Indeed YES. Today, Data Science and Analytics are creating a
                  huge number of jobs in all domains across the world. Business
                  firms have realised the value of using past data analysis to
                  help them make better decisions and grow their operations. All
                  business areas benefit from digitalization, which facilitates
                  data analysis and helps in data generation. As a result, many
                  data science and analytics job opportunities are being
                  created. Since there is a significant gap between the demand
                  and supply for Data Scientists, salaries in the Data Science
                  field are quite high and are among the highest in the
                  industry. Due to the ongoing and future growth of online data
                  collection, the career path for data scientists is extensive
                  and rewarding.
                </p>
                <h2 className={styles.pHead}>
                  Why Learnbay Is The Best Data Science Training Institute In
                  <b>Chennai</b>
                </h2>
                <p>
                  Learnbay provides the best{" "}
                  <b>Data Science certification online training in Chennai</b>,
                  along with 7+ domain electives. It also conducts live project
                  sessions at multiple project innovative centres across 7+
                  cities. The detailed description of the{" "}
                  <b>Data Science courses in Chennai</b> are available in the
                  course Syllabus.{" "}
                </p>
                <h2 className={styles.pHead}>
                  Who Should Enrol in the Data Science Course?
                </h2>
                <p>
                  These professionals might consider taking a{" "}
                  <b>Data Science course in Chennai</b> as the next genuine move
                  to advance their career:{" "}
                </p>
                <ul>
                  <li>
                    Working Professional from any domain (including
                    non-technical) who has coding, mathematical and analytical
                    skills
                  </li>
                  <li>
                    Working Professionals working on Data Warehousing, Business
                    Intelligence (BI), and reporting tools
                  </li>
                  <li>Statisticians and Mathematicians</li>
                  <li>Business analysts</li>
                  <li>Software programmers</li>
                  <li>
                    Any Graduate with good Analytical skills and curiosity to
                    learn
                  </li>
                </ul>
                <h2 className={styles.pHead}>Interview Preparation Sessions</h2>
                <p>
                  Candidates will be kept under Learnbay's Placement Assistance
                  Program once they have successfully completed the Data Science
                  course training along with capstone+live projects. As part of
                  this program, candidates will be subjected to a complete
                  interview preparation process on Data Science and AI. The
                  participants will also have access to a vast repository of{" "}
                  <b>Data Science Interview questions and answers</b> to help
                  them become confident and job-ready. A dedicated Data Science
                  mentor will help with soft-skill training, resume/portfolio
                  building, mock interviews and evaluate the skills and
                  knowledge of each candidate, and provide feedback accordingly
                  for further improvement. Our mentors will provide guidance and
                  supervision during the interview preparation phase until the
                  candidate is placed in the desired position. In addition,
                  mentorship is provided on Linkedin profile building and
                  insider tips for enhancing the marketability of a resume.{" "}
                </p>

              </>
            ) : (
              ""
            )}
            <p
              style={{
                color: "#2D9CD7",
                fontWeight: "600",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={handler}
              className={styles.readP}
            >
              {read ? "View Less..." : "View More..."}
            </p>
            <YoutubeEmbed embedId="1Y0JwDAuthg"/>
          </div>

        ) : (
          ""
        )}
        {cityTextDSUSA ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              About the Prime <b> Data Science Course</b> Curated in
              Collaboration with IBM & Microsoft
            </h4>
            <p>
              Learnbay anticipates a favorable career switch for mid-career
              level pros from diverse fields in the US. As per the BLS report,
              employment growth for data science careers in the USA projects a
              35.2% rise by 2032 with prime offers. Plus, our{" "}
              <b>
                <a
                  style={{ color: "rgb(45, 156, 215)" }}
                  href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
                  target="_blank"
                >
                  data scientist certification program
                </a>
              </b>{" "}
              in alliance with IBM & MS leads the career race. We believe in
              360-degree knowledge-building to reach the peak of career success
              with sought-after skills.
            </p>
            <p>
              Professionals from different backgrounds can enroll in this
              program and gain job-ready skills. Learnbay introduces a
              Generative AI-rich course syllabus with transformative career
              impacts. Our <b>data scientist course in USA</b> is associated
              with IBM & Microsoft and envisions a rewarding career ahead.
            </p>
            <p>
              IBM, based in Armonk, NY, is a top tech leader known for its
              advanced data science solutions. Its virtual presence with
              insightful solutions saves businesses from unseen digital threats.
              Microsoft, headquartered in Redmond, Washington, is famous for its
              scalable solutions. Learnbay’s dynamic step of collaboration with
              tech giants bridges learning gaps.
            </p>
            <p>
              The data scientist certification program helps US professionals
              switch to a rewarding career. Yet, the mandatory conditions to
              enroll in Learnbay’s program are –
            </p>
            <br />
            <ul>
              <li>Basic know-how of mathematics/statistics concepts</li>
              <li>Good domain knowledge with basic on-field expertise</li>
            </ul>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What career gains will this <b>data science training in USA</b>{" "}
              offer in collab with IBM & MS?
            </h4>
            <p>
              Data science is a multi-faceted field, welcoming experts from
              diverse fields. Its rewarding career path unlocks a growing future
              for experts with stagnant skill sets. If you are eager to revamp
              your career in data science, you must check your eligibility
              first. Vital requirements of the data science certification course
              in the USA are –
            </p>
            <br />

            <ul>
              <li>Bachelor’s degree in any field with good academics</li>
              <li>
                Working pros with a least 6 months of on-the-job work experience
                in any field (full-time/part-time)
              </li>
              <li>Early and mid-career level pros</li>
            </ul>
            <p>
              After finishing the online data science course, projects, and
              assessments, you will receive IBM & MS certifications. These
              certificates are well-known worldwide and can enhance your career
              opportunities. The cutting-edge digital era demands validated
              skill sets to conquer a long-run career success. In short, major
              career gains are –
            </p>

            <br />
            <ul>
              <li>IBM Course Completion and Project Certifications</li>
              <li>Microsoft Certification</li>
              <li>Highly-paid Job offers across the US and overseas</li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {cityTextMasterUSA ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Presenting Learnbay’s GenAI-rich Data Science Master Degrees
            </h4>
            <p>
              The USA is a digitally advanced country, welcoming huge tech
              shifts across diverse sectors. Data science is one of the latest
              digital creations, leading the way for data-driven insights and
              informed decisions.
            </p>
            <p>
              The <i>global data science platform</i> expects a 29% growth by
              2029 paving the way for a data-driven future. Following the growth
              trend, the US job market outlook sees major changes. The Bureau of
              Labor Statistics expects a 35.2% growth in data scientist jobs in
              the USA by 2032. Thus, working pros from diverse fields opt for
              industry-specific upskilling to revamp their careers.
            </p>
            <p>
              <b>Top data science masters programs in USA</b> attract working
              pro’s focus for a smooth career switch. Yet, it does not
              necessarily justify career building with the latest tools useful
              to various domains. Learnbay’s master’s degree in data science
              focuses on domain-driven upskilling. It supports tech and non-tech
              experts to redefine their careers globally.
            </p>
            <p>
              Experts joining our <b>data science MS programs</b> will develop
              diverse skills and knowledge for a gainful career. Currently, most
              learners look for customizable training programs to help them ace
              leading job interviews. Our custom-fit syllabus is frequently
              updated as per the GenAI trends for hassle-free learning.
            </p>

            <p>
              We believe in uninterrupted learning, which is vital for swift
              promotion and hikes. Thus, our master degree for data science in
              USA offers a proven job assistance program. Learners opting for
              Career Service Pro will have an elite chance to mark a
              global-scale success across MNCs in the USA & overseas.
            </p>
            <p>
              In addition, an internationally accredited master’s degree (Woolf
              University) and IBM project certificate empower your career. .
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              Course Features Advancing to a Global-level Career
            </h4>
            <p>
              Learnbay’s <b>master’s degree in data science</b> helps you gain
              job-ready skills and craft a global-level career in trending
              roles. Course features are –
            </p>
            <br />
            <ul>
              <li>
                {" "}
                <b>
                  <i>GenAI-rich Syllabus:</i>
                </b>{" "}
                You can upgrade your skill sets as per the latest Generative AI
                trends. Our syllabus consists of basic and practical learning
                modules. It ensures hands-on learning of tools via live projects
                and case studies to attain imperative success.
              </li>
              <br />
              <li>
                {" "}
                <b>
                  <i>Industry-specific Mentoring:</i>
                </b>{" "}
                You will get industry-focused training from renowned experts
                across MNCs. It helps you solve business issues with tactful
                solutions.{" "}
              </li>

              <br />
              <li>
                {" "}
                <b>
                  <i>Career Service Pro:</i>
                </b>{" "}
                Our online <b>masters in data science USA</b> offers 100% job
                support. Our dedicated placement cell helps you refine and
                cultivate data literacy skills. You will get endless job support
                here – from interview calls to resume building.{" "}
              </li>
              <br />
              <li>
                {" "}
                <b>
                  <i>Effortless Immigration:</i>
                </b>{" "}
                With our master’s program, you can have hassle-free immigration
                facilities across 60+ countries. It expands your global
                networking limits with increased chances of career success.{" "}
              </li>
              <br />
              <li>
                {" "}
                <b>
                  <i>Globally Accredited Master’s Degree:</i>
                </b>{" "}
                You will receive a globally recognized master’s degree (Woolf
                University) with better job prospects. This degree enriches your
                career value similar to a master's in 60+ Western countries.{" "}
              </li>
              <br />
              <li>
                {" "}
                <b>
                  <i>Globally Recognized IBM Project Certificate:</i>
                </b>{" "}
                Our <b>MS in data science in USA</b> offers an IBM project
                certificate to help you join the emerging data workforce. IBM
                certificate validates your learned skills and you can land your
                dream job.{" "}
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {cityTextDSUK ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Presenting an Industry-driven Data Science Course in UK{" "}
            </h4>
            <p>
              As per the Bureau of Labor Statistics report, data scientists’
              employment rates expect a 35% rise by 2032. Owing to this, the
              demand for data science experts keeps increasing in many
              countries, including the UK.
            </p>
            <p>
              The UK is a digitally-driven country with increasing reliance on
              data. The UK government recognizes ‘data skills’ as the fuel for
              successful career growth. Thus, the country sees an increasing
              demand for data scientists with a progressing career path.
            </p>
            <p>
              Working pros from diverse fields show their urge to study data
              science in UK due to its alluring career growth options. Our
              comprehensively designed data science courses in London, UK offer
              cutting-edge training to experts. It equips you with the trending
              skills to get job-ready and crack top-tier jobs.
            </p>
            <p>
              Currently, businesses in the UK focus on informed decision-making
              to strengthen their hold over target markets. Pros opt for a data
              science online course with proven learning due to the rising
              data-driven culture. Thus, we offer you GenAI inclusive training
              to ace the competitive edge.
            </p>
            <p>
              We support effortless career shifts and promotions to leadership
              roles in the data science field. Our best data science courses
              craft a hassle-free way for global-scale knowledge gains. We offer
              an open learning space to understand real-world business issues in
              the UK and tackle them via live projects.{" "}
            </p>

            <p>
              Data science is an evolving field that ascertains a financially
              growing future for the UK. Apart from the business world, the UK’s
              job market outlook expects a rising future for working pros in
              diverse sectors.{" "}
            </p>
            <p>
              A data scientist on average earns £59,431 per year in London, UK.
              With the required skill sets and experience, a Lead Data Scientist
              can expect a rise to £88,334 per year. Thus, the demand for online
              data science programs keeps growing.{" "}
            </p>
            <p>
              Our best data science courses offer globally recognized
              certifications from tech giants such as IBM & Microsoft. With
              basic numeric skills and domain knowledge, anyone can enroll in
              our program, revitalizing their careers.{" "}
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              Career Gains with Our Data Science Course in UK{" "}
            </h4>
            <p>
              Working pros have opted for several pathways to re-establish their
              careers in proven fields in the past few years. Data science is
              pivotal for driving captivating success with global-level offers
              in your domain. Experts in the UK opt for industry-focused data
              science courses with exclusive career gains.{" "}
            </p>
            <p>Our data scientist course UK offers –</p>
            <br />
            <ul>
              <li>
                <b>GenAI-driven training:</b> Experts will get a 360-degree
                knowledge-building scope with the latest GenAI tools
                (theoretical & project-based learning).
              </li>
              <br />
              <li>
                <b>Domain-specific learning:</b> Experts from various fields can
                enroll with us to get domain-specific learning and improve the
                prior experience.{" "}
              </li>
              <br />
              <li>
                <b>Hands-on learning:</b> Best data science courses by Learnbay
                offer hands-on learning gains to its learners via live projects.
                Here, you can enrich your domain expertise with the latest data
                trends.{" "}
              </li>
              <br />
              <li>
                <b>Global certifications:</b>Our data science courses offer
                globally accredited certifications from tech giants like IBM &
                MS.
              </li>
              <br />
              <li>
                <b>Career Service Pro:</b> Experts enrolling in our data science
                course in UK will get 100% job and placement support with 450+
                industry partners.
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {cityTextMastergermany ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Briefing Our Master’s Degree in Data Science in Germany [In
              Alliance with IBM & Woolf University]
            </h4>
            <p>
              Following the rising digital shifts, MNCs in Germany rely on data
              science to drive higher yields and strategize operations. The
              majority of IT and business establishments in Germany are seeking
              proficient data scientists to distinguish themselves from their
              competitors. Thus, upskilling via a <b>masters in data science</b>{" "}
              is vital for global-scale career growth.
            </p>
            <p>
              Experts eager to redefine their careers opt for the{" "}
              <b>best data science masters programs</b> with valuable returns.
              According to research projections, Germany's IT sector is expected
              to reach $129 billion by 2025, expanding the opportunities for
              data expertise. It increases the demand for skillful data
              scientists in Germany, who are the future of the country.
            </p>
            <p>
              Learnbay’s <b>master degree in data science in Germany</b> (Master
              Degree in Computer science: Data science and AI) envisions an
              unbeatable career growth journey. Its inclusive course modules
              with GenAI-rich syllabus help experts ace in-demand skills. Here,
              you will gain a 360-degree knowledge-building scope via real-time
              simulation projects in your domain.
            </p>
            <p>
              Experts opting for an <b>MS in data science</b> will receive a
              globally accredited master’s degree from Woolf University. Plus,
              we also offer an IBM project certificate that justifies proven
              skill sets across the globe.
            </p>

            <br />
            <h4 style={{ fontSize: "20px" }}>
              Enlisting Features of Masters in Data Science and AI Program
            </h4>
            <br />
            <ul>
              <li> Learning via GenAI-rich Course Modules</li>
              <br />
              <li>
                Mentorship from Renowned Experts with relevant work experience
              </li>

              <br />
              <li>Effortless Immigration Facilities</li>
              <br />
              <li>Career Service PRO (100% Job and Placement Support)</li>
              <br />
              <li>
                Globally Accredited Master’s Degree with Affiliation to Woolf
                University
              </li>
              <br />
              <li>IBM Project Certificate</li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {cityTextDSNGR ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Introducing Learnbay’s <b> Data Science Training in Nigeria</b> in
              alliance with IBM & MS
            </h4>
            <p>
              Nigeria is one of the fastest-growing African countries with
              infinite options for career growth in data science. In the
              upcoming years, Nigeria expects a notable rise in demand for data
              scientists to make insightful progress. Thus, the enrollment rates
              in an industry-focused{" "}
              <b>
                <a
                  href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
                  target="_blank"
                >
                  data science course
                </a>
              </b>{" "}
              in Nigeria increased.
            </p>
            <p>
              In Nigeria, Learnbay is widely known for its industry-specific
              training, supporting mid-career-level growth. Regardless of
              IT/non-IT domain, working pros join us for a swift career with
              proven gains. Owing to the rising trend of{" "}
              <b>data science in Nigeria</b> , Learnbay steps forward for
              industry-driven career upskilling with assured success.
            </p>
            <p>
              Anyone can <b> learn data science in Nigeria</b> if they fulfill
              the primary requisites. They are –{" "}
            </p>
            <br />

            <ul>
              <li>Basic statistics and mathematics skills</li>
              <li>Primary knowledge of domain/stream.</li>
            </ul>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              In what ways does Learnbay’s collaboration with IBM & MS help in
              your career rise?
            </h4>

            <p>
              Learnbay’s globally recognized IBM & Microsoft (MS) certificates
              help learners counter career risks with proven skills. Valuable
              certifications validate your skills to ace top-tier job interviews
              with better hikes and perks. Major highlights are –
            </p>
            <br />

            <ul>
              <li>Two IBM certificates (Course & Project)</li>
              <li>One MS Certificate</li>
              <li>Premium job offers in Nigeria and overseas</li>
            </ul>

            <p>
              <b>So, who is eligible for this course?</b>
              <br />
              <br />
            </p>
            <ul>
              <li>
                A qualified graduate with a good academic record (Any
                Domain/Stream)
              </li>
              <li>A minimum of 6 months of work experience (tech/non-tech)</li>
              <li>
                Early/mid-career level pros (full-time/part-time) eager in data
                science careers
              </li>
            </ul>

            <p>
              Apart from this, experts willing to uplift their decision-making
              skills can join our <b>data science online course</b> for managers
              and leaders. Additionally, experts eager to rebuild a global-level
              career can go with a master’s program in data science.
            </p>
          </div>
        ) : (
          ""
        )}
        {cityTextDSVM ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Overview of Learnbay’s Premium Data Science Training in Vietnam
              [In Alliance with IBM & Microsoft]
            </h4>
            <p>
              Learnbay’s <b>data science training in Vietnam</b> unleashes an
              inclusive career-building space to arm you with job-driven skills.
              IBM & MS’s global presence allures early and mid-career-level
              experts to redefine their skill sets. Our alliance with tech
              giants offers a scope to re-establish a global-scale career in
              data science.
            </p>
            <p>
              Vietnam’s digital economy heavily relies on the fast-paced rise of
              data science across major sectors. Vietnam’s data market expects
              an attractive rise of 5.32% by 2027, leveraging business yields
              rapidly. Thus, the country sees a growing demand for data
              scientists. Its growth scope in the market allures many working
              pros to take the lead.
            </p>
            <p>
              Thus, experts expect a rapid rise in data scientists' jobs
              country-wide. Yet, it requires proven skills with eminent data
              tools to tackle issues with expertise. Learnbay’s alliance with
              IBM & MS helps experts fulfill their career transition dreams and
              land prospering job roles.
            </p>
            <p>
              The enrollment rates for <b>data science certificate programs</b>{" "}
              in Vietnam keep increasing due to industry demands. Yet, many
              experts have to drop their career switch decisions as they need
              more than the bare minimum of skills and knowledge.
            </p>
            <p>
              If you aspire to become a successful data scientist with IBM & MS
              certifications, check whether you fulfill certain criteria –
              <br />
              <br />
            </p>
            <ul>
              <li>Basic knowledge of applied mathematics/statistics</li>
              <li>Elementary knowledge of domain disciplines.</li>
            </ul>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              How does Learnbay’s <b>data science course</b> in alliance with
              IBM & MS uplift your career?
            </h4>
            <p>
              Vietnam is progressing in the data science industry with multiple
              career options. Experts eager to switch careers into the rising
              data science field opt for upskilling. Data science is a versatile
              field with seamless integration with leading sectors. Thus, skills
              validation is vital to prove your expertise and tackle the tasks
              tactfully.
            </p>
            <p>
              So, who is eligible for Learnbay’s{" "}
              <b>data science certificate programs?</b>{" "}
            </p>
            <br />
            <ul>
              <li>
                A qualified graduate with consistent academic record (Any
                Domain/Stream)
              </li>
              <li>
                At least six months of full-time/part-time work experience
              </li>
              <li>
                Early and mid-career level pros (IT/Non-IT) interested in data
                science roles
              </li>
            </ul>
            <br />
            <p>
              Furthermore, managerial-level working pros can opt for Learnbay’s
              data science course in Vietnam to deliver more realistic
              decisions. Experts seeking a career rise with insightful
              knowledge-building can opt for our master’s program. We extend our
              support to all level aspirants to cope within a tech-driven era
              with assured success.
            </p>
            <p>
              Our globally recognized certificates help you build a strong
              portfolio with industry validation for your skills. Unlike generic
              courses, Learnbay’s{" "}
              <b style={{ color: "#0072BC" }}>
                <a
                  href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
                  target="_blank"
                >
                  data science course
                </a>
                <br />
              </b>{" "}
              in alliance with IBM & MS offers alluring career gains –{" "}
            </p>
            <br />
            <br />
            <ul>
              <li>One Course Completion and Project Certifications (IBM)</li>
              <li>One MS Certification</li>
              <li>
                Attractive hikes with Job offers across Vietnam and overseas
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {cityTextVI ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Tổng quan về Khóa đào tạo Khoa học Dữ liệu Cao cấp của Learnbay
              tại Việt Nam [Liên minh với IBM & Microsoft]
            </h4>
            <p>
              <b>Khóa đào tạo khoa học dữ liệu của Learnbay tại Việt Nam</b> mở
              ra một không gian xây dựng sự nghiệp bao trùm để trang bị cho bạn
              những kỹ năng phù hợp với nhu cầu công việc. Sự hiện diện toàn cầu
              của IBM & MS thu hút các chuyên gia ở mức độ sớm và trung cấp để
              định nghĩa lại bộ kỹ năng của họ. Liên minh của chúng tôi với
              những ông lớn công nghệ cung cấp một phạm vi để tái thiết lập một
              sự nghiệp quy mô toàn cầu trong lĩnh vực khoa học dữ liệu.
            </p>
            <p>
              Nền kinh tế số của Việt Nam phụ thuộc nhiều vào sự gia tăng nhanh
              chóng của khoa học dữ liệu trong các ngành chính. Thị trường dữ
              liệu của Việt Nam dự kiến sẽ tăng 5,32% vào năm 2027, tận dụng
              mạnh mẽ các lợi ích kinh doanh. Do đó, quốc gia này đang chứng
              kiến sự tăng trưởng trong nhu cầu về các nhà khoa học dữ liệu.
              Phạm vi tăng trưởng của nó trên thị trường thu hút nhiều chuyên
              gia làm việc để dẫn đầu.
            </p>
            <p>
              Do đó, các chuyên gia dự kiến một sự gia tăng nhanh chóng về việc
              làm cho nhà khoa học dữ liệu trên toàn quốc. Tuy nhiên, điều này
              đòi hỏi các kỹ năng được chứng minh với các công cụ dữ liệu đáng
              chú ý để giải quyết các vấn đề một cách thành thạo. Liên minh của
              Learnbay với IBM & MS giúp các chuyên gia thực hiện ước mơ chuyển
              đổi sự nghiệp của họ và đạt được các vai trò công việc phát triển.
            </p>
            <p>
              Tỷ lệ nhập học cho các{" "}
              <b style={{ color: "#0072BC" }}>
                <a href="https://www.learnbay.co/" target="_blank">
                  chương trình chứng chỉ khoa học dữ liệu
                </a>
              </b>{" "}
              ở Việt Nam tiếp tục tăng do nhu cầu của ngành công nghiệp. Tuy
              nhiên, nhiều chuyên gia phải từ bỏ quyết định chuyển đổi sự nghiệp
              của họ vì họ cần nhiều hơn là kiến thức và kỹ năng tối thiểu.
            </p>
            <p>
              Nếu bạn ao ước trở thành một nhà khoa học dữ liệu thành công với
              các chứng chỉ của IBM & MS, hãy kiểm tra xem bạn có đáp ứng được
              các tiêu chí sau không –
              <br />
              <br />
            </p>
            <ul>
              <li>Kiến thức cơ bản về toán ứng dụng/thống kê</li>
              <li>Kiến thức cơ bản về các lĩnh vực chuyên ngành.</li>
            </ul>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              Làm thế nào Khóa học <b>khoa học dữ liệu của Learnbay</b> phối hợp
              với IBM & MS nâng cao sự nghiệp của bạn?
            </h4>
            <p>
              Việt Nam đang tiến triển trong ngành công nghiệp khoa học dữ liệu
              với nhiều lựa chọn sự nghiệp. Các chuyên gia háo hức chuyển đổi sự
              nghiệp vào lĩnh vực khoa học dữ liệu đang tăng cường kỹ năng. Khoa
              học dữ liệu là một lĩnh vực linh hoạt với sự tích hợp mượt mà với
              các ngành hàng dẫn đầu. Do đó, xác nhận kỹ năng là rất quan trọng
              để chứng minh sự thành thạo của bạn và xử lý các nhiệm vụ một cách
              khéo léo.
            </p>
            <p>
              Vậy, ai được xem là phù hợp để tham gia vào các{" "}
              <b>chương trình chứng chỉ khoa học dữ liệu của Learnbay?</b>
            </p>
            <br />
            <ul>
              <li>
                Một sinh viên tốt nghiệp có hồ sơ học tập nhất quán (bất kỳ
                Ngành/Ngành nghề nào)
              </li>
              <li>
                Ít nhất là sáu tháng kinh nghiệm làm việc toàn thời gian/bán
                thời gian
              </li>
              <li>
                Các chuyên gia ở mức độ sớm và trung cấp (IT/Không phải IT) quan
                tâm đến các vai trò khoa học dữ liệu
              </li>
            </ul>
            <br />
            <p>
              Hơn nữa, các chuyên gia làm việc ở cấp quản lý có thể lựa chọn
              khóa học khoa học dữ liệu của Learnbay tại Việt Nam để đưa ra các
              quyết định có tính thực tế hơn. Các chuyên gia đang tìm kiếm sự
              thăng tiến sự nghiệp với sự xây dựng kiến thức sâu rộng có thể
              chọn chương trình thạc sĩ của chúng tôi. Chúng tôi mở rộng sự hỗ
              trợ của mình cho tất cả các ứng viên cấp độ để vươn lên trong một
              thời đại được công nghệ hóa với thành công đảm bảo.
            </p>
            <p>
              Các chứng chỉ được công nhận toàn cầu của chúng tôi giúp bạn xây
              dựng một hồ sơ mạnh mẽ với sự chứng nhận của ngành công nghiệp cho
              kỹ năng của bạn. Khóa học{" "}
              <b style={{ color: "#0072BC" }}>
                <a
                  href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
                  target="_blank"
                >
                  khoa học dữ liệu
                </a>
              </b>{" "}
              ở Liên minh với IBM & MS cung cấp các lợi ích sự nghiệp hấp dẫn –
            </p>
            <br />
            <br />
            <ul>
              <li>Một Chứng chỉ Hoàn thành Khóa học và Dự án (IBM)</li>
              <li>Một Chứng chỉ MS</li>
              <li>
                Tăng lương hấp dẫn cùng các cơ hội việc làm trong và ngoài Việt
                Nam
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {cityTextDSSingapore ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              About a Rewarding <b>Data Scientist Course in Singapore</b> in
              Alliance with IBM & Microsoft
            </h4>
            <p>
              Singapore has seen a fast-paced rise in data-driven trends over
              the past few years. With over forty data centers, Singapore has
              become the 4th largest data-center market in the Asia-Pacific
              region. Thus, the demand for skillful data scientists keeps
              increasing in the country. Our exclusive alliance with IBM & MS
              drives career transition success with marketable skills.
            </p>
            <p>
              Learnbay, in alliance with IBM & MS, introduces a GenAI-rich
              course syllabus. These updated modules captivate the focus of
              working pros with stagnant careers. Its edifying modules craft a
              bright future in data science.
            </p>
            <p>
              The Asia-Pacific presence of IBM & MS anticipates a digitally
              skilled workforce to face major risks with tactful results. Thus,
              our alliance with these two tech giants proves an industrious step
              toward bridging skills gaps. Indeed, Learnbay’s{" "}
              <b>data scientist course Singapore</b> extends a fulfilling step
              for career enthusiasts by all means.
            </p>
            <p>
              The{" "}
              <b style={{ color: "#0072bc" }}>
                <a href="https://www.learnbay.co/" target="_blank">
                  data science courses
                </a>
              </b>{" "}
              offered by Learnbay provide a comprehensive learning environment
              for both Singaporeans and international students. Yet, one must
              fulfill the vital criteria set for this career upskilling and they
              are –
            </p>
            <br />

            <ul>
              <li>Basic numerical skills (statistics)</li>
              <li>Proven domain knowledge</li>
            </ul>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What career benefits will Learnbay’s{" "}
              <b>data science course in Singapore</b> offer in alliance with IBM
              & MS?
            </h4>
            <p>
              Working pros worried about slow-paced careers and eager to revamp
              can <b>study data science in Singapore</b> with Learnbay. Once you
              complete the course with project tasks, you will obtain IBM & MS
              certifications. These globally accredited certificates validate
              your ability to sustain in today’s digital era. Currently,
              companies look for data experts with leading-edge skills, and
              these certificates are valid proof of the same.
            </p>
            <p>
              In short, with our <b>data science training in Singapore</b>, you
              will gain –
            </p>
            <br />

            <ul>
              <li>2 Course Completion and Project Certifications (IBM)</li>
              <li>1 Microsoft Certification</li>
              <li>Well-paid Job offers across Singapore and overseas</li>
            </ul>

            <p>
              <b>So, who are eligible?</b>
              <br />
              <br />
            </p>
            <ul>
              <li>A graduate from any field with a good academic record</li>
              <li>
                At least six months of working experience (full-time/part-time)
              </li>
              <li>Early and mid-career level pros</li>
              <li>Non-IT pros with basic numeric skills</li>
            </ul>

            <p>
              Learnbay also offers{" "}
              <b>
                data science courses in Singapore for international students
              </b>{" "}
              eager to kick-start a thriving career. Additionally, mid-career
              level managers and leaders can enroll here to elevate their
              decisiveness. Furthermore, BFSI, HR, and Marketing experts can opt
              for upskilling with Learnbay’s domain-specific training.
            </p>
          </div>
        ) : (
          ""
        )}
        {cityTextDSSAfrica ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Introducing Learnbay’s Data Science Online Course in South Africa
              [In alliance with IBM & MS]
            </h4>
            <p>
              Learnbay’s <b>data science certificate programs</b> support
              hassle-free career shifts of working experts from diverse fields.
              Its industry-focused course syllabus helps experts to stay
              informed of recent trends. Meanwhile, our alliance with IBM & MS
              increases career values with premium job offers.
            </p>
            <p>
              Learnbay’s <b>data science training in South Africa</b> offers
              live instructor-led sessions to help experts gain in-depth
              domain-specific skills. Our partnership with IBM & MS offers a
              scope to gain applied knowledge on the trending tools.
              Additionally, these valuable certificates further support global
              career-building with promising job offers.
            </p>

            <p>
              Experts eager for a data-driven career can join our best data
              science courses but before this, you must fulfil the requisites –{" "}
            </p>
            <br />
            <ul>
              <li>Applied mathematics/statistics concepts</li>
              <li>Basic domain expertise </li>
            </ul>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What prime career gains do Learnbay’s{" "}
              <b>data scientist courses in South Africa</b> offer?
            </h4>

            <p>
              Learnbay’s best data science certification programs unlock a
              successful career path with promising growth options. Working pros
              eager to join us to drive career excellence must check their
              eligibility here –{" "}
            </p>

            <br />
            <ul>
              <li>A graduate (in any field) with good academics</li>
              <li>
                At least 6 months of work experience (any domain,
                full-time/part-time)
              </li>
            </ul>

            <p>
              Once you enroll in our upskilling programs, you will unlock elite
              features to level up your career horizons. Major career gains are
              –
            </p>

            <br />
            <ul>
              <li>
                2 IBM Certifications (Course completion & Project experience)
              </li>
              <li>1 MS (Microsoft) Certification</li>

              <li>Advantageous job offers across South Africa and overseas </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {cityTextBangla ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Presenting Learnbay’s Data Science Certification Course in
              Bangladesh [In Association with IBM & MS]
            </h4>
            <p>
              Bangladesh is one of the digitally growing countries with infinite
              scopes of success. The rapid growth of big data and analytics
              alters the job market outlook in the country. All government and
              private sector works depend on two prime data centers in
              Bangladesh. Indeed, the demand for a data-driven culture keeps on
              increasing, paving the way for prime job offers.
            </p>
            <p>
              Amidst tech-driven shifts, the demand for industry-focused{" "}
              <b>data science training in Bangladesh</b> soars. Working pros in
              diverse domains come forward to upgrade their skill sets as per
              the current data trends. Learnbay’s premium data science courses
              support real-time career rise with 100% job support.
            </p>
            <p>
              Learnbay aims for hassle-free career shifts with promising skills
              upgrades. The industry-driven course syllabus justifies our vision
              to revamp stagnant careers across diverse fields. Meanwhile, our
              alliance with IBM & MS supports this dynamic approach to assure
              career gains.
            </p>
            <p>
              Working pros eager to re-establish themselves in their career
              zones enroll in Learnbay’s{" "}
              <b>data science course in Bangladesh.</b> Our live training
              sessions by industry experts help you gain domain-specific
              knowledge. Expert feedback and 1:1 doubt-clearing sessions offer
              an in-depth learning experience.
            </p>
            <p>
              Plus, Learnbay offers the best <b>data science certification</b>{" "}
              in alliance with IBM & MS. It enriches career paths with global
              job offers and better hikes in your dream roles.
            </p>

            <p>
              Our upskilling programs have an inclusive learning set-up, but
              before that, you must fulfil vital requisites. They are –
            </p>
            <br />

            <ul>
              <li>Basic knowledge of mathematics or statistics </li>
              <li>Basic domain skills </li>
            </ul>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What career gains can you expect from Learnbay’s{" "}
              <b>data science certification course?</b>
            </h4>

            <p>
              Learnbay is widely known for the <b>best data science courses</b>{" "}
              available in Bangladesh. It helps working from diverse fields
              rethink their career paths and redefine them with better job
              offers. Experts interested in having an effortless career switch
              can opt for our premium courses. Also, to get into top-tier job
              roles, one can opt for a master’s degree program in Data Science &
              AI.
            </p>

            <b>
              <p>
                <i>You are eligible for upskilling if –</i>
              </p>
            </b>
            <br />
            <ul>
              <li>A graduate with consistent academic records</li>
              <li>
                A minimum of 6 months work experience (any domain,
                full-time/part-time)
              </li>
              <li>
                Early and mid-career level, managerial level, business owners
              </li>
            </ul>

            <p>
              An upskilling with project-based learning will deliver valuable
              career gains to kickstart a global career. They are –
            </p>

            <br />
            <ul>
              <li>
                2 IBM Certifications (Course completion & Project experience)
              </li>
              <li>1 MS (Microsoft) Certification</li>

              <li>Job offers with hikes across Bangladesh and overseas </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {cityTextDhaka ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Briefing on a Trend-setting Data Science Course in Dhaka [In
              Collaboration with IBM & Microsoft]
            </h4>
            <p>
              In the context of today’s era of digital modernity, data science
              has emerged as a trendsetter for working experts from diversified
              backgrounds. The demand for skillful data scientists is increasing
              dramatically, following emerging trends. No wonder, data science
              is a rewarding and ambitious field for many experts eager to
              redefine themselves. Thus, signup rates for a data science
              training institute in Dhaka are increasing.
            </p>
            <p>
              As data usage increases at a rapid pace, tech-savvy businesses
              prefer data-driven methods to grow. Learnbay concocts an advanced
              career path for experts with stagnant skill sets via its top-tier
              data science courses. Our programs are thoroughly curated as per
              current data trends to ascertain success. We aim for effortless
              career updates with proven upskilling ways.
            </p>
            <p>
              Plus, our domain-focused data science course in Dhaka dilates our
              knowledge base with competitive skills. Experts level up their
              existing domain knowledge according to current trends. Plus, our
              globally recognized certifications from IBM & Microsoft validate
              your skills with excelling job roles.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What are the vital career gains that you can expect from our data
              science training institute in Dhaka?
            </h4>
            <p>
              Experts with basic domain knowledge and a bachelor’s degree in
              computer science or non-tech fields can opt for data science.
              Upskilling with a data science course will drive attainable career
              success with prime gains like –
            </p>
            <br />

            <ul>
              <li>Two IBM Certifications (Course & Projects)</li>
              <li>One MS Certification </li>
              <li>Job offers with hikes across Dhaka and overseas</li>
            </ul>
            <br />
            <p>
              <b>Note:</b> Our master’s program equips you with a globally
              accredited degree from Woolf University. These credentials and
              degrees unlock a favorable career path on a global scale. Thus,
              enroll in our courses today and unleash your potential for faster
              success.
            </p>
          </div>
        ) : (
          ""
        )}

        {cityTextDSMalaysia ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              About Data Science Course in Malaysia In Collaboration with IBM &
              Microsoft
            </h4>
            <p>
              Lately, Malaysia has seen rapid growth in digital shifts across
              diverse sectors. Post-pandemic cases reflect the country’s
              increased reliance on digital-friendly creations. In short,
              Malaysia’s digital economy relies on big data, which increases the
              demand for data science. Thus, with proven job opportunities, an
              inclination toward a big data course in Malaysia is seen.
            </p>
            <p>
              Currently, many businesses in the country prefer data-driven
              insights for operations and decision-making. This enlarges job
              prospects in data science with infinite gains. Thus, working pros
              opt for upskilling from the best institute for data science with
              better job offers.
            </p>
            <p>
              Learnbay’s data science training in Malaysia grabs everyone’s
              focus who is eager to grow in their career. Our leading-edge
              course syllabus extends valuable support to data experts.
              Following the current trends, we offer exclusive data science
              training with GenAI-rich tools and practices.
            </p>
            <p>
              Amidst the tech shifts, most employers look for proven data skills
              to thrive across industry rivalry. So, we are here to guide you
              through real-world business issues with tactical solutions. The
              best data science course in Malaysia with a practical learning
              scope elevates success chances more. You can learn and practice
              the data science tools via live projects in your domain.
            </p>
            <p>
              Data science is an economically growing sector for working pros at
              various career levels. A data scientist in Malaysia on average
              earns MYR 15,000 per month. It can vary per the work experience,
              domain, and skill set.
            </p>
            <p>
              Joining a generic course can limit growth and career success
              chances. Thus, enrolling in an industry-driven program with job
              support can help you.
            </p>

            <p>
              Upskilling with our data science certificate programs will never
              demean your career. Our positive support for your career building
              ends once you land your dream job role. Industry-led job assist
              programs support your career shift decision at every step.
            </p>

            <p>
              Plus, the data science program in Malaysia equips you with
              valuable certifications (with global recognition) from IBM &
              Microsoft. Enroll in our course today and hone your skills to
              attain proven career success.
            </p>
            <p>
              So, if you are eager to redefine your career in the data science
              field, enroll in Learnbay’s{" "}
              <a
                style={{ color: "#0072bc" }}
                href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
                target="_blank"
              >
                best data science courses.
              </a>{" "}
              Before that, ensure the requisites –
            </p>
            <br />

            <ul>
              <li>Basic numeric skills (Mathematics/Statistics) </li>
              <li>Basic domain knowledge</li>
            </ul>
            <br />
            <p>
              <b>
                <i>Note:</i>
              </b>{" "}
              Anyone from computer science or non-technical fields can enroll in
              our course. If you have a bachelor's degree in computer science,
              management, or other fields, our data science programs are here to
              level up your career.{" "}
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What are the prime career benefits of Learnbay’s best data science
              courses?
            </h4>
            <p>
              Learnbay is well-known for its industry-specific training programs
              in Malaysia. Data science careers in Malaysia are getting more
              attractive, alluring many experts to rethink their career paths.
            </p>
            <p>
              Meanwhile, our GenAI-driven upskilling in data science unlocks
              ways toward successful career shifts. Learners will gain inclusive
              learning space to work with the latest GenAI tools (ChatGPT) with
              ethical practices.
            </p>
            <br />
            <b>
              {" "}
              <i>Prime career gains are –</i>
            </b>

            <br />
            <br />
            <ul>
              <li>
                <b>
                  <i>GenAI-rich upskilling:</i>
                </b>{" "}
                Learners get in-depth training on data science tools and trends
                in the GenAI age.{" "}
              </li>
              <br />
              <li>
                <b>
                  <i>Domain-specific training: </i>
                </b>
                We offer domain-driven data science training in Malaysia to help
                you improve pre-existing skills.
              </li>
              <br />
              <li>
                <b>
                  <i>Experimental learning:</i>
                </b>{" "}
                Experts with our data science course get hands-on learning of
                tools via live projects. It expands knowledge limits with
                industry-focused skills.{" "}
              </li>
              <br />
              <li>
                <b>
                  <i>Global certifications: </i>
                </b>
                We offer the best data science certification with global-scale
                job offers. Our certificates from IBM & MS unlock promising
                career paths. You will get two IBM certifications (project and
                course) and one MS certification.
              </li>
              <br />
              <li>
                <b>
                  <i>100% job assistance: </i>
                </b>
                Learners get 100% job and placement support with end-to-end
                skills growth and interviews.
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {cityTextDSAustin ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Briefing on Broadly Designed Data Science Course Austin in
              Collaboration with IBM & Microsoft
            </h4>
            <p>
              Data science tools and trends are drivers of growth and success
              for organizations in today’s digital age. As per the U.S. Bureau
              of Labor Statistics reports, around 11.5 million data scientist
              jobs shall be created by 2026. Thus, professionals favor
              cutting-edge data science instruction in Austin to enhance their
              abilities.
            </p>
            <p>
              Learnbay anticipates a competitive career advancement journey
              through its extensive course syllabus. It features a 360-degree
              knowledge-building platform where you will learn about GenAI-rich
              data science trends. Additionally, we offer a practical learning
              scope with real-time projects. Our data science course in Austin
              helps you refine existing skills via project work and tackle
              business issues effectively.
            </p>
            <p>
              We have an industry collaboration with IBM, a top-notch IT giant
              with a global presence. Its insightful solutions in predictive
              analytics, ML models, and automation drive ultimate career success
              with better offers. Learners will obtain two IBM certifications
              for course and real-time projects.
            </p>
            <p>
              Plus, our alliance with Microsoft supports global-scale career
              shifts with promising hikes and upgrades. Learners opting for our
              data science course Austin get one Microsoft certification that
              accelerates career growth chances.
            </p>
            <p>
              Note: If you opt for our master’s certification program in data
              science, you will get one MS certificate and 3 IBM project
              certificates. If you opt for a master’s degree in data science,
              you will have one IBM project certificate with a degree from Woolf
              University.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What are the major career gains our data science course in Austin
              offers?{" "}
            </h4>
            <p>
              The field of data science professionals is a multi-faceted one
              with an incomparably engaging future. Upskilling with our{" "}
              <b>
                {" "}
                <a
                  style={{ color: "#0072bc" }}
                  href="https://www.learnbay.co/data-science-courses"
                  target="_blank"
                >
                  best data science courses
                </a>
              </b>{" "}
              helps you modernize your careers with globally trending job roles.
              Constant learning of in-demand data science skills paves the way
              for a global-level career shift.{" "}
            </p>
            <b>
              <p>
                In short, vital career gains with our data science course are –
              </p>
            </b>
            <br />
            <ul>
              <li>Updated knowledge-building with GenAI-rich modules</li>
              <li>Project-based learning (12+ real-time projects)</li>
              <li>Flexible learning methods </li>
              <li>100% job and placement support </li>
              <li>Globally recognized certifications (IBM & Microsoft)</li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {cityTextDSEgypt ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Presenting Industry-driven Data Science Training in Egypt
            </h4>
            <p>
              Egypt’s data center market expects a 12.8% rise by the end of
              2030. An increasing inclination toward data alters the business
              and job market landscape. Thus, working pros opt for an
              industry-paced data science training program with better career
              gains.
            </p>
            <p>
              Learnbay’s cutting-edge data science courses in Egypt support
              hassle-free career shifts with trending job roles. Our program
              builds an open learning space to help you improve your basic and
              advanced data skills.
            </p>
            <p>
              We offer practical data science classes with real-time simulation
              projects where you learn about the actual uses of data tools.
              Here, you learn everything – from coding facets to insightful
              dashboard designs.
            </p>
            <p>
              We make your career switch journey effortless with our job assist
              program. Eligible learners get job calls from the leading MNCs
              with attractive hikes. Plus, our Microsoft and IBM data science
              professional certificate enriches your career values with exciting
              offers.
            </p>

            <br />
            <h4 style={{ fontSize: "20px" }}>
              Enlisting Career Gains with Best Data Science Courses
            </h4>
            <p>
              Working pros with slow-paced careers opt for reskilling and
              upskilling in data science. Experts from any domain and career
              level can opt for our data science course to avail of career gains
              like –
            </p>

            <br />
            <ul>
              <li>Inclusive learning of GenAI-rich tools</li>
              <li>Project-based learning </li>
              <li>100% job and placement support </li>
              <li>Globally recognized certifications (IBM & Microsoft) </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {cityTextMasterAUS ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Briefing on Learnbay’s Master in Data Science and AI Program
            </h4>
            <p>
              In today’s digital era, data science takes the prime stage,
              resurfacing business and job market dynamics with new changes. The
              demand for skillful data scientists keeps on soaring across
              Australia. Rapid growth in data analytics and data science sectors
              resurfaces Australia with a data-driven future.
            </p>
            <p>
              Owing to the data explosion worldwide, the data science career
              path has become the center of attention. Thus, several working
              pros rethink their career graph and opt for industry-specific
              upskilling ways. Unlike standard courses, a masters in data
              science bags utmost appreciation.
            </p>
            <p>
              Our futuristic data science masters programs in Australia unlock
              true career potential with alluring job offers. The employment
              prospects for data scientists in Australia exhibit a concurrent
              shortage of skilled individuals and an oversupply of experts.
            </p>
            <p>
              Our master in data science program leaps forward to support a
              successful career switch. We offer a GenAI-rich course syllabus to
              refine your existing digital skills and make you job-ready. With
              our industry-focused modules, you can craft a successful career on
              a global scale.
            </p>

            <p>
              We offer 360-degree data science training sessions to help you
              develop conceptual and practical skills. We believe in
              domain-specific upskilling, and here you can upskill in a domain
              as per your career interest. Live projects add more value to your
              career as you can get exposure to real-world issues.
            </p>
            <p>
              Our globally accredited master’s degree from Woolf University
              unleashes global-scale job prospects. Plus, an IBM project
              certificate enriches career values limitlessly to land a dream job
              role in Australia and overseas.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              Featuring the Best Data Science Masters in Australia
            </h4>
            <p>
              Learnbay’s <b>masters in data science online</b> envisions an
              unbeatable career with a lucrative career path and prime job
              offers from leading MNCs.
            </p>
            <p>
              <i>Our course features are –</i>
            </p>
            <br />
            <ul>
              <li>
                {" "}
                <b>
                  <i>GenAI-rich Syllabus:</i>
                </b>{" "}
                Experts enrolling with us will develop GenAI-rich skills
                (ChatGPT) to deal with complex models. You will gain in-depth
                knowledge of data science and AI, dominating diverse sectors.
              </li>
              <br />
              <li>
                {" "}
                <b>
                  <i> Project-based Learning:</i>
                </b>{" "}
                Experts opting for our industry training programs will get
                hands-on learning experience. You can learn the in-demand tools
                via live projects as per today’s industry trends.
              </li>

              <br />
              <li>
                {" "}
                <b>
                  <i>Mentorship from renowned experts:</i>
                </b>{" "}
                You will get industry-focused training from renowned experts who
                deliver their real-time experience. It helps in understanding
                real-world business operations and ways to deal with them.
              </li>
              <br />
              <li>
                {" "}
                <b>
                  <i>Advantageous Immigration:</i>
                </b>{" "}
                Our masters in data science program has 60+ country approvals,
                paving the way for advantageous immigration. It extends your
                professional links with better job prospects.
              </li>
              <br />
              <li>
                {" "}
                <b>
                  <i>Career Service Pro:</i>
                </b>{" "}
                Career Service Pro: Unlike other universities in Australia, our
                master’s in data science program offers 100% job assistance.
                With Career Service Pro, you will gain everything – from resume
                building to unlimited job calls.
              </li>
              <br />
              <li>
                {" "}
                <b>
                  <i>Globally Accredited Master’s Degree:</i>
                </b>{" "}
                Our courses are trending in Australia as they offer a globally
                approved degree (Woolf University). With 60+ countries approved,
                learners can revamp their careers with lucrative offers.
              </li>
              <br />
              <li>
                {" "}
                <b>
                  <i>IBM Project Certificate:</i>
                </b>{" "}
                Learners opting for data science masters in Australia will
                obtain an IBM project certificate. It validates the job-ready
                skills to help you land your dream roles.
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {DSindia ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              About Data Science Course in India In Collaboration with IBM &
              Microsoft
            </h4>
            <p>
              The digital landscape in India shows exponential growth across
              diverse sectors. The post-pandemic effect has increased the
              country’s reliance on digital-friendly creations. In addition, the
              digital economy subsequently relies on big data, which demands
              extensive use of data science. Thus, with the proven job
              opportunities, we can see an upward inclination toward data
              science courses in India.
            </p>
            <p>
              Many businesses in the country prefer data-driven insights for
              operations and decision-making. Hence, the significant job
              prospects in the data science industry have reached the zenith.
              Thus, working pros opt for upskilling at the{" "}
              <b>best institute for data science in India</b> with better job
              offers.
            </p>
            <p>
              Learnbay’s <b>data science training in India</b> grabs the
              attention of everyone eager to grow in their career. Our
              leading-edge course syllabus provides valuable support to data
              experts. Keeping up with the times, we provide exclusive data
              science education with numerous AI-enhanced tools and techniques.
            </p>
            <p>
              In the wake of tech shifts, employers must seek the best and most
              proven data skills to thrive in industry rivalry. So here, we
              introduce the real-world business model with the tactical
              solution. Our best data science course in India shows the
              practical implications of various learning tactics that can
              elevate the chance for career success.
            </p>

            <p>
              Data science is an economically growing sector for working pros at
              various career levels. A data scientist in India, on average,
              earns INR 7 lacs—25 lacs per year. It can vary depending on the
              work experience, domain, and skill set.
            </p>
            <p>
              Getting involved in a generic course can limit growth and career
              success chances. Thus, enrolling in an industry-driven program
              with job support can help you.
            </p>
            <p>
              Upskilling and enhancing your career with the best institute for
              data science in India will help you positively affect your career.
              Our positive support for your career building ends once you land
              your dream job role. Here, the industry-led job assistance program
              can support career development at every step.
            </p>
            <p>
              In addition, the data science program in India equips you with
              valuable certifications (with global recognition) from IBM &
              Microsoft. Enroll in our training program today and sharpen your
              skills to attain proven career success.
            </p>
            <p>
              So, if you are enthusiastic about pursuing a career in the data
              science field, enroll in Learnbay’s best data science courses.
              Before that, ensure the requisites –
            </p>
            <br />
            <ul>
              <li>Basic numeric skills (Mathematics/Statistics) </li>
              <li>Basic domain knowledge</li>
            </ul>
            <br />
            <p>
              <b>Note:</b> Computer science, IT, or non-technical learners can
              enroll in our course. Additionally, if you have a bachelor's
              degree in computer science, management, or other fields, our data
              science programs are here to accelerate your learning experience
              and speed up your career.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What are the potential career benefits of Learnbay’s data
              scientist institute in India?
            </h4>
            <p>
              Learnbay has made an impact on industry-specific training programs
              in India. Data science careers in India are getting more
              appealing, alluring many experts to rethink their career paths.
            </p>
            <p>
              Meanwhile, Gen-AI upskilling in data science unlocks ways to move
              toward successful career transitions. Here, the learners can gain
              an inclusive learning space to work with the latest GenAI tools
              (ChatGPT) with ethical practices.{" "}
            </p>
            <p>
              <b>Excellent career gains are –</b>
            </p>
            <br />
            <ul>
              <li>
                <b>GenAI-rich courses:</b> Learners get an in-depth and
                comprehensive understanding of data science tools and trends in
                the GenAI age.{" "}
              </li>
              <br />
              <li>
                <b>Domain-specific learning:</b> We offer domain-specific data
                science training in India to improve pre-existing skills.{" "}
              </li>
              <br />
              <li>
                <b>Experimental and practical learning:</b> Experts with our
                data science course get hands-on learning of tools via live
                projects.{" "}
              </li>
              <br />
              <li>
                <b>Global certifications:</b> We offer the best data science
                certification with global-scale job offers. Our certificates
                from IBM & MS unlock promising career paths. You will get two
                IBM certifications (project and course) and one MS
                certification.
              </li>
              <br />
              <li>
                <b>100% job assistance:</b> Learners get 100% job and placement
                support with end-to-end skills growth and interviews.{" "}
              </li>
            </ul>

            <br />
          </div>
        ) : (
          ""
        )}
        {DSkolkota ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              About Data Scientist Course in Kolkata in Alliance with IBM &
              Microsoft
            </h4>
            <p>
              Today’s rapidly growing digital space relies on effective tech
              creations that rule the business world. Recent decades have seen
              active growth in data-driven business functions and
              decision-making across Kolkata. Subsequently, a rising inclination
              toward data-friendly tools has brought data science into the
              limelight. Its insightful presence in the business and career
              world confirms a bright future.
            </p>
            <p>
              Kolkata has become a progressing home center for many tech hubs
              arising throughout the city. Several startups and MNCs emerging in
              Kolkata are interested in a data-driven operating culture with
              insightful gains. Thus, learning has become vital for working
              professionals from different fields. Following this, many experts
              prefer joining the best institute for data science in Kolkata with
              exciting career gains.
            </p>
            <p>
              Learnbay envisions a digitally driven world for busy working pros
              eager to revamp their stagnant careers in data science. Our data
              science training in Kolkata focuses on major career shifts via
              upskilling to thrive globally. Our alliance with the industry’s
              top-tier tech leaders, IBM and Microsoft, unleashes global-scale
              growth.
            </p>
            <p>
              Experts enrolling in Learnbay’s data science institute in Kolkata
              will exclusively receive in-depth training via Generative AI-rich
              course modules. Here, experts get an inclusive learning space with
              a 360-degree knowledge-building benefit. Experts can learn
              real-time uses of data science tools via capstone projects. Unlike
              others, our data science training institute in Kolkata helps you
              develop proper data literacy skills.
            </p>

            <p>
              A data scientist earns around INR 920,000 per year in Kolkata.
              Yet, the salary package depends on the career interests, skill
              sets, and work experience. Kolkata is coming up with alluring
              career roles in data science for freshers and experienced. At
              Learnbay, we focus on refining your skills to make you job-ready.
              Learning from a frequently updated syllabus supports career shifts
              with exciting gains.
            </p>
            <p>
              In addition, upskilling from the best data science training
              institute in Kolkata validates your skills with IBM & Microsoft
              credentials. These globally recognized certificates enrich career
              values with fortunate returns. Hence, if you are eager to relaunch
              your career in data science, enroll in Learnbay’s premier courses.
            </p>
            <p>Before this, you must consider the requisites –</p>

            <br />
            <ul>
              <li>Basic knowledge of applied Mathematics/Statistics </li>
              <li>Essential domain knowledge</li>
            </ul>
            <br />
            <p>
              <b>Note:</b> Graduates from tech or non-tech fields can enroll in
              our elite data science & python training institute in Kolkata to
              accelerate their success metrics.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What notable career gains will you receive with Learnbay’s data
              scientist institute in Kolkata?
            </h4>
            <p>
              Learnbay is widely known for its cutting-edge upskilling programs
              in data science throughout Kolkata. Experts eager to restore their
              careers in data science shall receive the significant benefits
              vital for attaining success.
            </p>
            <p>
              On the other hand, the sudden rise of GenAI trends paves the way
              for eye-catching returns for businesses and working experts.
              Hence, upskilling has become critical to mastering the latest
              GenAI tools (ChatGPT).
            </p>
            <p>
              <b>Some exciting career gains that Learnbay offers you are –</b>
            </p>
            <br />
            <ul>
              <li>
                <b>GenAI-rich courses:</b> You will learn and practice the
                latest and in-demand GenAI-rich tools (ChatGPT).
              </li>
              <br />
              <li>
                <b>Domain-specific learning:</b> Here, you will gain
                practice-based learning via 12+ real-time projects in your
                domain.
              </li>
              <br />
              <li>
                <b>Experimental and practical learning:</b> Experts will get an
                open learning space to refine their prior domain skills
                according to the latest trends.
              </li>
              <br />
              <li>
                <b>Global certifications:</b> A proven training platform to
                validate your skills via IBM & Microsoft certifications.
              </li>
              <br />
              <li>
                <b>100% job assistance:</b> A promising training space to
                increase your selection chances with our uninterrupted career
                support services.
              </li>
            </ul>

            <br />
          </div>
        ) : (
          ""
        )}
        {DSBhub ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Data Science Course in Bhubaneswar In Collaboration with IBM &
              Microsoft
            </h4>
            <p>
              The digital landscape in Bhubaneswar shows exponential growth
              across diverse sectors. The post-pandemic effect has increased the
              number of cities using digital-friendly creations. Furthermore,
              the digital economy subsequently relies on big data, which demands
              extensive use of data science. Therefore, given the established
              employment prospects, we observe an increasing trend in data
              science courses in Bhubaneswar.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              Career opportunities and salary insights
            </h4>
            <p>
              Many companies in the city use data to make better decisions.
              Hence, the significant job prospects in the data science industry
              have reached their peak. Thus, working professionals choose to
              upskill at the best data science institute in Bhubaneswar, which
              provides improved job prospects.
            </p>
            <p>
              Learnbay’s best data science course in Bhubaneswar appeals to
              professionals who want to advance their careers. Our commanding
              edge course syllabus provides precious support to data
              specialists. Keeping up with the times, we provide exclusive data
              science education with numerous AI-enhanced tools and methods.
            </p>
            <p>
              In the wake of tech shifts, candidates must seek the best and most
              proven data skills to thrive in competitive sectors. So here, we
              introduce the real-world business model with the tactical
              solution. Our data science course in Bhubaneswar teaches practical
              implications of various learning strategies that can enhance
              career success.
            </p>

            <p>
              Data science is an economically growing sector for professionals
              at various career levels. On average, a data scientist in
              Bhubaneswar makes between INR 4.5 lacs—15 lacs per year. However,
              salary can based on their experience, domain, and skill sets.
            </p>
            <p>
              Getting involved in a generic course can reduce professional
              development and accomplishment opportunities. Thus, participating
              in an industry-driven program with job support can benefit you.
            </p>
            <p>
              Improving your skills with the best institute for data science in
              Bhubaneswar will have a good impact on your career. Our positive
              support for your career building ends once you land your dream job
              role. Industry-led job aid initiatives can support career
              development at every level.
            </p>
            <p>
              In addition, the data science program in Bhubaneswar equips you
              with valuable certifications (with worldwide recognition) from IBM
              & Microsoft. Enroll in our training program today and sharpen your
              abilities to attain proven career success.
            </p>
            <p>
              So, if you are interested in a data science career consider
              joining Learnbay's best data science courses. Before that, ensure
              the requisites –
            </p>

            <br />
            <ul>
              <li>Basic numeric skills (Mathematics/Statistics) </li>
              <li>Basic domain knowledge</li>
            </ul>
            <br />
            <p>
              <b>Note:</b> Computer science, IT, or non-technical learners can
              enroll in our course. If you hold a bachelor’s degree in any
              field, our data science courses can help enhance your skills and
              advance your career quickly.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              Why choose our data science institute in Bhubaneswar?
            </h4>
            <p>
              Learnbay has made an impact on industry-specific training programs
              in Bhubaneswar. The increasing appeal of data science professions
              in Bhubaneswar is tempting many specialists to reconsider their
              career choices
            </p>
            <p>
              Meanwhile, Gen-AI upskilling in data science unlocks ways to move
              toward successful career transitions. Here, the learners can gain
              an inclusive learning space to work with the latest GenAI tools
              (ChatGPT) with ethical practices.
            </p>
            <p>
              <b>Excellent career gains are –</b>
            </p>
            <br />
            <ul>
              <li>
                <b>GenAI-rich courses:</b> Learners get an in-depth and
                comprehensive understanding of data science tools and trends in
                the GenAI age.
              </li>
              <br />
              <li>
                <b>Domain-specific learning:</b> We offer domain-specific data
                science training in Bhubaneswar to improve pre-existing skills.
              </li>
              <br />
              <li>
                <b>Experimental and practical learning:</b> Experts with our
                data science course get hands-on learning of tools via live
                projects.
              </li>
              <br />
              <li>
                <b>Global certifications:</b> We offer the best data science
                certification with global-scale job offers. Our certificates
                from IBM & MS unlock promising career paths. You will get two
                IBM certifications (project and course) and one MS
                certification.
              </li>
              <br />
              <li>
                <b>100% job assistance:</b> Learners get 100% job and placement
                support with end-to-end skills growth and interviews.
              </li>
            </ul>

            <br />
          </div>
        ) : (
          ""
        )}
        {DSnagpur ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              About Data Science Institute in Nagpur in Alliance with IBM &
              Microsoft
            </h4>
            <p>
              In the 21st Century, an increasing reliance on digital creations
              is noticed. Businesses prefer data-driven operations over the
              customary ones, lifting the profit margins. Data science is one of
              the technologically advancing trends lifting business yields with
              exciting gains. Meanwhile, employers of leading MNCs search for
              skilled data experts, altering the job market outlook.
            </p>

            <p>
              Data science in Nagpur has been thrilling in recent years.
              Startups and MNCs in Nagpur see an upward trend in the demand for
              data science professionals. A seamless link of data science with
              leading sectors is vital in driving alluring profits. Thus, skill
              uprises have become crucial for experts in various fields to see
              actual career shifts.
            </p>
            <p>
              Learnbay embraces the digital world with the best data science
              course in Nagpur, enriching career values for many experts. Its
              cutting-edge data science classes in Nagpur equip experts with
              proven skills according to the latest trends. Experts eager to
              redefine their careers can join us for 360-degree career progress.
            </p>
            <p>
              We foresee a digital-friendly career future for many working
              experts to thrive in today’s ever-evolving era. Upskilling via an
              industry-driven data science course in Nagpur boosts earning
              prospects with global-level gains. Our Generative AI-rich course
              modules equip learners with prime skills to face the competitive
              world. Here, experts can gain abstract and practical learning
              scope to ascertain success.
            </p>

            <p>
              Plus, our industry alliance with IBM & Microsoft releases true
              career potential for busy experts in various sectors. Regardless
              of the data science course in Nagpur fees, many experts enroll
              here for globally valued certifications. All eligible learners
              obtain course completion and project certificates from IBM &
              Microsoft with better job offers.
            </p>
            <p>
              These globally recognized credentials help experts ace job
              interviews with the leading MNCs. Attesting valuable certificates
              to your static career unlocks a global-level career path with
              exciting returns. Hence, if you are eager to modernize your career
              in data science Nagpur, enroll in our leading courses.
            </p>
            <p>Before this, you must consider the requisites –</p>

            <br />
            <ul>
              <li>Basic knowledge of applied Mathematics/Statistics </li>
              <li>Basic domain skills</li>
            </ul>
            <br />
            <p>
              <b>Note:</b> Experts with bachelor’s degrees from IT/non-IT fields
              can join our comprehensively designed data science classes in
              Nagpur to cherish vital gains.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What prime career gains will you receive via Learnbay’s data
              science institute in Nagpur?
            </h4>
            <p>
              Learnbay is popularly known for its industry-specific training
              courses, inclusively curated for backing working experts from
              various fields. Its live instructor-led training sessions guide
              learners to master the front-age tools to stay competitive.
            </p>
            <p>
              Meanwhile, the advent of GenAI-rich functions triggers the need
              for upskilling with the latest tools and trends. Hence, upskilling
              from the best data science course in Nagpur with vital career
              gains has become a need of the hour.
            </p>
            <p>
              <b>Some proven career benefits are –</b>
            </p>
            <br />
            <ul>
              <li>
                <b>GenAI-relevant course module:</b> You will gain practical
                knowledge of the latest GenAI-rich tools (ChatGPT) enriching
                your skill sets.
              </li>
              <br />
              <li>
                <b> Practice-based learning:</b> Here, you will gain hands-on
                learning of tools and trends via 12+ real-time projects in your
                domain.
              </li>
              <br />
              <li>
                <b>Domain-specific upskilling:</b> Experts will get an open
                learning scope to master leading tools and boost their prior
                domain skills.
              </li>
              <br />
              <li>
                <b>Global certifications:</b>A proven learning space to validate
                learned skills via IBM & Microsoft credentials.
              </li>
              <br />
              <li>
                <b>100% Job and placement support services:</b> A proven
                training institute to increase your job selection rates with our
                hassle-free career support services (Career Service PRO).
              </li>
            </ul>

            <br />
          </div>
        ) : (
          ""
        )}

        {DSComibotre ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              About Data Science Training in Coimbatore in Alliance with IBM &
              Microsoft
            </h4>
            <p>
              Certainly, the fast-paced evolution of data science across the
              business sectors in Coimbatore changes the career outlook for many
              working pros. A hassle-free integration of data science with
              various functions also changes the career outlook in Coimbatore.
              Thus, the demand for upskilling via a data science course has
              increased over the years.
            </p>

            <p>
              Data scientists are highly in demand for their insightful support
              of business tasks and decision-making. Data science is versatile
              and can be applied in diverse fields. The leading MNCs prefer
              data-driven methods for various tasks, such as marketing, HR,
              production, content writing, research and development, and more.
            </p>
            <p>
              Firms prefer talented data experts who can deal with complex data
              sets and extract the facts to make informed decisions. Thus, the
              demand for career-driven data science training in Coimbatore is
              growing.
            </p>
            <p>
              Learnbay envisions a bright, data-driven career future for busy
              working experts willing to switch their jobs. Owing to the rapidly
              changing digital space, Learnbay pledges to make the career shift
              journey hassle-free with proven gains. Here, we welcome a large
              base of experts eager to relaunch their slow-paced careers. Hence,
              regardless of data science course fees in Coimbatore, many experts
              enroll here.
            </p>

            <p>
              Our inclusively curated data science course Coimbatore supports
              end-to-end career change – from mentorship to job support
              services. Our career counseling experts and mentors often follow
              the latest data science trends to revise the course modules. Here,
              learners will learn every detail about the current data science
              tools and trends via our Generative AI-rich modules to stay ahead
              of the race.
            </p>
            <p>
              Unlike a typical data science or big data course in Coimbatore, we
              precisely focus on a 360-degree career-building method. Learnbay
              embraces the rapidly rising tech world and backs working experts
              to attain proven success. We help you get hands-on learning and
              practice with prime tools to level up tasks efficacious.
            </p>
            <p>
              Learners enrolling in our data scientist course in Coimbatore will
              work on capstone projects in their chosen domain to learn how to
              use tools in real-time and devise better ways. Our practical
              sessions equip you with 12+ live projects, and learners must
              choose one according to their domain, career goals, and interests.{" "}
            </p>

            <p>
              Nevertheless, data science in Coimbatore is presenting an upward
              trend alluring many experts to revamp their careers and make
              smooth progress. Joining our proven upskilling programs equips you
              with proven skills to accelerate your career. Learning in-demand
              data-driven tools helps experts choose the right one and improve
              results.{" "}
            </p>

            <p>
              Plus, our artificial intelligence and data science course in
              Coimbatore carries globally accredited certificates from industry
              leaders. Our alliance with IBM and Microsoft lifts the career
              graph and equips it with global-scale growth offers. Once learners
              finish their course, they will receive two certificates from IBM
              and Microsoft. Similarly, successful project completion will
              attest an IBM project certificate to your career with alluring
              gains.{" "}
            </p>
            <p>
              Yet, before joining our front-age courses, you must check if you
              are eligible –
            </p>

            <br />
            <ul>
              <li>Basic knowledge of applied Mathematics/Statistics </li>
              <li>Basic domain skills</li>
            </ul>
            <br />
            <p>
              <b>Note:</b> Experts with bachelor’s degrees in IT/non-IT fields
              can join our data science training in Coimbatore to enrich career
              values and achieve optimal gains.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What proven career-driven gains can you develop with Learnbay’s
              best data science courses in Coimbatore?
            </h4>
            <p>
              Learnbay offers industry-specific training on the latest data
              science tools and trends that limitlessly escalate success
              metrics. Joining our upskilling programs with GenAI-rich modules
              improves career values with better gains.
            </p>
            <p>
              The rise of GenAI tools and trends lifts business values with
              data-driven decisions and strategic moves. Hence, firms prefer
              hiring skillful data experts to face industry ordeals and devise
              better ways to address them.
            </p>
            <p>
              <b>Some exciting career-driven gains are –</b>
            </p>
            <br />
            <ul>
              <li>
                <b>Gen AI-enrich syllabus:</b> An instructor-led setup for
                learning data science with Gen AI-rich tools (ChatGPT).
              </li>
              <br />
              <li>
                <b>Practice-based learning:</b> Here, experts will get the scope
                for hands-on learning via 12+ data science projects.
              </li>
              <br />
              <li>
                <b>Domain-specific upskilling:</b>Learners can join us to make a
                career in data science in their domain.
              </li>
              <br />
              <li>
                <b>Globally-valued certifications:</b> An upskilling gateway to
                enriching career values in the field of data science via IBM &
                Microsoft certificates. s
              </li>
              <br />
              <li>
                <b>Career Service PRO</b> Our data science training in
                Coimbatore offers hassle-free job and placement support,
                revamping generic careers.
              </li>
            </ul>

            <br />
          </div>
        ) : (
          ""
        )}

        {DSJaipur ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              About Data Science Course in Jaipur In Alliance with IBM &
              Microsoft
            </h4>
            <p>
              Learnbay offers cutting-edge a data science course in Jaipur
              tailored for advancing the career of experienced working experts,
              in alliance with Microsoft and IBM.
            </p>

            <p>
              For India, the digital sphere demonstrates limitless growth in
              various areas. In a nutshell, it has had a pandemic impact on the
              country that has helped to evolve digital-friendly creations.
              Also, the digital economy relies on big data, which directs the
              endless use of data science. As the data science job field
              thrives, we can see that the data science training in Jaipur is
              also trending and preferred by top employers.
            </p>
            <p>
              Numerous MNCs in the nation favor utilizing data-driven insights
              for their operations and decision-making. The job prospects in the
              data science field have reached their peak. Thus, pros choose to
              improve their skills at the top data science institute in Jaipur
              to secure improved career prospects.
            </p>
            <p>
              Learnbay’s data science training in Jaipur captivates individuals
              seeking job promotion. The advanced course outline offers crucial
              career support from data specialists. We provide cutting-edge data
              science education using various AI-powered tools and methods.
            </p>

            <p>
              Technological advances mean employers must pursue candidates with
              exceptional and established data skills to remain competitive in
              their field. Thus, this section presents the tactical solution
              alongside the real-world business model. Our top-rated data
              science course in Jaipur depicts the pragmatic effects of diverse
              learning strategies that can increase the likelihood of
              professional achievement.
            </p>
            <p>
              Data science is an economically growing sector for working pros at
              various career levels. A data scientist in India, on average,
              earns INR 7 lacs—25 lacs per year. It can vary depending on the
              work experience, domain, and skill set.
            </p>
            <p>
              Participating in a generic course may restrict growth and
              professional victory options. Hence, enrolling in an
              industry-focused program that offers job support can be
              beneficial.
            </p>
            <p>
              <b>Career benefits:</b>
            </p>

            <p>
              Boost your career trajectory via Learnbay’s best data science
              course in Jaipur. We provide not only the standard course followed
              by career support but also ensure offering support till you get
              your desired job. An industry-driven job assist program can aid in
              career advances at all stages.
            </p>
            <p>
              <b>Certification and Recognition: </b>
            </p>
            <p>
              The data science syllabus in Jaipur provides prestigious, globally
              recognized certifications from IBM and Microsoft. Register for our
              training program now to enhance your abilities and achieve
              established career progress.
            </p>
            <p>
              So, if you are enthusiastic about pursuing a career in the data
              science field, enroll in Learnbay’s best data science courses.
              Before that, ensure the requisites –
            </p>

            <br />
            <ul>
              <li>Basic knowledge of applied Mathematics/Statistics </li>
              <li>Basic domain skills</li>
            </ul>
            <br />
            <p>
              <b>Note:</b> Computer science, IT, or non-technical learners can
              enroll in our course. Additionally, if you have a bachelor's
              degree in computer science, management, or other fields, our data
              science programs are here to accelerate your learning experience
              and speed up your career.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What job advantages will you gain from attending Learnbay’s data
              science institute in Jaipur?
            </h4>

            <p>
              Learnbay has greatly influenced industry-specific training
              programs in Jaipur. Data science careers in Jaipur are becoming
              increasingly attractive, enticing numerous pros to review their
              career trajectories.
            </p>
            <p>
              Meanwhile, Gen-AI upskilling in data science unlocks ways to move
              toward successful career shifts. Here, the learners can gain an
              inclusive learning space to work with the latest GenAI tools
              (ChatGPT) with ethical practices.{" "}
            </p>

            <p>
              <b>Why choose Learbay for data science courses in Jaipur?</b>
            </p>
            <br />
            <ul>
              <li>
                <b>GenAI-rich courses:</b> Learners get an in-depth and
                comprehensive knowledge of data science tools and trends in the
                GenAI age.
              </li>
              <br />
              <li>
                <b>Domain-specific learning</b> We offer domain-specific data
                science training to improve pre-existing skills in Jaipur.
              </li>
              <br />
              <li>
                <b>Experimental and practical learning:</b> Experts with our
                data science course get hands-on learning of tools via live
                projects.
              </li>
              <br />
              <li>
                <b>Global certifications:</b>We offer the best data science
                certification with global-scale job offers. Our certificates
                from IBM & MS unlock promising career paths. You will get two
                IBM certifications (project and course) and one MS
                certification.
              </li>
              <br />
              <li>
                <b>100% job assistance:</b> Learners get 100% job and placement
                support with end-to-end skills growth and interviews.
              </li>
            </ul>

            <br />
          </div>
        ) : (
          ""
        )}
        {DSPatna ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              About Data Science Course in Patna In Alliance with IBM &
              Microsoft
            </h4>
            <p>
              Learnbay, in collaboration with Microsoft and IBM, offers a
              leading-edge Data Science Course in Patna designed to enhance the
              careers of experienced working professionals.
            </p>

            <p>
              For India, the digital sphere represents limitless growth in
              various areas. In short, it has had a pandemic impact on the
              country, contributing to the development of digital-friendly
              creations. Also, the digital economy depends on big data, which
              drives the limitless application of data science. As the data
              science job market grows, we can see that data science training in
              Patna is becoming popular and preferred by top employers.
            </p>
            <p>
              80% of the MNCs in the country now prefer relying on data-driven
              insights only for their operations and decision-making. Job
              possibilities within the data science field have reached their
              highest point. As a result, professionals choose to improve their
              skills at the best data science institute in Patna to get better
              career opportunities.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              Why Choose Learnbay’s Data Science Training in Patna?{" "}
            </h4>
            <p>
              Learnbay’s data science training in Patna fascinates people
              looking for a promotion. The advanced course outline provides
              valuable career support from data specialists. We offer
              cutting-edge data science education using various AI-powered tools
              and techniques.
            </p>

            <p>
              Technological advancements mean employers must pursue candidates
              with exceptional and established data skills to remain competitive
              in the field. Thus, this section presents the tactical solution
              alongside the real-world business model. Our top-rated data
              science course in Patna depicts the pragmatic effects of diverse
              learning strategies that can increase the likelihood of
              professional success.
            </p>
            <p>
              Data science is a quickly developing field that provides prospects
              for working professionals at various career stages. On average, a
              data scientist in India earns between INR 7 Lakhs and 25 Lakhs per
              year, depending on work experience, field, and skillset.
            </p>
            <p>
              Participating in a generic course may limit your growth and
              professional success options. As a result, enrolling in an
              industry-focused program that provides job support can be
              beneficial.
            </p>
            <p>
              <b>Career benefits:</b>
            </p>

            <p>
              Improve your career trajectory via Learnbay’s best data science
              course in Patna. We provide not only the standard course followed
              by career support but also ensure that you receive support until
              you find your ideal job. An industry-driven job assistance program
              can help with career advancement at any stage.
            </p>
            <p>
              <b>Certification and Recognition: </b>
            </p>
            <p>
              The data science syllabus in Patna includes highly esteemed,
              globally recognized certifications from IBM and Microsoft. Sign up
              for our training program right now to improve your abilities and
              boosts your career.
            </p>
            <p>
              If you want to build a profession in data science, sign-up for
              Learnbay’s best data science course. Before that, ensure the
              requirements –
            </p>

            <br />
            <ul>
              <li>Basic knowledge of applied Mathematics/Statistics </li>
              <li>Basic domain skills</li>
            </ul>
            <br />
            <p>
              <b>Note:</b> Computer science, IT, or non-technical learners can
              enrol in our course. Our data science programs are designed to
              expedite the learning process and advance your career if you hold
              a undergraduate degree in computer science (CS), management, or
              related fields
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What job benefits can you expect from signing up for Learnbay’s
              data science institute in Patna?
            </h4>

            <p>
              Learnbay significantly impacted Patna’s industry-specific training
              programs. Data science careers in Patna are becoming more
              appealing, prompting many professionals to reconsider their career
              paths.
            </p>
            <p>
              Meanwhile, Gen-AI is advancing in data science and preparing
              people for successful careers transformations. Learners can access
              an inclusive learning environment where they can use the most
              recent GenAI tools (ChatGPT) while adhering to ethical practices.
            </p>

            <p>
              <b>
                What makes Learnbay stand out for data science courses in Patna?
              </b>
            </p>
            <br />
            <ul>
              <li>
                <b>GenAI-rich courses:</b> Learners get an in-depth and
                comprehensive knowledge of data science tools and trends in the
                GenAI age.
              </li>
              <br />
              <li>
                <b>Domain-specific learning</b> We offer domain-specific data
                science training to improve pre-existing skills in Patna.
              </li>
              <br />
              <li>
                <b>Experimental and practical learning:</b> Experts with our
                data science course get hands-on knowledge of tools via live
                projects.
              </li>
              <br />
              <li>
                {" "}
                <b>Global certifications:</b> We offer the best data science
                certification with global-scale job offers. Our certificates
                from IBM & MS unlock promising career paths. You will get two
                IBM certifications (project and course) and one MS
                certification.
              </li>
              <br />
              <li>
                <b>100% job assistance:</b> Learners get 100% job and placement
                support with end-to-end skills growth and interviews.
              </li>
            </ul>

            <br />
          </div>
        ) : (
          ""
        )}

        {DSMarth ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Data Science Course in Marathahalli In Alliance with IBM &
              Microsoft
            </h4>
            <p>
              The digital landscape in Marathahalli is expanding quickly in
              various sectors. The epidemic in Marathahalli has sped up digital
              advances. Also, the digital space relies on data sets, which
              demands a broad use of data science. Thus, given the current job
              situation, we observe an increasing tendency in data science
              courses in Marathahalli.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              Career growth options and salary insights
            </h4>
            <p>
              In Marathahalli, many startups and MNCs utilize data to help
              experts make better choices. Thereon, the data science industry's
              main hiring prospects have reached their heights. While the top
              data science institute in Marathahalli provides higher job offers,
              working trained experts opt to upskill there.
            </p>
            <p>
              Individuals seeking to advance in their careers are attracted to
              Learnbay's excellent data science course in Marathahalli. Data
              experts can benefit majorly from our innovative program material.
              To remain up-to-date, we provide in-depth training in data science
              with abundant AI-rich tools and trends.{" "}
            </p>
            <p>
              Our most advanced course syllabus provides invaluable aid for data
              experts. We remain updated by providing tried-and-true data
              science training through AI-powered tools and techniques.
            </p>

            <p>
              In the wake of tech shifts, learners seek the most proven data
              skills to thrive in the trending sectors. So here, we offer a
              practical training model with proven results. Our Best data
              science training in Marathahalli exhibits the real-time use of
              various learning tools, enriching professional growth.
            </p>

            <p>
              Data science has a lot of scope for job advances because of its
              quick growth and expansion. In Marathahalli, there is an expected
              annual job growth of 31% till 2030 in data science jobs. Studies
              say that the annual growth rate of data science jobs will reach
              31% by 2030.
            </p>
            <p>
              Data science is an economically growing career path in a data
              science training institute in Marthahalli with 100% placement. On
              average, a data scientist in Bengaluru earns between INR 9 lacs to
              23 lacs per year. However, salary depends on your work experience
              and skill sets.
            </p>
            <p>
              Choosing an educational institution with an industry focus and job
              support will help you improve your career.
            </p>
            <p>
              Improving your skills with the top institute for data science
              training in Marathahalli will enhance your career growth metrics.
              Our positive support for your career building ends once you land
              your ideal job role. Industry-led job aid initiatives can support
              career growth at every step.
            </p>

            <p>
              Plus, the Data Science Institute in Marathahalli provides you with
              proven certifications from Microsoft and IBM that are recognized
              worldwide. Enroll in our training program to sharpen your skills
              and acquire an exciting career.
            </p>
            <p>
              Thus, glance at the best data science training in Marathahalli
              Learnbay if you're eager to revamp your career in this sector.
              Before that, ensure the requisites –
            </p>
            <br />
            <ul>
              <li>Basic numeric skills (Mathematics/Statistics) </li>
              <li>Basic domain knowledge</li>
            </ul>
            <p>
              <b>Note:</b> IT, computer science, and non-tech learners can join
              our course. Our data science programs can help you advance your
              career and learn quickly even though you hold a bachelor's degree
              in other fields.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What makes our data science institute in Marathahalli the right
              choice?
            </h4>

            <br />
            <p>
              Learnbay encourages Marathahalli's industry-specific training
              motives. The increasing appeal of data science careers in
              Marathahalli tempts many experts to rethink their career choices.
            </p>
            <p>
              Gen-AI offers data science courses in Marathahalli that have a
              chance to change careers. Learners use advanced Gen AI tools
              (ChatGPT) in an ethically responsible learning space.
            </p>

            <i>
              <b>
                <p>Elite career gains are –</p>
              </b>
            </i>

            <br />
            <ul>
              <li>
                <b>Gen AI-rich courses:</b> Learners get an in-depth knowledge
                of data science tools and trends in the Gen AI age.
              </li>
              <br />
              <li>
                <b>Domain-specific learning:</b> We offer domain-specific data
                science training in Marathahalli to improve pre-existing skills.
              </li>
              <br />
              <li>
                <b>Hands-on learning:</b> Experts with our data science course
                get live learning of tools via real-time projects.
              </li>
              <br />
              <li>
                <b>Industry collaborations:</b> We offer the best data science
                certification with global-scale job offers. Our certificates
                from IBM & MS unlock promising career paths. You will get two
                IBM certifications (project and course) and one MS
                certification.
              </li>
              <br />
              <li>
                <b>100% career support services:</b> Learners get 100% job and
                placement support with end-to-end skills growth and interviews.
              </li>
            </ul>

            <br />
          </div>
        ) : (
          ""
        )}

        {DSNoida ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              About the Data Scientist Course in Noida in Alliance with IBM &
              Microsoft
            </h4>
            <p>
              Data science, a thriving tech creation, changes Noida’s business
              landscapes and the job market. A fast-paced rise of data science
              trends welcomes data-driven functions, lifting business decisions
              with better accuracy. Meanwhile, working experts rethink their
              career paths in data science. Thus, learning via a data science
              course in Noida becomes a prime way to grow and succeed.
            </p>
            <p>
              Noida is well-known for its emerging tech hubs in India, reshaping
              various sectors and making a progressing future for many
              aspirants. The recent years have marked significant changes in
              data science, unlocking a growing future for many experts. Hence,
              experts join an industry-driven data science institute in Noida to
              learn.{" "}
            </p>

            <p>
              Many leading MNCs are coming forward to hire skillful data experts
              in various roles to optimize their yields in today’s tech
              dominance. Learnbay foresees a bright career path with alluring
              job offers for experts from diversified fields. Here, we make a
              historic advancement toward career upskilling via our best data
              science course in Noida. As data science blends well with various
              functions, the demand for our training programs increases.
            </p>

            <p>
              Unlike a data science offline course in Noida, our training
              programs equip you with proven skills to thrive. Experts must know
              the latest tools to deal with data complexities and develop
              clarity over the changing tech space. We offer in-depth training
              on data science tools and trends that are useful to today’s
              tech-driven MNCs & startups. Our Generative AI-rich course
              syllabus guides experts in gaining 360-degree knowledge.{" "}
            </p>

            <p>
              Our data science coaching in Noida paves the way for hassle-free
              career upskilling in promising roles. Here, you will get training
              from industry experts as mentors to learn about real-world
              business issues and ways to tackle them. Our leading data
              scientist course in Noida equips you with proven skills to ace
              prime job roles with leading MNCs.{" "}
            </p>

            <p>
              We aim to help you surpass complex tech creations and attain
              global-scale success. Hence, we offer the best data science
              training in Noida with domain-rich projects. With us, experts will
              gain adequate scope to learn real-time uses of data science tools
              and devise the best way to solve an issue. Also, having
              domain-specific learning via projects enriches your skills to face
              ever-changing business dynamics.{" "}
            </p>
            <p>
              Generic upskilling with no validation from industry leaders can
              demean career values to a greater extent. Hence, join us to
              enhance your career values with global-scale recognition from the
              leading MNCs. Our data science certification in Noida, in alliance
              with IBM & Microsoft, expands your growth chances and adds more
              value to your career. Here, experts will obtain course and project
              certificates from IBM & MS, paving the way for exciting job
              offers.{" "}
            </p>
            <b>
              {" "}
              <p>
                Yet, before joining our front-age courses, you must check if you
                are eligible –
              </p>
            </b>

            <br />
            <ul>
              <li>
                Good academic record with basic mathematics/statistics knowledge
              </li>
              <li>Basic domain skills</li>
            </ul>
            <br />
            <p>
              <b>Note:</b> Experts with bachelor’s degrees in IT/non-IT fields
              can join our data science training institute in Noida to enrich
              career values and achieve optimal gains.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What career-specific gains can you receive with Learnbay’s data
              science training in Noida?
            </h4>

            <br />
            <p>
              Learnbay is widely famous for its front-age data science classes
              in Noida that arm you with reliable skills. Experts eager to
              revamp their careers can join us and develop Gen AI-rich skills to
              deal with growing data complexities.
            </p>
            <p>
              Learning with us helps you lift your career values to sustain
              yourself in today’s data-driven age. Experts willing to revitalize
              their stagnant careers can join our data science institute in
              Noida. Unlike other training centers, our cutting-edge courses
              offer you vital gains like –
            </p>
            <br />
            <ul>
              <li>
                <b>Gen AI-driven modules:</b> A live training space for learning
                data science with Gen AI-rich tools.
              </li>
              <br />
              <li>
                <b>Real-time learning:</b>Here, we offer hands-on learning scope
                via 12+ data science projects.
              </li>
              <br />
              <li>
                <b>Domain-specific skill upgrades:</b> Learners can enroll in
                our data science course in Noida to refine prior domain skills.
              </li>

              <br />
              <li>
                <b>Globally-valued certifications:</b> An open learning space to
                modernize career values in data science via IBM & Microsoft
                certificates.
              </li>

              <br />
              <li>
                <b>Career Service PRO:</b> Our data science training in Noida
                offers hassle-free career support services that help you land
                dream jobs.
              </li>
            </ul>

            <br />
          </div>
        ) : (
          ""
        )}
        {DSIndore ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              Data Science Course in Indore In Partnership with IBM & Microsoft
            </h4>
            <p>
              The digital landscape in Indore is rapidly growing in several
              sectors. The epidemic in Indore has sped up digital creations.
              Also, the digital economy relies on data sets, which demands vast
              use of data science. Thus, given the current employment situation,
              we see a rising trend in data science courses in Indore.
            </p>
            <h4 style={{ fontSize: "20px" }}>
              Career opportunities and salary insights
            </h4>
            <p>
              Many startups and MNCs in Indore leverage data to make smarter
              moves. Hence, the major job prospects in the data science industry
              have peaked. Thus, working experts choose to upskill at the best
              data science institute in Indore, which offers better job offers.{" "}
            </p>

            <p>
              Learnbay’s best data science course in Indore captures the
              attention of experts eager to advance their careers. Our
              cutting-edge course syllabus offers precious support to data
              specialists. Keeping up with the times, we provide exclusive data
              science education with various AI-rich tools and methods.
            </p>

            <p>
              In the wake of tech shifts, learners seek the most proven data
              skills to thrive in competing sectors. So here, we are introducing
              the realistic training model with the proven results. Our best
              data science course in Indore exhibits the real-time use of
              various learning tools, enriching career success.{" "}
            </p>

            <p>
              Due to its rapid growth and expansion, data science offers
              abundant career rise offers. In JULY 2021, there was a notable
              rise in data science jobs in Indore, Growing at 35% to 40%
              compared to JULY 2022.{" "}
            </p>

            <p>
              Data science is an economically growing career path in Indore with
              100% placement. It is an auspicious career with excellent growth
              offers and alluring salaries, fueled by the rise of data-driven
              creation.{" "}
            </p>
            <p>
              Opting for an industry-focused program that offers job support can
              improve your career growth and prospects.{" "}
            </p>
            <p>
              Improving your skills with the top institute for data science
              coaching in Indore will enhance your career growth metrics. Our
              positive support for your career building ends once you land your
              ideal job role. Industry-led job aid initiatives can support
              career growth at every step.{" "}
            </p>
            <p>
              In addition, the data science classes in Indore equip you with
              valuable certifications (with global recognition) from IBM &
              Microsoft. Enroll in our training program today and sharpen your
              skills and abilities to attain proven career success.{" "}
            </p>

            <b>
              {" "}
              <p>
                So, if you are interested in a data science career, consider
                joining Learnbay's best data science courses. Before that,
                ensure the requisites –
              </p>
            </b>

            <br />
            <ul>
              <li>Basic numeric skills (Mathematics/Statistics) </li>
              <li>Basic domain skills</li>
            </ul>
            <br />
            <p>
              <b>Note:</b> Computer science, IT, or non-technical learners can
              join our course. If you have a bachelor's degree in any other
              field, our data science programs can guide you in learning quickly
              and boost your career
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What are the reasons to choose our data science institute in
              Indore?
            </h4>

            <br />
            <p>
              The ed-tech startup Learnbay has greatly impacted
              industry-specific training programs in Indore. Indore’s growing
              interest in data science careers attracts many experts to rethink
              their job choices.
            </p>
            <p>
              Gen-AI offers data science courses in Indore, providing career
              change scopes. Learners work with advanced Gen AI tools (ChatGPT)
              in an open-learning space while upholding ethics.
            </p>
            <i>
              <b>Elite career gains are –</b>
            </i>
            <br />
            <ul>
              <li>
                <b>Gen AI-rich courses: </b>Learners get an in-depth
                understanding of data science tools and trends in the Gen AI
                age.
              </li>
              <br />
              <li>
                <b>Domain-specific learning:</b> We offer domain-specific data
                science training in Indore to improve pre-existing skills.
              </li>
              <br />
              <li>
                <b>Experimental and practical learning:</b> Experts with our
                data science course get hands-on learning of tools via live
                projects.
              </li>

              <br />
              <li>
                <b>Industry collaborations:</b> We offer the best data science
                certification with global-scale job offers. Our certificates
                from IBM & MS unlock promising career paths. You will get two
                IBM certifications (project and course) and one MS
                certification.
              </li>

              <br />
              <li>
                <b>100% job assistance:</b> Learners get 100% job and placement
                support with end-to-end skills growth and interviews.
              </li>
            </ul>

            <br />
          </div>
        ) : (
          ""
        )}
        {DSKochi ? (
          <div className={styles.CitiesRightInner}>
            <h4 style={{ fontSize: "20px" }}>
              About Learnbay’s Data Science Institute in Kochi [In Alliance with
              IBM & Microsoft]
            </h4>
            <p>
              The digital world of today embraces data science for its
              insightful presence in numerous industries. Looking toward data
              science and AI dominance, working professionals rethink their
              career paths. In recent years, there has been a fast-paced rise in
              the demand for data experts with irrefutable tech skills. Hence,
              upskilling from the best data science institute in Kochi is useful
              for inspiring career shifts.
            </p>

            <p>
              Unlike typical ones, Learnbay sets the stage for global-scale
              career building with its series of data science programs. Our data
              science course in Kochi paves the way for abstract and practical
              learning of the latest Gen AI-rich tools. We aim to help data
              aspirants with end-to-end career growth solutions.{" "}
            </p>

            <p>
              Our renowned mentors guide experts in learning the practical use
              of data-driven tools via 12+ real-time projects in your chosen
              domain. Unlike other data science courses, we equip you with
              proven data-driven skills to thrive in the digital age. Experts
              can gain insights into real-world business issues and solve them
              with factual moves.
            </p>

            <p>
              Our alliance with the industry’s top tech leaders, IBM &
              Microsoft, validates your skill sets and helps you crack dream
              roles. Successful completion of coursework and projects will offer
              you certificates from IBM & Microsoft. Plus, experts will obtain
              one IBM project certification, unleashing a global-scale career
              path.{" "}
            </p>

            <b>
              {" "}
              <p>
                Yet, before joining our front-age courses, you must check if you
                are eligible –
              </p>
            </b>

            <br />
            <ul>
              <li>Basic numeric skills (Mathematics/Statistics) </li>
              <li>Basic domain skills</li>
            </ul>
            <br />
            <p>
              <b>Note:</b> Experts with bachelor’s degrees in IT/non-IT fields
              can join our data science training institute in Noida to enrich
              career values and achieve optimal gains.
            </p>
            <br />
            <h4 style={{ fontSize: "20px" }}>
              What proven career benefits can you get with Learnbay’s data
              science course in Kochi?
            </h4>

            <br />
            <p>
              Learnbay is famous for its industry-focused upskilling courses
              that help experts revamp their static careers with proven skills.
              Experts joining us will get Gen AI-rich upskilling to simplify
              data intricacies and develop better solutions.
            </p>

            <i>
              <b>Some notable career gains are –</b>
            </i>
            <br />
            <ul>
              <li>
                <b>Gen AI-rich course modules: </b>A live training space to
                learn data science with Gen AI-rich tools.
              </li>
              <br />
              <li>
                <b>Domain-specific learning:</b> We offer domain-specific data
                science training in Indore to improve pre-existing skills.
              </li>
              <br />
              <li>
                <b>Real-time learning:</b> Here, we offer hands-on learning
                scope via 12+ data science capstone projects.
              </li>

              <br />
              <li>
                <b>Domain-specific skill upgrades:</b> Learners can enrol in our
                data science training in Kochi to refine prior domain skills.
              </li>

              <br />
              <li>
                <b>Globally-valued certifications:</b> An open upskilling space
                to modernize career values in data science via IBM & Microsoft
                certificates.
              </li>
              <li>
                <b>Career Service PRO:</b>Our data science institute in Kochi
                offers career support services that help you land dream jobs.
              </li>
            </ul>

            <br />
          </div>
        ) : (
          ""
        )}

        {DSABangalore ? (
          <div className={styles.CitiesRightInner}>
            <p>
              Data has become fuel of modern businesses driving exciting gains.
              Hence, mastering cutting-edge data-driven tools, trends, and
              practices have become vital for experts. In the interim,
              understanding data structures and related algorithms has become
              crucial for experts to build a lucrative career. Hence, joining
              data structure training in Bangalore has become the ultimate way
              to enrich career worth and attain success.
            </p>
            <p>
              Propel competitive success as a DSA expert to thrive across the
              Silicon Valley of India, Bangalore. Join Learnbay’s data
              structures and algorithms training in Bangalore to ace
              product-based interviews. Our structurally designed DSA syllabus
              boosts your tech expertise to have a hassle-free career switch.
              Our syllabus consists of basic and advanced concepts following the
              recent trends in DSA. plus, 1:1 doubt-clearing support from
              mentors shall help you clarify your queries and grasp proven
              knowledge.
            </p>
            <p>
              Learnbay’s cutting-edge DSA course in Bangalore equips you with
              abilities to tackle data intricacies and optimize algorithmic
              thinking and decision-making. Our dedicated 1:1 training sessions
              and project-based learning revamp your career background. Also,
              joining our reliable placement programs can help you crack
              critical interviews.
            </p>
            <p>
              Once you complete the data structures and algorithms course in
              Bangalore, you can kick-start your tech career with competitive
              abilities. Join our industry-paced coding classes to enrich your
              software development expertise.
            </p>
            <h3 style={{ fontSize: "18px" }}>
              Industry-paced Coding Sessions for Tech/non-tech Experts
            </h3>
            <p>
              Bangalore’s tech sector is evolving inspiring working experts
              revamp their skill sets and stay ahead of the career race. In the
              interim, DSA has become a popular skill lifting static careers
              toward global-level growth. Renowned experts from rising tech hubs
              offer data structures and algorithms classes in Bangalore. Tech
              and non-tech experts can fortify their career growth options via
              cutting-edge coding sessions and learn everything from scratch. We
              offer 1:1 doubt-clearing sessions to help learners clarify their
              queries and refine tech skills.
            </p>
            <h3 style={{ fontSize: "18px" }}>
              Industry-relevant Career Counselling
            </h3>{" "}
            <p>
              Today’s job market outlook aims at ever-changing career paths in
              diverse sectors in Bangalore. It inspire working pros upgrade
              their skills as per the latest trends. Hence, joining Learnbay’s
              industry-focused counseling sessions will be worth investing in.
              Our dedicated counselors guide you throughout the upskilling
              process. Career counselors analyze your academic records and
              skills to suggest a proper upskilling method. Also, they help you
              choose the right domain best suited for tech career growth and
              stability.
            </p>
            <h3 style={{ fontSize: "18px" }}>
              Why does Learnbay seem to be the{" "}
              <b>
                best institute for data structures and algorithms in Bangalore?
              </b>
            </h3>
            <p>
              Today’s ever-evolving tech space inspires experts to shed career
              stagnancies and redefine themselves with proven skills. Hence,
              learning has become vital for experts willing to kick-start a
              career in DSA. Joining a DSA course in Bangalore with
              industry-paced learning modules can drive exciting growth.
            </p>
            <p>
              Learnbay anticipates a tech-savvy career for experts willing to
              modernize their skills. Its leading-edge DSA course in Bangalore
              crafts a hassle-free learning path for busy working professionals.
              Its hybrid training model guides experts to master abstract and
              practical programming languages, DSA concepts, and practices.
            </p>
            <p>
              Experts from diverse fields join the best data structures &
              algorithms training institute in Bangalore for hassle-free career
              shifts. Yet, experts fail to modernize their static careers due to
              a lack of time and overburdening job tasks. Hence, Learnbay’s
              flexibly designed learning schedules set the stage for smooth
              upskilling. Here, experts can upgrade their skills without
              hampering job duties.{" "}
            </p>
            <p>
              Industry-driven mentorship from eminent tech experts offers
              end-to-end upskilling support with 1:1 doubt-clearing sessions.
              Interactive training sessions from industry experts sharpen your
              knowledge and equip you with promising abilities. Learners work on
              real-time projects in Bangalore’s project innovation lab (offline)
              and solidify their skills.
            </p>
            <p>
              Our DSA courses in Bangalore set the stage for end-to-end career
              support – from mock interviews to resume buildup. Also, our IBM &
              Microsoft certifications validate your skills and help you justify
              your tech career with top MNCs.
            </p>
            <p>
              Hence, experts willing to modernize their tech careers must join
              our best data structures & algorithms training institute in
              Bangalore. Enroll today to escalate your career success globally.
            </p>
            <p>
              Learnbay’s{" "}
              <b>Data Structures and Algorithms Course in Bangalore</b> offers –
            </p>
            <ul>
              <li>
                Industry-specific DSA training to familiarize you with core
                concepts and practices{" "}
              </li>
              <li>Live interactive mentorship from eminent tech experts </li>
              <li>
                Offline 16+ real-time project handling at Bangalore’s innovation
                labs{" "}
              </li>
              <li>Experiential learning with 300+ coding exercises </li>
              <li>
                3 years of flexible career support services (mock interviews &
                resume writing){" "}
              </li>
              <li>Globally acknowledged IBM & Microsoft certifications </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {CyberSecurityBangalore ? (
          <div className={styles.CitiesRightInner}>
            <p>
              Advance a digitally liable career with Learnbay’s Cyber Security
              Course in Bangalore with placement support. Join the course today
              to protect data systems and valuable assets from external threats.
              Our inclusive syllabus helps you master cybersecurity basics and
              evolving concepts.
            </p>
            <p>
              Learnbay’s front-age cyber security certification course in
              Bangalore equips you with the powers to detect threats, enrich
              network safety, and build encrypted systems. Our industry-paced
              training sessions by eminent experts accelerate your wisdom about
              data security and defense shields.
            </p>
            <p>
              Learnbay believes in future-proofing static careers with powers to
              face digital risks and guard them against external threats. Our
              1:1 mentorship and project-based learning help experts tackle
              digital intricacies with end-to-end security keys. Our cyber
              security course engages learners with proven skill sets to build
              defensive systems and pave the way for ethical hacking.
            </p>
            <h3 style={{ fontSize: "18px" }}>
              Industry-paced Cyber Security and Ethical Hacking Course in
              Bangalore
            </h3>
            <p>
              Reputed industry experts from top-notch MNCs in Bangalore offer
              1:1 live interactive training to our learners. Our cyber security
              courses online keep you ahead of the digital race and help you
              build a defensive system against hacks and threats. You will learn
              everything from scratch via elemental modules and live projects.
            </p>
            <p>
              Our course modules are regularly updated following the industry
              trends. We try to include diverse operating sectors influenced by
              tech creations and data usage. We follow industry researchers to
              understand the essence of cyber security in handling modern
              businesses and their data usage. Hence, joining our cyber security
              training can help you excel in your career and attain proven
              success.
            </p>

            <h3 style={{ fontSize: "18px" }}>
              Digitally-driven Career Counselling
            </h3>
            <p>
              Our reliable career experts and advisors offer end-to-end learning
              aids to excel in today’s challenging times. Enterprise security
              has become vital for firms dealing with massive data sets, raising
              the urgency of upskilling. Our counsellors help you learn the
              essence of cyber security and master proven tools.
            </p>
            <p>
              Join us to prepare for ethical hacking, security analysis, and IT
              norms for threat detection and prevention. Our cyber security
              course in Bangalore with placement drives exciting success
              globally.
            </p>
            <h3 style={{ fontSize: "18px" }}>
              Why does Learnbay’s cyber security course in Bangalore drive
              notable success?
            </h3>
            <p>
              Career upskilling has become crucial for experts from diverse
              fields. In the interim, fast-paced tech shifts inspire experts to
              upskill and learn the recent trends. Yet, joining a generic course
              can limit your success chances and degrade your career value.
              Hence, joining proven cyber security courses online is vital in
              inducing better gains.
            </p>
            <p>
              Upskilling has become vital regardless of cyber security course
              fees in Bangalore. Hence, Learnbay presents a regularly revised
              syllabus to escalate your career worth and prepare you for
              critical interviews. Its flexible learning method helps learners
              grasp real-time learning of security tools, trends, and practices.
            </p>
            <p>
              Join our interactive cyber security training from well-known
              experts and unleash your true worth. Training from reputed mentors
              followed by 1:1 doubt-clearing sessions enhances your wisdom.
              Also, learning via real-time projects at offline innovation labs
              in Bangalore assures global-level success.
            </p>
            <p>
              Our cyber security courses support working experts with their
              flexibly designed course fees. Our inclusively planned cyber
              security course in Bangalore fees boosts experts' ability to step
              forward for hassle-free learning. Experts can opt for easy
              payments, scholarships, and an affordable fee structure.
            </p>
            <p>
              Our cyber security course with placement in Bangalore sets the
              basis for 360-degree career-building. Learners can use 1:1 mock
              interviews, resume-making, LinkedIn profiling, and
              portfolio-building help. Eligible learners can join the placement
              program to prepare themselves for the trending jobs with leading
              MNCs.{" "}
            </p>
            <p>
              Lastly, Learnbay’s cyber security certifications validate your
              skills and help you grow with definite career success. Experts can
              earn IBM & Microsoft certificates and add them to their resumes
              for enriched returns. These globally recognized certifications
              help you land promising roles, have swift promotions, and attain
              exciting growth.{" "}
            </p>
            <p>
              Enrol in Learnbay’s <b>cyber security course in Bangalore</b>{" "}
              today to gain –
            </p>
            <ul>
              <li>
              2-days immersive experience at IIT Roorkee from IIT experts 

              </li>
              <li>
              Hands-on learning with case studies and capstone projects

              </li>
              <li>
              Career support services (interview preparation, resume building, and job placement assistance)

              </li>
              <li>
              Globally recognized iHUB DivyaSampark, IIT Roorkee certificates

              </li>
        
            </ul>
          </div>
        ) : (
          ""
        )}
        {CyberSecurityPune ? (
          <div className={styles.CitiesRightInner}>
            <p>
              Technology influences every part of our digital world. It connects
              people and helps us work in new markets. In the interim,
              cybercrime has taken a toll on many firms and personal lives.
            </p>
            <p>
              Recent reports have stated the impacts of growing cybercrimes to
              cost the world $10.5 trillion by 2025. Hence, startups and
              long-term firms prefer having cyber experts to control internal
              and external risks. Indeed, such cases trigger the haste for
              upskilling via a cyber security course in Pune with placement.
            </p>
            <p>
              Learnbay marks an apparent breakthrough with its leading-edge
              Cyber Security Course with a Generative AI-driven syllabus. Our
              alliance with iHUB DivyaSampark and IIT Roorkee enriches course
              worth endlessly. We have designed this course solely for IT
              experts and network engineers to excel in the rising cyber
              security domain. Techies can join our cyber security course with
              placement in Pune and build a prestigious career.
            </p>
            <p>
              Techies can join our 2-day classroom training at IIT Roorkee to
              gain industry insights from IIT faculty members. This classroom
              learning scope will help you kick-start a competitive career with
              exciting perks. Also, we provide an open learning space where
              techies can learn and practice cyber security tools via live
              projects. Join the top cyber security training institute in
              Pune—Excel in your tech career with great rewards and easy
              promotions.{" "}
            </p>
            <p>
              Our alliance with iHUB DivyaSampark and IIT Roorkee validates your
              tech-driven skills to build a thriving career globally. These
              certificates will help you crack critical tech interviews with
              assured success. At last, our cyber security classes in Pune equip
              you with technical and soft skills to stay at the forefront of
              today’s digital space.{" "}
            </p>
            <h3 style={{ fontSize: "18px" }}>
              Industry-specific Cyber Security Course in Pune with Placement
            </h3>
            <p>
              Cybercrimes keep growing now and then, creating a haste for
              defensive mechanisms and frameworks. Constant learning has become
              vital for techies willing to revamp or switch careers. In the
              interim, Learnbay eases the upskilling journey via its cyber
              security course with placement in Pune.
            </p>
            <p>
              Techies who join us will get training focused on important tools
              and models. This training will help them protect their data and
              network systems.
            </p>
            <p>
              Our learning modules follow GenAI-rich models and frameworks to
              help techies evolve their careers with exciting perks. We follow
              industry happenings and evolving tech models to protect network
              systems. The learning modules integrate GenAI-rich concepts to
              guide learners in leading diverse fields.{" "}
            </p>
            <h3 style={{ fontSize: "18px" }}>
              Industry-relevant Career Counselling
            </h3>{" "}
            <p>
              Techies prefer upskilling despite hefty cyber security course fees
              in Pune to unleash alluring perks and rewards. We provide
              industry-specific career counseling to experts joining Learnbay.
            </p>
            <p>
              Our reliable counselors guide learners in decoding industry
              updates and excelling in their careers. Learnbay’s reliable career
              experts assess your skill sets, understand your goals and
              interests, and advise proper upskilling courses. Join today to
              master front-age tools and restrict crucial threats.
            </p>
            <h3 style={{ fontSize: "18px" }}>
              Is Learnbay’s cyber security course in Pune worth investing in?
            </h3>
            <p>
              Learnbay expects a digitally defensive career path via its
              cutting-edge cyber security course in Pune. Its expansively
              curated Generative AI-rich learning modules help experts master
              key tools, methods, and frameworks to secure networks. Here,
              experts can upgrade their skills according to the new-age network
              security concepts and Gen AI models.
            </p>
            <p>
              We believe in first-hand learning experiences where experts can
              learn and practice cutting-edge tools and practices. Learners can
              practice via live projects to gain insights and optimize their
              skills. Our cyber security training in Pune follows a hybrid
              method to help experts balance their work-study terms.
            </p>
            <p>
              Our tie-up with IIT Roorkee faculty members offers a
              career-specific mentorship. Learners acquire tech-driven skills
              via live cyber security classes in Pune. Our mentors help you
              develop skills to specify likely risks, manage network systems,
              ensure safety, and build defensive walls.{" "}
            </p>
            <p>
              Also, learners can add globally valued credentials to their
              careers, unleashing true growth options. Our best cyber security
              institute in Pune offers iHUB DivyaSampark and IIT Roorkee
              certificates once you complete your learning. These certificates
              help you grow endlessly and grab exciting offers.{" "}
            </p>
            <p>
              At last, Learnbay’s job assistance program helps you refine your
              skills and kick-start a thriving career. Our cyber security course
              in Pune with placement equips you with skills to crack critical
              job interviews effortlessly. Learnbay’s career support services
              help techies prepare for upcoming risks and make them job-ready.{" "}
            </p>
          </div>
        ) : (
          ""
        )}

        {DSAPune ? (
          <div className={styles.CitiesRightInner}>
            <p>
              Today’s tech-driven business functions call for real-time mastery
              of new-age concepts and tools. Pune’s bustling tech space inspires
              IT and non-IT experts to rethink their career paths to unleash
              true growth potential. Learnbay’s DSA course in Pune envisions a
              hassle-free career transition for aspiring experts. Even busy
              working pros can balance their study hours and work obligations.
            </p>
            <p>
              Our inclusively-crafted course modules balance your abstract and
              practical learning expectations with enriched growth options. Our
              data structures and algorithms classes in Pune lay the basis for
              an open-learning experience. Here, you can master in-demand DSA
              tools and practices via 1:1 interactive sessions. Plus, hands-on
              learning via live projects limitlessly accelerates your growth
              chances.
            </p>
            <p>
              We believe in quality upskilling which is possible due to our
              esteemed mentors from top-notch MNCs with relevant industry
              experience. Mentorship from tech giants will help you grasp
              cutting-edge wisdom in DSA and thrive. Your data structures and
              algorithms classes in Pune will help you acquire elementary and
              practical learning.{" "}
            </p>
            <p>
              Learnbay’s endless support throughout your career switch journey
              in DSA offers 100% job and placement assistance. Its career
              support services (1:1 mock interviews, CV-making, and
              doubt-clearing sessions) make you job-ready. Our DSA classes in
              Pune help you master coding knacks and crack product-based
              interviews.
            </p>
            <p>
              Also, attesting IBM & Microsoft certificates to your career
              empowers a globally acclaimed tech career with exciting perks.
              These certificates add extra edge to your career and help you
              crack top-tier product-based interviews. Certificates are useful
              in validating your skills and helping you grab exciting job offers
              with the leading MNCs.
            </p>
            <h3 style={{ fontSize: "18px" }}>
              Cutting-edge Data Structure Training in Pune for IT and non-IT
              Professionals
            </h3>
            <p>
              IT and non-IT aspirants keen to rebuild a thriving career in DSA
              must join Learnbay for its cutting-edge interactive training. Our
              meticulously planned DSA syllabus helps you sharpen elementary
              concepts and learn advanced practices. Our data structures and
              algorithms training in Pune offers real-time sessions to grasp
              proven knowledge. Here, experts can learn everything from scratch.
              You can become a DSA expert beyond age-old
              coder/developer/programmer roles with us.
            </p>
            <h3 style={{ fontSize: "18px" }}>
              Career-enriched Counselling Sessions
            </h3>{" "}
            <p>
              In the present ever-changing era, constant upskilling has become a
              perfect solution to overcome career redundancies and grow. Experts
              joining Learnbay’s DSA course in Pune will receive career-driven
              counseling addressing key queries. Counseling has prime role in
              easing career complexities and helping experts thrive now and
              then.
            </p>
            <p>
              Learnbay’s dedicated career counseling team is here to help you
              throughout your transition journey. Our counselors will evaluate
              your qualifications, domain knowledge, job experience, and skill
              sets to guide you with the best-suited role. A career-enriched
              counseling helps you choose the right path and induce better
              gains.
            </p>
            <h3 style={{ fontSize: "18px" }}>
              Why is investing in Learnbay’s <b>DSA course in Pune</b> worth it?
            </h3>
            <p>
              Today’s data-driven age expects skilled tech talents with in-depth
              DSA knowledge. Mastering proven DSA tools, concepts, and practices
              helps experts excel in their tech roles and grab high-paying jobs.
              Learnbay’s data structures and algorithms course in Pune designs a
              job-enriched syllabus covering top trends.
            </p>
            <p>
              Its hybrid learning model helps busy working pros balance their
              job tasks and upskilling. Here, learners can choose the preferred
              time for DSA learning without hampering their workplace
              commitments.
            </p>
            <p>
              In addition, mentorship from eminent DSA experts helps you dive
              deeper into real-world uses of related tools and practices,
              setting new growth standards. DSA classes in Pune offer
              theoretical and practical training with live projects. Here,
              experts can gain real-world insights into DSA applications across
              diverse sectors.
            </p>
            <p>
              Learnbay’s data structures and algorithms training in Pune offers
              end-to-end career support services to help you crack critical
              roles. Learners can fortify career success chances with abilities
              to ace product-based interviews. Our mock interviews, 1:1
              doubt-clearing sessions, resume-making, and LinkedIn profiling
              enrich growth terms.
            </p>
            <p>
              Also, experts can validate their skills with IBM & Microsoft
              certificates to escalate career growth chances. Earn these
              credentials and unleash true growth potential on a global level.{" "}
            </p>
            <p>
              Hence, investing in Learnbay’s <b>DSA course in Pune</b> is worth
              it as you will gain –
            </p>
            <ul>
              <li>
                Industry-driven DSA training to master core concepts and
                practices
              </li>
              <li>Live interactive mentorship from eminent tech experts </li>
              <li>
                16+ real-time project work at Pune’s offline innovation lab
              </li>
              <li>Project-based learning with 300+ coding exercises </li>
              <li>
                3 years of flexible career support services (mock interviews &
                resume writing){" "}
              </li>
              <li>Globally conceded IBM & Microsoft certifications </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {cityText ? (
          <div className={styles.CitiesRightInner}>
            <p>
              Learnbay's <b>Data Science course in Bangalore</b> is structured
              online training that allows you to gain skills and expertise in
              core aspects of data science, AI, and ML, which are responsible
              for transforming the business landscape. Data Science is
              undoubtedly considered the most important phenomenon for business
              growth in the <b>21st century</b>. Indeed, a{" "}
              <b>career in Data Science</b> is the most rewarding one.{" "}
              <a
                style={{ color: "#0072bc" }}
                href="https://www.learnbay.co/data-science-courses"
                target="_blank"
              >
                <b>Data Science courses</b>
              </a>{" "}
              are specifically created to help aspiring data scientists secure
              their careers with the Data Science foundation.
            </p>
            <p>
              Learnbay's <b>Data Scientist course</b> is designed to deliver
              theoretical and practical knowledge on all elements of Data
              Science, including Programming, Maths, Statistics, AI, Machine
              learning, and the business side of Data science. It allows
              students to gain the in-demand spectrum of data science skills and
              provide appropriate Data Science solutions to Business problems.
            </p>
            <p>
              Data Science has found much importance in business applications in
              organizations. The vast majority of modern industries work closely
              with data and base all of their crucial decisions on the
              insightful information derived from it. In today’s business world,
              a competent Data Scientist is a major part of a company's
              workforce since they draw future plans based on data. Further,{" "}
              <b>IBM</b> has reported that there will be over{" "}
              <b>7,00,000 new job opportunities in Data Science and AI</b> in
              the upcoming years.
            </p>
            <p>
              Bangalore is one of the world's major cities, with an impressive
              infrastructure and abundant business opportunities. It is also
              considered the IT hub of India, where many tech companies and
              startups are happening. It puts <b>data scientists' jobs</b> in
              high demand across various domains. Data Scientist is also a
              lucrative career with a high package in Bengaluru. As mentioned in
              glassdoor, the average{" "}
              <b>
                salary of a Data Scientist in Bengaluru is INR 11,00,000
                annually
              </b>
            </p>
            <p>
              The{" "}
              <a
                href="https://www.learnbay.co/datascience/bangalore/data-science-course-training-in-bangalore"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank"
              >
                Data Scientist training
              </a>{" "}
              is a data science certification course offered by Learnbay in
              Bangalore. MNC experts design it as per the current industry
              requirements and to help the data science aspirants in the city
              transform their careers. The Data Science online course is
              conducted via live interactive classes by industry trainers..
            </p>
            <p>
              <b>Learnbay</b>, in Bangalore, offers certification programs in
              collaboration with <b>IBM</b>, which are globally recognized. The
              data science course comes with a duration of 6 months with 300+
              Hrs of online training. Faculties with extensive industry
              experience and dedicated subject matter expertise. One-on-one
              mentorship, Placement assistance including resume building
              sessions, soft skill training, mock interviews, extensive networks
              for job opportunities, practical hands-on learning sessions with{" "}
              <b>capstone and 15+ real-world data science projects.</b>
            </p>
            <p>
              It is a complete training course with detailed learning covering
              multiple modules, including:
            </p>
            <ul>
              <li>Data Science Foundation</li>
              <li>Python for Data Science</li>
              <li>Statistics for Data Science</li>
              <li>Maths for Data Science</li>
              <li>Machine Learning</li>
              <li>Data Preparation with Pandas</li>
              <li>Data Visualisation with Python</li>
              <li>Tableau Foundations for Data analysis</li>
              <li>Big Data Foundation</li>
              <li>Model deployment (Flask-API)</li>
              <li>R Language Essentials</li>
              <li>Deep Learning</li>
              <li>SQL for Data Science</li>
            </ul>
            <p>
              <b>
                The IBM Certified Data Scientist course in Bangalore has a
                9-month (300+ hours) course duration.
              </b>
            </p>
            <p>The Structured data science course consists of 4 - Terms: </p>
            <p>
              <b>Module 0 - Preparatory Classes (Programming+Maths)</b>
            </p>
            <p>
              This Preparatory module helps you familiarize yourself with Data
              Science and Machine Learning basics. It is a preliminary phase to
              help individuals, particularly non-programmers, become comfortable
              with the basics of maths, programming, and data science
              foundation. This module covers basic Python And R, Basic
              Mathematics, Essential Statistics for Data Science, Introduction
              to Anaconda, Jupyter notebook, Git and Github for data science,
              and other practical materials.
            </p>
            <h3 className={styles.pHead}>Term 1 - Python For Data Science</h3>
            <p>
              <b>Module (1) Python Programming</b>
            </p>
            <p>
              It is the essential part of the course, with full-time dedicated
              training sessions through Live{" "}
              <b>Instructor-Led Online Training</b>. This module covers the
              fundamentals of Python Programming, which is an essential tool to
              get started as a modern data scientist. Here, you will learn basic
              programming, Python data types, Functions and modules, libraries
              including Numpy and Pandas, and case studies using Python
              libraries.
            </p>
            <h3 className={styles.pHead}>
              Term 2 - Statistics and Machine Learning
            </h3>
            <p>
              <b>Module (1) - Statistics</b>
            </p>
            <p>
              This next essential module focuses on basic to advanced statistics
              concepts for Data science. This module will equip you with the
              fundamentals of statistics and probability, inferential and
              descriptive statistics, EDA, and data processing. You will also
              receive 4 practice assignments on statistics for experiential
              learning.
            </p>
            <p>
              <b>Module (2) - Machine Learning</b>
            </p>
            <p>
              In this module of the data science course, the trainer will equip
              you with cutting-edge machine learning techniques and tools, which
              are essential for model building and, thereby, decision-making.
              This module covers advanced ML techniques, including regression
              and classification models, KNN-model, Clustering techniques, PCA,
              and Support Vector Machine (SVM).
            </p>
            <h3 className={styles.pHead}>Term 3 - Data Science Tools</h3>
            <p>
              <b>Module (1) - SQL</b>
            </p>
            <p>
              <b>Module (2) - MongoDB</b>
            </p>
            <p>
              <b>Module (3) - Tableau</b>
            </p>
            <p>
              <b>Module (4) - PowerBI </b>
            </p>
            <p>
              <b>Module (5) - Big Data and Spark Analytics</b>
            </p>
            <p>
              <b>Module (6) - Time Series</b>
            </p>
            <h3 className={styles.pHead}>
              Term 4 - Artificial Intelligence Tools
            </h3>
            <p>
              <b>Module (1) - Deep learning using TensorFlow</b>
            </p>
            <p>
              <b>Module (2) - Natural Language Processing (NLP)</b>
            </p>
            <p>
              <b>Module (3) - Model Training and Deployment (Using AWS GCP)</b>
            </p>
            <p>
              Lastly, it supports the students to practise their knowledge at a
              cloud lab at their convenience.
            </p>
            <p>
              Upon completing these structured 4-Terms{" "}
              <b>Learnbay's Data Science Training</b>, you will be confident in
              your ability to perform your "SuperHero duty" as a Data Scientist
              in leading firms.
            </p>
            <h2 className={styles.pHead}>
              Premium Features of Data Scientist Training in Bangalore
            </h2>
            <p>
              <b>Live Interactive Classes:</b> The classes are hassle-free and
              completely online, where you can interact with trainers and other
              students.
            </p>
            <p>
              <b>One-on-one Mentorship:</b> You will be provided a mentor who
              can guide you throughout the training from project inception to
              completion to placement.
            </p>
            <p>
              <b>Live Project Sessions:</b> You will gain hands-on experience by
              working on 15+ live projects from global MNCs under the
              supervision of project mentors. An exclusive feature of cloud lab
              is also available.
            </p>
            <p>
              <b>Doubt Clearance Sessions:</b> Multiple Q&A sessions are
              conducted to clarify your doubts with our instructors, even after
              the course completion.
            </p>
            <p>
              <b>Resume-building Support:</b> You can create a job-ready resume
              and portfolio with experts and mentors to help you get shortlisted
              by potential employers.
            </p>
            <p>
              <b>Interview Preparation:</b> Learnbay trainers will equip you
              with the latest and in-demand interview Q&A to confidently face
              the tricky MAANG interviews.
            </p>
            <p>
              <b>Mock Interviews:</b> By participating in several mock
              interviews, our professionals will assist you in improving your
              interview success rate and accelerating the hiring process.
            </p>
            <h2 className={styles.pHead}>
              Data Science Foundation Program in Bangalore with Placement
              Assistance{" "}
            </h2>
            <ol type="1">
              <li>
                The data science foundation course is a beginner-friendly course
                explicitly crafted to allow non-technical aspirants to reshape
                their careers in this lucrative field. <br></br>
              </li>
              <li>
                The data science course in Bangalore covers everything from
                basic data science techniques to advanced AIML, Data Science
                Project Workflow, Cutting-edge data science and AI tools,
                Various Roles in Data Science, and real-world applications of
                Data Science. <br></br>
              </li>
              <li>
                This program’s data science course fee is INR 1,10,000,
                excluding GST.<br></br>
              </li>
            </ol>

            <h3 className={styles.pHead}>
              Highlights of the Data Science Foundation Program in Bangalore
            </h3>

            <ol type="1">
              <li>Consists of 200+ hours of live sessions</li>
              <li>Lifetime accessibility of recorded live classroom videos</li>
              <li>
                Offline live project experience in the project innovation lab
              </li>
              <li>8+ real-time industrial projects</li>
            </ol>

            <h2 className={styles.pHead}>
              Advance Data Science and AI Course in Bangalore with Placement
              Assistance
            </h2>
            <ol type="1">
              <li>
                The Advance data science course is designed meticulously for
                professionals of all domains and levels of experience.{" "}
              </li>
              <li>
                This course covers everything from advanced data science and AI
                tools and techniques, including visualisation, data processing,
                EDA, feature engineering, and model deployment.{" "}
              </li>
              <li>
                The advanced data science course fees are INR 95,000, exclusive
                of GST.
              </li>
            </ol>

            <h3 className={styles.pHead}>
              Highlights of Advance Data Science and AI Course in Bangalore
            </h3>
            <ol type="1">
              <li>Consists of 250+ hours of live sessions</li>
              <li>Global recognition from IBM </li>
              <li>Career assistance for professionals</li>
              <li>Capstone project completion certificate from IBM</li>
              <li>12+ real-time industrial projects. </li>
            </ol>

            <h2 className={styles.pHead}>
              Data Science and AI for Managers & Leaders in Bangalore with
              Placement Assistance
            </h2>
            <ol type="1">
              <li>
                This training course is a comprehensive program offered by
                Learnbay specifically crafted for those in senior and managerial
                positions about the top-notch tools and techniques used to draw
                valuable insights.
              </li>
              <li>
                Managers in every organization must have a strong understanding
                of data science to make data-driven decisions effectively and
                boost revenue growth.
              </li>
              <li>
                The course fee for this manager course is INR 105,000, exclusive
                of GST.{" "}
              </li>
            </ol>

            <h3 className={styles.pHead}>
              Highlights of Data Science and AI program for Managers and Leaders
              in Bangalore
            </h3>
            <ol type="1">
              <li>Consists of 400+ hours of live sessions </li>
              <li>15+ real-time industrial projects</li>
              <li>
                Online sessions guided by professionals working in top MNCs
              </li>
              <li>
                A variety of financing options are available to make it more
                economical
              </li>
            </ol>

            <h2 className={styles.pHead}>
              Data Science and AI Master Program in Bangalore with Placement
              Assistance{" "}
            </h2>
            <ol type="1">
              <li>
                This domain-specialized data science course is a complete boot
                camp covering everything a data scientist must possess.{" "}
              </li>
              <li>
                The duration of this master's program is 15 to 17 months,
                depending on your preferred batch (week and weekend).{" "}
              </li>
              <li>
                After completing this course, you will become an expert data
                scientist and be able to manage teams in leading firms.
              </li>
              <li>
                The course fee for this master's program is 125,000, exclusive
                of GST.
              </li>
            </ol>

            <h3 className={styles.pHead}>
              Highlights of Data Science and AI Master Program in Bangalore
            </h3>
            <ol type="1">
              <li>Consists of 500+ hours of live sessions </li>
              <li>35 LPA - 50 LPA salary package</li>
              <li>20+ real-time industrial projects. </li>
              <li>
                Practical covering of real-time industrial projects and case
                studies
              </li>
            </ol>
            <p>
              <b>Note:</b> All data science courses at Learnbay come with the
              option of no-cost EMI.
            </p>

            <h2 className={styles.pHead}>
              Learnbay’s Domain-Specific Data Science Course in Bangalore
            </h2>
            <ol type="1">
              <li>
                <b>Finance Domain</b> - Finance-related investments in data
                science offer a wide range of career options. Cybersecurity,
                data science, machine learning, and AI are just a few topics
                focused on technology. Blockchain development and quantitative
                investing are two jobs that require financial expertise.
              </li>

              <li>
                <b>Operations Domain</b> - Data science and analytics allow us
                to gather relevant data, unearth insights, and make data-driven
                decisions by helping us to comprehend an organization’s
                operations.
              </li>
              <li>
                <b>Marketing Domain</b> - Data science is heavily used in
                marketing-related fields like consumer engagement, SEO, and
                profiling. New data science and analytics applications in
                marketing are also being developed daily.
              </li>

              <li>
                <b>HR Domain</b> - A data science expert on the HR team can
                provide the company information for effectively managing
                personnel, enabling it to move towards its objectives steadily.
                Data science is a ground-breaking technique that enables
                businesses to track costs and the outcomes of candidate
                engagement programs statistically and to evaluate the
                cost-effectiveness of various HR activities.
              </li>

              <li>
                <b>Healthcare Domain</b> - According to a survey, healthcare
                fields store 30% of all global data. The information in these
                fields can assist the government in various ways. Medical
                imaging is one of the most effective healthcare data science
                applications. Data Science, combined with Machine Learning,
                teaches computers to interpret MRIs, X-rays, mammograms, and
                other medical reports.
              </li>

              <li>
                <b>E-Commerce, Retail, and Supply Chain Domain</b> - Students
                who take this elective learn how to analyze data and find
                significant insights to provide businesses with a competitive
                edge. Sentiment analysis, Google Analytics, NLP, recommendation
                systems, deep learning, text analysis, and customer behavioral
                analytics are examples of the RSCA process. This domain program
                aims to acquaint participants with the fundamentals, components,
                business models, and other facets of managing an e-commerce
                organization.
              </li>

              <li>
                <b>Manufacturing Domain</b> - Manufacturing creates products by
                applying human labor, equipment, tools, and chemical or
                biological processing or formulation. The most commonly used
                term in the context of industrial design, the secondary sector
                of the economy, refers to human activity ranging from
                handicrafts to high tech.
              </li>
            </ol>

            <h2 className={styles.pHead}>Data Science Trends in Bangalore</h2>
            <p>
              Bangalore is home to a youthful generation of technological
              natives with the business acumen and creativity to fuel the global
              tech industry. Moreover, AI, machine learning, and IoT are
              saturating the market and improving the ecosystem amid this storm
              of the entrepreneurial revolution. The city has enormous potential
              for growth in the coming decades and expanding revenue.
            </p>

            <p>
              <b>Learnbay</b> offers flexible learning options, from dedicated
              Data Science Online Training in Bangalore to offline Data Science
              classroom training for project sessions, to exceptional recorded
              videos via Learnbay LMS.
            </p>

            <p>
              A recent LinkedIn survey indicates that data science has
              significantly increased in demand over the past three years, with
              a 37% surge.
            </p>

            <p>
              Learnbay <b>Data Science course fee in Bangalore</b> ranges from{" "}
              <b>INR 1,10,000</b> to <b>INR 1,25,000</b> according to your
              preferred domain and learning choice. Refer to the site’s desired
              course page for other <b>data science course fees</b>.
            </p>

            <h2 className={styles.pHead}>
              Best Data Science Training Institute in Bangalore
            </h2>

            <p>
              Are you looking for the{" "}
              <b>Best Data Science Training Institute in Bangalore?</b>
            </p>

            <p>
              You are certainly in the right place! <b>Learnbay</b> is paving
              the way to becoming India's most reputable training institute.
              Learnbay delivers real-time, qualitative training at affordable
              pricing. Learnbay institute has proudly assisted over 500+
              aspirants in pursuing their dream careers. <b>IBM</b>, being our
              accreditation partner, has global recognition.
            </p>

            <p>
              <a
                href="https://www.learnbay.co/"
                target="_blank"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                Learnbay Institute
              </a>{" "}
              provides all-inclusive training from industry professionals to
              help you become a hero to rule the world. Thus, acquiring Learnbay
              Training is undoubtedly your best career choice.
            </p>

            <p>
              Almost every business needs data since it helps them make
              decisions based on current facts, statistics, and trends. The
              demand for data is only going up. Therefore data science has
              become a multifaceted field.
            </p>

            <h2 className={styles.pHead}>
              Why Choose Learnbay Data Science Training Institute in Bangalore?
            </h2>

            <p>
              Learnbay offers affordable, high-quality, real-time training
              courses to graduates and IT professionals wanting to upgrade their
              skills. In today's age of technological explosion, it is
              inevitable to have diverse knowledge and skills to operate
              cutting-edge technology. Technology is paving the way for a better
              future, and we can master the field by being acquainted with it.
            </p>

            <p>
              Data science is necessary for this fourth industrial revolution
              era, and data scientists are now the carrier of big data. It is
              also reported that
              <b>
                the market size of data science platforms is expected to be
                worth USD 178 billion by 2025.
              </b>
            </p>

            <p>
              In the last few years, the volume of data generated, collected,
              and reproduced globally escalated from 1.2 trillion GB to 59
              trillion GB, almost a 5,000% growth. What will data do in the
              coming years?
            </p>

            <p>
              <b>Data Science courses in Bangalore</b> are the entry point to
              the best IT systems in the city; becoming a data scientist has
              never been so easy. Sign up for{" "}
              <b>Data Science Online Training in Bangalore</b> to upgrade your
              skills to secure a lucrative career!
            </p>

            <h2 className={styles.pHead}>Did You Know?</h2>

            <p>
              <b>
                The Average Data Scientist's Salary in India is INR 10 lakhs per
                year
              </b>
              . Further, the average <b>Data Scientist Salary in Bangalore</b>,
              as mentioned in <b>Payscale.com</b> - is <b>INR 989,454</b> per
              annum. Ultimately, Learnbay's
              <b>Data Science Certification in Bangalore</b> can help you break
              through in the data science field!
            </p>

            <p>
              <b>Learnbay</b> also provides classroom mode for{" "}
              <a
                href="https://www.learnbay.co/machine-learning-course-training-in-bangalore"
                target="_blank"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                machine learning
              </a>{" "}
              and{" "}
              <a
                href="https://www.learnbay.co/artificial-intelligence-ai-course-training-bangalore"
                target="_blank"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                artificial intelligence courses in Bangalore
              </a>{" "}
              and data science courses.
            </p>

<YoutubeEmbed embedId="gvSdkorN6PE"/>


          </div>
        ) : (
          <div className={styles.CitiesRightInner}>
            <h2 className={styles.pHead}>{ProgramHead1}</h2>
            <h2 className={styles.pHead}>{ProgramHead2}</h2>
            <p className={styles.pp}>{ProgramBot1}</p>
            <p className={styles.pp}>{ProgramBot2}</p>

            <h2 className={styles.pHead}>{ProgramHead3}</h2>
            <p className={styles.pp}>{ProgramBot3}</p>
            <p className={styles.pp}>{ProgramBot31}</p>
            <p className={styles.pp}>{ProgramBot66}</p>
            <p className={styles.pp}>{ProgramBot67}</p>
            <p className={styles.pp}>
              <i>{ProgramBotItaliic31}</i>
            </p>
            <p className={styles.pp}>{ProgramBot32}</p>
            <h2 className={styles.pHead}>{ProgramHead4}</h2>
            <p className={styles.pp}>{ProgramBot4}</p>
            <h2 className={styles.pHead}>{ProgramHead5}</h2>
            <p className={styles.pp}>{ProgramBot5}</p>
            <p className={styles.pp}>{ProgramBot51}</p>
            <h2 className={styles.pHead}>{ProgramHead6}</h2>
            <p className={styles.pp}>{ProgramBot6}</p>

            <div className={styles.pp}>{listitem1}</div>

            <div className={styles.pp}>{ProgramBot7}</div>
            <div className={styles.pp}>{Programvideo}</div>
            {/* <div className={styles.pp}>{GoogleMaps}</div> */}
            <p className={styles.pp}>{ProgramBot61}</p>
            <p className={styles.pp}>{ProgramBot62}</p>
            <h2 className={styles.pHead}>{ProgramHead7}</h2>
            <p className={styles.pp}>{ProgramBot8}</p>
            <p className={styles.pp}>{ProgramBot9}</p>
            <h2 className={styles.pHead}>{ProgramHead14}</h2>
            <h2 className={styles.pHead}>{ProgramHead15}</h2>
            <p className={styles.pp}>{ProgramBot10}</p>
            <p className={styles.pp}>{ProgramBot101}</p>
            <p className={styles.pp}>{ProgramBot102}</p>
            <p className={styles.pp}>{ProgramBot103}</p>
            <p className={styles.pp}>{ProgramBot104}</p>
            <p className={styles.pp}>{ProgramBot105}</p>
            <p className={styles.pp}>
              <i>{ProgramBotItaliic105}</i>
            </p>
            <p className={styles.pp}>{ProgramBot106}</p>
            <h2 className={styles.pHead}>{ProgramHead16}</h2>
            <p className={styles.pp}>{ProgramBot14}</p>
            <h2 className={styles.pHead}>{ProgramHead17}</h2>
            <p className={styles.pp}>{ProgramBot15}</p>
            <h2 className={styles.pHead}>{ProgramHead18}</h2>
            <p className={styles.pp}>{ProgramBot16}</p>
            <p className={styles.pp}>{ProgramBot161}</p>
            <p className={styles.pp}>{ProgramBot162}</p>
            <p className={styles.pp}>{ProgramBot163}</p>
            <p className={styles.pp}>{ProgramBot164}</p>
            <p className={styles.pp}>{ProgramBot165}</p>
            <h2 className={styles.pHead}>{ProgramHead19}</h2>
            <p className={styles.pp}>{ProgramBot17}</p>
            <h2 className={styles.pHead}>{ProgramHead20}</h2>
            <p className={styles.pp}>{ProgramBot18}</p>
            <h2 className={styles.pHead}>{ProgramHead8}</h2>
            <h2 className={styles.pHead}>{ProgramHead9}</h2>
            <p className={styles.pp}>{ProgramBot11}</p>
            <h2 className={styles.pHead}>{ProgramHead10}</h2>
            <p className={styles.pp}>{ProgramBot12}</p>
            <h2 className={styles.pHead}>{ProgramHead11}</h2>
            <p className={styles.pp}>{ProgramBot13}</p>
            <h2 className={styles.pHead}>{ProgramHead12}</h2>
            <h2 className={styles.pHead}>{ProgramHead13}</h2>
            <a href={Courselink1} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course1}
              </h2>
            </a>
            <a href={Courselink2} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course2}
              </h2>
            </a>
            <a href={Courselink3} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course3}
              </h2>
            </a>
            <a href={Courselink4} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course4}
              </h2>
            </a>
            <a href={Courselink5} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course5}
              </h2>
            </a>
            <a href={Courselink6} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course6}
              </h2>
            </a>
            <a href={Courselink7} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course7}
              </h2>
            </a>
            <a href={Courselink8} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course8}
              </h2>
            </a>
            <h2 className={styles.pHead}>{ProgramHead21}</h2>
            <p className={styles.pp}>{ProgramBot19}</p>
            <span className={styles.pp}>{ProgramBot20}</span>
            <a href={jobOutlooklink} target="_blank" rel="nofollow">
              <span
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {jobOutlookText}
              </span>
            </a>
            <span className={styles.pp}>{ProgramBot21}</span>
            <p className={styles.pp}>{ProgramBot22}</p>
            <p className={styles.pp}>{ProgramBot23}</p>
            <p className={styles.pp}>{ProgramBot24}</p>
            <p className={styles.pp}>{ProgramBot25}</p>
            <p className={styles.pp}>{ProgramBot26}</p>
            <p className={styles.pp}>{ProgramBot27}</p>
            <p className={styles.pp}>{ProgramBot28}</p>
            <p className={styles.pp}>{ProgramBot29}</p>
            <p className={styles.pp}>{ProgramBot30}</p>
            <p className={styles.pp}>{ProgramBot31}</p>
            <p className={styles.pp}>{ProgramBot32}</p>
            <p className={styles.pp}>{ProgramBot33}</p>
            <p className={styles.pp}>{ProgramBot34}</p>
            <p className={styles.pp}>{ProgramBot35}</p>
            <p className={styles.pp}>{ProgramBot36}</p>
            <p className={styles.pp}>{ProgramBot37}</p>
            <p className={styles.pp}>{ProgramBot38}</p>
            <p className={styles.pp}>{ProgramBot39}</p>
            <p className={styles.pp}>{ProgramBot40}</p>
            <p className={styles.pp}>{ProgramBot41}</p>
            <p className={styles.pp}>{ProgramBot42}</p>
          </div>
        )}
      </div>
      <div id="Domain">
        <div className={styles.CitiesRightSpan}>
          <span>Domain Specialization</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <h2 className={styles.pHead}>{DomainHead1}</h2>
          <p className={styles.pp}>{DomainBot1}</p>
          <p className={styles.pp}>{DomainBot2}</p>
          <h2 className={styles.pHead}>{DomainHead2}</h2>
          <p className={styles.pp}>{DomainBot4}</p>
          <p className={styles.pp}>{DomainBot5}</p>
          <h2 className={styles.pHead}>{DomainHead3}</h2>
          <p className={styles.pp}>{DomainBot6}</p>
          <p className={styles.pp}>{DomainBot7}</p>
          <p className={styles.pp}>{DomainBot8}</p>
          <p className={styles.pp}>{DomainBot9}</p>
          <p className={styles.pp}>{DomainBot10}</p>
          <p className={styles.pp}>{DomainBot11}</p>
          <p className={styles.pp}>{DomainBot12}</p>
          <p className={styles.pp}>{DomainBot3}</p>
          <p className={styles.pp}>{DomainMasterBot1}</p>
          <h4 style={{ fontSize: "16px" }}>{DomainMasterh4}</h4>

          {fullStackCity ? (
            <>
              <h2 className={styles.pHead}>{DomainHead30}</h2>
              <h2 className={styles.pHead}>{DomainHead3}</h2>
              <h2 className={styles.pHead}>{DomainHead4}</h2>
              <h2 className={styles.pHead}>{DomainHead5}</h2>
              <h2 className={styles.pHead}>{DomainHead6}</h2>
              <h2 className={styles.pHead}>{DomainHead7}</h2>
            </>
          ) : (
            <>
              {" "}
              <ul className={styles.ulLi}>
                <a href={Domainlink1} target="_blank">
                  <p style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList1}
                  </p>
                </a>
                <a href={Domainlink2} target="_blank">
                  <p style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList2}
                  </p>
                </a>
                <a href={Domainlink3} target="_blank">
                  <p style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList3}
                  </p>
                </a>
                <a href={Domainlink4} target="_blank">
                  <p style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList4}
                  </p>
                </a>
                <a href={Domainlink5} target="_blank">
                  <p style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList5}
                  </p>
                </a>
                <a href={Domainlink6} target="_blank">
                  <p style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList6}
                  </p>
                </a>
                <a href={Domainlink7} target="_blank">
                  <p style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList7}
                  </p>
                </a>
                <a href={Domainlink8} target="_blank">
                  <p style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList8}
                  </p>
                </a>
                <a href={Domainlink9} target="_blank">
                  <p style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList9}
                  </p>
                </a>
                <a href={Domainlink10} target="_blank">
                  <p style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList10}
                  </p>
                </a>
              </ul>
            </>
          )}
          <p className={styles.pp}>{DomainBot40}</p>
          <p className={styles.pp}>{DomainBot41}</p>

          <p className={styles.pp}>{DomainMasterBot2}</p>
          <h4 style={{ fontSize: "16px" }}>{DomainMasterHead1}</h4>
          <p className={styles.pp}>{DomainMasterBot3}</p>
          {masterdomain ? (
            <>
              <ul style={{ marginTop: 10 }}>
                <li>{DomainMasterlist1}</li>
                <li>{DomainMasterlist2}</li>
                <p className={styles.pp}>{DomainMasterBot4}</p>
              </ul>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      {fullStackCity ? (
        <></>
      ) : (
        <div id="Certification">
          <div className={styles.CitiesRightSpan}>
            <span>Certification Details</span>
          </div>
          <div className={styles.CitiesRightInner}>
            <div>
              <h2 className={styles.pHead}>{CertificationHead1}</h2>
              <p className={styles.pp}>{CertificationBot1}</p>
              <h4 style={{ fontSize: "16px" }}>{CertificationHead29}</h4>
              <h4 style={{ fontSize: "16px" }}>{CertificationMasterHead1}</h4>
              <p className={styles.pp}>{CertificationBot2}</p>
              <p className={styles.pp}>{CertificationmasterBot5}</p>
              <h4 style={{ fontSize: "16px" }}>{CertificationHead30}</h4>
              <h4 style={{ fontSize: "16px" }}>{CertificationMasterHead2}</h4>
              <p className={styles.pp}>{CertificationBot3}</p>
            </div>
            <div>
              <h2 className={styles.pHead}>{CertificationHead2}</h2>
              <h4 style={{ fontSize: "16px" }}>{CertificationHead31}</h4>
              <p className={styles.pp}>{CertificationBot4}</p>
              {listsCertificate ? (
                <ul className={styles.pp}>
                  <li>{Certificationlist1}</li>
                  <li>{Certificationlist2}</li>
                  <li>{Certificationlist3}</li>
                </ul>
              ) : null}
              <h4 style={{ fontSize: "16px" }}>{CertificationHead32}</h4>
              <p className={styles.pp}>{CertificationBot5}</p>
              <p className={styles.pp}>{CertificationBot6}</p>
            </div>
            <div>
              <h2 className={styles.pHead}>{CertificationHead3}</h2>
              <p className={styles.pp}>{CertificationBot7}</p>
              <div className={styles.certNew}>
                {certificate1 ? (
                  <Image
                    width={350}
                    height={250}
                    loading="lazy"
                    src={src}
                    alt="Learnbay - Sample IBM Certification Course"
                  />
                ) : null}
                {certificate2 ? (
                  <>
                    <Image
                      width={350}
                      height={250}
                      loading="lazy"
                      src={src}
                      alt="Learnbay - Sample IBM Certification Course"
                    />
                    <Image
                      width={350}
                      height={250}
                      loading="lazy"
                      src={src22}
                      alt="Learnbay - Sample Microsoft Certificate Course"
                    />
                  </>
                ) : null}
                {!certificate1 && !certificate2 ? (
                  <>
                    <Image
                      width={350}
                      height={250}
                      loading="lazy"
                      src={src}
                      alt="Learnbay - Sample IBM Certification Course"
                    />
                    <Image
                      width={350}
                      height={250}
                      loading="lazy"
                      src={src22}
                      alt="Learnbay - Sample IBM Certification Course"
                    />
                    <Image
                      width={350}
                      height={250}
                      loading="lazy"
                      src={src33}
                      alt="Learnbay - Sample Microsoft Certificate Course"
                    />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
      {DSNoModule ? (
        <></>
      ) : (
        <>
          {" "}
          <div id="Module">
            <div className={styles.CitiesRightSpan}>
              <span>Module-Details</span>
            </div>
            <div className={styles.CitiesRightInner}>
              <p className={styles.pp}>{ModuleMasterBot1}</p>
              <h2 className={styles.pHead}>{ModuleHead1}</h2>
              <h4 style={{ fontSize: "16px" }}>{ModuleMasterHead1}</h4>
              <p className={styles.pp}>{ModuleBot1}</p>
              <p className={styles.pp}>{ModuleBot2}</p>
              <p className={styles.pp}>
                <b>{ModuleBotL21}</b>
              </p>
              <p className={styles.pp}>
                <b>{ModuleBotL22}</b>
              </p>
              <p className={styles.pp}>
                <b>{ModuleBotL23}</b>
              </p>
              <p className={styles.pp}>{ModuleBot21}</p>
              <h2 className={styles.pHead}>{ModuleHead2}</h2>
              <p className={styles.pp}>{ModuleBot3}</p>
              <h2 className={styles.pHead}>{ModuleHead3}</h2>
              <p className={styles.pp}>{ModuleBot4}</p>
              <p className={styles.pp}>{ModuleBot41}</p>
              <p className={styles.pp}>{ModuleBot42}</p>
              <p className={styles.pp}>{ModuleBot43}</p>
              <p className={styles.pp}>{ModuleBot44}</p>
              <p className={styles.pp}>{ModuleBot45}</p>
              {modulelist ? (
                <>
                  <ul className={styles.pp}>
                    <li>{Modulelist1}</li>
                    <li>{Modulelist2}</li>
                    <li>{Modulelist3}</li>
                    <li>{Modulelist4}</li>
                    <li>{Modulelist5}</li>
                    <li>{Modulelist6}</li>
                    <li>{Modulelist7}</li>
                  </ul>
                </>
              ) : (
                ""
              )}
              <p className={styles.pp}>{ModuleBot46}</p>
              <p className={styles.pp}>{ModuleBot47}</p>
              <p className={styles.pp}>{ModuleBot48}</p>

              {MasterModulelist ? (
                <>
                  <h4 style={{ fontSize: "16px" }}>{ModuleMasterHead2}</h4>
                  <ul className={styles.pp}>
                    <li>{ModuleMasterlist1}</li>
                    <li>{ModuleMasterlist2}</li>
                    <li>{ModuleMasterlist3}</li>
                    <li>{ModuleMasterlist4}</li>
                    <li>{ModuleMasterlist5}</li>
                    <li>{ModuleMasterlist6}</li>
                    <li>{ModuleMasterlist7}</li>
                  </ul>
                  <p className={styles.pp}>{ModuleMasterBot2}</p>
                  <p className={styles.pp}>{ModuleMasterBot3}</p>
                </>
              ) : (
                ""
              )}
              <p className={styles.pp}>{ModuleBot10}</p>
              {fullStackCity ? (
                <></>
              ) : (
                <>
                  {" "}
                  <p className={styles.pp}>Module Details:</p>
                  <div className={styles.SyllabusBot}>
                    <div className={styles.SyllabusBot1}>
                      <div className={styles.SyllabusBot11}>
                        <div>
                          <p className={styles.syllabush}>{syllabush1}</p>
                          <p className={styles.syllabusb}>
                            <BsClock className={styles.bIcons} />
                            {syllabusb1}
                          </p>
                        </div>
                        <div className={styles.number1}>1</div>
                      </div>
                      <div className={styles.SyllabusBotlist}>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist11}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist12}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist13}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist14}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist15}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist16}
                        </p>
                      </div>
                    </div>
                    <div className={styles.SyllabusBot2}>
                      <div className={styles.SyllabusBot22}>
                        <div>
                          <p className={styles.syllabush}>{syllabush2}</p>
                          <p className={styles.syllabusb}>
                            <BsClock className={styles.bIcons} />
                            {syllabusb2}
                          </p>
                        </div>
                        <div className={styles.number2}>2</div>
                      </div>
                      <div className={styles.SyllabusBotlist}>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist21}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist22}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist23}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist24}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist25}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist26}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.SyllabusBot}>
                    <div className={styles.SyllabusBot3}>
                      <div className={styles.SyllabusBot33}>
                        <div>
                          <p className={styles.syllabush}>{syllabush3}</p>
                          <p className={styles.syllabusb}>
                            <BsClock className={styles.bIcons} />
                            {syllabusb3}
                          </p>
                        </div>
                        <div className={styles.number3}>3</div>
                      </div>
                      <div className={styles.SyllabusBotlist}>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist31}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist32}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist33}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist34}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist35}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist36}
                        </p>
                      </div>
                    </div>
                    <div className={styles.SyllabusBot4}>
                      <div className={styles.SyllabusBot44}>
                        <div>
                          <p className={styles.syllabush}>{syllabush4}</p>
                          <p className={styles.syllabusb}>
                            <BsClock className={styles.bIcons} />
                            {syllabusb4}
                          </p>
                        </div>
                        <div className={styles.number4}>4</div>
                      </div>
                      <div className={styles.SyllabusBotlist}>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist41}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist42}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist43}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist44}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist45}
                        </p>
                        <p className={styles.SyllabusBotlistp}>
                          <FiCheck className={styles.bIcons} />
                          {SyllabusBotlist46}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className={styles.Button}>
              <a href={syllabussrc} target="_blank">
                <Button className={styles.btn} text="View Detailed Syllabus" />
              </a>
            </div>
          </div>
        </>
      )}

      <div id="Job">
        <div className={styles.CitiesRightSpan}>
          <span>Job Assist Program</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <p className={styles.pp}>{JobBot50}</p>
          <h2 className={styles.pHead}>{JobHead1}</h2>
          <p className={styles.pp}>{MasterJobBot1}</p>
          <p className={styles.pp}>{MasterJobBot2}</p>
          <p className={styles.pp}>{MasterJobBot3}</p>
          <p className={styles.pp} style={{ fontWeight: "bold" }}>
            <i>{MasterJobSpan1}</i>
          </p>
          <p className={styles.pp}>{JobBot1}</p>
          <p className={styles.pp}>{JobBot2}</p>
          <p className={styles.pp}>{JobBot5}</p>
          <h2 className={styles.pHead}>{JobHead2}</h2>
          <p className={styles.pp}>{JobBot3}</p>
          <p className={styles.pp}>{JobBot4}</p>
          <p className={styles.pp}>{JobBot6}</p>
          <h2 className={styles.pHead}>{JobHead3}</h2>
          <p className={styles.pp}>{JobBot7}</p>
          <h2 className={styles.pHead}>{JobHead4}</h2>
          <p className={styles.pp}>{JobBot8}</p>
          <h2 className={styles.pHead}>{JobHead5}</h2>
          <p className={styles.pp}>{JobBot9}</p>
          <p className={styles.pp}>{JobBot10}</p>
          <h2 className={styles.pHead}>{JobHead6}</h2>
          <p className={styles.pp}>{JobBot11}</p>

          {hydraListJob ? (
            <ul className={styles.pp}>
              <li>{Joblist1}</li>
              <li>{Joblist2}</li>
              <li>{Joblist3}</li>
              <li>{Joblist4}</li>
              <li>{Joblist5}</li>
              <li>{Joblist6}</li>
            </ul>
          ) : null}
          {joblist ? (
            <>
              <ul className={styles.pp}>
                <li>{Joblist1}</li>
                <li>{Joblist2}</li>
                <li>{Joblist3}</li>
                <li>{Joblist4}</li>
                <li>{Joblist5}</li>
                <li>{Joblist6}</li>
                <li>{Joblist7}</li>
                <li>{Joblist8}</li>
                <li>{Joblist9}</li>
                <li>{Joblist10}</li>
                <li>{Joblist11}</li>
                <li>{Joblist12}</li>
                <li>{Joblist13}</li>
              </ul>
              <p className={styles.pp}> {JobBot18}</p>
            </>
          ) : (
            ""
          )}
          <p className={styles.pp}> {JobBot001}</p>
          <p className={styles.pp}> {JobBot002}</p>

          {showData && (
            <>
              <p className={styles.pp}> {JobBot19}</p>

              <h4 style={{ fontSize: "20px", marginBottom: "20px" }}>
                {" "}
                {JobHead19}
              </h4>
              <p className={styles.pp}>{JobBot50} </p>
              <p className={styles.pp}>{JobBot35} </p>
              <p className={styles.pp}>{JobBot20} </p>
              <p className={styles.pp}>{JobBotmaster20} </p>
              <p className={styles.pp}>{JobBot003} </p>
              <p className={styles.pp}>{JobBot004} </p>

              <b>
                <i>{JobBot39}</i>
              </b>
              <ul className={styles.pp}>
                <li>{Joblist14}</li>
                <li>{Joblist15}</li>
                <li>{Joblist16}</li>
                <li>{Joblist17}</li>
              </ul>
              <p className={styles.pp}>{JobBotMasterBot4}</p>
              {/* <p className={styles.pp}>{JobBotMasterBot5}</p> */}
              <p className={styles.pp}>{JobBot40}</p>
              <p className={styles.pp} style={{ margin: "20px" }}>
                {Jobspan}
              </p>
              <h4 style={{ fontSize: "20px", marginBottom: "20px" }}>
                {" "}
                {JobHead21}
              </h4>
              <p className={styles.pp}>{JobBot41}</p>

              <h4 style={{ fontSize: "20px", marginBottom: "20px" }}>
                {" "}
                {JobHead30}
              </h4>
              <p className={styles.pp}>{JobBot21}</p>
              <h4 style={{ fontSize: "20px", marginBottom: "20px" }}>
                {" "}
                {JobHeadAustin01}
              </h4>
              <p className={styles.pp}>{JobBot22}</p>
              <p className={styles.pp}>{JobBot60}</p>
              <h4 style={{ fontSize: "20px", marginBottom: "20px" }}>
                {" "}
                {JobHead23}
              </h4>

              <p className={styles.pp}>{JobBot30}</p>
              <p className={styles.pp}> </p>
              <p className={styles.pp}>{JobBot34} </p>
              <b>
                {" "}
                <h4 style={{ fontSize: "20px", marginBottom: "20px" }}>
                  {" "}
                  {JobHeadIndia01}
                </h4>
                <i>{JobBot23}</i>
              </b>

              {usaonly ? (
                <ul>
                  <li>{Joblist50}</li>
                  <li>{Joblist51}</li>
                  <li>{Joblist52}</li>
                  <li>{Joblist53}</li>
                  <li>{Joblist54}</li>
                </ul>
              ) : (
                ""
              )}
              <h4 style={{ fontSize: "20px" }}>{JobHead001}</h4>

              <p className={styles.pp}>{JobBotMasterBot5}</p>
              <p className={styles.pp}>{JobBotMasterBot6}</p>

              <p className={styles.pp}>{JobBot007}</p>
              <p className={styles.pp}>{JobBot005}</p>
              <p className={styles.pp}>{JobBot006}</p>

              <br />
              <h4 style={{ fontSize: "20px" }}>{JobHead22}</h4>
              <p className={styles.pp}>{JobBot37} </p>
              <p className={styles.pp}>{JobBot24} </p>

              <p className={styles.pp}>{JobBot36}</p>
              {hideDSonly ? (
                <></>
              ) : (
                <>
                  <ul className={styles.pp}>
                    <li>{Joblist23}</li>
                    <li>{Joblist24}</li>
                    <li>{Joblist25}</li>
                    <li>{Joblist26}</li>
                    <li>{Joblist27}</li>
                    <li>{Joblist28}</li>
                    <li>{Joblist29}</li>
                    <li>{Joblist30}</li>
                  </ul>
                </>
              )}

              <p className={styles.pp}>{JobBot25}</p>
              <p className={styles.pp}>{JobBot26}</p>

              <p className={styles.pp}>
                <i>{JobSpan1}</i>
              </p>
              <p className={styles.pp}>{JobBot27}</p>
              <p className={styles.pp}>{JobBot28}</p>

              <h4 style={{ fontSize: "20px" }}>{JobHead10}</h4>
              <p className={styles.pp}>{JobBot29}</p>
              <i>
                <p className={styles.pp}>{JobBot31}</p>
              </i>
              {onlyDhaka ? (
                <>
                  {" "}
                  <ul>
                    <li>{ListJob1}</li>
                    <li>{ListJob2}</li>
                    <li>{ListJob3}</li>
                    <li>{ListJob4}</li>
                    <li>{ListJob5}</li>
                    <li>{ListJob6}</li>
                    <li>{ListJob7}</li>
                    <li>{ListJob8}</li>
                    <li>{ListJob9}</li>
                    <li>{ListJob10}</li>
                    <p>{ListJobBot1}</p>
                  </ul>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
      <div id="Projects">
        <div className={styles.CitiesRightSpan}>
          <span>Know Our Projects</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <h2 className={styles.pHead}>{ProjectsHead1}</h2>
          <p className={styles.pp}>{ProjectsBot1}</p>
          <h2 className={styles.pHead}>{ProjectsHead2}</h2>
          <p className={styles.pp}>{ProjectsBot3}</p>
          <p className={styles.pp}>{ProjectsBot4}</p>
          <p className={styles.pp}>{ProjectsBot5}</p>
          <p className={styles.pp}>{ProjectsBot6}</p>
          <p className={styles.pp}>{ProjectsBot7}</p>
          <p className={styles.pp}>{ProjectsBot2}</p>

          <h2 className={styles.pHead}>{ProjectsHead3}</h2>
          <p className={styles.pp}>{ProjectsBot31}</p>
          <p className={styles.pp}>{ProjectsBot32}</p>
        </div>
        <div className={styles.Projects}>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <Image
                  width={90}
                  height={50}
                  loading="lazy"
                  src={src1}
                  alt={alt2}
                />
                <p className={styles.ppp}>{ProjectsH1}</p>
              </div>
              <p className={styles.pp}>{Projectsp1}</p>
            </div>
          </div>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <Image
                  width={90}
                  height={50}
                  loading="lazy"
                  src={src2}
                  alt={alt3}
                />

                <p className={styles.ppp}>{ProjectsH2}</p>
              </div>
              <p className={styles.pp}>{Projectsp2}</p>
            </div>
          </div>
        </div>
        <div className={styles.Projects} style={{ marginBottom: "20px" }}>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <Image
                  width={90}
                  height={50}
                  loading="lazy"
                  src={src3}
                  alt={alt4}
                />
                <p className={styles.ppp}>{ProjectsH3}</p>
              </div>
              <p className={styles.pp}>{Projectsp3}</p>
            </div>
          </div>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <Image
                  width={90}
                  height={50}
                  loading="lazy"
                  src={src4}
                  alt={alt5}
                />
                <p className={styles.ppp}>{ProjectsH4}</p>
              </div>
              <p className={styles.pp}>{Projectsp4}</p>
            </div>
          </div>
        </div>
        <div className={styles.Button}>
          {fullStackCity ? (
            <>
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Real-time+Projects+%26+Use+cases.pdf"
                target="_blank"
              >
                <Button className={styles.btn} text="View All Projects" />
              </a>
            </>
          ) : (
            <>
              {" "}
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
                target="_blank"
              >
                <Button className={styles.btn} text="View All Projects" />
              </a>
            </>
          )}
        </div>
      </div>
      <div id="Alumni">
        <div className={styles.CitiesRightSpan}>
          <span>Hear From Our Alumni</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <p className={styles.pp}>{AlumniBot1}</p>
          <p className={styles.pHead}>{AlumniHead1}</p>
        </div>
        <div className={styles.Alumni}>
          <div className={styles.AlumniBot}>
            <Image
              width={100}
              height={100}
              loading="lazy"
              src={Asrc1}
              alt="alumni"
            />
            <p className={styles.ppa}>{AlumniH1}</p>
            <p className={styles.pp}>{Alumnip1}</p>
          </div>
          <div className={styles.AlumniBot}>
            <Image
              width={100}
              height={100}
              loading="lazy"
              src={Asrc2}
              alt="alumni"
            />
            <p className={styles.ppa}>{AlumniH2}</p>
            <p className={styles.pp}>{Alumnip2}</p>
          </div>
        </div>
        <div className={styles.Alumni1}>
          <div className={styles.AlumniBot}>
            <Image
              width={100}
              height={100}
              loading="lazy"
              src={Asrc3}
              alt="alumni"
            />
            <p className={styles.ppa}>{AlumniH3}</p>
            <p className={styles.pp}>{Alumnip3}</p>
          </div>
          <div className={styles.AlumniBot}>
            <Image
              width={100}
              height={100}
              loading="lazy"
              src={Asrc4}
              alt="alumni"
            />
            <p className={styles.ppa}>{AlumniH4}</p>
            <p className={styles.pp}>{Alumnip4}</p>
          </div>
        </div>
        <div className={styles.Button}>
          {fullStackCity ? (
            <>
              <a
                href="https://www.google.com/search?q=learnbay&rlz=1C1VDKB_enIN998IN998&tbm=lcl&ei=uUDyYunBIoObz7sPzvu7wAQ&oq=learnbay&gs_l=psy-ab.3...0.0.0.6647.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.vlnVRtRM_mw#lrd=0x3bae13b203864921:0xcd2b3d47edc34b69,1,,,&rlfi=hd:;si:14783977580914756457,l,CghsZWFybmJheUj0z4qEu66AgAhaFBAAGAAiCGxlYXJuYmF5KgQIAhAAkgEbc29mdHdhcmVfdHJhaW5pbmdfaW5zdGl0dXRl;mv:[[12.9145896,77.66070289999999],[12.8624165,77.6400574]]"
                target="_blank"
              >
                <Button className={styles.btn} text="View All Reviews" />
              </a>
            </>
          ) : (
            <>
              {" "}
              <a href="/reviews" target="_blank">
                <Button className={styles.btn} text="View All Reviews" />
              </a>
            </>
          )}
        </div>
      </div>
      <div id="FAQ">
        <div className={styles.CitiesRightSpan}>
          <span>Frequently Asked Questions</span>
        </div>
      </div>
    </section>
  );
};

export default CitiesRight;
