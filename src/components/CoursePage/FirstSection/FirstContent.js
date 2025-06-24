import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaCheck, FaYoutube } from "react-icons/fa";
import Button from "../../Global/Button/Button";
import Form from "../../Global/Form/Form";
import styles from "./FirstSection.module.css";

// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const FirstContent = ({
  softwareBtnHide,
  firstToparaImg,
  firstHeading,
  firstTopPara,
  ibmOnly,
  cityParaCont,
  setPopups,
  setVideo,
  DSWolf,
  IBMGl,
  IIT,
  dataScience,
  interstedInHide,
  upSkillingHide,
  dataScienceGeneric,
  DSA,
  dataScienceCounselling,
  downloadBrochure,
  fullStack,
  titleCourse,
  radio,
  topHide,
  fresher,
  backgorunimg,
  isSpecialPage,
  isGuwahati,
  backgroundImage,
  microsoftOnly,
  DSAFresherHeadContent,
}) => {
  const texts = [
    "Guaranteed Interview Calls",
    "1:1 Doubt Session",
    "IBM Project Certification",
    "Designed for Professionals",
  ];

  const textfresher = [
    "Guaranteed Interview Calls",
    "1:1 Doubt Session",
    "6 Months Internship Certificate",
    "Final Year Project Assistance",
  ];

  const [mobile, setMobile] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
    const isVideoInView = (scrollY) => {
      // Implement logic to check if the video is in view
      // For simplicity, you can replace this with your own logic
      return true;
    };
    const handleScroll = () => {
      const threshold = 300;
      const scrollY = window.scrollY;

      const scrollDirection = scrollY > lastScrollTop ? "down" : "up";
      const isScrollingUp = scrollDirection === "up";
      const isBeyondThreshold = scrollY <= threshold;

      setShowThumbnail(
        isBeyondThreshold || (isScrollingUp && !isVideoInView(scrollY))
      );
      setLastScrollTop(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const popupShow = () => {
    setPopups(true);
  };

  const videoShow = () => {
    setVideo(true);
    setShowThumbnail(false);
    if (videoRef.current) {
      videoRef.current.seekTo(0); // Reset video to start
      videoRef.current.getInternalPlayer().play(); // Play the video
    }
  };
  const customStyles = `
  .react-player__play-icon {
    display: none !important;
  }
`;
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`, // Apply backgroundImage as background image style
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  // const youtubeVideoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <>
      <style>{customStyles}</style>
      <div
        className={styles.First}
        style={backgorunimg ? containerStyle : { backgroundImage }}
      >
        <div className={styles.FirstLeft}>
          {topHide ? "" : <p className={styles.ptopC}>{firstTopPara}</p>}
          {DSA ? (
            <h1 className={`${styles.h1} ${styles.DsaH1}`}>
              {firstHeading}{" "}
              <span className={styles.DsaSpan}>{firstToparaImg}</span>
            </h1>
          ) : (
            <h1
              className={`${styles.h1} ${
                isSpecialPage ? styles.specialPageH1 : ""
              }`}
            >
              {firstHeading}{" "}
              <span className={styles.h1Span}>{firstToparaImg}</span>
            </h1>
          )}
          {DSA ? (
            <p className={`${styles.ptopCiity} ${styles.ptopGen}`}>
              {cityParaCont.split("Gen-AI").map((part, index, arr) => (
                <React.Fragment key={index}>
                  {part}
                  {index < arr.length - 1 && (
                    <span className={styles.GENAI}>Gen-AI</span>
                  )}
                </React.Fragment>
              ))}
            </p>
          ) : (
            <p className={styles.ptopCiity}>{cityParaCont}</p>
          )}
          {mobile ? (
            ""
          ) : (
            <>
              {microsoftOnly ? (
                                <div className={styles.microsoftDiv}>
                         <p className={styles.ptop}>In Collaboration With</p>{" "}
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/micrososfttss.webp"
                  width={190}
                  height={40}
                  priority
                  alt="data science course"
            
                />
                </div>
              ) : DSAFresherHeadContent? (
                <div className={styles.listContent}>
                <div className={styles.pointContent}>
                <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/sign_mark.webp"
                width={25}
                height={25}
                alt="icon"
                priority
                quality={80}
              />
              <p>Industry-Recognized Certification</p>
                </div>
                <div className={styles.pointContent}>
                <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/sign_mark.webp"
                width={25}
                height={25}
                alt="icon"
                priority
                quality={80}
              />
              <p>Hands-On Project Validation</p>
              </div>
              <div className={styles.pointContent}>
                <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/sign_mark.webp"
                width={25}
                height={25}
                alt="icon"
                priority
                quality={80}
              />
              <p>Boost Your Career Prospects</p>
              </div>
                </div>
              ):
              (
                <div className={ibmOnly ? styles.DAibm : styles.Desktop}>
                  {IIT ? (
                    <>
                      {" "}
                      <p className={styles.ptop}>In Collaboration With</p>{" "}
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/iit_guwati_logo.webp"
                        width={180}
                        height={50}
                        priority
                        alt="data science course"
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      {DSWolf ? (
                        <>
                          <p className={styles.ptop}>
                            Degree & Certification(s)
                          </p>
                          <div className={styles.ImageBlock}>
                            <Image
                              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/DS-only.webp"
                              width="430"
                              height="44"
                              priority
                              alt="data science course"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <p className={styles.ptop}>In Collaboration With</p>
                          <div className={styles.ImageBlock}>
                            {ibmOnly ? (
                              <Image
                                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibmnew.webp"
                                width="70"
                                height="30"
                                priority
                                alt="data science course"
                              />
                            ) : (
                              <Image
                                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                                width="266"
                                height="48"
                                priority
                                alt="data science course"
                              />
                            )}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              )}

              {isGuwahati ? (
                <>
                  <div className={styles.twodiv}>
                    <div className={styles.divone}>
                      <span>
                        <FaCheck />
                      </span>{" "}
                      Campus Immersion
                    </div>
                    <div className={styles.divone}>
                      <span>
                        <FaCheck />
                      </span>{" "}
                      Industry Certification
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                 {DSA ? (""):(<> {fresher ? (
                    <div className={styles.animationTextWrap}>
                      <span className={styles.animationText}>
                        <div className={styles.gur}>
                          <svg
                            height="30"
                            width="30"
                            fill="none"
                            viewBox="0 0 39 37"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              height="37"
                              width="39"
                              fill="url(#pattern0_17_489)"
                            />
                            <defs>
                              <pattern
                                height="1"
                                id="pattern0_17_489"
                                width="1"
                                patternContentUnits="objectBoundingBox"
                              >
                                <use
                                  transform="matrix(0.00988248 0 0 0.0104167 0.025641 0)"
                                  xlinkHref="#image0_17_489"
                                />
                              </pattern>
                              <image
                                height="96"
                                id="image0_17_489"
                                width="96"
                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMUlEQVR4nO2dO4hWRxSAZ4nZaFZ8oEYDpkqRysKQ2l1sVEQCgo/GJBaBBIKwSiJpImihhaK2NlqIiK81WFisaBJIDAhCIKgJgSz4QBaMj9VY+PjCYadYdO+fe/87r505X7975pzv/++dO3fm/MYoiqIoiqIoiqIoiqIoSkOAOcBnwBBwA3hMPjy2OZ0BPpVck/mAANOBb4D7lMM/wNfAW7GL/y7wK+VyGVgUs/gjsSuQACPBJchXr/BP/qv8EvRyBGx/bQjKtpCznU433FNAP9BnMgHosznJLKiKe8DsEIORqWYVgyZzgG0d8v8kxABknj8Zp00hELMGwB8VwZeZQmD8cjQZN0IEH6sIPtMUAjCzogZjIYJPiikMYtXBd2DGZ1kbgaPATeClveztBd4xiZCdAGCZvbk9q4oB3AaWmATIRgAwDdhDfeTbMN1tVoUKAHqA72nOFveZlSlgK93xt3xz3GdXkAC7oDdK92zwk2E5AtbTjit+MixHwEHaM+AnyzIE/OBAwDE/WZYh4KYDAaN+sixDwAMHAp76ybIMAc8cCPjTT5ZlCBhzIGCHnyzLEDDSsvi/AW/7ybIMAVdaFP8asNhPhuUIONJl8UXcAj/ZlSVgsIviXwRmmQTIQUB/w+IPRd+LmZmA3gYzoTsxb7hZCrD/62xNASdMYuQi4POaAs6bxMhFwFxZTqghYDT2C5gsBQjAceqx0iRETgJW1BSQ1NbHnAT0AL/XECD7g5aaRMhGgABsph7nTCLkJqC3wQua5SYBshIgAF/VFPBXCg9lOQp4U16w1JSw3002rcablwABWFdTwAtgrYlIrgJ67NnbOjztdCgEeA/4EjgMDAOHgDUuxpmtAAH4EHheU8ITW+ReK+8jYCdwtcPfDLs4TJKtAEGu8TTj34bvmC8Ab5gW5C6gz27A9cmO1OsQNTCw0j79+uJ5m4OFoeoQNTBwAL/Iw9+81OsQLTDjrXBk+4lPhlKvQ9TAwAcBehGtT70OUQMzvmTtYitjFT9OhTpEDQxs8VZ+eDRV6hD1oDbwnScBD7sYS3kCBGCXBwHDpiHFChBswzxZkHPFatOQogUIwMeOtrjvM11QvAABeB/4qUXx5YR+j+kCFWCRRTXbt/Rhg8LLEse3pgUq4BVkSQHYXUPEXWCVaYkKqACYYQ+Bn7TthmWp+hZwCfjCVWM9FRCZmAK0ZRnMcvVA57JpX78pBGAgZtO+qualZ0whUH2u4VSI4NI/P2773ojYp/AqNoUYwBzbP7/TWa6BDFsXD/zPiZ4wrYtrfApKZTBI8Sd0u6q7gaoEfpa9ScEEWAmLAmwdmQpIDRYGLf4ECfMdNV6ayj/cEOcnTCZI6LUt3eUmVAr3bMfHsJedTsgMQPrny1ku4LqjtfpUGLMNQiS3TcFmO4qiKIqiKIqiKIqiKIrJif8AdURhYYnBLUUAAAAASUVORK5CYII="
                              />
                            </defs>
                          </svg>
                          Guaranteed Interview Calls
                        </div>
                      </span>
                    </div>
                  ) : (
                    <>
                      {IBMGl ? (
                        <div className={styles.animationTextWrap}>
                          {textfresher.map((text, index) => (
                            <div
                              key={index}
                              className={styles.verticalSlideWrapper}
                            >
                              <span className={styles.animationText}>
                                {text}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={styles.animationTextWrap}>
                          {texts.map((text, index) => (
                            <div
                              key={index}
                              className={styles.verticalSlideWrapper}
                            >
                              <span className={styles.animationText}>
                                {text}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}</>)}
                </>
              )}

              {isGuwahati ? (
                <>
                  <div className={styles.btnImage2}>
                    <div onClick={popupShow}>
                      <Button text="DOWNLOAD BROCHURE" />
                    </div>
                    {softwareBtnHide ? (
                      ""
                    ) : (
                      <Link href="/master-application">
                        <div className={styles.btnImage}>
                          <Button
                            whiteBgButton={true}
                            text="START MY APPLICATION"
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                <div className={styles.btnImage}>
                  <div onClick={popupShow}>
                    <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
                  </div>
                  {softwareBtnHide ? (
                    ""
                  ) : (
                    <div onClick={videoShow} className={styles.FaPlay}>
                      INTRO VIDEO <FaYoutube className={styles.IconYou} />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.secondLeft}>
          <div className={styles.form}>
            {isGuwahati ? (
              <>
                {" "}
                <h4>
                  Interested in{" "}
                  <span style={{ color: "#FE7A36" }}> Degree?</span>
                </h4>
              </>
            ) : (
              <>
                {" "}
                <p className={styles.p}>Free Career Counselling</p>
              </>
            )}

            <Form
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              radio={radio}
              downloadBrochure={downloadBrochure}
              fullStack={fullStack}
              dataScienceGeneric={dataScienceGeneric}
              upSkillingHide={upSkillingHide}
              interstedInHide={interstedInHide}
            />
          </div>
          {/* {S3RightImage ? (
            <div className={`"bgVideo"`}>
              <Image width="462" height="400" src={FirstRightImg} />
            </div>
          ) : (
            <div onClick={videoShow} className={`${styles.bgvidos} "bgVideo"`}>
              <Image width="532" height="300" src={thumbnailUrl} />
            </div>
          )}  */}
        </div>

        {mobile ? (
          <>
            <div className={styles.Mobile}>
              {microsoftOnly ? (
                <>
                  <p className={styles.ptoptwo}>In Collaboration With</p>{" "}
                  <div className={styles.ImageBlock}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/micrososfttss.webp"
                      width={160}
                      height={30}
                      priority
                      alt="data science course"
                    />
                  </div>
                </>
              ) : DSAFresherHeadContent? (
                <div className={styles.listContent}>
                <div className={styles.pointContent}>
                <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/sign_mark.webp"
                width={25}
                height={25}
                alt="icon"
                priority
                quality={80}
              />
              <p>Industry-Recognized Certification</p>
                </div>
                <div className={styles.pointContent}>
                <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/sign_mark.webp"
                width={25}
                height={25}
                alt="icon"
                priority
                quality={80}
              />
              <p>Hands-On Project Validation</p>
              </div>
              <div className={styles.pointContent}>
                <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/sign_mark.webp"
                width={25}
                height={25}
                alt="icon"
                priority
                quality={80}
              />
              <p>Boost Your Career Prospects</p>
              </div>
                </div>
              ): (
                <>
                  {" "}
                  {IIT ? (
                    <>
                      <p className={styles.ptoptwo}>In Collaboration With</p>{" "}
                      <div className={styles.ImageBlock}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/iit_guwati_logo.webp"
                          width="340"
                          height="44"
                          priority
                          alt="data science course"
                          className={styles.imgGuwahati}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      {DSWolf ? (
                        <>
                          <p className={styles.ptop}>
                            Degree & Certification(s)
                          </p>
                          <div className={styles.ImageBlock}>
                            <Image
                              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/DS-only.webp"
                              width="340"
                              height="44"
                              priority
                              alt="data science course"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <p className={styles.ptop}>In Collaboration With</p>
                        </>
                      )}
                      <div className={styles.ImageBlock}>
                        {ibmOnly ? (
                          <Image
                            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibmnew.webp"
                            width="70"
                            height="30"
                            priority
                            alt="data science course"
                          />
                        ) : (
                          <Image
                            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                            width="250"
                            height="40"
                            priority
                            alt="data science course"
                          />
                        )}
                      </div>
                    </>
                  )}
                </>
              )}
              {isGuwahati ? (
                <div className={styles.twodiv}>
                  <div className={styles.divone}>
                    <span>
                      <FaCheck />
                    </span>{" "}
                    Campus Immersion
                  </div>
                  <div className={styles.divone}>
                    <span>
                      <FaCheck />
                    </span>{" "}
                    Industry Certification
                  </div>
                </div>
              ) : (
                ""
              )}

              {isGuwahati ? (
                <>
                  {" "}
                  <div className={styles.btnImage2}>
                    <div onClick={popupShow}>
                      <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
                    </div>
                    {softwareBtnHide ? (
                      ""
                    ) : (
                      <Link href="/master-application">
                        <div>
                          <Button
                            whiteBgButton={true}
                            text="START MY APPLICATION"
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className={styles.btnImageMobile}>
                    <div onClick={popupShow}>
                      <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
                    </div>
                    {softwareBtnHide ? (
                      ""
                    ) : (
                      <div onClick={videoShow} className={styles.FaPlay}>
                        INTRO VIDEO <FaYoutube className={styles.IconYou} />
                      </div>
                    )}
                  </div>
                </>
              )}

              <div className={styles.secondLeft}>
                <div className={styles.form}>
                  <p className={styles.p}>Free Career Counselling</p>
                  <Form
                    dataScience={dataScience}
                    dataScienceCounselling={dataScienceCounselling}
                    radio={radio}
                    downloadBrochure={downloadBrochure}
                    fullStack={fullStack}
                    titleCourse={titleCourse}
                    // brochureLink={brochureLink}
                    dataScienceGeneric={dataScienceGeneric}
                    upSkillingHide={upSkillingHide}
                    interstedInHide={interstedInHide}
                  />
                </div>
                {/* {S3RightImage ? (
                  <div className={`"bgVideo"`}>
                    <Image width="231" height="200" src={FirstRightImg} />
                  </div>
                ) : (
                  <div
                    onClick={videoShow}
                    className={`${styles.bgvidos} "bgVideo"`}
                  >
                    <Image width="356" height="200" src={thumbnailUrl} />
                  </div>
                )} */}
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
