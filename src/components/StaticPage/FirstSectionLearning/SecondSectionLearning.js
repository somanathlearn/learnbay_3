import React from "react";
import styles from "./FirstSection.module.css";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Link from "next/link";
import { SecondSectionLearningData } from "./SecondSectionLearningData";

function SecondSectionLearning() {
  return (
    <section className={styles.secondSection}>
      <h4>Get Links Here for Learning Resourses, Projects & Datasets</h4>
        <div className={styles.boxes}>

          {SecondSectionLearningData.map((data) => {

            const {id, projectlink, imglogo, ptext} = data;

            return(
              <Link href={projectlink} key={id}>
              <div className={styles.boxesInner}>
                <img src={imglogo} width="80px" height="80px"></img>
                <p className={styles.innerP}>{ptext} <FaDownload className={styles.iconB} /></p>
              </div>
            </Link>
            );
          })}
        </div>
    </section>
  );
}

export default SecondSectionLearning;
