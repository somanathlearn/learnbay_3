import React from "react";
import styles from "./genAi.module.css"; // Ensure the path is correct
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const GenAIProject = ({ genAiData, Duration, GENAIMAN, noClud }) => {
  // Function to highlight specific words in red
  const highlightRed = (text) => {
    // Regular expressions to match "Objective", "Outcome", "Skills Covered" (case insensitive)
    const regex = /(Objective|Outcome|Skills Covered)/gi;

    // Replace matching words with a span that applies the red color
    const highlightedText = text.replace(regex, (match) => {
      return `<span class="${styles.redText}">${match}</span>`;
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <div className={styles.main}>
      <div className={styles.Header}>
        {GENAIMAN ? (
          <h2>Industry Projects </h2>
        ) : (
   <>
   
   <h2>Industry Projects (Electives)</h2>
  </>
        )}
        <p>Work on live capstone projects</p>
      {noClud ? (null):(  <span className={styles.spanHighlet}>(Pick Any - two)</span>)}
      </div>

      <div className={styles.swiperDiv}>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3.2}
          pagination={{ clickable: true }}
          className={styles.swiperSection}
          breakpoints={{
            0: {
              slidesPerView: 1.2, // Show 1 card on small screens
            },
            768: {
              slidesPerView: 2.4, // Show 2 cards on medium screens
            },
            1024: {
              slidesPerView: 3.2, // Show 3.2 cards on larger screens
            },
          }}
        >
          {genAiData.map((project) => (
            <SwiperSlide key={project.id}>
              
              <div className={`${styles.Card} ${GENAIMAN ? styles.CardManger : ''}`}>

                <div className={styles.iconDIv}>
                  <Image
                    src={project.iconUrl}
                    width={40}
                    height={40}
                    alt="icons"
                    loading="lazy"
                  />
                  <div className={styles.greenBox}>
                    <p>{project.rank}</p>
                  </div>
                </div>
               <div className={styles.headerdiv}>
               <h6>{project.title}</h6>
                {Duration ? (
                    <div className={styles.duration}>{project.duration}</div>
                  ) : null}
               </div>
                <div className={styles.lightBox}>
                  {GENAIMAN ? (
                    <ul className={styles.arrayList}>
                      {project.listItems.map((item, index) => (
                        <li key={index}>{highlightRed(item)}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{highlightRed(project.description)}</p>
                  )}
                 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GenAIProject;
