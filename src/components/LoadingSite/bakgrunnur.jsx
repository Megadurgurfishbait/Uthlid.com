import React from "react";
import styled from "styled-components";

// Components
import { Button } from "../Reusable/";

// Assets
import { Regular, Small, Smaller } from "../../Assets/MainSite/";
import { Colors, Media, MediaHeight } from "../../Assets/Variables/";
import LanguageContext from "../../Context/Language";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

function Bakgrunnur() {
  const { English } = React.useContext(LanguageContext);
  const { width } = useWindowDimensions();
  return (
    <Container>
      <BackgroundImage backgroundfilter={ width > 700 ? true : false } role="img" aria-label="Picture of Uthlid"/>
      <TextContainer>
        <Column end="true">
          <TitleText> Úthlíð </TitleText>
        </Column>
        <Row>
          <Paragraph>
            {English
              ? `
             In unspoiled Icelandic landscape. Centrally in the 
             Golden Circle, close to Geysir, Gullfoss and Thingvellir.  
             One hour from Reykjavík.
             `
              : `
              Ferðaþjónusta við hálendislínuna. Þingvellir,
              Skálholt, Geysir og Gullfoss í næsta nágrenni
              klukkustundar akstur frá Reykjavík
              `}
          </Paragraph>
        </Row>
        <Column>
          <Button
            toPath="https://property.godo.is/booking.php?propid=12862"
            isExternal
            backgroundcolor={Colors.BLACK}
            background={true}
          >
            {English ? `Book Now` : "Bóka núna"}
          </Button>
        </Column>
      </TextContainer>
    </Container>
  );
}

export default Bakgrunnur;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url(${Regular});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  z-index: 1;
  top: 0;
  filter: ${props => props.backgroundfilter ?   "opacity(35%)" : "opacity(15%)" };
  left: 0;

  ${Media.large`background-image: url(${Small});`}
  ${Media.phone`background-image: url(${Smaller});`}
`;

const TextContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 2;
  flex-direction: column;
  color: ${Colors.BLACK};
`;

const Row = styled.div`
  display: flex;
  height: 25%;
  width: 100%;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  flex-direction: column;
  background-color: ${props => props.color || "transparent"};
  justify-content: ${props => (props.end ? "flex-end" : "flex-start")};
  align-items: center;
  color: ${Colors.GOLD};
`;

const TitleText = styled.h1`
  font-weight: 800;
  font-size: 90px;
  color: ${Colors.BLACK};
  letter-spacing: 15px;
  text-transform: uppercase;
  ${Media.desktop`font-size: 40px;`}
  ${MediaHeight.phone`
  font-size: 25px;
  letter-spacing: 5px;  
  `}
`;
const Paragraph = styled.h4`
  color: inherit;
  font-weight: 800;
  line-height: 2;
  white-space: pre;
  text-align: center;
  font-size: 20px;
  
  ${Media.large`
    width: 90%;
    font-size: 18px;
  `}
  ${Media.tablet`
    font-size: 15px;
    white-space: normal;`}

    ${MediaHeight.phone`
  font-size: 12px;
  line-height: 1.2;
  `}
`;
