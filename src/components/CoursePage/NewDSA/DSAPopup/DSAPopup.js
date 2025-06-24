"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./DSAPopup.module.css";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import { getDSABookingSoonDate } from "@/Util/getDSABatchData";

const DSAPopup = ({ message, onClose }) => {
  const [popups, setPopups] = useState(false);

  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);
  const leftPoints = [
    {
      id: 1,
      title: "Course Structure",
    },
    {
      id: 2,
      title: "Mentor guidance",
    },
    {
      id: 3,
      title: "Scholarship Opportunity",
    },
  ];

  const bookingDate = getDSABookingSoonDate();
  //testing
  // console.log(getDSABookingSoonDate(new Date("2023-03-24")));

  return (
    <div className={styles.popupOverlay}>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Request For Demo Session"
        DSADemoSession={true}
        interstedInHide={true}
        upSkillingHide={true}
        dataScienceCounselling={true}
        dsaPopup={popups}
        setDSAPopup={onClose}
      />
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()} // Prevents propagation to the overlay
      >
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>

        <div className={styles.mainDiv}>
          <div className={styles.titleDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Hourglass.webp"
              quality={100}
              width={76}
              height={76}
            />
            <h3>Book Your Demo Class Now!</h3>
            <span className={styles.desc}>
              The demo session provides an overview of our Data Structures,
              Algorithms, and System Design Program
            </span>
          </div>
          <div className={styles.contentDiv}>
            <div className={styles.leftContentDiv}>
              {leftPoints.map((point) => (
                <div className={styles.pointDiv} key={point.id}>
                  <div className={styles.checkMarkDiv}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
                      width={20}
                      height={20}
                      quality={100}
                      loading="lazy"
                    />
                  </div>
                  <p>{point.title}</p>
                </div>
              ))}
            </div>
            <div className={styles.middleLineDiv}></div>
            <div className={styles.rightContentDiv}>
              <span>Time : 9 am , Date : {bookingDate}</span>
              <div className={styles.mentorsFromDiv}>
                <p>Mentors from:</p>
                <div className={styles.mentorsFromImageDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Microsoft%2BLogo.webp"
                    width={120}
                    height={30}
                    quality={100}
                    loading="lazy"
                    className={styles.microsoftLogo}
                  />
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/GoogleColor.webp"
                    width={78}
                    height={26}
                    quality={100}
                    loading="lazy"
                    className={styles.googleLogo}
                  />
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/MetaColor.webp"
                    width={87}
                    height={20}
                    quality={100}
                    loading="lazy"
                    className={styles.metaLogo}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonDiv}>
            <button onClick={popupShow}>Request a Demo Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DSAPopupWrapper = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("hasSeenPopup")) {
      // Show the popup if the user hasn't seen it yet during this session
      setPopupVisible(true);

      // Set a flag in sessionStorage to mark that the user has seen the popup
      sessionStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <DSAPopup
          message="Book Your Demo Class Now!"
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default DSAPopupWrapper;
