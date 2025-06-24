// JobAbroad.js
import Image from "next/image";
import React, { useState } from "react";
import Styles from "./JobAbroad.module.css";
import Link from "next/link";
import Form from "../../Global/Form/Form";
import Popup from "../../Global/Popup/Popup";
const JobAbroad = ({
  data,
  WolfLink,
  formbtn,
  dataScience,
  dataScienceCounselling,
  interstedInHide,
  titleCourse,
  brochureLink,
}) => {
  const { title, points, bannerImage } = data;
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <div className={Styles.JobAbroadMain}>
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
              dataScience={dataScience}
              interstedInHide={interstedInHide}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
              // radio={radio}
            />
          </div>
        </Popup>

        <h2>{title}</h2>

        <div className={Styles.JobAbroadHead}>
          <div className={Styles.JobAbroadleft}>
            {points.map((point, index) => (
              <div key={index} className={Styles.leftpoints}>
                <div className={Styles.imgBox}>
                  <Image
                    src={point.imgSrc}
                    width={80}
                    height={80}
                    loading="lazy"
                    alt={point.imgAlt}
                  />
                </div>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
            {formbtn ? (
              <div className={Styles.consbtn1}>
                <Link href="/master-application">
                  <button className={Styles.consbtn}>
                    Start Your Application
                  </button>
                </Link>
              </div>
            ) : (
              <div className={Styles.consbtn1} onClick={popupShow}>
                <button className={Styles.consbtn}>
                Apply For Counselling
                </button>
              </div>
            )}

            <>
              {WolfLink ? (
                <p className={Styles.woolfText}>
                  Learnbay Excelversity is a constituent college affiliated with{" "}
                  <a href="https://woolf.university">
                    <span className={Styles.spanWoolf}>
                      Woolf University, EU
                    </span>
                  </a>
                </p>
              ) : (
                ""
              )}
            </>
          </div>

          <div className={Styles.JobAbroadRight}>
            <Image
              src={bannerImage.src}
              width={bannerImage.width}
              height={bannerImage.height}
              priority={bannerImage.priority}
              quality={bannerImage.quality}
              alt={bannerImage.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAbroad;
