
import styles from "./reviewSlider.module.css";
import Image from "next/image";
import VideoPopup from "../../../Global/VideoPopup/VideoPopup";

import Reels from "./Reels"
import { useState } from "react";

const ReviewSlider = ({
  idss
}) => {
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
    <div className={`${styles.keyContainer} width`}>
              <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
      <Reels /> 
      <div className={styles.mainDiv}>
        {/* Bottom Review Section */}
        <div className={styles.reviewBotSection}>
          <div className={styles.firstBotReview}>
            <h3 className={styles.mainHeading}>Courses Top Rated in:</h3>
            <p>Discover what our learners say about us</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Social_review.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="800"
              height="408"
              className={styles.socailR}

            />
          </div>
          {/* <div className={styles.secondBotReview}>

            <VideoYt className={styles.YT} />
          </div> */}

          <div className={styles.secondBotReview}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/review_right_side.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="974"
              height="668"
              onClick={() => videoSHow(popupShow)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
