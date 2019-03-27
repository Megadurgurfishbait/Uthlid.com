import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Bakgrunnur from "./components/bakgrunnur";
import "./components/cover.css";
import CardContainer from "./components/Cottage/CardContainer";
import styled, { createGlobalStyle } from "styled-components";
import SinglePageCottage from "./components/SinglePageCottage/SinglePageCottage";
import HorseRentalContainer from "./components/HorseRental/HorseRentalContainer";
import Golf from "./components/Golf/Golf";

// GlobalStyles er frá Styled-Components, er að nota það til að ákveða font fyrir alla síðuna.
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Raleway', serif !important;
    background-color: #F4F4F4!important;
    height: 100%;
  }
`;
class App extends Component {
  render() {
    return (
      <AppContainer>
        <GlobalStyles />
        <NavBar />
        <Switch>
          {/* Nauðsynlegt að hafa path=/ neðst, annars fer React-Router alltaf á fyrstu heimasíðuna */}

          <Route path="/cottages/:id" component={SinglePageCottage} />
          <Route path="/cottages" component={CardContainer} />
          <Route path="/horserental" component={HorseRentalContainer} />
          <Route path="/golf" component={Golf} />
          <Route path="/" component={Bakgrunnur} />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;


const AppContainer = styled.div`
  min-height: 100vh;

`;