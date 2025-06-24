import React, { useState, useRef, useEffect } from "react";
import styles from "./dsaFee.module.css";
import Image from "next/image";
import Emipopup from "../EMIPopup/Emipopup";
import Modal from "react-modal";
import { Points } from "@/Data/svgdata/Points";
import PopupContent from "@/components/Global/PopupContent/PopupContent";

const DSAFeeSection = ({
  weekendbatch,
  weekdaybatch,
  weekday,
  weekend,
  WeekendDate,
  WeekdayDate,
  WeekdayTime,
  WeekendTime,
  Fee,
  FeeEmi,
  emiType,
  duration1,
  totalAmount1,
  monthlyPayment1,
  greenDown1,
  duration2,
  totalAmount2,
  monthlyPayment2,
  greenDown2,
  isDSAFresher,
  dataScience,
  dataScienceCounselling,
  interstedInHide,
}) => {
  const [emiPopupIsOpen, setEmiPopupIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const popupShow = () => {
    setPopups(true);
  };
  const openEmiPopup = () => {
    setEmiPopupIsOpen(true);
  };

  const closeEmiPopup = () => {
    setEmiPopupIsOpen(false);
  };
  const [showStickyBanner, setShowStickyBanner] = useState(false);
    const [popups, setPopups] = useState(false);
  const sentinelRef = useRef(null);
  const point = [<Points />];

  // useEffect(() => {
  //   const isMobile = window.matchMedia("(max-width: 768px)").matches;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       // If 80% of part1 is visible and component is in view
  //       if (
  //         entry.isIntersecting &&
  //         entry.intersectionRatio >= 0.8 &&
  //         isMobile
  //       ) {
  //         setShowStickyBanner(true);
  //       }
  //       // else if (entry.intersectionRatio < 0.1) {
  //       //   setShowStickyBanner(false);
  //       // }
  //     },
  //     {
  //       root: null, // viewport
  //       threshold: [0, 0.8], // triggers when crossing 80%
  //     }
  //   );

  //   const containerObserver = new IntersectionObserver(
  //     ([entry]) => {
  //       if (!entry.isIntersecting) {
  //         setShowStickyBanner(false); // Component out of view
  //       }
  //     },
  //     {
  //       root: null,
  //       threshold: 0,
  //     }
  //   );

  //   if (sentinelRef.current) observer.observe(sentinelRef.current);
  //   if (containerRef.current) containerObserver.observe(containerRef.current);

  //   return () => {
  //     if (sentinelRef.current) observer.unobserve(sentinelRef.current);
  //     if (containerRef.current)
  //       containerObserver.unobserve(containerRef.current);
  //   };
  // }, []);

  return (
    <section className={styles.main}>
       <PopupContent
              popups={popups}
              setPopups={setPopups}
              heading="Apply For Counselling"
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              interstedInHide={interstedInHide}
              upSkillingHide={true}
            />
      {/* <div className={styles.stickyContainer}> */}
      <h2>Fee & Batch Details </h2>
      <div className={styles.mainContainer}>
        {/* <div className={styles.containerouter}> */}
        <div className={styles.container}>
          <h4>Live online classes</h4>
          <div className={styles.insideMain}>
            <div className={styles.left}>
              <h5>Benefits :</h5>

              <ul>
                <li>{point} Live online interactive sessions</li>
                <li> {point} 1:1 online Doubt Session with experts</li>
                {!isDSAFresher && <li> {point} Online Capstone projects</li>}
                <li> {point} Virtual Mock interviews</li>
              </ul>
            </div>
            <hr />
            <div className={styles.ryt}>
              <h5>Program Fee:</h5>
              <h3>
                {Fee} <span className={styles.span}>+ 18% GST</span>
              </h3>
              <p className={styles.pEmi}>Pay in easy EMIs starting as low as</p>
              <h6>{FeeEmi}</h6>

              <button onClick={popupShow} className={styles.btn}>
                Check EMI Options
              </button>
            </div>
          </div>{" "}
          {/* {!showStickyBanner && (
              <div className={styles.specialOfferBanner}>
                <span className={styles.specialOfferTitle}>Special Offer:</span>
                <div className={styles.vertical}>
                  <span className={styles.offerDetails}>
                    Avail up to{" "}
                    <span className={styles.highlight}>
                      20% Financial Year-End Scholarship
                    </span>
                  </span>
                  <span className={styles.validityBadge}>
                    Valid till- 31st March
                  </span>
                </div>
              </div>
            )} */}
        </div>
        {/* </div> */}
        {/* <div className={styles.batch}>
          <p className={styles.batchHead}>Batch Details :</p>
          <div className={styles.weekday}>
            <h6>{weekdaybatch}</h6>
            <div className={styles.dwbatch}>
              <div>
                <p className={styles.Date}>{WeekdayDate}</p>
              </div>

              <hr />
              <div className={styles.wT}>
                <p>{weekday}</p>
                <span>{WeekdayTime}</span>
              </div>
            </div>
          </div>
          <hr className={styles.hrline} />
          <div className={styles.fill}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/filling_Fast.webp"
              width={120}
              height={40}
              quality={100}
              alt="fill Fast"
              loading="lazy"
            />
          </div>{" "}
          <div className={styles.weeknd}>
            <h6>{weekendbatch}</h6>

            <div className={styles.dwbatch}>
              <div>
                <p className={styles.Date}>{WeekendDate}</p>
              </div>

              <hr />
              <div className={styles.wT}>
                <p>{weekend} </p>
                <span>{WeekendTime}</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* {showStickyBanner && (
            <div className={styles.stickySpecialOffer}>
              <span className={styles.specialOfferTitle}>Special Offer:</span>
              <div className={styles.vertical}>
                <span className={styles.offerDetails}>
                  Avail up to{" "}
                  <span className={styles.highlight}>
                    20% Financial Year-End Scholarship
                  </span>
                </span>
                <span className={styles.validityBadge}>
                  Valid till- 31st March
                </span>
              </div>
            </div>
          )} */}

      {/* Emi Popup */}
      <Modal
        isOpen={emiPopupIsOpen}
        onRequestClose={closeEmiPopup}
        className={styles.Emipopup}
        overlayClassName={styles.Overlay}
        contentLabel="EMI Popup"
      >
        <div className={styles.clostbtn} onClick={closeEmiPopup}>
          <span>close[x]</span>
        </div>
        <Emipopup
          emiType={emiType}
          duration1={duration1}
          totalAmount1={totalAmount1}
          monthlyPayment1={monthlyPayment1}
          greenDown1={greenDown1}
          duration2={duration2}
          totalAmount2={totalAmount2}
          monthlyPayment2={monthlyPayment2}
          greenDown2={greenDown2}
        />
      </Modal>
      {/* </div> */}
    </section>
  );
};

export default DSAFeeSection;
