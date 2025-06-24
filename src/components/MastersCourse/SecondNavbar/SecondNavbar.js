import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Form from "../../Form/Form";
import Button from "../../Global/Button/Button";
import styles from "./SecondNavbar.module.css";
const Popup = dynamic(() => import("../../Popup/Popup"));

function SecondNavbar({
  careerForm,
  radio,
  dataScience,
  fullStack,
  dataScienceCounselling,
  interstedInHide,
}) {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [popups, setPopups] = useState(false);

  const [activeSection, setActiveSection] = useState(null);
  const [showApplyButton, setShowApplyButton] = useState(false); // Define showApplyButton here
  const [showLogo, setShowLogo] = useState(false); // Define showLogo here

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the ID of the section that is currently in the viewport
            const sectionId = entry.target.getAttribute("id");
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections with IDs matching your navigation links
    const sections = document.querySelectorAll(
      "#alumni, #Degree, #curriculum, #Fees, #ProjectLab"
    );
    sections.forEach((section) => {
      observer.observe(section);
    });

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
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Adjust this value based on when you want to show the button
      if (scrollY >= 1000) {
        setShowApplyButton(true);
        setShowLogo(true);
      } else {
        setShowApplyButton(false);
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
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
            {/* <p>Fill the below details to get started</p> */}
            {careerForm ? (
              <FormCareer />
            ) : (
              <Form
                popup={true}
                setTrigger={setPopups}
                radio={radio}
                fullStack={fullStack}
                dataScience={dataScience}
                dataScienceCounselling={dataScienceCounselling}
                interstedInHide={interstedInHide}
                upSkillingHide={true}
              />
            )}
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
            quality={100}
            style={{ objectFit: "contain" }}
            width={mobile ? "135" : "230"}
            height={60}
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
          <Link href="#ProjectLab">
            <p
              className={
                activeSection === "ProjectLab" ? styles.active : styles.inactive
              }
            >
              Project Lab
            </p>
          </Link>
          <Link href="#curriculum">
            <p
              className={
                activeSection === "curriculum" ? styles.active : styles.inactive
              }
            >
              Curriculum
            </p>
          </Link>
          <Link href="#Degree">
            <p
              className={
                activeSection === "Degree" ? styles.active : styles.inactive
              }
            >
              Degree
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

export default SecondNavbar;
