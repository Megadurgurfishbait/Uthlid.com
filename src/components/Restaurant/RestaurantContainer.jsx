import React from "react";

// Components
import { Header, Layout, TextContainer, SEO } from "../Reusable/";
import Menu from "./Menu/Menu";
import getWindowDimensions from "../../Hooks/useWindowDimensions";
// Import Assets
import Info from "../../Assets/Restaurant/index";
const RestaurantContainer = () => {
  const [drasl] = React.useState(getWindowDimensions());
  return (
    <Layout>
      <SEO
        title={`Réttin Restaurant`}
        keywords={`Restaurant, Pizza, Hamburgers, WiFi, Traditional Icelandic Plate, Salads`}
        description={`The restaurant Réttin is open from 16 – 20pm all days of the year except special holidays. We have a reasonable priced simple food and our guests can either sit inside or take-away to their cottages.`}
      />
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
