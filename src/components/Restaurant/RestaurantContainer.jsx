import React from "react";

// Components
import {Header, Layout, TextContainer} from "../Reusable/";
import Menu from "./Menu/Menu";

// Import Assets
import Info from "../../Assets/Restaurant/index";
console.log(Info);
const RestaurantContainer = () => (
  <Layout>
    <Header CoverPhoto={Info.CoverPhoto} />
    <TextContainer {...Info} />
    <Menu />
  </Layout>
);

export default RestaurantContainer;
