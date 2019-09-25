import React from "react";
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
  Restaurant
} from "./components";
import { Colors } from "./Assets/Variables";
import LanguageContext from "./Context/Language.js";
import useLocalStorage from "./Hooks/useLocalStorage";
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
        <LanguageContext.Provider value={{ English, setEnglish }}>
          <Sidebar mahAnimation={toggleTimeline} Position={`left`} />
          <Sidebar Position={`right`} />
          <Animate
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            mapStyles={mapStyles}
          >
            <Route path="/cottages/:id" component={SinglePageCottage} />
            <Route exact={true} path="/cottages" component={CardContainer} />
            <Route path="/horserental" component={HorseRentalContainer} />
            <Route path="/golf" component={Golf} />
            <Route path="/camping" component={Camping} />
            <Route path="/restaurant" component={Restaurant} />
            <Route exact={true} path="/" component={Container} />
          </Animate>
          <BigScreen
            ref={element => {
              imgRef = element;
            }}
          />
        </LanguageContext.Provider>
      </AppContainer>
    </>
  );
};

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
