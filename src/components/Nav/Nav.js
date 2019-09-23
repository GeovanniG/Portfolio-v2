import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TimelineLite } from 'gsap/TweenMax';

import styles from  './Nav.module.css';

const Nav = (props, ref) => {
  const dropdown = useRef(null);
  const container = useRef(null);
  // const nav = useRef(null);
  const navTween = new TimelineLite({ paused: true });

  // Must add animations after component is mounted to avoid referencing null
  useEffect(() => {
    navTween
    .to(container.current, 0.25, {height: '100vh', zIndex: 2})
    .set(container.current, {position: 'fixed'})
    // .fromTo(dropdown.current, 0.25, {display: 'none', y: 100}, {display: 'flex', y: 0}, '-=.25');
    .to(dropdown.current, 0.25, {display: 'flex', y: 0}, '-=.25');

    // Make sure to reset dropdown on unmount,
    // this prevents frozen/laggy animations
    return () => navTween.reverse();
  }, [navTween]);
  
  const showMenu = () => {
    if (navTween.progress() === 0) {
      navTween.play();
    } else {
      navTween.reverse();
    }
  }

  return (
    <div className={styles.container} ref={container}>
    <nav className={styles.nav} ref={ref}>
      <NavLink to="/" className={styles.navLink}>Geez</NavLink>
      <div className={styles.navRight}>
        <div 
          className={styles.navIcon}
          onClick={showMenu}
        >
          Icon
        </div>
        <div className={styles.navRightLinks} ref={dropdown}>
          <NavLink to="/about" className={styles.navLink}>About</NavLink>
          <NavLink to="/works" className={styles.navLink}>Works</NavLink>
          {/* <NavLink to="/" className={styles.navLink}>Contact</NavLink> */}
        </div>
      </div>
    </nav>
    </div>
  )
}

// export default Nav;
export default React.forwardRef(Nav);