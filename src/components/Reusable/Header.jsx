import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets/Variables";

const Header = ({ CoverPhoto, Border }) => (
  <Container
    Border={Border}
    role="img"
    aria-label="Picture of related product"
    img={CoverPhoto}
  />
);

export default Header;

const Container = styled.div`
  height: 100%;
  min-height: 500px;
  width: 100%;
  display: flex;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 9px 16px -7px rgba(0,0,0,0.35);
  ${props =>
    props.Border ? `border-bottom: 4px solid ${Colors.GOLD}` : null};
`;
