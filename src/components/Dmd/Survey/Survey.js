import { PopupButton } from "@typeform/embed-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./Survey.module.css";

const Survey = ({ topPara, para, header }) => {
  return (
    <div className={styles.boxWrap}>
      <div className={styles.lineWrap}>
        <div className={styles.conteWrap}></div>
        <div className={styles.rightDiv1}>
          <h2 className={styles.header}>Career Transition Process</h2>
          <div className={styles.pSpanDiv}>
            {/* <p className={styles.pH}>Module 0</p> */}

            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.leftContent}>
              <h4>1. Enrol in our Program</h4>
              <p>
                Supercharge your career by enrolling in our industryrelevant
                program, designed to shape your professional trajectory.{" "}
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
              <h4>2. Flexible Learning with Hands-On Exposure</h4>
              <p>
                Get immersive experiences for unparalleled learning through
                practical engagement taught by industry experts{" "}
              </p>
            </div>
          </div>
          <div className={styles.pSpanDiv}>
            {/* <p className={styles.pH}>Module 0</p> */}

            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.leftContent}>
              <h4>3. Master Key Skills to Excel</h4>
              <p>
                Learn essential skills and industry insights for a remarkable
                career transition that propels you to excellence.{" "}
              </p>
            </div>
          </div>

          <div className={styles.pSpanDiv}>
            {/* <p className={styles.pH}>Module 0</p> */}

            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.leftContent}>
              <h4>4. Get IBM Course Completion Certificate</h4>
              <p>
                Supercharge your career by enrolling in our industryrelevant
                program, designed to shape your professional trajectory.{" "}
              </p>
            </div>
          </div>

          <div className={styles.pSpanDiv}>
            {/* <p className={styles.pH}>Module 0</p> */}

            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.leftContent}>
              <h4>5. Unlock Limitless Career Opportunities</h4>
              <p>
                Conquer the tech domain and open the gateway to boundless career
                prospects with 250% salary hike{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
