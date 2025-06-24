import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import styles from "./Course.module.css";
import dynamic from "next/dynamic";
import { BiTimeFive } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import styles from "./CourseDmd.module.css";
import { courseDetails, courseDetailsM } from "./DSCourseDetails";
const Popup = dynamic(() => import("@/components/Global/Popup/Popup"));
const Form = dynamic(() => import("@/components/Global/Form/Form"));

const Course = ({
  dataScience,
  radio,
  dataScienceCounselling,
  organicADS,
  dataScienceGeneric,
  interstedInHide,
  Domain,
  DomainInput,
}) => {
  const [courseArray, setCourseArray] = useState(courseDetails);
  const [mobile, setMobile] = useState(false);
  const [value, setValue] = useState(3.68);
  const [popups, setPopups] = useState(false);

  const [CourseLoop, setCourseLoop] = useState([
    { title: "Domain Courses", value: true },
    { title: "Data Science", value: false },
    { title: "Master's Degree", value: false },
    { title: "Cloud & DevOps", value: false },
    { title: "Popular", value: false },
  ]);

  const menuChange = (title, index) => {
    if (title === CourseLoop[index].title) {
      setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
      for (let i = 0; i < CourseLoop.length; i++) {
        if (index === i) {
          setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
        } else {
          setCourseLoop([...CourseLoop], (CourseLoop[i].value = false));
        }
      }
    }
  };

  const popupShow = () => {
    setPopups(true);
  };
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLinks, setBrochureLinks] = useState();

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setCourseArray(courseDetailsM);
      console.log("inside", courseDetailsM);
    }
  }, [courseArray]);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setValue(1.4);
      setMobile(true);
      setCourseArray(courseDetailsM);
      console.log("inside", courseDetailsM);
    }
    if (width < 600) {
      setValue(1.1);
      setMobile(true);
    } else if (width <= 641) {
      setValue(1.6);
    } else if (width <= 801) {
      setValue(2);
    } else if (width <= 961) {
      setValue(2.3);
    } else if (width <= 1025) {
      setValue(2.6);
    } else if (width <= 1280) {
      setValue(3);
    } else if (width <= 1281) {
      setValue(2.4);
    } else if (width > 1281) {
      setValue(3.1);
    }
  }, []);
  return (
    <div className={styles.Course} id="course">
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
          <Form
            titleCourse={titleCourse}
            brochureLink={brochureLinks}
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            dataScienceGeneric={dataScienceGeneric}
            radio={radio}
            downloadBrochure
            upSkillingHide={true}
            interstedInHide={interstedInHide}
            Domain={Domain}
            DomainInput={DomainInput}
          />
        </div>
      </Popup>
      {/* <h2>Our Courses</h2> */}

      <div className={styles.courses}>
        <div>
          {courseArray.map((courseDetail, index) => {
            const { courses } = courseDetail;
            return CourseLoop[index].value ? (
              <div key={index}>
                {courses.map((courseDetail, index) => {
                  return (
                    <div key={index} className={styles.divBox}>
                      <div
                        className={styles.viewAll}
                        style={{ display: "block", textAlign: "center" }}
                      >
                        <h5 className={styles.h5font}>
                          {courseDetail.courseName}
                        </h5>
                        {/* <h5 className={styles.textView}>View All</h5> */}
                      </div>
                      <div className={styles.borderTop}></div>
                      <div className={styles.gridPanel}>
                        <Swiper
                          slidesPerView={value}
                          spaceBetween={mobile ? 10 : 30}
                          pagination={{
                            clickable: true,
                          }}
                          grabCursor={true}
                          modules={[Pagination]}
                          className="mySwiper"
                        >
                          {courseDetail.courseDetails.map(
                            (viewAllData, index) => {
                              const {
                                id,
                                title,
                                title1,
                                img,
                                para,
                                link1,
                                tagHead,
                                titleCourse,
                                brochureLinks,
                                courseTime,
                                Green,
                                newDesign,
                                newDesignOrange,
                              } = viewAllData;
                              return (
                                <SwiperSlide
                                  className={styles.leftSide}
                                  key={index}
                                >
                                  <div key={id} className={styles.SliderWrap}>
                                    {organicADS ? (
                                      <a
                                        onClick={() => {
                                          setTitleCourse(titleCourse);
                                          setBrochureLinks(brochureLinks);
                                          popupShow();
                                        }}
                                        className={styles.imgWrap}
                                      >
                                        <div className="bgWrap">
                                          <Image
                                            src={img}
                                            fill={true}
                                            quality={60}
                                            loading="lazy"
                                            alt="data science course"
                                          />
                                        </div>
                                      </a>
                                    ) : (
                                      <a
                                        href={link1}
                                        className={styles.imgWrap}
                                      >
                                        <div className="bgWrap">
                                          <Image
                                            src={img}
                                            fill={true}
                                            quality={80}
                                            loading="lazy"
                                            objectFit="fill"
                                            alt="data science course"
                                          />
                                        </div>
                                      </a>
                                    )}

                                    <div className={styles.zIndex}>
                                      <div
                                        className={styles.headWrapper}
                                        style={
                                          title === "Master in CS:" ||
                                          title === "Advance Certification"
                                            ? { marginTop: "0px" }
                                            : { marginTop: "0px" }
                                        }
                                      >
                                        <h6
                                          className={
                                            Green
                                              ? styles.mainHeadGreen
                                              : styles.mainHead
                                          }
                                        >
                                          {title}
                                        </h6>
                                        <h6
                                          className={
                                            Green
                                              ? styles.mainHeadGreen
                                              : styles.mainHead
                                          }
                                        >
                                          {title1}
                                        </h6>
                                      </div>
                                      <div className={styles.orangeBg}>
                                        <p>{tagHead}</p>
                                      </div>
                                      <div
                                        className={styles.contButton}
                                        style={{
                                          borderRadius: "8px 8px 8px 8px",
                                          cursor: "pointer",

                                          // marginTop: "-12px",
                                          zIndex: "0",
                                          boxShadow:
                                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                        }}
                                      >
                                        <div className={styles.contentBox}>
                                          {/* <hr className={styles.hr} /> */}
                                          <div className={styles.paraDiv}>
                                            <p className={styles.singleP}>
                                              <BiTimeFive
                                                className={styles.checkCircle}
                                              />
                                              {/* <IoTimeOutline
                                          className={styles.timeIcon}
                                        />{" "} */}
                                              {para[0]} {courseTime}
                                            </p>
                                            {/* <p>
                                      <AiOutlineFundProjectionScreen
                                        className={styles.checkCircle}
                                        style={{ color: "#edb552" }}
                                      />
                                      {para[1]}
                                    </p> */}
                                            <p className={styles.singleP}>
                                              {/* <TbCurrencyRupee
                                          className={styles.checkCircle}
                                        /> */}
                                              <BsCheckLg
                                                className={styles.checkIcon}
                                              />
                                              {para[1]}
                                            </p>
                                            {para.length >= 3 ? (
                                              <p className={styles.singleP}>
                                                {/* <TbCurrencyRupee
                                          className={styles.checkCircle}
                                        /> */}
                                                <BsCheckLg
                                                  className={styles.checkIcon}
                                                />
                                                {para[2]}
                                              </p>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                          <hr className={styles.hr1} />
                                        </div>
                                        <div className={styles.btnWrapper}>
                                          <a
                                            onClick={() => {
                                              setTitleCourse(titleCourse);
                                              setBrochureLinks(brochureLinks);
                                              popupShow();
                                            }}
                                          >
                                            <button
                                              className="outLineBtn1"
                                              style={{
                                                color: "#fff",
                                                background: "#fff",
                                                cursor: "pointer",
                                                borderRadius: "7.101px",
                                                background: "#282828",
                                              }}
                                            >
                                              Syllabus
                                              <FaDownload
                                                className="bIcon"
                                                style={{ color: "#fff" }}
                                              />
                                            </button>
                                          </a>
                                          <hr className={styles.btnLine} />
                                          {organicADS ? (
                                            <a
                                              onClick={() => {
                                                setTitleCourse(titleCourse);
                                                setBrochureLinks(brochureLinks);
                                                popupShow();
                                              }}
                                            >
                                              <button
                                                className={
                                                  Green
                                                    ? styles.fillBtn
                                                    : styles.fillBtn
                                                }
                                                style={{
                                                  borderRadius:
                                                    "8px 8px 8px 8px",
                                                  cursor: "pointer",
                                                  border: "1px solid #282828",
                                                }}
                                              >
                                                View Details
                                                {/* <MdChecklist
                                                className={styles.bellIcon}
                                              /> */}
                                              </button>
                                            </a>
                                          ) : (
                                            <a
                                              href={link1}
                                              className={styles.link1}
                                            >
                                              <button
                                                className={
                                                  Green
                                                    ? styles.fillBtn
                                                    : styles.fillBtn
                                                }
                                                style={{
                                                  borderRadius:
                                                    "8px 8px 8px 8px",
                                                  cursor: "pointer",
                                                  border: "1px solid #282828",
                                                }}
                                              >
                                                View Details
                                                {/* <MdChecklist
                                                className={styles.bellIcon}
                                              /> */}
                                              </button>
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              );
                            }
                          )}
                        </Swiper>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Course);
