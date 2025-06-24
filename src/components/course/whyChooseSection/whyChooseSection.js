import React from "react";
import styles from "./whyChooseSection.module.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import VideoYt from "@/components/Global/VideoYt/VideoYt";

function whyChooseSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2>
          Why choose <span className={styles.orangeLine}>Learnbay ?</span>
        </h2>
        <div className={styles.innerDivOne}>
          <div className={styles.oneFirst}>
            <h3>Training mode</h3>
            <p>
              You can choose from two flexible training modes to suit your needs
              and preferences:
            </p>
            <div className={styles.innerBox}>
              <div className={styles.iconBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/online_why.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="80"
                  height="80"
                />
                <p>100% Live online classes</p>
              </div>
              <div className={styles.iconBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/location_why.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="80"
                  height="80"
                />
                <p>Hybrid * classes</p>
              </div>
            </div>
            <div className={styles.botDiv}>
              <p>
                <span>*Important Note:</span> Hybrid mode allows learners to
                benefit from both flexible, remote learning and direct,
                face-to-face interaction.{" "}
              </p>
              <p>
                Offline classes are available in Pune, Mumbai, Delhi, Chennai,
                Hydrabad, Kolkata, Bangalore.
              </p>
            </div>
          </div>

          <div className={styles.oneSecond}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/choose_first_right.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="795"
              height="770"
            />
          </div>
        </div>
        <div className={styles.innerDivTwo}>
          <div className={styles.twoFirst}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/domain_learnbay.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="711"
              height="335"
            />
          </div>
          <div className={styles.twoSecond}>
            <p className={styles.twoSecondTop}>
              How can you make your previous experience count?
            </p>
            <h3>Domain electives</h3>
            <p>
              Select your domain electives and engage in live projects across
              various industries to gain hands-on experience. This practical
              approach will deepen your understanding of real-world challenges
              and enhance your expertise.
            </p>
          </div>
        </div>
        <div className={styles.innerDivThree}>
          <div className={styles.threeFirst}>
            <h3>Practical project experience</h3>
            <div className={styles.contentIconDiv}>
              <div>
                <FaCheckCircle className={styles.icon} />
                <div>
                  <p className={styles.pHead}>Practical Skills</p>
                  <p className={styles.pBot}>
                    Gain practical experience in project management.
                  </p>
                </div>
              </div>
              <div>
                <FaCheckCircle className={styles.icon} />
                <div>
                  <p className={styles.pHead}>Project Life Cycle</p>
                  <p className={styles.pBot}>
                    Learn to oversee the entire project.
                  </p>
                </div>
              </div>
              <div>
                <FaCheckCircle className={styles.icon} />
                <div>
                  <p className={styles.pHead}>Lead a Team</p>
                  <p className={styles.pBot}>
                    Manage a data science and AI real-time project
                  </p>
                </div>
              </div>
              <div>
                <FaCheckCircle className={styles.icon} />
                <div>
                  <p className={styles.pHead}>Industry Knowledge</p>
                  <p className={styles.pBot}>
                    Develop expertise in your specific domain.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.threeSecond}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/yt_choose.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="550"
              height="250"
            />
            {/* <VideoYt/> */}
            <div className={styles.ytBot}>
              <p>
                <span>Important Note:</span> You will be assigned 5 members to
                oversee the entire project life-cycle and gain practical project
                management skills.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.innerDivFour}>
          <div className={styles.oneFour}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Doubt_Learnbay.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="684"
              height="527"
            />
          </div>
          <div className={styles.SecondFour}>
            <h3>1:1 Doubt Clearing Session</h3>
            <p>
            You can book personalized doubt classes for modules or projects with experts. These tailored sessions will help you understand concepts better and address any questions or challenges you might have.

            </p>
            <div className={styles.botDivYellow}>
              <p>
                <span>*Important Note:</span> Schedule your sessions from 10 AM - 6 PM (Mon-Sat) to secure your preferred time slot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default whyChooseSection;
