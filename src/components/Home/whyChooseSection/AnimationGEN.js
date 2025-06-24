import React, { useEffect, useRef } from "react";
import styles from "./whyChooseSection.module.css";
import Image from "next/image";

function AnimationGEN({ cyber, whyChooseData,  }) {
  const divRefs = useRef([]);
  const arrowSvg = [
    <svg
      height="18"
      width="18"
      fill="none"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        height="30"
        id="mask0_3838_12416"
        style={{ maskType: "alpha" }}
        width="30"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <rect height="30" width="30" fill="url(#pattern0_3838_12416)" />
      </mask>
      <g mask="url(#mask0_3838_12416)">
        <rect height="36" width="34.5" fill="#04C988" x="-1.50098" y="-3" />
      </g>
      <defs>
        <pattern
          height="1"
          id="pattern0_3838_12416"
          width="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(0.01)" xlinkHref="#image0_3838_12416" />
        </pattern>
        <image
          height="100"
          id="image0_3838_12416"
          width="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEsklEQVR4nO1dPWtUQRQ9ovEjWMQi2UTRQD5AcCERXDBGLExMIrGRrEkuqGChFiLI21/hD7DW0jJYWFhaCCIiqcXWQkRLO1cG7sMQsrvv7c7HnXn3wCFk2X375px983HnzgygUCgUCoVCoVAoFIpuGAYwDmAWQB3APIAGgCvMBr9W5/eM82cUFnAEwAQLvArgDgDqk+azK3ytCb62ogCGAEwDWAKwNYABvWiufZ2/y3ynYh9qABYBbDo0oRM3uboz91B5mDr+RgATqAPXAJyroivm13hTgAHUxZgxVADHASwIEJwK8lrKvbQZAE0BIlNJNrnxTwZD3GhS5LwK4GjBMh/iLvZt/mv+F4FTAG4JEJMs0ZRlpEeZzdP0CUB7Dz9KeMpqkVZRVGCQaQaXB+E8gO/7zMj5DcBJBMKk44EdBeYWl7GoGTmfhDDDxJC2BYhGjrnNHZWiZhi+8m3GZEXMoD1cLmiG4QvfbUbK1RQdwBaA3wXNaPOA01tvapBobBXMeO3LDBPKXhcgEHlkBuBXCTPeAjjmy5CYQiGUuhkzAgQiNeN/oDDFgR/F+GQgkfgUOTLjg28zxgSIRELN+ALgvu8ZSMmTSyTADPI55jgjQCgSbkbO0z4MkTQHToLNINbKKWoCxKJIzMjptC1ZFCAYRWQGcW/U2VRsiLwpitgMYs2cJONNCxCNIjMj55QLQ5YECEcRmkGctmo9opviXEfmwQxi7awmeE8IEI8iNSOnSZu1hnkBAlLEZhjO2TRkVYCIFLEZxOtTrCGV6dkskBnEGlrBsAAhKXIzcp6wYci4ADEpATOshVFmHYv1EMAzAPeEZId8dngveWLdQKg7urmnAHYB/GUh/gDYAXA3UTMML9gw5KKDG3sM4KdjUVrCzCAePgyMhoMbe+NYnJZAMwwvSc27+upQpJZQM4i1jNaQdh9iSTbDmiEuqqwdB6K1hJthrcpy0ag/6tKot/sQLwYzrDXqdeGDtUzIoM9bt9flwHBQMbOIzLA2MHQdOulX1CwyM6yFTnwEF8u2AbuRtBlOgou+wu9ZyV98TE8G8UoBa1jxdNOZZVOkmGE9i9HnFG5myRRJZlifwvWd5JANaIo0M6wnOYRIA8r6NEWiGdbTgMDJXr4LkkXYtfWSKBcylTQraIpUM5ylkoZMts56mCLZDGfJ1qGXI2QAfnRYYClh0Od9OYKEBTsPALwE8B7AOwDPBQjei84301wWUEiKhM6XtIEXMoYuKEXCTjvPWceagMKScJp8aG8YFVBgEk7vGzFXbRcgKsHLCACz+cyGgMKTMDZtznuURcoLQUnSqLwMtOqCn0FgUVRxiz/qsOu1mMNhRhJaZUV9thu9tiD3jipuE0tcZquTTzZRtY2Ut2M4kWemgluNi8fZxDeq2TpgM37xqOJxFeIxktiBLusSe1NlMZTI4HEhtRNCpyOtwjYkhENcIbZj8xb5npPHmPBJrlWe86kcRgMl4FGXOXCzL3HlUeNI6WbAw4krcdRqPz2yKX5qfBzfPSUpQhvLAfdzvD5lkGhyk6ujOQ4EHg5duFQwzBGAWV7ROsfr6BeYDX7tAr+nFnI6VaFQKBQKhUKhUCgQAf4B6mw/oZlF0aYAAAAASUVORK5CYII="
        />
      </defs>
    </svg>,
  ];
  useEffect(() => {
    const options = {
      threshold: 0.7, // Trigger when 70% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.highlight); // Add highlight class when in view
        } else {
          entry.target.classList.remove(styles.highlight); // Remove highlight class when out of view
        }
      });
    }, options);

    divRefs.current.forEach((div) => {
      if (div) observer.observe(div); // Observe each div
    });

    return () => {
      divRefs.current.forEach((div) => {
        if (div) observer.unobserve(div);
      });
    };
  }, []);

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.containerMain}>
        <div className={styles.header}>
          <h2>
            Why choose <span>Learnbay?</span>
          </h2>
        </div>
        <div className={`${styles.columnDiv} ${styles.columnDivDSA}`}>
          {whyChooseData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (divRefs.current[index] = el)} // Assigning the ref to each div
              className={`${styles.divContainer} ${styles.divContainerANI}`}
            >
              <div className={styles.svglogo}>
                <Image
                  src={item.image}
                  alt="Learnbay"
                  quality={100}
                  loading="lazy"
                  width={70}
                  height={70}
                />
                {index <= whyChooseData.length - 2 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height={
                      index === whyChooseData.length - 3
                        ? 250
                        : index === whyChooseData.length - 2
                        ? 220
                        : 250
                    }
                    viewBox={`0 0 24 ${
                      index === whyChooseData.length - 3
                        ? 500
                        : index === whyChooseData.length - 2
                        ? 500
                        : 480
                    }`}
                    fill="none"
                  >
                    <path
                      d="M13.5 1.99756C13.5 1.16913 12.8284 0.497559 12 0.497559C11.1716 0.497559 10.5 1.16913 10.5 1.99756H13.5ZM10.9393 454.058C11.5251 454.644 12.4749 454.644 13.0607 454.058L22.6066 444.512C23.1924 443.927 23.1924 442.977 22.6066 442.391C22.0208 441.805 21.0711 441.805 20.4853 442.391L12 450.876L3.51472 442.391C2.92893 441.805 1.97919 441.805 1.3934 442.391C0.807611 442.977 0.807611 443.927 1.3934 444.512L10.9393 454.058ZM10.5 1.99756L10.5 452.998H13.5L13.5 1.99756H10.5Z"
                      fill="url(#paint0_linear_2844_6338)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2844_6338"
                        x1="12.5"
                        y1="2.01352"
                        x2="5.43854"
                        y2="452.895"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6E7D87" stopOpacity="0" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>

              <div className={styles.Contents}>
                <h5>{item.title}</h5>
                <p className={styles.pTag}>{item.description}</p>

                {/* Add image for the first item only */}
                {index === 1 && (
                  <div className={styles.blueDiv}>
                    <p>Real Projects</p>
                    <hr className={styles.hr} />
                    <p>Real Experience</p>
                  </div>
                )}

                {/* Conditionally rendering for the first section */}
                {index === 0 ? (
                  <div style={{ marginTop: "20px" }}>
                    {cyber ? (
                      
                      <Image
                        src={item.logos}
                        width={item.logosWidth}
                        height={item.logosHeight}
                        // width={240}
                        // height={50}
                        loading="lazy"
                        alt="IIT"
                      />

                     
                    ) : (
                      <Image
                        src={item.logos}
                        width={item.logosWidth}
                        height={item.logosHeight}
                        loading="lazy"
                        alt="IIT"
                      />
                    )}
                  </div>
                ) : null}

                {/* Add four div points for the last item */}
                {index === whyChooseData.length - 1 && (
                  <div className={styles.lastItemPoints}>
                    <div className={styles.point}>
                      {arrowSvg} Placement Support
                    </div>
                    <div className={styles.point}>{arrowSvg} Mock Interviews</div>
                    <div className={styles.point}>{arrowSvg} Resume BuildUp</div>
                    <div className={styles.point}>{arrowSvg} Ultimate Interview calls</div>
                  </div>
                )}

                {item.note && (
                  <span className={styles.noteP}>
                    <span className={styles.orgText}>*Important Note:</span>{" "}
                    {item.note}
                  </span>
                )}
              </div>

              <div className={styles.downArrow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnimationGEN;
