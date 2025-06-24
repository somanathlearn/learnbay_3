import Image from "next/image";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import VideoPopup from "../../../Global/VideoPopup/VideoPopup";
import { switchData } from "../../../Home/KeyFeatures/switchData";
import Styles from "./TrainerSection.module.css";
function TrainerSection({ idss }) {
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
  return (
    <>
      <section className={Styles.container}>
        <div className={Styles.First}>
          <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
          <div className={Styles.hear}>
            <div>
              <h1>Hear it from our Alumni</h1>
              <p></p>
            </div>
            <div className={Styles.switch}>
              <div className={Styles.switchInnerBlue}>
                <div>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/topRated.png"
                    width={50}
                    height={60}
                    alt="topRated"
                    className={Styles.toprate}
                  />
                </div>
                <div className="imgWrapper">
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/linkedin.png"
                    width={120}
                    height={60}
                    alt="LinkedIn"
                  />
                </div>
              </div>
              {switchData.map((data) => {
                const {
                  img,
                  height,
                  url,
                  width,
                  text,
                  alt,
                  id,
                  bgBlue,
                  bgGreen,
                  bgRed,
                } = data;
                return (
                  <a href={url} target="_blank" key={id}>
                    <div
                      className={
                        bgBlue
                          ? Styles.switchInnerBlue
                          : bgGreen
                          ? Styles.switchInnerGreen
                          : bgRed
                          ? Styles.switchInnerRed
                          : Styles.switchInner
                      }
                    >
                      <div className={Styles.rating}>
                        {text} <AiFillStar className={Styles.star} />
                      </div>
                      <div className="imgWrapper">
                        <Image src={img} width={120} height={60} alt={alt} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className={Styles.proImgWrap}>
            <h2>Alumni Spotlight</h2>
            <div className="imgWrapper">
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-review.webp"
                loading="lazy"
                width="358"
                height="212"
                alt="profile-Img"
                onClick={() => videoSHow()}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default TrainerSection;
