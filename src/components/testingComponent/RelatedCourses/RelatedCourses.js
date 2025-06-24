import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import styles from "./RelatedCourses.module.css";
import { useRouter } from "next/router";

import { FaExternalLinkAlt } from "react-icons/fa";

// Optimized RelatedCourses Component
const RelatedCourses = ({ relatedCourses = [] }) => {
  const [visibleCourses, setVisibleCourses] = useState(3);
  const router = useRouter();
  const debounceTimeout = useRef(null);

  // Memoizing related courses to avoid unnecessary recalculations
  const displayedCourses = useMemo(() => relatedCourses.slice(0, visibleCourses), [relatedCourses, visibleCourses]);

  // Debounced navigation (optimized)
  const debouncedNavigation = useCallback(
    (link) => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => {
        router.push(link);
      }, 200);
    },
    [router]
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, []);

  // Toggle visibility of courses (optimized)
  const handleViewMoreToggle = useCallback(() => {
    setVisibleCourses((prev) => (prev < relatedCourses.length ? Math.min(prev + 3, relatedCourses.length) : 3));
  }, [relatedCourses.length]);

  return (
    <section className="width">
    <div className={styles.Container}>
      <div className={styles.sliderWrapper}>
        <h2>Related Courses</h2>
        <div className={styles.coursesContainer}>
          {displayedCourses.map((course, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.courseTitle} title="Visit Course">
                <p
                  onClick={() => debouncedNavigation(course.link)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Go to ${course.title}`}
                >
                  {course.title}
                </p>
                <div className={styles.icon}>
                  <FaExternalLinkAlt color="#0072bc" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {relatedCourses.length > 3 && (
          <div className={styles.viewMoreContainer}>
            <button className={styles.viewMoreButton} onClick={handleViewMoreToggle}>
              {visibleCourses < relatedCourses.length ? "View More" : "View Less"}
            </button>
          </div>
        )}
      </div>
    </div></section>
  );
};

export default React.memo(RelatedCourses);
