import { PopupButton } from "@typeform/embed-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./Survey.module.css";
const Button = dynamic(() => import("../../../Global/Button/Button"));

const Survey = ({ topPara, para, header }) => {
  return (
    <div className={styles.boxWrap}>
      <div className={styles.leftSide}>
        <p>{topPara}</p>
        <h4>{header}</h4>
        <p>{para}</p>
        <div className={styles.ButtonShowD}>
          {/* <PopupButton
            id="jpqC3A6g"
            style={{
              backgroundColor: "#edbb52",

              borderRadius: "4px",

              fontSize: "18px",
              padding: "12px 30px",
            }}
            className="my-button"
          >
            Know More
          </PopupButton> */}
        </div>
      </div>
      <div className={styles.lineWrap}>
        <div className={styles.lineImg}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Line-with-dots.webp"
            width={1493}
            height={752}
            alt="lines"
          />
        </div>

        <div className={styles.conteWrap}>
          <div className={styles.oneDiv}>
            <div className={styles.leftContent}>
              <h4>Fill out the Form:</h4>
              <p>
                Provide us with essential information about your experience,
                job, domain, and career goals.{" "}
              </p>
            </div>
            <div className={styles.imgWrap}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/thank-you-no-1.png"
                width={56}
                height={86}
                alt="lines"
              />
            </div>
          </div>
          <div className={styles.twoDiv}>
            <div className={styles.leftContent}>
              <h4>Receive Personalized Course Suggestions:</h4>
              <p>
                You'll receive a comprehensive report that highlights the
                courses best suited to enhance your skills and propel your
                career forward.{" "}
              </p>
            </div>
            <div className={styles.imgWrap}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/thank-you-no-2.png"
                width={65}
                height={88}
                alt="lines"
              />
            </div>
          </div>
          <div className={styles.threeDiv}>
            <div className={styles.leftContent}>
              <h4>Open Doors to the Best-suited Companies:</h4>
              <p>
                Increase your chances of being referred to the best-suited
                companies for your career ambitions.{" "}
              </p>
            </div>
            <div className={styles.imgWrap}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/thank-you-no-3.png"
                width={61}
                height={88}
                alt="lines"
              />
            </div>
          </div>
        </div>
        <div className={styles.rightDiv1}>
          <div className={styles.pSpanDiv}>
            {/* <p className={styles.pH}>Module 0</p> */}
            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.leftContent}>
              <h4>Fill out the Form:</h4>
              <p>
                Provide us with essential information about your experience,
                job, domain, and career goals.{" "}
              </p>
            </div>
          </div>
          <div className={styles.pSpanDiv}>
            {/* <p className={styles.pH}>Module 1</p> */}
            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.leftContent}>
              <h4>Receive Personalized Course Suggestions:</h4>
              <p>
                You'll receive a comprehensive report that highlights the
                courses best suited to enhance your skills and propel your
                career forward.{" "}
              </p>
            </div>
          </div>
          <div className={styles.pSpanDiv}>
            {/* <p className={styles.pH}>Module 2</p> */}
            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.leftContent}>
              <h4>Open Doors to the Best-suited Companies:</h4>
              <p className={styles.pBotP}>
                Increase your chances of being referred to the best-suited
                companies for your career ambitions.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.ButtonShowM}>
          {/* <PopupButton
            id="jpqC3A6g"
            style={{
              backgroundColor: "#edbb52",

              borderRadius: "4px",

              fontSize: "18px",
              padding: "12px 30px",
            }}
            className="my-button"
          >
            Know More
          </PopupButton> */}
        </div>
      </div>
    </div>
  );
};

export default Survey;
