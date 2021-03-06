import React from "react";
import styled from "styled-components";

// Components
import ContactInfo from "./ContactInfo";
import Map from "./Map";
import Facebook from "./Facebook";
import LanguageContext from "../../../Context/Language";
import SidebarContext from '../../../Context/Sidebar';
// Assets
import { Colors, Media, MediaHeight } from "../../../Assets/Variables/";
const RightSidebar = () => {
  const { English } = React.useContext(LanguageContext);
  const {SidebarOpen } = React.useContext(SidebarContext);
  return (
    <Container ShowRightBar={SidebarOpen}>
      <Row smaller>
        <Facebook English={English} />
      </Row>
      <Break />
      <Row >
        <Map />
      </Row>
      <Break />
      <Row >
        <ContactInfo English={English} />
      </Row>
    </Container>
  );
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
    justify-content: space-between;
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
    max-height: 30%;
    overflow: none;
    margin: 8px auto;
  `}
  ${MediaHeight.phone`max-height: ${props =>
    props.smaller ? "20%" : "40%"};`};


${Media.phone`
    margin: 10px auto;

    &:last-child {
      margin-bottom: 60px;
    }
  `}

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
