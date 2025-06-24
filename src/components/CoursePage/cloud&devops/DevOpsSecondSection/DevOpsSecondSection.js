// Gethire.js

import React from "react";
import styles from "../DevOpsSecondSection/devOpsSecondSection.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

function Gethire({ data, showimg, shoimgtwo }) {
  return (
    <div className={styles.boxmain}>
      <div className={styles.box1}>
        <h4>{data.title1}</h4>
        <div>
          <div className={styles.box1img}>
            <Image src={data.image1} width={350} height={100} loading="lazy" alt="Domain Specialization in BFSI, HR, Sales/Marketing"/>
          </div>
          <div className={styles.points}>
            {data.points.map((point, index) => (
              <div className={styles.cercle} key={index}>
                <BsCheckCircle className={styles.checkmark} />
                <p>{point}</p>
              </div>
            ))}
          </div>

          {/* <div className={styles.firstboxlastimg}>
            {showimg ? (
              <Image
                src={data.image10}
                width={120}
                height={100}
                loading="lazy"
                alt="devops"
              />
            ) : (
              <Image src={data.image2} width={85} height={75} loading="lazy" alt="Cloud-devops" />
            )}
          </div> */}
        </div>
      </div>

      <div className={styles.box2}>
        <h4>{data.title2}</h4>
        <div className={styles.dots}>
          {data.jobRoles.map((jobRole, index) => (
            <div className={styles.boticon} key={index}>
              <div className={styles.onlyicon}>{jobRole.icon}</div>
              <p>{`${jobRole.role}: ${jobRole.salary}`}</p>
            </div>
          ))}
        </div>
        <div className={styles.gamimg}>
          <Image src={data.image3} width={360} height={40} loading="lazy" alt="devops" />
        </div>
        <div>
          {/* <div className={styles.box3limg}>
            {shoimgtwo ? (
              <Image src={data.image11} width={100} height={50} loading="lazy" alt="devops"/>
            ) : (
              <Image src={data.image4} width={65} height={65} loading="lazy" alt="devops"/>
            )}
          </div> */}
        </div>
      </div>

      <div className={styles.box3}>
        <h4>{data.title3}</h4>
        <div className={styles.boxicons3}>
          <div className={styles.threemain}>
            {data.jobAssistance.map((assistance, index) => (
              <div className={styles.box3icon} key={index}>
                <div className={styles.box3icons}>
                  <div className={styles.iconsss}>{assistance.icon}</div>
                  <span>{assistance.text}</span>
                </div>
              </div>
            ))}
            {data.formbl.map((assistance, index) => (
              <div
                className={`${styles.box3icon} ${styles.boxmbl} `}
                key={index}
              >
                <div className={styles.box3icons}>
                  <div className={styles.iconsss}>{assistance.icon}</div>
                  <span>{assistance.text}</span>
                </div>
              </div>
            ))}
          </div>
          {/* <div className={styles.lastimg}>
            <Image src={data.image5} width={90} height={70} loading="lazy" alt="devops" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Gethire;
