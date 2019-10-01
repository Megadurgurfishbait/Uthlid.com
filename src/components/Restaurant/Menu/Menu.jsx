import React from "react";
import styled from "styled-components";

// Components
import MenuCard from "./MenuCard";
import { Layout } from "../../Reusable/";

// Assets
import MenuInfo from "../../../Assets/Restaurant/MenuInfo";
import { Colors, Media } from "../../../Assets/Variables/";

const Menu = () => (
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

export default Menu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  ${Media.phone`width: 100%;`}
`;

const FoodType = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0px;
`;

const TitleText = styled.h1`
  height: 50px;
  width: 100%;
  display: flex;
  margin: 20px auto;
  color: ${Colors.BLACK};
  font-size: 2rem;
`;
