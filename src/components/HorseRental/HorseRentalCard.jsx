import React from "react";
import styled from "styled-components";

// Assets
import { Media, Colors } from "../../Assets/Variables/";

//Hver túr fær sitt eigið card.

const HorseRentalCard = ({ Title, Price, Info, BackgroundImg }) => (
  <Container CardImage={BackgroundImg}>
    <InformationContainer>
      <TitleInfo>
        <CardTitle>{Title}</CardTitle>
        <CardPrice>€{Price}</CardPrice>
      </TitleInfo>
      <TextInformation>{Info}</TextInformation>
    </InformationContainer>
    <BackgroundOpacity />
  </Container>
);
export default HorseRentalCard;
const Container = styled.div`
  height: 300px;
  width: 350px;
  display: flex;
  background-color: white;
  border-radius: 15px;
  background-image: url(${props => props.CardImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${Colors.GOLD};
  position: relative;
  overflow: hidden;
  z-index: 50;
  margin: 20px;
  ${Media.desktop`width: 80%;`}
`;

const BackgroundOpacity = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(55, 55, 55, 0.7);
  z-index: 1;
  transition: all 1s ease;
  ${Container}:hover & {
    background-color: rgba(55, 55, 55, 0.9);
  }
  ${Media.tablet`background-color: rgba(55, 55, 55, 0.9);`}
`;

const CardTitle = styled.h4`
  text-transform: uppercase;
  letter-spacing: -1px;
  font-weight: 800;
`;

const CardPrice = styled.h5`
  font-weight: 800;
`;

const TextInformation = styled.p`
  font-weight: 500;
  font-size: 18px;
  z-index: 2;
  
  ${Media.phone`
  font-size: 14px;
  
`}
`;

const TitleInfo = styled.div`
  z-index: 2;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
  padding-bottom: 0px;
  justify-content: space-evenly;
  height: 100%;
  transition: all 1s ease;
  margin-top: 150px;
  ${Container}:hover & {
    margin-top: 0px;
  }
  ${Media.tablet`
    margin-top: 0px;
    padding: 0px 10px;
    justify-content: space-evenly;
  `}
`;
