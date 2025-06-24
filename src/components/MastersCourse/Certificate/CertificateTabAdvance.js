import Image from "next/image";
import { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import styles from "./Certificate.module.css";
function CertificateTab({ data, Imgno, certificatedivide, isGuwahati }) {
  const [DCActive, setDCActive] = useState(true);
  const [PCActive, setPCActive] = useState(false);
  const [ACActive, setACActive] = useState(false);
  const [BCActive, setBCActive] = useState(false);

  return (
    <section>
      {certificatedivide ? (
        <>
          {" "}
          <section className={styles.CertificateTab}>
            <div className={styles.header}>
              <div className={styles.pWrap}>
                <p
                  onClick={() => {
                    setDCActive(true);
                    setPCActive(false);
                    setACActive(false);
                    setBCActive(false);
                  }}
                  className={DCActive ? styles.activeP : styles.inactiveP}
                >
                  E&ICT Academy IIT Guwahati
                </p>
                <p
                  onClick={() => {
                    setDCActive(false);
                    setPCActive(false);
                    setACActive(false);
                    setBCActive(true);
                  }}
                  className={BCActive ? styles.activeP : styles.inactiveP}
                >
                  MicroSoft
                </p>
                <p
                  onClick={() => {
                    setDCActive(false);
                    setPCActive(false);
                    setACActive(true);
                    setBCActive(false);
                  }}
                  className={ACActive ? styles.activeP : styles.inactiveP}
                >
                  IBM
                </p>

                <p
                  onClick={() => {
                    setDCActive(false);
                    setPCActive(true);
                    setACActive(false);
                    setBCActive(false);
                  }}
                  className={PCActive ? styles.activeP : styles.inactiveP}
                >
                  Project Certificate
                </p>
              </div>
            </div>
            {DCActive ? (
              <div className={styles.MicroCert}>
                <div className={styles.rightSide}>
                  <h6>{data.degreeCertificate.title}</h6>
                  {data.degreeCertificate.para.map((data, i) => {
                    return (
                      <>
                        <p key={i}>
                          <BsCheckCircle className={styles.checkCircle} />
                          {data}
                        </p>
                      </>
                    );
                  })}
                  {data.degreeCertificate.link ? (
                    <a
                      href={data.degreeCertificate.linkUrl}
                      style={{ color: "#0072bc" }}
                    >
                      {data.degreeCertificate.linkText}
                    </a>
                  ) : (
                    ""
                  )}

                  {Imgno ? (
                    ""
                  ) : (
                    <Image
                      className={styles.clogo}
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate/clogo.webp"
                      alt="Certificate"
                      loading="lazy"
                      width={380}
                      height={70}
                    />
                  )}
                </div>
                <div className={styles.leftSide}>
                  <div className={`${styles.CertificateDiv} imgWrapper`}>
                    <Image
                      src={data.degreeCertificate.img}
                      alt="Certificate"
                      loading="lazy"
                      width={900}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {PCActive ? (
              <div className={styles.MicroCert}>
                <div className={styles.rightSide}>
                  <h6>{data.projectCertificate.title}</h6>
                  {data.projectCertificate.para.map((data, i) => {
                    return (
                      <>
                        <p key={i}>
                          <BsCheckCircle className={styles.checkCircle} />
                          {data}
                        </p>
                      </>
                    );
                  })}
                  {Imgno ? (
                    ""
                  ) : (
                    <Image
                      className={styles.clogo}
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate/clogo.webp"
                      alt="Certificate"
                      loading="lazy"
                      width={380}
                      height={70}
                    />
                  )}
                </div>
                <div className={styles.leftSide}>
                  <div className={`${styles.CertificateDiv} imgWrapper`}>
                    <Image
                      src={data.projectCertificate.img}
                      alt="Certificate"
                      loading="lazy"
                      width={900}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {BCActive ? (
              <div className={styles.MicroCert}>
                <div className={styles.rightSide}>
                  <h6>{data.MicroSoft.title}</h6>
                  {data.MicroSoft.para.map((data, i) => {
                    return (
                      <>
                        <p key={i}>
                          <BsCheckCircle className={styles.checkCircle} />
                          {data}
                        </p>
                      </>
                    );
                  })}
                  {Imgno ? (
                    ""
                  ) : (
                    <Image
                      className={styles.clogo}
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate/clogo.webp"
                      alt="Certificate"
                      loading="lazy"
                      width={380}
                      height={70}
                    />
                  )}
                </div>
                <div className={styles.leftSide}>
                  <div className={`${styles.CertificateDiv} imgWrapper`}>
                    <Image
                      src={data.MicroSoft.img}
                      alt="Certificate"
                      loading="lazy"
                      width={900}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {ACActive ? (
              <div className={styles.MicroCert}>
                <div className={styles.rightSide}>
                  <h6>{data.IBMcertificate.title}</h6>
                  {data.IBMcertificate.para.map((data, i) => {
                    return (
                      <>
                        <p key={i}>
                          <BsCheckCircle className={styles.checkCircle} />
                          {data}
                        </p>
                      </>
                    );
                  })}
                  {Imgno ? (
                    ""
                  ) : (
                    <Image
                      className={styles.clogo}
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate/clogo.webp"
                      alt="Certificate"
                      loading="lazy"
                      width={380}
                      height={70}
                    />
                  )}
                </div>
                <div className={styles.leftSide}>
                  <div className={`${styles.CertificateDiv} imgWrapper`}>
                    <Image
                      src={data.IBMcertificate.img}
                      alt="Certificate"
                      loading="lazy"
                      width={900}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </section>
        </>
      ) : (
        <>
          {" "}
          <section className={styles.CertificateTab}>
            <div className={styles.header}>
              <div className={styles.pWrap}>
                {isGuwahati ? (
                  <>
                    {" "}
                    <p
                      onClick={() => {
                        setDCActive(true);
                        setPCActive(false);
                      }}
                      className={DCActive ? styles.activeP : styles.inactiveP}
                    >
                      E&ICT Academy IIT Guwahati
                    </p>
                  </>
                ) : (
                  <>
                    {" "}
                    <p
                      onClick={() => {
                        setDCActive(true);
                        setPCActive(false);
                      }}
                      className={DCActive ? styles.activeP : styles.inactiveP}
                    >
                      Degree
                    </p>
                  </>
                )}

                <p
                  onClick={() => {
                    setDCActive(false);
                    setPCActive(true);
                    setACActive(false);
                    setBCActive(false);
                  }}
                  className={PCActive ? styles.activeP : styles.inactiveP}
                >
                  Project Certificate
                </p>
              </div>
            </div>
            {DCActive ? (
              <div className={styles.MicroCert}>
                <div className={styles.rightSide}>
                  <h6>{data.degreeCertificate.title}</h6>
                  {data.degreeCertificate.para.map((data, i) => {
                    return (
                      <>
                        <p key={i}>
                          <BsCheckCircle className={styles.checkCircle} />
                          {data}
                        </p>
                      </>
                    );
                  })}
                  {data.degreeCertificate.link ? (
                    <a
                      href={data.degreeCertificate.linkUrl}
                      style={{ color: "#0072bc" }}
                    >
                      {data.degreeCertificate.linkText}
                    </a>
                  ) : (
                    ""
                  )}

                  {Imgno ? (
                    ""
                  ) : (
                    <Image
                      className={styles.clogo}
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate/clogo.webp"
                      alt="Certificate"
                      loading="lazy"
                      width={380}
                      height={70}
                    />
                  )}
                </div>
                <div className={styles.leftSide}>
                  <div className={`${styles.CertificateDiv} imgWrapper`}>
                    <Image
                      src={data.degreeCertificate.img}
                      alt="Certificate"
                      loading="lazy"
                      width={900}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {PCActive ? (
              <div className={styles.MicroCert}>
                <div className={styles.rightSide}>
                  <h6>{data.projectCertificate.title}</h6>
                  {data.projectCertificate.para.map((data, i) => {
                    return (
                      <>
                        <p key={i}>
                          <BsCheckCircle className={styles.checkCircle} />
                          {data}
                        </p>
                      </>
                    );
                  })}
                  {Imgno ? (
                    ""
                  ) : (
                    <Image
                      className={styles.clogo}
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate/clogo.webp"
                      alt="Certificate"
                      loading="lazy"
                      width={380}
                      height={70}
                    />
                  )}
                </div>
                <div className={styles.leftSide}>
                  <div className={`${styles.CertificateDiv} imgWrapper`}>
                    <Image
                      src={data.projectCertificate.img}
                      alt="Certificate"
                      loading="lazy"
                      width={900}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </section>
        </>
      )}
    </section>
  );
}
export default CertificateTab;
