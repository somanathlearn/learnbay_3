import React, { useCallback, useState } from "react";
import styles from "./NewDSAHeader.module.css";
import Image from "next/image";
import Button from "@/components/Global/Button/Button";
import PopupContent from "@/components/Global/PopupContent/PopupContent";

const DSAHeader = ({
  spanTag,
  spanIcon,
  OrangeButton,
  title1,
  orgTitle,
  title2,
  points,
  mentorText,
  mentorFromImg,
  applicationIcon,
  CloseDes,
  ProgramIcon,
  DurationBot,
  DurationBotDate,
  trainingIcon,
  TrainingBot,
  TrainingBotFormat,
  CloseBotDate,
  BotWidth,
  BotHeight,
  backgroundImage,
  backgroundGradient,
  purpleButton,
  descrption,
  DSAdownloadBrochure,
  collaborationImg,
  backgroundImg,
  interstedInHide,
  titleCourse,
  brochureLink,
  brochurePdf,
}) => {
  const [popups, setPopups] = useState(false);
  const [requestDemoPopup, setRequestDemoPopup] = useState(false);

  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);

  const requestDemoShow = useCallback(() => {
    setRequestDemoPopup(true);
  }, []);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <PopupContent
          popups={popups}
          setPopups={setPopups}
          heading="Download Syllabus"
          downloadBrochure
          dataScience={true}
          interstedInHide={interstedInHide}
          upSkillingHide={true}
          titleCourse={titleCourse}
          brochureLink={brochureLink}
          brochurePdf={brochurePdf}
          // DSADemoSession={true}
        />
        <PopupContent
          popups={requestDemoPopup}
          setPopups={setRequestDemoPopup}
          heading="Book Your Demo Session"
          // downloadBrochure
          dataScienceCounselling={true}
          interstedInHide={interstedInHide}
          DSADemoSession={true}
        />
        <div className={styles.contentTitleWrapper}>
          <h1>
            {title1} <span>{orgTitle}</span> {title2}
          </h1>
          <h5>{spanTag}</h5>
          <div className={styles.svgWrapper}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="110"
              viewBox="0 0 109 147"
              fill="none"
            >
              <path
                d="M2.69663 1.51542C1.04836 1.68386 -0.151275 3.15659 0.0171577 4.80486C0.185598 6.45313 1.65833 7.65277 3.3066 7.48433L2.69663 1.51542ZM31.8805 121.879C30.7089 123.051 30.7089 124.95 31.8805 126.122L50.9723 145.214C52.1439 146.385 54.0434 146.385 55.215 145.214C56.3865 144.042 56.3865 142.143 55.215 140.971L38.2445 124L55.2151 107.03C56.3867 105.858 56.3867 103.959 55.2151 102.787C54.0435 101.616 52.144 101.616 50.9725 102.787L31.8805 121.879ZM3.3066 7.48433C37.1124 4.0297 61.3183 9.71765 77.257 19.8008C93.1449 29.8519 101.02 44.3798 102.135 59.2248C104.364 88.9153 79.4565 121 34.0018 121L34.0018 127C82.5454 127 110.638 92.3354 108.118 58.7755C106.858 41.9954 97.9203 25.7731 80.4647 14.7303C63.0599 3.71961 37.3909 -2.03 2.69663 1.51542L3.3066 7.48433Z"
                fill="#B887FC"
              />
            </svg>
          </div>
          <div className={styles.mobileSvgWrapper}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="73"
              viewBox="0 0 34 73"
              fill="none"
            >
              <path
                d="M1.39536 0.960615C0.821302 1.01928 0.403495 1.5322 0.462159 2.10625C0.520821 2.6803 1.03374 3.09811 1.60779 3.03945L1.39536 0.960615ZM8.95942 70.9099C8.90974 71.4848 9.33551 71.9911 9.91041 72.0408L19.279 72.8504C19.8539 72.9001 20.3602 72.4743 20.4099 71.8994C20.4595 71.3245 20.0338 70.8182 19.4589 70.7685L11.1313 70.0489L11.8509 61.7213C11.9006 61.1464 11.4748 60.64 10.8999 60.5904C10.325 60.5407 9.81871 60.9665 9.76903 61.5414L8.95942 70.9099ZM1.60779 3.03945C13.3633 1.83815 20.9346 4.31975 25.4602 8.75243C29.9934 13.1926 31.6932 19.8075 31.2208 27.3577C30.7489 34.9002 28.1112 43.2369 24.1514 50.8986C20.1919 58.5597 14.9474 65.4747 9.32792 70.2002L10.6728 71.7995C16.5466 66.8602 21.9505 59.7084 26.0078 51.858C30.0648 44.0083 32.8121 35.3888 33.3064 27.4881C33.8002 19.595 32.0476 12.2796 26.9224 7.25958C21.7896 2.23216 13.4968 -0.276044 1.39536 0.960615L1.60779 3.03945Z"
                fill="#B887FC"
              />
            </svg>
          </div>
        </div>
        <div className={styles.contentPointWrapper}>
          {points.map((point, index) => (
            <div className={styles.pointWrapper} key={point.id}>
              <div className={styles.pointsImgWrapper}>
                <Image
                  src={point.img}
                  alt={point.imgAlt}
                  width={60}
                  height={60}
                />
              </div>
              <p className={styles.pointText}>
                {point.text1}
                <span className={styles.pointTextBold}>{point.boldText}</span>
                {point.text2}
              </p>
              {index === 0 && (
                <div className={styles.staticPoints}>
                <p>Backend Engineering </p>
                <p>and GenAI </p>
                <p>Specialisation</p>
              </div>
              )}
              {index === 1 && (
                <div className={styles.staticPoints}>
                <p>Practice 200+ </p>
                <p>DSA Problems & </p>
                <p>System Design Projects</p>
              </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.mentorsWraper}>
          <div className={styles.mentorsContentsWraper}>
            <p className={styles.mentorText}>{mentorText}</p>
            <div className={styles.mentorFromImgWrapper}>
              {mentorFromImg.map((fromImg) => (
                <div className={styles.fromImgWrapper} key={fromImg.id}>
                  <Image
                    src={fromImg.img}
                    alt={fromImg.imgAlt}
                    width={fromImg.width}
                    height={fromImg.height}
                    quality={50}
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.buttonsWrapper}>
            <div onClick={requestDemoShow} className={styles.newDsaGrayBtn}>
              <Button
                text="Request Demo"
                newButton={true}
                grayButton={true}
              />
            </div>
            <div onClick={popupShow} className={styles.newDsaNewBlueBtn}>
              <Button
                text="Download Syllabus"
                newButton={true}
                newBlueButton={true}
              />
            </div>
          </div>
        </div>
        <div className={styles.headerIconsWrapper}>
          <div className={styles.TableauSoftwareIconWrapper}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/TableauSoftware.webp"
              alt="Tableau Software"
              width={40}
              height={40}
            />
          </div>
          <div className={styles.ModuleIconWrapper}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Module.webp"
              alt="Module"
              width={28}
              height={28}
            />
          </div>
          <div className={styles.PieChartIconWrapper}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/PieChart.webp"
              alt="Pie Chart"
              width={38}
              height={33}
            />
          </div>
          <div className={styles.HierarchyIconWrapper}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Hierarchy.webp"
              alt="Hierarchy"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSAHeader;
