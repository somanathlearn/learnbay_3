"use client";

import { memo, useState, useEffect, useCallback } from "react";
import styles from "./DSAProjectSection.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import data from "./Data/DSAProjectSectionData.json";
import { debounce } from "@/Util/debounce";
import Popup from "@/components/Global/Popup/Popup";
import Form from "@/components/Global/Form/Form";
const ProjectSection = ({
  dataScience,
  interstedInHide,
  titleCourse,
  brochureLink,
  brochurePdf,
  dataScienceCounselling,
}) => {
  const [popups, setPopups] = useState(false);
  const [isMbile, setIsMobile] = useState(false);

  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 481);
    }, 300);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.projectSection}>
      <div className="width">
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          popup={true}
          // radio={radio}
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
        >
          <div className="leftPopup">
            <div
              className="whiteP"
              style={{ width: "340px", height: "400px" }}
            ></div>
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form
              titleCourse={titleCourse}
              brochureLink={brochureLink}
              brochurePdf={brochurePdf}
              dataScience={dataScience}
              interstedInHide={interstedInHide}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
              // radio={radio}
            />
          </div>
        </Popup>
        <h2 className={styles.headline}>
          Industry <span>Projects</span>
        </h2>
        <div className={styles.subheadingContainer}>
          <div className={styles.orangeBox}>95% industry relevance</div>
          <div className={styles.blueBox}>22+ tools and modules</div>
          <div className={styles.greenBox}>100% real-world experience</div>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.upperProjectDataWrapper}>
            {data.slice(0, 3).map((item) => (
              <div key={item.id} className={styles.projectCard}>
                <div className={styles.upperPart}>
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={900}
                    height={200}
                    loading="lazy"
                    quality={40}
                    className={styles.projectIcon}
                  />
                  <div className={styles.upperRight}>
                    <p className={styles.hrsBox}>{item.number}</p>
                  </div>
                </div>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardText}>{item.text}</div>
                <div className={styles.lowerBox}>
                  <Image
                    src={item.tool1}
                    alt="icon"
                    width={900}
                    height={200}
                    loading="lazy"
                    quality={50}
                    className={styles.projectIcon}
                  />
                </div>
                <div className={styles.outcome}>
                  <span>
                    <b>Outcome:</b>
                  </span>{" "}
                  {item.cta}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.bottomProjectDataWrapper}>
            {data.slice(3, 6).map((item) => (
              <div key={item.id} className={styles.projectCard}>
                <div className={styles.upperPart}>
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={900}
                    height={200}
                    loading="lazy"
                    quality={40}
                    className={styles.projectIcon}
                  />
                  <div className={styles.upperRight}>
                    <p className={styles.hrsBox}>{item.number}</p>
                  </div>
                </div>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardText}>{item.text}</div>
                <div className={styles.lowerBox}>
                  <Image
                    src={item.tool1}
                    alt="icon"
                    width={900}
                    height={200}
                    loading="lazy"
                    quality={100}
                    className={styles.projectIcon}
                  />
                </div>
                <div className={styles.outcome}>
                  <span>
                    <b>Outcome:</b>
                  </span>{" "}
                  {item.cta}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.MainDown}>
          <div className={styles.boxDiv}>
            <div className={styles.downDiv}>
              <h6>
                {!isMbile
                  ? "Gain Practical Experience with Real-World Projects"
                  : "Practical Project Experience"}
              </h6>
              <div className={styles.ryticons}>
                <div className={styles.imagesIconDiv}>
                  <div className={styles.downDivIconWrapper}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_project.webp"
                      fill
                      alt="icon"
                      loading="lazy"
                      quality={30}
                    />
                  </div>
                  <span>Practical Skills</span>
                </div>

                <div className={styles.imagesIconDiv}>
                  <div className={styles.downDivIconWrapper}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_project_two.webp"
                      fill
                      alt="icon"
                      loading="lazy"
                      quality={30}
                    />
                  </div>
                  <span>Project Life Cycle</span>
                </div>

                <div className={styles.imagesIconDiv}>
                  <div className={styles.downDivIconWrapper}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_project_three.webp"
                      fill
                      alt="icon"
                      loading="lazy"
                      quality={30}
                    />
                  </div>
                  <span>Lead a Team</span>
                </div>

                <div className={styles.imagesIconDiv}>
                  <div className={styles.downDivIconWrapper}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_Project_four.webp"
                      fill
                      alt="icon"
                      loading="lazy"
                      quality={30}
                    />
                  </div>
                  <span>Industry Knowledge</span>
                </div>
              </div>
            </div>
            <div className={styles.connectorSvg}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317 413">
                <path
                  d="M0 0 C3.89145179 3.41865858 6.58549978 6.45253252 7.9375 11.5 C7.958125 12.325 7.97875 13.15 8 14 C8.66 13.67 9.32 13.34 10 13 C12.5323572 12.90226998 15.03085592 12.86089613 17.5625 12.875 C18.26052734 12.87113281 18.95855469 12.86726563 19.67773438 12.86328125 C24.87336006 12.87336006 24.87336006 12.87336006 26 14 C26 16.64 26 19.28 26 22 C20.06 22 14.12 22 8 22 C7.67 23.98 7.34 25.96 7 28 C3.5589826 33.2817767 -0.88694628 37.43987617 -6.8125 39.6875 C-14.14715993 40.73530856 -19.70505438 40.03869271 -26 36 C-31.82243147 30.79744716 -34.60656419 25.99993075 -35.375 18.1875 C-35.17268044 12.29775271 -33.08471141 7.33310256 -29.1640625 2.9453125 C-20.38087659 -5.16483234 -10.17261706 -6.51484241 0 0 Z "
                  fill="#F87C3B"
                  transform="translate(37,332)"
                />
                <path
                  d="M0 0 C5.82243147 5.20255284 8.60656419 10.00006925 9.375 17.8125 C9.17268044 23.70224729 7.08471141 28.66689744 3.1640625 33.0546875 C-2.28881259 38.08971775 -7.24493778 40.56625214 -14.859375 40.3046875 C-22.13924336 39.26850186 -27.11412491 35.66729004 -31.625 30.0078125 C-34.99119102 25.09240857 -35.83418002 19.86064936 -35 14 C-33.03880301 6.80066929 -29.10240705 2.17908031 -23 -2 C-15.07397193 -5.79788845 -7.22339919 -4.63436722 0 0 Z "
                  fill="#F97B3A"
                  transform="translate(214,6)"
                />
                <path
                  d="M0 0 C3.05006422 1.48549424 5.07309223 3.20655382 7 6 C8.50591836 10.42460549 8.52815857 13.76763001 6.6875 18.0625 C6.130625 18.701875 5.57375 19.34125 5 20 C4.34 20 3.68 20 3 20 C2.34 21.32 1.68 22.64 1 24 C-3.77003402 24.38160272 -7.09465992 24.4609004 -11.4375 22.25 C-14.40658907 19.64299497 -15.73360148 17.73159041 -16.3359375 13.81640625 C-16.4059667 9.77572121 -16.35885159 7.58158705 -14.1875 4.0625 C-9.6218247 -0.24227957 -6.08319638 -1.11793841 0 0 Z "
                  fill="#F4F7F7"
                  transform="translate(205,12)"
                />
                <path
                  d="M0 0 C3.76591285 3.2279253 4.48938813 4.75826939 4.9375 9.6875 C4.49731816 14.70557298 2.83808414 16.96759677 -0.5625 20.5625 C-4.52217031 22.93830219 -6.78567132 22.68707892 -11.375 22.25 C-14.87426018 21.37518495 -15.48534342 20.09368015 -17.625 17.0625 C-19.5756483 13.33149809 -19.98996155 10.47786067 -19.375 6.25 C-17.76179279 3.19642921 -16.34439098 1.01166434 -13.625 -1.125 C-8.40862133 -2.57399408 -4.72603481 -2.45053657 0 0 Z "
                  fill="#F7F4F1"
                  transform="translate(31.375,339.75)"
                />
                <path
                  d="M0 0 C2.97 0 5.94 0 9 0 C9 5.61 9 11.22 9 17 C6.03 17 3.06 17 0 17 C0 11.39 0 5.78 0 0 Z "
                  fill="#F67B38"
                  transform="translate(197,114)"
                />
                <path
                  d="M0 0 C2.97 0 5.94 0 9 0 C9 5.61 9 11.22 9 17 C6.03 17 3.06 17 0 17 C0 11.39 0 5.78 0 0 Z "
                  fill="#F67C3E"
                  transform="translate(197,81)"
                />
                <path
                  d="M0 0 C2.97 0 5.94 0 9 0 C9.02684679 2.64590014 9.04676357 5.29153096 9.0625 7.9375 C9.07087891 8.69224609 9.07925781 9.44699219 9.08789062 10.22460938 C9.09652441 12.14994313 9.05224333 14.07535581 9 16 C8.67 16.33 8.34 16.66 8 17 C5.36 17 2.72 17 0 17 C0 11.39 0 5.78 0 0 Z "
                  fill="#F67A3D"
                  transform="translate(197,178)"
                />
                <path
                  d="M0 0 C2.64 0 5.28 0 8 0 C9 1 9 1 9.09765625 4.59765625 C9.0909822 6.08596867 9.07902183 7.57426432 9.0625 9.0625 C9.05798828 9.82111328 9.05347656 10.57972656 9.04882812 11.36132812 C9.0370068 13.24091871 9.01907078 15.12046899 9 17 C6.03 17 3.06 17 0 17 C0 11.39 0 5.78 0 0 Z "
                  fill="#F77B38"
                  transform="translate(197,146)"
                />
                <path
                  d="M0 0 C3.36591866 1.44253657 5.51047079 3.33264727 8 6 C0.23362253 14.16924431 0.23362253 14.16924431 -4 16 C-6.1875 15.9375 -6.1875 15.9375 -8 15 C-9.72101535 12.41847698 -10 11.15081975 -10 8 C-8.3203125 6.46484375 -8.3203125 6.46484375 -6.125 4.9375 C-3.88986913 3.36329493 -1.93742034 1.93742034 0 0 Z "
                  fill="#F97A39"
                  transform="translate(178,328)"
                />
                <path
                  d="M0 0 C0.33 2.97 0.66 5.94 1 9 C-10.52164009 11.29612756 -10.52164009 11.29612756 -16 11 C-16 8.03 -16 5.06 -16 2 C-14.08404518 1.66259915 -12.16720278 1.33023588 -10.25 1 C-9.18265625 0.814375 -8.1153125 0.62875 -7.015625 0.4375 C-4 0 -4 0 0 0 Z "
                  fill="#F87B38"
                  transform="translate(155,341)"
                />
                <path
                  d="M0 0 C2.97 0.33 5.94 0.66 9 1 C8.41029674 6.54321063 7.29366159 11.88590286 5 17 C4.34 17.33 3.68 17.66 3 18 C0.64018187 17.06421005 -1.69631264 16.06652192 -4 15 C-3.79503906 14.25234375 -3.59007812 13.5046875 -3.37890625 12.734375 C-3.10949219 11.74953125 -2.84007812 10.7646875 -2.5625 9.75 C-2.29566406 8.77546875 -2.02882812 7.8009375 -1.75390625 6.796875 C-1.14493079 4.53767069 -0.56749476 2.26997905 0 0 Z "
                  fill="#F87B3B"
                  transform="translate(190,302)"
                />
                <path
                  d="M0 0 C5.28 0 10.56 0 16 0 C16.33 2.97 16.66 5.94 17 9 C11.39 9 5.78 9 0 9 C0 6.03 0 3.06 0 0 Z "
                  fill="#F87A3C"
                  transform="translate(108,344)"
                />
                <path
                  d="M0 0 C2.69082872 0.17635452 5.32851446 0.61835921 8 1 C8.02725341 2.7290774 8.04650987 4.45828176 8.0625 6.1875 C8.07410156 7.15042969 8.08570313 8.11335938 8.09765625 9.10546875 C8.00486622 11.85576513 7.62111685 14.32479591 7 17 C4.03 17 1.06 17 -2 17 C-1.85978195 14.35375716 -1.71310224 11.70815422 -1.5625 9.0625 C-1.52318359 8.30775391 -1.48386719 7.55300781 -1.44335938 6.77539062 C-1.11328125 1.11328125 -1.11328125 1.11328125 0 0 Z "
                  fill="#F67A3A"
                  transform="translate(195,271)"
                />
                <path
                  d="M0 0 C2.97 0.33 5.94 0.66 9 1 C9.02701408 3.10409639 9.04640223 5.20829178 9.0625 7.3125 C9.07410156 8.48425781 9.08570313 9.65601563 9.09765625 10.86328125 C9 14 9 14 8 17 C5.36 17 2.72 17 0 17 C0 11.39 0 5.78 0 0 Z "
                  fill="#F67A39"
                  transform="translate(196,240)"
                />
                <path
                  d="M0 0 C2.64 0 5.28 0 8 0 C8 5.61 8 11.22 8 17 C5.03 17 2.06 17 -1 17 C-0.67 11.39 -0.34 5.78 0 0 Z "
                  fill="#F87C39"
                  transform="translate(197,209)"
                />
                <path
                  d="M0 0 C0.97582031 0.00902344 1.95164062 0.01804687 2.95703125 0.02734375 C3.69308594 0.03894531 4.42914063 0.05054688 5.1875 0.0625 C5.1875 3.0325 5.1875 6.0025 5.1875 9.0625 C-2.7325 9.5575 -2.7325 9.5575 -10.8125 10.0625 C-10.8125 7.0925 -10.8125 4.1225 -10.8125 1.0625 C-7.13862505 0.20951624 -3.7677607 -0.04539471 0 0 Z "
                  fill="#FA7A39"
                  transform="translate(87.8125,343.9375)"
                />
                <path
                  d="M0 0 C2.64 0 5.28 0 8 0 C8.33 5.61 8.66 11.22 9 17 C6.03 17 3.06 17 0 17 C0 11.39 0 5.78 0 0 Z "
                  fill="#FA7A37"
                  transform="translate(197,48)"
                />
                <path
                  d="M0 0 C1.24652344 -0.01417969 2.49304688 -0.02835938 3.77734375 -0.04296875 C7.0625 0.1875 7.0625 0.1875 10.0625 2.1875 C9.7325 3.1775 9.4025 4.1675 9.0625 5.1875 C8.588125 4.6925 8.11375 4.1975 7.625 3.6875 C3.84572943 1.47524405 0.33691197 1.34176073 -3.9375 2.1875 C-6.96159364 4.45877334 -6.96159364 4.45877334 -8.9375 7.1875 C-9.2675 7.5175 -9.5975 7.8475 -9.9375 8.1875 C-10.03644455 9.6221959 -10.06720735 11.06190397 -10.0625 12.5 C-10.06507813 13.27988281 -10.06765625 14.05976563 -10.0703125 14.86328125 C-9.94249912 17.10001539 -9.55663869 19.04016979 -8.9375 21.1875 C-9.5975 21.1875 -10.2575 21.1875 -10.9375 21.1875 C-12.29577701 18.47094597 -12.0698445 16.27960594 -12.0625 13.25 C-12.06507813 12.18910156 -12.06765625 11.12820312 -12.0703125 10.03515625 C-11.9375 7.1875 -11.9375 7.1875 -10.9375 4.1875 C-10.2775 4.1875 -9.6175 4.1875 -8.9375 4.1875 C-8.9375 3.1975 -8.9375 2.2075 -8.9375 1.1875 C-5.98162889 -0.29043555 -3.28752355 0.01696349 0 0 Z "
                  fill="#ED8250"
                  transform="translate(199.9375,10.8125)"
                />
                <path
                  d="M0 0 C1.17755859 -0.00773438 1.17755859 -0.00773438 2.37890625 -0.015625 C4.4375 0.25 4.4375 0.25 6.4375 2.25 C5.76203125 2.18039062 5.0865625 2.11078125 4.390625 2.0390625 C1.63147837 1.87159984 -0.82972116 1.81172415 -3.5625 2.25 C-6.12930314 5.09730711 -6.12930314 5.09730711 -7.5625 8.25 C-8.2225 8.25 -8.8825 8.25 -9.5625 8.25 C-9.6609702 12.38574827 -9.33653558 16.18631321 -8.5625 20.25 C-11.28951737 17.63660835 -11.84780943 15.46507358 -12 11.8125 C-11.85723261 7.47237124 -10.78265699 5.28614801 -7.5625 2.25 C-4.42838698 0.16059132 -3.58799528 -0.02364412 0 0 Z "
                  fill="#FDE4CD"
                  transform="translate(200.5625,11.75)"
                />
                <path
                  d="M0 0 C0.99 0 1.98 0 3 0 C3 5.28 3 10.56 3 16 C2.01 16 1.02 16 0 16 C0 10.72 0 5.44 0 0 Z "
                  fill="#FA7D30"
                  transform="translate(202,81)"
                />
                <path
                  d="M0 0 C0.66 0 1.32 0 2 0 C2 4.95 2 9.9 2 15 C1.67 14.34 1.34 13.68 1 13 C0.34 13 -0.32 13 -1 13 C-1.02686553 11.02090602 -1.04633375 9.04171029 -1.0625 7.0625 C-1.07410156 5.96035156 -1.08570313 4.85820312 -1.09765625 3.72265625 C-1 1 -1 1 0 0 Z "
                  fill="#F87C30"
                  transform="translate(203,179)"
                />
                <path
                  d="M0 0 C1.9375 0.9375 1.9375 0.9375 4 3 C4.86713385 6.01214915 5.16943165 8.87116218 5 12 C3.5625 14.5625 3.5625 14.5625 2 16 C2 13.03 2 10.06 2 7 C1.34 7 0.68 7 0 7 C0 4.69 0 2.38 0 0 Z "
                  fill="#FDDDCC"
                  transform="translate(208,15)"
                />
                <path
                  d="M0 0 C2.2578125 1.515625 2.2578125 1.515625 4 3 C3.27554687 2.98839844 2.55109375 2.97679687 1.8046875 2.96484375 C-3.24783323 2.91768689 -8.03378767 2.92622436 -13 4 C-9.14453243 -0.0307161 -5.5714926 -0.88302902 0 0 Z "
                  fill="#FCE3CC"
                  transform="translate(28,338)"
                />
                <path
                  d="M0 0 C1.3303125 0.5259375 1.3303125 0.5259375 2.6875 1.0625 C7.15708314 2.32747636 9.69909548 1.43363484 14 0 C14.66 0.66 15.32 1.32 16 2 C13.6058839 4.3941161 12.96213689 4.29598923 9.6875 4.3125 C5.69834132 4.23529048 3.18031283 3.56476841 0 1 C0 0.67 0 0.34 0 0 Z "
                  fill="#FCE0C8"
                  transform="translate(192,32)"
                />
                <path
                  d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.01 2.485 2.01 2.485 1 4 C0.72122601 6.14943335 0.72122601 6.14943335 0.8125 8.4375 C0.82216797 9.58025391 0.82216797 9.58025391 0.83203125 10.74609375 C0.99548229 12.93937857 1.39883487 14.88870807 2 17 C1.34 17 0.68 17 0 17 C-1.35827701 14.28344597 -1.1323445 12.09210594 -1.125 9.0625 C-1.12757813 8.00160156 -1.13015625 6.94070312 -1.1328125 5.84765625 C-1 3 -1 3 0 0 Z "
                  fill="#E98C5B"
                  transform="translate(189,15)"
                />
                <path
                  d="M0 0 C0.99 0 1.98 0 3 0 C2.67 3.3 2.34 6.6 2 10 C0.0044484 6.00889681 -0.19546065 4.30013434 0 0 Z "
                  fill="#F07F3C"
                  transform="translate(179,22)"
                />
                <path
                  d="M0 0 C0.99 0 1.98 0 3 0 C3 1.98 3 3.96 3 6 C1.68 6 0.36 6 -1 6 C-1 5.34 -1 4.68 -1 4 C-0.34 4 0.32 4 1 4 C0.67 2.68 0.34 1.36 0 0 Z "
                  fill="#FD7644"
                  transform="translate(217,16)"
                />
                <path
                  d="M0 0 C1.485 0.99 1.485 0.99 3 2 C2.67 3.65 2.34 5.3 2 7 C1.34 7 0.68 7 0 7 C0 4.69 0 2.38 0 0 Z "
                  fill="#FCF3D8"
                  transform="translate(208,15)"
                />
              </svg>
            </div>
          </div>
          <p className={styles.pBot}>
            <span className={styles.spanOrange}>Important Note:</span> The final
            number of quizzes, assignments, and discussions will be confirmed
            closer to the program start. To know more{" "}
            <span className={styles.blueSpan} onClick={popupShow}>
              check eligibility
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectSection);
