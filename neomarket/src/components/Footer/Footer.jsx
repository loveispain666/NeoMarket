import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <span className={styles.logo}>NeoMarket</span>
        </div>
        <div className={styles.footerCenter}>
          <span className={styles.copyright}>
            © 2025 NeoMarket. All rights reserved.
          </span>
        </div>
        <div className={styles.footerRight}>
          <a className={styles.footerLink} href="#">About</a>
          <a className={styles.footerLink} href="#">Contacts</a>
          <a className={styles.footerLink} href="#">Privacy Policy</a>
        </div>
      </div>
    </section>
  )
}

export default Footer