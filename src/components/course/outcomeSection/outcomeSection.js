// OutcomeSection.js
import Image from "next/image";
import styles from "./outcomeSection.module.css";
import outcomeData from "./OutComeData"; 

function OutcomeSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <h2>
            Program Outcome:
            <span className={styles.borderBot}> What’s in it for you?</span>
          </h2>
          <div className={styles.innerBoxDiv}>
            {outcomeData.map((item, index) => {
              const backgroundClass =
                index === 0
                  ? styles.headContBlue
                  : index === 1
                  ? styles.headContGreen
                  : styles.headContOrange;

              return (
                <div key={item.id} className={styles.innerBox}>
                  <div className={`${styles.headCont} ${backgroundClass}`}>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      quality={100}
                      width={60}
                      height={60}
                    loading="lazy"
                    />
                    <h3>{item.title}</h3>
                  </div>
                  <p className={styles.pTop}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OutcomeSection;
