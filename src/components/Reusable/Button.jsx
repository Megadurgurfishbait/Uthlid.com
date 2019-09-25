import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Assets
import { Colors } from "../../Assets/Variables/";

// Ef isExternal er True þá notum við Anchor Tag
// Ef isExternal er False þá notum við Link Tag

const ButtonReusable = ({
  toPath,
  background,
  children,
  backgroundcolor,
  isExternal
}) => (
  <>
    {isExternal ? (
      <ButtonAnchor
        background={background}
        href={toPath}
        backgroundcolor={backgroundcolor}
      >
        {children}
        <Span>&nbsp; &nbsp; &#x2192;</Span>
      </ButtonAnchor>
    ) : (
      <Button
        background={background}
        to={toPath}
        backgroundcolor={backgroundcolor}
      >
        {children}
        <Span>&nbsp; &nbsp; &#x2192;</Span>
      </Button>
    )}
  </>
);
export default ButtonReusable;

const Button = styled(Link)`
  background-color: ${props => props.backgroundcolor || "transparent"};
  border: 2px solid
    ${props => (props.background ? `${Colors.GOLD}` : `${Colors.BLACK}`)};
  width: 200px;
  height: 50px;
  color: ${props => (props.background ? `${Colors.GOLD}` : `${Colors.BLACK}`)};
  text-transform: uppercase;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`;

const ButtonAnchor = styled.a`
  background-color: ${props => props.backgroundcolor || "transparent"};
  border: 2px solid
    ${props => (props.background ? `${Colors.GOLD}` : `${Colors.BLACK}`)};
  width: 200px;
  height: 50px;
  color: ${props => (props.background ? `${Colors.GOLD}` : `${Colors.BLACK}`)};
  text-transform: uppercase;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`;

const Span = styled.span`
  transition: 0.7s all ease-out;
  color: inherit;
  opacity: 1;

  ${Button}:hover & {
    transform: translateX(80px);
    opacity: 0;
  }

  ${ButtonAnchor}:hover & {
    transform: translateX(80px);
    opacity: 0;
  }
`;
