import React, { useState } from "react";
import styles from "./DSASEOContent.module.css";
import Form from "@/components/Global/Form/Form";

const DSASEOContent = ({ seoContent, onFAQClick }) => {
  const [activeTab, setActiveTab] = useState(seoContent[0]?.title);

  const handleTabClick = (title) => {
    if (title !== "FAQs") {
      setActiveTab(title); 
    }

    if (onFAQClick && title === "FAQs") {
      onFAQClick(title);
    }
  };

  const activeContent = seoContent.find((item) => item.title === activeTab);

  return (
    <div className={styles.seoContentWrapper}>
      <div className={styles.tabs}>
        {seoContent.map((item) => (
          <span
            key={item.title}
            onClick={() => handleTabClick(item.title)}
            className={`${styles.tabSpan} ${
              activeTab === item.title ? styles.activeTab : ""
            }`}
          >
            {item.title}
          </span>
        ))}
      </div>

      <div className={styles.tabContentWrapper}>
        <div className={styles.tabContent}>
          {activeContent?.contentTitle && <h3>{activeContent.contentTitle}</h3>}
          {activeContent?.data &&
            Object.entries(activeContent.data).map(([key, value]) => (
              <p key={key} className={styles.paragraph}>
                {value}
              </p>
            ))}
        </div>

        <div className={styles.dsaFormWrapper}>
          <span>Free Counselling with Experts</span>
          <Form dataScience={true} interstedInHide={true} />
        </div>
      </div>
    </div>
  );
};

export default DSASEOContent;
