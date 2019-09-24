import React from "react";
import styled from "styled-components";

// Components
import ContactInfo from "./ContactInfo";
import Map from "./Map";
import Facebook from "./Facebook";
import LanguageContext from "../../../Context/Language";
// Assets
import { Colors, Media, MediaHeight } from "../../../Assets/Variables/";
const RightSidebar = ({ ShowRightBar }) => {
  
  const {English} = React.useContext(LanguageContext);
  
  return (
    <Container ShowRightBar={ShowRightBar}>
    <Row smaller>
      <Facebook English={English} />
    </Row>
    <Break />
    <Row smaller>
      <ContactInfo English={English} />
    </Row>
    <Break />
    <Row>
      <Map />
    </Row>
  </Container>
  )
};

export default RightSidebar;

const Container = styled.div`
  display: flex;
  width: 550px;
  height: 100vh;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  top: 0;
  transition: 0.4s all ease-out;
  right: ${props => (props.ShowRightBar ? `0px` : `-500px`)};
  background-color: ${Colors.BLACK};

  ${Media.tablet`
    width: 92vw;
    right: ${props => (props.ShowRightBar ? `0px` : `-90vw`)};
  `}

  ${Media.phone`
    height: 90vh;
    top: ${props => (props.ShowRightBar ? `calc(-100vh + 136px)` : `0px`)};
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100vw!important;
  `}
`;

const Row = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${Media.tablet`
    max-height: ${props => (props.smaller ? "20%" : "50%")};
    overflow: none;
    margin: 8px auto;
  `}
  ${MediaHeight.phone`max-height: ${props =>
    props.smaller ? "20%" : "50%"};`};
  ${Media.phone` margin: 0px auto;`}
`;

const Break = styled.div`
  display: flex;
  margin: 0px auto;
  height: 2.5px;
  background-color: ${Colors.GOLD};
  width: 40%;

  ${Media.tablet`display: none;`}
  ${MediaHeight.phone`display: none !important;`};
`;
