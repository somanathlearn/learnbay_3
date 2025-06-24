import React from "react";
import { FaChevronRight } from "react-icons/fa";
import styles from "./CitiesLeft.module.css";

const links = [
  { id: "Program", text: "About the Program" },
  { id: "Certification", text: "Certification Details" },
  { id: "Module", text: "Module Details" },
  { id: "Job", text: "Job Assist Program" },
  { id: "Projects", text: "Know Our Projects" },
  { id: "Alumni", text: "Hear From Our Alumni" },
  { id: "FAQ", text: "Frequently Asked Questions" },
];

function CitiesLeftCopy() {
  return (
    <nav className={styles.CitiesLeftHead}>
      <div className={styles.listOuter}>
        {links.map(({ id, text }) => (
          <a key={id} href={`#${id}`}>
            <p className={styles.listInner}>
              <FaChevronRight className={styles.RIcon} />
              {text}
            </p>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default CitiesLeftCopy;
