import React from "react";
import styled from "styled-components";

// Components
import MenuCard from "./MenuCard";
import { Layout } from "../../Reusable/";

// Assets
import MenuInfo from "../../../Assets/Restaurant/MenuInfo";
import { Colors, Media } from "../../../Assets/Variables/";

function Menu() {
  return (
    <Layout>
      <Container>
        {Object.entries(MenuInfo).map((values, index) => {
          return (
            <FoodType key={`${index}FoodType`}>
              <TitleText>{values[0]}</TitleText>
              {values[1].map((v,i) => {
                return <MenuCard {...v} key={`${i}FoodItems`}/>;
              })}
            </FoodType>
          );
        })}
      </Container>
    </Layout>
  );
}
export default Menu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  ${Media.phone`width: 90%;`}
`;

const FoodType = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TitleText = styled.h1`
  height: 50px;
  width: 100%;
  display: flex;
  margin: 20px auto;
  color: ${Colors.BLACK};
  font-size: 2rem;
`;
