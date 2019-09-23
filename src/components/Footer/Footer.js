import React from 'react';
// import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = (props, ref) => {
  return (
    <footer ref={ref} className={styles.footer}>
      <div className={styles.footerContainer}>
        <section className={styles.contact}>
          <section className={styles.intro}>
            <p>Always looking for growth opportunities.</p>
            <p>You can reach me at:</p>
          </section>

          <section className={styles.socials}>
            <section className={styles.phone}>
              <p className={styles.socialTitle}>Phone</p>
              <p>+1 (714) 812-7393</p>      
            </section>
        
            <section className={styles.email}>
              <p className={styles.socialTitle}>Email</p>
              <a href="mailto:geog714@gmail.com?Subject=Hello" target="_top" className={styles.link}>geog714@gmail.com</a>
            </section>

            <section className={styles.location}>
              <p className={styles.socialTitle}>Location</p>
              <p>Anaheim, CA, USA</p>
            </section>

            <section className={styles.media}>
              <p className={styles.socialTitle}>Media</p>
              <a href="https://github.com/GeovanniG/" className={styles.link}>Git</a>
            </section>
          </section>
        </section>

        <section className={styles.about}>
          <p className={styles.aboutTitle}>Geez</p>
          <p>A portfolio built with infamous react, some gsap animation magic, and
          beautiful imagery from unsplash.</p>
        </section>
      </div>
    </footer>
  )
}

export default React.forwardRef(Footer);