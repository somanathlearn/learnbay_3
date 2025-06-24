"use client";
import React from "react";
import styles from "./reviewSlider.module.css";
import Image from "next/image";
import Reeldata from "./reelData";
import { useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const WhyLearnbay = () => {
  const reelswiperRef = useRef(null);

  const [swap, setSwap] = useState(false);

  const nextreelSlide = () => {
    reelswiperRef.current.slideNext();
    if (!swap) setSwap(true);
  };
  const prevreelSlide = () => {
    reelswiperRef.current.slidePrev();
    if (swap) setSwap(false);
  };
  return (
    <div className={styles.keyContainer}>
      <div className={styles.mainDiv}>
        <div className={styles.headingContainer}>
          <h2> Real Stories, <span className={styles.topSpan}>Real Success</span></h2>
          <p className={styles.subHeading}>
            Discover what our learners say about us
          </p>
          {/* <div className={styles.btnContainer}>
            <div className={styles.prevBtn} onClick={prevreelSlide}>
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div className={styles.nextBtn} onClick={nextreelSlide}>
              <MdOutlineKeyboardArrowRight />
            </div>
          </div> */}
          <Swiper
            onSwiper={(swiper) => {
              reelswiperRef.current = swiper;
            }}
            slidesPerView={4}
            spaceBetween={30}
            className={styles.mySwiper}
          >
            {Reeldata.map((item, id) => (
              <SwiperSlide key={id} className={styles.sliderWrapper}>
                <Image
                  src={item.proimage}
                  alt="Learnbay"
                  loading="lazy"
                  width={180}
                  height={200}
                  className={styles.videoImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.reviewBotSection}>
          <div className={styles.firstBotReview}>
            <h3 className={styles.mainHeading}>Courses Top Rated in:</h3>
            <p>Discover what our learners say about us</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Social_review.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="1066"
              height="408"
            />
          </div>
          <div className={styles.secondBotReview}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/review_right_side.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="974"
              height="668"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLearnbay;
