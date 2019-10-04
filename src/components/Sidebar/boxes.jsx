import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Assets
import { Colors, Media, MediaHeight } from "../../Assets/Variables/";
import { Sprite, Sprite_Small } from "../../Assets/MainSite/";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import SidebarContext from "../../Context/Sidebar";

const Boxes = ({ IconLocation, Path, altText, Arrow }) => {
  const { width } = useWindowDimensions();
  const { SidebarOpen, setSidebar } = React.useContext(SidebarContext);

  return (
    <>
      {Path ? (
        <Container>
          <Clickable
            to={`${Path}`}
            onClick={() => (SidebarOpen ? setSidebar(!SidebarOpen) : null)}
          >
            <SingleIcon
              role="img"
              aria-label={`${altText}`}
              backgroundpos={IconLocation}
              iconSize={width > 700 ? "40px" : "25px"}
              drasl={Arrow ? Arrow : width > 700 ? Sprite : Sprite_Small}
            />
          </Clickable>
        </Container>
      ) : (
        <Container
          onClick={() => setSidebar(!SidebarOpen)}
          expand={SidebarOpen}
        >
          <SingleIcon
            role="img"
            aria-label="informationIcon"
            backgroundpos={IconLocation}
            drasl={width > 700 ? Sprite : Sprite_Small}
            iconSize={width > 700 ? "40px" : "25px"}
          />
        </Container>
      )}
    </>
  );
};

export default Boxes;

const Container = styled.button`
  display: flex;
  min-height: 60px;
  min-width: 60px;
  margin: 4px;
  background-color: ${Colors.BLACK};
  position: relative;
  justify-content: center;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.23, 0.56, 0.54, 1.01);
  z-index: 5;
  padding: 0px;
  margin: ${props => (props.expand ? "105px 4px" : "4px")};
  border-left: 2px solid ${Colors.GOLD};
  border: 2px solid transparent;

  ${Media.tablet`
    margin: 0px auto;
    max-height: 50px;
    width: 50px;
  `}

  ${Media.phone`
    max-height: 30px;
    width:30px;
  `}

  ${MediaHeight.phone`
    margin: 0px auto;
  `};

  &:hover {
    cursor: pointer;
    outline: none;
    background-color: ${Colors.GOLD};
    border: 2px solid ${Colors.BLACK};
    width: 50px;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;

const Clickable = styled(Link)`
  display: flex;
  height: 56px;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const SingleIcon = styled.div`
  height: ${props => props.iconSize};
  width: ${props => props.iconSize};
  margin: 0px;
  background-image: url(${props => props.drasl});
  background-repeat: no-repeat;
  background-position-x: 0px;
  background-position-y: ${props => props.backgroundpos};
  overflow: hidden;

  ${Container}:hover & {
    filter: invert(50%) sepia(0%) saturate(80%) hue-rotate(143deg)
      brightness(20%) contrast(71%);
  }
`;
