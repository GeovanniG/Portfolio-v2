import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import { TweenLite, TimelineLite, Power4 } from 'gsap/TweenMax';

import "./AppRouter.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

// const Nav = lazy(() => import('../components/Nav/Nav'));
// const Footer = lazy(() => import('../components/Footer/Footer'));
const Home = lazy(() => import('../webpages/Home/Home'));
const Works = lazy(() => import('../webpages/Works/Works'));

const AppRouter = () => {
  const nav = useRef(null);
  const container = useRef(null);
  const footer = useRef(null);
  const timeline = new TimelineLite({paused: true})
  const newTimeline = new TimelineLite({paused: true})

  useEffect(() => {
    timeline
    .from(nav.current, 1, {y: -100, autoAlpha: 0, ease: Power4.easeOut})
    .from(container.current, 1, {x: -100, autoAlpha: 0, ease: Power4.easeOut}, '-=.5')
    .from(footer.current, .5, {y: 100, autoAlpha: 0, ease: Power4.easeOut}, '-=.75')
    .play();
  }, [timeline])

  return (
    <Router basename="/">
      <Route render={({ location }) => (
        <TransitionGroup>
          <Transition
            key={location.key}
            timeout={1000}
            mountOnEnter={true}
            unmountOnExit={true}
            onEnter={() => {
              newTimeline
              .from(nav.current, 1, {y: -100, autoAlpha: 0, ease: Power4.easeOut})
              .from(container.current, 1, {x: -500, autoAlpha: 0, ease: Power4.easeOut}, '-=.5')
              .from(footer.current, .5, {y: 100, autoAlpha: 0, ease: Power4.easeOut}, '-=.75')
              .delay(.7)
              .play();
            }}
            onExit={node => {
              TweenLite.set(node, { position: 'absolute', top: 0, width: '100%' })
              TweenLite.to(node, 1, {y: -1000, autoAlpha: 0})
            }}
          >
          <div>
            <Nav ref={nav} />
            <Suspense fallback={<div>Loading ...</div>}>
                <div ref={container}>
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/works" component={Works} />
                    <Route exact path="/about" component={Works} />
                  </Switch>
                  </div>
            </Suspense>
            <Footer ref={footer} />
          </div>
            </Transition>
        </TransitionGroup>
      )}
      />
    </Router>
  )
}

export default AppRouter;