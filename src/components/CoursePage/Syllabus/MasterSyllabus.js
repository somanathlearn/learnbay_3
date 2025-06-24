import PopupContent from "@/components/Global/PopupContent/PopupContent";
import Link from "next/link";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import Button from "../../Global/Button/Button";
import Form from "../../Global/Form/Form";
import NewSyllabusMap from "./NewSyllabusMap";
import styles from "./Syllabus.module.css";
import NewSyllabusMangersGenAiMap from "./NewSyllabusMapMangersGenAI";

function SyllabusNew({
  masterSyllabusMobile,
  dataScience,
  fullStack,
  titleCourse,
  brochureLink,
  brochurePdf,
  buttonHide,
  dataScienceCounselling,
  interstedInHide,
  MastersContent,
  isGuwahati,
  onlyGENAIPage,
  GenAIMangersOnly,
  genAIIIT,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <div id="curriculum" className={styles.containerDiv}>
        <PopupContent
          dataScience={dataScience}
          downloadBrochure
          titleCourse={titleCourse}
          brochureLink={brochureLink}
          brochurePdf={brochurePdf}
          interstedInHide={interstedInHide}
          upSkillingHide={true}
          popups={popups}
          setPopups={setPopups}
          heading="Download Syllabus"
        />

        <div className={styles.project}>
          <h3 className={styles.h1}>Explore our Syllabus</h3>
          <p className={styles.ptop}>
            Curriculum is specifically engineered to meet the expectations of
            leading tech companies
          </p>
        </div>

        <section className={styles.Syllabus}>
          <div className={styles.syllabusLeft}>
            {GenAIMangersOnly ? (
              <NewSyllabusMangersGenAiMap
                Syllabus={masterSyllabusMobile}
                onlyGENAIPage={onlyGENAIPage}
              />
            ) : (
              <NewSyllabusMap
                Syllabus={masterSyllabusMobile}
                onlyGENAIPage={onlyGENAIPage}
              />
            )}
          </div>
          <div className={styles.button}>
            <div className={styles.formWrapper}>
              <div className={styles.boxDiv}>
                <div className={styles.formBox}>
                  {" "}
                  <FaRegUser className={styles.iconUser} /> 7,568 people filled
                </div>
              </div>

              {MastersContent ? (
                <p className={styles.p}>
                  Interested in{" "}
                  {isGuwahati ? (
                    <>
                      {" "}
                      <span>Degree?</span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <span>Master’s Degree?</span>
                    </>
                  )}
                </p>
              ) : (
                <p className={styles.p}>
                  Free Consultation with<span> Expert</span>
                </p>
              )}
              <Form
                dataScienceCounselling={dataScienceCounselling}
                interstedInHide={interstedInHide}
                titleCourse={titleCourse}
                brochureLink={brochureLink}
                brochurePdf={brochurePdf}
                fullStack={fullStack}
                syllabus={true}
                upSkillingHide={true}
              />
            </div>
          </div>
        </section>
        <div className={styles.buttonDiv}>
          {buttonHide ? (
            ""
          ) : (
            <Link href="/master-application">
              <div>
                <Button
                  bannerButton={true}
                  text="START YOUR APPLICATION"
                  // passIcon={<FaDownload style={{ marginLeft: "10px" }} />}
                />
              </div>
            </Link>
          )}
          <div onClick={popupShow}>
            <Button
              nobannerButton={true}
              text="DOWNLOAD SYLLABUS"
              // passIcon={<FaDownload style={{ marginLeft: "10px" }} />}
            />
          </div>
        </div>
        {genAIIIT ? (
          <p className={styles.coursePReq}>
            <b>Note-</b> <strong>Course Prerequisites:</strong> You should have
            knowledge of Python, Machine Learning, & Deep Learning. *
          </p>
        ) : null}
      </div>
    </>
  );
}

export default SyllabusNew;
