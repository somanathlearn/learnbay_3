import { useEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Button from "../../Global/Button/Button";
import Form from "../../Global/Form/Form";
import Popup from "../../Global/Popup/Popup";
import styles from "./SecondNavbar.module.css";

// const FormCareer = dynamic(() => import("../../Global/Form/FormCareer"));

function SecondNavbar({
  careerForm,
  radio,
  interstedInHide,
  dataScience,
  fullStack,
  brochureLink,
  brochurePdf,
  titleCourse,
  dataScienceCounselling,
  hideProjectLab,
}) {
  const [popups, setPopups] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [showApplyButton, setShowApplyButton] = useState(false);

  const [mobile, setMobile] = useState(false);
  const debounce = useMemo(() => {
    return (func, wait) => {
      let timeout;
      return function () {
        const context = this,
          args = arguments;
        const later = function () {
          timeout = null;
          func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY >= 830) {
        setShowApplyButton(true);
      } else {
        setShowApplyButton(false);
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 100); // Debounce the scroll event

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  const observerRef = useRef(null);

  useEffect(() => {
    const observer =
      observerRef.current ??
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.getAttribute("id");
              setActiveSection(sectionId);
            }
          });
        },
        { threshold: 0.5 }
      );

    const sections = document.querySelectorAll(
      "#alumni, #ProjectLab, #curriculum, #Fees, #faqs"
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    observerRef.current = observer;

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const popupShow = () => {
    setPopups(true);
  };

  useEffect(() => {
    let width = window.innerWidth;
    setMobile(width < 481);
  }, []);

  return (
    <>
      <div className={styles.upperDiv}>
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* {careerForm ? (
              <FormCareer />
            ) : ( */}
            <Form
              popup={true}
              setTrigger={setPopups}
              radio={radio}
              titleCourse={titleCourse}
              brochureLink={brochureLink}
              brochurePdf={brochurePdf}
              fullStack={fullStack}
              dataScience={dataScience}
              interstedInHide={interstedInHide}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
            />
            {/* )} */}
          </div>
        </Popup>
        <Link
          href="/"
          className={
            showApplyButton ? styles.buttonBlock : styles.buttonNoBlock
          }
        >
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
            alt="Learnbay"
            loading="lazy"
            width={mobile ? "135" : "230"}
            height={50}
          />
        </Link>
        <div className={styles.innerP}>
          <Link href="#alumni">
            <p
              className={
                activeSection === "alumni" ? styles.active : styles.inactive
              }
            >
              Alumni
            </p>
          </Link>
          {hideProjectLab ? ("") : (
          <Link href="#ProjectLab">
            <p
              className={
                activeSection === "ProjectLab" ? styles.active : styles.inactive
              }
            >
              Project Lab
            </p>
          </Link>
          )}
          <Link href="#curriculum">
            <p
              className={
                activeSection === "curriculum" ? styles.active : styles.inactive
              }
            >
              Curriculum
            </p>
          </Link>
          <Link href="#Fees">
            <p
              className={
                activeSection === "Fees" ? styles.active : styles.inactive
              }
            >
              Fees
            </p>
          </Link>
          <Link href="#faqs">
            <p
              className={
                activeSection === "faqs" ? styles.active : styles.inactive
              }
            >
              FAQs
            </p>
          </Link>
        </div>

        <div
          className={
            showApplyButton ? styles.buttonBlock : styles.buttonNoBlock
          }
          onClick={popupShow}
        >
          <Button text="Apply Now" outline={true} />
        </div>
      </div>
      <hr className={styles.hr} />
    </>
  );
}

// Debounce function to reduce the frequency of function calls during scrolling

export default SecondNavbar;
