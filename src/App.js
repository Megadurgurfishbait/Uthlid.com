import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { TimelineLite, Power3 } from "gsap/TweenMax";
import styled, { createGlobalStyle } from "styled-components";

// Components
import {
  CardContainer,
  SinglePageCottage,
  HorseRentalContainer,
  Golf,
  Container,
  Sidebar,
  Camping,
  Restaurant,
  NoMatch
} from "./components";
import { Colors } from "./Assets/Variables";
import LanguageContext from "./Context/Language.js";
import useLocalStorage from "./Hooks/useLocalStorage";
import {SEO} from './components/Reusable';
// GlobalStyles er frá Styled-Components, er að nota það til að ákveða font fyrir alla síðuna.
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Raleway', serif !important;
    background-color: ${Colors.WHITE}!important;
    height: 100%;
    position: relative;
    overflow-x: hidden;
  }
`;

function mapStyles(styles) {
  return {
    opacity: styles.opacity
  };
}
const App = () => {
  let imgRef = React.useRef(null);
  const [tl] = React.useState(new TimelineLite({ paused: true }));
  const [toggle, setToggle] = React.useState(true);
  const [English, setEnglish] = React.useState(
    useLocalStorage("EnglishLanguage")[0]
  );

  async function toggleTimeline() {
    if (toggle) {
      tl.to(imgRef, 0.1, { height: 2500 })
        .to(imgRef, 0.7, { x: 1920 })
        .to(imgRef, 0.5, { x: 4000, ease: Power3.easeIn })
        .to(imgRef, 0.1, { height: 0 })
        .play();
      setToggle(false);
    }
    tl.pause();
    tl.restart();
  }

  return (
    <>
      <GlobalStyles />
      <AppContainer>
      <SEO
        title={`Front Page`}
        keywords={`Cottages, Horse Rental, Golf, Camping, Restaurant`}
        description={`Úthlíd Cottages has a 9-hole golf course on site. Guided hiking tours and Icelandic horse riding trips can be arranged, as well as day tours to the western and southern part of Iceland.`}
      />
        <LanguageContext.Provider value={{ English, setEnglish }}>
          <Animate
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            mapStyles={mapStyles}
          >
            <Route
              path="/cottages/:id"
              component={WaitingComponent(SinglePageCottage)}
            />
            <Route
              exact={true}
              path="/cottages"
              component={WaitingComponent(CardContainer)}
            />
            <Route
              path="/horserental"
              component={WaitingComponent(HorseRentalContainer)}
            />
            <Route path="/golf" component={WaitingComponent(Golf)} />
            <Route path="/camping" component={WaitingComponent(Camping)} />
            <Route
              path="/restaurant"
              component={WaitingComponent(Restaurant)}
            />
            <Route exact={true} path="/" component={Container} />
            <Route path="/*" component={NoMatch} />
          </Animate>
          <BigScreen
            ref={element => {
              imgRef = element;
            }}
          />

          <Sidebar mahAnimation={toggleTimeline} Position={`left`} />
          <Sidebar Position={`right`} />
        </LanguageContext.Provider>
      </AppContainer>
    </>
  );
};

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default App;

const BigScreen = styled.div`
  position: absolute;
  display: flex;
  width: 2000px;
  height: 0vh;
  top: 0;
  left: -2000px;
  z-index: 5000 !important;
  background: linear-gradient(
    to right,
    rgba(55, 55, 55, 1) -30%,
    rgba(75, 75, 75, 1) 130%
  );
`;

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Animate = styled(AnimatedSwitch)`
  position: relative;

  & > div {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
`;
