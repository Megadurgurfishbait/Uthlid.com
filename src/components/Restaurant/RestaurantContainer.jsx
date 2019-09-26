import React from "react";

// Components
import { Header, Layout, TextContainer } from "../Reusable/";
import Menu from "./Menu/Menu";
import getWindowDimensions from "../../Hooks/useWindowDimensions";
// Import Assets
import Info from "../../Assets/Restaurant/index";
const RestaurantContainer = () => {
  const [drasl] = React.useState(getWindowDimensions());
  return (
    <Layout>
      <Header
        CoverPhoto={
          drasl.width > 700 ? Info.CoverPhoto : Info.CoverPhoto_Mobile
        }
      />
      <TextContainer Camping={true} {...Info} />
      <Menu />
    </Layout>
  );
};

export default RestaurantContainer;
