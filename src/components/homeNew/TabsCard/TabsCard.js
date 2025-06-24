import React, { useState, useRef, useEffect } from "react";
import styles from "./TabsCard.module.css";
import Image from "next/image";
import { tabsData } from "./TabsCardData"; // adjust path if needed
import Popup from "@/components/Global/Popup/Popup";
import Form from "@/components/Global/Form/Form";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import { Download, Calendar, Briefcase } from "lucide-react";

const TabsCard = ({
  dataScience,
  radio,
  dataScienceCounselling,

  dataScienceGeneric,
  interstedInHide,
}) => {
  const [brochureLinks, setBrochureLinks] = useState();
  const [brochurePdfs, setBrochurePdfs] = useState();
  const [popups, setPopups] = useState(false);
  const [titleCourse, setTitleCourse] = useState();

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeCards = tabsData[activeTabIndex].cards;

  // Mobile slider refs & state
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Update active dot based on scroll position – only runs on small screens
  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // Reset scroll to beginning and active dot to 0 when tab changes
    containerEl.scrollTo({ left: 0, behavior: "auto" });
    setActiveSlide(0);

    const onScroll = () => {
      const scrollLeft = containerEl.scrollLeft;
      const cardWidth = containerEl.firstChild?.offsetWidth || 1;
      const stylesGap = getComputedStyle(containerEl);
      const gap = parseFloat(stylesGap.gap || stylesGap.columnGap || 16);
      const slideIndex = Math.round(scrollLeft / (cardWidth + gap));
      setActiveSlide(slideIndex);
    };

    // Attach only for mobile widths
    if (window.innerWidth <= 768) {
      containerEl.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => containerEl.removeEventListener("scroll", onScroll);
  }, [activeTabIndex]);

  return (
    <div className={styles.mainCard}>
      <SectionHeading
        title="What's the smartest way for professionals to upskill today"
        highlightWords={[
          { text: "professionals to upskill", color: "gradient-blue" },
        ]}
        align="center"
        variant="section"
      />
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Syllabus</h5>
          <Form
            titleCourse={titleCourse}
            brochureLink={brochureLinks}
            brochurePdf={brochurePdfs}
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            dataScienceGeneric={dataScienceGeneric}
            radio={radio}
            downloadBrochure
            upSkillingHide={true}
            interstedInHide={interstedInHide}
          />
        </div>
      </Popup>
      <div className={styles.TabMain}>
        {tabsData.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`${styles.tabItem} ${
              index === activeTabIndex ? styles.activeTab : ""
            }`}
          >
            <p>{tab.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.container} ref={containerRef}>
        {activeCards.map((card, idx) => (
          <div className={styles.cardDiv} key={idx}>
            <div className={styles.imageWrapper}>
              <Image
                src={card.image}
                layout="fill"
                objectFit="cover"
                alt={card.title}
                loading="lazy"
              />
            </div>
            <div className={styles.cardContent}>
              <h3>{card.title}</h3>
              <ul className={styles.list}>
                <li>
                  <Calendar size={18} /> {card.duration}
                </li>
                <li>
                  <Briefcase size={18} /> {card.certificate}
                </li>
              </ul>
              <hr className={styles.hr} />
              <div className={styles.btns}>
                <button
                  className={styles.brochureBtn}
                  onClick={() => {
                    setTitleCourse(card.titleCourse);
                    setBrochureLinks(card.brochureLinks);
                    setBrochurePdfs(card.brochurePdfs);
                    setPopups(true);
                  }}
                >
                  Brochure <Download size={16} />
                </button>
                <button className={styles.viewBtn}>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for mobile slider */}
      <div className={styles.dotsWrapper}>
        {activeCards.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${
              idx === activeSlide ? styles.dotActive : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TabsCard;
