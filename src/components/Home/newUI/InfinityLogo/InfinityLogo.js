import React from "react";
import styles from "./infinity.module.css";
import Slider from "./Slider";

const InfinityLogo = () => {
  return (
<section className={`${styles.section} width`}>
      <div className={styles.conteiner}>
        <h2 className={styles.Desktoponly}>
          Upskill and transform your career in latest <br />
          <span>technologies</span> and <span> domains</span>
        </h2>

        <div className={styles.mblonly}>
        <h2>
        Build Skills in <span>High-Demand Technologies</span>
        </h2>
        <p>Choose from technologies and domains that
        match your career goals.</p>
        </div>

        <div>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default InfinityLogo;
