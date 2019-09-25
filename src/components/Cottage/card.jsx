import React from "react";
import styled from "styled-components";

// Components
import LargeIcons from "./LargeIcons";
import SmallIcon from "./SmallIcon";
import { Button } from "../Reusable/";

// Assets
import { Colors, Media } from "../../Assets/Variables/";
import LanguageContext from '../../Context/Language';


const Card = ( { CoverPhoto_small, Title, BlackbarInfo, SmallIcons, URL }) => {
  const {English} = React.useContext(LanguageContext);

  return (
  <Container>
    <Image alt="Cover photos of cottages" src={CoverPhoto_small} />
    <TitleText>{Title}</TitleText>
    <Line />
    <LargeIcons IconArray={BlackbarInfo} />
    <SmallIcon IconArray={SmallIcons} />
    <Button
      toPath={`/cottages/${URL}`}
      background={"true"}
      backgroundcolor={`${Colors.BLACK}`}
    >
      {English ? `See More ` : `Skoða nánar`}
    </Button>
  </Container>)
};

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Colors.WHITE} !important;
  height: 700px;
  width: 500px;
  overflow: hidden;
  margin: 30px auto;
  color: ${Colors.GOLD};
  align-items: center;
  padding-bottom: 10px;

  ${Media.tablet`width:400px;`}
  ${Media.phone`width: 95%;`}
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
`;

const Line = styled.div`
  height: 1px;
  width: 70%;
  background-color: ${Colors.LIGHTGOLD};
  display: flex;
  margin: 0px auto;
`;

const TitleText = styled.h1`
  font-size: 30px;
  margin: 0px;
  padding: 0px;
  color: #373737;
  font-weight: 200;

  ${Media.tablet`font-size: 25px;`}
  ${Media.phone`font-size: 20px;`}
`;
