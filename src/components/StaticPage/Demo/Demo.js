import styles from "./Demo.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { demoDetails } from "./video";

function demo({ demos }) {
  const [CourseLoop, setCourseLoop] = useState([
    { title: "Data Science", value: true },
    { title: "Software Development", value: false },
    // { title: "Machine Learning", value: false },
    // { title: "Deep Learning", value: false },
    // { title: "Projects", value: false },
  ]);

  const menuChange = (title, index) => {
    if (title === CourseLoop[index].title) {
      setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
      for (let i = 0; i < CourseLoop.length; i++) {
        if (index === i) {
          setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
        } else {
          setCourseLoop([...CourseLoop], (CourseLoop[i].value = false));
        }
      }
    }
  };

  return (
    <section className={styles.Demos}>
<h1 className={styles.h1}>Demo Videos</h1>
      <div className={styles.Demo}>

        <div className={styles.listPanel}>
          {demoDetails.map((DemoData, index) => {
            return (
              <span
                key={DemoData.id}
                onClick={() => {
                  menuChange(DemoData.title, index);
                }}
                style={
                  CourseLoop[index].value
                    ? {
                        background: "#f3fcfe",
                        borderBottom: "3px solid #0072bc",
                      }
                    : { background: "white" }
                }
                className={demos ? styles.span : styles.span}
              >
                {DemoData.title}
              </span>
            );
          })}
        </div>
        <div>
          {demoDetails.map((data, index) => {
            return CourseLoop[index].value ? (
              <div key={index}>
                <div className={styles.gridPanel}>
                  {data.courses.map((viewAllData) => {
                    const { id, img, value } = viewAllData;
                    return (
                      <div className={styles.leftSide} key={id}>
                        <div className={styles.leftSideP}>
                          <a href={value} target="_blank">
                            <div className="imgWrapper">
                              <Image
                                src={img}
                                width="432"
                                height="282"
                                cursor="pointer"
                                alt="data science course"
                              />
                            </div>
                          </a>
                        </div>

                        <div className={styles.contentI}>
                          <p>Earn Your Online Professional Certification from</p>
                      </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default demo;
