import React from "react";
import styled from "styled-components";

// Assets
import Add from "../../Assets/Cottages/SVG/add.svg";
import { Media } from "../../Assets/Variables/";
const TextIncludes = ({ Includes }) => (
  <Container>
    {
      Includes === undefined || Includes < 1 ? null : 
    
    Includes.map((values, index) => (
        <StayToGether key={`${index}Included`}>
          <Icon src={Add} />
          <IncludesTextBox>{values}</IncludesTextBox>
        </StayToGether>
      )
    )}
  </Container>
);

export default TextIncludes;

const Container = styled.div`
  display: flex;
  margin: -30px auto 30px auto;
  font-size: 14px;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-between;
  ${Media.desktop`width: 70%;`};
  ${Media.phone`
    font-size: 16px;
    flex-direction: column;
    width: 100%;
    margin: 0px;
  `};
`;
const StayToGether = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 30px;
  width: 250px;
  align-items: center;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin: 0px 15px;
`;

const IncludesTextBox = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  white-space: nowrap;
`;
