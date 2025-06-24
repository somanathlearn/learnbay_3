import React from "react";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MentorsSection.module.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// Install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

function MentorsSection() {
  const mentorImg = [
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mentor-icon-sec.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mentor-sec-min.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/secmentor1.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/mentor-desktop.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/puulkit.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/tripti.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/AnkurK.webp",
  ];

  const companyImg = [
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/walmart.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mentor-icon.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/walmart.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/kryndal.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/paypal.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/paytm.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/walmart.webp",
  ];

  const mentorNames = [
    "Disha Jindgar",
    "Disha M.",
    "Tammanna V.",
    "Mohit S.",
    "Pulkit Jain",
    "Tripti Jain",
    "Ankur K.",
  ];

  return (
    <section className={styles.container}>
      <h2>
        Meet Our <span>Mentors</span>
      </h2>
      <p>Guiding You Every Step of the Way Towards Professional Excellence</p>
      <div className={styles.SliderDiv}>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1} // This will show 4 cards on desktop
          breakpoints={{
            768: {
              slidesPerView: 4, // This will show only 1 card on mobile (adjust as needed)
            },
          }}
        >
          {mentorImg.map((mentor, index) => (
            <SwiperSlide key={`mentor-${index}`} className={styles.slide}>
              <div className={styles.parentBox}>
              <div className={styles.box}>
                <div>
                  <Image
                    src={mentor}
                    width={100}
                    height={100}
                    alt="mentor"
                    quality={80}
                    style={{borderRadius: "20px"}}
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className={styles.Name}>{mentorNames[index]}</p>
                  <Image
                    src={companyImg[index]}
                    width={100}
                    height={25}
                    alt="company"
                    quality={80}
                    loading="lazy"
                  />
                </div>
              </div>
              <p className={styles.pBot}>Elevate Your Profile: Boost your career prospects </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MentorsSection;
