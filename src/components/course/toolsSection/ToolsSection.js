import React from "react";
import styles from "./ToolsSection.module.css";
import Image from "next/image";

function ToolsSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2>Programming Languages & Tools Covered</h2>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/tools_cover.webp"
          alt="Learnbay"
          quality={100}
          priority
          width="2006"
          height="389"
        />
      </div>
    </section>
  );
}

export default ToolsSection;
