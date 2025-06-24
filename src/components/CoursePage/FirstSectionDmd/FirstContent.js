import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "../../Global/Button/Button";
import styles from "./FirstSection.module.css";

const FirstContent = ({
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  cityParaCont,
  setPopups,
  setVideo,
}) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }


    return () => {
    };
  }, );

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <div className={styles.First}>
        <div className={styles.FirstLeft}>
        <p className={styles.ptopCiity}>Don’t Just Upskill, <br />
Become an Expert in your Domain</p>
          <h1 className={styles.h1}>
          Data Science & AI Course with
            <span className={styles.h1Span}> Domain Specialization</span>
          </h1>
          {mobile ? (
            ""
          ) : (
            <>
              <div className={styles.btnImage}>
                <div onClick={popupShow}>
                  <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
                </div>
                {/* <div onClick={popupShow}>
                  <Button whiteBgButton={true} text="ENQUIRE NOW" />
                </div> */}
              </div>
            </>
          )}
        </div>

        <div className={styles.secondLeft}>
          <div className={`"bgVideo"`}>
            <Image width="400" height="449" src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Dmd-header.webp" />
          </div>
        </div>

        {mobile ? (
          <>
            <div className={styles.Mobile}>
              <div className={styles.btnImageMobile}>
                <div onClick={popupShow}>
                  <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
                </div>
                {/* <div onClick={popupShow}>
                  <Button whiteBgButton={true} text="ENQUIRE NOW" />
                </div> */}
              </div>
              <div className={styles.secondLeft}>
                <div className={`"bgVideo"`}>
                  <Image width="300" height="337" src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Dmd-header.webp" />
                </div>
              </div>
            </div>{" "}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default FirstContent;
