import dynamic from "next/dynamic";
import Image from "next/image";
import { FaEnvelope, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import styles from "./ContactUs.module.css";
const Button = dynamic(() => import("../../Global/Button/Button"));

function ContactUs() {
  return (
    <section className={styles.ContactUs}>
      <div className={styles.BackC}>
        <div>
          <h1>
            <b>Contact Us</b>
          </h1>
        </div>

        <div>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/contact-us.png"
            width="400"
            height="300"
            alt="data science course"
          />
        </div>
      </div>
      <div className={styles.CInner}>
        <h2>We`re Here To Help You</h2>
        <p>
          Got A Course In Mind? We’d Love To Hear And Help You Decide On A
          Course.
        </p>
        <div className={styles.Inner}>
          <div className={styles.InnerBox}>
            <a href="https://goo.gl/maps/4tC9yN8VTkBf72cW9" target="_blank">
              <FaMapMarkedAlt className={styles.tick} />
            </a>
            <h3>HSR Layout</h3>
            <a href="https://goo.gl/maps/4tC9yN8VTkBf72cW9" target="_blank">
              <p>
                #1090 , 1st floor, 18th cross road HSR layout sector 3,
                Bangalore - 560102 (Above Sangam Sweets)
              </p>
            </a>
          </div>
          <div className={styles.InnerBox}>
            <a href="mailto:contacts@learnbay.co" target="_blank">
              <FaEnvelope className={styles.tick} />
            </a>
            <h3>Contact Us</h3>
            <a href="mailto:contacts@learnbay.co" target="_blank">
              <p>Email :- contacts@learnbay.co</p>
            </a>
            <a href="tel:+917349222263" target="_blank">
              <p>Phone :- (+91) 77956 87988</p>
            </a>
          </div>
          <div className={styles.InnerBox}>
            <a href="https://api.whatsapp.com/send?phone=917349222263" target="_blank">
              <FaWhatsapp className={styles.tick} />
            </a>
            <h3>Whatsapp</h3>
            <a href="https://api.whatsapp.com/send?phone=917349222263" target="_blank">
              <Button
              title="whatsapp"
                className={styles.btn}
                style={{ marginTop: "25px" }}
                text="(+91) 7349222263"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
