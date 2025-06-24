import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Popup.module.css";
import PopupContent from "../Global/PopupContent/PopupContent";

const Popup = ({ message, onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()} // Prevents propagation to the overlay
      >
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>

        <div className={styles.mainDiv}>
          <div className={styles.whiteDiv}>
            <h3>Get Scholarship upto</h3>
            <span className={styles.OFF}>20% OFF</span>
            {/* <span className={styles.vaildTag}>( Valid till 16th Jan )</span> */}
          </div>

          {/* Middle TagLine */}
          <div className={styles.tagLine}>
            <p>
              on all Our <span>Course</span>
            </p>
          </div>

          {/* Bottom Gradient Div */}
          <div className={styles.gradientDiv}>
            <p className={styles.batch}>Batch Details</p>
            <div className={styles.batchDiv}>
              <p className={styles.offerText}>
                Weekend Batch : <span>9:30 AM - 1 PM</span>
              </p>
              <p className={styles.offerText}>
                Weekday Batch : <span>8:00 PM - 10:30 PM</span>
              </p>
            </div>
            <Link href="/submit-info" target="_blank">
              <div className={styles.buttonDiv}>
                <button>Apply for Scholarship Now</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const PopupNew = ({ message, onClose }) => {
  const [popups, setPopups] = useState(false);

  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);
  return (
    <div className={styles.popupOverlay}>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Apply for Gen AI Program"
        upSkillingHide={true}
        dataScienceCounselling={true}
        genAISelectOption={true}
      />
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()} // Prevents propagation to the overlay
      >
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>

        <div className={styles.mainDiv}>
          <div className={styles.whiteDiv}>
            <div className={styles.iitDiv}>
              <Image
                src=" https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Full-IIT-New.webp"
                loading="lazy"
                width={127}
                height={88}
                quality={100}
                className={styles.iitImg}
                alt="genai-pop"
              />
            </div>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Sparkling-New.webp"
              loading="lazy"
              width={50}
              height={50}
              quality={100}
              className={styles.starPop}
              alt="star-pop"
            />
            <h3>
              GenAI Certification <span className={styles.forTitle}>For</span>
            </h3>
            <span className={styles.popupTitle}>Working professionals</span>
            {/* <span className={styles.OFF}>20% OFF</span> */}
            {/* <span className={styles.vaildTag}>( Valid till 16th Jan )</span> */}
          </div>

          {/* Middle TagLine */}
          {/* <div className={styles.tagLine}>
            <p>
              on all Our <span>Course</span>
            </p>
          </div> */}

          {/* Bottom Gradient Div */}
          <div className={styles.gradientDiv}>
            <div className={styles.wrapper}>
              <p className={styles.newbatch}>
                Learn GenAI from Industry Mentors{" "}
              </p>
              {/* <p className={styles.orange}>
                <p className={styles.violet}> - </p> Up to{" "}
                <p className={styles.bold}>20%</p>
              </p> */}
            </div>
            <div className={styles.popupPoints}>
              <div className={styles.popPoint}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
                  loading="lazy"
                  width={20}
                  height={20}
                  quality={100}
                  alt="green-tick"
                />
                Master LangChain & OpenAI APIs
              </div>
              <div className={styles.popPoint}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
                  loading="lazy"
                  width={20}
                  height={20}
                  quality={100}
                  alt="green-tick"
                />
                Get Certified in GenAI from EICT Academy, IIT Guwahati
              </div>
              <div className={styles.popPoint}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
                  loading="lazy"
                  width={20}
                  height={20}
                  quality={100}
                  alt="green-tick"
                />
                Build and Integrate GenAI application
              </div>
            </div>
            <div className={styles.mpopupPoints}>
              <div className={styles.mpopPoint}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
                  loading="lazy"
                  width={20}
                  height={20}
                  quality={100}
                  alt="green-tick"
                />
                Master LangChain & OpenAI APIs
              </div>
              <div className={styles.mpopPoint}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
                  loading="lazy"
                  width={20}
                  height={20}
                  quality={100}
                  alt="green-tick"
                />
                Build and Integrate GenAI application
              </div>
              <div className={styles.mpopPoint}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
                  loading="lazy"
                  width={20}
                  height={20}
                  quality={100}
                  alt="green-tick"
                />
                Get Certified in GenAI from EICT Academy, IIT Guwahati
              </div>
            </div>
            {/* <div className={styles.batchDiv}>
              <p className={styles.offerText}>
                Weekend Batch : <span>9:30 AM - 1 PM</span>
              </p>
              <p className={styles.offerText}>
                Weekday Batch : <span>8:00 PM - 10:30 PM</span>
              </p>
            </div> */}
            {/* <Link href="/submit-info" target="_blank"> */}
            <div className={styles.buttonDiv} onClick={popupShow}>
              <button>Apply Now</button>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const PopupWrapper = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    // Check if the popup has already been shown for the session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      // Show the popup if the user hasn't seen it yet during this session
      setPopupVisible(true);

      // Set a flag in sessionStorage to mark that the user has seen the popup
      sessionStorage.setItem("hasSeenPopup", "true");
      console.log(`User has seen the popup: ${!hasSeenPopup}`);
    }
  }, []);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <PopupNew message="Get Scholarship" onClose={handleClosePopup} />
      )}
    </>
  );
};

export default PopupWrapper;
