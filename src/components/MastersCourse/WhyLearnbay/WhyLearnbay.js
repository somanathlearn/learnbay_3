import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsBank, BsFillPeopleFill } from "react-icons/bs";
import {
  FaCheckCircle,
  FaClinicMedical,
  FaDownload,
  FaRocket,
  FaUserGraduate,
  FaUserShield,
} from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

import { BsTruck } from "react-icons/bs";
import VideoPopup from "../../Global/VideoPopup/VideoPopup";
import Styles from "./WhyLearnbay.module.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Button from "../../Global/Button/Button";

function WhyLearnbay({ idss, NoGuwahati  }) {
  const [domainSpec, setDomainSpec] = useState(false);
  const [projectInno, setProjectInno] = useState(true);
  const [projectCert, setProjectCert] = useState(false);

  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);

  const videoSHow = () => {
    setVideo(true);
  };
  // const el = useRef(null);
  const popupShow = () => {
    setPopups(true);
  };

  useEffect(() => {
    let width = window.innerWidth;
    if (width > 960) {
      setProjectInno(true);
    }
  }, [0]);

  return (
    <section className={Styles.container} id="ProjectLab">
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
      <h4 className={Styles.h4}>
        Learnbay’s <span style={{ color: "#FE7A36" }}>ProjectLab</span>
      </h4>
      <div className={Styles.MainDiv}>
        <div className={Styles.LeftSide}>
          <div
            onClick={() => {
              setDomainSpec(false);
              setProjectInno(true);
              setProjectCert(false);
            }}
            className={projectInno ? Styles.ActiveInnerBox : Styles.InnerBox}
          >
            <p className={projectInno ? Styles.ActiveCont : Styles.Cont}>
              <IoRocketOutline
                className={projectInno ? Styles.Activeicon : Styles.icon}
              />
              Globally Recognised Degree
            </p>
          </div>
          <div
            onClick={() => {
              setDomainSpec(false);
              setProjectInno(false);
              setProjectCert(true);
            }}
            className={projectCert ? Styles.ActiveInnerBox : Styles.InnerBox}
          >
            <p className={projectCert ? Styles.ActiveCont : Styles.Cont}>
              <FaUserShield
                className={projectCert ? Styles.Activeicon : Styles.icon}
              />
              Project Innovation Lab
            </p>
          </div>
          <div
            onClick={() => {
              setDomainSpec(true);
              setProjectInno(false);
              setProjectCert(false);
            }}
            className={domainSpec ? Styles.ActiveInnerBox : Styles.InnerBox}
          >
            <p className={domainSpec ? Styles.ActiveCont : Styles.Cont}>
              <FaUserGraduate
                className={domainSpec ? Styles.Activeicon : Styles.icon}
              />
              Domain Specialization
            </p>
            
          </div>
        </div>

        {domainSpec ? (
          <div className={Styles.RightSideDomain}>
            <div className={Styles.secondDiv}>
              <div className={Styles.firstDiv}>
                <div className={Styles.iconBoxDesktop}>
                  <div className={Styles.iconBox}>
                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/bank.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <BsBank className={Styles.domainicon} />
                      <p>BFSI</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/heartbeat.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <FaClinicMedical className={Styles.domainicon} />
                      <p>HEALTHCARE</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/live.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <AiOutlineFundProjectionScreen
                        className={Styles.domainicon}
                      />
                      <p>MARKETING</p>
                    </div>

                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/hr.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <BsFillPeopleFill className={Styles.domainicon} />
                      <p>HUMAN RESOURCES</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/supplychain.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <BsTruck className={Styles.domainicon} />
                      <p>SUPPLY CHAIN</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/manufacturing.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <MdOutlinePrecisionManufacturing
                        className={Styles.domainicon}
                      />
                      <p>MANUFACTURING</p>
                    </div>
                  </div>
                  <div className={Styles.iconButton}>
                    <Link href="/domain">
                      <Button
                        text="Download Domain Syllabus"
                        passIcon={<FaDownload className="bIconS" />}
                      />
                    </Link>
                  </div>
                </div>
                <div className={Styles.iconBoxMobile}>
                  <div className={Styles.iconBox}>
                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/bank.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <BsBank className={Styles.domainicon} />
                      <p>BFSI</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/heartbeat.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <FaClinicMedical className={Styles.domainicon} />
                      <p>HEALTHCARE</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/live.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <AiOutlineFundProjectionScreen
                        className={Styles.domainicon}
                      />
                      <p>MARKETING & HR</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/delivery-truck.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <BsTruck className={Styles.domainicon} />
                      <p>SUPPLYCHAIN</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/delivery-truck.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <MdOutlinePrecisionManufacturing
                        className={Styles.domainicon}
                      />
                      <p>MANUFACTURING</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      {/* <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/delivery-truck.gif"
                        loading="lazy"
                        width={40}
                        height={40}
                      /> */}
                      <BsFillPeopleFill className={Styles.domainicon} />
                      <p>HUMAN RESOURCES</p>
                    </div>
                  </div>
                  <div className={Styles.buttonDiv}>
                    <Button
                      bannerButton={true}
                      text="Download Domain Syllabus"
                      passIcon={<FaDownload className="bIconS" />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {projectInno ? (
          <div className={Styles.RightSide}>
            <div className={Styles.firstBox}>
              <div className={`${Styles.topImg} imgWrapper`}>

                {NoGuwahati ? ( <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate-Guwahati.webp"
                  loading="lazy"
                  width="200"
                  height="212"
                  alt="profile-Img"
                  // onClick={() => videoSHow()}
                />):( <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate/degree-woolf.webp"
                  loading="lazy"
                  width="200"
                  height="212"
                  alt="profile-Img"
                  // onClick={() => videoSHow()}
                />)}
               

              </div>
              <div className={Styles.BlueBox}>
                <FaRocket className={Styles.Icon} />
                <p className={Styles.head}>250%</p>
                <p className={Styles.Para}>Highest Salary Hike</p>
                <p style={{ color: "#fff", margin: "10px 0px 0px" }}>
                  Get read to crack highest paying jobs with mokcup interviews
                  led by industry experst
                </p>
              </div>
            </div>
            <div className={Styles.left}>
              <h6>Key Benefits</h6>
              <div className={Styles.mainCont}>
                <p className={Styles.para}>
                  <FaCheckCircle className={Styles.checkCircle} />
                  ECTS accreditation recognized across more than 60 countries.
                </p>
                <p className={Styles.para}>
                  <FaCheckCircle className={Styles.checkCircle} />
                  Equivalent to a Master's Degree in the US
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {projectCert ? (
          <div className={Styles.RightSide}>
            <div className={Styles.firstBox}>
              <div className="imgWrapper">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/masterPage/whylearn1.webp"
                  loading="lazy"
                  width="200"
                  height="212"
                  alt="profile-Img"
                  onClick={() => videoSHow()}
                />
              </div>
              <div className={Styles.BlueBox}>
                <FaRocket className={Styles.Icon} />
                <p className={Styles.head}>35K+</p>
                <p className={Styles.Para}>
                  Mentors help you select the domain & guide you through.
                </p>
              </div>
            </div>
            <div className={Styles.left}>
              <h6>Key Benefits</h6>
              <div className={Styles.mainCont}>
                <p className={Styles.para}>
                  <FaCheckCircle className={Styles.checkCircle} />
                  Work in an industry like environment and gain practical
                  hands-on experience
                </p>
                <p className={Styles.para}>
                  <FaCheckCircle className={Styles.checkCircle} />
                  Gain the work experience of data scientist with dedicated
                  project mentors from industry.
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default WhyLearnbay;
