import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import FormInline from "../../../Global/FormSection/FormInline";
import Form from "../../../Global/Form/Form";
import Popup from "../../../Global/Popup/Popup";
import VideoPopup from "../../../Global/VideoPopup/VideoPopup";
import styles from "./ThirdSection.module.css";
const Button = dynamic(() => import("../../../Global/Button/Button"));

function ection({ idss }) {
  const [video, setVideo] = useState(false);
  const [popups, setPopups] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <section className={styles.main}>
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          popup={true}
        >
          <div className="leftPopup">
            <div
              className="whiteP"
              style={{ width: "340px", height: "400px" }}
            ></div>
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form radio={true} dataScienceCounselling={true} />
          </div>
        </Popup>
        <div className={styles.cont}>
          <p>
            Get a <span className={styles.orange}>20 min</span>
          </p>
          <h4> Interview Tips & Career Guidelines Session</h4>
          <p>
            from Industry Expert for{" "}
            <span className={styles.cutText}>₹1999</span>{" "}
            <span className={styles.greenButton}>FREE</span>
          </p>
          <div className={styles.imgDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Counsellors-min.webp"
              width="400"
              height="71"
              alt="data science course"
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.FormThank}>
            <h4 className={styles.RightPopupH}>Apply For Counselling</h4>
            <FormInline radio={true} dataScienceCounselling={true} />
          </div>
        </div>
      </section>
      <section className={styles.YtBack}>
        <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
        <div className={styles.cont}>
          <p className={styles.greenButton}>FREE</p>
          <h4>PROFILE REVIEW & CONSULTATION</h4>
          <p>from Industry Expert</p>

          <div onClick={popupShow} className={styles.centerButton}>
            <Button
              className={styles.Btndiv}
              text="Book Now"
              passIcon={<FaBell className="bIconS" />}
            />
          </div>
        </div>
        <div className={styles.left}>
          <div className="imgWrapper">
            <Image
              onClick={videoSHow}
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/whylearnbay-left-image.png"
              width={686}
              height={393}
              className={styles.LeftWrapImg}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ection;
