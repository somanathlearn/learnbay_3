import React, { useEffect, useRef } from "react";
import styles from "./whyChooseSection.module.css";
import Image from "next/image";
import whyChooseData from "./WhyChooseData"; 

function Animation() {
  const divRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.7, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
        
          setTimeout(() => {
            entry.target.classList.add(styles.highlight);
          }, index * 200); 
        } else {
        
          entry.target.classList.remove(styles.highlight);
        }
      });
    }, options);

    divRefs.current.forEach((div) => {
      if (div) observer.observe(div); 
    });

    return () => {
      divRefs.current.forEach((div) => {
        if (div) observer.unobserve(div);
      });
    };
  }, []);

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.containerMain}>
        <div className={styles.header}>
          <p>It’s not just any other ordinary platform, </p>
          <h2>
            It's <span>Learnbay</span>
          </h2>
        </div>
        <div className={styles.columnDiv}>
          {whyChooseData.map((item, index) => (
            <div
              className={styles.divContainer}
              key={index}
              ref={(el) => (divRefs.current[index] = el)} 
            >
              <div className={styles.svglogo}>
                <Image
                  src={item.image}
                  alt="Learnbay"
                  quality={100}
                  loading="lazy"
                  width={70}
                  height={70}
                />
                {item.svg && item.svg}
              </div>
              <div className={styles.downArrow}></div>
              <div>
                <h4>{item.title}</h4>
                <p className={styles.pTag}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Animation;
