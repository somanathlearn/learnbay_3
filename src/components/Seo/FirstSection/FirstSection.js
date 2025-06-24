import React, { Suspense, lazy, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import styles from "./FirstSection.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

const Form = lazy(() => import("../../Global/Form/Form"));
const Button = dynamic(() => import("../../Global/Button/Button"));
const VideoPopup = dynamic(() => import("../../Seo/VideoPopup/VideoPopup"));
const Popup = dynamic(() => import("../../Global/Popup/Popup"));

function FirstSection({
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
  cityParaCont,
  interstedInHide,
  brochurePdf,
}) {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);

  const videoSHow = () => {
    setVideo(true);
  };

  const el = useRef(null);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <div className={styles.First}>
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          downloadBrochure
        >
          <div className="leftPopup">
            <div
              className="whiteP"
              style={{ width: "340px", height: "400px" }}
            ></div>
          </div>
          <div className="RightPopup">
            <h5>Download Syllabus</h5>
            <Suspense fallback={<div>Loading...</div>}>
              <Form
                dataScience={dataScience}
                dataScienceCounselling={dataScienceCounselling}
                downloadBrochure
                upSkillingHide={true}
                titleCourse={titleCourse}
                brochureLink={brochureLink}
                brochurePdf={brochurePdf}
                interstedInHide={interstedInHide}
              />
            </Suspense>
          </div>
        </Popup>
        <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />

        {/* For Mobile View */}
        <div className={styles.FirstLeft}>
          <p className={styles.ptopC}>{firstTopPara}</p>
          <h1 className={styles.h1}>
            {firstHeading}{" "}
            <span className={styles.h1Span}>{firstToparaImg}</span>
          </h1>
          <p className={styles.ptopCiity}>{cityParaCont}</p>
          <div className={styles.IBMlogoPlay}>
            <Image
              src={FirstRightImg}
              width={508}
              height={327}
              alt="data science course"
              priority // Priority for critical images
            />
          </div>
          <div className={styles.Desktop}>
            <p className={styles.ptop}>In Collaboration With</p>
            <div className={styles.ImageBlock}>
              {microsSoftOnly ? (
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/micrososfttss.webp"
                  width={150}
                  height={30}
                  priority
                  alt="data science course"
                />
              ) : (
                <>
                  {" "}
                  {ibmOnly ? (
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/ibm-single-home.png"
                      width={127}
                      height={51}
                      loading="lazy" // Lazy load non-critical images
                      alt="data science course"
                    />
                  ) : (
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                      width={266}
                      height={48}
                      loading="lazy" // Lazy load non-critical images
                      alt="data science course"
                    />
                  )}
                </>
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
            {!softwareBtnHide && (
              <div onClick={videoSHow}>
                <Button
                  whiteBgButton={true}
                  text="INTRO VIDEO"
                  passIcon={<FaPlay className="bIconS" fontSize="14px" />}
                />
              </div>
            )}
          </div>
        </div>

        {/* For desktop View */}
        <div className={styles.secondLeft}>
          <div className="imgWrapper">
            <Image
              src={FirstRightImg}
              width={600}
              height={460}
              alt="data science course"
              priority // Priority for critical images
            />
          </div>
        </div>
        <div className={styles.Mobile}>
          <p className={styles.ptop}>In Collaboration With</p>
          <div className={styles.ImageBlock}>
            {microsSoftOnly ? (
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/micrososfttss.webp"
                width={190}
                height={40}
                priority
                alt="data science course"
              />
            ) : (
              <>
                {ibmOnly ? (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/ibm-single-home.png"
                    width={127}
                    height={51}
                    loading="lazy" // Lazy load non-critical images
                    alt="data science course"
                  />
                ) : (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                    width={283}
                    height={51}
                    loading="lazy" // Lazy load non-critical images
                    alt="data science course"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.btnImageMobile}>
        <div onClick={popupShow}>
          <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
        </div>
        {!softwareBtnHide && (
          <div onClick={videoSHow}>
            <Button
              whiteBgButton={true}
              text="INTRO VIDEO"
              passIcon={<FaPlay className="bIconS" fontSize="14px" />}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default React.memo(FirstSection);
