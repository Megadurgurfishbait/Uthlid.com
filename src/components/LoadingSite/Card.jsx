import React from "react";
import styled from "styled-components";

// Components
import { Button } from "../Reusable/";

//Assets
import { Colors, Media } from "../../Assets/Variables/";
import LanguageContext from "../../Context/Language";
import getWindowDimensions from "../../Hooks/useWindowDimensions";

const Card = ({
  backgroundcolor,
  Title,
  Title_IS,
  Paragraph,
  Paragraph_IS,
  Image,
  Image_Mobile,
  Path
}) => {
  const { English } = React.useContext(LanguageContext);
  const [drasl] = React.useState(getWindowDimensions());

  return (
    <Container background={backgroundcolor}>
      <TextSide background={backgroundcolor}>
        <TitleText>{English ? Title : Title_IS}</TitleText>
        <Description>{English ? Paragraph : Paragraph_IS}</Description>
        <Button background={backgroundcolor} toPath={`${Path}`}>
          {English ? `Read More` : `Skoða nánar`}
        </Button>
      </TextSide>
      <ImageSide
        alt="Images related to the text"
        src={drasl.width > 700 ? Image : Image_Mobile}
      />
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  height: 450px;
  width: 100%;
  background-color: ${props => (props.background ? Colors.BLACK : "white")};
  color: ${Colors.GOLD};
  overflow: hidden;
  margin-top: 100px;
  flex-direction: ${props => (props.background ? "row" : "row-reverse")};

  ${Media.tablet`
    flex-direction: column-reverse;
    min-height: 500px;
    justify-content: space-between;
    align-items: center;
  `}
`;

const ImageSide = styled.img`
  height: 100%;
  width: 50%;
  ${Media.tablet`
    height: 50%;
    width: 100%;
  `}
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${props => (props.background ? Colors.GOLD : Colors.BLACK)};
  width: 50%;
  ${Media.tablet`
    width: 90%;
    height: 50%;
  `}

  ${Media.tablet`
  font-size: 12px;  
  `}
`;

const TitleText = styled.h1`
  text-transform: uppercase;
  ${Media.tablet`font-size: 30px;`}
  ${Media.tablet`font-size: 20px;`}
`;
const Description = styled.p`
  line-height: 2;
  width: 50%;

  ${Media.desktop`
    width: 90%;
    line-height: 1.2;
  `}

  ${Media.phone`

  line-height: 1.5;
  `}
`;
