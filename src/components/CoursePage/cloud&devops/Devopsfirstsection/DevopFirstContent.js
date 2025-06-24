import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Button from "../../../Global/Button/Button";
import styles from "./DevopFirstSection.module.css";

const FirstContent = ({
  softwareBtnHide,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  ibmOnly,
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
  }, []);

  const popupShow = () => {
    setPopups(true);
  };
  const videoSHow = () => {
    setVideo(true);
  };

  return (
    <>
      <div className={styles.First}>
        <div className={styles.FirstLeft}>
          <p className={styles.ptopC}>{firstTopPara}</p>
          <h1 className={styles.h1}>
            {firstHeading}{" "}
            <span className={styles.h1Span}>{firstToparaImg}</span>
          </h1>
          <p className={styles.ptopCiity}>{cityParaCont}</p>
          {mobile ? (
            ""
          ) : (
            <>
              <div className={ibmOnly ? styles.DAibm : styles.Desktop}>
                <p className={styles.ptop}>In Collaboration With</p>
                <div className={styles.ImageBlock}>
                  {ibmOnly ? (
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibmnew.webp"
                      width="70"
                      height="30"
                      priority
                      alt="data science course"
                      loading="lazy"
                    />
                  ) : (
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                      width="266"
                      height="48"
                      priority
                      alt="data science course"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
              <div className={styles.animationTextWrap}>
                <span className={styles.animationText}>
                  Guaranteed Interview Calls
                </span>
              </div>
              {/* Button */}
              <div className={styles.btnImage}>
                <div onClick={popupShow}>
                  <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
                </div>
                {softwareBtnHide ? (
                  ""
                ) : (
                  <div onClick={videoSHow}>
                    <Button
                      whiteBgButton={true}
                      text="INTRO VIDEO"
                      passIcon={<FaPlay />}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        {/* For desktop View */}
        <div className={styles.secondLeft}>
          <div className="bgImg">
            <Image
              loading="lazy"
              src={FirstRightImg}
              fill={true}
              style={{ objectFit: "contain" }}
              alt="data science course"
              priority
              // placeholder="blur"
              // blurDataURL={imagesSet}
              quality={55}
            />
          </div>
        </div>
        {mobile ? (
          <>
            <div className={styles.Mobile}>
              <p className={styles.ptop}>In Collaboration With</p>
              <div className={styles.ImageBlock}>
                {ibmOnly ? (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibmnew.webp"
                    width="70"
                    height="30"
                    priority
                    alt="data science course"
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                    width="283"
                    height="51"
                    priority
                    alt="data science course"
                    loading="lazy"
                  />
                )}
              </div>
            </div>{" "}
            <div className={styles.btnImageMobile}>
              <div onClick={popupShow}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
              {softwareBtnHide ? (
                ""
              ) : (
                <div onClick={videoSHow}>
                  <Button
                    whiteBgButton={true}
                    text="INTRO VIDEO"
                    passIcon={<FaPlay />}
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default FirstContent;
