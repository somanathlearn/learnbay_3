import React, { useState, useEffect } from "react";
import styles from "./CareerHome.module.css";
import Image from "next/image";
import { TbDownload } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import Form from "../../Global/Form/Form";
import Popup from "../../Global/Popup/Popup";

function careerHome({
  dataScienceGeneric,
  dataScience,
  dataScienceCounselling,
  radio,
  interstedInHide,
}) {
  const [textOpen, setTextOpen] = useState(1);

  const toggleTab = (index) => {
    if (textOpen === index) {
      return setTextOpen(null);
    }
    setTextOpen(index);
  };

  const [popups, setPopups] = useState(false);
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLinks, setBrochureLinks] = useState();
  const [brochurePdfs, setBrochurePdfs]= useState();

  const popupShow = (title, link, linkTwo) => {
    setTitleCourse(title);
    setBrochureLinks(link);
    setBrochurePdfs(linkTwo);
    setPopups(true);
  };

  // Determine if the screen width is less than or equal to 640px
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  // State to hold the background image URL and type logo image URL
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    // Set the background image and type logo image based on the screen size after the component mounts
    setBgImage(
      isMobile
        ? "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/career_home_bg_mbl.webp"
        : "https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/Career-Home-N.webp"
    );
  }, [isMobile]);

  return (
    <section className={styles.section}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Syllabus</h5>
          <Form
            titleCourse={titleCourse}
            brochureLink={brochureLinks}
            brochurePdf={brochurePdfs}
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            dataScienceGeneric={dataScienceGeneric}
            radio={radio}
            downloadBrochure
            upSkillingHide={true}
            interstedInHide={interstedInHide}
          />
        </div>
      </Popup>
      <div className={styles.imgWrap}>
        <Image
          src={bgImage}
          alt="Learnbay"
       loading="lazy"
          height={800}
          width={1500}
        />
      </div>
      <div className={styles.mainDiv}>
        <h4 className={styles.mediaMainHeading}>Future-proof your career</h4>
        <p className={styles.greyText}>What are our advantages ?</p>
        <div className={styles.container}>
          <div className={styles.innerDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/Project-lab-01+(1).webp"
              alt="Learnbay"
              loading="lazy"
              height={212}
              width={400}
              className={styles.careerImg}
            />
            <div className={styles.DivCont01}>
              <h4 className={styles.goldenH4}>
              Project Innovation Lab
              </h4>
              <p className={styles.paraBot}>
                Work in an industry like environment and gain practical hands-on
                experience.
              </p>
            </div>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/Certification-021.webp"
              alt="Learnbay"
              loading="lazy"
              height={212}
              width={400}
              className={styles.careerImg}
            />
            <div className={styles.DivCont02}>
              <h4 className={styles.goldenH4}> Top industry certifications</h4>
            </div>
          </div>
          <div className={styles.innerDiv2}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/career-img.webp"
              alt="Learnbay"
         loading="lazy"
              height={310}
              width={194}
              className={styles.careerImg}
            />
          </div>
          <div className={`${styles.innerDiv} ${styles.downdiv}`}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/domain-03.webp"
              alt="Learnbay"
              loading="lazy"
              height={212}
              width={400}
              className={styles.careerImg}
            />
            <div className={styles.DivCont03}>
              <h4 className={styles.goldenH4}>Domain Specialisation</h4>
              <div className={styles.iconContent}>
                <div className={styles.mainBtn}>
                  <div
                    className={styles.btnContainer}
                    onClick={() => toggleTab(1)}
                  >
                    <div className={styles.btnIcon}>
                      <div className={styles.iconText}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/harvester.webp"
                          width="30"
                          height="30"
                          loading="lazy"
                          alt="data science course"
                        />
                        Manufacturing
                      </div>
                    </div>
                    <TbDownload
                      className={styles.iconDownload}
                      onClick={() => {
                        popupShow(
                          "Manufacturing Course",
                          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf",
                          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Manufacturing.pdf"
                        );
                      }}
                    />
                  </div>
                  <p
                    className={
                      textOpen === 1 ? styles.paraSideshow : styles.paraSide
                    }
                  >
                    Data science can help marketers tailor their efforts to suit
                    individual needs and preferences.
                  </p>
                </div>
                <div className={styles.mainBtn}>
                  <div
                    className={styles.btnContainer}
                    onClick={() => toggleTab(2)}
                  >
                    <div className={styles.btnIcon}>
                      <div className={styles.iconText}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/human_resources.webp"
                          width="31"
                          height="40"
                          loading="lazy"
                          alt="data science course"
                        />
                        HR & Sales
                      </div>
                    </div>
                    <TbDownload
                      className={styles.iconDownload}
                      onClick={() => {
                        popupShow(
                          "HR & Sales Course",
                          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf",
                          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Sales-Marketing-domain.pdf"
                        );
                      }}
                    />
                  </div>
                  <p
                    className={
                      textOpen === 2 ? styles.paraSideshow : styles.paraSide
                    }
                  >
                    Gain expertise in you domain and aim for higher salary
                    hikes.
                  </p>
                </div>
                <div className={styles.mainBtn}>
                  <div
                    className={styles.btnContainer}
                    onClick={() => toggleTab(3)}
                  >
                    <div className={styles.btnIcon}>
                      <div className={styles.iconText}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/split_transaction.webp"
                          width="30"
                          height="35"
                          loading="lazy"
                          alt="data science course"
                        />
                        BFSI
                      </div>
                    </div>
                    <TbDownload
                      className={styles.iconDownload}
                      onClick={() => {
                        popupShow(
                          "BFSI Course",
                          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf",
                          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Banking-Finance-and-Insurance-Domain.pdf"
                         
                        );
                      }}
                    />
                  </div>
                  <p
                    className={
                      textOpen === 3 ? styles.paraSideshow : styles.paraSide
                    }
                  >
                    Advanced analytics for risk assessment and fraud detection
                    in finance.
                  </p>
                </div>
                <div className={styles.mainBtn}>
                  <div
                    className={styles.btnContainer}
                    onClick={() => toggleTab(4)}
                  >
                    <div className={styles.btnIcon}>
                      <div className={styles.iconText}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/manager.webp"
                          width="35"
                          height="30"
                          loading="lazy"
                          alt="data science course"
                        />
                        Managers & Leader
                      </div>
                    </div>
                    <TbDownload
                      className={styles.iconDownload}
                      onClick={() => {
                        popupShow(
                          "Managers & Leader Course",
                          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf",
                          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/data-science-ai-for-managers-v1.pdf",
                        );
                      }}
                    />
                  </div>
                  <p
                    className={
                      textOpen === 4 ? styles.paraSideshow : styles.paraSide
                    }
                  >
                    Empowering Leaders with AI & Data Science Expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default careerHome;
