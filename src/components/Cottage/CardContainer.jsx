import React from "react";
import styled from "styled-components";


// Components
import Card from "./card";
import { Layout } from "../Reusable/";

// Assets
import { Media } from "../../Assets/Variables/";
import { CottageInfoArray } from "../../Assets/Cottages/";
import LanguageContext from "../../Context/Language";


const CardContainer = () => {
  const { English } = React.useContext(LanguageContext);
  return (
    <Layout>
      <H1> Cottages </H1>
      <MapCardContainer>
        {English
          ? CottageInfoArray[0].map((values, i) => <Card {...values } key={`${i}Cottages`}  />)
          : CottageInfoArray[1].map((values, i) => <Card {...values } key={`${i}Bustadir`}   />)}
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
