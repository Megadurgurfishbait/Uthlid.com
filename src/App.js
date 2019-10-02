import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import styled, { createGlobalStyle } from "styled-components";

// Components
import {
  CardContainer,
  SinglePageCottage,
  HorseRentalContainer,
  Golf,
  Container,
  Camping,
  Restaurant,
  NoMatch
} from "./components";
import SidebarWrapper from "./components/Sidebar/SidebarWrapper";
import { Colors } from "./Assets/Variables";
import LanguageContext from "./Context/Language.js";
import useLocalStorage from "./Hooks/useLocalStorage";
import { SEO } from "./components/Reusable";

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
  const [English, setEnglish] = React.useState(
    useLocalStorage("EnglishLanguage")[0]
  );

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

          <SidebarWrapper />
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
