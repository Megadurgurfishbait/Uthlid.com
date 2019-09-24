import React from "react";
import styled from "styled-components";

// Components
import {Button} from "../Reusable/";

//Assets
import {Colors, Media} from "../../Assets/Variables/";
import LanguageContext from "../../Context/Language";


const Card = ({ Backgroundcolor, Title, Title_IS, Paragraph, Paragraph_IS, Image, Path }) => {
  const {English} = React.useContext(LanguageContext);
  
  
  return (<Container background={Backgroundcolor}>
    <TextSide background={Backgroundcolor}>
      <TitleText>{English ? Title : Title_IS}</TitleText>
      <Description>{English ? Paragraph : Paragraph_IS }</Description>
      <Button background={Backgroundcolor} toPath={`${Path}`}>
        {English ? `Read More` : `Skoða nánar` }
      </Button>
    </TextSide>
    <ImageSide src={Image} />
  </Container>
  )
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
    width: 100%;
    height: 50%;
  `}
`;

const TitleText = styled.h1`
  text-transform: uppercase;
  ${Media.tablet`font-size: 30px;`}
`;
const Description = styled.p`
  line-height: 2;
  width: 50%;

  ${Media.desktop`
    width: 90%;
    line-height: 1.2;
  `}
`;
