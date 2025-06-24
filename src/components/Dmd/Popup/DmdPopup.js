import React, { useState, useEffect } from "react";
import styles from "./DmdPopup.module.css";
import Image from "next/image";
import Link from "next/link";

function DmdPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };
  const faviconimg =
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/dmd_favicon.webp";

  return (
    <>
      {showPopup && (
        <div className={styles.notification}>
          <button className={styles.closbtn} onClick={closePopup}>
            X
          </button>
          <div className={styles.popupContent}>
            <div className={styles.firstdiv}>
              <div>
                <p className={styles.namefirst}>
                  Learnbay <Image src={faviconimg} width={16} height={16} />
                </p>
                <hr className={styles.hrline} />
                <p className={styles.namesecond}>Masterclass</p>
              </div>

              <div>
                <Link
                  href="https://zoom.us/webinar/register/WN_OXUJK-K6SoWhu-ncQGLtrw"
                  target="_blank"
                >
                  <button className={styles.btn}>REGISTER NOW</button>
                </Link>
              </div>
            </div>
            <div className={styles.img}>
              <Image
                className={styles.downimg}
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/dmdpopup.webp"
                width={510}
                height={260}
                quality={100}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DmdPopup;
