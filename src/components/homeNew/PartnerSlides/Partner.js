import { useEffect } from "react";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import styles from "./PartnersSlider.module.css";

// SVG Logos for partners matching the screenshot
const ECCouncilLogo = () => (
  <svg viewBox="0 0 180 80" className={styles.logo}>
    <circle fill="#333333" cx="25" cy="40" r="18" />
    <text
      x="30"
      y="44"
      fill="white"
      fontSize="12"
      fontWeight="bold"
      fontFamily="Inter"
      textAnchor="middle"
    >
      EC
    </text>
    <text
      x="55"
      y="42"
      fill="#333333"
      fontSize="14"
      fontWeight="600"
      fontFamily="Inter"
    >
      EC-Council
    </text>
    <text x="55" y="52" fill="#666666" fontSize="10" fontFamily="Inter">
      Certified Ethical Hacker
    </text>
  </svg>
);

const BlueDiveLogo = () => (
  <svg viewBox="0 0 200 80" className={styles.logo}>
    <text x="20" y="30" fill="#666666" fontSize="9" fontFamily="Inter">
      In collaboration with
    </text>
    <circle fill="#0066cc" cx="25" cy="50" r="8" />
    <text
      x="30"
      y="53"
      fill="white"
      fontSize="8"
      fontWeight="bold"
      fontFamily="Inter"
      textAnchor="middle"
    >
      BD
    </text>
    <text
      x="45"
      y="52"
      fill="#0066cc"
      fontSize="12"
      fontWeight="600"
      fontFamily="Inter"
    >
      Blue Dive Systems
    </text>
  </svg>
);

const CEHLogo = () => (
  <svg viewBox="0 0 120 80" className={styles.logo}>
    <text
      x="60"
      y="35"
      fill="#333333"
      fontSize="24"
      fontWeight="bold"
      fontFamily="Inter"
      textAnchor="middle"
    >
      CEH
    </text>
    <text
      x="60"
      y="50"
      fill="#666666"
      fontSize="10"
      fontFamily="Inter"
      textAnchor="middle"
    >
      Certified Ethical Hacker
    </text>
  </svg>
);

const BlueDiveITLogo = () => (
  <svg viewBox="0 0 200 80" className={styles.logo}>
    <circle fill="#0066cc" cx="25" cy="40" r="12" />
    <text
      x="30"
      y="44"
      fill="white"
      fontSize="10"
      fontWeight="bold"
      fontFamily="Inter"
      textAnchor="middle"
    >
      BD
    </text>
    <text
      x="45"
      y="38"
      fill="#0066cc"
      fontSize="12"
      fontWeight="600"
      fontFamily="Inter"
    >
      Blue Dive Systems
    </text>
    <text x="45" y="48" fill="#666666" fontSize="10" fontFamily="Inter">
      IT Services
    </text>
  </svg>
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 160 80" className={styles.logo}>
    <rect fill="#f25022" x="20" y="25" width="12" height="12" />
    <rect fill="#00a4ef" x="34" y="25" width="12" height="12" />
    <rect fill="#7fba00" x="20" y="39" width="12" height="12" />
    <rect fill="#ffb900" x="34" y="39" width="12" height="12" />
    <text
      x="55"
      y="42"
      fill="#737373"
      fontSize="16"
      fontWeight="300"
      fontFamily="Inter"
    >
      Microsoft
    </text>
  </svg>
);

const IBMLogo = () => (
  <svg viewBox="0 0 120 80" className={styles.logo}>
    <text
      x="60"
      y="42"
      fill="#1f70c1"
      fontSize="22"
      fontWeight="bold"
      fontFamily="Inter"
      textAnchor="middle"
      letterSpacing="4px"
    >
      IBM
    </text>
  </svg>
);

const partners = [
  { name: "EC-Council", logo: <ECCouncilLogo /> },
  { name: "Blue Dive Systems", logo: <BlueDiveLogo /> },
  { name: "CEH", logo: <CEHLogo /> },
  { name: "Blue Dive IT", logo: <BlueDiveITLogo /> },
  { name: "Microsoft", logo: <MicrosoftLogo /> },
  { name: "IBM", logo: <IBMLogo /> },
];

export default function PartnersSlider() {
  useEffect(() => {
    // Add CSS animation to document head
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slide {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <SectionHeading
          title="Trusted by 100+ Academic & Employment Partners"
          variant="section"
          align="center"
          highlightWords={[
            { text: "100+ Academic & Employment", color: "gradient-blue" },
          ]}
        />

        {/* Continuous Slider */}
        <div className={styles.sliderContainer}>
          <div
            className={styles.sliderTrack}
            style={{
              width: `${partners.length * 200}px`,
            }}
          >
            {/* Render partners twice for continuous effect */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className={styles.partnerItem}
              >
                <div className={styles.partnerLogoContainer}>
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
