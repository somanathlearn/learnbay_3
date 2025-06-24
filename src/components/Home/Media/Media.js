import styles from "./Media.module.scss";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

const Media = ({ projectData, noLink }) => {
  return (
    <div className={styles.projectHeader}>
      <div className={`${styles.headWrapper} width`}>
        <div className={styles.left}>
          <p className={styles.ptop}>Featured in</p>
          <h4>Media Spotlight</h4>
        </div>
        <div className={styles.pNavg}>
          <div className={`${styles.customArrow} custom-prev`}>
            <BsArrowLeft />
          </div>
          <div className={`${styles.customArrow} custom-next`}>
            <BsArrowRight />
          </div>
        </div>
      </div>
      <div className={`${styles.container} width`}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          grabCursor={true}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 35,
            },
            481: {
              slidesPerView: 1.6,
              spaceBetween: 35,
            },
            641:{
              slidesPerView:2,
              spaceBetween:20,
            },
            761: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
            961: {
              slidesPerView: 3.4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.8,
              spaceBetween: 45,
            },
            1280: {
              slidesPerView: 4.1,
              spaceBetween: 20,
            },
          }}
          className={`mySwiper ${styles.myswiper}`}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {projectData.map((data, index) => (
            <SwiperSlide className={styles.project} key={index}>
              {noLink ? (
                <>
                  <div className={styles.header}>
                    <div className={styles.left}></div>
                    <div
                      className={styles.imgWrap}
                      style={
                        data.id === "BMW"
                          ? { width: "35px" }
                          : { width: "auto" }
                      }
                    >
                      <div className="imgWrapper">
                        <Image
                          src={data.CLogo}
                          alt="Learnbay"
                          quality={100}
                          width="80"
                          height="40"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.body}>
                    <h5>{data.domain}</h5>
                    <p>{data.SDesc}</p>
                  </div>
                </>
              ) : (
                <Link href={data.url} target="_blank" rel="nofollow">
                  <div className={styles.header}>
                    <div className={styles.left}></div>
                    <div
                      className={styles.imgWrap}
                      style={
                        data.id === "BMW"
                          ? { width: "35px" }
                          : { width: "auto" }
                      }
                    >
                      <div className="imgWrapper">
                        <Image
                          src={data.CLogo}
                          alt="Learnbay"
                          quality={100}
                          width="80"
                          height="40"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.body}>
                    <h5>{data.domain}</h5>
                    <p>{data.SDesc}</p>
                  </div>
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Media;
