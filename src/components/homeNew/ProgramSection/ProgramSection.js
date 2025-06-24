import React, { useState } from "react";
import styles from "./ProgramSection.module.css";
import Image from "next/image";
import {
  Award,
  Users,
  Brain,
  Clock,
  BarChart2,
  CheckCircle2,
} from "lucide-react";
import { programCards } from "./programData";
import ScrollTracker from "./ScrollTracker/ScrollTracker";

const ProgramSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCards = showAll ? programCards : programCards.slice(0, 3);

  return (
    <div className={styles.programSectionWrapper}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Project-Based Master Certification Program
        </h2>
        <p className={styles.subheading}>
          Master in-demand skills through industry-certified programs.
        </p>
        <div className={styles.badgesContainer}>
          <div className={`${styles.badge} ${styles.orange}`}>
            <Award className={styles.icon} />
            <span>Top-Rated Program</span>
          </div>
          <div className={`${styles.badge} ${styles.blue}`}>
            <Users className={styles.icon} />
            <span>For Working Professionals</span>
          </div>
          <div className={`${styles.badge} ${styles.purple}`}>
            <Brain className={styles.icon} />
            <span>Domain Specialization</span>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <ScrollTracker cardCount={displayedCards.length} />
        <div className={styles.cardsContainer} id="program-scroll-section">
          {displayedCards.map((card) => (
            <div
              key={card.id}
              className={`${styles.card} ${styles[card.theme]}`}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardHeader}>
                  <Image
                    src={card.icon}
                    width={60}
                    height={60}
                    alt={`${card.title} icon`}
                    className={styles.cardIcon}
                  />
                  <div className={styles.cardTitleGroup}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.leftPanel}>
                    <div className={styles.section}>
                      <h4 className={styles.sectionTitle}>Why this program</h4>
                      <ul className={styles.whyList}>
                        {card.why.map((reason, i) => (
                          <li key={i}>
                            <CheckCircle2
                              size={16}
                              className={styles.checkIcon}
                            />
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.section}>
                      <h4 className={styles.sectionTitle}>
                        MasterTrack Pro Certification
                      </h4>
                      <Image
                        src={card.logo}
                        width={200}
                        height={25}
                        alt="Certification logos"
                        className={styles.certLogos}
                      />
                    </div>

                    <div className={styles.section}>
                      <h4 className={styles.sectionTitle}>
                        Key Skills You'll Master
                      </h4>
                      <div className={styles.skillsTags}>
                        {card.keySkills.map((skill, i) => (
                          <span key={i} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.rightPanel}>
                    <div className={styles.metaInfo}>
                      <div className={styles.metaItem}>
                        <Clock size={20} />
                        <span>
                          Duration: <strong>{card.duration}</strong>
                        </span>
                      </div>
                      <div className={styles.metaItem}>
                        <BarChart2 size={20} />
                        <span>
                          Level: <strong>{card.level}</strong>
                        </span>
                      </div>
                    </div>
                    <div className={styles.actionButtons}>
                      <a
                        href={card.brochureUrl}
                        className={styles.brochureButton}
                      >
                        Download Brochure
                      </a>
                      <a href="#" className={styles.applyButton}>
                        Apply Now
                      </a>
                    </div>
                  </div>
                  <div className={styles.eligibility}>
                    <span className={styles.eligibilityTitle}>
                      Program Eligibility:
                    </span>{" "}
                    {card.eligibility}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {programCards.length > 3 && (
        <div className={styles.viewMoreContainer}>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className={styles.viewMoreButton}
          >
            {showAll ? "View Less" : "View More Programs"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProgramSection;
