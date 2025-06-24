import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Typed from "typed.js";
import Form from "../../Global/Form/Form";
import Popup from "../../Global/Popup/Popup";
import styles from "./FirstSection.module.css";
const Button = dynamic(() => import("../../Global/Button/Button"));

const FirstSection = ({
  dataScience,
  radio,
  dataScienceGeneric,
  dataScienceCounselling,
  organicADS,
  interstedInHide,
}) => {
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);
  const el = useRef(null);

  const popupShow = () => {
    setPopups(true);
  };

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Are you looking to upskill ?",
        "Gain a competitive edge",
        "Land your dream job",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 200,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className={styles.First}>
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          popup={true}
          radio={radio}
          dataScience={dataScience}
          dataScienceGeneric={dataScienceGeneric}
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
              dataScience={dataScience}
              upSkillingHide={true}
              dataScienceGeneric={dataScienceGeneric}
              dataScienceCounselling={dataScienceCounselling}
              radio={radio}
              interstedInHide={interstedInHide}
            />
          </div>
        </Popup>
        <div className={styles.FirstLeft}>
          <div className={styles.animationTextWrap}>
            <span ref={el} className={styles.animationText}></span>
          </div>
          {/* <p className={styles.ptop}>
            Take the first step in your blockchain development journey with our
          </p> */}
          <h1 className={styles.h1}>
            #1 Domain Specialised Certification Program For{" "}
            <span className={styles.h1Span}>Working Professionals</span>
          </h1>
          <div className={styles.IBMlogoPlay}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbay-main.webp"
              width="580"
              height="450"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
          <p className={styles.ptop}>In collaboration with</p>
          <div className={styles.IBMlogo}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/FirstSection.png"
              width="283"
              height="51"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
          <p className={styles.blink}>
            Advance your career by gaining expertise in your field and ace
            interviews with India’s leading companies
          </p>
          {/* <div className={styles.line}>
            <img
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Vector-1-line.png"
              width="80px"
            />
          </div> */}
          <div className={styles.btnWrapper}>
            {organicADS ? (
              ""
            ) : (
              <a href="#course">
                <button className={styles.outLineBtn}>
                  Courses <FaChevronDown className="bIconS" />
                </button>
              </a>
            )}
            <div onClick={popupShow}>
              <Button outline={true} text="Enquire Now" />
            </div>
          </div>
        </div>

        <div className={styles.secondLeft}>
          <div className={styles.PlayImg}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbay-main.webp"
              width="580"
              height="450"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
