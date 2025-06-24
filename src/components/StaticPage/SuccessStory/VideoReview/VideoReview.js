import React, { useState } from "react";
import styles from "./VideoReview.module.css";
import Image from "next/image";
import VideoPopup from "../../../Global/VideoPopup/VideoPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
const VideoReview = ({ idss }) => {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };
  // const el = useRef(null);
  const popupShow = () => {
    setPopups(true);
  };
  const images = [
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/video-review.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/video-review.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/video-review.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/video-review.webp",
  ];
  return (
    <section className={styles.container}>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
      <h4>Career Stories & Reviews</h4>
      <div className={styles.BoxDiv}>
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          breakpoints={{
            1280: { slidesPerView: 3, spaceBetween: 30 },
            481: {
              slidesPerView: 1.4,
              spaceBetween: 10,
            },
            393: {
              slidesPerView: 1.4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={`imgWrapper ${styles.imgwrapper}`}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/video-review.webp"
                  width={548}
                  height={364}
                  style={{ height: "fit-content" }}
                  onClick={() => videoSHow()}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default VideoReview;
