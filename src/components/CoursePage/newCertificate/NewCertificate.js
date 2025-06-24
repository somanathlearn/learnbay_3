import React from "react";
import styles from "./NewCertificate.module.css";
import Image from "next/image";

function NewCertificateSection({ certificateNew = [] }) {
  if (!certificateNew || certificateNew.length === 0) {
    return <p>No certificates available at the moment.</p>;
  }

  return (
    <section className="containerWidth">
      <div className={styles.mainBg}>
        <h2 className={styles.upskillHeading}>
          Get certified and accelerate your
          <span className={styles.spanHead}>&nbsp;career growth</span>
        </h2>
        <div className={styles.innerDiv}>
          {/* First two certificates */}
          <div className={styles.certBoxWrapperTop}>
            {certificateNew.slice(0, 2).map((certificate) => (
              <div key={certificate.id} className={styles.certBox}>
                <Image
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  width={certificate.imageWidth}
                  height={certificate.imageHeight}
                  className={styles.toolIcon}
                  loading="lazy"
                />
                <div className={styles.iconDivMain}>
                  <h4>{certificate.title}</h4>

                  <div className={styles.iconDiv}>
                    {/* Split description by commas and map through points */}
                    {certificate.description.split(",").map((point, index) => (
                      <div key={index} className={styles.iconWithText}>
                        {/* Icon and text */}
                        <svg
                          height="20"
                          width="20"
                          fill="none"
                          viewBox="0 0 30 30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            height="30"
                            id="mask0_3558_1288"
                            style={{ maskType: "alpha" }}
                            width="30"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              height="30"
                              width="30"
                              fill="url(#pattern0_3558_1288)"
                            />
                          </mask>
                          <g mask="url(#mask0_3558_1288)">
                            <rect
                              height="36"
                              width="34.5"
                              fill="#03C038"
                              x="-1.5"
                              y="-2.99951"
                            />
                          </g>
                          <defs>
                            <pattern
                              height="1"
                              id="pattern0_3558_1288"
                              width="1"
                              patternContentUnits="objectBoundingBox"
                            >
                              <use
                                transform="scale(0.01)"
                                xlinkHref="#image0_3558_1288"
                              />
                            </pattern>
                            <image
                              height="100"
                              id="image0_3558_1288"
                              width="100"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEsklEQVR4nO1dPWtUQRQ9ovEjWMQi2UTRQD5AcCERXDBGLExMIrGRrEkuqGChFiLI21/hD7DW0jJYWFhaCCIiqcXWQkRLO1cG7sMQsrvv7c7HnXn3wCFk2X375px983HnzgygUCgUCoVCoVAoFIpuGAYwDmAWQB3APIAGgCvMBr9W5/eM82cUFnAEwAQLvArgDgDqk+azK3ytCb62ogCGAEwDWAKwNYABvWiufZ2/y3ynYh9qABYBbDo0oRM3uboz91B5mDr+RgATqAPXAJyroivm13hTgAHUxZgxVADHASwIEJwK8lrKvbQZAE0BIlNJNrnxTwZD3GhS5LwK4GjBMh/iLvZt/mv+F4FTAG4JEJMs0ZRlpEeZzdP0CUB7Dz9KeMpqkVZRVGCQaQaXB+E8gO/7zMj5DcBJBMKk44EdBeYWl7GoGTmfhDDDxJC2BYhGjrnNHZWiZhi+8m3GZEXMoD1cLmiG4QvfbUbK1RQdwBaA3wXNaPOA01tvapBobBXMeO3LDBPKXhcgEHlkBuBXCTPeAjjmy5CYQiGUuhkzAgQiNeN/oDDFgR/F+GQgkfgUOTLjg28zxgSIRELN+ALgvu8ZSMmTSyTADPI55jgjQCgSbkbO0z4MkTQHToLNINbKKWoCxKJIzMjptC1ZFCAYRWQGcW/U2VRsiLwpitgMYs2cJONNCxCNIjMj55QLQ5YECEcRmkGctmo9opviXEfmwQxi7awmeE8IEI8iNSOnSZu1hnkBAlLEZhjO2TRkVYCIFLEZxOtTrCGV6dkskBnEGlrBsAAhKXIzcp6wYci4ADEpATOshVFmHYv1EMAzAPeEZId8dngveWLdQKg7urmnAHYB/GUh/gDYAXA3UTMML9gw5KKDG3sM4KdjUVrCzCAePgyMhoMbe+NYnJZAMwwvSc27+upQpJZQM4i1jNaQdh9iSTbDmiEuqqwdB6K1hJthrcpy0ag/6tKot/sQLwYzrDXqdeGDtUzIoM9bt9flwHBQMbOIzLA2MHQdOulX1CwyM6yFTnwEF8u2AbuRtBlOgou+wu9ZyV98TE8G8UoBa1jxdNOZZVOkmGE9i9HnFG5myRRJZlifwvWd5JANaIo0M6wnOYRIA8r6NEWiGdbTgMDJXr4LkkXYtfWSKBcylTQraIpUM5ylkoZMts56mCLZDGfJ1qGXI2QAfnRYYClh0Od9OYKEBTsPALwE8B7AOwDPBQjei84301wWUEiKhM6XtIEXMoYuKEXCTjvPWceagMKScJp8aG8YFVBgEk7vGzFXbRcgKsHLCACz+cyGgMKTMDZtznuURcoLQUnSqLwMtOqCn0FgUVRxiz/qsOu1mMNhRhJaZUV9thu9tiD3jipuE0tcZquTTzZRtY2Ut2M4kWemgluNi8fZxDeq2TpgM37xqOJxFeIxktiBLusSe1NlMZTI4HEhtRNCpyOtwjYkhENcIbZj8xb5npPHmPBJrlWe86kcRgMl4FGXOXCzL3HlUeNI6WbAw4krcdRqPz2yKX5qfBzfPSUpQhvLAfdzvD5lkGhyk6ujOQ4EHg5duFQwzBGAWV7ROsfr6BeYDX7tAr+nFnI6VaFQKBQKhUKhUCgQAf4B6mw/oZlF0aYAAAAASUVORK5CYII="
                            />
                          </defs>
                        </svg>
                        <p>{point.trim()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining certificate */}
          <div className={styles.certBoxWrapperBottom}>
            {certificateNew.slice(2).map((certificate) => (
              <div key={certificate.id} className={styles.certBoxDemo}>
                <div className={styles.AddonMbl}>
                  <p>Add on</p>
                </div>
                <Image
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  width={certificate.imageWidth}
                  height={certificate.imageHeight}
                  className={`${styles.toolIcon} ${styles.toolIconThree}`}
                  loading="lazy"
                />
                <div className={styles.iconDivMain}>
                  <div className={styles.Addon}>
                    <p>Add on</p>
                  </div>
                  <h4>{certificate.title}</h4>
                  {certificate.description.map((desc, descIndex) => (
                    <div key={descIndex} className={styles.iconDiv}>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewCertificateSection;
