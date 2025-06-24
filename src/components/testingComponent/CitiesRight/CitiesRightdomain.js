import { BsClock } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import Button from "../../Global/Button/Button";
import styles from "./CitiesRight.module.css";
import Image from "next/image";

const CitiesRightCopy = ({
  ProgramHead1,
  ProgramHead2,
  ProgramHead3,
  ProgramHead4,
  ProgramHead5,
  ProgramHead6,
  ProgramHead8,
  ProgramBot6,
  ProgramHead7,
  ProgramBot8,
  ProgramBot9,
  ProgramBot7,
  ProgramBot10,
  ProgramBot11,
  ProgramBot12,
  ProgramBot13,
  ProgramBot14,
  ProgramBot15,
  ProgramBot16,
  ProgramBot1,
  ProgramBot2,
  ProgramBot3,
  ProgramBot31,
  ProgramBot32,
  ProgramBot4,
  ProgramBot5,
  CertificationHead1,
  CertificationBot1,
  CertificationBot2,
  CertificationBot3,
  src,
  syllabussrc,
  ModuleHead1,
  ModuleHead2,
  ModuleHead3,
  ModuleHead4,
  ModuleBot1,
  ModuleBot2,
  ModuleBot3,
  ModuleBot4,
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
  JobHead1,
  JobBot1,
  JobBot2,
  JobBot8,
  JobBot9,
  JobHead2,
  JobHead40,
  JobHead5,
  JobHead6,
  JobBot16,
  JobBot3,
  JobHead3,
  JobHead4,
  JobBot4,
  JobBot5,
  JobBot6,
  JobBot7,
  JobBot11,
  JobBot10,
  JobBot12,
  JobBot13,
  JobBot14,
  JobList1,
  JobList2,
  JobList3,
  JobList4,
  JobList5,
  JobList6,
  JobList7,
  ProjectsBot1,
  ProjectsBot2,
  ProjectsBot3,
  ProjectsBot4,
  ProjectsHead1,
  ProjectsHead2,
  AlumniBot1,
  src1,
  src2,
  src3,
  src4,
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
  alt1,
  alt2,
  alt3,
  alt4,
  alt5,
  alt6,
  alt7,
  alt8,
  alt9,
  cityTextDAbangalore,
  cityTextDAhyderabad,
  src22,
  src33,
  cityTextDAPune,
  cityTextJDAPune,
  bAnalystAbout,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
  list8,
  list9,
  list10,
  list11,
  list12,
  list13,

  list14,
  list15,
  list16,
  list17,
  list18,
  list19,
  list20,
  list21,
  list22,
  list23,
  list24,
  list25,
  list26,
  ProgramBot17,
  ProgramBot18,
  ProgramBot19,
  ProgramBot20,
  ProgramBot22,
  ProgramBot21,
  ProgramBot23,
  ProgramBot24,
  ProgramSpan1,
  ProgramSpan2,
  listJob1,
  listJob2,
  listJob3,
  listJob4,
  listJob5,
  listJob6,
  listJob7,
  listJob8,
  listJob9,
  listJob10,
  listJob11,
  listJob12,
  listJob13,
  listJob15,
  listJob16,

  listJob17,
  listJob18,
  listJob19,
  listJob20,

  listJob21,
  JobBot17,
  listJob14,
  listJob22,
  listJob23,
  listJob24,
  listJob25,
  listJob26,
  listJob27,
  listJob28,
  listJob29,
  listJob30,
  listJob31,
  listJob32,
  listJob33,
  listJob34,
  listJob35,
  listJob36,
  JobHead7,
  JobBot18,
  JobBot20,
  JobBot15,
  listJob37,
  listJob38,
  listJob39,
  listJob40,
  listJob41,
  listJob42,
  listJob43,
  listJob44,
  listJob45,
  listJob46,
  JobBot19,
  DAnalyst,
  list27,
  list30,
  list31,
  ProgramBot30,
  ProgramSpan4,
  JobHead21,
  JobBot41,
  JobBot42,
  JobBot43,
  JobBot44,
  JobBot45,
  JobBot46,
  JobBot47,
  JobBot48,
  JobBot49,
  JobBot50,
  JobList8,
  JobList9,
  JobList10,
  JobBot21,
  JobBot22,
  JobBot23,
  JobBotA,
  JobBotB,
  JobBotC,
  JobBotD,
  JobList11,
  JobBot51,
  ProjectsBot5,
  CertificationBot4,
  cityTextCloudBangalore,
  cityTextDevopsBangalore,
  cityTextCloudPune,
  ulModule,
}) => {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    marginTop: "20px",
  };

  const thStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "center",
  };

  const headerRowStyle = {
    backgroundColor: "#f2f2f2",
  };
  return (
    <section className={styles.CitiesRightHead}>
      <div id="Program">
        <div className={styles.CitiesRightSpan}>
          <span>About The Program</span>
        </div>
        {}
        {DAnalyst ? (
          <>
            <div style={{ marginBottom: "40px" }}>
              <p className={styles.pp}>{ProgramBot1}</p>
              <p className={styles.pp}>{ProgramBot2}</p>
              <p className={styles.pp}>{ProgramBot3}</p>
              <p className={styles.pp}>{ProgramBot4}</p>
              <p className={styles.pp}>{ProgramBot5}</p>
              <p className={styles.pp}>{ProgramBot6}</p>
              <h3 className={styles.pHead}>{ProgramHead1}</h3>
              <p className={styles.pp}>{ProgramBot7}</p>

              <ul>
                <li>{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
                <li>{list4}</li>
                <li>{list5}</li>
                <li>{list27}</li>
              </ul>
              <h3 className={styles.pHead}>{ProgramHead2}</h3>
              <p className={styles.pp}>{ProgramBot8}</p>
              <p className={styles.pp}>{ProgramBot9}</p>

              <table style={tableStyle}>
                <thead>
                  <tr style={headerRowStyle}>
                    <th style={thStyle}>Data Analysts</th>
                    <th style={thStyle}>Data Scientists</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>
                      They examine the available data sets to pull out insights
                    </td>
                    <td style={tdStyle}>
                      They are liable for exploring data sets and models to
                      anticipate predictions
                    </td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>
                      These experts are mostly into data sourcing, cleaning,
                      analysis, imaging, and reporting.
                    </td>
                    <td style={tdStyle}>
                      These experts are majorly involved in constructing models,
                      creating algorithms, and designing advanced analytics.
                    </td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>
                      They mostly use tools like Excel, PowerBI, Tableau, SQL,
                      etc.
                    </td>
                    <td style={tdStyle}>
                      They mostly use tools such as Spark, TensorFlow, Hadoop,
                      R, Python, etc.
                    </td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>
                      Their typical task of the day includes generating
                      dashboards and creating reports.
                    </td>
                    <td style={tdStyle}>
                      Their typical task of the day includes building machine
                      learning models and statistical analysis.
                    </td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>
                      For them, it is not crucial to have ample coding skills.
                      Some knowledge of basic codings with Python, SQL, VBA, and
                      Excel is more than sufficient.
                    </td>
                    <td style={tdStyle}>
                      These experts are well trained with advanced Python, R,
                      and Java coding levels.
                    </td>
                  </tr>

                  <tr>
                    <td style={tdStyle}>
                      A basic grip of statistics is enough for their exercises.
                    </td>
                    <td style={tdStyle}>
                      The data scientists should know advanced statistics and
                      machine learning.
                    </td>
                  </tr>

                  <tr>
                    <td style={tdStyle}>
                      Give usable insights for business actions, improving
                      processes, etc.
                    </td>
                    <td style={tdStyle}>
                      These persons work towards creating ML systems, automated
                      predictive models, advanced data science models, etc.
                    </td>
                  </tr>

                  <tr>
                    <td style={tdStyle}>
                      Data analysts get roles in BFSI, IT, and special analytics
                      roles.
                    </td>
                    <td style={tdStyle}>Every industry needs them.</td>
                  </tr>
                </tbody>
              </table>

              <h3 className={styles.pHead}>{ProgramHead3}</h3>
              <p className={styles.pp}>{ProgramBot10}</p>
              <table style={tableStyle}>
                <thead>
                  <tr style={headerRowStyle}>
                    <th style={thStyle}>Data Analysts</th>
                    <th style={thStyle}>Business Analysts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>
                      The primary role of data analysts includes data
                      collection, data analysis, and data interpretation.
                    </td>
                    <td style={tdStyle}>
                      The primary role of business analysts includes gripping
                      business requirements and suggesting solutions
                      accordingly.
                    </td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>
                      Their key responsibilities are examining datasets, data
                      cleaning, preprocessing, generating data visualization,
                      and reporting trends & insights.
                    </td>
                    <td style={tdStyle}>
                      Grant business needs, analyze processes, inspect systems,
                      propose & give solutions, and help investors.
                    </td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>
                      A data analyst uses SQL, R, Python, Excel, Power BI, and
                      Tableau tools.
                    </td>
                    <td style={tdStyle}>
                      A business analyst uses tools like Microsoft Visio, Jira,
                      Confluence, Excel, Tableau, and Power BI.
                    </td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>
                      They mostly function with technical and data teams.
                    </td>
                    <td style={tdStyle}>
                      They mostly function with the technical team, owners, and
                      management.
                    </td>
                  </tr>

                  <tr>
                    <td style={tdStyle}>
                      A data analyst delivers dashboards, data reports, and
                      analytical shells.
                    </td>
                    <td style={tdStyle}>
                      A business analyst delivers solution proposals, process
                      flows, and business needs.
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 className={styles.pHead}>{ProgramHead4}</h3>

              <ul
                style={{
                  listStyleType: "lower-alpha",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <li>{list6}</li>
                <li> {list7}</li>
                <li>{list8}</li>
                <li> {list9}</li>
                <li>{list10}</li>
                <li> {list11}</li>
                <li> {list12}</li>
                <li> {list30}</li>
              </ul>
              <p className={styles.pp}>{ProgramBot30}</p>
              <h3 className={styles.pHead}>{ProgramHead5}</h3>

              <p className={styles.pp}>
                <i>{ProgramSpan1}</i>
              </p>

              <p className={styles.pp}>{ProgramBot31}</p>
              <p className={styles.pp}>{ProgramBot32}</p>
              <i>{ProgramSpan4}</i>
              <ul
                style={{
                  listStyleType: "decimal",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <li>{list13}</li>
                <li>{list14}</li>
                <li>{list15}</li>
                <li>{list16}</li>
              </ul>

              <p className={styles.pp}>
                <i>{ProgramSpan2}</i>
              </p>
              <i>
                {" "}
                <b>
                  <li>{list17}</li>
                </b>
              </i>

              <i>
                {" "}
                <p className={styles.pp}>{ProgramBot14}</p>
              </i>

              <i>
                {" "}
                <b>
                  <li>{list18}</li>
                </b>
              </i>
              <i>
                {" "}
                <p className={styles.pp}>{ProgramBot15}</p>
              </i>

              <i>
                {" "}
                <b>
                  <li>{list19}</li>
                </b>
              </i>
              <i>
                {" "}
                <p className={styles.pp}>{ProgramBot16}</p>
              </i>

              <i>
                {" "}
                <b>
                  <li>{list20}</li>
                </b>
              </i>
              <i>
                {" "}
                <p className={styles.pp}>{ProgramBot17}</p>
              </i>

              <i>
                {" "}
                <b>
                  <li>{list21}</li>
                </b>
              </i>
              <i>
                {" "}
                <p className={styles.pp}>{ProgramBot18}</p>
              </i>

              <i>
                {" "}
                <p className={styles.pp}>{ProgramBot19}</p>
              </i>
              <p className={styles.pp}>{ProgramBot20}</p>
              <p className={styles.pp}>{ProgramBot21}</p>
              <p className={styles.pp}>{ProgramBot22}</p>
              <p className={styles.pp}>{ProgramBot23}</p>
            </div>
          </>
        ) : (
          <>
            {" "}
            {bAnalystAbout ? (
              <div style={{ marginBottom: "40px" }}>
                <p className={styles.pp}>{ProgramBot1}</p>
                <p className={styles.pp}>{ProgramBot2}</p>
                <p className={styles.pp}>{ProgramBot3}</p>
                <p className={styles.pp}>{ProgramBot4}</p>
                <p className={styles.pp}>{ProgramBot5}</p>
                <h3 className={styles.pHead}>{ProgramHead1}</h3>
                <p className={styles.pp}>{ProgramBot6}</p>

                <ul>
                  <li>{list1}</li>
                  <li>{list2}</li>
                  <li>{list3}</li>
                  <li>{list4}</li>
                  <li>{list5}</li>
                </ul>
                <h3 className={styles.pHead}>{ProgramHead2}</h3>
                <p className={styles.pp}>{ProgramBot7}</p>

                <table style={tableStyle}>
                  <thead>
                    <tr style={headerRowStyle}>
                      <th style={thStyle}>Business Analyst</th>
                      <th style={thStyle}>Data Analyst</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>
                        Works with stakeholders and business leaders to suggest
                        work upgrades.
                      </td>
                      <td style={tdStyle}>
                        Cooperate with teams to find practical business answers
                        for the firms.
                      </td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>
                        Calculate ongoing functions and IT structure to get a
                        complete overview of the entire functioning of the
                        company.
                      </td>
                      <td style={tdStyle}>
                        Recognizing and gathering business data for analysis of
                        the company’s business function.
                      </td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>
                        Introduces business findings obtained via analytics to
                        the CEOs and senior pros of the company.
                      </td>
                      <td style={tdStyle}>
                        They are liable for noticing the gaps in the business.
                        It also defines the business issues or needs of the
                        company.
                      </td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>
                        Suggest business ideas to management to improve the
                        firm's monetary gain.
                      </td>
                      <td style={tdStyle}>
                        Inspect data to find patterns and trends where firms
                        face losses or loose ends from the profit lookout.
                      </td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>
                        Produces attractive infographics of their findings
                        regarding future predictions, current cases, and info
                        from past data.
                      </td>
                      <td style={tdStyle}>
                        Their primary role is to polish and prepare data for
                        analysis. It helps business analysts gain useful
                        insights from it.
                      </td>
                    </tr>

                    <tr>
                      <td style={tdStyle}>
                        Produces financial models to uphold business moves
                      </td>
                      <td style={tdStyle}>
                        Data Presentation depicting the real lagging points of
                        the business
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3 className={styles.pHead}>{ProgramHead3}</h3>
                <p className={styles.pp}>{ProgramBot8}</p>
                <table style={tableStyle}>
                  <thead>
                    <tr style={headerRowStyle}>
                      <th style={thStyle}>Data Scientists</th>
                      <th style={thStyle}>Business Analysts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>
                        They learn concepts like statistics, algorithms, and
                        technology.
                      </td>
                      <td style={tdStyle}>
                        These experts engage more in statistical analysis of
                        business data sets to gain insights.
                      </td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>
                        It uses both structured and non-structured data sets.
                      </td>
                      <td style={tdStyle}>
                        It uses structured data sets only.
                      </td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>
                        Working as a data scientist needs experts to be
                        well-versed in coding.
                      </td>
                      <td style={tdStyle}>
                        Working as a business analyst needs experts to be
                        well-versed in statistical concepts.
                      </td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>
                        The crowd of data scientists is present mainly in
                        manufacturing, machine learning, e-commerce, finance,
                        etc.
                      </td>
                      <td style={tdStyle}>
                        The crowd of business analysts is present mainly in
                        healthcare, supply chain, retail, etc.
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3 className={styles.pHead}>{ProgramHead4}</h3>

                <p className={styles.pp}>{ProgramBot9}</p>
                <ul
                  style={{
                    listStyleType: "lower-alpha",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <li>{list6}</li>
                  <li> {list7}</li>
                  <li>{list8}</li>
                  <li> {list9}</li>
                  <li>{list10}</li>
                  <li> {list11}</li>
                  <li> {list12}</li>
                </ul>
                <p className={styles.pp}>{ProgramBot10}</p>
                <h3 className={styles.pHead}>{ProgramHead5}</h3>
                <p className={styles.pp}>{ProgramBot11}</p>
                <p className={styles.pp}>{ProgramBot12}</p>
                <p className={styles.pp}>{ProgramBot13}</p>
                <p className={styles.pp}>
                  <i>{ProgramSpan1}</i>
                </p>
                <ul
                  style={{
                    listStyleType: "decimal",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <li>{list13}</li>
                  <li>{list14}</li>
                  <li>{list15}</li>
                  <li>{list16}</li>
                </ul>

                <p className={styles.pp}>
                  <i>{ProgramSpan2}</i>
                </p>
                <i>
                  {" "}
                  <b>
                    <li>{list17}</li>
                  </b>
                </i>

                <i>
                  {" "}
                  <p className={styles.pp}>{ProgramBot14}</p>
                </i>

                <i>
                  {" "}
                  <b>
                    <li>{list18}</li>
                  </b>
                </i>
                <i>
                  {" "}
                  <p className={styles.pp}>{ProgramBot15}</p>
                </i>

                <i>
                  {" "}
                  <b>
                    <li>{list19}</li>
                  </b>
                </i>
                <i>
                  {" "}
                  <p className={styles.pp}>{ProgramBot16}</p>
                </i>

                <i>
                  {" "}
                  <b>
                    <li>{list20}</li>
                  </b>
                </i>
                <i>
                  {" "}
                  <p className={styles.pp}>{ProgramBot17}</p>
                </i>

                <i>
                  {" "}
                  <b>
                    <li>{list21}</li>
                  </b>
                </i>
                <i>
                  {" "}
                  <p className={styles.pp}>{ProgramBot18}</p>
                </i>

                <i>
                  {" "}
                  <b>
                    <li>{list22}</li>
                  </b>
                </i>
                <i>
                  {" "}
                  <p className={styles.pp}>{ProgramBot19}</p>
                </i>
                <p className={styles.pp}>{ProgramBot20}</p>
                <p className={styles.pp}>{ProgramBot21}</p>
                <p className={styles.pp}>{ProgramBot22}</p>
              </div>
            ) : (
              <>
                {" "}
                {cityTextDAhyderabad ? (
                  <div className={styles.CitiesRightInner}>
                    <p>
                      Learnbay's <b>data analytics course in Hyderabad</b> might
                      be exactly what you need if you wish to pursue a career as
                      a data analyst.{" "}
                      <b>
                        As the best data analytics training institute in
                        Hyderabad
                      </b>
                      , Learnbay offers a wide range of IBM certification
                      courses. Our <b>Data Analytics training</b> prepares you
                      for complex analytical problems in different industries.
                    </p>

                    <p>
                      Learnbay aims to provide specialized{" "}
                      <b>online data analytics training</b> that gives learners
                      the knowledge and skills necessary to succeed in their
                      careers as data analysts. The institute handles everything
                      in the data analytics course, from hands-on training
                      through live data analytics projects to interview
                      preparation for top-tier MNCs. Renowned industry
                      professionals lead our one-on-one doubt-clearing sessions.
                      Learnbay delivers immersive <b>data analytics training</b>{" "}
                      that sets it apart as a one-stop resource for anyone
                      looking to become a professional job-ready data analyst.
                    </p>

                    <p>
                      One of the key features that Learnbay offers is its
                      flexibility. Our <b>online Data Analytics training</b> is
                      designed to match the industry's ever-changing needs. We
                      also offer job placement support suited for both
                      experienced working professionals and early career
                      professionals in any sector. The course's hands-on
                      learning process incorporates interactive sessions with
                      renowned experts. The industry projects provide in-depth
                      coverage of data analysis, data visualization, and
                      regression techniques.
                    </p>

                    <p>
                      By enrolling in Learnbay's{" "}
                      <b>data analytics course in Hyderabad</b>, you'll
                      thoroughly understand the fundamental ideas and real-world
                      uses of data analytics. Throughout the course, you will
                      have access to a wealth of resources and receive
                      individualized support from subject matter experts in the
                      field, making it simpler for you to accomplish your
                      professional objectives. Whether you want to work for a
                      multinational corporation or start your own data analytics
                      venture, this course will prepare you for success. So why
                      wait? Sign up for our <b>data analytics course</b> today
                      and embark on a journey toward a rewarding career in data
                      analytics.
                    </p>

                    <p>
                      Our <b>data analytics course in Hyderabad</b> also offers
                      learners the opportunity to gain practical experience by
                      working on real-world data analytics projects. With the
                      help of these projects, learners learn to apply their
                      knowledge and skills to solve complex problems businesses
                      and organizations face. It gives them a competitive edge
                      in the job market.{" "}
                    </p>

                    <p>
                      Furthermore, Learnbay has a strong industry connection. It
                      ensures that learners are exposed to the latest trends and
                      practices in data analytics.{" "}
                      <b>Data analytics training</b> makes them more valuable to
                      potential employers. With its flexible online format, job
                      placement support, and practical training, our{" "}
                      <b>data analytics course in Hyderabad</b> is the ideal
                      choice for anyone looking to build a successful career in
                      data analytics.
                    </p>
                    <p>
                      We cover the <b>data analytics course</b> using various
                      modules, some of which are mentioned below:
                    </p>

                    <ul>
                      <li>Cohort Orientation</li>
                      <li>Special Programming Classes</li>
                      <li>Basic Python Programming</li>
                      <li>Special Python Programming </li>
                      <li>Statistics</li>
                      <li>Machine Learning </li>
                      <li>SQL</li>
                      <li>Tableau</li>
                      <li>Deep Learning</li>
                      <li>Essentials</li>
                    </ul>

                    <p>
                      The course duration of the online Data Analytics training
                      in Hyderabad is 180+ hours. Our trained professionals will
                      tutor you for almost 9 months.{" "}
                    </p>
                    <p>The structured course consists of 4 terms. </p>

                    <b>Module 0: Preparatory Session </b>

                    <p>
                      In this module, you will get a brief introduction to
                      data-related tools. You will also learn about particular
                      real-time projects and capstone projects. Data has a lot
                      of impact on career opportunities and plays a vital role
                      in the success of a business. Some other topics that
                      learners will learn about are the significance of data in
                      decision-making, the scope of data in research and
                      development, the fundamentals of programming and
                      statistics, including an introduction to Linear Algebra.{" "}
                    </p>

                    <h2>Term 1: Python Programming</h2>
                    <b>Module 1: Basic and Advance Python</b>
                    <p>
                      In module 1, our experts will teach you the programming
                      basics and environment setup along with python data types
                      and functions and modules. Learners will also learn
                      briefly about File I/O And Exceptional Handling and
                      Regular Expression. An introduction to NumPy, Array
                      Creation, Printing Arrays, introduction to Pandas, and
                      indexing data frames are a few other topics that will be
                      covered in this module.{" "}
                    </p>

                    <h2>Term 2: Statistics and Machine Learning </h2>
                    <b>Module 1: Statistics </b>

                    <p>
                      The next lesson, vital for data science, focuses on
                      teaching fundamental and statistical ideas. After this
                      program, you will understand probability, inferential and
                      descriptive statistics, exploratory data analysis (EDA),
                      and data processing. You will also be able to complete
                      four practice assignments relating to statistics to enrich
                      your learning experience further. You can use your newly
                      learned information in these practical exercises,
                      promoting experiential learning.
                    </p>

                    <b>Module 2: Machine Learning </b>

                    <p>
                      This module gives you access to the most current
                      machine-learning methods and tools necessary for building
                      models and reaching wise conclusions. The advanced machine
                      learning techniques covered in this subject include
                      support vector machines, principal component analysis
                      (PCA), clustering, K-nearest neighbours (KNN) models, and
                      regression and classification models. (SVM).{" "}
                    </p>
                    <p>
                      Your instructor will walk you through each of these
                      methods, giving you in-depth explanations and examples
                      from the real world to help you understand. After
                      finishing this subject, you'll be prepared to use
                      cutting-edge machine-learning techniques to build solid
                      models and analyze complex data sets.{" "}
                    </p>

                    <h2>Term 3: Data Analytics Tools </h2>

                    <p>
                      <b>Module 1 - SQL</b>
                    </p>
                    <p>
                      <b>Module 2: PowerBI</b>
                    </p>
                    <p>
                      <b>Module 3: Big Data and Spark Analytics</b>
                    </p>
                    <p>
                      <b>Module 4: Time Series</b>
                    </p>

                    <h2>Term 4: Excel </h2>
                    <b>Module 1: Essentials</b>

                    <h2>
                      Data Analytics Certification Program in Hyderabad with
                      Placement Assistance
                    </h2>

                    <ul>
                      <li>
                        This course gives you 1.5 years of limitless access to
                        your learning materials and live class recordings
                      </li>
                      <li>
                        You can choose weekdays or weekends to take the course
                      </li>
                      <li>
                        Experts from MNCs and MAANG assist in online and offline
                        project sessions
                      </li>
                      <h3>
                        Highlights of Data Analytics Certification Program in
                        Hyderabad
                      </h3>
                      <li>180+ hours of live sessions </li>
                      <li>8+ real-time industrial projects</li>
                      <li>Live Project experience</li>
                      <li>97% average salary hike</li>
                    </ul>

                    <h2>
                      Why Should You Choose Learnbay’s Data Analytics Course in
                      Hyderabad?{" "}
                    </h2>
                    <p>
                      Learnbay offers the best data analytics online training.
                      Below mentioned are a few key reasons why you should
                      choose us.{" "}
                    </p>

                    <ol type="1">
                      <li>
                        <b>100% live interactive training:</b> The course
                        includes live interactive training sessions led by
                        experienced data analysts. This allows students to
                        interact in real-time with peers and instructors.
                      </li>

                      <li>
                        <b>Flexible scheduling:</b> It is a feature of
                        Learnbay's data analytics course that makes it simpler
                        for students to juggle their academic obligations with
                        their other commitments.
                      </li>

                      <li>
                        <b>Sessions guided by experienced data analysts:</b>{" "}
                        Learnbay's instructors are skilled data analysts with
                        years of experience working in the sector, providing
                        students with an insightful understanding of practical
                        data analytics techniques.
                      </li>

                      <li>
                        <b>One-year flexi membership:</b> It is included with
                        the course, enabling students to go at their own pace
                        and go over the course material whenever necessary.
                      </li>

                      <li>
                        <b>Choose your favourite batch and mentors:</b> Students
                        can pick their preferred batch and mentors to tailor
                        their learning experience.
                      </li>
                    </ol>

                    <h2>Data Analytics Trends in Hyderabad</h2>

                    <p>
                      The city of Hyderabad is quickly becoming a center for
                      data analytics, thanks to the establishment of numerous
                      businesses there. Making judgments based on data using
                      artificial intelligence and machine learning is one of
                      Hyderabad's notable data analytics trends. Businesses use
                      these technologies to analyze massive volumes of data
                      rapidly and correctly, giving them access to insightful
                      information about consumer behaviour, market trends, and
                      corporate operations.{" "}
                    </p>

                    <p>
                      The usage of cloud-based analytics solutions is another
                      trend that is becoming more and more popular in Hyderabad.
                      Businesses can now store and process massive volumes of
                      data on the cloud thanks to the development of cloud-based
                      analytics tools. It allows them to scale their operations
                      quickly while paying the least for infrastructure.
                    </p>

                    <p>
                      The use of data analytics in the healthcare industry is
                      another trend that is gaining popularity in Hyderabad.
                      Healthcare providers are now utilizing data analytics to
                      enhance patient outcomes and lower healthcare costs due to
                      the growing adoption of electronic health records and the
                      availability of vast patient data. Data analytics locates
                      high-risk people, predicts disease outbreaks, and creates
                      personalized treatment plans. In the upcoming years, the
                      use of data analytics in the healthcare industry is
                      anticipated to expand quickly, making Hyderabad a
                      desirable location for data analytics and healthcare
                      businesses.
                    </p>

                    <h2>Best Data Analytics Training Institute in Hyderabad</h2>
                    <p>
                      Learnbay is considered the{" "}
                      <b>best data analytics institute in Hyderabad</b>.
                      Learnbay has established a reputation for turning out
                      highly trained data professionals by emphasizing training
                      that applies to the business. The institute provides a
                      wide range of data analytics courses, including big data
                      analytics, artificial intelligence, machine learning, and
                      data science.{" "}
                    </p>

                    <p>
                      The programs are meant to give students a thorough
                      understanding of the sector’s various data analytics
                      technologies and methods. The Learnbay faculty comprises
                      skilled data experts with a proven track record of
                      achievement. Students work on actual data analytics
                      projects as part of the institute's innovative teaching
                      style, which gives them the hands-on experience they need
                      to thrive in the field. In general, Learnbay is a great
                      option for anyone in Hyderabad who wants to pursue a
                      career in data analytics.
                    </p>

                    <h2>Did You Know? </h2>

                    <p>
                      Data Analytics is a lucrative career option for people
                      interested in the profession because the{" "}
                      <b>average data analyst salary in Hyderabad</b> is INR 6
                      lakhs.
                    </p>

                    <p>
                      The <b>Data Analytics Course in Hyderabad</b> is gaining
                      momentum with the increasing demand for data analytics in
                      India. Hyderabad is quickly becoming its center, and local
                      companies realize the value of data-driven
                      decision-making. It's hardly surprising that Hyderabad is
                      seeing an increase in demand for qualified data analysts,
                      given that the amount of data produced globally is
                      expected to exceed 463 exabytes by 2025.
                    </p>

                    <p>
                      The demand for knowledgeable experts in the industry is
                      increasing as businesses in Hyderabad rely more heavily on
                      data analytics. Learnbay offers the{" "}
                      <b>best data analytics training in Hyderabad</b> to meet
                      the growing demand for skilled professionals.
                    </p>

                    <p>
                      Learnbay's <b>Data Analytics Course in Hyderabad</b> is a
                      great place to start if you're interested in a career in
                      data analytics. A course like this might give you the
                      information and abilities required to be successful in
                      this profitable career, given the city's growing demand
                      for data analytics professionals.
                    </p>

                    <p>
                      {" "}
                      Learnbay also provides offline project sessions for{" "}
                      <a
                        href="https://www.learnbay.co/machine-learning-course-training-in-hyderabad"
                        target="_blank"
                        style={{ color: "#2D9CD7", fontWeight: "600" }}
                      >
                        machine learning
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://www.learnbay.co/artificial-intelligence-ai-course-training-hyderabad"
                        target="_blank"
                        style={{ color: "#2D9CD7", fontWeight: "600" }}
                      >
                        artificial intelligence courses in Hyderabad
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {cityTextDAPune ? (
                  <div className={styles.CitiesRightInner}>
                    <h2 className={styles.pHead}>{ProgramHead1}</h2>
                    <p className={styles.pp}>{ProgramBot1}</p>
                    <p className={styles.pp}>{ProgramBot2}</p>
                    <p className={styles.pp}>{ProgramBot3}</p>
                    <p className={styles.pp}>{ProgramBot4}</p>
                    <p className={styles.pp}>{ProgramBot5}</p>
                    <p className={styles.pp}>{ProgramBot6}</p>
                    <p className={styles.pp}>{ProgramBot7}</p>
                    <p className={styles.pp}>{ProgramBot8}</p>
                    <p className={styles.pp}>{ProgramBot9}</p>
                  </div>
                ) : (
                  <div className={styles.CitiesRightInner}>
                    <h2 className={styles.pHead}>{ProgramHead1}</h2>
                    <p className={styles.pp}>{ProgramBot1}</p>
                    <p className={styles.pp}>{ProgramBot2}</p>
                    <p className={styles.pp}>{ProgramBot3}</p>
                    <p className={styles.pp}>{ProgramBot31}</p>
                    <p className={styles.pp}>{ProgramBot32}</p>
                    <p className={styles.pp}>{ProgramBot4}</p>
                    <p className={styles.pp}>{ProgramBot5}</p>
                    <p className={styles.pp}>{ProgramBot6}</p>
                    <p className={styles.pp}>{ProgramBot7}</p>
                    <p className={styles.pp}>{ProgramBot8}</p>
                    <p className={styles.pp}>{ProgramBot9}</p>
                    <p className={styles.pp}>{ProgramBot10}</p>
                    <p className={styles.pp}>{ProgramBot11}</p>
                    <p className={styles.pp}>{ProgramBot12}</p>
                    <p className={styles.pp}>{ProgramBot13}</p>
                    <p className={styles.pp}>{ProgramBot14}</p>
                    <p className={styles.pp}>{ProgramBot15}</p>
                    <p className={styles.pp}>{ProgramBot16}</p>
                    <p className={styles.pp}>{ProgramBot17}</p>
                    <p className={styles.pp}>{ProgramBot18}</p>
                    <p className={styles.pp}>{ProgramBot19}</p>
                    <p className={styles.pp}>{ProgramBot20}</p>
                    <p className={styles.pp}>{ProgramBot21}</p>
                    <h2 className={styles.pHead}>{ProgramHead2}</h2>
                    <p className={styles.pp}>{ProgramBot22}</p>
                    <p className={styles.pp}>{ProgramBot23}</p>
                    {ulModule && (
                      <>
                        {cityTextDevopsBangalore && (
                          <ul style={{ marginLeft: "15px" }}>
                            {list10 && <li>{list10}</li>}
                            {list11 && <li>{list11}</li>}
                            {list12 && <li>{list12}</li>}
                            {list13 && <li>{list13}</li>}
                            {list14 && <li>{list14}</li>}
                            {list15 && <li>{list15}</li>}
                            {list16 && <li>{list16}</li>}
                            {list17 && <li>{list17}</li>}
                            {list18 && <li>{list18}</li>}
                            {list19 && <li>{list19}</li>}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                )}
                {cityTextCloudBangalore ? (
                  <div className={styles.CitiesRightInner}>
                    <h2 className={styles.pHead}>
                      About the Trending Cloud Computing Course in Bangalore [In
                      Alliance with IBM & Microsoft]
                    </h2>
                    <p className={styles.pp}>
                      The current 21st Century brings endless tech creations
                      into the limelight. Certainly, the use and demand for
                      data-driven operations keep increasing across global
                      companies. Looking forward to such changes, many startups
                      and MNCs from diverse sectors rethink hiring practices.
                      Thus, upskilling from an industry-driven{" "}
                      <b>cloud computing course in Bangalore</b> is useful for
                      techies.
                    </p>
                    <p className={styles.pp}>
                      According to industry reports, the cloud computing market
                      expects a 16.40% rise by 2029, leveraging diverse
                      industries with compelling gains. No wonder, the career
                      prospects in the cloud computing sector are on the verge
                      of excelling in the gains. Cloud computing skills are
                      presently ruling over the global tech sector for which the
                      demand for cloud experts keeps on growing.
                    </p>
                    <p className={styles.pp}>
                      Learnbay anticipates an evolved future for techies or
                      experts eager to modernize their careers in cloud
                      computing. Owing to the current tech trends, we present a
                      thoroughly designed{" "}
                      <b>cloud computing course in Bangalore</b>. The course
                      follows the expectations of top-notch tech MNCs. In
                      addition, mentorship from eminent experts guides learners
                      to refine their skill sets.
                    </p>
                    <p className={styles.pp}>
                      We believe in experiential learning as it helps learners
                      fortify their existing skills and use their efficacy in
                      solving real-world issues. Experts will enhance their
                      skills via 10+ real-time projects under the advice of
                      adept faculties. Our{" "}
                      <b>cloud computing institute in Bangalore</b> offers 24/7
                      training with live projects to help you ace the trending
                      roles and prove your skills.{" "}
                    </p>
                    <p className={styles.pp}>
                      Learnbay’s{" "}
                      <b>cloud computing certification in Bangalore</b> presents
                      its successful alliance with <b>IBM & Microsoft</b>. Here,
                      learners obtain course completion and project certificates
                      from IBM & Microsoft that validate their skills on a
                      global scale. It enriches career values with fortunate
                      offers and alluring hikes in dream roles.{" "}
                    </p>

                    <h2 className={styles.pHead}>
                      What are the career-oriented gains that our Cloud
                      computing certification in Bangalore offers?
                    </h2>

                    <p className={styles.pp}>
                      Cloud computing is trending across major IT/Non-IT sectors
                      paving the way for a seamless data-driven world. Owing to
                      these rising trends, many startups and MNCs prefer
                      remodeling their data centers and storage methods.
                      Meanwhile, the demand for cloud experts keeps increasing
                      to deliver cost-effective results. Thus, enrolment rates
                      for <b>cloud computing courses in Bangalore</b> increased.
                    </p>

                    <p className={styles.pp}>
                      Upskilling with Learnbay’s{" "}
                      <b>cloud computing institute in Bangalore</b> expands
                      career growth scopes and success metrics.{" "}
                      <b>Major offerings are –</b>
                    </p>

                    <ul style={{ marginLeft: "40px" }}>
                      <li>
                        Exclusively designed learning modules to crack leading
                        interviews
                      </li>
                      <li>Live mentorship from renowned experts </li>
                      <li>Hands-on learning with 10+ real-time projects </li>
                      <li>
                        Globally recognized certifications from IBM & Microsoft
                      </li>
                      <li>100% Job and Placement Support</li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
                {cityTextCloudPune ? (
                  <div className={styles.CitiesRightInner}>
                    <p className={styles.pp}>
                      As we dive deeper into the tech-driven age, cloud
                      computing proffers a glorifying turn for businesses and
                      techies. Indeed, the demand surge for cloud computing
                      experts is here and there. Most leading tech firms prefer
                      hiring techies with cloud mastery to offer seamless data
                      solutions. Hence, learning via the{" "}
                      <b>best cloud computing courses in Pune</b> has become
                      crucial for techies.
                    </p>
                    <p className={styles.pp}>
                      As per <b>Modor Intelligence reports</b>, the cloud
                      computing market expects a 16.40% rise by 2029. The rise
                      of leading-edge tools and trends calls for a massive shift
                      toward cloud-based solutions lifting business growth in
                      Pune. In the interim, local, national, and global search
                      for skilled cloud experts to bolster the digital sight.
                      Hence, upskilling from the{" "}
                      <b>best institute for cloud computing in Pune</b> has
                      become vital.
                    </p>
                    <p className={styles.pp}>
                      Today’s ever-evolving digital space inspires techies for
                      constant skill upgrades. Hence, demand for pursuing a{" "}
                      <b>cloud computing course in Pune</b> keeps growing. The
                      spurring tech creations call for reliable and secure
                      practices driving exciting gains. Hence, techies master
                      proven cloud-based tools to adapt to this rapidly altering
                      digital space.
                    </p>
                    <p className={styles.pp}>
                      Learnbay envisions a world of tech experts with cloud
                      mastery and the power to face cut-throat competition. Its
                      industry-driven{" "}
                      <b>Cloud Computing Certification Program</b> lures techies
                      to rethink their career paths. Learnbay aligns its career
                      rise visions with industries looking for tech experts in
                      diverse fields.
                    </p>
                    <p className={styles.pp}>
                      Our comprehensively curated course modules help techies
                      overcome their stagnancies and acquire proven skills to
                      conquer success. We pose as the{" "}
                      <b>best institute for cloud computing in Pune</b>{" "}
                      certifying you to rise beyond tech creations. Our course
                      modules are regularly revised as per the latest trends to
                      bridge the potential skill gaps.
                    </p>

                    <p className={styles.pp}>
                      We are the first choice of many techies for our fortunate{" "}
                      <b>cloud computing classes in Pune</b>. Mentorship from
                      eminent tech experts guides techies in forging
                      digital-friendly skills and thriving globally. Learning
                      via industry-paced modules equips techies with specialized
                      skill sets unleashing true growth potential.
                    </p>

                    <p className={styles.pp}>
                      Our modules consist of practical projects, exercises, and
                      case studies. Hands-on learning via real-time projects
                      helps techies gain insights into the actual execution of
                      cloud-based apps and solutions. Techies must keep up with
                      the latest cloud-driven growth to optimize their processes
                      and attain success.
                    </p>

                    <p className={styles.pp}>
                      Upskilling via the{" "}
                      <b>best cloud computing courses in Pune</b> unlocks
                      inspiring growth and success. We believe career assistance
                      services are crucial for a tech expert to dive deeper into
                      the actual world, refine skills, and grab exciting offers.
                      Hence, we bring you a 100% job and placement assistance
                      program with exciting gains. Our Career Services Pro
                      guides you now and then – from 1:1 mock interviews to
                      CV-making and LinkedIn profiling.
                    </p>

                    <p className={styles.pp}>
                      Learning is partially justified if your skills remain
                      underrated or invalid. Many techies join us regardless of{" "}
                      <b>cloud computing course in Pune fees</b> for valuable
                      credentials. Our industry alliance with IBM & Microsoft
                      escalates your career growth limits with alluring returns.
                      Techies can endorse their skills with{" "}
                      <b>IBM & Microsoft certifications</b> unlocking
                      global-level careers.
                    </p>

                    <h2 className={styles.pHead}>
                      What are the career-enriched perks Learnbay’s Cloud
                      Computing Course in Pune offers?
                    </h2>

                    <p className={styles.pp}>
                      The explosive growth of cloud computing changes the career
                      dynamics for tech experts from diverse fields. Hence,
                      constant skill upgrades via an industry-paced{" "}
                      <b>cloud computing training institute in Pune</b> are
                      becoming trendsetters. If you’re keen to contemporize your
                      abilities and rebuild your career, join Learnbay’s cloud
                      program.
                    </p>

                    <p className={styles.pp}>
                      <b>Major offerings are –</b>
                    </p>

                    <ul style={{ marginLeft: "40px" }}>
                      <li>
                        Exclusively planned learning modules to crack leading
                        jobs
                      </li>
                      <li>Flexible training sessions</li>
                      <li>Reasonable fee structure</li>
                      <li>1:1 mentorship from eminent experts</li>
                      <li>Hands-on learning with 10+ real-time projects</li>
                      <li>
                        Globally acknowledged certificates from IBM & Microsoft
                      </li>
                      <li>100% Job and Placement aid</li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}
          </>
        )}
      </div>
      <div id="Certification">
        <div className={styles.CitiesRightSpan}>
          <span>Certification Details</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <h2 className={styles.pHead}>{CertificationHead1}</h2>
          <p className={styles.pp}>{CertificationBot1}</p>
          <p className={styles.pp}>{CertificationBot2}</p>
          <p className={styles.pp}>{CertificationBot3}</p>
          <p className={styles.pp}>{CertificationBot4}</p>
          {cityTextCloudPune ? (
            <ul style={{ marginLeft: "40px", marginBottom: "40px" }}>
              <li>Advance Data Science & AI Program</li>
              <li style={{ color: "#0072bc" }}>
                <a
                  href="https://www.learnbay.co/datascience/executive-program-in-data-science-and-ai-by-iit-guwahati"
                  target="_blank"
                >
                  Executive Program in Data Science & AI from IIT Guwahati
                </a>
              </li>
              <li>Advance AI & ML Certification Program</li>
              <li style={{ color: "#0072bc" }}>
                <a
                  href="https://www.learnbay.co/datascience/data-analytics-certification-course"
                  target="_blank"
                >
                  Data Analytics Certification Program
                </a>
              </li>
              <li style={{ color: "#0072bc" }}>
                <a
                  href="https://www.learnbay.co/datascience/advance-data-analytics-program-iit-guwahati"
                  target="_blank"
                >
                  Advance Data Analytics Certification from IIT Guwahati
                </a>
              </li>
              <li style={{ color: "#0072bc" }}>
                <a
                  href="https://www.learnbay.co/datascience/business-analytics-certification-course"
                  target="_blank"
                >
                  Business Analytics Master Program
                </a>
              </li>
            </ul>
          ) : (
            ""
          )}
          <div className={styles.certNew}>
            <Image
              src={src}
              width={800}
              height={800}
              loading="lazy"
              quality={50}
            />
            <Image
              src={src22}
              width={800}
              height={800}
              loading="lazy"
              quality={50}
            />
            {src33 && (
              <Image
                src={src33}
                width={800}
                height={800}
                loading="lazy"
                quality={50}
              />
            )}
            {/* <img src={src}></img>
            <img src={src22}></img>
            <img src={src33}></img> */}
          </div>
        </div>
      </div>

      <div id="Module">
        <div className={styles.CitiesRightSpan}>
          <span>Module-Details</span>
        </div>
        {cityTextDAPune ? (
          <div className={styles.CitiesRightInner}>
            <p className={styles.pp}>{ModuleBot1}</p>
            <p className={styles.pp}>{ModuleBot2}</p>
            <p className={styles.pp}>{ModuleBot3}</p>
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
          </div>
        ) : (
          <div className={styles.CitiesRightInner}>
            <p className={styles.pp}>{ModuleBot1}</p>
            <p className={styles.pp}>{ModuleBot2}</p>
            <p className={styles.pp}>{ModuleBot3}</p>
            <p className={styles.pp}>{ModuleBot4}</p>
            {ulModule ? (
              <>
                <ul style={{ marginLeft: "40px" }}>
                  <li>{list1}</li>
                  <li>{list2}</li>
                  <li>{list3}</li>
                  <li>{list4}</li>
                  <li>{list5}</li>
                  <li>{list6}</li>
                  {cityTextDevopsBangalore && (
                    <>
                      {list7 && <li>{list7}</li>}
                      {list8 && <li>{list8}</li>}
                      {list9 && <li>{list9}</li>}
                    </>
                  )}
                </ul>
              </>
            ) : (
              <></>
            )}
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
          </div>
        )}
        <div className={styles.Button}>
          <a href={syllabussrc} target="_blank">
            <Button className={styles.btn} text="View Detailed Syllabus" />
          </a>
        </div>
      </div>
      <div id="Job">
        <div className={styles.CitiesRightSpan}>
          <span>Job Assist Program</span>
        </div>
        {cityTextCloudPune ? (
          <div className={styles.CitiesRightInner}>
            <h2 className={styles.pHead}>{JobHead1}</h2>
            <p className={styles.pp}>{JobBot1}</p>
            <span className={styles.pp}>{JobBotA}</span>
            <p className={styles.pp}>{JobBot2}</p>
            <p className={styles.pp}>{JobBot21}</p>
            <p className={styles.pp}>{JobBot5}</p>
            <h2 className={styles.pHead}>{JobHead2}</h2>
            <p className={styles.pp}>{JobBot3}</p>
            <h2 className={styles.pHead}>{JobHead3}</h2>
            <p className={styles.pp}>{JobBot4}</p>
            <p className={styles.pp}>{JobBot51}</p>
            <p className={styles.pp}>{JobBot6}</p>
            <p className={styles.pp}>{JobBot11}</p>
            <span className={styles.pp}>{JobBotB}</span>
            <p className={styles.pp}>{JobBot12}</p>
            <h2 className={styles.pHead}>{JobHead4}</h2>
            <p className={styles.pp}>{JobBot13}</p>
            <p className={styles.pp}>{JobBot14}</p>
            <p className={styles.pp}>{JobBot15}</p>
            <span className={styles.pp}>{JobBotC}</span>
            <p className={styles.pp}>{JobBot16}</p>
            <p className={styles.pp}>{JobBot17}</p>
            <h2 className={styles.pHead}>{JobHead5}</h2>
            <p className={styles.pp}>{JobBot18}</p>
            <p className={styles.pp}>{JobBot19}</p>
            <p className={styles.pp}>{JobBot20}</p>
            <span className={styles.pp}>{JobBotD}</span>
          </div>
        ) : (
          <>
            {cityTextCloudBangalore ? (
              <div className={styles.CitiesRightInner}>
                <h2 className={styles.pHead}>{JobHead1}</h2>
                <p className={styles.pp}>{JobBot1}</p>
                <span className={styles.pp}>{JobBotA}</span>
                <p className={styles.pp}>{JobBot2}</p>
                <p className={styles.pp}>{JobBot5}</p>
                <h2 className={styles.pHead}>{JobHead2}</h2>
                <p className={styles.pp}>{JobBot3}</p>
                <h2 className={styles.pHead}>{JobHead3}</h2>
                <p className={styles.pp}>{JobBot4}</p>
                <p className={styles.pp}>{JobBot6}</p>
                <p className={styles.pp}>{JobBot11}</p>
                <span className={styles.pp}>{JobBotB}</span>
                <p className={styles.pp}>{JobBot12}</p>
                <h2 className={styles.pHead}>{JobHead4}</h2>
                <p className={styles.pp}>{JobBot13}</p>
                <p className={styles.pp}>{JobBot14}</p>
                <p className={styles.pp}>{JobBot15}</p>
                <span className={styles.pp}>{JobBotC}</span>
                <p className={styles.pp}>{JobBot16}</p>
                <p className={styles.pp}>{JobBot17}</p>
                <h2 className={styles.pHead}>{JobHead5}</h2>
                <p className={styles.pp}>{JobBot18}</p>
                <p className={styles.pp}>{JobBot19}</p>
                <p className={styles.pp}>{JobBot20}</p>
                <span className={styles.pp}>{JobBotD}</span>
              </div>
            ) : (
              <>
                {cityTextDevopsBangalore ? (
                  <div className={styles.CitiesRightInner}>
                    <h2 className={styles.pHead}>{JobHead1}</h2>
                    <span className={styles.pp}>{JobBotA}</span>
                    <h2 className={styles.pHead}>{JobHead2}</h2>
                    <p className={styles.pp}>{JobBot3}</p>
                    <p className={styles.pp}>{JobBot4}</p>
                    <p className={styles.pp}>{JobBot12}</p>
                    <h2 className={styles.pHead}>{JobHead4}</h2>
                    <p className={styles.pp}>{JobBot13}</p>
                    <span className={styles.pp}>{JobBotC}</span>
                    <p className={styles.pp}>{JobBot16}</p>
                  </div>
                ) : (
                  <>
                    {DAnalyst ? (
                      <>
                        <div className={styles.CitiesRightInner}>
                          <h3 className={styles.pHead}>{JobHead40}</h3>
                          <p className={styles.pp}>{JobBot41}</p>
                          <p className={styles.pp}>{JobBot42}</p>
                          <p className={styles.pp}>{JobBot43}</p>
                          <table style={tableStyle}>
                            <thead>
                              <tr style={headerRowStyle}>
                                <th style={thStyle}>Job Roles</th>
                                <th style={thStyle}>Experience Level</th>
                                <th style={thStyle}>Annual Payscale (INR)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={tdStyle}>Junior Data Analyst</td>
                                <td style={tdStyle}>0 to 2 years</td>
                                <td style={tdStyle}>3.5 to 6 Lakhs</td>
                              </tr>
                              <tr>
                                <td style={tdStyle}>Data Analyst</td>
                                <td style={tdStyle}>3 to 5 years</td>
                                <td style={tdStyle}>6 to 10 Lakhs</td>
                              </tr>
                              <tr>
                                <td style={tdStyle}>Senior Data Analyst</td>
                                <td style={tdStyle}>5 to 9 years</td>
                                <td style={tdStyle}>10 to 18 Lakhs</td>
                              </tr>

                              <tr>
                                <td style={tdStyle}>
                                  Specialized Data Analyst
                                </td>
                                <td style={tdStyle}>More than 10 years</td>
                                <td style={tdStyle}>18 to 30 Lakhs</td>
                              </tr>
                            </tbody>
                          </table>

                          <p className={styles.pp}>{JobBot4}</p>
                          <p className={styles.pp}>{JobBot5}</p>
                          <p className={styles.pp}>{JobBot6}</p>
                          <p className={styles.pp}>{JobBot7}</p>
                          <h2 className={styles.pHead}>{JobHead3}</h2>

                          <p className={styles.pp}>{JobBot8}</p>
                          <p className={styles.pp}>{JobBot9}</p>
                          <p className={styles.pp}>{JobBot10}</p>

                          <h3 className={styles.pHead}>{JobHead5}</h3>
                          <p className={styles.pp}>{JobBot11}</p>
                          <ul
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "20px",
                              marginBottom: "20px",
                            }}
                          >
                            <li>{listJob1}</li>
                            <li style={{ listStyle: "none" }}>{listJob2}</li>

                            <li>{listJob3}</li>
                          </ul>

                          <ul
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "20px",
                              marginBottom: "20px",
                            }}
                          >
                            <li style={{ listStyle: "none" }}>{listJob4}</li>
                            <li style={{ listStyle: "none" }}>{listJob5}</li>
                            <li style={{ listStyle: "none" }}>{listJob6}</li>
                            <li style={{ listStyle: "none" }}>{listJob7}</li>
                            <li style={{ listStyle: "none" }}>{listJob8}</li>
                            <li style={{ listStyle: "none" }}>{listJob9}</li>
                            <li style={{ listStyle: "none" }}>{listJob10}</li>
                            <li style={{ listStyle: "none" }}>{listJob11}</li>
                          </ul>

                          <ul
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "20px",
                            }}
                          >
                            <li>{listJob12}</li>
                            <li style={{ listStyle: "none" }}>{listJob13}</li>
                            <li style={{ listStyle: "none" }}>{listJob14}</li>
                            <li style={{ listStyle: "none" }}>{listJob15}</li>
                            <li style={{ listStyle: "none" }}>{listJob16}</li>
                            <li style={{ listStyle: "none" }}>{listJob17}</li>
                          </ul>

                          <ul
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <li>{listJob18}</li>
                            <li style={{ listStyle: "none" }}>{listJob19}</li>

                            <li style={{ listStyle: "none" }}>{listJob20}</li>
                            <li style={{ listStyle: "none" }}>{listJob21}</li>
                            <li style={{ listStyle: "none" }}>{listJob22}</li>
                            <li style={{ listStyle: "none" }}>{listJob23}</li>
                          </ul>

                          <p className={styles.pp}>{JobBot19}</p>
                          <p className={styles.pp}>{JobBot20}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        {" "}
                        {bAnalystAbout ? (
                          <div className={styles.CitiesRightInner}>
                            <h3 className={styles.pHead}>{JobHead2}</h3>
                            <p className={styles.pp}>{JobBot1}</p>
                            <p className={styles.pp}>{JobBot2}</p>
                            <table style={tableStyle}>
                              <thead>
                                <tr style={headerRowStyle}>
                                  <th style={thStyle}>Job Roles</th>
                                  <th style={thStyle}>Experience Level</th>
                                  <th style={thStyle}>Annual Payscale (INR)</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={tdStyle}>
                                    Junior Buisness Analyst
                                  </td>
                                  <td style={tdStyle}>Entry, Mid-senior</td>
                                  <td style={tdStyle}>5 to 8 Lakhs</td>
                                </tr>
                                <tr>
                                  <td style={tdStyle}>Business Analyst</td>
                                  <td style={tdStyle}>Entry, Mid-senior</td>
                                  <td style={tdStyle}>3 to 5 Lakhs</td>
                                </tr>
                                <tr>
                                  <td style={tdStyle}>
                                    Senior Buisness Analyst
                                  </td>
                                  <td style={tdStyle}>Mid-senior</td>
                                  <td style={tdStyle}>8 to 15 lakhs</td>
                                </tr>

                                <tr>
                                  <td style={tdStyle}>
                                    Leading Business Analyst
                                  </td>
                                  <td style={tdStyle}>Senior</td>
                                  <td style={tdStyle}>15 to 25 lakhs</td>
                                </tr>
                                <tr>
                                  <td style={tdStyle}>Buisness Consultation</td>
                                  <td style={tdStyle}>Senior</td>
                                  <td style={tdStyle}>25 to 40 lakhs</td>
                                </tr>
                                <tr>
                                  <td style={tdStyle}>
                                    Director of Business Analysis
                                  </td>
                                  <td style={tdStyle}>
                                    Managerial level (senior)
                                  </td>
                                  <td style={tdStyle}>More than 40 lakhs</td>
                                </tr>
                              </tbody>
                            </table>

                            <p className={styles.pp}>{JobBot3}</p>
                            <p className={styles.pp}>{JobBot4}</p>
                            <p className={styles.pp}>{JobBot5}</p>
                            <p className={styles.pp}>{JobBot6}</p>
                            <p className={styles.pp}>{JobBot7}</p>
                            <h2 className={styles.pHead}>{JobHead3}</h2>

                            <p className={styles.pp}>{JobBot8}</p>
                            <ul
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                marginBottom: "20px",
                              }}
                            >
                              <li>{listJob1}</li>
                              <li style={{ listStyle: "none" }}>{listJob2}</li>
                              <li style={{ listStyle: "none" }}>{listJob3}</li>
                            </ul>

                            <ul
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                marginBottom: "20px",
                              }}
                            >
                              <li>{listJob4}</li>
                              <li style={{ listStyle: "none" }}>{listJob5}</li>
                              <li style={{ listStyle: "none" }}>{listJob6}</li>
                            </ul>
                            <ul
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                              }}
                            >
                              <li>{listJob7}</li>
                              <li style={{ listStyle: "none" }}>{listJob8}</li>
                              <li>{listJob9}</li>
                              <li style={{ listStyle: "none" }}>{listJob10}</li>
                              <li>{listJob11}</li>
                              <li style={{ listStyle: "none" }}>{listJob12}</li>
                              <li>{listJob13}</li>
                              <li style={{ listStyle: "none" }}>{listJob14}</li>
                              <li style={{ listStyle: "none" }}>{listJob15}</li>
                            </ul>

                            <p className={styles.pp}>{JobBot9}</p>
                            <h3 className={styles.pHead}>{JobHead4}</h3>
                            <ul
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                              }}
                            >
                              <li>{listJob16}</li>
                              <li>{listJob17}</li>
                              <li>{listJob18}</li>
                              <li>{listJob19}</li>
                              <li>{listJob20}</li>
                              <li>{listJob21}</li>
                            </ul>
                            <h3 className={styles.pHead}>{JobHead5}</h3>
                            <i>
                              <p className={styles.pp}>{JobBot10}</p>
                            </i>
                            <i>
                              <p className={styles.pp}>{JobBot11}</p>
                            </i>
                            <i>
                              <p className={styles.pp}>{JobBot12}</p>
                            </i>
                            <i>
                              <p className={styles.pp}>{JobBot13}</p>
                            </i>

                            <i>
                              <p className={styles.pp}>{JobBot14}</p>
                            </i>
                            <i>
                              <p className={styles.pp}>{JobBot15}</p>
                            </i>
                            <h3 className={styles.pHead}>{JobHead6}</h3>
                            <p className={styles.pp}>{JobBot16}</p>
                            <p className={styles.pp}>{JobBot17}</p>
                            <ul
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                              }}
                            >
                              <li>{listJob22}</li>
                              <li style={{ listStyle: "none" }}>{listJob23}</li>
                              <li>{listJob24}</li>
                              <li style={{ listStyle: "none" }}>{listJob25}</li>
                              <li style={{ listStyle: "none" }}>{listJob26}</li>
                              <li>{listJob27}</li>
                              <li style={{ listStyle: "none" }}>{listJob28}</li>
                              <li style={{ listStyle: "none" }}>{listJob29}</li>
                              <li>{listJob30}</li>

                              <li style={{ listStyle: "none" }}>{listJob31}</li>
                              <li>{listJob32}</li>
                              <li style={{ listStyle: "none" }}>{listJob33}</li>
                              <li>{listJob34}</li>
                              <li style={{ listStyle: "none" }}>{listJob35}</li>
                              <li style={{ listStyle: "none" }}>{listJob36}</li>
                            </ul>
                            <h3 className={styles.pHead}>{JobHead7}</h3>
                            <p className={styles.pp}>{JobBot18}</p>
                            <ul
                              style={{
                                listStyleType: "decimal",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                              }}
                            >
                              <li>{listJob37}</li>
                              <li>{listJob38}</li>
                              <li>{listJob39}</li>
                              <li>{listJob40}</li>
                              <li>{listJob41}</li>
                              <li>{listJob42}</li>
                              <li>{listJob43}</li>
                              <li>{listJob44}</li>
                              <li>{listJob45}</li>
                              <li>{listJob46}</li>
                            </ul>
                            <p className={styles.pp}>{JobBot19}</p>
                          </div>
                        ) : (
                          <>
                            {cityTextJDAPune ? (
                              <div className={styles.CitiesRightInner}>
                                <h2 className={styles.pHead}>{JobHead1}</h2>
                                <p className={styles.pp}>{JobBot1}</p>
                                <p className={styles.pp}>{JobBot2}</p>
                                <h2 className={styles.pHead}>{JobHead2}</h2>
                                <p className={styles.pp}>{JobBot3}</p>

                                <p className={styles.pp}>{JobBot4}</p>

                                <h2 className={styles.pHead}>{JobHead4}</h2>

                                <p className={styles.pp}>{JobBot8}</p>
                                <p className={styles.pp}>{JobBot9}</p>
                                <p className={styles.pp}>{JobBot10}</p>
                                <p className={styles.pp}>{JobBot11}</p>
                              </div>
                            ) : (
                              <div className={styles.CitiesRightInner}>
                                <h2 className={styles.pHead}>{JobHead1}</h2>
                                <p className={styles.pp}>{JobBot1}</p>
                                <span className={styles.pp}>{JobBotA}</span>
                                <p className={styles.pp}>{JobBot2}</p>
                                <p className={styles.pp}>{JobBot21}</p>
                                <p className={styles.pp}>{JobBot5}</p>
                                <h2 className={styles.pHead}>{JobHead2}</h2>
                                <p className={styles.pp}>{JobBot3}</p>
                                <h2 className={styles.pHead}>{JobHead3}</h2>
                                <p className={styles.pp}>{JobBot4}</p>
                                <p className={styles.pp}>{JobBot51}</p>
                                <p className={styles.pp}>{JobBot6}</p>
                                <p className={styles.pp}>{JobBot11}</p>
                                <span className={styles.pp}>{JobBotB}</span>
                                <p className={styles.pp}>{JobBot12}</p>
                                <h2 className={styles.pHead}>{JobHead4}</h2>
                                <p className={styles.pp}>{JobBot13}</p>
                                <p className={styles.pp}>{JobBot14}</p>
                                <p className={styles.pp}>{JobBot15}</p>
                                <span className={styles.pp}>{JobBotC}</span>
                                <p className={styles.pp}>{JobBot16}</p>
                                <p className={styles.pp}>{JobBot17}</p>
                                <h2 className={styles.pHead}>{JobHead5}</h2>
                                <p className={styles.pp}>{JobBot18}</p>
                                <p className={styles.pp}>{JobBot19}</p>
                                <p className={styles.pp}>{JobBot20}</p>
                                <span className={styles.pp}>{JobBotD}</span>
                              </div>
                            )}
                          </>
                        )}
                      </>
                    )}

                    {bAnalystAbout ? (
                      <div className={styles.CitiesRightInner}>
                        <h3 className={styles.pHead}>{JobHead2}</h3>
                        <p className={styles.pp}>{JobBot1}</p>
                        <p className={styles.pp}>{JobBot2}</p>
                        <table style={tableStyle}>
                          <thead>
                            <tr style={headerRowStyle}>
                              <th style={thStyle}>Job Roles</th>
                              <th style={thStyle}>Experience Level</th>
                              <th style={thStyle}>Annual Payscale (INR)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={tdStyle}>Junior Buisness Analyst</td>
                              <td style={tdStyle}>Entry, Mid-senior</td>
                              <td style={tdStyle}>5 to 8 Lakhs</td>
                            </tr>
                            <tr>
                              <td style={tdStyle}>Business Analyst</td>
                              <td style={tdStyle}>Entry, Mid-senior</td>
                              <td style={tdStyle}>3 to 5 Lakhs</td>
                            </tr>
                            <tr>
                              <td style={tdStyle}>Senior Buisness Analyst</td>
                              <td style={tdStyle}>Mid-senior</td>
                              <td style={tdStyle}>8 to 15 lakhs</td>
                            </tr>

                            <tr>
                              <td style={tdStyle}>Leading Business Analyst</td>
                              <td style={tdStyle}>Senior</td>
                              <td style={tdStyle}>15 to 25 lakhs</td>
                            </tr>
                            <tr>
                              <td style={tdStyle}>Buisness Consultation</td>
                              <td style={tdStyle}>Senior</td>
                              <td style={tdStyle}>25 to 40 lakhs</td>
                            </tr>
                            <tr>
                              <td style={tdStyle}>
                                Director of Business Analysis
                              </td>
                              <td style={tdStyle}>Managerial level (senior)</td>
                              <td style={tdStyle}>More than 40 lakhs</td>
                            </tr>
                          </tbody>
                        </table>

                        <p className={styles.pp}>{JobBot43}</p>
                        <p className={styles.pp}>{JobBot44}</p>
                        <p className={styles.pp}>{JobBot45}</p>
                        <p className={styles.pp}>{JobBot46}</p>
                        <p className={styles.pp}>{JobBot47}</p>
                        <h2 className={styles.pHead}>{JobHead3}</h2>

                        <p className={styles.pp}>{JobBot48}</p>
                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            marginBottom: "20px",
                          }}
                        >
                          <li>{listJob1}</li>
                          <li style={{ listStyle: "none" }}>{listJob2}</li>
                          <li style={{ listStyle: "none" }}>{listJob3}</li>
                        </ul>

                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            marginBottom: "20px",
                          }}
                        >
                          <li>{listJob4}</li>
                          <li style={{ listStyle: "none" }}>{listJob5}</li>
                          <li style={{ listStyle: "none" }}>{listJob6}</li>
                        </ul>
                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                          }}
                        >
                          <li>{listJob7}</li>
                          <li style={{ listStyle: "none" }}>{listJob8}</li>
                          <li>{listJob9}</li>
                          <li style={{ listStyle: "none" }}>{listJob10}</li>
                          <li>{listJob11}</li>
                          <li style={{ listStyle: "none" }}>{listJob12}</li>
                          <li>{listJob13}</li>
                          <li style={{ listStyle: "none" }}>{listJob14}</li>
                          <li style={{ listStyle: "none" }}>{listJob15}</li>
                        </ul>

                        <p className={styles.pp}>{JobBot9}</p>
                        <h3 className={styles.pHead}>{JobHead4}</h3>
                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                          }}
                        >
                          <li>{listJob16}</li>
                          <li>{listJob17}</li>
                          <li>{listJob18}</li>
                          <li>{listJob19}</li>
                          <li>{listJob20}</li>
                          <li>{listJob21}</li>
                        </ul>
                        <h3 className={styles.pHead}>{JobHead5}</h3>
                        <i>
                          <p className={styles.pp}>{JobBot49}</p>
                        </i>
                        <i>
                          <p className={styles.pp}>{JobBot50}</p>
                        </i>
                        <i>
                          <p className={styles.pp}>{JobBot12}</p>
                        </i>
                        <i>
                          <p className={styles.pp}>{JobBot13}</p>
                        </i>

                        <i>
                          <p className={styles.pp}>{JobBot14}</p>
                        </i>
                        <i>
                          <p className={styles.pp}>{JobBot15}</p>
                        </i>
                        <h3 className={styles.pHead}>{JobHead6}</h3>
                        <p className={styles.pp}>{JobBot16}</p>
                        <p className={styles.pp}>{JobBot17}</p>
                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                          }}
                        >
                          <li>{listJob22}</li>
                          <li style={{ listStyle: "none" }}>{listJob23}</li>
                          <li>{listJob24}</li>
                          <li style={{ listStyle: "none" }}>{listJob25}</li>
                          <li style={{ listStyle: "none" }}>{listJob26}</li>
                          <li>{listJob27}</li>
                          <li style={{ listStyle: "none" }}>{listJob28}</li>
                          <li style={{ listStyle: "none" }}>{listJob29}</li>
                          <li>{listJob30}</li>

                          <li style={{ listStyle: "none" }}>{listJob31}</li>
                          <li>{listJob32}</li>
                          <li style={{ listStyle: "none" }}>{listJob33}</li>
                          <li>{listJob34}</li>
                          <li style={{ listStyle: "none" }}>{listJob35}</li>
                          <li style={{ listStyle: "none" }}>{listJob36}</li>
                        </ul>
                        <h3 className={styles.pHead}>{JobHead7}</h3>
                        <p className={styles.pp}>{JobBot18}</p>
                        <ul
                          style={{
                            listStyleType: "decimal",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                          }}
                        >
                          <li>{listJob37}</li>
                          <li>{listJob38}</li>
                          <li>{listJob39}</li>
                          <li>{listJob40}</li>
                          <li>{listJob41}</li>
                          <li>{listJob42}</li>
                          <li>{listJob43}</li>
                          <li>{listJob44}</li>
                          <li>{listJob45}</li>
                          <li>{listJob46}</li>
                        </ul>
                        <p className={styles.pp}>{JobBot19}</p>
                      </div>
                    ) : (
                      <>
                        {cityTextJDAPune ? (
                          <div className={styles.CitiesRightInner}>
                            <h2 className={styles.pHead}>{JobHead1}</h2>
                            <p className={styles.pp}>{JobBot1}</p>
                            <p className={styles.pp}>{JobBot2}</p>
                            <h2 className={styles.pHead}>{JobHead2}</h2>
                            <p className={styles.pp}>{JobBot3}</p>

                            <p className={styles.pp}>{JobBot4}</p>

                            <h2 className={styles.pHead}>{JobHead4}</h2>

                            <p className={styles.pp}>{JobBot8}</p>
                            <p className={styles.pp}>{JobBot9}</p>
                            <p className={styles.pp}>{JobBot10}</p>
                            <p className={styles.pp}>{JobBot11}</p>
                          </div>
                        ) : (
                          <div className={styles.CitiesRightInner}>
                            <h2 className={styles.pHead}>{JobHead1}</h2>
                            <p className={styles.pp}>{JobBot1}</p>
                            <p className={styles.pp}>{JobBot2}</p>
                            <p className={styles.pp}>{JobBot5}</p>
                            <h2 className={styles.pHead}>{JobHead2}</h2>
                            <p className={styles.pp}>{JobBot3}</p>
                            <h2 className={styles.pHead}>{JobHead3}</h2>
                            <p className={styles.pp}>{JobBot4}</p>
                            <p className={styles.pp}>{JobBot6}</p>
                            <p className={styles.pp}>{JobBot11}</p>
                            <p className={styles.pp}>{JobBot12}</p>
                            <p className={styles.pp}>{JobBot13}</p>
                            <p className={styles.pp}>{JobBot14}</p>

                            {DAnalyst ? (
                              <>
                                <h3 className={styles.pHead}>{JobHead4}</h3>
                                <ul
                                  style={{
                                    listStyleType: "decimal",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                  }}
                                >
                                  <li>{JobList1}</li>
                                  <li>{JobList2}</li>
                                  <li>{JobList3}</li>
                                  <li>{JobList4}</li>
                                  <li>{JobList5}</li>
                                </ul>

                                <ul
                                  style={{
                                    listStyleType: "decimal",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                  }}
                                >
                                  <h3 className={styles.pHead}>{JobHead6}</h3>
                                  <li>{JobList6}</li>
                                  <li>{JobList7}</li>
                                  <li>{JobList8}</li>
                                  <li>{JobList9}</li>
                                  <li>{JobList10}</li>
                                </ul>

                                <h2 className={styles.pHead}>{JobHead7}</h2>
                                <p className={styles.pp}>{JobBot21}</p>
                                <p className={styles.pp}>{JobBot22}</p>
                                <p className={styles.pp}>{JobBot23}</p>

                                <ul>
                                  <li>{JobList11}</li>
                                  {/* <li>{JobList12}</li>
                      <li>{JobList13}</li>
                      <li>{JobList14}</li>
                      <li>{JobList15}</li> */}
                                </ul>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
      <div id="Projects">
        {bAnalystAbout ? (
          <>
            {" "}
            <div className={styles.CitiesRightSpan}>
              <span>Conclusion</span>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className={styles.CitiesRightSpan}>
              <span>Know Our Projects</span>
            </div>
          </>
        )}
        {cityTextDAPune ? (
          <div className={styles.CitiesRightInner}>
            <p className={styles.pp}>{ProjectsBot1}</p>
            <p className={styles.pp}>{ProjectsBot2}</p>
            <p className={styles.pp}>{ProjectsBot3}</p>
          </div>
        ) : (
          <div className={styles.CitiesRightInner}>
            <p className={styles.pHead}>{ProjectsHead1}</p>
            <p className={styles.pp}>{ProjectsBot1}</p>

            <p className={styles.pp}>{ProjectsBot2}</p>
            <p className={styles.pp}>{ProjectsBot3}</p>
            <p className={styles.pp}>{ProjectsBot4}</p>
            <p className={styles.pp}>{ProjectsBot5}</p>
          </div>
        )}
        <div className={styles.Projects}>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <Image
                  src={src1}
                  alt={alt2}
                  width={100}
                  height={100}
                  loading="lazy"
                  quality={40}
                />
                {/* <img
                  src={src1}
                  style={{ height: "60px", width: "auto" }}
                  alt={alt2}
                ></img> */}
                <p className={styles.ppp}>{ProjectsH1}</p>
              </div>
              <p className={styles.pp}>{Projectsp1}</p>
            </div>
          </div>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
              <Image
                  src={src2}
                  alt={alt3}
                  width={100}
                  height={100}
                  loading="lazy"
                  quality={40}
                />
                {/* <img
                  src={src2}
                  style={{ height: "60px", width: "auto" }}
                  alt={alt3}
                ></img> */}
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
                  src={src3}
                  alt={alt4}
                  width={100}
                  height={100}
                  loading="lazy"
                  quality={40}
                />
                {/* <img
                  src={src3}
                  style={{ height: "60px", width: "auto" }}
                  alt={alt4}
                ></img> */}
                <p className={styles.ppp}>{ProjectsH3}</p>
              </div>
              <p className={styles.pp}>{Projectsp3}</p>
            </div>
          </div>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
              <Image
                  src={src4}
                  alt={alt5}
                  width={100}
                  height={100}
                  loading="lazy"
                  quality={40}
                />
                {/* <img
                  src={src4}
                  style={{ height: "60px", width: "auto" }}
                  alt={alt5}
                ></img> */}
                <p className={styles.ppp}>{ProjectsH4}</p>
              </div>
              <p className={styles.pp}>{Projectsp4}</p>
            </div>
          </div>
        </div>
        <div className={styles.Button}>
          <a
            href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
            target="_blank"
          >
            <Button className={styles.btn} text="View All Projects" />
          </a>
        </div>
      </div>
      <div id="Alumni">
        <div className={styles.CitiesRightSpan}>
          <span>Hear From Our Alumni</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <p className={styles.pp}>{AlumniBot1}</p>
        </div>
        <div className={styles.Alumni}>
          <div className={styles.AlumniBot}>
            <Image src={Asrc1} alt={alt6} loading="lazy" quality={60} width={100} height={100}/>
            {/* <img src={Asrc1} style={{ width: "100px" }} alt={alt6}></img> */}
            <p className={styles.ppa}>{AlumniH1}</p>
            <p className={styles.pp}>{Alumnip1}</p>
          </div>
          <div className={styles.AlumniBot}>
          <Image src={Asrc2} alt={alt7} loading="lazy" quality={60} width={100} height={100}/>
            {/* <img src={Asrc2} style={{ width: "100px" }} alt={alt7}></img> */}
            <p className={styles.ppa}>{AlumniH2}</p>
            <p className={styles.pp}>{Alumnip2}</p>
          </div>
        </div>
        <div className={styles.Alumni1}>
          <div className={styles.AlumniBot}>
          <Image src={Asrc3} alt={alt8} loading="lazy" quality={60} width={100} height={100}/>
            {/* <img src={Asrc3} style={{ width: "100px" }} alt={alt8}></img> */}
            <p className={styles.ppa}>{AlumniH3}</p>
            <p className={styles.pp}>{Alumnip3}</p>
          </div>
          <div className={styles.AlumniBot}>
          <Image src={Asrc4} alt={alt9} loading="lazy" quality={60} width={100} height={100}/>
            {/* <img src={Asrc4} style={{ width: "100px" }} alt={alt9}></img> */}
            <p className={styles.ppa}>{AlumniH4}</p>
            <p className={styles.pp}>{Alumnip4}</p>
          </div>
        </div>
        <div className={styles.Button}>
          <a href="/reviews" target="_blank">
            <Button className={styles.btn} text="View All Reviews" />
          </a>
        </div>
      </div>
      <div id="FAQ">
        <div className={styles.CitiesRightSpan}>
          {bAnalystAbout ? <></> : <span>Frequently Asked Questions</span>}
        </div>
      </div>
    </section>
  );
};

export default CitiesRightCopy;
