import React from "react";
import styled from "styled-components";

// Assets
import { Media } from "../../Assets/Variables/";

// Breidd síðunar svo að hún er jöfn yfir allar undirsíður.
// UseEffect setur síðuna efst upp í hvert skipti sem að það keyrir.
const Layout = ({myColor, children}) => (
  <Container myColor={myColor}>{children}</Container>
);

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 75vw;
  padding-bottom: 30px;
  margin: 0px auto;
  background-color: ${props =>
    props.myColor ? props.myColor : "white!important"};
  ${Media.large`width: calc(100vw - 148px)}`};
  ${Media.phone`
    width: 100vw;
    margin-bottom: 50px;
  `};
`;
