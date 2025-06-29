import styles from "./refund.module.css";
import React from "react";

function refund() {
  return (
    <section className={styles.refund}>
      <div className={styles.BackP}>
        <h1>
          <b>Refund-Cancellation Policy</b>
        </h1>
      </div>
      <div className={styles.refundInner}>
        <h2 className={styles.top}>Refund-Cancellation Policy </h2>

        <p className={styles.bot}>
          It would help if you had an internet connection and a current and
          valid payment method to pay for any service, goods, or program made
          available by Learnbay. We allow you to make payments with our
          collaboration with payment gateways, and we are not allowed to retain
          any of your information required during the transaction process.
        </p>
        <p className={styles.bot}>
          Before utilizing their services, you must agree to the terms put forth
          by any third-party company, such as PayPal, PAYTM, RazorPay, etc.
          Understand that Learnbay is not liable for any information loss that a
          third-party provider of payment services could cause. Must agree to
          pay for services using whichever payment option is available on your
          chosen Platform.
        </p>

        <h3 className={styles.top}>What does your approval mean to us?</h3>

        <p className={styles.bot}>
          You agree to our Refund Policy by using our website, creating an
          account, or making a purchase.
        </p>

        <h3 className={styles.top}>What's the refund cancellation policy?</h3>

        <p className={styles.bot}>
          There are a few scenarios under which the refund policy will become
          void:-
        </p>

        <p className={styles.bot}>
          1. A user isn't eligible for a refund after the initial trial period
          of 10 days unless they reached out to Learnbay before
        </p>
        {/* <p className={styles.bot}>
          <b>Note: </b>The Master Program is excluded from this please refer to
          the Terms & Conditions specified for the Master Program.
        </p> */}
        <p className={styles.bot}>
          2. In case, the user opted for a student loan via Learnbay, and the
          same is already approved (when applying for a refund) approved
        </p>
        <p className={styles.bot}>
          <b>Note: </b>No refund or loan cancellation will be possible. The 10
          days refund policy will get void here.
        </p>
        <p className={styles.bot}>
          3. If a user violates any Terms and Conditions listed on the Learnbay
          website and leaves the course, Learnbay will cease his/her access
        </p>
        <p className={styles.bot}>
          4. If a user shares credentials without the approval of Learnbay will
          lead to an increase in fines or even expulsion from the course
        </p>
        <p className={styles.bot}>
          5. If Learnbay has to cease (permanently) course access due to false
          or inaccurate information/ illegally managed documents
        </p>
        <p className={styles.bot}>
          6. If candidates have not submitted the required documents for
          application completion even after 3 successive notices, Learnbay has
          to cease her/his LMS access
        </p>
        <p className={styles.bot}>
          7. Enrolled in a course but have not attended the 70% of these trial
          phase classes within the 10 days of enrolment
        </p>

        <h3 className={styles.top}>In case of refunds:-</h3>

        <p className={styles.bot}>
          Refunds will be granted to the original source used at the time of
          purchase. For example, if a payment is made through a credit card,
          then the refund will be initiated in the same payment source, within
          5-7 working days. **We require proof of purchase or receipt to
          complete your return.
        </p>
        <p className={styles.bot}>
          In case you get any difficulty, in the refund process then
        </p>
        <li className={styles.bot}>
          Get in touch with your credit card provider because it can take some
          time for the refund to appear on your account.
        </li>
        <li className={styles.bot}>
          Next, contact your bank. There is often a delay in processing refunds.
        </li>
        <h4 className={styles.top}>
          Having followed all of the above steps but still have not received
          your refund, contact us at -{" "}
          <a href="mailto:finance@learnbay.co">finance@learnbay.co</a>
        </h4>
        <h4 className={styles.top}>
          For Cancellations please email us at:{" "}
          <a href="mailto:finance@learnbay.co">finance@learnbay.co.</a>
        </h4>
      </div>
    </section>
  );
}

export default refund;
