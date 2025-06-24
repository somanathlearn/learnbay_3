import React, { memo, useMemo } from "react";
import styles from "./NewCyberECCouncilCertificate.module.css";
import TopCertificate from "./TopCertificate";

function NewCyberECCouncilCertificateSection({certificateData}) {
//   const { certificateNew } = certificateData;

  if (!certificateData || certificateData.length === 0) {
    return <p>No certificates available at the moment.</p>
  }

  const [topCertificates, remainingCertificates] = useMemo(() => {
    const TOP_CERTIFICATES_COUNT = 2;
    return [
        certificateData.slice(0, TOP_CERTIFICATES_COUNT),
        certificateData.slice(TOP_CERTIFICATES_COUNT),
    ];
  }, [certificateData]);

  return (
    <section className="containerWidth">
      <div className={styles.mainBg}>
        <h2 className={styles.upskillHeading}>
          Get certified and accelerate your
          <span className={styles.spanHead}>&nbsp;career growth</span>
        </h2>
        <div className={styles.innerDiv}>
          {/* First two certificates */}
          <TopCertificate topCertificates={topCertificates} isCyberSecurity={true}/>
        </div>
      </div>
    </section>
  );
}

export default memo(NewCyberECCouncilCertificateSection);
