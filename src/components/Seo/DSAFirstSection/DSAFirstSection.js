import React from "react";
import styles from "./DSAFirstSection.module.css";
import PointSVG from "./svg/Point";
import Button from "@/components/Global/Button/Button";

const DSAFirstSection = ({
  dataScience,
  softwareBtnHide,
  idss,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
  microsSoftOnly,
  ibmOnly,
  desc,
  interstedInHide,
  brochurePdf,
  titleCity,
}) => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.bgWrapRight}></div>
      <div className={styles.contentsWrapper}>
        <div className={styles.contents}>
          <div className={styles.contentLeft}>
            <p className={styles.topPara}>{firstTopPara}</p>
            <h1 className={styles.titleH1}>
              {firstHeading}{" "}
              <span className={styles.titleCitySpan}>{titleCity}</span>
            </h1>
            <p className={styles.titleDesc}>{desc}</p>
            <div className={styles.pointsDiv}>
              <div className={styles.headingPoint}>
                <PointSVG />
                <p>
                  Integrated With <span>Gen-AI</span> for Software Developers
                </p>
              </div>
              <div className={styles.headingPoint}>
                <PointSVG />
                <p>Practice 200+ DSA Problems & System Design Projects</p>
              </div>
            </div>
            <div className={styles.ctaButtonsDiv}>
              <button className={styles.grayButton}>Download Syllabus</button>
              <Button text="Start Application" />
            </div>
          </div>
          <div className={styles.contentRight}></div>
        </div>
      </div>
    </div>
  );
};

export default DSAFirstSection;
