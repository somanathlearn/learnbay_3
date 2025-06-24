import styles from "@/components/CoursePage/FirstSectionDmd/FirstSection.module.css";
import DmdPopup from "@/components/Dmd/Popup/DmdPopup";
import Footer from "@/components/Global/Footer/Footer";
import MentorsSection from "@/components/Global/MentorsSection/MentorsSection";
import Course from "@/components/Home/Course/CourseDmd";
import GetHire from "@/components/Home/GetHire/GetHire";
import HomeLine from "@/components/Home/HomeLine/HomeLine";
import Media from "@/components/Home/Media/Media";
import ProjectSection from "@/components/OrganicGeneric/ProjectSection/ProjectSection";
import dynamic from "next/dynamic";
import EightSection from "../EightSection/EightSection";
const FirstSection = dynamic(() =>
  import("@/components/CoursePage/FirstSectionDmd/FirstSection")
);
const Certificate = dynamic(() =>
  import("@/components/CoursePage/UpdatedCertificate/UpdatedCertificate")
);

const Transpro = dynamic(() => import("@/components/Dmd/Transpro/Transpro"));
const SliderTab = dynamic(() =>
  import("@/components/Dmd/SliderTab/SliderTabs")
);
const Webinar = dynamic(() => import("@/components/Dmd/ReactWebinar/Webinar"));
const NewProjectSection = dynamic(() =>
  import("@/components/Global/NewProjectSection/NewProjectSection")
);
const DmdPart = ({ CertificateData, S3RightImage, projectSection }) => {
  const data = [
    {
      id: 1,
      domain:
        "Learnbay achieves 300% surge; to expand workforce amidst impressive job market recognition",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/image+2-min.webp",
      SDesc: "12th JULY",
      url: "https://www.financialexpress.com/education-2/learnbay-goes-offline-with-brick-and-mortar-centres-ends-fy22-with-a-net-profit-of-rs-3-2-crore/2590829/",
    },
    {
      id: 2,
      domain: "How data science can disrupt the fintech industry?",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/dataquest.webp",
      SDesc: "13th January",
      url: "https://www.dqindia.com/how-data-science-can-disrupt-the-fintech-industry/",
    },
    {
      id: 3,
      domain:
        "Professional Upskilling Startup Learnbay Launches Three New Cutting-Edge Domain Courses",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/PM-Logo.webp",
      SDesc: "2and August",
      url: "https://thepeoplemanagement.com/the-future-of-hr-will-be-defined-by-a-blended-workforce-nisha-kumari-md-learnbay/",
    },
    {
      id: 4,
      domain:
        "Learnbay introduces domain specialisation programme for sustainable career transition",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/image+2-min.webp",
      SDesc: "1st August",
      url: "https://www.financialexpress.com/jobs-career/education-learnbay-introduces-domain-specialisation-programme-for-sustainable-career-transition-2613104/",
    },
    {
      id: 5,
      domain: "Metaverse in Education: A New Mainstay or a Passing Trend??",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/express+computer.webp",
      SDesc: "21st August",
      url: "https://www.expresscomputer.in/artificial-intelligence-ai/metaverse-in-education-a-new-mainstay-or-a-passing-trend/102446/",
    },
    {
      id: 6,
      domain:
        "Augmented Intelligence: How Humans and Machines Team Up in Future Data Science",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/CXO+today.webp",
      SDesc: "25th September",
      url: "https://cxotoday.com/specials/augmented-intelligence-how-humans-and-machines-team-up-in-future-data-science/",
    },

    {
      id: 7,
      domain: "The Rising Horizon: Data Science and AI in the EdTech 2.0 Era",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/mt-Logo.webp",
      SDesc: "25th May",
      url: "https://www.manufacturingtodayindia.com/sectors/smart-manufacturing-roles-for-data-professionals",
    },
    {
      id: 8,
      domain:
        "Learnbay Collaborates with Woolf to Launch Master's Degree in Computer Science & Data Science Specializations",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/business-standard-logo.webp",
      SDesc: "20th November",
      url: "https://www.business-standard.com/content/press-releases-ani/learnbay-collaborates-with-woolf-to-launch-master-s-degree-in-computer-science-data-science-specializations-123112000350_1.html",
    },
  ];
  const pdfUrl = "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Cloud-and-Devops-Certifications.pdf";
  return (
    <div>
      <FirstSection
        ThirdTyped="Live Interactive Classes"
        titleCourse="Advanced Cloud Computing & DevOps Certification Program"
        cityParaCont="Elevate your career to a Cloud Solution Architect or DevOps Engineer"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
        brochurePdf={pdfUrl}
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-first-devops-min.webp"
        firstToparaImg=""
        firstHeading="Cloud Computing & DevOps Certification Program"
        firstTopPara="Crack Interview in top MNCs "
        idss="gaQYhVPCudQ"
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/cd-f.webp"
        S3RightImage={S3RightImage}
        softwareBtnHide={true}
        interstedInHide={true}
        DomainInput={true}
      />
      <HomeLine />

      <Transpro />
      <div className={styles.Margin}>
        <Course
          // radio={true}
          organicADS={true}
          // interstedInHide={true}
          newDesign={true}
          dataScienceGeneric={true}
          DomainInput={true}
          interstedInHide={true}
        />
        <DmdPopup />
      </div>
      <Certificate data={CertificateData} className={styles.coursegap} />
      <Webinar />
      <SliderTab />
      <ProjectSection
        nolinkO={false}
        organic={true}
        linkomb={false}
        popup={true}
        HideDmd={true}
      />
      <NewProjectSection
        interstedInHide={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
        brochurePdf={pdfUrl}
        projectSection={projectSection}
        DomainInput={true}
        Domain={true}
      />

      <MentorsSection />

      <div className={styles.MarginGet}>
        <div className={styles.gethirediv}>
          <GetHire />
          <Media projectData={data} />
        </div>
      </div>
      <Webinar />
      <div className={styles.eight}>
        <EightSection DmdEight={true} />
      </div>
      <div className={styles.footerdiv}>
        <Footer
          organicADSS={true}
          adPage={true}
          adPageCity={true}
          iconnolink={true}
          faqhead={true}
          courseGn={true}
          Ocourses={true}
          mailno={true}
          getappsOraginc={true}
          nolinklogo={true}
        />
      </div>

      {/* <BottomBar /> */}
    </div>
  );
};
export default DmdPart;
