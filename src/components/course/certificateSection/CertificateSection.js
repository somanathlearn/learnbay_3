import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import styles from "./CertificateSection.module.css";

function CertificateSection() {
  return (
    <section className={styles.container}>
      <div className={styles.degree}>
        <h2>Get certified and accelerate your <span className={styles.topSpan}>career growth</span></h2>
        <div className={styles.degreeContainer}>
          <div className={styles.containerGrid1}>
            <h3>E&ICT IIT Guwahati</h3>
            <div className={styles.firstImg}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/EICT_certificate_img.webp"
                width={563}
                height={700}
                alt="image"
              />
            </div>
            <div className={styles.paraDiv}>
              <h4>Certification from E&ICT Academy, IIT Guwahati</h4>
              <div className={styles.IconDiv}>
                <p>
                  <FaCheckCircle className={styles.icon} />Executive Certification: Earned in DS & AI from IIT Guwahati.
                </p>
                <p>
                  <FaCheckCircle className={styles.icon} />Hands-On Experience: Practical learning at IIT Guwahati campus.
                </p>
                <p>
                  <FaCheckCircle className={styles.icon} />Top Faculty: Learn directly from IIT experts.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.containerGridSecond}>
            <p className={styles.greenTop}>Add-on Certification</p>
            <h3>IBM & Microsoft Project Certification</h3>
            <div>
              <div className={styles.secondImg}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/IBM_certificate.webp"
                  width={867}
                  height={368}
                  alt="image"
                />
              </div>
              <FaPlus className={styles.iconPlus} />
              <div className={styles.secondImg}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/Microsoft_certificate.webp"
                  width={866}
                  height={368}
                  alt="image"
                />
              </div>
              <div className={styles.secondBotDiv}>
                <h4>IBM & Microsoft Certification</h4>
                <div className={styles.IconDiv}>
                  <p>
                    <FaCheckCircle className={styles.icon} />Global Credentials: Certified by IBM & Microsoft.
                  </p>
                  <p>
                    <FaCheckCircle className={styles.icon} />In-Demand Skills: Gain expertise recognized worldwide.
                  </p>
                  <p>
                    <FaCheckCircle className={styles.icon} />Career Boost: Elevate your job prospects and earnings.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificateSection;
