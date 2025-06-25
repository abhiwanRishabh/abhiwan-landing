import React from 'react'
import styles from '../styles/Portfolio.module.css'
function LinearBg() {
  return (
    <div className={styles.linearBgContainer}>
      <div className={styles.LeftBlurCircle}></div>
      <div className={styles.eggBlurCircle}></div>
      <div className={styles.RightBlurCircle}></div>
    </div>
  )
}

export default LinearBg
