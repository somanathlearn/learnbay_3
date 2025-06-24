import styles from "../../../styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";

const MapCopy = ({ PuneMap, BangaloreMap }) => {
  const [mapSrc, setMapSrc] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return; // If ref is not available, do nothing

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (PuneMap) {
            setMapSrc(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.248632568085!2d73.92150099999999!3d18.562826200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10e9fa6c91f%3A0x55305f18e1f03525!2sLearnbay%20-%20Data%20Science%20Training%20Institute%20in%20Pune!5e0!3m2!1sen!2sin!4v1709016463301!5m2!1sen!2sin"
            );
          } else if (BangaloreMap) {
            setMapSrc(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.936546640914!2d77.63858847401396!3d12.911799816188676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b203864921%3A0xcd2b3d47edc34b69!2sLearnbay!5e0!3m2!1sen!2sin!4v1681469062178!5m2!1sen!2sin"
            );
          }
          observer.disconnect(); // Stop observing after map is loaded
        }
      },
      { threshold: 0.1 } // Map will load only when 10% visible in viewport
    );

    observer.observe(mapRef.current);

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [PuneMap, BangaloreMap]);

  return (
    <div className={styles.mapdiv} ref={mapRef}>
      {mapSrc ? (
        <iframe
          className={styles.mapIframe}
          src={mapSrc}
          width="1440"
          height="400"
          loading="lazy"
          title="Location Map"
        ></iframe>
      ) : (
        <p>Loading map...</p> // Placeholder before map loads
      )}
    </div>
  );
};

export default MapCopy;
