import React from "react";
import styles from "./PlacementCall.module.css";
import { PiCertificate } from "react-icons/pi";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
// import required modules
import { EffectFade, Autoplay } from "swiper";
const courseData = [
  { title: "Software Developer" },
  { title: "Systems Architech" },
  { title: "Web Developer" },
  { title: "Front-end Developer" },
  { title: "Product Manager" },
  { title: "Software Tester" },
  { title: "Quality Assurance" },
];
const PlacementCall = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    // Add a listener for window resize
    window.addEventListener("resize", handleResize);
    // Initial check for mobile view
    handleResize();
    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.PlacementCallMain}>
      <div className={styles.title}>
        <h2>Dedicated Placement Cell</h2>
        <p>Job roles & companies you can target</p>
      </div>
      <div className={styles.margin}>
        <div className={styles.course}>
          <div className={styles.mbldiv}>
            {courseData.map((course, index) => (
              <div
                className={`${styles.PlacementCallcourse} ${styles.scrollAnimation}`}
                key={index}
              >
                <p>{course.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.imgsection}>
        <img
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Dedicated-Placement-Cell.gif"
          alt="placement"
          width={600}
          height={200}
        />
      </div>
      <div className={styles.stttt}>
        <div className={styles.rightSide}>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            // slidesPerColumn={1}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.slide}>
              <div className={styles.slideWrap}>
                <div className={styles.number}>
                  {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/2.png"
                        width={37}
                        height={50}
                        layout="intrinsic"
                      /> */}
                  <div className={styles.imged}>
                    <Image
                      src="      https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/secondimg.png"
                      height={60}
                      width={450}
                      alt="placement"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slideWrap}>
                <div className={styles.number}>
                  {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/2.png"
                        width={37}
                        height={50}
                        layout="intrinsic"
                      /> */}
                  <div className={styles.imged}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/thirdimg.png"
                      height={60}
                      width={400}
                      alt="placement"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default PlacementCall;
