import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFillTelephoneFill, BsTwitterX } from "react-icons/bs";
import {
  FaAndroid,
  FaArrowDown,
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import styles from "../Footer/Footer.module.css";
import {
  CityFooterData,
  CourseData,
  GnCourseData,
  HeadData,
  OtherLocation,
  genHeadData,
  puneLocation,
} from "./FooterData";

const Footer = ({
  adPage,
  adPageCity,
  iconnolink,
  faqhead,
  Ocourses,
  getappsOraginc,
  nolinklogo,
  mailno,
}) => {
  const [read, setRead] = useState(false);

  const handler = () => {
    setRead(!read);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          {nolinklogo ? (
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/white-logo.webp"
              alt="Learnbay"
              width="230"
              height="100"
            />
          ) : (
            <Link href="/">
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/white-logo.webp"
                alt="Learnbay"
                width="230"
                height="100"
              />
            </Link>
          )}

          <p className={styles.FooterInnerli}>
            Enrol now for{" "}
            <b>
              <Link href="/data-science-courses">data science courses</Link>
            </b>
            ,DSA & System designing or full stack development courses. Master
            the most demanding skills of job market and experience and ever
            growing and lucrative career transformation.
          </p>
          {iconnolink ? (
            <div className={styles.FooterSocial}>
              <FaTwitter className="bIcons" />

              <FaFacebookF className="bIcons" />

              <FaLinkedinIn className="bIcons" />

              <FaYoutube className="bIcons" />

              <FaInstagram className="bIcons" />
            </div>
          ) : (
            <div className={styles.FooterSocial}>
              <Link href="https://twitter.com/Learnbay" target="_blank">
                <BsTwitterX className="bIcons" />
              </Link>
              <Link
                href="https://www.facebook.com/learnbay/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="bIcons" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/learnbay/"
                target="_blank "
              >
                <FaLinkedinIn className="bIcons" />
              </Link>
              <Link href="https://bit.ly/Learnbay_YouTube" target="_blank">
                <FaYoutube className="bIcons" />
              </Link>
              <Link
                href="https://instagram.com/learnbayofficial"
                target="_blank"
              >
                <FaInstagram className="bIcons" />
              </Link>
            </div>
          )}

          {mailno ? (
            <span style={{ display: "flex", marginTop: "20px" }}>
              <IoMailSharp className="bIcons" />
              contacts@learnbay.co
            </span>
          ) : (
            <span style={{ display: "flex", marginTop: "20px" }}>
              <IoMailSharp className="bIcons" />
              <Link href="mailto:contacts@learnbay.co" target="_blank">
                contacts@learnbay.co
              </Link>
            </span>
          )}

          {adPage ? (
            <>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <BsFillTelephoneFill className="bIcons" />
                <Link href="tel:+917795687988" target="_blank">
                  (+91) 77956 87988
                </Link>
              </span>
            </>
          ) : (
            <>
              {" "}
              <span style={{ display: "flex", marginTop: "10px" }}>
                <BsFillTelephoneFill className="bIcons" />
                <Link href="tel:+917795687988" target="_blank">
                  (+91) 77956 87988
                </Link>
              </span>
            </>
          )}
        </div>

        {Ocourses ? (
          <div className={styles.FooterDivInner}>
            {GnCourseData.map((Head, index) => {
              return (
                <div key={index}>
                  <p className={styles.FooterInnerP}>{Head.Head}</p>
                  {Head.Courses.map((Courses) => {
                    return (
                      <a key={Courses.name}>
                        <p className={styles.FooterInnerli}>{Courses.name}</p>
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.FooterDivInner}>
            {CourseData.map((Head, index) => {
              return (
                <div key={index}>
                  <p className={styles.FooterInnerP}>{Head.Head}</p>
                  {Head.Courses.map((Courses) => {
                    return (
                      <Link href={Courses.url} key={Courses.name}>
                        <p className={styles.FooterInnerli}>{Courses.name}</p>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        {faqhead ? (
          <div className={styles.FooterDivInner}>
            {genHeadData.map((Head, index) => {
              return (
                <div key={index}>
                  <p className={styles.FooterInnerP}>{Head.Head}</p>
                  {Head.LearnbayData.map((LearnbayData) => {
                    return (
                      <p className={styles.FooterInnerli}>
                        {LearnbayData.name}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.FooterDivInner}>
            {HeadData.map((Head, index) => {
              return (
                <div key={index}>
                  <p className={styles.FooterInnerP}>{Head.Head}</p>
                  {Head.LearnbayData.map((LearnbayData) => {
                    return (
                      <Link href={LearnbayData.url} key={LearnbayData.name}>
                        <p className={styles.FooterInnerli}>
                          {LearnbayData.name}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        {getappsOraginc ? (
          <div className={styles.FooterDivInner}>
            <p className={styles.FooterInnerP}>Get Our Apps On</p>

            <button className={styles.btnout}>
              <FaAndroid className="bIcons" style={{ fontSize: "30px" }} />
              Get Our Android App
            </button>

            <p className={styles.FooterInnerP}>Find Us Here</p>

            <p className={styles.FooterInnerli}>
              #1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore
              - 560102 (Above Sangam Sweets)
            </p>
          </div>
        ) : (
          <div className={styles.FooterDivInner}>
            <p className={styles.FooterInnerP}>Get Our Apps On</p>
            <Link
              href="https://play.google.com/store/apps/details?id=co.groot.uavnc&pcampaignid=web_share"
              target="_blank"
            >
              <button className={styles.btnout}>
                <FaAndroid className="bIcons" style={{ fontSize: "30px" }} />
                Get Our Android App
              </button>
            </Link>
            <p className={styles.FooterInnerP}>Find Us Here</p>
            <Link href="https://goo.gl/maps/4tC9yN8VTkBf72cW9" target="_blank">
              <p className={styles.FooterInnerli}>
                #1090 , 1st floor, 18th cross road HSR layout sector 3,
                Bangalore - 560102 (Above Sangam Sweets)
              </p>
            </Link>
          </div>
        )}
      </div>

      {adPageCity ? (
        ""
      ) : (
        <>
          <div
            className={styles.FooterDiv}
            style={{
              borderTop: "1px solid",
              borderBottom: "1px solid",
              borderColor: "#ffffff50",
              alignItems: "end",
            }}
          >
            <div className={styles.FooterDivInner}>
              <p className={styles.FooterInnerP}>
                Project Innovation Lab Address{" "}
              </p>
              {puneLocation.map((data, index) => {
                const { cityName, location } = data;
                return (
                  <div key={index}>
                    <p className={styles.FooterInnerP}>{cityName}</p>
                    <p className={styles.FooterInnerli}>{location}</p>
                  </div>
                );
              })}
            </div>
            {OtherLocation.map((data) => {
              const { id, cityName, location } = data;
              return (
                <div className={styles.FooterDivInner} key={id}>
                  <p className={styles.FooterInnerP}>{cityName} </p>
                  <p className={styles.FooterInnerli}>{location}</p>
                </div>
              );
            })}
            <div className={styles.viewBtn}>
              <button className={styles.btnout} onClick={handler}>
                {read ? (
                  <>
                    View Less{" "}
                    <FaArrowUp
                      className="bIcons"
                      style={{ fontSize: "16px", margin: "0px 0px 0px 10px" }}
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    View More{" "}
                    <FaArrowDown
                      className="bIcons"
                      style={{ fontSize: "16px", margin: "0px 0px 0px 10px" }}
                    />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* condiltion renderingg/ */}
          {/* {read ? (
            <>
              {CityFooterData.map((data, index) => {
                return (
                  <div
                    className={styles.FooterDiv}
                    key={index}
                    style={{
                      borderBottom: "1px solid",
                      borderColor: "#ffffff50",
                    }}
                  >
                    {data.FirstDiv.map((cityData, index) => {
                      return (
                        <div className={styles.FooterDivInner} key={index}>
                          <div>
                            <p className={styles.FooterInnerP}>
                              {cityData.city}
                            </p>
                            {cityData.cityData.map((city) => {
                              return (
                                <Link href={city.url} key={city.name}>
                                  <p className={styles.FooterInnerli}>
                                    {city.name}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )} */}

          <>
            {/* Always render this content, just hide/show using CSS */}
            <div className={`${read ? styles.visible : styles.hidden}`}>
              {CityFooterData.map((data, index) => (
                <div
                  className={styles.FooterDiv}
                  key={index}
                  style={{
                    borderBottom: "1px solid",
                    borderColor: "#ffffff50",
                  }}
                >
                  {data.FirstDiv.map((cityData, i) => (
                    <div className={styles.FooterDivInner} key={i}>
                      <p className={styles.FooterInnerP}>{cityData.city}</p>
                      {cityData.cityData.map((city) => (
                        <Link href={city.url} key={city.name}>
                          <p className={styles.FooterInnerli}>{city.name}</p>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        </>
      )}
      <div className={styles.FooterBottom}>
        <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>
            Copyright © 2015 - 2025 Learnbay by Learnvista Pvt. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
