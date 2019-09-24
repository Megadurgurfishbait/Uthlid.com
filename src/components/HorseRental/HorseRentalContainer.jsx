import React from "react";
import styled from "styled-components";

// Components
import HorseRentalCard from "./HorseRentalCard";
import { Layout, Header, BlackbarInformation } from "../Reusable";

// Assets
import { Colors, Media } from "../../Assets/Variables/";
import {
  Price,
  Verd,
  HorseBackground,
  HorseRentInformation,
  HestaleigaInformation
} from "../../Assets/HorseRental";

import LanguageContext from "../../Context/Language";
/*
  Horse Rental Container sýnir þær ferðir sem að boðið er upp á.
*/

const HorseRentalContainer = () => {
  const {English} = React.useContext(LanguageContext);

return (
  <Layout>
    <Header CoverPhoto={HorseBackground} />
    <BlackbarInformation horseInformation={true} Price={Price} Verd={Verd} />
    <CardContainer>
      <Row>
        <H1> {English ? "Trips" : "Hestaleiga" } </H1>
        <HorseInformation>
          {/* Fyrir hverja ferð búum við til HorseRentalCard sem er með upplýsingum um hvern túr. */}
          {English
            ? HorseRentInformation.map(values => (
                <HorseRentalCard {...values} />
              ))
            : HestaleigaInformation.map(values => (
                <HorseRentalCard {...values} />
              ))}
        </HorseInformation>
      </Row>
      <FakeContainer />
    </CardContainer>
  </Layout>
)};

export default HorseRentalContainer;

const HorseInformation = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;
  justify-content: space-around;
`;

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: column;
  ${Media.desktop`width: 100vw;`};
`;

const FakeContainer = styled(HorseInformation)`
  width: 40%;
  ${Media.desktop`display: none;`};
`;

const H1 = styled.h1`
  margin: 50px auto;
  color: ${Colors.BLACK};
`;
