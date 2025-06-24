import React from 'react'
import Image from 'next/image'
import styles from "./NotFound.module.css"
import Button from "../Button/Button"

function NotFound() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.innerCont}>
        <h1>404</h1>
        <p>Oops! looks like a broken link.</p>
        <div className={styles.image}>
        <Image
            src=" https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DISCONNECT.webp"
            width="1987"
            height="127"
            layout="intrinsic" 
            alt="data science course"
          />
          </div>
          <div className={styles.Button}>
        <a href="/">
          
            
          <Button text="Go Back to Home Page" />
        </a>
      </div>
      </div>
    </section>
  )
}

export default NotFound