import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
const Form = dynamic(() => import("../../Global/Form/Form"));
const Popup = dynamic(() => import("../../Global/Popup/Popup"));
import styles from "./FeeSection.module.css";
const Button = dynamic(() => import("../../Global/Button/Button"));
import Emipopup from "../../CoursePage/EMIPopup/Emipopup"
import Modal from 'react-modal';
import { FaGlobe } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";

const FeeSection = ({
  Fee,
  dataScience,
  WeekdayDate,
  WeekendDate,
  WeekdayTime,
  WeekendTime,
  CutFee,
  dataScienceCounselling,
  FeeEmi,
  weekday,
  weekend,
  weekdaybatch,
  weekendbatch,
  interstedInHide,

  // emipopup
  emiType,
  duration1,
  totalAmount1,
  monthlyPayment1,
  greenDown1,
  duration2,
  totalAmount2,
  monthlyPayment2,
  greenDown2,
  countryfee,
  devopfee,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const [emiPopupIsOpen, setEmiPopupIsOpen] = useState(false);
  
  const openEmiPopup = () => {
    setEmiPopupIsOpen(true);
  };

  const closeEmiPopup = () => {
    setEmiPopupIsOpen(false);
  };


  return (
    <div className={styles.feesmain} id="Fees">
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
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            interstedInHide={interstedInHide}
            upSkillingHide={true}
            // radio={radio}
          />
        </div>
      </Popup>
   
      {countryfee ? <h2>Program Fee Details</h2> : <h2>Fee & Batch Details</h2>}
      {countryfee ? (
        <p className={styles.pTop}>
          Invest in your future with affordable program fees
          
        </p>
      ) : (
        <p className={styles.pTop}>
          Invest in your future with affordable program fees and flexible batch
          options
        </p>
      )}

      <div className={countryfee ? styles.ThreeCardOS : styles.ThreeCard}>
        <div className={styles.first}>
          <p style={{ textAlign: "center" }}>
            <b>Scholarship Details</b>
          </p>
          <div className={styles.imgFee}>
            {devopfee ? (
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devop-fee.webp"
                height="170"
                alt="data science course"
                loading="lazy"
                width="170"
                quality={60}
              />
            ) : (
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devop-fee.webp"
                width="170"
                height="170"
                alt="data science course"
                loading="lazy"
                quality={60}
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
          {countryfee ? (
            <>
              <p className={styles.pTop}>Program Fee</p>
              <p className={styles.cutText}>{CutFee}</p>
              <hr
                style={{
                  color: "rgba(0, 0, 0, 0.20)",
                  margin: "10px 20px",
                  border: "0.9px solid",
                }}
              />
              <p className={styles.price} style={{ color: "#2db621" }}>
                {Fee}
              </p>
              <p className={styles.feeHead}>
                We provide the following options for one-time payment
              </p>
              <div className={styles.iconDiv}>
                <div className={styles.icons}>
                  <FaGlobe className={styles.PaymentsIcon} />
                  <p>Internet Banking</p>
                </div>
                <div className={styles.icons}>
                  <FaRegCreditCard className={styles.PaymentsIcon} />
                  <p>Credit/Debit Card</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className={styles.pTop}>Program Fee</p>
              <p className={styles.cutText}>{CutFee}</p>
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
            </>
          )}
        </div>
        {countryfee ? (
          ""
        ) : (
          <div className={styles.third}>
            <p>Batch Details</p>
            <div className={styles.boxOrange}>
            <p>{weekendbatch}</p>
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
              <div className={styles.batchImg}>
              <p> {weekdaybatch}</p>

              </div>
              <div className={styles.batches}>
              <p className={styles.date}>{WeekdayDate}</p>
 
                <div className={styles.Time}>
                <p className={styles.day}>{weekday}</p>
                <p className={styles.paraBot}>{WeekdayTime}</p>
              
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
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

export default FeeSection;
