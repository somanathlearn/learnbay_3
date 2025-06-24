import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import styles from "./Syllabus.module.css";
import Image from "next/image";

const NewSyllabusMangersGenAiMap = ({ Syllabus, onlyGENAIPage }) => {
  const [mSyllabus, setMSyllabus] = useState(Syllabus);

  // Split syllabus into two halves
  const firstHalf = mSyllabus.slice(0, Math.ceil(mSyllabus.length / 2));
  const secondHalf = mSyllabus.slice(Math.ceil(mSyllabus.length / 2));

  // Handle opening/closing of tabs with correct index adjustment
  const handleChangeMobile = (index, isSecondHalf) => {
    const adjustedIndex = isSecondHalf ? index + firstHalf.length : index; // Adjust index for second half
    
    const updatedSyllabus = mSyllabus.map((faq, i) => {
      faq.Module0.open = i === adjustedIndex ? !faq.Module0.open : false; // Toggle only the clicked tab
      return faq;
    });

    setMSyllabus([...updatedSyllabus]); // Update the state
  };

  // Render modules function with an additional parameter for identifying halves
  const renderModules = (modules, isSecondHalf) => {
    return modules.map((data, i) => {
      const { Module0 } = data;
      return (
        <div className={`${styles.maindiv} ${styles.maindivGENMANGERS}`} key={`module-${isSecondHalf ? 'second-' : ''}${i}`}>
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
              <div className={styles.trackimgStrt}>
                <Image
                  src={Module0.StartImageUrl}
                  alt={`Module ${i + 1} Image`}
                  className={styles.moduleImage}
                  width={80}
                  height={80}
                />
              </div>
            )}
          </div>

          <div className={`${styles.QOuter} ${Module0.open ? styles.open : ""}`}>
            <div className={styles.QInner}>
              <div className={styles.line}></div>

              <div className={styles.FaqWrapper} onClick={() => handleChangeMobile(i, isSecondHalf)}>
                <div className={Module0.open ? styles.quesO : styles.ques}>
                  <div className={styles.pointsdiv}>
                    <h2>{Module0.title}</h2>
                    {onlyGENAIPage && (
                      <span className={styles.hoursSpan}>{Module0.hours}</span>
                    )}
                  </div>
                  <span>
                    {Module0.open ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
                  </span>
                </div>

                {Module0.open && (
                  <div className={styles.ans}>
                    <p>{Module0.desc}</p>
                    {Module0.content.map((content, j) => (
                      <div key={`content-${j}`}>
                        <h5>{content.chap.title}</h5>
                        {content.chap.desc.map((desc, k) => (
                          <li key={`desc-${k}`}>{desc}</li>
                        ))}
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

  return (
    <div className={styles.container}>
      {/* Term heading for the first half */}
      <div className={styles.centerHeadline}>
        <div className={styles.firstDiv}>
          <h4>Term 1: Introduction to GenAI</h4>
          <div className={styles.termdiv}><p>TERM 1</p></div>
        </div>
        <div className={styles.hourDiv}><span>Duration: 40 Hours</span></div>
      </div>

      {renderModules(firstHalf, false)} {/* Render the first half */}

      {/* Term heading for the second half */}
      <div className={styles.centerHeadline}>
        <div className={styles.firstDiv}>
          <h4>Term 2: Advanced GenAI for Tech Managers</h4>
          <div className={styles.termdiv}><p>TERM 2</p></div>
        </div>
        <div className={styles.hourDiv}><span>Duration: 40 Hours</span></div>
      </div>

      {renderModules(secondHalf, true)} {/* Render the second half */}
    </div>
  );
};

export default NewSyllabusMangersGenAiMap;
