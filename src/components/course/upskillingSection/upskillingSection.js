import React from "react";
import styles from "./upskillingSection.module.css";
import Image from "next/image";

const UpskillingSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.upskillHeading}>
        Journey towards<span className={styles.spanHead}>&nbsp;Upskilling</span>
      </h2>
      <div className={styles.UpperBoxContainer}>
        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 1</h5>
            <p>6 Weeks</p>
          </div>
          <div className={styles.svgLine}>
            <svg
              height="13"
              width="200"
              fill="none"
              viewBox="0 0 305 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                height="16"
                width="305"
                fill="#FE7A36"
                fillOpacity="0.25"
                rx="8"
              />
              <path
                d="M14.582 8L289.204 9.00444"
                stroke="white"
                strokeDasharray="8 8"
                strokeLinecap="round"
                strokeLinejoin="bevel"
                strokeWidth="3"
              />
            </svg>
          </div>
          <h4 className={styles.boxTitle}>
            Foundation for Data Science <br /> and Leadership
          </h4>
          <p className={styles.boxText}>
            <span className={styles.textHead}>Use cases in:</span> BFSI,
            Manufacturing, Retail,
            <br /> HR, Marketing, Sales, Healthcare
          </p>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/excel_tool.webp"
              alt="icon"
              width={122}
              height={69}
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 2</h5>
            <p>6 Weeks</p>
          </div>
          <div className={styles.svgLine}>
            <svg
              height="13"
              width="200"
              fill="none"
              viewBox="0 0 305 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                height="16"
                width="305"
                fill="#FE7A36"
                fillOpacity="0.25"
                rx="8"
              />
              <path
                d="M14.582 8L289.204 9.00444"
                stroke="white"
                strokeDasharray="8 8"
                strokeLinecap="round"
                strokeLinejoin="bevel"
                strokeWidth="3"
              />
            </svg>
          </div>
          <h4 className={styles.boxTitle}>
            Technical Skills for
            <br /> Data Science
          </h4>
          <p className={styles.boxText}>
            <span className={styles.textHead}>Use cases in:</span> Data Analysis
            Using Numpy
            <br /> Data Visualization Using Matplotlib
          </p>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/py_gen_tool.webp"
              alt="icon"
              width={326}
              height={56}
              className={styles.toolPyIcon}
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 3</h5>
            <p>6 Weeks</p>
          </div>

          <div className={styles.svgLinetwo}>
    
            <svg
              height="430"
              width="191"
              fill="none"
              viewBox="0 0 191 430"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                height="430"
                id="mask0_1326_961"
                style={{ maskType: "alpha" }}
                width="153"
                x="38"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <rect height="430" width="153" fill="#D9D9D9" x="38" />
              </mask>
              <g mask="url(#mask0_1326_961)">
                <rect
                  height="370.576"
                  width="229"
                  rx="63"
                  stroke="#583726"
                  strokeWidth="16"
                  x="-59"
                  y="19.6503"
                />
              </g>
              <rect
                height="16.867"
                width="103"
                fill="#583726"
                rx="8.4335"
                y="11.5961"
              />
              <path
                d="M40.3438 19.0885L113.893 19.3721C148.903 24.7965 161.085 38.3547 170.222 79.9484L169.991 321.199C167.434 366.156 153.846 379.481 116.805 390.706L38.7607 390.775"
                stroke="white"
                strokeDasharray="8 8"
                strokeLinecap="round"
                strokeLinejoin="bevel"
                strokeWidth="3"
              />
            </svg>
          </div>

          <h4 className={styles.boxTitle}>
            SQL, Tableau, Power BI,
            <br /> and Big Data
          </h4>
          <p className={styles.boxText}>
            <span className={styles.textHead}>Use cases in:</span> Introduction
            to Big Data
            <br />
            Core Technologies in Big Data
          </p>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/powerBi_tools.webp"
              alt="icon"
              width={156}
              height={47}
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className={styles.boxDown}>
        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 4</h5>
            <p>6 Weeks</p>
          </div>

          <div className={styles.svgLinefifth}>

            <svg
              height="17"
              width="254"
              fill="none"
              viewBox="0 0 284 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                height="16"
                width="283.582"
                fill="#FE7A36"
                fillOpacity="0.25"
                rx="8"
              />
              <path
                d="M13.5586 8L268.895 9.00444"
                stroke="white"
                strokeDasharray="8 8"
                strokeLinecap="round"
                strokeLinejoin="bevel"
                strokeWidth="3"
              />
            </svg>
          </div>

     
          <div className={styles.svgLinethree}>
            <svg
              height="450"
              width="491"
              fill="none"
              viewBox="0 0 611 565"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                height="14.4718"
                width="124.893"
                fill="#FE7A36"
                fillOpacity="0.25"
                x="103"
              />
              <rect
                height="15.453"
                width="370.594"
                fill="#CCE3F2"
                rx="7.7265"
                transform="matrix(-1 0 0 1 511 534.094)"
              />
              <path
                d="M103 6L206.541 6.65232"
                stroke="white"
                strokeDasharray="8 8"
                strokeLinecap="round"
                strokeLinejoin="bevel"
                strokeWidth="3"
              />
              <mask
                height="395"
                id="mask0_1668_3"
                style={{ maskType: "alpha" }}
                width="103"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <rect height="395" width="103" fill="#D9D9D9" />
              </mask>
              <mask
                height="165"
                id="mask1_1668_3"
                style={{ maskType: "alpha" }}
                width="133"
                x="15"
                y="400"
                maskUnits="userSpaceOnUse"
              >
                <rect
                  height="164.188"
                  width="131.809"
                  fill="#D9D9D9"
                  x="15.2832"
                  y="400.812"
                />
              </mask>
              <mask
                height="153"
                id="mask2_1668_3"
                style={{ maskType: "alpha" }}
                width="511"
                x="0"
                y="401"
                maskUnits="userSpaceOnUse"
              >
                <rect height="152.41" width="511" fill="#D9D9D9" y="401" />
              </mask>
              <g mask="url(#mask0_1668_3)">
                <rect
                  height="437.932"
                  width="131.051"
                  rx="54"
                  stroke="#583726"
                  strokeWidth="16"
                  transform="matrix(-1 0 0 1 162.119 -0.96582)"
                  x="-8"
                  y="8"
                />
                <path
                  d="M202.973 6.76064C202.973 6.76064 142.494 5.31194 117.539 5.31194C92.5837 5.31194 38.8349 9.17517 40.2704 53.4209C40.2612 54.3362 38.2847 366.529 38.2149 406.46C38.145 446.39 60.1584 450.734 75.1776 450.697C77.3757 450.754 194.905 449.182 197.05 449.177"
                  stroke="white"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                  strokeWidth="3"
                />
              </g>
              <g mask="url(#mask1_1668_3)">
                <rect
                  height="508.436"
                  width="270.542"
                  rx="82"
                  stroke="#CCE3F2"
                  strokeWidth="16"
                  transform="matrix(-1 0 0 1 299.195 25.1111)"
                  x="-8"
                  y="8"
                />
              </g>
              <g mask="url(#mask2_1668_3)">
                <path
                  d="M186.936 93.9606C186.936 93.9606 79.6766 94.2455 59.887 94.298C40.8324 94.3487 37.1662 108.538 36.8691 140.88C36.8606 141.801 38.2015 375.014 35.8175 451.16C33.4336 527.306 87.3951 542.317 140.883 542.317C194.371 542.317 496.046 540.251 498.025 540.245"
                  stroke="#0072BC"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                  strokeWidth="3"
                />
              </g>
            </svg>
          </div>

          <h4 className={styles.boxTitle}>AI TOOLS</h4>

          <p className={styles.boxText}>
            <span className={styles.textHead}>
              Domain expertise will be covered this term, along with the
              opportunity to select 2 capstone projects from the following
              domains: BFSI, Manufacturing, Retail, HR, etc
            </span>
          </p>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ai_tools.webp"
              alt="icon"
              width={120}
              height={51}
              className={`${styles.toolIcon} ${styles.toolIconsingle}`}
              loading="lazy"
              quality={100}
            />
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div className={`${styles.upperBox} ${styles.bonus}`}>
            <h5>Bonus</h5>
            <p>6 Weeks</p>
          </div>
          <div className={styles.svgLinetfourth}>
      

            <svg
              height="16"
              width="204"
              fill="none"
              viewBox="0 0 204 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="rounded-left">
                  <path d="M8 0 Q 0 0 0 8 Q 0 16 8 16 H 204 V 0 H 8 Z" />
                </clipPath>
              </defs>
              <rect
                height="16"
                width="204"
                fill="#FE7A36"
                fillOpacity="0.25"
                clipPath="url(#rounded-left)"
              />
              <path
                d="M10.4785 8L192.63 9.00444"
                stroke="white"
                strokeDasharray="8 8"
                strokeLinecap="round"
                strokeLinejoin="bevel"
                strokeWidth="3"
              />
            </svg>
          </div>
          <h4 className={styles.boxTitle}>Domain + 2 Capstone Projects</h4>
          <p className={styles.boxText}>
            <span className={styles.textHead}>
              This term covers AI for Leaders, delving deeply into Deep
              Learning, NLP, Deployment, and Project Management.
            </span>
          </p>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/bonus_tools.webp"
              alt="icon"
              width={180}
              height={51}
              className={`${styles.toolIcon} ${styles.toolIconsingle}`}
              loading="lazy"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpskillingSection;
