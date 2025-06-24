import React from 'react';
import styles from "./newTools.module.css";
import Image from 'next/image';


const NewTools = ({toolsData}) => {
  return (
    <div className={styles.maintool}>
      <h2>Programming languages & tools covered</h2>
      <div className={styles.boxMain}>
        {toolsData.map((tool, index) => (
          <div key={index} className={`${styles.ImageBox} ${index === 9 ? styles.hideOnMobile : ''}`}>
            <Image src={tool.src} width={150} height={66} alt={tool.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewTools;
