import React from "react";
import styled from "styled-components";

// Components
import Card from "./card";
import { Layout, SEO } from "../Reusable/";

// Assets
import { Media } from "../../Assets/Variables/";
import { CottageInfoArray } from "../../Assets/Cottages/";

// Context
import LanguageContext from "../../Context/Language";

const CardContainer = () => {
  const { English } = React.useContext(LanguageContext);
  return (
    <Layout>
      <SEO
        title={`Cottages`}
        keywords={`Cottages, Sumarhús, Summerhouses`}
        description={`
        Do you want to rent a cottage in South Iceland? Just 10 km. drive from Geysir and 18 km from Gullfoss waterfall, this property offers an outdoor pool and modern cottages. Wi-Fi is free in the all cottages and the restaurant. Thingvellir National Park is a 30-minute drive away.   All cottages have full equipped kitchens, a dining area and BBQ patios.`}
      />
      <H1> {English ? "Cottages" : "Sumarbústaðir"} </H1>
      <MapCardContainer>
        {English
          ? CottageInfoArray[0].map((values, i) => (
              <Card {...values} key={`${i}Cottages`} />
            ))
          : CottageInfoArray[1].map((values, i) => (
              <Card {...values} key={`${i}Bustadir`} />
            ))}
      </MapCardContainer>
    </Layout>
  );
};

export default CardContainer;

const H1 = styled.h1`
  font-size: 40px;
  margin: 30px auto;
  ${Media.phone`margin-top: 100px;`}
`;

const MapCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${Media.phone` width: 100%;`}
`;
