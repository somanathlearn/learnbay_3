"use client";
import Image from "next/image";
import styles from "./ProgramSection.module.css";
import { useState, memo, useMemo, useEffect } from "react";
import Popup from "@/components/Global/Popup/Popup";
import Form from "@/components/Global/Form/Form";

// const Form = dynamic(() => import("../../global/form/Form"), { ssr: false });
// const Popup = dynamic(() => import("../../global/popup/Popup"), { ssr: false });

const ProgramSection = memo(
  ({
    designOverrides,
    popupProps,
    programSectionData,
    dataScience,
    dataScienceCounselling,
    interstedInHide,
    titleCourse,
    brochureLink,
    brochurePdf,
    upSkillingHide,
  }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [popups, setPopups] = useState(false);
    const popupShow = () => setPopups(true);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 768px)"); // Mobile breakpoint

      // Function to update the state based on matchMedia
      const handleMediaChange = (event) => {
        setIsMobile(event.matches);
      };

      // Initial check
      setIsMobile(mediaQuery.matches);

      // Add event listener for changes
      mediaQuery.addEventListener("change", handleMediaChange);

      // Cleanup on unmount
      return () => {
        mediaQuery.removeEventListener("change", handleMediaChange);
      };
    }, []);

    const memoizedProgramSectionData = useMemo(() => {
      if (
        !programSectionData ||
        !Array.isArray(programSectionData) ||
        programSectionData.length === 0
      ) {
        return [];
      }
      return programSectionData;
    }, [programSectionData]);

    if (memoizedProgramSectionData.length === 0) {
      return <div>Error: Program section data is missing or empty</div>;
    }

    const { popupTitle = "Apply For Counselling", rightImg } = useMemo(() => {
      return memoizedProgramSectionData[0] || {};
    }, [memoizedProgramSectionData]);

    return (
      <section
        className={`${styles.container} ${designOverrides?.container || ""}`}
        style={designOverrides?.containerStyle}
      >
        {/* Popup Section */}
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          popup={true}
          // radio={radio}
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
        >
          <div className="leftPopup">
            <div
              className="whiteP"
              style={{ width: "340px", height: "400px" }}
            ></div>
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form
              titleCourse={titleCourse}
              brochureLink={brochureLink}
              brochurePdf={brochurePdf}
              dataScience={dataScience}
              interstedInHide={interstedInHide}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={upSkillingHide}
              // radio={radio}
            />
          </div>
        </Popup>

        {/* Main Content */}
        <div className="width">
          <div className={styles.innerDiv}>
            <h2>
              <span className={styles.innerDivH2Span}>Who is this</span>
              <span> Program for?</span>
            </h2>
            <div className={styles.twoSection}>
              <div className={styles.topBorderDiv1}></div>
              <div className={styles.topBorderDiv2}></div>
              <div className={styles.bottomBorderDiv1}></div>
              <div className={styles.bottomBorderDiv2}></div>
              {memoizedProgramSectionData.map((section, index) => {
                const { content = {} } = section;

                return (
                  <div key={index} className={styles.firstSection}>
                    <h3 className={styles.H3}>
                      <span className={styles.blackSpan}>
                        {content?.BoldText}{" "}
                      </span>
                      {content?.nonBold}
                      <span className={styles.colors}> {content?.yearExp}</span>
                    </h3>
                    {!isMobile && (
                      <p className={styles.pTop}>
                        {content?.description
                          ?.split("not mandatory")
                          ?.map((segment, idx, array) => (
                            <span key={idx}>
                              {segment}
                              {idx < array.length - 1 && (
                                <span className={styles.green}>
                                  not mandatory
                                </span>
                              )}
                            </span>
                          ))}
                        {/* {content?.plainDesc}<b>{content?.boldDesc}</b> */}
                      </p>
                    )}

                    <div className={styles.innerBoxDivWrapper}>
                      {isMobile && (
                        <>
                          <div className={styles.innerBoxDiv}>
                            {content?.points1?.map((point) => (
                              <div key={point.id} className={styles.innerBox1}>
                                <h3>{point.title}</h3>
                              </div>
                            ))}
                          </div>
                          <div className={styles.innerBoxDiv}>
                            {content?.points2?.map((point) => (
                              <div key={point.id} className={styles.innerBox2}>
                                <h3>{point.title}</h3>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      <div className={styles.innerBoxDiv}>
                        {content?.points3?.map((point) => (
                          <div key={point.id} className={styles.innerBox2}>
                            <h3>{point.title}</h3>
                          </div>
                        ))}
                      </div>
                      <div className={styles.innerBoxDiv}>
                        {content?.points4?.map((point) => (
                          <div key={point.id} className={styles.innerBox1}>
                            <h3>{point.title}</h3>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className={styles.pBot}>
                      <span className={styles.orangeSpan}>
                        Important Note:{" "}
                      </span>
                      {content?.importantNote}
                      <span className={styles.blueSpan} onClick={popupShow}>
                        {""} check eligibility
                      </span>
                    </p>
                  </div>
                );
              })}

              <div className={styles.secondSectionImgWrapper}>
                <Image
                  src={rightImg}
                  alt="Learnbay"
                  quality={100}
                  width={250}
                  height={230}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default ProgramSection;
