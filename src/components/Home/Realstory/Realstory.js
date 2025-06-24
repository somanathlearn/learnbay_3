import { useState } from "react";
import Image from "next/image";
import styles from "./Realstory.module.css";
import sliderData from "./SliderData";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Import fade effect style
import VideoPopup from "@/components/Global/VideoPopup/VideoPopup";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import { FaYoutube } from "react-icons/fa";

SwiperCore.use([Navigation]);

const Realstory = () => {
  const [bigImageIndex, setBigImageIndex] = useState(0);
  const [profileIndex, setProfileIndex] = useState(0);

  const handleNextSlide = () => {
    if (bigImageIndex < sliderData.length - 1) {
      setBigImageIndex((prevIndex) => prevIndex + 1);
      setProfileIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (bigImageIndex > 0) {
      setBigImageIndex((prevIndex) => prevIndex - 1);
      setProfileIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleProfileClick = (index) => {
    setProfileIndex(index);
    setBigImageIndex(index);
  };

  const handleSlideChange = (swiper) => {
    setProfileIndex(swiper.activeIndex);
    setBigImageIndex(swiper.activeIndex);
  };

  const profileData = [
    {
      id: 1,
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/jaya_pro.webp",
    },
    {
      id: 2,
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/shubam_pro.webp",
    },
    {
      id: 3,
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/arvind_pro.webp",
    },
    {
      id: 4,
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/preksha_pro.webp",
    },
    {
      id: 5,
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/irsar_pro.webp",
    },
    {
      id: 6,
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/laxmi_pro.webp",
    },
  ];

  const [vId, setVId] = useState("");
  const [video, setVideo] = useState(false);

  const videoShow = (id) => {
    setVideo(true);
    setVId(id);
  };

  return (
    <div className={styles["slider-container"]}>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={vId} />
      <div className={styles["big-image-container"]}>
        <div
          className={styles["big-image"]}
          style={{ transform: `translateX(-${bigImageIndex * 100}%)` }}
        >
          {sliderData.map((slide) => (
            <img
              key={slide.id}
              src={slide.bigImage}
              alt="testimonials"
              onClick={() => videoShow(slide.link)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
      <div className={styles.rytside}>
        <h2 className={styles.header}>Real Stories, Real Success</h2>
        <p className={styles.para}>Discover what our learners say about us</p>
        <div className={styles.slider}>
          <div className={styles.doubleSlider}>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              navigation={{
                nextEl: `.${styles.nextarrow}`,
                prevEl: `.${styles.prevarrow}`,
              }}
            >
              {profileData.map((profile, index) => (
                <SwiperSlide key={profile.id}>
                  <div
                    className={`${styles.sliderContent} ${
                      index === profileIndex && styles.active
                    }`}
                    onClick={() => handleProfileClick(index)}
                  >
                    <Image
                      src={profile.imageUrl}
                      width={300}
                      height={100}
                      alt="testimonials"
                      className={styles["big-image"]}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={styles.arrowButtons}>
          <div
            className={`${styles.prevarrow} ${
              profileIndex === 0 && styles.activeProfile
            }`}
            onClick={handlePrevSlide}
          >
            <p>
              <GrLinkPrevious />
            </p>
          </div>
          <div
            className={`${styles.nextarrow} ${
              profileIndex === profileData.length - 1 && styles.activeProfile
            }`}
            onClick={handleNextSlide}
          >
            <p>
              <GrLinkNext />
            </p>
          </div>
        </div>
        <div className={styles.downcontent}>
          <div className={styles.contenthead}>
            <h2>9K+</h2>
            <p>Successful Career Transitions</p>
          </div>
          <hr />
          <div className={styles.contenthead}>
            <h2>175%</h2>
            <p>Average Salary Hike</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realstory;
