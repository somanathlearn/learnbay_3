import React, { useRef, useEffect, useState } from "react";
import styles from "./ProgramSection.module.css";
import Image from "next/image";
import { Award, Users, Brain } from 'lucide-react';
import ScrollTracker from "./ScrollTracker/ScrollTracker";
import { programCards } from "./programData";

const ProgramSection = () => {
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(0);
  const [showAll, setShowAll] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = [];
  
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) visible.push(index);
          }
        });
  
        if (visible.length > 0) {
          setActiveIndex(visible[0]);
          setVisibleCardsCount(visible.length);
        } else {
          setVisibleCardsCount(0);
        }
      },
      { threshold: 0.5 }
    );
  
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
  
    return () => {
      cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);
  
  const svgone = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 27 27"
      fill="none"
    >
      <path
        d="M25.6653 14.6241C24.7188 19.3569 21.1502 23.8133 16.1429 24.8091C13.7008 25.2954 11.1675 24.9989 8.90366 23.9617C6.63986 22.9245 4.76098 21.1995 3.53457 19.0324C2.30816 16.8653 1.79674 14.3664 2.07312 11.8917C2.3495 9.41702 3.39959 7.09258 5.07388 5.2494C8.50799 1.46695 14.3066 0.425735 19.0394 2.31885"
        stroke="#04C988"
        stroke-width="2.23139"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.57373 12.731L14.3065 17.4638L25.6652 5.15857"
        stroke="#04C988"
        stroke-width="2.23139"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
  ];
  const svgTwo = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 27 27"
      fill="none"
    >
      <path
        d="M25.6653 15.1983C24.7188 19.9311 21.1502 24.3875 16.1429 25.3833C13.7008 25.8696 11.1675 25.5731 8.90366 24.5359C6.63986 23.4987 4.76098 21.7738 3.53457 19.6066C2.30816 17.4395 1.79674 14.9407 2.07312 12.4659C2.3495 9.99124 3.39959 7.6668 5.07388 5.82362C8.50799 2.04117 14.3066 0.999953 19.0394 2.89307"
        stroke="#4F91F0"
        stroke-width="2.23139"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.57373 13.3053L14.3065 18.038L25.6652 5.73279"
        stroke="#4F91F0"
        stroke-width="2.23139"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
  ];
  
  return (
    <div className={styles.ProgramSection}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Project Based Master Certification Program
        </h1>
        
        <p className={styles.subheading}>
          Master in-demand skills through industry certified programs.
        </p>
        
        <div className={styles.badgesContainer}>
          <div className={`${styles.badge} ${styles.orange}`}>
            <Award className={styles.icon} />
            <span className={styles.badgeText}>Top Rated Program</span>
          </div>
          <div className={`${styles.badge} ${styles.blue}`}>
            <Users className={styles.icon} />
            <span className={styles.badgeText}>For Working Professionals</span>
          </div>
          <div className={`${styles.badge} ${styles.purple}`}>
            <Brain className={styles.icon} />
            <span className={styles.badgeText}>Domain Specialisation</span>
          </div>
        </div>
      </div>
      
      <div className={styles.main}>
        <div className={styles.trackerWrapper}>
          <ScrollTracker activeCardIndex={activeIndex} visibleCount={visibleCardsCount} />
        </div>
        
        <div className={styles.group} id="program-scroll-section">
        {(showAll ? programCards : programCards.slice(0, 3)).map((card, index) => (
            <div
              key={card.id}
              className={`${styles.cardMain} ${styles[`${card.theme}Main`]}`}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className={`${styles.top} ${styles[`top${card.theme.charAt(0).toUpperCase() + card.theme.slice(1)}`]}`}>
                <div className={styles.image}>
                  <Image
                    src={card.icon}
                    width={60}
                    height={60}
                    loading="lazy"
                    alt={card.title}
                  />
                </div>
                <div className={styles.title}>
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>

              <div className={styles.bottom}>
                <div className={styles.left}>
                  <div className={styles.whythis}>
                    <p>Why this program</p>
                    <ul className={styles.list}>
                      <li>{svgone} {card.why[0]}</li>
                      <li>{svgTwo} {card.why[1]}</li>
                    </ul>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.firstdive}>
                      <p>MasterTrack Pro Certification</p>
                      <Image
                        src={card.logo}
                        width={200}
                        height={25}
                        loading="lazy"
                        alt="certification logo"
                        className={styles.Imagelogo}
                      />
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.secondive}>
                      <p>Key Skills You'll Master</p>
                      <ul className={`${styles.points} ${styles[`points${card.theme.charAt(0).toUpperCase() + card.theme.slice(1)}`]}`}>
                        {card.keySkills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.note} ${styles[`note${card.theme.charAt(0).toUpperCase() + card.theme.slice(1)}`]}`}>
                    <h6>
                      Program Eligibility : <span>{card.eligibility}</span>
                    </h6>
                  </div>
                </div>

                <div className={styles.right}>
                  <div className={`{styles.cat} ${styles[`dur${card.theme.charAt(0).toUpperCase() + card.theme.slice(1)}`]}`}>
                    <div className={`${styles.dur} ${styles[`dur${card.theme.charAt(0).toUpperCase() + card.theme.slice(1)}`]}`}>
                      <p>Duration: <span>{card.duration}</span></p>
                    </div>
                    <div className={`${styles.level} ${styles[`level${card.theme.charAt(0).toUpperCase() + card.theme.slice(1)}`]}`}>
                      <p>Level: <span>{card.level}</span></p>
                    </div>
                  </div>
                  <div className={styles.buttons}>
                    <button className={`${styles.downloadbtn} ${styles[`downloadbtn${card.theme.charAt(0).toUpperCase() + card.theme.slice(1)}`]}`}>Download Brochure</button>
                    <button className={`${styles.applybtn} ${styles[`applybtn${card.theme.charAt(0).toUpperCase() + card.theme.slice(1)}`]}`}>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {programCards.length > 3 && (
  <div className={styles.viewMoreWrapper}>
    <button 
      className={styles.viewMoreButton}
      onClick={() => setShowAll((prev) => !prev)}
    >
      {showAll ? "View Less" : "View More"}
    </button>
  </div>
)}

    </div>
  );
};

export default ProgramSection;