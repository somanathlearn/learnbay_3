import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineRise } from "react-icons/ai";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../../Global/VideoPopup/VideoPopup";
import styles from "./Testimonial.module.css";
const ReviewPopup = dynamic(() =>
  import("../../../components/Global/ReviewPopup/ReviewPopup")
);
function Testimonial({ redirectDS, para, heading, Testimonial }) {
  const [mobile, setMobile] = useState(false);
  const [vId, setVId] = useState("");
  const [img, setImg] = useState({
    cLogo: "",
    pLogo: "",
  });
  const [profile, setProfile] = useState({
    name: "",
    hike: "",
    position: "",
  });
  const videoShow = (id) => {
    setVideo(true);
    setVId(id);
  };
  const [video, setVideo] = useState(false);
  const [desc, setDesc] = useState("");
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  }, []);

  return (
    <div className={styles.testimonial} id="alumni">
      <VideoPopup triggers={video} setTriggers={setVideo} ids={vId} />
      <ReviewPopup
        trigger={popups}
        setTrigger={setPopups}
        title={profile}
        desc={desc}
        imgSrc={img}
      />
      <h4 className={styles.h1}>{heading}</h4>
      {para === undefined ? "" : <p className={styles.ptop}>{para}</p>}
      {/* <div className={styles.line}>
        <img
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/alumni-arrow.png"
alt="Image containing arrow"
          width="80px"
        />
      </div> */}
      <section>
        <div className={styles.Section1}>
          <div className={styles.Testimonial}>
            <div className={styles.swiperleft}>
              <Swiper
                loop={true}
                breakpoints={{
                  1281: { slidesPerView: 4.1, spaceBetween: 50 },
                  1024: { slidesPerView: 3, spaceBetween: 55 },
                  961: { slidesPerView: 3, spaceBetween: 20 },
                  801: { slidesPerView: 2.5, spaceBetween: 20 },
                  641: { slidesPerView: 2, spaceBetween: 20 },
                  481: { slidesPerView: 1.8, spaceBetween: 20 },
                  100: { slidesPerView: 1.2, spaceBetween: 20 },
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                // scrollbar={{ draggable: true }}
                grabCursor={true}
                style={{ width: "100%" }}
                modules={[Pagination, Navigation, Scrollbar]}
                className="mySwiper"
              >
                {Testimonial.map((data, index) => {
                  const {
                    id,
                    name,
                    working,
                    proImg,
                    sDesc,
                    lDesc,
                    complogo,
                    statLogo,
                  } = data;
                  return (
                    <SwiperSlide className={styles.slide} key={index}>
                      <div className={styles.proImgWrap}>
                        <div className="imgWrapper">
                          <Image
                            src={proImg}
                            loading="lazy"
                            width="358"
                            height="212"
                            alt="profile-Img"
                            onClick={() => videoShow(data.link)}
                          />
                        </div>
                      </div>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <div className={styles.name}>
                            <h3>{name}</h3>
                            <p>{working}</p>
                          </div>
                          <div className={styles.nameHike}>
                            <p>
                              {statLogo}
                              <AiOutlineRise />
                            </p>
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            {sDesc}
                            {redirectDS ? (
                              <span
                                onClick={() => {
                                  popupShow();
                                  setProfile({
                                    hike: statLogo,
                                    name: name,
                                    position: working,
                                  });
                                  setDesc(lDesc);
                                  setImg({
                                    id: id,
                                    cLogo: complogo,
                                    pLogo: proImg,
                                  });
                                }}
                              >
                                Learn More
                              </span>
                            ) : (
                              ""
                            )}
                          </p>
                        </div>
                        {/* {redirectDS ? (
                          <div className={styles.imgHike} id={id}>
                            <div
                              className={styles.imgWrap}
                              style={
                                id === "tcs"
                                  ? { width: "20%" }
                                  : { width: "auto" }
                              }
                            >
                              <div className="imgWrapper">
                                <Image
                                  src={complogo}
                                  loading="lazy"
                                  width={90}
                                  height={25}
                                  alt="company-logo"
                                />
                              </div>
                            </div>
                            <div>
                              <div>
                                <Image
                                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Arrow+6.png"
                                  loading="lazy"
                                  width="30"
                                  height="15"
                                  alt="company-logo"
                                />
                              </div>
                            </div>
                            <div
                              className={styles.imgWrap}
                              style={
                                id === "tcs"
                                  ? { width: "20%" }
                                  : { width: "auto" }
                              }
                            >
                              <div className="imgWrapper">
                                <Image
                                  src={complogo}
                                  loading="lazy"
                                  width={90}
                                  height={25}
                                  alt="company-logo"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )} */}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Testimonial;
