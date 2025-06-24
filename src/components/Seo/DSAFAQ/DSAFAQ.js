import React, { useState, forwardRef } from "react";
import styles from "./DSAFAQ.module.css";

const DSAFAQ = forwardRef(({ seoFAQContent }, ref) => {
  const [activeTitle, setActiveTitle] = useState(seoFAQContent[0]?.title); 
  const [expandedIndex, setExpandedIndex] = useState(null); 

  const handleTitleClick = (title) => {
    setActiveTitle(title); 
    setExpandedIndex(null); 
  };

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); 
  };

  return (
    <div ref={ref} className={styles.faqContainer}>
      <div className={styles.faqHeader}>
        <h2>Frequently Asked Questions</h2>
        <span>
          Curriculum is specifically engineered to meet the expectations of
          leading tech companies.
        </span>
      </div>

      <div className={styles.faqTitles}>
        {seoFAQContent.map((section) => (
          <span
            key={section.title}
            onClick={() => handleTitleClick(section.title)}
            className={`${styles.faqTitleSpan} ${
              activeTitle === section.title ? styles.activeTitle : ""
            }`}
          >
            {section.title}
          </span>
        ))}
      </div>

      <div className={styles.faqContent}>
        {seoFAQContent.map(
          (section) =>
            section.title === activeTitle && (
              <div key={section.title} className={styles.faqSection}>
                {/* <h3 className={styles.sectionTitle}>{section.contentTitle}</h3> */}
                <div className={styles.faqList}>
                  {section.data.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                      <div className={styles.questionWrapper}>
                        <p className={styles.question}>{faq.question}</p>
                        <button
                          className={styles.toggleButton}
                          onClick={() => handleToggle(index)}
                        >
                          {expandedIndex === index ? "−" : "+"}
                        </button>
                      </div>
                      {expandedIndex === index && (
                        <p className={styles.answer}>{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
});

export default DSAFAQ;
