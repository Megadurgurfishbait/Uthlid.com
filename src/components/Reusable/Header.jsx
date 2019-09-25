import React from "react";
import styled from "styled-components";

const Header = ({ CoverPhoto }) => <Container role="img" aria-label="Picture of related product" img={CoverPhoto} />;

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
`;
