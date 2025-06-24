import { Suspense, memo, useCallback, useState } from "react";
import Image from "next/image";
import styles from "./NewCyberECCouncilHeader.module.css";
import dynamic from "next/dynamic";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import Button from "@/components/Global/Button/Button";
import Form from "@/components/Global/Form/Form";

const Header = memo(
  ({
    spanTag,
    spanIcon,
    OrangeButton,
    title,
    orgTitle,
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
    backgroundImage, // URL for background image
    backgroundGradient, // CSS for gradient
    purpleButton,
    descrption,
    downloadBrochure,
    collaborationImg,
    backgroundImg,
    isCyberSecurity,
    interstedInHide,
    titleCourse,
    brochureLink,
    brochurePdf,
  }) => {
    const [popups, setPopups] = useState(false);
    const [applyCounselingPopup, setApplyCounselingPopup] = useState(false);

    // Memoized callback to show download popup
    const popupShow = useCallback(() => {
      setPopups(true);
    }, []);

    // Memoized callback to show apply counseling popup
    const applyCounselingShow = useCallback(() => {
      setApplyCounselingPopup(true);
    }, []);

    const backgroundImageContainerStyle = {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return (
      <section className={styles.mainBg}>
        <div className={styles.containerWrapper}>
          <PopupContent
            popups={popups?popups:applyCounselingPopup}
            setPopups={popups?setPopups:setApplyCounselingPopup}
            heading={popups ? "Download Syllabus" : "Apply For Counselling"}
            downloadBrochure={popups ? true : false}
            dataScience={popups?true:false}
            dataScienceCounselling={applyCounselingPopup?true:false}
            interstedInHide={interstedInHide}
            upSkillingHide={true}
            titleCourse={titleCourse}
            brochureLink={brochureLink}
            brochurePdf={brochurePdf}
          />
          <div
            className={
              backgroundImg ? styles.backgroundImgContainer : styles.container
            }
            style={backgroundImg ? backgroundImageContainerStyle : null}
          >
            <div className="width">
              <div className={styles.innerDiv}>
                <div className={styles.firstSection}>
                  <div className={styles.starDiv}>
                    <Image
                      src={spanIcon}
                      alt="Curriculum Inclusive of Gen-AI"
                      width={59}
                      height={72}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/hero_brain.webp"
                      quality={50}
                    />
                    <h5>{spanTag}</h5>
                  </div>
                  <h1>
                    {title}
                    <span
                      className={
                        isCyberSecurity ? styles.cyberSpan : styles.span
                      }
                    >
                      {" "}
                      {orgTitle}
                    </span>
                  </h1>
                  <div className={styles.starDivSection}>
                    <div className={styles.starDiv}>
                      <p>{descrption}</p>
                    </div>
                  </div>
                  <div className={styles.imgBot}>
                    {collaborationImg ? (
                      <>
                        <div className={styles.collaborationDivWrapper}>
                          <p>In Collaboration With</p>
                          <div className={styles.collaborationImgWrapper}>
                            <Image
                              src={collaborationImg}
                              height={30}
                              width={330}
                              alt="Collaboration Image"
                              priority
                              quality={50}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={styles.wrapper}>
                          <Image
                            src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/ibm_microsoft_head.webp"
                            alt="Video Thumbnail"
                            fill
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/ibm_microsoft_head.webp"
                            quality={60}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className={styles.btnDiv}>
                    <div onClick={applyCounselingShow} className={styles.btn}>
                      <Button text="Apply for Counseling"  newButton={true} grayButton={true}/>
                    </div>
                    <div onClick={popupShow} className={styles.btn}>
                      <Button text="Download Syllabus" newButton={true} newBlueButton={true}/>
                    </div>
                  </div>

                  <div className={styles.btnDivM}>
                    <div onClick={applyCounselingShow} className={styles.cyberECCouncilGrayBtn}>
                      <Button text="Apply for Counseling" newButton={true} grayButton={true}/>
                    </div>
                    <div onClick={popupShow} className={styles.cyberECCouncilNewBlueBtn}>
                      <Button text="Download Syllabus" 
                      newButton={true} newBlueButton={true}/>
                    </div>
                  </div>
                </div>

                <Suspense fallback={<div>Loading Form...</div>}>
                  <div className={styles.formdiv}>
                    <h3>
                      Check Your{" "}
                      <span
                        className={
                          isCyberSecurity ? styles.cyberSpan : styles.span
                        }
                      >
                        Eligibility
                      </span>
                    </h3>
                    <Form interstedInHide={interstedInHide} dataScienceCounselling={true}/>
                  </div>
                </Suspense>
              </div>
            </div>
          </div>

          {/* <div className="containerWidth">
            <div className={styles.botDiv}>
              <div className={styles.innerBotDiv}>
                <div className={styles.botWrapper}>
                  <Image
                    src={applicationIcon}
                    alt="Application Closes"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/application_b.webp"
                    quality={50}
                  />
                </div>
                <div className={styles.content}>
                  <p>{CloseDes}</p>
                  <h3>{CloseBotDate}</h3>
                </div>
              </div>
              <div className={styles.innerBotDiv}>
                <div className={styles.botWrapper}>
                  <Image
                    src={ProgramIcon}
                    alt="Program Duration"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_b.webp"
                    quality={50}
                  />
                </div>
                <div className={styles.content}>
                  <p>{DurationBot}</p>
                  <h3>{DurationBotDate}</h3>
                </div>
              </div>
              <div className={styles.innerBotDiv}>
                <div className={styles.botWrapper}>
                  <Image
                    src={trainingIcon}
                    alt="Training Format"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/training_b.webp"
                    quality={50}
                  />
                </div>
                <div className={styles.content}>
                  <p>{TrainingBot}</p>
                  <h3>{TrainingBotFormat}</h3>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
);

export default Header;
