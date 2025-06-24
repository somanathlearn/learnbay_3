import React from "react";
import Image from "next/image";
import styles from "./IndustrialProjects.module.css";
import dynamic from "next/dynamic";

import { Suspense, lazy, useState } from "react";
const Button = dynamic(() =>
  import("../../../components/Global/Button/Button")
);
const Popup = dynamic(() => import("../../../components/Global/Popup/Popup"));
const Form = lazy(() => import("../../../components/Global/Form/Form"));

import { Swiper, SwiperSlide } from "swiper/react";
export default function IndustrialProjects({
  data,
  titleCourse,
  brochureLink,
  dataScience,
  interstedInHide,
  brochurePdf,
}) {
  // Extract projectSection from the data prop
  //   const { projectSection } = data;

  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.wrapper}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Syllabus</h5>
          <Suspense>
            <Form
              dataScience={dataScience}
              downloadBrochure
              upSkillingHide={true}
              titleCourse={titleCourse}
              brochureLink={brochureLink}
              interstedInHide={interstedInHide}
              brochurePdf={brochurePdf}
            />
          </Suspense>
        </div>
      </Popup>
      <h3 className={styles.head}>Industry Projects</h3>
      <h3 className={styles.subhead}>Work on live capstone projects</h3>
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1} // This will show 4 cards on desktop
        breakpoints={{
          1400: {
            slidesPerView: 4,
            spaceBetween: 80,
          },

          1280: {
            slidesPerView: 3,
            spaceBetween: 55,
          },
          1024: {
            slidesPerView: 2.8,
            spaceBetween: 45,
          },
          961: {
            slidesPerView: 2.1,
            spaceBetween: 40,
          },
          761: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        <section className={styles.projectsSection}>
          <h2 className={styles.sectionTitle}>
            Executive-level real-time <span>Industrial Projects</span>
          </h2>

          <div className={styles.projectsContainer}>
            {/* Map over projectSection to create cards */}
            {data.map((project, index) => (
              <SwiperSlide key={`project-${index}`}>
                <div key={project.id} className={styles.projectCard}>
                  {/* Header: #1, #2, etc. + Title */}
                  <div className={styles.cardHeader}>
                    <span className={styles.projectNumber}>#{index + 1}</span>
                    <div className={styles.duration}> {project.duration}</div>
                  </div>
                  <h3 className={styles.projectTitle}>{project.heading}</h3>

                  {/* Description */}
                  <p className={styles.description}>{project.para}</p>

                  {/* Tools image (if available) */}
                  {project.toolImg && (
                    <div className={styles.tools}>
                      <Image
                        src={project.toolImg}
                        width={150}
                        height={40}
                        alt="Tools"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Duration or other details */}
                  <p className={styles.outcome}></p>

                  {/* "Learn more" link/button (if available) */}

                  <p>
                    <strong>Outcome:</strong> {styles.learnMore}
                    {project.learnMore}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </section>
      </Swiper>
      <div onClick={popupShow} className={styles.buttonDiv}>
        <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
      </div>
    </div>
  );
}
