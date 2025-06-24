import React, { useState } from "react";
import styles from "../ContactCounsellor/ContactCounsellor.module.css";
import { MdOutlineWhatsapp } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import Popup from "../../Global/Popup/Popup";
import Form from "../../Global/Form/Form";

const ContactCounsellor = ({ dataScience, dataScienceCounselling }) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const sendEmail = () => {
    const recipient = "contacts@learnbay.co";
    const subject = "";
    const body = "";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    // Open Gmail link in a new tab or window
    window.open(gmailLink, "_blank");
  };

  return (
    <div className={styles.consmain}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
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
            upSkillingHide={true}
          />
        </div>
      </Popup>
      <div>
        <h4>Can’t decide which program to opt for?</h4>
        <p>
          Don’t worry, our expert counsellor is there to guide you to make the
          right career choice.
        </p>

        <div className={styles.conbtn}>
          <button
            onClick={() => window.open("https://wa.me/+917795687988", "_blank")}
            className={styles.inf}
          >
            <MdOutlineWhatsapp className={styles.conicon} />
            (+91) 77956 87988
          </button>
          <button onClick={sendEmail} className={styles.inf}>
            <AiOutlineMail className={styles.conicon} /> contacts@learnbay.co
          </button>
        </div>

        <div className={styles.consbtn1} onClick={popupShow}>
          <button className={styles.consbtn}>Apply for counselling</button>
        </div>
      </div>
      <div className={styles.conimg}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/masterPage/contact-counseller.webp"
          width={300}
          height={200}
          loading="lazy"
          quality={40}
          alt="The image showcasing a Data Scientist standing with a white background"
        />
      </div>
    </div>
  );
};

export default ContactCounsellor;
