import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./SliderTab.module.css";

const Form = dynamic(() => import("../../Global/Form/Form"));
const Popup = dynamic(() => import("../../Global/Popup/Popup"));

const SliderTabs = ({
  dataScience,
  dataScienceCounselling,
  WithoutService,
  notcall,
}) => {
  const services = [
    {
      title: "Placement Support",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career1.webp",
      content: [
        "Unleash your career potential with unlimited job access, interview support, and profile review.",
        "Receive unlimited interview calls from a diverse pool of interested employers/recruiters until you successfully secure a job.",
        "Find the best suited job role that meets your career and salary expectations.",
      ],
    },
    {
      title: "Mock Interviews",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career2.webp",
      content: [
        "LearnBay's targeted mock interviews sessions to ready you for your dream role.",
        "Actionable feedback for skill enhancement that keeps you in pace with interview trends.",
        "Industry-specific interview practice so that you can crack your dream job.",
      ],
    },
    {
      title: "Resume BuildUp",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career3.webp",
      content: [
        "LearnBay's tailored resume-building guidance.",
        "Strategic advice for impactful resumes.",
        "Tools and tips for resume optimization.",
      ],
    },
    {
      title: "Unlimited Interview Calls",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career4.webp",
      content: [
        "LearnBay's promise of unlimited interview calls.",
        "Continuous interview opportunities.",
        "Open-ended access to potential employers.",
      ],
    },
  ];

  const withoutServices = [
    {
      title: "Placement Support",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career1.webp",
      content: [
        "Unleash your career potential with interview support and profile review.",
        "Receive 8-10 interview calls from a diverse pool of interested employers/recruiters until you successfully secure a job.",
        "Find the best suited job role that meets your career and salary expectations.",
      ],
    },
    {
      title: "Mock Interviews",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career2.webp",
      content: [
        "LearnBay's targeted mock interviews sessions to ready you for your dream role.",
        "Actionable feedback for skill enhancement that keeps you in pace with interview trends.",
        "Industry-specific interview practice so that you can crack your dream job.",
      ],
    },
    {
      title: "Resume BuildUp",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career3.webp",
      content: [
        "LearnBay's tailored resume-building guidance.",
        "Strategic advice for impactful resumes.",
        "Tools and tips for resume optimization.",
      ],
    },
    {
      title: "8-10 Interview Calls",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career4.webp",
      content: [
        "LearnBay's promise of 8-10 interview calls.",
        "Continuous interview opportunities.",
        "Open-ended access to potential employers.",
      ],
    },
  ];
  const notcalls = [
    {
      title: "Mock Interviews",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career2.webp",
      content: [
        "LearnBay's targeted mock interviews sessions to ready you for your dream role.",
        "Actionable feedback for skill enhancement that keeps you in pace with interview trends.",
        "Industry-specific interview practice so that you can crack your dream job.",
      ],
    },
    {
      title: "Resume BuildUp",
      icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/career3.webp",
      content: [
        "LearnBay's tailored resume-building guidance.",
        "Strategic advice for impactful resumes.",
        "Tools and tips for resume optimization.",
      ],
    },
  ];

  const [activeService, setActiveService] = useState(0);
  const [withActiveService, setWithActiveService] = useState(0);
  const [not8call, setnot8call] = useState(0);
  const currentService = services[activeService];
  const withoutCurrentService = withoutServices[withActiveService];
  const notcallServices = notcalls[not8call];

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderServiceItem = (service, index) => {
    const isActive = index === activeService;

    const handleClick = () => {
      if (isMobileView) {
        // Toggle the active tab on mobile view
        setActiveService((prevActive) => (prevActive === index ? null : index));
        setWithActiveService((prevActive) =>
          prevActive === index ? null : index
        );
        setnot8call((prevActive) => (prevActive === index ? null : index));
      } else {
        // Always open the clicked tab on non-mobile view
        setActiveService(index);
        setWithActiveService(index);
        setnot8call(index);
      }
    };

    const activeClass = isActive ? styles.ActiveH4 : styles.H4;

    return (
      <div className={styles.panel} key={index}>
        <div onClick={handleClick} className={activeClass}>
          <div className={styles.img}>
            <Image
              src={service.icon}
              loading="lazy"
              width="25"
              height="25"
              alt="Bulb"
              quality={40}
            />
            <h4>{service.title}</h4>
          </div>
          <div>
            <IoIosArrowForward className={styles.rightIcon} />
          </div>
        </div>
        {index === activeService ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              {WithoutService ? (
                <h6>{withoutCurrentService.title}</h6>
              ) : notcall ? (
                <h6>{notcallServices.title}</h6>
              ) : (
                <h6>{currentService.title}</h6>
              )}
              {WithoutService ? (
                <>
                  {withoutCurrentService.content.map((point, i) => (
                    <div key={i} className={styles.mainCont}>
                      <BsCheckCircle className={styles.checkCircle} />
                      <p className={styles.para}>{point}</p>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {currentService.content.map((point, i) => (
                    <div key={i} className={styles.mainCont}>
                      <BsCheckCircle className={styles.checkCircle} />
                      <p className={styles.para}>{point}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className={`imgWrapper ${styles.right}`}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/doamain-new.webp"
                width="200"
                height="200"
                quality={40}
                alt="projectLabs"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <div className={styles.Course} id="servicePro">
      <h2>
        Get job ready within 6 months with Career Services{" "}
        {WithoutService || notcall ? (
          ""
        ) : (
          <span style={{ color: "#FE7A36" }}>PRO</span>
        )}
      </h2>

      <div className={styles.courses}>
        {WithoutService ? (
          <div className={styles.listPanel}>
            {withoutServices.map(renderServiceItem)}
          </div>
        ) : notcall ? (
          <div className={styles.listPanel}>
            {notcalls.map(renderServiceItem)}
          </div>
        ) : (
          <div className={styles.listPanel}>
            {services.map(renderServiceItem)}
          </div>
        )}

        <div className={styles.middlePanel}>
          {activeService !== null && (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                {WithoutService ? (
                  <h6>{withoutCurrentService.title}</h6>
                ) : notcall ? (
                  <h6>{notcallServices.title}</h6>
                ) : (
                  <h6>{currentService.title}</h6>
                )}
                {WithoutService ? (
                  <>
                    {withoutCurrentService.content.map((point, i) => (
                      <div key={i} className={styles.mainCont}>
                        <BsCheckCircle className={styles.checkCircle} />
                        <p className={styles.para}>{point}</p>
                      </div>
                    ))}
                  </>
                ) : notcall ? (
                  <>
                    {notcallServices.content.map((point, i) => (
                      <div key={i} className={styles.mainCont}>
                        <BsCheckCircle className={styles.checkCircle} />
                        <p className={styles.para}>{point}</p>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {currentService.content.map((point, i) => (
                      <div key={i} className={styles.mainCont}>
                        <BsCheckCircle className={styles.checkCircle} />
                        <p className={styles.para}>{point}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className={`imgWrapper ${styles.right}`}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/doamain-new.webp"
                  width="200"
                  height="200"
                  quality={40}
                  alt="projectLabs"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderTabs;
