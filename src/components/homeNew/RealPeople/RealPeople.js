// Final RealPeople.js using a single SVG to connect PROJECTS -> CARDS -> HIRED
import React from 'react';
import styles from './RealPeople.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import realPeopleData from './realPeopleData';

const RealPeople = () => {
  return (
    <div className={styles.RealPeople}>
      <div className={styles.Head}>
        <h2>
          <span>Real People, Real </span>
          <span className={styles.highlight}>Transformations</span>
        </h2>
        <p>
          See how our learners transformed their careers through hands-on
          projects and expert mentorship
        </p>
      </div>

      <div className={styles.container}>
        {/* LEFT SIDE RATINGS */}
        <div className={styles.left}>
          {[
            {
              src: 'google_icon.webp',
              name: 'Google',
              rating: '⭐ 4.8',
              review: 'Verified Reviews',
            },
            {
              src: 'su.webp',
              name: 'SwitchUp',
              rating: '⭐ 4.5',
              review: 'Top Bootcamp Platform',
            },
            {
              src: 'cr.webp',
              name: 'CourseReport',
              rating: '• Excellent',
              review: 'Top Bootcamp Platform',
            },
          ].map((item, idx) => (
            <div className={styles.box} key={idx}>
              <Image
                src={`https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/${item.src}`}
                alt={item.name}
                width={60}
                height={60}
              />
              <div>
                <strong>{item.name}</strong>
                <div className={styles.rating}>
                  <span>{item.rating}</span>
                  <p>{item.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className={styles.ryt}>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            loop={false}
            className={styles.sliderBox}
          >
            {realPeopleData.map((person) => (
              <SwiperSlide key={person.id}>
                <div className={styles.successBox}>
                  <p className={styles.tag}>#Success Story</p>
                  <div className={styles.grdiDiv}>
                    {/* Left Column: Person Info */}
                    <div className={styles.dataimge}>
                      <Image
                        className={styles.avatar}
                        src={person.avatar}
                        alt={person.name}
                        width={280}
                        height={220}
                      />
                      <h3>
                        <strong>{person.name}</strong> {person.surname}
                      </h3>
                      <blockquote>{person.quote}</blockquote>
                    </div>

                    {/* Right Column with SVG Connector */}
                    <div className={styles.timelineColumn}>
                      <div className={styles.svgArrow}>
                      <svg height="190" width="38" fill="none" viewBox="0 0 38 300" xmlns="http://www.w3.org/2000/svg">

  <line stroke="#C5C5C5" x1="11" x2="37" y1="0.5" y2="0.5" />


  <line x1="12" y1="0.5" x2="12" y2="298" stroke="#C5C5C5" strokeDasharray="4 4" />


  <circle cx="12" cy="0.5" r="4" fill="#0383FF" />
  <circle cx="12" cy="299.5" r="4" fill="#0383FF" />


  <path d="M12 151L22.3923 133H1.6077L12 151Z" fill="#0383FF" />


  <line stroke="#C5C5C5" x1="12" x2="38" y1="299.5" y2="299.5" />
</svg>

                      </div>

                      <span className={styles.projectTag}>PROJECTS BUILT</span>

                      <div className={styles.cardMain}>
                        <div className={styles.cards}>
                          {person.projects.map((project, index) => (
                            <div className={styles.card} key={index}>
                              <strong>{project.title}</strong>
                              <p>{project.tag}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={styles.hiredBox}>
                        <span className={styles.hired}>HIRED</span>
                        <div className={styles.company}>
                          <Image
                            src={person.company.logo}
                            alt={person.company.name}
                            width={80}
                            height={80}
                          />
                          <div>
                            <strong>{person.company.name}</strong>
                            <p>{person.company.role}</p>
                            <span className={styles.hike}>{person.company.hike}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RealPeople;
