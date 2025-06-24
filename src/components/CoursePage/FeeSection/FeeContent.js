import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../../Global/Button/Button"));
import styles from "./FeeSection.module.css";
import Emipopup from "../EMIPopup/Emipopup";
import Modal from "react-modal";

const FeeContent = ({
  Fee,
  adsHide,
  WeekdayDate,
  WeekendDate,
  WeekdayTime,
  WeekendTime,
  CutFee,
  setPopups,
  FeeEmi,
  weekday,
  weekend,
  weekdaybatch,
  weekendbatch,
  devopfee,
  openTablePopup,
  emiType,
  duration1,
  totalAmount1,
  monthlyPayment1,
  greenDown1,
  duration2,
  totalAmount2,
  monthlyPayment2,
  greenDown2,
}) => {
  const [emiPopupIsOpen, setEmiPopupIsOpen] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  // const [showStickyBanner, setShowStickyBanner] = useState(false);
  // const sentinelRef = useRef(null);
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const isMobile = window.matchMedia("(max-width: 768px)").matches;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  // If 80% of part1 is visible and component is in view
  // if (
  //   entry.isIntersecting &&
  //   entry.intersectionRatio >= 0.8 &&
  //   isMobile
  // ) {
  //   setShowStickyBanner(true);
  // }
  // else if (entry.intersectionRatio < 0.1) {
  //   setShowStickyBanner(false);
  // }
  //   },
  //   {
  //     root: null, // viewport
  //     threshold: [0, 0.8], // triggers when crossing 80%
  //   }
  // );

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

  const openEmiPopup = () => {
    setEmiPopupIsOpen(true);
  };

  const closeEmiPopup = () => {
    setEmiPopupIsOpen(false);
  };
  // const emiPopupProps = {
  //   emiType: 'No Cost EMI',
  //   duration1: '18 months',
  //   totalAmount1: '₹2,50,000',
  //   monthlyPayment1: '₹16,389',
  //   greenDown1: 'Standard Interest Rates Applicable',
  //   duration2: '24 months',
  //   totalAmount2: '₹2,50,000',
  //   monthlyPayment2: '₹12,292',
  //   greenDown2: 'Another Green Down Text',
  // };
  return (
    <div className={styles.feesmain}>
      <h2>Fee & Batch Details</h2>
      {/* <p className={styles.pTop}>
        Invest in your future with affordable program fees and flexible batch
        options
      </p> */}
      {/* <div className={styles.mainContainer}>
        <div className={styles.innerMainContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.firstContainer}>
              <div className={styles.headContent}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/camera-3d.webp"
                  alt="Zest"
                  width="123"
                  height="125"
                  loading="lazy"
                  quality={40}
                />
                <h4>Live online classes</h4>
              </div>
              <div className={styles.iconDiv}>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/live_3d.webp"
                    alt="Zest"
                    width="100"
                    height="103"
                    loading="lazy"
                    quality={40}
                  />
                  <p className={styles.iconContent}>
                    Live online interactive sessions
                  </p>
                </div>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/1_1_3d.webp"
                    alt="Zest"
                    width="100"
                    height="103"
                    loading="lazy"
                    quality={40}
                  />
                  <p className={styles.iconContent}>
                    1:1 online Doubt Session with experts
                  </p>
                </div>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Capston_3d.webp"
                    alt="Zest"
                    width="100"
                    height="103"
                    loading="lazy"
                    quality={40}
                  />
                  <p className={styles.iconContent}>Online Capstone projects</p>
                </div>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/virtual_3d.webp"
                    alt="Zest"
                    width="100"
                    height="103"
                    loading="lazy"
                    quality={40}
                  />
                  <p className={styles.iconContent}>Virtual  Mock interviews</p>
                </div>
              </div>
            </div>
            <div className={styles.secondContainer}>
              <div className={styles.headContent}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/hybrid_3d.webp"
                  alt="Zest"
                  width="123"
                  height="125"
                  loading="lazy"
                  quality={40}
                />
                <h4>Hybrid Classes</h4>
              </div>
              <div className={styles.divHeadIcon}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/camera-3d.webp"
                  alt="Zest"
                  width="100"
                  height="103"
                  loading="lazy"
                  quality={40}
                />
                <h4>Live online classes</h4>
              </div>
              <p className={styles.fadedText}>with</p>
              <div className={styles.iconDiv}>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/offline_3d.webp"
                    alt="Zest"
                    width="100"
                    height="103"
                    loading="lazy"
                    quality={40}
                  />
                  <p className={styles.iconContent}>
                    Offline 1:1 classroom doubt sessions on weekends
                  </p>
                </div>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mock_3d.webp"
                    alt="Zest"
                    width="100"
                    height="103"
                    loading="lazy"
                    quality={40}
                  />
                  <p className={styles.iconContent}>
                    Offline Mock Interviews with 3-5 members panel
                  </p>
                </div>
              </div>
              <div className={styles.innerIconDiv}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/offMap_3d.webp"
                  alt="Zest"
                  width="100"
                  height="103"
                  loading="lazy"
                  quality={40}
                />
                <p className={styles.iconContent}>
                  Offline Classroom Capstone projects with experts in{" "}
                  <b>Pune, Delhi, Bangalore, Chennai, Hydrabad and Mumbai</b>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.feeSectionContainer}>
            <div className={styles.feeContentContainer}>
              <p>Pay in easy EMIs starting as low as</p>
              <h4>₹ 8,178/ month</h4>
            </div>
            <div className={styles.emiButton} onClick={openEmiPopup}>
              <Button text="Check EMI Options" />
            </div>
            <div className={styles.feeContentContainer}>
              <p>Pay in easy EMIs starting as low as</p>
              <h4>₹ 8,178/ month</h4>
            </div>
          </div>
          <div className={styles.paymentPartner}>
            <p>Payment Partners</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Pay_partner.webp"
              alt="Zest"
              width="370"
              height="36"
              loading="lazy"
              quality={40}
            />
          </div>
        </div>
      </div> */}
      <div className={styles.ThreeCard}>
        <div className={styles.first}>
          <p style={{ textAlign: "center" }}>
            <b>Scholarship Details</b>
          </p>
          <div className={styles.imgFee}>
            {devopfee ? (
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/fees-cd.webp"
                height="221"
                alt="data science course"
                loading="lazy"
                width="367"
                quality={40}
              />
            ) : (
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/fees-cd.webp"
                width="367"
                height="221"
                alt="data science course"
                loading="lazy"
                quality={40}
              />
            )}
          </div>
          <p style={{ marginTop: "10px" }}>
            Scholarships are awarded based on profile review. Eligible
            candidates can avail upto 25% scholarship on desired program. Click
            the button below to apply.
          </p>
          <div className={styles.divButton} onClick={popupShow}>
            <Button
              className={styles.Btn}
              text="Check Scholarship Eligibility"
            />
          </div>
        </div>
        <div className={styles.second}>
          {adsHide ? (
            ""
          ) : (
            <>
              <p className={styles.pTop}>Program Fee</p>
              {/* <p className={styles.cutText}>{CutFee}</p> */}
              <p className={styles.price}>
                {Fee} <span className={styles.spanText}>+ 18% GST</span>
              </p>
              <div className={styles.divButton} onClick={popupShow}>
                <Button className={styles.Btn} text="Check EMI Options" />
              </div>
              <hr
                style={{
                  color: "rgba(0, 0, 0, 0.20)",
                  margin: "30px 20px",
                  border: "0.9px solid",
                }}
              />
            </>
          )}
          <p style={{ textAlign: "center", margin: "0" }}>
            <b>EMI Options</b>
          </p>
          <div className={styles.divContent}>
            <p>Pay in easy EMIs starting as low as</p>
            <p className={styles.boxSpan}> {FeeEmi} </p>
            <p>
              For <b>No Cost EMI options</b>{" "}
              <span
                onClick={openEmiPopup}
                style={{ color: "#0072BC", cursor: "pointer" }}
              >
                click here.
              </span>
            </p>
          </div>

          <p className={styles.orangeText}>Payment Partners</p>
          <div className={styles.iconImage}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Finance+partners.webp"
              alt="Zest"
              width="370"
              height="36"
              loading="lazy"
              quality={40}
            />
          </div>
        </div>

        {/* <div className={styles.third}>
          <p>Batch Details</p>
          <div className={styles.boxOrange}>
            <div className={styles.batchImg}>
              <p>{weekendbatch}</p>
            </div>
            <div className={styles.batches}>
              <p className={styles.date}>{WeekendDate}</p>
              <div className={styles.Time}>
                <p className={styles.day}>{weekend}</p>
                <p className={styles.paraBot}>{WeekendTime}</p>
              </div>
            </div>
          </div>
          <hr
            style={{
              color: "rgba(0, 0, 0, 0.20)",
              margin: "30px",
              border: "0.9px solid",
            }}
          />
          <div className={styles.boxOrange}>
            <p> {weekdaybatch}</p>
            <div className={styles.batches}>
              <p className={styles.date}>{WeekdayDate}</p>
              <div className={styles.Time}>
                <p className={styles.day}>{weekday}</p>
                <p className={styles.paraBot}>{WeekdayTime}</p>
              </div>
            </div>
          </div>
        </div> */}
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
            <span className={styles.validityBadge}>Valid till- 31st March</span>
          </div>
        </div>
      )}
      {showStickyBanner && (
        <div className={styles.stickySpecialOffer}>
          <span className={styles.specialOfferTitle}>Special Offer:</span>
          <div className={styles.vertical}>
            <span className={styles.offerDetails}>
              Avail up to{" "}
              <span className={styles.highlight}>
                20% Financial Year-End Scholarship
              </span>
            </span>
            <span className={styles.validityBadge}>Valid till- 31st March</span>
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
    </div>
  );
};

export default FeeContent;
