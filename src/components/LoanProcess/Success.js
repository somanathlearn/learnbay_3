import React from "react";
import { useRouter } from "next/router";
import styles from "./LoanProcess.module.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

function Success() {
  const router = useRouter();
  const { course, amount, date, time } = router.query;

  return (
    <section className={styles.MainDivSuccess}>
      <div>
        {/* Displaying the top image */}
        <div className={styles.imageBox}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/thumb-success.webp"
            alt="Loan-Proccess"
            width={1200}
            height={381}
            className={styles.topImage}
          />
        </div>
        <div className={styles.imageBoxMobile}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Thumb-mobile.webp"
            alt="Loan-Proccess"
            width={1200}
            height={381}
            className={styles.topImageMobile}
          />
        </div>
        {/* Header text */}
        <h4 className={styles.h4Success}>
        Thank you !
        </h4>
        <p className={styles.botParaSuccess}><FaCheckCircle className={styles.FaCheckCircle} />
        Payment  done successfully
        </p>
        <p className={styles.botPara}>
        You're now all set to unlock new skills and big career opportunities.
        </p>

      </div>
    </section>
  );
}

export default Success;
