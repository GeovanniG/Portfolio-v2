import React, { useRef,useEffect } from 'react';
import { TimelineMax, Power1, TweenLite } from 'gsap/TweenMax';
import styles from './Header.module.css';

const Header = () => {
  const header = useRef(null);
  const hand = useRef(null);
  const paras = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const removeItem = () => TweenLite.to(hand.current, .5, { display: 'none', autoAlpha: 0 });
  const t1 = new TimelineMax({repeat: 5, yoyo: true, onComplete: removeItem});

  useEffect(() => {
    t1 
    .set(hand.current, {display: 'inline-block', autoAlpha: 1})
    .to(hand.current, .25, {rotation: 90})
    .to(hand.current, .25, {rotation: 0, ease: Power1.easeInOut});
    return () => t1.kill();
  }, [t1])


  return (
      <header className={styles.header} ref={header}>
        <main className={styles.main}>
          <p ref={paras[4]} className={styles.introText}>
            Hello<span role="img" aria-label="hand waving hi" ref={hand}>👋</span>,<br/>
            I am <span className={styles.name}>Geo</span>
          </p>

          <section className={styles.jobDesc}>
            <p>A<span className={styles.role}>Software Engineer</span>who specializes in</p>
            <section className={styles.fields}>
              <p ref={paras[0]} className={styles.specialization}>Front-End Development</p>
              <p ref={paras[2]} className={styles.specialization}>React</p>
              <p className={styles.extraSpecText}>and a bit of</p>
              <p ref={paras[1]} className={styles.specialization}>Back-End Development</p>
            </section>
          </section>

        </main>
      </header>
  );
}

export default Header;