import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useCallback, useMemo } from "react";
import { AiOutlineRise } from "react-icons/ai";
import { Pagination, Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Testimonial.module.css";

// Lazy loading popups with fallback loaders
const VideoPopup = dynamic(() => import("../../Global/VideoPopup/VideoPopup"), { 
  ssr: false, 
  loading: () => <p>Loading Video...</p> 
});
const ReviewPopup = dynamic(() => import("../../../components/Global/ReviewPopup/ReviewPopup"), { 
  ssr: false, 
  loading: () => <p>Loading Review...</p> 
});

function TestimonialCopy({ redirectDS, para, heading, Testimonial }) {
  const [videoData, setVideoData] = useState(null);
  const [popupData, setPopupData] = useState(null);

  // Show Video Popup
  const showVideo = useCallback((id) => {
    setVideoData(id);
  }, []);

  // Show Review Popup
  const showPopup = useCallback((data) => {
    setPopupData({
      title: { name: data.name, hike: data.statLogo, position: data.working },
      desc: data.lDesc,
      imgSrc: { id: data.id, cLogo: data.complogo, pLogo: data.proImg },
    });
  }, []);

  // Swiper Configurations
  const paginationConfig = useMemo(() => ({
    dynamicBullets: true,
    clickable: true
  }), []);

  const breakpointsConfig = useMemo(() => ({
    1281: { slidesPerView: 4.1, spaceBetween: 50 },
    1024: { slidesPerView: 3, spaceBetween: 55 },
    961: { slidesPerView: 3, spaceBetween: 20 },
    801: { slidesPerView: 2.5, spaceBetween: 20 },
    641: { slidesPerView: 2, spaceBetween: 20 },
    481: { slidesPerView: 1.8, spaceBetween: 20 },
    100: { slidesPerView: 1.2, spaceBetween: 20 },
  }), []);

  // Memoized Swiper Slides
  const slides = useMemo(() => (
    Testimonial.map((data, index) => (
      <SwiperSlide className={styles.slide} key={data.id || index}>
        <div className={styles.proImgWrap}>
          <div className="imgWrapper">
            <Image
              src={data.proImg}
              width={358}
              height={212}
              alt={data.name}
              priority={index === 0} // Prioritize first image for LCP improvement
              onClick={() => showVideo(data.link)}
            />
          </div>
        </div>
        <div className={styles.mainSlider}>
          <div className={styles.imgP}>
            <div className={styles.name}>
              <h3>{data.name}</h3>
              <p>{data.working}</p>
            </div>
            <div className={styles.nameHike}>
              <p>
                {data.statLogo}
                <AiOutlineRise />
              </p>
            </div>
          </div>
          <div className={styles.paraDiv}>
            <p className={styles.para}>
              {data.sDesc}
              {redirectDS && <span onClick={() => showPopup(data)}> Learn More</span>}
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))
  ), [Testimonial, redirectDS, showPopup, showVideo]);

  return (
    <div className={styles.testimonial} id="alumni">
      {/* Popups - Render only when needed */}
      {videoData && <VideoPopup triggers={true} setTriggers={() => setVideoData(null)} ids={videoData} />}
      {popupData && <ReviewPopup trigger={true} setTrigger={() => setPopupData(null)} {...popupData} />}

      <h4 className={styles.h1}>{heading}</h4>
      {para && <p className={styles.ptop}>{para}</p>}

      <section>
        <div className={styles.Section1}>
          <div className={styles.Testimonial}>
            <div className={styles.swiperleft}>
              <Swiper
                loop
                pagination={paginationConfig}
                grabCursor
                modules={[Pagination, Navigation, Scrollbar]}
                breakpoints={breakpointsConfig}
                className="mySwiper"
              >
                {slides}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialCopy;
