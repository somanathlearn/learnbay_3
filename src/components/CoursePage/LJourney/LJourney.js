import Image from "next/image";
import styles from "./LJourney.module.css";
import { useEffect, useRef } from "react";

const LJourney = () => {
  const animationDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = animationDivRef.current.querySelectorAll(`.${styles.cercleone}, .${styles.tik}`);
          const images = animationDivRef.current.querySelectorAll("img");
          const arrows = animationDivRef.current.querySelectorAll(`.${styles.arrow}`);

          if (entry.isIntersecting) {
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add(styles.animate);
                images[index].classList.add(styles.animate);
                if (index < arrows.length) {
                  arrows[index].classList.add(styles.animate);
                }
              }, index * 500); // Adjust delay as needed
            });
          } else {
            elements.forEach((element, index) => {
              element.classList.remove(styles.animate);
              images[index].classList.remove(styles.animate);
              if (index < arrows.length) {
                arrows[index].classList.remove(styles.animate);
              }
            });
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (animationDivRef.current) {
      observer.observe(animationDivRef.current);
    }

    return () => {
      if (animationDivRef.current) {
        observer.unobserve(animationDivRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.animHead}>
      <h2>Learning journey at Learnbay</h2>
      <div className={styles.flexdiv}>
        <div ref={animationDivRef} className={styles.animationdiv}>
          <div className={`${styles.cercleone}`}>
            <Image
              className={styles.icons}
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/avtar_ani.png"
              width={80}
              height={80}
              loading="lazy"
              alt="Man Icon"
              unoptimized
            />
          </div>
          <div className={styles.arrow}></div>
          <div className={`${styles.cercleone}`}>
            <Image
              className={styles.icons}
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/doc_ani.png"
              width={80}
              height={80}
              loading="lazy"
              alt="MES Icon"
            />
          </div>
          <div className={styles.arrow}></div>
          <div className={`${styles.cercleone}`}>
            <Image
              className={styles.icons}
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/con_ani.png"
              width={80}
              height={80}
              loading="lazy"
              alt="Pen and Paper Icon"
            />
          </div>
          <div className={styles.arrow}></div>
          <div className={`${styles.tik}`}>
            <Image
              className={styles.icons}
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/right.png"
              width={80}
              height={80}
              loading="lazy"
              alt="Placeholder Icon"
            />
          </div>
        </div>

        <div className={styles.boxmain}>
          <div className={styles.box}>
            <p>Upskill Now</p>
            <span>Live sessions, expert 1:1 doubt clearing, and quizzes.</span>
          </div>

          <div className={styles.box}>
            <p>Capstone Projects</p>
            <span>Work with industry experts on practical projects.</span>
          </div>

          <div className={styles.box}>
            <p>Boost Profile</p>
            <span>Mock interviews and resume-building sessions</span>
          </div>

          <div className={styles.box}>
            <p>Career Goals</p>
            <span>Get placement assistance with top companies.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LJourney;
