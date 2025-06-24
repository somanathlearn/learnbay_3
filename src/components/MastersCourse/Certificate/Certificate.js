import React from "react";
import styles from "./Certificate.module.css";
import CertificateTabAdvance from "./CertificateTabAdvance";
const Certificate = ({ NoCertificate, data, Imgno, certificatedivide, isGuwahati  }) => {
  return NoCertificate ? (
    ""
  ) : (
    <div className={`${styles.Certificate}`} id="Degree">
      {isGuwahati ?(<>  <h4 className={styles.infop}>Globally Recognized Certification</h4></>):(<>  <h4 className={styles.infop}>Globally Recognized Degree</h4></>)}
    

      <CertificateTabAdvance data={data }Imgno ={Imgno } certificatedivide={certificatedivide} isGuwahati={isGuwahati}/>
    </div>
  );
};
export default Certificate;
