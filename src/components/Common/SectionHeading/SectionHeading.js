import React from "react";
import styles from "./SectionHeading.module.css";

const SectionHeading = ({
  badge,
  title,
  subtitle,
  description,
  variant = "default",
  align = "center",
  gradient = false,
  highlightWords = [],
  className = "",
  badgeColor = "blue",
}) => {
  const renderTitle = () => {
    if (!highlightWords || highlightWords.length === 0) {
      return title;
    }

    let processedParts = [title];

    highlightWords.forEach((highlightConfig, i) => {
      const phraseToHighlight =
        typeof highlightConfig === "string"
          ? highlightConfig
          : highlightConfig.text;
      if (!phraseToHighlight) return;

      const color =
        typeof highlightConfig === "string"
          ? "blue"
          : highlightConfig.color || "blue";
      const newParts = [];

      processedParts.forEach((part, j) => {
        if (typeof part === "string") {
          const splitByPhrase = part.split(phraseToHighlight);
          splitByPhrase.forEach((text, k) => {
            if (text) newParts.push(text);
            if (k < splitByPhrase.length - 1) {
              newParts.push(
                <span
                  key={`${i}-${j}-${k}`}
                  className={`${styles.highlightText} ${
                    styles[
                      `highlight${
                        color.charAt(0).toUpperCase() +
                        color.slice(1).replace("-", "")
                      }`
                    ]
                  }`}
                >
                  {phraseToHighlight}
                </span>
              );
            }
          });
        } else {
          newParts.push(part); // It's already a React element
        }
      });
      processedParts = newParts;
    });

    return processedParts;
  };

  const getHeadingClasses = () => {
    return [
      styles.heading,
      styles[variant],
      styles[align],
      gradient ? styles.gradient : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");
  };

  const getBadgeClasses = () => {
    return [
      styles.badge,
      styles[
        `badge${badgeColor.charAt(0).toUpperCase() + badgeColor.slice(1)}`
      ],
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <div className={`${styles.container} ${styles[align]}`}>
      {badge && <div className={getBadgeClasses()}>{badge}</div>}

      {title && <h2 className={getHeadingClasses()}>{renderTitle()}</h2>}

      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}

      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default SectionHeading;
