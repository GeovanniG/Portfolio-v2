import React, { useRef, useEffect } from 'react';
import { Power4, TimelineLite } from 'gsap/TweenMax';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import styles from './AnimationContainer.module.css';

const AnimationContainer =  ({ children }) => {
  const nav = useRef(null);
  const container = useRef(null);
  const footer = useRef(null);
  const timeline = new TimelineLite({paused: true})

  useEffect(() => {
    const navEl = nav.current;
    const containerEl = container.current;
    timeline
    .from(navEl, 1, {y: -100, autoAlpha: 0, ease: Power4.easeOut})
    .from(containerEl, 1, {x: -100, autoAlpha: 0, ease: Power4.easeOut}, '-=.5')
    .from(footer.current, .5, {y: 100, autoAlpha: 0, ease: Power4.easeOut}, '-=.75')
    .play();

    return () => {
      console.log('container');
      timeline.play();
      // .set(navEl, {y: 0, autoAlpha: 1})
      // .set(containerEl, {x: 0, autoAlpha: 1})
    }
  }, [timeline])

  return (
    <>
      <Nav ref={nav} />
        <div ref={container} className={styles.container}>
          {children}
        </div>
      <Footer ref={footer} />
    </>
  )
}

export default AnimationContainer;