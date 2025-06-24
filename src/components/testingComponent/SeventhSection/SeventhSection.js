import React, { useState, useEffect } from "react";
import styles from "./SeventhSection.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
const Button = dynamic(()=>import("../../Global/Button/Button"));
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdCall } from "react-icons/md";

function SeventhSectionCopy({ fullStackCont }) {
  const [mobile, setMobile] = useState(false);

  // Optimized Media Query Handling
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 480px)");
      
      // Function to update state only if changed
      const handleMediaChange = (e) => setMobile((prev) => (prev !== e.matches ? e.matches : prev));

      // Initial check
      handleMediaChange(mediaQuery);
      
      mediaQuery.addEventListener("change", handleMediaChange);
      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }
  }, []);

  // Dynamic Image Selection
  const backgroundImage = mobile
    ? "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learner's+support.webp"
    : "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/new-bg-sevventt.webp";

  return (
    <div className={styles.Section2}>
      <p className={styles.infop}>24X7 Learner’s Support</p>

      <div className={styles.LearnSupport}>
        {/* Background Image */}
        <div className="bgWrap">
          <Image
            src={backgroundImage}
            fill
            className={styles.deskImage}
            alt="Learners support"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRjAAAABXRUJQVlA4WAoAAAAgAAAAKAAA..." // Tiny base64 blur
            quality={60}
          />
        </div>

        {/* Support Information */}
        <div className={styles.learnInner}>
          <p className={styles.pTop}>Got more questions?</p>
          <h5>Talk to our team directly</h5>
          <p className={styles.pBot}>
            Contact us and our academic counsellor will get in touch with you shortly
          </p>

          {/* Dynamic Contact Information */}
          <div className={styles.btnWrap}>
            <a
              href={`https://api.whatsapp.com/send?phone=${fullStackCont ? "919731135221" : "917349222263"}&text=Hello,`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <button className={styles.btn1}>
                <AiOutlineWhatsApp /> Enquire Now
              </button>
            </a>
            <a href={`tel:${fullStackCont ? "+919731135221" : "+917795687988"}`} aria-label="Call us">
              <Button text={fullStackCont ? "+91 97311 35221" : "+917795687988"} passIcon={<MdCall />} outline invert />
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className={styles.rightPart}>
          <div className="imgWrapper">
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/girl-seventh.webp"
              width={600}
              height={600}
              alt="data science course"
              style={{ borderRadius: "5px" }}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRjAAAABXRUJQVlA4WAoAAAAgAAAAKAAA..." // Tiny base64 blur
              quality={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Optimize React.memo to only re-render when `fullStackCont` changes
export default React.memo(SeventhSectionCopy, (prevProps, nextProps) => prevProps.fullStackCont === nextProps.fullStackCont);
