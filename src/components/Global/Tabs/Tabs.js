import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TabData } from "./TabData";
import styles from "./Tabs.module.css";

const Tabs = ({ handleIcon }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleMenuChange = (index) => {
    // Check if the same tab is clicked again
    if (selectedIndex === index) {
      // Close the tab by setting selectedIndex to null
      setSelectedIndex(null);
    } else {
      // Open the selected tab
      setSelectedIndex(index);
    }
  };

  const handleLeavePanel = () => {
    setSelectedIndex(null);
  };

  const renderCourses = () => {
    const selectedData = TabData[selectedIndex];
    if (!selectedData) return null;

    return (
      <div className={styles.RowWrap}>
        {selectedData.courseName.map((course, index) => (
          <div className={styles.Row} key={index}>
            <a href={course.url}>
              <div className={styles.Program} onClick={() => handleIcon(false)}>
                <div className={styles.ProLeft}>
                  <h5>{course.CName}</h5>
                  <span>{course.hours}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="wrapper">
      <div className={styles.MenuTabs}>
        <div className={styles.leftPanel}>
          {TabData.map((data, index) => (
            <div key={data.id}>
              <span
                onMouseOver={() => handleMenuChange(index)}
                onClick={() => handleMenuChange(index)}
                className={
                  selectedIndex === index ? styles.spanActive : styles.span
                }
              >
                {data.title}
                {data.id === "GenAI" && (
                  <div className={styles.tagNew}>
                    <p>NEW</p>
                  </div>
                )}
                {/* <IoIosArrowForward /> */}
              </span>
              {(selectedIndex === index || selectedIndex === null) && (
                <div className={styles.middlePanel}>{renderCourses()}</div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.middlePanel}>{renderCourses()}</div>
      </div>
    </div>
  );
};

export default Tabs;
