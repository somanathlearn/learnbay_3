import React, { useState } from "react";
import styles from "./Review.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { ReviewD } from "./ReviewDetails";

function Review({ viewmore = true }) {
  const [showMobileImages, setShowMobileImages] = useState(false);
  const toggleMobileImages = () => {
    setShowMobileImages(!showMobileImages);
  };
  const cardsToShow = viewmore
    ? ReviewD.slice(0, showMobileImages ? ReviewD.length : 3)
    : ReviewD;
  return (
    <section className={styles.Review}>
      <div className={styles.Back}>
        <h4>Words From Our Alumni</h4>
      </div>
      <div className={styles.gridPanel}>
        {cardsToShow.map((Review) => {
          const { id, title, img, para } = Review;
          return (
            <div className={styles.leftSide} key={id}>
              <div className={styles.imgDiv}>
                <img src={img} className={styles.ReviewImg} alt="Learnbay" />
              </div>
              <p className={styles.title}>{title}</p>
              <FaQuoteLeft className={styles.Quote} />
              <p className={styles.para}>{para}</p>
              <FaQuoteRight className={styles.Quote} />
            </div>
          );
        })}
      </div>
      {viewmore && ReviewD.length > 3 && (
        <button className={styles.btn} onClick={toggleMobileImages}>
          {showMobileImages ? "View Less" : "View More"}
        </button>
      )}
    </section>
  );
}

export default Review;
