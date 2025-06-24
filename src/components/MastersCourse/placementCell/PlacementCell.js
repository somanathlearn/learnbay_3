import React from 'react'
import styles from "./PlacementCell.module.css"

function PlacementCell() {
  return (
    <section className={styles.container}>
      <p className={styles.head}>Dedicated Placement Cell</p>
      <p className={styles.bot}>Job roles & companies you can target</p>
    </section>
  )
}

export default PlacementCell