import React from "react";
import styles from "./DecisionSection.module.css";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import Form from "@/components/Global/Form/Form";

function DecisionSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <div className={styles.firstSection}>
            <span>
              <FaRegUser className={styles.icon} /> 7,568 people filled
            </span>
            <div className={styles.formSection}>
              <h3>
                Interested in <span>Degree?</span>
              </h3>
              <Form
                dataScienceCounselling={true}
                upSkillingHide={true}
                interstedInHide={true}
              />
            </div>
          </div>
          <div className={styles.secondSection}>
            <h2>
              Program <span>Summary</span>
            </h2>
            <div className={styles.innerBoxDiv}>
              <div className={styles.innerBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/campus_de.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="50"
                  height="50"
                />
                <h3>Campus Immersion @IIT Guwahati</h3>
                <p>
                2 Days of campus immersion at IIT Guwahati
                </p>
              </div>
              <div className={styles.innerBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/certificate_de.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="50"
                  height="50"
                />
                <h3>Certification from E&ICT, IIT Guwahati</h3>
                <p>Get Add-on Certificate from</p>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/ibm_microsoft_combined.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="200"
                  height="50"
                  style={{ marginTop: "10px" }}
                />
              </div>
              <div className={styles.innerBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/eligible_de.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="50"
                  height="50"
                />
                <h3>Domain Electives </h3>
                <p>
                Work on Live projects from multiple domains like Retail, BFSI, Pharma etc.
                </p>
              </div>
              <div className={styles.innerBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/faculty_de.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="60"
                  height="60"
                />
                <h3>Real Project Experience</h3>
                <p>
                Gain experience of managing analytics project from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DecisionSection;
