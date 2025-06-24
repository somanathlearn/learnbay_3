import React from "react";
import { useRouter } from "next/router";
import styles from "./LoanProcess.module.css";
import Image from "next/image";

function LoanProcess() {
  const router = useRouter();
  const { course, amount, date, time } = router.query;

  return (
    <section className={styles.MainDiv}>
      <div>
        {/* Displaying the top image */}
        <div className={styles.imageBox}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Loan-Process-1.webp"
            alt="Loan-Proccess"
            width={1200}
            height={381}
            className={styles.topImage}
          />
        </div>
        <div className={styles.imageBoxMobile}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mobile_hr.webp"
            alt="Loan-Proccess"
            width={1200}
            height={381}
            className={styles.topImageMobile}
          />
        </div>
        {/* Header text */}
        <h4 className={styles.h4}>
          Congratulations, your loan process is initiated!
        </h4>
        <p className={styles.botPara}>
          You're now one step closer to achieving your dream career.
          <br />
          To ensure everything goes smoothly, please have your
        </p>
        {/* Displaying required documents */}
        <div className={styles.Box}>
          <div className={styles.innerDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/aadhar.webp"
              alt="Loan-Proccess"
              width={1200}
              height={381}
              className={styles.topImageIcon}
              loading="lazy"
            />
            <p className={styles.boxText}>Adhaar Card</p>
          </div>
          <div className={styles.innerDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/pan.webp"
              alt="Loan-Proccess"
              width={1200}
              height={381}
              className={styles.topImageIcon}
              loading="lazy"
            />
            <p className={styles.boxText}>PAN Card</p>
          </div>
          <div className={styles.innerDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/salary.webp"
              alt="Loan-Proccess"
              width={1200}
              height={381}
              className={styles.topImageIcon}
              loading="lazy"
            />
            <p className={styles.boxText}>Salary Slip</p>
          </div>
          <div className={styles.innerDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/bank.webp"
              alt="Loan-Proccess"
              width={1200}
              height={381}
              className={styles.topImageIcon}
              loading="lazy"
            />
            <p className={styles.boxText}>Bank Statement</p>
          </div>
        </div>
        <p className={styles.botPara}>
          * These documents are crucial for verifying your details.
        </p>
        {/* Box displaying loan and course details */}
        <div className={styles.GreyBox}>
          <h4>Here's a quick overview of your loan and course details:</h4>
          {/* Displaying fetched data */}
          <div className={styles.formFetch}>
            <p className={styles.formFetchP}>Course Name: <span className={styles.span}>{course}</span></p>
            <p className={styles.formFetchP}>Loan Amount: <span className={styles.span}>{amount}</span></p>
            <p className={styles.formFetchP}>
              Date: <span className={styles.span}>{date}</span>
            </p>
            <p className={styles.formFetchP}>
              Time: <span className={styles.span}>{time}</span>
            </p>
          </div>
        </div>
        {/* Final message box */}
        <div className={styles.blueBox}>
          <p className={styles.botPara}>
            We're committed to supporting you at every stage of your journey. If
            you have any questions or need help, please don't hesitate to get in
            touch.
          </p>
          <p className={styles.botPara}>
            Thank you for choosing us for your educational journey. We wish you
            the very best and are excited to see where this path takes you.
          </p>
          {/* Link back to homepage */}
          <p className={styles.Link}>Homepage</p>
        </div>
      </div>
    </section>
  );
}

export default LoanProcess;
