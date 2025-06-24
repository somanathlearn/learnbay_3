import { Play, Timer, Medal } from "lucide-react";
import styles from "./StepCard.module.css";

export default function StepCard({ number, icon, title, description, color }) {
  const colorVariants = {
    emerald: styles.emerald,
    blue: styles.blue,
    purple: styles.purple,
  };

  const IconComponent = icon === "Play" ? Play : icon === "Timer" ? Timer : Medal;

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${colorVariants[color]}`}>
        <div className={styles.content}>
          <div className={styles.iconContainer}>
            <IconComponent className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <div className={styles.number}>{number}</div>
      </div>
    </div>
  );
}