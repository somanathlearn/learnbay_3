import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import styles from "./Syllabus.module.css";
import Image from "next/image";

const NewSyllabusMap = ({ Syllabus, onlyGENAIPage }) => {
  const [mSyllabus, setMSyllabus] = useState(Syllabus);

  const handleChangeMobile = (index) => {
    const updatedSyllabus = mSyllabus.map((faq, i) => {
      if (i === index) {
        faq.Module0.open = !faq.Module0.open; // Toggle the current module's open state
        if (faq.Module0.open) {
          trackTabExpansion(faq.Module0.title);
        }
      } else {
        faq.Module0.open = false; // Close all other modules
      }
      return faq;
    });
    setMSyllabus(updatedSyllabus);
  };

  const trackTabExpansion = (moduleTitle) => {
    console.log(`Module "${moduleTitle}" has been expanded.`);
  };

  return mSyllabus.map((data, i) => {
    const { Module0 } = data; // Destructure Module0 from data

    return (
      <div className={styles.maindiv} key={`module-${i}`}>
        {/* Image */}
        <div>
          {!Module0.open ? (
            <Image
              src={Module0.imageUrl}
              alt={`Module ${i + 1} Image`}
              className={styles.moduleImage}
              width={80}
              height={80}
            />
          ) : (
            <>
              <div className={styles.trackimgStrt}>
                <Image
                  src={Module0.StartImageUrl}
                  alt={`Module ${i + 1} Image`}
                  className={styles.moduleImage}
                  width={80}
                  height={80}
                />
              </div>
            </>
          )}
        </div>

        {/* Module Content */}
        <div className={`${styles.QOuter} ${Module0.open ? styles.open : ""}`}>
          <div className={styles.QInner}>
            <div className={styles.line}></div>

            <div
              className={styles.FaqWrapper}
              onClick={() => handleChangeMobile(i)}
            >
              {onlyGENAIPage ? (
                <>
                  <div
                    className={`${styles.GenAIQues} ${
                      Module0.open ? styles.quesO : styles.ques
                    }`}
                  >
                    <div
                      className={`${styles.pointsdiv} ${styles.pointsdivGEnAI}`}
                    >
                      <h2>{Module0.title}</h2>

                      {/* <div className={styles.pointsinside}>
                    {Module0.points && (
                      <span className={styles.points}>{Module0.points}</span>
                    )}
                    {Module0.points1 && (
                      <span className={styles.points}>{Module0.points1}</span>
                    )}
                    {Module0.points2 && (
                      <span className={styles.points}>{Module0.points2}</span>
                    )}
                  </div> */}
                    </div>
                    {onlyGENAIPage ? (
                      <span className={styles.hoursSpan}>{Module0.hours}</span>
                    ) : null}
                    <span>
                      {Module0.open ? (
                        <FaChevronUp className="icon" />
                      ) : (
                        <FaChevronDown className="icon" />
                      )}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className={Module0.open ? styles.quesO : styles.ques}>
                    <div className={styles.pointsdiv}>
                      <h2>{Module0.title}</h2>

                      {/* <div className={styles.pointsinside}>
                    {Module0.points && (
                      <span className={styles.points}>{Module0.points}</span>
                    )}
                    {Module0.points1 && (
                      <span className={styles.points}>{Module0.points1}</span>
                    )}
                    {Module0.points2 && (
                      <span className={styles.points}>{Module0.points2}</span>
                    )}
                  </div> */}
                    </div>
                    {onlyGENAIPage ? (
                      <span className={styles.hoursSpan}>{Module0.hours}</span>
                    ) : null}
                    <span>
                      {Module0.open ? (
                        <FaChevronUp className="icon" />
                      ) : (
                        <FaChevronDown className="icon" />
                      )}
                    </span>
                  </div>
                </>
              )}
              {Module0.open && (
                <div className={styles.ans}>
                  <p>{Module0.desc}</p>
                  {Module0.content.map((content, j) => (
                    <div key={`content-${j}`}>

                      {content.chap.section && (<h5>{content.chap.section}</h5>)}
                      <h5>{content.chap.title}</h5>   

                     {/* {content.chap.topics.map((topics, id)=>( 
                      <h6 key={`topics-${id}`}className={styles.topicStyle}>{content.chap.topics}</h6>
                      ))} */}
                      {content.chap.desc.map((desc, k) => (
                        <div key={`desc-${k}`}>{desc && <li>{desc}</li>}</div>
                      ))}
                      {content.chap.note && (
                        <p className={styles.note}>{content.chap.note}</p>
                      )}
                    </div>
                  ))}
                  <div className={styles.trackimgend}>
                    <Image
                      src={Module0.endImageUrl}
                      alt={`Module ${i + 1} Image`}
                      className={styles.moduleImage}
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default NewSyllabusMap;
