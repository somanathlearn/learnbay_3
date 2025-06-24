import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense, lazy, useEffect, useState } from "react";
import styles from "./EightSection.module.css";
const Button = dynamic(() => import("../../Global/Button/Button"));
const Popup = dynamic(() => import("../../Global/Popup/Popup"));
const Form = lazy(() => import("../../Global/Form/Form"));

function EightSection(dataScienceCounselling, DmdEight) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    let heightToHideFrom = 600;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <section className={isVisible ? styles.EightSection : styles.hide}>
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
          <Suspense>
            <Form
              // interstedInHide={interstedInHide}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
            />
          </Suspense>
        </div>
      </Popup>
      <div>
        <p className={styles.pText}>
          Learn industry-relevant skills and build a rewarding career
        </p>
      </div>
      {DmdEight ? (
        <div className={styles.btnInner}>
          <Link
            href="https://zoom.us/webinar/register/WN_OXUJK-K6SoWhu-ncQGLtrw"
            target="_blank"
          >
            <Button className={styles.buttonDiv} text="Register Now" />
          </Link>
        </div>
      ) : (
        <div onClick={popupShow} className={styles.btnInner}>
          <Button className={styles.buttonDiv} text="1:1 Counselling Session" />
        </div>
      )}
    </section>
  );
}

export default EightSection;
