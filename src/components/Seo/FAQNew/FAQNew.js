import React, { useState } from "react";
import styles from "./FAQNew.module.css";
import FAQ from "../FAQNew/FAQ";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

function FAQNew({ FAQNewData, bAnalystAbout }) {
  // const [mobile, setMobile] = useState(false);
  const [dataLoop, setDataLoop] = useState([
    { title: "Course Related", value: true },
    { title: "Domain Electives", value: false },
    { title: "Payments and Scholarships", value: false },
    { title: "Capstone and Real-Time Projects", value: false },
    { title: "Certification", value: false },
    { title: "Job Assistance", value: false },
    { title: "Mentorship", value: false },
    { title: "Support", value: false },
    { title: "Eligiblity Criteria", value: false },
    { title: "Eligibility Criteria", value: false },
    { title: "Generic Queries", value: false }, 
  ]);

  const menuChange = (title) => {
    setDataLoop((prevDataLoop) =>
      prevDataLoop.map((item) => ({
        ...item,
        value: item.title === title,
      }))
    );
  };

  return (
    <div className={styles.course} id="faqs">
      {bAnalystAbout ? (
        <h4 className={styles.infop} style={{ fontSize: "30px" }}>
          FAQs for Business Analyst Course Training in Pune: –{" "}
        </h4>
      ) : (
        <h4 className={styles.infop}>FAQs</h4>
      )}

      <p>
        Curriculum is specifically engineered to meet the expectations of
        leading tech companies.
      </p>
      <div className={styles.courseM}>
        <div className={styles.courses}>
          <div className={styles.listPanel}>
            {FAQNewData.map((data, index) => {
              return (
                <span
                  onClick={() => {
                    menuChange(data.sectionName);
                  }}
                  style={
                    dataLoop.find((item) => item.title === data.sectionName)?.value
                      ? {
                          background: "white",
                          color: "#000",
                          borderLeft: "4px solid #2D9CD7",
                        }
                      : {}
                  }
                  key={index}
                >
                  {data.sectionName}
                </span>
              );
            })}
          </div>
          {FAQNewData.map((dataF, index) => {
            const { data,sectionName } = dataF;
            const isActive = dataLoop.find((item) => item.title === sectionName)?.value;
            return isActive ? (
              <div className={styles.gridPanel} key={index}>
                <FAQ FaqData={data} />
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <div className={styles.courseD}>
        <div className={styles.listPanel}>
          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            grabCursor={true}
            navigation={true}
            style={{
              paddingLeft: "5px",
              paddingRight: "5px",
              overflow: "hidden",
              "--swiper-navigation-color": "#0072BC",
              "--swiper-navigation-size": "20px",
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {FAQNewData.map((data, index) => {
              return (
                <SwiperSlide className={styles.slide} key={index}>
                  <span
                    onClick={() => {
                      menuChange(data.sectionName);
                    }}
                    style={
                      dataLoop.find((item) => item.title === data.sectionName)?.value
                        ? {
                            background: "#E1F1F566",
                            color: "#0072BC",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }
                        : {
                            background: "none",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }
                    }
                  >
                    {data.sectionName}
                  </span>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {FAQNewData.map((dataF, index) => {
          const { data,sectionName } = dataF;
          const isActive = dataLoop.find((item) => item.title === sectionName)?.value;
          return isActive ? (
            <div className={styles.gridPanel} key={index}>
              <FAQ FaqData={data} />
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}

export default FAQNew;
