import React, { useState } from "react";
import Styles from "./TrainerSection.module.css";
import Image from "next/image";
import VideoPopup from "../VideoPopup/VideoPopup";

function TrainerSection({ idss, adsHide, DSA }) {
  // const [vId, setVId] = useState("");

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
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/alu1.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/alu2.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/alu3.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/alu4.webp",
  ];

  return (
    <>
      <section className={Styles.container}>
        <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
        <div className={Styles.First}>
          <div className={Styles.mobileH4}>
        <h4>Courses<span className={Styles.spanPara}> Top Rated</span> in:</h4>
        <p className={Styles.newPara}>Discover what our learners say about us</p>
          <div className={Styles.reviewMain}>
            {images.map((image, index) => (
              <div key={index} className={Styles.leftimg}>
                <Image
                  src={image}
                  width={280}
                  height={90}
                  quality={40}
                  loading="lazy"
                  alt="trainer data"
                />
              </div>
            ))}
          </div>
          </div>
          <div className={Styles.mobileView}>
          <div className="imgWrapper">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/review-combined.webp"
                  loading="lazy"
                  width="350"
                  height="100"
                  alt="trainer mobile"
                />
              </div>
            <h2>Hear it from Alumni</h2>
          {DSA ? (""):(<>  {adsHide ? (
              <div className="imgWrapper">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/alumini-mbl.webp"
                  loading="lazy"
                  width="350"
                  height="100"
                  alt="trainer mobile"
                />
              </div>
            ) : (
              <div className="imgWrapper">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/alumini-mbls.webp"
                  loading="lazy"
                  width="350"
                  height="100"
                  alt="trainer mobile"
                  onClick={() => videoSHow(popupShow)}
                  className={Styles.spaceImg}
                />
              </div>
            )}</>)}
          </div>

        {DSA ? ( <div className="imgWrapper">
               <div className={Styles.imgDiv}>
               <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/demo-tests.webp"
                  loading="lazy"
                  quality={100}
                  width={200}
                  height={100}
                  onClick={() => videoSHow(popupShow)}
                  alt="profile-Img"
                />
               </div>
              </div>):(  <div className={Styles.proImgWrap}>
            <h2>Alumni Spotlight</h2>
            {adsHide ? (
              <div className="imgWrapper">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/alumini.webp"
                  loading="lazy"
                  quality={100}
                  width="358"
                  height="100"
                  alt="profile-Img"
                />
              </div>
            ) : (
              <div className="imgWrapper">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/testimonial-home.webp"
                  loading="lazy"
                  quality={100}
                  width="358"
                  height="100"
                  alt="profile-Img"
                  onClick={() => videoSHow(popupShow)}
                />
              </div>
            )}
          </div>)}
        </div>
      </section>
    </>
  );
}

export default TrainerSection;
