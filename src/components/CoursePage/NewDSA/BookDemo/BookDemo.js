import React, { useState, useEffect, useCallback } from "react";
import styles from "./BookDemo.module.css";
import Image from "next/image";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import Button from "@/components/Global/Button/Button";

const BookDemo = ({ interstedInHide, dataScienceCounselling }) => {
  const [popups, setPopups] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [connectorDimensions, setConnectorDimensions] = useState({
    width: 500,
    height: 2,
  });
  const [verticalConnectorDimensions, setVerticalConnectorDimensions] =
    useState({
      width: 5,
      height: 180,
    });

  const popupsShow = useCallback(() => {
    setPopups(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 641px)");

    // Handler function to update `isMobile`
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial state based on media query
    handleMediaQueryChange(mediaQuery);

    // Add event listener for media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      // Clean up event listener
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.matchMedia("(max-width: 761px)").matches) {
        setConnectorDimensions({ width: 300, height: 2 });
      } else if (window.matchMedia("(max-width: 841px)").matches) {
        setConnectorDimensions({ width: 300, height: 2 });
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setConnectorDimensions({ width: 330, height: 2 });
      } else if (window.matchMedia("(max-width: 1181px)").matches) {
        setConnectorDimensions({ width: 350, height: 2 });
      } else if (window.matchMedia("(max-width: 1281px)").matches) {
        setConnectorDimensions({ width: 400, height: 2 });
      } else if (window.matchMedia("(max-width: 1381px)").matches) {
        setConnectorDimensions({ width: 420, height: 2 });
      } else {
        setConnectorDimensions({ width: 470, height: 2 });
      }
    };

    updateDimensions();

    const resizeListener = () => updateDimensions();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    const updateVerticalDimensions = () => {
      if (window.matchMedia("(max-width: 481px)").matches) {
        setVerticalConnectorDimensions({ width: 5, height: 180 });
      } else if (window.matchMedia("(max-width: 361px)").matches) {
        setVerticalConnectorDimensions({ width: 5, height: 140 });
      } else {
        setVerticalConnectorDimensions({ width: 5, height: 180 });
      }
    };

    updateVerticalDimensions();

    const resizeListener = () => updateVerticalDimensions();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <section className={styles.demoContainer}>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Request For Demo Session"
        DSADemoSession={true}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        dataScienceCounselling={dataScienceCounselling}
      />
      <div className="width">
        <div className={styles.contentsWrapper}>
          <div className={styles.leftSection}>
            <h2>Book Your Demo Class Now!</h2>
            <div className={styles.leftSectionDescription}>
              <p>
                The demo session provides an overview of our Data Structures,
                Algorithms, and System Design Program.
              </p>
              <p>It’s an opportunity to understand the :</p>
            </div>
            <div className={styles.demoPointsWrapper}>
              {!isMobile && (
                <div className={styles.horizontalConnectorWrapper}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/HorizontalLineDotted.webp"
                    width={connectorDimensions.width}
                    height={connectorDimensions.height}
                    quality={100}
                    loading="lazy"
                    alt="Horizontal Connector"
                  />
                </div>
              )}
              {isMobile && (
                <div className={styles.verticalConnectorWrapper}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/VertialLineDotted.webp"
                    width={verticalConnectorDimensions.width}
                    height={verticalConnectorDimensions.height}
                    quality={100}
                    loading="lazy"
                  />
                </div>
              )}
              <div className={styles.demoPoint}>
                <div className={styles.PathStepsImg}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/PathSteps.webp"
                    width={40}
                    height={40}
                    alt="Path Steps"
                  />
                </div>
                <div className={styles.pointWrapper}>
                  <p>Career</p>
                  <p>Roadmap</p>
                </div>
              </div>
              <div className={styles.demoPoint}>
                <div className={styles.ClassroomImg}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Classroom.webp"
                    width={40}
                    alt="Classroom"
                    height={40}
                  />
                </div>
                <div className={styles.pointWrapper}>
                  <p>Interact</p>
                  <p>with mentors</p>
                </div>
              </div>
              <div className={styles.demoPoint}>
                <div className={styles.LaptopCodingImg}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/LaptopCoding.webp"
                    width={40}
                    height={40}
                    alt="Laptop Coding"
                  />
                </div>
                <div className={styles.pointWrapper}>
                  <p>Interview</p>
                  <p>Guidance</p>
                </div>
              </div>
            </div>
            {!isMobile && (
              <div onClick={popupsShow}>
                <Button text="Request a Demo Class" greenButton={true} />
              </div>
            )}
          </div>
          <div className={styles.rightSection}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/DSADemoRightImage.webp"
              width={430}
              height={530}
              quality={100}
              alt="Book Demo"
              priority
            />
            {isMobile && (
              <div onClick={popupsShow}>
                <Button text="Request a Demo Class" greenButton={true} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
