import React from 'react';
import styles from './HandsOn.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay]);

const cardData = [
  {
    title: 'Hands-on Projects',
    description: 'Build portfolio-worthy project that showcase your skills',
  },
  {
    title: 'Capstone Projects',
    description: 'End-to-end industry projects to strengthen your resume',
  },
  {
    title: 'Real Data Exposure',
    description: 'Work on real datasets from top companies',
  },
];

const HandsOn = () => {
  return (
    <div className={styles.mainHandsOn}>
      <div className={styles.container}>
        <div className={styles.handonGrid}>
        <div className={styles.left}>
  <div className={styles.sliderWrapper}>
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className={styles.slider}
    >
      {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <div className={styles.card}>
            <h5>{card.title}</h5>
            <p>{card.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

          <div className={styles.ryt}>
            <span className={styles.highlets}>PERSONALISED SUPPORT</span>
            <div>
              <h4>
                How do we ensure <span className={styles.org}>your career success?</span>
              </h4>
              <p>Structured Learning Path with Real-World Applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandsOn;
