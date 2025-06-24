"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./DSASyllabus.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation styles (if used)
import "swiper/css/pagination"; // Pagination styles (if used)
import "swiper/css/effect-coverflow"; // Coverflow effect styles (if used)

const SyllabusSection = ({
  sections = [],
  brochureLink,
  brochurePdf,
  interstedInHide,
  radio,
}) => {
  const [openSliderIndex, setOpenSliderIndex] = useState(null);
  const [initialSlide, setInitialSlide] = useState(0);
  const [activeSlides, setActiveSlides] = useState([]);
  const swiperRef = useRef(null);
  const gridContainerRef = useRef(null);
  const [popups, setPopups] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSlider = (index) => {
    setInitialSlide(index);
    setOpenSliderIndex(openSliderIndex === index ? null : index);

    if (gridContainerRef.current) {
      const firstCard = gridContainerRef.current.querySelector(".card");
      if (firstCard) {
        const cardLeftPosition = firstCard.offsetLeft;
        gridContainerRef.current.scrollTo({
          left: cardLeftPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const updateActiveSlides = () => {
    if (!swiperRef.current?.swiper) return;

    const swiperInstance = swiperRef.current.swiper;
    const slides = Array.from(swiperInstance.slides);
    const swiperRect = swiperInstance.el.getBoundingClientRect();
    const swiperCenter = swiperRect.left + swiperRect.width / 2;
    const activeRange = 0.3 * swiperRect.width;

    const newActiveSlides = slides
      .filter((slide) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = (slideRect.left + slideRect.right) / 2;
        return Math.abs(swiperCenter - slideCenter) < activeRange;
      })
      .map((slide) => slide.getAttribute("data-swiper-slide-index"));

    setActiveSlides(newActiveSlides);
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateActiveSlides);
      swiperInstance.on("transitionEnd", updateActiveSlides);
      updateActiveSlides();
    }

    return () => {
      swiperInstance?.off("slideChange", updateActiveSlides);
      swiperInstance?.off("transitionEnd", updateActiveSlides);
    };
  }, [openSliderIndex]);

  if (!Array.isArray(sections) || sections.length === 0) {
    return <div>No sections available.</div>;
  }

  const popupShow = () => {
    setPopups(true);
  };

  const closePopup = () => {
    setOpenSliderIndex(null);
  };

  const getResponsiveSize = (sizes) => {
    if (!sizes) {
      return { width: 100, height: 100 }; // Fallback to default size
    }
    if (windowWidth < 361) return sizes.vsm;
    if (windowWidth < 641) return sizes.sm;
    if (windowWidth < 1024) return sizes.md; // Tablet
    return sizes.lg; // Desktop
  };

  return (
    <div className={styles.mainConteiner}>
      <h2 className={styles.headline}>
        Explore Our <span>Syllabus</span>
      </h2>
      {sections.map((section, index) => {
        const reasult = getResponsiveSize(section.imageSizes);
        const { height, width } = reasult;
        return (
          <div
            key={section.id}
            className={styles.gridConteiner}
            ref={gridContainerRef}
          >
            <div className={styles.gridleft}>
              <div className={styles.leftinside}>
                <Image
                  src={section.trackIcon}
                  width={section.width}
                  height={section.height}
                  alt="trackIcon"
                />
                <h3>{section.title}</h3>
              </div>
              {index !== sections.length - 1 && (
                <div className={styles.verticalLine}></div>
              )}
            </div>
            <div className={styles.gridryt}>
              <div className={styles.rytmain}>
                <div className={styles.ryttop}>
                  <p>{section.description}</p>
                  <div className={styles.date}>
                    <p>{section.duration}</p>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.contentlist}>
                    <p className={styles.pline}>
                      <span className={styles.org}>
                        {section.contentModule}:{" "}
                      </span>
                      {section.contentDescription}
                    </p>
                    <ul className={styles.lists}>
                      {section.contentDetails.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                    <div
                      className={styles.popupbtn}
                      onClick={() => toggleSlider(index)}
                    >
                      Read more
                    </div>
                  </div>
                  <div className={styles.tools}>
                    <p>Topics</p>
                    <Image
                      src={section.toolsImg}
                      width={width}
                      height={height}
                      alt="tools"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {openSliderIndex === index && (
              <div className={styles.popup}>
                <button className={styles.closePopup} onClick={closePopup}>
                  Close
                </button>
                {Array.isArray(section.popuplist) &&
                section.popuplist.length > 0 ? (
                  !isMobile ? (
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={1}
                      centeredSlides={true}
                      className={styles.swiper}
                      ref={swiperRef}
                      grabCursor={true}
                      touchRatio={2}
                      freeMode={false}
                      modules={[EffectCoverflow]}
                      effect="coverflow"
                      coverflowEffect={{
                        rotate: 0,
                        stretch: 40,
                        depth: 100,
                        modifier: 2,
                      }}
                      initialSlide={initialSlide}
                      onSlideChange={updateActiveSlides}
                      breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        480: { slidesPerView: 1.5, spaceBetween: 15 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                        1440: { slidesPerView: 3, spaceBetween: 30 },
                      }}
                    >
                      {section.popuplist.map((item, idx) => (
                        <SwiperSlide
                          key={item.id}
                          data-swiper-slide-index={idx}
                          className={`${styles.swiperSlide} ${
                            activeSlides.includes(idx.toString())
                              ? styles.active
                              : ""
                          }`}
                        >
                          <div className={styles.card}>
                            <div className={styles.cardContent}>
                              <div className={styles.cardHead}>
                                <div className={styles.termGreen}>
                                  {item.term}
                                </div>
                                <div className={styles.date}>
                                  <span>{item.duration}</span>
                                </div>
                              </div>
                              <h5 className={styles.titleH}>{item.title}</h5>
                              <div className={styles.slidercontent}>
                                {item.modules.map((module) => (
                                  <div
                                    className={styles.module}
                                    key={module.moduleTitle}
                                  >
                                    <div className={styles.popupleft}>
                                      <span>{module.moduleTitle}</span>
                                    </div>
                                    <div className={styles.populist}>
                                      {module.moduleList.map((content, idx) => (
                                        <p key={idx}>{content}</p>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className={styles.cardContainer}>
                      {section.popuplist.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                          <div className={styles.cardContent}>
                            <div className={styles.cardHead}>
                              <div className={styles.termGreen}>
                                {item.term}
                              </div>
                              <div className={styles.date}>
                                <span>{item.duration}</span>
                              </div>
                            </div>
                            <h5 className={styles.titleH}>{item.title}</h5>
                            <div className={styles.slidercontent}>
                              {item.modules.map((module) => (
                                <div
                                  className={styles.module}
                                  key={module.moduleTitle}
                                >
                                  <div className={styles.popupleft}>
                                    <span className={styles.rotateText}>
                                      {module.moduleTitle}
                                    </span>
                                  </div>
                                  <div className={styles.rytdiv}>
                                    <p>{module.moduleContent}</p>
                                    <ul className={styles.listItem}>
                                      {module.moduleList.map(
                                        (detail, detailIdx) => (
                                          <li key={detailIdx}>{detail}</li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                ) : (
                  <div>No content available</div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SyllabusSection;
