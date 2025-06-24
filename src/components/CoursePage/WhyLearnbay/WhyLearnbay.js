import Button from "@/components/Global/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsBank, BsFillPeopleFill, BsTruck } from "react-icons/bs";
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
import VideoPopup from "../../Global/VideoPopup/VideoPopup";
import Styles from "./WhyLearnbay.module.css";
// import { BsFillPeopleFill } from "react-icons/bs";

function WhyLearnbay({
  idss,
  targetjobs,
  adsHide,
  Intern,
  FreshersIntern,
  FoundNew,
  CloudContent,
}) {
  const [domainSpec, setDomainSpec] = useState(false);
  const [projectInno, setProjectInno] = useState(true);
  const [projectCert, setProjectCert] = useState(false);
  const [jobroles, setJobroles] = useState(false);
  const [Freshers, setFreshers] = useState(false);
  const [Found, setFound] = useState(false);

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
              setJobroles(false);
              setFreshers(false);
              setFound(false);
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
              Project Innovation Lab
            </p>
          </div>

          <div
            onClick={() => {
              setJobroles(false);
              setDomainSpec(false);
              setFreshers(false);
              setFound(false);
              setProjectInno(false);
              setProjectCert(true);
            }}
            className={projectCert ? Styles.ActiveInnerBox : Styles.InnerBox}
          >
            {FoundNew ? (
              <p className={projectCert ? Styles.ActiveCont : Styles.Cont}>
                <FaUserShield
                  className={projectCert ? Styles.Activeicon : Styles.icon}
                />
                Global Certification
              </p>
            ) : (
              <>
                {Intern ? (
                  <p className={projectCert ? Styles.ActiveCont : Styles.Cont}>
                    <FaUserShield
                      className={projectCert ? Styles.Activeicon : Styles.icon}
                    />
                    Internship Certification
                  </p>
                ) : (
                  <p className={projectCert ? Styles.ActiveCont : Styles.Cont}>
                    <FaUserShield
                      className={projectCert ? Styles.Activeicon : Styles.icon}
                    />
                    Project Certification
                  </p>
                )}
              </>
            )}
          </div>
          {FoundNew ? (
            <div
              onClick={() => {
                setJobroles(false);
                setDomainSpec(false);
                setProjectInno(false);
                setFound(true);
                setFreshers(false);
                setProjectCert(false);
              }}
              className={Found ? Styles.ActiveInnerBox : Styles.InnerBox}
            >
              <p className={Found ? Styles.ActiveCont : Styles.Cont}>
                <FaUserGraduate
                  className={Found ? Styles.Activeicon : Styles.icon}
                />
                Target Job Roles
              </p>
            </div>
          ) : (
            <>
              {FreshersIntern ? (
                <div
                  onClick={() => {
                    setJobroles(false);
                    setDomainSpec(false);
                    setProjectInno(false);
                    setFound(false);
                    setFreshers(true);
                    setProjectCert(false);
                  }}
                  className={Freshers ? Styles.ActiveInnerBox : Styles.InnerBox}
                >
                  <p className={Freshers ? Styles.ActiveCont : Styles.Cont}>
                    <FaUserGraduate
                      className={Freshers ? Styles.Activeicon : Styles.icon}
                    />
                    Target Job Roles
                  </p>
                </div>
              ) : (
                <>
                  {targetjobs ? (
                    <div
                      onClick={() => {
                        setJobroles(true);
                        setDomainSpec(false);
                        setProjectInno(false);
                        setFound(false);
                        setFreshers(false);
                        setProjectCert(false);
                      }}
                      className={
                        jobroles ? Styles.ActiveInnerBox : Styles.InnerBox
                      }
                    >
                      <p className={jobroles ? Styles.ActiveCont : Styles.Cont}>
                        <FaUserGraduate
                          className={jobroles ? Styles.Activeicon : Styles.icon}
                        />
                        Target Job Roles
                      </p>
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setJobroles(false);
                        setDomainSpec(true);
                        setFreshers(false);
                        setFound(false);
                        setProjectInno(false);
                        setProjectCert(false);
                      }}
                      className={
                        domainSpec ? Styles.ActiveInnerBox : Styles.InnerBox
                      }
                    >
                      <p
                        className={domainSpec ? Styles.ActiveCont : Styles.Cont}
                      >
                        <FaUserGraduate
                          className={
                            domainSpec ? Styles.Activeicon : Styles.icon
                          }
                        />
                        Domain Specialization
                      </p>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>

        {domainSpec ? (
          <div className={Styles.RightSideDomain}>
            <div className={Styles.secondDiv}>
              <div className={Styles.firstDiv}>
                <div className={Styles.iconBoxDesktop}>
                  <div className={Styles.iconBox}>
                    <div className={Styles.BoxIconinner}>
                      <BsBank className={Styles.domainicon} />
                      <p>BFSI</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      <FaClinicMedical className={Styles.domainicon} />
                      <p>HEALTHCARE</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      <AiOutlineFundProjectionScreen
                        className={Styles.domainicon}
                      />
                      <p>MARKETING</p>
                    </div>

                    <div className={Styles.BoxIconinner}>
                      <BsFillPeopleFill className={Styles.domainicon} />
                      <p>HUMAN RESOURCES</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      <BsTruck className={Styles.domainicon} />
                      <p>SUPPLY CHAIN</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
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
                      <BsBank className={Styles.domainicon} />
                      <p>BFSI</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      <FaClinicMedical className={Styles.domainicon} />
                      <p>HEALTHCARE</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      <AiOutlineFundProjectionScreen
                        className={Styles.domainicon}
                      />
                      <p>MARKETING & HR</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      <BsTruck className={Styles.domainicon} />
                      <p>SUPPLYCHAIN</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      <MdOutlinePrecisionManufacturing
                        className={Styles.domainicon}
                      />
                      <p>MANUFACTURING</p>
                    </div>
                    <div className={Styles.BoxIconinner}>
                      <BsFillPeopleFill className={Styles.domainicon} />
                      <p>HUMAN RESOURCES</p>
                    </div>
                  </div>
                  <div className={Styles.buttonDiv}>
                    <Link href="/domain">
                      <Button
                        bannerButton={true}
                        text="Download Domain Syllabus"
                        passIcon={<FaDownload className="bIconS" />}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {Found ? (
          <div className={`${Styles.RightSideCert} imgWrapper`}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/founder-lab.webp"
              loading="lazy"
              width="350"
              height="212"
              alt="profile-Img"
              // onClick={() => videoSHow()}
              style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
            />
          </div>
        ) : (
          ""
        )}

        {Freshers ? (
          <div className={`${Styles.RightSideCert} imgWrapper`}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/fresher-lab.webp"
              loading="lazy"
              width="350"
              height="212"
              alt="profile-Img"
              // onClick={() => videoSHow()}
              style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
            />
          </div>
        ) : (
          ""
        )}

        {jobroles ? (
          <div className={`${Styles.RightSideCert} imgWrapper`}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/jobroles.webp"
              loading="lazy"
              width="350"
              height="212"
              alt="profile-Img"
              // onClick={() => videoSHow()}
            />
          </div>
        ) : (
          ""
        )}

        {projectInno ? (
          <div className={Styles.RightSide}>
            <div className={Styles.firstBox}>
              {adsHide ? (
                <div className="imgWrapper">
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-650-min.webp"
                    loading="lazy"
                    width="200"
                    height="212"
                    alt="profile-Img"
                  />
                </div>
              ) : (
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
              )}
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
                {CloudContent ? (<p className={Styles.para}>
                  <FaCheckCircle className={Styles.checkCircle} />
                  Gain the work experience of DevOps Engineer with dedicated
                  project mentors from industry.
                </p>) : (
                <p className={Styles.para}>
                  <FaCheckCircle className={Styles.checkCircle} />
                  Gain the work experience of data scientist with dedicated
                  project mentors from industry.
                </p>
                  )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {projectCert ? (
          <div className={`${Styles.RightSideCert} imgWrapper`}>
            {FoundNew ? (
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm-min.webp"
                loading="lazy"
                width="350"
                height="212"
                alt="profile-Img"
                // onClick={() => videoSHow()}
                style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
              />
            ) : (
              <>
                {Intern ? (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Freshers-New.webp"
                    loading="lazy"
                    width="350"
                    height="212"
                    alt="profile-Img"
            
                    style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                  />
                ) : (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/new-project-cer-s.webp"
                    loading="lazy"
                    width="350"
                    height="212"
                    alt="profile-Img"
                  />
                )}
              </>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default WhyLearnbay;
