import React, { useState, useEffect } from "react";
import styles from "./PlacementCall.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

import { Autoplay } from "swiper";

const courseData = [
  { title: "Sr. Data Scientist", imgSrc: "firstimg.webp", imgWidth: 450 },
  { title: "ML Engineer", imgSrc: "secondimg.webp", imgWidth: 450 },
  { title: "AI Engineer", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "BI Engineer", imgSrc: "firstimg.webp", imgWidth: 400 },
  { title: "BI Developer", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "Sr. Data Analyst", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Business Analyst", imgSrc: "firstimg.webp", imgWidth: 400 },
  { title: "DataBase Admin", imgSrc: "secondimg.webp", imgWidth: 400 },
  // { title: "Data Science Manager", imgSrc: "thirdimg.webp", imgWidth: 400 },
];

const foundationCourseData = [
  { title: "Data Scientist", imgSrc: "secondimg.webp", imgWidth: 450 },
  { title: "AI Engineer", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Data Analyst", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "Business Analyst", imgSrc: "firstimg.webp", imgWidth: 400 },
  { title: "Data Engineer", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "ML Engineer", imgSrc: "secondimg.webp", imgWidth: 450 },
  { title: "BI Engineer", imgSrc: "firstimg.webp", imgWidth: 400 },
];

const BFSICourseData = [
  { title: "Data Scientist (BFSI)", imgSrc: "secondimg.webp", imgWidth: 450 },
  { title: "AI Specialist (BFSI)", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Risk Analyst", imgSrc: "secondimg.webp", imgWidth: 400 },
  {
    title: "Quantitative Analyst (Quant)",
    imgSrc: "firstimg.webp",
    imgWidth: 400,
  },
  { title: "Financial Analyst", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "Credit Analyst", imgSrc: "secondimg.webp", imgWidth: 450 },
  { title: "Insurance Actuary", imgSrc: "firstimg.webp", imgWidth: 400 },
];

const HealthCareCourseData = [
  {
    title: "Biomedical Data Scientist",
    imgSrc: "firstimg.webp",
    imgWidth: 450,
  },
  {
    title: "Healthcare Data Engineer",
    imgSrc: "secondimg.webp",
    imgWidth: 400,
  },
  {
    title: "Healthcare Data Scientist",
    imgSrc: "health-slide-bt.webp",
    imgWidth: 400,
  },
  {
    title: "Clinical Research Analyst",
    imgSrc: "firstimg.webp",
    imgWidth: 400,
  },
  { title: "Clinical Data Analyst", imgSrc: "secondimg.webp", imgWidth: 400 },
  {
    title: "Senior Data Scientist",
    imgSrc: "health-slide-bt.webp",
    imgWidth: 450,
  },
  { title: "Lab Data Analyst", imgSrc: "firstimg.webp ", imgWidth: 400 },
];

const HRCourseData = [
  { title: "HR Data Scientist", imgSrc: "secondimg.webp", imgWidth: 450 },
  { title: "Retantion Specialist", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "HR Analyst", imgSrc: "secondimg.webp", imgWidth: 400 },
  {
    title: "Talent Acquisition Analyst",
    imgSrc: "firstimg.webp",
    imgWidth: 400,
  },
  { title: "HR Compliance Analyst", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "Workforce Planner", imgSrc: "secondimg.webp", imgWidth: 450 },
  {
    title: "Employee Relations Analyst",
    imgSrc: "firstimg.webp",
    imgWidth: 400,
  },
];

const MarketingCourseData = [
  { title: "Marketing Analyst", imgSrc: "secondimg.webp", imgWidth: 450 },
  { title: "Market Research Analyst", imgSrc: "thirdimg.webp", imgWidth: 400 },
  {
    title: "Business Intelligence Analyst",
    imgSrc: "secondimg.webp",
    imgWidth: 400,
  },
  {
    title: "Customer Insights Analyst",
    imgSrc: "firstimg.webp",
    imgWidth: 400,
  },
  { title: "CRM Analyst", imgSrc: "secondimg.webp", imgWidth: 400 },
  {
    title: "Marketing Data Scientist",
    imgSrc: "secondimg.webp",
    imgWidth: 450,
  },
  { title: "Retail Analyst", imgSrc: "firstimg.webp", imgWidth: 400 },
];

const DevopsData = [
  { title: "Cloud Engineer", imgSrc: "secondimg.webp", imgWidth: 450 },
  { title: "DevOps Engineer", imgSrc: "thirdimg.webp", imgWidth: 450 },
  { title: "System Admin", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "Cloud Architect", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Automation Engineer", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "Infrastructure Engineer", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Solutions Architecht", imgSrc: "secondimg.webp", imgWidth: 400 },
  {
    title: "Cloud Security Specialist",
    imgSrc: "thirdimg.webp",
    imgWidth: 400,
  },
  {
    title: "Site Reliability Engineer ",
    imgSrc: "secondimg.webp",
    imgWidth: 400,
  },

  // Add more data as needed
];

const PlacementCall = ({
  devops,
  Foundation,
  Marketing,
  HRAnalyst,
  BFSI,
  HealthCare,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {HealthCare ? (
        <div className={styles.PlacementCallMain}>
          <div className={styles.title}>
            <h2>Dedicated Placement Cell </h2>
            <p>Job roles & companies you can target</p>
          </div>
          <div className={styles.margin}>
            <div className={styles.course}>
              <div className={styles.mbldiv}>
                {HealthCareCourseData.map((course, index) => (
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
              width={600}
              height={200}
              loading="lazy"
              quality={40}
              alt="Deidicated Placement Cell"
            />
          </div>
          <div className={styles.stttt}>
            <div className={styles.rightSide}>
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {HealthCareCourseData.map((course, index) => (
                  <SwiperSlide className={styles.slide} key={index}>
                    <div className={styles.slideWrap}>
                      <div className={styles.number}>
                        <div className={styles.imged}>
                          <Image
                            src={`https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/${HealthCareCourseData[index].imgSrc}`}
                            height={60}
                            width={course.imgWidth}
                            loading="lazy"
                            quality={40}
                            alt="placement"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ) : (
        <>
          {Foundation ? (
            <div className={styles.PlacementCallMain}>
              <div className={styles.title}>
                <h2>Dedicated Placement Cell </h2>
                <p>Job roles & companies you can target</p>
              </div>
              <div className={styles.margin}>
                <div className={styles.course}>
                  <div className={styles.mbldiv}>
                    {foundationCourseData.map((course, index) => (
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
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Dedicated-Placement-Cell.gif"
                  width={600}
                  height={200}
                  loading="lazy"
                  quality={40}
                  alt="animation-Img"
                />
              </div>
              <div className={styles.stttt}>
                <div className={styles.rightSide}>
                  <Swiper
                    direction={"vertical"}
                    slidesPerView={1}
                    spaceBetween={30}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    {foundationCourseData.map((course, index) => (
                      <SwiperSlide className={styles.slide} key={index}>
                        <div className={styles.slideWrap}>
                          <div className={styles.number}>
                            <div className={styles.imged}>
                              <Image
                                src={`https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/${foundationCourseData[index].imgSrc}`}
                                height={60}
                                width={course.imgWidth}
                                loading="lazy"
                                quality={40}
                                alt="placement"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          ) : (
            <>
              {BFSI ? (
                <div className={styles.PlacementCallMain}>
                  <div className={styles.title}>
                    <h2>Dedicated Placement Cell </h2>
                    <p>Job roles & companies you can target</p>
                  </div>
                  <div className={styles.margin}>
                    <div className={styles.course}>
                      <div className={styles.mbldiv}>
                        {BFSICourseData.map((course, index) => (
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
                      width={600}
                      height={200}
                      loading="lazy"
                      quality={40}
                      alt="Deidicated Placement Cell"
                    />
                  </div>
                  <div className={styles.stttt}>
                    <div className={styles.rightSide}>
                      <Swiper
                        direction={"vertical"}
                        slidesPerView={1}
                        spaceBetween={30}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        {BFSICourseData.map((course, index) => (
                          <SwiperSlide className={styles.slide} key={index}>
                            <div className={styles.slideWrap}>
                              <div className={styles.number}>
                                <div className={styles.imged}>
                                  <Image
                                    src={`https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/${courseData[index].imgSrc}`}
                                    height={60}
                                    width={course.imgWidth}
                                    loading="lazy"
                                    quality={40}
                                    alt="placement"
                                  />
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {HRAnalyst ? (
                    <div className={styles.PlacementCallMain}>
                      <div className={styles.title}>
                        <h2>Dedicated Placement Cell </h2>
                        <p>Job roles & companies you can target</p>
                      </div>
                      <div className={styles.margin}>
                        <div className={styles.course}>
                          <div className={styles.mbldiv}>
                            {HRCourseData.map((course, index) => (
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
                          width={600}
                          height={200}
                          loading="lazy"
                          quality={40}
                          alt="Deidicated Placement Cell"
                        />
                      </div>
                      <div className={styles.stttt}>
                        <div className={styles.rightSide}>
                          <Swiper
                            direction={"vertical"}
                            slidesPerView={1}
                            spaceBetween={30}
                            grabCursor={true}
                            loop={true}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                          >
                            {HRCourseData.map((course, index) => (
                              <SwiperSlide className={styles.slide} key={index}>
                                <div className={styles.slideWrap}>
                                  <div className={styles.number}>
                                    <div className={styles.imged}>
                                      <Image
                                        src={`https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/${courseData[index].imgSrc}`}
                                        height={60}
                                        width={course.imgWidth}
                                        loading="lazy"
                                        quality={40}
                                        alt="placement"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {Marketing ? (
                        <div className={styles.PlacementCallMain}>
                          <div className={styles.title}>
                            <h2>Dedicated Placement Cell </h2>
                            <p>Job roles & companies you can target</p>
                          </div>
                          <div className={styles.margin}>
                            <div className={styles.course}>
                              <div className={styles.mbldiv}>
                                {MarketingCourseData.map((course, index) => (
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
                              width={600}
                              height={200}
                              loading="lazy"
                              quality={40}
                              alt="Deidicated Placement Cell"
                            />
                          </div>
                          <div className={styles.stttt}>
                            <div className={styles.rightSide}>
                              <Swiper
                                direction={"vertical"}
                                slidesPerView={1}
                                spaceBetween={30}
                                grabCursor={true}
                                loop={true}
                                autoplay={{
                                  delay: 2000,
                                  disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                              >
                                {MarketingCourseData.map((course, index) => (
                                  <SwiperSlide
                                    className={styles.slide}
                                    key={index}
                                  >
                                    <div className={styles.slideWrap}>
                                      <div className={styles.number}>
                                        <div className={styles.imged}>
                                          <Image
                                            src={`https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/${courseData[index].imgSrc}`}
                                            height={60}
                                            width={course.imgWidth}
                                            loading="lazy"
                                            quality={40}
                                            alt="placement"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          {devops ? (
                            <div className={styles.PlacementCallMain}>
                              <div className={styles.title}>
                                <h2>Dedicated Placement Cell </h2>
                                <p>Job roles & companies you can target</p>
                              </div>
                              <div className={styles.margin}>
                                <div className={styles.course}>
                                  <div className={styles.mbldiv}>
                                    {DevopsData.map((course, index) => (
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
                                  width={600}
                                  height={200}
                                  loading="lazy"
                                  quality={40}
                                  alt="Deidicated Placement Cell"
                                />
                              </div>
                              <div className={styles.stttt}>
                                <div className={styles.rightSide}>
                                  <Swiper
                                    direction={"vertical"}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    grabCursor={true}
                                    loop={true}
                                    autoplay={{
                                      delay: 2000,
                                      disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                  >
                                    {DevopsData.map((course, index) => (
                                      <SwiperSlide
                                        className={styles.slide}
                                        key={index}
                                      >
                                        <div className={styles.slideWrap}>
                                          <div className={styles.number}>
                                            <div className={styles.imged}>
                                              <Image
                                                src={`https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/${DevopsData[index].imgSrc}`}
                                                height={60}
                                                width={course.imgWidth}
                                                loading="lazy"
                                                quality={40}
                                                alt="placement"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                    ))}
                                  </Swiper>
                                </div>
                              </div>
                            </div>
                          ) : (
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
                                  width={600}
                                  height={200}
                                  loading="lazy"
                                  quality={40}
                                  alt="Deidicated Placement Cell"
                                />
                              </div>
                              <div className={styles.stttt}>
                                <div className={styles.rightSide}>
                                  <Swiper
                                    direction={"vertical"}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    grabCursor={true}
                                    loop={true}
                                    autoplay={{
                                      delay: 2000,
                                      disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                  >
                                    {courseData.map((course, index) => (
                                      <SwiperSlide
                                        className={styles.slide}
                                        key={index}
                                      >
                                        <div className={styles.slideWrap}>
                                          <div className={styles.number}>
                                            <div className={styles.imged}>
                                              <Image
                                                src={`https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/${courseData[index].imgSrc}`}
                                                height={60}
                                                width={course.imgWidth}
                                                loading="lazy"
                                                quality={40}
                                                alt="placement"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                    ))}
                                  </Swiper>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default PlacementCall;
